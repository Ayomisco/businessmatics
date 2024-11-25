document.addEventListener('DOMContentLoaded', () => {
    // Element Selectors
    const modal = document.getElementById('form-modal');
    const requestLink = document.getElementById('request-link');
    const closeModal = document.querySelector('.close');
    const toggleBtn = document.getElementById('toggle-menu');
    const navMenu = document.getElementById('nav-menu');
    const form = document.getElementById('request-form');

    // Initialize EmailJS
    emailjs.init("YOUR_EMAILJS_USER_ID");

    // Helper Function: Show Modal
    const showModal = () => {
        modal.style.display = 'flex'; // Show modal
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    // Helper Function: Hide Modal
    const hideModal = () => {
        modal.style.display = 'none'; // Hide modal
        document.body.style.overflow = ''; // Restore background scrolling
    };

    // Event Listeners
    requestLink.addEventListener('click', (e) => {
        e.preventDefault();
        showModal();
    });

    closeModal.addEventListener('click', hideModal);

    window.addEventListener('click', (e) => {
        if (e.target === modal) hideModal();
    });

    toggleBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Form Submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Collect Form Data
        const formData = {
            prefix: document.getElementById('prefix').value,
            firstName: document.getElementById('first-name').value,
            lastName: document.getElementById('last-name').value,
            email: document.getElementById('email').value,
            company: document.getElementById('company').value,
            jobTitle: document.getElementById('job-title').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value,
            country: document.getElementById('country').value,
        };

        // Send Email using EmailJS
        emailjs
            .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
            .then(
                () => {
                    alert("Your request has been submitted successfully!");
                    hideModal();
                    form.reset(); // Reset the form
                },
                () => {
                    alert("Failed to send your request. Please try again.");
                }
            );
    });
});
