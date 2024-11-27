const southeastAsianCountries = [
    "Brunei", "Cambodia", "East Timor (Timor-Leste)", "Indonesia", "Laos", "Malaysia", 
    "Myanmar", "Philippines", "Singapore", "Thailand", "Vietnam"
];

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    let isValid = true;

    // Get all the inputs and select elements
    const fields = document.querySelectorAll("input, select");

    // Reset all input styles
    fields.forEach(field => {
        field.classList.remove("error");
    });

    // Validate each field
    fields.forEach(field => {
        if (field.value.trim() === "" && field.tagName !== "SELECT") {
            field.classList.add("error");
            isValid = false;
        }
    });

    // Validate Zip Code (5 digits)
    const zipCode = document.querySelector("#zip-code"); 
    if (zipCode && (zipCode.value.length !== 5 || isNaN(zipCode.value))) {
        zipCode.classList.add("error");
        isValid = false;
    }

    // Validate CVV (3 digits)
    const cvv = document.querySelector("#cvv"); 
    if (cvv && (cvv.value.length !== 3 || isNaN(cvv.value))) {
        cvv.classList.add("error");
        isValid = false;
    }

    // Validate Credit Card Number (16 digits)
    const cardNumber = document.querySelector("#card-number"); 
    if (cardNumber && (cardNumber.value.length !== 16 || isNaN(cardNumber.value))) {
        cardNumber.classList.add("error");
        isValid = false;
    }

    // Validate Expiration Year (must be after 2024)
    const expYear = document.querySelector("#exp-year"); 
    if (expYear && parseInt(expYear.value) <= 2024) {
        expYear.classList.add("error");
        isValid = false;
    }

    // Validate Country (should be in Southeast Asian countries list)
    const country = document.querySelector("#country-dropdown"); 
    if (country && !southeastAsianCountries.includes(country.value)) {
        country.classList.add("error");
        isValid = false;
    }

    // Redirect to confirmation page if valid
    if (isValid) {
        window.location.href = "/HTML/purchase_confirm.html";
    }
});


// Update the current year in the footer
document.getElementById("currentYear").textContent = new Date().getFullYear();


// Show the scroll-to-top button when the user scrolls down
window.onscroll = function() {
    var scrollToTopButton = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

// Smooth scroll to top when the button is clicked
document.getElementById("scrollToTop").onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};
