document.querySelector("form").addEventListener("submit", function(event) {
    const fullName = document.querySelector("input[type='text']");
    const email = document.querySelector("input[type='email']");
    const password = document.querySelector("input[type='password']");

    if (
        fullName.value.trim() === "" ||
        email.value.trim() === "" ||
        password.value.trim() === ""
    ) {
        event.preventDefault();
        alert("Please fill in all the fields.");
    } else {
        event.preventDefault(); // prevent default form action
        window.location.href = "thankyou.html"; // redirect after successful signup
    }
});
