let eventVar = "desktop"

if (window.innerWidth <= 768) {
  eventVar = "mobile"
}

// convert time round
let getRoundedDate = (minutes, d = new Date()) => {
  let ms = 1000 * 60 * minutes // convert minutes to ms
  let roundedDate = new Date(Math.ceil(d.getTime() / ms) * ms)
  return roundedDate
}

// dayNow and timeNow
let dayNow = new Date().toDateString().split(" ")
let timeNow = getRoundedDate(5, new Date())

document.querySelector(".box_already_registered form div span:first-child").textContent = `${dayNow[0]} ${dayNow[2]} ${dayNow[1]}`
document.querySelector(".box_already_registered form div span:last-child").textContent = `${timeNow.toTimeString().split(" ")[0].slice(0, 5)}`

// click on 3d cart
document.querySelector(".box_fist_about > div > .scene_box .front_form > button").addEventListener("click", function (e) {
  window.dataLayer = window.dataLayer || []
  dataLayer.push({
    event: "event-to-ga",
    eventCategory: "Exp — 10 secrets landing page",
    eventAction: "Click on Register now button",
    eventLabel: "Form: Save Your Spot (first screen — step 1)",
  })

  e.preventDefault()
  setLocalStorInform(".front_form")
  validationForm(".front_form")

  console.log(`button 1 front_form`)
})

document.querySelector(".box_fist_about > div > .scene_box form > span").addEventListener("click", function (e) {
  window.dataLayer = window.dataLayer || []
  dataLayer.push({
    event: "event-to-ga",
    eventCategory: "Exp — 10 secrets landing page",
    eventAction: "Click on Back button",
    eventLabel: "Form: Save Your Spot (first screen — step 2)",
  })

  e.preventDefault()
  document.querySelector(".card_box").classList.toggle("is-flipped")
  console.log(`button 2 back to front_form`)
})

if (document.querySelector(".box_fist_about > div > .scene_box .back_form > button")) {
  document.querySelector(".box_fist_about > div > .scene_box .back_form > button").addEventListener("click", (e) => {
    window.dataLayer = window.dataLayer || []
    dataLayer.push({
      event: "event-to-ga",
      eventCategory: "Exp — 10 secrets landing page",
      eventAction: "Click on Finish Registration button",
      eventLabel: "Form: Save Your Spot (first screen — step 2)",
    })

    e.preventDefault()
    validationForm(".back_form")
    console.log(`button 3 back_form`)
  })
}

// click btn for popup
document.querySelector(".box_already_registered button").addEventListener("click", function (e) {
  window.dataLayer = window.dataLayer || []
  dataLayer.push({
    event: "event-to-ga",
    eventCategory: "Exp — 10 secrets landing page",
    eventAction: "Click on Register Now button",
    eventLabel: `Form: Save Your Spot (footer — step 1) ${eventVar}`,
  })

  e.preventDefault()
  setLocalStorInform(".box_already_registered form")
  validationForm(".box_already_registered form")
  console.log(`button 4 already_registered block`)
})

if (document.querySelector(".popup_btn .popup_wrapper div:last-child button")) {
  document.querySelector(".popup_btn .popup_wrapper div:last-child button").addEventListener("click", (e) => {
    window.dataLayer = window.dataLayer || []
    dataLayer.push({
      event: "event-to-ga",
      eventCategory: "Exp — 10 secrets landing page",
      eventAction: "Click on Register Now button",
      eventLabel: `Form: Save Your Spot (footer — step 2) ${eventVar}`,
    })

    e.preventDefault()
    validationForm(".popup_btn .popup_wrapper")

    console.log(`button 6 already_registered form send`)
  })
}

document.querySelector(".first_mobile_btn").addEventListener("click", (e) => {
  window.dataLayer = window.dataLayer || []
  dataLayer.push({
    event: "event-to-ga",
    eventCategory: "Exp — 10 secrets landing page",
    eventAction: "Click on Register Now button",
    eventLabel: "First screen (mobile)",
  })

  e.preventDefault()
  document.querySelector(".backdrop_popup").classList.remove("is_hidden")
  document.body.style.overflow = "hidden"
  document.querySelector(".backdrop_popup .popup_btn").style.display = "none"

  //
  window.dataLayer = window.dataLayer || []
  dataLayer.push({
    event: "event-to-ga",
    eventCategory: "Exp — 10 secrets landing page",
    eventAction: "View popup",
    eventLabel: "Form: Save Your Spot (mobile) (V3)",
  })
})

