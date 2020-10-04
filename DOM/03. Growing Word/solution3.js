function growingWord() {
    //Ivaylo Papazov
    let parentElement = document.getElementById("exercise");
    let growingWordElement = parentElement.lastElementChild; 
    let colorsElements = document.getElementById("colors"); 
    
    if (!growingWordElement.style.fontSize) {
        growingWordElement.style.fontSize = "2px"; 
    } else {
        growingWordElement.style.fontSize = parseInt(growingWordElement.style.fontSize) * 2 + "px"; 
    }
    let firstColor = colorsElements.firstElementChild; 
    let color = firstColor.innerHTML.toLowerCase();
    
    growingWordElement.style.color = color; 
    colorsElements.appendChild(firstColor); 
}
