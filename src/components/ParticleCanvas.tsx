import React, { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;
    baseX: number;
    baseY: number;
}

const ParticleCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: null as number | null, y: null as number | null, radius: 150 });
    const colors = ['#a855f7', '#3b82f6', '#06b6d4', '#ec4899'];

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            createParticles();
        };

        const createParticles = () => {
            particlesRef.current = [];
            const numberOfParticles = Math.floor((canvas.width * canvas.height) / 15000);

            for (let i = 0; i < numberOfParticles; i++) {
                const size = Math.random() * 3 + 1;
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const speedX = (Math.random() - 0.5) * 0.5;
                const speedY = (Math.random() - 0.5) * 0.5;
                const color = colors[Math.floor(Math.random() * colors.length)];

                particlesRef.current.push({
                    x, y, size, speedX, speedY, color,
                    baseX: x,
                    baseY: y
                });
            }
        };

        const drawParticles = () => {
            particlesRef.current.forEach(particle => {
                ctx.fillStyle = particle.color;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            });
        };

        const connectParticles = () => {
            const particles = particlesRef.current;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 120) {
                        const opacity = 1 - (distance / 120);
                        ctx.strokeStyle = `rgba(168, 85, 247, ${opacity * 0.3})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const updateParticles = () => {
            const particles = particlesRef.current;
            const mouse = mouseRef.current;

            particles.forEach(particle => {
                // Move particles
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                // Mouse interaction
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - particle.x;
                    const dy = mouse.y - particle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouse.radius) {
                        const force = (mouse.radius - distance) / mouse.radius;
                        const angle = Math.atan2(dy, dx);
                        particle.x -= Math.cos(angle) * force * 3;
                        particle.y -= Math.sin(angle) * force * 3;
                    }
                }

                // Return to base position
                const dxBase = particle.baseX - particle.x;
                const dyBase = particle.baseY - particle.y;
                particle.x += dxBase * 0.02;
                particle.y += dyBase * 0.02;

                // Boundary check
                if (particle.x < 0 || particle.x > canvas.width) {
                    particle.baseX = Math.random() * canvas.width;
                }
                if (particle.y < 0 || particle.y > canvas.height) {
                    particle.baseY = Math.random() * canvas.height;
                }
            });
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawParticles();
            connectParticles();
            updateParticles();
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouseRef.current.x = null;
            mouseRef.current.y = null;
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas id="particle-canvas" ref={canvasRef} />;
};

export default ParticleCanvas;
