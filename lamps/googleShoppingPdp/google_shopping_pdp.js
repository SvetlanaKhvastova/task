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
          z-index: 1524;
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
        .sticky_scroll_bar ul li a{
          margin: 0;
          font-weight: 600;
          font-size: 18px;
          line-height: 24px;
          color: #333333;
        }
        .sticky_scroll_bar ul li.active a{
          color: #286378;
        }
        .sticky_scroll_bar ul li:last-child,
        .sticky_scroll_bar ul li:nth-child(3){
          display: none;
        }
        /*baner */
        .header-container{
          border: unset;
        }
        .banner {
        background: linear-gradient(0deg, #DAF5E1, #DAF5E1), #DFE7EB;
        padding: 9px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .banner a {
        display: flex;
        align-items: center;
      }
      .banner b {
        font-weight: 600;
        font-size: 16px;
        line-height: 23px;
        margin: 0;
        text-transform: capitalize;
        text-decoration-line: underline;
        color: #333333;
        cursor: pointer;
      }
      .banner img{
        margin-right: 4px;
        width: 20px;
      }
        /*catalog-product-view */
        #item-details{
          display: none;
        }
        .catalog-product-view .product-essential{
          background: #FBFBFB;
          justify-content: space-between;
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
        .catalog-product-view .select2 {
            width: 100% !important;
            min-width: 200px;
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
          max-width: 25%;
          margin-right: 50px;
          padding: 20px 0 30px 20px;
        }
        .catalog-product-view .product-shop{
          flex: unset;
          max-width: 70%;
        }
        /* config_wrap , price_wrap*/
        .product-shop .p-atc{
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-between;
        }
        .config_wrap{
          width: 45%;
          padding: 20px 20px 30px 0;
        }
        .price_wrap{
          width: 55%;
          padding: 20px 30px 30px 25px;
          border-left: 1px solid #D0D0D0;
        }
        .price_wrap > .col-12{
          padding: 0 !important;
        }
        .price_wrap > .col-12.mt-2{
          margin: 30px 0 0 !important;
        }
        .price_wrap > .col-12.mt-2 > form > div{
          padding: 0 !important;
        }
        .price_wrap > .col-12.mt-2 > form > div > .col-12:nth-child(2){
          margin: 15px 0 !important;
        }
        .price_wrap > .col-12.mt-2 > form > div > .col-12:nth-child(2) > div{
            justify-content: space-between !important;
        }
        .price_wrap > .col-12.mt-2 > form > div > .col-12:nth-child(2) > div .add-to{
          max-width: 293px;
          flex: unset;
          width: 100%;
        }
        .catalog-product-view .product-essential .p-atc .add-to .btn-cart{
          height: 38px;
          max-width: 293px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 30px;
        }
        .catalog-product-view .product-essential .p-atc .qty-box .qty{
          width: 36px;
          height: 36px;
        }
        .catalog-product-view .product-essential .p-atc .qty-box .input-group-btn{
          height: 36px;
          width: 28px;
        }
        .catalog-product-view .product-essential .product-shop .p-value-props{
          padding: 15px 0;
          margin: 0 !important;
          border-top: 1px solid #D0D0D0;
          border-bottom: 1px solid #D0D0D0;
        }
       /*shipping */
      .shipping ul li {
        display: flex;
        align-items: center;
      }
      .shipping ul li p.shipping_var {
        font-weight: 400;
        font-size: 15px;
        line-height: 133%;
        color: #333333;
        margin: 0 0 0 6px;
      }
      p.stock_var {
        margin: 0 0 0 6px;
      }
      .catalog-product-view .product-essential .p-value-props .vp-box .vp-row {
        padding: 0;
      }
      .catalog-product-view .product-essential .p-value-props .vp-box .vp-row .in_stock_svg {
        max-width: 20px;
        margin: -3px 0 0 0
      }
      .catalog-product-view .product-essential .vp-box .vp-row:nth-child(2){
        margin-bottom: 15px;
      }
        .config_wrap .col-12.p-head.mb-2{
          margin: 0 0 5px !important;
          padding: 0;
        }
        .config_wrap h1.product-name{
          font-weight: 700 !important;
          font-size: 24px !important;
          line-height: 32px !important;
          color: #286378 !important;
          margin: 0 !important;
        }
        .config_wrap .col-12.text-left.p-item-vendor{
          padding: 0;
        }
        .config_wrap #config-box{
          padding: 0;
          margin: 25px 0 0 !important;
        }
        .catalog-product-view .product-essential .product-shop #product-options-wrapper .swatches .attribute-swatch .hex-swatch,
        .catalog-product-view .product-essential .product-shop #product-options-wrapper .swatches .attribute-swatch .img-swatch{
          height: 23px;
          width: 23px;
        }
        .catalog-product-view .product-essential .product-shop #product-options-wrapper .swatches .attribute-swatch,
        .catalog-product-view .product-essential .product-shop #product-options-wrapper .labels .attribute-label{
          border: unset;
          margin: 0;
        }
        .catalog-product-view .product-essential .product-shop #product-options-wrapper .labels .attribute-label{
          padding: 5px 15px;
        }
        .catalog-product-view .product-essential .product-shop #product-options-wrapper .swatches .attribute-swatch.selected,
        .catalog-product-view .product-essential .product-shop #product-options-wrapper .labels .attribute-label.selected{
          border: 1px solid #286278;
        }
        .catalog-product-view .product-essential .product-shop #product-options-wrapper .swatches{
          gap: 7px;
          margin-top: 0;
        }
        .catalog-product-view .product-essential .product-shop #product-options-wrapper .spca{
          padding: 0;
        }
        .catalog-product-view .product-essential .product-shop #product-options-wrapper .spca:not(:first-of-type){
          margin-top: 20px;
        }
        .catalog-product-view .product-essential .product-shop #product-options-wrapper .attr-label{
          font-size: 16px;
          line-height: 16px;
          color: #333333;
        }
        .catalog-product-view .product-essential .product-shop #product-options-wrapper .spca > .pt-1.pb-1{
          padding: 0 !important;
          margin-top: 8px;
        }
        .catalog-product-view .product-essential .product-shop #product-options-wrapper .labels{
          margin: 0;
          gap: 7px;
          display: flex;
          flex-wrap: wrap !important;
        }
        .catalog-product-view .product-essential .product-shop #product-options-wrapper .labels .attribute-label{
          margin: 0 !important;
        }
        .product-shop form .row.w-100.no-gutters.pb-2 .col-12.mt-4 {
          display: none;
        }
        /*discount_pdp sign_up */
       .discount_pdp.sign_up,
       .discount_pdp {
        padding: 9px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        background: #03a500;
        border-radius: 5px;
        max-width: fit-content;
        margin-top: -62px;
      }
       .discount_pdp.sign_up {
        background: #ffffff;
        border-radius: unset;
      }
       .discount_pdp.sign_up > span,
       .discount_pdp > span {
        font-weight: 600;
        font-size: 13px;
        line-height: 14px;
        text-decoration-line: underline;
        text-transform: uppercase;
        color: #286278;
        margin-left: 4px;
        cursor: pointer;
      }
       .discount_pdp > span {
        letter-spacing: 0.5px;
        text-decoration-line: unset;
        color: #ffffff;
        cursor: unset;
      }
      .catalog-product-view .product-essential .p-price{
        padding: 0;
        margin: 0 0 77px;
      }
      .catalog-product-view .product-essential .p-price > div:nth-child(1){
        margin: 0 !important;
      }   
    
      #pdp-promo-box{
        display: none;
      }
      
      .catalog-product-view .product-essential .p-price .final-price{
        display: flex;
        letter-spacing: -0.01em;
        font-size: 30px;
        line-height: 30px;
      }
      .catalog-product-view .product-essential .p-price .orig-price{
        padding: 0;
        color: #333333;
        font-weight: 400;
        font-size: 15px;
        line-height: 20px;
        margin: 10px 4px 0 0;
      }
      /*diff_price_block */
       .diff_price_block {
        background: #333333;
        border-radius: 4px;
        padding: 6px 8px;
        margin: 10px 0 -40px;
        max-width: fit-content;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
       .diff_price_block > p {
        font-weight: 600;
        font-size: 13px;
        line-height: 108%;
        color: #ffffff;
        margin: 0 6px 0 0;
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
        .tabs_visible_wrap li > p{
          font-weight: 500;
          font-size: 18px;
          line-height: 24px;
          color: #333333;
          margin: 0 6px 0 0;
        }
        .active_tab{
          border-bottom: 2px solid #286378;
        }
        .tabs_visible_wrap li.active_tab > p{
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
            color: #FFFFFF !important;
            background-color: #FFFFFF !important;
        }
        .tippy-tooltip[data-placement^=bottom]>.tippy-arrow{
            transform: rotate(45deg);
            margin: 4px 3px;
            transform-origin: unset;
            color: #FFFFFF !important;
            background-color: #FFFFFF !important;
        }
      /*wrap_var_policy */
      .wrap_var_policy {
      }
      .wrap_var_policy ul {
        display: flex;
        justify-content: space-between;
        gap: 15px;
      }
      .wrap_var_policy ul li {
        width: 50%;
        background: #DFE7EB;
        padding: 12px;
        display: flex;
        align-items: flex-start;
        cursor: pointer;
        justify-content: flex-start;
        gap: 8px;
      }
      .wrap_var_policy ul li > div > span,
      .wrap_var_policy ul li > div > p {
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: #333333;
        margin: 0;
      }
      .wrap_var_policy ul li > div > span {
        font-weight: 600;
        text-decoration-line: underline;
        color: #333333;
        margin: 0 0 2px;
      }
      .wrap_var_policy .img_wrap {
        width: 20px;
        height: 20px;
      }
      .wrap_var_policy .img_wrap img {
        width: 100%;
        height: 100%;
      }
      /*price_match_guarantee */        
      .price_match_guarantee {
        margin-left: 10px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        cursor: pointer;
      }
      .price_match_guarantee > span {
        font-weight: 600;
        font-size: 13px;
        line-height: 15px;
        text-decoration-line: underline;
        color: #333333;
      }
      .price_match_guarantee .img_wrap {
        max-width: 20px;
        max-height: 20px;
        width: 100%;
        height: 100%;
        margin-right: 4px;
      }
      .price_match_guarantee .img_wrap img {
        width: 100%;
        height: 100%;
        display: block;
      }
      /* */
      .catalog-product-view .product-essential .vp-box .vp-row i.in-stock,
      .catalog-product-view .product-essential .vp-box .vp-row i.fa-shipping-fast,
      .catalog-product-view .product-essential .vp-box .vp-row i.made-to-order,
      .catalog-product-view .product-essential .vp-box .vp-row .fad.fa-times-circle,
      .catalog-product-view .product-essential .vp-box .vp-row i.low-stock,
      .catalog-product-view .product-essential .vp-box .vp-row i.no-stock  {
        display: none;
      }
      /*mini_product_specs */
      .mini_product_specs{
        display: flex;
        margin: 24px 0 0;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 20px;
      }
      .mini_product_specs h3{
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        text-transform: capitalize;
        color: #000000;
      }
      .mini_product_specs ul li{
        font-size: 13px;
        line-height: 24px;
        padding: 0 !important;
        flex: unset;
        margin: 0 !important;
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        flex-wrap: nowrap;
        gap: 5px;
      }
      .mini_product_specs ul li span{
        padding: 0 !important;
        flex: unset;
        max-width: unset;
        width: auto;
      }
      /*tippy-tooltip */
       .tippy-popper {
        z-index: 10047222222 !important;
      }
       .tippy-tooltip {
        background: #ffffff;
        border-radius: 8px;
        box-shadow: 0px 2px 6px 2px rgb(0 0 0 / 15%);
        filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2));
        max-width: 309px !important;
      }
       .tippy-tooltip[data-placement^="top"] > .tippy-arrow {
        border-top-color: #ffffff;
      }
       .tippy-tooltip[data-placement^="bottom"] > .tippy-arrow {
        border-bottom-color: #ffffff;
      }
       .tippy-content {
        padding: 20px;
        background-color: unset !important;
        color: unset !important;
        border: unset !important;
        border-radius: unset !important;
        filter: unset !important;
      }
       .tooltip_bar {
        text-align: left;
      }
       .name_tooltip {
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
       .name_tooltip span {
        font-weight: 600;
        font-size: 15px;
        line-height: 133%;
        color: #333333;
        margin-left: 4px;
      }
       .tooltip_bar p {
        margin: 12px 0 0;
        color: #474747;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        letter-spacing: initial;
      }
      .tooltip_bar p a{
        font-weight: 500;
      }
      .diff_price_block .tippy-tooltip[data-placement^="top"] > .tippy-arrow,
      .diff_price_block .tippy-tooltip[data-placement^="bottom"] > .tippy-arrow{
        display: none;
      }
      .diff_price_block .tippy-tooltip{
        background: #FFFFFF;
        box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.15);
        padding: 8px !important;
        border-radius: 0;
        max-width: 423px !important;
        filter: unset;
      }
      .diff_price_block .tippy-content{
        padding: 0 !important;
      }
      .diff_price_block .tippy-content > div{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
      }
      .diff_price_block .tippy-content > div img{
        max-width: 20px;
        height: auto;
        margin-right: 4px;
      }
      .diff_price_block .tippy-content > div > div{
        font-weight: 400;
        font-size: 13px;
        line-height: 14px;
        color: #333333;
        
      }
      </style>
      `

    let stickyScrollBar = /*html */ `
    <div class="sticky_scroll_bar">
      <ul>
        <li class="active"><a href="#main-wrapper">About</a></li>
        <li><a href="#tab-header-1">Product specs</a></li>
        <li><a href="#tab-header-2">Resources</a></li>
        <li><a href="#tab-header-3">Ask a question</a></li>
        <li><a href="#tab-header-4">Return policy</a></li>
        <li><a href="#tab-header-6">Price protection policy</a></li>
        <li><a href="#cts-goods">Items you may need</a></li>
      </ul>
    </div>    
    `

    const banner = /*html*/ `
    <div class="banner">
          <a target="_blank" href="/policies/price-protection/">
              <img src="${imgFolderUrl}check_arrow.svg" alt="check arrow">
              <b>30-Day Lowest Price Guarantee</b>
          </a>
    </div>`

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
                <div>
                  <span>Price Match Guarantee</span>
                  <p>Pay less than anywhere else</p>
                </div>
            </li>
            <li data-tolltip>
                <div class="img_wrap">
                  <img src="${imgFolderUrl}return_policy.png" alt="return policy">
                </div>
                <div>
                  <span class="return_policy">Easy returns</span>
                  <p>30-day return period</p>
                </div>
            </li>
        </ul>
    </div>
    `

    let shipping = /*html */ `
    <div class="shipping">
      <ul>
        <li class="shipping_box">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.80103 4.09938C4.35306 4.16568 4.03366 4.39545 3.83879 4.79273C3.71408 5.04197 3.71022 5.07319 3.69865 5.58747L3.68304 6.12121L2.54171 6.13297C1.45108 6.14472 1.39249 6.14858 1.28743 6.22646C0.913477 6.50306 0.901722 7.03277 1.26796 7.27815C1.36531 7.34831 1.50949 7.35217 3.40661 7.37164C5.39319 7.39111 5.44002 7.39111 5.54912 7.47284C5.92307 7.74945 5.93483 8.27915 5.56859 8.52453C5.47124 8.5947 5.33882 8.59855 3.83897 8.61802C2.26914 8.63749 2.21459 8.64135 2.10549 8.71922C1.73154 8.99583 1.71979 9.52553 2.08603 9.77092C2.18337 9.84108 2.3158 9.84494 3.81564 9.86441C5.38547 9.88387 5.44002 9.88773 5.54912 9.96561C5.8452 10.1838 5.92693 10.5655 5.73995 10.8421C5.56859 11.0915 5.47896 11.1108 4.53232 11.1108H3.69075V11.9289V12.7469H3.53885C3.41818 12.7469 3.36749 12.7702 3.30504 12.8481C3.23102 12.9455 3.22331 13.0039 3.22331 13.6234C3.22331 14.2896 3.22331 14.2934 3.32451 14.3869C3.418 14.4765 3.45308 14.4804 4.01787 14.4922L4.61387 14.5039L4.64106 14.2585C4.71508 13.5183 5.18252 12.8485 5.84465 12.5368C6.24192 12.3498 6.47574 12.303 6.91985 12.3304C7.37553 12.3537 7.6639 12.451 8.02609 12.6966C8.56369 13.0588 8.8831 13.6043 8.96887 14.2938L8.99605 14.5002H11.1661H13.3358L13.3826 14.177C13.5035 13.32 14.15 12.5994 14.9875 12.3774C15.2408 12.3111 15.7198 12.3034 16.0082 12.3618C16.8457 12.5331 17.5586 13.3044 17.6833 14.177L17.7301 14.5002H18.2053C18.7039 14.5002 18.8986 14.4613 18.9611 14.3445C18.9844 14.3055 19 13.9667 19 13.5927C19 12.9383 18.9961 12.915 18.9104 12.8331C18.8597 12.7864 18.7741 12.7473 18.7157 12.7473H18.6139L18.6022 10.71C18.5904 8.72731 18.5866 8.67276 18.5087 8.50139C18.4618 8.40405 18.01 7.78067 17.5036 7.11854C16.7754 6.15997 16.5495 5.89126 16.4209 5.8211C16.2613 5.73532 16.2418 5.73532 14.7653 5.73532H13.2734V5.07319C13.2734 4.27845 13.2421 4.1655 13.0124 4.10323C12.841 4.05272 5.12044 4.05272 4.80103 4.09938ZM15.6223 6.9975C15.7898 7.06766 15.8638 7.15325 16.5065 8.03377L17.0597 8.79343L15.6067 8.80518C14.8042 8.80904 14.1265 8.80518 14.103 8.79343C14.0641 8.78167 14.0523 8.55961 14.0523 7.85855V6.94295H14.773C15.2991 6.94295 15.5288 6.95856 15.6223 6.9975Z" fill="#286278"/>
            <path d="M6.36035 12.9926C5.92413 13.1406 5.59683 13.4211 5.39424 13.834C5.27743 14.0717 5.26953 14.1183 5.26953 14.4807C5.26953 14.839 5.28129 14.8936 5.39424 15.1351C5.54614 15.4545 5.82275 15.735 6.13443 15.8909C6.34088 15.9882 6.39928 16 6.78885 16C7.17051 16 7.24068 15.9882 7.43941 15.8948C8.07435 15.5987 8.45602 14.8781 8.33149 14.2235C8.23029 13.7172 7.89124 13.2731 7.43941 13.0666C7.26015 12.9847 7.14719 12.9614 6.86672 12.9537C6.64871 12.9459 6.45769 12.9615 6.36035 12.9926ZM7.02652 14.0327C7.39661 14.2158 7.40433 14.7378 7.03827 14.9366C6.87848 15.0221 6.77342 15.0262 6.59416 14.9522C6.16951 14.7731 6.22406 14.099 6.67203 13.9822C6.81236 13.9469 6.85901 13.9548 7.02652 14.0327Z" fill="#286278"/>
            <path d="M15.0848 12.9925C14.8355 13.0783 14.6757 13.1716 14.4772 13.3588C14.002 13.8029 13.8617 14.4378 14.0915 15.061C14.2121 15.3727 14.555 15.7388 14.8783 15.8868C15.1004 15.988 15.1626 15.9998 15.5327 15.9998C15.9105 15.9998 15.9612 15.992 16.1949 15.8791C16.9389 15.5207 17.266 14.6909 16.974 13.9002C16.8572 13.5926 16.5337 13.2535 16.2066 13.0901C15.9846 12.981 15.9028 12.9615 15.595 12.9538C15.377 12.9459 15.1823 12.9615 15.0848 12.9925ZM15.7548 14.0288C16.1638 14.2158 16.1287 14.8156 15.6964 14.9675C15.1004 15.174 14.7382 14.2898 15.3107 14.0288C15.4003 13.9899 15.5015 13.9548 15.5327 13.9548C15.5639 13.9548 15.6653 13.9897 15.7548 14.0288Z" fill="#286278"/>
          </svg>
          <p class="shipping_var" data-tolltip><span><b>Free Shipping!</b></span></p>
        </li>
      </ul>
    </div>
    `

    let discountPdp = /*html */ `
      <div class="discount_pdp">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.49977 14.25L11.6248 10.125M9.74977 16.5L11.6248 14.625M3.31027 12.4395L11.5603 4.1895C11.8415 3.90818 12.223 3.75008 12.6208 3.75H18.7498C19.1476 3.75 19.5291 3.90804 19.8104 4.18934C20.0917 4.47064 20.2498 4.85218 20.2498 5.25V11.379C20.2497 11.7768 20.0916 12.1583 19.8103 12.4395L11.5603 20.6895C11.279 20.9707 10.8975 21.1287 10.4998 21.1287C10.102 21.1287 9.72057 20.9707 9.43927 20.6895L3.31027 14.5605C3.02907 14.2792 2.87109 13.8977 2.87109 13.5C2.87109 13.1023 3.02907 12.7208 3.31027 12.4395V12.4395Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M17.25 7.5C17.25 7.69891 17.171 7.88968 17.0303 8.03033C16.8897 8.17098 16.6989 8.25 16.5 8.25C16.3011 8.25 16.1103 8.17098 15.9697 8.03033C15.829 7.88968 15.75 7.69891 15.75 7.5C15.75 7.30109 15.829 7.11032 15.9697 6.96967C16.1103 6.82902 16.3011 6.75 16.5 6.75C16.6989 6.75 16.8897 6.82902 17.0303 6.96967C17.171 7.11032 17.25 7.30109 17.25 7.5Z" fill="white"/>
          </svg>
          <span>15% discount applied on cart</span>
      </div>
      `

    let discounPdpSignUp = /*html */ `
      <div class="discount_pdp sign_up">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.49977 14.25L11.6248 10.125M9.74977 16.5L11.6248 14.625M3.31027 12.4395L11.5603 4.1895C11.8415 3.90818 12.223 3.75008 12.6208 3.75H18.7498C19.1476 3.75 19.5291 3.90804 19.8104 4.18934C20.0917 4.47064 20.2498 4.85218 20.2498 5.25V11.379C20.2497 11.7768 20.0916 12.1583 19.8103 12.4395L11.5603 20.6895C11.279 20.9707 10.8975 21.1287 10.4998 21.1287C10.102 21.1287 9.72057 20.9707 9.43927 20.6895L3.31027 14.5605C3.02907 14.2792 2.87109 13.8977 2.87109 13.5C2.87109 13.1023 3.02907 12.7208 3.31027 12.4395V12.4395Z" stroke="#286278" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M17.25 7.5C17.25 7.69891 17.171 7.88968 17.0303 8.03033C16.8897 8.17098 16.6989 8.25 16.5 8.25C16.3011 8.25 16.1103 8.17098 15.9697 8.03033C15.829 7.88968 15.75 7.69891 15.75 7.5C15.75 7.30109 15.829 7.11032 15.9697 6.96967C16.1103 6.82902 16.3011 6.75 16.5 6.75C16.6989 6.75 16.8897 6.82902 17.0303 6.96967C17.171 7.11032 17.25 7.30109 17.25 7.5Z" fill="#286278"/>
          </svg>
          <span data-sign="signUup">get 15% off with a coupon</span>
      </div>
      `

    let priceReflectsPdpSignUp = /*html */ `
      <div class="price_reflects_pdp sign_up">
          <img src="${imgFolderUrl}price_reflects.png" alt="icon">
          <span></span>
      </div>
      `

    function renderText(text, tooltip) {
      return `<li>
                <p>${text}</p>
                <svg data-toolltip='${tooltip}' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0C3.13306 0 0 3.16129 0 7C0 10.8669 3.13306 14 7 14C10.8387 14 14 10.8669 14 7C14 3.16129 10.8387 0 7 0ZM7 12.6452C3.86694 12.6452 1.35484 10.1331 1.35484 7C1.35484 3.89516 3.86694 1.35484 7 1.35484C10.1048 1.35484 12.6452 3.89516 12.6452 7C12.6452 10.1331 10.1048 12.6452 7 12.6452ZM10.0202 5.44758C10.0202 4.03629 8.52419 2.93548 7.14113 2.93548C5.81452 2.93548 4.96774 3.5 4.31855 4.4879C4.20565 4.62903 4.23387 4.82661 4.375 4.93952L5.16532 5.53226C5.30645 5.64516 5.53226 5.61694 5.64516 5.47581C6.06855 4.93952 6.37903 4.62903 7.02823 4.62903C7.53629 4.62903 8.15726 4.93952 8.15726 5.44758C8.15726 5.81452 7.84677 5.98387 7.33871 6.26613C6.77419 6.60484 6.0121 7 6.0121 8.01613V8.24193C6.0121 8.43952 6.15323 8.58064 6.35081 8.58064H7.62097C7.81855 8.58064 7.95968 8.43952 7.95968 8.24193V8.07258C7.95968 7.36694 10.0202 7.33871 10.0202 5.44758ZM8.18548 10.1613C8.18548 9.5121 7.64919 8.97581 7 8.97581C6.32258 8.97581 5.81452 9.5121 5.81452 10.1613C5.81452 10.8387 6.32258 11.3468 7 11.3468C7.64919 11.3468 8.18548 10.8387 8.18548 10.1613Z" fill="#286378"/>
                </svg>
            </li>`
    }

    document.head.insertAdjacentHTML("beforeend", style)
    document.querySelector(".product-view").insertAdjacentHTML("beforebegin", stickyScrollBar)
    document.querySelector(".header-container").insertAdjacentHTML("beforeend", banner)
    document.querySelector(".var_ceiling_fan .banner b")?.addEventListener("click", () => {
      console.log(`banner`)
    })

    document.querySelector("#personalized").insertAdjacentHTML(
      "afterend",
      `<div class="product_details_wrap"><h3>Product details</h3> <div class="new_inform_wrap"><div><span></span></div>    <div class="new_item_inform">
      <div class="img_wrap">
        <img src="" alt="" />
      </div>
      <div class="mini_more_inform">
        <h2></h2>
        <div class="mini_vendor_box"></div>
        <div class="mini_price_box"></div>
      </div>
    </div></div></div>`
    )

    if (document.querySelector(".product_details_wrap")) {
      document.querySelector(".product_details_wrap .new_inform_wrap > div > span").after(document.querySelector(".catalog-product-view .p-support"))
      document.querySelector(".product_details_wrap").after(document.querySelector("#cts-goods"))
      document.querySelector(".product_details_wrap .p-support")?.after(document.querySelector(".row.no-gutters.p-product-info.pt-2"))
    }

    let a = setInterval(() => {
      if (document.querySelector("#accessories")) {
        clearInterval(a)
        renderAccessoriesTabs()
      }
    }, 1000)

    // main cart
    if (!document.querySelector(".product-shop .config_wrap") && !document.querySelector(".product-shop .price_wrap")) {
      document.querySelector(".product-shop .p-atc")?.insertAdjacentHTML("afterbegin", `<div class="config_wrap"><span></span></div><div class="price_wrap"><span></span></div>`)
    }
    if (document.querySelector(".product-shop .config_wrap")) {
      document.querySelector(".product-shop .config_wrap span").after(document.querySelector(".product-shop .col-12.p-head.mb-2"))
      document.querySelector(".product-shop .config_wrap .col-12.p-head.mb-2").after(document.querySelector(".product-shop .col-12.text-left.p-item-vendor"))
      if (document.querySelector("#config-box")) {
        document.querySelector(".product-shop .config_wrap .col-12.text-left.p-item-vendor").after(document.querySelector("#config-box"))
      } else {
        document
          .querySelector(".product-shop .config_wrap .col-12.text-left.p-item-vendor")
          ?.insertAdjacentHTML("afterend", `<div class="mini_product_specs"><div><h3></h3></div><div><h3></h3></div></div>`)

        document.querySelectorAll("#product-attribute-specs h4").forEach((el) => {
          if (el.textContent === "Dimensions") {
            document.querySelector(".mini_product_specs div:nth-child(1) h3").textContent = el.textContent
            let content = el.closest("div").querySelector("ul")?.cloneNode(true)
            if (content) {
              if (!document.querySelector(".mini_product_specs > div:nth-child(1) > ul")) {
                document.querySelector(".mini_product_specs div:nth-child(1)")?.appendChild(content)
              }
            }
          }

          if (el.textContent === "Appearance") {
            document.querySelector(".mini_product_specs div:nth-child(2) h3").textContent = el.textContent
            let content = el.closest("div").querySelector("ul")?.cloneNode(true)
            if (content) {
              if (!document.querySelector(".mini_product_specs > div:nth-child(2) > ul")) {
                document.querySelector(".mini_product_specs div:nth-child(2)")?.appendChild(content)
              }
            }
          }
        })
      }
    }
    if (document.querySelector(".product-shop .price_wrap")) {
      document.querySelector(".product-shop .price_wrap span").after(document.querySelector(".product-shop .p-price").closest("div.col-12"))
      document.querySelector(".product-shop .p-price").closest("div.col-12").after(document.querySelector(".product-shop .col-12.mt-2"))
    }

    document.querySelector(".price_wrap").insertAdjacentHTML("beforeend", wrapVarPolicy)

    renderPriceMatchGuarantee()
    // render block Price Match Guarantee
    function renderPriceMatchGuarantee() {
      if (document.querySelector(".catalog-product-view .product-essential .p-price .final-price")) {
        document.querySelectorAll(".catalog-product-view .product-essential .p-price .final-price").forEach((el) => {
          el.insertAdjacentHTML("beforeend", priceMatchGuarantee)
          if (el.closest(".p-price").querySelector(".orig-price")) {
            el.before(el.closest(".p-price").querySelector(".orig-price"))
          }
        })
      }
    }

    renderToPdp()
    onTippyRun()

    function renderToPdp() {
      if (document.querySelector("#main-wrapper #item-details")) {
        let dataProduct = JSON.parse(document.querySelector("#main-wrapper #item-details").getAttribute("data-product"))
        let salesProduct = dataProduct.salesproduct

        if (salesProduct) {
          if (document.querySelector('.header-container .header-actions .action-links [data-account-trigger="true"] span').textContent === "Account") {
            if (!document.querySelector(".discount_pdp")) {
              document.querySelector(".catalog-product-view .product-essential .p-price")?.insertAdjacentHTML("afterend", discountPdp)
            }
          } else {
            if (!document.querySelector(".discount_pdp.sign_up")) {
              document.querySelector(".catalog-product-view .product-essential .p-price")?.insertAdjacentHTML("afterend", discounPdpSignUp)

              // on click GET 15% OFF WITH A COUPON
              document.querySelector(".discount_pdp.sign_up > span")?.addEventListener("click", function () {
                document.querySelector('.catalog-product-view .promo-box .promo-text [data-account-trigger="true"]').click()
              })
            }
          }
        }

        if (!document.querySelector(".shipping")) {
          document.querySelector(".catalog-product-view .product-essential .vp-box")?.insertAdjacentHTML("beforeend", shipping)
        }

        document.querySelectorAll(".product-shop").forEach((el) => {
          if (document.querySelector(".shipping")) {
            let price
            let oldPrice

            if (el.querySelector(".final-price .price")) {
              price = +el.querySelector(".final-price .price").textContent.slice(1).replace(/,/g, "")
              if (window.innerWidth <= 768) {
                document.querySelector(".sticky_box .last_price").textContent = el.querySelector(".final-price .price").textContent
              }
            }

            if (price < 75) {
              el.querySelector("p.shipping_var").innerHTML = `<b>Free Shipping</b> on orders over $75`
            } else {
              el.querySelector("p.shipping_var").innerHTML = "<b>Free Shipping!</b>"
            }

            if (el.querySelector(".orig-price")) {
              if (el.querySelector(".orig-price .price")) {
                oldPrice = +el.querySelector(".orig-price .price").textContent.slice(1).replace(/,/g, "")
                if (window.innerWidth <= 768) {
                  document.querySelector(".sticky_box .old_price").style.display = "block"
                  document.querySelector(".sticky_box .old_price").textContent = el.querySelector(".orig-price .price").textContent
                }
              }

              let diffDisc = oldPrice - price

              let percent = (100 - (price * 100) / oldPrice).toFixed(0)
              if (!el.querySelector(".diff_price_block")) {
                el.querySelector(".pdp-afterpay")?.insertAdjacentHTML(
                  "beforebegin",
                  `<div class="diff_price_block" data-tolltip>
                    <p>You save: $${diffDisc.toFixed(2)} (${percent}% off)</p> 
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 0C3.13306 0 0 3.16129 0 7C0 10.8669 3.13306 14 7 14C10.8387 14 14 10.8669 14 7C14 3.16129 10.8387 0 7 0ZM7 12.6452C3.86694 12.6452 1.35484 10.1331 1.35484 7C1.35484 3.89516 3.86694 1.35484 7 1.35484C10.1048 1.35484 12.6452 3.89516 12.6452 7C12.6452 10.1331 10.1048 12.6452 7 12.6452ZM10.0202 5.44758C10.0202 4.03629 8.52419 2.93548 7.14113 2.93548C5.81452 2.93548 4.96774 3.5 4.31855 4.4879C4.20565 4.62903 4.23387 4.82661 4.375 4.93952L5.16532 5.53226C5.30645 5.64516 5.53226 5.61694 5.64516 5.47581C6.06855 4.93952 6.37903 4.62903 7.02823 4.62903C7.53629 4.62903 8.15726 4.93952 8.15726 5.44758C8.15726 5.81452 7.84677 5.98387 7.33871 6.26613C6.77419 6.60484 6.0121 7 6.0121 8.01613V8.24193C6.0121 8.43952 6.15323 8.58064 6.35081 8.58064H7.62097C7.81855 8.58064 7.95968 8.43952 7.95968 8.24193V8.07258C7.95968 7.36694 10.0202 7.33871 10.0202 5.44758ZM8.18548 10.1613C8.18548 9.5121 7.64919 8.97581 7 8.97581C6.32258 8.97581 5.81452 9.5121 5.81452 10.1613C5.81452 10.8387 6.32258 11.3468 7 11.3468C7.64919 11.3468 8.18548 10.8387 8.18548 10.1613Z" fill="white"/></svg>
                  </div>`
                )
              }
            }

            el.querySelectorAll(".vp-box .vp-row .text-strong").forEach((i) => {
              if (i.textContent === "Free Shipping ") {
                i.closest(".vp-row").previousElementSibling.style.display = "none"
                i.closest(".vp-row").style.display = "none"
              }

              if (i.closest(".vp-box").querySelector(".vp-row").textContent.includes("Register Now.")) {
                i.closest(".vp-box").querySelector(".vp-row").previousElementSibling.style.display = "none"
                i.closest(".vp-box").querySelector(".vp-row").style.display = "none"
              }

              if (el.querySelector("i.in-stock")) {
                if (i.closest(".vp-box").querySelector(".vp-row span.text-strong").textContent === "In Stock.") {
                  if (!i.closest(".vp-box").querySelector(".vp-row .in_stock_svg")) {
                    el.querySelector("i.in-stock").insertAdjacentHTML(
                      "beforebegin",
                      `<svg class="in_stock_svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 2C5.584 2 2 5.584 2 10C2 14.416 5.584 18 10 18C14.416 18 18 14.416 18 10C18 5.584 14.416 2 10 2ZM8.4 14L4.4 10L5.528 8.872L8.4 11.736L14.472 5.664L15.6 6.8L8.4 14Z" fill="#1B963E"/></svg>`
                    )
                  }
                }
              }
              if (el.querySelector("i.made-to-order")) {
                if (i.closest(".vp-box").querySelector(".vp-row span.text-strong").textContent === "Closeout - Final Sale.") {
                  if (!i.closest(".vp-box").querySelector(".vp-row .final_sale_svg")) {
                    el.querySelector("i.made-to-order").insertAdjacentHTML(
                      "beforebegin",
                      `<svg class="final_sale_svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.6333 7.46675C16.075 6.85008 15.2333 6.49175 14.0666 6.36675V5.73341C14.0666 4.59175 13.5833 3.49175 12.7333 2.72508C11.875 1.94175 10.7583 1.57508 9.59995 1.68341C7.60828 1.87508 5.93328 3.80008 5.93328 5.88341V6.36675C4.76662 6.49175 3.92495 6.85008 3.36662 7.46675C2.55828 8.36675 2.58328 9.56675 2.67495 10.4001L3.25828 15.0417C3.43328 16.6667 4.09162 18.3334 7.67495 18.3334H12.325C15.9083 18.3334 16.5666 16.6667 16.7416 15.0501L17.325 10.3917C17.4166 9.56675 17.4416 8.36675 16.6333 7.46675ZM9.71662 2.84175C10.55 2.76675 11.3416 3.02508 11.9583 3.58341C12.5666 4.13341 12.9083 4.91675 12.9083 5.73341V6.31675H7.09162V5.88341C7.09162 4.40008 8.31662 2.97508 9.71662 2.84175ZM9.99995 15.4834C8.25828 15.4834 6.84162 14.0667 6.84162 12.3251C6.84162 10.5834 8.25828 9.16675 9.99995 9.16675C11.7416 9.16675 13.1583 10.5834 13.1583 12.3251C13.1583 14.0667 11.7416 15.4834 9.99995 15.4834Z" fill="#286278"/>
                          <path d="M9.16657 13.8167C8.95824 13.8167 8.7499 13.7083 8.63324 13.5166C8.45824 13.225 8.5499 12.8333 8.8499 12.6583L9.59157 12.2167V11.3167C9.59157 10.975 9.8749 10.6917 10.2166 10.6917C10.5582 10.6917 10.8332 10.9667 10.8332 11.3167V12.5667C10.8332 12.7833 10.7166 12.9917 10.5332 13.1L9.49157 13.725C9.39157 13.7833 9.2749 13.8167 9.16657 13.8167Z" fill="#286278"/>
                        </svg>`
                    )
                  }
                }
              }
              if (el.querySelector("i.low-stock")) {
                if (i.closest(".vp-box").querySelector(".vp-row span.text-strong").textContent === "Low Stock.") {
                  if (!i.closest(".vp-box").querySelector(".vp-row .low_stock_svg")) {
                    el.querySelector("i.low-stock").insertAdjacentHTML(
                      "beforebegin",
                      `<svg class="low_stock_svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.3335 13.4917L18.3335 6.50841C18.3335 3.47508 16.5252 1.66675 13.4918 1.66675L6.51683 1.66675C3.47516 1.66675 1.66683 3.47508 1.66683 6.50841L1.66683 13.4834C1.66683 16.5167 3.47516 18.3251 6.5085 18.3251L13.4918 18.3251C16.5252 18.3334 18.3335 16.5251 18.3335 13.4917ZM4.87516 6.35841C4.5335 6.35841 4.25016 6.07508 4.25016 5.73341C4.25016 5.39175 4.5335 5.10841 4.87516 5.10841L6.60016 5.10841C6.94183 5.10841 7.22516 5.39175 7.22516 5.73341C7.22516 6.07508 6.94183 6.35841 6.60016 6.35841H4.87516ZM4.87516 10.6251C4.5335 10.6251 4.25016 10.3417 4.25016 10.0001C4.25016 9.65841 4.5335 9.37508 4.87516 9.37508L8.3335 9.37508C8.67516 9.37508 8.9585 9.65841 8.9585 10.0001C8.9585 10.3417 8.67516 10.6251 8.3335 10.6251L4.87516 10.6251ZM4.87516 14.8917C4.5335 14.8917 4.25016 14.6084 4.25016 14.2667C4.25016 13.9251 4.5335 13.6417 4.87516 13.6417L10.0585 13.6417C10.4002 13.6417 10.6835 13.9251 10.6835 14.2667C10.6835 14.6084 10.4002 14.8917 10.0585 14.8917L4.87516 14.8917ZM12.6918 14.8917C12.3502 14.8917 12.0668 14.6084 12.0668 14.2667C12.0668 13.9251 12.3502 13.6417 12.6918 13.6417H13.5002C11.3168 11.5167 9.77516 8.85841 9.0335 5.88341C9.01683 5.83341 9.01683 5.78341 9.01683 5.73341C9.01683 5.45008 9.2085 5.20008 9.49183 5.12508C9.82516 5.04175 10.1668 5.24175 10.2502 5.58341C10.9502 8.39175 12.4252 10.8917 14.5085 12.8751V11.8334C14.5085 11.4917 14.7918 11.2084 15.1335 11.2084C15.4752 11.2084 15.7585 11.4917 15.7585 11.8334L15.7585 14.2751C15.7585 14.3084 15.7418 14.3334 15.7418 14.3667C15.7335 14.4084 15.7335 14.4501 15.7168 14.4917C15.7002 14.5334 15.6752 14.5667 15.6502 14.6084C15.6335 14.6334 15.6252 14.6584 15.6085 14.6834C15.6002 14.6917 15.5918 14.6917 15.5918 14.7001C15.5585 14.7334 15.5252 14.7584 15.4918 14.7834C15.4585 14.8084 15.4335 14.8334 15.4002 14.8417C15.3668 14.8584 15.3335 14.8584 15.2918 14.8667C15.2502 14.8751 15.2085 14.8917 15.1585 14.8917C15.1502 14.8917 15.1418 14.9001 15.1335 14.9001L12.6918 14.9001V14.8917Z" fill="#F29C38"/>
                  </svg>`
                    )
                  }
                }
              }
              if (el.querySelector("i.fad.fa-times-circle")) {
                if (i.closest(".vp-box").querySelector(".vp-row span.text-strong").textContent === "Backordered.") {
                  if (!i.closest(".vp-box").querySelector(".vp-row .backordered_svg")) {
                    el.querySelector("i.fad.fa-times-circle").insertAdjacentHTML(
                      "beforebegin",
                      `<svg class="backordered_svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.6333 7.46675C16.075 6.85008 15.2333 6.49175 14.0666 6.36675V5.73341C14.0666 4.59175 13.5833 3.49175 12.7333 2.72508C11.875 1.94175 10.7583 1.57508 9.59995 1.68341C7.60828 1.87508 5.93328 3.80008 5.93328 5.88341V6.36675C4.76662 6.49175 3.92495 6.85008 3.36662 7.46675C2.55828 8.36675 2.58328 9.56675 2.67495 10.4001L3.25828 15.0417C3.43328 16.6667 4.09162 18.3334 7.67495 18.3334H12.325C15.9083 18.3334 16.5666 16.6667 16.7416 15.0501L17.325 10.3917C17.4166 9.56675 17.4416 8.36675 16.6333 7.46675ZM9.71662 2.84175C10.55 2.76675 11.3416 3.02508 11.9583 3.58341C12.5666 4.13341 12.9083 4.91675 12.9083 5.73341V6.31675H7.09162V5.88341C7.09162 4.40008 8.31662 2.97508 9.71662 2.84175ZM9.99995 15.4834C8.25828 15.4834 6.84162 14.0667 6.84162 12.3251C6.84162 10.5834 8.25828 9.16675 9.99995 9.16675C11.7416 9.16675 13.1583 10.5834 13.1583 12.3251C13.1583 14.0667 11.7416 15.4834 9.99995 15.4834Z" fill="#E35757"/>
                          <path d="M11.3333 12.7582L10.8916 12.3166L11.3083 11.8999C11.5499 11.6582 11.5499 11.2582 11.3083 11.0166C11.0666 10.7749 10.6666 10.7749 10.4249 11.0166L10.0083 11.4332L9.5666 10.9916C9.32493 10.7499 8.92494 10.7499 8.68327 10.9916C8.4416 11.2332 8.4416 11.6332 8.68327 11.8749L9.12494 12.3166L8.6666 12.7749C8.42493 13.0166 8.42493 13.4166 8.6666 13.6582C8.7916 13.7832 8.94994 13.8416 9.10827 13.8416C9.2666 13.8416 9.42494 13.7832 9.54994 13.6582L10.0083 13.1999L10.4499 13.6416C10.5749 13.7666 10.7333 13.8249 10.8916 13.8249C11.0499 13.8249 11.2083 13.7666 11.3333 13.6416C11.5749 13.3999 11.5749 13.0082 11.3333 12.7582Z" fill="#E35757"/>
                        </svg>`
                    )
                  }
                }
              }
              if (el.querySelector("i.no-stock")) {
                if (i.closest(".vp-box").querySelector("i.no-stock")) {
                  if (!i.closest(".vp-box").querySelector(".vp-row .no_stock_svg")) {
                    el.querySelector("i.no-stock").insertAdjacentHTML(
                      "beforebegin",
                      `<svg class="no_stock_svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3337 3.54175C13.3337 4.57508 12.492 5.41675 11.4587 5.41675H8.54199C8.02533 5.41675 7.55866 5.20841 7.21699 4.86675C6.87533 4.52508 6.66699 4.05841 6.66699 3.54175C6.66699 2.50841 7.50866 1.66675 8.54199 1.66675H11.4587C11.9753 1.66675 12.442 1.87508 12.7837 2.21675C13.1253 2.55841 13.3337 3.02508 13.3337 3.54175Z" fill="#286278"/>
                        <path d="M15.6913 4.19176C15.4997 4.03342 15.283 3.90842 15.0497 3.81676C14.808 3.72509 14.5663 3.91676 14.5163 4.16676C14.233 5.59176 12.9747 6.66676 11.458 6.66676H8.54134C7.70801 6.66676 6.92467 6.34176 6.33301 5.75009C5.89967 5.31676 5.59967 4.76676 5.48301 4.17509C5.43301 3.92509 5.18301 3.72509 4.94134 3.82509C3.97467 4.21676 3.33301 5.10009 3.33301 6.87509V15.0001C3.33301 17.5001 4.82467 18.3334 6.66634 18.3334H13.333C15.1747 18.3334 16.6663 17.5001 16.6663 15.0001V6.87509C16.6663 5.51676 16.2913 4.68342 15.6913 4.19176ZM6.66634 10.2084H9.99967C10.3413 10.2084 10.6247 10.4918 10.6247 10.8334C10.6247 11.1751 10.3413 11.4584 9.99967 11.4584H6.66634C6.32467 11.4584 6.04134 11.1751 6.04134 10.8334C6.04134 10.4918 6.32467 10.2084 6.66634 10.2084ZM13.333 14.7918H6.66634C6.32467 14.7918 6.04134 14.5084 6.04134 14.1668C6.04134 13.8251 6.32467 13.5418 6.66634 13.5418H13.333C13.6747 13.5418 13.958 13.8251 13.958 14.1668C13.958 14.5084 13.6747 14.7918 13.333 14.7918Z" fill="#286278"/>
                        </svg>`
                    )
                  }
                }
              }
            })
          }
        })
      }
    }

    // render Accessories Tabs
    function renderAccessoriesTabs() {
      document.querySelector(".sticky_scroll_bar ul li:last-child").style.display = "block"
      if (!document.querySelector(".accessories_tabs")) {
        document
          .querySelector("#accessories")
          ?.insertAdjacentHTML("afterend", `<div class="accessories_tabs"><ul class="tabs_visible_wrap"></ul> <div class="tabs_content"><span></span></div></div>`)
      }

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

    renderTooltip()
    function renderTooltip() {
      document.querySelectorAll("[data-tolltip]").forEach((el) => {
        let title

        if (el.closest(".wrap_var_policy")) {
          title = el.querySelector("span").textContent
        }
        if (el.closest(".price_match_guarantee")) {
          title = el.querySelector("span").textContent
        }
        if (el.classList.contains("shipping_var")) {
          title = el.querySelector("b").textContent
        }

        let arrTooltipTableVar = arrTooltipTable[title]
        el.setAttribute("data-tolltip", arrTooltipTableVar)

        if (el.classList.contains("diff_price_block")) {
          let t = document.querySelector("#pdp-promo-box span").innerHTML.split(".")
          el.setAttribute("data-tolltip", `<div><img src="${imgFolderUrl}price_reflects.png" alt="icon"> <div>${t[0]}.<br/><b>${t[1]}${t[2]}</b>.</div></div>`)
        }
      })
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
                  placement: "bottom-start",
                  duration: [500, 500],
                  interactive: true,
                  appendTo: function () {
                    return el
                  },
                })
              }
            }, 1000)
          })
        }

        if (typeof tippy === "function" && document.querySelector("[data-toolltip]")) {
          clearInterval(tippyRun)

          document.querySelectorAll("[data-toolltip]").forEach((el) => {
            setTimeout(() => {
              if (el) {
                tippy(el, {
                  content: el.getAttribute("data-toolltip"),
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

    onScrollBar()
    function onScrollBar() {
      const list = document.querySelectorAll(".sticky_scroll_bar ul li a")
      list.forEach((item) => {
        document.querySelectorAll(".new_inform_wrap #product-info .i-card button").forEach((el, i) => {
          if (el.getAttribute("data-label") === "product-resources") {
            if (item.textContent === "Resources") {
              item.closest("li").style.display = "block"
            }
          }

          if (document.querySelectorAll(".new_inform_wrap #product-info .i-card button")[1].getAttribute("data-label") !== "product-resources") {
            if (item.textContent === "Resources") {
              item.closest("li").style.display = "none"
            }
          }

          if (el.textContent.toLocaleLowerCase().includes(item.textContent.toLocaleLowerCase())) {
            item.setAttribute("href", `#${el.closest(".i-header").getAttribute("id")}`)
            console.log(el.closest(".i-header").getAttribute("id"))
          }
        })

        item.addEventListener("click", (e) => {
          e.preventDefault()

          list.forEach((el) => {
            el.closest("li").classList.remove("active")
          })

          item.closest("li").classList.add("active")

          let href = item.getAttribute("href").substring(1)

          const scrollTarget = document.getElementById(href)

          const topOffset = 70
          const elementPosition = scrollTarget.getBoundingClientRect().top
          const offsetPosition = elementPosition - topOffset

          console.log(item)

          window.scrollBy({
            top: offsetPosition,
            behavior: "smooth",
          })
        })
      })
    }

    miniCart()
    function miniCart() {
      let title = document.querySelector(".config_wrap .col-12.p-head.mb-2").cloneNode(true),
        vendor = document.querySelector(".config_wrap .col-12.text-left.p-item-vendor").cloneNode(true),
        priceBlock = document.querySelector(".price_wrap").cloneNode(true),
        img = document.querySelector(".catalog-product-view .product-essential .p-media .media-sticky").cloneNode(true)

      document.querySelector(".mini_more_inform > h2").insertAdjacentHTML("afterbegin", document.querySelector(".config_wrap .col-12.p-head.mb-2 span").textContent)
      document.querySelector(".mini_vendor_box").insertAdjacentHTML("afterbegin", document.querySelector(".config_wrap .col-12.text-left.p-item-vendor").innerHTML)

      // if (all) {
      //   if (!document.querySelector(".new_item_inform .catalog-product-view .product-essential")) {
      //     document.querySelector(".new_item_inform")?.appendChild(all)
      //   }
      // }

      // if (title) {
      //   if (!document.querySelector(".mini_more_inform h2 .col-12.p-head.mb-2")) {
      //     document.querySelector(".mini_more_inform > h2")?.appendChild(title)
      //   }
      // }

      // if (vendor) {
      //   if (!document.querySelector(".mini_vendor_box .col-12.text-left.p-item-vendor")) {
      //     document.querySelector(".mini_vendor_box")?.appendChild(vendor)
      //   }
      // }

      // if (priceBlock) {
      //   if (!document.querySelector(".mini_price_box .price_wrap")) {
      //     document.querySelector(".mini_price_box")?.appendChild(priceBlock)
      //   }
      // }
    }

    // observer pdp
    let observer = new MutationObserver(() => {
      if (document.querySelector(".catalog-product-view .product-essential")) {
        observer.disconnect()
        console.log(`observer`)

        if (!document.querySelector(".price_match_guarantee")) {
          renderPriceMatchGuarantee()
        }

        renderToPdp()
        renderTooltip()

        if (document.querySelector("#accessories")) {
          if (!document.querySelector(".accessories_tabs")) {
            console.log(`!document.querySelector(".accessories_tabs"))`)
            renderAccessoriesTabs()
          }
        }

        onTippyRun()
        onScrollBar()
        miniCart()

        observer.observe(document.querySelector(".catalog-product-view .product-essential"), {
          childList: true,
          subtree: true,
        })
      }
    })

    if (document.querySelector(".catalog-product-view .product-essential")) {
      observer.observe(document.querySelector(".catalog-product-view .product-essential"), {
        childList: true,
        subtree: true,
      })
    }
  }
}, 2000)
