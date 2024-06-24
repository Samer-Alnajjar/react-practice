export default function Table({ tableConfig, tableData }) {
    const renderHeaders = tableConfig.map(header => <th className="p-4 pb-2" key={header.label}>{header.label}</th>);
    const renderRows = tableData.map(data => {
        const row = Object.entries(data).map(prop => <td className="p-4 text-center	" key={prop[1]}>{prop[1]}</td>)
        return (
            <tr key={data.label} className="border-b p-4 border-gray-300 ">
                {row}
            </tr>
        )

    });

    return (
        <table className="table-auto border-spacing-2">
            <thead >
                <tr className="border-b-2 border-gray-300">
                    {renderHeaders}
                </tr>
            </thead>
            <tbody >
                {renderRows}
            </tbody>
        </table>
    )
}
