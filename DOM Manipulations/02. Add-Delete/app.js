function addItem() {

    let inputElement = document.getElementById("newText");
    let itemsListElement = document.getElementById("items");

    let liElement = document.createElement("li");
    liElement.textContent = inputElement.value;

    let a = document.createElement("a");
    let linkText = document.createTextNode("[Delete]");

    a.appendChild(linkText);
    a.href = "#";
    a.addEventListener("click", deleteItem);

    liElement.appendChild(a);
    itemsListElement.appendChild(liElement);

    inputElement.value = "";

    function deleteItem() {
        liElement.remove();
    }
} 