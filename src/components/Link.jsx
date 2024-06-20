import NavigationHook from '../hooks/NavigationHook'
import classNames from "classnames";

export default function Link({ children, to, className }) {
    const { navigate, currentPath } = NavigationHook()
    let finalClasses = classNames("font-semibold text-blue-500 mb-1", currentPath === to && "border-l-4 border-blue-600 text-xl mb-3 mt-3 pl-1", className)

    const handler = (event) => {
        if (event.ctrlKey || event.metaKey) {
            return;
        }
        event.preventDefault();
        navigate(to);
    }

    return <a className={finalClasses} href={to} onClick={handler}>{children}</a>
}
