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
    .backdrop_modal {
        position: fixed;
        overflow: hidden;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        opacity: 1;
        background: rgba(0, 0, 0, 0.5);
        transition: all 0.5s ease 0s;        
        z-index: 9005;
        }

    .backdrop_modal.is_hidden {
        opacity: 0;
        pointer-events: none;
    }

    .backdrop_modal.is_hidden .container_popup{
        transform: translateX(100%);
        transition: all 0.8s ease 0s;
    }

    .backdrop_modal .container_popup{
      position: absolute;
      bottom: 0;
      right: 0;
      max-width: 383px;
      height: 100%;
      padding: 48px 24px 24px;
      margin: 0;
      background: #FDFDFD;
      transition: all 0.5s ease 0s;
      overflow: auto;
    }

    .backdrop_modal .container_popup > svg {
        position: absolute;
        top: 24px;
        right: 24px;
        outline: none;
        cursor: pointer;
    }
    /*content_popup */
    .content_popup > img{
      max-width: 40px;
      max-height: 40px;
      display: block;
    }
    .content_popup > h2{
      margin: 0 0 8px;
      font-weight: 700;
      font-size: 24px;
      line-height: 150%;
      color: #3F3F3F;
    }
    .content_popup > p{
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #3F3F3F;
      margin: 0 0 16px;
    }
    .by_it_now_btn{
      display: flex;
      align-items: center;
      justify-content: center;
      background: #1F508B;
      border: none;
      outline: none;
      height: 50px;
      width: 100%;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 3px;
      color: #FFFFFF;
      margin: 16px 0 24px;
      cursor: pointer;
    }
    ul.main_popup_list{
      background: rgba(63, 63, 63, 0.05);
      padding: 16px;
      margin: 0;
      color: #015BC1;
      display: flex;
      flex-direction: column;
    }
    ul.main_popup_list > li{
      margin: 0 0 0 16px;
    }
    ul.main_popup_list > li + li{
      margin-top: 16px;
    }
    ul.main_popup_list > li p{
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: #3F3F3F;
      margin: 0;
    }
    ul.main_popup_list > li ul.already_donat_list{
      color: #000000;
      list-style-type: disc;
      margin: 4px 0 0 20px;
      font-size: 13px;
    }
    ul.main_popup_list .already_donat_list li + li{
      margin: 0;
    }
    .content_popup p.goal_text{
      font-size: 14px;
      line-height: 24px;
      color: #3F3F3F;
      margin: 0;
    }
    .content_popup .text_absol::after {
      width: 16px;
      height: 16px;
      background: url(https://conversionratestore.github.io/projects/saintjavelin/img/ukrainian_flag.png) top left / auto 16px no-repeat no-repeat;
      right: -20px;
      top: -2px;
      transform: unset;
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
          <p>Our new campaign aims to fundraise $1 million by Oct 30th to buy winter clothing and generators for 3,000 Ukrainian soldiers</p>
          <div>
            <p class="goal_text">
              Fundraising goal by the end of October 2022: <br />
              <strong>$1 million</strong>
            </p>
          </div>
          <button class="by_it_now_btn">BUY IT NOW</button>
          <ul class="main_popup_list">
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
    `
    document.body.insertAdjacentHTML("afterbegin", donatePopup)
    document.body.insertAdjacentHTML("afterbegin", style)

    let productBlock = document.querySelector(".product-block.product-block--price"),
      boxForDonationInform = document.querySelector(".page-content .page-width .grid [data-product-images]"),
      price = productBlock.querySelector(".product__price").textContent

    productBlock.insertAdjacentHTML("afterend", donationAmount)
    boxForDonationInform.insertAdjacentHTML("beforeend", donationInform)

    document.querySelector(".svg_popup").addEventListener("click", () => {
      document.querySelector(".backdrop_modal").classList.remove("is_hidden")
      document.querySelector(".container_popup").insertAdjacentHTML("beforeend", contentpopup)
      document.body.style.overflow = "hidden"
    })

    document.querySelector(".backdrop_modal .container_popup > svg").addEventListener("click", () => {
      document.querySelector(".backdrop_modal").classList.add("is_hidden")
      document.body.style.overflow = "auto"
      setTimeout(() => {
        document.querySelector(".content_popup").remove()
      }, 1000)
    })

    getPrice(price)

    function getPrice(priceItem) {
      let newPrice = 0
      let value

      if (priceItem.includes("€")) {
        newPrice = +priceItem.split("€")[1].replace(/,/g, "") * 0.4
        value = "€"
        console.log(`${value}${newPrice.toFixed(0)}`)
      }
      if (priceItem.includes("؋")) {
        newPrice = +priceItem.split("؋")[0].replace(/,/g, "") * 0.4
        value = "؋"
        console.log(`${newPrice.toFixed(0)}${value}`)
      }
      if (priceItem.includes("$")) {
        newPrice = +priceItem.split("$")[1].replace(/,/g, "") * 0.4
        value = "$"
        console.log(`${value}${newPrice}`)
      }
      if (priceItem.includes("YER")) {
        newPrice = +priceItem.split(" YER")[0].replace(/,/g, "") * 0.4
        value = "YER"
        console.log(`${newPrice.toFixed(0)}${value}`)
      }
      if (priceItem.includes("dh")) {
        newPrice = +priceItem.split(" dh")[0].replace(/,/g, "") * 0.4
        value = "dh"
        console.log(`${newPrice.toFixed(0)}${value}`)
      }
      if (priceItem.includes("DA")) {
        newPrice = +priceItem.split("DA ")[1].replace(/,/g, "") * 0.4
        value = "DA"
        console.log(`${value}${newPrice}`)
      }
      if (priceItem.includes("XPF")) {
        item = priceItem.split(" XPF")
        newPrice = +item[0].split(" ").join("").replace(/,/g, "") * 0.4
        value = "XPF"
        console.log(`${newPrice.toFixed(0)}${value}`)
      }

      if (priceItem.includes("L")) {
        priceItem.split("L")
        console.log(priceItem)
      }
      if (priceItem.includes("د.ج")) {
        priceItem.split("د.ج")
        console.log(priceItem)
      }

      if (priceItem.includes("դր.")) {
        priceItem.split("դր.")
        console.log(priceItem)
      }
      if (priceItem.includes("£")) {
        priceItem.split("£")
        console.log(priceItem)
      }
      if (priceItem.includes("₼")) {
        priceItem.split("₼")
        console.log(priceItem)
      }
      if (priceItem.includes("৳")) {
        priceItem.split("৳")
        console.log(priceItem)
      }
      if (priceItem.includes("Fr")) {
        priceItem.split("Fr")
        console.log(priceItem)
      }
      if (priceItem.includes("Bs.")) {
        priceItem.split("Bs.")
        console.log(priceItem)
      }
      if (priceItem.includes("КМ")) {
        priceItem.split("КМ")
        console.log(priceItem)
      }
      if (priceItem.includes("лв.")) {
        priceItem.split("лв.")
        console.log(priceItem)
      }
      if (priceItem.includes("៛")) {
        priceItem.split("៛")
        console.log(priceItem)
      }
      if (priceItem.includes("kn")) {
        priceItem.split("kn")
        console.log(priceItem)
      }
      if (priceItem.includes("Kč")) {
        priceItem.split("Kč")
        console.log(priceItem)
      }
      if (priceItem.includes("Fdj")) {
        priceItem.split("Fdj")
        console.log(priceItem)
      }
      if (priceItem.includes("ج.م")) {
        priceItem.split("ج.م")
        console.log(priceItem)
      }
      if (priceItem.includes("Br")) {
        priceItem.split("Br")
        console.log(priceItem)
      }

      if (priceItem.includes("kr.")) {
        priceItem.split("kr.")
        console.log(priceItem)
      }
      if (priceItem.includes("Q")) {
        priceItem.split("Q")
        console.log(priceItem)
      }
      if (priceItem.includes("₹")) {
        priceItem.split("₹")
        console.log(priceItem)
      }
      if (priceItem.includes("Rp")) {
        priceItem.split("Rp")
        console.log(priceItem)
      }
      if (priceItem.includes("¥")) {
        priceItem.split("¥")
        console.log(priceItem)
      }
      if (priceItem.includes("〒")) {
        priceItem.split("〒")
        console.log(priceItem)
      }
      if (priceItem.includes("KSh")) {
        priceItem.split("KSh")
        console.log(priceItem)
      }
      if (priceItem.includes("som")) {
        priceItem.split("som")
        console.log(priceItem)
      }
      if (priceItem.includes("₭")) {
        priceItem.split("₭")
        console.log(priceItem)
      }
      if (priceItem.includes("ل.ل")) {
        priceItem.split("ل.ل")
        console.log(priceItem)
      }

      if (priceItem.includes("MK")) {
        priceItem.split("MK")
        console.log(priceItem)
      }
      if (priceItem.includes("RM")) {
        priceItem.split("RM")
        console.log(priceItem)
      }
      if (priceItem.includes("MVR")) {
        priceItem.split("MVR")
        console.log(priceItem)
      }
      if (priceItem.includes("₮")) {
        priceItem.split("₮")
        console.log(priceItem)
      }
      if (priceItem.includes("د.م.")) {
        priceItem.split("د.م.")
        console.log(priceItem)
      }
      if (priceItem.includes("C$")) {
        priceItem.split("C$")
        console.log(priceItem)
      }
      if (priceItem.includes("₦")) {
        priceItem.split("₦")
        console.log(priceItem)
      }
      if (priceItem.includes("ден")) {
        priceItem.split("ден")
        console.log(priceItem)
      }
      if (priceItem.includes("₪")) {
        priceItem.split("₪")
        console.log(priceItem)
      }
      if (priceItem.includes("K")) {
        priceItem.split("K")
        console.log(priceItem)
      }
      if (priceItem.includes("₲")) {
        priceItem.split("₲")
        console.log(priceItem)
      }
      if (priceItem.includes("S/.")) {
        priceItem.split("S/.")
        console.log(priceItem)
      }
      if (priceItem.includes("₱")) {
        priceItem.split("₱")
        console.log(priceItem)
      }
      if (priceItem.includes("zł")) {
        priceItem.split("zł")
        console.log(priceItem)
      }
      if (priceItem.includes("ر.ق")) {
        priceItem.split("ر.ق")
        console.log(priceItem)
      }
      if (priceItem.includes("Lei")) {
        priceItem.split("Lei")
        console.log(priceItem)
      }
      if (priceItem.includes("FRw")) {
        priceItem.split("FRw")
        console.log(priceItem)
      }
      if (priceItem.includes("T")) {
        priceItem.split("T")
        console.log(priceItem)
      }
      if (priceItem.includes("Db")) {
        priceItem.split("Db")
        console.log(priceItem)
      }
      if (priceItem.includes("ر.س")) {
        priceItem.split("ر.س")
        console.log(priceItem)
      }
      if (priceItem.includes("РСД")) {
        priceItem.split("РСД")
        console.log(priceItem)
      }
      if (priceItem.includes("Le")) {
        priceItem.split("Le")
        console.log(priceItem)
      }
      if (priceItem.includes("ƒ")) {
        priceItem.split("ƒ")
        console.log(priceItem)
      }
      if (priceItem.includes("₩")) {
        priceItem.split("₩")
        console.log(priceItem)
      }
      if (priceItem.includes("₨")) {
        priceItem.split("₨")
        console.log(priceItem)
      }
      if (priceItem.includes("kr")) {
        priceItem.split("kr")
        console.log(priceItem)
      }
      if (priceItem.includes("CHF")) {
        priceItem.split("CHF")
        console.log(priceItem)
      }
      if (priceItem.includes("ЅМ")) {
        priceItem.split("ЅМ")
        console.log(priceItem)
      }
      if (priceItem.includes("Sh")) {
        priceItem.split("Sh")
        console.log(priceItem)
      }
      if (priceItem.includes("฿")) {
        priceItem.split("฿")
        console.log(priceItem)
      }
      if (priceItem.includes("T")) {
        priceItem.split("T")
        console.log(priceItem)
      }
      if (priceItem.includes("USh")) {
        priceItem.split("USh")
        console.log(priceItem)
      }
      if (priceItem.includes("₴")) {
        priceItem.split("₴")
        console.log(priceItem)
      }
      if (priceItem.includes("Vt")) {
        priceItem.split("Vt")
        console.log(priceItem)
      }
      if (priceItem.includes("₫")) {
        priceItem.split("₫")
        console.log(priceItem)
      }
      if (priceItem.includes("﷼")) {
        priceItem.split("﷼")
        console.log(priceItem)
      }
      if (priceItem.includes("د.إ")) {
        priceItem.split("د.إ")
        console.log(priceItem)
      }
    }
  }
}, 100)
