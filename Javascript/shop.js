// JavaScript to handle search and filter functionality
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search-input");
    const filterDropdown = document.querySelector(".filter-dropdown");
    const artworks = document.querySelectorAll(".artwork-card");

    // Function to filter artworks based on search text and selected category
    const filterArtworks = () => {
        const searchText = searchInput.value.toLowerCase();
        const selectedCategory = filterDropdown.value;

        artworks.forEach(artwork => {
            const artworkName = artwork.querySelector(".artwork-name").textContent.toLowerCase();
            const artworkCategory = artwork.querySelector(".category").textContent;

            const matchesSearch = artworkName.includes(searchText);
            const matchesCategory = selectedCategory === "" || artworkCategory === selectedCategory;

            if (matchesSearch && matchesCategory) {
                artwork.style.display = "block";
            } else {
                artwork.style.display = "none";
            }
        });
    };

    // Add event listeners to search input and dropdown
    searchInput.addEventListener("input", filterArtworks);
    filterDropdown.addEventListener("change", filterArtworks);

    // Initialize filter
    filterArtworks();
});