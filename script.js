// Referanser til html-elementer
const audio = document.querySelectorAll("audio");

// Globale variabler
const knapper = ["a","s","d","f","g","h","j","k","l"];

// Hendelsesfunksjoner
document.onkeydown = function(event){
  for(let i = 0;i < 9; i++){
    if(event.key ===knapper[i]){
      audio[i].play();
      audio[i].currentTime = 0;
    }
  }
}
