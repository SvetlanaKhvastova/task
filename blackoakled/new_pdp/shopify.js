
<link
  href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Oswald:wght@400;500;700&family=Roboto:wght@300;400;500;700;900&display=swap"
  rel="stylesheet"
/>

<script>
      let scriptCustomSlider = document.createElement("script")
      scriptCustomSlider.src = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"
      scriptCustomSlider.async = false
      document.head.appendChild(scriptCustomSlider)

      let scriptCustomSliderStyle = document.createElement("link")
      scriptCustomSliderStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      scriptCustomSliderStyle.rel = "stylesheet"
      document.head.appendChild(scriptCustomSliderStyle)

      let slickInterval = setInterval(() => {
        if (typeof jQuery(".slider_nav").slick === "function" && document.querySelector(".slider_nav")) {
          clearInterval(slickInterval)

          //  slider
          setTimeout(() => {
            let slider = $(".slider_nav").slick({
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: true,
              adaptiveHeight: true,
              autoplay: true,
              autoplaySpeed: 5000,
              dots: false,
              prevArrow: `
       					<div class="prev_btn" >
                   <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g opacity="0.3">
                     <path d="M25 30L15 20L25 10" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                     </g>
                   </svg>
       					</div>
       				`,
              nextArrow: `
                  <div class="next_btn" >
                   <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g opacity="0.3">
                     <path d="M15 30L25 20L15 10" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                     </g>
                   </svg>
               	</div>
               `,
              responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    dots: true,
                    autoplay: false,
                    arrows: false
                  },
                },
              ],
            })
          }, 200)
        }
      }, 100)
</script>

<style>
.container.header_nav {
  z-index: 1000;
  position: relative;
  margin: 0;
  background: black;
  width: 100% !important;
}
  
#new_nitron > .container{
  width: unset !important;
  margin: 0;
  padding: 0;
}

#new_nitron .slider_strip,
  #footer,
  label.needsclick.kl-private-reset-css-Xuajs1,
  #header,
  #new_nitron a.jx-knightlab div.knightlab-logo,
  #new_nitron a.jx-knightlab span.juxtapose-name{
  display: none;
}
  
#new_nitron {
    font-family: "Roboto", sans-serif;
}
  
#new_nitron .header_nav .col-md-12{
  background: unset;
  }
  
#new_nitron ul{
  margin: 0;
}

#new_nitron_wrapper .container_custom {
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
}

a.btn_custom,
button.btn_custom {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f09236;
  border-radius: 50px;
  width: 100%;
  max-width: 219px;
  height: 50px;
  text-decoration: none;
  outline: none;
  border: none;

  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
  margin: 54px auto 0;
  text-align: center;
}

/*  hero */
.hero {
  padding: 370px 0 140px 100px;
  background: #161616 url({{'hero.png' | asset_url}}) right bottom no-repeat;
  background-size: auto 100%;
}

.hero_section {
}

.hero_section a.scroll_var {
  width: 100%;
  max-width: 219px;
  display: flex;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #ffffff;
/*   margin-top: 30px; */
  text-decoration: underline;
  align-items: center;
  justify-content: center;
}

.hero_section > h1 {
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  font-size: 96px;
  line-height: 104%;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0 0 20px;
  max-width: 820px;
}

.hero_section > p {
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.01em;
  color: #ffffff;
  max-width: 700px;
  margin-bottom: 60px;
}
  
  .hero_btn_bar{
    display: flex;
    align-items: center;  
  }

.hero_section a.btn_custom {
  margin: 0;
  text-align: unset;
}

/* description */
.description {
  padding: 88px 0;
  background: #f4f4f4;
}

#new_nitron_wrapper .description .container_custom {
  max-width: 820px;
}

.description ul {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.description ul li {
  width: 100%;
}

.description ul li p {
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.01em;
  color: #161616;
}
  
.description ul li + li {
    margin-top: 30px;
}

/* tabs */
/* tabs_visible_wrap */
.tabs ul.tabs_visible_wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e7e7e7;
  padding: 26px 20px;
}

.tabs ul.tabs_visible_wrap li {
  width: 45%;
  text-align: center;
}

.tabs ul.tabs_visible_wrap li + li {
  border-left: 1px solid rgb(22 22 22 / 30%);
}

.tabs ul.tabs_visible_wrap li > p {
  font-family: "Oswald", sans-serif;
  font-weight: 400;
  font-size: 30px;
  line-height: 44px;
  letter-spacing: -0.03em;
  color: rgb(22 22 22 / 50%);
  cursor: pointer;
}

.tabs ul.tabs_visible_wrap li.active_tab > p {
  font-weight: 700;
  text-transform: uppercase;
  color: #ac2217;
}

h3.third_title {
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  font-size: 34px;
  line-height: 140%;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #161616;
  margin-bottom: 20px;
  text-align: center;
}

h4.fourth_title {
  font-family: "Oswald", sans-serif;
  font-weight: 500;
  font-size: 26px;
  line-height: 140%;
  text-transform: uppercase;
  color: #161616;
}

p.txt {
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  color: #161616;
  text-align: center;
  max-width: 820px;
  margin: 0 auto;
}

.img_wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* tabs_content */
#new_nitron_wrapper .tabs_content > li > div .container_custom {
  max-width: 1240px;
}

/* photo_var */
.tabs_content > li > div.photo_var {
  padding: 60px 0 100px;
  background: #ececec;
}

.tabs_content > li > div.photo_var ul {
  display: flex;
}

.tabs_content > li > div.photo_var ul li + li {
  margin-left: 84px;
}

/* .tabs_content > li > div.photo_var ul li .img_wrapper {
      height: 578px;
} */

.tabs_content > li > div.photo_var ul li .img_wrapper img {
      object - fit: contain;
}

/* features_var, about_us */
.tabs_content > li > div.features_var,
.tabs_content > li > div.about_us {
      background: #ececec;
    padding: 60px 0;
}

.tabs_content > li > div.about_us {
      padding - bottom: 113px;
}

