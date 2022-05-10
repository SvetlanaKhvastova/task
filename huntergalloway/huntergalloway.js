scrolling(".second_block > ol li > a")

// js scrolling
function scrolling(upSelector) {
  let links = document.querySelectorAll(upSelector),
    speed = 0.4

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault()
      console.log(link)

      let widthTop = document.documentElement.scrollTop,
        hash = this.hash,
        toBlock = document.querySelector(hash).getBoundingClientRect().top - 100,
        start = null

      if (window.innerWidth <= 768) {
        toBlock = document.querySelector(hash).getBoundingClientRect().top - 70
      }

      if (hash === "#guide_first") {
        speed = 1.5
      } else if (hash === "#guide_second" || hash === "#guide_third" || hash === "#guide_fourth") {
        speed = 1.1
      } else if (hash === "#guide_fifth" || hash === "#guide_sixth" || hash === "#guide_seventh" || hash === "#guide_eighth") {
        speed = 0.4
      }

      requestAnimationFrame(step)

      function step(time) {
        if (start === null) {
          start = time
        }

        let progress = time - start,
          r = toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock)

        document.documentElement.scrollTo(0, r)

        if (r != widthTop + toBlock) {
          requestAnimationFrame(step)
        } else {
        }
        location.hash = hash
      }
    })
  })
}

if (window.innerWidth <= 768) {
  document.querySelector(".third_block > ol > li:nth-child(8) > div .img_wrap").after(document.querySelector(".third_block > ol > li:nth-child(8) a.link_more_articles"))
}
