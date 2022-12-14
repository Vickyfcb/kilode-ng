/*=============== TESTIMONIAL ===============*/
// let testimonialSwiper = new Swiper('.swiper', {
//     spaceBetween:30,
//     loop: 'true',
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
// });
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));
/*=============== TESTIMONIAL ===============*/
const testimonialContainer = [
    {
        id:1,
        name: "ANONYMOUS",
        text: "Great job. It feels great to see things differently and to be understood without judgement. I'll definitely reconnect with kilodé again and tell my friends as well. Great Job."
        
    },
    {
        id:2,
        name: "EDDY CHRIS",
        text: "Great job. It feels great to see things differently and to be understood without judgement. I'll definitely reconnect with kilodé again and tell my friends as well. Great Job."
        
    },
    {
        id:3,
        name: "TAIWO SAMUEL",
        text: "Great job. It feels great to see things differently and to be understood without judgement. I'll definitely reconnect with kilodé again and tell my friends as well. Great Job."
        
    }
];
// select items
const author = document.getElementById("author");
const info = document.getElementById("info");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
});

// show person based on item
function showPerson(person) {
    const item = testimonialContainer[person];
    author.textContent = item.name;
    info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > testimonialContainer.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
// show prev person
prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = testimonialContainer.length - 1;
    }
    showPerson(currentItem);
})

// prevBtn.addEventListener("click", function () {
//   currentItem--;
//   if (currentItem < 0) {
//     currentItem = testimonialContainer.length - 1;
//   }
//   showPerson(currentItem);
// })