#new_nitron_wrapper .tabs_content > li > div.features_var .container_custom,
#new_nitron_wrapper .tabs_content > li > div.about_us .container_custom {
      max - width: 820px;
}

    .features_var h4.fourth_title,
    .about_us h4.fourth_title {
      margin - bottom: 40px;
    text-align: center;
}

    .features_var ul,
    .about_us ul {
      display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

    .features_var ul li,
    .about_us ul li {
      width: 48%;
    color: #161616;
    position: relative;
}

    .features_var ul li:not(:nth-last-child(-n + 2)),
    .about_us ul li:not(:nth-last-child(-n + 2)) {
      padding - bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid rgb(75 75 77 / 20%);
}

.features_var ul li > p,
.about_us ul li > p {
      font - weight: 500;
    font-size: 18px;
    line-height: 160%;
    letter-spacing: 0.01em;
    color: #161616;
    position: relative;
    padding-left: 20px;
}

    .features_var ul li p::before,
    .about_us ul li p::before {
      position: absolute;
    content: "";
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: black;
}

    /* video_var */
    div.video_var {
      padding: 60px 0 100px;
    background: #161616;
}

    div.video_var h3.third_title {
      color: #ffffff;
    margin-bottom: 40px;
}

    div.video_var .vide_wrap iframe {
      height: 630px;
}

    /* benefits_var */
    div.benefits_var {
      background: top / contain no-repeat url({{ 'benefits_bgr.png' | asset_url }}), #f4f4f4;
    padding: 404px 0 80px;
}

    #new_nitron_wrapper div.benefits_var .container_custom {
      max - width: 1000px;
}

    .juxtapose {
      margin - top: 50px;
    width: 100% !important;
}

    div.benefits_var h2 {
      font - family: "Oswald", sans-serif;
    font-weight: 700;
    font-size: 96px;
    line-height: 140%;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    color: #161616;
    margin-bottom: 60px;
}

    div.benefits_var ul {
      display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

    div.benefits_var ul li {
      width: 45%;
    margin: 20px;
}

    div.benefits_var ul li h4.fourth_title {
      color: rgb(22 22 22 / 80%);
    margin-bottom: 15px;
}

    div.benefits_var ul li p {
      font - weight: 400;
    font-size: 18px;
    line-height: 160%;
    letter-spacing: 0.01em;
    color: rgb(22 22 22 / 70%);
}

    /* difference_var */
    div.difference_var {
      background: #ececec;
    padding: 60px 0 80px;
}

    #new_nitron_wrapper div.difference_var .container_custom {
      max - width: 1240px;
}

    /* connect_var */
    div.connect_var .mobile_var {
      display: none;
}

    div.connect_var {
      padding: 60px 0;
    background: #f4f4f4;
}

    #new_nitron_wrapper div.connect_var .container_custom {
      max - width: 1240px;
}

    div.connect_var ul {
      display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

    div.connect_var ul li {
      width: 32.5%;
}

    div.connect_var ul li .img_wrapper {
      margin - bottom: 40px;
}


    div.connect_var ul li h3,
    div.connect_var ul li p{
      text - align: left;
}

    div.connect_var ul li h3.third_title{
      margin - bottom: 15px;
    font-size: 29px;
}

    /* slider */

    .jx-handle div.jx-arrow {
      margin: auto;
    transition: all 0.2s ease;
    position: absolute;
    top: 50%;
    bottom: auto;
    width: 38px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(-50%);
    background-color: #fff;
    border-width: 0 !important;
    color: #4d4d4d;
}

    .jx-handle div.jx-arrow.jx-left::before,
    .jx-handle div.jx-arrow.jx-right::before {
      position: absolute;
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    background-size: contain;
    content: "";
}

    .jx-handle div.jx-arrow.jx-left {
      left: 0 !important;
    border-top-left-radius: 71px;
    border-bottom-left-radius: 71px;
}

    .jx-handle div.jx-arrow.jx-right {
      right: 0 !important;
    border-top-right-radius: 71px;
    border-bottom-right-radius: 71px;
}

    div.jx-arrow.jx-left::before {
      background - image: url({{ 'chevron-left.svg' | asset_url }});
}

    div.jx-arrow.jx-right::before {
      background - image: url({{ 'chevron-right.svg' | asset_url }});
}

    .jx-slider div.jx-handle {
      width: 76px;
    margin-left: -38px;
}

    .jx-slider div.jx-controller {
      position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    height: 20px;
    width: 1px;
    margin-left: 1px;
    background-color: rgb(240 146 54 / 30%);
}

    /* reviews_wrapp */
    .reviews_wrapp {
      background: #161616;
}

    #new_nitron_wrapper .reviews_wrapp .container_custom {
      padding: 60px 0;
    max-width: 1260px;
}

    .reviews_wrapp h2 {
      font - family: "Oswald", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 94px;
    line-height: 140%;
    text-align: center;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    color: #ffffff;
    margin-bottom: 60px;
}

/* .reviews_wrapp ul {
      display: flex;
    justify-content: space-between;
} */
    .slick-initialized .slick-slide {
      margin: 0 11px;
}

    .slick-arrow {
      position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    cursor: pointer;
}

    .slick-arrow.prev_btn {
      left: -44px;
}

    .slick-arrow.next_btn {
      right: -44px;
}

    .reviews_wrapp ul .slick-list .slick-track li {
      background: #4b4b4d;
    border-radius: 5px;
    padding: 25px 40px 40px;
    height: 100%;
}

.reviews_wrapp ul li > div:first-child > span {
      font - weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: rgb(255 255 255 / 50%);
    text-align: end;
    margin-bottom: 28px;
    display: block;
}

.reviews_wrapp ul li > div:first-child > h3 {
      font - family: "Oswald", sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    text-transform: uppercase;
    color: #ffffff;
    margin-bottom: 27px;
    position: relative;
    padding-left: 80px;
}

.reviews_wrapp ul li > div:first-child > h3::before {
      content: "";
    position: absolute;
    width: 54px;
    height: 40px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background: url({{ 'quotes.svg' | asset_url }});
}

.reviews_wrapp ul li > div:first-child > p {
      font - weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: rgb(255 255 255 / 70%);
    margin-bottom: 25px;
}

.reviews_wrapp ul li > div:last-child {
      display: flex;
    justify-content: space-between;
}

.reviews_wrapp ul li > div:last-child > span {
      font - family: "Oswald", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: #ffffff;
}

.reviews_wrapp ul li > div:last-child .img_wrapper img {
      object - fit: contain;
}

    .reviews_wrapp a.btn_custom {
      margin - top: 60px;
}

    /* footer */
    .footer {
      padding: 30px 0 50px;
    background: #000000;
}

    #new_nitron_wrapper .footer .container_custom {
      max - width: 1200px;
}

#new_nitron_wrapper .footer .container_custom > div {
      display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

#new_nitron_wrapper .footer .container_custom > div > div {
      width: 48%;
}

.form_block form > h2,
    .ql-editor h4 strong {
      font - family: "Oswald", sans-serif;
    font-weight: 500 !important;
    font-size: 24px;
    line-height: 120%;
    color: rgb(255 255 255 / 80%) !important;
    margin-bottom: 15px;
    text-transform: uppercase;
    display: block;
}

    .ql-editor p,
    .ql-editor h4{
      text - align: start !important;
}

.form_block form > p,
    .ql-editor p span {
      font - weight: 300 !important;
    font-size: 16px !important;
    line-height: 150% !important;
    color: rgb(255 255 255 / 80%) !important;
    margin-bottom: 20px !important;
    max-width: 355px !important;
    display: block !important;
}

    .form_block form,
    form.needsclick.klaviyo-form.klaviyo-form-version-cid_1.kl-private-reset-css-Xuajs1 {
      margin: 0 0 83px 0 !important;
    max-width: unset !important;
}

.form_block > form > div {
      display: flex;
    align-items: center;
    position: relative;
}

.form_block form > div > input,
    input.needsclick.go2223337399.kl-private-reset-css-Xuajs1{
      background: rgba(255, 255, 255, 0.05) !important;
    border: 1px solid rgba(255, 255, 255, 0.2) !important;
    border-radius: 50px !important;
    font-weight: 400 !important;
    font-size: 16px !important;
    line-height: 150% !important;
    color: rgb(255 255 255 / 30%) !important;
    padding: 13px 200px 13px 30px !important;
    width: 100% !important;
    height: 50px !important;
    outline: none !important;
}
  
