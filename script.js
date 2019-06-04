// Referanser til html-elementer
const audio = document.querySelectorAll("audio");

// Globale variabler
const knapper = ["a","s","d","f","g","h","j","k"];

// Hendelsesfunksjoner
document.onkeydown = function(event){
  console.log(event.key);
  if(event.key ==="a"){
    audio[5].play();
  }
  for(let i = 0;i < 9; i++){
    console.log(i);
  }
}
