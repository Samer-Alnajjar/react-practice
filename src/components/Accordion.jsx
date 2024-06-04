import { GoChevronDown, GoChevronUp } from "react-icons/go";

export default function Accordion({ onClick, label, content, index, expandedIndex }) {
    return (
        <>
            <div onClick={onClick} style={{ width: 'fit-content' }} className={'border-solid border-2 border-sky-500 mt-4 rounded p-2 flex hover:cursor-pointer'}>{label} {index === expandedIndex ? <GoChevronUp className="ml-2" /> : <GoChevronDown className="ml-2" />}</div>
            {
                index === expandedIndex &&
                <div className="ml-4 mt-1">{content}</div>
            }
        </>
    )
}
