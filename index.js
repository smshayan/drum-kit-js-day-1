
var buttonLenght = document.querySelectorAll(".drum").length;

var crash = new Audio('sounds/crash.mp3')
var kick = new Audio('sounds/kick-bass.mp3')
var tom1 = new Audio('sounds/tom-1.mp3')
var tom2 = new Audio('sounds/tom-2.mp3')
var tom3 = new Audio('sounds/tom-3.mp3')
var tom4 = new Audio('sounds/tom-4.mp3')
var snare = new Audio('sounds/snare.mp3')


for(var i = 0 ; i < buttonLenght; i++){
    document.querySelectorAll(".drum")[i].addEventListener('click', function(){
        
        var buttonInnerHtml = this.innerHTML ;
        makeSound(buttonInnerHtml)
        buttonAnimate(buttonInnerHtml)
        
    })
}

document.addEventListener('keydown', function(event) {
    
    makeSound(event.key)
    buttonAnimate(event.key)
})


function makeSound(key) {
    switch(key){

            case 'w':
                crash.play();
            break; 
             case 'a':
                tom4.play();
            break; 
             case 's':
                tom3.play();
            break; 
             case 'd':
                tom2.play();
            break; 
             case 'j':
                tom1.play();
            break; 
             case 'k':
                snare.play();
            break; 
             case 'l':
                kick.play();
            break; 
            default : 
            console.log(key)
        }
}

function buttonAnimate(keyPressed){
    var activeButton = document.querySelector('.'+ keyPressed)
    activeButton.classList.add('pressed')

    setTimeout(function(){
        activeButton.classList.remove('pressed')
    },100)
}