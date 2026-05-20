window.onload = function () {

    var music = document.getElementById("music");

    if (!music) {

        music = document.createElement("audio");

        music.id = "music";
        music.src = "Audio/backgroundMusic.mp3";

        music.autoplay = true;
        music.loop = true;

        document.body.appendChild(music);

        music.play();

    }

};
