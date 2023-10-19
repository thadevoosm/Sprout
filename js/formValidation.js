
function validateName() {
    var name = document.getElementById("name_field").value;
    var isValid = /^[a-zA-Z\s]+$/.test(name);

    if (!isValid || name.length === 0) {
        alert("Please enter a valid name with letters and whitespace only.");
    }
}

function validatePhoneNumber() {
    var phoneNumber = document.getElementById("phone_number").value;
    var isValid = /^\d+$/.test(phoneNumber);

    if (!isValid || phoneNumber.length === 0) {
        alert("Please enter a valid phone number with numbers only.");
    }
}

function validateEmail() {
    var email = document.getElementById("email_address").value;
    var isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValid || email.length === 0) {
        alert("Please enter a valid email address.");
    }
}