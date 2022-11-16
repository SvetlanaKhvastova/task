let startFunk = setInterval(() => {
  if (document) {
    clearInterval(startFunk)

    /********* Settings **********/
    const settings = {
      observe: true,
    }

    let eventVar = "desktop"

    if (window.innerWidth <= 768) {
      eventVar = "mobile"
    }

    function pushDataLayer(actionDataLayer, labelDataLayer) {
      window.dataLayer = window.dataLayer || []
      if (labelDataLayer) {
        console.log(actionDataLayer + " : " + labelDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: ${eventVar}`,
          eventAction: `${actionDataLayer}`,
          eventLabel: `${labelDataLayer}`,
        })
      } else {
        console.log(actionDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: ${eventVar}`,
          eventAction: `${actionDataLayer}`,
        })
      }
    }

    let popupStyle = /*html */ `
    <style>
    .price_wrap_mob{
        display: none;
    }
    .overlay_popup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.7);
        display: flex;
        overflow-y: auto;
        z-index: 1000000000;
        transition: all 0.3s ease;
    }
    .overlay_popup.is_hidden{
        opacity: 0;
        pointer-events: none;
    }
    .overlay_popup .container_popup {
        display: block;
        position: relative;
        max-width: 520px;
        width: 100%;
        padding: 40px;
        margin: auto;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 2px 30px rgba(0, 0, 0, 0.2);
        transition: all 0.5s ease 0s;
        border-radius: 10px;
    }
    .overlay_popup .container_popup > svg {
        position: absolute;
        top: 24px;
        right: 24px;
        outline: none;
        cursor: pointer;
    }
    .content_popup > h2{
        font-weight: 500;
        font-size: 30px;
        line-height: 30px;
        text-transform: uppercase;
        color: #111111;
        margin: 0 0 10px;
    }
    .content_popup > p {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        color: #464646;
        margin: 0 0 20px;
    }
    .text_still_stock{
        background: #F9F9F9;
        border: 1px solid #111111;
        padding: 10px;
        text-align: center;
    }
    .text_still_stock p{
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 13px;
        line-height: 22px;
        color: #111111;
        margin: 0;
    }
    .product_list{
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        gap: 15px;
        overflow: auto;
        padding: 0 10px 0 0;
        height: 86px;
    }
    .product_wrap{
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 16px;
    }
    .img_wrap{
        max-width: 80px;
        max-height: 80px;
        width: 100%;
        height: 100%;
    }
    .img_wrap img{
        width: 100%;
        height: 100%;
    }
    .inform_wrap{
        max-width: 230px;
    }
    .inform_wrap h3{
        font-weight: 500;
        font-size: 16px;
        line-height: 18px;
        color: #111111;
        margin: 0 0 10px;
    }
    .inform_wrap p{
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 13px;
        line-height: 22px;
        letter-spacing: 0.01em;
        color: #111111;
        margin: 0;
    }
    .price_wrap{
        margin: 0 0 0 auto;
    }
    .price_wrap span,
    .price_wrap_mob span{
        font-weight: 500;
        font-size: 16px;
        line-height: 18px;
        color: #111111;
    }
    .content_popup button{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 48px;
        width: 100%;
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        text-transform: uppercase;
        color: #FFFFFF;
        cursor: pointer;
        background: #D74C3E;
        padding: 5px;
        margin-top: 30px;
    }
    @media (max-width: 768px) {
        .overlay_popup .container_popup{
            max-width: 343px;
        }
        .content_popup > h2{
            font-size: 24px;
        }
        .content_popup > p{
            font-size: 14px;
            line-height: 22px;
            margin: 0 0 16px;
        }
        .overlay_popup .container_popup{
            padding: 24px 16px;
        }
        .content_popup button{
            margin-top: 24px;
        }
        .overlay_popup .container_popup > svg{
            top: 16px;
            right: 16px;
        }
        .price_wrap{
            display: none;
        }
        .price_wrap_mob{
            display: block;
            margin-top: 10px;
        }
        .product_list{
            height: 105px;
        }
    }
    @media (max-width: 280px) {
        .content_popup > h2 {
            font-size: 20px;
        }
        .text_still_stock p{
            font-size: 10px;
        }
        .inform_wrap h3{
            font-size: 12px;
        }
        .inform_wrap p{
            font-size: 10px;
        }
        .content_popup button{
            font-size: 13px;
        }
        .overlay_popup .container_popup {
            max-width: 267px;
            padding: 21px 11px;
        }
    }
    </style>
    `

    // popup
    let popUp = /*html */ `
        <div class="overlay_popup is_hidden">
          <div class="container_popup">
            <svg width="16" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29305 7.99981L-0.000976562 15.293L0.706088 16.0001L8.0002 8.70688L15.2943 16.0001L16.0014 15.293L8.70735 7.99981L16.0013 0.706783L15.2942 -0.000366211L8.0002 7.29275L0.706199 -0.000366195L-0.000865313 0.706783L7.29305 7.99981Z" fill="#111111"/>
            </svg>
          </div>
        </div>
`

    let contentPopup = /*html */ `
        <div class="content_popup">
            <h2>It’s almost yours!</h2>
            <p>One step remaining</p>
            <div class="text_still_stock">
                <p>This is a popular product <br> Complete your order now while it is still in stock</p>
            </div>
            <div class="product_list">
            </div>
            <button>complete my order now</button>
        </div>
    `

    document.head.insertAdjacentHTML("beforeend", popupStyle)
    document.body.insertAdjacentHTML("afterbegin", popUp)
    document.querySelector(".overlay_popup .container_popup")?.insertAdjacentHTML("beforeend", contentPopup)

    //  get inform Cart START
    getCartInform()

    //   remove localStorage if CART => null
    if (localStorage.getItem("data-popup") && document.querySelector(".ajaxcart__product") === null) {
      localStorage.removeItem("data-popup")
    }

    //   EXIT INTENT popup
    function exitIntentPopup() {
      if (document.querySelector(".overlay_popup") && localStorage.getItem("data-popup")) {
        let overlay = document.querySelector(".overlay_popup"),
          containerPopup = overlay.querySelector(".container_popup"),
          btnClose = overlay.querySelector("svg")

        //show EXIT INTENT popup desktop
        addEvent(document, "mouseout", function (e) {
          if (e.toElement == null && e.relatedTarget == null && sessionStorage.getItem("exit_popup_loaded") == null) {
            sessionStorage.setItem("exit_popup_loaded", "true") //refresh status popup
            onOpenPopup() //show popup
          }
        })

        //exit intent
        function addEvent(obj, evt, fn) {
          if (obj.addEventListener) {
            obj.addEventListener(evt, fn, false)
          } else if (obj.attachEvent) {
            obj.attachEvent("on" + evt, fn)
          }
        }

        //show EXIT INTENT popup mobile
        if (window.innerWidth <= 768) {
          let lastPosition = 0,
            newPosition = 0,
            currentSpeed = 0

          let scrollSpeed = () => {
            lastPosition = window.scrollY
            setTimeout(() => {
              newPosition = window.scrollY
            }, 70)
            currentSpeed = newPosition - lastPosition

            if (currentSpeed > 70 && sessionStorage.getItem("exit_popup_loaded") == null) {
              sessionStorage.setItem("exit_popup_loaded", "true") //refresh status popup
              onOpenPopup() //show popup
              document.removeEventListener("scroll", scrollSpeed)
            }
          }

          document.addEventListener("scroll", scrollSpeed)
        }

        // click on btn close popup
        btnClose.addEventListener("click", (e) => {
          onClosePopup()
        })

        // click on overlay popup
        overlay.addEventListener("click", (e) => {
          if (e.target.matches(".overlay_popup")) {
            onClosePopup()
          }
        })

        function onOpenPopup() {
          overlay.classList.remove("is_hidden")
          document.body.style.overflow = "hidden"
          if (!document.querySelector(".overlay_popup .content_popup")) {
            containerPopup?.insertAdjacentHTML("beforeend", contentPopup)

            if (innerWidth <= 768) {
              if (document.querySelector(".text_still_stock p")) {
                document.querySelector(".text_still_stock p").textContent = "This is a popular product. Complete your order now while it is still in stock"
              }
            }
          }

          if (document.querySelector(".overlay_popup .content_popup")) {
            if (localStorage.getItem("data-popup")) {
              data = JSON.parse(localStorage.getItem("data-popup"))
              console.log(`data`, data)
              data.forEach((el) => {
                document.querySelector(".product_list").insertAdjacentHTML(
                  "afterbegin",
                  `
                            <div class="product_wrap">
                                <div class="img_wrap">
                                    <img src="${el.imgSrc}" alt="product zewood" />
                                </div>
                                <div class="inform_wrap">
                                    <h3>${el.name}</h3>
                                    <p>${el.descr}</p>
                                    <div class="price_wrap_mob">
                                        <span>$${el.price}</span>
                                    </div>
                                </div>
                                <div class="price_wrap">
                                    <span class="my_price">$${+el.price.split("$")[1] * +el.count}</span>
                                </div>
                            </div>
                              `
                )
              })
            }

            if (innerWidth <= 768) {
              if (document.querySelectorAll(".product_list .product_wrap").length >= 2) {
                document.querySelector(".product_list").style.height = "245px"
              } else {
                document.querySelector(".product_list").style.height = "105px"
              }
            } else {
              if (document.querySelectorAll(".product_list .product_wrap").length >= 2) {
                document.querySelector(".product_list").style.height = "186px"
              } else {
                document.querySelector(".product_list").style.height = "86px"
              }
            }

            document.querySelector(".content_popup button").addEventListener("click", () => {
              document.querySelector('#CartContainer button[name="checkout"]')?.click()
            })
          }
        }

        function onClosePopup() {
          overlay.classList.add("is_hidden")
          document.body.style.overflow = "unset"
          setTimeout(() => {
            document.querySelector(".content_popup")?.remove()
          }, 400)
        }
      }
    }

    // Observer Cart
    let observer, observeTarget
    let isProgress = false
    if (settings.observe) {
      observer = new MutationObserver((mutations) => {
        for (let mutation of mutations) {
          if (!isProgress && mutation.addedNodes[0] !== document.querySelector("#mr-div-embedded-cp-any-drawer")) {
            isProgress = true
            console.log(`observer>>>>>>>>>>>>>>>`, mutation)
            getCartInform()
            exitIntentPopup()

            setTimeout(() => {
              isProgress = false
            }, 2500)
          }
        }
      })

      let intrevalObserver = setInterval(() => {
        if (document.querySelector("#CartDrawer")) {
          clearInterval(intrevalObserver)
          observeTarget = document.querySelector("#CartDrawer")

          observer.observe(observeTarget, { childList: true, subtree: true })
        }
      }, 500)
    }

    //  get inform Cart => name,descr,price,count,imgSrc
    function getCartInform() {
      if (document.querySelector(".ajaxcart__product")) {
        let arr = []
        document.querySelectorAll(".ajaxcart__product").forEach((el) => {
          let name = "",
            descr = "",
            price = "",
            count = "",
            imgSrc = ""

          if (el.querySelector(".ajaxcart__product-name")) {
            name = el.querySelector(".ajaxcart__product-name").textContent
          }
          if (el.querySelector(".ajaxcart__product-meta")) {
            descr = el.querySelector(".ajaxcart__product-meta").textContent
          }
          if (el.querySelector(".ajaxcart__price .money")) {
            price = el.querySelector(".ajaxcart__price .money").textContent
          }
          if (el.querySelector("input[name='updates[]']")) {
            count = el.querySelector("input[name='updates[]']").value
          }
          if (el.querySelector(".ajaxcart__product-image img")) {
            imgSrc = el.querySelector(".ajaxcart__product-image img").src
          }

          arr.push({
            name: name,
            descr: descr,
            price: price,
            count: count,
            imgSrc: imgSrc,
          })
        })

        if (localStorage.getItem("data-popup")) {
          localStorage.removeItem("data-popup")
          localStorage.setItem("data-popup", JSON.stringify(arr))
        } else {
          localStorage.setItem("data-popup", JSON.stringify(arr))
        }

        console.log(`arr`, arr)
      }
    }

    pushDataLayer("loaded")
    const record = setInterval(() => {
      if (typeof clarity === "function") {
        clearInterval(record)

        clarity("set", "", "variant_1")
      }
    }, 200)
  }
}, 100)
