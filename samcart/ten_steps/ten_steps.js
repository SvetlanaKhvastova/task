// click on 3d cart
document.querySelector(".box_fist_about > div > .scene form > button").addEventListener("click", function (e) {
  e.preventDefault()
  document.querySelector(".card").classList.toggle("is-flipped")
})

document.querySelector(".box_fist_about > div > .scene form > span").addEventListener("click", function (e) {
  e.preventDefault()
  document.querySelector(".card").classList.toggle("is-flipped")
})

// click btn for popup
document.querySelector(".box_already_registered button").addEventListener("click", function (e) {
  e.preventDefault()
  document.querySelector(".backdrop_popup").classList.remove("is_hidden")
  document.body.style.overflow = "hidden"
  document.querySelector(".backdrop_popup .popup_after_scroll").style.display = "none"
})

document.querySelector(".first_mobile_btn").addEventListener("click", (e) => {
  e.preventDefault()
  document.querySelector(".backdrop_popup").classList.remove("is_hidden")
  document.body.style.overflow = "hidden"
  document.querySelector(".backdrop_popup .popup_btn").style.display = "none"
})

// click close popup
document.querySelectorAll(".close_popup").forEach((item) => {
  item.addEventListener("click", function () {
    document.querySelector(".backdrop_popup").classList.add("is_hidden")
    document.body.style.overflow = ""

    setTimeout(() => {
      document.querySelector(".backdrop_popup .popup_after_scroll").style.display = "block"
      document.querySelector(".backdrop_popup .popup_btn").style.display = "block"
    }, 100)
  })
})

setTimeout(() => {
  document.querySelector(".backdrop_popup.is_hidden").style.display = "block"
}, 100)

// slider
let slider = tns({
  container: ".my_slider",
  items: 1,
  navPosition: "bottom",
  prevButton: ".arrow_left",
  nextButton: ".arrow_right",
})

// send form
// document.querySelector('.box_fist_about > div > .scene form > button').addEventListener('click', () => {
//   document.querySelector('.button.button--color--primary').click()
// })

// document.querySelector('.popup_wrapper div:last-child button').addEventListener('click', () => {
//   document.querySelector('.button.button--color--primary').click()
// })

// document.querySelector('.backdrop_popup.popup_after_scroll button:last-child').addEventListener('click', () => {
//   document.querySelector('.button.button--color--primary').click()
// })

// openSwipeText
function openSwipeText() {
  let dataSwipe = +document.querySelector(".box_second_training .swipe_box > div").getAttribute("data-swipe")
  let progressLineWidth = document.querySelector(".progress_line").getBoundingClientRect().width

  document.querySelectorAll(".box_second_training ul li").forEach((item, idx) => {
    if (idx < dataSwipe) {
      item.classList.add("color_text")
    } else if (idx === dataSwipe) {
      item.classList.add("open_blur_text")
    } else if (idx > dataSwipe) {
      item.classList.add("none_text")
    }
  })

  document.querySelector(".progress_line").style.width = `calc(11.3% + ${progressLineWidth}px)`
  document.querySelector(".box_second_training .swipe_box > div svg").style.left = `calc(11.3% + ${progressLineWidth}px)`
  document.querySelector(".box_second_training .swipe_box > div").setAttribute("data-swipe", `${dataSwipe + 1}`)
}

//
document.querySelector(".box_second_training .swipe_box > div svg").addEventListener("click", () => {
  console.log(`click`)
  let dataSwipe = +document.querySelector(".box_second_training .swipe_box > div").getAttribute("data-swipe")
  if (dataSwipe <= 9) {
    openSwipeText()
  }
})
