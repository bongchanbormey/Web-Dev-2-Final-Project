document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-button');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const searchFilter = document.querySelector('.search-filter');
    const eventsList = document.querySelector('.events-list');
    const eventCards = document.querySelectorAll('.event-card');

    // Event listener for navigation buttons
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent.trim();
            if (buttonText === 'Events') {
                // Temporarily hide sidebar and center events list
                sidebar.style.display = 'none'; // Hide sidebar
                mainContent.style.display = 'block'; // Show main content
                mainContent.style.justifyContent = 'center'; // Center horizontally
                mainContent.style.alignItems = 'flex-start'; // Align at the top

                eventsList.style.display = 'block'; // Show events list
                eventsList.style.margin.left = '0 auto'; // Center the events list horizontally
                eventsList.style.width = '80%'; // Optionally adjust width to fit your design

                // Ensure search and filter section stays intact
                searchFilter.style.display = 'flex'; // Keep search and filter visible
                searchFilter.style.justifyContent = 'end'; // Show search and filter
            } else {
                // Handle other buttons (like 'Venue Rental' and 'Calendar')
                alert(`${buttonText} is coming soon!`);
            }
        });
    });

    // Functionality for search input
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        eventCards.forEach(card => {
            const title = card.querySelector('.title').textContent.toLowerCase();
            const content = card.querySelector('.content').textContent.toLowerCase();
            if (title.includes(query) || content.includes(query)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });

    // Functionality for sorting events
    const filterDropdown = document.querySelector('.filter-dropdown');
    filterDropdown.addEventListener('change', () => {
        const sortOption = filterDropdown.value;
        const sortedCards = Array.from(eventCards).sort((a, b) => {
            const dateA = new Date(a.querySelector('.place-date').textContent.split(',')[1] || 0);
            const dateB = new Date(b.querySelector('.place-date').textContent.split(',')[1] || 0);
            return sortOption === 'Newest first' ? dateB - dateA : dateA - dateB;
        });

        // Clear and re-append sorted event cards
        eventsList.innerHTML = '';
        sortedCards.forEach(card => eventsList.appendChild(card));
    });
});