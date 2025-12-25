import React from 'react';

const Navbar = ({ brand, badge }) => {
    return (
        <nav className="nav">
            <div className="brand">
                <svg className="logo-icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
                </svg>
                <span>{brand || 'Loading...'}</span>
            </div>
            {/* Badge could be passed here if needed, but wasn't in original nav structure explicitly, handled in Hero usually or separate */}
        </nav>
    );
};

export default Navbar;
