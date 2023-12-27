// ----------------- Navigation -----------------//












// ----------------- Carousel -----------------//
const slideWrapper = document.querySelector('.carouselItems');
const slides = Array.from(slideWrapper.children);
  console.log(slides);
const nextBtn = document.querySelector('.rightBtn');
const prevBtn = document.querySelector('.leftBtn');
const slideWidth = slides[0].getBoundingClientRect().width;
console.log(slideWidth);

// convert above to a named function
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

// Reusable functions ---
const moveToSlide = (slideWrapper, currentSlide, targetSlide) => {
  slideWrapper.style.transform =  'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('currentSlide');
  targetSlide.classList.add('currentSlide');
}


const hideShowArrows = (slides, prevBtn, nextBtn, targetIndex) => {
  if(targetIndex === 0) {
    prevBtn.classList.add('isHidden');
    nextBtn.classList.remove('isHidden');
  } else if (targetIndex === slides.length - 1) {
    prevBtn.classList.remove('isHidden');
    nextBtn.classList.add('isHidden');
  } else {
    prevBtn.classList.remove('isHidden');
    nextBtn.classList.remove('isHidden');
  }
}

// -- end reusbale functions

// next button
nextBtn.addEventListener('click', e => {
  const currentSlide = slideWrapper.querySelector('.currentSlide');
  const nextSlide = currentSlide.nextElementSibling;
  const nextIndex = slides.findIndex(slide => slide === nextSlide);
  moveToSlide(slideWrapper, currentSlide, nextSlide);
  hideShowArrows(slides, prevBtn, nextBtn, nextIndex);
});

//previous button
prevBtn.addEventListener('click', e => {
  const currentSlide = slideWrapper.querySelector('.currentSlide');
  const prevSlide = currentSlide.previousElementSibling;
  const prevIndex = slides.findIndex(slide => slide === prevSlide);
  moveToSlide(slideWrapper, currentSlide, prevSlide);
  hideShowArrows(slides, prevBtn, nextBtn, prevIndex);
});


function debounce(func, delay) {
  let timerId;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timerId);
    timerId = setTimeout(function() {
      func.apply(context, args);
    }, delay);
  }
}
// DEALING WITH RESIZE AND ENSURING PAGE LOOKS OK
window.addEventListener('resize', debounce(function() {

  // RELOAD OF THE PAGE
  location.reload();

},100))



