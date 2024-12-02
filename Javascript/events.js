const searchInput = document.getElementById("searchInput");
const filterDropdown = document.getElementById("filterDropdown");
const eventsList = document.getElementById("eventsList");
const eventCards = Array.from(eventsList.getElementsByClassName("event-card"));

// Search functionality
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    eventCards.forEach(card => {
        const title = card.querySelector(".title").textContent.toLowerCase();
        const content = card.querySelector(".content").textContent.toLowerCase();
        if (title.includes(query) || content.includes(query)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
});

// Sort functionality
filterDropdown.addEventListener("change", () => {
    const sortOrder = filterDropdown.value;
    const sortedCards = [...eventCards].sort((a, b) => {
        const dateA = new Date(a.dataset.date);
        const dateB = new Date(b.dataset.date);
        return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });
    eventsList.innerHTML = "";
    sortedCards.forEach(card => eventsList.appendChild(card));
});
