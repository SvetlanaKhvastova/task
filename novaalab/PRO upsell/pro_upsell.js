let startFunk = setInterval(() => {
  if (document.querySelector(".site-header")) {
    clearInterval(startFunk);

    let style = /*html */ `
    <style>
      /* Chrome, Safari, Edge, Opera */
.slide_in_cart input[type=number]::-webkit-outer-spin-button,
.slide_in_cart input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
.slide_in_cart input[type=number] {
  -moz-appearance: textfield;
}
html.fixed_body, html.gemapp.video.fixed_body {
    width: 100%;
    overflow: hidden!important;
}
.slide_in_cart {
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    width: 100%;
    background: rgba(20, 20, 20, 0.60);
    z-index: 9999999999;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
    font-family: 'Urbanist', sans-serif;
}
.slide_in_cart.loading:after {
    content: 'loading...';
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 351px;
    background: rgba(255,255,255,0.8);
    height: 100vh;
    color: #000;
    z-index: 99;
}
.slide_in_cart.active {
    opacity: 1;
    pointer-events: auto;
}
.slide_in_cart.active > .container {
    transform: translateX(0);
}
.slide_in_cart_close {
    cursor: pointer;
}
.slide_in_cart_close:hover path {
    fill: #212121;
}
.slide_in_cart p, .slide_in_cart ul {
    margin: 0;
    list-style-type: none;
}
.slide_in_cart > .container {
  display: flex;
  flex-direction: column;
    width: 100%;
    max-width: 351px;
    background: #FFFFFF;
    height: 100vh;
    overflow-y: auto;
    margin: 0 0 0 auto;
    padding: 0;
    transition: all 0.3s ease;
    transform: translateX(300px);
}
/*header cart */
.slide_in_header {
  display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #E2E2E2;
    padding: 20px 16px;
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 2;
}
.slide_in_header p {
    position: relative;
    color:#212121;
font-size: 18px;
font-weight: 700;
line-height: 24px;
letter-spacing: 0.9px;
}
 .upsell_header p b{
  font-weight: 800;
 }
 /*body cart */
 .slide_in_body{
   max-height: 550px;
                overflow-y: auto;

 }
 .slide_in_body::-webkit-scrollbar {
     width: 4px;
 }
 .slide_in_body::-webkit-scrollbar-thumb {
     background: #788188;
 }
 .slide_in_body.my_height{
 }
 .slide_in_products{
                position: relative;
                padding: 20px 16px 20px;
                display: flex;
                flex-direction: column;
                transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
            }
            .product_wrap{
                display: flex;
                justify-content: flex-start;
                gap: 14px;
            }
            .product_wrap + .product_wrap{
                margin-top: 32px;
            }
            .img_wrap{
                flex: 1 1 46%;
                max-width: 120px;
                max-height: 120px;
                width: 100%;
                height: 100%;
                border: 1px solid #E2E2E2;
                overflow: hidden;
            }
            .img_wrap img{
                width: 100%;
                height: 100%;
             }
            .inform_wrap{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                flex: 1 1 54%;
            }
            .inform_wrap h2{
color: #212121;
font-family: 'Urbanist';
                font-size: 16px;
                font-weight: 700;
                line-height: 22px;
                letter-spacing: 0.8px;
                text-transform: capitalize;
                margin: 0;
                text-align: left;
            }
            .inform_wrap h2 a{
                color: #212121;
            }
            .price_wrap{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                margin: 6px 0 0;
            }
            .my_old_price{
                color: #6D6E75;
               font-family: 'Urbanist';
                font-size: 12px;
                font-weight: 500;
                line-height: 18px;
                letter-spacing: 0.6px;
                margin: 0 8px 0 4px;
                text-decoration: line-through;
            }
            .my_price{
color: #212121;
font-family: 'Urbanist';
font-size: 16px;
font-weight: 700;
line-height: 22px;
letter-spacing: 0.8px;
margin: 0;
            }
            .qty_wrap{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 10px;
            }
            .btn_remove_item,
            .decrement,
            .increment{
                cursor: pointer;
            }
            .cart_popup_qty{
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .count_var{
                display: flex;
                align-items: center;
                justify-content: center;
                color: #212121;
                font-family: 'Urbanist';
                font-size: 16px !important;
                font-weight: 700 !important;
                line-height: 22px;
                height: 36px;
                width: 36px;
                border-top: 1px solid #E2E2E2;
                border-bottom: 1px solid #E2E2E2;
                margin: 0;
                border-radius: unset;
                padding: 0;
                text-align: center;
                border-left: unset;
                border-right: unset;
                background: none;
            }
            .count_var:focus-visible{
              outline: none;
            }
            .count_var:focus{
                border-color: #E2E2E2;
            }
            .decrement,
            .increment{
                height: 36px;
                width: 36px;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid #E2E2E2;
            }
            .decrement{
                border-radius: 4px 0 0 4px;
            }
            .decrement[disabled]{
                cursor: unset;
            }
            .decrement[disabled] svg{
                stroke: #E2E2E2;
            }
            .increment{
                border-radius: 0 4px 4px 0;
            }
            .decrement svg       {
                display: block;
                stroke: #773BD9;
            }
/* footer cart */
.slide_in_footer {
    background: #fff;
    margin: auto 0 0;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
}
/*upsells_wrapp */
.upsell_header p{
  color: #773BD9;
font-size: 15px;
font-weight: 500;
line-height: 22px;
letter-spacing: 0.8px;
}
.upsell_card{
  background: #F5F5FD;
    padding: 14px 16px;
}
.upsell_header{
  margin-bottom: 14px;
}
.upsell_header .discount_box{
    border-radius: 4px 0px;
    background: #773BD9;
    color: #FFF;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0.7px;
    padding: 2px 6px;
    margin-right: 4px;
}
.upsell_body{
  display: flex;
    gap: 14px;
}
.upsell_body .img_wrap{
border-radius: 4px;
    border: 1px solid #E2E2E2;
    max-width: 120px;
    max-height: 120px;
    border-radius: 4px;
}
.upsell_title{
  font-family: 'Urbanist';
  color: #212121 !important;
font-size: 16px;
font-weight: 700;
line-height: 22px;
letter-spacing: 0.8px;
text-transform: capitalize;
margin: 0 0 2px;
}
.stars_wrap{
      display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 7px;
}
.rating_txt{
  color: #212121;
font-size: 14px;
font-weight: 700;
line-height: 20px;
letter-spacing: 0.7px;
margin-left: 8px;
}
.upsell_price_wrap{
      display: flex;
    align-items: center;
    gap: 4px;
}
.upsell_price_wrap .new_price{
  color: #212121;
font-size: 16px;
font-weight: 700;
line-height: 22px;
letter-spacing: 0.8px;
margin-right: 0;
}
.upsell_price_wrap span.accent_strikethrough{
margin-right: 0;
}
.discount_txt{
display: inline-flex;
    border-radius: 100px;
    background: #FFD9D6;
    height: 24px;
    max-width: 51px;
    min-width: 51px;
    width: 100%;
    color: #D84432;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0.7px;
    align-items: center;
    justify-content: center;
}
.upsell_card .btn_wrap{
  display: flex;
gap: 12px;
    align-items: center;
    justify-content: flex-start;
    margin-top: 5px;
}
.upsell_add_btn{
display: flex;
    border-radius: 4px;
    border: 1px solid #773BD9;
    background: #FFF;
    color: #773BD9;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    cursor: pointer;
    padding: 0;
    max-width: 74px;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 40px;
}
.upsell_learn_more_btn{
  color: #773BD9;
font-size: 16px;
font-weight: 700;
line-height: 24px;
text-decoration-line: underline;
cursor: pointer;
    min-width: max-content;
}
/*slide_in_btn_wrap */
.slide_in_btn_wrap{
padding: 16px;
    background: #FFF;
    box-shadow: 0px 0px 16px 0px rgba(107, 28, 235, 0.16);
}
.slide_in_to_checkout {
font-size: 18px;
    line-height: 24px;
    font-weight: 700;
    color: #FFF;
    border-radius: 4px;
    background: radial-gradient(2726% 90.92% at 2.15% 56%, #691BEA 0%, #9E41EF 100%);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 32px;
}
/*slide_in_total */
.slide_in_total{
    padding: 24px 16px;
}
.slide_in_shipping,
.slide_in_subtotal{
      display: flex;
    align-items: center;
    justify-content: space-between;
}
.slide_in_shipping{
      margin-bottom: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid #E2E2E2;
}
.slide_in_shipping p,
.slide_in_subtotal p{
  color: #212121;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.8px;
}
span.accent_strikethrough{
  color: #6D6E75;
font-size: 12px;
font-weight: 500;
line-height: 18px;
letter-spacing: 0.6px;
text-decoration: line-through;
margin-right: 4px;
}
p.accent_weight_bold,
span.accent_weight_bold{
  font-weight: 700;
}
/* slide_in_guarantee*/
.slide_in_guarantee{
    border-radius: 4px;
    background: var(--colors-purple-background, #F5F5FD);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 6px 8px;
    margin-top: 20px;
}
/* empty */
.slide_in__empty {
    border: 1px dashed #E2E2E2;
    border-radius: 6px;
    padding: 20px;
    font-family: 'Urbanist';
    font-style: normal;
    text-align: center;
    color: #474444;
    margin-bottom: 20px;
}
.slide_in__empty p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    padding: 0 10px;
}
.slide_in__empty p.name {
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
}
.slide_in__empty .btn-purple {
    font-size: 18px;
    line-height: 50px;
    margin-top: 16px;
}

    </style>
    `;

    let emptySlideInHTML = /*html */ `
<li class="slide_in__empty">
    <p class="name">Your cart is empty</p>
    <a href="/pages/red-light-therapy-home-catalog" class="btn-purple">Shop all products</a>
</li>`;

    let slideInCartHTML = /*html */ `
    <div class="slide_in_cart">
  <div class="container">
      <div class="slide_in_header">
        <p class="cart_length">Cart (<span>0</span>)</p>
        <svg class="slide_in_cart_close" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00022 6.54522L1.45508 0.00012207L0.000548353 1.45464L6.54569 7.99973L0 14.5454L1.45453 15.9999L8.00022 9.45425L14.5458 15.9998L16.0004 14.5453L9.45475 7.99973L15.9998 1.45471L14.5453 0.000194265L8.00022 6.54522Z" fill="#212121" />
        </svg>
      </div>
      <div class="slide_in_body">
        <ul class="slide_in_products"><p>slide_in_products</p></ul>
        <div class="upsells_wrapp"></div>
      </div>
      <div class="slide_in_footer">
        <div class="slide_in_total">
          <div class="slide_in_shipping">
            <p>SHIPPING</p>
            <p class="accent_weight_bold">FREE US Shipping</p>
          </div>
          <div class="slide_in_subtotal">
            <p>SUBTOTAL</p>
            <p><span class="accent_strikethrough sub_total_last_price">$600.00</span><span class="accent_weight_bold sub_total_original_price">$299.90</span></p>
          </div>
          <div class="slide_in_guarantee">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.3043 2.19907L14.0274 3.7467L5.19869 8.76429V12.4824C5.19869 12.631 5.2735 12.7585 5.40423 12.8328L7.45073 13.9959C7.51605 14.033 7.59087 14.033 7.65624 13.9959C7.72162 13.9587 7.75903 13.895 7.75903 13.8207V10.2194L16.5878 5.20181L19.311 6.74944C19.5723 6.89803 19.722 7.15316 19.722 7.45029V12.1011C18.9827 11.8556 18.2004 11.7232 17.4191 11.6763V11.3645C17.4191 11.0248 17.2221 10.7202 16.9094 10.5764C16.5968 10.4328 16.233 10.4796 15.9684 10.6975L12.8338 13.28C12.5737 13.4943 12.4317 13.8066 12.4425 14.1402C12.4534 14.4752 12.6143 14.7758 12.8888 14.9741L16.0129 17.2303C16.2827 17.4251 16.6364 17.4538 16.9349 17.3048C17.2337 17.1558 17.4191 16.8587 17.4191 16.529V16.1848C18.0693 16.2611 18.7129 16.4579 19.2415 16.8346C19.344 16.9076 19.4412 16.9872 19.5317 17.0727C19.4712 17.1425 19.3971 17.203 19.311 17.2519L11.3043 21.8023C11.0429 21.9509 10.7436 21.9509 10.4821 21.8023L2.47554 17.2519C2.21408 17.1034 2.06445 16.8482 2.06445 16.551V7.45034C2.06445 7.15316 2.21408 6.89803 2.47554 6.74949L10.4822 2.19907C10.7436 2.0505 11.0429 2.0505 11.3043 2.19907ZM16.7459 15.4837C21.1424 15.4837 22.3883 19.6172 18.7771 21.4751C18.7573 21.4852 18.7488 21.5086 18.7579 21.5286C18.7664 21.5473 18.7865 21.5572 18.8066 21.5522C24.8065 20.0995 24.3871 12.3191 16.7459 12.3191V11.3645C16.7459 11.2822 16.7003 11.2117 16.6245 11.1769C16.5488 11.1421 16.4647 11.1529 16.4005 11.2057L13.2659 13.7883C13.1634 13.8727 13.1111 13.9876 13.1154 14.1192C13.1196 14.2506 13.1793 14.362 13.287 14.4399L16.4111 16.696C16.4766 16.7434 16.5581 16.7499 16.6306 16.7138C16.7031 16.6776 16.7459 16.6091 16.7459 16.5291V15.4837Z"
                fill="#773BD9"
              />
            </svg>
            <span>60-day money back guarantee</span>
          </div>
        </div>
        <div class="slide_in_btn_wrap">
          <a href="/checkout" class="slide_in_to_checkout">Proceed to secure checkout</a>
        </div>
      </div>
  </div>
</div>
`;

    let upselsObj = {
      40365298679862: ["Novaa oral Care Pro", "https://novaalab.com/cdn/shop/products/IMG_1001-600pxquaqre_medium.jpg?v=1662108128", "$99.90", "$199.90", "https://conversionratestore.github.io/projects/novaalab/img/rating_stars.svg", "4.8", "50", "gum & teeth treatment", "https://novaalab.com/products/novaa-oral-care-gums-periodontal-treatment", "link"],
      // 46932997865817: ["Sonic toothbrush", "https://conversionratestore.github.io/projects/novaalab/img/sonic_toothbrush.png", "$49.90", "$129.90", "https://conversionratestore.github.io/projects/novaalab/img/rating_stars.svg", "4.8", "60", "a gentle Sonic Toothbrush ", "", "popup"],
    };

    function renderUpselCard(id, title, linkImg, newPrice, oldPrice, linkRating, rating, discount, descr, linkPdp, type) {
      return `<div class="upsell_card" data-id="${id}">
  <div class="upsell_header">
    <p><span class="discount_box">Get ${discount}% OFF</span><b>${descr}</b></p>
    <p>when adding to the above order.</p>
  </div>
  <div class="upsell_body">
    <div class="img_wrap">
      <img src="${linkImg}" alt="${title}" />
    </div>
    <div>
      <h3 class="upsell_title">${title}</h3>
      <div class="stars_wrap">
        <img src="${linkRating}" alt="stars" />
        <span class="rating_txt">${rating}</span>
      </div>
      <div class="upsell_price_wrap">
        <span class="accent_weight_bold new_price">${newPrice}</span>
        <span class="accent_strikethrough old_price">${oldPrice}</span>
        <span class="discount_txt">-${discount}%</span>
      </div>
      <div class="btn_wrap">
        <button class="upsell_add_btn" data-variant="${id}">Add</button>
        <a class="upsell_learn_more_btn" href="${linkPdp}" data-btn="${type}">Learn more</a>
      </div>
    </div>
  </div>
</div>`;
    }

    document.head.insertAdjacentHTML("beforeend", style);
    document.body.insertAdjacentHTML("beforeend", slideInCartHTML);

    if (document.querySelector(".slide_in_cart")) {
      slideInCart();
    }
    function slideInCart() {
      let body = document.body,
        html = document.querySelector("html"),
        overlay = body.querySelector(".slide_in_cart"),
        btnClose = body.querySelectorAll(".slide_in_cart_close");

      if (document.querySelector(".upsells_wrapp") && document.querySelector(".upsells_wrapp").children.length !== upselsObj.length) {
        for (let key in upselsObj) {
          document.querySelector(".upsells_wrapp").insertAdjacentHTML("beforeend", renderUpselCard(key, upselsObj[key][0], upselsObj[key][1], upselsObj[key][2], upselsObj[key][3], upselsObj[key][4], upselsObj[key][5], upselsObj[key][6], upselsObj[key][7], upselsObj[key][8], upselsObj[key][9]));
        }
      }

      document.querySelectorAll(".cart-link").forEach((item) => {
        item.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopImmediatePropagation();
          console.log(`>>>MyCart`);

          onOpenPopup();
          getCartCheckout();
        });
      });

      btnClose.forEach((el) => {
        el.addEventListener("click", (e) => {
          onClosePopup();
        });
      });

      // click on overlay popup
      overlay.addEventListener("click", (e) => {
        if (e.target.matches(".slide_in_cart")) {
          onClosePopup();
        }
      });

      function onOpenPopup() {
        console.log("onOpenPopup");
        overlay.classList.add("active");
        body.style.overflow = "hidden";
        html.style.overflow = "hidden";
        body.style.display = "block";
      }

      function onClosePopup() {
        overlay.classList.remove("active");
        body.style.overflow = "auto";
        html.style.overflow = "auto";
      }
    }

    //add to cart on checkout
    async function addToCartCheckout(idValue, qt) {
      let formData = {
        items: [
          {
            id: idValue,
            quantity: qt,
          },
        ],
      };

      await fetch("/cart/add.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          response.json();
          getCartCheckout();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

    //get cart on checkout
    async function getCartCheckout() {
      await fetch("/cart.js", {
        method: "GET",
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          // if (data["item_count"] == 0) {
          //   document.querySelector(".first_price_wrapper").hidden = true;
          //   document.querySelector(".cart_popup_footer").hidden = true;
          // } else {
          //   document.querySelector(".first_price_wrapper").hidden = false;
          //   document.querySelector(".cart_popup_footer").hidden = false;
          // }

          document.querySelector(".slide_in_products").innerHTML = "";
          // if (document.querySelector(".cart_popup_scroll .cart_popup_list .product_wrap")?.classList.contains("blur_var")) {
          //   document.querySelectorAll(".cart_popup_scroll .cart_popup_list .product_wrap")?.forEach((el) => {
          //     el.classList.remove("blur_var");
          //   });
          // }
          document.querySelectorAll(".sub_total_last_price").forEach((el) => {
            el.textContent = `$${(data.original_total_price / 100).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")}`;
          });
          document.querySelectorAll(".sub_total_original_price").forEach((el) => {
            el.textContent = `$${(data.total_price / 100).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")}`;
          });
          document.querySelector(".cart_length span").textContent = `${data.item_count}`;
          data.items.forEach((el) => {
            document.querySelector(".slide_in_products").insertAdjacentHTML(
              "beforeend",
              `                         

<div class="product_wrap" id="${el.key}" data-id="${el.id}">
  <a class="img_wrap" href="${el.url}"><img src="${el.image}" alt="" /></a>
  <div class="inform_wrap">
    <div>
      <h2><a href="${el.url}">${el.product_title}</a></h2>
      <div class="price_wrap">
      <span class="my_price">$${(el.final_line_price / 100).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")}</span>
      <span class="my_old_price">$${(el.original_line_price / 100).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")}</span>
      <span class="discount_txt">-${(((el.final_line_price / 100) * 100) / el.original_line_price / 100).toFixed(0)}%</span>
      </div>
    </div>
    <div class="qty_wrap">
      <div class="cart_popup_qty">
        <span class="decrement">
          <svg width="10" height="2" viewBox="0 0 10 2" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_606_235)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 1C0.5 0.7 0.7 0.5 1 0.5H9C9.13261 0.5 9.25979 0.552678 9.35355 0.646447C9.44732 0.740215 9.5 0.867392 9.5 1C9.5 1.13261 9.44732 1.25979 9.35355 1.35355C9.25979 1.44732 9.13261 1.5 9 1.5H1C0.867392 1.5 0.740215 1.44732 0.646447 1.35355C0.552678 1.25979 0.5 1.13261 0.5 1Z" fill="black" />
            </g>
            <defs>
              <clipPath id="clip0_606_235">
                <rect width="10" height="2" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        <input class="count_var" type="number" pattern="[0-9]*" min="1" value="${el.quantity}" />
        <span class="increment">
<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7 5V0H5V5H0V7H5V12H7V7H12V5H7Z" fill="#773BD9"/>
</svg>
        </span>
      </div>

      <svg class="btn_remove_item" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="0.5" y="0.5" width="35" height="35" rx="3.5" stroke="#E2E2E2" />
        <path
          d="M12.8571 23.6875C12.8571 24.4258 13.4196 25 14.1429 25H21.8571C22.5536 25 23.1429 24.4258 23.1429 23.6875V14.5H12.8571V23.6875ZM20.1429 16.6875C20.1429 16.4688 20.3304 16.25 20.5714 16.25C20.7857 16.25 21 16.4688 21 16.6875V22.8125C21 23.0586 20.7857 23.25 20.5714 23.25C20.3304 23.25 20.1429 23.0586 20.1429 22.8125V16.6875ZM17.5714 16.6875C17.5714 16.4688 17.7589 16.25 18 16.25C18.2143 16.25 18.4286 16.4688 18.4286 16.6875V22.8125C18.4286 23.0586 18.2143 23.25 18 23.25C17.7589 23.25 17.5714 23.0586 17.5714 22.8125V16.6875ZM15 16.6875C15 16.4688 15.1875 16.25 15.4286 16.25C15.6429 16.25 15.8571 16.4688 15.8571 16.6875V22.8125C15.8571 23.0586 15.6429 23.25 15.4286 23.25C15.1875 23.25 15 23.0586 15 22.8125V16.6875ZM23.5714 11.875H20.3571L20.0893 11.3828C19.9821 11.1641 19.7679 11 19.5268 11H16.4464C16.2054 11 15.9911 11.1641 15.8839 11.3828L15.6429 11.875H12.4286C12.1875 11.875 12 12.0938 12 12.3125V13.1875C12 13.4336 12.1875 13.625 12.4286 13.625H23.5714C23.7857 13.625 24 13.4336 24 13.1875V12.3125C24 12.0938 23.7857 11.875 23.5714 11.875Z"
          fill="#BBBBBB"
        />
      </svg>
    </div>
  </div>
</div>
                    `
            );
          });

          if (document.querySelector(".slide_in_products").children.length >= 2) {
            document.querySelector(".slide_in_products").classList.add("my_height");
          } else {
            if (document.querySelector(".slide_in_products").classList.contains("my_height")) {
              document.querySelector(".slide_in_products").classList.remove("my_height");
            }
          }

          if (document.querySelector(".btn_remove_item")) {
            document.querySelectorAll(".btn_remove_item").forEach((el) => {
              el.addEventListener("click", (e) => {
                changeCartCheckout(e.target.closest(".product_wrap").getAttribute("id"), 0);
              });
            });
          }

          if (document.querySelector(".increment")) {
            document.querySelectorAll(".increment").forEach((item) => {
              item.addEventListener("click", (e) => {
                let qvt = +e.target.closest("div.cart_popup_qty").querySelector(".count_var").value;
                e.target.closest("div.cart_popup_qty").querySelector(".count_var").value = qvt + 1;

                changeCartCheckout(e.target.closest(".product_wrap").getAttribute("id"), e.target.closest("div.cart_popup_qty").querySelector(".count_var").value);
              });
            });
          }

          if (document.querySelector(".decrement")) {
            document.querySelectorAll(".decrement").forEach((item) => {
              if (item.closest(".cart_popup_qty").querySelector(".count_var").value !== "1") {
                console.log(item);
                if (item.getAttribute("disabled")) {
                  item.removeAttribute("disabled");
                }

                item.addEventListener("click", (e) => {
                  let qvt = +e.target.closest("div.cart_popup_qty").querySelector(".count_var").value;

                  if (+e.target.closest("div.cart_popup_qty").querySelector(".count_var").value >= 0) {
                    e.target.closest("div.cart_popup_qty").querySelector(".count_var").value = qvt - 1;
                    changeCartCheckout(e.target.closest(".product_wrap").getAttribute("id"), e.target.closest("div.cart_popup_qty").querySelector(".count_var").value);
                  }

                  if (+e.target.closest("div.cart_popup_qty").querySelector(".count_var").value === 0) {
                    console.log(`value = 0`);
                    e.target.closest(".product_wrap").remove();
                    changeCartCheckout(e.target.closest(".product_wrap").getAttribute("id"), e.target.closest("div.cart_popup_qty").querySelector(".count_var").value);
                  }
                });
              } else {
                item.setAttribute("disabled", "disabled");
              }
            });
          }

          document.querySelectorAll(".count_var")?.forEach((el) => {
            el.addEventListener("change", (e) => {
              localStorage.setItem("count", e.currentTarget.value);

              if (localStorage.getItem("count")) {
                changeCartCheckout(e.target.closest(".product_wrap").getAttribute("id"), localStorage.getItem("count"));
              }
            });
          });
          document.querySelectorAll(".upsell_card")?.forEach((i) => {
            Object.values(document.querySelectorAll(".product_wrap")).find((el) => {
              if (el.getAttribute("data-id") === i.getAttribute("data-id")) {
                i.style.display = "none";
              }
            });
          });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

    //remove item cart on checkout
    async function changeCartCheckout(idValue, qntValue) {
      let formData = {
        id: idValue,
        quantity: qntValue,
      };

      await fetch("/cart/change.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          response.json();
        })
        .then((data) => {
          console.log(data);
          // document.querySelector(".cart_popup_scrol .cart_popup_listl")?.insertAdjacentHTML("afterbegin", `<span class="loading"><svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><circle class="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle></svg></span>`);
          // document.querySelectorAll(".cart_popup_scroll .cart_popup_list .product_wrap")?.forEach((el) => {
          //   el.classList.add("blur_var");
          // });
          getCartCheckout();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }
}, 600);
