import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
    const [isActive, setIsActive] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    const closeMenu = () => {
        setIsActive(false);
    };

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            const offsetTop = (targetSection as HTMLElement).offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            closeMenu();
        }
    };

    return (
        <nav className="navbar" style={{ background: isScrolled ? 'rgba(18, 18, 26, 0.95)' : 'rgba(26, 26, 39, 0.7)' }}>
            <div className="nav-container">
                <a href="#home" className="nav-logo" onClick={(e) => scrollToSection(e, '#home')}>LA</a>
                <ul className={`nav-menu ${isActive ? 'active' : ''}`} id="nav-menu">
                    <li><a href="#home" className="nav-link" onClick={(e) => scrollToSection(e, '#home')}>Home</a></li>
                    <li><a href="#about" className="nav-link" onClick={(e) => scrollToSection(e, '#about')}>About</a></li>
                    <li><a href="#projects" className="nav-link" onClick={(e) => scrollToSection(e, '#projects')}>Projects</a></li>
                    <li><a href="#experience" className="nav-link" onClick={(e) => scrollToSection(e, '#experience')}>Experience</a></li>
                    <li><a href="#contact" className="nav-link" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a></li>
                </ul>
                <div className={`hamburger ${isActive ? 'active' : ''}`} id="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
