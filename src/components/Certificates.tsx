import React from 'react';
import CertificateCard from './CertificateCard';
import type { Certificate } from './CertificateCard';

const Certificates: React.FC = () => {
    const certificates: Certificate[] = [
        {
            name: 'Hacktiv8 Full Stack JavaScript Bootcamp',
            image: '/assets/projects/hacktiv8-certificate.png',
        },
        {
            name: 'IBM Introduction to Software Engineering',
            image: '/assets/projects/ibm-certificate.png',
            link: 'https://www.coursera.org/account/accomplishments/verify/Y17XN71VI7N8'
        },
        {
            name: 'Meta Programming Fundamentals in Kotlin',
            image: '/assets/projects/meta-basic-kotlin.png',
            link: 'https://www.coursera.org/account/accomplishments/verify/Y1RDSMILRGRH'
        }
    ];

    return (
        <section id="certificates" className="certificates">
            <div className="container">
                <h2 className="section-title">Certificates</h2>
                <p className="section-subtitle">Selected certifications and achievements</p>

                <div className="certificates-grid">
                    {certificates.map((certificate, index) => (
                        <CertificateCard key={index} certificate={certificate} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;

