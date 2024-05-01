
function validation() {
    var form = document.getElementById("Form");
    console.log(form);
    var email = document.getElementById("email");
    var text = document.getElementById("text");
    var inputBox = document.getElementById("input_box_email");
    console.log(text);
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your Email adrees is vaild";
        text.style.color = "#00ff00";

        inputBox.classList.add("valid");
        inputBox.classList.remove("invalid");
        email.style.border = "2px solid #00ff00"
        return true

    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Please Enter vaild Email";
        text.style.color = "#ff0000";

        inputBox.classList.remove("valid");
        inputBox.classList.add("invalid");
        email.style.border = "2px solid #ff0000"
        return false
    }

};
function validationPassword() {
    var form = document.getElementById("Form");
    console.log(form);
    var password = document.getElementById("password");
    var text = document.getElementById("text_password");
    var inputBox = document.getElementById("input_box_password");
    console.log(password.value);
    console.log(password.value.length);
    if (password.value.length > 8) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your Password is Vaild";
        text.style.color = "#00ff00";

        password.style.border = "2px solid #00ff00";
        return true;
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Please Enter vaild Password ";
        text.style.color = "#ff0000";
        password.style.border = "2px solid #ff0000"
        return false
    }

};

function Login() {
    // var email = document.getElementById("email").value;
    // var password = document.getElementById("password").value;
    var Erore = document.getElementById("Error");

    if (validation() && validationPassword()) {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var storedEmail = decodeURIComponent(getCookies("email"));
        var storedPassword = decodeURIComponent(getCookies("password"));
        console.log(storedEmail)
        console.log(storedPassword)
        if (email === storedEmail && password === storedPassword) {
            window.location.replace("landing.html");
        } else {
            Erore.innerHTML = " Your Mail or Pasward is not vaild"
        }
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            customClass: {
                confirmButton: 'custom-confirm-class',
            }
        });

    }


}

var passwordImg = document.getElementById("passward_img");

passwordImg.addEventListener("click", function () {
    var passwordInput = document.getElementById("password");

    if (passwordImg.getAttribute('data-text') === "show") {
        passwordImg.setAttribute('data-text', "hide");
        passwordInput.setAttribute("type", "text");
        passwordImg.querySelector('img').setAttribute('src', 'images/hide.png');
    } else {
        passwordImg.setAttribute('data-text', "show");
        passwordInput.setAttribute("type", "password");
        passwordImg.querySelector('img').setAttribute('src', 'images/show.png');
    }
});