.form_block form > div > input::placeholder,
    input.needsclick.go2223337399.kl-private-reset-css-Xuajs1::placeholder{
      font - weight: 400 !important;
    font-size: 16px !important;
    line-height: 150% !important;
    color: rgb(255 255 255 / 30%) !important;
}

.form_block form > div button {
      margin: 0;
    max-width: 198px;
    position: absolute;
    right: 0;
}
  
  .form_block form > div button.needsclick.kl-private-reset-css-Xuajs1{
      top: -50px;
  }

    button.needsclick.kl-private-reset-css-Xuajs1{
      display: flex;
    align-items: center;
    justify-content: center;
    background: #f09236 !important;
    border-radius: 50px !important;
    width: 100% !important;
    max-width: 198px !important;
    height: 50px !important;
    text-decoration: none;
    outline: none;
    font-family: "Open Sans", sans-serif !important;
    font-weight: 700 !important;
    font-size: 16px !important;
    line-height: 22px !important;
    color: #000000 !important;
    margin: 0 !important;
    text-align: center !important;
    padding: 0 !important;
    border: none !important;
  }

    .nav_link_block {
      display: flex;
    justify-content: space-between;
}

.nav_link_block > div h3 {
      font - family: "Oswald", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    color: rgb(255 255 255 / 80%);
    margin-bottom: 18px;
    text-transform: uppercase;
}

.nav_link_block > div ul li + li {
      margin - top: 7px;
}

.nav_link_block > div ul li a {
      font - weight: 300;
    font-size: 14px;
    line-height: 150%;
    color: rgb(255 255 255 / 80%);
    text-decoration: unset;
}

    .info_block address {
      margin: 0;
}

