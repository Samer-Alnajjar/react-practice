import Link from "./Link"

export default function Sidebar() {
    const links = [
        { label: 'Dropdown', path: '/dropdown' },
        { label: 'Accordion', path: '/accordion' },
        { label: 'Buttons', path: '/buttons' },
        { label: 'Modal', path: '/modal' },
    ]

    const renderedContent = links.map(link => {
        return <Link key={link.label} to={link.path}>{link.label}</Link>
    })

    return (
        <>
            {renderedContent}
        </>
    )
}
