import './style.scss'


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    1440: {
      slidesPerView: 2.5
    }
  },
});



  // if (width >= 1024) {
  //   var swiper = new Swiper(".mySwiper", {
  //     slidesPerView: 2,
  //     spaceBetween: 30,
  //     pagination: {
  //       el: ".swiper-pagination",
  //       clickable: true,
  //     },
  //   });
  // } else {
  //   var swiper = new Swiper(".mySwiper", {
  //     slidesPerView: 1,
  //     spaceBetween: 30,
  //     pagination: {
  //       el: ".swiper-pagination",
  //       clickable: true,
  //     },
  //   });
  // }


