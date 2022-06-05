window.onload = function () {
    var countdownElement = document.getElementById('value'),
        downloadButton = document.getElementById('download'),
        seconds = 10,
        second = 0,
        interval;

    downloadButton.style.display = 'none';

    interval = setInterval(function () {
        countdownElement.firstChild.data = 'You can start your download in ' + (seconds - second) + ' seconds.';
        if (second >= seconds) {
            downloadButton.style.display = 'block';
            clearInterval(interval);
        }

        second++;
    }, 1000);
}

function download() {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
}