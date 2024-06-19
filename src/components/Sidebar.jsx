import Link from "./Link"

export default function Sidebar() {
    const links = [
        { label: 'accordion', path: '/accordion' },
        { label: 'dropdown', path: '/dropdown' },
        { label: 'buttons', path: '/buttons' }
    ]

    const renderedLinks = links.map(link => <Link key={link.label} to={link.path}>{link.label}</Link>)

    return (
        <div>
            {renderedLinks}
        </div>
    )
}
