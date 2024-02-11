function lockedProfile() {
    const buttons = Array.from(document.querySelectorAll("button"));
    buttons.forEach(x => x.addEventListener("click", handler));

    function handler(event) {
        const hiddenInfo = event.target.parentElement.querySelector('div');
        const radioBtn = event.target.parentElement.querySelector("input[type='radio']:checked");

        if (radioBtn.value == "unlock") {
            if (event.target.textContent == "Show more") {
                event.target.textContent = "Hide it";
                hiddenInfo.style.display = "block";
            } else {
                event.target.textContent = "Show more";
                hiddenInfo.style.display = "none";
            }
        }
    }
}