var swiper = new Swiper(".mySwiper1", {
  slidesPerView: "auto",
  spaceBetween: 10,
  centeredSlides: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: false,
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
  },
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 2,
  spaceBetween: 10,
  centeredSlides: false,
  autoplay: false,
  loop: true,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: false,
  autoplay: false,
  loop: true,
  pagination: {
    el: ".swiper-pagination3",
    clickable: true,
  },
});
