let startFunc = setInterval(() => {
  if (document.querySelector(".home.page-template-default.page.page-id-106.page-home")) {
    clearInterval(startFunc)

    // click on btn try_for_free and pricing
    document.querySelector(".button.button--solid.button--large.button--hover-blue-dark.button--icon-right").addEventListener("click", (e) => {
      e.preventDefault()
      onClickPricingUrl()
    })
    document.querySelector(".nav-try a.button.button--solid.button--small").addEventListener("click", (e) => {
      e.preventDefault()
      onClickPricingUrl()
    })

    document.querySelectorAll(".nav-action a.nav-link").forEach((el) => {
      if (el.textContent.includes("Pricing")) {
        el.addEventListener("click", (e) => {
          e.preventDefault()
          onClickPricingUrl()
        })
      }
    })

    function onClickPricingUrl() {
      document.location = "https://checkout.samcart.com/products/samcart-grow-yearly-trial?_ga=2.142421298.1224594291.1644311332-453639727.1633503243"
    }

    //
  }
}, 10)

let startFunk2 = setInterval(() => {
  if (document.querySelector(".ng-scope")) {
    clearInterval(startFunk2)

    let styleBox = /* html*/ `
      <style>

          #sc51e54003-0fac-46db-80a2-881825e46c45 h1{
            max-width: 445px;
            font-family: 'Poppins', sans-serif !important;
            font-size: 41px !important;
            line-height: 50px;
            align-items: center;
            color: #FFFFFF !important;
          }

          .sc-element  .mobile-column-width #sc5d10c341-d9b7-4b33-992c-37c47d5322e2 p font{
            display: block;
            max-width: 401px;
            font-family: 'Poppins', sans-serif !important;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #FFFFFF !important;
          }

          .v2-horizontal-grid-container{
            display: none;
          }

          .steps{
            margin: 96px 0 54px;
          }

          .steps ol{
            display: flex;
            align-items: center;
            padding: 0;
            margin: 0;
          }

          .steps ol li{
            position: relative;
            list-style: none;
            display: flex;
            align-items: center;
          }

          .steps ol li + li{
            margin-left: 20px;
          }

          .steps ol li:nth-child(1)::after{
            position: absolute;
            content:'Today';
            left: 0;
            bottom: -17px;
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 8px;
            line-height: 9px;
            color: #FFFFFF;
            opacity: 0.5;
          }

          .steps ol li >span{
            width: 21px;
            height: 20px;

            border: 1px solid #FFFFFF;
            border-radius: 50px;
            display: flex;
            align-items: center;
            justify-content: center;

            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            font-size: 8px;
            line-height: 9px;
            color: #FFFFFF;
            padding: 5px 8px;
            margin-right: 20px;
          }

          .steps ol li >span.active{
            background: #FFFFFF;
            color: #286CD2;
          }

          .steps ol li:nth-child(1) .absolute_box{
            width: 145px;
          }

          .steps ol li:nth-child(2) .absolute_box{
            width: 93px;
          }

          .steps ol li:nth-child(3) .absolute_box{
            width: 175px;
          }

          .absolute_box{
            display: flex;
            flex-direction: column;
            position: absolute;
            top: -50px;
            left: 0;
            justify-content: space-between;
          }

          .absolute_box p{
            font-family: 'Poppins', sans-serif !important;
            font-weight: 400;
            font-size: 9px !important;
            line-height: 13px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: #FFFFFF;
            margin-bottom: 5px !important;
          }

          .absolute_box > span{
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 8px;
            line-height: 9px;
            color: #FFFFFF;
            opacity: 0.5;
          }

          .absolute_box p span {
            position: relative;
          }

          .absolute_box p span .hidden_text{
            position: absolute;
            opacity: 0;
            width: 230px;
            background: #F4F5F6;
            box-shadow: 0px 0.688073px 2.06422px rgba(24, 59, 86, 0.1), 0px 5.26px 20px rgba(8, 32, 125, 0.2);
            border-radius: 10px;
            padding: 15px;
            font-family: 'Poppins', sans-serif !important;
            font-weight: 300;
            font-size: 10px;
            line-height: 16px;
            color: #5A7386;
            top: 25px;
            left: -33px;
            z-index: 5;
            text-transform: none;
            transition: all 250ms ease;
          }

          .absolute_box p span .mini_box{
              position: absolute;
              opacity: 0;
              top: 17px;
              left: -14px;
              z-index: 7;
              width: 39.84px;
              height: 9.75px;
              transition: all 250ms ease;
          }

        .absolute_box p span .hint{
          cursor: pointer;
        }

        .absolute_box p span .hint:hover~.mini_box,
        .absolute_box p span .hint:hover~.hidden_text{
            opacity: 1;
            
        }



          @media (max-width: 1210px){
          .steps ol li:nth-child(1) .absolute_box{
            width: 135px;
          }

          .steps ol li:nth-child(2) .absolute_box{
            width: 85px;
          }

          .steps ol li:nth-child(3) .absolute_box{
            width: 132px;
          }

          .absolute_box{
            top: -65px;
          }

          }

          @media (max-width: 1098px){
          .steps ol li:nth-child(1) .absolute_box{
            width: 105px;
          }

          .steps ol li:nth-child(2) img{
            max-width: 100px;
          }

          .steps ol li:nth-child(2) .absolute_box{
            width: 85px;
          }

          .steps ol li:nth-child(2) .absolute_box p{
            margin-bottom: 18px !important;
          }

          .steps ol li:nth-child(2) img{
            max-width: 70px;
          }

          .steps ol li:nth-child(3) .absolute_box{
            width: 95px;
          }

          .absolute_box{
            top: -77px;
          }

          }

        /*3d card */

          .tpl-t1__col-form{
            height: 100%;
          }
          #paymentForm{
            position: relative;
            width: 100%;
            height: 100%;
          }

          .wrapper_card {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background: #FFFFFF;
          }

          .card {
            position: relative;
            perspective: 1000px;
            width: 100%;
            height: 100%;
          }
          .front, .back {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            transition: 1s;
            backface-visibility: hidden;
          }
          .front {
            background-color: #fff;
            z-index: 10;
          }
          .back {
            background-color: #BDBDBD;
            transform: rotateY(180deg);
          }
          .card:hover .front {transform: rotateY(180deg);}
          .card:hover .back {transform: rotateY(360deg);}

      </style>
      `

    let steps = /* html*/ `
    <div class="steps">
        <ol>
            <li>
                <span class="active">1</span>
                <img src="https://conversionratestore.github.io/projects/samcart/img/line1.png" alt="line">
                <div class="absolute_box">
                    <p>Start your free trial and get access to samcart</p>
                    <span>Feb / 03 / 22</span>
                </div>
            </li>
            <li>
                <span>2</span>
                <img src="https://conversionratestore.github.io/projects/samcart/img/line2.png" alt="line">
                <div class="absolute_box">
                    <p>Create your new storefront</p>
                    <span>Feb / 03 / 22</span>
                </div>
            </li>
            <li>
                <span>3</span>
                <div class="absolute_box">
                    <p>Risk-free trial. Cancel anytime during the next 14 days.
                      <span>
                        <svg class="hint" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_98_179)">
                          <path d="M5.00065 1.3254C7.30184 1.3254 9.16732 3.16917 9.16732 5.44358C9.16732 7.71799 7.30184 9.56177 5.00065 9.56177C2.69946 9.56177 0.833984 7.71799 0.833984 5.44358C0.833984 3.16917 2.69946 1.3254 5.00065 1.3254Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M5 7.09082V5.44355" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M5 3.79639H5.011" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                          </g>
                          <defs>
                          <clipPath id="clip0_98_179">
                          <rect width="10" height="9.88364" fill="white" transform="matrix(1 0 0 -1 0 10.3855)"/>
                          </clipPath>
                          </defs>
                        </svg>
                        <svg class="mini_box" width="40" height="10" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.242 0.47532C19.3515 -0.0677717 20.6497 -0.0677726 21.7592 0.475319L39.9192 9.3645H0.0820312L18.242 0.47532Z" fill="#F4F5F6"/>
                        </svg>
                        <span class="hidden_text">Our templates can help you start your new online business within days. If you decide that you are not yet ready to create your new marketplace, simply cancel you risk-free trial within 14 days and we will not charge you anything.</span>
                      </span>
                    </p>
                    <span>Mar / 05 / 22</span>
                </div>
            </li>
        </ol>
    </div>
    `

    let card = /* html*/ `
    <div class="wrapper_card">
      <div class="card">
        <div class="front"><span class="testik"></span></div>
        <div class="back"><span class="testik2"></span></div>
      </div>
    </div>    
    `

    document.head.insertAdjacentHTML("beforeend", styleBox)

    document.querySelector("#sc51e54003-0fac-46db-80a2-881825e46c45 h1 strong").textContent = "Create your new business today!"
    document.querySelector(".sc-element  .mobile-column-width #sc5d10c341-d9b7-4b33-992c-37c47d5322e2 p font").textContent =
      "Create your account to start your 14-day trial and set up your new storefront."

    document.querySelector(".sc-element  .mobile-column-width #sc5d10c341-d9b7-4b33-992c-37c47d5322e2 p font").insertAdjacentHTML("afterend", steps)

    document.querySelector(".hint").addEventListener("mouseover", () => {
      console.log(`first`)
    })

    // 3d card
    document.querySelector("#paymentForm")?.insertAdjacentHTML("afterbegin", card)
    document.querySelector(".testik")?.after(document.querySelector(".mb-24.text-uppercase"))
    document.querySelector(".front .mb-24.text-uppercase")?.after(document.querySelectorAll(".border-bottom.mb-16")[0])

    document.querySelector(".testik2").after(document.querySelector(".my-32.text-uppercase"))
    document.querySelector(".back .my-32.text-uppercase")?.after(document.querySelector("#payments"))
    document.querySelector(".back #payments")?.after(document.querySelector("#order-summary-widget"))
    document.querySelector(".back #order-summary-widget")?.after(document.querySelector("#placeOrder"))
    document.querySelector(".back #placeOrder")?.after(document.querySelector(".g-recaptcha-container"))
    document.querySelector(".back #g-recaptcha-container")?.after(document.querySelector(".tpl-t1__terms.mx-auto.text-center"))
  }
}, 10)
