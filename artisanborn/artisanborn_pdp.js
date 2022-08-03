let startFunk = setInterval(() => {
  if (document.querySelector("#shopify-section-product-template")) {
    clearInterval(startFunk)
    const spanStockUrl = "https://conversionratestore.github.io/projects/artisanborn/img/in_stock.svg"
    console.log(`first`)

    let styleVar = /*html */ `
            <style>
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
                }
                .select .selector-wrapper{
                    margin-top: 20px;
                }
                .select label{
                    display: none;
                }
                .select select{
                    margin: 0;
                }
                .new_label{
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    align-content: flex-start;
                    width: 26%;
                }
                .new_label p{
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
                    margin-top: 13px;
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
                    top: 10px;
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
                .request_wrap ul li textarea{
                    resize:unset;
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
                    font-size: 9px;
                    line-height: unset;
                }

                .contact_details_wrap ul li::-webkit-input-placeholder {
                    opacity: 0;
                }

                input:focus::-webkit-input-placeholder{
                    opacity: 1;
                }

                .img_wrap .gallery-cell{
                    position: unset !important;
                    left: 0 !important;
                }
                .img_wrap .gallery-cell .image__container{
                    max-height: 110px !important;
                }
                .img_wrap .gallery-cell .image__container img{
                    width: 120px !important;
                    height: 110px !important;
                }
                .title_pdp h1.product_name{
                    padding: 0;
                    font-weight: 500;
                    font-size: 17px;
                    line-height: 20px;
                    letter-spacing: 0.01em;
                    margin: 0 0 4px;
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
        <svg class="btn_close" width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_932_840)">
            <path d="M14.5594 16.9406C15.1453 17.5266 15.1453 18.4758 14.5594 19.0617C14.2688 19.3547 13.8844 19.5 13.5 19.5C13.1156 19.5 12.7322 19.3535 12.4397 19.0606L7.5 14.1234L2.56078 19.0594C2.26781 19.3547 1.88391 19.5 1.5 19.5C1.11609 19.5 0.732656 19.3547 0.439453 19.0594C-0.146484 18.4734 -0.146484 17.5242 0.439453 16.9383L5.38008 11.9977L0.439453 7.05939C-0.146484 6.47345 -0.146484 5.52423 0.439453 4.93829C1.02539 4.35236 1.97461 4.35236 2.56055 4.93829L7.5 9.88126L12.4406 4.94064C13.0266 4.3547 13.9758 4.3547 14.5617 4.94064C15.1477 5.52657 15.1477 6.47579 14.5617 7.06173L9.62109 12.0024L14.5594 16.9406Z" fill="#A7A7A7"/>
            </g>
            <defs>
            <clipPath id="clip0_932_840">
            <rect width="15" height="24" fill="white"/>
            </clipPath>
            </defs>
        </svg>
        <h2>Customization Request</h2>
        <div class="inform_pdp">
            <div class="img_wrap"></div>
            <div>
            <input type="hidden" name="productId" value="2415919595582">
                <div class="title_pdp"></div>
                <div class="reviews_pdp"></div>
                <div class="price_pdp"></div>
            </div>
        </div>
        <form method="post" action="//stamped.io/api/questions" onsubmit="StampedFn.submitQuestionForm(this);return false;">

            <div class="contact_details_wrap">
                <h3>Contact details</h3>
                <p>Enter your contact details and our manager will get back to you within 24 hours</p>
                <ul>
                    <li>
                        <input id="number_var" required="" type="number" placeholder=" ">
                        <label for="number_var">
                            Contact number
                        </label>
                    </li>
                    <li>
                        <input id="email_var" required="" type="email" placeholder=" ">
                        <label for="email_var">
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
                            <textarea rows="3" maxlength="1000" placeholder="Write your requests here..." required=""></textarea>
                        </label>
                    </li>
                </ul>
            </div>
            <div class="btn_wrap">
                <span>Cancel</span>
                <button type="submit">SEND REQUEST</button>
            </div>
        </form>
    </div>
    `

    document.head.insertAdjacentHTML("beforeend", styleVar)
    document.body.insertAdjacentHTML("beforeend", overlayPopUp)

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

      if (el.previousSibling) {
        text = el.previousSibling.textContent.toUpperCase()
      } else {
        console.log("NOT selector-wrapper", el.closest("div.select").querySelector("label").textContent)
        if (el.closest("div.select").querySelector("label").textContent === "Size") {
          console.log(el.closest("div.select").querySelector("label").textContent)
          el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel("SIZE", "https://conversionratestore.github.io/projects/artisanborn/img/width.png"))
        }

        if (el.closest("div.select").querySelector("label").textContent === "Length") {
          console.log(el.closest("div.select").querySelector("label").textContent)
          el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel("Length", "https://conversionratestore.github.io/projects/artisanborn/img/width.png"))
        }

        if (el.closest("div.select").querySelector("label").textContent.toUpperCase() === "DIMENSIONS") {
          console.log(el.closest("div.select").querySelector("label").textContent)
          el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel("DIMENSIONS", "https://conversionratestore.github.io/projects/artisanborn/img/width.png"))
        }

        if (el.closest("div.select").querySelector("label").textContent.toUpperCase() === "WIDTH") {
          console.log(el.closest("div.select").querySelector("label").textContent)
          el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel("WIDTH", "https://conversionratestore.github.io/projects/artisanborn/img/width.png"))
        }

        if (el.closest("div.select").querySelector("label").textContent.toUpperCase() === "CHOOSE SIZE") {
          console.log(el.closest("div.select").querySelector("label").textContent)
          el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel("SIZE", "https://conversionratestore.github.io/projects/artisanborn/img/width.png"))
        }
      }

      if (text === "WIDTH") {
        el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel("WIDTH", "https://conversionratestore.github.io/projects/artisanborn/img/width.png"))
      } else if (text === "LENGTH" || text === "CHOOSE LENGTH") {
        el.closest("div").insertAdjacentHTML(
          "afterbegin",
          renderNewLabel("LENGTH, <span>inches</span>", "https://conversionratestore.github.io/projects/artisanborn/img/length.png")
        )
      } else if (text === "LEG STYLE") {
        console.log(el.value)
        if (el.value === "Hairpin Legs" || el.value === "Hairpin") {
          el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel("LEG STYLE", "https://conversionratestore.github.io/projects/artisanborn/img/hairpin.png"))
        } else {
          el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel("LEG STYLE", "https://conversionratestore.github.io/projects/artisanborn/img/u_shape.png"))
        }
      } else if (text === "LEG TYPE" || text === "CHOOSE LEG TYPE") {
        console.log(el.value)
        if (el.value === "Hairpin Legs" || el.value === "Hairpin") {
          el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel("LEG TYPE", "https://conversionratestore.github.io/projects/artisanborn/img/hairpin.png"))
        } else {
          el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel("LEG TYPE", "https://conversionratestore.github.io/projects/artisanborn/img/u_shape.png"))
        }
      } else if (text === "HEIGHT" || text === "CHOOSE TABLE HEIGHT") {
        el.closest("div").insertAdjacentHTML(
          "afterbegin",
          renderNewLabel("HEIGHT, <span>inches</span>", "https://conversionratestore.github.io/projects/artisanborn/img/height.png")
        )
      } else if (text === "CHOOSE COLOR" || text === "WOOD" || text === "WOOD COLOR") {
        el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel("WOOD COLOR", "https://conversionratestore.github.io/projects/artisanborn/img/wood_color.png"))
      } else if (text === "DEPTH") {
        el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel("DEPTH", "https://conversionratestore.github.io/projects/artisanborn/img/length.png"))
      } else if (text === "MATERIAL") {
        el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel("MATERIAL", "https://conversionratestore.github.io/projects/artisanborn/img/length.png"))
      } else if (text === "SIZE" || text === "CHOOSE SIZE") {
        el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel("SIZE", "https://conversionratestore.github.io/projects/artisanborn/img/length.png"))
      } else if (text === "QUANTITY") {
        el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel("QUANTITY", "https://conversionratestore.github.io/projects/artisanborn/img/length.png"))
      } else if (text === "DIMENSIONS") {
        el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel("DIMENSIONS", "https://conversionratestore.github.io/projects/artisanborn/img/length.png"))
      }
    })

    document.querySelector(".product_section form .select ")?.insertAdjacentHTML("afterbegin", textCustomTitle)
    document.querySelector(".product_section form .select ")?.insertAdjacentHTML("beforeend", textCustomLink)

    //   POPUP
    document.querySelector(".text_custom_link p span")?.addEventListener("click", function () {
      showPopup()
    })
    // click on CLOSE
    document.querySelector(".btn_close")?.addEventListener("click", function () {
      hidePopup()
    })

    // click on backdrop_popup
    document.querySelector(".backdrop_popup")?.addEventListener("click", (e) => {
      if (e.target.matches(".backdrop_popup")) {
        hidePopup()
      }
    })

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
    }

    //hide popup
    function hidePopup() {
      document.querySelector(".backdrop_popup")?.classList.remove("show")
      jQuery("body").css("overflow", "auto")
      document.querySelector(".body_popup")?.remove()
    }
  }
}, 10)
