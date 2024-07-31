import { NavLink } from "react-router-dom"
import React from 'react';

export default function Header() {

    return (
        <header className="header glass-effect">
            <ul className="header-ul">
            <NavLink to="/" className="link-text">
                <li>ABOUT</li>
            </NavLink>
            <NavLink to="/work" className="link-text" >
                <li>WORK</li>
            </NavLink>
            <NavLink to="/skills" className="link-text">
                <li>SERVICES</li>
            </NavLink>
            <NavLink to="/contact" className="link-text">
                <li>CONTACT</li>
            </NavLink>
            </ul>
        </header>
    )
}