document.getElementById('category-select').addEventListener('change', function() {
    filterArtists();
});

document.getElementById('artist-input').addEventListener('input', function() {
    filterArtists();
});

function filterArtists() {
    const selectedCategory = document.getElementById('category-select').value;
    const input = document.getElementById('artist-input').value.toLowerCase();
    const artistCards = document.querySelectorAll('.artist-card');

    artistCards.forEach(card => {
        const artistName = card.querySelector('.artist-name').textContent.toLowerCase();
        const itemCategory = card.getAttribute('data-category');

        const matchesCategory = selectedCategory === 'all' || selectedCategory === '' || itemCategory === selectedCategory;
        const matchesInput = input === '' || artistName.includes(input);
        

        if (matchesCategory && matchesInput) {
            card.style.display = 'block'; // Show card
        } else {
            card.style.display = 'none'; // Hide card
        }
    });
}