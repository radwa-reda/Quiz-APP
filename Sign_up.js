function validation() {
    var form = document.getElementById("Form");
    var email = document.getElementById("email");
    var text = document.getElementById("text");
    var inputBox = document.getElementById("input_box_email");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.value.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your Email address is Valid";
        text.style.color = "#00ff00";
        inputBox.classList.add("valid");
        inputBox.classList.remove("invalid");
        email.style.border = "2px solid #00ff00";
        return true;
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Please Enter valid Email";
        text.style.color = "#ff0000";
        inputBox.classList.remove("valid");
        inputBox.classList.add("invalid");
        email.style.border = "2px solid #ff0000";
        return false;
    }
}

function validationlName() {
    var form = document.getElementById("Form");
    var lname = document.getElementById("lname");
    var text = document.getElementById("text_lname");
    var inputBox = document.getElementById("input_box_lname");
    var usernameRegex = /^[A-Za-z]+$/;

    if (lname.value.match(usernameRegex)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your name is Valid";
        text.style.color = "#00ff00";
        inputBox.classList.add("valid");
        inputBox.classList.remove("invalid");
        lname.style.border = "2px solid #00ff00";
        return true;
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Please Enter valid name";
        text.style.color = "#ff0000";
        inputBox.classList.remove("valid");
        inputBox.classList.add("invalid");
        lname.style.border = "2px solid #ff0000";
        return false;
    }
}

function validationfName() {
    var form = document.getElementById("Form");
    var fname = document.getElementById("fname");
    var text = document.getElementById("text_fname");
    var inputBox = document.getElementById("input_box_fname");
    var usernameRegex = /^[A-Za-z]+$/;

    if (fname.value.match(usernameRegex)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your name is Valid";
        text.style.color = "#00ff00";
        inputBox.classList.add("valid");
        inputBox.classList.remove("invalid");
        fname.style.border = "2px solid #00ff00";
        return true;
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Please Enter valid name";
        text.style.color = "#ff0000";
        inputBox.classList.remove("valid");
        inputBox.classList.add("invalid");
        fname.style.border = "2px solid #ff0000";
        return false;
    }
}

function validationPassword() {
    var form = document.getElementById("Form");
    var password = document.getElementById("password");
    var text = document.getElementById("text_password");
    var inputBox = document.getElementById("input_box_password");

    if (password.value.length > 8) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your Password is Valid";
        text.style.color = "#00ff00";
        password.style.border = "2px solid #00ff00";
        return true;
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Please Enter valid Password (more than 8 characters)";
        text.style.color = "#ff0000";
        password.style.border = "2px solid #ff0000";
        return false;
    }
}

function validationrePassword() {
    var form = document.getElementById("Form");
    var password = document.getElementById("password");
    var repassword = document.getElementById("repassword");
    var text = document.getElementById("text_repassword");
    var inputBox = document.getElementById("input_box_repassword");

    if (repassword.value.length > 8 && password.value === repassword.value) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your Password is Valid";
        text.style.color = "#00ff00";
        inputBox.classList.add("valid");
        inputBox.classList.remove("invalid");
        repassword.style.border = "2px solid #00ff00";
        return true;
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Please Enter valid Password that match";
        text.style.color = "#ff0000";
        inputBox.classList.remove("valid");
        inputBox.classList.add("invalid");
        repassword.style.border = "2px solid #ff0000";
        return false;
    }
}

var passwordImg = document.getElementById("password_img");

passwordImg.addEventListener("click", function () {
    var passwordInput = document.getElementById("password");
    var repasswordInput = document.getElementById("repassword");

    if (passwordInput && repasswordInput) {
        if (passwordImg.getAttribute("data-text") == "show") {
            passwordImg.setAttribute("data-text", "hide");
            passwordInput.setAttribute("type", "text");
            repasswordInput.setAttribute("type", "text");
            passwordImg.querySelector("img").setAttribute("src", "images/hide.png");
        } else {
            passwordImg.setAttribute("data-text", "show");
            passwordInput.setAttribute("type", "password");
            repasswordInput.setAttribute("type", "password");
            passwordImg.querySelector("img").setAttribute("src", "images/show.png");
        }
    } else {
        console.error("Password or Re-enter Password input element not found.");
    }
});

function submitForm() {
    if (
        validationfName() &&
        validationlName() &&
        validation() &&
        validationPassword() &&
        validationrePassword()
    ) {
        var first_name = document.getElementById("fname").value;
        var last_name = document.getElementById("lname").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var repassword = document.getElementById("repassword").value;

        setCookie("first_name", first_name, 10);
        setCookie("last_name", last_name, 10);
        setCookie("email", email, 10);
        setCookie("password", password, 10);
        setCookie("re_password", repassword, 10);
        window.location.replace("login.html");
    } else {
        Swal.fire({
            icon: "error",
            title: "Validation Error",
            text: "Please fill out the form correctly.",
            customClass: {
                confirmButton: "custom-confirm-class",
            },
        });
    }
}
