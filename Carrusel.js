const carouselSlide = document.querySelector('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let counter = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const slideWidth = slides[0].clientWidth;

nextBtn.addEventListener('click', () => {
    if (counter >= slides.length - 1) {
        carouselSlide.style.transition = 'none';
        counter = 0;
    } else {
        counter++;
    }
    carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) {
        carouselSlide.style.transition = 'none';
        counter = slides.length - 1;
    } else {
        counter--;
    }
    carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
});