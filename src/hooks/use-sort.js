import { useState } from 'react';


export default function useSort(tableConfig, tableData) {
    let [sortValue, setSortValue] = useState(null);
    let [sortBy, setSortBy] = useState(null);

    let sortedData = [...tableData];

    const sortColumnLabel = (label) => {
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

    return {
        sortBy,
        sortColumnLabel,
        sortValue,
        sortedData
    }
}
