document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    // Tab functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and panes
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding pane
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // University data (could be fetched from API in real implementation)
    const universities = [
        {
            name: "University of Delhi",
            location: "Delhi",
            established: "1922",
            type: "Central University"
        },
        {
            name: "Jawaharlal Nehru University",
            location: "New Delhi",
            established: "1969",
            type: "Central University"
        },
        {
            name: "Banaras Hindu University",
            location: "Varanasi",
            established: "1916",
            type: "Central University"
        },
        {
            name: "University of Mumbai",
            location: "Mumbai",
            established: "1857",
            type: "State University"
        },
        {
            name: "University of Calcutta",
            location: "Kolkata",
            established: "1857",
            type: "State University"
        },
        {
            name: "Anna University",
            location: "Chennai",
            established: "1978",
            type: "State University"
        }
    ];

    // Populate universities
    const universityList = document.querySelector('.university-list');
    
    universities.forEach(university => {
        const universityCard = document.createElement('div');
        universityCard.className = 'university-card';
        universityCard.innerHTML = `
            <h3>${university.name}</h3>
            <p><strong>Location:</strong> ${university.location}</p>
            <p><strong>Established:</strong> ${university.established}</p>
            <p><strong>Type:</strong> ${university.type}</p>
        `;
        universityList.appendChild(universityCard);
    });

    // Form submission
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            nav.classList.remove('active');
        });
    });
});
