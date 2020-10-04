function stopwatch() {
    let seconds = 0;
    let minutes = 0;
    let intervalId;
    let startButton = document.getElementById('startBtn');
    let stopButton = document.getElementById('stopBtn');
    let timeDiv = document.getElementById('time');

    startButton.addEventListener('click', startBtnHandler);
    stopButton.addEventListener('click', stopBtnHandler);


    function startBtnHandler(e) {
        minutes = 0;
        seconds = 0;
        setTimeDiv(minutes, seconds);
        startButton.setAttribute('disabled', true);
        stopButton.removeAttribute('disabled');

        setInterval(function () {
            seconds++
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
        }, 1000);
    }

    function stopBtnHandler(e) {
        stopButton.setAttribute('disabled', true);
        startButton.removeAttribute('disabled');
        clearInterval(intervalId);
        setTimeDiv(minutes, seconds);
    }


    function formatOutput(val) {
        let text = val.toString();
        if (val < 10) {
            text = '0' + text;
        }
        return text;
    }


    function setTimeDiv(minutes, seconds) {
        timeDiv.innerText = `${formatOutput(minutes)}:${formatOutput(seconds)}`;
    }
}