var music = new Audio("Audio/backgroundMusic.mp3");

music.loop = true;

// Get saved song time
var savedTime = sessionStorage.getItem("musicTime");

if (savedTime) {
    music.currentTime = savedTime;
}

// Play music
music.play();

// Save song time every second
setInterval(function () {
    sessionStorage.setItem("musicTime", music.currentTime);
}, 1000);
