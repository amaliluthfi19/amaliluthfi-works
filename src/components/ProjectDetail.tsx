import React, { useEffect } from 'react';

export interface ArchitectureLayer {
    name: string;
    description: string;
}

export interface ArchitectureDiagramNode {
    label: string;
    color: 'purple' | 'blue' | 'cyan' | 'pink';
}

export interface StackDetail {
    name: string;
    role: string;
    why: string;
}

export interface Project {
    title: string;
    description: string;
    image: string;
    tech: string[];
    date: string;
    company: string;
    impact?: string;
    status?: string;
    record?: string;
    architecture?: {
        overview: string;
        layers: ArchitectureLayer[];
        diagram: ArchitectureDiagramNode[];
    };
    stackDetails?: StackDetail[];
    highlights?: string[];
}

interface ProjectDetailProps {
    project: Project;
    onClose: () => void;
}

const colorMap: Record<string, string> = {
    purple: 'var(--color-accent-purple)',
    blue: 'var(--color-accent-blue)',
    cyan: 'var(--color-accent-cyan)',
    pink: 'var(--color-accent-pink)',
};

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKey);
        };
    }, [onClose]);

    return (
        <div className="pd-page">
            {/* Sticky top bar */}
            <div className="pd-topbar">
                <button className="pd-back" onClick={onClose}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                    Back to Projects
                </button>
                <span className="pd-topbar-title">{project.title}</span>
                <div style={{ width: 120 }} />
            </div>

            {/* Hero */}
            <div className="pd-hero">
                <img src={project.image} alt={project.title} />
                <div className="pd-hero-overlay" />
                <div className="pd-hero-content">
                    <div className="pd-badges">
                        {project.status && <span className="pd-badge pd-badge--status">{project.status}</span>}
                        {project.impact && <span className="pd-badge pd-badge--impact">{project.impact}</span>}
                    </div>
                    <p className="pd-hero-company">{project.company}</p>
                    <h1 className="pd-hero-title">{project.title}</h1>
                    <div className="pd-hero-meta">
                        <span className="pd-hero-date">{project.date}</span>
                        <div className="pd-tech-list">
                            {project.tech.map((t, i) => (
                                <span key={i} className="pd-tech-tag">{t}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Page body */}
            <div className="pd-content">
                {/* Intro: description + highlights */}
                <div className="pd-intro-row">
                    <p className="pd-description">{project.description}</p>

                    {project.highlights && (
                        <div>
                            <h2 className="pd-section-title">Key Highlights</h2>
                            <ul className="pd-highlights">
                                {project.highlights.map((h, i) => (
                                    <li key={i}>{h}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Architecture */}
                {project.architecture && (
                    <div className="pd-section">
                        <h2 className="pd-section-title">Architecture</h2>
                        <div className="pd-arch-layout">
                            {/* Left: overview + layers */}
                            <div>
                                <p className="pd-arch-overview">{project.architecture.overview}</p>
                                <div className="pd-layers">
                                    {project.architecture.layers.map((layer, i) => (
                                        <div key={i} className="pd-layer">
                                            <div className="pd-layer-header">
                                                <span className="pd-layer-index">{String(i + 1).padStart(2, '0')}</span>
                                                <h3 className="pd-layer-name">{layer.name}</h3>
                                            </div>
                                            <p className="pd-layer-desc">{layer.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right: sticky diagram */}
                            <div className="pd-diagram">
                                <p className="pd-diagram-label">Data Flow</p>
                                {project.architecture.diagram.map((node, i) => (
                                    <React.Fragment key={i}>
                                        <div
                                            className="pd-diagram-node"
                                            style={{ borderColor: colorMap[node.color], color: colorMap[node.color] }}
                                        >
                                            <span
                                                className="pd-diagram-dot"
                                                style={{ background: colorMap[node.color] }}
                                            />
                                            {node.label}
                                        </div>
                                        {i < project.architecture!.diagram.length - 1 && (
                                            <div className="pd-diagram-arrow">↓</div>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Stack breakdown */}
                {project.stackDetails && (
                    <div className="pd-section">
                        <h2 className="pd-section-title">Tech Stack Breakdown</h2>
                        <div className="pd-stack-grid">
                            {project.stackDetails.map((s, i) => (
                                <div key={i} className="pd-stack-card">
                                    <div className="pd-stack-name">{s.name}</div>
                                    <div className="pd-stack-role">{s.role}</div>
                                    <p className="pd-stack-why">
                                        <span className="pd-stack-why-label">Why: </span>
                                        {s.why}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectDetail;
