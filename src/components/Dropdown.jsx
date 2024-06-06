export default function Dropdown({ value, label, onClick }) {
    return (
        <div onClick={() => { onClick(label) }} className={`border-solid border-2 border-sky-500 w-20 border-t-0`}>
            {label}
        </div>
    )
}
