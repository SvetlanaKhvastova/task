let startFunk = setInterval(() => {
  if (document.querySelector(".catalog-product-view .main-container")) {
    clearInterval(startFunk)

    let popUpStyle = /*html */ `
    <style>
        .backdrop_popup {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgb(0 0 0 / 65%);
            display: flex;
            overflow-y: auto;
            z-index: 1000000019;
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
            max-width: 720px;
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

            .body_popup{
              display: flex;
            }

            .body_popup >div{
              flex: 1;
            }

            .body_popup .form_wrap{
              padding: 45px 30px;
              display: none;
              position: relative;
            }

             .body_popup .form_wrap.active{
              display: block;
            }

            .form_wrap > h2{
              font-family: 'Jost', sans-serif;
              font-weight: 600;
              font-size: 28px;
              line-height: 121%;
              color: #286278;
              margin-bottom: 10px;
              text-align: center;
            }
            
            .form_wrap .coupon_value{
              font-family: 'Jost', sans-serif;
              background: #F2F2F2;
              border: 1px dashed #286278;
              border-radius: 4px;
              padding: 12px 0;
              max-width: 148px;
              margin: 0 auto 15px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: 500;
              font-size: 20px;
              line-height: 20px;
              letter-spacing: 0.5px;
              color: #333333;
            }

            .form_wrap > p{
              font-family: 'Jost', sans-serif;
              font-weight: 400;
              font-size: 16px;
              line-height: 150%;
              color: #333333;
              margin-bottom: 30px;
              text-align: center;
            }

            .form_wrap > p.coupon_var{
              font-size: 14px;
            }

             .form_wrap > p.coupon_var:last-child{
              position: absolute;
              bottom: 44px;
              left: 0;
              width: 100%;
              margin: 0 30px;
              max-width: 300px;
             }

            .form_wrap > p:last-child{
              border-top: 1px solid #E5E5E5;
              padding-bottom: 10px;
              margin: 0;
            }

            .form_wrap > p > span{
              text-decoration: underline;
              font-weight: 600;
              cursor: pointer;
            }

            .form_wrap > span{
              text-align: center;
              display: block;
              font-family: 'Jost', sans-serif;
              font-weight: 400;
              font-size: 16px;
              line-height: 150%;
              color: #333333;
              position: relative;
            }

            .form_wrap > span::before,
            .form_wrap > span::after{
              position: absolute;
              content: "";
              top: 50%;
              left: 0;
              transform: translateY(-50%);
              width: 39%;
              border-bottom: 1px solid #E5E5E5;
            }

            .form_wrap > span::after{
              right: 0;
              left: unset;
            }

             .form_wrap > ul{
               display: flex;
              margin: 15px 0 30px;
              gap: 15px;
              align-items: center;
              justify-content: space-between;
             }

             .form_wrap > ul li{
              display: flex;
              align-items: center;
              width: 30%;
              border: 1px solid #E5E5E5;
              box-shadow: 0px 3px 6px rgba(208, 208, 208, 0.25);
              border-radius: 4px;
              cursor: pointer;
              height: 48px;
              justify-content: center;
              align-items: center;
             }

             .form_wrap button{
                background: #286278;
                box-shadow: 0px 3px 6px rgb(208 208 208 / 50%);
                border-radius: 60px;
                width: 100%;
                height: 48px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: 'Jost', sans-serif;
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
                color: #FFFFFF;
                margin-bottom: 16px;
             }

             .new_form{
              display: flex;
              flex-wrap: wrap;
              gap: 15px;
             }

             .new_form > div{
              position: relative;
              background: #F2F2F2;
              border: 1px solid #D0D0D0;
              border-radius: 4px;
              height: 38px;
              display: flex;
              align-items: center;
              padding: 13px 0 13px 12px;
              font-weight: 400;
              font-size: 12px;
              line-height: 12px;
              letter-spacing: 0.5px;
              color: #333333;
              width: 100%;
             }

              .new_form > div:nth-child(1),
              .new_form > div:nth-child(2){
                width: 47.5%;
              }


             .new_form > div input{
              width: 100%;
             }

             .new_form > div input::placeholder{
              font-weight: 400;
              font-size: 12px;
              line-height: 12px;
              letter-spacing: 0.5px;
              color: #333333;
             }

             .new_form > div label{
              position: absolute;
              top: -2px;
              left: 12px;
              font-size: 8px;
              color: rgb(51 51 51 / 70%);
              opacity: 0;
             }

             /*discount_cart */
             .discount_cart,
             .discount_cart.sign_up,
             .discount_pdp,
             .discount_pdp.sign_up{
               display: inline-flex;
               align-items: center;
               justify-content: center;
               width: 100%;
               height: 32px;
               font-weight: 600;
               font-size: 12px;
               line-height: 12px;
               letter-spacing: 0.5px;
               text-transform: uppercase;
               color: #FFFFFF;
               background: #1B963E;
              margin-bottom: -5px;
             }

             .discount_pdp,
             .discount_pdp.sign_up{
              border-radius: 8px;
              max-width: 260px;
              margin: 0;
             }

             .discount_pdp.sign_up{
              max-width: 218px;
             }

             .discount_cart.sign_up span:first-of-type,
             .discount_pdp.sign_up span:first-of-type{
              text-decoration: underline;
              cursor: pointer;
              margin: 0;
             }

             .discount_cart.sign_up span:last-of-type,
            .discount_pdp.sign_up span:last-of-type,
            .discount_pdp span{
              font-weight: 400;
              margin: 0 5px;
             }
    </style>
    `

    let popUp = /*html */ `
    <div class="backdrop_popup">
        <div class="container_popup">
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

            <div class="body_popup">

            </div>
        </div>
    </div>
    `

    let bodyPopup = /*html */ `
    <div class="form_wrap active">
      <h2>Save 15% on today’s order</h2>
      <p>Sign up below and get instant savings on items over $75</p>
      <div class="new_form">
        <div>
          <input type="text" id="firstName" placeholder="First Name" name="firstName" required="required" autocomplete="off"> 
          <label for="firstName">First Name</label>
        </div>
        <div>
          <input type="text" id="lastName" placeholder="Last Name" name="lastName" required="required" autocomplete="off"> 
          <label for="lastName">Last Name</label>
        </div>
        <div>
          <input type="email" id="registerEmail" placeholder="Email address" name="registerEmail" required="required"> 
          <label for="registerEmail">Email address</label>
        </div>
        <div>
          <input minlength="7" maxlength="24" data-parsley-minlength="7" data-parsley-maxlength="24" data-parsley-minlength-message="You need to enter at least 7 characters." type="password" id="registerPassword" name="registerPassword" placeholder="Password" autocomplete="off" required="required"> 
          <label for="registerPassword">Password</label>
        </div>
        <button id="btnRegisterSubmit">Sign Up</button>
      </div>
      <span>or with</span>
      <ul>
        <li class="fb">
          <img src="https://conversionratestore.github.io/projects/lamps/img/fb.png" alt="logo Facebook">
        </li>
        <li class="google">
          <img src="https://conversionratestore.github.io/projects/lamps/img/google.png" alt="logo Google">
        </li>
        <li class="amazon">
          <img src="https://conversionratestore.github.io/projects/lamps/img/amazon.png" alt="logo Amazon">
        </li>
      </ul>
      <p>Already have an account? <span>Login</span></p>
    </div>
    
    <div class="form_wrap">
      <h2>Thank you!</h2>
      <p>Here’s a 15% off Coupon Code:</p>
      <div class="coupon_value">WLS1-QFT5</div>
      <p class="coupon_var">It will be <b>automatically applied</b> at checkout*</p>
      <button id="continueBtn">Continue Shopping </button>
      <p class="coupon_var">*Brand restrictions apply. Excludes closeout items. Cannot be combined with any other sales or promotions.</p>
    </div>
    <div>
      <img src="https://conversionratestore.github.io/projects/lamps/img/lamps.jpg" alt="lamps">
    </div>
    `

    let discountCart = /*html */ `
    <div class="discount_cart">15% discount applied</div>
    `

    let discountCartSignUp = /*html */ `
    <div class="discount_cart sign_up"><span>Sign up</span> <span>to get</span> 15% discount</div>
    `

    let discountPdp = /*html */ `
    <div class="discount_pdp">15% discount <span>applied at checkout</span></div>
    `

    let discounPdpSignUp = /*html */ `
    <div class="discount_pdp sign_up"><span>Sign up</span> <span>to get</span> 15% discount</div>
    `

    document.head.insertAdjacentHTML("beforeend", popUpStyle)
    document.body.insertAdjacentHTML("beforeend", popUp)
    document.querySelector(".body_popup")?.insertAdjacentHTML("afterbegin", bodyPopup)

    // TO show POPUP
    setTimeout(() => {
      showPopup()
    }, 3000)

    document.querySelector(".btn_close").addEventListener("click", () => {
      hidePopup()
    })

    document.querySelector(".backdrop_popup").addEventListener("click", (e) => {
      if (e.target.matches(".backdrop_popup")) {
        hidePopup()
      }
    })

    //show popup
    function showPopup() {
      document.querySelector(".backdrop_popup").classList.add("show")
      document.body.style.overflow = "hidden"
    }

    //hide popup
    function hidePopup() {
      document.querySelector(".backdrop_popup").classList.remove("show")
      document.body.style.overflow = "unset"
    }

    // render text on cart
    document.querySelectorAll(".inner-panel .content-panel .c-product")?.forEach((el) => {
      el.insertAdjacentHTML("beforeend", discountCartSignUp)
    })

    document.querySelector(".catalog-product-view .product-essential .p-price .pdp-afterpay")?.insertAdjacentHTML("beforebegin", discountPdp)

    // form
    if (document.querySelector(".form_wrap > ul")) {
      document.querySelectorAll(".form_wrap > ul li").forEach((el) => {
        el.addEventListener("click", () => {
          if (el.classList.contains("fb")) {
            document.querySelector(".i-block.m-0 .fab.fa-facebook").closest("a").click()
          }

          if (el.classList.contains("google")) {
            document.querySelector(".i-block.m-0 .fab.fa-google").closest("a").click()
          }

          if (el.classList.contains("amazon")) {
            document.querySelector(".i-block.m-0 .fab.fa-amazon").closest("a").click()
          }
        })
      })
    }

    document.querySelector(".form_wrap > p > span")?.addEventListener("click", () => {
      hidePopup()
      document.querySelector('.header-container .header-actions .action-links [data-account-trigger="true"]')?.click()
      document.querySelector("#account-panel .content-panel #btn-login-show")?.click()
    })

    document.querySelector(".form_wrap button#continueBtn")?.addEventListener("click", () => {
      hidePopup()
    })

    document.querySelector(".form_wrap button#btnRegisterSubmit")?.addEventListener("click", () => {
      sessionStorage.setItem("successSign", true)
      hidePopup()
    })

    let newPopup = setInterval(() => {
      if (sessionStorage.getItem("successSign")) {
        clearInterval(newPopup)
        document.querySelectorAll(".body_popup .form_wrap")[1].classList.add("active")
        document.querySelectorAll(".body_popup .form_wrap")[0].classList.remove("active")
        showPopup()
        if (sessionStorage.getItem("successSign")) {
          sessionStorage.removeItem("successSign")
        }
      }
    }, 10)
  }
}, 10)

