import React from'react';
import {Link} from'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/person">Klienci</Link></li>
                    <li><Link to="/product">Produkty</Link></li>

                    <li id='home'><Link to="/">Home</Link></li>

                    <li><Link to="/sale">Sprzedaż</Link></li>
                    <li><Link to="/money">Hajs $</Link></li>

                </ul>
            </nav>
        </header>
    );
}

export default Header;
