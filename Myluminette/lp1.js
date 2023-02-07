let scriptCustomSlider = document.createElement("script")
scriptCustomSlider.src = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"
scriptCustomSlider.async = false
document.head.appendChild(scriptCustomSlider)

let scriptCustomSliderStyle = document.createElement("link")
scriptCustomSliderStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
scriptCustomSliderStyle.rel = "stylesheet"
document.head.appendChild(scriptCustomSliderStyle)

if (window.innerWidth > 768) {
  let slickInterval = setInterval(() => {
    if (typeof jQuery(".slider_nav").slick === "function" && document.querySelector(".slider_nav")) {
      clearInterval(slickInterval)

      //  slider
      setTimeout(() => {
        let slider = $(".slider_nav").slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          centerMode: true,
          centerPadding: 0,
          dots: true,
          speed: 375,
          prevArrow: `
              <div class="prev_btn" >
                <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.5 1L2 9.5L9.5 17.5" stroke="white" stroke-width="2"/>
                </svg>              
              </div>
                   `,
          nextArrow: `
              <div class="next_btn" >
                <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 18L9 9.5L1.5 1.5" stroke="white" stroke-width="2"/>
                </svg>              
               </div>
           `,
        })

        const classificateDots = (prevDotIndex) => {
          const prevPrevDotIndex = prevDotIndex - 1;
          const nextDotIndex = prevDotIndex + 2;
          const nextNextDotIndex = prevDotIndex + 3;

          const $dots = slider
            .find('.slick-dots > li')
            .removeClass(`
              slick-prev 
              slick-next 
              slick-prev-prev 
              slick-next-next 
              slick-prev-max 
              slick-next-max
            `);

          for (let i = 0; i < prevPrevDotIndex; i++) {
            slider
              .find(`li:nth-child(${i})`)
              .addClass('slick-prev-max');
          }

          for (let i = $dots.length; i > nextNextDotIndex; i--) {
            slider
              .find(`li:nth-child(${i})`)
              .addClass('slick-next-max');
          }

          slider
            .find(`li:nth-child(${prevDotIndex > 0 ? prevDotIndex : $dots.length})`)
            .addClass('slick-prev');

          slider
            .find(`li:nth-child(${prevPrevDotIndex ?? 0}`)
            .addClass('slick-prev-prev');

          slider
            .find(`li:nth-child(${nextDotIndex > $dots.length ? 1 : nextDotIndex})`)
            .addClass('slick-next');

          slider
            .find(`li:nth-child(${nextNextDotIndex ?? 0})`)
            .addClass('slick-next-next');
        };

        classificateDots(0);
        slider.on('beforeChange', (_e, _slick, _curr, next) => classificateDots(next));
      }, 200)
    }
  }, 100)
}

if (window.innerWidth <= 768) {
  let slickInterval = setInterval(() => {
    if (typeof jQuery(".how_wear_list").slick === "function" && document.querySelector(".how_wear_list")) {
      clearInterval(slickInterval)

      //  slider
      setTimeout(() => {
        let slider = $(".how_wear_list").slick({
          slidesToShow: 1.15,
          slidesToScroll: 1,
          infinite: false,
          arrows: false,
          focusOnSelect: true,
          dots: true,
        })
      }, 200)
    }
  }, 100)
}

// FAQs ///////////////////////
$(".accardion_link").click(function (e) {
  console.log(e.currentTarget)
  $(this).toggleClass("active")
  $(this).closest("li").toggleClass("active")
  $(this).next(".accardion_lists").slideToggle()
  if ($(".accardion_link").not(this)) {
    $(".accardion_link").not(this).next(".accardion_lists").css("display", "none")
    $(".accardion_link").not(this).removeClass("active")
    $(".accardion_link").not(this).closest("li").removeClass("active")
  }
})

// scroll to el...../////////////////////
document.querySelector(".hero_reviews").addEventListener("click", () => {
  document.querySelector("#reviewsBlock").scrollIntoView({ block: "start", behavior: "smooth" })
})
document.querySelectorAll(".get_luminette_btn").forEach((e) => {
  e.addEventListener("click", (i) => {
    i.preventDefault()
    document.querySelector("#guaranteeBlock").scrollIntoView({ block: "center", behavior: "smooth" })
  })
})

// visible sticky header /////////////////////
const element = document.querySelector("#hero h1")

function visible(target) {
  if (target.getBoundingClientRect().top < 0) {
    document.querySelector(".sticky_header").classList.remove("hidden")
  } else {
    document.querySelector(".sticky_header").classList.add("hidden")
  }
}

window.addEventListener("scroll", function () {
  visible(element)
})

visible(element)