// click close popup
document.querySelectorAll(".close_popup").forEach((item) => {
  item.addEventListener("click", function () {
    let eventLabelText = `Form: Save Your Spot (full popup) ${eventVar}`
    let modify = ""

    if (item.closest(".backdrop_popup .popup_btn")) {
      eventLabelText = `Form: Save Your Spot (footer — step 2) ${eventVar}`
      console.log(eventLabelText)
    }

    if (item.closest(".backdrop_popup .popup_after_scroll")?.getAttribute("data-time")) {
      modify = item.closest(".backdrop_popup .popup_after_scroll").getAttribute("data-time")
      document.querySelector(".backdrop_popup .popup_after_scroll").removeAttribute("data-time")
    }

    window.dataLayer = window.dataLayer || []
    dataLayer.push({
      event: "event-to-ga",
      eventCategory: "Exp — 10 secrets landing page",
      eventAction: "Close popup",
      eventLabel: eventLabelText + modify,
    })

    document.querySelector(".backdrop_popup").classList.add("is_hidden")
    document.body.style.overflow = ""

    setTimeout(() => {
      document.querySelector(".backdrop_popup .popup_after_scroll").style.display = "flex"
      document.querySelector(".backdrop_popup .popup_btn").style.display = "flex"
    }, 100)
  })
})

setTimeout(() => {
  document.querySelector(".backdrop_popup.is_hidden").style.display = "block"
}, 100)

// slider
let sliderInterval = setInterval(() => {
  if (typeof tns === "function") {
    clearInterval(sliderInterval)

    let slider = tns({
      container: ".my_slider",
      items: 1,
      navPosition: "bottom",
      prevButton: ".arrow_left_btn",
      nextButton: ".arrow_right_btn",
    })

    slider.events.on("transitionEnd", () => {
      window.dataLayer = window.dataLayer || []
      dataLayer.push({
        event: "event-to-ga",
        eventCategory: "Exp — 10 secrets landing page",
        eventAction: "Swipe slider",
        eventLabel: `Slider swipe ${eventVar}`,
      })
    })
  }
}, 200)

// openSwipeText
function openSwipeText() {
  let dataSwipe = +document.querySelector(".box_second_training .swipe_box > div").getAttribute("data-swipe")

  document.querySelectorAll(".box_second_training ul li").forEach((item, idx) => {
    if (idx < dataSwipe) {
      item.classList.add("color_text")
      if (window.innerWidth <= 768) {
        item.style.marginBottom = "105px"
      }
    } else if (idx === dataSwipe) {
      item.classList.add("open_blur_text")
      if (window.innerWidth <= 768) {
        item.style.marginBottom = "105px"
      }
    } else if (idx > dataSwipe) {
      item.classList.add("none_text")
    }
  })

  if (window.innerWidth > 768) {
    document.querySelector(".progress_line").style.width = `calc(${11.3 * (dataSwipe - 1)}% + 45px)`

    document.querySelector(".box_second_training .swipe_box > div svg").style.left = `calc(${11.3 * (dataSwipe - 1)}% + 45px)`
    if (dataSwipe < 9) {
      document.querySelector(".box_second_training .swipe_box > div > span").style.left = `calc(${11.3 * dataSwipe}% + 45px)`
    }
    document.querySelector(".box_second_training .swipe_box > div").setAttribute("data-swipe", `${dataSwipe + 1}`)
  }

  if (window.innerWidth <= 768) {
    document.querySelector(".progress_line").style.height = `calc(${131 * (dataSwipe - 1)}px + 45px)`
    document.querySelector(".box_second_training .swipe_box > div svg").style.top = `calc(${131 * (dataSwipe - 1)}px + 45px - 18px)`

    if (dataSwipe < 9) {
      document.querySelector(".box_second_training .swipe_box > div > span").style.top = `calc(${131 * dataSwipe}px + 45px - 20px)`
    }
    document.querySelector(".box_second_training .swipe_box > div").setAttribute("data-swipe", `${dataSwipe + 1}`)
  }
}

let scaleSvg = setInterval(() => {
  document.querySelector(".box_second_training .swipe_box > div > span > svg").classList.toggle("scale_svg")
}, 500)

