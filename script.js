// Referanser til html-elementer
const audio = document.querySelectorAll("audio");
const divTrommer = document.querySelectorAll(".tromme");

// Globale variabler
const knapper = ["a","s","d","f","g","h","j","k","l"];

// Hendelsesfunksjoner
document.onkeydown = function(event){
  for(let i = 0;i < 9; i++){
    if(event.key ===knapper[i]){
      divTrommer[i].classList.add("valgtTromme");
      audio[i].play();
      audio[i].currentTime = 0;
    }
  }
}

document.onkeyup = function(event){
  for(let i = 0; i < 9; i++){
    divTrommer[i].classList.remove("valgtTromme");
  }
}
