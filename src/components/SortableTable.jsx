import useSort from '../hooks/use-sort';
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";

import Table from './Table';

export default function SortableTable({ tableConfig, tableData }) {
    const { sortBy, sortColumnLabel, sortValue, sortedData } = useSort(tableConfig, tableData)

    let renderedColumns = [...tableConfig];

    renderedColumns = tableConfig.map(column => {
        if (!sortBy && column.sorted) {
            return <th onClick={() => sortColumnLabel(column.label)} className="p-4 pb-2 flex hover:cursor-pointer" key={column.label}>
                <GoChevronUp />
                <GoChevronDown />
                {column.label}
            </th>
        } else if (sortBy === 'asc' && column.sorted && column.label === sortValue) {
            return <th onClick={() => sortColumnLabel(column.label)} className="p-4 pb-2 flex hover:cursor-pointer" key={column.label}>
                <GoChevronUp />
                {column.label}
            </th>
        } else if (sortBy === 'desc' && column.sorted && column.label === sortValue) {
            return <th onClick={() => sortColumnLabel(column.label)} className="p-4 pb-2 flex hover:cursor-pointer" key={column.label}>
                <GoChevronDown />
                {column.label}
            </th>
        }

        if (column.sorted && column.label !== sortValue) {
            return (
                <th onClick={() => sortColumnLabel(column.label)} className="p-4 pb-2 flex hover:cursor-pointer" key={column.label}>
                    <GoChevronUp />
                    <GoChevronDown />
                    {column.label}
                </th>
            )
        }

        return (
            <th className="p-4 pb-2 flex" key={column.label}>
                {column.label}
            </th>
        );
    })

    return (
        <>
            <Table tableConfig={renderedColumns} tableData={sortedData} />
        </>
    )
}
