document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const fullName = document.querySelector("input[type='text']");
    const email = document.querySelector("input[type='email']");
    const password = document.querySelector("input[type='password']");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get values and trim
        const nameVal = fullName.value.trim();
        const emailVal = email.value.trim();
        const passVal = password.value.trim();

        // Basic validation
        if (!nameVal || !emailVal || !passVal) {
            alert("Please fill in all the fields.");
            return;
        }

        // Optional: add 'submitting' class to form
        form.classList.add("submitting");

        // Simulate short processing time
        setTimeout(() => {
            window.location.href = "thankyou.html";
        }, 600);
    });
});
