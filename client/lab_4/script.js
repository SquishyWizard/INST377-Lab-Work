let slidePosition = 0;
const slides = document.getElementsByClassName('carousel_item');
const totalSlides = slides.length;

document.
  getElementById('carousel_button--next')
  .addEventListener("click", function() {
     moveToNextSlide();
  });

document.
  getElementById('carousel_button--prev')
  .addEventListener("click", function() {
    moveToPrevSlide();
  });

  function updateSlidePosition(){
      for (let slide of slides) {
          console.log(slide)
      }
  }
  
  function moveToNextSlide() {
    updateSlidePosition();

    if (slidePosition == totalSlides){
        slidePosition = 0;
    } else{
        slidePosition++;
    }
}
  function moveToPrevSlide() {
    if (slidePosition == 0){
        slidePosition = 0;
    } else{
        slidePosition--;
    }
  }