import React from 'react';

const Footer = ({ data }) => {
    if (!data) return null;

    return (
        <footer>
            <span className="footer-copy">{data.copyright}</span>
            <span className="footer-email">{data.email}</span>
        </footer>
    );
};

export default Footer;