// form
// document.querySelector(".new_form > div input#firstName").value

// document.querySelector("#signup-email").click()
// document.querySelector("#first-name").value = "Bob"
// document.querySelector("#last-name").value = "Bobik"
// document.querySelector("#register-email").value = bob@mail.com"
// document.querySelector("#register-password").value = "qwerty123"
// document.querySelector("#btn-register-submit").click()

// coupon true
// if (document.querySelector('.header-container .header-actions .action-links [data-account-trigger="true"] span').textContent === "Account") {
//   document.querySelector('.inner-panel .i-block [data-label="Cart Coupon"]').click()
//   document.querySelector(".inner-panel .i-block #sidebar-discount-coupon-form input").value = "WLS1-QFT5"

//   if (document.querySelector(".inner-panel .i-block #sidebar-discount-coupon-form input").value !== "") {
//     document.querySelector(".inner-panel .i-block #submit-coupon").click()
//   }
// }

// //
// let arrayProduct = []

// if (sessionStorage.getItem("saleProduct")) {
//   arrayProduct = JSON.parse(sessionStorage.getItem("saleProduct"))
// }

// // click on btn Add to card listing on pdp
// if (document.querySelector("#personalized")) {
//   document.querySelectorAll(".category-products .products-grid .item .item-inner .details-area .actions .addtocart").forEach((el) => {
//     el.addEventListener("click", function () {
//       console.log(`listing on pdp`)

