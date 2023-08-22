import { NavLink } from "react-router-dom"
import React from 'react';
import menuBtnSvg from '../img/menu.svg'
import closeBtn from '../img/close.svg'

export default function Footer() {
    const [menuBtn, setMenuBtn ] = React.useState(false)
    const [headerText, setHeaderText] = React.useState("ABOUT")

    function handleMenuBtn() {
        setMenuBtn(!menuBtn);
    }

    function handleHeaderText(stringText) {
        setHeaderText(stringText);
    }

    function menuOnClick(stringText) {
        handleMenuBtn();
        handleHeaderText(stringText);
    }

    return (
        <footer className="footer">
            <h1>{headerText}</h1>
            <div onClick={handleMenuBtn}><img src={menuBtn ? closeBtn : menuBtnSvg} alt="Open And Close Button"/></div>
            <ul className={menuBtn ? "footer-open footer-ul" : "footer-ul"}>
            <NavLink to="/" className="link-text" onClick={() => menuOnClick("ABOUT")}>
                <li>ABOUT</li>
            </NavLink>
            <NavLink to="/work" className="link-text" onClick={() => menuOnClick("WORK")}>
                <li>WORK</li>
            </NavLink>
            <NavLink to="/skills" className="link-text" onClick={() => menuOnClick("SERVICES")}>
                <li>SERVICES</li>
            </NavLink>
            <NavLink to="/contact" className="link-text" onClick={() => menuOnClick("CONTACT")}>
                <li>CONTACT</li>
            </NavLink>
            </ul>
        </footer>
    )
}