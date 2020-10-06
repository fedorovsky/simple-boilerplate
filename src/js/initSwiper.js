import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';

Swiper.use([Navigation, Pagination]);

const mySwiper = new Swiper('.swiper-container', {
  loop: true,

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
