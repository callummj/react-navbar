import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import './navbar.css'


// Pages
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";


export default function Navbar() {


    // When a link is clicked on or the content is clicked, the navbar will close via this JS function
    const closeNav = () =>{
        const burgerButton = document.getElementById("menu-btn");
        burgerButton.checked = false;
    }


    return (
        <Router>
            <>
                <header className="header">
                    <a href="/" className="logo">Navbar</a>
                    <input className="menu-btn" type="checkbox" id="menu-btn"/>
                    <label className="menu-icon" htmlFor="menu-btn">
                        <span className="navicon"/>
                    </label>
                    <ul className="menu">
                        <li><Link to={"/"} onClick={closeNav}>Home</Link></li>
                        <li><Link to={"/about"} onClick={closeNav}>About</Link></li>
                        <li><Link to={"/contact"} onClick={closeNav}>Contact</Link></li>
                    </ul>
                </header>


                <Switch>
                    <Route path="/about">
                        <div className={"content"} onClick={closeNav}>
                            <About/>
                        </div>

                    </Route>
                    <Route path="/contact">
                        <div className={"content"} onClick={closeNav}>
                            <Contact/>
                        </div>

                    </Route>
                    <Route path="/">
                        <div className={"content"} onClick={closeNav}>
                            <Home/>
                        </div>

                    </Route>
                </Switch>
            </>
        </Router>
    );
}
