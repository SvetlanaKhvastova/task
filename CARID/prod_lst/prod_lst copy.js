let startfunkLst = setInterval(() => {
  if (document.querySelector("#prod-list .prod_lst")) {
    clearInterval(startfunkLst)
    console.log(`startfunkLst`)

    let prodLstStyle = /*html*/ `
    <style>

    .prod_lst .lst_a::after{
        display: none;
    }

    .link_target_blank  {
        position: absolute;
        right: 0;
        border: 1px solid #111;
        border-radius: 4px;
        color: #111;
        cursor: pointer;
        font-size: 1.5em;
        font-weight: 700;
        line-height: 3.35;
        text-align: center;
        text-decoration: none;
        top: 96px;
        white-space: nowrap;
        width: 225px;
      }

     @media only screen and (min-width: 1024px) and (max-width: 1280.98px){
        .link_target_blank  {
            width: 120px;
            bottom: 22px;
            top: unset;
        }
      }

      @media only screen and (max-width: 1023px){
        .link_target_blank  {
           display: none;
        }
      }
      </style>
    `
    // document.querySelectorAll(".prod_grd > li").forEach((el) => el.insertAdjacentHTML("beforeend", `<a class="link_target_blank" href="" target="_blank">VIEW DETAILS</a>`))

    document.head.insertAdjacentHTML("beforeend", prodLstStyle)

    renderBtn()

    if (document.querySelectorAll("#prod-list .prod_lst .link_target_blank")) {
      document.querySelectorAll("#prod-list .prod_lst .link_target_blank").forEach((el) => {
        el.addEventListener("click", function (e) {
          this.href = this.closest("li").querySelector(".prod_lst .lst_a").href

          console.log(this.closest("li").querySelector(".prod_lst .lst_a"))
        })
      })
    }

    function renderBtn() {
      document
        .querySelectorAll("#prod-list .prod_lst>li")
        .forEach((el) => el.insertAdjacentHTML("beforeend", `<a class="link_target_blank" href="" target="_blank">VIEW DETAILS</a>`))
    }

    // observer
    let observer = new MutationObserver(() => {
      if (document) {
        observer.disconnect()
        console.log(`observer`)
        if (!document.querySelectorAll("#products #prod-list .prod_lst .link_target_blank")) {
          renderBtn()
        }

        observer.observe(document, {
          childList: true,
          subtree: true,
        })
      }
    })

    observer.observe(document, {
      childList: true,
      subtree: true,
    })
  }
}, 10)

let startfunkGrd = setInterval(() => {
  if (document.querySelector("#prod-list .prod_grd")) {
    clearInterval(startfunkGrd)
    console.log(`startfunkGrd`)

    let prodGrdStyle = /*html*/ `
    <style>

    .prod_lst .lst_a::after{
        display: none;
    }

    .link_target_blank  {
        position: absolute;
        right: 0;
        border: 1px solid #111;
        border-radius: 4px;
        color: #111;
        cursor: pointer;
        font-size: 1.5em;
        font-weight: 700;
        line-height: 3.35;
        text-align: center;
        text-decoration: none;
        top: 96px;
        white-space: nowrap;
        width: 225px;
      }

     @media only screen and (min-width: 1024px) and (max-width: 1280.98px){
        .link_target_blank  {
            width: 120px;
            bottom: 22px;
            top: unset;
        }
      }

      @media only screen and (max-width: 1023px){
        .link_target_blank  {
           display: none;
        }
      }
      </style>
    `

    document.head.insertAdjacentHTML("beforeend", prodGrdStyle)

    renderBtn()

    if (document.querySelectorAll("#prod-list .prod_grd .link_target_blank")) {
      document.querySelectorAll("#prod-list .prod_grd .link_target_blank").forEach((el) => {
        el.addEventListener("click", function (e) {
          this.href = this.closest("li").querySelector(".prod_grd .lst_a").href

          console.log(this.closest("li").querySelector(".prod_lst .lst_a"))
        })
      })
    }

    function renderBtn() {
      document.querySelectorAll("#prod-list .prod_grd > li").forEach((el) => {
        el.insertAdjacentHTML("beforeend", `<a class="link_target_blank" href="" target="_blank">VIEW DETAILS</a>`)
      })
    }

    document.querySelector(".pagination .pagination-load-next-btn-h button").addEventListener("click", function () {
      console.log(`new list`)
      setTimeout(() => {
        document.querySelectorAll("#prod-list .prod_grd > li .link_target_blank").forEach((el) => {
          if (!el) {
            console.log(el)
            renderBtn()
          }
        })
      }, 2000)
    })

    // observer
    // let observer = new MutationObserver(() => {
    //   if (document) {
    //     observer.disconnect()
    //     console.log(`observer`)

    //     document.querySelectorAll("#prod-list .prod_grd > li .link_target_blank").forEach((el) => {
    //       if (!el) {
    //         renderBtn()
    //       }
    //     })

    //     observer.observe(document, {
    //       childList: true,
    //       subtree: true,
    //     })
    //   }
    // })

    // observer.observe(document, {
    //   childList: true,
    //   subtree: true,
    // })
  }
}, 10)

document.querySelectorAll("#prod-list .prod_lst .lst_a").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault()
    e.stopPropagation()
    console.log(this.href)

    //   let href = this.attributes.href
    window.open(this.href, "_blank")
  })
})
