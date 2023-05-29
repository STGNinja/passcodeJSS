var slideshowImages = document.getElementsByClassName('slideshow-img');
var currentImageIndex = 0;

function showNextImage() {
  slideshowImages[currentImageIndex].style.display = 'none';

  currentImageIndex++;
  if (currentImageIndex >= slideshowImages.length) {
    currentImageIndex = 0;
  }

  slideshowImages[currentImageIndex].style.display = 'block';
}

setInterval(showNextImage, 5000);
