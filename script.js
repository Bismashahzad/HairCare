// script.js
let currentIndex = 0;
const images = document.querySelectorAll('.img img');
const totalImages = images.length;

function showImage(index) {
    images.forEach((img, i) => {
        img.style.opacity = i === index ? 1 : 0;
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

setInterval(nextImage, 3000); // Change image every 3 seconds

// Initial display
showImage(currentIndex);