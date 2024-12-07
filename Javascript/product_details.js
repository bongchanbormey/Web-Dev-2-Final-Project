document.addEventListener('DOMContentLoaded', () => {
    // Add event listener for "Add to Cart" button
    document.getElementById('add-to-cart').addEventListener('click', () => {
        console.log('Blessing Apsara has been added to the cart.');
        alert('Blessing Apsara has been added to your cart!');
    });

    // Add event listener for "Buy Now" button
    document.getElementById('buy-now').addEventListener('click', () => {
        console.log('Proceeding to checkout for Blessing Apsara.');
        window.location.href = '/HTML/checkout.html'; // Replace with your actual checkout URL
    });
});
