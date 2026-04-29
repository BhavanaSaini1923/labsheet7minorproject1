// Button interaction
function showMessage() {
    alert("Welcome to my portfolio!");
}

// Form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields!");
    } else {
        alert("Form submitted successfully!");
    }
});