// Fields Validation
const southeastAsianCountries = [
    "Brunei", "Cambodia", "East Timor (Timor-Leste)", "Indonesia", "Laos", "Malaysia", 
    "Myanmar", "Philippines", "Singapore", "Thailand", "Vietnam"
];

document.querySelector("form").addEventListener("submit", function(event) {
    let isValid = true;

    // Get all the inputs
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
    const zipCode = document.querySelector("input[placeholder='11000']");
    if (zipCode && (zipCode.value.length !== 5 || isNaN(zipCode.value))) {
        zipCode.classList.add("error");
        isValid = false;
    }

    // Validate CVV (3 digits)
    const cvv = document.querySelector("input[placeholder='123']");
    if (cvv && (cvv.value.length !== 3 || isNaN(cvv.value))) {
        cvv.classList.add("error");
        isValid = false;
    }

    // Validate Credit Card Number (16 digits)
    const cardNumber = document.querySelector("input[placeholder='Card number']");
    if (cardNumber && (cardNumber.value.length !== 16 || isNaN(cardNumber.value))) {
        cardNumber.classList.add("error");
        isValid = false;
    }

    // Validate Expiration Year (must be after 2024)
    const expYear = document.querySelector("input[placeholder='2025']");
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

    // If validation fails, prevent form submission
    if (!isValid) {
        event.preventDefault();
    }
});
