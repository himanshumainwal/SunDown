
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#fixed_elem'),
//     smooth: true
// });

let elem = document.querySelector("#project_section");
let fixedImg = document.querySelector("#fixed_elem");
elem.addEventListener("mouseenter", () => {
  fixedImg.style.display = "block";
});
elem.addEventListener("mouseleave", () => {
  fixedImg.style.display = "none";
});

let displayImg = document.querySelectorAll(".project_details");
displayImg.forEach((e) => {
  e.addEventListener("mouseenter", () => {
    let img = e.getAttribute("data-img");
    fixedImg.style.backgroundImage = `url(${img})`;
  });
});

let img_view = document.querySelectorAll(".img_view");
let heading_view = document.querySelectorAll(".heading_view");
let para = document.querySelectorAll(".para");

for (let i = 0; i < heading_view.length; i++) {
    heading_view[i].addEventListener("click", () => handleTabClick(i));
}

function handleTabClick(index) {
    for (let i = 0; i < heading_view.length; i++) {
        img_view[i].style.display = i === index ? "block" : "none";
        heading_view[i].style.color = i === index ? "white" : "gray";
        heading_view[i].style.borderLeft = i === index ? "2px solid red" : "1px solid gray";
        para[i].style.display = i === index ? 'block' : 'none';
    }
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
});







// let img_view = document.querySelectorAll(".img_view");
// let heading_view = document.querySelectorAll(".heading_view");
// let para = document.querySelectorAll(".para");
// let mainPara = document.querySelector(".main_para");

// heading_view[0].addEventListener("click", () => {
//     img_view[0].style.display = "block";
//     heading_view[0].style.color = "white";
//     heading_view[0].style.borderLeft = "2px solid red";
//     img_view[1].style.display = "none";
//     img_view[2].style.display = "none";
//     heading_view[1].style.color = "gray";
//     heading_view[2].style.color = "gray";
//     heading_view[1].style.borderLeft = "1px solid gray";
//     heading_view[2].style.borderLeft = "1px solid gray";
//     mainPara.style.display = 'block';
//     para[1].style.display = 'none'
//     para[0].style.display = 'none'
//   });
// heading_view[1].addEventListener("click", () => {
//   img_view[1].style.display = "block";
//   heading_view[1].style.color = "white";
//   heading_view[1].style.borderLeft = "2px solid red";
//   img_view[0].style.display = "none";
//   img_view[2].style.display = "none";
//   heading_view[0].style.color = "gray";
//   heading_view[2].style.color = "gray";
//   heading_view[0].style.borderLeft = "1px solid gray";
//   heading_view[2].style.borderLeft = "1px solid gray";
//   mainPara.style.display = 'none';
//   para[0].style.display = 'block'
//   para[1].style.display = 'none'
// });
// heading_view[2].addEventListener("click", () => {
//   img_view[2].style.display = "block";
//   heading_view[2].style.color = "white";
//   heading_view[2].style.borderLeft = "2px solid red";
//   img_view[0].style.display = "none";
//   img_view[1].style.display = "none";
//   heading_view[0].style.color = "gray";
//   heading_view[1].style.color = "gray";
//   heading_view[0].style.borderLeft = "1px solid gray";
//   heading_view[1].style.borderLeft = "1px solid gray";
//   mainPara.style.display = 'none';
//   para[1].style.display = 'block';
//   para[0].style.display = 'none';
// });




