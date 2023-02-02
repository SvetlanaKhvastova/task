let scriptCustomSlider = document.createElement("script")
scriptCustomSlider.src = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"
scriptCustomSlider.async = false
document.head.appendChild(scriptCustomSlider)

let scriptCustomSliderStyle = document.createElement("link")
scriptCustomSliderStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
scriptCustomSliderStyle.rel = "stylesheet"
document.head.appendChild(scriptCustomSliderStyle)

let slickInterval = setInterval(() => {
    if (typeof jQuery(".slider_nav").slick === "function" && document.querySelector(".slider_nav")) {
        clearInterval(slickInterval)

        //  slider
        setTimeout(() => {
            let slider = $(".slider_nav").slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,
                adaptiveHeight: true,
                // autoplay: true,
                autoplaySpeed: 3000,
                prevArrow: `
                     <div class="prev_btn" >
             <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g opacity="0.3">
               <path d="M25 30L15 20L25 10" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
               </g>
             </svg>
                     </div>
                 `,
                nextArrow: `
            <div class="next_btn" >
             <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g opacity="0.3">
               <path d="M15 30L25 20L15 10" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
               </g>
             </svg>
             </div>
         `,
            })
        }, 200)
    }
}, 100)

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
document.querySelector('.hero_reviews').addEventListener('click', () => {
    document.querySelector("#reviewsBlock").scrollIntoView({ block: "start", behavior: "smooth" })
})
document.querySelectorAll('.get_luminette_btn').forEach((e) => {
    e.addEventListener('click', (i) => {
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