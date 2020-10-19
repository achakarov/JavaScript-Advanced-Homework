function solve() {

    const numberInputElement = document.getElementById('input');
    const selectMenuTo = document.getElementById('selectMenuTo');
    const button = document.querySelector('button');
    const resultElement = document.getElementById('result');

    let options = {
        binary: (num) => num.toString(2),
        hexadecimal: (num) => num.toString(16).toUpperCase()
    }

    let binaryElementOption = document.createElement('option');
    binaryElementOption.setAttribute('value', 'binary');
    binaryElementOption.innerHTML = 'Binary'; 
    selectMenuTo.appendChild(binaryElementOption); 

    let hexadecimalElementOption = document.createElement('option');
    hexadecimalElementOption.setAttribute('value', 'hexadecimal');
    hexadecimalElementOption.innerHTML = 'Hexadecimal'; 
    selectMenuTo.appendChild(hexadecimalElementOption);     

    button.addEventListener('click', () => {
        let resultNumber = Number(numberInputElement.value);
        let selectMenuToValue = selectMenuTo.value;
         resultElement.value = options[selectMenuToValue](resultNumber);
    });

}