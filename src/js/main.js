import "../scss/style.scss";
import "../scss/media.scss";
import "../scss/hamburger-menu.scss";

// swiper
import Swiper from "swiper/bundle";

import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

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
       slidesPerView: 2,
       spaceBetween: 100,
    }
  },
});


// form

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("myForm");

  form.addEventListener("submit", function(event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();

      const invalidInputs = form.querySelectorAll(":invalid");
      invalidInputs.forEach(input => {
        input.classList.add("invalid");
      });
    } else {
      event.preventDefault();
      console.log("Form submitted successfully!");
      console.log("Username:", form.name.value);
      console.log("Email:", form.email.value);
      console.log("Message:", form.text.value);
    }
  });

  form.addEventListener("input", function(event) {
    if (event.target.validity.valid) {
      event.target.classList.remove("invalid");
    }
  });
});
