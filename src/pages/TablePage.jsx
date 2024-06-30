import SortableTable from '../components/SortableTable';

export default function TablePage() {
    const tableConfig = [
        {
            label: "Fruits",
            sorted: (fruit) => fruit.name
        },
        {
            label: "Color",
        },
        {
            label: "Number",
            sorted: (fruit) => fruit.number
        }
    ];

    const tableData = [
        {
            name: 'Orange',
            color: <div className="w-8 h-8 bg-yellow-200 border-2 border-yellow-200"></div>,
            number: 5
        },
        {
            name: 'Apple',
            color: <div className="w-8 h-8 bg-red-400 border-2 border-yellow-600"></div>,
            number: 3
        },
        {
            name: 'Banana',
            color: <div className="w-8 h-8 bg-yellow-400 border-2 border-yellow-600"></div>,
            number: 1
        },
        {
            name: 'Lime',
            color: <div className="w-8 h-8 bg-green-400 border-2 border-green-600"></div>,
            number: 4
        },
    ]
    return <SortableTable tableConfig={tableConfig} tableData={tableData} />
}
