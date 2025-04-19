document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const fullName = document.querySelector("input[type='text']");
    const email = document.querySelector("input[type='email']");
    const password = document.querySelector("input[type='password']");
    const ctaButton = document.querySelector(".cta-button");

    // Handle form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nameVal = fullName.value.trim();
        const emailVal = email.value.trim();
        const passVal = password.value.trim();

        if (!nameVal || !emailVal || !passVal) {
            alert("Please fill in all the fields.");
            return;
        }

        // Disable button and change text
        ctaButton.disabled = true;
        const originalText = ctaButton.innerText;
        ctaButton.innerText = "Submitting...";
        form.classList.add("submitting");

        // Prepare the data to be sent
        const formData = new FormData();
formData.append("name", nameVal);
formData.append("email", emailVal);
formData.append("password", passVal);

fetch("https://script.google.com/macros/s/AKfycbzGdSk4faVTsZDJ5klOdis89ijr42Y6Hw0iigku_ZwmkqKHa4yiIhU2mUvm0Ost0dj1kA/exec", {
    method: "POST",
    body: formData
})

        .then((response) => response.text())
        .then((data) => {
            console.log("Success:", data); // Handle success response

            // Redirect to thank you page
            window.location.href = "thankyou.html";
        })
        .catch((error) => {
            console.error("Error:", error); // Handle error

            // Re-enable button and reset text
            ctaButton.disabled = false;
            ctaButton.innerText = originalText;
            form.classList.remove("submitting");

            // Show error message to the user
            alert("There was an error submitting your form. Please try again.");
        });
    });

    // Input focus styling
    [fullName, email, password].forEach((input) => {
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
