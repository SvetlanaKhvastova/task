// click on 3d cart
document.querySelector(".box_fist_about > div > .scene form > button").addEventListener("click", function (e) {
  e.preventDefault()
  validationForm(".front_form")
})

document.querySelector(".box_fist_about > div > .scene form > span").addEventListener("click", function (e) {
  e.preventDefault()
  document.querySelector(".card").classList.toggle("is-flipped")
})

// click btn for popup
document.querySelector(".box_already_registered button").addEventListener("click", function (e) {
  e.preventDefault()
  validationForm(".box_already_registered form")
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

if (document.querySelector(".backdrop_popup .popup_after_scroll button:last-child")) {
  document.querySelector(".backdrop_popup .popup_after_scroll button:last-child").addEventListener("click", (e) => {
    e.preventDefault()
    validationForm(".backdrop_popup .popup_after_scroll")
  })
}

// openSwipeText
let arrowInterval = setInterval(() => {
  document.querySelector(".progress_line").classList.toggle("arrow")
}, 1500)

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
  if (dataSwipe < 9) {
    document.querySelector(".box_second_training .swipe_box > div > span").style.left = `calc(22.3% + ${progressLineWidth}px)`
  }
  document.querySelector(".box_second_training .swipe_box > div").setAttribute("data-swipe", `${dataSwipe + 1}`)
}

// on click btn swipe
document.querySelector(".box_second_training .swipe_box > div > span").addEventListener("click", () => {
  console.log(`click`)
  let dataSwipe = +document.querySelector(".box_second_training .swipe_box > div").getAttribute("data-swipe")
  if (dataSwipe <= 9) {
    openSwipeText()
  }

  if (dataSwipe === 9) {
    clearInterval(arrowInterval)
    document.querySelector(".box_second_training .swipe_box > div > span").style.opacity = "0"
    // document.querySelector(".progress_line").classList.remove("arrow")
    document.querySelector(".box_second_training .swipe_box > div svg").style.cursor = "unset"

    setTimeout(() => {
      document.querySelector(".backdrop_popup").classList.remove("is_hidden")
      document.body.style.overflow = "hidden"
      document.querySelector(".backdrop_popup .popup_btn").style.display = "none"
    }, 10000)
  }
})

setInterval(() => {
  document.querySelector(".box_second_training .swipe_box > div > span > svg").classList.toggle("scale_svg")
}, 500)

// validation
function validationForm(parent) {
  let inputValueName = document.querySelector(`${parent} input[name='name']`).value.match(/^[a-zA-Z-]{1,30}$/)
  let inputValueEmail = document.querySelector(`${parent} input[name='email']`).value.match(/^\S+@\S+\.\S+$/)

  if (inputValueName === null) {
    document.querySelector(`${parent} input[name='name']`).classList.add("error")
    document.querySelector(`${parent} .input_validation_name`).style.display = "block"
  } else {
    document.querySelector(`${parent} input[name='name']`).classList.remove("error")
    document.querySelector(`${parent} .input_validation_name`).style.display = "none"
  }

  if (inputValueEmail === null) {
    document.querySelector(`${parent} input[name='email']`).classList.add("error")
    document.querySelector(`${parent} .input_validation_email`).style.display = "block"
    document.querySelector(`${parent} .input_validation_email`).textContent = "Must be a valid email address"
  } else {
    document.querySelector(`${parent} input[name='email']`).classList.remove("error")
    document.querySelector(`${parent} .input_validation_email`).style.display = "none"
  }

  if (inputValueName !== null && inputValueEmail !== null) {
    if (parent === ".front_form") {
      document.querySelector(".card").classList.toggle("is-flipped")
    }
    if (parent === ".box_already_registered form") {
      document.querySelector(".backdrop_popup").classList.remove("is_hidden")
      document.body.style.overflow = "hidden"
      document.querySelector(".backdrop_popup .popup_after_scroll").style.display = "none"
    }
  }
}

// findOption("select")
// function findOption(select) {
//   const option = select.querySelector(`option[value="${select.value}"]`)
//   console.log(option)
//   // Действия над option
// }
