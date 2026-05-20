window.onload = function () {

    var music = document.getElementById("music");

    if (!music) {

        music = document.createElement("audio");

        music.id = "music";
        music.src = "Audio/backgroundMusic.mp3";

        music.autoplay = true;
        music.loop = true;

        // Continue from saved time
        var savedTime = sessionStorage.getItem("musicTime");

        if (savedTime) {
            music.currentTime = savedTime;
        }

        document.body.appendChild(music);

        music.play();

        // Save current time while song plays
        setInterval(function () {
            sessionStorage.setItem("musicTime", music.currentTime);
        }, 1000);

    }

};
