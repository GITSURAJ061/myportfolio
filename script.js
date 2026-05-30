const observer = new IntersectionObserver(
(entries) => {

entries.forEach((entry) => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},
{
threshold:0.15
}
);

document
.querySelectorAll(
".project, .stack-card, .about, .contact"
)
.forEach((el)=>{

el.classList.add("hidden");

observer.observe(el);

});

/* ACTIVE NAVIGATION */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener(
"scroll",
()=>{

let current = "";

sections.forEach((section)=>{

const sectionTop =
section.offsetTop - 200;

if(window.scrollY >= sectionTop){

current =
section.getAttribute("id");

}

});

navLinks.forEach((link)=>{

link.classList.remove("active");

if(
link.getAttribute("href")
=== "#" + current
){

link.classList.add("active");

}

});

}
);

/* SMOOTH SCROLL */

document
.querySelectorAll('a[href^="#"]')
.forEach((anchor)=>{

anchor.addEventListener(
"click",
function(e){

e.preventDefault();

document
.querySelector(
this.getAttribute("href")
)
.scrollIntoView({

behavior:"smooth"

});

}
);

});

/* MOUSE GLOW */

const glow =
document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

document.addEventListener(
"mousemove",
(e)=>{

glow.style.left =
e.clientX + "px";

glow.style.top =
e.clientY + "px";

}
);

/* HERO TEXT ANIMATION */

const heroTitle =
document.querySelector(".hero h1");

window.addEventListener(
"load",
()=>{

heroTitle.classList.add("hero-visible");

}
);

/* PROJECT HOVER DEPTH */

document
.querySelectorAll(".preview-card")
.forEach((card)=>{

card.addEventListener(
"mousemove",
(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const rotateY =
((x / rect.width) - 0.5) * 10;

const rotateX =
((y / rect.height) - 0.5) * -10;

card.style.transform =
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)`;

});

card.addEventListener(
"mouseleave",
()=>{

card.style.transform =
"perspective(1000px) rotateX(0) rotateY(0) translateY(0)";

});

});

/* PARALLAX HERO */

window.addEventListener(
"scroll",
()=>{

const scrolled =
window.pageYOffset;

document.body.style.backgroundPositionY =
scrolled * 0.05 + "px";

}
);