// on click btn swipe
document.querySelector(".box_second_training .swipe_box > div > span").addEventListener("click", () => {
  window.dataLayer = window.dataLayer || []
  dataLayer.push({
    event: "event-to-ga",
    eventCategory: "Exp — 10 secrets landing page",
    eventAction: "Click on pulsing indicator",
    eventLabel: `Change step ${eventVar}`,
  })

  let dataSwipe = +document.querySelector(".box_second_training .swipe_box > div").getAttribute("data-swipe")
  if (dataSwipe <= 9) {
    openSwipeText()
  }

  if (dataSwipe === 9) {
    clearInterval(scaleSvg)
    document.querySelector(".box_second_training .swipe_box > div > span").style.opacity = "0"
    document.querySelector(".box_second_training .swipe_box > div span").style.cursor = "unset"

    setTimeout(() => {
      let inputInform
      if (localStorage.getItem("inputInform")) {
        inputInform = JSON.parse(localStorage.getItem("inputInform"))
        inputInform.map((item) => {
          if (item.inputName !== "" || item.inputEmail !== "") {
            document.querySelector(`.backdrop_popup .popup_after_scroll input[name='name']`).value = item.inputName
            document.querySelector(`.backdrop_popup .popup_after_scroll input[name='email']`).value = item.inputEmail
          }
        })
      }

      document.querySelector(".backdrop_popup").classList.remove("is_hidden")
      document.body.style.overflow = "hidden"
      document.querySelector(".backdrop_popup .popup_btn").style.display = "none"
      document.querySelector(".backdrop_popup .popup_after_scroll").setAttribute("data-time", " 10sec")
      //
      window.dataLayer = window.dataLayer || []
      dataLayer.push({
        event: "event-to-ga",
        eventCategory: "Exp — 10 secrets landing page",
        eventAction: "View popup",
        eventLabel: `Form: Save Your Spot (full popup) ${eventVar} 10sec`,
      })
    }, 10000)
  }
})

// on click btn send form
if (document.querySelector(".backdrop_popup .popup_after_scroll button:last-child")) {
  document.querySelector(".backdrop_popup .popup_after_scroll button:last-child").addEventListener("click", (e) => {
    let eventLabelText = `Form: Save Your Spot (full popup) ${eventVar}`
    let modify = ""

    if (document.querySelector(".backdrop_popup .popup_after_scroll")?.getAttribute("data-time")) {
      modify = document.querySelector(".backdrop_popup .popup_after_scroll").getAttribute("data-time")
    }

    window.dataLayer = window.dataLayer || []
    dataLayer.push({
      event: "event-to-ga",
      eventCategory: "Exp — 10 secrets landing page",
      eventAction: "Click on Register Now button",
      eventLabel: eventLabelText + modify,
    })

    e.preventDefault()
    validationForm(".backdrop_popup .popup_after_scroll")

    console.log(`button 7 popup swipe`)
  })
}

if (document.querySelector(".back_form") || document.querySelector(".popup_btn .popup_wrapper") || document.querySelector(".backdrop_popup .popup_after_scroll")) {
  dataToday(".back_form")
  dataToday(".popup_btn .popup_wrapper")
  dataToday(".backdrop_popup .popup_after_scroll")
}

