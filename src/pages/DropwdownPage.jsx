import { useState, useEffect, useRef } from "react";

import { FiChevronDown } from "react-icons/fi";
import Dropdown from '../components/Dropdown';


function DropdownPage() {
    const [isOpen, setIsOpen] = useState(false)
    const [value, setValue] = useState("Select...")
    const dropdownEle = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (!dropdownEle.current) {
                return;
            }

            if (!dropdownEle.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handler, true);

        return () => { document.removeEventListener('click', handler, true) };
    }, [])

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
            <Dropdown value={item.value} onClick={handleClick} label={item.label} key={item.value} />
        )
    })

    return (
        <div>
            <label htmlFor="list">Select a Color</label>
            <div ref={dropdownEle} id='list' onClick={() => setIsOpen(!isOpen)} className="border-solid border-2 border-sky-500 w-fit	flex items-center gap-2 w-20 justify-between hover:cursor-pointer">{value} <FiChevronDown /></div>
            <div>
                {isOpen && renderedList}
            </div>
        </div>
    )
}

export default DropdownPage;
