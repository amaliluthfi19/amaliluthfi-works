import React from 'react';

const Experience: React.FC = () => {
    const experiences = [
        {
            date: 'Aug 2025 - Present',
            title: 'Frontend Developer',
            company: 'Transcosmos Indonesia (Salim Group)',
            achievements: [
                'Hit the ground running — fixed critical deeplink and push notification bugs in the first 2 weeks, lifting campaign reachability by 20%',
                'Built and shipped a series of React-powered microsites, each tailored with dynamic functionality to support specific business and marketing needs',
                'Built a polling feature within posts, giving users a fun and interactive way to engage with content directly inside the app'
            ]
        },
        {
            date: 'Aug 2024 - Aug 2025',
            title: 'Frontend Developer',
            company: 'Loket.com (PT Global Loket Sejahtera)',
            achievements: [
                'Took ownership of cinema seat selection and key MVP features from scratch, which went on to generate Rp 3M+ in GMV within just 3 months',
                'Engineered the end-to-end payment gateway flow, ensuring a smooth and reliable transaction experience for users across the platform',
                'Collaborated with UI/UX to build a component-based design system, bringing consistency and development speed across the entire product team'
            ]
        },
        {
            date: 'Jan 2024 - Aug 2024',
            title: 'Frontend Developer',
            company: 'Bank Raya (BRI Subsidiary)',
            achievements: [
                'Took ownership of the Saku Bisnis registration flow and QRIS Merchant feature end-to-end, driving 5,000+ merchant activations by year-end and pushing real digital payment adoption across the platform',
                'Built Saku Anak from the ground up — a feature that made it simple for parents to allocate money for their children and equally easy for kids to receive and spend it',
                'Bridged the web-native gap by implementing WebView callbacks, making the handoff between web and mobile feel completely invisible to the user'
            ]
        },
        {
            date: 'Oct 2021 - Oct 2023',
            title: 'Frontend Developer',
            company: 'BuddyKu (MNC Group)',
            achievements: [
                'Came in running — resolved 35 out of 73 bugs before the first launch, including core functionality like reactions, load more, and profile management flow',
                'Wired up GA4 from scratch to turn raw user behavior into actionable insights for the product and marketing teams',
                'Spotted an opportunity to make the home screen smarter, collaborated with the backend team to make key sections fully dynamic, and turned that idea into a shipped feature'
            ]
        },
        {
            date: 'March 2021 - Oct 2021',
            title: 'Software Engineer',
            company: 'Sprout Digital Labs',
            achievements: [
                'Developed project in three industry, banking, e-commerce, and medical industry projects using Flutter, React, and Node.js',
                'Built end-to-end cart feature including product selection, order summary, and checkout flow across multiple client verticals',
                'Integrated third-party payment APIs and handled transaction state management for secure and reliable payment processing',
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
