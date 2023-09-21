let startFunk = setInterval(() => {
  if (document.querySelector(".grid--product-images--partial")) {
    clearInterval(startFunk);

    // cdn slider
    let scriptCustomSlider = document.createElement("script");
    scriptCustomSlider.src = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js";
    scriptCustomSlider.async = false;
    document.head.appendChild(scriptCustomSlider);

    let scriptCustomSliderStyle = document.createElement("link");
    scriptCustomSliderStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css";
    scriptCustomSliderStyle.rel = "stylesheet";
    document.head.appendChild(scriptCustomSliderStyle);

    let arrProductBestSellers = {
      "Emerald Inlay Band, Emerald Inlay Ring, Inlay Wedding Band, Gemstone Inlay Ring For Her": ["/products/emerald-inlay-band-emerald-inlay-ring-78757?_pos=1&amp;_sid=9abcb8477&amp;_ss=r&amp;variant=40681228664875", "from $610.00 USD", `//capucinne.com/cdn/shop/products/Emerald-Inlay-Band-Emerald-Inlay-Ring-Inlay-Wedding-Band-Gemstone-Inlay-Ring-For-Her_e46d75f1-b0bf-463b-8437-7b05350c39f5_720x.jpg?v=1687190101 720w" sizes="291px" srcset="//capucinne.com/cdn/shop/products/Emerald-Inlay-Band-Emerald-Inlay-Ring-Inlay-Wedding-Band-Gemstone-Inlay-Ring-For-Her_e46d75f1-b0bf-463b-8437-7b05350c39f5_720x.jpg?v=1687190101 720w`],
      "Taylor Moss Agate Baguette And Diamond Ring": ["/products/moss-agate-diamond-engagement-ring-14k-42404?_pos=1&amp;_sid=3a3d9264d&amp;_ss=r", "from $320.00 USD", `//capucinne.com/cdn/shop/products/Taylor-Moss-Agate-Baguette-and-Diamond-Ring_720x.jpg?v=1687191273 720w`],
      "Isla Pear Moss Agate Engagement Ring": ["/products/pear-moss-agate-engagement-ring-pear-76468?_pos=1&amp;_sid=0ba9405e9&amp;_ss=r", "from $1,610.00 USD", `//capucinne.com/cdn/shop/products/Isla-Pear-Moss-Agate-Engagement-Ring_720x.jpg?v=1687191217 720w`],
      "Dawn Moss Agate Ring With Accent Diamonds": [`/products/mossy-agate-ring-moss-agate-engagement-11714?_pos=1&amp;_sid=bdebb5c3c&amp;_ss=r`, "from $1,250.00 USD", "//capucinne.com/cdn/shop/products/Dawn-Moss-Agate-Ring-with-Accent-Diamonds_720x.jpg?v=1687188664 720w"],
      "Eleanor Pear Moss Agate and Diamond Ring": ["/products/pear-moss-agate-engagement-ring-cluster-62106?_pos=1&amp;_sid=afec84196&amp;_ss=r&amp;variant=40374146990123", "from $2,340.00 USD", `//capucinne.com/cdn/shop/products/Eleanor-Pear-Moss-Agate-and-Diamond-Ring_720x.jpg?v=1687190666 720w`],
      "Thin Chevron V-Shaped Nesting Band": ["/products/thin-gold-chevron-ring-v-shaped-wedding-82518?_pos=1&amp;_sid=c1dfdf108&amp;_ss=r", "from $490.00 USD", "//capucinne.com/cdn/shop/products/Thin-Chevron-V-Shaped-Nesting-Band_720x.jpg?v=1687191119 720w"],
      "Aiden Baguette Moss Agate Wedding Band": ["/products/baguette-moss-mens-band-moss-agate-band-36493?_pos=1&amp;_sid=c210ba82c&amp;_ss=r&amp;variant=40432226893867", "from $1,060.00 USD", "//capucinne.com/cdn/shop/products/Aiden-Baguette-Moss-Agate-Wedding-Band_720x.jpg?v=1687192092 720w"],
      "Taylor Moss Agate Baguette And Diamond Ring": ["/products/moss-agate-diamond-engagement-ring-14k-42404?_pos=1&amp;_sid=3a3d9264d&amp;_ss=r", "from $320.00 USD", `//capucinne.com/cdn/shop/products/Taylor-Moss-Agate-Baguette-and-Diamond-Ring_720x.jpg?v=1687191273 720w`],
      "Beatrice Moss Agate And Diamond Cluster Ring": ["/products/moss-agate-cluster-ring-cluster-moss-38374?_pos=1&amp;_sid=1def4e6cf&amp;_ss=r", "from $1,660.00 USD", `//capucinne.com/cdn/shop/products/Beatrice-Moss-Agate-and-Diamond-Cluster-Ring_720x.jpg?v=1687191794 720w`],
      "Lennox Kite-Cut Oregon Sunstone Engagement Ring": ["/products/kite-sunstone-ring-oregon-sunstone-ring-08461?_pos=1&amp;_sid=9d87f66f1&amp;_ss=r", "from $2,230.00 USD", `//capucinne.com/cdn/shop/products/Lennox-Kite-Cut-Oregon-Sunstone-Engagement-Ring_720x.jpg?v=1687188414 720w`],
    };

    let newStyle = /*html */ `
        <style>
            .product-single__meta,
            .product-block{
                position: relative;
            }
            .product-block{
                margin-bottom: 16px;
            }
            #shopify-block-cadd6db7-a422-4c1f-90e3-91f50c296730{
                position: absolute;
                right: 0;
                top: 0;
                z-index: 5;
            }
            .the4-toolkit-wishlist-action,
            .the4-toolkit-wishlist {
                margin: 0 !important;
            }
            .wishlist_txt,
            .product-block.product-block--sales-point,
            .product-block--sales-point + .shopify-block.shopify-app-block + .product-block,
            .extend-offer{
                display: none;
            }
            #shopify-block-cadd6db7-a422-4c1f-90e3-91f50c296730 + .product-block{
                margin-bottom: 17px !important;
            }
            #shopify-block-cadd6db7-a422-4c1f-90e3-91f50c296730 + .product-block > div{
                padding: 0 !important;
                display: flex;
                justify-content: flex-start;
            }
            #shopify-block-cadd6db7-a422-4c1f-90e3-91f50c296730 + .product-block > div a{
                max-height: 16px;
                height: 100%;
            }
            #shopify-block-cadd6db7-a422-4c1f-90e3-91f50c296730 + .product-block > div a > svg{
                width: 16px;
                height: 16px;
            }
            #shopify-block-cadd6db7-a422-4c1f-90e3-91f50c296730 + .product-block > div span{
                color: #565656;
                font-size: 12px;
                font-weight: 400;
                line-height: 18px;
                letter-spacing: -0.308px;
            }
            .product-block.product-block--header{
                margin: 0 0 20px !important;
            }
            h1.h2.product-single__title{
                color: #1C1D1D;
                font-size: 28px;
                font-weight: 400;
                line-height: 32px;
                margin: 0;
                text-transform: initial;
            }
            [data-product-blocks] > .product-block.product-block--price{
                width: 100%;
                margin: 0 0 12px !important;
            }
            [data-product-price]{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 0;
            }
            [data-product-price] .money{
                color: #000;
                font-size: 22px;
                font-weight: 600;
                line-height: 30px
            }
            .get_discount_block{
                display: flex;
                align-items: center;
                gap: 4px;
                cursor: pointer;
            }
            .get_discount_caption{
                color: #C1856F;
                font-size: 14px;
                font-weight: 500;
                line-height: 20px;
                text-decoration-line: underline;
            }
            .get_discount_icon{
                width: 24px;
                height: 24px;
            }
            .get_discount_arrow{
                width: 16px;
                height: 16px;
            }
            .get_discount_icon img,
            .get_discount_arrow img{
                display: block;
                width: 100%;
                height: 100%;
            }
            .size_guide{
                position: absolute;
                right: 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 4px;
                cursor: pointer;
            }
            .size_guide p{
                color: #000;
                font-size: 14px;
                font-weight: 500;
                line-height: 24px;
                margin: 0;
            }
            .one-whole .js .one-half,
            .new_rush_order .one-half,
            .new_rush_order .one-whole,
            .one-whole .js .one-whole{
                display: flex;
                flex-direction: row-reverse;
                justify-content: flex-end;
                gap: 12px;
                align-items: center;
            }
            .one-whole .js .one-half .variant__label,
            .one-whole .js .one-whole .variant__label,
            .new_rush_order .one-half .variant__label,
            .new_rush_order .one-whole .variant__label{
                margin: 0;
                color: #565656;
                font-size: 14px;
                font-weight: 500;
                line-height: 20px;
                letter-spacing: 0.8px;
            }
            .one-whole .js .one-half .switch-button .switch-button__label,
            .one-whole .js .one-whole .switch-button .switch-button__label,
            .new_rush_order .one-half .switch-button .switch-button__label,
            .new_rush_order .one-whole .switch-button .switch-button__label{
                margin: 0 !important;
            }
            .one-whole .js .one-half .switch-button,
            .one-whole .js .one-whole .switch-button,
            .new_rush_order .one-half .switch-button,
            .new_rush_order .one-whole .switch-button{
                max-height: 24px;
                height: 100%;
            }
            .one-whole .js .one-half .switch-button .switch-button__label,
            .one-whole .js .one-whole .switch-button .switch-button__label,
            .new_rush_order .one-half .switch-button .switch-button__label,
            .new_rush_order .one-whole .switch-button .switch-button__label{
                background-color: #E4E3E0;
            }
            form.product-single__form{
                padding: 24px 0 0px;
                border-top: 1px solid #E8E8E1;
            }
            button[name="add"]{
                background: #000;
                height: 56px;
            }
            button[name="add"]:hover{
                background: hwb(0deg 0% 100% / 70%) !important;
            }
            button[name="add"] span{
                color: #FFF;
                font-size: 16px;
                font-weight: 600;
                line-height: 24px;
            }
            .expert_advice{
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid #D4A298;
                height: 48px;
                cursor: pointer;
                gap: 8px;
            }
            .expert_advice p{
                color: #000;
                font-size: 14px;
                font-weight: 600;
                line-height: 24px;
                text-transform: uppercase;
                margin: 0;
            }
            .new_extend{
                margin-bottom: 24px;
            }
            .new_extend_head {
                width: max-content;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                gap: 6px;
                margin-bottom: 16px;
            }
            .new_extend_covered {
                height: 16px;
                width: 16px;
                margin-top: -3px;
                cursor: pointer;
            }
            .new_extend_body {
                margin-top: 1px;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                gap: 8px;
            }
            .new_extend_item {
                border: 1px solid #E8E8E1;
                background: #FFF;
                padding: 9px;
                text-align: center;
                cursor: pointer;
                transition: 0.35s;
            }
            .new_extend_item_caption{
                color: #565656;
                font-size: 12px;
                font-weight: 400;
                line-height: 16px;
            }
            .new_extend_item_price{
                color: #000;
                font-size: 14px;
                font-weight: 500;
                line-height: 20px;
            }
            .new_extend_item.active {
                border: 1px solid #000;
            }
            /**earn_gift_wrapp */
            .earn_gift {
                margin-bottom: 16px;
            }
            .earn_gift_wrapp{
                display: flex;
                position: relative;
                justify-content: flex-start;
                align-items: center;
                gap: 16px;
                background: #F6F5F5;
                padding: 8px 16px;
            }
            .earn_gift_img{
                position: relative;
                max-width: 60px;
                width: 100%;
            }
            .earn_gift_title{
                color: #000;
                font-size: 13px;
                font-weight: 400;
                line-height: 18px;
                margin: 0 0 4px;
            }
            .earn_gift.earn_gift_start .earn_gift_img svg{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 1;
            }
            .earn_gift_price{
                color: #000;
                font-size: 13px;
                font-weight: 600;
                line-height: 18px;
                text-transform: uppercase;
                margin: 0;
            }
            .earn_gift_icon{
                position: absolute;
                right: 16px;
                top: -20px;
                background: #FFF;
                border-radius: 50%;
                z-index: 1;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid #F6F5F5;
            }
            .earn_gift > h2{
                color: #000;
                font-size: 14px;
                font-weight: 400;
                line-height: 20px;
                margin-bottom: 8px;
                text-transform: initial;
            }
            .earn_gift > h2 b{
                font-weight: 600;
            }
            .earn_gift.earn_gift_start > h2{
                font-weight: 500;
            }
            .earn_gift.earn_gift_start > h2 b{
                font-weight: 500;
                color: #C1856F;
            }
            .earn_gift.earn_gift_moon > h2{
                font-weight: 500;
            }
            /**new_rush_order */
            .new_rush_order_title{
                color: #000;
                font-size: 14px;
                font-weight: 500;
                line-height: 20px;
                margin-bottom: 16px;
                text-transform: initial !important;
            }
            .new_benefits{
                display: flex;
                justify-content: center;
                background-color: #F6F5F5;
                padding: 16px;
                line-height: 1;
                text-transform: capitalize;
                color: #1C1D1D;
                margin-top: 16px;
            }
            .new_benefits_item{
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .new_benefits_item img {
                margin-right: 8px;
                flex-shrink: 0;
            }
            .new_benefits_item + .new_benefits_item {
                border-left: 1px solid #fff;
                margin-left: 16px;
                padding-left: 16px;
            }
            /*production_delivery */
            .production_delivery{
                margin: 24px 0;
            }
            .production_delivery > h3{
                color: #000;
                font-size: 14px;
                font-weight: 500;
                line-height: 20px;
                margin-bottom: 16px;
                text-transform: initial;
            }
            .production_time_available{
                display: flex;
                padding: 12px;
                background: #F6F5F5;
                align-items: center;
                justify-content: center;
                gap: 8px;
            }
            .production_time_available img{
                max-width: 24px;
                width: 100%;
                margin-top: -2px;
            }
            .production_time_available p{
                color: #1C1D1D;
                font-size: 13px;
                font-weight: 500;
                line-height: 18px;
                margin: 0;
            }
            .production_delivery > p{
                color: #1C1D1D;
                font-size: 13px;
                font-weight: 400;
                line-height: 18px;
                margin: 16px 0 16px;
            }
            .production_delivery .learn_more_btn{
                display: block;
                color: #000;
                font-size: 13px;
                font-weight: 400;
                line-height: 18px;
                text-decoration-line: underline;
                cursor: pointer;
                margin: 12px 0 0;
                max-width: max-content;
            }
            .delivery_timeline{
                position: relative;
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
            }
            .delivery_timeline:before {
                content: '';
                position: absolute;
                width: 100%;
                top: 14px;
                left: 0;
                right: 0;
                background-color: #E8E8E1;
                height: 1px;
            }
            .delivery_timeline_item{
                position: relative;
            }
            .delivery_timeline_item:first-child {
                text-align: left;
            }
            .delivery_timeline_item:nth-child(2) {
                text-align: center;
            }
            .delivery_timeline_item:last-child {
                text-align: right;
            }
            .delivery_timeline_item_icon{
                line-height: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 100px;
                background-color: #EEDAD6;
                width: 28px;
                height: 28px;
            }
            .delivery_timeline_item:nth-child(3) .delivery_timeline_item_icon {
                margin-left: auto;
                margin-right: auto;
            }
            .delivery_timeline_item:last-child .delivery_timeline_item_icon {
                margin-left: auto;
            }
            .delivery_timeline_item_date{
                color: #1C1D1D;
                font-size: 12px;
                font-weight: 600;
                line-height: 18px;
                margin-top: 8px;
            }
            .delivery_timeline_item_caption{
                color: #565656;
                font-size: 11px;
                line-height: 18px;
            }
            .delivery_timeline_item_info{
                position: relative;
                color: #000;
                font-size: 11px;
                font-weight: 500;
                line-height: 18px;
                border-radius: 100px;
                border: 1px solid #F6F5F5;
                background: #F6F5F5;
                padding: 2px 12px;
                z-index: 2;
                top: 2px;
            }
            #syte-similar-items-container .syte-slider-title{
                margin-bottom: 32px !important;
            }
            #syte-similar-items-container .syte-slider-arrow.syte-slider-arrow-left{
                right: 60px;
            }
            .syte-slider-layout-container .syte-offers-item-desc{
              color: #000;
              font-size: 16px !important;
              font-weight: 400;
              line-height: 24px !important;
              letter-spacing: -0.308px;
              text-transform: initial;
              margin: 12px auto 0;
              max-width: 236px !important;
            }
            .syte-slider-layout-container .syte-ad-promo-text.syte-offer-price{
              color: #1C1D1D;
              font-size: 14px;
              font-weight: 500;
              line-height: 20px;
            }
            #stamped-reviews-widget[data-widget-type=carousel] .stamped-carousel-title{
              font-family: 'Poppins';
              color: #000;
              font-size: 20px !important;
              font-weight: 400 !important;
              line-height: 28px !important;
              letter-spacing: 1px;
              text-transform: uppercase;
              margin: 0 0 20px;
            }
            #shopify-section-template--20824047354197__82449f7c-6c71-4b98-89f3-074fa0fedafc{
              margin: 64px 0 120px;
            }
            #shopify-section-template--20824047354197__82449f7c-6c71-4b98-89f3-074fa0fedafc .custom__item.one-whole.align--center{
              margin: 0;
            }
            #shopify-section-template--20824047354197__82449f7c-6c71-4b98-89f3-074fa0fedafc .btn{
              max-width: 324px;
              width: 100%;
              color: #FFF;
              font-size: 14px;
              font-weight: 600;
              line-height: 20px;
              text-transform: uppercase;
              height: 52px;
            }
            .stamped-carousel-subtitle-count{
              color: #565656;
              font-size: 14px;
              font-weight: 600;
              line-height: 20px;
            }
            #stamped-reviews-widget[data-widget-type=carousel] .stamped-carousel-subtitle{
              display: flex;
              gap: 16px;
            }
            #stamped-reviews-widget[data-widget-type=carousel] .stamped-carousel-subtitle span.stamped-carousel-subtitle-count:after{
              color: #565656;
              font-size: 14px;
              font-weight: 400;
              line-height: 20px;
            }
            #stamped-reviews-widget[data-widget-type=carousel] .stamped-carousel-scroll:before{
              margin-top: 10px !important;
              margin-bottom: 44px !important;
            }
            #stamped-reviews-widget[data-widget-type=carousel] .stamped-carousel-scroll .stamped-reviews-rating{
              font-size: unset !important;
            }
            #stamped-reviews-widget[data-widget-type=carousel] .stamped-reviews-date{
              color: #565656 !important;
              font-size: 12px !important;
              font-weight: 400;
              line-height: 18px;
              letter-spacing: -0.308px;
              padding: 0 !important;
            }
            #stamped-reviews-widget[data-widget-type=carousel] .stamped-carousel-scroll .stamped-reviews-title{
              color: #000;
              font-size: 16px !important;
              font-weight: 600 !important;
              line-height: 24px !important;
              margin: 5px 0 11px !important;
            }
            #stamped-reviews-widget[data-widget-type=carousel] .stamped-carousel-scroll .stamped-reviews-message-block{
              color: #565656 !important;
              font-size: 13px !important;
              font-style: italic !important;
              font-weight: 400 !important;
              line-height: 18px !important;
            }
            #stamped-reviews-widget[data-widget-type=carousel] .stamped-carousel-scroll .stamped-reviews-author{
              color: #1C1D1D;
              font-family: 'Open Sans';
              font-size: 13px !important;
              font-weight: 700 !important;
              line-height: 18px !important;
              margin-top: 12px !important;

            }
            #shopify-section-template--20824047354197__recently-viewed .hr--large,
            #stamped-reviews-widget[data-widget-type=carousel] .stamped-carousel-scroll .stamped-reviews-product-title{
              display: none;
            }
            #shopify-section-template--20824047354197__1669882201fc5f25f2{
              padding: 0 40px;
            }
            #stamped-reviews-widget[data-widget-type=carousel]{
                  max-width: unset !important;
                  width: 100%;
            }
            /**beautifully_packaged_box */
            .beautifully_packaged_box{
              padding: 0 40px;
              display: flex;
              align-items: stretch;
              justify-content: space-between;
              margin-bottom: 80px;
            }
            .beautifully_packaged_box > div{
              width: 50%;
            }
            .beautifully_packaged_img img{
              width: 100%;
              height: 100%;
            }
            .beautifully_packaged_descr{
              background: #D4A298;
              padding: 20px;
            }
            .beautifully_packaged_container{
              border: 1px solid #FFF;
              padding: 66px 5px;
              text-align: center;
              height: 100%;
            }
            .beautifully_packaged_container h2{
              color: #FFF;
              font-size: 24px;
              font-weight: 400;
              line-height: 32px;
              letter-spacing: 2px;
              text-transform: uppercase;
              margin: 2px 0 24px;
            }
            .beautifully_packaged_container h3{
              color: #FFF;
              font-size: 14px;
              font-weight: 400;
              line-height: 20px;
              letter-spacing: 2px;
              text-transform: uppercase;
              margin: 0;
            }
            .beautifully_packaged_container p{
              color: #FFF;
              font-size: 14px;
              font-weight: 500;
              line-height: 24px;
              margin: 0 auto;
              max-width: 417px;
            }
            .beautifully_packaged_container p + p{
              margin-top: 20px;
            }
            /*readyToShip */
            #readyToShip,
            #bestSellers{
              padding: 0 40px;
              margin-bottom: 80px;
            }
            #readyToShip .ready_to_ship_container > h2,
            #bestSellers .best_sellers_container > h2{
              color: #000;
              font-size: 18px;
              font-weight: 400;
              line-height: 26px;
              letter-spacing: 1px;
              text-transform: uppercase;
              margin: 0 0 32px;
            }
            #bestSellers .slick-slide{
              margin: 0 4px;
            }
            .slick-arrow{
              position: absolute;
              top: -61px;
              right: 0;
              z-index: 111;
              width: 30px;
              height: 30px;
              cursor: pointer;
            }
            .slick-arrow svg{
              width: 100%;
              height: 100%;
            }
            .prev_btn.slick-arrow{
              right: 60px;
            }
            .product_content a{
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 12px;
            }
            .product_image{
              width: 100%;
            }
            .product_image img{
                object-fit: cover;
                height: auto;
                aspect-ratio: 1/1.5;
                max-height: 402px;
            }
            .product_title{
              color: #000;
              text-align: center;
              font-size: 16px;
              font-weight: 400;
              line-height: 24px;
              letter-spacing: -0.308px;
              margin: 0 auto 8px;
              max-width: 246px;
              text-transform: initial !important;
            }
            .product_price{
              color: #1C1D1D;
              text-align: center;
              font-size: 14px;
              font-weight: 500;
              line-height: 20px;
              margin: 0;
            }
            .ready_to_ship_list{
              display: none;
            }
            @media (max-width: 1180px) {
              .beautifully_packaged_container{
                    padding: 20px 5px;
              }
            }
        </style>
    `;

    let getDiscount = /*html */ `
    <div class='get_discount_block'>
      <div class='get_discount_icon'>
        <img src='https://conversionratestore.github.io/projects/capucinne/img/money.svg' />
      </div>
      <div class='get_discount_caption'>Get your <span>$230</span> Off</div>
      <div class='get_discount_arrow'>
        <img src='https://conversionratestore.github.io/projects/capucinne/img/arrow_right.svg' />
      </div>
    </div>
  `;

    let appliedDiscount = /*html */ `
    <div class='get_discount_block get_discount_block_applied'>
      <div class='get_discount_icon'>
        <img src='' />
      </div>
      <div class='get_discount_caption'>You save 10%</div>
    </div>
  `;

    let sizeGuide = /*html */ `
      <div class="size_guide">
         <img src='https://conversionratestore.github.io/projects/capucinne/img/ruller.svg' />
        <p>Size Guide</p>
      </div>
    `;

    let expertAdvice = /*html */ `
      <div class="expert_advice">
         <img src='https://conversionratestore.github.io/projects/capucinne/img/eye.svg' />
        <p>Get live expert advice</p>
      </div>
    `;

    let productionDelivery = /*html */ `
    <div class="production_delivery"></div>
    `;

    let newRushOrder = /*html */ `
    <div class="new_rush_order">
        <h3 class="new_rush_order_title">Need it faster ?</h3>
        <div class="new_benefits">
        <div class="new_benefits_item">
            <img src="https://flopsi69.github.io/crs/capucinne/pdp_slidein/img/delivery.svg">
            Free insured shipping
        </div>

        <div class="new_benefits_item">
            <img src="https://flopsi69.github.io/crs/capucinne/pdp_slidein/img/shield.svg">
            14 days Free Returns &amp;&nbsp;Exchange 
        </div>
        </div>
    </div>
      `;

    let earnStart = /*html */ `
  <div class='earn_gift earn_gift_start'>
    <h2>Spend <b>$1500</b> or more and get complimentary gift </h2>
    <div class="earn_gift_wrapp">
        <div class='earn_gift_img'>
            <img class='earn_gift_start' src='https://conversionratestore.github.io/projects/capucinne/earn.jpg'  />
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 9.66667V7C18 3.66667 15.3333 1 12 1C8.66667 1 6 3.66667 6 7V9.66667C4.86667 9.66667 4 10.5333 4 11.6667V20.3333C4 21.4 4.86667 22.3333 6 22.3333H18C19.1333 22.3333 20 21.4 20 20.3333V11.6667C20 10.5333 19.1333 9.66667 18 9.66667ZM7.33333 7C7.33333 4.4 9.4 2.33333 12 2.33333C14.6 2.33333 16.6667 4.4 16.6667 7V9.66667H7.33333V7ZM12.6667 16.8667V18.3333C12.6667 18.7333 12.4 19 12 19C11.6 19 11.3333 18.7333 11.3333 18.3333V16.8667C10.5333 16.6 10 15.8667 10 15C10 13.8667 10.8667 13 12 13C13.1333 13 14 13.8667 14 15C14 15.8667 13.4667 16.6 12.6667 16.8667Z" fill="#565656"/>
            </svg>
        </div>
        <div class='earn_gift_caption earn_gift_start'>
            <p class="earn_gift_title">Half moon Capucinne earrings</p>
            <span  class="earn_gift_price">$0.00</span>
        </div>
        <div class='earn_gift_icon'>
            <img class='earn_gift_icon_abs' src='https://conversionratestore.github.io/projects/capucinne/img/gift.svg'  />
        </div>
    </div>
  </div>
  `;

    let earnGift1 = /*html */ `
  <div class='earn_gift earn_gift_chain'>
    <h2><b>You’ll receive a gift</b> with your order</h2>
    <div class="earn_gift_wrapp">
        <div class='earn_gift_img'>
            <img class='earn_gift_chain' src='https://conversionratestore.github.io/projects/capucinne/earn.jpg'  />
        </div>
        <div class='earn_gift_caption earn_gift_chain'>
            <p class="earn_gift_title">Half moon Capucinne earrings</p>
            <span  class="earn_gift_price">$0.00</span>
        </div>
        <div class='earn_gift_icon'>
            <img class='earn_gift_icon_abs' src='https://conversionratestore.github.io/projects/capucinne/img/gift.svg'  />
        </div>
    </div>
  </div>
  `;

    let earnGift2 = /*html */ `
  <div class='earn_gift earn_gift_moon'>
    <h2>You’ll receive a gift with your order</h2>
    <div class="earn_gift_wrapp">
        <div class='earn_gift_img'>
            <img class='earn_gift_moon' src='https://conversionratestore.github.io/projects/capucinne/chain.jpg'  />
        </div>
        <div class='earn_gift_caption earn_gift_moon'>
            <p class="earn_gift_title">Half Moon Capucinne bracelet</p>
            <span  class="earn_gift_price">$0.00</span>
        </div>
        <div class='earn_gift_icon'>
            <img class='earn_gift_icon_abs' src='https://conversionratestore.github.io/projects/capucinne/img/gift.svg'  />
        </div>
    </div>
  </div>
  `;

    let beautifullyPackaged = /*html */ `
    <div class="beautifully_packaged_box">
      <div class="beautifully_packaged_img">
        <img src="https://conversionratestore.github.io/projects/capucinne/img/is_packaged_beautifully.png" alt="is packaged beautifully" />
      </div>
      <div class="beautifully_packaged_descr">
        <div class="beautifully_packaged_container">
          <h3>YOUR CAPUCINNE JEWELRY</h3>
          <h2>BEAUTIFULLY PACKAGED</h2>
          <p>Every Capucinne piece is packaged beautifully. Your ring, or fine jewelry, will arrive in a luxurious white and gold box, embossed with our signature logo.</p>
          <p>Resting inside the outer box is a smaller box that fits perfectly in to your pocket, for the most important moments of your life.</p>
        </div>
      </div>
    </div>
    `;

    let readyToShip = /*html */ `
    <section id="readyToShip">
      <div class="ready_to_ship_container">
        <h2>READY <b>TO SHIP</b></h2>
        <div class='pages'></div>
        <div class="ready_to_ship_list"></div>
      </div>
    </section>
    `;

    let bestSellers = /*html */ `
    <section id="bestSellers">
      <div class="best_sellers_container">
        <h2>Best <b>Sellers</b></h2>
        <div>
          <div class="best_sellers_list"></div>
        </div>
      </div>
    </section>
    `;

    document.head.insertAdjacentHTML("beforeend", newStyle);

    renderNewBlocks();
    onDiffClick();

    function renderNewBlocks() {
      // replace reviews
      if (document.querySelector(".product-block--header") && document.querySelector('[href="#reviews"]') && !document.querySelector('[href="#reviews"]').closest(".product-block + .product-block--header")) {
        document.querySelector(".product-block--header").before(document.querySelector('[href="#reviews"]').closest(".product-block"));
      }
      // replace wishlist
      if (!document.querySelector(".wishlist_txt")) {
        document.querySelector("#shopify-block-cadd6db7-a422-4c1f-90e3-91f50c296730 a").innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" class="the4-wishlist-icon-added" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg> 
          <svg xmlns="http://www.w3.org/2000/svg" class="the4-wishlist-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          <span class="wishlist_txt">Login to add to wishlist</span>`;
      }
      if (document.querySelector('[href="#reviews"]') && !document.querySelector(".product-single__meta + .product-block")) {
        document.querySelector('[href="#reviews"]').closest(".product-block").before(document.querySelector("#shopify-block-cadd6db7-a422-4c1f-90e3-91f50c296730"));
      }
      //  add get Discount
      if (document.querySelector("[data-product-price]") && !document.querySelector(".get_discount_block")) {
        document.querySelector("[data-product-price]").insertAdjacentHTML("beforeend", getDiscount);
      }

      // add size Guide
      document.querySelectorAll(".variant__label").forEach((el) => {
        if (el.textContent.includes("Ring size")) {
          if (document.querySelector(".variant-wrapper") && !document.querySelector(".size_guide")) {
            document.querySelectorAll(".variant-wrapper")[0].insertAdjacentHTML("beforebegin", sizeGuide);
          }
        }
      });
      // add new Extend
      handleExtend();
      // add You’ll receive a gift with your order
      if (document.querySelector(".new_extend")) {
        handleEarn();
      }
      // add expert Advice
      if (document.querySelector("form.product-single__form") && !document.querySelector(".expert_advice")) {
        document.querySelector("form.product-single__form").closest(".product-block").insertAdjacentHTML("afterend", expertAdvice);
      }
      // add production & delivery
      if (document.querySelector(".expert_advice") && !document.querySelector(".production_delivery")) {
        document.querySelector(".expert_advice").insertAdjacentHTML("afterend", productionDelivery);
      }
      if (document.querySelector(".production_delivery")) {
        handleShipping();
      }
      // Add "Rush Order" to your purchase
      if (document.querySelector(".production_delivery") && !document.querySelector(".new_rush_order")) {
        document.querySelector(".production_delivery").insertAdjacentHTML("afterend", newRushOrder);
      }
      document.querySelectorAll(".one-whole .js > div > div").forEach((el) => {
        if (el.classList.contains("one-half") && el.querySelector(".variant__label").textContent.includes("Rush order")) {
          if (!document.querySelector(".new_rush_order .one-half") && document.querySelector(".new_rush_order_title")) {
            document.querySelector(".new_rush_order_title").after(el);
          }
        }
        if (el.classList.contains("one-whole")) {
          if (!document.querySelector(".new_rush_order .one-whole") && document.querySelector(".new_rush_order_title")) {
            document.querySelector(".new_rush_order_title").after(el);
          }
        }
      });
      //   if (document.querySelector(".new_rush_order .one-whole")) {
      //     document.querySelector(".new_rush_order .one-whole label").innerHTML = `Add <b>"Rush Order"</b> to your purchase <span class="tooltip-toggle-rush" aria-label="Shorter production time" tabindex="0">
      //          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      //          <circle cx="7.87793" cy="7.70068" r="6.5" fill="white" stroke="#D4A298"></circle>
      //          <path d="M7.88724 5.70868C7.72191 5.70868 7.58324 5.65268 7.47124 5.54068C7.35924 5.42868 7.30324 5.29002 7.30324 5.12468C7.30324 4.95935 7.35924 4.82068 7.47124 4.70868C7.58324 4.59668 7.72191 4.54068 7.88724 4.54068C8.04724 4.54068 8.18324 4.59668 8.29524 4.70868C8.40724 4.82068 8.46324 4.95935 8.46324 5.12468C8.46324 5.29002 8.40724 5.42868 8.29524 5.54068C8.18324 5.65268 8.04724 5.70868 7.88724 5.70868ZM8.33524 6.29268V10.7007H7.42324V6.29268H8.33524Z" fill="#D4A298"></path>
      //          </svg>
      //        </span>`;
      //   }
      //   if (document.querySelector(".new_rush_order .one-half")) {
      //     document.querySelector(".new_rush_order .one-half label").innerHTML = `Add <b>"Rush Order"</b> to your purchase <span class="tooltip-toggle-rush" aria-label="Shorter production time" tabindex="0">
      //          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      //          <circle cx="7.87793" cy="7.70068" r="6.5" fill="white" stroke="#D4A298"></circle>
      //          <path d="M7.88724 5.70868C7.72191 5.70868 7.58324 5.65268 7.47124 5.54068C7.35924 5.42868 7.30324 5.29002 7.30324 5.12468C7.30324 4.95935 7.35924 4.82068 7.47124 4.70868C7.58324 4.59668 7.72191 4.54068 7.88724 4.54068C8.04724 4.54068 8.18324 4.59668 8.29524 4.70868C8.40724 4.82068 8.46324 4.95935 8.46324 5.12468C8.46324 5.29002 8.40724 5.42868 8.29524 5.54068C8.18324 5.65268 8.04724 5.70868 7.88724 5.70868ZM8.33524 6.29268V10.7007H7.42324V6.29268H8.33524Z" fill="#D4A298"></path>
      //          </svg>
      //        </span>`;
      //   }
      // Similar Items
      let similarItems = setInterval(() => {
        if (!document.querySelector("#syte-similar-items-container .syte-slider-title b") && document.querySelector("#syte-similar-items-container .syte-slider-title")) {
          clearInterval(similarItems);
          document.querySelector("#syte-similar-items-container .syte-slider-title").innerHTML = "";
          document.querySelector("#syte-similar-items-container .syte-slider-title").innerHTML = `Similar <b>Items</b>`;
        }
      }, 100);
      // Real Reviews from Real Customers
      if (!document.querySelector("#stamped-reviews-widget[data-widget-type=carousel] .stamped-carousel-title b") && document.querySelector("#stamped-reviews-widget[data-widget-type=carousel] .stamped-carousel-title")) {
        document.querySelector("#stamped-reviews-widget[data-widget-type=carousel] .stamped-carousel-title").innerHTML = `Real Reviews from Real <b>Customers</b>`;
      }
      if (document.querySelector("#shopify-section-template--20824047354197__82449f7c-6c71-4b98-89f3-074fa0fedafc") && document.querySelector("#shopify-section-template--20824047354197__1669882201fc5f25f2") && !document.querySelector("#shopify-section-template--20824047354197__1669882201fc5f25f2 + #shopify-section-template--20824047354197__82449f7c-6c71-4b98-89f3-074fa0fedafc")) {
        document.querySelector("#shopify-section-template--20824047354197__1669882201fc5f25f2").after(document.querySelector("#shopify-section-template--20824047354197__82449f7c-6c71-4b98-89f3-074fa0fedafc"));
      }
      //Recently viewed
      if (!document.querySelector("#shopify-section-template--20824047354197__recently-viewed .section-header__title b") && document.querySelector("#shopify-section-template--20824047354197__recently-viewed .section-header__title")) {
        document.querySelector("#shopify-section-template--20824047354197__recently-viewed .section-header__title").innerHTML = `Recently <b>viewed</b>`;
      }
      //BEAUTIFULLY PACKAGED
      if (!document.querySelector(".beautifully_packaged_box") && document.querySelector("#shopify-section-template--20824047354197__1669896642c8c32264")) {
        document.querySelector("#shopify-section-template--20824047354197__1669896642c8c32264").insertAdjacentHTML("afterend", beautifullyPackaged);
      }
      // READY TO SHIP
      if (document.querySelector(".beautifully_packaged_box") && !document.querySelector("#readyToShip")) {
        document.querySelector(".beautifully_packaged_box").insertAdjacentHTML("afterend", readyToShip);
      }

      //Best Sellers
      if (document.querySelector("#readyToShip") && !document.querySelector("#bestSellers")) {
        document.querySelector("#readyToShip").insertAdjacentHTML("afterend", bestSellers);
      }
      if (document.querySelector("#bestSellers")) {
        renderBestSellers();
      }

      slickSliderVar();
    }

    function handleExtend() {
      if (!document.querySelector(".extend-offer iframe")?.contentWindow?.document?.querySelector(".btn-offer .term-length")?.textContent.trim() || document.querySelector(".new_extend")) return false;

      const innerEl = document.querySelector(".extend-offer iframe").contentWindow.document;

      const extend = `
      <div class='new_extend watch_var'>
        <div class='new_extend_head'>
          <div class='new_extend_caption'>
            Add accident protection offered by
            <img src='https://flopsi69.github.io/crs/capucinne/pdp_slidein/img/extend.svg' />
          </div>
          <div class='new_extend_covered'>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="7.87793" cy="7.70068" r="6.5" fill="white" stroke="#D4A298"></circle>
          <path d="M7.88724 5.70868C7.72191 5.70868 7.58324 5.65268 7.47124 5.54068C7.35924 5.42868 7.30324 5.29002 7.30324 5.12468C7.30324 4.95935 7.35924 4.82068 7.47124 4.70868C7.58324 4.59668 7.72191 4.54068 7.88724 4.54068C8.04724 4.54068 8.18324 4.59668 8.29524 4.70868C8.40724 4.82068 8.46324 4.95935 8.46324 5.12468C8.46324 5.29002 8.40724 5.42868 8.29524 5.54068C8.18324 5.65268 8.04724 5.70868 7.88724 5.70868ZM8.33524 6.29268V10.7007H7.42324V6.29268H8.33524Z" fill="#D4A298"></path>
          </svg>
          </div>
        </div>
        <div class='new_extend_body'></div>
      </div>
    `;

      document.querySelector(".extend-offer").insertAdjacentHTML("beforebegin", extend);

      for (let item of innerEl.querySelectorAll(".btn-offer")) {
        const el = document.createElement("div");
        el.classList.add("new_extend_item");

        el.innerHTML = `
        <div class='new_extend_item_caption'>${item.querySelector(".term-length").textContent}</div>
        <div class='new_extend_item_price'>${item.querySelector(".plan-price").textContent}</div>
      `;

        document.querySelector(".new_extend_body").insertAdjacentElement("beforeend", el);

        el.addEventListener("click", () => {
          item.click();

          //   pushDataLayer("new_payments_extend_term", `Term of protection: ${item.querySelector(".term-length").textContent}`, "Button", "Product Information");

          if (el.classList.contains("active")) {
            el.classList.remove("active");
          } else {
            document.querySelector(".new_extend_item.active")?.classList.remove("active");
            el.classList.add("active");
          }
        });
      }

      document.querySelector(".new_extend_covered").addEventListener("click", () => {
        innerEl.querySelector(".info-link").click();
      });
    }

    function handleEarn() {
      if (!window.location.pathname.includes("/products/")) return false;
      if (!document.querySelector(".earn_gift")) {
        document.querySelector(".new_extend").insertAdjacentHTML("afterend", earnStart);
      }
      const price = +document.querySelector(".product__price:not(.product__price--compare) .money").getAttribute("doubly-currency-usd") / 100;
      let subtotal = price;
      if (subtotal >= 5000 && !document.querySelector(".earn_gift_moon")) {
        document.querySelector(".earn_gift")?.remove();
        document.querySelector(".new_extend")?.insertAdjacentHTML("afterend", earnGift2);
      } else if (subtotal < 5000 && subtotal >= 1500 && !document.querySelector(".earn_gift_chain")) {
        document.querySelector(".earn_gift")?.remove();
        document.querySelector(".new_extend")?.insertAdjacentHTML("afterend", earnGift1);
      } else if (subtotal < 1500 && !document.querySelector(".earn_gift_start")) {
        document.querySelector(".earn_gift")?.remove();
        document.querySelector(".new_extend")?.insertAdjacentHTML("afterend", earnStart);
      }
    }

    function handleShipping() {
      const options = { day: "2-digit", month: "short" };
      const date = new Date();
      const currentDate = date.toLocaleString("en-US", options);
      const dateAfter8Weeks = new Date(date.getTime() + 8 * 7 * 24 * 60 * 60 * 1000).toLocaleString("en-US", options);
      const dateAfter9Weeks = new Date(date.getTime() + 9 * 7 * 24 * 60 * 60 * 1000).toLocaleString("en-US", options);

      const deliveryFrom = new Date(date.getTime() + (8 * 7 + 5) * 24 * 60 * 60 * 1000).toLocaleString("en-US", options);
      const deliferyAfter = new Date(date.getTime() + (9 * 7 + 5) * 24 * 60 * 60 * 1000).toLocaleString("en-US", options);

      document.querySelector(".production_delivery").innerHTML = `
        <h3>Production & Delivery </h3>
        <div class="production_time_available">
            <img src='https://conversionratestore.github.io/projects/capucinne/img/time.svg' />
            <p>Shorter production time available </p>
        </div>
        <p>All items are made to order</p>
        <div class='delivery_timeline'>
          <div class='delivery_timeline_item'>
            <div class='delivery_timeline_item_icon'>
              <img src='https://conversionratestore.github.io/projects/capucinne/img/ok.svg' />
            </div>
            <div class='delivery_timeline_item_date'>${currentDate}</div>
            <div class='delivery_timeline_item_caption'>Order placed</div>
          </div>
          <div class='delivery_timeline_item'>
            <div class='delivery_timeline_item_info'>Production</div>
          </div>

          <div class='delivery_timeline_item'>
            <div class='delivery_timeline_item_icon'>
              <img src='https://conversionratestore.github.io/projects/capucinne/img/fast_car.svg' />
            </div>
            <div class='delivery_timeline_item_date'>${dateAfter8Weeks}-${dateAfter9Weeks}</div>
            <div class='delivery_timeline_item_caption'>Order dispatches</div>
          </div>
          <div class='delivery_timeline_item'>
            <div class='delivery_timeline_item_info'>Delivery</div>
          </div>

          <div class='delivery_timeline_item'>
            <div class='delivery_timeline_item_icon'>
              <img src='https://conversionratestore.github.io/projects/capucinne/img/present_box.svg' />
            </div>
            <div class='delivery_timeline_item_date'>${deliveryFrom}-${deliferyAfter}</div>
            <div class='delivery_timeline_item_caption'>Delivered!</div>
          </div>
        </div>
        <a href="https://capucinne.com/pages/shipping-information" target="_blank" class="learn_more_btn">Learn more</a>
    `;
    }

    function onDiffClick() {
      let a = setInterval(() => {
        if (document.querySelector(".expert_advice")) {
          clearInterval(a);
          document.querySelector(".expert_advice").addEventListener("click", () => {
            document.querySelectorAll(".product-block--sales-point li.sales-point .icon-and-text")[1].click();
          });
        }
      }, 100);
    }

    function renderBestSellers() {
      let findBlockRecommend = setInterval(() => {
        if (document.querySelector("#bestSellers .best_sellers_list") && !document.querySelector("#bestSellers .best_sellers_list .product_content")) {
          clearInterval(findBlockRecommend);
          if (document.querySelector("#bestSellers .best_sellers_list").children.length !== arrProductBestSellers.length) {
            for (let key in arrProductBestSellers) {
              document.querySelector("#bestSellers .best_sellers_list")?.insertAdjacentHTML("beforeend", setProduct(key, arrProductBestSellers[key][0], arrProductBestSellers[key][1], arrProductBestSellers[key][2]));
            }
          }
        }
      }, 100);

      function setProduct(title, link, price, img) {
        return `<div class="product_content">
                  <a href="${link}" class="product_link" target="_blank">
                    <div class="product_image">
                      <img class="lazyautosizes lazyloaded" data-widths="[720]" data-aspectratio="1.066" data-sizes="auto" alt="${title}" loading="lazy" width="284" height="425" data-srcset="${img}" sizes="291px" srcset="${img}" />
                    </div>
                    <div class="product_meta">
                      <h3 class="product_title">${title}</h3>
                      <p class="product_price">from <span class="money">${price}</span></p>
                    </div>
                  </a>
              </div>`;
      }
    }

    function slickSliderVar() {
      let slickInterval = setInterval(() => {
        if (typeof jQuery("#bestSellers .best_sellers_list").slick === "function" && document.querySelector("#bestSellers .best_sellers_list").children.length !== arrProductBestSellers.length) {
          clearInterval(slickInterval);

          //  slider
          let slider = jQuery("#bestSellers .best_sellers_list")
            .not("#bestSellers .slick-initialized")
            .slick({
              slidesToShow: 5,
              slidesToScroll: 3,
              arrows: true,
              dots: false,
              infinite: true,
              prevArrow: `
             <div class="prev_btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M9.99994 12L5.99994 7.49999L9.99994 3" stroke="#1C1D1D" stroke-linecap="square" stroke-linejoin="round"/>
</svg></div>`,
              nextArrow: `
              <div class="next_btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M5.99994 12L9.99994 7.49999L5.99994 3" stroke="#1C1D1D" stroke-linecap="square" stroke-linejoin="round"/>
</svg></div>`,
            });
          slider.on("swipe", function () {});
        }
      }, 100);

      let slickReadyToShip = setInterval(() => {
        if (typeof jQuery("#readyToShip .ready_to_ship_list").slick === "function" && document.querySelector(".ready_to_ship_list").children.length >= 179) {
          clearInterval(slickReadyToShip);

          //  slider
          let slider = jQuery("#readyToShip .ready_to_ship_list")
            .not("#readyToShip .slick-initialized")
            .slick({
              slidesToShow: 5,
              slidesToScroll: 3,
              arrows: true,
              dots: false,
              infinite: true,
              prevArrow: `
                   <div class="prev_btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M9.99994 12L5.99994 7.49999L9.99994 3" stroke="#1C1D1D" stroke-linecap="square" stroke-linejoin="round"/>
      </svg></div>`,
              nextArrow: `
                    <div class="next_btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M5.99994 12L9.99994 7.49999L5.99994 3" stroke="#1C1D1D" stroke-linecap="square" stroke-linejoin="round"/>
      </svg></div>`,
              responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2.7,
                    infinite: false,
                    arrows: false,
                  },
                },
              ],
            });
          slider.on("swipe", function () {});
          document.querySelector(".ready_to_ship_list").style.display = "block";
        }
      }, 100);
    }

    if (document.querySelector("#readyToShip")) {
      getArrReadyToShip();
    }

    function getArrReadyToShip() {
      fetchArr("https://capucinne.com/collections/ready-to-ship?_pos=1&_psq=ready-ti&_ss=e&_v=1.0");
      fetchArr("https://capucinne.com/collections/ready-to-ship?page=2");
      fetchArr("https://capucinne.com/collections/ready-to-ship?page=3");
      fetchArr("https://capucinne.com/collections/ready-to-ship?page=4");
      fetchArr("https://capucinne.com/collections/ready-to-ship?page=5");
      fetchArr("https://capucinne.com/collections/ready-to-ship?page=6");
      fetchArr("https://capucinne.com/collections/ready-to-ship?page=7");
      fetchArr("https://capucinne.com/collections/ready-to-ship?page=8");
      fetchArr("https://capucinne.com/collections/ready-to-ship?page=9");

      async function fetchArr(url) {
        let res = await fetch(url);
        res = await res.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(res, "text/html");
        document.querySelector("#readyToShip .ready_to_ship_container .pages").insertAdjacentElement("beforeend", doc.querySelector(".grid.grid--uniform"));
      }
      let w = setInterval(() => {
        if (document.querySelector(".ready_to_ship_container") && document.querySelector("#readyToShip .ready_to_ship_container .pages").children.length === 9) {
          clearInterval(w);
          document.querySelectorAll("#readyToShip .ready_to_ship_container .pages .grid.grid--uniform .grid__item").forEach((el) => {
            document.querySelector(".ready_to_ship_container .ready_to_ship_list").insertAdjacentElement("beforeend", el);
          });
        }
      }, 100);

      // console.log(doc.querySelector(".grid.grid--uniform").outerHTML);
    }
    // Observe
    let observer = new MutationObserver(() => {
      if (document) {
        observer.disconnect();
        // console.log(`observer`);
        renderNewBlocks();

        observer.observe(document, {
          childList: true,
          subtree: true,
        });
      }
    });

    observer.observe(document, {
      childList: true,
      subtree: true,
    });
  }
}, 100);
