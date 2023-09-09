let currentImageIndex = 0;
const images = document.querySelectorAll('.photos li');

function previousImage() {
  images[currentImageIndex].classList.remove('active');
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  images[currentImageIndex].classList.add('active');
}

function nextImage() {
  images[currentImageIndex].classList.remove('active');
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  images[currentImageIndex].classList.add('active');
}

const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');

leftButton.addEventListener('click', previousImage);
rightButton.addEventListener('click',nextImage);