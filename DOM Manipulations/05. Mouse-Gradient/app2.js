function attachGradientEvents() {
    //Ivaylo Papazov - not working in Judge
    let gradientElement = document.getElementById('gradient');

    gradientElement.addEventListener('click', e => {
        let resultElement = document.getElementById('result'); 
        let offset = e.offsetX;
        let width = e.currentTarget.offsetWidth;
        let percentage = (offset / width) * 100;
        resultElement.textContent=`${Math.floor(percentage)}%`; 
    });
}