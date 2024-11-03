// Select all elements with the class 'deleteBtn'
let deleteButtons = document.querySelectorAll('.deleteBtn');

// Iterate over each button
deleteButtons.forEach(button => {
    // Add a 'click' event listener to each button
    button.addEventListener('click', function(e) {
        // Prevent the default action of the click event (e.g., navigation or form submission)
        e.preventDefault();
        
        // Get the product name and id from the button's data attributes
        let product = this.dataset.name;
        let productID = this.dataset.id;
        
        // Ask the user for confirmation to delete the product
        let response = confirm("Do you want to delete the product " + product + "?");
        
        // If the user confirms deletion
        if (response) {
            // Send a GET request to delete the product using the fetch API
            fetch('../products/deleteproduct.php?id=' + productID, {
                method: 'GET'
            })
            .then(response => response.text())  // Parse the response as plain text
            .then(data => {
                // If the server responds with 'success'
                if(data === 'success') {
                    // Redirect the user to 'product.php'
                    window.location.href = 'admin/products';
                }
            });
        }
    });
});

// testing hehee
// document.addEventListener('DOMContentLoaded', () => {
//     // Delegate event to a parent container, like `document` or a specific container with an ID or class
//     document.body.addEventListener('click', function(e) {
//         // Check if the clicked element has the `deleteBtn` class
//         if (e.target.classList.contains('deleteBtn')) {
//             e.preventDefault();
            
//             // Get the product name and id from the button's data attributes
//             let product = e.target.dataset.name;
//             let productID = e.target.dataset.id;
            
//             // Ask the user for confirmation to delete the product
//             let response = confirm("Do you want to delete the product " + product + "?");
            
//             // If the user confirms deletion
//             if (response) {
//                 fetch('../products/deleteproduct.php?id=' + productID, {
//                     method: 'GET'
//                 })
//                 .then(response => response.text())
//                 .then(data => {
//                     if (data === 'success') {
//                         // Redirect the user to 'admin/products'
//                         window.location.href = 'admin/products';
//                     } else {
//                         alert("Failed to delete the product. Please try again.");
//                     }
//                 })
//                 .catch(error => {
//                     console.error("Error deleting product:", error);
//                     alert("An error occurred. Please try again.");
//                 });
//             }
//         }
//     });
// });
