function encodeAndDecodeMessages() {

    const textAreas = document.querySelectorAll('textarea');
    let encodeTextArea = textAreas[0];
    let decodeTextArea = textAreas[1];
    const buttons = document.querySelectorAll('button');
    let encodeButton = buttons[0];
    let decodeButton = buttons[1];

    encodeButton.addEventListener('click', () => {
        let textForEncoding = encodeTextArea.value;
        let result = textForEncoding
            .split('')
            .map(x => convertToNextAsciiSymbol(x))
            .join('');

        decodeTextArea.value = result;
        encodeTextArea.value = '';
    });

    decodeButton.addEventListener('click', () => {
        let textForDecoding = decodeTextArea.value;
        let result = textForDecoding
            .split('')
            .map(x => convertToPreviousAsciiSymbol(x))
            .join('');
        decodeTextArea.value = result;
    });

    function convertToNextAsciiSymbol(symbol) {
        let currentValue = symbol.charCodeAt(0);
        let newSymbol = String.fromCharCode(currentValue + 1);
        return newSymbol;
    }

    function convertToPreviousAsciiSymbol(symbol) {
        let currentValue = symbol.charCodeAt(0);
        let newSymbol = String.fromCharCode(currentValue - 1);
        return newSymbol;
    }
}