document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.querySelector(".cart-page-container"); // Main cart container
    const cartItemsTable = document.querySelector(".cart-items"); // Table body for cart items
    const cartSubtotalCell = document.querySelector(".cart-total tr:nth-child(1) td:nth-child(2)");
    const cartTotalCell = document.querySelector(".cart-total tr:nth-child(3) td:nth-child(2)");
    const deliveryCharge = 3; // Fixed delivery charge
    const removeLinks = document.querySelectorAll(".cart-info a"); // Remove buttons

    // Function to format price
    const formatPrice = (price) => `$${price.toFixed(2)}`;

    // Function to calculate totals
    const calculateCartTotal = () => {
        let subtotal = 0;

        // Calculate subtotal for each item in .cart-items
        const rows = document.querySelectorAll(".cart-items tr:not(:first-child)"); // Skip the header row
        rows.forEach((row) => {
            const input = row.querySelector("input[type='number']");
            if (!input) return;

            const quantity = parseInt(input.value, 10) || 0;
            const unitPrice = parseFloat(
                row.querySelector("small").textContent.replace("Price: $", "")
            );
            const itemSubtotal = quantity * unitPrice;

            row.querySelector("td:nth-child(3)").textContent = formatPrice(itemSubtotal); // Update the item's subtotal
            subtotal += itemSubtotal;
        });

        // Update cart subtotal and total
        cartSubtotalCell.textContent = formatPrice(subtotal);
        cartTotalCell.textContent = formatPrice(subtotal + deliveryCharge);

        // Check if the .cart-items table is empty
        if (document.querySelectorAll(".cart-items tr:not(:first-child)").length === 0) {
            showEmptyCartMessage();
        }
    };

    // Function to display "Your cart is empty" message
    const showEmptyCartMessage = () => {
        cartContainer.innerHTML = `
            <p>Your cart is empty.</p>
        `;
    };

    // Add click event to "Remove" buttons
    cartItemsTable.addEventListener("click", (event) => {
        if (event.target.tagName === "A" && event.target.textContent === "Remove") {
            event.preventDefault();

            // Find the current row and its previous sibling (paired row)
            const cartRow = event.target.closest("tr");
            const previousRow = cartRow.previousElementSibling;

            // Remove both the current row (of cart item) and its paired row (product, quantity, and subtotal)
            if (previousRow) previousRow.remove(); 
            cartRow.remove(); 

            // Recalculate totals
            calculateCartTotal();
        }
    });

    // Add event listeners to quantity inputs
    document.querySelectorAll("input[type='number']").forEach((input) => {
        input.addEventListener("input", () => {
            const quantity = parseInt(input.value, 10) || 0;

            if (quantity === 0) {
                // Remove the current row and its paired row if quantity reaches 0
                const cartRow = input.closest("tr");
                const previousRow = cartRow.previousElementSibling;

                if (previousRow) previousRow.remove();
                cartRow.remove();
            }

            // Recalculate totals
            calculateCartTotal();
        });
    });

    // Initialize cart totals on page load
    calculateCartTotal();
});


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