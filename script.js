
// Collapse navbar on nav-link click (only for mobile)
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);

        if (bsCollapse) {
            bsCollapse.hide(); // Collapse the navbar
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const welcomeOverlay = document.querySelector('.welcome-overlay');
    const enterButton = document.querySelector('.btn-enter');
    const body = document.body;

    // Add class to body to disable scrolling
    body.classList.add('welcome-active');

    // Fade out welcome page when button is clicked
    enterButton.addEventListener('click', dismissWelcome);

    // Also dismiss when clicking anywhere
    welcomeOverlay.addEventListener('click', function (e) {
        if (e.target === this) {
            dismissWelcome();
        }
    });

    function dismissWelcome() {
        welcomeOverlay.style.opacity = '0';
        setTimeout(() => {
            welcomeOverlay.style.display = 'none';
            body.classList.remove('welcome-active');

            // Optional: Smooth scroll to top after dismissing
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 1000);
    }

    // Optional: Close after 5 seconds automatically
    // setTimeout(dismissWelcome, 5000);
});



// Add this script to handle the welcome page dismissal
document.addEventListener('DOMContentLoaded', function () {
    const welcomeOverlay = document.querySelector('.welcome-overlay');
    const enterButton = document.querySelector('.btn-enter');

    // Fade out welcome page when button is clicked
    enterButton.addEventListener('click', function () {
        welcomeOverlay.style.opacity = '0';
        setTimeout(() => {
            welcomeOverlay.style.display = 'none';
        }, 1000);
    });

    // Optional: Also dismiss when clicking anywhere
    welcomeOverlay.addEventListener('click', function (e) {
        if (e.target === this) {
            this.style.opacity = '0';
            setTimeout(() => {
                this.style.display = 'none';
            }, 1000);
        }
    });
});



// Form submission handling
document.getElementById('luxuryEnquiryForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const submitBtn = this.querySelector('button[type="submit"]');
    const submitText = submitBtn.querySelector('.submit-text');
    const loadingIcon = submitBtn.querySelector('.loading-icon');

    // Show loading state
    submitText.classList.add('d-none');
    loadingIcon.classList.remove('d-none');
    submitBtn.disabled = true;

    // Simulate form submission (replace with actual AJAX call)
    setTimeout(() => {
        // Show success message
        const toast = document.createElement('div');
        toast.className = 'position-fixed bottom-0 end-0 p-3';
        toast.innerHTML = `
          <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header bg-dark text-white border-bottom-gold">
              <strong class="me-auto text-gold">Enquiry Received</strong>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body bg-darker">
              Thank you for your enquiry. Our luxury concierge will contact you shortly.
            </div>
          </div>
        `;
        document.body.appendChild(toast);

        // Reset form
        submitText.classList.remove('d-none');
        loadingIcon.classList.add('d-none');
        submitBtn.disabled = false;
        this.reset();

        // Remove toast after 5 seconds
        setTimeout(() => {
            toast.remove();
        }, 5000);
    }, 1500);
});



// Add this JavaScript to your existing code
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    // Function to update active nav link
    function updateActiveNav() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // Run on scroll and initial load
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();

    // Smooth scrolling for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });

            // Update URL without refreshing
            history.pushState(null, null, targetId);
        });
    });
});


// Scroll Reveal Animation
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        navbar.style.padding = '15px 0';
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        navbar.style.padding = '20px 0';
    }
});

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', function () {
    // Trigger initial reveal for elements in viewport
    reveal();

    // Add animation to hero section
    const heroContent = document.querySelector('.hero-content');
    heroContent.classList.add('animate__animated', 'animate__fadeIn');
});





