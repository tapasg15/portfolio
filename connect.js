document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

// Get form data
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const message = document.getElementById('message').value;

// Store form data in an object
localStorage.setItem('formData', data.stringigy({
    name: name,
    email: email,
    message: message
}));

// Log the form data to the console (or handle it as needed)
console.log('Form Data:', formData);

    // Redirect to another page after form submission
    window.location.href = 'thankyou.html'; // Change this to the desired URL
});
