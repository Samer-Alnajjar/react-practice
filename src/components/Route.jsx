import NavigationHook from '../hooks/NavigationHook'

export default function Route({ children, to }) {
    const { currentPath } = NavigationHook();

    if (to === currentPath) {
        return children
    }

    return null;
}
