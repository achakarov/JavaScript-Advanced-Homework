function solve() {
    //Ivaylo Papazov
    let dropdownElement = document.getElementById('dropdown-ul');
    let dropdownButtonElement = document.getElementById('dropdown');
    let boxElement = document.getElementById('box');

    dropdownButtonElement.addEventListener('click', e => {
        let currentDisplay = dropdownElement.style.display;

        if (currentDisplay != 'block') {
            currentDisplay = 'block';
        } else {
            currentDisplay = 'none';
        }

        if (currentDisplay == 'none') {
            boxElement.style.backgroundColor = 'black';
            boxElement.style.color = 'white';
        }

        dropdownElement.style.display = currentDisplay;
    });

    dropdownElement.addEventListener('click', e => {
        let currentStyle = e.target.textContent;
        boxElement.style.backgroundColor = currentStyle;
        boxElement.style.color = 'black';
    });

}