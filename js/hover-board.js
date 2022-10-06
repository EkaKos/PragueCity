
const container =  document.getElementById("container");
const color = ["#F5E94F","#C83C36","#407DE0","#E9725F","#A874EE","#377F83","#F1D3D2"];

const SQUARES = 125;

for ( let i = 0; i<SQUARES; i++){
    
    let square = document.createElement("div")
    square.classList.add("square")
    square.addEventListener('pointerover', () => setColor(square))
    square.addEventListener('pointerout', () => removeColor(square))
    container.append(square)

};

function setColor(element){

  const color = getRandomColor()
  element.style.background = color
  element.style.boxShadow = ` 0 0 2px ${color}, 0 0 10px ${color} `
};

function removeColor(element){
    element.style.background = '#363636'
    element.style.boxShadow =  '0 2px 1px #00000066'
};

function getRandomColor(){
return color[Math.floor(Math.random() * color.length)] 
};