import React, { useRef, useState } from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    tech: string[];
    date: string;
    company: string;
    impact?: string;
    status?: string;
    record?: string;
    onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    image,
    tech,
    date,
    company,
    impact,
    status,
    record,
    onClick,
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isImageHovered, setIsImageHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseEnter = () => {
        const card = cardRef.current;
        if (card) {
            card.style.transition = 'transform 0.3s ease';
        }
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (card) {
            card.style.transform = 'translateY(-8px) rotateX(0deg) rotateY(0deg)';
        }
    };

    return (
        <div
            className="project-card"
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
        >
            <div
                className="project-image"
                onMouseEnter={() => record && setIsImageHovered(true)}
                onMouseLeave={() => record && setIsImageHovered(false)}
            >
                <img src={image} alt={title} />
                {(impact || status) && (
                    <div className="project-overlay">
                        {status && <span className="project-status">{status}</span>}
                        {impact && <span className="project-impact">{impact}</span>}
                    </div>
                )}

                {record && isImageHovered && (
                    <div className="project-video-modal">
                        <div className="project-video-backdrop"></div>
                        <div className="project-video-content">
                            <img src={record} alt={title} key={record} />
                            <span style={{ position: 'absolute', bottom: '10px', left: '10px', color: 'white', fontSize: '10px', zIndex: 10001 }}>{record}</span>
                        </div>
                    </div>
                )}
            </div>
            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
                <div className="project-tech">
                    {tech.map((t, i) => (
                        <span key={i} className="tech-tag">{t}</span>
                    ))}
                </div>
                <div className="project-meta">
                    <span className="project-date">{date}</span>
                    <span className="project-company">{company}</span>
                </div>
                {onClick && (
                    <div className="project-details-hint">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="12" />
                            <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        View architecture & stack
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
