document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (username !== "" && password !== "") {

            alert("Login Successful!");

            console.log("Username:", username);
            console.log("Password:", password);

        } else {

            alert("Please enter Username and Password!");

        }

    });

});