let string = "";
let memory = 0; // Variable to store the memory value

let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML === '=') {
      string = eval(string);
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML === 'C') {
      string = "";
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML === 'M+') {
      memory += parseFloat(string); // Add the current value to memory
      string = ""; // Clear the input string
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML === 'M-') {
      memory -= parseFloat(string); // Subtract the current value from memory
      string = ""; // Clear the input string
      document.querySelector('input').value = string;
    } 
    else {
      string += e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  });
});






var circle = document.querySelector("#circle");
var container = document.querySelector(".container");


window.addEventListener("mousemove", function(dets){
    gsap.to(circle, {
        x: dets.clientX,
        y: dets.clientY,
        duration: .1,
        ease: Expo
    })
})


container.addEventListener("mousemove", function(dets){


    gsap.to(circle, {
        scale:.9,
        color:"#fff"
        // duration: .4
    }) 
    gsap.to(".container", {
        color: "#fff",
        duration: .4,
        
    })

})

container.addEventListener("mouseleave", function(dets){
    gsap.to(circle, {
        scale:3,
        
    })
    
})






