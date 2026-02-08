import { useEffect } from 'react';

const useScrollReveal = (options = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }) => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    (entry.target as HTMLElement).style.opacity = '1';
                    (entry.target as HTMLElement).style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        const animatedElements = document.querySelectorAll(
            '.project-card, .timeline-item, .skill-category, .contact-item'
        );

        animatedElements.forEach(el => {
            (el as HTMLElement).style.opacity = '0';
            (el as HTMLElement).style.transform = 'translateY(30px)';
            (el as HTMLElement).style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);
};

export default useScrollReveal;
