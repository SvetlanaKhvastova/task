// renderDelivery()

// function renderDelivery() {
//   if (window.innerWidth <= 768) {
//     console.log(`mobileVar`)
//     mobileVar()
//   } else {
//     console.log(`desktopVar`)
//     desktopVar()
//   }
// }

// // event
// let actionDataLayer = "",
//   labelDataLayer = "",
//   eventVar = "desktop"

// if (window.innerWidth <= 768) {
//   eventVar = "mobile"
// }

// function pushDataLayer(actionDataLayer, labelDataLayer) {
//   window.dataLayer = window.dataLayer || []
//   if (labelDataLayer) {
//     console.log(actionDataLayer + " : " + labelDataLayer)
//     dataLayer.push({
//       event: "event-to-ga",
//       eventCategory: `Exp: New free trial flow ${eventVar}`,
//       eventAction: `${actionDataLayer}`,
//       eventLabel: `${labelDataLayer}`,
//     })
//   } else {
//     console.log(actionDataLayer)
//     dataLayer.push({
//       event: "event-to-ga",
//       eventCategory: `Exp: New free trial flow ${eventVar}`,
//       eventAction: `${actionDataLayer}`,
//     })
//   }
// }

// function mobileVar() {}
// function desktopVar() {}

let purchaseFlowStyle = /*html */ `
<style>


    #selectBtnReact{
        display: none;
    }

    .purchase_flow button{
        display: flex;
        width: 100%;
        background-color: #068922;
        border-radius: 3px;
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        font-size: 14px;
        line-height: 100%;
        text-transform: uppercase;
        color: #FFFFFF;
        align-items: center;
        justify-content: center;
        outline: none;
        border: none;
        height: 54px;
        max-height: 100%;
        cursor: pointer;
    }

    .purchase_flow button.now_pay_btn{
        margin-top: 16px;
        background-color: #4062B9;
    }

    .purchase_flow > div{
        position: relative;
    }

    .purchase_flow > div > .hover_block{
        background: rgba(248, 248, 248, 0.95);
        border: 1px solid #4062B9;
        border-radius: 5px;
        position: absolute;
        top: 60px;
        left: -310px;
        z-index: 22222222;
        pointer-events: none;
        transform: scale(0) rotate(270deg);
        opacity: 0;
        transition: all 0.7s;
        visibility: hidden;
    }

    .purchase_flow > div > .hover_block > p{
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        font-size: 16px;
        line-height: 100%;
        text-transform: uppercase;
        color: #4062B9;
        padding: 10px;
        border-bottom: 1px solid #4062B9;
        margin: 0;
    }

    .purchase_flow > div > .hover_block > ul{
        list-style: none;
        padding: 18px;
    }

    .purchase_flow > div > .hover_block > ul li{
        display: flex;
        align-items: center;
    }

    .purchase_flow > div > .hover_block > ul li + li{
        margin-top: 18px;
    }

    .purchase_flow > div > .hover_block > ul li p:first-child{
        font-weight: 700;
        font-size: 14px;
        line-height: 100%; 
        text-transform: uppercase;
        color: #4062B9;
        margin: 0;
    }

    .purchase_flow > div > .hover_block > ul li p:last-child{
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 13px;
        line-height: 20px;
        color: #4062B9;  
        margin: 0 0 0 18px;    
    }

    .purchase_flow > div > .hover_block > ul li p:last-child >span{
        font-weight: 700;
        font-size: 14px;
        line-height: 100%;
        text-transform: lowercase;
        position: relative;
        margin-right: 11px;
    }

    .purchase_flow > div > .hover_block > ul li p:last-child >span::after{
        position: absolute;
        content: '';
        right: -5px;
        top: -3px;
        width: 22px;
        height: 15px;
        background: url('https://conversionratestore.github.io/projects/carid/img/affirm.svg');
        background-repeat: no-repeat;
        background-size: contain;
    }

    .purchase_flow > button:hover {
        background-color: #05711c;
    }

    button.now_pay_btn:hover{
        background-color: #3157ab;
    }

    button.now_pay_btn:hover + .hover_block{
        transform: scale(1) rotate(0deg);
        opacity: 1;
        visibility: unset;
    }

</style>

`

let purchaseFlow = /*html */ `
<div class="purchase_flow">
    <!-- <button>CHOOSE OPTIONS and Add to cart</button> -->

    <div>
        <button class="now_pay_btn">order NOW PAY later</button>

        <div class="hover_block">
            <p>Order now AND pay later in equal instalments</p>
            <ul>
                <li>
                    <p>STEP 1</p>
                    <p>Choose product options</p>
                </li>
                <li>
                    <p>STEP 2</p>
                    <p>Add product to cart</p>
                </li>
                <li>
                    <p>STEP 3</p>
                    <p>Select <span>affirm</span> as a payment method at checkout</p>
                </li>
                <li>
                    <p>STEP 4</p>
                    <p>Enter your details and get a real-time loan decision</p>
                </li>
            </ul>
        </div>
    </div>
</div>
`
document.head.insertAdjacentHTML("beforeend", purchaseFlowStyle)

let startfunkDesk = setInterval(() => {
  if (document.querySelector("#product_orderform")) {
    clearInterval(startfunkDesk)
    a()

    function a() {
      document.querySelector("#prod-slct-opts-btn-holder").insertAdjacentHTML("beforeend", purchaseFlow)

      if (document.querySelector("button#addToCartButReact")) {
        document.querySelector("button#addToCartButReact").textContent = "CHOOSE OPTIONS and Add to cart"
      }

      if (document.querySelector(".purchase_flow button.now_pay_btn")) {
        document.querySelector(".purchase_flow button.now_pay_btn").addEventListener("click", function (e) {
          e.preventDefault()
          document.querySelector("button#selectBtnReact").click()
        })

        document.querySelector(".purchase_flow button.now_pay_btn").addEventListener("mouseenter", function () {
          const block = document.querySelector(".purchase_flow > div")

          if (block.getBoundingClientRect().top >= 365) {
            document.querySelector(".purchase_flow > div > .hover_block").style.top = "-214px"
          } else {
            document.querySelector(".purchase_flow > div > .hover_block").style.top = "60px"
          }
        })
      }
    }

    // observer
    // let observer = new MutationObserver(() => {
    //   if (document) {
    //     observer.disconnect()
    //     a()

    //     observer.observe(document, {
    //       childList: true,
    //       subtree: true,
    //     })
    //   }
    // })

    // observer.observe(document, {
    //   childList: true,
    //   subtree: true,
    // })
  }
}, 10)