.info_block address > ul {
      display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.info_block address > ul > li {
      width: 50%;
}

.info_block address > ul > li + li {
      position: relative;
    padding-left: 30px;
    margin-top: 10px;
}

.info_block address > ul > li + li::before {
      position: absolute;
    content: "";
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-image: url({{ 'bx_support.svg' | asset_url }});
}

.info_block address > ul > li:nth-child(3):before {
      background - image: url({{ 'cil_fax.svg' | asset_url }});
}

.info_block address > ul > li:nth-child(4):before {
      background - image: url({{ 'carbon_phone.svg' | asset_url }});
}

.info_block address > ul > li:nth-child(5):before {
      background - image: url({{ 'carbon_earth-southeast-asia.svg' | asset_url }});
}

.info_block address > ul > li:first-child {
      width: 100%;
    margin-bottom: 15px;
}

.info_block address > ul > li:first-child .img_wrapper {
      max - width: 150px;
    display: block;
}

.info_block address > ul > li a {
      text - decoration: unset;
}

.info_block address > ul > li:nth-child(3) a {
      cursor: unset;
}

.info_block address > ul > li a > span {
      font - weight: 300;
    font-size: 14px;
    line-height: 150%;
    color: #ffffff;
}

.info_block address > ul > li a > span:first-child {
      font - weight: 600;
}

    .partnerts_block {
      display: flex;
    align-items: flex-end;
    justify-content: flex-end;
}

    /* popup_custom */
    .popup_custom {
      opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    position: fixed;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    transition: transform 0.15s ease 0s, opacity 0.15s ease 0s;
    transform: scale(1);
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9090;
    background: rgb(22 22 22 / 60%);
    pointer-events: none;  
}

    .popup_custom .popup_content {
      position: fixed;
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 610px;
    background: #f4f4f4;
    box-shadow: 0px 4px 250px rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    padding: 25px 30px 40px;
}

.popup_custom .popup_content > button {
      font - weight: 500;
    font-size: 16px;
    line-height: 140%;
    text-transform: uppercase;
    color: #161616;
    margin: 0 0 20px auto;
    display: flex;
    align-items: center;
    cursor: pointer;
    border: none;
    background: unset;
}

.popup_custom .popup_content > button > svg {
      margin - left: 7px;
}

    .popup_custom .popup_content .popup_form {
      position: relative;
}

    .popup_custom .popup_content .popup_form::before {
      position: absolute;
    content: "";
    left: -180px;
    top: -215px;
    background-image: url({{ 'popup_img.png' | asset_url }});
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 400px;
}

.popup_custom .popup_content .popup_form > h2 {
      font - family: "Oswald", sans-serif;
    font-weight: 700;
    font-size: 38px;
    line-height: 110%;
    text-transform: uppercase;
    color: #161616;
    max-width: 365px;
    margin: 0 0 0 auto;
    padding: 30px 8px;
    border-bottom: 1px solid rgb(75 75 77 / 20%);
    position: relative;
}

.popup_custom .popup_content .popup_form > h2::before {
      position: absolute;
    right: 0;
    top: 0;
    content: "";
    width: 70%;
    height: 1px;
    background: rgb(75 75 77 / 20%);
}

.popup_custom .popup_content .popup_form > a.purchase_btn {
      margin - top: 35px;
}

.popup_custom .popup_content .popup_form > a.details_btn {
      border: 2px solid #161616;
    max-width: 455px;
    background: inherit;
    font-weight: 400;
    margin-top: 10px;
    flex-wrap: wrap;
}

.popup_custom .popup_content .popup_form > a.details_btn b {
      text - transform: uppercase;
    margin-left: 5px;
    font-weight: 700;
    font-family: "Open Sans", sans-serif;
}

.popup_custom .popup_content .popup_form > span {
      font - family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #161616;
    text-align: center;
    margin-top: 8px;
    display: block;
}



    @media (max-width: 767px) {
  
  .header_strap.header_flag.header_flag_left{
      display: none;
  }

    .header_strap .header_flag.header_flag_right{
      padding: 10px 0;
  }

    a.btn_custom {
      margin - top: 30px;
  }

    h3.third_title {
      font - size: 28px;
  }

    h4.fourth_title {
      font - size: 24px;
  }

    p.txt {
      font - size: 14px;
  }

    .img_wrapper img {
      width: 100%;
    height: 100%;
    object-fit: cover;
  }

    /* hero */
    .hero {
      padding: 288px 0 40px;
    background: #0B0B0B;
/*     background: #0B0B0B url({{ 'hero_mob.png' | asset_url }}) 51% -56px no-repeat; */
    background-size: auto;
    position: relative;
    z-index: 1;
  }

    .hero:before{
      position: absolute;
    content: "";
    width: 100%;
    height: 320px;
    background: #161616 url({{ 'hero_mob.png' | asset_url }}) 0 4px no-repeat;
    top: 0;
    background-size: auto;
    z-index: -1;
  }

    .hero_section {
      width: 90%;
    margin: 0 auto;
  }

  .hero_section > a.scroll_var {
      font - size: 12px;
  }

  .hero_section > h1 {
      font - size: 48px;
    line-height: 115%;
    margin-bottom: 10px;
  }

  .hero_section > p {
      font - size: 14px;
    margin-bottom: 40px;
  }

    /*  description */
    .description {
      padding: 40px 0;
    display: none;
  }

    .description ul {
      flex - direction: column;
  }

    .description ul li {
      width: 100%;
  }

    .description ul li + li {
      margin - top: 20px;
  }

    .description ul li p {
      font - size: 14px;
  }

  /* tabs */
  /* tabs_visible_wrap */
  /* photo_var */
  .tabs_content > li > div.photo_var {
      padding: 40px 0 62px;
  }
  .tabs_content > li > div.photo_var ul {
      flex - direction: column;
  }

  .tabs_content > li > div.photo_var ul li + li {
      margin: 89px 0 0;
  }
  .tabs_content > li > div.photo_var ul li .img_wrapper {
      height: unset;
  }
    /*  */
    .tabs ul.tabs_visible_wrap {
      padding: 13px 40px;
    justify-content: space-between;
  }

    .tabs ul.tabs_visible_wrap li {
      width: 100%;
  }

    .tabs ul.tabs_visible_wrap li + li {
      margin: 0;
  }

  .tabs ul.tabs_visible_wrap li > p {
      font - size: 24px;
    line-height: 36px;
    letter-spacing: unset;
  }

  .tabs_content > li > div.features_var,
  .tabs_content > li > div.about_us {
      padding: 30px 0;
  }

  .tabs_content > li > div.about_us {
      padding - bottom: 60px;
  }

    .features_var h4.fourth_title,
    .about_us h4.fourth_title {
      margin - bottom: 30px;
    text-align: left;
    font-size: 20px;
  }

    .features_var ul li,
    .about_us ul li {
      width: 100%;
  }

    .features_var ul li:not(:nth-last-child(-n + 1)),
    .about_us ul li:not(:nth-last-child(-n + 1)) {
      padding - bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid rgb(75 75 77 / 20%);
  }

  .features_var ul li > p,
  .about_us ul li > p {
      font - size: 14px;
  }

    /* video_var */
    div.video_var {
      padding - bottom: 60px;
  }

    div.video_var .vide_wrap iframe {
      height: 250px;
  }

    /* benefits_var */
    div.benefits_var {
      padding: 289px 0 60px;
    background: top / contain no-repeat url({{ 'benefits_bgr_mob.png' | asset_url }}), #f4f4f4;
  }

    div.benefits_var h2 {
      font - size: 40px;
    line-height: 125%;
    margin-bottom: 40px;
  }

    div.benefits_var ul li {
      width: 100%;
    margin: 0;
  }

    div.benefits_var ul li + li {
      margin - top: 40px;
  }

    div.benefits_var ul li p {
      font - size: 14px;
  }

    /* difference_var */
    div.difference_var {
      padding - bottom: 60px;
  }

    .juxtapose {
      margin - top: 30px;
  }

    /* connect_var */
    div.connect_var .mobile_var {
      display: flex;
  }

    div.connect_var .desktop_var {
      display: none;
  }


    div.connect_var ul li:nth-child(1),
    div.connect_var ul li:nth-child(2),
    div.connect_var ul li:nth-child(3) {
      width: 100%;
    margin: 0;
    max-width: unset;
  }

    div.connect_var ul li + li {
      margin - top: 60px !important;
  }

    div.connect_var ul li:nth-child(1) h3.third_title{
      font - size: 28px;
  }

    div.connect_var ul li:nth-child(1) h3,
    div.connect_var ul li:nth-child(1) p {
      text - align: left;
  }

    div.connect_var ul li:nth-child(1) h3,
    div.connect_var ul li:nth-child(2) h3,
    div.connect_var ul li:nth-child(3) h3 {
      margin - bottom: 10px;
  }

    div.connect_var ul li:nth-child(1) .img_wrapper,
    div.connect_var ul li:nth-child(2) .img_wrapper,
    div.connect_var ul li:nth-child(3) .img_wrapper {
      margin: 20px 0 0;
  }

    /* reviews_wrapp */
    .reviews_wrapp ul .slick-list .slick-track li {
      padding: 23px 20px 20px;
  }

    .reviews_wrapp h2 {
      font - size: 48px;
    line-height: 104%;
    margin-bottom: 40px;
  }

  .reviews_wrapp ul li > div:first-child > span {
      font - size: 10px;
    line-height: 12px;
    max-width: 138px;
    margin: 0 0 23px auto;
  }

  .reviews_wrapp ul li > div:first-child > h3 {
      font - size: 20px;
    margin-bottom: 15px;
    padding: 0;
  }

  .reviews_wrapp ul li > div:first-child > h3::before {
      top: -55px;
    transform: unset;
  }

  .reviews_wrapp ul li > div:first-child > p {
      font - size: 14px;
    margin-bottom: 18px;
  }

  .reviews_wrapp ul li > div:last-child > span {
      font - size: 14px;
  }

    #new_nitron_wrapper .reviews_wrapp .slick-dots {
      display: flex;
    justify-content: center;
    margin-top: 30px;
  }

    .reviews_wrapp .slick-dots li + li {
      margin - left: 10px;
  }

    .reviews_wrapp .slick-dots li button {
      position: relative;
    display: flex;
    width: 10px;
    height: 10px;
    font-size: 0;
    line-height: 0;
    cursor: pointer;
    color: transparent;
    border: 0;
    outline: none;
    background-color: transparent !important;
    border-color: transparent !important;
    padding: 5px;
  }

    .reviews_wrapp .slick-dots li button:before {
      opacity: 0.75;
    position: absolute;
    content: "•";
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 10px;
    height: 10px;
    border: 1px solid #4b4b4d;
    text-align: center;
    border-radius: 50%;
    background-color: #4b4b4d;
  }

    .reviews_wrapp .slick-dots li.slick-active button:before {
      background - color: #f4f4f4;
  }

    .slick-arrow.prev_btn {
      left: -30px;
  }

    .slick-arrow.next_btn {
      right: -30px;
  }

    /*  popup_custom */
    .popup_custom .popup_content {
      padding: 15px 15px 30px;
    max-width: 260px;
  }

  .popup_custom .popup_content > button {
      font - size: 10px;
    line-height: 12px;
  }

  .popup_custom .popup_content > button > svg {
      margin - left: 5px;
    width: 12px;
    height: 12px;
  }

  .popup_custom .popup_content .popup_form > h2 {
      font - size: 20px;
    line-height: 110%;
    padding-left: 74px;
  }

  .popup_custom .popup_content .popup_form > a.purchase_btn {
      max - width: 217px;
    margin-top: 20px;
  }

  .popup_custom .popup_content .popup_form > a.details_btn {
      max - width: 217px;
    height: 72px;
    padding: 14px 0;
  }

  .popup_custom .popup_content .popup_form > span {
      font - size: 14px;
    line-height: 19px;
    margin-top: 10px;
  }

    .popup_custom .popup_content .popup_form::before {
      background - image: url({{ 'popup_img_mob.png' | asset_url }});
    left: -25%;
    top: -50%;
    min-height: unset;
  }

  .popup_custom .popup_content .popup_form > h2::before {
      width: 50%;
  }

    /* footer */
    .footer {
      padding: 30px 0 0;
  }

  #new_nitron_wrapper .footer .container_custom > div {
      flex - direction: column;
  }

  #new_nitron_wrapper .footer .container_custom > div > div.form_block {
      order: 1;
  }
  #new_nitron_wrapper .footer .container_custom > div > div.nav_link_block {
      order: 3;
  }
  #new_nitron_wrapper .footer .container_custom > div > div.info_block {
      order: 2;
  }
  #new_nitron_wrapper .footer .container_custom > div > div.partnerts_block {
      order: 4;
  }

  #new_nitron_wrapper .footer .container_custom > div > div {
      width: 100%;
  }

  #new_nitron_wrapper .footer .container_custom > div > div + div {
      border - top: 1px solid #4b4b4d;
    padding: 30px 0;
  }

    .form_block form,
    form.needsclick.klaviyo-form.klaviyo-form-version-cid_1.kl-private-reset-css-Xuajs1 {
      margin - bottom: 30px !important;
  }

  .form_block form > p,
    .ql-editor p span{
      margin - bottom: 30px !important;
  }

  .info_block address > ul > li {
      width: 100%;
  }

  .form_block form > div button,
    button.needsclick.kl-private-reset-css-Xuajs1 {
      max - width: 138px !important;
  }

  .form_block form > div > input,
    input.needsclick.go2223337399.kl-private-reset-css-Xuajs1{
      padding - right: 140px !important;
    padding-left: 15px !important;
    font-size: 14px !important;
  }
  
  .form_block form > div > input::placeholder,
    input.needsclick.go2223337399.kl-private-reset-css-Xuajs1::placeholder{
      font - size: 14px !important;
}

    .nav_link_block {
      flex - wrap: wrap;
  }

  .nav_link_block > div {
      width: 40%;
  }

  .nav_link_block > div:first-child {
      margin - top: 40px;
    order: 3;
  }

  .nav_link_block > div:nth-child(2) {
      order: 2;
  }

  .nav_link_block > div:nth-child(3) {
      order: 1;
  }

    div.video_var h3.third_title{
      margin - bottom: 30px;
  }
}

    @media (max-width: 640px) {

    }

    @media (max-width: 320px) {
  .hero_section > h1 {
      font - size: 40px;
  }

    h3.third_title {
      font - size: 25px;
  }

    .tabs ul.tabs_visible_wrap {
      padding: 13px 20px;
  }

    .reviews_wrapp h2,
    div.benefits_var h2 {
      font - size: 45px;
  }

  .form_block form > div > input {
      font - size: 12px;
  }

  .nav_link_block > div h3,
  .form_block form > p,
  .form_block form > div button {
      font - size: 14px;
  }

  .nav_link_block > div ul li a {
      font - size: 12px;
  }
  
    .form_block form > div > input,
    input.needsclick.go2223337399.kl-private-reset-css-Xuajs1{
      font - size: 11px !important;
  }
  
  .form_block form > div > input::placeholder,
    input.needsclick.go2223337399.kl-private-reset-css-Xuajs1::placeholder{
      font - size: 11px !important;
}
}


    /* header_section   */
    .header_section{
      background: #000000;
    padding: 15px 0;
    border-bottom: 1px solid rgb(255 255 255 / 50%);
  }

    #new_nitron_wrapper .header_section .container_custom{
      display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0;
    max-width: unset;
    padding: 0 30px;
  }

    .header_section .container_custom .img_wrapper{
      width: 10%;
    min-width: 93px;
    margin-right: 30px;
  }

    .header_section .container_custom .col-md-12{
      padding: 0;
    border-right: 1px solid rgb(255 255 255 / 50%);
    border-left: 1px solid rgb(255 255 255 / 50%);
  }

    .header_section .container_custom #cssmenu ul.menu-wrapper{
      display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
  }


    .header_section .container_custom .burger_menu_var{
      position: relative;
    width: 5%;
    display: none;
  }


    .header_section .container_custom .burger_menu_var:after{
      position: absolute;
    content: "";
    background-image: url({{ 'burger_menu.svg' | asset_url }});
    width: 30px;
    height: 10px;
    background-size: contain;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    visibility: unset;
    cursor: pointer;
  }
  
 .header_section .container_custom #cssmenu ul.menu-wrapper > li:not(:nth-child(5)) {
      position: relative;
  }
  