// validation form
function validationForm(parent) {
  if (parent === ".front_form" || parent === ".box_already_registered form" || parent === ".backdrop_popup .popup_after_scroll") {
    let inputValueName = document.querySelector(`${parent} input[name='name']`).value.match(/^[a-zA-Z-]{1,30}$/)
    let inputValueEmail = document.querySelector(`${parent} input[name='email']`).value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/)

    // let inputValueEmail = document.querySelector(`${parent} input[name='email']`).value.match(/^\S+@\S+\.\S+$/)
    // let inputValueEmail = document
    //   .querySelector(`${parent} input[name='email']`)
    //   .value.match(
    //     /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum|ua)\b/
    //   )

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

    if (inputValueName !== null && inputValueEmail !== null && document.querySelector(`${parent} .error`) == null) {
      if (parent === ".front_form") {
        document.querySelector(".card_box").classList.toggle("is-flipped")
      }
      if (parent === ".box_already_registered form") {
        document.querySelector(".backdrop_popup").classList.remove("is_hidden")
        document.body.style.overflow = "hidden"
        document.querySelector(".backdrop_popup .popup_after_scroll").style.display = "none"

        setTimeout(() => {
          document.querySelector(".backdrop_popup .popup_btn").style.display = "flex"

          window.dataLayer = window.dataLayer || []
          dataLayer.push({
            event: "event-to-ga",
            eventCategory: "Exp — 10 secrets landing page",
            eventAction: "View popup",
            eventLabel: `Form: Save Your Spot (footer — step 2) ${eventVar}`,
          })
        }, 100)
      }
    }
  }

  if (parent === ".back_form" || parent === ".popup_btn .popup_wrapper" || parent === ".backdrop_popup .popup_after_scroll") {
    let selectValue = document.querySelector(`${parent} select[name='customFields']`).value
    let selectValueTime = document.querySelector(`${parent} select[name='startTime']`).value
    let inputValueName
    let inputValueEmail
    let inputInform

    if (parent === ".backdrop_popup .popup_after_scroll") {
      inputValueName = document.querySelector(`.backdrop_popup .popup_after_scroll input[name='name']`).value
      inputValueEmail = document.querySelector(`.backdrop_popup .popup_after_scroll input[name='email']`).value
    } else {
      if (localStorage.getItem("inputInform")) {
        inputInform = JSON.parse(localStorage.getItem("inputInform"))

        inputInform.map((item) => {
          if (item.inputName !== "" || item.inputEmail !== "") {
            inputValueName = item.inputName
            inputValueEmail = item.inputEmail
          }
        })
      }
    }

    if (selectValue === "") {
      document.querySelector(`${parent} select[name='customFields']`).classList.add("error")
      document.querySelector(`${parent} .input_validation_select`).style.display = "block"
    } else if (selectValue !== "") {
      document.querySelector(`${parent} select[name='customFields']`).classList.remove("error")
      document.querySelector(`${parent} .input_validation_select`).style.display = "none"

      if (document.querySelector(`${parent} .error`) == null) {
        if (parent === ".back_form") {
          document.querySelector(".card_box").classList.toggle("is-flipped")
          document.querySelectorAll(`.front_form input`).forEach((item) => {
            item.value = ""
          })
        }

        if (parent === ".popup_btn .popup_wrapper" || parent === ".backdrop_popup .popup_after_scroll") {
          document.querySelector(".backdrop_popup").classList.add("is_hidden")
          document.body.style.overflow = ""

          setTimeout(() => {
            document.querySelector(".backdrop_popup .popup_after_scroll").style.display = "flex"
          }, 100)
        }

        if (parent === ".popup_btn .popup_wrapper") {
          document.querySelectorAll(`.box_already_registered form input`).forEach((item) => {
            item.value = ""
          })
        }

        postForm(inputValueName, inputValueEmail, selectValueTime, selectValue)
        if (document.querySelector(".backdrop_popup .popup_after_scroll")?.getAttribute("data-time")) {
          document.querySelector(".backdrop_popup .popup_after_scroll").removeAttribute("data-time")
        }
      }
    }
  }
}

// data today
function dataToday(parent) {
  const options = {
    month: "short",
    day: "numeric",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
  }

  let today = new Date()
  let date = getRoundedDate(5, today).toJSON()
  let dataNow = getRoundedDate(5, today)

  document.querySelector(`${parent} select[name='startTime'] option`).value = date
  document.querySelector(`${parent} select[name='startTime'] option`).textContent = dataNow.toLocaleString("en-US", options)
}

//set LocalStor Inform
function setLocalStorInform(parent) {
  let inputInform = []

  localStorage.removeItem("inputInform")
  inputInform.push({
    inputName: document.querySelector(`${parent} input[name='name']`).value,
    inputEmail: document.querySelector(`${parent} input[name='email']`).value,
  })

  localStorage.setItem("inputInform", JSON.stringify(inputInform))
}

if (window.innerWidth <= 768) {
  document.querySelector(".box_second_training p").textContent =
    "Everything you need to know for growing your business in only 45+ minutes. Tap down trough the timeline to discover all the themes"

  document.querySelector(".popup_wrapper div:first-child p").innerHTML = `<p>Enter your details below to save your spot. During the webinar <b>you will learn:</b></p>`
  document.querySelector(".box_already_registered form :nth-child(3) span").textContent = "Your contact email*"
}

// fetch submit form
function postForm(name, email, time, sales) {
  console.log(name, email, time, sales)
  fetch("https://api.joinnow.live/webinars/0e7aJr/registration", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      start_time: `${time}`,
      email: `${email}`,
      timezone: "Europe/Kiev",
      gdprConsentReceived: false,
      customFields: {
        Monthly_Sales: `${sales}`,
        hubspotutk: "27ae00ca6cbfa88154c1f312ccc0674f",
      },
      name: `${name}`,
      linkParams: {},
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      window.location.href = `https://joinnow.live/t/TSa5s8?id=jyjVL6`
    })
    .catch((err) => {
      console.log("Failed fetch ", err)
    })
}

