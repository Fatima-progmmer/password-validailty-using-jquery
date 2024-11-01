$(document).ready(function () {
    // Form validation
    $('#validation-form').submit(function (event) {
        event.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var confirmPassword = $('#confirm-password').val();

        // Name validation
        if (name === '') {
            $('#name').addClass('is-invalid');
            $('#name + .invalid-feedback').show();
        } else {
            $('#name').addClass('is-valid');
            $('#name + .invalid-feedback').hide();
            $('#name + .valid-feedback').show();
        }

        // Email validation
        var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            $('#email').addClass('is-invalid');
            $('#email + .invalid-feedback').show();
        } else {
            $('#email').addClass('is-valid');
            $('#email + .invalid-feedback').hide();
            $('#email + .valid-feedback').show();
        }

        // Password validation
        if (password === '') {
            $('#password').addClass('is-invalid');
            $('#password + .invalid-feedback').show();
        } else {
            $('#password').addClass('is-valid');
            $('#password + .invalid-feedback').hide();
            $('#password + .valid-feedback').show();
        }

        // Confirm password validation
        if (password !== confirmPassword) {
            $('#confirm-password').addClass('is-invalid');
            $('#confirm-password + .invalid-feedback').show();
        } else {
            $('#confirm-password').addClass('is-valid');
            $('#confirm-password + .invalid-feedback').hide();
            $('#confirm-password + .valid-feedback').show();
        }
    });
});