import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';

Swiper.use([Navigation, Pagination]);

const mySwiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,

  breakpoints: {
    415: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

export default mySwiper;
