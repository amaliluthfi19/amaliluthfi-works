import React from 'react';

const Experience: React.FC = () => {
    const experiences = [
        {
            date: 'Aug 2025 - Present',
            title: 'Mobile Developer',
            company: 'Transcosmos Indonesia (Salim Group)',
            achievements: [
                'Built and maintained mobile UI and integrated APIs using Flutter, Swift, and Kotlin',
                'Improved app stability by reducing crash error rate from 0.68% to 0.52% using New Relic and Firebase Crashlytics',
                'Implemented Event Tracking using Microsoft Clarity to track user journey'
            ]
        },
        {
            date: 'Aug 2024 - Aug 2025',
            title: 'Mobile Developer',
            company: 'Loket.com (PT Global Loket Sejahtera)',
            achievements: [
                'Developed cinema seat selection and other MVP features, enabling Rp 3M+ GMV in 3 months',
                'Implemented interactive event calendar UI for date-based event discovery',
                'Integrated backend APIs and built responsive mobile UI using Flutter'
            ]
        },
        {
            date: 'Jan 2024 - Aug 2024',
            title: 'Frontend Developer',
            company: 'Bank Raya (BRI Subsidiary)',
            achievements: [
                'Developed Saku Bisnis registration and QRIS Merchant feature, driving 5,000+ merchant activations',
                'Integrated WebView callbacks for seamless communication between web and mobile',
                'Built responsive UI layouts using Flutter and Next.js'
            ]
        },
        {
            date: 'Oct 2021 - Oct 2023',
            title: 'Mobile Developer',
            company: 'BuddyKu (MNC Group)',
            achievements: [
                'Built native bridge using Flutter Method Channel for dynamic app icon switching',
                'Implemented push notifications using OneSignal and iZooto',
                'Integrated analytics tracking using Google Analytics (GA4)'
            ]
        }
    ];

    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 className="section-title">Work Experience</h2>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <span className="timeline-date">{exp.date}</span>
                                <h3 className="timeline-title">{exp.title}</h3>
                                <p className="timeline-company">{exp.company}</p>
                                <ul className="timeline-achievements">
                                    {exp.achievements.map((achievement, i) => (
                                        <li key={i}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
