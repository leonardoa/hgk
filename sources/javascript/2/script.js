let row = document.querySelectorAll(".flex-container");
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
});





//images that follow the mouse
let row2 = document.querySelectorAll(".flex-mouse-follow");
//if mouse hover on the row show the image inside
row2.forEach((element) => {
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
