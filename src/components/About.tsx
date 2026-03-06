import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p className="about-intro">
                            Frontend Developer focused on front-end engineering using  <strong>Flutter</strong>, <strong>Next-Reactjs</strong>, <strong>iOS (Swift/SwiftUI)</strong>, and <strong>Android (Kotlin)</strong>.
                        </p>
                        <p>
                            Experienced in fintech, booking products and automotive industry with proven early-stage impact, including
                            enabling <strong>5,000+ QRIS merchant activations</strong> and delivering
                            <strong>Rp 3M+ GMV within 3 months</strong> during MVP validation.
                        </p>
                        <p>
                            Strong in UI/UX implementation, native bridges, crash monitoring, and fast product iteration.
                            I thrive in dynamic environments where I can contribute to both technical excellence and
                            business growth.
                        </p>
                        <div className="about-location">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <span>Jakarta, Indonesia</span>
                        </div>
                    </div>
                    <div className="skills-grid">
                        <div className="skill-category">
                            <h3>Frontend Frameworks</h3>
                            <div className="skill-tags">
                            <span className="skill-tag">Flutter</span>
                            <span className="skill-tag">React-Nextjs</span>
                            <span className="skill-tag">SwiftUI</span>
                            <span className="skill-tag">Kotlin</span>
                            </div>
                        </div>
                        <div className="skill-category">
                            <h3>Languages</h3>
                            <div className="skill-tags">
                                <span className="skill-tag">Dart</span>
                                <span className="skill-tag">JavaScript</span>
                                <span className="skill-tag">Swift</span>
                                <span className="skill-tag">Kotlin</span>
                            </div>
                        </div>
                        <div className="skill-category">
                            <h3>State Management</h3>
                            <div className="skill-tags">
                                <span className="skill-tag">Bloc</span>
                                <span className="skill-tag">GetX</span>
                                <span className="skill-tag">Redux</span>
                            </div>
                        </div>
                        <div className="skill-category">
                            <h3>Tools & Services</h3>
                            <div className="skill-tags">
                                <span className="skill-tag">Firebase</span>
                                <span className="skill-tag">New Relic</span>
                                <span className="skill-tag">GA4</span>
                                <span className="skill-tag">Google Map</span>
                                <span className="skill-tag">Moengage</span>
                                <span className="skill-tag">OneSignal</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
