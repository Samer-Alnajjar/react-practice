import { useContext } from "react";
import NavigationContext from "../context/navigation";

export default function NavigationHook() {
    return useContext(NavigationContext);
}
