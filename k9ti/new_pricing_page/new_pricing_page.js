let arrTooltipTable = {
  1: [
    `The Total Transformation Masterclass uses videos of real dogs to demonstrate how you can instil service-dog-levels of calmness, obedience, and impulse control into your canine companion`,
  ],
  2: [`You may spread the payment over 3 months by choosing instalments at Checkout`],
  3: [`You may spread the payment over 3 months by choosing instalments at Checkout`],
  4: [`You may spread the payment over 3 months by choosing instalments at Checkout`],
  5: [
    `The Total Transformation Masterclass uses videos of real dogs to demonstrate how you can instil service dog levels of calmness, obedience, and impulse control into your canine companion. <br/> <span>Plus:</span> Housebreaking, Separation Anxiety, and Biting/Nipping Prevention <span>BONUS classes</span>`,
  ],
  6: [`Calls held every Saturday at 3PM EST`],
}
let scriptPopper = document.createElement("script")
scriptPopper.src = "https://unpkg.com/popper.js@1"
scriptPopper.async = false
document.body.appendChild(scriptPopper)

let scriptTippy = document.createElement("script")
scriptTippy.src = "https://unpkg.com/tippy.js@5"
scriptTippy.async = false
document.body.appendChild(scriptTippy)

// setTooltipBarTable
function setTooltipBarTable(event, tooltip) {
  return `<img data-id="${event}" data-title="${tooltip}" src="/k9ti/new_pricing_page/img/alert-circle.svg" alt="tooltip icon">`
}

if (document.querySelector(".choose_plan")) {
  document.querySelectorAll("p[data-tolltip]").forEach((el) => {
    let atr = el.getAttribute("data-tolltip")
    let product

    if (atr === "1") {
      product = "1"
    } else if (atr === "2") {
      product = 2
    } else if (atr === "3") {
      product = 3
    } else if (atr === "4") {
      product = 4
    } else if (atr === "5") {
      product = 5
    } else if (atr === "6") {
      product = 6
    }

    let arrTooltipTableVar = arrTooltipTable[product]

    for (let key in arrTooltipTableVar) {
      el.insertAdjacentHTML("beforeend", setTooltipBarTable(product, arrTooltipTableVar[key]))
    }
  })
}

let tippyRun = setInterval(() => {
  if (typeof tippy === "function" && document.querySelector("p[data-tolltip]")) {
    clearInterval(tippyRun)

    document.querySelectorAll("img[data-title]").forEach((el) => {
      tippy(el, {
        content: el.getAttribute("data-title"),
        // placement: "top",
        // trigger: "click",
        appendTo: function () {
          return document.querySelector(".choose_plan")
        },
      })
    })
  }
}, 500)

const planToggle = (slideMenu) => (e) => {
  slideMenu.forEach((links) => {
    const hidePanel = links.nextElementSibling
    if (links === e.currentTarget) {
      e.currentTarget.closest("th").classList.add("active_plan")

      let s = e.currentTarget.closest("th").getAttribute("data-count")

      if (s === "premium") {
        console.log(s)
        document.querySelectorAll("table tbody tr:not(:nth-child(1)) td:nth-child(2)").forEach((el) => {
          el.style.background = "#FFFFFF"
          el.style.color = "#808080"
          el.querySelector("svg").style.stroke = "#808080"
          if (el.querySelector("svg").classList.contains("minus_var")) {
            el.querySelector("svg").style.fill = "#808080"
          }
        })
        document.querySelectorAll("table tbody tr:not(:nth-child(1)) td:nth-child(3)").forEach((el) => {
          el.style.background = "#f9fcff"
          el.style.color = "#1D3871"
          el.querySelector("svg").style.stroke = "#1D3871"
        })
        document.querySelectorAll("table tbody tr:not(:nth-child(1)) td:nth-child(4)").forEach((el) => {
          el.style.background = "#FFFFFF"
          el.style.color = "#808080"
          el.querySelector("svg").style.stroke = "#808080"
        })
        document.querySelectorAll(".enroll_link_wrap:nth-child(3)").forEach((el) => {
          el.style.opacity = "1"
        })
        document.querySelectorAll(".enroll_link_wrap:nth-child(2)").forEach((el) => {
          el.style.opacity = "0"
        })
        document.querySelectorAll(".enroll_link_wrap:nth-child(4)").forEach((el) => {
          el.style.opacity = "0"
        })
      }

      if (s === "basic") {
        console.log(s)
        document.querySelectorAll("table tbody tr:not(:nth-child(1))  td:nth-child(2)").forEach((el) => {
          el.style.background = "#f9fcff"
          el.style.color = "#1D3871"
          el.querySelector("svg").style.stroke = "#1D3871"
          if (el.querySelector("svg").classList.contains("minus_var")) {
            el.querySelector("svg").style.fill = "#1D3871"
          }
        })
        document.querySelectorAll("table tbody tr:not(:nth-child(1)) td:nth-child(3)").forEach((el) => {
          el.style.background = "#FFFFFF"
          el.style.color = "#808080"
          el.querySelector("svg").style.stroke = "#808080"
        })
        document.querySelectorAll("table tbody tr:not(:nth-child(1)) td:nth-child(4)").forEach((el) => {
          el.style.background = "#FFFFFF"
          el.style.color = "#808080"
          el.querySelector("svg").style.stroke = "#808080"
        })
        document.querySelectorAll(".enroll_link_wrap:nth-child(2)").forEach((el) => {
          el.style.opacity = "1"
        })
        document.querySelectorAll(".enroll_link_wrap:nth-child(3)").forEach((el) => {
          el.style.opacity = "0"
        })
        document.querySelectorAll(".enroll_link_wrap:nth-child(4)").forEach((el) => {
          el.style.opacity = "0"
        })
      }
      if (s === "deluxe") {
        console.log(s)
        document.querySelectorAll("table tbody tr:not(:nth-child(1)) td:nth-child(4)").forEach((el) => {
          el.style.background = "#f9fcff"
          el.style.color = "#1D3871"
          el.querySelector("svg").style.stroke = "#1D3871"
        })
        document.querySelectorAll("table tbody tr:not(:nth-child(1)) td:nth-child(2)").forEach((el) => {
          el.style.background = "#FFFFFF"
          el.style.color = "#808080"
          el.querySelector("svg").style.stroke = "#808080"
          if (el.querySelector("svg").classList.contains("minus_var")) {
            el.querySelector("svg").style.fill = "#808080"
          }
        })
        document.querySelectorAll("table tbody tr:not(:nth-child(1)) td:nth-child(3)").forEach((el) => {
          el.style.background = "#FFFFFF"
          el.style.color = "#808080"
          el.querySelector("svg").style.stroke = "#808080"
        })
        document.querySelectorAll(".enroll_link_wrap:nth-child(4)").forEach((el) => {
          el.style.opacity = "1"
        })
        document.querySelectorAll(".enroll_link_wrap:nth-child(3)").forEach((el) => {
          el.style.opacity = "0"
        })
        document.querySelectorAll(".enroll_link_wrap:nth-child(2)").forEach((el) => {
          el.style.opacity = "0"
        })
      }
    } else {
      links.closest("th").classList.remove("active_plan")
    }
  })
}

const slideMenu = document.querySelectorAll(".btn_plan")

slideMenu.forEach((links) => {
  links.addEventListener("click", planToggle(slideMenu))
})
