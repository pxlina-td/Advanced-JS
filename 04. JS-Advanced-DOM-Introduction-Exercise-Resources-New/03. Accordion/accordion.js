function toggle() {
    const button = document.getElementsByClassName("button")[0];
    const content = document.getElementById("extra");

    if (content.style.display === "none") {
        content.style.display = "block";
        button.textContent = "Less";
    } else {
        content.style.display = "none";
        button.textContent = "More";
    }
}