import React from 'react';
import './App.css';
import {Navbar} from "./components/navbar/Navbar";
import {HashRouter} from "react-router-dom";
import {Content} from "./components/content/Content";
import {Header} from "./components/Header/Header";

function App() {
    return (
        <HashRouter>
            <div className="App">
                <Navbar/>
                <Content/>
                <Header/>
            </div>
        </HashRouter>

    );
}

export default App;
