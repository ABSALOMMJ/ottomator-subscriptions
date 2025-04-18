document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const fullName = document.querySelector("input[type='text']");
    const email = document.querySelector("input[type='email']");
    const password = document.querySelector("input[type='password']");
    const ctaButton = document.querySelector(".cta-button");

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

        // Disable the CTA button while submitting
        ctaButton.disabled = true;

        // Simulate short processing time
        setTimeout(() => {
            // Reset the button after submission
            ctaButton.disabled = false;

            // Redirect to the thank you page
            window.location.href = "thankyou.html";
        }, 600);
    });

    // Optional: Focus effect on inputs
    [fullName, email, password].forEach(input => {
        input.addEventListener("focus", () => {
            input.style.borderColor = "#3B82F6"; // Highlight border
        });
        input.addEventListener("blur", () => {
            input.style.borderColor = "#d1d5db"; // Revert to original
        });
    });
});
