if (window.innerWidth <= 768) {
  let startFunkMobSleepy = setInterval(() => {
    if (document.querySelector("#reviews")) {
      clearInterval(startFunkMobSleepy)

      removeReviews("[data-review-id='aa043060-6a2f-496e-99c1-3f9101c65c0f']")
      removeReviews("[data-review-id='251fd024-7fac-4428-abc6-958f22f9731f']")

      setTimeout(() => {
        if (document.querySelector(".jdgm-gallery-popup--gallery-data-0")) {
          removeReviews(".jdgm-gallery-popup--gallery-data-0 [data-review-id='aa043060-6a2f-496e-99c1-3f9101c65c0f']")
          removeReviews(".jdgm-gallery-popup--gallery-data-0 [data-review-id='251fd024-7fac-4428-abc6-958f22f9731f']")
        }
      }, 2500)

      function removeReviews(id) {
        document.querySelectorAll(id).forEach((el) => {
          if (el.closest(".jdgm-gallery__thumbnail-link")) {
            el.closest(".jdgm-gallery__thumbnail-link").remove()
          }
          el.remove()
        })
      }

      document.querySelectorAll(".jdgm-gallery__thumbnail-wrapper img").forEach((el) => {
        el.addEventListener("click", function () {
          console.log(el.getAttribute("data-review-id"))
          setTimeout(() => {
            if (document.querySelector(".jdgm-gallery-popup--gallery-data-0")) {
              removeReviews(".jdgm-gallery-popup--gallery-data-0 [data-review-id='aa043060-6a2f-496e-99c1-3f9101c65c0f']")
              removeReviews(".jdgm-gallery-popup--gallery-data-0 [data-review-id='251fd024-7fac-4428-abc6-958f22f9731f']")
            }
          }, 500)
        })
      })

      // observer pdp
      let observer = new MutationObserver(() => {
        if (document.querySelector("#reviews")) {
          observer.disconnect()
          console.log(`observer`)
          removeReviews('[data-review-id="aa043060-6a2f-496e-99c1-3f9101c65c0f"]')
          removeReviews('[data-review-id="251fd024-7fac-4428-abc6-958f22f9731f"]')

          setTimeout(() => {
            if (document.querySelector(".jdgm-gallery-popup--gallery-data-0")) {
              removeReviews(".jdgm-gallery-popup--gallery-data-0 [data-review-id='aa043060-6a2f-496e-99c1-3f9101c65c0f']")
              removeReviews(".jdgm-gallery-popup--gallery-data-0 [data-review-id='251fd024-7fac-4428-abc6-958f22f9731f']")
            }
          }, 2500)
          document.querySelectorAll(".jdgm-gallery__thumbnail-wrapper img").forEach((el) => {
            el.addEventListener("click", function () {
              console.log(el.getAttribute("data-review-id"))
              setTimeout(() => {
                if (document.querySelector(".jdgm-gallery-popup--gallery-data-0")) {
                  removeReviews(".jdgm-gallery-popup--gallery-data-0 [data-review-id='aa043060-6a2f-496e-99c1-3f9101c65c0f']")
                  removeReviews(".jdgm-gallery-popup--gallery-data-0 [data-review-id='251fd024-7fac-4428-abc6-958f22f9731f']")
                }
              }, 500)
            })
          })

          observer.observe(document.querySelector("#reviews"), {
            childList: true,
            subtree: true,
          })
        }
      })

      observer.observe(document.querySelector("#reviews"), {
        childList: true,
        subtree: true,
      })
    }
  }, 10)
}
