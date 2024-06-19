// script.js

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    clearErrors();

    const username = document.getElementById('username');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    let isValid = true;

    if (username.value.trim() === '') {
        showError('usernameError', 'Username is required');
        isValid = false;
    } else if (username.value.length < 3) {
        showError('usernameError', 'Username must be at least 3 characters');
        isValid = false;
    }

    if (firstName.value.trim() === '') {
        showError('firstNameError', 'First name is required');
        isValid = false;
    }
    
    if (lastName.value.trim() === '') {
        showError('lastNameError', 'Last name is required');
        isValid = false;
    }

    if (email.value.trim() === '') {
        showError('emailError', 'Email is required');
        isValid = false;
    } else if (!validateEmail(email.value)) {
        showError('emailError', 'Email is not valid');
        isValid = false;
    }

    if (password.value.trim() === '') {
        showError('passwordError', 'Password is required');
        isValid = false;
    } else if (password.value.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters');
        isValid = false;
    }

    if (confirmPassword.value.trim() === '') {
        showError('confirmPasswordError', 'Confirm Password is required');
        isValid = false;
    } else if (password.value !== confirmPassword.value) {
        showError('confirmPasswordError', 'Passwords do not match');
        isValid = false;
    }

    if (isValid) {
        alert('Registration successful!');
        document.getElementById('registrationForm').reset();
    }
});

function clearErrors() {
    document.querySelectorAll('.error-message').forEach(function(el) {
        el.textContent = '';
        el.style.display = 'none';
    });
}

function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
