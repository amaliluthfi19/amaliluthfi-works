import React, { useEffect, useState } from 'react';

const StatCounter: React.FC<{ end: number; duration: number; prefix?: string; suffix?: string }> = ({
    end,
    duration,
    prefix = '',
    suffix = ''
}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [end, duration]);

    return (
        <div className="stat">
            <span className="stat-number">{prefix}{count.toLocaleString()}{suffix}</span>
        </div>
    );
};

const Hero: React.FC = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <p className="hero-greeting">Hi, I'm</p>
                    <h1 className="hero-name">Luthfi Dwi Amali</h1>
                    <h2 className="hero-title">Mobile Developer</h2>
                    <p className="hero-subtitle">Flutter • iOS (SwiftUI) • Android (Kotlin) • React Native</p>
                    <p className="hero-description">
                        Crafting exceptional mobile experiences for fintech and booking platforms.
                        Proven track record of delivering high-impact features that drive business growth.
                    </p>
                    <div className="hero-cta">
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="#contact" className="btn btn-secondary">Get in Touch</a>
                    </div>
                    <div className="hero-stats">
                        <div className="stat">
                            <StatCounter end={5000} duration={2000} suffix="+" />
                            <span className="stat-label">Merchant Activations for Raya App Qris Merchant Registration</span>
                        </div>
                        <div className="stat">
                            <StatCounter end={3} duration={2000} prefix="Rp " suffix="M+" />
                            <span className="stat-label">GMV Generated for Loket Screen App MVP</span>
                        </div>
                        <div className="stat">
                            <StatCounter end={4} duration={2000} suffix="+" />
                            <span className="stat-label">Years Experience</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll-indicator">
                <span>Scroll</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    );
};

export default Hero;