/*   .header_section .container_custom #cssmenu ul.menu-wrapper > li:not(:nth-child(5))::after, */
  .header_section .container_custom #cssmenu ul.menu-wrapper > li:not(:last-child)::after {
      position: absolute;
    content: "";
    background-image: url({{ 'arrow_new.svg' | asset_url }});
    width: 9px;
    height: 4px;
    background-size: contain;
    top: 50%;
    right: 5px;
    background-repeat: no-repeat;
    transform: translateY(-50%);
  }
  
  .header_section .container_custom #cssmenu ul.menu-wrapper > li:nth-child(5)::after{
      content: unset;
  }

/*   #cssmenu ul > li:hover {
      background - color: unset;
} */
  
  
  .header_section .container_custom #cssmenu ul.menu-wrapper > li > a {
      font - family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    color: #FFFFFF;
  }
  
  #cssmenu:after, #cssmenu>ul:after{
      content:unset;
  }

    .new_nav_links ul{
      display: flex;
    align-items: center;
    justify-content: flex-end;
  }

    .new_nav_links ul li{
      width: 30%;
    display: flex;
    justify-content: flex-end;
    margin-left: 25px;
  }

    .new_nav_links ul li:nth-child(2){
      position: relative;
  }

    .header_section .container_custom .open .dropdown-grid-wrapper.my_acc {
      position: absolute;
    top: 36px;
    left: -260px;
  }

    .header_section .container_custom .dropdown-menu.no-padding.animated.fadeInDown.col-xs-12.col-sm-5.col-md-4.col-lg-3.animation-done{
      width: 300px;
    padding: 30px;
    text-align: center;
    color: white;
    background: black;
    border: 1px solid white;
  }

    .header_section .container_custom .menu_title.clearfix h4{
      color: white;
    margin-bottom: 10px;
  }

    @media (max-width: 1241px) {
    .header_section.container_custom #cssmenu ul.menu-wrapper > li > a{
      font - size: 12px;
    padding: 10px 17px 10px 10px;
    }
    
    .new_nav_links ul li a > svg{
      width: 16px;
    height: 16px;
    }
  }


    @media (max-width: 1164px) {
    .header_section.container_custom.open.dropdown - grid - wrapper.my_acc{
      left: -256px;
    }
  }

    @media (max-width: 767px) {
      #header{
      display: block;
    }

    .header_section{
      display: none;
   }
  }

  </style>



  <div id="new_nitron_wrapper">
    <!-- header -->
    <section class="header_section">
      <div class="container_custom">
        <a href="/" class="img_wrapper">
          <img src="{{'new_header_logo.png' | asset_url}}" alt="logo" />
        </a>

        <div class="col-md-12">
          <div class="menu-outer-wrapper">
            {% include 'main-menu-rev1' %}
          </div>
        </div>
        <div class="burger_menu_var"></div>

        <div class="new_nav_links">
          <ul>
            <li>
              <a target="_blank" href="https://dadge44n0prcuyv6-7613599.shopifypreview.com/search?type=product&q=">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 19L14.65 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </li>
            <li>
              <a data-toggle="dropdown" href="javascript:;" class="dropdown-toggle" aria-expanded="true">
                <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.8889 20V17.8889C17.8889 16.7691 17.444 15.6951 16.6522 14.9033C15.8604 14.1115 14.7865 13.6667 13.6667 13.6667H5.22222C4.10242 13.6667 3.02848 14.1115 2.23666 14.9033C1.44484 15.6951 1 16.7691 1 17.8889V20M13.6667 5.22222C13.6667 7.55409 11.7763 9.44444 9.44444 9.44444C7.11258 9.44444 5.22222 7.55409 5.22222 5.22222C5.22222 2.89035 7.11258 1 9.44444 1C11.7763 1 13.6667 2.89035 13.6667 5.22222Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
              <div class="dropdown-grid-wrapper my_acc">
                <div class="dropdown-menu no-padding animated  fadeInDown col-xs-12 col-sm-5 col-md-4 col-lg-3" role="menu">
                  {% include 'menu-account' %}
                </div>
              </div>
            </li>
            <li>
              <div class="cart-icon">
                <div class="dropdown-toggle1">
                  <a href="{{ shop.url }}/cart">
                    <span class=" count{% if cart.item_count < 1 %} hidden{% endif %}">{{ cart.item_count }}</span>
                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.888672 1H4.88867L7.56867 14.39C7.66012 14.8504 7.91058 15.264 8.27622 15.5583C8.64185 15.8526 9.09937 16.009 9.56867 16H19.2887C19.758 16.009 20.2155 15.8526 20.5811 15.5583C20.9468 15.264 21.1972 14.8504 21.2887 14.39L22.8887 6H5.88867M9.88867 21C9.88867 21.5523 9.44096 22 8.88867 22C8.33639 22 7.88867 21.5523 7.88867 21C7.88867 20.4477 8.33639 20 8.88867 20C9.44096 20 9.88867 20.4477 9.88867 21ZM20.8887 21C20.8887 21.5523 20.441 22 19.8887 22C19.3364 22 18.8887 21.5523 18.8887 21C18.8887 20.4477 19.3364 20 19.8887 20C20.441 20 20.8887 20.4477 20.8887 21Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- hero -->
    <section class="hero">
      <div class="hero_section">
        <!--             <span>* New Nitron XD Night Vision HD Camera</span> -->
        <h1>OWN THE NIGHT</h1>
        <p>The most advanced marine night vision camera that crushes darkness. See more than just silhouettes, Nitron XD shows details in full HD. Stay out later and always get home safe.  Give us a Call
          <a href="tel:18003481287">1-800-348-1287</a></p>

        <div class="hero_btn_bar">
          <a class="btn_custom" href="/products/nitron-xd-black-oak-hd-night-vision-camera?_pos=1&_sid=616d8fee8&_ss=r">Get Pricing</a>
          <a class="scroll_var" href="#tabs_var">See full specs</a>
        </div>
      </div>
    </section>

    <!-- Description -->
    <section class="description">
      <div class="container_custom">
        <ul>
          <li>
            <p>
              The Nitron XD Night Vision Camera displays the highest resolution possible, giving you crystal clear imagery in pitch black darkness. Without relying on thermal
              temperatures, you will have the perfect image early in the morning, during the middle of the day, or in the darkest of nights.
            </p>
          </li>
          <!--               <li>
            <p>
              With the ability to hook right into your Garmin, Simrad, Raymarine, or many other monitors, installing our camera is practically plug-n-play. With your included
              cable, plug right into your video input port.
            </p>
          </li> -->
        </ul>
      </div>
    </section>

    <!-- video_var -->
    <div class="video_var">
      <div class="container_custom">
        <h3 class="third_title">Check out our Night Vision Camera in action.</h3>
        <div class="vide_wrap">
          <!-- Add Iframe -->
          <iframe
            src="https://www.youtube.com/embed/UsRzYJZszV4"
            width="100%"
            height="100%"
            data-src="https://www.youtube.com/embed/UsRzYJZszV4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          ></iframe>
        </div>
        <a class="btn_custom" href="/products/nitron-xd-black-oak-hd-night-vision-camera?_pos=1&_sid=616d8fee8&_ss=r">See options</a>
      </div>
    </div>

    <!-- difference_var -->
    <div class="difference_var">
      <div class="container_custom">
        <h3 class="third_title">The difference is night and day.</h3>
        <p class="txt">Turn night into day and put your mind at ease with the ability to see channel markers, boats, buoys, and other hazardous objects.</p>
        <div class="juxtapose">
          <img src="{{'juxtapose1.jpg' | asset_url}}" alt="night" />
          <img src="{{'juxtapose2.jpg' | asset_url}}" alt="day" />
        </div>
        <a class="btn_custom" href="/products/nitron-xd-black-oak-hd-night-vision-camera?_pos=1&_sid=616d8fee8&_ss=r">Get More Details</a>
      </div>
    </div>

    <!-- benefits_var -->
    <div class="benefits_var">
      <div class="container_custom">
        <h2>The most advanced low-light camera</h2>
        <ul>
          <li>
            <h4 class="fourth_title">Hyper Low Lux Sensor</h4>
            <p>
              Nitron XD was specifically designed to function in complete darkness, providing crystal clear HD video in any nighttime environment no matter the ambient temp.
            </p>
          </li>
          <li>
            <h4 class="fourth_title">2X The Resolution</h4>
            <p>See more than just silhouettes, Nitron XD shows details in full HD.</p>
          </li>
          <li>
            <h4 class="fourth_title">Marine Rated</h4>
            <p>Our Camera can withstand heavy spray and handle immersion up to 3 feet for over 60 hours.</p>
          </li>
          <li>
            <h4 class="fourth_title">Easy Installation</h4>
            <p>We include everything you need to easily install along with a plug and play harness to fully integrate with your MFD.</p>
          </li>
        </ul>
      </div>
    </div>

    <!-- tabs -->
    <div class="tabs" id="tabs_var">
      <div class="">
        <ul class="tabs_visible_wrap">
          <li class="active_tab"><p>Dimensions</p></li>
          <li><p>Overview</p></li>
        </ul>

        <ul class="tabs_content">
          <li class="active_tab_content">
            <div class="photo_var">
              <div class="container_custom">
                <ul>
                  <li>
                    <div class="img_wrapper">
                      <!--                           <img src="{{'photo_var1.png' | asset_url}}" alt="photo camera" /> -->
                      <img src="https://cdn.shopify.com/s/files/1/0761/3599/files/Regular-mount-dims.jpg?v=1647457284" alt="photo camera" />
                    </div>
                  </li>
                  <li>
                    <div class="img_wrapper">
                      <!--                           <img src="{{'photo_var2.png' | asset_url}}" alt="photo camera" /> -->
                      <img src="https://cdn.shopify.com/s/files/1/0761/3599/files/Tall-mount-dims.jpg?v=1647457561" alt="photo camera" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div class="features_var">
              <div class="container_custom">
                <h4 class="fourth_title">FEATURES</h4>
                <ul>
                  <li>
                    <p>0000025 Lux starlight night vision</p>
                  </li>
                  <li>
                    <p>Marine grade waterproof housing</p>
                  </li>
                  <li>
                    <p>Two field of view options: 20 or 30 Degrees</p>
                  </li>
                  <li>
                    <p>Connect directly to your MFD</p>
                  </li>
                  <li>
                    <p>Streams 752 x 582 HD video</p>
                  </li>
                  <li>
                    <p>Flexible installation (top or bottom mount)</p>
                  </li>
                  <li>
                    <p>60 frames per second</p>
                  </li>
                  <li>
                    <p>12Vdc power (Fused)</p>
                  </li>
                  <li>
                    <p>NTSC/PAL analog video connection (BNC)</p>
                  </li>
                  <li>
                    <p>Manual vertical tilt adjustment</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="about_us">
              <div class="container_custom">
                <h4 class="fourth_title">WHAT'S IN THE BOX</h4>
                <ul>
                  <li>
                    <p>Nitron XD Night Vision Camera</p>
                  </li>
                  <li>
                    <p>25" Quick Connect Wiring Harness</p>
                  </li>
                  <li>
                    <p>5A inline fuse</p>
                  </li>
                  <li>
                    <p>Anodized aluminum mounts</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- connect_var -->
    <div class="connect_var">
      <div class="container_custom">
        <ul class="desktop_var">
          <li>
            <div class="img_wrapper"><img src="{{'connect_img1.jpg' | asset_url}}" alt="product camera" /></div>
            <h3 class="third_title">Plug-N-Play with MFD</h3>
            <p class="txt">
              Easily connect to your Garmin, Simrad, or other popular MFD with the supplied brand specific video input cable.
            </p>
          </li>
          <li>
            <div class="img_wrapper"><img src="{{'connect_img3.jpg' | asset_url}}" alt="product camera" /></div>
            <h3 class="third_title">Quick Connect</h3>
            <p class="txt">
              Take advantage of our easy access quick connect harness. With the ability to easily remove or attach, you never have to worry about leaving your camera.
            </p>
          </li>
          <li>
            <div class="img_wrapper"><img src="{{'connect_img2.jpg' | asset_url}}" alt="product camera" /></div>
            <h3 class="third_title">Built to Last</h3>
            <p class="txt">
              With our military grade housing, there is no need to worry about your camera withstanding the harsh marine environments.
            </p>
          </li>
        </ul>

        <ul class="mobile_var">
          <li>
            <h3 class="third_title">Quick Connect</h3>
            <p class="txt">
              Take advantage of our easy access quick connect harness. With the ability to easily remove or attach, you never have to worry about leaving your camera.
            </p>
            <div class="img_wrapper"><img src="{{'connect_img3_mob.jpg' | asset_url}}" alt="product camera" /></div>
          </li>
          <li>
            <h3 class="third_title">Plug-N-Play with MFD</h3>
            <p class="txt">
              Easily connect to your Garmin, Simrad, or other popular MFD with the supplied brand specific video input cable.
            </p>
            <div class="img_wrapper"><img src="{{'connect_img1_mob.jpg' | asset_url}}" alt="product camera" /></div>
          </li>
          <li>
            <h3 class="third_title">Built to Last</h3>
            <p class="txt">
              With our military grade housing, there is no need to worry about your camera withstanding the harsh marine environments.
            </p>
            <div class="img_wrapper"><img src="{{'connect_img2_mob.jpg' | asset_url}}" alt="product camera" /></div>
          </li>
        </ul>
      </div>
    </div>

    <!-- reviews_wrapp -->
    <div class="reviews_wrapp">
      <div class="container_custom">
        <h2>What our customers say</h2>
        <ul class="slider_nav">
          <li>
            <div>
              <span>Reviewed in the United States on March 08, 2022</span>
              <h3>Sleek & Easy to Install</h3>
              <p>
                Really liking the sleek design on the camera housing. It actually looks like it belongs on a boat as opposed to some of the other brands. The harness provided also makes the install as easy as can be.
              </p>
            </div>
            <div>
              <span>Capt. Mike, USA</span>
              <div class="img_wrapper">
                <img src="{{'reviews.png' | asset_url}}" alt="reviews" />
              </div>
            </div>
          </li>
          <li>
            <div>
              <span>Reviewed in the United States on March 09, 2022</span>
              <h3>Better than thermal</h3>
              <p>
                For the past 5 years I ran a 42' Yellowfin and 72' Viking with expensive Thermal Cameras. It was very difficult to see channel markers in the early morning when I'd be coming back from a long trip. With the inability to differ objects on the water and the very narrow field of view of those cameras, we didn't feel comfortable going any faster than 10 knots in the dark mornings. When I was told about the Nitron, I knew I had to give it a try. Given Black Oaks amazing service and the quality of their 50" light bars, it was a no brainer. The fact that it's a low light camera and not thermal is a gamechanger. It also has a much wider field of view than the other brand I previously used. I feel more comfortable on our long trips being able to rely on something of this quality.
              </p>
            </div>
            <div>
              <span>Rick M, USA</span>
              <div class="img_wrapper">
                <img src="{{'reviews.png' | asset_url}}" alt="reviews" />
              </div>
            </div>
          </li>
          <li>
            <div>
              <span>Reviewed in the United States on March 23, 2022</span>
              <h3>Never seen anything like it</h3>
              <p>
                Seeing the video quality in the dark was beyond impressive. Being able to ease my mind at night when coming in from offshore was my goal and this camera exceeded my expectations. Connecting to the Simrad was seamless and Black Oak made my install process simple and actually take the time to answer the phone. They know their stuff as well.
              </p>
            </div>
            <div>
              <span>Dustin, USA</span>
              <div class="img_wrapper">
                <img src="{{'reviews.png' | asset_url}}" alt="reviews" />
              </div>
            </div>
          </li>
        </ul>
        <a class="btn_custom" href="/products/nitron-xd-black-oak-hd-night-vision-camera?_pos=1&_sid=616d8fee8&_ss=r">Shop now</a>
      </div>
    </div>

    <!-- new footer -->
    <div class="footer">
      <div class="container_custom">
        <div>
          <div class="form_block">
            <div class="klaviyo-form-XGGqVx"></div>
          </div>
          <div class="nav_link_block">
            <div>
              <h3>{{ settings.footer_1_heading }}</h3>
              {% if settings.footer_show_linklist_1 and footer_linklist_1 != '' %}
              <ul>
                {% for link in linklists[settings.footer_linklist_1].links %}
                <li><a href="{{ link.url }}">{{ link.title }}</a></li>
                {% endfor %}
              </ul>
              {% else %}
              <div class="desc">
                {{ settings.footer_1_text }}
              </div>
              {% endif %}
            </div>
            <div>
              <h3>{{ settings.footer_2_heading }}</h3>
              {% if settings.footer_show_linklist_2 and footer_linklist_2 != '' %}
              <ul>
                {% for link in linklists[settings.footer_linklist_2].links %}
                <li><a href="{{ link.url }}">{{ link.title }}</a></li>
                {% endfor %}
              </ul>
              {% else %}
              <div class="desc">
                {{ settings.footer_2_text }}
              </div>
              {% endif %}
            </div>
            <div>
              <h3>settings</h3>
              {% if settings.footer_show_linklist_3 and footer_linklist_3 != '' %}
              <ul>
                {% for link in linklists[settings.footer_linklist_3].links %}
                <li><a href="{{ link.url }}">{{ link.title }}</a></li>
                {% endfor %}
              </ul>
              {% else %}
              <div class="desc">
                {{ settings.footer_3_text }}
              </div>
              {% endif %}
            </div>
          </div>
          <div class="info_block">
            <address>
              <ul>
                <li>
                  <a href="#" class="img_wrapper">
                    <img src="{{'footer_logo.png' | asset_url}}" alt="footer_logo" />
                  </a>
                </li>
                <li>
                  <a href="mailto:support@blackoakled.com">
                    <span></span>
                    <span>support@blackoakled.com</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Fax:</span>
                    <span>1-800-348-1287</span>
                  </a>
                </li>
                <li>
                  <a href="tel:18003481287">
                    <span>Phone:</span>
                    <span>1-800-348-1287</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span></span>
                    <span>We Ship Worldwide</span>
                  </a>
                </li>
              </ul>
            </address>
          </div>
          <div class="partnerts_block">
            <div class="img_wrapper">
              <img src="{{'contacts_photo.png' | asset_url}}" alt="partnerts" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- popup -->
    <div class="popup_custom" data-modal>
      <div class="popup_dialog">
        <div class="popup_content">
          <button type="button">
            Close
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5L5 15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M5 5L15 15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <div class="popup_form">
            <h2>New Nitron XD Night Vision HD Camera</h2>
            <a href="#" class="btn_custom purchase_btn">One click purchase</a>
            <span>or</span>
            <a href="/products/nitron-xd-black-oak-hd-night-vision-camera?_pos=1&_sid=616d8fee8&_ss=r" class="btn_custom details_btn"
            >Explore full details in <b>Black Oak e-shop</b></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <script>
      const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = "block") => {
        const header = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector)

    function hideTabContent() {
      content.forEach((item) => {
        item.style.display = "none"
      })

          tab.forEach((item) => {
      item.classList.remove(activeClass)
    })
        }

    function showTabContent(i = 0) {
      content[i].style.display = display
          tab[i].classList.add(activeClass)
        }

    hideTabContent()
    showTabContent()

        header.addEventListener("click", (e) => {
          const target = e.target

    if (target) {
      tab.forEach((item, i) => {
        if (target == item || target.parentNode == item) {
          hideTabContent()
          showTabContent(i)
        }
      })
    }
        })
      }

      tabs(".tabs .tabs_visible_wrap", ".tabs .tabs_visible_wrap > li", ".tabs .tabs_content > li", "active_tab")
  </script>

  <script>
    let scriptCustom = document.createElement("script")
    scriptCustom.src = "https://cdn.knightlab.com/libs/juxtapose/latest/js/juxtapose.min.js"
    scriptCustom.async = false
    document.head.appendChild(scriptCustom)

    let scriptCustomStyle = document.createElement("link")
    scriptCustomStyle.href = "https://cdn.knightlab.com/libs/juxtapose/latest/css/juxtapose.css"
    scriptCustomStyle.rel = "stylesheet"
    document.head.appendChild(scriptCustomStyle)
  </script>


  <script>
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector),
    close = document.querySelector(closeSelector),
    windows = document.querySelectorAll("[data-modal]")

        trigger.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault()
        }

        windows.forEach((item) => {
          item.style.opacity = "0"
        })

        modal.style.opacity = "1"
        modal.style.pointerEvents = "unset"
        document.body.style.overflow = "hidden"
      })
    })

        close.addEventListener("click", () => {
      windows.forEach((item) => {
        item.style.opacity = "0"
      })

          modal.style.opacity = "0"
    modal.style.pointerEvents = "none"
    document.body.style.overflow = ""
        })

        modal.addEventListener("click", (e) => {
          if (e.target === modal && closeClickOverlay) {
      windows.forEach((item) => {
        item.style.opacity = "0"
      })

            modal.style.pointerEvents = "none"
    modal.style.opacity = "0"
    document.body.style.overflow = ""
          }
        })
      }

