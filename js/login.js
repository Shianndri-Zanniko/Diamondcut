document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('Login-form');
    const successMessage = document.querySelector('.login-success');
    const errorMessage = document.querySelector('.login-failed');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';

        if (validateForm()) {
            successMessage.style.display = 'block';
            setTimeout(() => {
                window.location.href = 'home.html';
            }, 2000);
        } else {
            errorMessage.style.display = 'block';
        }
    });

    function validateForm() {
        const username = document.getElementById('Username').value.trim();
        const email = document.getElementById('Login-form-Email-Address').value.trim();
        const phone = document.getElementById('Phone').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('Confirm-Password').value;
        const checkbox = document.getElementById('checkbox').checked;

        if (!username) {
            alert('Username is required');
            return false;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address');
            return false;
        }

        if (!validatePhone(phone)) {
            alert('Please enter a valid phone number, length between 10-13 digit and starting with 08 or 62, no space');
            return false;
        }

        if (!validatePassword(password)) {
            alert('Password needs to be atleast 8 characters long, has atleast one upper case letter and an unique character');
            return false;
        }

        if (password !== confirmPassword) {
            alert('Password does not match');
            return false;
        }

        if (!checkbox) {
            alert('You must agree to the terms and services');
            return false;
        }

        return true;
    }

    function validateEmail(email) {
        if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
            return false;
        }
        
        const atPosition = email.indexOf('@');
        const dotPosition = email.lastIndexOf('.');
        
        if (atPosition < 1 || dotPosition < atPosition + 2 || dotPosition + 2 >= email.length) {
            return false;
        }
        
        return true;
    }

    function validatePhone(phone) {
        if (phone.length < 10 || phone.length > 13) {
            return false;
        }

        if(!(phone.startsWith('08') || phone.startsWith('62'))){
            return false;
        }

        for (let i = 0; i < phone.length; i++) {
            if (phone[i] < '0' || phone[i] > '9') {
                return false;
            }

        }
        
        return true;
    }

    function validatePassword(password) {
        if (password.length < 8) {
            return false;
        }

        let hasUpperCase = false;
        let hasUniqueChar = false;
        let charCount = {};

        for (let i = 0; i < password.length; i++) {
            let char = password[i];

            if (char === char.toUpperCase() && char !== char.toLowerCase()) {
                hasUpperCase = true;
            }

            if (charCount[char]) {
                charCount[char]++;
            } else {
                charCount[char] = 1;
            }
        }

        for (let char in charCount) {
            if (charCount[char] === 1) {
                hasUniqueChar = true;
                break;
            }
        }

        return hasUpperCase && hasUniqueChar;
    }
});
