/* https://discourse.webflow.com/t/add-background-music-to-page/169554/3 */ 

var source = "Audio/backgroundMusic.mp3" 
    
var audio = document.createElement("audio"); 

audio.autoplay = true; 

audio.load() 
    
audio.addEventListener("load", function() { 
    
     audio.play(); debounce == true 

}, true); 

audio.src = source;
