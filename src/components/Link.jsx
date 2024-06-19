import NavigationHook from '../hooks/NavigationHook'

export default function Link({children, to}) {
    const {navigate} = NavigationHook();

    const handleClick = (event) => {
        event.preventDefault();

        navigate(to)
    }

    return <a href={to} onClick={handleClick}>{children}</a>
}
