function solve() {
  const resultRef = document.getElementById("result");
  let textVal = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;
  let result = "";
  let lower = textVal.toLowerCase();
  switch (convention) {
    case "Camel Case":
      let textArr = lower.split(" ");
      result += textArr.shift();
      textArr.forEach(word => {
        result += word[0].toUpperCase() + word.substring(1).toLowerCase();
      });
      break;
    case "Pascal Case":
      lower.split(" ").forEach(word => {
        result += word[0].toUpperCase() + word.substring(1).toLowerCase();
      })
      break;
    default: result = "Error!"
  }

  resultRef.textContent = result;
}