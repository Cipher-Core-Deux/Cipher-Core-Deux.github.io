var music = new Audio("Audio/backgroundMusic.mp3");

music.loop = true;

var savedTime = sessionStorage.getItem("musicTime");

if (savedTime) {
    music.currentTime = savedTime;
}

music.play();

// Save song time every second
setInterval(function () {
    sessionStorage.setItem("musicTime", music.currentTime);
}, 1000);
