for(var i=0;i<7;i++){
document.querySelectorAll("button")[i].addEventListener("click" , function() {
        // var sound=new Audio('sounds/tom-1.mp3');
        // sound.play();
       var innerhtml=this.innerHTML;
       playsound(innerhtml);
       buttonpressed(innerhtml);
       
    });
}

document.addEventListener("keydown",function(event){
      playsound(event.key);
      buttonpressed(event.key);
});


function playsound(key){
    switch (key) {
        case 'w':
            var sound=new Audio('sounds/crash.mp3');
            sound.play();
            break;
        case 'a':
            var sound=new Audio('sounds/kick-bass.mp3');
             sound.play();
             break;
        case 's':
            var sound=new Audio('sounds/snare.mp3');
             sound.play();
             break;
         case 'd':
                var sound=new Audio('sounds/tom-1.mp3');
                 sound.play();   
                 break;  
        case 'j':
                  var sound=new Audio('sounds/tom-2.mp3');
                     sound.play();   
                     break; 
        case 'k':
                var sound=new Audio('sounds/tom-3.mp3');
                 sound.play();   
                 break;     
        case 'l':
         var sound=new Audio('sounds/tom-4.mp3');
                 sound.play();   
                 break;              
        default:
            break;
       }
}

function buttonpressed(keypressed){
   var activebutton = document.querySelector("." + keypressed);
   activebutton.classList.add("pressed");
   setTimeout(function(){
     activebutton.classList.remove("pressed")

    },100 );
}