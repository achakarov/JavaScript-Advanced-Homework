function solve() {

  let inputParagraph = document.querySelector("#input").innerText;
  let outputDiv = document.querySelector("#output")
  inputParagraph.split(". ");
  let sentenceArray = Array.from(inputParagraph);
  let counter = 0;
  let currentPararaph = document.createElement("p");
  for (let i = 0; i < sentenceArray.length; i++) {
    counter++;
    currentPararaph.innerText += sentenceArray[i];
    if (counter == 3) {
      outputDiv.appendChild(currentPararaph);
      currentPararaph = document.createElement("p");
      counter = 0;
    }
  }
  if (counter != 0) {
    outputDiv.appendChild(currentPararaph);
  }
}