//

window.dataLayer = window.dataLayer || []
dataLayer.push({
  event: "event-to-ga",
  eventCategory: `Exp — 10 secrets landing page ${eventVar}`,
  eventAction: "loaded",
})
;(function (h, o, t, j, a, r) {
  h.hj =
    h.hj ||
    function () {
      ;(h.hj.q = h.hj.q || []).push(arguments)
    }
  h._hjSettings = { hjid: 2078786, hjsv: 6 }
  a = o.getElementsByTagName("head")[0]
  r = o.createElement("script")
  r.async = 1
  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
  a.appendChild(r)
})(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=")
window.hj =
  window.hj ||
  function () {
    ;(hj.q = hj.q || []).push(arguments)
  }
hj("trigger", `10_secrets_video_${eventVar}`)
hj("event", `10_secrets_redesign_${eventVar}`)

//
document.querySelectorAll("input[name='name']").forEach((inputName, idx) => {
  inputName.addEventListener("change", () => {
    let modify = ""
    let label = "Form: Save Your Spot (first screen — step 1)"

    if (idx === 1) {
      label = `Form: Save Your Spot (footer — step 1) ${eventVar}`
    }

    if (idx === 2) {
      label = `Form: Save Your Spot (full popup) ${eventVar}`

      if (document.querySelector(".backdrop_popup .popup_after_scroll")?.getAttribute("data-time")) {
        modify = document.querySelector(".backdrop_popup .popup_after_scroll").getAttribute("data-time")
      }
    }

    window.dataLayer = window.dataLayer || []
    dataLayer.push({
      event: "event-to-ga",
      eventCategory: "Exp — 10 secrets landing page",
      eventAction: "Change Your name input",
      eventLabel: label + modify,
    })
  })
})

document.querySelectorAll("input[name='email']").forEach((inputName, idx) => {
  inputName.addEventListener("change", () => {
    let label = "Form: Save Your Spot (first screen — step 1)"
    let modify = ""

    if (idx === 1) {
      label = `Form: Save Your Spot (footer — step 1) ${eventVar}`
    }

    if (idx === 2) {
      label = `Form: Save Your Spot (full popup) ${eventVar}`

      if (document.querySelector(".backdrop_popup .popup_after_scroll")?.getAttribute("data-time")) {
        modify = document.querySelector(".backdrop_popup .popup_after_scroll").getAttribute("data-time")
      }
    }

    window.dataLayer = window.dataLayer || []
    dataLayer.push({
      event: "event-to-ga",
      eventCategory: "Exp — 10 secrets landing page",
      eventAction: "Change Your work email input",
      eventLabel: label + modify,
    })
  })
})

document.querySelectorAll("select[name='customFields']").forEach((selectName, idx) => {
  selectName.addEventListener("change", () => {
    let label = "Form: Save Your Spot (first screen — step 2)"
    let modify = ""

    if (idx === 1) {
      label = `Form: Save Your Spot (footer — step 2) ${eventVar}`
    }

    if (idx === 2) {
      label = `Form: Save Your Spot (full popup) ${eventVar}`

      if (document.querySelector(".backdrop_popup .popup_after_scroll")?.getAttribute("data-time")) {
        modify = document.querySelector(".backdrop_popup .popup_after_scroll").getAttribute("data-time")
      }
    }

    window.dataLayer = window.dataLayer || []
    dataLayer.push({
      event: "event-to-ga",
      eventCategory: "Exp — 10 secrets landing page",
      eventAction: "Change Your current monthly sales select",
      eventLabel: label + modify,
    })
  })
})

document.querySelectorAll("select[name='startTime']").forEach((selectName, idx) => {
  selectName.addEventListener("click", () => {
    let label = "Form: Save Your Spot (first screen — step 2)"
    let modify = ""

    if (idx === 1) {
      label = `Form: Save Your Spot (footer — step 2) ${eventVar}`
    }

    if (idx === 2) {
      label = `Form: Save Your Spot (full popup) ${eventVar}`

      if (document.querySelector(".backdrop_popup .popup_after_scroll")?.getAttribute("data-time")) {
        modify = document.querySelector(".backdrop_popup .popup_after_scroll").getAttribute("data-time")
      }
    }

    window.dataLayer = window.dataLayer || []
    dataLayer.push({
      event: "event-to-ga",
      eventCategory: "Exp — 10 secrets landing page",
      eventAction: "Click on Data and time of attendance select",
      eventLabel: label + modify,
    })
  })
})
