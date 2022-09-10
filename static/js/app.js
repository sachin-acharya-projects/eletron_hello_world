//Typing Effect
const textArray = ["Hello Everyone, you are most welcome", "Welcome to my first App"]
const typingDelay = 200;
const erasingDelay = 100;
const NextTextDelay = 2000;
let TextIndex = 0;
let CharIndex = 0;
const area = document.querySelector(".updatingText");
const cursor = document.querySelector(".cursorBlink");


function Typing(){
    if(CharIndex < textArray[TextIndex].length){
        if(!cursor.classList.contains("typing")){
            cursor.classList.add("typing");
        }
        area.textContent += textArray[TextIndex].charAt(CharIndex);
        CharIndex++;
        setTimeout(Typing,typingDelay);
    }else{
        setTimeout(erase,NextTextDelay)
        cursor.classList.remove("typing");
    }
}


function erase(){
    if(CharIndex > 0){
        if(!cursor.classList.contains("typing")){
            cursor.classList.add("typing");
        }
        area.textContent = textArray[TextIndex].substring(0,CharIndex-1);
        CharIndex--;
        setTimeout(erase,erasingDelay)
    }else{
        TextIndex++;
        if(TextIndex == textArray.length){
            TextIndex = 0;
        }
        cursor.classList.remove("typing");
        setTimeout(Typing,typingDelay+1100);
    }
}

document.addEventListener("DOMContentLoaded",()=>{
    setTimeout(Typing,NextTextDelay + 250)
})