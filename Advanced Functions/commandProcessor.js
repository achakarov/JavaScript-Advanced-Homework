function commandProcesor() {

    let text = '';

    return {
        append: x => text += x,
        removeStart: n => text = text.substr(n),
        removeEnd: n => text = text.substr(0, text.length - n),
        print: () => console.log(text),
    }
}

let firstZeroTest = commandProcesor();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
