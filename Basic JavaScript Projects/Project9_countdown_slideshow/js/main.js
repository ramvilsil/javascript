function countdown() {
    //User's input is assigned to "seconds" variable
    var seconds = document.getElementById("seconds").value;
    
    function tick() {
        //Nested function "tick()" reduces the original input value
        //Every second by 1 by calling itself
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        //"setTimeout()" method calls the "tick()" function after 1 second
        var time = setTimeout(tick, 1000);
        //Once seconds reaches a negative value an alert appears
        //And the timer is cleared
        if (seconds == -1) {
            alert("Time's up!");
            //"clearTimeout()" method clears the timer from "setTimer()" method
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    //"tick()" function is called within the "countdown()" function
    tick();
}



//Index of slides is declared and used as an argument
//In the calling of the "showSlides()" function
//Program will start on the first slide
let slideIndex = 1;
showSlides(slideIndex);

//Upon clicking the "arrow" hyperlink, "plusSlides" function will be called
//Function enables "back & forth" slide control
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//Upon clicking the "dots" class elements, "plusSlides" function will be called
//Function enables slides to be accessed directly using a thumbnail
function currentSlide(n) {
    showSlides(slideIndex = n);
  }



function showSlides(n) {
  let i;
  //"getElementsByClassName()" method returns 
  //a collection of corresponding html elements to
  //the variables "slides" and "dots"
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  //Once the user clicks beyond the last image
  //The user will be redirected to the first image
  if (n > slides.length) {slideIndex = 1}
  //Once the user clicks beyond the first image
  //The user will be redirected to the last image
  if (n < 1) {slideIndex = slides.length}
  

//Hides the slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

//Removes the dots from  the "active class"
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

//Displays the current slide
  slides[slideIndex-1].style.display = "block";

  //Sets the current slide's dot to the "active" class
  dots[slideIndex-1].className += " active";
}