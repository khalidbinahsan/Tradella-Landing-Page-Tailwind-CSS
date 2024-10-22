/* ~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~ */
const navMenu = document.getElementById("nav-menu")
const navLink = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById("hamburger")
const hamIcon = document.getElementById("ham-icon")
hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]")
    hamIcon.classList.toggle("ri-close-large-line")
})
navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-[0]")
        hamIcon.classList.toggle("ri-close-large-line")  
    })
})
/* ~~~~~~~~~~~ Swiper ~~~~~~~~~~~~~~~ */
const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 400,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    grabCursor: true,
    slidesPerView: 1
  });

/* ~~~~~~~~~~~~ Scroll Reveal ~~~~~~~~~~~~ */
   const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 300
  })
  sr.reveal('.slide-down')
  sr.reveal('.slide-up', {origin: 'bottom'})
  sr.reveal('.slide-down-interval', {interval: 200})
  sr.reveal('.slide-left', {origin: 'left'})
  sr.reveal('.slide-right', {origin: 'right'})
  sr.reveal('.slide-up-200', {delay: 200, origin: 'bottom'})
  sr.reveal('.slide-left-200', {delay: 200, origin: 'left'})
  sr.reveal('.slide-right-200', {delay: 200, origin: 'right'})