// tooltip
let scriptPopper = document.createElement("script")
scriptPopper.src = "https://unpkg.com/popper.js@1"
scriptPopper.async = false
document.body.appendChild(scriptPopper)

let scriptTippy = document.createElement("script")
scriptTippy.src = "https://unpkg.com/tippy.js@5"
scriptTippy.async = false
document.body.appendChild(scriptTippy)

let arrTooltipTable = {
  "30-day trial": [
    `<div class="tooltip_bar"><p><b>You have a whole month to trial your Luminette.</b> We recommend that you use Luminette consistently for a minimum of 10 consecutive days.</p><p>However, if you’re dissatisfied, you can choose to be refunded for your Luminette within 30 days of purchase.</p></div>`,
  ],
  "Free shipping": [
    `    <div>
      <div class="icon_wrap">
        <div>
          <img src="img/tooltip_img2.svg" alt="flag en" />
          <img src="img/tooltip_img3.svg" alt="flag ca" />
        </div>
        <p>Free for USA and Canada:</p>
        <p><b>3 to 5 working days</b></p>
      </div>
      <div class="img_wrap">
        <img src="img/tooltip_img4.png" alt="img" />
        <img src="img/tooltip_img5.png" alt="img" />
      </div>
      <p>
        Orders are shipped from our logistics center located in Boise, Idaho. We use the services of Fedex Ground or USPS. Before they deliver your package, the carrier sends you a
        email warning you of the day of its passage.
      </p>
    </div>`,
  ],
  "What’s in the box?": [
    `<div class="tooltip_bar img_box"><div class="box_img"><img src="img/tooltip_img1.jpg" alt="box" /></div><ul><li>Your Luminette</li><li>A protective case</li><li>A micro USB wall charger</li><li>A microfiber cleaning cloth</li><li>Guarantee certificate</li><li>Your instruction manual</li></ul></div>`,
  ],
}
for (let key in arrTooltipTable) {
  document.querySelectorAll("[data-title]").forEach((el) => {
    let title = el.getAttribute("data-title")

    if (key === title) {
      el.setAttribute("data-tooltip", arrTooltipTable[key][0])
    }
  })
}

let tippyRun = setInterval(() => {
  if (typeof tippy === "function" && document.querySelector("[data-tooltip]")) {
    clearInterval(tippyRun)

    document.querySelectorAll("[data-tooltip]").forEach((el) => {
      tippy(el, {
        content: el.getAttribute("data-tooltip"),
        // trigger: "click",
        placement: "top",
        // interactive: true,
        onShow(instance) {
          let a = setInterval(() => {
            if (document.querySelector(".tippy-popper")) {
              clearInterval(a)
              console.log(el.getAttribute("data-title") === "What’s in the box?")
              if (el.getAttribute("data-title") === "What’s in the box?") {
                document.querySelector(".tippy-popper").classList.add("my_style")
              }
              if (window.innerWidth <= 768) {
                const scrollTarget = document.querySelector(".tippy-popper")

                const topOffset = 120
                const elementPosition = scrollTarget.getBoundingClientRect().top
                const offsetPosition = elementPosition - topOffset

                window.scrollBy({
                  top: offsetPosition,
                  behavior: "smooth",
                })
              }
            }
          }, 10)
        },
        onTrigger(e) { },
      })
    })
  }
}, 500)

// see MORE
document.querySelectorAll("[data-more]").forEach((el) => {
  el.addEventListener("click", (e) => {
    console.log(el.nextElementSibling)
    el.classList.add("disN")
    el.nextElementSibling.classList.add("disB")
  })
})
//  show_more
document.querySelectorAll(".show_more").forEach((el) => {
  el.addEventListener("click", (e) => {
    el.classList.add("disN")
    document.querySelectorAll(".slider_link.disN").forEach((i) => {
      i.classList.add("disB")
      if (i.getAttribute("data-scroll")) {
        const scrollTarget = i

        const topOffset = 70
        const elementPosition = scrollTarget.getBoundingClientRect().top
        const offsetPosition = elementPosition - topOffset

        window.scrollBy({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    })
  })
})
// show_more_txt
document.querySelectorAll(".show_more_txt").forEach((el) => {
  el.addEventListener("click", (e) => {
    el.classList.add("is_hidden")
    el.closest(".rw_descr")
      .querySelectorAll("[data-hiddenTxt]")
      .forEach((i) => {
        i.classList.remove("is_hidden")
      })
    el.closest(".rw_descr")
      .querySelectorAll("[data-visabTxt]")
      .forEach((i) => {
        i.classList.add("is_hidden")
      })
  })
})
// video modal
document.querySelector('.play-button-wrapper').addEventListener('click', () => {
  // open modal video
  {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/hZpBFn_YKMY"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe> */}
})

