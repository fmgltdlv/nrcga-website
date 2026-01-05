// Navigation Component
function renderNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    return `
        <nav class="navbar">
            <div class="nav-container">
                <div class="logo">
                    <a href="index.html" class="logo-link">
                        <img src="NRCGA-Logo_Badge-Color-300x272.png" alt="NRCGA Logo" class="logo-img">
                        <span class="logo-text">Nevada Regional Common Ground Alliance</span>
                    </a>
                </div>
                <ul class="nav-menu">
                    <li><a href="index.html" ${currentPage === 'index.html' ? 'class="active"' : ''}>Home</a></li>
                    <li class="nav-dropdown">
                        <a href="about.html" class="dropdown-toggle">About NRCGA <span class="dropdown-arrow">▼</span></a>
                        <ul class="dropdown-menu">
                            <li><a href="about.html">About NRCGA</a></li>
                            <li><a href="contact.html">Contact Us</a></li>
                            <li><a href="members.html">Members</a></li>
                            <li><a href="bylaws.html">Bylaws</a></li>
                            <li><a href="standing-rules.html">Standing Rules</a></li>
                        </ul>
                    </li>
                    <li class="nav-dropdown">
                        <a href="about-811.html" class="dropdown-toggle">About 811 <span class="dropdown-arrow">▼</span></a>
                        <ul class="dropdown-menu">
                            <li><a href="about-811.html">About 811</a></li>
                            <li><a href="create-ticket.html">Create a Ticket</a></li>
                            <li><a href="about-811-questions.html">General Questions</a></li>
                        </ul>
                    </li>
                    <li><a href="training.html" ${currentPage === 'training.html' ? 'class="active"' : ''}>Safety Training</a></li>
                    <li><a href="programs.html" ${currentPage === 'programs.html' ? 'class="active"' : ''}>Programs</a></li>
                    <li><a href="data-maps.html" ${currentPage === 'data-maps.html' ? 'class="active"' : ''}>Data & Maps</a></li>
                    <li><a href="contact.html" ${currentPage === 'contact.html' ? 'class="active"' : ''}>Contact</a></li>
                </ul>
                <button class="theme-toggle" aria-label="Toggle dark mode" title="Toggle dark mode">
                    <span class="theme-toggle-icon">🌙</span>
                </button>
                <button class="nav-toggle" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    `;
}

// Footer Component
function renderFooter() {
    return `
        <footer class="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-brand">
                        <div class="logo">
                            <img src="NRCGA-Logo_Badge-Color-300x272.png" alt="NRCGA Logo" class="logo-img footer-logo">
                            <span class="logo-text">Nevada Regional Common Ground Alliance</span>
                        </div>
                        <p>Promoting public safety and damage prevention across Nevada.</p>
                    </div>
                    <div class="footer-links">
                        <div class="footer-column">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="about.html">About NRCGA</a></li>
                                <li><a href="about-811.html">About 811</a></li>
                                <li><a href="training.html">Safety Training</a></li>
                                <li><a href="programs.html">Programs</a></li>
                            </ul>
                        </div>
                        <div class="footer-column">
                            <h4>Resources</h4>
                            <ul>
                                <li><a href="calendar.html">Calendar</a></li>
                                <li><a href="programs.html">Committees</a></li>
                                <li><a href="about-811.html">811 Tools</a></li>
                                <li><a href="contact.html">Contact Us</a></li>
                            </ul>
                        </div>
                        <div class="footer-column">
                            <h4>Connect</h4>
                            <ul>
                                <li><a href="https://www.linkedin.com/company/nrcga/posts/?feedView=all" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                                <li><a href="contact.html">Newsletter</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2024 NRCGA. All rights reserved.</p>
                </div>
            </div>
        </footer>
    `;
}

// Initialize components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Insert navigation
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = renderNavigation();
    }
    
    // Insert footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = renderFooter();
    }
    
    // Re-initialize navigation functionality after rendering
    initializeNavigation();
    initializeThemeToggle();
});

// Initialize navigation functionality
function initializeNavigation() {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Mobile Dropdown Toggle
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 968) {
                e.preventDefault();
                const dropdown = toggle.parentElement;
                dropdown.classList.toggle('active');
            }
        });
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a:not(.dropdown-toggle)');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Initialize theme toggle
function initializeThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.querySelector('.theme-toggle-icon');

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark' && themeIcon) {
        themeIcon.textContent = '☀️';
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const theme = document.documentElement.getAttribute('data-theme');
            const newTheme = theme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            if (themeIcon) {
                themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
            }
        });
    }
}