//       bindModal(".hero_section > a.btn_custom", ".popup_custom", ".popup_custom button")
//       bindModal(".difference_var a.btn_custom", ".popup_custom", ".popup_custom button")
//       bindModal(".reviews_wrapp a.btn_custom", ".popup_custom", ".popup_custom button")
//       bindModal(".video_var a.btn_custom", ".popup_custom", ".popup_custom button")

//       document.querySelector(".popup_custom .popup_content .popup_form > a.purchase_btn").addEventListener("click", function (e) {
      //         e.preventDefault()
      //         addToCart()
      //       })

      //add to cart and checkout
      async function addToCart() {
        let formData = {
          items: [
            {
              id: "39783882981437",
              quantity: 1,
            },
          ],
        }

        await fetch("/cart/add.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((response) => {
            return response.json()
          })
          .catch((error) => {
            console.error("Error:", error)
          })

        setTimeout(() => {
          window.location.pathname = "/cart"
        }, 300)
      }
  
  
     if (document.querySelector(".info_block address > ul > li:nth-child(3) a")) {
      document.querySelector(".info_block address > ul > li:nth-child(3) a").addEventListener("click", (e) => {
        e.preventDefault()
      })
    }
  
  if(document.querySelectorAll('.info_block address > ul > li a')[4]) {
      document.querySelectorAll('.info_block address > ul > li a')[4].addEventListener("click", (e) => {
        document.querySelector('.shipping-selector-popup-form').click()
      })
    }

    if(document.querySelector('.header_section .container_custom #cssmenu ul.menu-wrapper')){
      document.querySelectorAll('.header_section .container_custom #cssmenu ul.menu-wrapper > li > a')[1].textContent = 'by vehicle'
    document.querySelectorAll('.header_section .container_custom #cssmenu ul.menu-wrapper > li > a')[2].textContent = 'by industry'
  }



  </script>

  <script>

    scrolling(".hero_section a.scroll_var")
    // js scrolling
    function scrolling(upSelector) {
      let links = document.querySelectorAll(upSelector),
    speed = 0.5

          links.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault()

        let widthTop = document.documentElement.scrollTop,
          hash = this.hash,
          toBlock = document.querySelector(hash).getBoundingClientRect().top,
          start = null

        requestAnimationFrame(step)

        function step(time) {
          if (start === null) {
            start = time
          }

          let progress = time - start,
            r = toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock)

          document.documentElement.scrollTo(0, r)

          if (r != widthTop + toBlock) {
            requestAnimationFrame(step)
          } else {
            location.hash = hash
          }
        }
      })
    })
        }
  </script>

  <script>
    window.addEventListener("pageshow", function() {
      document.querySelector("iframe").setAttribute("src", document.querySelector("iframe").dataset.src)
    });
  </script>


