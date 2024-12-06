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
window.onscroll = function() {
    var scrollToTopButton = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 4000) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

// Smooth scroll to top when the button is clicked
document.getElementById("scrollToTop").onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};
