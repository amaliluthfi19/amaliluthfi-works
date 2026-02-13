import React, { useState } from 'react';

export interface Certificate {
    name: string;
    image: string;
    link?: string;
}

interface CertificateCardProps {
    certificate: Certificate;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
    const [isHovered, setIsHovered] = useState(false);

    const cardContent = (
        <div className="certificate-card">
            <div className="certificate-image-wrapper"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <img
                    src={certificate.image}
                    alt={certificate.name}
                    className="certificate-image"
                />
            </div>
            <h3 className="certificate-name">{certificate.name}</h3>
        </div>
    );

    const content = (
        <>
            {cardContent}
            {isHovered && (
                <div className="certificate-modal">
                    <div className="certificate-modal-backdrop"></div>
                    <div className="certificate-modal-content">
                        <img
                            src={certificate.image}
                            alt={certificate.name}
                        />
                    </div>
                </div>
            )}
        </>
    );

    if (certificate.link) {
        return (
            <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link-wrapper"
            >
                {content}
            </a>
        );
    }

    return content;
};

export default CertificateCard;

