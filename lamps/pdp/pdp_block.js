let startFunkPdp = setInterval(() => {
  if (document.querySelector("#main-wrapper")) {
    clearInterval(startFunkPdp)

    // SCRIPT
    let scriptPopper = document.createElement("script")
    scriptPopper.src = "https://unpkg.com/popper.js@1"
    scriptPopper.async = false
    document.body.appendChild(scriptPopper)

    let scriptTippy = document.createElement("script")
    scriptTippy.src = "https://unpkg.com/tippy.js@5"
    scriptTippy.async = false
    document.body.appendChild(scriptTippy)
    // //////////////////////////////////////////////////////

    /* other variables  */
    const imgFolderUrl = "https://conversionratestore.github.io/projects/lamps/img/"

    //   style
    let styleVar = /*html */ `
    <style>
        .header-container{
          border: unset !important;
        }
        .banner {
            background: linear-gradient(0deg, #DAF5E1, #DAF5E1), #DFE7EB;
            padding: 9px;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
        }        
        .banner p {
            font-weight: 400;
            font-size: 16px;
            line-height: 23px;
            margin: 0;
            text-transform: capitalize;
        }
        .banner img{
          margin-right: 4px;
          width: 20px;
        }
        /*price */
        .catalog-product-view .product-essential .p-price .pdp-afterpay{
          margin-top: 8px !important;
        }
        .catalog-product-view .product-essential .p-price .pdp-afterpay img{
          max-width: 93px;
          width: 100%;
          height: 100%;
          margin-left: 6px;
          position: relative;
          cursor: pointer;
        }
        .catalog-product-view .product-essential .p-price .final-price {
            display: flex;
            align-items: center;
            margin: 0 !important;
        }
        .price_match_guarantee{
          margin-left: 10px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          cursor: pointer;
        }
        .price_match_guarantee > span{
          font-weight: 600;
          font-size: 13px;
          line-height: 108%;
          text-decoration-line: underline;
          color: #333333;
        }
        .price_match_guarantee .img_wrap{
            max-width: 20px;
            max-height: 20px;
            width: 100%;
            height: 100%;
            margin-right: 4px;
        }
        .price_match_guarantee .img_wrap img{
            width: 100%;
            height: 100%;
            display: block;
        }
        /*color */
        .catalog-product-view .product-essential .product-shop #product-options-wrapper .swatches .attribute-swatch{
            border: 1px solid #A7A7A7;
        }
        .catalog-product-view .product-essential .product-shop #product-options-wrapper .swatches .attribute-swatch.selected{
            border: 1px solid #286278;
        }        

        .catalog-product-view .product-essential .product-shop #product-options-wrapper .swatches .attribute-swatch .hex-swatch,
         .catalog-product-view .product-essential .product-shop #product-options-wrapper .swatches .attribute-swatch .img-swatch{
            height: 23px;
            width: 23px;
            border: 1px solid transparent;
        }
        /* */
        .catalog-product-view .product-essential .product-shop .p-value-props{
          padding: 20px 0 0;
          margin: 0 0 28px;
          border-top: 1px solid #D0D0CF;
        }
        .catalog-product-view .product-essential .vp-box{
          margin: 0;
          padding: 0;
          background: unset;
        }
        /*add to card */
        button#add-item-to-cart .total-price,
        button#add-item-to-cart.btn-cart i{
          display: none !important;
        }
        button#add-item-to-cart{
          max-width: 215px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        button#add-item-to-cart > img{
          margin-right: 8px;
          width: 100%;
          height: 100%;
          max-width: 20px;
          max-height: 20px;
        }
        .catalog-product-view .product-essential .p-atc .qty-box .qty,
        .catalog-product-view .product-essential .p-atc .qty-box .input-group-btn{
          height: 36px;
        }

        /*wrap_var_policy */
        .wrap_var_policy{
          margin-bottom: 20px;
        }
        .wrap_var_policy ul{
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 9px;
        }
        .wrap_var_policy ul li {
          width: 50%;
          background: #DFE7EB;
          padding: 12px;
          display: flex;
          align-items: center;
          flex-direction: column;
          cursor: pointer;
        }
        .wrap_var_policy ul li span,
        .wrap_var_policy ul li p {
          font-weight: 400;
          font-size: 13px;
          line-height: 108%;
          color: #333333;
          margin: 0;
        }
        .wrap_var_policy ul li span{
          font-weight: 600;
          text-decoration-line: underline;
          color: #333333;
          margin: 6px 0 2px;
        }
        .wrap_var_policy .img_wrap{
          width: 20px;
          height: 20px;
        }
        .wrap_var_policy .img_wrap img{
          width: 100%;
          height: 100%;
        }
        /*wrap_questions */
        .wrap_questions {
          background: #FFFFFF;
          padding: 16px;
          margin-bottom: 25px;
          display: flex;
          justify-content: flex-start;
          gap: 12px;
        }
        .wrap_questions > div:nth-child(2) p{
          font-weight: 600;
          font-size: 16px;
          line-height: 100%;
          color: #286278;
          margin-bottom: 8px;
        }
        .wrap_questions > div:nth-child(2) p:last-of-type{
          font-weight: 300;
          color: #333333;
          margin: 0;
        }
        .wrap_questions > div:nth-child(2) p > span{
          text-decoration-line: underline;
        }
        .wrap_questions .img_wrap{
          max-width: 56px;
          max-height: 56px;
        }
        .wrap_questions .img_wrap img{
          width: 100%;
          height: 100%;
        }
        .wrap_questions > div:nth-child(2){
          max-width: 395px;
        }
        .wrap_questions .img_wrap:last-child{
          max-width: 16px;
          max-height: 16px;
          margin: auto 10px auto auto;
          cursor: pointer;
        }
        /*text_why_need */
        #cts-goods .category-products > .col-12{
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .text_why_need{
          margin: 0;
          font-weight: 400;
          font-size: 15px;
          line-height: 23px;
          text-decoration-line: underline;
          color: #286278;
          cursor: pointer;
        }
        /*tippy-tooltip */
        .tippy-tooltip{
          background: #FFFFFF;
          border-radius: 8px;
          box-shadow: 0px 2px 6px 2px rgb(0 0 0 / 15%);
          filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2));
          max-width: 309px !important;
        }
        .tippy-tooltip[data-placement^=top]>.tippy-arrow{
          border-top-color: #FFFFFF;
        }
        .tippy-tooltip[data-placement^=bottom]>.tippy-arrow{
          border-bottom-color: #FFFFFF;
        }
        .tippy-content {
          padding: 20px;
        }
        .tooltip_bar {
          text-align: left;
        }
        .name_tooltip{
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        .name_tooltip span{
          font-weight: 600;
          font-size: 15px;
          line-height: 133%;
          color: #333333;
          margin-left: 4px;
        }
        .tooltip_bar p{
          margin: 12px 0 0;
          color: #474747;
          font-weight: 400;
          font-size: 14px;
          line-height: 150%;
          letter-spacing: initial;
        }
        .on_policy,
        .on_return{
          text-decoration-line: underline;
          color: #286278;
          cursor: pointer;
        }
    </style>
    `
    // Tooltip
    let arrTooltipTable = {
      "Price Match Guarantee": [
        `<div class="tooltip_bar"><div class="name_tooltip"><img src="https://conversionratestore.github.io/projects/lamps/img/price_policy.svg" alt="price policy" /><span>Price Match Guarantee</span></div><p>Find cheaper? We will refund the difference within 30 days of receiving your order.<br /> Read more about our <a class="on_policy" target="_blank" href="/policies/returns/">price protection policy here</a>.</p></div>`,
      ],
      "30-day return period": [
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
    }

    const banner = /*html*/ `
    <div class="banner">
        <img src="${imgFolderUrl}check_arrow.svg" alt="check arrow">
        <p>
            <b>30-Day Lowest Price Guarantee.</b> Find cheaper? We will refund the difference.
        </p>
    </div>`

    let textWhyNeed = /*html */ `
      <p data-tolltip class="text_why_need">Why do I need this?</p>
      `

    let priceMatchGuarantee = /*html */ `
        <div data-tolltip class="price_match_guarantee">
            <div class="img_wrap">
              <img src="${imgFolderUrl}price_policy.svg" alt="price policy">
            </div>
            <span>Price Match Guarantee</span>
        </div>      
      `

    let wrapVarPolicy = /*html */ `
    <div class="wrap_var_policy">
        <ul>
            <li data-tolltip>
                <div class="img_wrap">
                  <img src="${imgFolderUrl}price_policy.svg" alt="price policy">
                </div>
                <span>Price Match Guarantee</span>
                <p>Pay less than enywhere else</p>
            </li>
            <li data-tolltip>
                <div class="img_wrap">
                  <img src="${imgFolderUrl}return_policy.png" alt="return policy">
                </div>
                <span class="return_policy">30-day return period</span>
                <p>Easy returns and exchanges</p>
            </li>
        </ul>
    </div>
    `

    let wrapQuestions = /*html */ `
    <div class="wrap_questions">
        <div class="img_wrap">
            <img src="${imgFolderUrl}logo_question.png" alt="logo lamps">
        </div>
        <div>
            <p>Questions about <span class="var_title_pdp">Spitfire 48" Indoor/Outdoor Ceiling Fan</span>?</p>
            <p>Chat with our lighting & ceiling fan expert now</p>
        </div>
        <div class="img_wrap">
            <img src="${imgFolderUrl}btn_question.svg" alt="button">
        </div>
    </div>
    `

    document.head.insertAdjacentHTML("beforeend", styleVar)
    changeImgAfterpay()
    renderTextWhyNeed()
    renderPriceMatchGuarantee()

    document.querySelector(".header-container").insertAdjacentHTML("beforeend", banner) // add static banner
    document.querySelector("button#add-item-to-cart")?.insertAdjacentHTML("afterbegin", `<img src="${imgFolderUrl}add_to_card_icon.svg" alt="button">`) // add to card icon

    // to change place for price and other element
    if (document.querySelector(".catalog-product-view .product-essential .product-shop .p-value-props")) {
      document
        .querySelector(".catalog-product-view .product-essential .p-atc .qty-box")
        ?.before(document.querySelector(".catalog-product-view .product-essential .product-shop .p-value-props"))
    }

    if (document.querySelector("#config-box")) {
      document.querySelector(".catalog-product-view .product-essential .p-price")?.after(document.querySelector("#config-box"))
    }

    if (document.querySelector("#config-box")) {
      document.querySelector("#config-box").insertAdjacentHTML("beforebegin", `<div class="personalize_block"><span></span></div>`)

      if (document.querySelectorAll(".catalog-product-view .product-essential .vp-box .vp-row")) {
        setTimeout(() => {
          document.querySelector(".personalize_block > span").after(document.querySelectorAll(".catalog-product-view .product-essential .vp-box .vp-row")[0])
          document.querySelector(".personalize_block .vp-row").after(document.querySelectorAll(".catalog-product-view .product-essential .vp-box .vp-row")[0])
        }, 1000)
      }
    }

    // render new blocks
    if (document.querySelector(".row.no-gutters.p-atc")) {
      document.querySelector(".row.no-gutters.p-atc").insertAdjacentHTML("afterend", wrapVarPolicy)
    }

    if (document.querySelector(".wrap_var_policy")) {
      document.querySelector(".wrap_var_policy").insertAdjacentHTML("afterend", wrapQuestions)
    }

    if (document.querySelector(".wrap_questions > div:nth-child(2) p > span")) {
      document.querySelector(".wrap_questions > div:nth-child(2) p > span").textContent = document.querySelector(
        ".catalog-product-view .product-essential .p-head .product-name span"
      ).textContent // title pdp question
    }

    // change img afterpay
    function changeImgAfterpay() {
      if (document.querySelector(".catalog-product-view .product-essential .p-price .pdp-afterpay")) {
        document.querySelector(".catalog-product-view .product-essential .p-price .pdp-afterpay img").src = `https://conversionratestore.github.io/projects/lamps/img/afterpay2.png`
      }
    }

    //  render block Why do I need this?
    function renderTextWhyNeed() {
      if (document.querySelector(".category-products .col-12 span.h4.group")) {
        document.querySelectorAll(".category-products .col-12 span.h4.group").forEach((el) => {
          el.insertAdjacentHTML("afterend", textWhyNeed)
        })
      }
    }

    // render block Price Match Guarantee
    function renderPriceMatchGuarantee() {
      if (document.querySelector(".catalog-product-view .product-essential .p-price .final-price")) {
        document.querySelectorAll(".catalog-product-view .product-essential .p-price .final-price").forEach((el) => {
          el.insertAdjacentHTML("beforeend", priceMatchGuarantee)
        })
      }
    }

    renderTooltip()
    function renderTooltip() {
      document.querySelectorAll("[data-tolltip]").forEach((el) => {
        let title

        if (el.closest(".text_why_need")) {
          title = el.closest("div").querySelector("span.h4.group").textContent
        }
        if (el.closest(".wrap_var_policy")) {
          title = el.querySelector("span").textContent
        }
        if (el.closest(".price_match_guarantee")) {
          title = el.querySelector("span").textContent
        }

        let arrTooltipTableVar = arrTooltipTable[title]
        el.setAttribute("data-tolltip", arrTooltipTableVar)
      })
    }

    onTippyRun()
    function onTippyRun() {
      let tippyRun = setInterval(() => {
        if (typeof tippy === "function" && document.querySelector("[data-tolltip]")) {
          clearInterval(tippyRun)

          document.querySelectorAll("[data-tolltip]").forEach((el) => {
            tippy(el, {
              content: el.getAttribute("data-tolltip"),
              trigger: "click",
              interactive: true,
            })
          })
        }
      }, 500)
    }

    // observer pdp
    let observer = new MutationObserver(() => {
      if (document.querySelector(".catalog-product-view .product-essential")) {
        observer.disconnect()
        console.log(`observer`)
        if (!document.querySelector(".text_why_need")) {
          renderTextWhyNeed()
        }
        if (!document.querySelector(".price_match_guarantee")) {
          console.log(document.querySelector(".price_match_guarantee"))
          renderPriceMatchGuarantee()
        }
        onTippyRun()
        renderTooltip()
        changeImgAfterpay()

        observer.observe(document.querySelector(".catalog-product-view .product-essential"), {
          childList: true,
          subtree: true,
        })
      }
    })

    observer.observe(document.querySelector(".catalog-product-view .product-essential"), {
      childList: true,
      subtree: true,
    })
  }
}, 500)
