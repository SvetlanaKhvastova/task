let startF = setInterval(() => {
  if (document.querySelector(".js-drawer-open-cart .cart-drawer")) {
    clearInterval(startF);

    let styleNew = /*html */ `
    <style>
        .js-drawer-open-cart .cart-drawer{
            max-width: 390px;
        }
        .cart-drawer__foot{
            background: #FFF;
            box-shadow: 0px -2px 12px 0px rgba(0, 0, 0, 0.15);
            padding: 12px 20px 0;
        }
        .cart-drawer__foot .cart__text{
            display: none;
        }
        .cart__widget__wrapper{
            border-radius: 5px;
            border: 1px solid #D9D9D9;
            background: #F7F7F7;
            margin: 0 0 15px;
        }
        .cart__widget__wrapper .cart__widget{
            margin: 0 !important;
            padding: 8px 12px 6px;
        }
        .cart__widget__wrapper  .cart__widget__title{
            margin: 0;
            padding: 0;
            color: #5B5B5B;
            font-family: 'Avenir Next';
            font-size: 14px;
            font-weight: 400;
            line-height: 157%;
        }
        #gift-notes{
            margin: 0;
        }
        .cart__widget__title .icon{
            right: 15px;
            height: 12px;
            width: 12px;
            stroke-width: 25px;
            top: 5px;
        }
        .cart__widget__title .icon path{
            stroke: #023F88;
        }
        .cart__checkout{
            font-weight: 700;
            font-size: 16px;
            line-height: 22px;
            letter-spacing: 0.8px;
        }
        /*subtotal_block */
        .subtotal_block{
            padding: 0 20px 35px;
        }
        .get_discount_inform_wrapp{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            margin-bottom: 16px;
            border-top: 1px solid #D9D9D9;
            padding-top: 12px;
        }
        .get_discount_inform_wrapp p{
            color: #1B1B1B;
            font-family: 'Avenir Next';
            font-size: 14px;
            font-weight: 400;
            line-height: 157%;
            margin: 0;
        }
        .get_discount_inform_wrapp p b{
            font-weight: 600;
        }
        .product_title_list{
            margin: 0;
            padding: 0;
            list-style: none;
        }
        .product_title_list li{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 0;
        }
        .product_title_list li + li{
            margin-top: 8px;
        }
        .product_title_list li p{
            color: #5B5B5B;
            font-family: 'Avenir Next';
            font-size: 14px;
            font-weight: 400;
            line-height: 157%;
            margin: 0;
        }
        .product_title_txt{
            max-width: 188px;
        }
        .subtotal_txt_wrapp{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 12px;
            margin: 12px 0 0;
            border-top: 1px solid #D9D9D9;
        }
        .subtotal_txt_wrapp p{
            color: #1C1D1D;
            font-family: 'Avenir Next';
            font-size: 16px;
            font-weight: 700;
            line-height: 150%;
            margin: 0;
        }
        /**have_question_block */
        .have_question_block{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            margin-bottom: 15px;
            display: none;
        }
        .have_question_block p{
            color: #1B1B1B;
            font-family: 'Avenir Next';
            font-size: 14px;
            font-weight: 600;
            line-height: 134%;
            text-transform: uppercase;
            margin: 0;
        }
        .have_question_block p:nth-child(2){
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
            color: #023F88;
            line-height: 157%;
            text-decoration-line: underline;
            cursor: pointer;
        }
        /*shipping_block */
        .shipping_block{
            border-top: 1px solid #FFF;
            background: #E8F8FE;
            margin: 12px -20px 0;
        }
        .shipping_list{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0;
            list-style: none;
            padding: 12px 16px;
            gap: 13px;
        }
        .shipping_list li{
            position: relative;
            width: 50%;
            margin: 0;
            padding-left: 32px;
        }
        .shipping_list li::before{
            position: absolute;
            content: "";
            width: 24px;
            height: 24px;
            background: url(https://conversionratestore.github.io/projects/geeni/img/shield.svg) no-repeat center center;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
            background-size: contain;
        }
        .shipping_list li:nth-child(2):before{
            background: url(https://conversionratestore.github.io/projects/geeni/img/return_box.svg) no-repeat center center;
            background-size: contain;
            left: 13px;
        }
        .shipping_list li:nth-child(2){
            border-left: 1px solid #FFF;
            padding-left: 45px;
        }
        .shipping_list li p{
            font-family: 'Avenir Next';
            color: #1B1B1B;
            font-size: 14px;
            font-weight: 500;
            line-height: 134%;
            margin: 0;
            max-width: 128px;
        }
 
    @media (max-width: 768px) {
        
    }
    </style>
    `;
    let subtotalBlock = /*html */ `
    <div class="subtotal_block">
      <div class="get_discount_inform_wrapp">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="14" fill="#E8F8FE" />
          <path d="M8.53864 7.75H13.3148C13.8598 7.75 14.3726 7.97387 14.7573 8.35765L20.399 13.9864C21.2003 14.786 21.2003 16.0972 20.399 16.8968L16.1357 21.1503C15.3343 21.9499 14.02 21.9499 13.2187 21.1503L7.57699 15.5216C7.19233 15.1378 7 14.6261 7 14.0824V9.28512C7 8.4536 7.67315 7.75 8.53864 7.75ZM10.5902 12.3554C11.1351 12.3554 11.6159 11.9076 11.6159 11.332C11.6159 10.7883 11.1351 10.3085 10.5902 10.3085C10.0132 10.3085 9.5644 10.7883 9.5644 11.332C9.5644 11.9076 10.0132 12.3554 10.5902 12.3554Z" fill="#023F88" />
        </svg>
        <p>Spend <b>$125</b> and get a <b>20% discount</b></p>
      </div>
      <div class="product_title_wrapp">
        <ul class="product_title_list">
          <li>
            <p class="product_title_txt">Geeni Hawk 3 1080p Camera</p>
            <p class="product_title_price">$59.99</p>
          </li>
          <li>
            <p class="product_title_txt">Geeni Hawk 3 1080p Camera</p>
            <p class="product_title_price">$59.99</p>
          </li>
        </ul>
      </div>
      <div class="subtotal_txt_wrapp">
        <p>Subtotal</p>
        <p class="subtotal_price">$49.99</p>
      </div>
    </div>
      `;

    let haveQuestionsBlock = /*html */ `
    <div class="have_question_block">
        <p>Have a questions?</p>
        <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14" fill="none">
                <path d="M8.52499 0C12.9347 0 16.5 2.9375 16.5 6.5C16.5 10.0938 12.9347 13 8.52499 13C7.30528 13 6.1794 12.7813 5.14734 12.4063C4.36547 13.0313 2.83302 14 0.768901 14C0.643803 14 0.549979 13.9688 0.518705 13.875C0.48743 13.7813 0.48743 13.6563 0.581254 13.5938C0.581254 13.5625 1.89478 12.1875 2.27008 10.5938C1.17547 9.46875 0.518705 8.0625 0.518705 6.5C0.518705 2.9375 4.084 0 8.52499 0Z" fill="#023F88"/>
            </svg>
            <span>Contact Us</span>
        </p>
    </div>
    `;

    let shippingBlock = /*html */ `
    <div class="shipping_block">
      <ul class="shipping_list">
        <li><p>365-day warranty on all products</p></li>
        <li><p>30-day easy returns & refund policy</p></li>
      </ul>
    </div>
    `;

    document.head.insertAdjacentHTML("beforeend", styleNew);

    renderHtml();
    function renderHtml() {
      //subtotal_block
      if (document.querySelector(".cart-drawer__items") && !document.querySelector(".subtotal_block")) {
        document.querySelector(".cart-drawer__items").insertAdjacentHTML("afterend", subtotalBlock);
      }
      if (document.querySelector(".subtotal_block")) {
      }
      // haveQuestionsBlock
      if (document.querySelector(".cart-drawer__foot") && !document.querySelector(".have_question_block")) {
        document.querySelector(".cart-drawer__foot").insertAdjacentHTML("afterbegin", haveQuestionsBlock);
      }
      // shippingBlock in the cart
      if (document.querySelector(".cart-drawer__foot") && !document.querySelector(".shipping_block")) {
        document.querySelector(".cart-drawer__foot").insertAdjacentHTML("beforeend", shippingBlock);
      }
    }
  }
}, 100);

