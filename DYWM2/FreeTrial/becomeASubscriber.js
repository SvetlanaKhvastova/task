let becomeASubscriber = setInterval(() => {
  if (window.location.pathname === "/become-a-subscriber") {
    clearInterval(becomeASubscriber);

    // script tooltip
    let scriptPopper = document.createElement("script");
    scriptPopper.src = "https://unpkg.com/popper.js@1";
    scriptPopper.async = false;
    document.body.appendChild(scriptPopper);

    let scriptTippy = document.createElement("script");
    scriptTippy.src = "https://unpkg.com/tippy.js@5";
    scriptTippy.async = false;
    document.body.appendChild(scriptTippy);

    let becomeASubscriberStyle = /*html */ `
      <style>
        /**promoteSubscriptionWrap */
        .o-page__banner + #promoteSubscriptionWrap{
           padding: 25px 0 40px;
        }
        #promoteSubscriptionWrap {
        position: relative;
        background: #fff;
        width: 100%;
        padding: 42px 0 40px;
      }
      .bgr_gray {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        background: #f6f6f6;
        min-height: 95px;
        max-height: 95px;
        height: 100%;
        width: 100%;
      }
      .new_container {
        max-width: 1040px;
        margin: 0 auto;
        width: 90%;
        padding: 30px;
        border-radius: 12px;
        background: #fff;
        box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.15);
      }
      .btn_wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 16px;
        margin-bottom: 16px;
        border-bottom: 2px solid #f6f6f6;
      }
      .btn_wrapper h2 {
        font-family: "Manrope", sans-serif;
        color: #272727;
        font-size: 24px;
        font-weight: 700;
        line-height: 30px;
        margin: 0;
      }
      .accent_color {
        color: #017922;
      }
      #UnlockPremiumContentLink,
      #subscribeSaveLink {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        max-width: 302px;
        width: 100%;
        height: 48px;
        border-radius: 30px;
        background: #017922;
        transition: all 0.3s ease;
      }
      #UnlockPremiumContentLink:hover,
      #subscribeSaveLink:hover {
        color: #ffffff;
        background: #00601b;
        border-color: #007922;
        text-decoration: unset;
      }
      #UnlockPremiumContentLink span {
        font-family: "Manrope", sans-serif;
        color: #fff;
        font-size: 16px;
        font-weight: 700;
        line-height: 32px;
        text-transform: capitalize;
      }
      .toggle_btn_features {
        display: flex;
        gap: 8px;
        cursor: pointer;
        margin: 18px auto 0;
        align-items: center;
        justify-content: center;
        width: max-content;
      }
      .toggle_btn_features span {
        font-family: "Manrope", sans-serif;
        color: #027db8;
        font-size: 14px;
        font-weight: 700;
        line-height: 21px;
        text-decoration-line: underline;
        text-transform: capitalize;
      }
      .toggle_btn_features > svg {
        transition: all 0.3s ease;
      }
      .toggle_btn_features.open_var > svg {
        transform: rotateX(180deg);
      }
      .new_features_list,
      .hidden_new_features_list {
        display: flex;
        justify-content: space-between;
        gap: 24px;
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .new_features_list > li,
      .hidden_new_features_list > li {
        width: 30%;
      }
      .mini_block {
        margin-top: 24px;
      }
      .mini_block > li {
        width: 100%;
      }
      .mini_block > li .list_main_title {
        margin-bottom: 12px;
      }
      .hidden_inform_box {
        display: none;
        margin-top: 12px;
      }
      .list_main_title {
        position: relative;
        color: #272727;
        font-family: "Manrope", sans-serif;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        margin: 0;
        padding-left: 52px;
      }
      .list_main_title[data-title]::before {
        position: absolute;
        content: "";
        width: 40px;
        height: 40px;
        background: url(https://conversionratestore.github.io/projects/doyogawithme/img/premium.svg) no-repeat center center;
        top: 0;
        left: 0;
        background-size: contain;
      }
      .list_main_title[data-title="yoga_person"]::before {
        background: url(https://conversionratestore.github.io/projects/doyogawithme/img/yoga_person.svg) no-repeat center center;
        background-size: contain;
      }
      .list_main_title[data-title="yoga"]::before {
        background: url(https://conversionratestore.github.io/projects/doyogawithme/img/yoga.svg) no-repeat center center;
        background-size: contain;
      }
      .list_main_title[data-title="devices"]::before {
        background: url(https://conversionratestore.github.io/projects/doyogawithme/img/devices.svg) no-repeat center center;
        background-size: contain;
      }
      .list_txt {
        color: #555;
        font-family: "Manrope", sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
        margin: 0;
        max-width: 300px;
      }
      .your_store_wrap {
        margin-top: 48px;
      }
      .your_store_wrap .list_main_title {
        padding: 0;
        margin-bottom: 12px;
      }
      .professional_classes_list {
        list-style: disc;
        color: #555;
        font-size: 12px;
        margin-top: 12px;
        padding: 0 0 0 23px;
      }
      .professional_classes_list > li + li {
        margin-top: 10px;
      }
      .store_icon {
        display: flex;
        justify-content: flex-start;
        gap: 24px;
        flex-wrap: wrap;
      }
      .store_icon img {
        max-width: 140px;
        width: 100%;
      }
      [data-mob],
      [data-openmobvar] {
        display: none;
      }
      /*https://www.doyogawithme.com/become-a-subscriber ->>>>> promoteSubscriptionWrap */
      .path-become-a-subscriber .new_box_subscriber {
        background: linear-gradient(45deg, #003a67 0%, #007db8 100%);
        padding: 40px 10px 142px;
      }
      .path-become-a-subscriber #promoteSubscriptionWrap {
        background: #faf8f6;
        padding: 15px 0;
      }
      .path-become-a-subscriber .bgr_gray,
      .path-become-a-subscriber #UnlockPremiumContentLink {
        display: none;
      }
      .path-become-a-subscriber .btn_wrapper {
        justify-content: center;
        margin-bottom: 10px;
      }
      .path-become-a-subscriber .new_container {
        margin-bottom: -73px;
        z-index: 2;
        margin-top: -119px;
      }
      .path-become-a-subscriber .new_title_subscriber {
        color: #fff;
        text-align: center;
        font-family: "Manrope", sans-serif !important;
        font-size: 44px;
        font-weight: 700;
        line-height: 52px;
        max-width: 1040px;
        margin: 0 auto;
      }
      /*new_sect_choose_your_plan */
      .new_sect_choose_your_plan{
        margin: 0 0 56px;
      }
      .container_choose_your_plan{
        max-width: 1006px;
    width: 90%;
    margin: 0 auto;
    border-radius: 12px;
    background: linear-gradient(87deg, #003A67 0%, #007DB8 100%);
    padding: 12px;
      }
     .border_choose_your_plan {
        border-radius: 12px;
    border: 2px dashed rgb(246 246 246 / 50%);
    padding: 70px 12px 12px;
      }
      .border_choose_your_plan > h2{
        color: #FFF;
font-family: "Manrope", sans-serif !important;
font-size: 24px;
font-weight: 700;
line-height: 30px;
        margin: 0 0 24px;
            text-align: center;
      }
      .your_plan_list{
            display: flex;
    align-items: flex-end;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
      }
      .your_plan_link{
        backdrop-filter: blur(3px);
       background: #FFF;
filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.25));
min-height: 349px;
    max-width: 320px;
    width: 100%;
      }
      .your_plan_link:nth-child(2){
        border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    position: relative;
    overflow: hidden;
      }
      .your_plan_link:nth-child(2)::before{
content: 'Save 35%';
    position: absolute;
    z-index: 99;
    top: 54px;
    right: -4px;
    transform: rotate(45deg);
    transform-origin: bottom right;
    padding: 6px 28px;
    background: #F3A83C;
    font-family: "Manrope", sans-serif !important;
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
    color: #272727;
    text-transform: uppercase;
      }
      .container_choose_your_plan.not_free{
        max-width: 688px;
      }
      .container_choose_your_plan.not_free .your_plan_link:nth-child(1){
display: none !important;
      }
            .your_plan_link:nth-child(1){
    border-top-left-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
      }
                  .your_plan_link:nth-child(3){
        border-top-right-radius: 12px;
      }
      .your_plan_body_free{
            padding: 40px;
    text-align: center;
    width: 100%;
      }
      .your_plan_body_free .your_plan_name{
color: #027DB8;
font-size: 24px;
font-weight: 800;
line-height: 32px;
margin: 16px 0 20px;
      }
      section.new_sect_choose_your_plan .your_plan_body_free a.your_plan_btn{
border-radius: 30px !important;
border: 2px solid #017922 !important;
background: none !important;
color: #017922 !important;
      }
      .your_plan_header{
         text-align: center;
         padding: 30px 12px 12px;
      }
      .your_plan_period{
        color: #272727;
font-family: "Manrope", sans-serif !important;
font-size: 24px;
font-weight: 700;
line-height: 20px;
margin: 0 0 8px;
      }
      .your_plan_name{
        color: #272727;
font-family: "Manrope", sans-serif !important;
font-size: 16px;
font-weight: 600;
line-height: 20px;
      }
      .your_plan_body{
        background: linear-gradient(180deg, #F6F6F6 0%, rgba(246, 246, 246, 0.00) 63.21%);
    padding: 12px 40px 30px;
    text-align: center;
      }
      .your_plan_free{
        color: #027DB8;
font-family: "Manrope", sans-serif !important;
font-size: 18px;
font-weight: 700;
line-height: 20px;
        margin: 0 0 12px;
      }
      .your_plan_price{
        color: #272727;
font-family: "Manrope", sans-serif !important;
font-size: 16px;
font-weight: 400;
line-height: 20px;
margin: 0 0 4px;
      }
      .your_plan_price > span{
        color: #027DB8;
font-family: "Manrope", sans-serif !important;
font-size: 23px;
font-weight: 800;
line-height: 24px;
      }
      .your_plan_usd{
        color: #A5A5A5;
font-family: "Manrope", sans-serif !important;
font-size: 12px;
font-weight: 400;
line-height: normal;
margin: 4px 0 12px;
      }
      section.new_sect_choose_your_plan a.your_plan_btn {
        display: flex !important;
    align-items: center;
    justify-content: center;
    border-radius: 30px !important;
    background: #017922 !important;
    outline: none !important;
    border: none !important;
    max-width: 240px;
    width: 100%;
    height: 52px;
    margin: 0 auto;
    color: #FFF !important;
font-family: "Manrope", sans-serif !important;
    font-size: 18px !important;
    font-weight: 700;
    line-height: 32px !important;
    text-transform: capitalize;
        text-decoration: none !important;
      }
      .your_plan_options_wrapp{
        margin-top: 16px;
      }
      .your_plan_options_wrapp .your_plan_options{
color: #555;
font-family: "Manrope", sans-serif !important;
font-size: 14px;
font-weight: 500;
line-height: 24px;
display: flex;
    align-items: center;
    justify-content: center;
      }
      .your_plan_options_wrapp .your_plan_options + div{
        margin-top: 12px;
      }
      .your_plan_options_wrapp .your_plan_options img{
        width: 24px;
        height: 24px;
          margin-right: 8px;
      }
      .your_plan_year{
        color: #272727;
  font-family: "Manrope", sans-serif !important;
  font-size: 16px;
  line-height: 28px;
  font-weight: 600;
      }
      .your_plan_year .your_plan_year_old{
        color: #A5A5A5;
text-decoration-line: line-through;
      }
      .your_plan_year .your_plan_year_new{
      }
      .your_plan_year_caption{
font-size: 14px;
font-weight: 400;
      }
      .your_plan_wrapp_mob{
        display: none;
      }
       @media (max-width: 1070px) {
/**new_sect_choose_your_plan */
section.new_sect_choose_your_plan a.your_plan_btn{
  font-size: 15px !important;
}
.your_plan_options_wrapp .your_plan_options{
  font-size: 12px;
}
       }
@media (max-width: 768px) {
    /**promoteSubscriptionWrap */
.path-become-a-subscriber .new_box_subscriber{
      padding: 24px 18px 168px;
}
.path-become-a-subscriber .new_title_subscriber{
  font-size: 24px;
    line-height: 32px;
}
.path-become-a-subscriber .new_container {
      margin-top: -160px;
    padding: 18px 20px;
}
.path-become-a-subscriber .btn_wrapper h2{
  font-size: 18px;
    margin: 0;
    max-width: unset;
}
.path-become-a-subscriber .btn_wrapper {
    margin-bottom: 20px;
}
.path-become-a-subscriber .new_features_list, .path-become-a-subscriber .hidden_new_features_list{
  gap: 16px;
}
.path-become-a-subscriber .list_main_title{

}
        #promoteSubscriptionWrap {
          padding: 24px 0;
        }
        [data-mob] {
          display: flex;
        }
        .open_var[data-openmobvar] {
          display: block;
        }
        .bgr_gray,
        [data-desk] {
          display: none;
        }
        .new_features_list,
        .hidden_new_features_list {
          flex-direction: column;
          gap: 12px;
          margin: 0;
        }
        .new_features_list > li,
        .hidden_new_features_list > li {
          width: 100%;
        }
        .new_container {
          padding: 16px;
          max-width: 335px;
          width: 81%;
        }
        .btn_wrapper {
          flex-direction: column;
          align-items: flex-start;
          border-bottom: none;
          padding: 0;
          margin-bottom: 12px;
        }
        .btn_wrapper h2 {
          font-size: 20px;
          font-weight: 700;
          margin: 0 0 12px;
          max-width: 278px;
        }
        #UnlockPremiumContentLink {
          max-width: unset;
          width: 100%;
          height: 42px;
        }
        #UnlockPremiumContentLink span {
          font-size: 14px;
          font-weight: 700;
          line-height: 32px;
        }
        .toggle_btn_features {
          margin: 10px auto 0;
        }
        .list_main_title {
          font-size: 12px;
          padding-left: 38px;
          max-width: 253px;
        }
        .list_main_title[data-title="devices"] {
          max-width: 227px;
        }
        .your_store_wrap {
          margin-top: 12px;
        }
        .your_store_wrap .list_main_title {
          margin-bottom: 6px;
        }
        .store_icon {
          gap: 16px;
        }
        .store_icon img {
          max-width: 120px;
        }
        .mini_block > li .list_main_title {
          margin: 0;
        }
        .list_txt {
          margin-top: 2px;
          line-height: 20px;
        }
        .list_main_title[data-title]::before {
          width: 26px;
          height: 26px;
        }
        .hidden_inform_box {
          margin-top: 16px;
        }
        .professional_classes_list > li + li,
        .professional_classes_list {
          margin-top: 5px;
        }
        .professional_classes_list .list_txt {
          font-weight: 600;
        }
        .new_features_list .list_main_title[data-title="yoga_person"] + p {
          font-weight: 500;
        }
        /**new_sect_choose_your_plan */
        .your_plan_list{
          display: none;
        }
        .your_plan_wrapp_mob{
display: block;
        }
        .new_sect_choose_your_plan {
    margin: 0;
}
.border_choose_your_plan > h2{
      color: #272727;
    font-size: 22px;
    line-height: 21px;
    margin: 0 0 20px;
}
        .container_choose_your_plan{
              max-width: 1006px;
    width: unset;
    margin: 0;
    border-radius: unset;
    background: white;
    padding: 70px 18px 30px;
        }
        .border_choose_your_plan{
          border-radius: 0;
    border: none;
    padding: 0;
        }
        .custom_radio_body_free{
          display: flex;
    justify-content: space-between;
    align-items: center;
        }
       .custom_radio_body_free .your_plan_name{
color: #027DB8;
font-size: 18px;
font-weight: 800;
line-height: 24px;
        }
        .custom_radio_header{
          display: flex;
          align-items: center;
    justify-content: space-between;
    margin-bottom: 13px;
        }
        .your_plan_free_txt{
          color: #272727;
  font-family: "Manrope", sans-serif !important;
font-size: 16px;
font-weight: 700;
line-height: normal;
text-transform: capitalize;
margin: 0;
        }
       .your_plan_free_txt > svg {
              display: inline-block;
    margin: 5px 0 0 2px;
    width: 14px;
    height: 14px;
        }
        .custom_radio_body{
          display: flex;
          justify-content: space-between;
    align-items: flex-start;
    padding-top: 12px;
    border-top: 1px dashed #E0E0E0;
    border-top-width: 2px;
        }
        .your_plan_list_mob {
                        display: flex;
    flex-direction: column;
    gap: 16px;
        }
        .your_plan_free_price{
          color: #272727;
  font-family: "Manrope", sans-serif !important;
font-size: 18px;
font-weight: 700;
line-height: normal;
text-transform: capitalize;
        }
        .your_plan_list_mob label{
          background: #F9F9F9;
    backdrop-filter: blur(3px);
    border: 2px solid #E0E0E0;
    border-radius: 12px;
    padding: 16px;
    margin: 0;
    outline: none;
        }
        .your_plan_list_mob label[for="yearlyPlan"]{
position: relative;
    margin-top: 12px;
        }
        .your_plan_list_mob label[for="yearlyPlan"]::after{
content: 'Save 35%';
    position: absolute;
    z-index: 99;
    top: -13px;
    left: 16px;
    padding: 2px 8px;
border-radius: 12px;
background: #F3A83C;
color: #272727;
 font-family: "Manrope", sans-serif !important;
font-size: 12px;
font-weight: 700;
line-height: 20px;
text-transform: uppercase;
        }
        .your_plan_period{
    font-size: 20px;
    line-height: 24px;
    margin: 0 0 4px;
        }
        .your_plan_name{
              font-weight: 700;
                  color: #555;
        }
        .your_plan_price{
          margin: 0;
    font-size: 14px;
        }
        .your_plan_usd{
          margin: 12px 0 8px;
    text-align: center;
        }
        section.new_sect_choose_your_plan a.your_plan_btn{
          max-width: unset;
          font-size: 18px !important;
        }
        .your_plan_options_wrapp {
    margin-top: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}
.your_plan_options_wrapp .your_plan_options + div{
  margin: 0;
}
.your_plan_options_wrapp .your_plan_options{
  color:  #272727;
font-size: 12px;
font-weight: 600;
line-height: 16px;
}
.your_plan_options_wrapp .your_plan_options img{
  margin-right: 4px;
  width: 20px;
  height: 20px;
}
.your_plan_list_mob .custom_radio{
    z-index: -1;
  opacity: 0;
  height: 0;
  margin: 0;
  padding: 0;
  display: none;
  position: unset;
}
.your_plan_list_mob .custom_radio:checked + label{
  border: 2px solid #017922;
  background: #FFF;
filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.25));
backdrop-filter: blur(3px);
}
.your_plan_list_mob .tippy-tooltip{
border-radius: 12px;
background: #FFF;
box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.15);
color: #555;
 font-family: "Manrope", sans-serif !important;
font-size: 12px;
font-weight: 600;
line-height: 22px;
}
.your_plan_list_mob .tippy-popper{
    max-width: 280px !important;
    left: 23px !important;
}
.your_plan_list_mob .tippy-tooltip[data-placement^=bottom]>.tippy-arrow{
border-bottom-color: #FFF;
}
.your_plan_list_mob .tippy-tooltip[data-placement^=top]>.tippy-arrow{
    border-top-color: #FFF;
}
.your_plan_list_mob .tippy-content {
    padding: 8px;
}

}
      </style>
      `;

    let newBoxFeatures = /*html */ `
    <section id="promoteSubscriptionWrap" class="promote_subscription_wrap">
      <div class="bgr_gray"></div>
      <div class="new_container">
        <div class="btn_wrapper">
          <h2>Start Free Trial for <span class="accent_color">Unlimited Access</span></h2>
        </div>
        <ul class="new_features_list">
          <li>
            <h3 class="list_main_title" data-title="yoga_person">Unlimited access to 1000+ yoga, meditation and movement classes</h3>
        <p class="list_txt" data-openmobvar>You can enjoy one of the biggest collection of professional classes, including:</p>
        <ul class="professional_classes_list" data-openmobvar>
          <li>
            <p class="list_txt">400+ Vinyasa yoga classes</p>
          </li>
          <li>
            <p class="list_txt">350+ Hatha yoga classes</p>
          </li>
          <li>
            <p class="list_txt">250+ Gentle yoga classes</p>
          </li>
          <li>
            <p class="list_txt">170+ Yoga after workout classes</p>
          </li>
          <li>
            <p class="list_txt">100+ Yoga for back classes</p>
          </li>
          <li>
            <p class="list_txt">And much more!</p>
          </li>
        </ul>
          </li>
          <li>
            <h3 class="list_main_title" data-title="yoga">Complete collection of 30 curated programs & 50 challenges</h3>
            <p class="list_txt" data-openmobvar>Enhance your practice with our comprehensive collection of courses and special challenges.</p>
          </li>
          <li data-desk>
            <h3 class="list_main_title" data-title="premium">Exclusive access to all new releases and livestream events</h3>
          </li>
        </ul>
        <div class="hidden_inform_box">
          <ul data-desk class="hidden_new_features_list">
            <li>
              <p class="list_txt">You can enjoy one of the biggest collection of professional classes, including:</p>
              <ul class="professional_classes_list">
                <li>
                  <p class="list_txt">400+ Vinyasa yoga classes</p>
                </li>
                <li>
                  <p class="list_txt">350+ Hatha yoga classes</p>
                </li>
                <li>
                  <p class="list_txt">250+ Gentle yoga classes</p>
                </li>
                <li>
                  <p class="list_txt">170+ Yoga after workout classes</p>
                </li>
                <li>
                  <p class="list_txt">100+ Yoga for back classes</p>
                </li>
                <li>
                  <p class="list_txt">And much more!</p>
                </li>
              </ul>
            </li>
            <li>
              <p class="list_txt">Enhance your practice with our comprehensive collection of courses and special challenges.</p>
              <ul class="new_features_list mini_block">
                <li>
                  <h3 class="list_main_title" data-title="devices">Watch classes from your laptop, TV, phone or tablet</h3>
                  <p class="list_txt">Take your yoga practice anywhere, anytime using our website or mobile app.</p>
                </li>
              </ul>
            </li>
            <li>
              <p class="list_txt">Enjoy new classes and get 25% discount on livestream events.</p>
              <div class="your_store_wrap">
                <h3 class="list_main_title">Use our App</h3>
                <div class="store_icon">
                    <img class="apple_store_icon" src="https://conversionratestore.github.io/projects/doyogawithme/img/apple_store_icon.svg" alt="apple store icon">
                    <img class="google_play_icon" src="https://conversionratestore.github.io/projects/doyogawithme/img/google_play_icon.svg" alt="google play icon">
                </div>
              </div>
            </li>
          </ul>
              <ul data-mob class="hidden_new_features_list">
      <li>
        <h3 class="list_main_title" data-title="premium">Exclusive access to all new releases and livestream events</h3>
        <p class="list_txt">Enjoy new classes and get 25% discount on livestream events.</p>
      </li>
      <li>
        <ul class="new_features_list mini_block">
          <li>
            <h3 class="list_main_title" data-title="devices">Watch classes from your laptop, TV, phone or tablet</h3>
            <p class="list_txt">Take your yoga practice anywhere, anytime using our website or mobile app.</p>
          </li>
        </ul>
        <div class="your_store_wrap">
          <h3 class="list_main_title">Use our App</h3>
          <div class="store_icon">
            <img class="apple_store_icon" src="https://conversionratestore.github.io/projects/doyogawithme/img/apple_store_icon.svg" alt="apple store icon" />
            <img class="google_play_icon" src="https://conversionratestore.github.io/projects/doyogawithme/img/google_play_icon.svg" alt="google play icon" />
          </div>
        </div>
      </li>
    </ul>
        </div>
        <p class="toggle_btn_features">
          <span>See all Premium features</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="9" viewBox="0 0 15 9" fill="none">
            <path d="M1.5 1L7.5 7L13.5 1" stroke="#027DB8" stroke-width="2" />
          </svg>
        </p>
      </div>
    </section>
    `;

    let newBoxSubscriber = /*html */ `
    <div class="new_box_subscriber"><h2 class="new_title_subscriber">Begin Your Transformation with a Free Trial of our Premium Yoga Classes</h2></div>
    <section class="new_sect_choose_your_plan">
  <div class="container_choose_your_plan">
    <div class="border_choose_your_plan">
      <h2>Choose your plan</h2>
      <ul class="your_plan_list">
        <li class="your_plan_link">
          <div class="your_plan_body_free">
            <div class="your_plan_period">Basic access</div>
            <div class="your_plan_name">Free</div>
            <a href="#" class="your_plan_btn btn_free">Create Free Account</a>
          </div>
        </li>
        <li class="your_plan_link">
          <div class="your_plan_header">
            <div class="your_plan_period">Yearly</div>
            <div class="your_plan_name">Unlimited access</div>
          </div>
          <div class="your_plan_body">
            <p class="your_plan_free">Free for the next 7 days</p>
            <div class="your_plan_price">Then <span>$9.08</span>/ month</div>

            <div class="your_plan_year">
              <span class="your_plan_year_old">$167.88</span>
              <span class="your_plan_year_new">$108.99</span><span class="your_plan_year_caption">/year</span>
            </div>

            <div class="your_plan_usd">*All prices in USD</div>
            <a href="#" class="your_plan_btn btn_year">Start Trial now</a>
            <div class="your_plan_options_wrapp">
              <div class="your_plan_options">
                <img src="https://flopsi69.github.io/crs/doYogaWithMe/subscribe/img/calendar.svg" />
                Cancel anytime
              </div>
              <div class="your_plan_options">
                <img src="https://flopsi69.github.io/crs/doYogaWithMe/subscribe/img/guarantee.svg" />
                30-Day Money-Back Guarantee
              </div>
            </div>
          </div>
        </li>
        <li class="your_plan_link">
          <div class="your_plan_header">
            <div class="your_plan_period">Monthly</div>
            <div class="your_plan_name">Unlimited access</div>
          </div>
          <div class="your_plan_body">
            <p class="your_plan_free">Free for the next 7 days</p>
            <div class="your_plan_price">Then <span>$13.99</span>/ month</div>

            <div class="your_plan_usd">*All prices in USD</div>
            <a href="#" class="your_plan_btn btn_month">Start Trial now</a>
            <div class="your_plan_options_wrapp">
              <div class="your_plan_options">
                <img src="https://flopsi69.github.io/crs/doYogaWithMe/subscribe/img/calendar.svg" />
                Cancel anytime
              </div>
              <div class="your_plan_options">
                <img src="https://flopsi69.github.io/crs/doYogaWithMe/subscribe/img/guarantee.svg" />
                30-Day Money-Back Guarantee
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div class="your_plan_wrapp_mob">
  <div class="your_plan_list_mob">
    <input class="custom_radio" id="freePlan" type="radio" name="yourPlan" value="freePlan" />
    <label for="freePlan" tabindex="0" data-name="freePlan">
      <div class="custom_radio_body_free">
        <div class="your_plan_block_left">
          <div class="your_plan_period">Free account</div>
          <p class="your_plan_free_txt" data-tolltipMob data-titlemob="Access 500+ free yoga, meditation and movement classes from our extensive library.">
            Basic access
            <svg class="your_plan_free_txt_svg" xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
              <path d="M7 0.5C10.8555 0.5 14 3.64453 14 7.5C14 11.3828 10.8555 14.5 7 14.5C3.11719 14.5 0 11.3828 0 7.5C0 3.64453 3.11719 0.5 7 0.5ZM7 4C6.50781 4 6.125 4.41016 6.125 4.875C6.125 5.36719 6.50781 5.75 7 5.75C7.46484 5.75 7.875 5.36719 7.875 4.875C7.875 4.41016 7.46484 4 7 4ZM8.09375 11C8.44922 11 8.75 10.7266 8.75 10.3438C8.75 9.98828 8.44922 9.6875 8.09375 9.6875H7.65625V7.28125C7.65625 6.92578 7.35547 6.625 7 6.625H6.125C5.74219 6.625 5.46875 6.92578 5.46875 7.28125C5.46875 7.66406 5.74219 7.9375 6.125 7.9375H6.34375V9.6875H5.90625C5.52344 9.6875 5.25 9.98828 5.25 10.3438C5.25 10.7266 5.52344 11 5.90625 11H8.09375Z" fill="#017922" />
            </svg>
          </p>
        </div>
        <div class="your_plan_block_right">
          <div class="your_plan_name">Free</div>
        </div>
      </div>
    </label>

    <input class="custom_radio" id="yearlyPlan" type="radio" name="yourPlan" checked value="yearlyPlan" />
    <label for="yearlyPlan" tabindex="0" data-name="yearlyPlan">
      <div class="custom_radio_header">
        <p class="your_plan_free_txt" data-tolltipMob data-titlemob="After the 7-day trial period, the annual fee will be $108.99. We’ll email you a reminder before your trial ends.">
          Start 7-day free trial
          <svg class="your_plan_free_txt_svg" xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
            <path d="M7 0.5C10.8555 0.5 14 3.64453 14 7.5C14 11.3828 10.8555 14.5 7 14.5C3.11719 14.5 0 11.3828 0 7.5C0 3.64453 3.11719 0.5 7 0.5ZM7 4C6.50781 4 6.125 4.41016 6.125 4.875C6.125 5.36719 6.50781 5.75 7 5.75C7.46484 5.75 7.875 5.36719 7.875 4.875C7.875 4.41016 7.46484 4 7 4ZM8.09375 11C8.44922 11 8.75 10.7266 8.75 10.3438C8.75 9.98828 8.44922 9.6875 8.09375 9.6875H7.65625V7.28125C7.65625 6.92578 7.35547 6.625 7 6.625H6.125C5.74219 6.625 5.46875 6.92578 5.46875 7.28125C5.46875 7.66406 5.74219 7.9375 6.125 7.9375H6.34375V9.6875H5.90625C5.52344 9.6875 5.25 9.98828 5.25 10.3438C5.25 10.7266 5.52344 11 5.90625 11H8.09375Z" fill="#017922" />
          </svg>
        </p>
        <span class="your_plan_free_price">$0.00</span>
      </div>
      <div class="custom_radio_body">
        <div class="your_plan_block_left">
          <div class="your_plan_period">Yearly</div>
          <div class="your_plan_name">Unlimited access</div>
        </div>
        <div class="your_plan_block_right">
          <div class="your_plan_price">Then <span>$9.08</span>/ month</div>
          <div class="your_plan_year">
            <span class="your_plan_year_old">$167.88</span>
            <span class="your_plan_year_new">$108.99</span><span class="your_plan_year_caption">/year</span>
          </div>
        </div>
      </div>
    </label>

    <input class="custom_radio" id="monthlyPlan" type="radio" name="yourPlan" value="monthlyPlan" />
    <label for="monthlyPlan" tabindex="0" data-name="monthlyPlan">
      <div class="custom_radio_header">
        <p class="your_plan_free_txt" data-tolltipMob data-titlemob="Access 500+ free yoga, meditation and movement classes from our extensive library.">
          Start 7-day free trial
          <svg class="your_plan_free_txt_svg" xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
            <path d="M7 0.5C10.8555 0.5 14 3.64453 14 7.5C14 11.3828 10.8555 14.5 7 14.5C3.11719 14.5 0 11.3828 0 7.5C0 3.64453 3.11719 0.5 7 0.5ZM7 4C6.50781 4 6.125 4.41016 6.125 4.875C6.125 5.36719 6.50781 5.75 7 5.75C7.46484 5.75 7.875 5.36719 7.875 4.875C7.875 4.41016 7.46484 4 7 4ZM8.09375 11C8.44922 11 8.75 10.7266 8.75 10.3438C8.75 9.98828 8.44922 9.6875 8.09375 9.6875H7.65625V7.28125C7.65625 6.92578 7.35547 6.625 7 6.625H6.125C5.74219 6.625 5.46875 6.92578 5.46875 7.28125C5.46875 7.66406 5.74219 7.9375 6.125 7.9375H6.34375V9.6875H5.90625C5.52344 9.6875 5.25 9.98828 5.25 10.3438C5.25 10.7266 5.52344 11 5.90625 11H8.09375Z" fill="#017922" />
          </svg>
        </p>
        <span class="your_plan_free_price">$0.00</span>
      </div>
      <div class="custom_radio_body">
        <div class="your_plan_block_left">
          <div class="your_plan_period">Monthly</div>
          <div class="your_plan_name">Unlimited access</div>
        </div>
        <div class="your_plan_block_right">
          <div class="your_plan_price">Then <span>$13.99</span>/ month</div>
        </div>
      </div>
    </label>
  </div>
  <div class="your_plan_usd">*All prices in USD</div>
  <div class="your_plan_btn_wrapp">
    <a href="#" class="your_plan_btn">Get started now</a>
  </div>
  <div class="your_plan_options_wrapp">
    <div class="your_plan_options">
      <img src="https://conversionratestore.github.io/projects/doyogawithme/img/delete_icon.svg" />
      Cancel anytime
    </div>
    <div class="your_plan_options">
      <img src="https://conversionratestore.github.io/projects/doyogawithme/img/guarantee_icon.svg" />
      30-Day Money-Back Guarantee
    </div>
  </div>
</div>
    </div>
  </div>
</section>
    `;

    document.head.insertAdjacentHTML("beforeend", becomeASubscriberStyle);

    renderNewBoxSubscriber();
    // if user is free
    if (document.querySelector('[data-drupal-selector="drupal-settings-json"]') && JSON.parse(document.querySelector('[data-drupal-selector="drupal-settings-json"]')?.textContent).dywm.gtm.customer_info.user.isSubscriber === false) {
      isNotSubscriber();
    }

    //
    function renderNewBoxSubscriber() {
      if (document.querySelector(".o-page__main") && !document.querySelector(".new_box_subscriber")) {
        document.querySelector(".o-page__main").insertAdjacentHTML("beforebegin", newBoxSubscriber);
      }

      if (document.querySelector(".your_plan_list_mob")) {
        document.querySelectorAll(".your_plan_list_mob input").forEach((el) => {
          el.addEventListener("click", (e) => {
            console.log(e.currentTarget.getAttribute("id"));
            if (e.currentTarget.getAttribute("id") === "freePlan") {
              document.querySelector(".your_plan_btn_wrapp a.your_plan_btn").href = "freePlan";
            }
            if (e.currentTarget.getAttribute("id") === "yearlyPlan") {
              document.querySelector(".your_plan_btn_wrapp a.your_plan_btn").href = "yearlyPlan";
            }
            if (e.currentTarget.getAttribute("id") === "monthlyPlan") {
              document.querySelector(".your_plan_btn_wrapp a.your_plan_btn").href = "monthlyPlan";
            }
          });
        });

        document.querySelectorAll(".your_plan_list_mob label").forEach((el) => {
          el.addEventListener("click", (e) => {
            if (e.target.classList.contains("your_plan_free_txt") || e.target.classList.contains("your_plan_free_txt_svg")) {
              e.preventDefault();
              console.log(e.target);
            }
          });
        });

        let tippyRunMob = setInterval(() => {
          if (typeof tippy === "function" && document.querySelector("[data-titlemob]")) {
            clearInterval(tippyRunMob);
            document.querySelectorAll("[data-titlemob]").forEach((el) => {
              tippy(el, {
                content: el.getAttribute("data-titlemob"),
                trigger: "click",
                placement: "bottom-end",
                appendTo: function () {
                  return el.closest(".your_plan_list_mob");
                },
                onTrigger(inst, e) {
                  e.stopPropagation();
                  e.preventDefault();
                  // pushDataLayer(`Clicks on hints '90 days unconditional money-back guarantee'`)
                },
                onShown(e) {
                  // pushDataLayer(`Shown 'If you are not satisfied with the masterclass, please contact us within 90 days of your enrollment to get a full refund'`)
                },
              });
            });
          }
        }, 500);
      }
    }

    //   isNotSubscriber
    function isNotSubscriber() {
      let becomeSubscriberFind = setInterval(() => {
        if (document.querySelector(".new_box_subscriber")) {
          clearInterval(becomeSubscriberFind);
          localStorage.setItem("newBannerVisib", "withoutBtn");
          document.querySelector(".new_box_subscriber")?.insertAdjacentHTML("afterend", newBoxFeatures);
        }
      }, 100);

      let findToggleBtn = setInterval(() => {
        if (typeof jQuery === "function" && document.querySelector(".toggle_btn_features")) {
          clearInterval(findToggleBtn);
          jQuery(".toggle_btn_features")?.click(function () {
            jQuery(".hidden_inform_box").slideToggle();
            setTimeout(() => {
              document.querySelector(".new_box_subscriber").scrollIntoView({ block: "start", behavior: "smooth" });
            }, 400);
            if (!jQuery(this).hasClass("open_var")) {
              jQuery(this).addClass("open_var");
              document.querySelector(".toggle_btn_features span").textContent = "Less all Premium features";
              if (window.innerWidth <= 768) {
                document.querySelectorAll("[data-openmobvar]").forEach((el) => {
                  el.classList.add("open_var");
                });
              }
            } else {
              jQuery(this).removeClass("open_var");
              document.querySelector(".toggle_btn_features span").textContent = "See all Premium features";
              if (window.innerWidth <= 768) {
                document.querySelectorAll("[data-openmobvar]").forEach((el) => {
                  el.classList.remove("open_var");
                });
              }
            }
          });
        }
      }, 100);
    }
  }
}, 100);
