let startFunk = setInterval(() => {
  if (document.querySelector("#item-details")) {
    clearInterval(startFunk)

    // SCRIPT
    let scriptPopper = document.createElement("script")
    scriptPopper.src = "https://unpkg.com/popper.js@1"
    scriptPopper.async = false
    document.body.appendChild(scriptPopper)

    let scriptTippy = document.createElement("script")
    scriptTippy.src = "https://unpkg.com/tippy.js@5"
    scriptTippy.async = false
    document.body.appendChild(scriptTippy)

    /* other variables  */
    const imgFolderUrl = "https://conversionratestore.github.io/projects/lamps/img/"

    // Tooltip
    let arrTooltipTable = {
      "Price Match Guarantee": [
        `<div class="tooltip_bar"><div class="name_tooltip"><img src="https://conversionratestore.github.io/projects/lamps/img/price_policy.svg" alt="price policy" /><span>Price Match Guarantee</span></div><p>Read more about our <a class="on_policy" target="_blank" href="/policies/price-protection/">price protection policy here</a>.</p></div>`,
      ],
      "Easy returns": [
        `<div class="tooltip_bar"><div class="name_tooltip"><img src="https://conversionratestore.github.io/projects/lamps/img/return_policy.svg" alt="return policy" /><span>Easy Return</span></div><p>Because we want you to love your purchase, most items can be returned up to 30 days from the date the item was delivered. Read more about our <a class="on_return" target="_blank" href="/policies/returns/">return policy here</a>.</p></div>`,
      ],
      Downrods: [
        `<div class="tooltip_bar"><div class="name_tooltip"><img src="https://conversionratestore.github.io/projects/lamps/img/help.svg" alt="return policy" /><span>Downrods</span></div><p>Ceiling fans should hang between 7 feet and 9 feet above the floor. A longer downrod may be needed for ceilings 9 feet tall or greater. See details above for included downrod length(s).</p></div>`,
      ],
      "Downrod Couplers": [
        `<div class="tooltip_bar"><div class="name_tooltip"><img src="https://conversionratestore.github.io/projects/lamps/img/help.svg" alt="return policy" /><span>Downrod Couplers</span></div><p>A downrod coupler joins together two downrods and is intended for lengths greater than 72" where a single rod cannot be used. </p></div>`,
      ],
      "Close to Ceiling Kits": [
        `<div class="tooltip_bar"><div class="name_tooltip"><img src="https://conversionratestore.github.io/projects/lamps/img/help.svg" alt="return policy" /><span>Close to Ceiling Kits</span></div><p>For lower ceiling heights, a close to ceiling kit can be used in place of a downrod to bring your fan closer to the ceiling. </p></div>`,
      ],
      "Sloped Ceiling Kits": [
        `<div class="tooltip_bar"><div class="name_tooltip"><img src="https://conversionratestore.github.io/projects/lamps/img/help.svg" alt="return policy" /><span>Sloped Ceiling Kits</span></div><p>This adapter will allow for installation on most extremely sloped or vaulted ceilings. See details above for additional information on the degree of slope this fan may be able to accomodate out of the box. </p></div>`,
      ],
      "Light Kits": [
        `<div class="tooltip_bar"><div class="name_tooltip"><img src="https://conversionratestore.github.io/projects/lamps/img/help.svg" alt="return policy" /><span>Light Kits</span></div><p>Select fans may not include a light kit. This accessory will allow for the addition of illumination to your fan.</p></div>`,
      ],
      Controls: [
        `<div class="tooltip_bar"><div class="name_tooltip"><img src="https://conversionratestore.github.io/projects/lamps/img/help.svg" alt="return policy" /><span>Controls</span></div><p>Most fans will be operated by either a pull chain, wall control, or handheld remote. These accessories allow you to customize how you power your fan. See details above for included controls. </p></div>`,
      ],
      "Finish Kits": [
        `<div class="tooltip_bar"><div class="name_tooltip"><img src="https://conversionratestore.github.io/projects/lamps/img/help.svg" alt="return policy" /><span>Finish Kits</span></div><p>A finish kit allows you to customize the appearance of your fan. </p></div>`,
      ],
      Blades: [
        `<div class="tooltip_bar"><div class="name_tooltip"><img src="https://conversionratestore.github.io/projects/lamps/img/help.svg" alt="return policy" /><span>Blades</span></div><p>Additional blades are offered to customize the appearance of your fan.</p></div>`,
      ],
      "WiFi Accessory": [
        `<div class="tooltip_bar"><div class="name_tooltip"><img src="https://conversionratestore.github.io/projects/lamps/img/help.svg" alt="return policy" /><span>WiFi Accessory</span></div><p>This accessory allows for your fan to be connected to many of your favorite Smart devices or applications.</p></div>`,
      ],
      "Light Kit Covers": [
        `<div class="tooltip_bar"><div class="name_tooltip"><img src="https://conversionratestore.github.io/projects/lamps/img/help.svg" alt="return policy" /><span>Light Kit Covers</span></div><p>This accessory may be added if you do not wish to use the fan for illumination.</p></div>`,
      ],
      "Free Shipping!": [
        `<div class="tooltip_bar"><div class="name_tooltip"><img src="https://conversionratestore.github.io/projects/lamps/img/help.svg" alt="return policy" /><span>Free Shipping</span></div><p>Free standard ground shipping on all orders within the continental US. Orders shipping to Alaska, Hawaii, Puerto Rico may incur additional shipping charges. Charges will be calculated at checkout.</p></div>`,
      ],
      "Free Shipping": [
        `<div class="tooltip_bar"><div class="name_tooltip"><img src="https://conversionratestore.github.io/projects/lamps/img/help.svg" alt="return policy" /><span>Free Shipping</span></div><p>Free standard ground shipping on all orders within the continental US. Orders shipping to Alaska, Hawaii, Puerto Rico may incur additional shipping charges. Charges will be calculated at checkout.</p></div>`,
      ],
    }

    let style = /*html */ `
      <style>
        /*sticky_scroll_bar */
        .sticky_scroll_bar{
          border-bottom: 1px solid #D0D0D0;
          background: #FBFBFB;
          padding: 0 14px;
          position: sticky;
          top: 0;
          left: 0;
          z-index: 154585454;
        }
        .sticky_scroll_bar ul{
          display: flex;
        }
        .sticky_scroll_bar ul li{
          padding: 11px;
          cursor: pointer;
        }
        .sticky_scroll_bar ul li + li{
          margin-left: 15px;
        }
        .sticky_scroll_bar ul li.active{
          border-bottom: 2px solid #286378;
        }
        .sticky_scroll_bar ul li p{
          margin: 0;
          font-weight: 600;
          font-size: 18px;
          line-height: 24px;
          color: #333333;
        }
        .sticky_scroll_bar ul li.active p{
          color: #286378;
        }
        /*catalog-product-view */
        .catalog-product-view .product-essential{
          background: #FBFBFB;
          padding: 20px 30px 30px 20px;
        }
        .catalog-product-view .product-essential .p-media .media-sticky{
          position: relative;
          top: 0;
          max-width: 333px;
          max-height: 340px;
          height: 100%;
          width: 100%;
        }
        .catalog-product-view .product-essential .p-media .media-sticky .mySwiper{
          position: absolute;
          bottom: 0;
          left: 0;
        }
        .catalog-product-view .product-essential .p-media .media-sticky .mySwiper2 .swiper-slide{
          max-width: 333px !important;
          width: 100% !important;
        }
        .catalog-product-view .product-essential .p-media .media-sticky .mySwiper{
          padding: 10px;
        }
        .catalog-product-view .product-essential .p-media .media-sticky .mySwiper .swiper-slide-thumb-active{
          border: 1px solid rgba(40, 99, 120, 0.2);
        }
        .catalog-product-view .product-essential .p-media .media-sticky .mySwiper2 .swiper-slide{
          padding: 0;
        }
        .catalog-product-view .product-essential .p-media .media-sticky .mySwiper2{
          height: 100%;
        }
        .swiper-wrapper{
          justify-content: flex-start !important;
        }
        .catalog-product-view .product-essential .p-media{
          flex: unset;
          max-width: 30%;
          margin-right: 50px;
          padding: 0;
        }
        .catalog-product-view .product-shop{
          flex: unset;
          max-width: 65%;
        }
        /*product_details_wrap */
        .product_details_wrap{
          margin-top: 48px;
        }
        .product_details_wrap > h3{
          font-weight: 600;
          font-size: 28px;
          line-height: 42px;
          color: #286278;
          margin: 0;
        }
        .new_inform_wrap{
          display: flex;
          justify-content: space-between;
          gap: 20px;
          margin-top: 20px;
        }
        .new_inform_wrap > div{
          width: 49%;
        }
        .new_inform_wrap .p-support{
          padding: 10px !important;
          margin: 0 !important;
          cursor: pointer;
        }
        .new_inform_wrap .p-support .text-strong{
          padding-bottom: 0;
          font-size: 16px;
          font-weight: 600;
          margin: 0;
          color: #286278;
        }
        .new_inform_wrap .p-support .text-soft{
          font-weight: 300;
          font-size: 16px;
          line-height: 16px;
          color: #333333;
          padding: 0;
          margin: 8px 0 0;
        }
        .new_inform_wrap .p-product-info{
          background: #FFFFFF;
          margin-top: 10px;
          padding: 0 !important;
        }
        .new_inform_wrap #product-info .i-card{
          padding: 8px 7.5px;
          position: relative;
          background: #fff;
          color: #333;
        }
        .new_inform_wrap #product-info .i-card:not(:last-of-type){
          border-bottom: 2px solid #d0d0d0;          
        }
        .new_inform_wrap #product-info .i-card .i-header button{
          font-size: 13.5px;
          text-transform: uppercase;
          letter-spacing: .5px;
          text-align: left;
          color: #333;
          text-decoration: unset !important
        }
        .new_inform_wrap #product-info .i-card > .i-cont{
          margin-top: 5px;
          padding-left: 45px;
          padding-right: 15px;
        }
        .new_inform_wrap #product-info #i-cont-question{
          margin-top: 0;
          padding-top: 10px;
          padding-left: 0;
          background: #fff;
        }
        .new_inform_wrap #product-info #i-cont-question .qa-success{
          font-size: 13.5px;
          font-weight: 500;
        }
        .new_inform_wrap #product-info #i-cont-question input,
        .new_inform_wrap #product-info #i-cont-question textarea{
          background: #f2f2f2;
        }
        .new_inform_wrap #product-info #product-attribute-resources .r-att{
          margin: 10px 0;
        }
        .new_inform_wrap #product-info #product-attribute-resources .r-att a{
          color: #333;
        }
        .new_inform_wrap #product-info #product-attribute-resources .r-att i{
          font-size: 30px;
          margin-right: 15px;
        }
        .new_inform_wrap #product-info .i-card .i-header button[aria-expanded=false] .arrow{
          transform: rotate(-90deg);
        }
        .new_inform_wrap #product-info .i-card .i-header button i.icon{
          font-size: 18px;
          padding-right: 5px;
          color: #286278;
        }
        .new_inform_wrap #product-info .i-card .i-header button i.arrow{
          float: right;
          font-size: 18px;
          position: absolute;
          right: 20px;
          top: 15px;
        }
        .new_inform_wrap #product-info .i-card .i-header button:hover{
          text-decoration: unset !important;
        }
        /*accessories_tabs */
        #cts-goods{
          margin: 40px 0 0;
        }
        #accessories{
          margin: 0 !important;
          text-align: left !important;
        }
        #accessories span{
          font-weight: 600;
          font-size: 28px;
          line-height: 42px;
        }
        .catalog-product-view .cts-goods .category-products{
          margin: 0 !important; 
          padding: 0 !important;
          background-color: unset !important;
        }
        .catalog-product-view .cts-goods .category-products > .col-12{
          display: none;
        }
        .catalog-product-view .col-main{
          margin-bottom: 0 !important;
        }
        .accessories_tabs{
          margin: 25px 0 72px;
        }
        .tabs_visible_wrap{
          display: flex;
          align-items: center;
          justify-content: flex-start;
          border-bottom: 1px solid #D0D0D0;
          margin-bottom: 53px;
        }
        .tabs_visible_wrap li{
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          padding: 12px 25px;
        }
        .tabs_visible_wrap li p{
          font-weight: 500;
          font-size: 18px;
          line-height: 24px;
          color: #333333;
          margin: 0 6px 0 0;
        }
        .active_tab{
          border-bottom: 2px solid #286378;
        }
        .tabs_visible_wrap li.active_tab p{
          color: #286378;
        } 
        .accessories_tabs .products-grid{
          display: flex;
          flex-wrap: wrap;
          align-items: stretch;
          justify-content: space-between;
          gap: 20px;
        }
        .accessories_tabs .products-grid hr{
          display: none;
        }
        .accessories_tabs .products-grid > .col-12{
          margin: 0 !important;
          padding: 0;
          flex: unset;
          width: 49%;
          display: flex;
        }
        .catalog-product-view .cts-goods .item{
          margin: 0 !important;
          padding: 2rem !important;
          display: flex;
          justify-content: space-between;
          align-items: flex-start !important;
        }
        .tippy-tooltip[data-placement^=top]>.tippy-arrow{
            transform: rotate(45deg);
            margin: 4px 3px;
            transform-origin: unset;
        }
        .tippy-tooltip[data-placement^=bottom]>.tippy-arrow{
            transform: rotate(45deg);
            margin: 4px 3px;
            transform-origin: unset;
        }
        
      </style>
      `

    let stickyScrollBar = /*html */ `
    <div class="sticky_scroll_bar">
      <ul>
        <li class="active"><p>About</p></li>
        <li><p>Product specs</p></li>
        <li><p>Resources</p></li>
        <li><p>Ask a question</p></li>
        <li><p>Return policy</p></li>
        <li><p>Price protection policy</p></li>
        <li><p>Items you may need</p></li>
      </ul>
    </div>    
    `

    function renderText(text, tooltip) {
      return `<li>
                <p>${text}</p>
                <svg data-tolltip='${tooltip}' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0C3.13306 0 0 3.16129 0 7C0 10.8669 3.13306 14 7 14C10.8387 14 14 10.8669 14 7C14 3.16129 10.8387 0 7 0ZM7 12.6452C3.86694 12.6452 1.35484 10.1331 1.35484 7C1.35484 3.89516 3.86694 1.35484 7 1.35484C10.1048 1.35484 12.6452 3.89516 12.6452 7C12.6452 10.1331 10.1048 12.6452 7 12.6452ZM10.0202 5.44758C10.0202 4.03629 8.52419 2.93548 7.14113 2.93548C5.81452 2.93548 4.96774 3.5 4.31855 4.4879C4.20565 4.62903 4.23387 4.82661 4.375 4.93952L5.16532 5.53226C5.30645 5.64516 5.53226 5.61694 5.64516 5.47581C6.06855 4.93952 6.37903 4.62903 7.02823 4.62903C7.53629 4.62903 8.15726 4.93952 8.15726 5.44758C8.15726 5.81452 7.84677 5.98387 7.33871 6.26613C6.77419 6.60484 6.0121 7 6.0121 8.01613V8.24193C6.0121 8.43952 6.15323 8.58064 6.35081 8.58064H7.62097C7.81855 8.58064 7.95968 8.43952 7.95968 8.24193V8.07258C7.95968 7.36694 10.0202 7.33871 10.0202 5.44758ZM8.18548 10.1613C8.18548 9.5121 7.64919 8.97581 7 8.97581C6.32258 8.97581 5.81452 9.5121 5.81452 10.1613C5.81452 10.8387 6.32258 11.3468 7 11.3468C7.64919 11.3468 8.18548 10.8387 8.18548 10.1613Z" fill="#286378"/>
                </svg>
            </li>`
    }

    document.head.insertAdjacentHTML("beforeend", style)
    document.querySelector(".product-view").insertAdjacentHTML("beforebegin", stickyScrollBar)

    document
      .querySelector("#personalized")
      .insertAdjacentHTML(
        "afterend",
        `<div class="product_details_wrap"><h3>Product details</h3> <div class="new_inform_wrap"><div><span></span></div><div class="new_item_inform"></div></div></div>`
      )
    document
      .querySelector("#accessories")
      ?.insertAdjacentHTML("afterend", `<div class="accessories_tabs"><ul class="tabs_visible_wrap"></ul> <div class="tabs_content"><span></span></div></div>`)

    if (document.querySelector(".product_details_wrap")) {
      document.querySelector(".product_details_wrap .new_inform_wrap > div > span").after(document.querySelector(".catalog-product-view .p-support"))
      document.querySelector(".product_details_wrap").after(document.querySelector("#cts-goods"))
      document.querySelector(".product_details_wrap .p-support")?.after(document.querySelector(".row.no-gutters.p-product-info.pt-2"))
    }

    if (document.querySelector(".category-products .col-12 span.h4.group")) {
      renderAccessoriesTabs()
      onTippyRun()
    }

    // render Accessories Tabs
    function renderAccessoriesTabs() {
      for (const tooltip in arrTooltipTable) {
        let title
        if (document.querySelector(".category-products .col-12 span.h4.group")) {
          document.querySelectorAll(".category-products .col-12 span.h4.group").forEach((el) => {
            title = el.textContent
            if (title.includes(tooltip)) {
              document.querySelector(".accessories_tabs .tabs_visible_wrap")?.insertAdjacentHTML("beforeend", renderText(title, arrTooltipTable[title]))
            }

            document.querySelectorAll(".accessories_tabs .tabs_visible_wrap li")[0]?.classList.add("active_tab")
            document.querySelector(".accessories_tabs .tabs_content span")?.after(el.closest(".category-products"))
            document.querySelectorAll(".accessories_tabs .tabs_content .category-products")[0]?.classList.add("active_tab_content")
          })
        }
      }
    }

    function onTippyRun() {
      let tippyRun = setInterval(() => {
        if (typeof tippy === "function" && document.querySelector("[data-tolltip]")) {
          clearInterval(tippyRun)

          document.querySelectorAll("[data-tolltip]").forEach((el) => {
            setTimeout(() => {
              if (el) {
                tippy(el, {
                  content: el.getAttribute("data-tolltip"),
                  // trigger: "click",
                  duration: [500, 500],
                  interactive: true,
                })
              }
            }, 1000)
          })
        }
      }, 2000)
    }
    // switch tabs
    const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = "block") => {
      const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector)

      function hideTabContent() {
        content.forEach((item) => {
          item.style.display = "none"
        })

        tab.forEach((item) => {
          item.classList.remove(activeClass)
        })
      }

      function showTabContent(i = 0) {
        content[i].style.display = display
        tab[i].classList.add(activeClass)
      }

      hideTabContent()
      showTabContent()

      header.addEventListener("click", (e) => {
        const target = e.target

        if (target) {
          tab.forEach((item, i) => {
            if (target == item || target.parentNode == item) {
              hideTabContent()
              showTabContent(i)
            }
          })
        }
      })
    }

    if (document.querySelector(".accessories_tabs")) {
      tabs(".accessories_tabs .tabs_visible_wrap", ".accessories_tabs .tabs_visible_wrap > li", ".accessories_tabs .tabs_content .category-products", "active_tab")
    }
  }
}, 1500)
