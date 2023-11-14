//Nav
const menu1 = document.querySelector('.menu');
const hamburger1 = document.querySelector('.hamburger');

hamburger1.addEventListener('click', () => {
    menu1.classList.toggle('menuOpen');
    hamburger1.classList.toggle('hamburgerOpen');
})

menu1.addEventListener('click', () => {
    menu1.classList.remove('menuOpen');
    hamburger1.classList.remove('hamburgerOpen');
})

//SLIDE SHOW
// const images = document.querySelectorAll('.slideshow img');
// let currentIndex = 0;
// images[currentIndex].classList.add('active');

// setInterval(() => {
//     images[currentIndex].classList.remove('active');
//     currentIndex = (currentIndex + 1) % 4;
//     images[currentIndex].classList.add('active');
// }, 3000);

const images = document.querySelectorAll('.slideshow img');
let currentIndex = 0;

function showImage(index) {
  images[currentIndex].classList.remove('active');
  images[currentIndex].style.opacity = 0;
  images[index].classList.add('active');
  images[index].style.opacity = 1;
  currentIndex = index;
}

images.forEach((image, index) => {
  image.style.opacity = 0;
  image.addEventListener('load', () => {
    if(index === 0) {
      image.classList.add('active');
      image.style.opacity = 1;
    }
  })
})

setInterval(() => {
  let nextIndex = currentIndex + 1;
  if(nextIndex >= images.length) {
    nextIndex = 0;
  }
  showImage(nextIndex)
}, 3000);

//modal
document.querySelectorAll('.imageModalContainer img').forEach(image => {
    image.addEventListener('click', () => {
        document.querySelector('.popupImage').computedStyleMap.display = 'block';
        document.querySelector('.popupImage img').src = image.getAttribute('src');
    })
});
document.querySelector('.popupImage span').addEventListener('click', () => {
    document.querySelector('.popupImage').style.display = 'none';
});