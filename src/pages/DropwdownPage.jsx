import { useState } from "react";

import { FiChevronDown } from "react-icons/fi";
import Dropdown from '../components/Dropdown';


function DropdownPage() {
    const [isOpen, setIsOpen] = useState(false)
    const [value, setValue] = useState("Select...")

    const list = [
        { label: 'Red', value: "red" },
        { label: 'Blue', value: 'blue' },
        { label: 'Yellow', value: 'yellow' }
    ]

    const handleClick = (label) => {
        setValue(label)
        setIsOpen(!isOpen)
    }

    const renderedList = list.map((item, _index) => {
        return (
            <Dropdown value={item.value} onClick={handleClick} label={item.label} key={item.value}/>
        )
    })

    return (
        <>
            <label htmlFor="list">Select a Color</label>
            <div id='list' onClick={() => setIsOpen(!isOpen)} className="border-solid border-2 border-sky-500 w-fit	flex items-center gap-2 w-20 justify-between">{value} <FiChevronDown /></div>
            {isOpen && renderedList}
        </>
    )
}

export default DropdownPage;
