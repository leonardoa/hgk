//slider
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
  slidesPerView: "auto",
  spaceBetween: 10,
  centeredSlides: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: false,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
});

//line and images reveal
//images that follow the mouse
let row = document.querySelectorAll(".flex-mouse-follow");
//if mouse hover on the row show the image inside
row.forEach((element) => {
  //mouse hover on the row show the image inside
  element.addEventListener("mouseover", (e) => {
    if (!e.currentTarget.querySelector("img")) return;
    e.currentTarget.querySelector("img").style.opacity = 1;
  });

  //mouse leave hide the image
  element.addEventListener("mouseleave", (e) => {
    if (!e.currentTarget.querySelector("img")) return;
    e.currentTarget.querySelector("img").style.opacity = 0;
  });

  //follow the mouse
  element.addEventListener("mousemove", (e) => {
    if (!e.currentTarget.querySelector("img")) return;
    let x = e.clientX;
    let y = e.clientY;

    e.currentTarget.querySelector("img").style.opacity = 1;
    //do it with top and left
    e.currentTarget.querySelector("img").style.top = `${y}px`;
    e.currentTarget.querySelector("img").style.left = `${x}px`;
  });
});
