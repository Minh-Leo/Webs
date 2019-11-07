const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true;
const intervalTime = 4000;
let slideInterval;

const nextSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  // check for next slide
  if (current.nextElementSibling) {
    // add current to next sibling
    current.nextElementSibling.classList.add("current");
  } else {
    // Add current to start
    slides[0].classList.add("current");
  }
  // setTimeout(() => current.classList.remove('current'), 200);
};

const prevSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  // check for prev slide
  if (current.previousElementSibling) {
    // add current to prev sibling
    current.previousElementSibling.classList.add("current");
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add("current");
  }
  // setTimeout(() => current.classList.remove('current'), 200);
};

// Button events
next.addEventListener("click", e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});
prev.addEventListener("click", e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// auto slide
if (auto) {
  // run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}

// ------------------------------------------------------------
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav li");

  burger.addEventListener("click", () => {
    // Toggle nav mobile
    nav.classList.toggle("nav-active");
    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navFade 0.3s ease forwards ${index / 5 + 0.1}s`;
      }
    });
    // Burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

// Smooth scroll
$(".menu a, .top-bar #back-home a").on("click", function(e) {
  if (this.hash !== "") {
    e.preventDefault();
    console.log(this.hash);
    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      600
    );
  }
});

// BoxSlider
$(".boxSlider-tab-list-item").click(function() {
  if ($(this).hasClass("active")) {
    return;
  }
  $(".active").removeClass("active");
  $(this).addClass("active");
  var index = $(this).index();
  var itemContent = $(".boxSlider-content[data-index=" + index + "]");
  $(".boxSlider-body-slide").animate(
    {
      left: 0 - itemContent.position().left
    },
    500
  );
});
