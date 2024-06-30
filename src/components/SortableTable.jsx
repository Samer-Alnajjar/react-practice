import { useState } from 'react';
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";

import Table from './Table';

export default function SortableTable({ tableConfig, tableData }) {
    let [sortValue, setSortValue] = useState(null);
    let [sortBy, setSortBy] = useState(null);

    let renderedColumns = [...tableConfig];
    let sortedData = [...tableData];

    const handleClick = (label) => {
        if (!sortBy) {
            setSortBy('asc');
            setSortValue(label);
        } else if (sortBy === 'asc' && label === sortValue) {
            setSortBy('desc');
            setSortValue(label);
        } else if (sortBy === 'desc' && label === sortValue) {
            setSortBy(null);
            setSortValue(label);
        } else {
            setSortBy('asc');
            setSortValue(label);
        }
    }

    renderedColumns = tableConfig.map(column => {
        if (!sortBy && column.sorted) {
            return <th onClick={() => handleClick(column.label)} className="p-4 pb-2 flex hover:cursor-pointer" key={column.label}>
                <GoChevronUp />
                <GoChevronDown />
                {column.label}
            </th>
        } else if (sortBy === 'asc' && column.sorted && column.label === sortValue) {
            return <th onClick={() => handleClick(column.label)} className="p-4 pb-2 flex hover:cursor-pointer" key={column.label}>
                <GoChevronUp />
                {column.label}
            </th>
        } else if (sortBy === 'desc' && column.sorted && column.label === sortValue) {
            return <th onClick={() => handleClick(column.label)} className="p-4 pb-2 flex hover:cursor-pointer" key={column.label}>
                <GoChevronDown />
                {column.label}
            </th>
        }

        if (column.sorted && column.label !== sortValue) {
            return (
                <th onClick={() => handleClick(column.label)} className="p-4 pb-2 flex hover:cursor-pointer" key={column.label}>
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

    // Sorting the data
    // Check the states are not null
    // Copy the prop
    // Sort the data
    if (sortBy && sortValue) {
        const { sorted } = tableConfig.find(column => column.label === sortValue);
        sortedData = sortedData.sort(compare)

        function compare(a, b) {
            let valueA = sorted(a);
            let valueB = sorted(b);

            let reverse = sortBy === 'asc' ? 1 : -1;

            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reverse;
            } else {
                return (valueA - valueB) * reverse
            }
        }
    }


    return (
        <>
            <Table tableConfig={renderedColumns} tableData={sortedData} />
        </>
    )
}
