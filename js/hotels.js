
document.getElementById("slider").addEventListener("mousemove", (event)=>{

    // let thumb = slider.querySelector(".thumb");
   let thumb = event.target.closest(".thumb");
    let shiftX;
    
    thumb.onpointerdown = function(event) {
      event.preventDefault(); // prevent selection start (browser action)
    
      shiftX = event.clientX - thumb.getBoundingClientRect().left;
    
      thumb.setPointerCapture(event.pointerId);
    };
    
    thumb.onpointermove = function(event) {
      let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;
    
      // если указатель находится за пределами слайдера => отрегулировать "left", чтобы оставаться в пределах границ
      if (newLeft < 0) {
        newLeft = 0;
      }
      let rightEdge = slider.offsetWidth - thumb.offsetWidth;
      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      }
    
      thumb.style.left = newLeft + "px";
    };
    
    thumb.ondragstart = () => false;
})

   
