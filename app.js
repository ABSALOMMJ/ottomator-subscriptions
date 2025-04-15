// Simple form validation for signup
document.querySelector("form").addEventListener("submit", function(event) {
    // Get form inputs
    const fullName = document.querySelector("input[type='text']");
    const email = document.querySelector("input[type='email']");
    const password = document.querySelector("input[type='password']");
    
    // Check if the fields are filled
    if (fullName.value.trim() === "" || email.value.trim() === "" || password.value.trim() === "") {
        event.preventDefault();
        alert("Please fill in all the fields.");
    }
});
