import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="footer">
            <ul className="footer-ul">
            <Link to="/" className="link-text">
                <li>Home</li>
            </Link>
            <Link to="/work" className="link-text" >
                <li>Work</li>
            </Link>
            <Link to="/skills" className="link-text" >
                <li>Skills</li>
            </Link>
            <Link to="/contact" className="link-text" >
                <li>Contact</li>
            </Link>
            </ul>
        </footer>
    )
}