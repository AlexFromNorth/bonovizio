import "../scss/style.scss";
import "../scss/media.scss";

import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

// init Swiper:
const swiper = new Swiper(".swiper", {
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView:  1,
  slidesPerGroup: 1,
  mousewhell: true,
  keyboard: true,
  spaceBetween: 50,
  breakpoints: {
    765: {
      //  spaceBetween: 50,
       slidesPerView: 2,
       spaceBetween: 100,
    }
  },
});
