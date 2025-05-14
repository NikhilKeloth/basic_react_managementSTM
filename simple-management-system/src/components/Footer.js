import React from 'react';
import './Footer.css';

function Footer() {
    return(
        <footer className='footer'>
            <p> &copy; {new Date().getFullYear()} Simple Management System. All rights reserved </p>

            <div className='footer-links'>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Services </a>
                <a href="#">Support</a>
            </div>
        </footer>
    );
};

export default Footer;