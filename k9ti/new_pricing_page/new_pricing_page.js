let arrTooltipTable = {
  1: [
    `The Total Transformation Masterclass uses videos of real dogs to demonstrate how you can instil service-dog-levels of calmness, obedience, and impulse control into your canine companion`,
  ],
  2: [`You may spread the payment over 3 months by choosing instalments at Checkout`],
  3: [`You may spread the payment over 3 months by choosing instalments at Checkout`],
  4: [`You may spread the payment over 3 months by choosing instalments at Checkout`],
  5: [
    `The Total Transformation Masterclass uses videos of real dogs to demonstrate how you can instil service dog levels of calmness, obedience, and impulse control into your canine companion. Plus: Housebreaking, Separation Anxiety, and Biting/Nipping Prevention BONUS classes`,
  ],
  6: [`Calls held every Saturday at 3PM EST`],
}

let scriptCustomPopper = document.createElement("script")
scriptCustomPopper.src = "https://unpkg.com/@popperjs/core@2/dist/umd/popper.min.js"
scriptCustomPopper.async = false
document.head.appendChild(scriptCustomPopper)

let scriptCustomTippy = document.createElement("script")
scriptCustomTippy.src = "https://unpkg.com/tippy.js@6/dist/tippy-bundle.umd.js"
scriptCustomTippy.async = false
document.head.appendChild(scriptCustomTippy)

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

// document.querySelectorAll(".btn_plan").forEach((e) => {
//   e.addEventListener("click", function (item) {
//     console.log(e)
//     if (e === item.currentTarget) {
//       this.closest("th").classList.add("active_plan")
//     } else {
//       e.closest("th").classList.remove("active_plan")
//     }
//   })
// })

const accardionToggle = (slideMenu) => (e) => {
  slideMenu.forEach((links) => {
    console.log(links)

    const hidePanel = links.nextElementSibling
    if (links === e.currentTarget) {
      e.currentTarget.closest("th").classList.add("active_plan")

      let s = e.currentTarget.closest("th").getAttribute("data-count")
      console.log(s)

      if (s === "premium") {
        document.querySelectorAll("table tr td:nth-child(3)").forEach((el) => {
          el.style.background = "#f9fcff"
        })
        document.querySelectorAll("table tr td:nth-child(2)").forEach((el) => {
          el.style.background = "#FFFFFF;"
        })
        document.querySelectorAll("table tr td:nth-child(4)").forEach((el) => {
          el.style.background = "#FFFFFF"
        })
      } else if (s === "basic") {
        document.querySelectorAll("table tr td:nth-child(2)").forEach((el) => {
          el.style.background = "#f9fcff"
        })
        document.querySelectorAll("table tr td:nth-child(3)").forEach((el) => {
          el.style.background = "#FFFFFF"
        })
        document.querySelectorAll("table tr td:nth-child(4)").forEach((el) => {
          el.style.background = "#FFFFFF"
        })
      } else if (s === "deluxe") {
        document.querySelectorAll("table tr td:nth-child(4)").forEach((el) => {
          el.style.background = "#f9fcff"
        })
        document.querySelectorAll("table tr td:nth-child(2)").forEach((el) => {
          el.style.background = "#FFFFFF"
        })
        document.querySelectorAll("table tr td:nth-child(3)").forEach((el) => {
          el.style.background = "#FFFFFF"
        })
      }
    } else {
      links.closest("th").classList.remove("active_plan")
      //   hidePanel.classList.remove("active_block")
    }
  })
}

const slideMenu = document.querySelectorAll(".btn_plan")

slideMenu.forEach((links) => {
  links.addEventListener("click", accardionToggle(slideMenu))
})
