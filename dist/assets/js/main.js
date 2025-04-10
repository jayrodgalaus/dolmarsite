import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import Rellax from 'rellax';

// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Initialize Rellax
const rellax = new Rellax('.swiper-slide', {
    center: true, // Centers the parallax effect
    speed: -2,    // Adjust parallax speed
});