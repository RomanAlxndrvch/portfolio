import React, {useState} from 'react';
import './App.css';
import {Navbar} from "./components/navbar/Navbar";
import {HashRouter} from "react-router-dom";
import {Content} from "./components/content/Content";
import {MenuButton} from "./components/MenuButton/MenuButton";

function App() {

    //For open and close MenuButton when screen smaller 1300px
    const [isMenuOpen, setIsMenuOpen] = useState(true)
    const [menuBtnPressed, setMenuBtnPressed] = useState(false)

    return (
        <HashRouter>
            <div className="App">
                <Navbar isMenuOpen={isMenuOpen} changeMenuStatus={setIsMenuOpen} menuBtnPressed={setMenuBtnPressed}/>
                <Content menuBtnPressed={menuBtnPressed}/>
                <MenuButton isMenuOpen={isMenuOpen} changeMenuStatus={setIsMenuOpen}
                            menuBtnPressed={setMenuBtnPressed}/>
            </div>
        </HashRouter>

    );
}

export default App;
