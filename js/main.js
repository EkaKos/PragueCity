
// sticky footer

const navMain = document.querySelector(".main-nav");
const navToggle = document.querySelector(".main-nav__toggle");
const mobileHeader = document.querySelector(".page-header__logo");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--open");
  }
  else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--open");
  }
  if (navMain.classList.contains("main-nav--open") ){
    mobileHeader.style.display = "none";
  }else{
   mobileHeader.style.display = "";
  }
});




const header = document.querySelector(".page-header");
const sticky = header.offsetTop;


window.onscroll = function () { myFunction() };
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};



// form

const PopUpOpen = document.querySelector(".button-action")
const PopUpBox = document.querySelector(".search-form-box")
const checkInDate = PopUpBox.querySelector(".dateIn")
const checkOutDate = PopUpBox.querySelector(".dateOut")
const checkInName = PopUpBox.querySelector(".name")
const PopUpWin = PopUpBox.querySelector(".search-form-window")



PopUpOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  PopUpBox.classList.toggle("search-form-show");
  checkInDate.focus();

});

PopUpWin.addEventListener("submit", function (evt) {
  if (!checkInDate.value, !checkOutDate.value || !checkInName.value) {
    evt.preventDefault();
  }
});


// hoverColor


const container =  document.getElementById("container");
    const color = ["#F5E94F","#C83C36","#407DE0","#E9725F","#A874EE","#377F83","#F1D3D2"];
    
    const SQUARES = 125;
    
    
    for ( let i = 0; i<SQUARES; i++){
        
        let square = document.createElement("div")
        square.classList.add("square")
    
        square.addEventListener('pointerover', () => setColor(square))
        square.addEventListener('pointerout', () => removeColor(square))
        container.appendChild(square)
    }
    
    function setColor(element){
      const color = getRandomColor()
    
      element.style.background = color
      element.style.boxShadow = ` 0 0 2px ${color}, 0 0 10px ${color} `
    }
    
    function removeColor(element){
        element.style.background = '#363636'
        element.style.boxShadow =  '0 2px 1px #00000066'
    }
    
    function getRandomColor(){
    
    return color[Math.floor(Math.random() * color.length)] 
    
    }
    