//       let dataProduct = JSON.parse(this.closest(".item.t-simple").getAttribute("data-product"))
//       let idProduct = dataProduct.id
//       console.log(`idProduct`, idProduct)

//       let storage = JSON.parse(sessionStorage.getItem("saleProduct"))
//       console.log(storage)

//       if (storage === null) {
//         arrayProduct.push(idProduct)
//       } else {
//         if (!storage.includes(idProduct)) {
//           arrayProduct.push(idProduct)
//         }
//       }

//       sessionStorage.setItem("saleProduct", JSON.stringify(arrayProduct))
//     })
//   })
// }

// // click on btn Add to card pdp
// document.querySelector("#add-item-to-cart").addEventListener("click", function (el) {
//   let dataProduct = JSON.parse(this.closest(".product-essential").querySelector("#item-details").getAttribute("data-product"))
//   let idProduct = dataProduct.id

//   let storage = JSON.parse(sessionStorage.getItem("saleProduct"))
//   console.log(storage)

//   if (storage === null) {
//     arrayProduct.push(idProduct)
//   } else {
//     storage.filter((item) => {
//       console.log(`item`, item)
//       if (item !== idProduct) {
//         arrayProduct.push(idProduct)
//       }
//     })
//   }

//   sessionStorage.setItem("saleProduct", JSON.stringify(arrayProduct))
// })
