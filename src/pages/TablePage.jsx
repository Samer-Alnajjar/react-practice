import Table from '../components/Table';

export default function TablePage() {
    const tableConfig = [
        {
            label: "Fruits",
            func: false
        },
        {
            label: "Color",
            func: false
        },
        {
            label: "Score",
            func: true
        }
    ];

    const tableData = [
        {
            fruit: 'Orange',
            color: <div className="w-8 h-8 bg-yellow-200 border-2 border-yellow-200"></div>,
            score: 5
        },
        {
            fruit: 'Apple',
            color: <div className="w-8 h-8 bg-red-400 border-2 border-yellow-600"></div>,
            score: 3
        },
        {
            fruit: 'Banana',
            color: <div className="w-8 h-8 bg-yellow-400 border-2 border-yellow-600"></div>,
            score: 1
        },
        {
            fruit: 'Lime',
            color: <div className="w-8 h-8 bg-green-400 border-2 border-green-600"></div>,
            score: 4
        },
    ]
    return <Table tableConfig={tableConfig} tableData={tableData} />
}
