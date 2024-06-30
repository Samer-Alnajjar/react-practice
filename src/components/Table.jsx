


export default function Table({ tableConfig, tableData }) {

    const renderRows = tableData.map(data => {
        const rows = Object.entries(data).map(prop => <td className="p-4 text-center" key={prop[1]}>{prop[1]}</td>)
        return (
            <tr key={data.label} className="border-b p-4 border-gray-300 flex justify-between">
                {rows}
            </tr>
        )
    });

    return (
        <table className="table-auto border-spacing-2 ">
            <thead >
                <tr className="border-b-2 border-gray-300 flex">
                    {tableConfig}
                </tr>
            </thead>
            <tbody >
                {renderRows}
            </tbody>
        </table>
    )
}
