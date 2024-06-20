import React from "react";
import ReactDOM from "react-dom/client";
import { NavigationProvider } from "./context/navigation";

import App from "./App";

const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl);

root.render(
    <NavigationProvider>
        <App />
    </NavigationProvider>
);
