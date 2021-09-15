import React, { useEffect }from "react";

// Note: Used Funcion based component to use hooks and to add event listener for carousel when user hovers or clicks on arrow buttons.
// UseEffect  can be adjusted so that it add event listener for all that code below and then return a removal of that listener for clean up
// when user is no longer hovering or clicking
export function Carousel () {

  useEffect(() => {
      
    let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;

document.
  getElementById('carousel__button--next')
  .addEventListener("click", function() {
    moveToNextSlide();
  });
document.
  getElementById('carousel__button--prev')
  .addEventListener("click", function() {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('carousel__item--visible');
    slide.classList.add('carousel__item--hidden');
  }

  slides[slidePosition].classList.add('carousel__item--visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}

      
      
  }, [])


  return (
<div className="container">
<div className="carousel">
      <div className="carousel__item carousel__item--visible">
        <img src="https://source.unsplash.com/featured?nature" />
      </div>
      <div className="carousel__item">
        <img src="https://source.unsplash.com/featured?compassion" />
      </div>
      <div className="carousel__item">
        <img src="https://source.unsplash.com/featured?google" />
      </div>

      <div className="carousel__actions">
        <button id="carousel__button--prev" aria-label="Previous slide"></button>
        <button id="carousel__button--next" aria-label="Next slide"></button>
      </div>
    </div>
     </div>

  )
    
  
}

export default Carousel