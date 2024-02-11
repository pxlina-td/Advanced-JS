function subtract() {
    const a = Number(document.getElementById("firstNumber").value);
    const b = Number(document.getElementById("secondNumber").value);
    let result = a - b;
    document.getElementById("result").textContent = result;
}
