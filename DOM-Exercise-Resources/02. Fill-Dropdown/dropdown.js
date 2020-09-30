function addItem() {
    
    let itemText = document.getElementById("newItemText"); 
    let itemValue = document.getElementById("newItemValue"); 
    let select = document.getElementById("menu"); 

    let option = `<option value=${itemValue.value}>${itemText.value}</option>`; 
    select.innerHTML += option; 
    
    // let option2 = document.createElement("option");
    // option2.value = itemValue.value;
    // option2.innerText = itemText.value; 
    // select.appendChild(option2); 

    itemText.value = "";
    itemValue.value = ""; 
}