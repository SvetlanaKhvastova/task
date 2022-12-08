let startFunk = setInterval(() => {
  if (document.body && document.querySelector(".product-single__meta") != null) {
    clearInterval(startFunk)


    let scriptPopper = document.createElement("script")
    scriptPopper.src = "https://unpkg.com/popper.js@1"
    scriptPopper.async = false
    document.body.appendChild(scriptPopper)

    let scriptTippy = document.createElement("script")
    scriptTippy.src = "https://unpkg.com/tippy.js@5"
    scriptTippy.async = false
    document.body.appendChild(scriptTippy)

    /* other variables  */
    const imgFolderUrl = "https://conversionratestore.github.io/projects/saintjavelin/img/"

    let eventVar = "desktop"

    if (window.innerWidth <= 768) {
      eventVar = "mobile"
    }

    function pushDataLayer(actionDataLayer, labelDataLayer) {
      window.dataLayer = window.dataLayer || []
      if (labelDataLayer) {
        console.log(actionDataLayer + " : " + labelDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp — New design pdp' ${eventVar}`,
          eventAction: `${actionDataLayer}`,
          eventLabel: `${labelDataLayer}`,
        })
      } else {
        console.log(actionDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp — New design pdp' ${eventVar}`,
          eventAction: `${actionDataLayer}`,
        })
      }
    }


    let style = /*html */ `
    <style>
      /*donation_amount_flex */
.donation_amount_flex {
  background: #fff9db;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 8px;
  margin-bottom: 16px;
  cursor: pointer;
}
.donation_amount_flex p {
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #3f3f3f;
  display: inline;
  letter-spacing: normal;
  margin: 0;
}
.text_absol {
  position: relative;
  margin-right: 25px;
  display: inline-block;
}
.text_absol::after {
  content: "";
  position: absolute;
  width: 24px;
  height: 24px;
  background: url(${imgFolderUrl}ukrainian_flag.png) top left / auto 24px no-repeat no-repeat;
  right: -28px;
  top: 50%;
  transform: translateY(-50%);
}
/*donation_inform */
.donation_inform {
  margin-top: 46px;
}
.donation_inform .text_absol::after {
  top: 11px;
}
.donation_inform ul.background_wrap .text_absol::after{
  top: 2px;
  width: 17px;
  height: 17px;
  right: -22px;
  transform: unset;
  background: url(${imgFolderUrl}ukrainian_flag.png) top left / auto 17px no-repeat no-repeat;
}
.donation_inform h3 {
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #3f3f3f;
  text-transform: unset;
  letter-spacing: normal;
  margin-bottom: 16px;
}
ul.background_wrap {
  display: flex;
  justify-content: space-between;
  margin: 0;
  list-style: none;
  flex-wrap: wrap;
}
ul.background_wrap > li {
  width: 48.5%;
  background: rgba(63, 63, 63, 0.05);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
}
ul.background_wrap > li + li {
  margin: 0 0 0 16px;
}
ul.background_wrap > li .img_wrap {
  max-width: 102px;
  max-height: 120px;
  width: 100%;
  height: 100%;
  margin-bottom: 8px;
}
.img_wrap img {
  width: 100%;
  height: 100%;
}
ul.background_wrap > li p.title_list {
  font-size: 16px;
}
ul.background_wrap > li p {
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #3f3f3f;
  margin: 0;
}
.already_donat_list {
  color: #015bc1;
  list-style-type: disc;
  margin: 4px 0 0 20px;
}
.already_donat_list li {
  margin: 0;
}
.already_donat_list li + li {
  margin-top: 8px;
}
.donation_inform > div:last-child {
  margin-top: 32px;
}
ul.background_wrap > li p.goal_text {
  font-weight: 400;
  margin-bottom: 4px;
}
p.goal_text strong {
  font-size: 18px;
}
a.link_text {
  font-style: italic;
  font-weight: 700;
  text-decoration-line: underline;
  color: #1f508b;
}
/* */
/* popap_box */
.backdrop_modal {
  position: fixed !important;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  opacity: 1;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease 0s;
  z-index: 9005;
  display: block;
  max-height: 100%;
}
.backdrop_modal.is_hidden {
  opacity: 0;
  pointer-events: none;
}
.backdrop_modal.is_hidden .container_popup {
  transform: translateX(100%);
  transition: all 0.8s ease 0s;
}
.backdrop_modal .container_popup {
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
  max-width: 383px;
  height: 100%;
  padding: 48px 24px 24px;
  margin: 0;
  background: #fdfdfd;
  transition: all 0.5s ease 0s;
  overflow: auto;
  max-height: 100vh;
}
.backdrop_modal .container_popup > svg {
  position: absolute;
  top: 24px;
  right: 24px;
  outline: none;
  cursor: pointer;
}
/*content_popup */
.content_popup > img {
  max-width: 40px;
  max-height: 40px;
  display: block;
}
.content_popup > h2 {
  margin: 0 0 8px;
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  color: #3f3f3f;
}
.content_popup > p {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #3f3f3f;
  margin: 0 0 16px;
}
.by_it_now_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1f508b;
  border: none;
  outline: none;
  height: 50px;
  width: 100%;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 3px;
  color: #ffffff;
  margin: 16px 0 24px;
  cursor: pointer;
}
ul.main_popup_list {
  background: rgba(63, 63, 63, 0.05);
  padding: 16px;
  margin: 0;
  color: #015bc1;
  display: flex;
  flex-direction: column;
}
ul.main_popup_list > li {
  margin: 0 0 0 16px;
}
ul.main_popup_list > li + li {
  margin-top: 16px;
}
ul.main_popup_list > li p {
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #3f3f3f;
  margin: 0;
}
ul.main_popup_list > li ul.already_donat_list {
  color: #000000;
  list-style-type: disc;
  margin: 4px 0 0 20px;
  font-size: 13px;
}
ul.main_popup_list .already_donat_list li + li {
  margin: 0;
}
.content_popup p.goal_text {
  font-size: 14px;
  line-height: 24px;
  color: #3f3f3f;
  margin: 0;
}
.content_popup .text_absol::after {
  width: 16px;
  height: 16px;
  background: url(https://conversionratestore.github.io/projects/saintjavelin/img/ukrainian_flag.png) top left / auto 16px no-repeat no-repeat;
  right: -20px;
  top: 1px;
  transform: unset;
}
/*size_guide */
.size_guide > h2 {
  font-weight: 700;
  font-size: 22px;
  line-height: 25px;
  letter-spacing: 2.2px;
  text-transform: uppercase;
  color: #3f3f3f;
  margin: 0;
}
.size_guide > p {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #3f3f3f;
  margin: 16px 0;
}
.accardion_size {
  margin: 0;
  list-style: none;
}
.accardion_lists table p {
  margin: 0;
  font-size: 14px;
  line-height: 25.5px;
}
.accardion_size table {
  margin: 20px 0 0;
}
.accardion_size table td,
.accardion_size table th {
  padding: 6px 8px;
}
.accardion_size table td:first-child {
  width: 90px;
}
ul.composition {
  list-style-type: disc;
  margin: 0 0 0 40px;
}
ul.composition li {
  font-size: 14px;
  line-height: 24px;
  margin: 0;
}
ul.composition li + li {
  margin-top: 5px;
}
.accardion_lists {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
}
.active_block {
  max-height: fit-content;
  opacity: 1;
  margin: 10px 0 0;
}
.accardion_size > li {
  margin: 0;
}
.accardion_size > li + li {
  margin-top: 20px;
}
.accardion_link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.accardion_link h3 {
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;
  color: #3f3f3f;
  margin: 0;
}
.accardion_link span {
  position: relative;
  width: 24px;
  height: 24px;
  display: inline-flex;
  transition: all 0.5s ease 0s;
}
.accardion_link span::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background: url(https://conversionratestore.github.io/projects/saintjavelin/img/expand_more.svg) no-repeat center center;
  top: 0;
  right: 0;
  background-size: contain;
  transition: all 0.5s ease 0s;
}
.accardion_link.active span::before {
  transform: rotate(180deg);
}
/* */
.mistake {
  position: absolute;
  top: 50%;
  left: 91px;
  transform: translateY(-50%);
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.4px;
  color: #d71d1d;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.mistake.patch_var{
  left: 132px;
}
.mistake.type_var{
  left: 88px;
}
.mistake.size_var {
  left: 82px;
}
.mistake.is_hidden,
.mistake.is_visited {
  opacity: 0;
}
.mistake > svg {
  margin-right: 5px;
}
.size_guide_var {
  font-weight: 400;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: -0.4px;
  text-decoration-line: underline;
  color: #3f3f3f;
  cursor: pointer;
}
.buy_it_now {
  background: #064f90;
  margin-top: 10px;
}
.buy_it_now:hover {
  background: #064f90 !important;
}
.add_to_cart {
  padding: 10px 25px;
}
/*range-wrapper */
.range-wrapper {
  width: 100%;
  height: 28px;
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
}
.range-line {
  background: rgb(31 80 139 / 10%);
  width: 100%;
  position: relative;
  height: 28px;
  overflow: hidden;
}
.range-donated {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: #fad41a;
}
.total-raised {
  position: relative;
  display: block;
}
.total-raised::before {
  position: absolute;
  content: attr(data-price);
  right: -15px;
  top: 2px;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: #3f3f3f;
}
.range-wrapper:before,
.range-wrapper:after {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 28px;
  background: #fad41a;
  width: 8px;
}
.range-wrapper:before {
  left: 0;
}
.range-wrapper:after {
  background: rgb(31 80 139 / 0%);
  right: 0;
}
.range-wrapper.active:after {
  background: #fad41a;
}
.range-wrapper .sum,
.step.active[data-price]:before {
  font-family: "Novarese-Bold", sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  color: #000000;
  position: absolute;
  text-align: center;
  width: 101px;
  right: 8px;
  transform: translateX(50%);
  bottom: calc(100% + 7px);
}
.range-wrapper .sum {
  display: none;
}
.step.active[data-price]:before {
  content: attr(data-price);
}
.steps .step.step-small.active[data-price]:before {
  bottom: calc(100% + 47px);
}
.step.active[data-price]:after {
  content: "NOW";
  left: 50%;
  transform: translateX(-50%);
  top: calc(100% + 9px);
  position: absolute;
  font-family: "Novarese-Medium", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #000000;
  white-space: nowrap;
}
.steps {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  padding: 0 8px;
  z-index: 1;
}
.steps .step {
  width: 1px;
  opacity: 0.2;
  background: #000;
  position: relative;
}
.steps:after {
  content: "30 NOV";
  right: 8px;
  transform: translateX(50%);
  position: absolute;
  top: calc(100% + 9px);
  font-family: "Novarese-Medium", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #000000;
  white-space: nowrap;
  display: none;
}
.steps .step.active {
  opacity: 0;
}
.steps .step-small {
  height: 8px;
  opacity: 0;
  display: none;
}
.steps .step-big {
  height: 28px;
  opacity: 0;
}
/*flex*/
.flex {
  display: flex;
}
.items-end {
  align-items: flex-end;
}
.justify-between {
  justify-content: space-between;
}
.content_popup .range-wrapper {
  margin: 4px 0 16px;
}
.content_popup .total-raised::before {
  right: -50px;
}
.donation_inform.is_full .total-raised::before {
  right: 5px;
}
.container_popup.is_full .content_popup .total-raised::before {
  right: -5px;
}
@media (max-width: 1020px) {
  ul.background_wrap > li {
    width: 47.5%;
  }
  .total-raised::before {
    right: -35px;
  }
}
@media (max-width: 768px) {
  .range-wrapper {
    margin-bottom: 16px;
  }
  .donation_amount_flex svg {
    width: 31px;
    height: 31px;
  }
  .total-raised::before {
    right: -64px;
  }
  .backdrop_modal .container_popup {
    max-width: 358px;
  }
  .backdrop_modal .container_popup > svg {
    top: 16px;
    right: 16px;
  }
  .content_popup > h2 {
    margin: 4px 0 8px;
  }
  .content_popup p.goal_text strong {
    font-size: 14px;
  }
  ul.main_popup_list > li {
    margin: 0 0 0 26px;
  }
  /* */
  .donation_inform h3 {
    margin-bottom: 8px;
  }
  ul.background_wrap > li {
    width: 100%;
  }
  ul.background_wrap > li + li {
    margin: 16px 0 0;
  }
  ul.background_wrap > li .img_wrap {
    max-width: 68px;
    max-height: 80px;
    margin-bottom: 4px;
  }
  .already_donat_list {
    margin: 4px 0 0 16px;
  }
  .donation_inform > div:last-child h3 {
    margin-bottom: 16px;
  }
  .donation_inform {
    margin-bottom: 32px;
  }
  /* */
  .size_guide > h2 {
    margin: 0;
  }
  .accardion_size > li + li {
    margin-top: 16px;
  }
  .product-single__prices > :last-child {
    font-size: 18px;
    line-height: 24px;
  }
  .sales-point .icon-and-text {
    justify-content: start;
  }
}
@media (max-width: 320px) {
  .total-raised::before {
    font-size: 12px;
    right: -50px;
  }
}
.mistake {
  font-size: 10px;
}
.donation_inform h3 {
  font-size: 17px;
}
ul.background_wrap > li p.title_list {
  font-size: 14px;
}
ul.background_wrap > li p {
  font-size: 13px;
}
.content_popup > h2 {
  font-size: 20px;
}
.accardion_lists table p {
  font-size: 10px;
}

@media (max-width: 280px) {
  .mistake {
    left: 64px;
  }
  .mistake.size_var {
    left: 57px;
  }
  .donation_inform h3 {
    font-size: 15px;
  }
  ul.background_wrap > li p.title_list {
    font-size: 11px;
  }
  ul.background_wrap > li p {
    font-size: 10px;
  }
  p.goal_text strong {
    font-size: 12px;
  }
  .accardion_lists table p {
    font-size: 8px;
  }
}


    </style>
      `

    let donationAmount = /*html */ `
    <div class="donation_amount_flex">
        <p>Your purchase will help raise money for <span class="text_absol">Ukraine</span></p>
        <svg class="svg_popup" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99984 1.33332C4.33317 1.33332 1.33317 4.33332 1.33317 7.99999C1.33317 11.6667 4.33317 14.6667 7.99984 14.6667C11.6665 14.6667 14.6665 11.6667 14.6665 7.99999C14.6665 4.33332 11.6665 1.33332 7.99984 1.33332Z" stroke="#3F3F3F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 10.6667L8 7.33332" stroke="#3F3F3F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.00391 5.33334L7.99792 5.33334" stroke="#3F3F3F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
            <p class="title_list">So far we've raised <strong>over $1 million</strong> in support of <span class="text_absol">Ukraine</span></p>
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
    </div>    
    `

    let banerHelp = /*html */ `
      <div class="baner_help">
        <ul class="background_wrap">
          <li data-tolltip data-title="Our goal is to fundraise $1 million by Nov 30th to buy winter clothing and generators for 3,000 Ukrainian soldiers">
            <h2 >Ukraine needs your help</h2>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.9165 8.25002L10.0832 8.25002L10.0832 6.41669L11.9165 6.41669L11.9165 8.25002ZM11.9165 15.5834L10.0832 15.5834L10.0832 10.0834L11.9165 10.0834L11.9165 15.5834ZM11.009 20.1667C16.069 20.1667 20.1665 16.06 20.1665 11C20.1665 5.94002 16.069 1.83335 11.009 1.83335C5.93984 1.83335 1.83317 5.94002 1.83317 11C1.83317 16.06 5.93984 20.1667 11.009 20.1667ZM10.9998 3.66669C15.0515 3.66669 18.3332 6.94835 18.3332 11C18.3332 15.0517 15.0515 18.3334 10.9998 18.3334C6.94817 18.3334 3.6665 15.0517 3.6665 11C3.66651 6.94835 6.94817 3.66669 10.9998 3.66669Z"
                fill="#3F3F3F" />
            </svg>
          </li>
          <li>
            <p class="goal_text">Fundraising goal by the end of November 2022: <strong>$1 million</strong></p>
            <div class="range-wrapper">
                  <div class="range-line">
                    <div class="range-donated" style="width:0%">
                        <span class="total-raised"></span>
                    </div>
                  </div>
                  <div class="steps flex justify-between items-end"></div>
                  <p class="sum"></p>
            </div>
          </li>
        </ul>
      </div>
    `

    let donatePopup = /*html */ `
  <div class="backdrop_modal is_hidden" data-modal>
    <div class="container_popup">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_303_473)">
          <path d="M20 6.41L18.59 5L13 10.59L7.41 5L6 6.41L11.59 12L6 17.59L7.41 19L13 13.41L18.59 19L20 17.59L14.41 12L20 6.41Z" fill="#989898" />
        </g>
        <defs>
          <clipPath id="clip0_303_473">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>
  `

    let contentpopup = /*html */ `
      <div class="content_popup">
          <img src="${imgFolderUrl}ukrainian_flag.png" alt="ukrainian flag" />
          <h2>All profits go towards helping Ukraine resist the invasion</h2>
          <p>Our new campaign aims to fundraise $1 million by Nov 30th to buy winter clothing and generators for 3,000 Ukrainian soldiers</p>
          <div>
            <p class="goal_text">
              Fundraising goal by the end of November 2022: <br />
              <strong>$1 million</strong>
            </p>
          </div>
          <div class="bar"></div>
          <button class="by_it_now_btn">BUY IT NOW</button>
          <ul class="main_popup_list">
            <li>
              <p>So far we've raised <strong>over $1 million</strong> in support of <span class="text_absol">Ukraine</span></p>
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
    `


    document.body.insertAdjacentHTML("afterbegin", donatePopup)
    document.body.insertAdjacentHTML("afterbegin", style)

    document.querySelector('#shopify-section-header').insertAdjacentHTML("afterend", banerHelp)

    let priceBlock = document.querySelector(".product-block.product-block--price"),
      imgBlock = document.querySelector(".product-block .aos-animate"),
      boxForDonationInform = document.querySelector(".page-content .page-width .grid [data-product-images]"),
      body = document.body,
      overlay = document.querySelector(".backdrop_modal")

    priceBlock.insertAdjacentHTML("afterend", donationAmount)

    if (innerWidth <= 768) {
      imgBlock.closest(".product-block").insertAdjacentHTML("beforebegin", donationInform)
    } else {
      boxForDonationInform.insertAdjacentHTML("beforeend", donationInform)
    }

    document.querySelector(".donation_amount_flex")?.addEventListener("click", () => {
      pushDataLayer("Сlick on donate to support Ukraine")
      onOpenPopup(contentpopup)
      let clonedNodeBar = document.querySelector(".range-wrapper").cloneNode(true)

      if (clonedNodeBar) {
        if (!document.querySelector(".bar .range-wrapper")) {
          document.querySelector(".bar")?.appendChild(clonedNodeBar)
        }
      }

      if (document.querySelector(".backdrop_modal .content_popup")) {
        document.querySelector(".backdrop_modal .content_popup .by_it_now_btn")?.addEventListener("click", (e) => {
          e.preventDefault()

          pushDataLayer("Сlick on Buy it now button", "Pop up All profits go towards helping Ukraine resist the invasion")

        })
      }
      if (innerWidth <= 768) {
        if (document.querySelector(".content_popup p.goal_text br")) {
          document.querySelector(".content_popup p.goal_text br").remove()
        }
      }
    })


    // click on btn close popup
    document.querySelector(".backdrop_modal .container_popup > svg")?.addEventListener("click", (e) => {
      if (e.currentTarget.nextElementSibling.classList.contains("size_guide")) {
        pushDataLayer("Сlick on close", "Pop up Size guide")
      } else {
        pushDataLayer("Сlick on btn close", "Pop up All profits go towards helping Ukraine resist the invasion")
      }
      onClosePopup()
    })

    // click on overlay popup
    overlay.addEventListener("click", (e) => {
      if (e.target.matches(".backdrop_modal")) {
        if (e.target.querySelector(".size_guide")) {
          pushDataLayer("Сlick on overlay close", "Pop up Size guide")
        } else {
          pushDataLayer("Сlick on overlay close", "Pop up All profits go towards helping Ukraine resist the invasion")
        }
        onClosePopup()
      }
    })

    function onOpenPopup(block) {
      overlay.classList.remove("is_hidden")
      body.style.overflow = "hidden"
      body.style.display = "block"
      body.style.height = "100%"

      document.querySelector("html").style.overflow = "hidden"
      document.querySelector("html").style.display = "block"
      document.querySelector("html").style.height = "max-content"

      document.querySelector(".container_popup").insertAdjacentHTML("beforeend", block)
    }

    function onClosePopup() {
      overlay.classList.add("is_hidden")
      body.style.overflow = "auto"
      body.style.display = "initial"
      document.querySelector("html").style.overflow = "auto"
      document.querySelector("html").style.display = "initial"

      setTimeout(() => {
        document.querySelector(".content_popup")?.remove()
      }, 1000)
    }

    let tippyRun = setInterval(() => {
      if (typeof tippy === "function" && document.querySelector("[data-tolltip]")) {
        clearInterval(tippyRun)
        document.querySelectorAll("[data-title]").forEach((el) => {
          if (innerWidth <= 768) {
            tippy(el, {
              content: el.getAttribute("data-title"),
              trigger: "click",
              placement: "top",
              appendTo: function () {
                return el.parentElement
              },
              onTrigger(inst, e) {
                e.stopPropagation()
                e.preventDefault()
                pushDataLayer(`Clicks on hints ''`)
              },
              onShown(e) {
                pushDataLayer(`Shown ''`)
              },
            })
          } else {
            tippy(el, {
              content: el.getAttribute("data-title"),
              placement: "top-end",
              // trigger: "click",
              appendTo: function () {
                return el.parentElement
              },
              onTrigger(e) {
                pushDataLayer(`Hover on hints ''`)
              },
              onShown(e) {
                pushDataLayer(`Shown ''`)
              },
            })
          }
        })
      }
    }, 500)

    //
    fetch("https://conversionrate.top/api/saint-javelin/total-donorbox", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)

        // add on page
        // document.body.insertAdjacentHTML("afterbegin", style)
        // document.body.insertAdjacentHTML("afterbegin", progressBarHTML)

        let donated = +data[0]["total_raised"],
          sum = +data[0]["goal_amt"],
          rangeDonated = (donated * 100) / sum,
          wand = (rangeDonated * 90) / 100,
          indexWand = donated < 15000 ? 0 : Math.floor(wand)

        let step = ``

        for (let i = 0; i < 91; i++) {
          step += `<div class="step ${i <= indexWand ? "active" : ""} ${i % 9 ? "step-small" : "step-big"}"></div>`
        }

        document.querySelectorAll(".steps").forEach((el) => {
          el.innerHTML = step
        })
        document.querySelectorAll(".range-donated").forEach((el) => {
          el.style = `width: ${donated <= 10000 ? 0 : donated < 15000 ? 0.5 : rangeDonated}%`
          if (el.style.width >= "80%") {
            console.log(el.style.width)
            if (document.querySelector(".container_popup")) {
              document.querySelector(".container_popup").classList.add("is_full")
              document.querySelector(".donation_inform").classList.add("is_full")
            }
          }
        })
        document.querySelectorAll(".sum").forEach((el) => {
          el.innerHTML = "$" + new Intl.NumberFormat("ru-RU").format(sum.toFixed(0))
        })

        let stepActive = document.querySelectorAll(".step.active")
        let totalDonate = document.querySelectorAll(".total-raised")
        if (donated > (sum * 88) / 100) {
          stepActive[79].setAttribute("data-price", new Intl.NumberFormat("ru-RU").format(rangeDonated) + "%")
          totalDonate.forEach((el) => {
            el.setAttribute("data-price", new Intl.NumberFormat("ru-RU").format(rangeDonated) + "%")
          })
        } else {
          stepActive[indexWand].setAttribute("data-price", new Intl.NumberFormat("ru-RU").format(rangeDonated) + "%")
          totalDonate.forEach((el) => {
            el.setAttribute("data-price", new Intl.NumberFormat("ru-RU").format(rangeDonated) + "%")
          })
        }
        if (donated >= sum) {
          document.querySelectorAll(".range-wrapper").forEach((el) => {
            el.classList.add("active")
          })
        }
      })
      .catch((error) => {
        console.error("Error:", error)
      })

    pushDataLayer("loaded")
    clarity("set", "new_design_pdp", "variant_1")
  }
}, 100)
