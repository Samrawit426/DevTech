
        function toggleMenu() {
            const menuList = document.querySelector(".menuList");
            menuList.classList.toggle("active");

            const menuIcon = document.querySelector(".menuIcon");
            menuIcon.classList.toggle("active");
        }

        // Form submission handling
        document.getElementById("contactForm").addEventListener("submit", function (e) {
            e.preventDefault();
            let isValid = true; // Flag to track overall validity

            // Validate name
            const nameInput = document.getElementById("name");
            const nameError = document.getElementById("nameError");
            if (nameInput.value.trim() === "") {
                nameInput.classList.add("error");
                nameError.style.display = "block";
                isValid = false;
            } else {
                nameInput.classList.remove("error");
                nameError.style.display = "none";
            }

            // Validate email
            const emailInput = document.getElementById("email");
            const emailError = document.getElementById("emailError");
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // Simple email regex
            if (!emailPattern.test(emailInput.value)) {
                emailInput.classList.add("error");
                emailError.style.display = "block";
                isValid = false;
            } else {
                emailInput.classList.remove("error");
                emailError.style.display = "none";
            }

            // Validate phone number format
            const phoneInput = document.getElementById("phone");
            const phoneError = document.getElementById("phoneError");
            const phonePattern = /^09\d{8}$/; // Regex for 09XXXXXXXX format
            if (!phonePattern.test(phoneInput.value)) {
                phoneInput.classList.add("error"); // Add error class for red border
                phoneError.style.display = "block"; // Show error message
                isValid = false;
            } else {
                phoneInput.classList.remove("error"); // Remove error class if valid
                phoneError.style.display = "none"; // Hide error message
            }

            // Validate message
            const messageInput = document.getElementById("message");
            const messageError = document.getElementById("messageError");
            if (messageInput.value.trim() === "") {
                messageInput.classList.add("error");
                messageError.style.display = "block";
                isValid = false;
            } else {
                messageInput.classList.remove("error");
                messageError.style.display = "none";
            }

            if (isValid) {
                alert("Message sent!"); // Placeholder for actual submit action
                this.reset(); // Clear the form
            }
        });
    