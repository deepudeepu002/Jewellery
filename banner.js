const carouselSlide = document.querySelector('.carousel-slide');
const images = carouselSlide.querySelectorAll('img');

let counter = 0;
const size = images[0].clientWidth;

function startCarousel() {
    counter++;
    if (counter >= images.length) {
        counter = 0;
    }
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
}

// Autoplay every 1.5 seconds
setInterval(startCarousel, 1500);


