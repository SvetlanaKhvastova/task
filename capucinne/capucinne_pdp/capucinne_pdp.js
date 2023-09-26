let startFunk = setInterval(() => {
  if (document.querySelector(".grid--product-images--partial")) {
    clearInterval(startFunk);

    let isAddCart;

    window.onunload = unloadPage;
    function unloadPage() {
      console.log("unload event detected!");
      if (localStorage.getItem("shorterProduction")) {
        localStorage.removeItem("shorterProduction");
      }
    }

    function pushDataLayer(name, desc, type, loc) {
      console.log(name + " / " + desc + " / " + type + " / " + loc);

      window.dataLayer = window.dataLayer || [];
      dataLayer.push({
        event: "event-to-ga4",
        event_name: name,
        event_desc: desc,
        event_type: type,
        event_loc: loc,
      });
    }

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

    let arrSize = {
      "13.32 MM": ["2", "D", "-", "2", "0.524"],
      "13.51 MM": ["2 1/4", "D 1/2", "-", "-", "0.532"],
      "13.67 MM": ["2 1/2", "E", "-", "3", "0.538"],
      "13.83 MM": ["2 3/4", "E 1/2", "-", "-", "0.544"],
      "14.05 MM": ["3", "F", "44", "4", "0.553"],
      "14.25 MM": ["3 1/4", "F 3/4", "-", "5", "0.561"],
      "14.45 MM": ["3 1/2", "G 1/4", "-", "-", "0.569"],
      "14.65 MM": ["3 3/4", "H", "46", "6", "0.577"],
      "14.86 MM": ["4", "H 1/2", "-", "-", "0.585"],
      "15.04 MM": ["4 1/4", "I", "47 3/4", "7", "0.592"],
      "15.27 MM": ["4 1/2", "I 1/2", "-", "8", "0.601"],
      "15.53 MM": ["4 3/4", "J 1/4", "-", "-", "0.611"],
      "15.70 MM": ["5", "J 1/2", "-", "9", "0.618"],
      "15.90 MM": ["5 1/4", "K 1/4", "-", "-", "0.626"],
      "16.10 MM": ["5 1/2", "L", "51 3/4", "-", "0.634"],
      "16.30 MM": ["5 3/4", "L 1/4", "-", "11", "0.642"],
      "16.51 MM": ["6", "M", "52 3/4", "-", "0.650"],
      "16.71 MM": ["6 1/4", "M 1/2", "-", "12", "0.658"],
      "16.92 MM": ["6 1/2", "N", "54", "13", "0.666"],
      "17.13 MM": ["6 3/4", "N 1/2", "-", "-", "0.674"],
      "17.35 MM": ["7", "O", "55 1/4", "14", "0.683"],
      "14.45 MM": ["7 1/4", "O 1/2", "-", "-", "0.687"],
      "17.75 MM": ["7 1/2", "P", "56 1/2", "15", "0.699"],
      "17.97 MM": ["7 3/4", "P 1/2", "-", "-", "0.707"],
      "18.19 MM": ["8", "Q", "57 3/4", "16", "0.716"],
      "18.35 MM": ["8 1/4", "Q 1/2", "58", "-", "0.722"],
      "18.53 MM": ["8 1/2", "Q 3/4", "-", "17", "0.729"],
      "18.69 MM": ["8 3/4", "R 1/4", "-", "18", "0.736"],
      "18.89 MM": ["9", "R 3/4", "59", "-", "0.748"],
      "19.22 MM": ["9 1/4", "S 1/4", "60", "-", "0.757"],
      "19.41 MM": ["9 1/2", "S 3/4", "-", "20", "0.764"],
      "19.62 MM": ["9 3/4", "T 1/4", "61", "21", "0.772"],
      "19.84 MM": ["10", "T 1/2", "-", "-", "0.781"],
      "20.02 MM": ["10 1/4", "U", "62", "22", "0.788"],
      "20.20 MM": ["10 1/2", "U 1/2", "-", "-", "0.797"],
      "20.44 MM": ["10 3/4", "V 1/4", "63 1/4", "-", "0.805"],
      "20.68 MM": ["11", "V 1/2", "64 1/4", "24", "0.814"],
      "20.85 MM": ["11 1/4", "W 1/4", "65", "-", "0.821"],
      "21.08 MM": ["11 1/2", "X", "-", "25", "0.830"],
      "21.27 MM": ["11 3/4", "X 1/2", "66 1/4", "-", "0.837"],
      "21.39 MM": ["12", "Y", "-", "26", "0.842"],
      "21.58 MM": ["12 1/4", "Y 1/2", "67", "-", "0.850"],
      "21.72 MM": ["12 1/2", "Z", "-", "27", "0.855"],
      "21.95 MM": ["12 3/4", "Z 1/2", "68 1/2", "28", "0.864"],
      "22.11 MM": ["13", "Z+1", "69", "-", "0.870"],
    };

    let newStyle = /*html */ `
        <style>
       .overlay_popup {
      position: fixed !important;
      overflow: hidden;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100%;
      opacity: 1;
      background: rgba(0, 0, 0, 0.60);
      transition: all 0.5s ease 0s;
      z-index: 2200000000;
      display: block;
      max-height: 100%;
    }
     .overlay_popup.is_hidden_var {
      opacity: 0;
      pointer-events: none;
    }
     .overlay_popup.is_hidden_var .container_popup {
      transform: translateX(100%);
      transition: all 0.8s ease 0s;
    }
     .overlay_popup .container_popup {
      display: block;
      position: absolute;
      bottom: 0;
      right: 0;
      max-width: 450px;
      height: 100%;
      padding: 32px 24px;
      margin: 0;
      background: #fff;
      transition: all 0.5s ease 0s;
      overflow: auto;
      max-height: 100vh;
box-shadow: 0px 20px 30px 0px rgba(0, 0, 0, 0.10);
    }
     .overlay_popup .container_popup > svg {
      position: absolute;
      top: 20px;
      right: 20px;
      outline: none;
      cursor: pointer;
    }
    .size_guide_title{
      color: #000;
      font-family: 'Poppins';
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      text-transform: uppercase;
      padding-bottom: 16px;
      margin: 0 0 24px;
      border-bottom: 1px solid #E8E8E1;
    }
    .size_guide_txt{
      color: #565656;
font-family: 'Poppins';
font-size: 16px;
font-weight: 500;
line-height: 24px;
margin: 0 0 24px;
    }
    .size_guide_txt span:nth-child(1){
    margin-right: 5px;
    display: inline-block;
    }
        .size_guide_txt span:nth-child(2){
          margin-right: 5px;
          display: inline-block;
          cursor: pointer;
        }
        .size_guide_txt span:nth-child(3){
          color: #959595;
          margin-left: 5px;
          display: inline-block;
          cursor: pointer;
        }
        .size_guide_txt span.active_var{
          color: #000;
      text-decoration-line: underline;

    }
    .size_guide_table{
      /*
overflow-y: scroll;
    height: 520px;
    */
    display: block;
    border-spacing: 0;
        padding-right: 4px;
    background: #FFF;
    }
        .container_popup::-webkit-scrollbar {
      width: 7px;
      height: 8px;
    }
    .container_popup::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.60);
      border-radius: 100px;
    }
    .size_guide_table th{
      border-bottom: 1px solid var(--grey-black-0, #000);
      padding: 0 0 8px;
      vertical-align: bottom;
    }
    .size_guide_table th:nth-child(1){
      max-width: 124px;
    width: 100%;
    display: block;
    }
    .size_guide_table th:nth-child(1) span{
 font-weight: 500;
    }
    .size_guide_table th span{
      color: #000;
      font-family: 'Poppins';
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
    }
    .size_guide_table tr td{
      border-bottom: 1px solid var(--grey-border, #E8E8E1);
          padding: 14px 30px 14px 0;
    }
     .size_guide_table tr td span{
      color: #000;
font-family: 'Poppins';
font-size: 14px;
font-weight: 400;
line-height: 20px;
     }
    [part="osm-container"].container{
      background: rgba(225, 149, 169, 0.10);
    padding: 8px 12px;
    margin-bottom: 16px;
     }
     [aria-label="Open Form"]{
          z-index: 10 !important;
     }
          .the4-wishlist-icon.new_icon_wishlist{
    width: 24px !important;
    height: 24px !important;
          }
.product-single__meta,
.product-block {
  position: relative;
}
.product-block {
  margin-bottom: 16px;
}
#shopify-block-cadd6db7-a422-4c1f-90e3-91f50c296730 {
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
.extend-offer,
.full-bleed--mobile.small--hide,
.grid2__item2.medium-up--two-fifths .product-block hr,
#syte-discovery-banner,
#shopify-section-template--20834585772373__82449f7c-6c71-4b98-89f3-074fa0fedafc,
.beautifully_packaged_mob,
[aria-label="Open Form"],
.needsclick.kl-private-reset-css-Xuajs1 {
  display: none !important;
}
#shopify-block-cadd6db7-a422-4c1f-90e3-91f50c296730 + .product-block {
  margin-bottom: 17px !important;
}
#shopify-block-cadd6db7-a422-4c1f-90e3-91f50c296730 + .product-block > div {
  padding: 0 !important;
  display: flex;
  justify-content: flex-start;
  width: max-content;
  cursor: pointer;
}
#shopify-block-cadd6db7-a422-4c1f-90e3-91f50c296730 + .product-block > div a {
  max-height: 16px;
  height: 100%;
}
#shopify-block-cadd6db7-a422-4c1f-90e3-91f50c296730 + .product-block > div a > svg {
  width: 16px;
  height: 16px;
}
#shopify-block-cadd6db7-a422-4c1f-90e3-91f50c296730 + .product-block > div span {
  color: #565656;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.308px;
}
.product-block.product-block--header {
  margin: 0 0 20px !important;
}
h1.h2.product-single__title {
  color: #1c1d1d;
  font-size: 28px;
  font-weight: 400;
  line-height: 32px;
  margin: 0;
  text-transform: initial;
}
[data-product-blocks] > .product-block.product-block--price {
  width: 100%;
  margin: 0 0 12px !important;
}
[data-product-price] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
}
[data-product-price] .money {
  color: #000;
  font-size: 22px !important;
  font-weight: 600 !important;
  line-height: 30px;
}
.get_discount_block {
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
}
.get_discount_caption {
  color: #c1856f;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-decoration-line: underline;
}
.get_discount_icon {
  width: 24px;
  height: 24px;
}
.get_discount_arrow {
  width: 16px;
  height: 16px;
}
.get_discount_icon img,
.get_discount_arrow img {
  display: block;
  width: 100%;
  height: 100%;
}
.size_guide {
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  cursor: pointer;
}
.size_guide p {
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  margin: 0;
}
.one-whole .js .one-half,
.new_rush_order .one-half,
.new_rush_order .one-whole,
.one-whole .js .one-whole {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  gap: 12px;
  align-items: center;
}
.one-whole .js .one-half .variant__label,
.one-whole .js .one-whole .variant__label,
.new_rush_order .one-half .variant__label,
.new_rush_order .one-whole .variant__label {
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
.new_rush_order .one-whole .switch-button .switch-button__label {
  margin: 0 !important;
}
.one-whole .js .one-half .switch-button,
.one-whole .js .one-whole .switch-button,
.new_rush_order .one-half .switch-button,
.new_rush_order .one-whole .switch-button {
  max-height: 24px;
  height: 100%;
}
.one-whole .js .one-half .switch-button .switch-button__label,
.one-whole .js .one-whole .switch-button .switch-button__label,
.new_rush_order .one-half .switch-button .switch-button__label,
.new_rush_order .one-whole .switch-button .switch-button__label {
  background-color: #e4e3e0;
}
form.product-single__form {
  padding: 24px 0 0px;
  border-top: 1px solid #e8e8e1;
}
button[name="add"] {
  display: flex;
  align-items: center;
    justify-content: center;
  background: #000;
  height: 56px;
}
button[name="add"] svg{
  margin-right: 11px;
}
button[name="add"]:hover {
  background: hwb(0deg 0% 100% / 70%) !important;
}
button[name="add"] span {
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}
.expert_advice {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d4a298;
  height: 48px;
  cursor: pointer;
  gap: 8px;
}
.expert_advice p {
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  text-transform: uppercase;
  margin: 0;
}
.new_extend {
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
.new_extend_caption {
  color: #1c1d1d;
  font-family: "Poppins";
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
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
  border: 1px solid #e8e8e1;
  background: #fff;
  padding: 9px;
  text-align: center;
  cursor: pointer;
  transition: 0.35s;
}
.new_extend_item_caption {
  color: #565656;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}
.new_extend_item_price {
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
.earn_gift_wrapp {
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  background: #f6f5f5;
  padding: 8px 16px;
}
.earn_gift_img {
  position: relative;
  max-width: 60px;
  width: 100%;
}
.earn_gift_title {
  color: #000;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  margin: 0 0 4px;
}
.earn_gift.earn_gift_start .earn_gift_img svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
.earn_gift_price {
  color: #000;
  font-size: 13px;
  font-weight: 600;
  line-height: 18px;
  text-transform: uppercase;
  margin: 0;
}
.earn_gift_icon {
  position: absolute;
  right: 16px;
  top: -20px;
  background: #fff;
  border-radius: 50%;
  z-index: 1;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #f6f5f5;
}
.earn_gift > h2 {
  color: #000;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 8px;
  text-transform: initial;
}
.earn_gift > h2 b {
  font-weight: 600;
}
.earn_gift.earn_gift_start > h2 {
  font-weight: 500;
}
.earn_gift.earn_gift_start > h2 b {
  font-weight: 500;
  color: #c1856f;
}
.earn_gift.earn_gift_moon > h2 {
  font-weight: 500;
}
/**new_rush_order */
.new_rush_order_title {
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 16px;
  text-transform: initial !important;
}
.new_benefits {
  display: flex;
  justify-content: center;
  background-color: #f6f5f5;
  padding: 16px;
  line-height: 1;
  text-transform: capitalize;
  color: #1c1d1d;
  margin-top: 16px;
}
.new_benefits_item {
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
/**description_new_block */
.description_new_block{
  padding: 24px 0 8px;
}
.description_new_block > h2{
  color: #000;
font-family: 'Poppins';
font-size: 14px;
font-weight: 500;
line-height: 20px;
margin: 0 0 16px;
text-transform: initial;
}
.description_body.no_visib {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.description_body > br{
  display: none;
}
.description_body p{
  color: #565656;
font-family: 'Poppins';
font-size: 13px;
font-weight: 400;
line-height: 18px;
margin: 0 0 5px;
}
.description_new_block .read_more_btn{
      width: max-content;
  display: block;
  cursor: pointer;
  color: #000;
font-family: 'Poppins';
font-size: 13px;
font-weight: 400;
line-height: 18px;
text-decoration-line: underline;
margin-top: 5px;
}
.description_new_block +div{
  display: none;
}
/*production_delivery */
.production_delivery {
  margin: 24px 0;
}
.production_delivery > h3 {
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 16px;
  text-transform: initial;
}
.production_time_available {
  display: flex;
  padding: 12px;
  background: #f6f5f5;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.production_time_available img {
  max-width: 24px;
  width: 100%;
  margin-top: -2px;
}
.production_time_available p {
  color: #1c1d1d;
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  margin: 0;
}
.production_delivery > p {
  color: #1c1d1d;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  margin: 16px 0 16px;
}
.production_delivery .learn_more_btn {
  display: block;
  color: #000;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  text-decoration-line: underline;
  cursor: pointer;
  margin: 16px 0 0;
  max-width: max-content;
}
.delivery_timeline {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.delivery_timeline:before {
  content: "";
  position: absolute;
  width: 100%;
  top: 14px;
  left: 0;
  right: 0;
  background-color: #e8e8e1;
  height: 1px;
}
.delivery_timeline_item {
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
.delivery_timeline_item_icon {
  line-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  background-color: #eedad6;
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
.delivery_timeline_item_date {
  color: #1c1d1d;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  margin-top: 8px;
}
.delivery_timeline_item_caption {
  color: #565656;
  font-size: 11px;
  line-height: 18px;
}
.delivery_timeline_item_info {
  position: relative;
  color: #000;
  font-size: 11px;
  font-weight: 500;
  line-height: 18px;
  border-radius: 100px;
  border: 1px solid #f6f5f5;
  background: #f6f5f5;
  padding: 2px 12px;
  z-index: 2;
  top: 2px;
}
#syte-similar-items-container h3.syte-slider-title,
[data-section-type="recently-viewed"] h3.section-header__title {
  margin-bottom: 32px !important;
  color: #000;
  font-family: 'Poppins';
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 0;
}
[data-section-type="recently-viewed"] .section-header{
  margin: 0 !important;
}
#syte-similar-items-container .syte-slider-arrow.syte-slider-arrow-left {
  right: 60px;
}
#syte-similar-items-container .syte-slider-layout-container .syte-offers-item-desc {
  color: #000;
  font-size: 16px !important;
  font-weight: 400;
  line-height: 24px !important;
  letter-spacing: -0.308px;
  text-transform: initial;
  margin: 12px auto 0;
  max-width: 236px !important;
}
#syte-similar-items-container .syte-slider-layout-container .syte-ad-promo-text.syte-offer-price {
  color: #1c1d1d;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}
#stamped-reviews-widget[data-widget-type="carousel"] .stamped-carousel-title {
  font-family: "Poppins";
  color: #000;
  font-size: 20px !important;
  font-weight: 400 !important;
  line-height: 28px !important;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0 0 20px;
}
#reviews .btn {
  max-width: 324px;
  width: 100%;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  text-transform: uppercase;
  height: 52px;
}
.stamped-carousel-subtitle-count {
  color: #565656;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
}
#stamped-reviews-widget[data-widget-type="carousel"] .stamped-carousel-subtitle {
  display: flex;
  gap: 16px;
}
#stamped-reviews-widget[data-widget-type="carousel"] .stamped-carousel-subtitle span.stamped-carousel-subtitle-count:after {
  color: #565656;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
#stamped-reviews-widget[data-widget-type="carousel"] .stamped-carousel-scroll:before {
  margin-top: 10px !important;
  margin-bottom: 44px !important;
}
#stamped-reviews-widget[data-widget-type="carousel"] .stamped-carousel-scroll .stamped-reviews-rating {
  font-size: unset !important;
}
#stamped-reviews-widget[data-widget-type="carousel"] .stamped-reviews-date {
  color: #565656 !important;
  font-size: 12px !important;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.308px;
  padding: 0 !important;
}
#stamped-reviews-widget[data-widget-type="carousel"] .stamped-carousel-scroll .stamped-reviews-title {
  color: #000;
  font-size: 16px !important;
  font-weight: 600 !important;
  line-height: 24px !important;
  margin: 5px 0 11px !important;
}
#stamped-reviews-widget[data-widget-type="carousel"] .stamped-carousel-scroll .stamped-reviews-message-block {
  color: #565656 !important;
  font-size: 13px !important;
  font-style: italic !important;
  font-weight: 400 !important;
  line-height: 18px !important;
}
#stamped-reviews-widget[data-widget-type="carousel"] .stamped-carousel-scroll .stamped-reviews-author {
  color: #1c1d1d;
  font-family: "Open Sans";
  font-size: 13px !important;
  font-weight: 700 !important;
  line-height: 18px !important;
  margin-top: 12px !important;
}
[data-section-type="recently-viewed"] .hr--large,
#stamped-reviews-widget[data-widget-type="carousel"] .stamped-carousel-scroll .stamped-reviews-product-title {
  display: none;
}
#stamped-reviews-widget[data-widget-type="carousel"] {
  max-width: unset !important;
  width: 94%;
  margin: 64px auto 64px !important;
}
#reviews {
  width: 94%;
  margin: 0 auto 120px !important;
}
/**beautifully_packaged_box */
.beautifully_packaged_box {
  padding: 0 40px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  margin-bottom: 80px;
}
.beautifully_packaged_box > div {
  width: 50%;
}
.beautifully_packaged_img img {
  width: 100%;
  height: 100%;
}
.beautifully_packaged_descr {
  background: #d4a298;
  padding: 20px;
}
.beautifully_packaged_container {
  border: 1px solid #fff;
  padding: 66px 5px;
  text-align: center;
  height: 100%;
}
.beautifully_packaged_container h2 {
  color: #fff;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 2px 0 24px;
}
.beautifully_packaged_container h3 {
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;
}
.beautifully_packaged_container p {
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  margin: 0 auto;
  max-width: 417px;
}
.beautifully_packaged_container p + p {
  margin-top: 20px;
}
/*readyToShip */
#readyToShip {
  padding: 0 40px;
  margin-bottom: 40px;
}
#bestSellers{
  padding: 0 40px;
  margin-bottom: 80px;
}
#readyToShip .grid-product__title,
[data-section-type="recently-viewed"] .grid-product__title{
color: #000;
text-align: center;
font-family: 'Poppins';
font-size: 16px;
font-weight: 400;
line-height: 24px;
letter-spacing: -0.308px;
}
#readyToShip .grid-product__price{
color: #1C1D1D;
text-align: center;
font-family: 'Poppins';
font-size: 14px;
font-weight: 500;
line-height: 20px;
}
#readyToShip .ready_to_ship_container > h2,
#bestSellers .best_sellers_container > h2 {
  color: #000;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0 0 32px;
}
#bestSellers .slick-slide {
  margin: 0 4px;
}
.slick-arrow {
  position: absolute;
  top: -61px;
  right: 0;
  z-index: 111;
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.slick-arrow svg {
  width: 100%;
  height: 100%;
}
.prev_btn.slick-arrow {
  right: 60px;
}
.product_content a {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
.product_image {
  width: 100%;
}
.product_image img {
  object-fit: cover;
  height: auto;
  aspect-ratio: 1/1.5;
  max-height: 402px;
}
.product_title {
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
.product_price {
  color: #1c1d1d;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin: 0;
}
.ready_to_ship_list,
.pages.is_hidden {
  display: none;
}
button.syte-discovery.syte-integration-injected {
  background: #fff;
  border-radius: unset;
  border: none;
  left: 12px;
  top: 12px;
  padding: 4px 8px;
  height: 100%;
  max-height: 32px;
  display: flex;
  gap: 8px;
}
button.syte-discovery.syte-integration-injected .button-text {
  color: #565656;
  font-family: "Poppins";
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.308px;
}
.tangiblee-cta-wrapper {
  position: absolute;
  left: 145px;
  top: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  z-index: 11;
}
.tangiblee-cta-wrapper .tangiblee-cta {
  height: 32px;
  margin-top: 0;
  color: #565656 !important;
  font-family: "Poppins";
  font-size: 12px !important;
  font-weight: 400 !important;
  line-height: 18px;
  letter-spacing: -0.308px;
  gap: 8px;
  padding: 4px 8px !important;
}
.tangiblee-cta__icon,
.syte-discovery.syte-integration-injected .discovery-icon {
  display: none;
}
.icon_hand,
.icon_magnifying_glass {
  width: 25px !important;
  height: 25px !important;
  display: block !important;
  opacity: 1 !important;
}
nav.breadcrumb.custom_breadcrumbs span:not([aria-hidden="true"]) {
  color: #000;
}
nav.breadcrumb.custom_breadcrumbs span[aria-hidden="true"] {
  margin: 0 4px;
}
nav.breadcrumb.custom_breadcrumbs a {
  color: #565656;
}
.product-single__sticky {
  padding: 0 !important;
}
nav.breadcrumb.custom_breadcrumbs {
  padding-bottom: 24px !important;
  margin-top: 12px !important;
}
.product__main-photos .flickity-page-dots {
  display: block !important;
}
.flickity-page-dots .dot.is-selected {
  width: 5px;
  height: 5px;
}
/** sticky__price*/
.lav-sticky {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
      z-index: 12;
  border-top: 1px solid #f6f5f5;
  background: #fff;
  padding: 5px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.lav-sticky__info {
  display: flex;
  align-items: center;
  gap: 24px;
}
.lav-sticky__img {
  max-width: 90px;
  max-height: 90px;
}
.lav-sticky__img img {
  width: 100%;
  height: 100%;
}
.lav-sticky__title {
  color: #1c1d1d;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}
.lav-sticky__price {
  position: relative;
  display: flex;
  padding-left: 20px;
  margin-left: 20px;
  display: none;
}
.lav-sticky__price:before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 60px;
  background-color: #e8e8e1;
  event-pointer: none;
}
.lav-sticky__price-old {
  display: none;
  color: #565656;
  font-size: 22px;
  letter-spacing: -0.308px;
  text-decoration: line-through;
}
.lav-sticky__price-new {
  color: #1c1d1d;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.308px;
  margin: 0 8px;
}
.lav-sticky__price-discount {
  display: flex;
  align-items: center;
  color: #c1856f;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
}
.lav-sticky__price-discount img {
  margin-right: 4px;
  flex-shrink: 0;
}
.lav-sticky__btn_price {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-left: 1px solid #e8e8e1;
  padding-left: 40px;
}
.lav-sticky__btn_price .lav-product-price {
  color: #000;
  font-family: "Poppins";
  font-size: 22px;
  font-weight: 600;
  line-height: 30px;
  margin-right: 16px;
}
.lav-sticky__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 250px;
  min-width: 250px;
  background: #000;
  width: 100%;
  height: 56px;
  color: #fff;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  padding: 1px;
  gap: 11px;
  text-transform: uppercase;
  margin: 0 0 0 65px;
}
.lav-sticky__btn svg {
  width: 24px;
  height: 24px;
}
.lav-select_size {
  width: 100%;
  background: #000;
  color: #fff;
  display: flex;
  font-family: "Poppins";
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  height: 56px;
  padding: 1px;
  cursor: pointer;
  gap: 11px;
}
.lav-error {
  border: 1px solid #c60200;
}
.lav-error-txt{
position: absolute;
    left: 0;
    top: 42px;
    width: max-content;
    color: #C20000;
    font-family: 'Poppins';
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
}
/**tab */
.product-block--tab.rush_orders_tab + .product-block--tab,
.is_hidden {
  display: none !important;
}
.product-block--tab + .product-block--tab {
  margin: 0 !important;
}
.collapsible-trigger-btn--borders{
  padding: 14px 0 !important;
  color: #000;
font-family: 'Poppins';
font-size: 14px;
font-weight: 500;
line-height: 20px; 
}
.product-block.product-block--tab.is_hidden + .product-block--tab{
  border-top: 1px solid #E8E8E1 !important;
}
.product-block--tab+.product-block--tab{
  border-bottom: 1px solid #E8E8E1 !important;
}
.product-block--tab+.product-block--tab .collapsible-trigger-btn--borders{
  border: none;
}
/**create_custom_block */
.create_custom_block{
  background: #ECE3DF;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    position: relative;
    gap: 36px;
}
.create_custom_img_wrap{
      max-width: 234px;
    height: 100%;
}
.create_custom_img{
    width: 100%;
    height: 100%;
    display: block;
}
.create_custom_info{
  text-align: center;
}
.create_custom_info img{
  display: block;
    text-align: center;
    margin: 0 auto;
}
.create_custom_container{
  border: 1px solid #F6F5F5;
    position: absolute;
    width: 93%;
    height: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
}
.create_custom_title{
  color: #1C1D1D;
font-size: 16px;
font-weight: 600;
line-height: 24px;
margin: 8px 0;
text-transform: inherit !important;
}
.create_custom_link{
  cursor: pointer;
  color: #1C1D1D;
font-family: 'Poppins';
font-size: 13px;
font-weight: 500;
line-height: 18px;
text-decoration-line: underline;
    max-width: max-content;
    margin: 0 auto;
    position: relative;
    z-index: 2;
}
#shopify-section-footer {
  padding-bottom: 100px;
}
@media (max-width: 1180px) {
  .beautifully_packaged_container {
    padding: 20px 5px;
  }
}
@media (max-width: 768px) {
  .overlay_popup .container_popup{
        padding: 16px;
        max-width: 100%;
    width: 100%;
  }
  .overlay_popup .container_popup > svg{
    top: 16px;
    right: 16px;
  }
  .size_guide_title{
        font-size: 18px;
            letter-spacing: 0.18px;
    line-height: 26px;
        padding-bottom: 12px;
    margin: 0 0 20px;
  }
  .size_guide_table th span{
    font-size: 13px;
line-height: 18px;
  }
  .size_guide_table th:nth-child(1){
    max-width: 115px;
  }
  .size_guide_table tr td{
    padding: 14px 23px 14px 0;
  }
  .header-layout[data-logo-align=center] .header-item--navigation{
    flex: 1 1 39px;
  }
  .header-layout[data-logo-align=center] .site-header__logo{
        margin: 15px 0px;
  }
  nav.breadcrumb.custom_breadcrumbs {
    padding-bottom: 16px !important;
    margin-top: 4px !important;
}
.--syte-start-camera-upload>svg{
  margin: 0 !important;
}
  .site-nav__link.site-nav__link--icon > div{
    display: block;
    width: 30px;
    position: relative;
  }
.product-single__sticky.grid__item{
  float: unset;
}
button.syte-discovery.syte-integration-injected{
  left: 8px;
    top: 8px;
}
.tangiblee-cta-wrapper{
  left: 189px;
  top: 8px;
}
/**.lav-sticky */
.lav-sticky__btn_price .lav-product-price.lav-mob{
  color: #FFF;
font-family: 'Poppins';
font-size: 16px;
font-weight: 600;
line-height: 24px;
position: relative;
margin-right: 20px;
}
.lav-btn-price.lav-mob:after {
    content: '';
    position: absolute;
    right: -16px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 100px;
    background-color: #D4A298;
    width: 4px;
    height: 4px;
    transition: 0.2s;
}
.lav-sticky{
  padding: 4px 2px;
}
.lav-sticky__info,
.lav-sticky .get_discount_block,
.full-bleed--mobile.medium-up--hide,
.product-bottom-flex-container{
  display: none !important;
}
.lav-sticky__btn_price{
padding: 0;
width: 100%;
    border: none;
}
.lav-sticky__btn{
  margin: 0;
  width: 100%;
    max-width: 100%;
        gap: 8px;
}
.product-slideshow .is-selected .product__photo-zoom{
  margin: 0;
    bottom: 16px;
    right: 16px;
        display: flex;
    align-items: center;
    justify-content: center;
}
.product-slideshow .is-selected .product__photo-zoom svg:not(.icon_zoom){
display: none !important;
}
.product-single__meta{
  margin-top: 20px;
}
.flickity-page-dots .dot.is-selected {
    width: 8px;
    height: 8px;
}
#shopify-block-cadd6db7-a422-4c1f-90e3-91f50c296730 + .product-block {
    margin-bottom: 9px !important;
}
.product-block.product-block--header {
    margin: 0 0 12px !important;
}
h1.h2.product-single__title{
  font-size: 20px;
    line-height: 28px;
        max-width: 303px;
}
[data-product-blocks] > .product-block.product-block--price{
      margin: 0 0 8px !important;
}
.size_guide{
      top: -26px;
}
.size_guide p{
      font-size: 13px;
}
form.product-single__form{
  padding: 16px 0 0px;
}
.new_extend_head{
      margin-bottom: 12px;
      gap: 8px;
}
.earn_gift > h2{
  font-size: 13px;
    line-height: 18px;
}
.production_delivery {
    margin: 32px 0 25px;
}
.production_delivery > h3{
  margin-bottom: 12px;
}
.production_delivery > p{
      margin: 12px 0 12px;
}
.production_delivery .learn_more_btn{
    margin: 30px 0 0;
}
.delivery_timeline_item_date{
      width: max-content;
}
.delivery_timeline_item_caption{
  position: absolute;
    width: max-content;
}
.delivery_timeline_item:first-child .delivery_timeline_item_caption{
  left: 0;
}
.delivery_timeline_item:last-child .delivery_timeline_item_caption{
  right: 0;
}
.new_rush_order_title{
  margin-bottom: 12px;
}
.new_benefits{
  margin-top: 12px;
}
.new_benefits{
  padding: 12px;
}
.new_benefits_item{
color: #565656;
font-family: 'Poppins';
font-size: 12px;
font-weight: 400;
line-height: 18px; 
text-transform: capitalize;
}
.new_benefits_item + .new_benefits_item{
  margin-left: 12px;
    padding-left: 12px;
}
.description_new_block {
    padding: 25px 0 6px;
}
.description_new_block > h2{
  margin: 0 0 12px;
}
.create_custom_block{
  gap: 20px;
  padding: 24px 12px 36px;
  margin: 0 0 48px;
  flex-direction: column;
}
.create_custom_container{
      width: 87%;
    height: 92%;
}
.create_custom_img_wrap {
    max-width: unset;
    width: 100%;
}
.create_custom_title{
  font-size: 18px;
    line-height: 26px;
}
section.shopify-section .index-section > .page-width{
  padding: 0 0 0 16px;
}
.index-section {
    margin: 0 0 60px;
}
[data-section-type="recently-viewed"] .index-section{
  margin: 0;
}
.new_tab{
      padding: 0 16px;
    margin: 0 0 48px;
}
.beautifully_packaged_mob{
  display: block !important;
  margin-bottom: 24px;
  text-align: center;
      width: 100%;
    max-height: 300px;
}
.beautifully_packaged_box{
  margin-bottom: 48px;
    flex-direction: column;
        padding: 0 16px;
}
.beautifully_packaged_box > div {
    width: 100%;
}
.beautifully_packaged_img{
  display: none;
}
.beautifully_packaged_descr{
  padding: 32px 8px;
}
.beautifully_packaged_container {
    padding: 0;
    border: none;
    text-align: left;
}
.beautifully_packaged_container h3{
      text-align: center;
}
.beautifully_packaged_container h2 {
    font-size: 20px;
    line-height: 24px;
    text-align: center;
}
.beautifully_packaged_container p{
  font-size: 13px;
    line-height: 18px;
    max-width: 282px;
        margin: 0 0 0 20px;
}
#readyToShip{
  padding: 0 0 0 16px;
}
#readyToShip .grid-product {
    padding: 0;
    margin-bottom: 0;
}
#readyToShip .slick-slide{
  margin: 0 4px;
}
#bestSellers {
    padding: 0 0 0 16px;
    margin-bottom: 48px;
}
#readyToShip .ready_to_ship_container > h2, #bestSellers .best_sellers_container > h2{
      margin: 0 0 24px;
    text-align: center;
}
#reviews{
      margin: 0 auto 48px !important;
}
#reviews .btn{
      max-width: 200px;
}
.stamped-carousel-subtitle-count{
      font-size: 13px;
    line-height: 18px;
}
#stamped-reviews-widget[data-widget-type="carousel"] .stamped-carousel-title{
  margin: 0 0 13px;
    text-align: center;
}
#readyToShip .grid-product__title,
 [data-section-type="recently-viewed"] .grid-product__title,
 .product_title,
 #syte-similar-items-container .syte-slider-layout-container .syte-offers-item-desc{
    font-size: 13px;
    line-height: 18px;
    letter-spacing: unset;
}
#syte-similar-items-container h3.syte-slider-title,
 [data-section-type="recently-viewed"] h3.section-header__title{
  margin-bottom: 16px !important;
  text-align: center;
}
#syte-similar-items-container h3.syte-slider-title{
  margin-bottom: 24px !important;
}
.lav-error-txt{
  top: 49px;
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
      <div class='get_discount_caption'>You save 5%</div>
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
          <img src="https://conversionratestore.github.io/projects/capucinne/img/is_packaged_beautifully_mob.png" alt="is packaged beautifully" class="beautifully_packaged_mob"/>
          <p>Every Capucinne piece is packaged beautifully. Your ring, or fine jewelry, will arrive in a luxurious white and gold box, embossed with our signature logo.</p>
          <p class="visib_packaged">Resting inside the outer box is a smaller box that fits perfectly in to your pocket, for the most important moments of your life.</p>
        </div>
      </div>
    </div>
    `;

    let readyToShip = /*html */ `
    <section id="readyToShip">
      <div class="ready_to_ship_container">
        <h2>READY <b>TO SHIP</b></h2>
        <div class='pages is_hidden'></div>
        <div class="ready_to_ship_list"></div>
      </div>
       <span class="visib_ready_to_ship"></span>
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
      <span class="visib_best_sellers"></span>
    </section>
    `;

    let createCustomBlock = /*html */ `
    <div class="create_custom_block">
      <div class="create_custom_img_wrap">
        <img class="create_custom_img" src="https://conversionratestore.github.io/projects/capucinne/img/create_custom_jewelry_img.jpg" alt="rings" />
      </div>
      <div class="create_custom_info">
        <img src="https://conversionratestore.github.io/projects/capucinne/img/create_custom_jewelry.svg" alt="rings svg" />
        <h3 class="create_custom_title">Need Something Unique?</h3>
        <a href="https://capucinne.com/pages/custom-design" target="_blank" class="create_custom_link">
          Create Custom >
        </a>
      </div>
      <div class="create_custom_container">
      </div>
    </div>
    `;

    // popup
    let popUp = /*html */ `
      <div class="overlay_popup is_hidden_var">
        <div class="container_popup">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M1 1L15 15" stroke="black"/>
            <path d="M15 1L0.999999 15" stroke="black"/>
          </svg>
        </div>
      </div>
  `;
    let contentPopup = /*html */ `
      <div class="content_popup">
        <h2 class="size_guide_title">SIZE GUIDE</h2>
        <div class="size_guide_body">
          <p class="size_guide_txt"><span>MEASURE:</span> <span class="active_var">MM</span>|<span>INCHES</span></p>
          <table class="size_guide_table">
            <thead>
              <th><span>Finger Circumference</span></th>
              <th><span>US</span></th>
              <th><span>UK</span></th>
              <th><span>EU</span></th>
              <th><span>JAPAN</span></th>
            </thead>
            <tbody>
            </tbody>
        </table>
        </div>
      </div>
  `;

    document.head.insertAdjacentHTML("beforeend", newStyle);

    renderNewBlocks();
    onDiffClick();
    waitFor(
      () => document.querySelector(".product-single__title") && item && item.ImageURL && document.querySelector("[data-add-to-cart]") && document.querySelector(".extend-offer"),
      () => {
        addSticky();
      }
    );

    waitFor(
      () => document.querySelector(".product-single__form .add-to-cart"),
      () => {
        document.querySelector(".product-single__form .add-to-cart").addEventListener("click", () => {
          if (!isAddCart) {
            pushDataLayer("exp_barriers_b_atc", "Add to cart", "Button", "Add to cart");
          }
        });
      }
    );

    setInterval(() => {
      handleKlarna();
      waitFor(
        () => () => document.querySelector("[doubly-currency-usd]"),
        () => {
          // add You’ll receive a gift with your order
          if (document.querySelector(".new_extend") && document.querySelector(".product__price:not(.product__price--compare) .money").getAttribute("doubly-currency-usd")) {
            handleEarn();
          }
        }
      );
    }, 500);

    handeGetYourMoneyOff();

    // getArrReadyToShip
    if (document.querySelector("#readyToShip")) {
      getArrReadyToShip();
    }

    function renderNewBlocks() {
      // change icon header
      if (!document.querySelector(".new_icon_camera") && document.querySelector(".--syte-start-camera-upload.syte-integration-injected svg:not(.new_icon_camera)")) {
        document.querySelector(".--syte-start-camera-upload.syte-integration-injected svg:not(.new_icon_camera)").outerHTML = `<svg class="new_icon_camera" xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
        <path d="M20.5333 3.70334V2.93334C20.5333 2.52832 20.205 2.2 19.8 2.2H17.2333C16.8283 2.2 16.5 2.52832 16.5 2.93334V3.66669H16.3826L15.378 1.15135C15.0988 0.454783 14.4234 -0.00132912 13.673 2.90971e-06H8.02264C7.23386 0.000604471 6.5339 0.505658 6.28464 1.254L5.48164 3.66665H1.83334C0.82083 3.66665 0 4.48748 0 5.49999V16.7666C0 17.7792 0.82083 18.6 1.83334 18.6H20.1667C21.1792 18.6 22 17.7791 22 16.7666V5.49999C22.0001 4.62867 21.387 3.87758 20.5333 3.70334ZM17.2333 2.93334H19.8V3.66669H17.2333V2.93334ZM21.2666 16.7666C21.2666 17.3741 20.7741 17.8666 20.1666 17.8666H1.83334C1.22585 17.8666 0.733346 17.3742 0.733346 16.7666V5.49999C0.733346 4.8925 1.22585 4.39999 1.83334 4.39999H5.74568C5.90334 4.40038 6.04359 4.30001 6.09403 4.15065L6.96668 1.485C7.11802 1.03164 7.54474 0.727849 8.02268 0.733349H13.673C14.1229 0.732318 14.528 1.00534 14.696 1.4227L15.796 4.16904C15.8511 4.3074 15.9844 4.39871 16.1334 4.40004H20.1667C20.7742 4.40004 21.2667 4.8925 21.2667 5.50004L21.2666 16.7666Z" fill="black"/>
        <path d="M11 5.7666C8.16496 5.7666 5.8667 8.06487 5.8667 10.8999C5.8667 13.735 8.16496 16.0333 11 16.0333C13.8351 16.0333 16.1334 13.735 16.1334 10.8999C16.1334 8.06487 13.8351 5.7666 11 5.7666ZM11 15.2999C8.56999 15.2999 6.60005 13.33 6.60005 10.8999C6.60005 8.46989 8.56999 6.49995 11 6.49995C13.4301 6.49995 15.4 8.46989 15.4 10.8999C15.4 13.33 13.4301 15.2999 11 15.2999Z" fill="black"/>
      </svg>`;
      }
      if (!document.querySelector(".new_icon_login") && document.querySelector(".js-search-header svg:not(.new_icon_login)")) {
        document.querySelector("[href='/account'] svg:not(.new_icon_login)").outerHTML = `<svg class="new_icon_login" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.17837 11.5306C9.87796 12.1159 10.8061 12.5559 12.2988 13.178C13.458 13.6608 14.7318 13.9396 15.9482 14.3057C17.2771 14.7053 18.5384 15.2065 19.4608 16.2718C20.3384 17.2853 20.8976 18.8012 20.9543 21.1837H3.82408C3.96122 17.5927 5.90776 15.2624 8.44857 14.1522C8.65469 14.062 8.74939 13.8212 8.65878 13.6147C8.56857 13.4082 8.32776 13.3139 8.12163 13.4041C5.21673 14.6735 3 17.3788 3 21.5918C3 21.8171 3.18286 22 3.40816 22H21.3673C21.5927 22 21.7755 21.8171 21.7755 21.5918C21.7755 18.7029 21.1 16.9176 20.078 15.7371C19.0514 14.5522 17.662 13.969 16.1837 13.5241C14.9939 13.1657 13.7465 12.8967 12.6127 12.4241C10.6106 11.5902 9.4302 10.9955 8.68082 9.92857C8.66898 9.91184 7.89796 8.93878 7.89796 7.30612C7.89796 4.82 9.78735 2.80694 12.3878 2.81633C14.8657 2.82531 16.8776 4.82816 16.8776 7.30612C16.8776 8.9649 15.9759 10.4147 14.6367 11.1922C14.442 11.3053 14.3755 11.5551 14.4886 11.7498C14.602 11.9449 14.8518 12.011 15.0465 11.898C16.629 10.9792 17.6939 9.26612 17.6939 7.30612C17.6939 4.37755 15.3163 2 12.3878 2C9.45918 2 7.08163 4.37755 7.08163 7.30612C7.08163 9.02898 7.90449 10.5612 9.17837 11.5306Z" fill="black"/>
        </svg>
        `;
      }
      if (!document.querySelector(".new_icon_search") && document.querySelector(".js-search-header svg:not(.new_icon_search)")) {
        document.querySelector(".js-search-header svg:not(.new_icon_search)").outerHTML = `<svg class="new_icon_search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M16.3481 18.8716L18.9509 21.4744C19.3008 21.8243 19.7602 21.9993 20.2195 21.9993C20.6761 21.9993 21.1299 21.8271 21.4771 21.4799C22.1743 20.7827 22.1743 19.6453 21.4771 18.9482L18.8743 16.3454C18.5408 16.0118 18.0924 15.8232 17.6003 15.8204C17.4937 15.8232 17.387 15.8341 17.2859 15.8533L16.3618 14.9292C18.8087 11.7768 18.5463 7.2001 15.6919 4.34578C12.5642 1.21807 7.47623 1.21807 4.34578 4.34578C1.21807 7.4735 1.21807 12.567 4.34578 15.6947C5.89597 17.2449 7.96015 18.0295 10.0243 18.0295C11.7577 18.0295 13.4883 17.4691 14.9237 16.3536L15.8533 17.2831C15.7494 17.8573 15.9298 18.4588 16.3481 18.8716ZM17.6058 16.6406C17.8682 16.6434 18.1143 16.7445 18.2947 16.925L20.8975 19.5278C21.0807 19.7109 21.1818 19.9543 21.1818 20.214C21.1818 20.4737 21.0807 20.7171 20.8975 20.9002C20.5229 21.2748 19.9078 21.2721 19.5305 20.8948L16.9277 18.292C16.668 18.035 16.5778 17.644 16.7008 17.2913C16.7199 17.2312 16.7418 17.1847 16.7664 17.141C16.8074 17.0617 16.8621 16.9906 16.9195 16.9332C16.9851 16.8676 17.0644 16.8102 17.1492 16.7637C17.1984 16.7363 17.2449 16.7145 17.2941 16.6981C17.3925 16.6598 17.5019 16.6434 17.6058 16.6406ZM4.9254 15.1151C2.11756 12.3045 2.11756 7.73596 4.9254 4.9254C6.33068 3.52285 8.17614 2.8202 10.0189 2.8202C11.8643 2.8202 13.707 3.52285 15.1123 4.9254C17.7561 7.56919 17.9256 11.8561 15.4978 14.6886C15.4951 14.6913 15.4951 14.694 15.4924 14.6968C15.4377 14.7651 15.3803 14.828 15.3037 14.91C15.2463 14.9784 15.1834 15.044 15.1096 15.1151C15.044 15.1807 14.9756 15.249 14.8936 15.3201C14.828 15.3803 14.7651 15.4377 14.6886 15.4978C11.8561 17.9229 7.56645 17.7534 4.9254 15.1151ZM15.6865 15.7001C15.7384 15.6509 15.7849 15.6045 15.8232 15.5607C15.8259 15.558 15.8259 15.558 15.8286 15.5552L16.4903 16.2141C16.4383 16.2552 16.3891 16.2989 16.3426 16.3426C16.2989 16.3864 16.2551 16.4356 16.2169 16.4848L15.558 15.8259C15.6017 15.7849 15.6455 15.7412 15.6865 15.7001Z" fill="black"/>
      </svg>`;
      }
      if (document.querySelector(".js-drawer-open-cart .cart-link")) {
        document.querySelectorAll(".js-drawer-open-cart .cart-link svg:not(.new_icon_open)").forEach((el) => {
          el.outerHTML = `<svg class="new_icon_open" xmlns="http://www.w3.org/2000/svg" width="19" height="21" viewBox="0 0 19 21" fill="none">
    <path d="M9.12403 0C7.14645 0 5.51877 1.51542 5.36371 3.43807H4.16532C3.07605 3.43807 2.27602 4.28356 2.11027 5.43001L0.0169455 18.9087C-0.147716 20.0476 0.913536 21 2.07468 21H16.1573C17.3273 21 18.3774 20.0474 18.213 18.9087L16.1224 5.43001C15.9626 4.32383 15.1878 3.43807 14.0666 3.43807H12.8837C12.7286 1.51543 11.1016 0 9.12403 0ZM9.12403 0.687483C10.7334 0.687483 12.047 1.89213 12.1989 3.43807H6.05119C6.20277 1.89213 7.51468 0.68747 9.12403 0.687483ZM4.16532 4.12621H14.0666C14.889 4.12621 15.3418 4.83095 15.4423 5.52668L17.5329 19.0081C17.6368 19.7278 16.894 20.3119 16.1573 20.3119H2.07468C1.34013 20.3119 0.595268 19.7316 0.699726 19.0081L2.79036 5.52668C2.90057 4.76325 3.38957 4.12621 4.16532 4.12621ZM12.2143 6.87412C12.2143 8.56124 10.836 9.92683 9.12403 9.92683C7.41206 9.92683 6.03574 8.56125 6.03574 6.87412C6.03574 6.41687 5.34827 6.41441 5.34827 6.87412C5.34826 8.93691 7.04458 10.6143 9.12403 10.6143C11.2035 10.6143 12.8998 8.93689 12.8998 6.87412C12.8998 6.41687 12.2143 6.41687 12.2143 6.87412Z" fill="black"/>
  </svg>`;
        });
      }
      // add icon add to cart
      if (!document.querySelector('button[name="add"] svg')) {
        document.querySelector('button[name="add"]').insertAdjacentHTML(
          "afterbegin",
          `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="21" viewBox="0 0 19 21" fill="none">
            <path d="M9.12403 0C7.14645 0 5.51877 1.51542 5.36371 3.43807H4.16532C3.07605 3.43807 2.27602 4.28356 2.11027 5.43001L0.0169455 18.9087C-0.147716 20.0476 0.913536 21 2.07468 21H16.1573C17.3273 21 18.3774 20.0474 18.213 18.9087L16.1224 5.43001C15.9626 4.32383 15.1878 3.43807 14.0666 3.43807H12.8837C12.7286 1.51543 11.1016 0 9.12403 0ZM9.12403 0.687483C10.7334 0.687483 12.047 1.89213 12.1989 3.43807H6.05119C6.20277 1.89213 7.51468 0.68747 9.12403 0.687483ZM4.16532 4.12621H14.0666C14.889 4.12621 15.3418 4.83095 15.4423 5.52668L17.5329 19.0081C17.6368 19.7278 16.894 20.3119 16.1573 20.3119H2.07468C1.34013 20.3119 0.595268 19.7316 0.699726 19.0081L2.79036 5.52668C2.90057 4.76325 3.38957 4.12621 4.16532 4.12621ZM12.2143 6.87412C12.2143 8.56124 10.836 9.92683 9.12403 9.92683C7.41206 9.92683 6.03574 8.56125 6.03574 6.87412C6.03574 6.41687 5.34827 6.41441 5.34827 6.87412C5.34826 8.93691 7.04458 10.6143 9.12403 10.6143C11.2035 10.6143 12.8998 8.93689 12.8998 6.87412C12.8998 6.41687 12.2143 6.41687 12.2143 6.87412Z" fill="white"/>
          </svg>`
        );
      }
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
      if (!document.querySelector(".new_icon_wishlist")) {
        document.querySelector(".the4-toolkit-wishlist svg.the4-wishlist-icon:not(.new_icon_wishlist)").outerHTML = `<svg class="the4-wishlist-icon new_icon_wishlist" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M17.143 3.53966L17.1509 3.54072L17.1589 3.54153C17.8016 3.6065 18.4239 3.80388 18.9866 4.12123C19.5493 4.43858 20.0401 4.86903 20.4282 5.38545L20.4294 5.38694C20.8628 5.95922 21.175 6.61391 21.3467 7.31097C21.5185 8.00802 21.5462 8.73279 21.4283 9.44094L21.4281 9.44169C20.9992 12.0415 19.0035 13.6291 16.6636 15.4577C16.6635 15.4577 16.6635 15.4578 16.6634 15.4578L16.6325 15.4819C14.9593 16.7885 13.1473 18.2034 12.0001 20.1707C10.8528 18.2034 9.04081 16.7885 7.36762 15.4819L7.33679 15.4579C7.33672 15.4578 7.33665 15.4577 7.33658 15.4577C4.99648 13.6282 3.00096 12.0414 2.57201 9.44273L2.57187 9.44193C2.45377 8.73363 2.48145 8.00868 2.6532 7.31145C2.82496 6.61421 3.13719 5.95936 3.57077 5.38696L3.57077 5.38696L3.57194 5.38541C3.96002 4.86893 4.45087 4.43843 5.01355 4.12102C5.57623 3.80361 6.19856 3.60618 6.84131 3.54117L6.84188 3.54111C7.02072 3.52281 7.20038 3.51367 7.38015 3.51371V3.51386L7.39239 3.51356C8.16488 3.4948 8.92889 3.678 9.60887 4.04504C10.2889 4.41208 10.8613 4.95025 11.2695 5.60634L11.2755 5.61604L11.282 5.62546C11.3621 5.74193 11.4693 5.83718 11.5944 5.90299C11.7195 5.96879 11.8587 6.00318 12.0001 6.00318C12.1414 6.00318 12.2807 5.96879 12.4058 5.90299C12.5309 5.83718 12.6381 5.74193 12.7182 5.62545L12.7239 5.61704L12.7294 5.60839C13.1895 4.87689 13.8501 4.293 14.6326 3.92624C15.415 3.55948 16.2864 3.4253 17.143 3.53966Z" stroke="#C20000"/>
  </svg>`;
      }

      // add size Guide
      document.querySelectorAll(".variant__label").forEach((el) => {
        if (el.textContent.includes("Ring size")) {
          if (document.querySelector(".variant-wrapper") && !document.querySelector(".size_guide")) {
            document.querySelectorAll(".variant-wrapper")[0].insertAdjacentHTML("beforebegin", sizeGuide);
          }
        }
      });
      if (document.querySelector(".size_guide")) {
        addPopupSize();
      }
      // add new Extend
      handleExtend();
      // add You’ll receive a gift with your order
      // if (document.querySelector(".new_extend") && document.querySelector(".product__price:not(.product__price--compare) .money")) {
      //   handleEarn();
      // }
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
        getPdpShorterProduction();
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
      // if (document.querySelector(".new_rush_order .one-whole")) {
      //   document.querySelector(".new_rush_order .one-whole label").innerHTML = `Add <b>"Rush Order"</b> to your purchase <span class="tooltip-toggle-rush" aria-label="Shorter production time" tabindex="0">
      //          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      //          <circle cx="7.87793" cy="7.70068" r="6.5" fill="white" stroke="#D4A298"></circle>
      //          <path d="M7.88724 5.70868C7.72191 5.70868 7.58324 5.65268 7.47124 5.54068C7.35924 5.42868 7.30324 5.29002 7.30324 5.12468C7.30324 4.95935 7.35924 4.82068 7.47124 4.70868C7.58324 4.59668 7.72191 4.54068 7.88724 4.54068C8.04724 4.54068 8.18324 4.59668 8.29524 4.70868C8.40724 4.82068 8.46324 4.95935 8.46324 5.12468C8.46324 5.29002 8.40724 5.42868 8.29524 5.54068C8.18324 5.65268 8.04724 5.70868 7.88724 5.70868ZM8.33524 6.29268V10.7007H7.42324V6.29268H8.33524Z" fill="#D4A298"></path>
      //          </svg>
      //        </span>`;
      // }
      // if (document.querySelector(".new_rush_order .one-half")) {
      //   document.querySelector(".new_rush_order .one-half label").innerHTML = `Add <b>"Rush Order"</b> to your purchase <span class="tooltip-toggle-rush" aria-label="Shorter production time" tabindex="0">
      //          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      //          <circle cx="7.87793" cy="7.70068" r="6.5" fill="white" stroke="#D4A298"></circle>
      //          <path d="M7.88724 5.70868C7.72191 5.70868 7.58324 5.65268 7.47124 5.54068C7.35924 5.42868 7.30324 5.29002 7.30324 5.12468C7.30324 4.95935 7.35924 4.82068 7.47124 4.70868C7.58324 4.59668 7.72191 4.54068 7.88724 4.54068C8.04724 4.54068 8.18324 4.59668 8.29524 4.70868C8.40724 4.82068 8.46324 4.95935 8.46324 5.12468C8.46324 5.29002 8.40724 5.42868 8.29524 5.54068C8.18324 5.65268 8.04724 5.70868 7.88724 5.70868ZM8.33524 6.29268V10.7007H7.42324V6.29268H8.33524Z" fill="#D4A298"></path>
      //          </svg>
      //        </span>`;
      // }
      //add new block Description
      if (!document.querySelector(".description_new_block") && document.querySelector(".new_rush_order")) {
        document.querySelector(".new_rush_order").insertAdjacentHTML("afterend", `<div class="description_new_block"><h2>Description</h2><div class="description_body no_visib"></div><span class="read_more_btn">Read more ></span></div>`);
      }
      if (document.querySelector(".description_new_block") && document.querySelector(".description_body").children.length === 0) {
        let children = document.querySelectorAll(".product-block.product-block--tab .collapsible-content__inner")[0]?.innerHTML;
        document.querySelector(".description_body").innerHTML = children;
        document.querySelectorAll(".product-block.product-block--tab")[0].classList.add("is_hidden");
      }
      // Similar Items
      let similarItems = setInterval(() => {
        if (document.querySelector("#syte-similar-items-container h3.syte-slider-title") && document.querySelector("#syte-similar-items-container h3.syte-slider-title").textContent !== "") {
          clearInterval(similarItems);
          setTimeout(() => {
            if (!document.querySelector("#syte-similar-items-container h3.syte-slider-title b")) {
              document.querySelector("#syte-similar-items-container h3.syte-slider-title").innerHTML = `Similar <b>Items</b>`;
            }
            if (!document.querySelector("#syte-similar-items-container h3.syte-slider-title + div + span")) {
              document.querySelector("#syte-similar-items-container h3.syte-slider-title + div").insertAdjacentHTML("afterend", `<span class="visib_similar_items"></span>`);
            }
          }, 1010);
        }
      }, 100);
      // Real Reviews from Real Customers
      let realReviews = setInterval(() => {
        if (document.querySelector("#stamped-reviews-widget[data-widget-type=carousel] .stamped-carousel-title") && document.querySelector("#stamped-reviews-widget[data-widget-type=carousel] .stamped-carousel-title").textContent !== "") {
          clearInterval(realReviews);
          setTimeout(() => {
            if (!document.querySelector("#stamped-reviews-widget[data-widget-type=carousel] .stamped-carousel-title b")) {
              document.querySelector("#stamped-reviews-widget[data-widget-type=carousel] .stamped-carousel-title").innerHTML = `Real Reviews from Real <b>Customers</b>`;
            }
          }, 1010);
        }
      }, 100);
      if (document.querySelector("#reviews") && document.querySelector("#stamped-reviews-widget")) {
        document.querySelector("#stamped-reviews-widget")?.insertAdjacentElement("afterend", document.querySelector("#reviews"));
      }
      //Recently viewed
      if (!document.querySelector("[data-section-type='recently-viewed'] .section-header__title b") && document.querySelector("[data-section-type='recently-viewed'] .section-header__title")) {
        document.querySelector("[data-section-type='recently-viewed'] .section-header__title").innerHTML = `Recently <b>viewed</b>`;
      }
      //BEAUTIFULLY PACKAGED
      if (!document.querySelector(".beautifully_packaged_box") && document.querySelector("#syte-similar-items-container")?.closest("section")) {
        document.querySelector("#syte-similar-items-container")?.closest("section").insertAdjacentHTML("afterend", beautifullyPackaged);
      }
      // READY TO SHIP
      if (document.querySelector(".beautifully_packaged_box") && !document.querySelector("#readyToShip")) {
        document.querySelector(".beautifully_packaged_box").insertAdjacentHTML("afterend", readyToShip);
      }
      if (window.innerWidth <= 768) {
        if (document.querySelector(".beautifully_packaged_box") && !document.querySelector(".new_tab")) {
          document.querySelector(".beautifully_packaged_box").insertAdjacentHTML("beforebegin", `<div class="new_tab"></div>`);
        }
        if (document.querySelector(".new_tab")) {
          document.querySelectorAll(".product-block.product-block--tab").forEach((el) => {
            document.querySelector(".new_tab").insertAdjacentElement("beforeend", el);
          });
        }
      }

      //Best Sellers
      if (document.querySelector("#readyToShip") && !document.querySelector("#bestSellers")) {
        document.querySelector("#readyToShip").insertAdjacentHTML("afterend", bestSellers);
      }
      if (document.querySelector("#bestSellers")) {
        renderBestSellers();
      }
      // slick Slider -> READY TO SHIP + Best Sellers
      slickSliderVar();
      // change img -> Shop similars + Try It on Your Hand
      if (document.querySelector(".product-single__meta .tangiblee-cta-wrapper")) {
        document.querySelector(".product__main-photos")?.insertAdjacentElement("afterbegin", document.querySelector(".product-single__meta .tangiblee-cta-wrapper"));
      }
      if (!document.querySelector(".icon_hand") && document.querySelector(".tangiblee-cta")) {
        document.querySelector(".tangiblee-cta").insertAdjacentHTML("afterbegin", `<img class="icon_hand" src="https://conversionratestore.github.io/projects/capucinne/img/try_it_on_your_hand_3.svg" alt="hand icon" />`);
      }
      if (document.querySelector("button.syte-discovery.syte-integration-injected")) {
        document.querySelectorAll("button.syte-discovery.syte-integration-injected").forEach((el) => {
          el.insertAdjacentHTML("afterbegin", `<img class="icon_magnifying_glass" src="https://conversionratestore.github.io/projects/capucinne/img/shop_similars_2.svg" alt="magnifying glass icon" />`);
        });
      }
      if (window.innerWidth <= 768) {
        if (document.querySelector(".product-slideshow .product__photo-zoom")) {
          document.querySelectorAll(".product-slideshow .product__photo-zoom").forEach((el) => {
            el.insertAdjacentHTML(
              "afterbegin",
              `<svg class="icon_zoom" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0909 10.5455C17.0909 12.2221 16.4605 13.7515 15.4238 14.9095L19.8935 19.3792C20.0355 19.5212 20.0355 19.7515 19.8935 19.8935C19.7515 20.0355 19.5212 20.0355 19.3792 19.8935L14.9095 15.4238C13.7515 16.4605 12.2221 17.0909 10.5455 17.0909C6.9305 17.0909 4 14.1604 4 10.5455C4 6.9305 6.9305 4 10.5455 4C14.1604 4 17.0909 6.9305 17.0909 10.5455ZM16.3636 10.5455C16.3636 12.1214 15.7371 13.551 14.7195 14.5987C14.6954 14.6134 14.6727 14.6312 14.6519 14.6519C14.6312 14.6727 14.6134 14.6954 14.5987 14.7195C13.551 15.7371 12.1214 16.3636 10.5455 16.3636C7.33216 16.3636 4.72727 13.7588 4.72727 10.5455C4.72727 7.33216 7.33216 4.72727 10.5455 4.72727C13.7588 4.72727 16.3636 7.33216 16.3636 10.5455ZM10.5455 6.90909C10.7463 6.90909 10.9091 7.0719 10.9091 7.27273V10.1818H13.8182C14.019 10.1818 14.1818 10.3446 14.1818 10.5455C14.1818 10.7463 14.019 10.9091 13.8182 10.9091H10.9091V13.8182C10.9091 14.019 10.7463 14.1818 10.5455 14.1818C10.3446 14.1818 10.1818 14.019 10.1818 13.8182V10.9091H7.27273C7.0719 10.9091 6.90909 10.7463 6.90909 10.5455C6.90909 10.3446 7.0719 10.1818 7.27273 10.1818H10.1818V7.27273C10.1818 7.0719 10.3446 6.90909 10.5455 6.90909Z" fill="black"/>
              </svg>`
            );
          });
        }
      }
      // add new tab
      document.querySelectorAll(".product-block--tab .collapsible-trigger-btn--borders").forEach((el) => {
        if (el.textContent.includes("size")) {
          el.closest(".product-block--tab").insertAdjacentHTML(
            "afterend",
            `<div class="product-block product-block--tab">
  <div class="collapsibles-wrapper collapsibles-wrapper--border-bottom">
    <button type="button" class="label collapsible-trigger collapsible-trigger-btn collapsible-trigger-btn--borders collapsible--auto-height" aria-controls="productionTime" aria-expanded="false">
      Production time
      <span class="collapsible-trigger__icon" role="presentation">
        <svg class="icon icon--wide icon-chevron-down" width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.0518 0.974121L9.05176 8.97412L1.05176 0.974121" stroke="black" stroke-linecap="square" stroke-linejoin="round"></path>
        </svg>
      </span>
    </button>
    <div id="productionTime" class="collapsible-content collapsible-content--all" style="height: 0px">
      <div class="collapsible-content__inner rte collapsible--auto-height">
        <div style="text-align: left">
          <meta charset="utf-8" />
          <p>All of our pieces are made by hand and require a varying production time of 6-8 weeks before the items are shipped to you. In order to create a custom piece that will fit you perfectly and made according to your wishes, please keep in mind it may take a bit longer, but nevertheless we will be constantly informing you of the process along the way. If you want to rush your order, please contact us prior your purchase, as well as for any additional questions.</p>
          <p>• We will put your piece into production once the payment is received.</p>
          <p>• The production usually takes approx. 6-8 weeks. Some items may acquire more days to be finished, depending on the availability of stones and complexity of the design.</p>
          <p>• If sending as a gift, please provide us with the address of the recipient and with your personal message to the recipient. We will send it directly to them with a gift card and wrapping.</p>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="product-block product-block--tab">
  <div class="collapsibles-wrapper collapsibles-wrapper--border-bottom">
    <button type="button" class="label collapsible-trigger collapsible-trigger-btn collapsible-trigger-btn--borders collapsible--auto-height" aria-controls="shippingReturnsEndExchanges" aria-expanded="false">
      Shipping, returns and exchanges
      <span class="collapsible-trigger__icon collapsible-trigger__icon--open" role="presentation">
        <svg class="icon icon--wide icon-chevron-down" width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.0518 0.974121L9.05176 8.97412L1.05176 0.974121" stroke="black" stroke-linecap="square" stroke-linejoin="round"></path>
        </svg>
      </span>
    </button>
    <div id="shippingReturnsEndExchanges" class="collapsible-content collapsible-content--all">
      <div class="collapsible-content__inner rte collapsible--auto-height">
        <div style="text-align: left">
          <meta charset="utf-8" />
          <p>We are located in Slovenia, Europe. We send products internationally throughout the world. Items are fully insured and sent worldwide with express shipping and require a signature upon delivery.</p>
          <p>If a package gets lost, is stolen or in any other way ends up not being delivered to the customer, all our packages are 100% insured which means we will (in instances stated above) remake the product once more and deliver it in to the customer in a timely manner.</p>
          <p>The package will be sent without any extra expense to the customer.</p>
          <p>EU 1-3 business days</p>
          <p>NON EU 2-10 business days</p>
          <p> <b>Free to return within 14 days</b></p>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="product-block product-block--tab rush_orders_tab">
  <div class="collapsibles-wrapper collapsibles-wrapper--border-bottom">
    <button type="button" class="label collapsible-trigger collapsible-trigger-btn collapsible-trigger-btn--borders collapsible--auto-height" aria-controls="rushOrders" aria-expanded="false">
      Rush orders
      <span class="collapsible-trigger__icon collapsible-trigger__icon--open" role="presentation">
        <svg class="icon icon--wide icon-chevron-down" width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.0518 0.974121L9.05176 8.97412L1.05176 0.974121" stroke="black" stroke-linecap="square" stroke-linejoin="round"></path>
        </svg>
      </span>
    </button>
    <div id="rushOrders" class="collapsible-content collapsible-content--all">
      <div class="collapsible-content__inner rte collapsible--auto-height">
        <div style="text-align: left">
          <meta charset="utf-8" />
          <p>If you find a piece you like that isn’t in our Ready to Ship Collection, you can pay a premium to make it a rush order.</p>
          <p>Most of our jewelry pages have a “Rush Order” button. Click on that and it will move your order to the top of our work schedule.</p>
          <p>Mostly</p>
        </div>
      </div>
    </div>
  </div>
</div>`
          );
          if (window.innerWidth > 768) {
            el.click();
          }
        }
      });
      // add 'Create Custom'
      if (document.querySelector(".product-single__meta") && !document.querySelector(".create_custom_block")) {
        document.querySelector(".product-single__meta").insertAdjacentHTML("beforeend", createCustomBlock);
      }
      if (window.innerWidth <= 768) {
        if (document.querySelector(".create_custom_block") && document.querySelector(".create_custom_img").src !== "https://conversionratestore.github.io/projects/capucinne/img/create_custom_jewelry_img_mob.jpg") {
          document.querySelector(".create_custom_img").src = "https://conversionratestore.github.io/projects/capucinne/img/create_custom_jewelry_img_mob.jpg";
        }
      }
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
          pushDataLayer("exp_barriers_b_e_pp", `${item.querySelector(".term-length").textContent}`, "Button", "Extend");

          if (el.classList.contains("active")) {
            el.classList.remove("active");
          } else {
            document.querySelector(".new_extend_item.active")?.classList.remove("active");
            el.classList.add("active");
          }
        });
      }

      document.querySelector(".new_extend_covered")?.addEventListener("click", () => {
        innerEl.querySelector(".info-link")?.click();
      });
    }

    function handleEarn() {
      if (!window.location.pathname.includes("/products/")) return false;
      // if (!document.querySelector(".earn_gift")) {
      //   document.querySelector(".new_extend").insertAdjacentHTML("afterend", earnStart);
      // }
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
      let dateAfter8Weeks = new Date(date.getTime() + 8 * 7 * 24 * 60 * 60 * 1000).toLocaleString("en-US", options);
      let dateAfter9Weeks = new Date(date.getTime() + 9 * 7 * 24 * 60 * 60 * 1000).toLocaleString("en-US", options);
      console.log(dateAfter8Weeks);

      const deliveryFrom = new Date(date.getTime() + (8 * 7 + 5) * 24 * 60 * 60 * 1000).toLocaleString("en-US", options);
      const deliferyAfter = new Date(date.getTime() + (9 * 7 + 5) * 24 * 60 * 60 * 1000).toLocaleString("en-US", options);

      document.querySelector(".production_delivery").innerHTML = `
        <h3>Production & Delivery </h3>
        <div class="production_time_available is_hidden">
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
            <div class='delivery_timeline_item_date shorter_time'>${dateAfter8Weeks}-${dateAfter9Weeks}</div>
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
        <a href="https://capucinne.com/pages/shipping-information" target="_blank" class="learn_more_btn">Learn more ></a>
    `;
    }

    function onDiffClick() {
      let a = setInterval(() => {
        if (document.querySelector(".expert_advice")) {
          clearInterval(a);
          document.querySelector(".expert_advice").addEventListener("click", () => {
            pushDataLayer("exp_barriers_b_glea", "Get live expert advice", "Button", "Get live expert advice");
            document.querySelectorAll(".product-block--sales-point li.sales-point .icon-and-text")[1].click();
          });
        }
      }, 100);
      let b = setInterval(() => {
        if (document.querySelector(".description_new_block .read_more_btn")) {
          clearInterval(b);
          document.querySelector(".description_new_block .read_more_btn").addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(".description_body").classList.toggle("no_visib");
            document.querySelector(".description_new_block").scrollIntoView({ block: "start", behavior: "smooth" });
            if (document.querySelector(".description_body").classList.contains("no_visib")) {
              e.currentTarget.textContent = "Read more >";
            } else {
              e.currentTarget.textContent = "Read Less <";
            }
          });
        }
      }, 100);
      let c = setInterval(() => {
        if (document.querySelector("#shopify-block-cadd6db7-a422-4c1f-90e3-91f50c296730 + .product-block > div")) {
          clearInterval(c);
          document.querySelector("#shopify-block-cadd6db7-a422-4c1f-90e3-91f50c296730 + .product-block > div").addEventListener("click", (e) => {
            e.preventDefault();
            pushDataLayer("exp_barriers_l_fs_r", "reviews", "Link", "First screen");
            if (e.currentTarget) {
              const scrollTarget = document.querySelector("#stamped-reviews-widget");
              let topOffset = 100;
              if (window.innerWidth > 768) {
                topOffset = 150;
              }
              const elementPosition = scrollTarget.getBoundingClientRect().top;
              const offsetPosition = elementPosition - topOffset;

              window.scrollBy({
                top: offsetPosition,
                behavior: "smooth",
              });
            }
          });
        }
      }, 100);

      let yourHand = setInterval(() => {
        if (document.querySelector(".tangiblee-cta-wrapper .tangiblee-cta")) {
          clearInterval(yourHand);
          document.querySelector(".tangiblee-cta-wrapper .tangiblee-cta").addEventListener("click", (e) => {
            if (e.currentTarget) {
              pushDataLayer("exp_barriers_b_fs_tyh", "Try it on Your Hand", "Button", "First screen");
            }
          });
        }
      }, 100);
      let photoZoom = setInterval(() => {
        if (document.querySelector(".product-slideshow .is-selected .product__photo-zoom")) {
          clearInterval(photoZoom);
          document.querySelectorAll(".product-slideshow .is-selected .product__photo-zoom").forEach((el) => {
            el.addEventListener("click", () => {
              pushDataLayer("exp_barriers_b_fs_mg", "Magnifying glass", "Button", "First screen");
            });
          });
        }
      }, 100);
      document.querySelectorAll("button.syte-discovery.syte-integration-injected")?.forEach((el) => {
        el.addEventListener("click", () => {});
      });

      document.querySelector(".the4-toolkit-wishlist a")?.addEventListener("click", () => {
        pushDataLayer("exp_barriers_b_fs_wl", "Wish list", "Button", "First screen");
      });
      let stampedReviews = setInterval(() => {
        if (document.querySelector("#stamped-reviews-widget[data-widget-type=carousel] a")) {
          clearInterval(stampedReviews);
          document.querySelectorAll("#stamped-reviews-widget[data-widget-type=carousel] a").forEach((el) => {
            el.addEventListener("click", (e) => {
              pushDataLayer("exp_barriers_s_r_rt", `${e.currentTarget.closest(".stamped-ratings-wrapper").querySelector(".stamped-reviews-title a").textContent}`, "Section", "Reviews");
            });
          });
        }
      }, 100);
      let bestSellersLink = setInterval(() => {
        if (document.querySelector("#bestSellers .product_link")) {
          clearInterval(bestSellersLink);
          document.querySelectorAll("#bestSellers .product_link").forEach((el) => {
            el.addEventListener("click", (e) => {
              pushDataLayer("exp_barriers_p_bs_pn", `${e.currentTarget.closest(".product_content").querySelector(".product_title").textContent}`, "Produst", "Best sellers");
            });
          });
        }
      }, 100);
      let readyToShipLink = setInterval(() => {
        if (document.querySelector("#readyToShip .grid-product__link")) {
          clearInterval(readyToShipLink);
          document.querySelectorAll("#readyToShip .grid-product__link").forEach((el) => {
            el.addEventListener("click", (e) => {
              pushDataLayer("exp_barriers_p_rs_pn", `${e.currentTarget.querySelector(".grid-product__title").textContent}`, "Produst", "Ready to ship");
            });
          });
        }
      }, 100);
      let similarItemsLink = setInterval(() => {
        if (document.querySelector("#syte-similar-items-container .syte-slider-layout-container .syte-offers-item")) {
          clearInterval(similarItemsLink);
          document.querySelectorAll("#syte-similar-items-container .syte-slider-layout-container .syte-offers-item").forEach((el) => {
            el.addEventListener("click", (e) => {
              pushDataLayer("exp_barriers_p_si_pn", `${e.currentTarget.querySelector(".syte-offers-item-desc").textContent}`, "Produst", "Similar items");
            });
          });
        }
      }, 100);
      let createCustomBtn = setInterval(() => {
        if (document.querySelector(".create_custom_link")) {
          clearInterval(createCustomBtn);
          document.querySelector(".create_custom_link").addEventListener("click", (e) => {
            pushDataLayer("exp_barriers_l_nsu_cc", "Create custom", "Link", "Need something unique");
          });
        }
      }, 100);
      let deliveryLearnMoreBtn = setInterval(() => {
        if (document.querySelector(".learn_more_btn")) {
          clearInterval(deliveryLearnMoreBtn);
          document.querySelector(".learn_more_btn").addEventListener("click", () => {
            pushDataLayer("exp_barriers_l_pd_lm", "Learn more", "Link", "Production & Delivery");
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

    function addSticky() {
      const el = `
      <div class='lav-sticky'>
        <div class='lav-sticky__info'>
          <div class='lav-sticky__img'>
            <img src='${item.ImageURL}' />
          </div>
          <div class='lav-sticky__title'>
            ${document.querySelector(".product-single__title").innerText}
          </div>
          <div class='lav-sticky__price'>
            <div class='lav-sticky__price-old'>$2,110.00</div>
            <div class='lav-sticky__price-new lav-product-price'></div>
          </div>
        </div>
        <div class='lav-sticky__btn_price'>
          <span class='lav-product-price lav-btn-price lav-desk'></span>
          <button class='lav-sticky__btn lav-btn'>
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="21" viewBox="0 0 19 21" fill="none">
            <path d="M9.12403 0C7.14645 0 5.51877 1.51542 5.36371 3.43807H4.16532C3.07605 3.43807 2.27602 4.28356 2.11027 5.43001L0.0169455 18.9087C-0.147716 20.0476 0.913536 21 2.07468 21H16.1573C17.3273 21 18.3774 20.0474 18.213 18.9087L16.1224 5.43001C15.9626 4.32383 15.1878 3.43807 14.0666 3.43807H12.8837C12.7286 1.51543 11.1016 0 9.12403 0ZM9.12403 0.687483C10.7334 0.687483 12.047 1.89213 12.1989 3.43807H6.05119C6.20277 1.89213 7.51468 0.68747 9.12403 0.687483ZM4.16532 4.12621H14.0666C14.889 4.12621 15.3418 4.83095 15.4423 5.52668L17.5329 19.0081C17.6368 19.7278 16.894 20.3119 16.1573 20.3119H2.07468C1.34013 20.3119 0.595268 19.7316 0.699726 19.0081L2.79036 5.52668C2.90057 4.76325 3.38957 4.12621 4.16532 4.12621ZM12.2143 6.87412C12.2143 8.56124 10.836 9.92683 9.12403 9.92683C7.41206 9.92683 6.03574 8.56125 6.03574 6.87412C6.03574 6.41687 5.34827 6.41441 5.34827 6.87412C5.34826 8.93691 7.04458 10.6143 9.12403 10.6143C11.2035 10.6143 12.8998 8.93689 12.8998 6.87412C12.8998 6.41687 12.2143 6.41687 12.2143 6.87412Z" fill="white"/>
          </svg>
           <span class='lav-product-price lav-btn-price lav-mob'></span>
            <span class='lav-btn-caption'>Add to cart</span>
          </button>
        </div>

      </div>
    `;

      document.querySelector("body").insertAdjacentHTML("beforeend", el);
      document.querySelectorAll(".lav-sticky__btn_price .lav-product-price").forEach((el) => {
        el.style.display = "none";
      });
      document.querySelector(".lav-sticky__btn svg").style.display = "none";

      let activated = false;

      if (document.querySelector('[name="properties[Ring size]"]')) {
        document.querySelector('[name="properties[Ring size]"]').insertAdjacentHTML("afterbegin", '<option value="Select size" selected>Select size</option>');
        document
          .querySelector(".extend-offer")
          .insertAdjacentHTML(
            "afterend",
            '<div class="lav-select_size"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="21" viewBox="0 0 19 21" fill="none"><path d="M9.12403 0C7.14645 0 5.51877 1.51542 5.36371 3.43807H4.16532C3.07605 3.43807 2.27602 4.28356 2.11027 5.43001L0.0169455 18.9087C-0.147716 20.0476 0.913536 21 2.07468 21H16.1573C17.3273 21 18.3774 20.0474 18.213 18.9087L16.1224 5.43001C15.9626 4.32383 15.1878 3.43807 14.0666 3.43807H12.8837C12.7286 1.51543 11.1016 0 9.12403 0ZM9.12403 0.687483C10.7334 0.687483 12.047 1.89213 12.1989 3.43807H6.05119C6.20277 1.89213 7.51468 0.68747 9.12403 0.687483ZM4.16532 4.12621H14.0666C14.889 4.12621 15.3418 4.83095 15.4423 5.52668L17.5329 19.0081C17.6368 19.7278 16.894 20.3119 16.1573 20.3119H2.07468C1.34013 20.3119 0.595268 19.7316 0.699726 19.0081L2.79036 5.52668C2.90057 4.76325 3.38957 4.12621 4.16532 4.12621ZM12.2143 6.87412C12.2143 8.56124 10.836 9.92683 9.12403 9.92683C7.41206 9.92683 6.03574 8.56125 6.03574 6.87412C6.03574 6.41687 5.34827 6.41441 5.34827 6.87412C5.34826 8.93691 7.04458 10.6143 9.12403 10.6143C11.2035 10.6143 12.8998 8.93689 12.8998 6.87412C12.8998 6.41687 12.2143 6.41687 12.2143 6.87412Z" fill="white"/></svg> Add to cart</div>'
          );
        document.querySelector("[data-add-to-cart]").style.display = "none";

        document.querySelector('[name="properties[Ring size]"]').addEventListener("change", function (e) {
          if (e.target.value !== "Select size") {
            activated = true;
            document.querySelectorAll(".lav-sticky__btn_price .lav-product-price").forEach((el) => {
              if (window.innerWidth > 768) {
                if (el.classList.contains("lav-desk")) {
                  el.style.display = "block";
                }
              } else {
                if (el.classList.contains("lav-mob")) {
                  el.style.display = "block";
                }
              }
            });
            document.querySelector(".lav-sticky__btn svg").style.display = "block";
            document.querySelector("[data-add-to-cart]").style.display = "flex";
            document.querySelector(".lav-select_size").style.display = "none";
            document.querySelector('[name="properties[Ring size]"]').classList.remove("lav-error");
            document.querySelector(".lav-error-txt")?.remove();
          } else {
            activated = false;
            document.querySelectorAll(".lav-sticky__btn_price .lav-product-price").forEach((el) => {
              if (window.innerWidth > 768) {
                if (el.classList.contains("lav-desk")) {
                  el.style.display = "none";
                }
              } else {
                if (el.classList.contains("lav-mob")) {
                  el.style.display = "none";
                }
              }
            });
            document.querySelector(".lav-sticky__btn svg").style.display = "none";
            document.querySelector("[data-add-to-cart]").style.display = "none";
            document.querySelector(".lav-select_size").style.display = "flex";
          }
        });
      } else {
        activated = true;
        document.querySelectorAll(".lav-sticky__btn_price .lav-product-price").forEach((el) => {
          if (window.innerWidth > 768) {
            if (el.classList.contains("lav-desk")) {
              el.style.display = "block";
            }
          } else {
            if (el.classList.contains("lav-mob")) {
              el.style.display = "block";
            }
          }
        });
      }

      if (document.querySelector(".lav-select_size")) {
        document.querySelector(".lav-select_size").addEventListener("click", () => {
          pushDataLayer("exp_barriers_b_atc", "Add to cart", "Button", "Add to cart");
          const el = document.querySelector(".variant-wrapper");
          const offset = el.getBoundingClientRect().top + window.scrollY - 120;
          document.querySelector('[name="properties[Ring size]"]').classList.add("lav-error");
          if (!document.querySelector(".lav-error-txt")) {
            document.querySelector('[name="properties[Ring size]"]').insertAdjacentHTML("afterend", `<span class="lav-error-txt">Please select your size</span>`);
          }
          if (document.querySelector(".lav-error-txt")) {
            pushDataLayer("exp_barriers_v_s_psys", "Please select your size", "Visibility", "Size");
          }
          window.scrollTo({
            top: offset,
            behavior: "smooth",
          });
        });
      }

      document.querySelector(".lav-sticky__btn").addEventListener("click", () => {
        if (activated) {
          // pushDataLayer("new_payments_sticky_add_to_cart", "Sticky add to cart", "Button", "Sticky section");
          isAddCart = true;
          document.querySelector("button.add-to-cart").click();
          setTimeout(() => {
            isAddCart = false;
          }, 200);
        } else {
          // pushDataLayer("new_payments_sticky_select_size", "Sticky select size", "Button", "Sticky section");
          const el = document.querySelector(".variant-wrapper");
          const offset = el.getBoundingClientRect().top + window.scrollY - 120;
          document.querySelector('[name="properties[Ring size]"]').classList.add("lav-error");
          if (!document.querySelector(".lav-error-txt")) {
            document.querySelector('[name="properties[Ring size]"]').insertAdjacentHTML("afterend", `<span class="lav-error-txt">Please select your size</span>`);
          }
          if (document.querySelector(".lav-error-txt")) {
            pushDataLayer("exp_barriers_v_s_psys", "Please select your size", "Visibility", "Size");
          }
          window.scrollTo({
            top: offset,
            behavior: "smooth",
          });
        }
      });

      waitFor(
        () => document.querySelector(".product__price .money")?.innerText,
        () => {
          for (let spot of document.querySelectorAll(".lav-product-price")) {
            spot.innerText = document.querySelector(".product__price .money").innerText.trim();
          }
        }
      );

      const obs = new MutationObserver((muts) => {
        for (let mut of muts) {
          if (mut.target.classList.contains("money")) {
            document.querySelectorAll(".lav-sticky__btn_price .lav-product-price").forEach((el) => {
              el.innerText = mut.target.innerText.trim();
            });
            document.querySelector(".lav-sticky__price-new").innerText = mut.target.innerText.trim();
            handeGetYourMoneyOff();
            setInterval(() => {
              handleExtend();
            }, 500);
          }
        }
      });
      obs.observe(document.querySelector(".product__price:not(.product__price--compare)"), {
        childList: true,
        subtree: true,
        characterData: true,
      });
    }

    function slickSliderVar() {
      let slickInterval = setInterval(() => {
        if (typeof jQuery("#bestSellers .best_sellers_list").slick === "function" && document.querySelector("#bestSellers .best_sellers_list")?.children.length !== arrProductBestSellers.length) {
          clearInterval(slickInterval);

          //  slider
          let slider = jQuery("#bestSellers .best_sellers_list")
            .not("#bestSellers .slick-initialized")
            .slick({
              slidesToShow: 5,
              slidesToScroll: 1,
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
          slider.on("swipe", function () {
            pushDataLayer("exp_barriers_s_bs_h", "Horizontal", "Scroll", "Best sellers");
          });
        }
      }, 100);

      let slickReadyToShip = setInterval(() => {
        if (typeof jQuery("#readyToShip .ready_to_ship_list").slick === "function" && document.querySelector(".ready_to_ship_list")?.children.length >= 179) {
          clearInterval(slickReadyToShip);

          //  slider
          let slider = jQuery("#readyToShip .ready_to_ship_list")
            .not("#readyToShip .slick-initialized")
            .slick({
              slidesToShow: 5,
              slidesToScroll: 1,
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
          slider.on("init", function () {});
          slider.on("swipe", function () {
            pushDataLayer("exp_barriers_s_rs_h", "Horizontal", "Scroll", "Ready to ship");
          });
          document.querySelector(".ready_to_ship_list").style.display = "block";
        }
      }, 100);
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

    function handeGetYourMoneyOff() {
      //  add get Discount
      if (document.querySelector("[data-product-price]") && !document.querySelector("[data-product-price] .get_discount_block")) {
        document.querySelector("[data-product-price]").insertAdjacentHTML("beforeend", getDiscount);
      }
      if (document.querySelector(".lav-sticky") && !document.querySelector(".lav-sticky__btn_price .get_discount_block")) {
        document.querySelector(".lav-sticky__btn_price .lav-sticky__btn").insertAdjacentHTML("beforebegin", getDiscount);
      }
      let doublyCurrency = "";
      let price = +document.querySelector("[data-product-price] .money")?.textContent.replace(/\D/g, "") / 100;
      let curr = document.querySelector("[data-product-price] .money")?.textContent.slice(0, 1);
      if (document.querySelector("[data-product-price] .money")?.getAttribute("doubly-currency")) {
        doublyCurrency = document.querySelector("[data-product-price] .money")?.getAttribute("doubly-currency");
      }
      let moneyOff = (price * 0.05).toFixed(0);
      if (document.querySelectorAll(".get_discount_block")) {
        document.querySelectorAll(".get_discount_block span").forEach((el) => {
          el.textContent = `${curr}${moneyOff} ${doublyCurrency}`;
        });
        document.querySelectorAll(".get_discount_block").forEach((el) => {
          el.addEventListener("click", (e) => {
            //
            if (!e.target.getAttribute("data-test")) {
              pushDataLayer("exp_barriers_l_fs_gyo", "Get your off", "Link", "First screen");
            }
            e.target.setAttribute("data-test", "1");
            setTimeout(() => {
              if (e.target.getAttribute("data-test")) {
                e.target.removeAttribute("data-test");
              }
            }, 1000);
          });
        });
      }
    }
    function addPopupSize() {
      if (!document.querySelector(".overlay_popup")) {
        document.querySelector(" body").insertAdjacentHTML("afterbegin", popUp);
      }

      if (document.querySelector(" .overlay_popup")) {
        let overlay = document.querySelector(" .overlay_popup"),
          containerPopup = overlay.querySelector(".container_popup"),
          btnClose = overlay.querySelector("svg"),
          scroll = calcScroll();

        if (!document.querySelector(" .overlay_popup .content_popup")) {
          containerPopup?.insertAdjacentHTML("beforeend", contentPopup);
        }

        if (document.querySelector(" .overlay_popup .content_popup")) {
          if (document.querySelector(".overlay_popup .content_popup table tbody").children.length !== arrSize.length) {
            for (let key in arrSize) {
              document.querySelector(".overlay_popup .content_popup table tbody")?.insertAdjacentHTML("beforeend", setSize(key, arrSize[key][0], arrSize[key][1], arrSize[key][2], arrSize[key][3], arrSize[key][4]));
            }
          }
          document.querySelector(".size_guide_txt span:nth-child(2)").addEventListener("click", (el) => {
            pushDataLayer("exp_barriers_b_sgpp_mm", "MM", "Button", "Size guide pop up");
            el.currentTarget.classList.add("active_var");
            if (el.currentTarget.nextElementSibling.classList.contains("active_var")) {
              el.currentTarget.nextElementSibling.classList.remove("active_var");
            }
            document.querySelectorAll(".inches_var").forEach((el) => {
              if (!el.classList.contains("is_hidden")) {
                el.classList.add("is_hidden");
              }
            });
            document.querySelectorAll(".mm_var").forEach((el) => {
              if (el.classList.contains("is_hidden")) {
                el.classList.remove("is_hidden");
              }
            });
          });
          document.querySelector(".size_guide_txt span:nth-child(3)").addEventListener("click", (el) => {
            pushDataLayer("exp_barriers_b_sgpp_i", "Inches", "Button", "Size guide pop up");
            el.currentTarget.classList.add("active_var");
            if (el.currentTarget.previousElementSibling.classList.contains("active_var")) {
              el.currentTarget.previousElementSibling.classList.remove("active_var");
            }
            document.querySelectorAll(".inches_var").forEach((el) => {
              if (el.classList.contains("is_hidden")) {
                el.classList.remove("is_hidden");
              }
            });
            document.querySelectorAll(".mm_var").forEach((el) => {
              if (!el.classList.contains("is_hidden")) {
                el.classList.add("is_hidden");
              }
            });
          });

          function setSize(t1, t2, t3, t4, t5, t6) {
            return `
            <tr>
              <td><span class="mm_var">${t1}</span><span class="inches_var is_hidden">${t6}</span></td>
              <td><span>${t2}</span></td>
              <td><span>${t3}</span></td>
              <td><span>${t4}</span></td>
              <td><span>${t5}</span></td>
            </tr>
            `;
          }
        }

        btnClose.addEventListener("click", (e) => {
          if (!e.target.getAttribute("data-test")) {
            pushDataLayer("exp_barriers_b_sgpp_c", "Close", "Button", "Size guide pop up");
          }
          e.target.setAttribute("data-test", "1");
          setTimeout(() => {
            if (e.target.getAttribute("data-test")) {
              e.target.removeAttribute("data-test");
            }
          }, 1000);

          onClosePopup();
        });

        overlay.addEventListener("click", (e) => {
          if (e.target.matches(".overlay_popup")) {
            onClosePopup();
            pushDataLayer("exp_barriers_b_sgpp_c", "Close", "Button", "Size guide pop up");
          }
        });
        document.querySelector(".size_guide").addEventListener("click", () => {
          pushDataLayer("exp_barriers_b_s_sg", "Size guide", "Button", "Size");
          onOpenPopup();
        });

        function onClosePopup() {
          visibElem();
          overlay.classList.add("is_hidden_var");
          document.body.style.marginRight = `0px`;
          document.body.style.overflow = "auto";
          document.body.style.display = "initial";
          // setTimeout(() => {
          //   document.querySelector(".content_popup")?.remove();
          // }, 400);
        }
        function onOpenPopup() {
          overlay.classList.remove("is_hidden_var");
          document.body.style.overflow = "hidden";
          document.body.style.marginRight = `${scroll}px`;
          document.body.style.display = "block";
          document.body.style.height = "100%";
        }
        function calcScroll() {
          let div = document.createElement("div");
          div.style.width = "50px";
          div.style.height = "50px";
          div.style.overflowY = "scroll";
          div.style.visibility = "hidden";

          document.body.appendChild(div);
          let scrollWidth = div.offsetWidth - div.clientWidth;
          div.remove();
          return scrollWidth;
        }
        function visibElem() {
          let obsV = new IntersectionObserver(visibilityV, {
            threshold: 1,
          });

          let obsV2 = new IntersectionObserver(visibilityV2, {
            threshold: 1,
          });

          let intV1 = setInterval(() => {
            if (document.querySelector(".size_guide_title")) {
              clearInterval(intV1);
              obsV.observe(document.querySelector(".size_guide_title"));
            }
          }, 100);

          function visibilityV(entries) {
            entries.forEach((i) => {
              if (i.isIntersecting) {
                setTimeout(function () {
                  obsV2.observe(i.target);
                }, 1000);
              }
            });
          }
          function visibilityV2(entries) {
            entries.forEach((i) => {
              if (i.isIntersecting) {
                if (i.target.classList.contains("size_guide_title")) {
                  pushDataLayer("exp_barriers_v_sgpp_ft", "1000", "Visibility", "Size guide pop up");
                }

                obsV.unobserve(i.target);
              }
              obsV2.unobserve(i.target);
            });
          }
        }
      }
    }

    updateGiftCart();
    function updateGiftCart() {
      let s = setInterval(() => {
        if (document.querySelector(".cart__items")) {
          clearInterval(s);
          document.querySelectorAll(".cart__item--variants > div").forEach((el) => {
            if (el.closest(".cart__item").querySelector(".cart__image a").href === "https://capucinne.com/products/gift?variant=46796290425173") {
              if (el.textContent === "Product: Chain Bracelet") {
                el.textContent = "Half Moon Capucinne bracelet";
                el.closest(".cart__item").querySelector(".cart__price").innerHTML = `<b>$0.00</b>`;
              }
              setTimeout(() => {
                if (el.closest(".cart__item").querySelector(".cart__image img").srcset !== "https://conversionratestore.github.io/projects/capucinne/chain.jpg") {
                  el.closest(".cart__item").querySelector(".cart__image img").srcset = "https://conversionratestore.github.io/projects/capucinne/chain.jpg";
                }
              }, 700);
            }

            if (el.closest(".cart__item").querySelector(".cart__image a").href === "https://capucinne.com/products/gift?variant=46796290392405") {
              if (el.textContent === "Product: Stud Earrings") {
                el.textContent = "Half moon Capucinne earrings";
                el.closest(".cart__item").querySelector(".cart__price").innerHTML = `<b>$0.00</b>`;
              }
              setTimeout(() => {
                if (el.closest(".cart__item").querySelector(".cart__image img").srcset !== "https://conversionratestore.github.io/projects/capucinne/earn.jpg") {
                  el.closest(".cart__item").querySelector(".cart__image img").srcset = "https://conversionratestore.github.io/projects/capucinne/earn.jpg";
                }
              }, 700);
            }
          });
        }
      }, 100);
    }

    function getPdpShorterProduction() {
      let product;
      fetch(`https://conversionratestore.github.io/projects/capucinne/settings_pdp.json`)
        .then((response) => response.json())
        .then((json) => {
          product = json.pdp;
          product.forEach((el) => {
            if (window.location.pathname.includes(el)) {
              console.log(el);
              localStorage.setItem("shorterProduction", "yes");
              if (localStorage.getItem("shorterProduction")) {
                const options = { day: "2-digit", month: "short" };
                const date = new Date();
                let dateAfter8Weeks = new Date(date.getTime() + 3.5 * 7 * 24 * 60 * 60 * 1000).toLocaleString("en-US", options);
                let dateAfter9Weeks = new Date(date.getTime() + 4 * 7 * 24 * 60 * 60 * 1000).toLocaleString("en-US", options);
                document.querySelector(".shorter_time").textContent = `${dateAfter8Weeks}-${dateAfter9Weeks}`;
              }
              if (document.querySelector(".production_time_available")?.classList.contains("is_hidden")) {
                document.querySelector(".production_time_available").classList.remove("is_hidden");
              }
            }
          });
        });
    }

    function handleKlarna() {
      if (document.querySelector("klarna-placement div")?.style.display === "none") return false;
      const original = document.querySelector("klarna-placement div")?.shadowRoot?.querySelector("div");

      if (window.innerWidth <= 768) {
        original.querySelector(".container").style = "border: 0;background: rgba(225, 149, 169, 0.10);padding: 8px 12px;margin-bottom: 44px";
      } else {
        original.querySelector(".container").style = "border: 0;background: rgba(225, 149, 169, 0.10);padding: 8px 12px;margin-bottom: 16px";
      }
      original.querySelector(".text-wrapper").style = "margin-left: 16px;";
      original.querySelector('.text-wrapper .text[part="osm-message"]').style = "font-size: 13px;font-weight: 400;line-height: 18px;color: #1C1D1D;";
      original.querySelector(".text button").style = "color: #565656;";
      original.querySelector(".text button").textContent = "View details >";

      original.querySelector(".text button").addEventListener("click", (e) => {
        if (!e.target.getAttribute("data-test")) {
          pushDataLayer("exp_barriers_l_k_vd", "View details", "Link", "Klarna");
        }
        e.target.setAttribute("data-test", "1");
        setTimeout(() => {
          if (e.target.getAttribute("data-test")) {
            e.target.removeAttribute("data-test");
          }
        }, 1000);
      });
    }
    visibElem();
    function visibElem() {
      let obsV = new IntersectionObserver(visibilityV, {
        threshold: 1,
      });

      let obsV2 = new IntersectionObserver(visibilityV2, {
        threshold: 1,
      });

      let timeV = 3000;

      let intV1 = setInterval(() => {
        if (document.querySelector(".earn_gift_wrapp")) {
          clearInterval(intV1);
          obsV.observe(document.querySelector(".earn_gift_wrapp"));
        }
      }, 100);

      let intV2 = setInterval(() => {
        if (document.querySelector(".new_extend")) {
          clearInterval(intV2);
          obsV.observe(document.querySelector(".new_extend"));
        }
      }, 100);
      let intV3 = setInterval(() => {
        if (document.querySelector(".production_delivery")) {
          clearInterval(intV3);
          obsV.observe(document.querySelector(".production_delivery"));
        }
      }, 100);
      let intV4 = setInterval(() => {
        if (document.querySelector(".create_custom_block")) {
          clearInterval(intV4);
          obsV.observe(document.querySelector(".create_custom_block"));
        }
      }, 100);
      let intV5 = setInterval(() => {
        if (document.querySelector(".visib_ready_to_ship")) {
          clearInterval(intV5);
          obsV.observe(document.querySelector(".visib_ready_to_ship"));
        }
      }, 100);
      let intV6 = setInterval(() => {
        if (document.querySelector(".visib_packaged")) {
          clearInterval(intV6);
          obsV.observe(document.querySelector(".visib_packaged"));
        }
      }, 100);
      let intV7 = setInterval(() => {
        if (document.querySelector(".visib_best_sellers")) {
          clearInterval(intV7);
          obsV.observe(document.querySelector(".visib_best_sellers"));
        }
      }, 100);
      let intV8 = setInterval(() => {
        if (document.querySelector("#reviews .btn")) {
          clearInterval(intV8);
          obsV.observe(document.querySelector("#reviews .btn"));
        }
      }, 100);
      let intV9 = setInterval(() => {
        if (document.querySelector(".visib_similar_items")) {
          clearInterval(intV9);
          obsV.observe(document.querySelector(".visib_similar_items"));
        }
      }, 100);
      let intV10 = setInterval(() => {
        if (document.querySelector("klarna-placement div")?.shadowRoot?.querySelector("div").querySelector('.text-wrapper .text[part="osm-message"]')) {
          clearInterval(intV10);
          obsV.observe(document.querySelector("klarna-placement div")?.shadowRoot?.querySelector("div").querySelector('.text-wrapper .text[part="osm-message"]'));
        }
      }, 100);

      function visibilityV(entries) {
        entries.forEach((i) => {
          if (i.isIntersecting) {
            setTimeout(function () {
              obsV2.observe(i.target);
            }, timeV);
          }
        });
      }
      function visibilityV2(entries) {
        entries.forEach((i) => {
          if (i.isIntersecting) {
            if (i.target.classList.contains("earn_gift_wrapp")) {
              pushDataLayer("exp_barriers_v_ywrgyo_ft", `${timeV}`, "Visibility", "You’ll receive a gift with your order");
            }
            if (i.target.classList.contains("new_extend")) {
              pushDataLayer("exp_barriers_v_e_ft", `${timeV}`, "Visibility", "Extend");
            }
            if (i.target.classList.contains("production_delivery")) {
              pushDataLayer("exp_barriers_v_pd_ft", `${timeV}`, "Visibility", "Production & Delivery");
            }
            if (i.target.classList.contains("create_custom_block")) {
              pushDataLayer("exp_barriers_v_nsu_ft", `${timeV}`, "Visibility", "Need something unique");
            }
            if (i.target.classList.contains("visib_packaged")) {
              pushDataLayer("exp_barriers_v_bp_ft", `${timeV}`, "Visibility", "BEAUTIFULLY PACKAGED");
            }
            if (i.target.classList.contains("visib_ready_to_ship")) {
              pushDataLayer("exp_barriers_v_rs_ft", `${timeV}`, "Visibility", "Ready to ship");
            }
            if (i.target.classList.contains("visib_best_sellers")) {
              pushDataLayer("exp_barriers_v_bs_ft", `${timeV}`, "Visibility", "Best sellers");
            }
            if (i.target.classList.contains("btn")) {
              pushDataLayer("exp_barriers_v_r_ft", `${timeV}`, "Visibility", "Reviews");
            }
            if (i.target.classList.contains("visib_similar_items")) {
              pushDataLayer("exp_barriers_v_si_ft", `${timeV}`, "Visibility", "Similar items");
            }
            if (i.target.classList.contains("text")) {
              pushDataLayer("exp_barriers_v_k_ft", `${timeV}`, "Visibility", "Klarna");
            }

            obsV.unobserve(i.target);
          }
          obsV2.unobserve(i.target);
        });
      }
    }

    // *** Utils *** //
    // Waiting for loading by condition
    function waitFor(condition, cb, ms = 1000) {
      if (condition()) {
        if (typeof cb == "function") cb();
        return;
      }

      let interval = setInterval(function () {
        if (condition()) {
          clearInterval(interval);
          if (typeof cb == "function") cb();
        }
      }, ms);
    }
    // Observe
    let observer = new MutationObserver(() => {
      if (document) {
        observer.disconnect();
        // console.log(`observer`);
        // renderNewBlocks();
        updateGiftCart();

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

    const record = setInterval(() => {
      if (typeof clarity === "function") {
        clearInterval(record);
        clarity("set", "exp_paywall", "variant_1");
      }
    }, 200);

    document.querySelector(".exp")?.remove();
  }
}, 100);
