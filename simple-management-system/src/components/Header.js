import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className='header'>
            <div className='logo'>Management System</div>
            <nav>
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/contact">Contact</Link></li>
                    <li> <Link to="/query">Query</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;