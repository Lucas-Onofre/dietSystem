function togglePass() {
    let passwordInput = document.querySelector("input.password-inputs")
    let toggleButton = document.querySelector("button.toggles")

    toggleButton.innerHTML = ""
    if (passwordInput.type == "password") {
        passwordInput.type = "text"
        toggleButton.innerHTML = `
        <img src="./assets/img/olho2.svg" alt="eye">
        `
    }
    else {
        passwordInput.type = "password"
        toggleButton.innerHTML = ""
    }

}



let loginButton = document.querySelector(".load-button")
loginButton.addEventListener("click", () => {
    loginButton.innerHTML = `<img class="rotating-load" src="./assets/img/loading.svg" alt="loading..." />`

    setInterval(function () {
    }, 2000);
})



