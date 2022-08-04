let startFunk = setInterval(() => {
  if (document.querySelector("#shopify-section-product-template")) {
    clearInterval(startFunk)
    const spanStockUrl = "https://conversionratestore.github.io/projects/artisanborn/img/in_stock_black.svg"

    let styleVar = /*html */ `
            <style>
                .sale-savings,
                .old_price_wrap,
                .product .final-price-wrap b:last-child{
                  display: none;
                }

                .product .final-price-wrap b:first-child{
                  font-weight: 400;
                  font-size: 17px;
                  line-height: 28px;
                }
                #shopify-section-product-template .final-price-wrap>.variantPrice{
                  color: #000000 !important;
                  font-size: 22px;
                  line-height: 28px;
                }
                span.in-stock, span.out-stock{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-top: -42px;
                    line-height: 27px;
                    text-transform: capitalize;
                }
                span.in-stock img{
                    margin-right: 4px;
                }
                span.in-stock svg{
                    display: none;
                }

                /*free_shipping_txt */
                .free_shipping_txt{
                  font-weight: 400;
                  font-size: 14px;
                  line-height: 24px;
                  color: #068922;
                  margin: -15px 0 0;
                }
    
                /*product_section form */
                .product_section form .select {
                    background: #FAFAFA;
                    border-radius: 10px;
                    padding: 30px;
                    margin: 20px 0 13px;
                }

                .select .selector-wrapper{
                    display: flex;
                    align-items: flex-end;
                    justify-content: flex-start;
                    gap: 4px;
                    margin-top: 20px;
                    position: relative;
                    padding-top: 27px;
                }

                .select label{
                  display: none;
                }
                .select select{
                    margin: 0;
                    max-height: 40px;
                    min-height: 40px;
                    color: #000000;
                }
                .new_label{
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    align-content: flex-start;
                    width: 27%;
                }
                .new_label p{
                  text-transform: uppercase;
                  position: absolute;
                  top: -3px;
                  left: 0;
                    font-weight: 700;
                    font-size: 13px;
                    line-height: 27px;
                    color: rgba(0, 0, 0, 0.8);
                    margin: 0;
                }
                .new_label p span{
                    font-weight: 400;
                }

                /*text_custom_title */
                .text_custom_title{
                   
                }
                .text_custom_title p{
                    font-weight: 600;
                    font-size: 20px;
                    line-height: 136%;
                    margin: 0;
                    padding: 0;
                }

                /*text_custom_link */
                .text_custom_link{
                    margin-top: 19px;
                }
                .text_custom_link p{
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 18px;
                    color: #000000;
                    margin: 0;
                }
                .text_custom_link p span{
                   font-weight: 700;
                   color: #56B2E3;
                   cursor: pointer;
                }

                /* backdrop_popup*/
                .backdrop_popup {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgb(0 0 0 / 65%);
                    display: flex;
                    overflow-y: auto;
                    z-index: 1000000000;
                    opacity: 0;
                    pointer-events: none;
                    transition: all 0.3s ease;
                }
                .backdrop_popup.show {
                    opacity: 1;
                    pointer-events: auto;
                }
                .backdrop_popup.show .container_popup {
                    transform: translateY(0);
                }
                .backdrop_popup .container_popup {
                    background: #ffffff;
                    border-radius: 5px;
                    max-width: 552px;
                    width: calc(100% - 40px);
                    margin: 60px auto auto;
                    position: relative;
                    transform: translateY(-100px);
                    transition: all 0.3s ease;
                }
                .btn_close {
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    cursor: pointer;
                }

                /*popup */
                .body_popup{
                    padding: 32px;
                }
                .body_popup h2{
                    font-weight: 700;
                    font-size: 27px;
                    line-height: 150%;
                    letter-spacing: 0.01em;
                    margin: 0 0 18px;
                }
                .inform_pdp{
                    display: flex;
                    align-items: flex-start;
                    justify-content: flex-start;
                    background: #FAFAFA;
                    border-radius: 10px;
                    padding: 10px;
                    gap: 10px;
                    margin: 0 0 25px;
                }
                .request_wrap {
                    margin: 24px 0;
                }
                .contact_details_wrap h3,
                .request_wrap h3{
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 150%;
                    letter-spacing: 0.01em;
                    margin: 0;
                }
                .contact_details_wrap > p,
                .request_wrap > p{
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 160%;
                    color: #363636;
                    margin: 0 0 8px;
                }
                .contact_details_wrap ul,
                .request_wrap ul{
                    margin: 0;
                    padding: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                }
                .contact_details_wrap ul li,
                .request_wrap ul li{
                    list-style: none;
                    width: 100%;
                    margin: 0;
                    position: relative;
                }
                .contact_details_wrap ul li label{
                    margin: 0;
                    position: absolute;
                    left: 10px;
                    top: 0;
                    transition: top 0.5s;
                    font-size: 14px;
                    color: #7B8594;
                    font-weight: 400;
                    text-transform: unset;
                    color: #7B8594;
                }
                .request_wrap ul li label{
                    margin: 0;
                }
                .contact_details_wrap ul li input,
                .request_wrap ul li textarea{
                    background: #FFFFFF;
                    border: 1px solid #D8DBDC;
                    border-radius: 1px;
                    margin: 0;
                }
                .contact_details_wrap ul li input{
                  max-height: 32px !important;
                  height: 100%;
                  min-height: 32px;
                }
                .request_wrap ul li textarea{
                    resize:unset;
                    min-height: 73px;
                    height: 100%;
                }
                .request_wrap ul li textarea::placeholder{
                    font-weight: 400;
                    font-size: 14px;
                    color: #7B8594;
                }
                .contact_details_wrap ul li input:focus,
                .request_wrap ul li textarea:focus {
                    outline: none;
                    background-size: 100% 100%, 100% 100%;
                    transition-duration: 0.3s;
                }
                .contact_details_wrap ul li input:focus+label,
                .contact_details_wrap ul li input:not(:placeholder-shown)+label{
                    top: -6px;
                    font-size: 7px;
                    line-height: unset;
                    right: 9px;
                    left: unset;
                }

                .contact_details_wrap ul li::-webkit-input-placeholder {
                    opacity: 0;
                }

                input:focus::-webkit-input-placeholder{
                    opacity: 1;
                }
                .img_wrap{
                  width: 37%;
                }
                .inform_pdp > div:nth-child(2){
                  width: 73%;
                }

                .img_wrap .gallery-cell{
                    position: unset !important;
                    left: 0 !important;
                }
                .img_wrap .gallery-cell .image__container{
                  /*
                    max-height: 120px !important;
                    */
                    max-width: 137px !important;
                    object-fit: contain;
                }
                .img_wrap .gallery-cell .image__container img{
                    width: 100% !important;
                    height: 100%!important;
                }
                .title_pdp h1.product_name{
                    padding: 0;
                    font-weight: 500;
                    font-size: 17px;
                    line-height: 20px;
                    letter-spacing: 0.01em;
                    margin: 0 0 4px;
                }
                .btn_wrap{
                  display: flex;
                  align-items: center;
                  justify-content: flex-end;
                }
                .cancel_btn{
                  font-weight: 700;
                  font-size: 18px;
                  line-height: 120%;
                  letter-spacing: 0.01em;
                  text-transform: uppercase;
                  color: #56B2E3;
                  margin-right: 64px;
                  cursor: pointer;
                }
                .send_btn, 
                .ok_btn {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-weight: 700;
                  font-size: 18px;
                  line-height: 120%;
                  letter-spacing: 0.01em;
                  color: #FFFFFF;
                  background: #56B2E3;
                  height: 44px;
                  width: 100%;
                  max-width: 224px;
                  padding: 5px;
                  cursor: pointer;
                }
                .ok_btn{
                  max-width: 113px;
                  text-transform: unset;
                  margin: 86px 0 0 auto;
                }
                .sending_rqst{
                  display: none;
                  margin-top: 87px;
                  text-align: center;
                }
                .sending_rqst p:first-of-type{
                  font-weight: 700;
                  font-size: 22px;
                  line-height: 136%;
                  letter-spacing: 0.01em;
                  margin: 10px 0 8px;
                }
                .sending_rqst p:last-of-type{
                  font-weight: 400;
                  font-size: 14px;
                  line-height: 171%;
                  margin: 0;
                }
                .body_popup form{
                  margin: 0;
                }
                .inform_pdp .bold_option_price_display.variantPrice{
                  font-weight: 700;
                }

                @media (max-width: 768px) {
                  .body_popup{
                    padding: 36px 16px 16px;
                  }
                  .body_popup h2{
                    font-size: 26px;
                    line-height: 156%;
                    margin-bottom: 8px;
                  }
                  .inform_pdp{
                    margin: 0 -8px 16px;
                    padding: 8px;
                    gap: 8px;
                  }
                  .request_wrap{
                    margin: 16px 0;
                  }
                  .contact_details_wrap > p, 
                  .request_wrap > p{
                    line-height: 157%;
                  }
                  .contact_details_wrap ul, 
                  .request_wrap ul{
                    flex-direction: column;
                  }
                  .request_wrap ul li textarea{
                    min-height: 84px;
                  }
                  .backdrop_popup .container_popup {
                    margin: 30px auto 30px;
                    width: calc(100% - 20px);
                  }
                  .cancel_btn{
                    margin-right: 36px;
                  }
                  .send_btn{
                    max-width: 205px;
                  }
                  .btn_close{
                    top: 36px;
                    right: 15px;
                  }
                  .body_popup h1#desktopppp, .body_popup a#desktest{
                    display: block;
                  }
                  .img_wrap {
                      width: 40%;
                  }
                  .inform_pdp > div:nth-child(2) {
                      width: 60%;
                  }
                  .img_wrap .gallery-cell .image__container{
                    height: 120px;
                    width: 100%;
                    object-fit: contain;
                  }
                  .sending_rqst,
                  .ok_btn{
                    margin-top: 94px;
                  }
                  .sending_rqst p:first-of-type{
                    margin-top: 16px;
                  }
                  .sending_rqst p:last-of-type{
                    font-size: 16px;
                    line-height: 150%;
                  }
                  .product_section form .select{
                    padding: 16px 12px;
                    margin: 12px -14px 9px;
                  }
                  .free_shipping_txt{
                    margin: -9px 0 0;
                  }
                  .text_custom_title p{
                    font-size: 16px;
                    line-height: 160%;
                  }
                  .select .selector-wrapper{
                    margin-top: 8px;
                    gap: 8px;
                  }
                  .select select{
                    font-size: 14px;
                    line-height: 18px;
                    padding: 8px 37px 8px 14px;
                  }
                  .text_custom_link {
                        margin-top: 12px;
                    }
                }
         

            </style>        
            `

    let inStockSvg = /*html */ `
            <img src="${spanStockUrl}" alt="check">
        `

    let textCustomTitle = /*html */ `
            <div class="text_custom_title">
                <p>Select size & style preferences for exact quote:</p>
            </div>    
        `

    let textCustomLink = /*html */ `
            <div class="text_custom_link">
                <p>Need more customization? <span>Send us a request</span></p>
            </div>    
        `

    let overlayPopUp = /*html */ `
      <div class="backdrop_popup">
          <div class="container_popup">
          </div>
      </div>
      `

    let bodyPopup = /*html */ `
    <div class="body_popup">
        <svg class="btn_close" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#999899"/>
        </svg>

        <h2>Customization Request</h2>
        <div class="inform_pdp">
            <div class="img_wrap"></div>
            <div>
              <div class="title_pdp"></div>
              <div class="reviews_pdp"></div>
              <div class="price_pdp"></div>
            </div>
          </div>
          <form method="post" action="//stamped.io/api/questions" id="new-question-form" onsubmit="event.preventDefault(); StampedFn.submitQuestionForm(this); document.querySelector('.sending_rqst').style.display='block';">
            <input type="hidden" name="productId" value="">
            <input type="hidden" name="shop" value="artisan-born.myshopify.com">
            <input type="hidden" name="apiKey" value="pubkey-1W01YekPtU0kCf65p72yNtV5xoKxR7">
            <input type="hidden" name="storeUrl" value="artisan-born.myshopify.com">
            <input type="hidden" name="sId" value="103569">

            <div class="contact_details_wrap">
                <h3>Contact details</h3>
                <p>Enter your contact details and our manager will get back to you within 24 hours</p>
                <ul>
                    <li>
                        <input id="name" required="" type="text" placeholder=" ">
                        <label for="name">
                        Name
                        </label>
                    </li>
                    <li>
                        <input id="email" required="" type="email" placeholder=" ">
                        <label for="email">
                            Email
                        </label>
                    </li>
                </ul>
            </div>
            <div class="request_wrap">
                <h3>Request</h3>
                <p>Tell us what alterations you would like</p>
                <ul>
                    <li>
                        <label>
                            <textarea name="reviewBody" rows="2" maxlength="1000" placeholder="Write your requests here..." required=""></textarea>
                        </label>
                    </li>
                </ul>
            </div>
            <div class="btn_wrap">
                <span class="cancel_btn">Cancel</span>
                <button type="submit" class="send_btn">SEND REQUEST</button>
            </div>
        </form>

        <div class="sending_rqst">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M44 6.996L18.898 32.12L9.57 22.792L12.672 19.69L18.898 25.916L40.898 3.916L44 6.996ZM39.138 18.084C39.424 19.338 39.6 20.658 39.6 22C39.6 31.724 31.724 39.6 22 39.6C12.276 39.6 4.4 31.724 4.4 22C4.4 12.276 12.276 4.4 22 4.4C25.476 4.4 28.688 5.412 31.416 7.15L34.584 3.982C31.02 1.474 26.686 0 22 0C9.856 0 0 9.856 0 22C0 34.144 9.856 44 22 44C34.144 44 44 34.144 44 22C44 19.382 43.516 16.874 42.68 14.542L39.138 18.084Z" fill="#11891D"/>
          </svg>
          <p>Thank you for sending the request!</p>
          <p>We will contact you within 24 hours</p>
          <span class="ok_btn">Ok</span>
        </div>
    </div>
    `

    document.head.insertAdjacentHTML("beforeend", styleVar)
    document.body.insertAdjacentHTML("beforeend", overlayPopUp)

    document.querySelector(".product .final-price-wrap b:first-child").textContent = "Price from"
    document.querySelector(".product .final-price-wrap b:last-child")
    if (document.querySelector(".product .final-price-wrap b:last-child")) {
      document.querySelector(".clearfix.product_form").insertAdjacentHTML("afterbegin", `<p class="free_shipping_txt"><b>Congratulations!</b> You get <b>free shipping</b> with this order</p>`)
    }

    document.querySelector("span.in-stock").insertAdjacentHTML("afterbegin", inStockSvg)

    function renderNewLabel(text, img) {
      return `<div class="new_label">
                    <p>${text}</p>  
                    <img src="${img}" alt="${text}">
                </div>`
    }

    //

    if (document.querySelector(".product_section .product_form form")) {
      if (!document.querySelector(".select")) {
        document.querySelector(".product_section .product_form form").insertAdjacentHTML("afterbegin", `<div class="select"></div></div>`)
      }
    }

    if (document.querySelector('[for="TableHeight"]')) {
      document.querySelector(".select")?.insertAdjacentHTML("beforeend", `<div class="selector-wrapper var_height"><div class="test_text"></div></div>`)
      document.querySelector(".selector-wrapper.var_height .test_text").after(document.querySelector("#TableHeight"))
      document.querySelector(".selector-wrapper.var_height .test_text").after(document.querySelector("[for='TableHeight']"))
    }

    document.querySelectorAll(".select > .selector-wrapper select").forEach((el) => {
      let text
      let outsideLabel = el.closest("div.select").querySelector("label").textContent.toLocaleUpperCase()

      if (el.previousSibling) {
        text = el.previousSibling.textContent.toLocaleUpperCase()
      } else {
        console.log(">>>>NOT selector-wrapper", el.closest("div.select").querySelector("label").textContent)
        if (outsideLabel === "SIZE" || outsideLabel === "CHOOSE SIZE") {
          el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel(outsideLabel, "https://conversionratestore.github.io/projects/artisanborn/img/select_size.png"))
        }

        if (outsideLabel === "LENGTH" || outsideLabel === "CHOOSE LENGTH") {
          el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel(outsideLabel, "https://conversionratestore.github.io/projects/artisanborn/img/select_length.png"))
        }

        if (outsideLabel === "DIMENSIONS") {
          el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel(outsideLabel, "https://conversionratestore.github.io/projects/artisanborn/img/select_dimensions.png"))
        }

        if (outsideLabel === "WIDTH" || outsideLabel === "CHOOSE WIDTH") {
          el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel(outsideLabel, "https://conversionratestore.github.io/projects/artisanborn/img/select_width.png"))
        }
      }

      if (text === "LENGTH" || text === "CHOOSE LENGTH") {
        el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel(text, "https://conversionratestore.github.io/projects/artisanborn/img/select_length.png"))
      } else if (text === "LEG TYPE" || text === "LEG STYLE" || text === "CHOOSE LEG TYPE") {
        if (el.value === "Hairpin Legs" || el.value === "Hairpin") {
          console.log(el.value)
          el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel(text, "https://conversionratestore.github.io/projects/artisanborn/img/hairpin.png"))
        } else {
          el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel(text, "https://conversionratestore.github.io/projects/artisanborn/img/u_shape.png"))
        }
      } else if (text === "WIDTH" || text === "CHOOSE WIDTH") {
        el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel(text, "https://conversionratestore.github.io/projects/artisanborn/img/select_width.png"))
      } else if (text === "HEIGHT" || text === "CHOOSE TABLE HEIGHT") {
        el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel(text, "https://conversionratestore.github.io/projects/artisanborn/img/select_height.png"))
      } else if (text === "SIZE" || text === "CHOOSE SIZE") {
        el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel(text, "https://conversionratestore.github.io/projects/artisanborn/img/select_size.png"))
      } else if (text === "WOOD" || text === "WOOD COLOR" || text === "CHOOSE COLOR" || text === "MATERIAL") {
        el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel(text, "https://conversionratestore.github.io/projects/artisanborn/img/select_color.png"))
      } else if (text === "DIMENSIONS") {
        el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel(text, "https://conversionratestore.github.io/projects/artisanborn/img/select_dimensions.png"))
      } else if (text === "TITLE") {
        el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel(text, "https://conversionratestore.github.io/projects/artisanborn/img/select_title.png"))
      } else if (text === "DEPTH" || text === "CHOOSE DEPTH") {
        el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel(text, "https://conversionratestore.github.io/projects/artisanborn/img/select_depth.png"))
      } else if (text === "QUANTITY") {
        el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel(text, "https://conversionratestore.github.io/projects/artisanborn/img/select_quantity.png"))
      }
    })

    document.querySelector(".product_section form .select ")?.insertAdjacentHTML("afterbegin", textCustomTitle)
    document.querySelector(".product_section form .select ")?.insertAdjacentHTML("beforeend", textCustomLink)

    // POPUP
    //show popup
    function showPopup() {
      document.querySelector(".backdrop_popup")?.classList.add("show")
      jQuery("body").css("overflow", "hidden")
      document.querySelector(".container_popup")?.insertAdjacentHTML("afterbegin", bodyPopup)
      let clonedNodeTitle = document.querySelector("#desktopppp").cloneNode(true)
      let clonedNodeReviews = document.querySelector("#desktest").cloneNode(true)
      let clonedNodePrice = document.querySelector("span.final-price-wrap").cloneNode(true)
      let clonedNodeImg = document.querySelectorAll(".product_gallery .flickity-slider .gallery-cell")[0].cloneNode(true)
      document.querySelector(".title_pdp")?.appendChild(clonedNodeTitle)
      document.querySelector(".reviews_pdp")?.appendChild(clonedNodeReviews)
      document.querySelector(".price_pdp")?.appendChild(clonedNodePrice)
      document.querySelector(".img_wrap")?.appendChild(clonedNodeImg)

      // id pdp
      document.querySelector('.body_popup [name="productId"]').value = document.querySelector(".shopify-product-reviews-badge").getAttribute("data-id")
      document.querySelector(".inform_pdp .reviews_pdp")?.addEventListener("click", function (e) {
        e.preventDefault()
      })

      // click on CLOSE
      document.querySelector(".btn_close")?.addEventListener("click", function () {
        console.log(`btn_close`)
        hidePopup()
      })

      // click on cancel
      document.querySelector(".cancel_btn")?.addEventListener("click", function () {
        console.log(`cancel_btn`)
        hidePopup()
      })

      // ok_btn
      document.querySelector(".ok_btn")?.addEventListener("click", function () {
        console.log(`ok_btn`)
        hidePopup()
      })

      // submit
      document.querySelector(".send_btn")?.addEventListener("click", function () {
        console.log(this)
      })
    }

    //hide popup
    function hidePopup() {
      document.querySelector(".backdrop_popup")?.classList.remove("show")
      jQuery("body").css("overflow", "auto")
      document.querySelector(".body_popup")?.remove()
    }

    // click on "Need more customization? Send us a request"
    document.querySelector(".text_custom_link p span")?.addEventListener("click", function () {
      showPopup()
    })

    // click on backdrop_popup
    document.querySelector(".backdrop_popup")?.addEventListener("click", (e) => {
      if (e.target.matches(".backdrop_popup")) {
        hidePopup()
      }
    })

    // observer pdp
    let observer = new MutationObserver(() => {
      if (document.querySelector(".product.clearfix")) {
        observer.disconnect()
        console.log(`observer`)
        document.querySelector(".product .final-price-wrap b:first-child").textContent = "Price"

        observer.observe(document.querySelector(".product.clearfix"), {
          childList: true,
          subtree: true,
        })
      }
    })

    observer.observe(document.querySelector(".product.clearfix"), {
      childList: true,
      subtree: true,
    })

    // change Lang Type
    changeLangType()
    function changeLangType() {
      document.querySelectorAll(".select > .selector-wrapper select").forEach((el) => {
        console.log(`changeLangType`)
        let text
        text = el.previousSibling.textContent.toLocaleUpperCase()

        if (text === "LEG TYPE" || text === "LEG STYLE" || text === "CHOOSE LEG TYPE") {
          el.addEventListener("change", function () {
            if (el.value === "Hairpin Legs" || el.value === "Hairpin") {
              console.log(`changeLangType`, el.value)
              el.closest("div").querySelector(".new_label img").src = "https://conversionratestore.github.io/projects/artisanborn/img/hairpin.png"
            } else {
              el.closest("div").querySelector(".new_label img").src = "https://conversionratestore.github.io/projects/artisanborn/img/u_shape.png"
            }
          })
        }
      })
    }
  }
}, 10)


let startFunkCard = setInterval(() => {
  if (document) {
    clearInterval(startFunkCard)

    let styleCard = /*html */`
    <style>
      .save-text,
      .was_price{
        display: none;
      }
      .money.sale{
        color: #000 !important;
      }
      p.modal_price{
        padding: 0;
      }
      p.price_total{
        margin: 0;
      }
    </style>
    
    `

    document.head.insertAdjacentHTML('beforeend', styleCard)

  }
}, 10)