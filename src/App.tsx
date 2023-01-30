import React, {useState} from 'react';
import './App.css';
import {Navbar} from "./components/navbar/Navbar";
import {HashRouter} from "react-router-dom";
import {Content} from "./components/content/Content";
import {MenuButton} from "./components/MenuButton/MenuButton";

function App() {

    //For open and close MenuButton when screen smaller 1300px
    const [isMenuOpen, setIsMenuOpen] = useState(true)
    console.log(isMenuOpen)

    return (
        <HashRouter>
            <div className="App">
                <Navbar isMenuOpen={isMenuOpen}/>
                <Content/>
                <MenuButton isMenuOpen={isMenuOpen} changeMenuStatus={setIsMenuOpen}/>
            </div>
        </HashRouter>

    );
}

export default App;
