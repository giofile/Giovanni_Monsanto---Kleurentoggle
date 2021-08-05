const menu = document.querySelector('.menu')
const kleurBlok = document.querySelector('.kleurblokken')
const greyBlok = document.querySelector('.grey-blok')
const redBlok = document.querySelector('.red-blok')
const orangeBlok = document.querySelector('.orange-blok')
const purpleBlok = document.querySelector('.purple-blok')
const greenBlok = document.querySelector('.green-blok')
const radioRed = document.querySelector('.radio-red')
const radioOrange= document.querySelector('.radio-orange')
const radioPurple = document.querySelector('.radio-purple')
const radioGreen = document.querySelector('.radio-green')


const displayMenu = function(){
    kleurBlok.style.display = 'block'
}

// menu.addEventListener('click', displayMenu);
menu.addEventListener('mouseover', displayMenu);
menu.addEventListener('mouseleave', displayMenu);



const kleurBlokDisplay = function(){
    kleurBlok.style.display ="none";
}

// --home opmaak
const grey = function(){
      document.location.reload()
}
greyBlok.addEventListener('click', grey)
greyBlok.addEventListener('click', kleurBlokDisplay)


// --rode opmaak
const red = function(){
    document.body.classList.add("red-background")
}

const displayText = document.getElementById('text')

redBlok.addEventListener('click',  red)
redBlok.addEventListener('click', function(){
    const textAdd = " Dit is 'Rood' ! ";
    displayText.innerHTML = textAdd;
})
redBlok.addEventListener('click',  kleurBlokDisplay)


// --oranje opmaak
const orange = function(){
    document.body.classList.add("orange-background")
}
orangeBlok.addEventListener('click', orange)
orangeBlok.addEventListener('click', function(){
    const textAdd = " Dit is 'Oranje' ! ";
    displayText.innerHTML = textAdd;
})
orangeBlok.addEventListener('click', kleurBlokDisplay)


//-- paarse opmaak
const purple = function(){
    document.body.classList.add("purple-background")
}
purpleBlok.addEventListener('click', purple)
purpleBlok.addEventListener('click', function(){
    const textAdd = " Dit is 'Paars' ! ";
    displayText.innerHTML = textAdd;
})
purpleBlok.addEventListener('click', kleurBlokDisplay)


// -- groene opmaak
const green = function(){
    document.body.classList.add("green-background")
}
greenBlok.addEventListener('click', green)
greenBlok.addEventListener('click', function(){
    const textAdd = " Dit is 'Groen' ! ";
    displayText.innerHTML = textAdd;
})
greenBlok.addEventListener('click', kleurBlokDisplay)


// -- radio opmaak
radioRed.addEventListener('click', red)
radioRed.addEventListener('click', function(){
    const textAdd = " Dit is 'Rood' ! ";
    displayText.innerHTML = textAdd;
})
radioRed.addEventListener('click', kleurBlokDisplay)
radioOrange.addEventListener('click', orange)
radioOrange.addEventListener('click', function(){
    const textAdd = " Dit is 'Oranje' ! ";
    displayText.innerHTML = textAdd;
})
radioOrange.addEventListener('click', kleurBlokDisplay)
radioPurple.addEventListener('click', purple)
radioPurple.addEventListener('click', function(){
    const textAdd = " Dit is 'Paars' ! ";
    displayText.innerHTML = textAdd;
})
radioPurple.addEventListener('click', kleurBlokDisplay)
radioGreen.addEventListener('click', green)
radioGreen.addEventListener('click', function(){
    const textAdd = " Dit is 'Groen' ! ";
    displayText.innerHTML = textAdd;
})
radioGreen.addEventListener('click', kleurBlokDisplay)


//-- numerieke opmaak
const keyBoard = document.querySelector('.numeriek')
keyBoard.addEventListener('keypress', function(e){
    console.log(e);
    if (e.keyCode ===49){
       document.location.reload()
    }else if(e.keyCode ===50) {
        document.body.classList.add("red-background")
        const textAdd = " Dit is 'Rood' ! ";
        displayText.innerHTML = textAdd;
    }else if(e.keyCode ===13) {
        document.body.classList.add("orange-background")
        const textAdd = " Dit is 'Oranje' ! ";
        displayText.innerHTML = textAdd;
    }else if(e.keyCode ===52) {
        document.body.classList.add("purple-background")
        const textAdd = " Dit is 'Paars' ! ";
        displayText.innerHTML = textAdd;
    }else if(e.keyCode ===53) {
        document.body.classList.add("green-background")
        const textAdd = " Dit is 'Groen' ! ";
        displayText.innerHTML = textAdd;
    }
})