import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Luthfi Dwi Amali. Built with passion for mobile development.</p>
            </div>
        </footer>
    );
};

export default Footer;
