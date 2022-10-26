import React from 'react';
import './App.css';
import {Navbar} from "./components/navbar/Navbar";
import {HashRouter} from "react-router-dom";
import {Content} from "./components/content/Content";

function App() {
    return (
        <HashRouter>
            <div className="App">
                <Navbar/>
                <Content/>
            </div>
        </HashRouter>

    );
}

export default App;
