function addItem() {

    let inputElement = document.getElementById("newItemText");
    let ulElement = document.getElementById("items");

    let liElement = document.createElement("li");
    liElement.innerHTML = inputElement.value;

    ulElement.appendChild(liElement);
    inputElement.value = "";
}  