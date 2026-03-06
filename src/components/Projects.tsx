import React from 'react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
    const projectList = [
        {
            title: "Mitsubishi Motors Indonesia",
            description: "Vehicle ownership & aftersales app providing vehicle management, service booking, emergency support, and exclusive promos. Built with Flutter and native iOS/Android integration.",
            image: "/assets/projects/mmid-home.jpg",
            record: "/assets/projects/mmid-record.avif",
            tech: ["Flutter", "MobX", "React-Nexjs"],
            date: "Sep 2025 - Present",
            company: "Transcosmos Indonesia",
            status: "Current",
        },
        {
            title: "Loket Screen",
            description: "Movie theater booking app with interactive seat selection, F&B ordering, and VOD voucher purchase. Enabled Rp 3M+ GMV in 3 months during MVP validation.",
            image: "/assets/projects/loket-screen-home.jpg",
            tech: ["Flutter", "Kotlin+XML", "Riverpod", "React-Nextjs"],
            date: "Aug 2024 - Aug 2025",
            company: "Loket.com",
            impact: "Rp 3M+ GMV",
            record: "/assets/projects/loket-record.avif",
        },
        {
            title: "Loket X",
            description: "Event & recreational ticketing app supporting digital ticket purchases for events, theme parks, and attractions. Features interactive event calendar for date-based discovery.",
            image: "/assets/projects/loket-x-home.jpg",
            tech: ["Flutter", "Riverpod"],
            date: "Apr 2025 - Aug 2025",
            company: "Loket.com",
            record: "/assets/projects/loket-x-record.avif",
        },
        {
            title: "Raya App",
            description: "Mobile banking app with Flutter and Next.js WebView communication layer. Developed Saku Bisnis registration and QRIS Merchant feature, driving 5,000+ merchant activations in first 6 months.",
            image: "/assets/projects/raya-home.jpg",
            tech: ["React-Nextjs", "Redux", "Tailwind", "Flutter", "BLOC"],
            date: "Jan 2024 - Aug 2024",
            company: "Bank Raya",
            impact: "5,000+ Merchants",
            record: "/assets/projects/raya-record.avif",
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">Mobile applications I've built and contributed to</p>

                <div className="projects-grid">
                    {projectList.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
