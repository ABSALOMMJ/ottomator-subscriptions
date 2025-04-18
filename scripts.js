document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const fullName = document.querySelector("input[type='text']");
    const email = document.querySelector("input[type='email']");
    const password = document.querySelector("input[type='password']");
    const ctaButton = document.querySelector(".cta-button");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameVal = fullName.value.trim();
        const emailVal = email.value.trim();
        const passVal = password.value.trim();

        if (!nameVal || !emailVal || !passVal) {
            alert("Please fill in all the fields.");
            return;
        }

        form.classList.add("submitting");
        ctaButton.disabled = true;
        const originalText = ctaButton.innerText;
        ctaButton.innerText = "Submitting...";

        setTimeout(() => {
            ctaButton.disabled = false;
            ctaButton.innerText = originalText;
            form.classList.remove("submitting");
            window.location.href = "thankyou.html";
        }, 800);
    });

    const inputs = [fullName, email, password];

    inputs.forEach(input => {
        input.addEventListener("focus", () => {
            input.style.borderColor = "#3B82F6";
            input.style.boxShadow = "0 0 0 3px rgba(59,130,246,0.2)";
            input.style.outline = "none";
        });

        input.addEventListener("blur", () => {
            input.style.borderColor = "#d1d5db";
            input.style.boxShadow = "none";
        });
    });
});
