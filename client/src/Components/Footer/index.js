import React from 'react';


const Footer = ({ classes, children }) => (
    <nav className={`navbar navbar-light bg-light ${classes}`}>
        {children}
    </nav>
)
export default Footer;