import NavigationHook from '../hooks/NavigationHook'


export default function Route({ children, path }) {
    const { currentPath } = NavigationHook();

    if (currentPath === path) {
        return children;
    }

    return null;
}
