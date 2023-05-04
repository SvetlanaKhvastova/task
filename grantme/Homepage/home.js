let scriptCalendar = document.createElement("script");
scriptCalendar.src = "https://conversionratestore.github.io/projects/jquery.simple-calendar.js";
scriptCalendar.async = false;
document.head.appendChild(scriptCalendar);

let scriptCalendarStyle = document.createElement("link");
scriptCalendarStyle.href = "https://conversionratestore.github.io/projects/simple-calendar.scss";
scriptCalendarStyle.rel = "stylesheet";
document.head.appendChild(scriptCalendarStyle);

let scriptCustom = document.createElement("script");
scriptCustom.src = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js";
scriptCustom.async = false;
document.head.appendChild(scriptCustom);

let scriptCustomStyle = document.createElement("link");
scriptCustomStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css";
scriptCustomStyle.rel = "stylesheet";
document.head.appendChild(scriptCustomStyle);

let scriptCustomMask = document.createElement("script");
scriptCustomMask.src = "https://cdnjs.cloudflare.com/ajax/libs/imask/6.6.0/imask.min.js";
scriptCustomMask.async = false;
document.head.appendChild(scriptCustomMask);

let slickInterval = setInterval(() => {
  if (typeof jQuery(".testimonials_slider").slick === "function") {
    clearInterval(slickInterval);
    //  slider
    let slider = jQuery(".testimonials_slider").slick({
      slidesToShow: 4.1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: ".testimonials_arrow_prev",
      nextArrow: ".testimonials_arrow_next",
      dots: false,
      infinite: false,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3.2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
    slider.on("swipe", function () {});
  }
}, 100);

// accardionToggleFaqs
const accardionToggleFaqs = (slideMenu) => (e) => {
  slideMenu.forEach((link) => {
    e.preventDefault();
    const hidePanel = link.nextElementSibling;
    if (link === e.currentTarget) {
      e.currentTarget.classList.toggle("active");

      hidePanel.classList.toggle("active_block");
    } else {
      link.classList.remove("active");
      hidePanel.classList.remove("active_block");
    }
  });
};

const slideMenuFaqs = document.querySelectorAll(".accardion_link_faqs");

slideMenuFaqs.forEach((el) => {
  el.addEventListener("click", accardionToggleFaqs(slideMenuFaqs));
});
