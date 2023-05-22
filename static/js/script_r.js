function checkPassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("password_confirm").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please re-enter.");
        return false;
    }
    if (password.length < 4) {
        alert("Password must be at least 4 characters long.");
        return false;
    }
    return true;
}

function validateEmail() {
    var email = document.getElementById("email").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    return true;
}

function registerUser() {
    if (checkPassword() && validateEmail()) {
        var id = document.getElementById("id").value;
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        $.ajax({
            url: '/check_duplicate_id',
            method: 'POST',
            data: { id: id },
            success: function(response) {
                if (response === 'duplicate_id') {
                    alert("The ID is already registered. Please use another ID.");
                } else {
                    $.ajax({
                        url: '/register',
                        method: 'POST',
                        data: {
                            id: id,
                            name: name,
                            email: email,
                            password: password
                        },
                        success: function(response) {
                            console.log(response);
                            window.location.href = "/";
                        },
                        error: function(xhr, status, error) {
                            console.error(error);
                        }
                    });
                }
            },
            error: function(xhr, status, error) {
                console.error(error);
            }
        });
    }
}
