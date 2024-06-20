import React from 'react';

import './index.css'


import ButtonPage from './pages/ButtonPage';
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropwdownPage';
import Sidebar from './components/Sidebar';
import Route from './components/Route';

const App = () => {

    return (
        <div className="flex m-20 gap-20">
            <div className="flex flex-col">
                <Sidebar />
            </div>
            <Route to="/buttons">
                <ButtonPage />
            </Route>
            <Route to="/dropdown">
                <DropdownPage />
            </Route>
            <Route to="/accordion">
                <AccordionPage />
            </Route>
        </div >)
}


export default App
