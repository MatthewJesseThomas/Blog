// Form Handling and Validations
document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const form = document.getElementById('contactForm');

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get form inputs
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validate form inputs
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // Validate email format using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // If all inputs are valid, proceed with form submission
        // For demonstration purposes, you can log the form data to the console
        console.log('Form submitted with the following data:');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // Here you can send the form data to your server using AJAX or any other method
        // Example: sendFormDataToServer(name, email, message);

        // Optionally, you can reset the form after submission
        form.reset();
    });
});
