document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');

    // form.addEventListener('submit', function (event) {
    //     event.preventDefault();
    //     if (!validateForm()) {
    //     } else {
    //         // If the form is valid, show success message using SweetAlert with a delay
    //         Swal.fire({
    //             title: "Thank You!",
    //             text: "The form is submitted successfully!",
    //             icon: "success",
    //             // showConfirmButton: false, // Hide the "OK" button
    //             timer: 5000 // 5 seconds delay
    //         });
    //     }
    // });

    function validateForm() {
        var fullName = document.querySelector('input[name="full_name"]').value;
        var email = document.querySelector('input[name="email"]').value;
        var phoneNumber = document.querySelector('input[name="phone_number"]').value;
        var message = document.querySelector('textarea[name="message"]').value;

        var isValid = true;

        if (fullName.trim() === '') {
            isValid = false;
            Swal.fire('Error', 'Please enter your Full Name.', 'error');
        }

        if (email.trim() === '') {
            isValid = false;
            Swal.fire('Error', 'Please enter your Email Address.', 'error');
        } else if (!isValidEmail(email)) {
            isValid = false;
            Swal.fire('Error', 'Please enter a valid Email Address.', 'error');
        }

        if (phoneNumber.trim() === '') {
            isValid = false;
            Swal.fire('Error', 'Please enter your Phone Number.', 'error');
        } else if (!isValidPhoneNumber(phoneNumber)) {
            isValid = false;
            Swal.fire('Error', 'Please enter a valid 10-digit Phone Number.', 'error');
        }

        if (message.trim() === '') {
            isValid = false;
            Swal.fire('Error', 'Please enter a Message.', 'error');
        }

        return isValid;
    }

    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPhoneNumber(phoneNumber) {
        var phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phoneNumber);
    }
});
