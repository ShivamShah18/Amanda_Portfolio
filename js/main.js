// ============================================
// SMOOTH SCROLLING & INTERSECTIONOBSERVER
// ============================================

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (!this.classList.contains('card-link')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================
// SCROLL ANIMATIONS (Fade-in on scroll)
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe skill blocks
document.querySelectorAll('.skill-block').forEach(block => {
    block.style.opacity = '0';
    block.style.transform = 'translateY(20px)';
    block.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(block);
});

// ============================================
// FILTERING FUNCTIONALITY
// ============================================

const filterButtons = document.querySelectorAll('.toggle-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            console.log('Filtering by:', filterValue);
            
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.style.display = 'flex';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ============================================
// MODAL FUNCTIONALITY FOR CARD DETAILS
// ============================================

const cardContent = {
    loreal: {
        title: 'L\'Oréal Brandstorm: Multiverse',
        content: `
            <h3 style="color: #8B0000; font-size: 1.8rem; margin-bottom: 1rem; font-family: 'Playfair Display', serif;">Brand Strategist & Creative Director</h3>
            <p><strong>Role:</strong> Brand Strategist, Creative Director</p>
            <p><strong>Focus:</strong> Immersive Experience Design</p>
            <br>
            <h4 style="color: #8B0000; font-weight: 600; margin-top: 1rem; margin-bottom: 0.5rem;">Project Overview</h4>
            <p>I conceptualized and designed a comprehensive brand identity for L'Oréal's Brandstorm innovation challenge. Created the branding, including the logo and an immersive "Multiverse" storyline that connects contemporary wellness trends with innovative beauty solutions.</p>
            <br>
            <h4 style="color: #8B0000; font-weight: 600; margin-bottom: 0.5rem;">Key Responsibilities</h4>
            <ul style="margin-left: 1.5rem;">
                <li>Strategic brand conceptualization and positioning</li>
                <li>Logo design and visual identity creation</li>
                <li>Brand storytelling and narrative development</li>
                <li>Creative direction for all visual elements</li>
                <li>Multi-stakeholder collaboration and presentation</li>
            </ul>
            <br>
            <h4 style="color: #8B0000; font-weight: 600; margin-bottom: 0.5rem;">Impact</h4>
            <p>Successfully developed a compelling brand narrative that resonated with the judging panel, demonstrating strategic thinking and creative excellence in brand development.</p>
        `
    },
    headphones: {
        title: 'Headphone Drawings: Design Principles in Abstract',
        content: `
            <h3 style="color: #8B0000; font-size: 1.8rem; margin-bottom: 1rem; font-family: 'Playfair Display', serif;">Technical Drawing & Abstract Art</h3>
            <p><strong>Medium:</strong> Digital Illustration</p>
            <p><strong>Subject:</strong> Bose Headphones</p>
            <br>
            <h4 style="color: #8B0000; font-weight: 600; margin-top: 1rem; margin-bottom: 0.5rem;">Project Overview</h4>
            <p>Created an abstract illustration of Bose headphones that demonstrates sophisticated understanding of design principles. This piece served as a design exercise to showcase both technical drawing skills and conceptual thinking about form, balance, and visual representation.</p>
            <br>
            <h4 style="color: #8B0000; font-weight: 600; margin-bottom: 0.5rem;">Design Principles Applied</h4>
            <ul style="margin-left: 1.5rem;">
                <li>Balance and symmetry in composition</li>
                <li>Contrast and emphasis of key features</li>
                <li>Abstraction while maintaining object recognition</li>
                <li>Color theory and visual hierarchy</li>
                <li>Technical precision in digital illustration</li>
            </ul>
            <br>
            <h4 style="color: #8B0000; font-weight: 600; margin-bottom: 0.5rem;">Skills Demonstrated</h4>
            <p>This project showcases my ability to work with complex forms, understand product design principles, and translate real-world objects into stylized visual representations. It demonstrates proficiency with digital drawing tools and conceptual design thinking.</p>
        `
    },
    kasa: {
        title: 'KASA Merch Design: Korean Culture Celebration',
        content: `
            <h3 style="color: #8B0000; font-size: 1.8rem; margin-bottom: 1rem; font-family: 'Playfair Display', serif;">Graphic Design & Cultural Expression</h3>
            <p><strong>Achievement:</strong> Contest Winner</p>
            <p><strong>Sales:</strong> 20+ Units Sold</p>
            <br>
            <h4 style="color: #8B0000; font-weight: 600; margin-top: 1rem; margin-bottom: 0.5rem;">Project Overview</h4>
            <p>Won a design contest with a merchandise design that celebrates Korean culture, specifically featuring the Norigae—a traditional Korean ornament deeply rooted in historic cultural patterns. The design successfully resonated with the community, resulting in over 20 people purchasing the merchandise.</p>
            <br>
            <h4 style="color: #8B0000; font-weight: 600; margin-bottom: 0.5rem;">Design Concept</h4>
            <ul style="margin-left: 1.5rem;">
                <li>Incorporated the Norigae motif as a central design element</li>
                <li>Researched historic Korean cultural patterns and meanings</li>
                <li>Developed a modern interpretation of traditional design</li>
                <li>Created a visually striking composition for merchandise application</li>
            </ul>
            <br>
            <h4 style="color: #8B0000; font-weight: 600; margin-bottom: 0.5rem;">Recognition</h4>
            <p>This design was recognized as a contest winner, validating the creative concept and execution. The commercial success (20+ sales) demonstrates that the design resonates with target audiences and effectively captures cultural significance while appealing to modern aesthetics.</p>
        `
    },
    bynano: {
        title: 'BYNANO Skincare: Premium Brand Identity',
        content: `
            <h3 style="color: #8B0000; font-size: 1.8rem; margin-bottom: 1rem; font-family: 'Playfair Display', serif;">Logo & Packaging Design</h3>
            <p><strong>Client:</strong> BYNANO (Korean Skincare Startup)</p>
            <p><strong>Location:</strong> South Korea</p>
            <br>
            <h4 style="color: #8B0000; font-weight: 600; margin-top: 1rem; margin-bottom: 0.5rem;">Project Overview</h4>
            <p>Designed the complete visual identity and packaging for BYNANO, a Korean skincare startup. Created a comprehensive branding system that communicates innovation and premium positioning in the competitive skincare market.</p>
            <br>
            <h4 style="color: #8B0000; font-weight: 600; margin-bottom: 0.5rem;">Deliverables</h4>
            <ul style="margin-left: 1.5rem;">
                <li>Logo design and visual identity system</li>
                <li>Brand guidelines and color palette</li>
                <li>Product packaging design</li>
                <li>Label design and typography selection</li>
                <li>Brand positioning and messaging framework</li>
            </ul>
            <br>
            <h4 style="color: #8B0000; font-weight: 600; margin-bottom: 0.5rem;">Brand Strategy</h4>
            <p>Developed a premium, modern aesthetic that positions BYNANO as an innovative skincare brand with Korean heritage. The design balances contemporary design trends with cultural authenticity, creating a distinctive brand presence in the marketplace.</p>
            <br>
            <p><strong>Responsibilities:</strong> Full branding project ownership, stakeholder collaboration, and execution of all visual elements.</p>
        `
    },
    'role-director': {
        title: 'Brand Strategist & Creative Director',
        content: `
            <h3 style="color: #8B0000; font-size: 1.8rem; margin-bottom: 1rem; font-family: 'Playfair Display', serif;">Leadership Experience</h3>
            <p><strong>Role:</strong> Brand Strategist & Creative Director</p>
            <p><strong>Context:</strong> L'Oréal Brandstorm Competition</p>
            <br>
            <h4 style="color: #8B0000; font-weight: 600; margin-top: 1rem; margin-bottom: 0.5rem;">Role Overview</h4>
            <p>Led strategic branding initiatives and provided creative direction for a high-stakes brand innovation competition. Focused on immersive experience design and creating cohesive brand narratives that tell compelling stories.</p>
            <br>
            <h4 style="color: #8B0000; font-weight: 600; margin-bottom: 0.5rem;">Key Areas of Focus</h4>
            <ul style="margin-left: 1.5rem;">
                <li><strong>Brand Strategy:</strong> Developed comprehensive positioning and market positioning strategy</li>
                <li><strong>Creative Direction:</strong> Guided visual and conceptual development of all brand elements</li>
                <li><strong>Immersive Experience Design:</strong> Created multi-sensory brand experiences</li>
                <li><strong>Narrative Development:</strong> Crafted compelling brand stories and messaging</li>
                <li><strong>Visual Identity:</strong> Oversaw creation of cohesive visual systems</li>
            </ul>
            <br>
            <h4 style="color: #8B0000; font-weight: 600; margin-bottom: 0.5rem;">Leadership Skills Demonstrated</h4>
            <p>Strategic thinking, creative vision, team collaboration, decision-making under pressure, and the ability to translate complex brand concepts into compelling visual and experiential outcomes.</p>
        `
    },
    'role-research': {
        title: 'User-Centered Research & Experience',
        content: `
            <h3 style="color: #8B0000; font-size: 1.8rem; margin-bottom: 1rem; font-family: 'Playfair Display', serif;">Research & Design Expertise</h3>
            <p><strong>Focus:</strong> User-Centered Research & Experience Design</p>
            <p><strong>Context:</strong> Academic & Applied Research</p>
            <br>
            <h4 style="color: #8B0000; font-weight: 600; margin-top: 1rem; margin-bottom: 0.5rem;">Role Overview</h4>
            <p>Conducted rigorous research studies with diverse participant groups, analyzing behavioral patterns and translating findings into actionable design insights. Applied research methodologies to improve user experiences across multiple domains.</p>
            <br>
            <h4 style="color: #8B0000; font-weight: 600; margin-bottom: 0.5rem;">Core Competencies</h4>
            <ul style="margin-left: 1.5rem;">
                <li><strong>User Research:</strong> Interview design, observation studies, usability testing</li>
                <li><strong>Data Analysis:</strong> Qualitative synthesis, pattern recognition, insight identification</li>
                <li><strong>Design Thinking:</strong> Problem framing, ideation, rapid prototyping</li>
                <li><strong>Methodology:</strong> Applying research frameworks to real-world challenges</li>
                <li><strong>Communication:</strong> Translating research into actionable design recommendations</li>
            </ul>
            <br>
            <h4 style="color: #8B0000; font-weight: 600; margin-bottom: 0.5rem;">Impact</h4>
            <p>Successfully conducted studies that provided deep insights into user behavior, informing design decisions and improving user experiences. Demonstrated ability to work with diverse stakeholders and manage complex research projects with rigor and ethical standards.</p>
        `
    }
};

function openCardModal(event, cardId) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    console.log('Opening modal for card:', cardId);
    
    const modal = document.getElementById('cardModal');
    const modalBody = document.getElementById('modalBody');
    
    if (!modal) {
        console.error('Modal element with id "cardModal" not found');
        return;
    }
    
    if (!modalBody) {
        console.error('Modal body element with id "modalBody" not found');
        return;
    }
    
    if (cardContent && cardContent[cardId]) {
        console.log('Modal content found, displaying...');
        const content = cardContent[cardId];
        modalBody.innerHTML = `
            <h2>${content.title}</h2>
            ${content.content}
        `;
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        console.log('Modal displayed successfully');
    } else {
        console.error('Card content not found for ID:', cardId);
        if (cardContent) {
            console.log('Available card IDs:', Object.keys(cardContent));
        }
    }
}

function closeCardModal() {
    console.log('Closing modal');
    const modal = document.getElementById('cardModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
        console.log('Modal closed');
    }
}

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    const modal = document.getElementById('cardModal');
    if (modal && event.target === modal) {
        closeCardModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeCardModal();
    }
});

// ============================================
// NAVBAR EFFECTS
// ============================================

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    
    if (scrollTop > 100) {
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            // Scrolling up
            navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
        }
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

console.log('✨ Amanda\'s Portfolio loaded. Welcome!');
