function solve() {

  let textInput = document.getElementById("input").innerText;
  let outputElement = document.getElementById("output");

  let sentences = textInput.split(".").map(x => x + ".");
  let numberOfParagraphs = Math.ceil(sentences.length / 3);


  let paragraphElement = document.createElement("p");
}