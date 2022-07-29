let scriptPopper = document.createElement("script")
scriptPopper.src = "https://unpkg.com/popper.js@1"
scriptPopper.async = false
document.body.appendChild(scriptPopper)

let scriptTippy = document.createElement("script")
scriptTippy.src = "https://unpkg.com/tippy.js@5"
scriptTippy.async = false
document.body.appendChild(scriptTippy)
// //////////////////////////////////////////////////////

// Tooltip
let arrTooltipTable = {
  1: [
    `The Total Transformation Masterclass uses videos of real dogs to demonstrate how you can instil service-dog levels of calmness, obedience, and impulse control into your canine companion`,
  ],
  2: [`You may spread the payment over 3 months by choosing instalments at Checkout`],
  3: [`You may spread the payment over 3 months by choosing instalments at Checkout`],
  4: [`You may spread the payment over 3 months by choosing instalments at Checkout`],
  5: [
    `The Total Transformation Masterclass uses videos of real dogs to demonstrate how you can instil service dog levels of calmness, obedience, and impulse control into your canine companion. <br/> <span> Plus:</span> Housebreaking, Separation Anxiety, and Biting/Nipping Prevention <span>BONUS classes</span>`,
  ],
  6: [`Calls held every Saturday at 3PM EST`],
}

// setTooltipBarTable
function setTooltipBarTable(event, tooltip) {
  return `<img data-id="${event}" data-title="${tooltip}" src="https://conversionratestore.github.io/projects/knineti/img/new_alert_circle.svg" alt="tooltip icon">`
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
        // trigger: "click",
        appendTo: function () {
          return document.querySelector(".choose_plan")
        },
      })
    })
  }
}, 500)

// plan pricing Switch
const planSwitch = (slideMenu) => (e) => {
  slideMenu.forEach((links) => {
    if (links === e.currentTarget) {
      e.currentTarget.closest("th").classList.add("active_plan")

      let s = e.currentTarget.closest("th").getAttribute("data-count")
      if (window.innerWidth > 768) {
        if (s === "premium") {
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
      }

      if (window.innerWidth <= 768) {
        if (s === "premium") {
          document.querySelectorAll("table tbody tr td:nth-child(2)").forEach((el) => {
            el.style.background = "#FFFFFF"
            el.style.color = "#808080"
            if (el.querySelector("svg")) {
              el.querySelector("svg").style.stroke = "#808080"
              if (el.querySelector("svg").classList.contains("minus_var")) {
                el.querySelector("svg").style.fill = "#808080"
              }
            }
          })
          document.querySelectorAll("table tbody tr td:nth-child(3)").forEach((el) => {
            el.style.background = "#f9fcff"
            el.style.color = "#1D3871"
            if (el.querySelector("svg")) {
              el.querySelector("svg").style.stroke = "#1D3871"
            }
          })
          document.querySelectorAll("table tbody tr td:nth-child(4)").forEach((el) => {
            el.style.background = "#FFFFFF"
            el.style.color = "#808080"
            if (el.querySelector("svg")) {
              el.querySelector("svg").style.stroke = "#808080"
            }
          })
          document.querySelectorAll(".enroll_mob_wrap .enroll_link_wrap").forEach((el) => {
            if (el.querySelector("span").textContent === "Premium") {
              el.style.display = "block"
            } else {
              el.style.display = "none"
            }
          })
        }

        if (s === "basic") {
          document.querySelectorAll("table tbody tr td:nth-child(2)").forEach((el) => {
            el.style.background = "#f9fcff"
            el.style.color = "#1D3871"
            if (el.querySelector("svg")) {
              el.querySelector("svg").style.stroke = "#1D3871"
              if (el.querySelector("svg").classList.contains("minus_var")) {
                el.querySelector("svg").style.fill = "#1D3871"
              }
            }
          })
          document.querySelectorAll("table tbody tr td:nth-child(3)").forEach((el) => {
            el.style.background = "#FFFFFF"
            el.style.color = "#808080"
            if (el.querySelector("svg")) {
              el.querySelector("svg").style.stroke = "#808080"
            }
          })
          document.querySelectorAll("table tbody tr td:nth-child(4)").forEach((el) => {
            el.style.background = "#FFFFFF"
            el.style.color = "#808080"
            if (el.querySelector("svg")) {
              el.querySelector("svg").style.stroke = "#808080"
            }
          })
          document.querySelectorAll(".enroll_mob_wrap .enroll_link_wrap").forEach((el) => {
            if (el.querySelector("span").textContent === "Basic") {
              el.style.display = "block"
            } else {
              el.style.display = "none"
            }
          })
        }
        if (s === "deluxe") {
          document.querySelectorAll("table tbody tr td:nth-child(4)").forEach((el) => {
            el.style.background = "#f9fcff"
            el.style.color = "#1D3871"
            if (el.querySelector("svg")) {
              el.querySelector("svg").style.stroke = "#1D3871"
            }
          })
          document.querySelectorAll("table tbody tr td:nth-child(2)").forEach((el) => {
            el.style.background = "#FFFFFF"
            el.style.color = "#808080"
            if (el.querySelector("svg")) {
              el.querySelector("svg").style.stroke = "#808080"
              if (el.querySelector("svg").classList.contains("minus_var")) {
                el.querySelector("svg").style.fill = "#808080"
              }
            }
          })
          document.querySelectorAll("table tbody tr td:nth-child(3)").forEach((el) => {
            el.style.background = "#FFFFFF"
            el.style.color = "#808080"
            if (el.querySelector("svg")) {
              el.querySelector("svg").style.stroke = "#808080"
            }
          })
          document.querySelectorAll(".enroll_mob_wrap .enroll_link_wrap").forEach((el) => {
            if (el.querySelector("span").textContent === "Deluxe") {
              el.style.display = "block"
            } else {
              el.style.display = "none"
            }
          })
        }
      }
    } else {
      links.closest("th").classList.remove("active_plan")
    }
  })
}

const slideMenu = document.querySelectorAll(".btn_plan")

slideMenu.forEach((links) => {
  links.addEventListener("click", planSwitch(slideMenu))
})

// click on btn sticky
const planStickySwitch = (slideMenu) => (e) => {
  slideMenu.forEach((links) => {
    e.preventDefault()

    if (links === e.currentTarget) {
      e.currentTarget.classList.add("active_plan")
    } else {
      links.classList.remove("active_plan")
    }

    let attr = e.target.getAttribute("data-count")
    if (attr === "basic") {
      document.querySelectorAll(".plan_header .btn_plan")[0].click()
    }
    if (attr === "premium") {
      document.querySelectorAll(".plan_header .btn_plan")[1].click()
    }
    if (attr === "deluxe") {
      document.querySelectorAll(".plan_header .btn_plan")[2].click()
    }
  })
}

const stickyMenu = document.querySelectorAll(".sticky_wrapp ul li")

stickyMenu.forEach((links) => {
  links.addEventListener("click", planStickySwitch(stickyMenu))
})

const element = document.querySelector("tbody")

function visible(target) {}

window.addEventListener("scroll", function () {
  visible(element)
})

visible(element)
