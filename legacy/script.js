// ===================================
// Particle Animation System
// ===================================
class ParticleSystem {
    constructor() {
        this.canvas = document.getElementById('particle-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: null, y: null, radius: 150 };
        this.colors = ['#a855f7', '#3b82f6', '#06b6d4', '#ec4899'];
        
        this.init();
        this.animate();
        this.setupEventListeners();
    }
    
    init() {
        this.resizeCanvas();
        this.createParticles();
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    createParticles() {
        const numberOfParticles = Math.floor((this.canvas.width * this.canvas.height) / 15000);
        
        for (let i = 0; i < numberOfParticles; i++) {
            const size = Math.random() * 3 + 1;
            const x = Math.random() * this.canvas.width;
            const y = Math.random() * this.canvas.height;
            const speedX = (Math.random() - 0.5) * 0.5;
            const speedY = (Math.random() - 0.5) * 0.5;
            const color = this.colors[Math.floor(Math.random() * this.colors.length)];
            
            this.particles.push({
                x, y, size, speedX, speedY, color,
                baseX: x,
                baseY: y
            });
        }
    }
    
    drawParticles() {
        this.particles.forEach(particle => {
            this.ctx.fillStyle = particle.color;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.closePath();
            this.ctx.fill();
        });
    }
    
    connectParticles() {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 120) {
                    const opacity = 1 - (distance / 120);
                    this.ctx.strokeStyle = `rgba(168, 85, 247, ${opacity * 0.3})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }
    }
    
    updateParticles() {
        this.particles.forEach(particle => {
            // Move particles
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Mouse interaction
            if (this.mouse.x !== null && this.mouse.y !== null) {
                const dx = this.mouse.x - particle.x;
                const dy = this.mouse.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < this.mouse.radius) {
                    const force = (this.mouse.radius - distance) / this.mouse.radius;
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
            if (particle.x < 0 || particle.x > this.canvas.width) {
                particle.baseX = Math.random() * this.canvas.width;
            }
            if (particle.y < 0 || particle.y > this.canvas.height) {
                particle.baseY = Math.random() * this.canvas.height;
            }
        });
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawParticles();
        this.connectParticles();
        this.updateParticles();
        requestAnimationFrame(() => this.animate());
    }
    
    setupEventListeners() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
            this.particles = [];
            this.createParticles();
        });
        
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.x;
            this.mouse.y = e.y;
        });
        
        window.addEventListener('mouseleave', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
    }
}

// ===================================
// Navigation
// ===================================
class Navigation {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.hamburger = document.getElementById('hamburger');
        this.navMenu = document.getElementById('nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        this.setupEventListeners();
        this.handleScroll();
    }
    
    setupEventListeners() {
        // Hamburger menu toggle
        this.hamburger.addEventListener('click', () => {
            this.navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking nav links
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.navMenu.classList.remove('active');
            });
        });
        
        // Navbar background on scroll
        window.addEventListener('scroll', () => this.handleScroll());
        
        // Smooth scroll
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    handleScroll() {
        if (window.scrollY > 100) {
            this.navbar.style.background = 'rgba(18, 18, 26, 0.95)';
        } else {
            this.navbar.style.background = 'rgba(26, 26, 39, 0.7)';
        }
    }
}

// ===================================
// Scroll Animations
// ===================================
class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        this.init();
    }
    
    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, this.observerOptions);
        
        // Observe elements
        const animatedElements = document.querySelectorAll(
            '.project-card, .timeline-item, .skill-category, .contact-item'
        );
        
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
}

// ===================================
// Project Card Interactions
// ===================================
class ProjectCards {
    constructor() {
        this.cards = document.querySelectorAll('.project-card');
        this.init();
    }
    
    init() {
        this.cards.forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                this.handleMouseEnter(e.currentTarget);
            });
            
            card.addEventListener('mouseleave', (e) => {
                this.handleMouseLeave(e.currentTarget);
            });
            
            card.addEventListener('mousemove', (e) => {
                this.handleMouseMove(e, e.currentTarget);
            });
        });
    }
    
    handleMouseEnter(card) {
        card.style.transition = 'transform 0.3s ease';
    }
    
    handleMouseLeave(card) {
        card.style.transform = 'translateY(-8px) rotateX(0deg) rotateY(0deg)';
    }
    
    handleMouseMove(e, card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
}

// ===================================
// Typing Effect for Hero
// ===================================
class TypingEffect {
    constructor(element, texts, speed = 100) {
        this.element = element;
        this.texts = texts;
        this.speed = speed;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        
        if (this.element) {
            this.type();
        }
    }
    
    type() {
        const currentText = this.texts[this.textIndex];
        
        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentText.substring(0, this.charIndex + 1);
            this.charIndex++;
        }
        
        let typeSpeed = this.speed;
        
        if (this.isDeleting) {
            typeSpeed /= 2;
        }
        
        if (!this.isDeleting && this.charIndex === currentText.length) {
            typeSpeed = 2000;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
            typeSpeed = 500;
        }
        
        setTimeout(() => this.type(), typeSpeed);
    }
}

// ===================================
// Initialize Everything
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize particle system
    new ParticleSystem();
    
    // Initialize navigation
    new Navigation();
    
    // Initialize scroll animations
    new ScrollAnimations();
    
    // Initialize project card interactions
    new ProjectCards();
    
    // Optional: Add typing effect to hero subtitle
    // Uncomment if you want animated text
    // const heroSubtitle = document.querySelector('.hero-subtitle');
    // if (heroSubtitle) {
    //     const originalText = heroSubtitle.textContent;
    //     heroSubtitle.textContent = '';
    //     new TypingEffect(heroSubtitle, [originalText], 50);
    // }
    
    // Add smooth reveal for hero stats
    const stats = document.querySelectorAll('.stat-number');
    const animateValue = (element, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            const current = Math.floor(progress * (end - start) + start);
            
            if (element.textContent.includes('M')) {
                element.textContent = `Rp ${current}M+`;
            } else if (element.textContent.includes('+')) {
                element.textContent = `${current.toLocaleString()}+`;
            } else {
                element.textContent = current;
            }
            
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };
    
    // Animate stats when they come into view
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stat = entry.target;
                const text = stat.textContent;
                
                if (text.includes('5,000+')) {
                    animateValue(stat, 0, 5000, 2000);
                } else if (text.includes('Rp 3M+')) {
                    animateValue(stat, 0, 3, 2000);
                } else if (text.includes('4+')) {
                    animateValue(stat, 0, 4, 2000);
                }
                
                statsObserver.unobserve(stat);
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => statsObserver.observe(stat));
});

// ===================================
// Utility: Debounce Function
// ===================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
