import Swiper from 'swiper';
import 'swiper/css/swiper.css';

export default new Swiper('.swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
