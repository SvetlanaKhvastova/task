let forYouPage = setInterval(() => {
  if (document.querySelector("body")) {
    clearInterval(forYouPage);

    // cdn
    let script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js";
    script.async = false;
    document.head.appendChild(script);

    let scriptCustomPagination = document.createElement("script");
    scriptCustomPagination.src = "https://pagination.js.org/dist/2.5.0/pagination.min.js";
    scriptCustomPagination.async = false;
    document.head.appendChild(scriptCustomPagination);

    let scriptCustomPaginationStyle = document.createElement("link");
    scriptCustomPaginationStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/paginationjs/2.6.0/pagination.css";
    scriptCustomPaginationStyle.rel = "stylesheet";
    document.head.appendChild(scriptCustomPaginationStyle);

    let forYouPageStyle = /*html */ `
      <style>
        body{
            margin: 0 !important;
        }
        /*popup */
.overlay_popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  overflow-y: auto;
  z-index: 1000000000;
  transition: all 0.5s ease;
}
.overlay_popup.is_hidden {
  opacity: 0;
  pointer-events: none;
}
.overlay_popup .container_popup {
  display: block;
  position: relative;
  width: 100%;
  margin: auto;
  transition: all 0.5s ease 0s;
}
.overlay_popup .container_popup > .btn_close {
  position: absolute;
  top: 33px;
  right: 60px;
  width: 24px;
  height: 24px;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
}
.content_popup {
  background: #fff;
}
#editYourInterests {
  display: flex;
  border-radius: 0px 0px 8px 8px;
  justify-content: space-between;
}
#editYourInterests .edit_block_wrapp {
  padding: 47px 60px 81px;
  width: 49%;
}
#editYourInterests .img_wrapp {
  position: relative;
  max-width: 690px;
  width: 100%;
}
#editYourInterests .img_wrapp::after {
  position: absolute;
  content: "";
  background: #027db8;
  max-width: 620px;
  width: 100%;
  height: 100%;
  right: 0;
}
#editYourInterests .img_wrapp > img {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  max-height: 640px;
}
.header_edit_block {
  margin-bottom: 30px;
}
.header_edit_block .title_page {
  color: #272727;
  font-family: "Manrope", sans-serif;
  font-size: 42px;
  font-weight: 700;
  line-height: 54px;
  margin: 0;
}
.body_edit_block .title_page {
  color: #272727;
  font-family: "Manrope", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  margin: 0;
}
.accent_green {
  color: #017922;
}
.body_edit_block .option_txt {
  color: #272727;
  font-family: "Manrope", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 26px;
  margin: 0;
  max-width: unset;
}
.choose_option_wrapp input.custom_checkbox {
  z-index: -1;
  opacity: 0;
  height: 0;
  margin: 0;
  padding: 0;
  display: none;
}
.choose_option_wrapp label {
  position: relative;
  padding: 10px 35px 10px 65px;
  margin: 0;
  color: #555;
  font-family: "Manrope", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  text-align: left;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  min-height: 39px;
}
.choose_option_wrapp label:first-of-type {
  border-top: none;
  border-radius: 8px 8px 0 0;
}
.choose_option_wrapp label:last-of-type {
  border-radius: 0 0 8px 8px;
  border-bottom: none;
}
.choose_option_wrapp label:focus {
  outline: none;
  outline-offset: unset;
}
.choose_option_wrapp label::before {
  position: absolute;
  content: "";
  width: 40px;
  height: 40px;
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/beginner_icon.svg) no-repeat;
  background-size: contain;
  top: 50%;
  left: 13px;
  transform: translateY(-50%);
}
.choose_option_wrapp label[for="intermediate"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/intermediate_icon.svg) no-repeat;
}
.choose_option_wrapp label[for="advanced"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/advanced_icon.svg) no-repeat;
}
.choose_option_wrapp label[for="vinyasaFlow"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/vinyasa_flow_icon.svg) no-repeat;
}
.choose_option_wrapp label[for="hatha"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/hatha_icon.svg) no-repeat;
}
.choose_option_wrapp label[for="powerYoga"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/power_yoga_icon.svg) no-repeat;
}
.choose_option_wrapp label[for="restorativeYin"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/restorative_yin_icon.svg) no-repeat;
}
.choose_option_wrapp label[for="kundaliniYoga"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/kundalini_yoga_icon.svg) no-repeat;
}
.choose_option_wrapp label[for="yogaMeditationMindfulness"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/yoga_meditation_mindfulness_icon.svg) no-repeat;
}
.choose_option_wrapp label[for="noneStylesYoga"]::before {
  content: unset;
}
.choose_option_wrapp label[for="noneStylesYoga"] {
  padding-left: 16px;
  min-height: 23px;
}
.choose_option_wrapp label[for="coreStrengthStability"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/core_strength_stability_icon.svg) no-repeat;
}
.choose_option_wrapp label[for="backStrengthPainRelief"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/back_strength_icon.svg) no-repeat;
}
.choose_option_wrapp label[for="upperBodyStrengthToning"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/upper_body_strength_icon.svg) no-repeat;
}
.choose_option_wrapp label[for="flexibilityJointMobility"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/flexibility_icon.svg) no-repeat;
}
.choose_option_wrapp label[for="relaxationSleepImprovement"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/relaxation_icon.svg) no-repeat;
}
.choose_option_wrapp label[for="mindfulnessMeditationTechniques"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/yoga_meditation_mindfulness_icon.svg) no-repeat;
}
.choose_option_wrapp label[for="womensHealthPrenatalPostnatalPractices"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/health_prenatal_postnatal_practices_icon.svg) no-repeat;
}
.choose_option_wrapp label[for="morningTravelVigorousEnergy"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/techniques_increase_energy_icon.svg) no-repeat;
}
.choose_option_wrapp label[for="twenty"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/twenty_minutes_icon.svg) no-repeat;
}
.choose_option_wrapp label[for="fortyFive"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/forty_five_minutes_icon.svg) no-repeat;
}
.choose_option_wrapp label[for="sixty"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/sixty_minutes_icon.svg) no-repeat;
}
.choose_option_wrapp label .choose_option_txt {
  max-width: 328px;
}
.choose_option_wrapp label .choose_option_txt b {
  font-size: 16px;
  margin-bottom: 5px;
  display: inline-block;
}
.choose_option_wrapp .checked_box {
  position: absolute;
  display: inline-block;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  flex-grow: 0;
  border-radius: 100px;
  border: 2px solid #e0e0e0;
  right: 12px;
}
.choose_option_wrapp .custom_checkbox:checked + label {
  background: #f2fbff;
}
.choose_option_wrapp .custom_checkbox:checked + label .checked_box {
  border: 2px solid #027db8;
}
.choose_option_wrapp .custom_checkbox:checked + label .checked_box::after {
  content: "";
  position: absolute;
  width: 12.5px;
  height: 12.5px;
  border-radius: 100px;
  background: #027db8;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.choose_option_wrapp .custom_checkbox[type="checkbox"] + label .checked_box,
.choose_option_wrapp .custom_checkbox[type="checkbox"]:checked + label .checked_box {
  border-radius: 4px;
}
.choose_option_wrapp .custom_checkbox[type="checkbox"]:checked + label .checked_box::after {
  border-radius: unset;
}
.first_page {
  position: relative;
}
.second_page,
.third_page,
.fourth_page {
  position: relative;
  margin-top: 24px;
}
.second_page .choose_option_wrapp label .choose_option_txt b {
  margin: 0;
}
.second_page .choose_option_wrapp label .choose_option_txt br {
  display: none;
}
.second_page .choose_option_wrapp label:last-child .choose_option_txt {
  max-width: unset;
}
.third_page .choose_option_wrapp label .choose_option_txt {
  font-size: 16px;
  max-width: max-content;
}
.choose_option_wrapp {
  z-index: 1;
  position: absolute;
  background: #fff;
  width: 100%;
  filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.15));
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  border: 2px solid #e0e0e0;
  margin-top: 2px;
  left: 0;
  display: none;
}
.choose_option_wrapp.is_open{
    display: block;
}
.personalized_txt_wrapp {
  position: relative;
  border-radius: 8px;
  border: 2px solid #e0e0e0;
  background: #fff;
  padding: 10px 20px 10px 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 8px;
  margin-top: 12px;
  cursor: pointer;
      min-height: 34px;
}
.personalized_txt_wrapp::after {
  position: absolute;
  content: "";
  width: 14px;
  height: 14px;
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/arrow_acc.svg) no-repeat;
  background-size: contain;
  top: 22px;
  right: 20px;
}
.personalized_list_tag {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: #f6f6f6;
  padding: 5px 12px 5px 42px;
  max-width: max-content;
  min-height: 24px;
  margin: 0;
  color: #555;
  font-family: "Manrope", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  max-height: 34px;
  height: 100%;
}
.personalized_list_tag::before {
  position: absolute;
  content: "";
  width: 24px;
  height: 24px;
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/beginner_icon.svg) no-repeat;
  background-size: contain;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
}
.personalized_list_tag[data-tag="Beginner"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/beginner_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="Intermediate"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/intermediate_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="Advanced"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/advanced_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="Vinyasa Flow"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/vinyasa_flow_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="Hatha"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/hatha_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="Power Yoga"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/power_yoga_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="Restorative/Yin"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/restorative_yin_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="Kundalini Yoga"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/kundalini_yoga_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="Yoga for Meditation and Mindfulness"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/yoga_meditation_mindfulness_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="Core strength and stability"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/core_strength_stability_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="Back strength and pain relief"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/back_strength_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="Upper body strength and toning"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/upper_body_strength_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="Flexibility and joint mobility"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/flexibility_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="Relaxation and sleep improvement"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/relaxation_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="Mindfulness and meditation techniques"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/yoga_meditation_mindfulness_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="Women’s health, Prenatal and Postnatal practices"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/health_prenatal_postnatal_practices_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="Techniques to increase energy"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/techniques_increase_energy_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="10-20 minutes"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/twenty_minutes_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="30-45 minutes"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/forty_five_minutes_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="60 minutes or more"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/sixty_minutes_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="Different styles"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/kundalini_yoga_icon.svg) no-repeat;
  background-size: contain;
}
.footer_edit_block {
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.btn_save_your_interests {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 313px;
  width: 100%;
  height: 50px;
  color: #fff;
  font-family: "Manrope", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  margin: 0;
  cursor: pointer;
  border-radius: 30px;
  background: #027db8;
}
.btn_cancel {
  color: #a5a5a5;
  font-family: "Manrope", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 32px;
  text-decoration-line: underline;
  text-transform: capitalize;
  cursor: pointer;
}
html.open_var {
  overflow: hidden !important;
} 
        /*promoteSubscriptionWrap */
#promoteSubscriptionWrap {
  position: relative;
  background: #fff;
  width: 100%;
  padding: 42px 0 40px;
}
.pdp_var #promoteSubscriptionWrap {
  background: #f5f5f5;
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
  z-index: 1;
  position: relative;
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
/* new_list_yoga_classes */
#newList {
    padding: 2rem 0;
   background: whitesmoke;
}
#newList .container_var{
    width: 95%;
    margin: 0 auto;
    max-width: 1300px;
}
.new_list_yoga_classes {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.33rem;
  margin: 0;
    padding: 0;
}
.list_yoga_classes_title{
    font-weight: 500;
    font-size: 18px;
    line-height: 1.7;
    margin:0 0 2rem;
}
.new_list_yoga_classes li {
  display: none;
}
.new_list_yoga_classes li a{
    text-decoration: none;
}
.field_media_img {
  display: block;
  transition: 0.1s ease-in-out;
  width: 100%;
  height: auto;
}
.item_img{
    position: relative;
}
.field_absol_wrap{
    background: linear-gradient(0deg,#272727 0%,rgba(255,255,255,0) 100%);
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    left: 0;
    padding: 3px 0;
}
.field_difficulty_txt,
.field_media_duration_txt{
    color: white;
    font-size: 0.9em;
    line-height: 1.7;
    margin: 0;
}
.field_difficulty_txt{
    margin-left: 10px;
    display: flex;
    align-items: center;
    gap: 2px;
}
.field_difficulty_txt svg{
    margin-top: -1px;
}
.field_media_duration_txt{
    margin-right: 10px;
}
.item_info{
    margin-top: 14px;
    padding: 0 0 15px;
}
.field_title{
    font-size: 18px;
    line-height: 1;
    font-weight: 700;
    margin: 0;
    color: #272727;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
}
.field_title > svg{
    margin-top: -4px;
}
.item_rating_wrap{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.item_rating_wrap p{
    font-size: 15px;
    line-height: 1.7;
    font-weight: 400;
    margin: 0;
    color: #272727;
}
.item_rating_wrap .rating_icon{
    color: #FAA900;
    font-size: 0.95em;
    display: flex;
    justify-content: space-between;
    gap: 5px;
}
#pagination-container{
    width: max-content;
    margin: 18px auto;
}
.paginationjs .paginationjs-pages li {
}
.paginationjs .paginationjs-pages li>a{
    color: #007DB8;
}
      </style>
    `;

    let basedOnYouInterests = /*html */ `
    <section class="based_on_your_interests">
       <div class="title_wrapp">
           <h3>Based On Your Interests</h3>
           <div class="change_preferences_btn">
              <img src="https://conversionratestore.github.io/projects/doyogawithme/img/change_preferences.svg" alt="icon">
              <span>Change preferences</span>
          </div>
       </div>
       <div></div>
    </section>
    `;

    let pageListHtml = /*html */ `
    <section id="newList">
        <div class="container_var">
            <h3 class="list_yoga_classes_title"><span class="list_yoga_classes_count"></span></h3>
            <ul class="new_list_yoga_classes" id="newListYogaClasses"></ul>
            <div id="pagination-container"></div>
        </div>
    </section>
    `;

    let popUp = /*html */ `
        <div class="overlay_popup is_hidden">
          <div class="container_popup">
            <div class="btn_close">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                 <path d="M20 20L4 4M20 4L4 20" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>
          </div>
        </div>
    `;
    let contentPopupHtml = /*html */ `
            <section id="editYourInterests">
                <div class="edit_block_wrapp">
                    <div class="header_edit_block">
                    <h2 class="title_page">Edit Your <span class="accent_green">Interests</span></h2>
                    </div>
                    <div class="body_edit_block">
                    <div class="first_page">
                        <h2 class="title_page">Which best describes your current yoga experience level?</h2>
                        <p class="option_txt">(Choose one option)</p>
                        <div class="personalized_txt_wrapp" data-name="experienceLevel"></div>
                        <div class="choose_option_wrapp">
                        <input class="custom_checkbox" id="beginner" type="radio" name="level" value="beginner" />
                        <label for="beginner" tabindex="0" data-name="Beginner"
                            ><span class="choose_option_txt"
                            ><b>Beginner</b><br />
                            (New to yoga or have limited experience)</span
                            >
                            <span class="checked_box"></span
                        ></label>

                        <input class="custom_checkbox" id="intermediate" type="radio" name="level" value="intermediate" />
                        <label for="intermediate" tabindex="0" data-name="Intermediate"
                            ><span class="choose_option_txt"
                            ><b>Intermediate</b><br />
                            (Have some experience and comfortable with basic poses)</span
                            >
                            <span class="checked_box"></span
                        ></label>

                        <input class="custom_checkbox" id="advanced" type="radio" name="level" value="advanced" />
                        <label for="advanced" tabindex="0" data-name="Advanced">
                            <span class="choose_option_txt"
                            ><b>Advanced</b><br />
                            (Experienced yogi looking for challenging practices)</span
                            >
                            <span class="checked_box"></span
                        ></label>
                        </div>
                    </div>
                    <div class="second_page">
                        <h2 class="title_page">What type of yoga classes are you most interested in?</h2>
                        <div class="personalized_txt_wrapp" data-name="yogaType"></div>
                        <div class="choose_option_wrapp">
                        <input class="custom_checkbox" id="vinyasaFlow" type="checkbox" name="vinyasaFlow" value="vinyasaFlow" />
                        <label for="vinyasaFlow" tabindex="0" data-name="Vinyasa Flow"
                            ><span class="choose_option_txt"
                            ><b>Vinyasa Flow</b><br />
                            (Dynamic and fluid sequences)</span
                            ><span class="checked_box"></span
                        ></label>

                        <input class="custom_checkbox" id="hatha" type="checkbox" name="hatha" value="hatha" />
                        <label for="hatha" tabindex="0" data-name="Hatha"
                            ><span class="choose_option_txt"><b>Hatha</b> <br />(Gentle and foundational poses)</span><span class="checked_box"></span
                        ></label>

                        <input class="custom_checkbox" id="powerYoga" type="checkbox" name="powerYoga" value="powerYoga" />
                        <label for="powerYoga" tabindex="0" data-name="Power Yoga"
                            ><span class="choose_option_txt"
                            ><b>Power Yoga</b><br />
                            (Energetic and strength-focused)</span
                            ><span class="checked_box"></span
                        ></label>

                        <input class="custom_checkbox" id="restorativeYin" type="checkbox" name="restorativeYin" value="restorativeYin" />
                        <label for="restorativeYin" tabindex="0" data-name="Restorative/Yin"
                            ><span class="choose_option_txt"
                            ><b>Restorative/Yin</b><br />
                            (Relaxing and deep stretching)</span
                            ><span class="checked_box"></span
                        ></label>

                        <input class="custom_checkbox" id="kundaliniYoga" type="checkbox" name="kundaliniYoga" value="kundaliniYoga" />
                        <label for="kundaliniYoga" tabindex="0" data-name="Kundalini Yoga"
                            ><span class="choose_option_txt"
                            ><b>Kundalini Yoga</b><br />
                            (Spiritual energy-focused yoga)</span
                            ><span class="checked_box"></span
                        ></label>

                        <input class="custom_checkbox" id="yogaMeditationMindfulness" type="checkbox" name="yogaMeditationMindfulness" value="yogaMeditationMindfulness" />
                        <label for="yogaMeditationMindfulness" tabindex="0" data-name="Yoga for Meditation and Mindfulness"
                            ><span class="choose_option_txt"><b>Yoga for Meditation and Mindfulness</b></span
                            ><span class="checked_box"></span
                        ></label>

                        <input class="custom_checkbox" id="noneStylesYoga" type="checkbox" name="noneStylesYoga" value="noneStylesYoga" />
                        <label for="noneStylesYoga" tabindex="0" data-name="Different styles"><span class="choose_option_txt">I don’t have preferences and want to practice different styles</span><span class="checked_box"></span></label>
                        </div>
                    </div>
                    <div class="third_page">
                        <h2 class="title_page">Are there any specific areas you'd like to focus on?</h2>
                        <div class="personalized_txt_wrapp" data-name="areasOfFocus"></div>
                        <div class="choose_option_wrapp">
                        <input class="custom_checkbox" id="coreStrengthStability" type="checkbox" name="coreStrengthStability" value="coreStrengthStability" />
                        <label for="coreStrengthStability" tabindex="0" data-name="Core strength and stability"><span class="choose_option_txt">Core strength and stability</span><span class="checked_box"></span></label>

                        <input class="custom_checkbox" id="backStrengthPainRelief" type="checkbox" name="backStrengthPainRelief" value="backStrengthPainRelief" />
                        <label for="backStrengthPainRelief" tabindex="0" data-name="Back strength and pain relief"><span class="choose_option_txt">Back strength and pain relief</span><span class="checked_box"></span></label>

                        <input class="custom_checkbox" id="upperBodyStrengthToning" type="checkbox" name="upperBodyStrengthToning" value="upperBodyStrengthToning" />
                        <label for="upperBodyStrengthToning" tabindex="0" data-name="Upper body strength and toning"><span class="choose_option_txt">Upper body strength and toning</span><span class="checked_box"></span></label>

                        <input class="custom_checkbox" id="flexibilityJointMobility" type="checkbox" name="flexibilityJointMobility" value="flexibilityJointMobility" />
                        <label for="flexibilityJointMobility" tabindex="0" data-name="Flexibility and joint mobility"><span class="choose_option_txt">Flexibility and joint mobility</span><span class="checked_box"></span></label>

                        <input class="custom_checkbox" id="relaxationSleepImprovement" type="checkbox" name="relaxationSleepImprovement" value="relaxationSleepImprovement" />
                        <label for="relaxationSleepImprovement" tabindex="0" data-name="Relaxation and sleep improvement"><span class="choose_option_txt">Relaxation and sleep improvement</span><span class="checked_box"></span></label>

                        <input class="custom_checkbox" id="mindfulnessMeditationTechniques" type="checkbox" name="mindfulnessMeditationTechniques" value="mindfulnessMeditationTechniques" />
                        <label for="mindfulnessMeditationTechniques" tabindex="0" data-name="Mindfulness and meditation techniques"><span class="choose_option_txt">Mindfulness and meditation techniques</span><span class="checked_box"></span></label>

                        <input class="custom_checkbox" id="womensHealthPrenatalPostnatalPractices" type="checkbox" name="womensHealthPrenatalPostnatalPractices" value="womensHealthPrenatalPostnatalPractices" />
                        <label for="womensHealthPrenatalPostnatalPractices" tabindex="0" data-name="Women’s health, Prenatal and Postnatal practices"><span class="choose_option_txt">Women’s health, Prenatal and Postnatal practices</span><span class="checked_box"></span></label>

                        <input class="custom_checkbox" id="morningTravelVigorousEnergy" type="checkbox" name="morningTravelVigorousEnergy" value="morningTravelVigorousEnergy" />
                        <label for="morningTravelVigorousEnergy" tabindex="0" data-name="Techniques to increase energy"><span class="choose_option_txt">Techniques to increase energy</span><span class="checked_box"></span></label>
                        </div>
                    </div>
                    <div class="fourth_page">
                        <h2 class="title_page">How much time can you allocate for your yoga practice?</h2>
                        <div class="personalized_txt_wrapp" data-name="preferredDuration"></div>
                        <div class="choose_option_wrapp">
                        <input class="custom_checkbox" id="twenty" type="checkbox" name="twenty" value="20" />
                        <label for="twenty" tabindex="0" data-name="10-20 minutes"
                            ><span class="choose_option_txt"
                            ><b>10-20 minutes</b><br />
                            (Quick sessions to fit into a busy schedule)</span
                            >
                            <span class="checked_box"></span
                        ></label>

                        <input class="custom_checkbox" id="fortyFive" type="checkbox" name="fortyFive" value="45" />
                        <label for="fortyFive" tabindex="0" data-name="30-45 minutes"
                            ><span class="choose_option_txt"
                            ><b>30-45 minutes</b><br />
                            (Moderate sessions for a comprehensive practice)</span
                            >
                            <span class="checked_box"></span
                        ></label>

                        <input class="custom_checkbox" id="sixty" type="checkbox" name="sixty" value="60" />
                        <label for="sixty" tabindex="0" data-name="60 minutes or more">
                            <span class="choose_option_txt"
                            ><b>60 minutes or more</b><br />
                            (Extended sessions for a deep dive into yoga)</span
                            >
                            <span class="checked_box"></span
                        ></label>
                        </div>
                    </div>
                    </div>
                    <div class="footer_edit_block">
                    <div class="btn_save_your_interests">Save your interests</div>
                    <div class="btn_cancel">Cancel</div>
                    </div>
                </div>
                <div class="img_wrapp">
                    <img src="https://conversionratestore.github.io/projects/doyogawithme/img/quiz_img_finish.png" alt="yoga" class="" />
                </div>
            </section>
    `;

    let newBoxFeatures = /*html */ `
    <section id="promoteSubscriptionWrap" class="promote_subscription_wrap">
      <div class="bgr_gray"></div>
      <div class="new_container">
        <div class="btn_wrapper">
          <h2>Upgrade to Premium for <span class="accent_color">Unlimited Access</span></h2>
          <a href="https://www.doyogawithme.com/become-a-subscriber" id="UnlockPremiumContentLink">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12.0411 0H11.9557C8.88948 0 6.40234 2.48713 6.40234 5.55607V9.23989C7.04756 8.71875 7.75896 8.29136 8.52826 7.96599C8.73506 7.87776 8.94738 7.79779 9.1597 7.7261V5.55331C9.1597 4.00919 10.4115 2.7546 11.9584 2.7546H12.0439C13.588 2.7546 14.8426 4.00643 14.8426 5.55331C14.8426 6.20404 15.3693 6.7307 16.02 6.7307H16.4226C17.0733 6.7307 17.6 6.20404 17.6 5.55331C17.5972 2.48713 15.11 0 12.0411 0Z" fill="white" />
              <path d="M11.9999 8.36719C10.999 8.36719 10.0394 8.55469 9.15981 8.89936C8.11202 9.30744 7.17452 9.93612 6.40246 10.7302C5.0293 12.1392 4.18555 14.0611 4.18555 16.1843C4.18555 20.4995 7.68463 23.9986 11.9999 23.9986C16.3151 23.9986 19.8143 20.4995 19.8143 16.1843C19.8143 11.869 16.3151 8.36719 11.9999 8.36719ZM12.8244 16.9398L13.4227 19.7771C13.4586 19.9481 13.3289 20.1108 13.1524 20.1108H11.9999H10.8473C10.6708 20.1108 10.5412 19.9509 10.5771 19.7771L11.1754 16.9398C11.2223 16.7164 11.1286 16.4848 10.9355 16.3635C10.3537 15.9995 9.97047 15.3461 9.98975 14.6043C10.0173 13.5372 10.8859 12.6687 11.953 12.6438C13.0863 12.6163 14.0155 13.529 14.0155 14.6567C14.0155 15.3764 13.6378 16.0078 13.0697 16.3635C12.8739 16.4821 12.7774 16.7137 12.8244 16.9398Z" fill="white" />
            </svg>
            <span>Unlock Premium Content</span></a
          >
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

    document.head.insertAdjacentHTML("beforeend", forYouPageStyle);
    document.body.insertAdjacentHTML("afterbegin", popUp);

    // if user is free
    // if (document.querySelector('[data-drupal-selector="drupal-settings-json"]') && JSON.parse(document.querySelector('[data-drupal-selector="drupal-settings-json"]')?.textContent).dywm.gtm.customer_info.user.isSubscriber === false) {
    // }
    isNotSubscriber();
    renderBasedOnYouInterests();
    renderPageList();

    //   isNotSubscriber
    function isNotSubscriber() {
      if (!document.querySelector(".promote_subscription_wrap")) {
        document.querySelector("body")?.insertAdjacentHTML("afterbegin", newBoxFeatures);
      }

      let findToggleBtn = setInterval(() => {
        if (typeof jQuery === "function" && document.querySelector(".toggle_btn_features")) {
          clearInterval(findToggleBtn);
          jQuery(".toggle_btn_features")?.click(function () {
            jQuery(".hidden_inform_box").slideToggle();
            setTimeout(() => {
              document.querySelector("#promoteSubscriptionWrap").scrollIntoView({ block: "start", behavior: "smooth" });
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

      let findBtnUnlock = setInterval(() => {
        if (document.querySelector("#UnlockPremiumContentLink")) {
          clearInterval(findBtnUnlock);

          document.querySelectorAll("#UnlockPremiumContentLink").forEach((el) => {
            el.addEventListener("click", () => {});
          });
        }
      }, 100);
    }

    //renderBasedOnYouInterests
    function renderBasedOnYouInterests() {
      if (!document.querySelector(".based_on_your_interests") && document.querySelector(".promote_subscription_wrap")) {
        document.querySelector(".promote_subscription_wrap")?.insertAdjacentHTML("afterend", basedOnYouInterests);
      }

      onClickDifBtn();

      // open POPUP
      function onClickDifBtn() {
        if (document.querySelector(".overlay_popup")) {
          console.log(`POPUP`);
          function onOpenPopup() {
            document.querySelector("html").classList.add("open_var");
            document.querySelector(".overlay_popup").classList.remove("is_hidden");
            if (!document.querySelector(".overlay_popup #editYourInterests")) {
              document.querySelector(".overlay_popup .container_popup")?.insertAdjacentHTML("beforeend", contentPopupHtml);
            }
            if (document.querySelector(".overlay_popup #editYourInterests")) {
              setPersonalizedBox();
              changeInputValue();
            }

            document.querySelectorAll(".overlay_popup .btn_close").forEach((i) => {
              i.addEventListener("click", (e) => {
                // click on btn close popup
                onClosePopup();
              });
            });
            document.querySelectorAll(".overlay_popup").forEach((i) => {
              i.addEventListener("click", (e) => {
                // click on overlay popup
                if (e.target.matches(".overlay_popup")) {
                  onClosePopup();
                }
              });
            });
            document.querySelector(".btn_cancel").addEventListener("click", () => {
              onClosePopup();
            });
            document.querySelector(".btn_save_your_interests").addEventListener("click", () => {
              setLocalStorInputValue();
              onClosePopup();
              jQuery('input[type="checkbox"]').off();
              if (document.querySelector("#newList")) {
                document.querySelector("#newList").remove();
                renderPageList();
              }
            });
          }

          function onClosePopup() {
            document.querySelectorAll(".overlay_popup").forEach((el) => {
              el.classList.add("is_hidden");
            });
            setTimeout(() => {
              document.querySelectorAll(".personalized_txt_wrapp").forEach((el) => {
                el.textContent = "";
              });
            }, 600);

            if (document.querySelector("html").classList.contains("open_var")) {
              document.querySelector("html").classList.remove("open_var");
            }
          }
          let f = setInterval(() => {
            if (document.querySelector(".change_preferences_btn")) {
              clearInterval(f);
              document.querySelector(".change_preferences_btn").addEventListener("click", () => {
                onOpenPopup();
              });
            }
          }, 100);
        }
      }

      //set personalized_box
      function setPersonalizedBox() {
        if (localStorage.getItem("perfectYogaJourney")) {
          temp = JSON.parse(localStorage.getItem("perfectYogaJourney"));
          temp.forEach((list) => {
            for (var key in list) {
              document.querySelectorAll(".personalized_txt_wrapp").forEach((i) => {
                if (i.getAttribute("data-name") === key) {
                  let arrList = list[key];
                  arrList.forEach((link) => {
                    i.insertAdjacentHTML("beforeend", `<p class="personalized_list_tag" data-tag='${link}'>${link}</p>`);
                    console.log(link);
                  });
                  // console.log(list[key]);
                }
              });
              document.querySelectorAll(".choose_option_wrapp label").forEach((i) => {
                let arrList = list[key];
                arrList.forEach((link) => {
                  if (i.getAttribute("data-name") === link) {
                    i.previousElementSibling.checked = true;
                    // console.log(list[key]);
                  }
                });
              });
            }
          });

          // document.querySelectorAll(".personalized_txt_wrapp").forEach((el) => {
          //   if (el.children.length === 0) {
          //     el.style.display = "none";
          //   }
          // });
        }
      }

      function changeInputValue() {
        if (document.querySelector(".personalized_list_tag")) {
          document.querySelectorAll(".personalized_txt_wrapp").forEach((el) => {
            el.addEventListener("click", (e) => {
              if (!e.target.getAttribute("data-test")) {
                console.log(el, `UUUUUUUUUUUUUU`);
                el.nextElementSibling.classList.toggle("is_open");
              }

              e.target.setAttribute("data-test", "1");
              setTimeout(() => {
                if (e.target.getAttribute("data-test")) {
                  e.target.removeAttribute("data-test");
                }
              }, 300);
            });
          });
        }

        jQuery('input[type="checkbox"]').on("change", function (e) {
          if (jQuery(this).prop("checked")) {
            e.target.parentElement.previousElementSibling.insertAdjacentHTML("beforeend", `<p class="personalized_list_tag" data-tag='${e.target.nextElementSibling.getAttribute("data-name")}'>${e.target.nextElementSibling.getAttribute("data-name")}</p>`);
          } else {
            e.target.parentElement.previousElementSibling.querySelectorAll(".personalized_list_tag").forEach((el) => {
              if (el.getAttribute("data-tag") === e.target.nextElementSibling.getAttribute("data-name")) {
                el.remove();
              }
            });
          }
        });

        jQuery(document).ready(function () {
          jQuery('input[type="radio"]').on("change", function (e) {
            if (jQuery(this).prop("checked")) {
              e.target.parentElement.previousElementSibling.textContent = "";
              e.target.parentElement.previousElementSibling.insertAdjacentHTML("beforeend", `<p class="personalized_list_tag" data-tag='${e.target.nextElementSibling.getAttribute("data-name")}'>${e.target.nextElementSibling.getAttribute("data-name")}</p>`);
            }
          });
        });
      }

      function setLocalStorInputValue() {
        let text;
        let arr = [],
          experienceLevel = [],
          preferredDuration = [],
          yogaType = [],
          areasOfFocus = [];
        document.querySelectorAll(".custom_checkbox:checked + label").forEach((el) => {
          if (el.closest(".first_page")) {
            text = el.getAttribute("data-name");
            experienceLevel.push(text);
          }
          if (el.closest(".second_page")) {
            text = el.getAttribute("data-name");
            yogaType.push(text);
          }
          if (el.closest(".third_page")) {
            text = el.getAttribute("data-name");
            areasOfFocus.push(text);
          }
          if (el.closest(".fourth_page")) {
            text = el.getAttribute("data-name");
            preferredDuration.push(text);
          }
        });

        arr.push({
          experienceLevel: experienceLevel,
          preferredDuration: preferredDuration,
          yogaType: yogaType,
          areasOfFocus: areasOfFocus,
        });

        if (localStorage.getItem("perfectYogaJourney")) {
          localStorage.removeItem("perfectYogaJourney");
          localStorage.setItem("perfectYogaJourney", JSON.stringify(arr));
        } else {
          localStorage.setItem("perfectYogaJourney", JSON.stringify(arr));
        }
      }
    }

    //   renderBasedOnYouInterests
    function renderPageList() {
      if (!document.querySelector("#newList") && document.querySelector(".based_on_your_interests")) {
        document.querySelector(".based_on_your_interests")?.insertAdjacentHTML("afterend", pageListHtml);
      }

      if (document.querySelector("#newList")) {
        getPdpShorterProduction();
      }
    }
    //diff function for list
    function getPdpShorterProduction() {
      let product;
      let levelBeginner = "Beginner";
      let levelIntermediate = "Intermediate";
      let levelAdvanced = "Advanced";

      let typeOfYoga1 = "Vinyasa Flow";
      let typeOfYoga2 = "Hatha";
      let typeOfYoga3 = "Power Yoga";
      let typeOfYoga4 = "Restorative/Yin";
      let typeOfYoga5 = "Kundalini Yoga";
      let typeOfYoga6 = "Yoga for Meditation and Mindfulness";

      let focusOn1 = "Core strength and stability";
      let focusOn2 = "Back strength and pain relief";
      let focusOn3 = "Upper body strength and toning";
      let focusOn4 = "Flexibility and joint mobility";
      let focusOn5 = "Relaxation and and sleep improvement";
      let focusOn6 = "Mindfulness and meditation techniques";
      let focusOn7 = "Women’s health, Prenatal and Postnatal practices";
      let focusOn8 = "Techniques to increase energy";

      let durationTwentyTxt = "10-20 minutes";
      let durationFortyFiveTxt = "30-45 minutes";
      let durationSixtyTxt = "60 minutes or more";

      fetch(`videos-metadata-crs.json`)
        .then((response) => response.json())
        .then((json) => {
          product = json;

          for (const key of Object.keys(product)) {
            document.querySelector(".new_list_yoga_classes").insertAdjacentHTML("beforeend", setListYogaClasses(product[key].view_node, product[key].title, product[key].field_difficulty, product[key].thumbnail__target_id, product[key].field_instructor, product[key].field_media_duration, product[key].rating, product[key].tags, product[key].created, product[key].field_subscribers_only));

            if (localStorage.getItem("perfectYogaJourney") && document.querySelector(".new_list_yoga_classes").children.length === product.length) {
              temp = JSON.parse(localStorage.getItem("perfectYogaJourney"));
              temp.forEach((list) => {
                for (let link in list) {
                  document.querySelectorAll(".new_list_yoga_classes li").forEach((i) => {
                    let arrList = list[link];
                    arrList.forEach((link) => {
                      // difficulty
                      if (link === levelBeginner) {
                        if (i.getAttribute("data-difficulty") === "Beginner" || i.getAttribute("data-difficulty") === "Beginner I" || i.getAttribute("data-difficulty") === "Beginner II") {
                          if (!i.classList.contains("is_visible")) {
                            i.classList.add("is_visible");
                            i.style.display = "block";
                          }
                        }
                      }
                      if (link === levelIntermediate) {
                        if (i.getAttribute("data-difficulty") === "Intermediate" || i.getAttribute("data-difficulty") === "Intermediate I" || i.getAttribute("data-difficulty") === "Intermediate II" || i.getAttribute("data-difficulty") === "Intermediate III") {
                          if (!i.classList.contains("is_visible")) {
                            i.classList.add("is_visible");
                            i.style.display = "block";
                          }
                        }
                      }
                      if (link === levelAdvanced) {
                        if (i.getAttribute("data-difficulty") === "Advanced") {
                          if (!i.classList.contains("is_visible")) {
                            i.classList.add("is_visible");
                            i.style.display = "block";
                          }
                        }
                      }
                      // tags
                      let tagsArr = i.getAttribute("data-tags").split(",");
                      tagsArr.forEach((tag) => {
                        // typeOf
                        if (link === typeOfYoga1) {
                          if (tag === "Vinyasa/Power Yoga" || tag === "Pilates" || tag === "Jivamukti") {
                            if (!i.classList.contains("is_visible")) {
                              i.classList.add("is_visible");
                              i.style.display = "block";
                            }
                          }
                        }
                        if (link === typeOfYoga2) {
                          if (tag === "Hatha Yoga" || tag === "Prenatal/Postnatal Yoga" || tag === "Pranayama Yoga" || tag === "Slow Flow" || tag === "PNF" || tag === "Gentle Yoga" || tag === "Yoga at Work") {
                            if (!i.classList.contains("is_visible")) {
                              i.classList.add("is_visible");
                              i.style.display = "block";
                            }
                          }
                        }
                        if (link === typeOfYoga3) {
                          if (tag === "Ashtanga Yoga" || tag === "Vinyasa/Power Yoga" || tag === "Yoga for Athletes" || tag === "Yoga for Runners") {
                            if (!i.classList.contains("is_visible")) {
                              i.classList.add("is_visible");
                              i.style.display = "block";
                            }
                          }
                        }
                        if (link === typeOfYoga4) {
                          if (tag === "Restorative Yoga" || tag === "Yin and Yin/Yang Yoga" || tag === "Prenatal/Postnatal Yoga" || tag === "Mom and Baby Yoga" || tag === "Chair Yoga" || tag === "Yoga for Seniors" || tag === "Yoga Therapy" || tag === "Yoga for Back Care" || tag === "Yoga at Work") {
                            if (!i.classList.contains("is_visible")) {
                              i.classList.add("is_visible");
                              i.style.display = "block";
                            }
                          }
                        }
                        if (link === typeOfYoga5) {
                          if (tag === "Kundalini Yoga" || tag === "Pranayama Yoga") {
                            if (!i.classList.contains("is_visible")) {
                              i.classList.add("is_visible");
                              i.style.display = "block";
                            }
                          }
                        }
                        if (link === typeOfYoga6) {
                          if (tag === "Guided Meditation" || tag === "Kundalini Yoga" || tag === "Pranayama Yoga" || tag === "Values-based Education") {
                            if (!i.classList.contains("is_visible")) {
                              i.classList.add("is_visible");
                              i.style.display = "block";
                            }
                          }
                        }
                        //focusOn
                        if (link === focusOn1) {
                          if (tag === "Core Strength" || tag === "Balance" || tag === "Legs and Feet" || tag === "Spine" || tag === "Strength" || tag === "Whole Body" || tag === "Inversions") {
                            if (!i.classList.contains("is_visible")) {
                              i.classList.add("is_visible");
                              i.style.display = "block";
                            }
                          }
                        }
                        if (link === focusOn2) {
                          if (tag === "Backbends" || tag === "Lower Back" || tag === "Neck/Shoulders" || tag === "Spine") {
                            if (!i.classList.contains("is_visible")) {
                              i.classList.add("is_visible");
                              i.style.display = "block";
                            }
                          }
                        }
                        if (link === focusOn3) {
                          if (tag === "Core Strength" || tag === "Arms/Hands") {
                            if (!i.classList.contains("is_visible")) {
                              i.classList.add("is_visible");
                              i.style.display = "block";
                            }
                          }
                        }
                        if (link === focusOn4) {
                          if (tag === "Flexibility" || tag === "Hips" || tag === "Legs and Feet" || tag === "Twists" || tag === "Whole Body") {
                            if (!i.classList.contains("is_visible")) {
                              i.classList.add("is_visible");
                              i.style.display = "block";
                            }
                          }
                        }
                        if (link === focusOn5) {
                          if (tag === "Sleep/Relaxation" || tag === "Stress/Anxiety") {
                            if (!i.classList.contains("is_visible")) {
                              i.classList.add("is_visible");
                              i.style.display = "block";
                            }
                          }
                        }
                        if (link === focusOn6) {
                          if (tag === "Meditation") {
                            if (!i.classList.contains("is_visible")) {
                              i.classList.add("is_visible");
                              i.style.display = "block";
                            }
                          }
                        }
                        if (link === focusOn7) {
                          if (tag === "Prenatal/Postnatal Yoga" || tag === "Gentle Yoga" || tag === "Mom and Baby Yoga" || tag === "Yoga for Kids") {
                            if (!i.classList.contains("is_visible")) {
                              i.classList.add("is_visible");
                              i.style.display = "block";
                            }
                          }
                        }
                        if (link === focusOn8) {
                          if (tag === "Morning" || tag === "Travel" || tag === "Vigorous/Energy") {
                            if (!i.classList.contains("is_visible")) {
                              i.classList.add("is_visible");
                              i.style.display = "block";
                            }
                          }
                        }
                      });
                      // duration
                      if (document.querySelectorAll(".is_visible").length > 0) {
                        document.querySelectorAll(".is_visible").forEach((visib) => {
                          if (link === durationTwentyTxt) {
                            if (i.getAttribute("data-duration") <= 1200) {
                              if (!i.classList.contains("is_visible_duration") && i.classList.contains("is_visible")) {
                                i.classList.add("is_visible_duration");
                                i.style.display = "block";
                              }
                            } else {
                              if (!i.classList.contains("is_visible_duration")) {
                                i.style.display = "none";
                              }
                            }
                          }
                          if (link === durationFortyFiveTxt) {
                            if (i.getAttribute("data-duration") >= 1800 && i.getAttribute("data-duration") <= 2700) {
                              if (!i.classList.contains("is_visible_duration") && i.classList.contains("is_visible")) {
                                i.classList.add("is_visible_duration");
                                i.style.display = "block";
                              }
                            } else {
                              if (!i.classList.contains("is_visible_duration")) {
                                i.style.display = "none";
                              }
                            }
                          }
                          if (link === durationSixtyTxt) {
                            if (i.getAttribute("data-duration") >= 3600) {
                              if (!i.classList.contains("is_visible_duration") && i.classList.contains("is_visible")) {
                                i.classList.add("is_visible_duration");
                                i.style.display = "block";
                              }
                            } else {
                              if (!i.classList.contains("is_visible_duration")) {
                                i.style.display = "none";
                              }
                            }
                          }
                        });
                      } else {
                        // console.log(link);
                        if (link === durationTwentyTxt) {
                          if (i.getAttribute("data-duration") <= 1200) {
                            if (!i.classList.contains("is_visible_duration")) {
                              i.classList.add("is_visible_duration");
                              i.style.display = "block";
                            }
                          } else {
                            if (!i.classList.contains("is_visible_duration")) {
                              i.style.display = "none";
                            }
                          }
                        }
                        if (link === durationFortyFiveTxt) {
                          if (i.getAttribute("data-duration") >= 1800 && i.getAttribute("data-duration") <= 2700) {
                            if (!i.classList.contains("is_visible_duration")) {
                              i.classList.add("is_visible_duration");
                              i.style.display = "block";
                            }
                          } else {
                            if (!i.classList.contains("is_visible_duration")) {
                              i.style.display = "none";
                            }
                          }
                        }
                        if (link === durationSixtyTxt) {
                          if (i.getAttribute("data-duration") >= 3600) {
                            if (!i.classList.contains("is_visible_duration")) {
                              i.classList.add("is_visible_duration");
                              i.style.display = "block";
                            }
                          } else {
                            if (!i.classList.contains("is_visible_duration")) {
                              i.style.display = "none";
                            }
                          }
                        }
                      }
                    });
                  });
                }
              });
            }
          }
          if (document.querySelectorAll(".is_visible_duration").length <= 0) {
            document.querySelector(".list_yoga_classes_count").textContent = `${document.querySelectorAll(".is_visible").length} Classes`;
            getPagination("is_visible");
          } else {
            document.querySelector(".list_yoga_classes_count").textContent = `${document.querySelectorAll(".is_visible_duration").length} Classes`;
            getPagination("is_visible_duration");
          }
        });
    }

    function setListYogaClasses(link, title, difficulty, img, instructorName, duration, rating, tags, date, subscribers) {
      // duration
      let sec = +duration;
      let h = (sec / 3600) ^ 0;
      let m = ((sec - h * 3600) / 60) ^ 0;
      let s = sec - h * 3600 - m * 60;
      let result;
      let subscribersVar;
      // ${new Date(+duration * 1000).toUTCString().split(/ /)[4]}
      if (h === 0) {
        result = `${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}`;
      } else {
        result = `${h < 10 ? "" + h : h}:${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}`;
      }

      // rating
      let ratingSvg = "";
      if (rating >= 4.5) {
        ratingSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg>`;
      } else if (rating <= 4.5 && rating > 4) {
        ratingSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1186 925l257-250l-356-52l-66-10l-30-60l-159-322v963l59 31l318 168l-60-355l-12-66zm452-262l-363 354l86 500q5 33-6 51.5t-34 18.5q-17 0-40-12l-449-236l-449 236q-23 12-40 12q-23 0-34-18.5t-6-51.5l86-500L25 663q-32-32-23-59.5T56 569l502-73L783 41q20-41 49-41q28 0 49 41l225 455l502 73q45 7 54 34.5t-24 59.5z"></path></svg>`;
      } else if (rating === 4) {
        ratingSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1137 972l306-297l-422-62l-189-382l-189 382l-422 62l306 297l-73 421l378-199l377 199zm527-357q0 22-26 48l-363 354l86 500q1 7 1 20q0 50-41 50q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg>`;
      } else if (rating === 3) {
        ratingSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1137 972l306-297l-422-62l-189-382l-189 382l-422 62l306 297l-73 421l378-199l377 199zm527-357q0 22-26 48l-363 354l86 500q1 7 1 20q0 50-41 50q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1137 972l306-297l-422-62l-189-382l-189 382l-422 62l306 297l-73 421l378-199l377 199zm527-357q0 22-26 48l-363 354l86 500q1 7 1 20q0 50-41 50q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg>`;
      } else if (rating < 4 && rating > 3) {
        ratingSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1186 925l257-250l-356-52l-66-10l-30-60l-159-322v963l59 31l318 168l-60-355l-12-66zm452-262l-363 354l86 500q5 33-6 51.5t-34 18.5q-17 0-40-12l-449-236l-449 236q-23 12-40 12q-23 0-34-18.5t-6-51.5l86-500L25 663q-32-32-23-59.5T56 569l502-73L783 41q20-41 49-41q28 0 49 41l225 455l502 73q45 7 54 34.5t-24 59.5z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1137 972l306-297l-422-62l-189-382l-189 382l-422 62l306 297l-73 421l378-199l377 199zm527-357q0 22-26 48l-363 354l86 500q1 7 1 20q0 50-41 50q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg>`;
      } else if (rating < 3 && rating > 2) {
        ratingSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1186 925l257-250l-356-52l-66-10l-30-60l-159-322v963l59 31l318 168l-60-355l-12-66zm452-262l-363 354l86 500q5 33-6 51.5t-34 18.5q-17 0-40-12l-449-236l-449 236q-23 12-40 12q-23 0-34-18.5t-6-51.5l86-500L25 663q-32-32-23-59.5T56 569l502-73L783 41q20-41 49-41q28 0 49 41l225 455l502 73q45 7 54 34.5t-24 59.5z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1137 972l306-297l-422-62l-189-382l-189 382l-422 62l306 297l-73 421l378-199l377 199zm527-357q0 22-26 48l-363 354l86 500q1 7 1 20q0 50-41 50q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1137 972l306-297l-422-62l-189-382l-189 382l-422 62l306 297l-73 421l378-199l377 199zm527-357q0 22-26 48l-363 354l86 500q1 7 1 20q0 50-41 50q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg>`;
      } else if (rating === 2) {
        ratingSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1137 972l306-297l-422-62l-189-382l-189 382l-422 62l306 297l-73 421l378-199l377 199zm527-357q0 22-26 48l-363 354l86 500q1 7 1 20q0 50-41 50q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1137 972l306-297l-422-62l-189-382l-189 382l-422 62l306 297l-73 421l378-199l377 199zm527-357q0 22-26 48l-363 354l86 500q1 7 1 20q0 50-41 50q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1137 972l306-297l-422-62l-189-382l-189 382l-422 62l306 297l-73 421l378-199l377 199zm527-357q0 22-26 48l-363 354l86 500q1 7 1 20q0 50-41 50q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg>`;
      } else if (rating === 1) {
        ratingSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1137 972l306-297l-422-62l-189-382l-189 382l-422 62l306 297l-73 421l378-199l377 199zm527-357q0 22-26 48l-363 354l86 500q1 7 1 20q0 50-41 50q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1137 972l306-297l-422-62l-189-382l-189 382l-422 62l306 297l-73 421l378-199l377 199zm527-357q0 22-26 48l-363 354l86 500q1 7 1 20q0 50-41 50q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1137 972l306-297l-422-62l-189-382l-189 382l-422 62l306 297l-73 421l378-199l377 199zm527-357q0 22-26 48l-363 354l86 500q1 7 1 20q0 50-41 50q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg>n<svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1137 972l306-297l-422-62l-189-382l-189 382l-422 62l306 297l-73 421l378-199l377 199zm527-357q0 22-26 48l-363 354l86 500q1 7 1 20q0 50-41 50q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg>`;
      } else if (rating === 0) {
        ratingSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1137 972l306-297l-422-62l-189-382l-189 382l-422 62l306 297l-73 421l378-199l377 199zm527-357q0 22-26 48l-363 354l86 500q1 7 1 20q0 50-41 50q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1137 972l306-297l-422-62l-189-382l-189 382l-422 62l306 297l-73 421l378-199l377 199zm527-357q0 22-26 48l-363 354l86 500q1 7 1 20q0 50-41 50q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1137 972l306-297l-422-62l-189-382l-189 382l-422 62l306 297l-73 421l378-199l377 199zm527-357q0 22-26 48l-363 354l86 500q1 7 1 20q0 50-41 50q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1137 972l306-297l-422-62l-189-382l-189 382l-422 62l306 297l-73 421l378-199l377 199zm527-357q0 22-26 48l-363 354l86 500q1 7 1 20q0 50-41 50q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1137 972l306-297l-422-62l-189-382l-189 382l-422 62l306 297l-73 421l378-199l377 199zm527-357q0 22-26 48l-363 354l86 500q1 7 1 20q0 50-41 50q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg>`;
      } else {
        console.log(`object`, rating);
      }

      // subscribersOnly
      if (subscribers === true) {
        subscribersVar = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"></path></svg>`;
      } else {
        subscribersVar = `<span style="--svg: url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='currentColor' stroke-linecap='round' stroke-width='2'%3E%3Cpath stroke-dasharray='20' stroke-dashoffset='20' d='M3 21V20C3 17.7909 4.79086 16 7 16H11C13.2091 16 15 17.7909 15 20V21'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' dur='0.4s' values='20;0'/%3E%3C/path%3E%3Cpath stroke-dasharray='20' stroke-dashoffset='20' d='M9 13C7.34315 13 6 11.6569 6 10C6 8.34315 7.34315 7 9 7C10.6569 7 12 8.34315 12 10C12 11.6569 10.6569 13 9 13Z'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' begin='0.5s' dur='0.4s' values='20;0'/%3E%3C/path%3E%3Cpath stroke-dasharray='8' stroke-dashoffset='8' d='M15 6H21'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' begin='1s' dur='0.2s' values='8;0'/%3E%3C/path%3E%3Cpath stroke-dasharray='8' stroke-dashoffset='8' d='M18 3V9'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' begin='1.2s' dur='0.2s' values='8;0'/%3E%3C/path%3E%3C/g%3E%3C!-- 1695998333412 --%3E%3C/svg%3E&quot;); width: 1em; height: 1em; background-color: currentcolor; -webkit-mask-image: var(--svg); -webkit-mask-repeat: no-repeat; -webkit-mask-size: 100% 100%;"></span>`;
      }

      // difficulty
      let difficultySvg = "";
      if (difficulty === "Advanced") {
        difficultySvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M21 4h-5v16h5V4m-7 5H9v11h5V9m-7 5H2v6h5v-6Z"></path></svg>`;
      } else if (difficulty === "Beginner I" || difficulty === "Beginner II" || difficulty === "Beginner III") {
        difficultySvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19.5 5.5v13h-2v-13h2m-7 5v8h-2v-8h2M21 4h-5v16h5V4m-7 5H9v11h5V9m-7 5H2v6h5v-6Z"></path></svg>`;
      } else if (difficulty === "Intermediate I" || difficulty === "Intermediate II" || difficulty === "Intermediate III") {
        difficultySvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19.5 5.5v13h-2v-13h2M21 4h-5v16h5V4m-7 5H9v11h5V9m-7 5H2v6h5v-6Z"></path></svg>`;
      }

      return `
  <li data-difficulty='${difficulty}' data-duration='${duration}' data-tags='${tags}' data-rating="${rating}" data-created="${date}" data-title="${title}" class="item" hidden>
    <a href="https://www.doyogawithme.com${link}">
      <div class="item_img">
        <img src="https://www.doyogawithme.com${img}" alt="${title}" class="field_media_img" />
        <div class="field_absol_wrap">
        <span class="field_difficulty_txt">${difficultySvg}${difficulty}</span>
        <p class="field_media_duration_txt">${result}</p>
        </div>
      </div>
      <div class="item_info">
        <h2 class="field_title">${subscribersVar} ${title}</h2>
        <div class="item_rating_wrap">
          <p class="field_instructor_name">${instructorName}</p>
          <p class="rating_icon">${ratingSvg}</p>
        </div>
      </div>
    </a>
  </li>
          `;
    }

    function getPagination(style) {
      let s = setInterval(() => {
        if (typeof $ === "function" && typeof $("#pagination-container").pagination === "function") {
          clearInterval(s);
          const items = document.querySelectorAll(`.${style}`);

          $("#pagination-container").pagination({
            dataSource: [...items],
            autoHidePrevious: true,
            autoHideNext: true,
            pageSize: 9,
            callback: function (data, pagination) {
              var html = simpleTemplating(data);
              $(".new_list_yoga_classes").html(html);
            },
          });

          function simpleTemplating(data) {
            const html = new DocumentFragment();
            $.each(data, function (index, item) {
              item.removeAttribute("hidden");
              html.append(item);
            });
            return html;
          }
        }
      }, 100);
    }
  }
}, 100);
