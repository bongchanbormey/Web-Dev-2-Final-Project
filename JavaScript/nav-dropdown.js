//---------- Dropdown Content ----------
// Get the menu icon and dropdown elements
const menuIcon = document.getElementById('menu-icon');
const dropdownMenu = document.getElementById('dropdown-menu');

// Show the dropdown menu on hover
menuIcon.addEventListener('mouseenter', () => {
    dropdownMenu.style.display = 'block';
});

// Hide the dropdown menu when the mouse leaves both the icon and dropdown
menuIcon.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!dropdownMenu.matches(':hover')) {
            dropdownMenu.style.display = 'none';
        }
    }, 100);        // Slight delay to allow hover over dropdown
});

dropdownMenu.addEventListener('mouseleave', () => {
    dropdownMenu.style.display = 'none';
});
//---------- End of Dropdown Content ----------