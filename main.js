const bars = document.getElementById("bars");
const close = document.getElementById("close");
const list = document.getElementById("list");
const btnsShow = document.querySelectorAll("#btn-show");
const comments = document.querySelectorAll("#comment");
const nav = document.getElementById("nav");

/* ============== switch nav background on scroll ============== */
window.addEventListener("scroll",()=>{
    if(window.scrollY >= window.innerHeight){
        nav.style.backgroundColor = "#10294C";
        nav.style.boxShadow ="var(--shadow-dark-blue)";
    }else{
        nav.style.backgroundColor = "transparent";
        nav.style.boxShadow ="none";
    }
});
/* ============== navbar ============== */
bars.addEventListener("click", (e) => {
  close.classList.toggle("responsive-hidden");
  bars.classList.toggle("responsive-hidden");
  list.classList.toggle("active");
});
close.addEventListener("click", (e) => {
  bars.classList.toggle("responsive-hidden");
  close.classList.toggle("responsive-hidden");
  list.classList.toggle("active");
});
for(let i = 0; i < list.children.length; i++){
  list.children[i].addEventListener("click", (e) => {
    bars.classList.remove("responsive-hidden");
    close.classList.add("responsive-hidden");
    list.classList.remove("active");
  });
}

/* ============== faq ============== */
for (let i = 0; i < btnsShow.length; i++) {
  btnsShow[i].addEventListener("click", (e) => {
    comments[i].classList.toggle("active");
    btnsShow[i].classList.toggle("active");
  });
}

/* ============== slider with glider ============== */

const testimonialSlider = new Glider(document.getElementById("testimonial-slider"), {
  slidesToShow: 1,
  slidesToScroll: 1,
  duration: 0.3,
  dots: "#slide-dots",
  draggable: false,
  dragVelocity: 3.3,
  arrows: {
    prev: '#prev-slide',
    next: '#next-slide',
  },
});


