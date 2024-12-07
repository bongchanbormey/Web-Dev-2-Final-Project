// Animation for Who We Are Section
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.scroll-animation');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active'); // Remove the class when the section is out of view
                }
            });
        },
        { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    sections.forEach(section => observer.observe(section));
});


// Show the scroll-to-top button when the user scrolls down
$(document).ready(function () {
    const $scrollToTopButton = $('#scrollToTop');

    // Show or hide the button on scroll
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 4000) {
            $scrollToTopButton.fadeIn(); // Use fadeIn for smooth appearance
        } else {
            $scrollToTopButton.fadeOut(); // Use fadeOut for smooth disappearance
        }
    });

    // Smooth scroll to top when the button is clicked
    $scrollToTopButton.on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 'smooth'); // Smooth scroll to the top
    });
});