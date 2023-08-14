let startFunk = setInterval(() => {
  if (document.querySelector("#header")) {
    clearInterval(startFunk);

    let style = /*html */ `
        <style>
            .mws-addtocart.btn.btn1.pr_btn:not(.new_btn_add){
                display: none;
            }
            /* popap_box */
            .popup_slide_in {
            position: fixed;
            overflow: hidden;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100%;
            max-height: 100%;
            opacity: 1;
            background: rgba(0, 0, 0, 0.65);
            transition: all 0.5s ease 0s;
            z-index: 1111111111119005;
            display: block;
            }
            .popup_slide_in.is_hidden {
            opacity: 0;
            pointer-events: none;
            }
            .popup_slide_in.is_hidden .container_popup {
            transform: translateX(100%);
            transition: all 0.8s ease 0s;
            }
            .popup_slide_in .container_popup {
            display: flex;
            flex-direction: column;
            position: fixed;
            bottom: 0;
            right: 0;
            max-width: 351px;
            width: 100%;
            height: 100%;
            max-height: 100vh;
            padding:0;
            margin: 0;
            background: #FFF;
            transition: all 0.5s ease 0s;
            overflow: auto;
            }
            .popup_slide_in .container_popup .cart_popup_close {
            cursor: pointer;
            }
            .cart_popup_header{
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid #E2E2E2;
                padding: 16px;
                filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
            }
            .cart_length p{
                color: #0A0A0A;
                font-family: "Roboto", sans-serif !important;
                font-size: 16px;
                font-style: normal;
                font-weight: 600;
                line-height: 16px;
            }
            .cart_popup_footer{
                padding: 16px;
                margin: auto 0 0;
                background: #FFF;
                box-shadow: 0px -4px 16px 0px rgba(0, 0, 0, 0.16);
                height: 100%;
                max-height: 188px;
                position: relative;
            }
            .sub_total_wrap{
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .just_saved_box{
                margin: 0 0 12px auto;
                background: rgba(187, 8, 14, 1);
                max-width: fit-content;
                width: 100%;
                padding: 3px 5px;
                color: #FFF;
                font-size: 14px;
                font-weight: 600;
                line-height: normal;
                border-radius: 5px;
            }
            .sub_total_wrap > span:nth-child(1){
                color: #212121;
                font-family: "Roboto", sans-serif !important;
                font-size: 16px;
                font-weight: 600;
                line-height: 28px;
            }
            .sub_total_wrap > p{
                font-family: "Roboto", sans-serif !important;
                font-size: 16px;
                font-weight: 400;
                line-height: 28px; 
            }
            .sub_total_last_price{
                text-decoration: line-through;
                color: #ABABAB;
            }
            .sub_total_original_price{
                color: #000;
                font-weight: 600;
            }
            .cart_popup_footer form{
                display: flex;
                flex-direction: column;
            }
            .cart_popup_footer form label{
                display: flex;
                flex-direction: column;
                font-weight: 400;
                font-size: 15px;
                line-height: 18px;
                color: #000000;
            }
            .cart_popup_footer form label textarea{
                width: 100%;
                resize: both;
                min-height: 50px;
                max-height: 80px;
                min-width: 542px;
                max-width: 542px;
                font-weight: 500;
                font-size: 14px;
                line-height: 20px;
                color: #000000;
                margin-top: 12px;
                padding: 14px 16px;
                border: 1px solid #4A4A4A;
            }
            .cart_popup_footer form label textarea::placeholder{
                color: #757575;
                font-size: 16px;
                font-weight: 400;
            }
            .btn_checkout{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 50px;
                background: #000;
                color: #FFF;
                font-family: "Roboto", sans-serif !important;
                font-size: 16px;
                font-weight: 700;
                line-height: 28px;
                letter-spacing: 1px;
                cursor: pointer;
                transition: all 0.5s ease 0s;
                border-radius: 5px;
            }
            .btn_checkout:hover{
                background: #000000;
                color: #FFFFFF;
            }
            .cart_popup_scroll{
                position: relative;
                padding: 20px 16px;
                display: flex;
                flex-direction: column;
                overflow-y: auto;
                transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
            }
            .cart_popup_scroll.my_height{
            }
            .product_wrap{
                display: flex;
                justify-content: flex-start;
                gap: 16px;
            }
            .img_wrap{
                flex: 1 1 30%;
                max-width: 145px;
                max-height: 145px;
                width: 100%;
                height: 100%;
                border: 1px solid #EAEBEA;
            }
            .inform_wrap{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                flex: 1 1 70%;
            }
            .inform_wrap h2{
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                color: #000000;
                margin: 0;
                text-align: left;
            }
            .inform_wrap h2 a{
                color: #000000;
            }
            .price_wrap,
            .qty_wrap{
                display: flex;
                justify-content: space-between;
                align-items: center;
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
                font-weight: 500;
                font-size: 14px;
                line-height: 20px;
                text-transform: uppercase;
                color: #000000;
                margin: 0 7px;
            }
            .decrement, 
            .increment{
                height: 20px;
                width: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .decrement svg{
                display: block;
            }
            .my_price{
                font-weight: 500;
                font-size: 16px;
                line-height: 15px;
                color: #000000;
                margin-right: 16px;
            }
            .empty_cart_info{
                font-size: 30px;
                font-weight: 400;
                line-height: 52px;
                margin: auto;
            }
            .blur_var{
                pointer-events: none;
                filter: blur(10px);
            }
            .loading{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 1.8rem;
                display: inline-block;
            }
            .loading svg{
                animation: rotator 1.4s linear infinite;
            }
            .shop_confidently_box{
                padding: 12px;
                border-radius: 6px;
                background: #F4F4F4;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                gap: 8px;
            }
            .shop_confidently_box > svg{
                max-width: 28px;
                width: 100%;
            }
            .shop_confidently_box > span{
                color: #212121;
                font-size: 14px;
                font-weight: 500;
                line-height: 18px;
                text-transform: uppercase;
            }
            .quick_ship_box{
                text-align: center;
            }
            .quick_ship_box > p{
                color: #000;
                font-family: "Roboto", sans-serif !important;
                font-size: 20px;
                font-weight: 500;
                line-height: 26px; 
                margin: 24px 0 8px;
            }
            .reviews_wraps .stars_wrap{
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 3px;
                gap: 2px;
            }
            .reviews_wraps > span{
                color: #000;
                font-family: "Roboto", sans-serif !important;
                font-size: 14px;
                font-weight: 600;
                line-height: 18px;
            }
            .cart_popup_scroll {
                -ms-overflow-style: none;
                scrollbar-width: none;
            }

            .cart_popup_scroll::-webkit-scrollbar {
                width: 0;
                height: 0;
            }

            @media (max-width: 768px) {
                .popup_slide_in .container_popup{
                    max-width: 335px;
                }
                .cart_popup_header{
                    padding: 16px;
                }
                .cart_continue_shopping span{
                    line-height: 15px;
                }
                .cart_popup_scroll{
                    padding: 16px;
                    height: 216px;
                }
                .product_wrap{
                    gap: 12px;
                }
                .inform_wrap h2{
                    font-size: 14px;
                    line-height: 19px;
                }
                .img_wrap{
                    flex: 1 0 120px;
                    max-width: 120px;
                    max-height: 120px;
                }
                .price_wrap,
                .qty_wrap{
                    gap: 5px;
                }
                .my_price{
                    font-size: 14px;
                    line-height: 20px;
                    margin-right: 12px;
                }
                .cart_popup_footer{
                    padding: 16px 0 0;
                    margin: 0 16px 16px;
                }
                .sub_total_wrap span:nth-child(1){
                    font-size: 12px;
                    line-height: 15px;
                }
                .sub_total_original_price{
                    font-size: 16px;
                    line-height: 19px;
                }
                .sub_total_wrap{
                    margin-bottom: 30px;
                }
                .cart_popup_footer form label textarea{
                    min-width: 303px;
                    max-width: 303px;
                }
                .btn_checkout{
                    height: 48px;
                    font-weight: 500;
                    font-size: 12px;
                    background: #000000;
                    color: #FFFFFF;
                }
                .empty_cart_info{
                    font-size: 24px;
                    margin: 0 auto auto;
                }
                .cart_popup_scroll.my_height{
                    height: 670px;
                }
            }
        </style>
        `;

    let popUp = /*html */ `
            <div class="popup_slide_in is_hidden" data-modal>
                <div class="container_popup">
                    <div class="cart_popup_header">
                        <div class="cart_length">                        
                            <p>Cart (<span>1</span>)</p>
                        </div>
                        <svg data-close-slide-in class="cart_popup_close" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00022 6.54509L1.45508 0L0.000548353 1.45452L6.54569 7.99961L0 14.5453L1.45453 15.9998L8.00022 9.45413L14.5458 15.9997L16.0004 14.5452L9.45475 7.99961L15.9998 1.45459L14.5453 7.21945e-05L8.00022 6.54509Z" fill="#4A4A4A"/>
                        </svg>
                    </div>
                    <div class="cart_popup_scroll">
                        <div class="cart_popup_list"></div>
                        <div class="shop_confidently_box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path d="M23.625 5.24988C18.76 5.24988 14.5863 1.97738 14.5425 1.94238C14.388 1.82031 14.1969 1.75391 14 1.75391C13.8031 1.75391 13.612 1.82031 13.4575 1.94238C13.4137 1.97738 9.2575 5.24988 4.375 5.24988C4.14294 5.24988 3.92038 5.34207 3.75628 5.50616C3.59219 5.67026 3.5 5.89282 3.5 6.12488V13.9999C3.5 19.8711 5.87125 22.7499 13.6413 26.1711C13.7541 26.2218 13.8763 26.2481 14 26.2481C14.1237 26.2481 14.2459 26.2218 14.3587 26.1711C22.1287 22.7499 24.5 19.8711 24.5 13.9999V6.12488C24.5 5.89282 24.4078 5.67026 24.2437 5.50616C24.0796 5.34207 23.8571 5.24988 23.625 5.24988ZM14 20.9999C12.6155 20.9999 11.2622 20.5893 10.111 19.8202C8.95986 19.051 8.06266 17.9577 7.53284 16.6787C7.00303 15.3996 6.86441 13.9921 7.1345 12.6342C7.4046 11.2764 8.07128 10.0291 9.05025 9.05013C10.0292 8.07116 11.2765 7.40448 12.6344 7.13438C13.9922 6.86429 15.3997 7.00291 16.6788 7.53272C17.9579 8.06254 19.0511 8.95974 19.8203 10.1109C20.5895 11.262 21 12.6154 21 13.9999C21 15.8564 20.2625 17.6369 18.9497 18.9496C17.637 20.2624 15.8565 20.9999 14 20.9999Z" fill="black"/>
                                <path d="M16.0043 11.6287L13.1255 14.5162L11.9968 13.3787C11.9152 13.2971 11.8183 13.2324 11.7117 13.1882C11.6052 13.1441 11.4909 13.1213 11.3755 13.1213C11.2602 13.1213 11.1459 13.1441 11.0393 13.1882C10.9327 13.2324 10.8359 13.2971 10.7543 13.3787C10.6727 13.4603 10.608 13.5571 10.5638 13.6637C10.5197 13.7703 10.4969 13.8845 10.4969 13.9999C10.4969 14.1153 10.5197 14.2295 10.5638 14.3361C10.608 14.4427 10.6727 14.5396 10.7543 14.6212L12.5043 16.3712C12.5856 16.4532 12.6824 16.5183 12.789 16.5627C12.8957 16.6071 13.01 16.63 13.1255 16.63C13.241 16.63 13.3554 16.6071 13.462 16.5627C13.5687 16.5183 13.6654 16.4532 13.7468 16.3712L17.2468 12.8712C17.3284 12.7896 17.3931 12.6927 17.4372 12.5861C17.4814 12.4795 17.5041 12.3653 17.5041 12.2499C17.5041 12.1345 17.4814 12.0203 17.4372 11.9137C17.3931 11.8071 17.3284 11.7103 17.2468 11.6287C17.1652 11.5471 17.0683 11.4824 16.9617 11.4382C16.8552 11.3941 16.7409 11.3713 16.6255 11.3713C16.5102 11.3713 16.3959 11.3941 16.2893 11.4382C16.1827 11.4824 16.0859 11.5471 16.0043 11.6287Z" fill="black"/>
                            </svg>
                            <span>Shop confidently<br><b>30-day money back guarantee</b></span>
                        </div>
                        <div class="first_price_wrapper">
                            <p><span>Regular price</span> <span>$554.82</span></p>
                            <p><span>You just saved (15% off)</span> <span>-$83.22</span></p>
                            <div class="sub_total_wrap">
                                <span>Subtotal</span>
                                <p>
                                <span class="sub_total_last_price">$3115.00</span>
                                <span class="sub_total_original_price">$2647.75</span>
                                </p>
                            </div>
                        </div>
                        <div class="quick_ship_box">
                            <div class="img_wrap_ship">
                                <img src="https://conversionratestore.github.io/projects/artisanborn/img/img_ship.svg" alt="Shop confidently 30-day money back guarantee" />
                            </div>
                            <p>More than XX,XXX US customers already trusted us</p>
                            <div class="reviews_wraps">
                                <div class="stars_wrap">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                                        <path d="M9 0L11.645 5.35942L17.5595 6.21885L13.2798 10.3906L14.2901 16.2812L9 13.5L3.70993 16.2812L4.72025 10.3906L0.440492 6.21885L6.35497 5.35942L9 0Z" fill="#F6C657"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                                        <path d="M9 0L11.645 5.35942L17.5595 6.21885L13.2798 10.3906L14.2901 16.2812L9 13.5L3.70993 16.2812L4.72025 10.3906L0.440492 6.21885L6.35497 5.35942L9 0Z" fill="#F6C657"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                                        <path d="M9 0L11.645 5.35942L17.5595 6.21885L13.2798 10.3906L14.2901 16.2812L9 13.5L3.70993 16.2812L4.72025 10.3906L0.440492 6.21885L6.35497 5.35942L9 0Z" fill="#F6C657"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                                        <path d="M9 0L11.645 5.35942L17.5595 6.21885L13.2798 10.3906L14.2901 16.2812L9 13.5L3.70993 16.2812L4.72025 10.3906L0.440492 6.21885L6.35497 5.35942L9 0Z" fill="#F6C657"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                                        <path d="M9 0L11.645 5.35942L17.5595 6.21885L13.2798 10.3906L14.2901 16.2812L9 13.5L3.70993 16.2812L4.72025 10.3906L0.440492 6.21885L6.35497 5.35942L9 0Z" fill="#F6C657"/>
                                    </svg>
                                </div>
                                <span>619 reviews</span>
                            </div>
                        </div>
                    </div>
                    <div class="cart_popup_footer">
                        <div class="sub_total_wrap"> 
                            <span>Subtotal</span>
                            <p>
                                <span class="sub_total_last_price">$00,00</span>
                                <span class="sub_total_original_price">$00,00</span>
                            </p>
                        </div>
                        <p class="just_saved_box">You just saved <span class="saved_total">$83.22</span></p>
                        <form action="/cart" method="post">
                            <a class="btn_checkout" href="/checkout">Proceed to Checkout >></a>
                        </form>
                    </div>
                </div>
            </div>
        `;

    let slideInCartContent = /*html */ ``;

    document.head.insertAdjacentHTML("beforeend", style);
    document.body.insertAdjacentHTML("afterbegin", popUp);

    let body = document.body,
      html = document.querySelector("html"),
      overlay = body.querySelector(".popup_slide_in"),
      btnClose = body.querySelectorAll("[data-close-slide-in]");

    if (document.querySelector(".hdicon[title='CART']")) {
      document.querySelector(".hdicon[title='CART']").addEventListener("click", (e) => {
        e.preventDefault();
        console.log(`>>>MyCart`);
        onOpenPopup(slideInCartContent);
        document.querySelector(".cart_popup_scroll")?.insertAdjacentHTML("afterbegin", `<span class="loading"><svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><circle class="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle></svg></span>`);
        document.querySelectorAll(".cart_popup_scroll .cart_popup_list .product_wrap")?.forEach((el) => {
          el.classList.add("blur_var");
        });
        getCartCheckout();
      });
    }

    btnClose.forEach((el) => {
      el.addEventListener("click", (e) => {
        onClosePopup();
      });
    });

    // click on overlay popup
    overlay.addEventListener("click", (e) => {
      if (e.target.matches(".popup_slide_in")) {
        onClosePopup();
      }
    });

    function onOpenPopup(block) {
      overlay.classList.remove("is_hidden");
      body.style.overflow = "hidden";
      html.style.overflow = "hidden";
      body.style.display = "block";

      document.querySelector(".container_popup").insertAdjacentHTML("beforeend", block);
      document.querySelector(".cart_popup_scroll .cart_popup_list")?.insertAdjacentHTML("afterbegin", `<span class="loading"><svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><circle class="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle></svg></span>`);
      document.querySelectorAll(".cart_popup_scroll .cart_popup_list .product_wrap")?.forEach((el) => {
        el.classList.remove("blur_var");
      });
    }

    function onClosePopup() {
      overlay.classList.add("is_hidden");
      body.style.overflow = "auto";
      html.style.overflow = "auto";
    }

    if (document.querySelector("form button[name='add']")) {
      let newBtn = document.querySelector("form button[name='add']").cloneNode(true);
      newBtn.classList.add("new_btn_add");
      document.querySelector("form button[name='add']").insertAdjacentElement("afterend", newBtn);
      document.querySelector("form .new_btn_add").addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        console.log(`>>>>>>>>>>>>>>>>>>>>>>id btn`, e.target.closest("form").querySelector('[name="id"]').value);
        onOpenPopup(slideInCartContent);
        document.querySelector(".cart_popup_scroll .cart_popup_list")?.insertAdjacentHTML("afterbegin", `<span class="loading"><svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><circle class="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle></svg></span>`);
        document.querySelectorAll(".cart_popup_scroll .cart_popup_list .product_wrap")?.forEach((el) => {
          el.classList.add("blur_var");
        });
        addToCartCheckout(e.target.closest("form").querySelector('[name="id"]').value);
      });
    }

    //add to cart on checkout
    async function addToCartCheckout(idValue) {
      let formData = {
        items: [
          {
            id: idValue,
            quantity: 1,
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
          document.querySelector(".cart_popup_list").innerHTML = "";
          if (document.querySelector(".cart_popup_scroll .cart_popup_list .product_wrap")?.classList.contains("blur_var")) {
            document.querySelectorAll(".cart_popup_scroll .cart_popup_list .product_wrap")?.forEach((el) => {
              el.classList.remove("blur_var");
            });
          }
          document.querySelectorAll(".sub_total_last_price").forEach((el) => {
            el.textContent = `$${(data.original_total_price / 100).toFixed(2)}`;
          });
          document.querySelectorAll(".sub_total_original_price").forEach((el) => {
            el.textContent = `$${(data.total_price / 100).toFixed(2)}`;
          });
          document.querySelector(".saved_total").textContent = `$${(data.total_discount / 100).toFixed(2)}`;
          if (document.querySelector("#CartCount")) {
            document.querySelector("#CartCount").textContent = `${data.item_count}`;
          }
          data.items.forEach((el) => {
            let prop = [];
            if (el.options_with_values) {
              if (Object.keys(el.options_with_values).length != 0) {
                for (let key in el.options_with_values) {
                  if (el.options_with_values.hasOwnProperty(key)) {
                    // console.log(`<span>${el.options_with_values[key].name}</span> <span>${el.options_with_values[key].value}</span>`);
                    let s = `<span>${el.options_with_values[key].name}</span> <span>${el.options_with_values[key].value}</span>`;
                    prop.push(s);
                  }
                }
              }
            }

            document.querySelector(".cart_popup_scroll .cart_popup_list").insertAdjacentHTML(
              "beforeend",
              `                         
                    <div class="product_wrap" id=${el.key}>
                        <div class="img_wrap">
                            <a href="${el.url}"><img src="${el.image}" alt="" /></a>
                        </div>
                        <div class="inform_wrap">
                            <div>
                                <h2><a href="${el.url}">${el.product_title}</a></h2>
                                <div>${prop}</div>
                                <div class="price_wrap">
                                    <span class="my_old_price">$${(el.original_price / 100).toFixed(2)}</span>
                                    <span class="my_price">$${(el.final_line_price / 100).toFixed(2)}</span>
                                </div>
                            </div>
                        <div class="qty_wrap">
                            <div class="cart_popup_qty">
                                <span class="decrement">
                                    <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_606_235)">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M0.5 1C0.5 0.7 0.7 0.5 1 0.5H9C9.13261 0.5 9.25979 0.552678 9.35355 0.646447C9.44732 0.740215 9.5 0.867392 9.5 1C9.5 1.13261 9.44732 1.25979 9.35355 1.35355C9.25979 1.44732 9.13261 1.5 9 1.5H1C0.867392 1.5 0.740215 1.44732 0.646447 1.35355C0.552678 1.25979 0.5 1.13261 0.5 1Z"
                                        fill="black" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_606_235">
                                        <rect width="10" height="2" fill="white" />
                                        </clipPath>
                                    </defs>
                                    </svg>
                                </span>
                                <span class="count_var">${el.quantity}</span>
                                <span class="increment">
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_606_238)">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M1 4.5099C0.867392 4.5099 0.740215 4.56258 0.646447 4.65634C0.552678 4.75011 0.5 4.87729 0.5 5.0099C0.5 5.14251 0.552678 5.26968 0.646447 5.36345C0.740215 5.45722 0.867392 5.5099 1 5.5099H4.5L4.51 9.0099C4.51066 9.07556 4.52424 9.14045 4.54997 9.20086C4.57571 9.26127 4.61309 9.31602 4.65998 9.36199C4.70688 9.40795 4.76236 9.44423 4.82328 9.46875C4.88419 9.49327 4.94934 9.50556 5.015 9.5049C5.08066 9.50424 5.14555 9.49066 5.20596 9.46492C5.26637 9.43919 5.32112 9.40181 5.36709 9.35492C5.41305 9.30802 5.44933 9.25253 5.47385 9.19162C5.49837 9.13071 5.51066 9.06556 5.51 8.9999V5.4999L9.01 5.4899C9.07566 5.48924 9.14055 5.47566 9.20096 5.44992C9.26137 5.42419 9.31612 5.38681 9.36209 5.33992C9.40805 5.29302 9.44433 5.23753 9.46885 5.17662C9.49337 5.11571 9.50566 5.05056 9.505 4.9849C9.50434 4.91924 9.49076 4.85435 9.46503 4.79394C9.43929 4.73353 9.40191 4.67877 9.35502 4.63281C9.30812 4.58684 9.25264 4.55057 9.19172 4.52604C9.13081 4.50152 9.06566 4.48924 9 4.4899H5.5L5.49 0.989898C5.48867 0.85729 5.43472 0.73064 5.34002 0.637809C5.24531 0.544979 5.11761 0.493572 4.985 0.494898C4.85239 0.496224 4.72574 0.550174 4.63291 0.64488C4.54008 0.739586 4.48867 0.86729 4.49 0.999898V4.4999L0.99 4.5099H1Z"
                                        fill="black" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_606_238">
                                        <rect width="10" height="10" fill="white" />
                                        </clipPath>
                                    </defs>
                                    </svg>
                                </span>
                            </div>
                           
                            <div class="cart_popup_price">
                                <svg class="btn_remove_item" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                    <rect x="0.5" y="0.5" width="35" height="35" rx="3.5" stroke="#E2E2E2"/>
                                    <path d="M12.8571 23.6875C12.8571 24.4258 13.4196 25 14.1429 25H21.8571C22.5536 25 23.1429 24.4258 23.1429 23.6875V14.5H12.8571V23.6875ZM20.1429 16.6875C20.1429 16.4688 20.3304 16.25 20.5714 16.25C20.7857 16.25 21 16.4688 21 16.6875V22.8125C21 23.0586 20.7857 23.25 20.5714 23.25C20.3304 23.25 20.1429 23.0586 20.1429 22.8125V16.6875ZM17.5714 16.6875C17.5714 16.4688 17.7589 16.25 18 16.25C18.2143 16.25 18.4286 16.4688 18.4286 16.6875V22.8125C18.4286 23.0586 18.2143 23.25 18 23.25C17.7589 23.25 17.5714 23.0586 17.5714 22.8125V16.6875ZM15 16.6875C15 16.4688 15.1875 16.25 15.4286 16.25C15.6429 16.25 15.8571 16.4688 15.8571 16.6875V22.8125C15.8571 23.0586 15.6429 23.25 15.4286 23.25C15.1875 23.25 15 23.0586 15 22.8125V16.6875ZM23.5714 11.875H20.3571L20.0893 11.3828C19.9821 11.1641 19.7679 11 19.5268 11H16.4464C16.2054 11 15.9911 11.1641 15.8839 11.3828L15.6429 11.875H12.4286C12.1875 11.875 12 12.0938 12 12.3125V13.1875C12 13.4336 12.1875 13.625 12.4286 13.625H23.5714C23.7857 13.625 24 13.4336 24 13.1875V12.3125C24 12.0938 23.7857 11.875 23.5714 11.875Z" fill="#BBBBBB"/>
                                </svg>
                            </div>
                        </div>
                        </div>
                    </div>`
            );
          });

          if (document.querySelector(".cart_popup_scroll .cart_popup_list").children.length < 1) {
            document.querySelector(".cart_popup_scroll .cart_popup_list").insertAdjacentHTML("afterbegin", `<h3 class="empty_cart_info">Your cart is empty</h3>`);
          }
          if (document.querySelector(".cart_popup_scroll .cart_popup_list").children.length >= 2) {
            document.querySelector(".cart_popup_scroll .cart_popup_list").classList.add("my_height");
          } else {
            if (document.querySelector(".cart_popup_scroll .cart_popup_list").classList.contains("my_height")) {
              document.querySelector(".cart_popup_scroll .cart_popup_list").classList.remove("my_height");
            }
          }

          if (document.querySelector(".btn_remove_item")) {
            document.querySelectorAll(".btn_remove_item").forEach((el) => {
              el.addEventListener("click", (e) => {
                console.log(`>>>>>CLICK`);
                changeCartCheckout(e.target.closest(".product_wrap").getAttribute("id"), 0);
              });
            });
          }

          if (document.querySelector(".increment")) {
            document.querySelectorAll(".increment").forEach((item) => {
              item.addEventListener("click", (e) => {
                let qvt = +e.target.closest("div.cart_popup_qty").querySelector(".count_var").textContent;
                e.target.closest("div.cart_popup_qty").querySelector(".count_var").textContent = qvt + 1;

                changeCartCheckout(e.target.closest(".product_wrap").getAttribute("id"), e.target.closest("div.cart_popup_qty").querySelector(".count_var").textContent);
              });
            });
          }

          if (document.querySelector(".decrement")) {
            document.querySelectorAll(".decrement").forEach((item) => {
              item.addEventListener("click", (e) => {
                let qvt = +e.target.closest("div.cart_popup_qty").querySelector(".count_var").textContent;

                if (+e.target.closest("div.cart_popup_qty").querySelector(".count_var").textContent >= 0) {
                  e.target.closest("div.cart_popup_qty").querySelector(".count_var").textContent = qvt - 1;
                  changeCartCheckout(e.target.closest(".product_wrap").getAttribute("id"), e.target.closest("div.cart_popup_qty").querySelector(".count_var").textContent);
                }

                if (+e.target.closest("div.cart_popup_qty").querySelector(".count_var").textContent === 0) {
                  console.log(`textContent = 0`);
                  e.target.closest(".product_wrap").remove();
                  changeCartCheckout(e.target.closest(".product_wrap").getAttribute("id"), e.target.closest("div.cart_popup_qty").querySelector(".count_var").textContent);
                }
              });
            });
          }
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
          document.querySelector(".cart_popup_scrol .cart_popup_listl")?.insertAdjacentHTML("afterbegin", `<span class="loading"><svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><circle class="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle></svg></span>`);
          document.querySelectorAll(".cart_popup_scroll .cart_popup_list .product_wrap")?.forEach((el) => {
            el.classList.add("blur_var");
          });
          getCartCheckout();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }
}, 600);
