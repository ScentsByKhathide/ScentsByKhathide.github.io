const slideshowImages = document.querySelectorAll('.featured-fragrance .slideshow img');
let currentIndex = 0;

function showNextImage() {
  slideshowImages[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slideshowImages.length;
  slideshowImages[currentIndex].classList.add('active');
}

setInterval(showNextImage, 5000);