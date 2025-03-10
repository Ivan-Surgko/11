import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Головна</Link></li>
                <li><Link to="/about">Про нас</Link></li>
                <li><Link to="/contacts">Контакти</Link></li>
            </ul>
        </nav>
    );
}
export default Navbar;
