import React from 'react';
import './App.css';
import {Navbar} from "./components/navbar/Navbar";
import {HashRouter} from "react-router-dom";

function App() {
    return (
        <HashRouter>
            <div className="App">
                <Navbar/>
            </div>
        </HashRouter>

    );
}

export default App;
