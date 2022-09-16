let startFunk = setInterval(() => {
  if (document.body && document.querySelector(".product-single__meta") != null) {
    clearInterval(startFunk)

    /* other variables  */
    const imgFolderUrl = "https://conversionratestore.github.io/projects/saintjavelin/img/"

    let style = /*html */ `
    <style>
      /*donation_amount_flex */
      .donation_amount_flex{
        background: #FFF9DB;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 4px 8px;
        margin-bottom: 16px;
      }
      .donation_amount_flex p{
        font-weight: 500;
        font-size: 13px;
        line-height: 18px;
        color: #3F3F3F;
        display: inline;
        margin: 0;
      }
      .donation_amount_flex p span:not(.text_absol){
        font-weight: 700;
      }
      .text_absol{
        position: relative;
      }
      .text_absol::after{
        content: '';
        position: absolute;
        width: 24px;
        height: 24px;
        background: url(${imgFolderUrl}ukrainian_flag.png) top left / auto 24px no-repeat no-repeat;
        right: -28px;
        top: 50%;
        transform: translateY(-50%);
      }
      .donation_amount_flex svg{
        margin-left: 30px;
        cursor: pointer;
      }
      .product-block.product-block--price{
        margin-bottom: 10px;
      }
      /*donation_inform */
      .donation_inform{
        margin-top: 46px;
      }
      .donation_inform .text_absol::after{
        top: -5px;
        transform: unset;
      }
      .donation_inform h3{
        font-weight: 700;
        font-size: 20px;
        line-height: 30px;
        color: #3F3F3F;
        text-transform: unset;
        letter-spacing: normal;
        margin-bottom: 16px;
      }
      ul.background_wrap{
        display: flex;
        justify-content: space-between;
        margin: 0;
        list-style: none;
        flex-wrap: wrap;
      }
      ul.background_wrap > li{
        width: 48.5%;
        background: rgba(63, 63, 63, 0.05);
        padding: 16px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0;
      }
      ul.background_wrap > li + li{
        margin: 0 0 0 16px;
      }
      ul.background_wrap > li .img_wrap{
        max-width: 102px;
        max-height: 120px;
        width: 100%;
        height: 100%;
        margin-bottom: 8px;
      }
      .img_wrap img{
        width: 100%;
        height: 100%;
      }
      ul.background_wrap > li p.title_list{
        font-size: 16px;
      }
      ul.background_wrap > li p{
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #3F3F3F;
        margin: 0;
      }
      .already_donat_list{
        color: #015BC1;
        list-style-type: disc;
        margin: 4px 0 0 20px;
      }
      .already_donat_list li {
        margin: 0;
      }
      .already_donat_list li + li{
        margin-top: 8px;
      }
      .donation_inform > div:last-child{
        margin-top: 32px;
      }
      .donation_inform > div:last-child ul.background_wrap > li{
        width: 100%;
        padding: 24px;
      }
      p.goal_text{
        font-weight: 400;
        margin-bottom: 4px;
      }
      p.goal_text strong{
        font-size: 18px;
      }
      a.link_text{
        font-style: italic;
        font-weight: 700;
        text-decoration-line: underline;
        color: #1F508B;
      }
      /* */
      /* popap_box */
    .backdrop-modal {
        position: fixed;
        overflow: hidden;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        opacity: 1;
        background: rgba(0, 0, 0, 0.5);
        transition: all 0.8s ease 0s;        
        z-index: 9005;
        }

    .backdrop-modal.is-hidden {
        opacity: 0;
        pointer-events: none;
    }

    .backdrop-modal.is-hidden form{
        transform: translateX(100%);
        transition: all 0.8s ease 0s;
    }

    .backdrop-modal form{
margin: 0;
    border-radius: 20px 20px 0px 0px;
    position: absolute;
    bottom: 0;
    right: 0;
    max-width: 383px;
    height: 100%;
    padding: 24px;
    background: #F4F4F4;
    text-align: center;
    transition: all 0.8s ease 0s;
    overflow: auto;
    }

    .backdrop-modal form svg {
        position: absolute;
        top: 20px;
        right: 20px;
        outline: none;
        cursor: pointer;
    }
    </style>
      `

    let donationAmount = /*html */ `
    <div class="donation_amount_flex">
        <p>Your purchase will <b>donate</b> <span>$</span><span>12.8</span> to support <span class="text_absol">Ukraine</span></p>
      <svg class="svg_popup" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.99967 14.6666C11.6663 14.6666 14.6663 11.6666 14.6663 7.99992C14.6663 4.33325 11.6663 1.33325 7.99967 1.33325C4.33301 1.33325 1.33301 4.33325 1.33301 7.99992C1.33301 11.6666 4.33301 14.6666 7.99967 14.6666Z"
          stroke="#A7A081"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path d="M8 5.33325V8.66659" stroke="#A7A081" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M7.99609 10.6667H8.00208" stroke="#A7A081" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
    `

    let donationInform = /*html */ `
    <div class="donation_inform">
      <div>
        <h3>All our profits go towards helping <span class="text_absol">Ukraine</span></h3>
        <ul class="background_wrap">
          <li>
            <div class="img_wrap">
              <img src="${imgFolderUrl}sj.png" alt="saintjavelin" />
            </div>
            <p class="title_list">So far we have raised <strong>over $1 million</strong> in support of <span class="text_absol">Ukraine</span></p>
          </li>
          <li>
            <div class="img_wrap">
              <img src="${imgFolderUrl}ua.png" alt="Ukrainian flag" />
            </div>
            <p class="title_list"><b>We already donated:</b></p>
            <ul class="already_donat_list">
              <li><p><strong>$350,000</strong> to buy drones for Ukraine;</p></li>
              <li><p><strong>$562,500</strong> for Humanitarian Aid to support victims of Russian invasion in Ukraine;</p></li>
              <li><p><strong>$712,500</strong> to buy IFAK medical kits and bulletproof vests for Ukraine’s Armed Forces.</p></li>
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <h3>Our new campaign aims to fundraise $1 million by Oct 30th to buy winter clothing and generators for 3,000 Ukrainian <span class="text_absol">soldiers</span></h3>
        <ul class="background_wrap">
          <li>
            <p class="goal_text">Fundraising goal by the end of October 2022: <strong>$1 million</strong></p>
            <div class="bar"></div>
            <p><a class="link_text" href="/cart">Buy this product</a> to <b>donate</b> <span>$</span><span>12.8</span> to support Ukraine</p>
          </li>
        </ul>
      </div>
    </div>    
    `

    let donatePopup = /*html */ `
    
    `

    let soupPopUp = /*html*/ `
<div class="backdrop-modal is-hidden" data-modal>
  <form>
        <div>
      <img src="" alt="" />
      <h2>All profits go towards helping Ukraine resist the invasion</h2>
      <p>Our new campaign aims to fundraise $1 million by Oct 30th to buy winter clothing and generators for 3,000 Ukrainian soldiers</p>
      <div>
        <p class="goal_text">Fundraising goal by the end of October 2022: <strong>$1 million</strong></p>
      </div>
      <button>BUY IT NOW</button>
      <ul class="">
        <li>
          <p>So far we have raised <strong>over $1 million</strong> in support of <span class="text_absol">Ukraine</span></p>
        </li>
        <li>
          <p><b>We already donated:</b></p>
          <ul class="already_donat_list">
            <li>
              <p><strong>$350,000</strong> to buy drones for Ukraine;</p>
            </li>
            <li>
              <p><strong>$562,500</strong> for Humanitarian Aid to support victims of Russian invasion in Ukraine;</p>
            </li>
            <li>
              <p><strong>$712,500</strong> to buy IFAK medical kits and bulletproof vests for Ukraine’s Armed Forces.</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </form>
</div>
`
    document.body.insertAdjacentHTML("afterbegin", soupPopUp)
    document.body.insertAdjacentHTML("afterbegin", style)
    let productBlock = document.querySelector(".product-block.product-block--price"),
      boxForDonationInform = document.querySelector(".page-content .page-width .grid [data-product-images]")

    productBlock.insertAdjacentHTML("afterend", donationAmount)
    boxForDonationInform.insertAdjacentHTML("beforeend", donationInform)

    document.querySelector(".svg_popup").addEventListener("click", () => {
      document.querySelector(".backdrop-modal").classList.remove("is-hidden")
      document.body.style.overflow = "hidden"
    })
  }
}, 100)