let startCheckout = setInterval(() => {
  if (document.querySelector('[aria-label="Breadcrumb"]') && window.location.pathname.includes("checkouts")) {
    clearInterval(startCheckout);

    let styleNew = /*html */ `
    <style>
        /*breadcrumb  */
        [aria-label="Breadcrumb"]{
            margin-top: 50px;
        }
        .breadcrumb {
            display: flex;
            position: relative;
            justify-content: space-between;
            max-width: 500px;
            margin: 0 auto;
        }
        .breadcrumb::before{
            position: absolute;
            content:'';
            width: 97%;
            height: 1px;
            background: #D9D9D9;
            top: -17px;
        }
        .breadcrumb__item .breadcrumb__text,
        .breadcrumb__item--completed .breadcrumb__text,
        .breadcrumb__item--completed .breadcrumb__link{
            color: #888;
            font-family: 'Avenir Next';
            font-size: 14px;
            font-weight: 500;
            line-height: 157%;
        }
        .breadcrumb__item--current .breadcrumb__text{
            color: #023F88;
        }
        .main .icon-svg--color-adaptive-light{
            display: none;
        }
        .breadcrumb__item{
            position: relative;
        }
        .anyflexbox .breadcrumb__item::before{
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            content:'1';
            width: 24px;
            height: 24px;
            background: #F7F7F7;
            border-radius: 50%;
            border: 1px solid #D9D9D9;
            top: -30px;
            left: 50%;
            transform: translateX(-50%);
            color: #888;
            font-family: 'Avenir Next';
            font-size: 14px;
            font-weight: 500;
            line-height: 157%;
        }
        .anyflexbox .breadcrumb__item:nth-child(2):before{
            content:'2';
        }
        .anyflexbox .breadcrumb__item:nth-child(3):before{
            content:'3';
        }
        .anyflexbox .breadcrumb__item:nth-child(4):before{
            content:'4';
        }
        .anyflexbox .breadcrumb__item.breadcrumb__item--current::before{
            background: #023F88;
            border: 1px solid #023F88;
            color: #FFF;
        }
        .anyflexbox .breadcrumb__item.breadcrumb__item--completed::before{
            content: "\\2714";
            color: #023F88;
        }
        /*shipping_block */
        .shipping_block{
            border-top: 1px solid #FFF;
            background: #E8F8FE;
            margin: 12px -20px 0;
        }
        .shipping_list{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0;
            list-style: none;
            padding: 12px 16px;
            gap: 13px;
        }
        .shipping_list li{
            position: relative;
            width: 50%;
            margin: 0;
            padding-left: 32px;
        }
        .shipping_list li::before{
            position: absolute;
            content: "";
            width: 24px;
            height: 24px;
            background: url(https://conversionratestore.github.io/projects/geeni/img/shield.svg) no-repeat center center;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
            background-size: contain;
        }
        .shipping_list li:nth-child(2):before{
            background: url(https://conversionratestore.github.io/projects/geeni/img/return_box.svg) no-repeat center center;
            background-size: contain;
            left: 13px;
        }
        .shipping_list li:nth-child(2){
            border-left: 1px solid #FFF;
            padding-left: 45px;
        }
        .shipping_list li p{
            font-family: 'Avenir Next';
            color: #1B1B1B;
            font-size: 14px;
            font-weight: 500;
            line-height: 134%;
            margin: 0;
            max-width: 128px;
        }
        .shipping_block.checkout_var{
            margin: 0;
        }
        .shipping_block.checkout_var .shipping_list{
            position: relative;
            padding: 12px;
        }
        .shipping_list::after{
            position: absolute;
            content: "";
            width: 1px;
            height: 55%;
            background: #FFF;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        .shipping_block.checkout_var .shipping_list li{
            width: unset;
            border: none !important;
        }
        .shipping_block.checkout_var .shipping_list li p{
            max-width: unset;
        }
 
    @media (max-width: 1130px) {
        .shipping_block.checkout_var .shipping_list li p{
            font-size: 12px;
        }
    }
    @media (max-width: 768px) {
        [aria-label="Breadcrumb"] {
            margin-top: 30px;
        }
        .breadcrumb{
            max-width: 295px;
            padding: 0 0 10px;
        }
        .breadcrumb::before{
            width: 92%;
        }
        .shipping_block.checkout_var .shipping_list li p {
            font-size: 14px;
            max-width: 115px;
        }
        .shipping_block.checkout_var .shipping_list{
            padding: 12px 16px;
        }
        .paypal-button.paypal-button-shape-rect,
        .shopify-cleanslate .h7OYsWHrW5495r9beh2n,
        .shopify-cleanslate .KHqjJyKjVNT1lCGf2bnQ, .shopify-cleanslate .wOEViUrCyNb9maEe3QrQ{
            border-radius: 30px !important;
        }
        .dynamic-checkout__title{
            display: none;
        }
        .dynamic-checkout__content{
            border: none;
            padding: 0;
        }
        .anyflexbox .main{
            padding-top: 16px !important;
        }
        .alternative-payment-separator {
            padding-bottom: 18px;
            margin-top: 16px;
        }
        .alternative-payment-separator__content{
            color: #5B5B5B;
            font-family: 'Avenir Next';
            font-size: 14px;
            font-weight: 500;
            line-height: 22px;
        }
    }
    </style>
    `;

    let shippingBlock = /*html */ `
    <div class="shipping_block">
      <ul class="shipping_list">
        <li><p>365-day warranty on all products</p></li>
        <li><p>30-day easy returns & refund policy</p></li>
      </ul>
    </div>
    `;

    document.head.insertAdjacentHTML("beforeend", styleNew);

    renderHtml();
    function renderHtml() {
      // shippingBlock in the cart

      if (window.innerWidth <= 768) {
        if (document.querySelector(".order-summary-toggle") && !document.querySelector(".shipping_block")) {
          document.querySelector(".order-summary-toggle").insertAdjacentHTML("beforebegin", shippingBlock);
        }
      } else {
        if (document.querySelector('[aria-label="Breadcrumb"]') && !document.querySelector(".shipping_block")) {
          document.querySelector('[aria-label="Breadcrumb"]').insertAdjacentHTML("beforebegin", shippingBlock);
        }
      }
      if (document.querySelector(".shipping_block") && !document.querySelector(".shipping_block").classList.contains("checkout_var")) {
        document.querySelector(".shipping_block").classList.add("checkout_var");
      }
    }
  }
}, 100);
