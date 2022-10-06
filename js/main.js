
// MOBILE NAV

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


// STICKY HEADER

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



// HOVER COLOR BOARD

