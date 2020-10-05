function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', mouseMove);
    gradient.addEventListener('mouseout', mouseout);
    let result = document.getElementById('result');

    function mouseMove(e) {
        let power = e.offsetX / (e.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        result.textContent = power + "%";
    
    }

    function mouseout() {
        result.textContent = "";
    }
}