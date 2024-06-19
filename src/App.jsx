import React from 'react';

import './index.css'


import ButtonPage from './pages/ButtonPage';
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropwdownPage';
import Sidebar from './components/Sidebar';
import Route from './components/Route';

const App = () => {

    return (
        <div >
            <Sidebar />
            <Route path="/buttons"><ButtonPage /></Route>
            <Route path="/accordion"><AccordionPage /></Route>
            <Route path="/dropdown"><DropdownPage /></Route>
            {/* <ButtonPage />
            <AccordionPage />
            <DropdownPage /> */}
        </div >)
}


export default App
