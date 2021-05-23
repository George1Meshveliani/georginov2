import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from './MainPage';
import Founder from './Founder';
import Contact from  './Contact';
const Header = () => {
    return (
        <div class="wrapper">
                <header>
                    <Router>
                         <nav>
                            <div class="menu-icon">
                                <i class="fa fa-bars fa-2x"></i>
                            </div>
                            <div class="menu">
                                <ul>
                                    <li><a href="/"> Home</a></li>
                                    <li><a href="/founder">Founder</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                </ul>
                            </div>
                         </nav>
                        <Route path="/" exact component={MainPage} />
                        <Route path="/founder"  component={Founder} />
                        <Route path="/contact"  component={Contact} />
                    </Router>
                </header>
        </div>
    )
}

export default Header;