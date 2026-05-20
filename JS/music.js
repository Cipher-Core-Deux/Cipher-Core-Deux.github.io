/* https://discourse.webflow.com/t/add-background-music-to-page/169554/3 */

var source = "Audio/backgroundMusic.mp3"
 var audio = document.createElement("audio");
 //
 audio.autoplay = true;
 //
 audio.load()
 var debounce = false
 audio.addEventListener("load", function() { 
  if (debounce == false) {
     audio.play();
   debounce == true
  }
 }, true);
 audio.src = source;
