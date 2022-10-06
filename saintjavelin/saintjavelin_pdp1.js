let startFunk = setInterval(() => {
  if (document.body && document.querySelector(".product-single__meta") != null) {
    clearInterval(startFunk)

    /* other variables  */
    const imgFolderUrl = "https://conversionratestore.github.io/projects/saintjavelin/img/"

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
          eventCategory: `Exp — New design pdp' ${eventVar}`,
          eventAction: `${actionDataLayer}`,
          eventLabel: `${labelDataLayer}`,
        })
      } else {
        console.log(actionDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp — New design pdp' ${eventVar}`,
          eventAction: `${actionDataLayer}`,
        })
      }
    }

    document.querySelectorAll("input[type=radio]").forEach((item) => {
      if (item.value === "default") {
        item.click()
      }
    })

    let style = /*html */ `
    <style>



    </style>
      `

    let donationAmount = /*html */ `
    <div class="donation_amount_flex">
        <p>Your purchase will <b>donate</b> <span class="donate_price">12.8</span> to support <span class="text_absol">Ukraine</span></p>
      <svg class="svg_popup" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.99967 14.6666C11.6663 14.6666 14.6663 11.6666 14.6663 7.99992C14.6663 4.33325 11.6663 1.33325 7.99967 1.33325C4.33301 1.33325 1.33301 4.33325 1.33301 7.99992C1.33301 11.6666 4.33301 14.6666 7.99967 14.6666Z"
          stroke="#A7A081"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path d="M8 5.33325V8.66659" stroke="#A7A081" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M7.99609 10.6667H8.00208" stroke="#A7A081" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
    `

    let donationInform = /*html */ `
    <div class="donation_inform">
      <div>
        <h3>All our profits go towards helping <span class="text_absol">Ukraine</span></h3>
        <ul class="background_wrap">
          <li>
            <div class="img_wrap">
              <img src="${imgFolderUrl}sj.png" alt="saintjavelin" />
            </div>
            <p class="title_list">So far we've raised <strong>over $1 million</strong> in support of <span class="text_absol">Ukraine</span></p>
          </li>
          <li>
            <div class="img_wrap">
              <img src="${imgFolderUrl}ua.png" alt="Ukrainian flag" />
            </div>
            <p class="title_list"><b>We already donated:</b></p>
            <ul class="already_donat_list">
              <li><p><strong>$350,000</strong> to buy drones for Ukraine;</p></li>
              <li><p><strong>$562,500</strong> for Humanitarian Aid to support victims of Russian invasion in Ukraine;</p></li>
              <li><p><strong>$712,500</strong> to buy IFAK medical kits and bulletproof vests for Ukraine’s Armed Forces.</p></li>
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <h3>Our new campaign aims to fundraise $1 million by Nov 30th to buy winter clothing and generators for 3,000 Ukrainian <span class="text_absol">soldiers</span></h3>
        <ul class="background_wrap">
          <li>
            <p class="goal_text">Fundraising goal by the end of November 2022: <strong>$1 million</strong></p>
          <div class="range-wrapper">
                <div class="range-line">
                  <div class="range-donated" style="width:0%">
                      <span class="total-raised"></span>
                  </div>
                </div>
                <div class="steps flex justify-between items-end"></div>
                <p class="sum"></p>
            </div>
            <p><a class="link_text" href="#">Buy this product</a> to <b>donate</b> <span class="donate_price">12.8</span> to support Ukraine</p>
          </li>
        </ul>
      </div>
    </div>    
    `

    let donatePopup = /*html */ `
  <div class="backdrop_modal is_hidden" data-modal>
    <div class="container_popup">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_303_473)">
          <path d="M20 6.41L18.59 5L13 10.59L7.41 5L6 6.41L11.59 12L6 17.59L7.41 19L13 13.41L18.59 19L20 17.59L14.41 12L20 6.41Z" fill="#989898" />
        </g>
        <defs>
          <clipPath id="clip0_303_473">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>
  `

    let contentpopup = /*html */ `
      <div class="content_popup">
          <img src="${imgFolderUrl}ukrainian_flag.png" alt="ukrainian flag" />
          <h2>All profits go towards helping Ukraine resist the invasion</h2>
          <p>Our new campaign aims to fundraise $1 million by Nov 30th to buy winter clothing and generators for 3,000 Ukrainian soldiers</p>
          <div>
            <p class="goal_text">
              Fundraising goal by the end of November 2022: <br />
              <strong>$1 million</strong>
            </p>
          </div>
          <div class="bar"></div>
          <!-- <div class="range-wrapper">
              <div class="range-line">
                <div class="range-donated" style="width:0%">
                    <span class="total-raised"></span>
                </div>
              </div>
              <div class="steps flex justify-between items-end"></div>
              <p class="sum"></p>
          </div> -->
          <button class="by_it_now_btn">BUY IT NOW</button>
          <ul class="main_popup_list">
            <li>
              <p>So far we've raised <strong>over $1 million</strong> in support of <span class="text_absol">Ukraine</span></p>
            </li>
            <li>
              <p><b>We already donated:</b></p>
              <ul class="already_donat_list">
                <li>
                  <p><strong>$350,000</strong> to buy drones for Ukraine;</p>
                </li>
                <li>
                  <p><strong>$562,500</strong> for Humanitarian Aid to support victims of Russian invasion in Ukraine;</p>
                </li>
                <li>
                  <p><strong>$712,500</strong> to buy IFAK medical kits and bulletproof vests for Ukraine’s Armed Forces.</p>
                </li>
              </ul>
            </li>
          </ul>
      </div>
    `

    let sixeGuidContent = /*html */ `
    <div class="content_popup size_guide">
      <h2>Size guide</h2>
      <p><b>Note:</b> Some sizes (XS / 3XL / 4XL / 5XL) might be sourced outside your region depending on your location and colour/size choice.</p>
      <ul class="accardion_size">
        <li class="accardion_block">
          <div class="accardion_link">
            <h3>TSHIRTS + TOPS</h3>
            <span></span>
          </div>
          <div class="accardion_lists">
            <div>
              <ul class="composition">
                <li>Relaxed Classic Unisex Fit & Pre-Shrunk</li>
                <li>100% Combed Ring-Spun Cotton (Heathers contain polyester)</li>
                <li>Fabric weight: 4.2 oz/yd² (142 g/m²)</li>
              </ul>
              <table>
                <thead>
                  <th>
                    <p>&nbsp;</p>
                  </th>
                  <th>
                    <p><strong>LENGTH</strong></p>
                  </th>
                  <th>
                    <p><strong>WIDTH</strong></p>
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p><strong>XS</strong></p>
                    </td>
                    <td>
                      <p>27in / 68.6cm</p>
                    </td>
                    <td>
                      <p>16.5in / 42cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <strong>S</strong>
                      </p>
                    </td>
                    <td>
                      <p>28in / 71.1cm</p>
                    </td>
                    <td>
                      <p>18in / 45.7cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <strong>M</strong>
                      </p>
                    </td>
                    <td>
                      <p>29in / 73.7cm</p>
                    </td>
                    <td>
                      <p>20in / 50.8cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <strong>L</strong>
                      </p>
                    </td>
                    <td>
                      <p>30in / 76.2cm</p>
                    </td>
                    <td>
                      <p>22in / 55.9cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <strong>XL</strong>
                      </p>
                    </td>
                    <td>
                      <p>31in / 78.7cm</p>
                    </td>
                    <td>
                      <p>24in / 61cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <strong>2XL</strong>
                      </p>
                    </td>
                    <td>
                      <p>32in / 81.3cm</p>
                    </td>
                    <td>
                      <p>26in / 66cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <strong>3XL</strong>
                      </p>
                    </td>
                    <td>
                      <p>33in / 83.8cm</p>
                    </td>
                    <td>
                      <p>28in / 71.1cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <strong>4XL</strong>
                      </p>
                    </td>
                    <td>
                      <p>34in / 86.4cm</p>
                    </td>
                    <td>
                      <p>30in / 76.2cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <strong>5XL</strong>
                      </p>
                    </td>
                    <td>
                      <p>35in / 89cm</p>
                    </td>
                    <td>
                      <p>31in / 78.7cm</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </li>
        <li class="accardion_block">
          <div class="accardion_link">
            <h3>HOODIES & SWEATSHIRTS</h3>
            <span></span>
          </div>
          <div class="accardion_lists">
            <div>
              <ul class="composition">
                <li>Relaxed Classic Unisex Fit & Pre-Shrunk</li>
                <li>50% cotton, 50% polyester</li>
                <li>Fabric weight: 8.0 oz/yd² (271.25 g/m²)</li>
              </ul>
              <table>
                <thead>
                  <th>
                    <p>&nbsp;</p>
                  </th>
                  <th>
                    <p><strong>LENGTH</strong></p>
                  </th>
                  <th>
                    <p><strong>WIDTH</strong></p>
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>
                        <strong>S</strong>
                      </p>
                    </td>
                    <td>
                      <p>27in / 68.6cm</p>
                    </td>
                    <td>
                      <p>20in / 50.8cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p><strong>M</strong></p>
                    </td>
                    <td>
                      <p>28in / 71.1cm</p>
                    </td>
                    <td>
                      <p>22in / 55.9cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <strong>L</strong>
                      </p>
                    </td>
                    <td>
                      <p>29in / 73.7cm</p>
                    </td>
                    <td>
                      <p>24in / 61cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p><strong>XL</strong></p>
                    </td>
                    <td>
                      <p>30in / 76.2cm</p>
                    </td>
                    <td>
                      <p>26in / 66cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p><strong>2XL</strong></p>
                    </td>
                    <td>
                      <p>31in / 78.7cm</p>
                    </td>
                    <td>
                      <p>28in / 71.1cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p><strong>3XL</strong></p>
                    </td>
                    <td>
                      <p>32in / 81.3cm</p>
                    </td>
                    <td>
                      <p>30in / 76.2cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p><strong>4XL</strong></p>
                    </td>
                    <td>
                      <p>33in / 83.8cm</p>
                    </td>
                    <td>
                      <p>32in / 81.3cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p><strong>5XL</strong></p>
                    </td>
                    <td>
                      <p>34in / 86.4cm</p>
                    </td>
                    <td>
                      <p>34in / 86.4cm</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </li>
        <li class="accardion_block">
          <div class="accardion_link">
            <h3>TANK TOPS</h3>
            <span></span>
          </div>
          <div class="accardion_lists">
            <div>
              <ul class="composition">
                <li>100% combed and ringspun cotton</li>
                <li>Tri-blends are 50% polyester/25% combed/25% ringspun cotton/rayon</li>
                <li>Fabric weight: 4.2 oz/yd² (142.40 g/m²), triblends: 3.8 oz/yd² (90.07 g/m²)</li>
              </ul>
              <table>
                <thead>
                  <th>
                    <p>&nbsp;</p>
                  </th>
                  <th>
                    <p><strong>LENGTH</strong></p>
                  </th>
                  <th>
                    <p><strong>WIDTH</strong></p>
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p><strong>XS</strong></p>
                    </td>
                    <td>
                      <p>26in / 66cm</p>
                    </td>
                    <td>
                      <p>16in / 41.3cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p><strong>S</strong></p>
                    </td>
                    <td>
                      <p>27in / 68.6cm</p>
                    </td>
                    <td>
                      <p>18in / 46.4cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p><strong>M</strong></p>
                    </td>
                    <td>
                      <p>28in / 71.1cm</p>
                    </td>
                    <td>
                      <p>20in / 51.4cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p><strong>L</strong></p>
                    </td>
                    <td>
                      <p>29in / 73.7cm</p>
                    </td>
                    <td>
                      <p>22in / 56.5cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p><strong>XL</strong></p>
                    </td>
                    <td>
                      <p>30in / 76.2cm</p>
                    </td>
                    <td>
                      <p>24in / 61.6cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p><strong>2XL</strong></p>
                    </td>
                    <td>
                      <p>31in / 78.7cm</p>
                    </td>
                    <td>
                      <p>26in / 66.7cm</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </li>
      </ul>
    </div>
    `

    document.body.insertAdjacentHTML("afterbegin", donatePopup)
    document.body.insertAdjacentHTML("afterbegin", style)

    let priceBlock = document.querySelector(".product-block.product-block--price"),
      imgBlock = document.querySelector(".product-block .aos-animate"),
      boxForDonationInform = document.querySelector(".page-content .page-width .grid [data-product-images]"),
      body = document.body,
      overlay = document.querySelector(".backdrop_modal")

    priceBlock.insertAdjacentHTML("afterend", donationAmount)

    if (innerWidth <= 768) {
      imgBlock.closest(".product-block").insertAdjacentHTML("beforebegin", donationInform)
    } else {
      boxForDonationInform.insertAdjacentHTML("beforeend", donationInform)
    }

    document.querySelector(".donation_amount_flex")?.addEventListener("click", () => {
      pushDataLayer("Сlick on donate to support Ukraine")
      onOpenPopup(contentpopup)
      let clonedNodeBar = document.querySelector(".range-wrapper").cloneNode(true)

      if (clonedNodeBar) {
        if (!document.querySelector(".bar .range-wrapper")) {
          document.querySelector(".bar")?.appendChild(clonedNodeBar)
        }
      }

      if (document.querySelector(".backdrop_modal .content_popup")) {
        document.querySelector(".backdrop_modal .content_popup .by_it_now_btn")?.addEventListener("click", (e) => {
          e.preventDefault()

          pushDataLayer("Сlick on Buy it now button", "Pop up All profits go towards helping Ukraine resist the invasion")
          if (document.querySelector(".new_wrap_btn .buy_it_now")) {
            document.querySelector(".new_wrap_btn .buy_it_now").classList.add("on_click")
          }
          if (document.querySelector('form [data-testid="Checkout-button"')) {
            document.querySelector('form [data-testid="Checkout-button"').classList.add("on_click")
          }

          if (document.querySelector('[name="add"]').getAttribute("disabled")) {
            document.querySelector(".new_wrap_btn .buy_it_now")?.click()
            if (overlay) {
              onClosePopup()
            }

            setTimeout(() => {
              if (document.querySelector(".new_wrap_btn .buy_it_now").classList.contains("on_click")) {
                document.querySelector(".new_wrap_btn .buy_it_now").classList.remove("on_click")
              }
            }, 1000)
          } else {
            document.querySelector('form [data-testid="Checkout-button"')?.click()

            setTimeout(() => {
              if (document.querySelector('form [data-testid="Checkout-button"').classList.contains("on_click")) {
                document.querySelector('form [data-testid="Checkout-button"').classList.remove("on_click")
              }
            }, 1000)
          }
        })
      }
      if (innerWidth <= 768) {
        if (document.querySelector(".content_popup p.goal_text br")) {
          document.querySelector(".content_popup p.goal_text br").remove()
        }
      }
    })

    // click on origin btn " Add to cart", "Buy it now button"
    // observer
    let observer = new MutationObserver(() => {
      if (document) {
        observer.disconnect()
        if (document.querySelectorAll(".mistake.is_visited").length === 2) {
          document.querySelector('form [data-testid="Checkout-button"')?.addEventListener("click", (e) => {
            if (!e.target.classList.contains("on_click")) {
              pushDataLayer("Сlick on Buy it now button", `0`)
            }
          })
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

    document.querySelector("[data-button_style=shadow] .btn--tertiary.btn--full")?.addEventListener("click", () => {
      pushDataLayer("Сlick on Add to cart button", `0`)
    })

    // click on btn close popup
    document.querySelector(".backdrop_modal .container_popup > svg")?.addEventListener("click", (e) => {
      if (e.currentTarget.nextElementSibling.classList.contains("size_guide")) {
        pushDataLayer("Сlick on close", "Pop up Size guide")
      } else {
        pushDataLayer("Сlick on btn close", "Pop up All profits go towards helping Ukraine resist the invasion")
      }
      onClosePopup()
    })

    // click on overlay popup
    overlay.addEventListener("click", (e) => {
      if (e.target.matches(".backdrop_modal")) {
        if (e.target.querySelector(".size_guide")) {
          pushDataLayer("Сlick on overlay close", "Pop up Size guide")
        } else {
          pushDataLayer("Сlick on overlay close", "Pop up All profits go towards helping Ukraine resist the invasion")
        }
        onClosePopup()
      }
    })

    function onOpenPopup(block) {
      overlay.classList.remove("is_hidden")
      body.style.overflow = "hidden"

      document.querySelector(".container_popup").insertAdjacentHTML("beforeend", block)
    }

    function onClosePopup() {
      overlay.classList.add("is_hidden")
      body.style.overflow = "auto"
      setTimeout(() => {
        document.querySelector(".content_popup")?.remove()
      }, 1000)
    }

    const accardionToggleFaqs = (slideMenu) => (e) => {
      slideMenu.forEach((link) => {
        e.preventDefault()
        const hidePanel = link.nextElementSibling
        if (link === e.currentTarget) {
          pushDataLayer(`Сlick on ${e.currentTarget.querySelector("h3").textContent}`, "Pop up Size guide")
          e.currentTarget.classList.toggle("active")

          hidePanel.classList.toggle("active_block")
        } else {
          link.classList.remove("active")
          hidePanel.classList.remove("active_block")
        }
      })
    }

    // render mistake "Please select size", "Please select color"
    document.querySelectorAll(".product-block .variant__label.hidden-label").forEach((el) => {
      if (el.textContent.includes("Color")) {
        el.textContent = "Select color:"
        if (!document.querySelector(".mistake.color_var")) {
          el.insertAdjacentHTML(
            "beforeend",
            `<div class="mistake color_var is_hidden">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.33398 9.99992H8.66732V11.3333H7.33398V9.99992ZM7.33398 4.66659H8.66732V8.66659H7.33398V4.66659ZM7.99398 1.33325C4.31398 1.33325 1.33398 4.31992 1.33398 7.99992C1.33398 11.6799 4.31398 14.6666 7.99398 14.6666C11.6807 14.6666 14.6673 11.6799 14.6673 7.99992C14.6673 4.31992 11.6807 1.33325 7.99398 1.33325ZM8.00065 13.3333C5.05398 13.3333 2.66732 10.9466 2.66732 7.99992C2.66732 5.05325 5.05398 2.66659 8.00065 2.66659C10.9473 2.66659 13.334 5.05325 13.334 7.99992C13.334 10.9466 10.9473 13.3333 8.00065 13.3333Z" fill="#D71D1D"/></svg>Please select color
            </div>`
          )
        }
      }

      if (el.textContent.includes("Size")) {
        el.textContent = "Select size:"
        if (!document.querySelector(".mistake.size_var")) {
          el.insertAdjacentHTML(
            "beforeend",
            `<div class="mistake size_var is_hidden">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.33398 9.99992H8.66732V11.3333H7.33398V9.99992ZM7.33398 4.66659H8.66732V8.66659H7.33398V4.66659ZM7.99398 1.33325C4.31398 1.33325 1.33398 4.31992 1.33398 7.99992C1.33398 11.6799 4.31398 14.6666 7.99398 14.6666C11.6807 14.6666 14.6673 11.6799 14.6673 7.99992C14.6673 4.31992 11.6807 1.33325 7.99398 1.33325ZM8.00065 13.3333C5.05398 13.3333 2.66732 10.9466 2.66732 7.99992C2.66732 5.05325 5.05398 2.66659 8.00065 2.66659C10.9473 2.66659 13.334 5.05325 13.334 7.99992C13.334 10.9466 10.9473 13.3333 8.00065 13.3333Z" fill="#D71D1D"/></svg> Please select size
            </div>`
          )
        }
        if (
          !document.querySelector(".size_guide_var") &&
          (document.querySelector("h1.product-single__title").textContent.includes("Sweater") ||
            document.querySelector("h1.product-single__title").textContent.includes("Sweatshirt") ||
            document.querySelector("h1.product-single__title").textContent.includes("Shirt") ||
            document.querySelector("h1.product-single__title").textContent.includes("Tank Top") ||
            document.querySelector("h1.product-single__title").textContent.includes("Hoodie"))
        ) {
          el.insertAdjacentHTML("beforeend", `<div class="size_guide_var">Size guide</div>`)
        }

        document.querySelector(".size_guide_var")?.addEventListener("click", () => {
          pushDataLayer("Сlick on Size guide")
          onOpenPopup(sixeGuidContent)

          const slideMenu = document.querySelectorAll(".accardion_link")

          if (slideMenu) {
            slideMenu.forEach((el) => {
              el.addEventListener("click", accardionToggleFaqs(slideMenu))
            })
          }
        })
      }
    })

    // Сlick on Buy this product
    document.querySelector("a.link_text")?.addEventListener("click", (e) => {
      e.preventDefault()
      e.stopPropagation()
      console.log(e.target)

      pushDataLayer("Сlick on Buy this product")
      if (document.querySelector(".new_wrap_btn .buy_it_now")) {
        document.querySelector(".new_wrap_btn .buy_it_now").classList.add("on_click")
      }
      if (document.querySelector('form [data-testid="Checkout-button"')) {
        document.querySelector('form [data-testid="Checkout-button"').classList.add("on_click")
      }

      if (document.querySelector('[name="add"]').getAttribute("disabled")) {
        document.querySelector(".new_wrap_btn .buy_it_now")?.click()
        if (overlay) {
          onClosePopup()
        }
        setTimeout(() => {
          if (document.querySelector(".new_wrap_btn .buy_it_now").classList.contains("on_click")) {
            document.querySelector(".new_wrap_btn .buy_it_now").classList.remove("on_click")
          }
        }, 1000)
      } else {
        document.querySelector('form [data-testid="Checkout-button"')?.click()
        setTimeout(() => {
          if (document.querySelector('form [data-testid="Checkout-button"').classList.contains("on_click")) {
            document.querySelector('form [data-testid="Checkout-button"').classList.remove("on_click")
          }
        }, 1000)
      }
    })

    //render/hidden new btn "Add to cart", "Buy it now"
    document.querySelectorAll(".variant-input-wrap label").forEach((el) => {
      let errorVar = 2
      if (el.previousElementSibling.matches("input[type=radio]:checked")) {
        if (el.previousElementSibling.value === "default") {
          if (!document.querySelector(".new_wrap_btn")) {
            document.querySelector("form.product-single__form").insertAdjacentHTML(
              "beforebegin",
              `<div class="new_wrap_btn">
                <button class="btn btn--full add-to-cart btn--tertiary add_to_cart"><span>Add to cart</span></button>
                <button type="button" class="shopify-payment-button__button shopify-payment-button__button--unbranded buy_it_now">Buy it now</button>
              </div>`
            )

            document.querySelector("form.product-single__form").style.display = "none"

            document.querySelector(".new_wrap_btn .add_to_cart")?.addEventListener("click", (e) => {
              e.preventDefault()
              countError()
              pushDataLayer("Сlick on Add to cart button", `${errorVar}`)
              removeMistakeVar()
            })

            document.querySelector(".new_wrap_btn .buy_it_now")?.addEventListener("click", (e) => {
              e.preventDefault()
              countError()

              if (!e.target.classList.contains("on_click")) {
                pushDataLayer("Сlick on Buy it now button", `${errorVar}`)
              }
              removeMistakeVar()
            })

            function removeMistakeVar() {
              document.querySelectorAll(".mistake").forEach((el) => {
                el.classList.remove("is_hidden")
                el.scrollIntoView({ block: "center", behavior: "smooth" })
              })
            }

            // document.querySelector("a.link_text")?.addEventListener("click", (e) => {
            //   e.preventDefault()
            //   e.stopPropagation()
            //   console.log(e.target)

            //   pushDataLayer("Сlick on Buy this product")
            //   if (document.querySelector(".new_wrap_btn .buy_it_now")) {
            //     document.querySelector(".new_wrap_btn .buy_it_now").classList.add("on_click")
            //   }
            //   if (document.querySelector('form [data-testid="Checkout-button"')) {
            //     document.querySelector('form [data-testid="Checkout-button"').classList.add("on_click")
            //   }

            //   if (document.querySelector('[name="add"]').getAttribute("disabled")) {
            //     document.querySelector(".new_wrap_btn .buy_it_now")?.click()
            //     if (overlay) {
            //       onClosePopup()
            //     }
            //     setTimeout(() => {
            //       if (document.querySelector(".new_wrap_btn .buy_it_now").classList.contains("on_click")) {
            //         document.querySelector(".new_wrap_btn .buy_it_now").classList.remove("on_click")
            //       }
            //     }, 1000)
            //   } else {
            //     document.querySelector('form [data-testid="Checkout-button"')?.click()
            //     setTimeout(() => {
            //       if (document.querySelector('form [data-testid="Checkout-button"').classList.contains("on_click")) {
            //         document.querySelector('form [data-testid="Checkout-button"').classList.remove("on_click")
            //       }
            //     }, 1000)
            //   }
            // })
          }
        }
      }

      el.addEventListener("click", (i) => {
        if (el.previousElementSibling.value !== "default") {
          if (el.closest(".variant-wrapper").querySelector(".variant__label.hidden-label").textContent.includes("Select color:")) {
            el.closest(".variant-wrapper").querySelector(".variant__label.hidden-label .mistake").classList.add("is_visited")
          }

          if (el.closest(".variant-wrapper").querySelector(".variant__label.hidden-label").textContent.includes("Select size:")) {
            el.closest(".variant-wrapper").querySelector(".variant__label.hidden-label .mistake").classList.add("is_visited")
          }

          if (document.querySelector(".variant__label.hidden-label .mistake.color_var") && document.querySelector(".variant__label.hidden-label .mistake.size_var")) {
            if (
              document.querySelector(".variant__label.hidden-label .mistake.color_var").classList.contains("is_visited") &&
              document.querySelector(".variant__label.hidden-label .mistake.size_var").classList.contains("is_visited")
            ) {
              isHiddenNewWrapBtn()
            }
          }

          if (document.querySelector(".variant__label.hidden-label .mistake.color_var") && !document.querySelector(".variant__label.hidden-label .mistake.size_var")) {
            if (document.querySelector(".variant__label.hidden-label .mistake.color_var").classList.contains("is_visited")) {
              isHiddenNewWrapBtn()
            }
          }

          if (!document.querySelector(".variant__label.hidden-label .mistake.color_var") && document.querySelector(".variant__label.hidden-label .mistake.size_var")) {
            if (document.querySelector(".variant__label.hidden-label .mistake.size_var").classList.contains("is_visited")) {
              isHiddenNewWrapBtn()
            }
          }

          function isHiddenNewWrapBtn() {
            document.querySelector("form.product-single__form").style.display = "unset"
            document.querySelector(".new_wrap_btn").style.display = "none"
          }
        }

        if (el.classList.contains("disabled")) {
          if (!el.previousElementSibling.getAttribute("disabled")) {
            el.previousElementSibling.setAttribute("disabled", "disabled")
          }
        } else {
          if (el.previousElementSibling.getAttribute("disabled")) {
            el.previousElementSibling.removeAttribute("disabled")
          }
        }
      })

      function countError() {
        let count = document.querySelectorAll(".mistake.is_visited").length
        if (count === 0) {
          errorVar = 2
        } else if (count === 1) {
          errorVar = 1
        } else if (count === 2) {
          errorVar = 0
        }
      }
    })

    // change donate count
    document.querySelectorAll(".donate_price")?.forEach((item) => {
      item.innerHTML = document.querySelector("[data-price-donate]").dataset.priceDonate
    })

    // fix bug change color
    document.querySelectorAll('.variant-input-wrap[name="Color"] label:not(.disabled)')?.forEach((item) => {
      item.addEventListener("click", function () {
        let color = this.previousElementSibling.value.toLowerCase().replaceAll(" ", "-")

        document.querySelectorAll(".product__photos a").forEach((a) => {
          if (a.getAttribute("href").includes(color)) {
            a.click()
          }
        })
      })
    })

    //
    fetch("https://crs-dev.fun/api/saint-javelin/total-donorbox", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)

        // add on page
        // document.body.insertAdjacentHTML("afterbegin", style)
        // document.body.insertAdjacentHTML("afterbegin", progressBarHTML)

        let donated = +data[0]["total_raised"],
          sum = +data[0]["goal_amt"],
          rangeDonated = (donated * 100) / sum,
          wand = (rangeDonated * 90) / 100,
          indexWand = donated < 15000 ? 0 : Math.floor(wand)

        let step = ``

        for (let i = 0; i < 91; i++) {
          step += `<div class="step ${i <= indexWand ? "active" : ""} ${i % 9 ? "step-small" : "step-big"}"></div>`
        }

        document.querySelectorAll(".steps").forEach((el) => {
          el.innerHTML = step
        })
        document.querySelectorAll(".range-donated").forEach((el) => {
          el.style = `width: ${donated <= 10000 ? 0 : donated < 15000 ? 0.5 : rangeDonated}%`
          if (el.style.width >= "80%") {
            console.log(el.style.width)
            if (document.querySelector(".container_popup")) {
              document.querySelector(".container_popup").classList.add("is_full")
              document.querySelector(".donation_inform").classList.add("is_full")
            }
          }
        })
        document.querySelectorAll(".sum").forEach((el) => {
          el.innerHTML = "$" + new Intl.NumberFormat("ru-RU").format(sum.toFixed(0))
        })

        let stepActive = document.querySelectorAll(".step.active")
        let totalDonate = document.querySelectorAll(".total-raised")
        if (donated > (sum * 88) / 100) {
          stepActive[79].setAttribute("data-price", "$" + new Intl.NumberFormat("ru-RU").format(donated))
          totalDonate.forEach((el) => {
            el.setAttribute("data-price", "$" + new Intl.NumberFormat("ru-RU").format(donated))
          })
        } else {
          stepActive[indexWand].setAttribute("data-price", "$" + new Intl.NumberFormat("ru-RU").format(donated))
          totalDonate.forEach((el) => {
            el.setAttribute("data-price", "$" + new Intl.NumberFormat("ru-RU").format(donated))
          })
        }
        if (donated >= sum) {
          document.querySelectorAll(".range-wrapper").forEach((el) => {
            el.classList.add("active")
          })
        }
      })
      .catch((error) => {
        console.error("Error:", error)
      })

    pushDataLayer("loaded")
    clarity("set", "new_design_pdp", "variant_1")
  }
}, 100)
