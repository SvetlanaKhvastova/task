let treblehealthCalendar = setInterval(() => {
  if (document) {
    clearInterval(treblehealthCalendar);

    // jquery
    let script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
    script.async = false;
    document.head.appendChild(script);
    // cdn slider
    let scriptCustomSlider = document.createElement("script");
    scriptCustomSlider.src = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js";
    scriptCustomSlider.async = false;
    document.head.appendChild(scriptCustomSlider);

    let scriptCustomSliderStyle = document.createElement("link");
    scriptCustomSliderStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css";
    scriptCustomSliderStyle.rel = "stylesheet";
    document.head.appendChild(scriptCustomSliderStyle);
    // script tooltip
    let scriptPopper = document.createElement("script");
    scriptPopper.src = "https://unpkg.com/popper.js@1";
    scriptPopper.async = false;
    document.body.appendChild(scriptPopper);

    let scriptTippy = document.createElement("script");
    scriptTippy.src = "https://unpkg.com/tippy.js@5";
    scriptTippy.async = false;
    document.body.appendChild(scriptTippy);

    let newStyle = /*html */ `
    <style>
/*main */
#lp-pom-root {
  display: none;
}
/* */
.new_body {
  background: #fff;
}
.new_body p {
  color: #202b47;
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  margin: 0;
}
.container_var {
  max-width: 1136px;
  width: 95%;
  margin: 0 auto;
}
.main_title {
  color: #2e168d;
  font-size: 40px;
  font-weight: 800;
  line-height: 50px;
  margin: 0;
}
.sub_title {
  color: #2e168d;
  font-size: 30px;
  font-weight: 800;
  line-height: 40px;
  margin: 0;
}
.grab_your_free_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 310px;
  height: 62px;
  color: #fff;
  font-size: 18px;
  font-weight: 800;
  line-height: 28px;
  margin: 28px 0 0;
  border-radius: 5px;
  border: 2px solid #ff2e1f;
  background: #ff2e1f;
  cursor: pointer;
}
/*new_header */
.new_header{
  border-bottom: 1px solid #E6E6E6;
  background: #EFECFB;
  padding: 20px 0;
}
.new_header_wrapp{
  display: flex;
align-items: center;
    justify-content: space-between;
}
.tel_link{
    display: flex;
align-items: center;
gap: 12px;
color: #2E168D;
font-size: 18px;
font-weight: 800;
line-height: 28px;
}
.tel_link img{
  width: 24px;
}
/* sticky_header */
.sticky_header {
  width: 100%;
  border-bottom: 1px solid #E6E6E6;
  background: #EFECFB;
  height: 0;
  opacity: 0;
  transition: opacity 0.7s;
  padding: 0;
  overflow: hidden;
}
.sticky_header.is_fixed {
  padding: 20px 0;
  opacity: 1;
  position: fixed;
  top: -1px;
  left: 0;
  z-index: 111111111;
  overflow: initial;
  height: max-content;
}
.sticky_header .container_var{
max-width: 1280px;
}
.sticky_header .logo_link{
max-width: 211px;
}
.sticky_btn_wrapp {
  display: flex;
justify-content: flex-end;
    gap: 28px;
    width: 30%;
}
.sticky_header .trust_score_wrapp p{
color: #2E168D;
font-size: 13px;
font-weight: 400;
line-height: 20px;
}
.sticky_header .trust_score_wrapp p.reviews_txt {
    margin: 0 2px 0 8px;
}
.sticky_header .trust_score_wrapp p.reviews_mark {
    color: #2E168D;
    font-weight: 600;
    margin: 0 4px 0 2px;
    font-size: 14px;
}
.sticky_header .grab_your_free_btn{
  margin: 0;
  max-width: 148px;
  height: 48px;
font-size: 16px;
font-weight: 700;
line-height: 25px;
}
/*heroBlock */
#heroBlock{
  background: #2E168D;
  padding: 60px 0 80px;
}
.hero_wrapper{
  display: flex;
}
.hero_wrapper > div{
  width: 47%;
}
.hero_wrapper > div.main_descr_wrapp{
  width: 53%;
}
.hero_main_title{
  color: #FFF;
font-size: 55px;
font-weight: 800;
line-height: 65px;
margin: 20px 0;
}
#heroBlock p.hero_txt{
color: #EFECFB;
margin-bottom: 28px;
max-width: 552px;
}
.learn_wrapp{
  border-radius: 8px 0 0 8px;
background: #EFECFB;
padding: 28px;
margin-bottom: 28px;
}
.hero_sub_title{
  color: #2E168D;
font-size: 18px;
font-weight: 800;
line-height: 26px;
margin-bottom: 20px;
}
#heroBlock .learn_item{
  position: relative;
  padding-left: 32px;
}
#heroBlock .learn_item + .learn_item{
  margin-top: 12px;
}
#heroBlock .learn_item::before {
  position: absolute;
  content: "";
  width: 20px;
  height: 20px;
  background: url(https://conversionratestore.github.io/projects/treblehealth/img/hero_check_icon.svg) center no-repeat;
  background-size: contain;
  border-radius: 0;
  top: 3px;
  left: 0;
}
#heroBlock .learn_item p{
  color: #0A0A0A;
}
#heroBlock .learn_item p .accent_color_black{
font-weight: 700;
}
.featured_box{
  max-width: 552px;
}
.featured_box .hero_sub_title {
  color: #FFF;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgb(239 236 251 / 30%);
}
.featured_img_wrapp {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.trust_score_wrapp {
  display: flex;
  align-items: center;
  justify-content: flex-start;
      width: max-content;
    cursor: pointer;
}
.trust_score_wrapp p {
  color: #fff;
}
.trust_score_wrapp p.reviews_txt{
  margin: 0 4px 0 12px;
}
.trust_score_wrapp p.reviews_mark{
color: #00B67A;
font-weight: 700;
margin: 0 12px 0 2px;
}
.trust_score_wrapp p.reviews_count span{
text-decoration-line: underline;
}
.book_calendar_wrapp{
  display: flex;
    flex-direction: column;
    justify-content: space-between;
 border-radius: 16px;
background: #FFF;
box-shadow: 0px 4px 35px 0px rgba(153, 133, 235, 0.20);
}
.calendar_header {
padding: 28px 0 12px;
    border-bottom: 1px solid #E5E5E5;
    margin: 0 32px;
}
.calendar_header h2 {
  color: #2e168d;
  font-size: 18px;
  font-weight: 800;
  line-height: 26px;
  margin: 0 auto 12px;
      max-width: 270px;
    text-align: center;
}
.calendar_header ul {
  display: flex;
      align-items: center;
    justify-content: center;
  gap: 20px;
}
.calendar_header ul li {
  position: relative;
  padding-left: 28px;
}
.calendar_header ul li::before {
  position: absolute;
  content: "";
  width: 24px;
  height: 24px;
  background: url(https://conversionratestore.github.io/projects/treblehealth/img/dollar.svg) center no-repeat;
  background-size: contain;
  border-radius: 0;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
.calendar_header ul li:nth-child(2):before{
 background: url(https://conversionratestore.github.io/projects/treblehealth/img/clock.svg) center no-repeat;
}
.calendar_header ul li:nth-child(3):before{
 background: url(https://conversionratestore.github.io/projects/treblehealth/img/zoom.svg) center no-repeat;
}
.calendar_header ul li p {
  color: #2e168d;
  font-size: 14px;
  font-weight: 700;
  line-height: 30px;
}
.calendar_body{
  height: 100%;
}
.calendar_footer{
  padding: 20px 32px;
  background: #EFECFB;
  border-radius: 0 0 16px 16px;
}
.calendar_contacts{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 12px;
  gap: 20px;
}
.calendar_footer_title{
  color: #2E168D;
font-size: 18px;
font-weight: 800;
line-height: 26px;
}
.calendar_contacts .tel_link {
  gap: 6px;
}
.calendar_contacts .tel_link img{
  width: 20px;
}
.calendar_contacts .tel_link span:nth-child(3){
  font-weight: 700;
  text-decoration-line: underline;
}
.calendar_contacts .tel_link span{
  font-weight: 400;
font-size: 16px;
line-height: 25px;
}
.calendar_footer_members {
  display: flex;
  gap: 12px;
  justify-content: flex-start;
  align-items: center;
}
.calendar_footer p.calendar_footer_txt {
  color: #0a0a0a;
}
/*exclusiveBonusBlock */
#exclusiveBonusBlock {
  padding: 80px 0 0;
}
.exclusive_bonus_wrapp {
  display: flex;
  align-items: center;
  max-width: 944px;
  margin: 0 auto;
  border-radius: 8px;
  border: 1px solid #e5e5e5;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.12);
}
.exclusive_bonus_wrapp li:nth-child(1) {
  padding: 28px;
}
.exclusive_bonus_wrapp .sub_title {
  margin-bottom: 12px;
}
.exclusive_bonus_wrapp .accent_color {
  font-weight: 700;
  color: #2e168d;
  margin-bottom: 20px;
}
.exclusive_bonus_wrapp img {
  display: block;
  border-radius: 8px;
}
/*ourPatientsLoveTrebleHealthBlock */
#ourPatientsLoveTrebleHealthBlock {
  padding: 80px 0;
}
.our_patients_treble_health_wrapp .main_title {
  max-width: max-content;
  margin: 0 auto 8px;
}
.our_patients_treble_health_wrapp > p {
  max-width: 559px;
  margin: 0 auto 48px;
  text-align: center;
}
#ourPatientsLoveTrebleHealthBlock .video_item {
  display: block !important;
}
#ourPatientsLoveTrebleHealthBlock p.video_descr {
  background: #efecfb;
  color: #2e168d;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  padding: 20px;
  border-radius: 32px 32px 0 0;
}
#ourPatientsLoveTrebleHealthBlock .slick-list {
  max-width: 944px;
  width: 100%;
  margin: 0 auto;
  padding: 7px 0;
}
#ourPatientsLoveTrebleHealthBlock .slick-slide {
  margin: 0 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.12);
  border-radius: 32px;
  border: 1px solid #e5e5e5;
}
#ourPatientsLoveTrebleHealthBlock .slick-slide > div {
  border-radius: 32px;
}
#ourPatientsLoveTrebleHealthBlock .slick-arrow {
  position: absolute;
  height: 48px;
  width: 48px;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 5;
}
#ourPatientsLoveTrebleHealthBlock .slick-arrow.slick-disabled {
  opacity: 0.2;
}
#ourPatientsLoveTrebleHealthBlock .next_btn.slick-arrow {
  right: 0;
  left: unset;
}
#ourPatientsLoveTrebleHealthBlock .slick-arrow svg {
  width: 100%;
  height: 100%;
}
#ourPatientsLoveTrebleHealthBlock .slick-dots {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
#ourPatientsLoveTrebleHealthBlock .slick-dots li button {
  font-size: 0;
  line-height: 0;
  display: block;
  width: 10px;
  height: 10px;
  cursor: pointer;
  color: transparent;
  border: 0;
  outline: none;
  background: #efecfb;
  border-radius: 50%;
  border: none;
  margin: 0 4px;
}
#ourPatientsLoveTrebleHealthBlock .slick-dots li.slick-active button {
  background: #2e168d;
}
#ourPatientsLoveTrebleHealthBlock .video_link_wrapp {
  height: 467px;
  position: relative;
  cursor: pointer;
}
#ourPatientsLoveTrebleHealthBlock .video_link_wrapp::before {
  position: absolute;
  content: "";
  width: 80px;
  height: 80px;
  background: url(https://conversionratestore.github.io/projects/treblehealth/img/icon_youtube.svg) center no-repeat;
  background-size: contain;
  border-radius: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  transition: all 0.5s ease 0.5s;
}
#ourPatientsLoveTrebleHealthBlock .video_link_wrapp img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease 0.5s;
}
#ourPatientsLoveTrebleHealthBlock .video_link_wrapp iframe {
  width: 100%;
  height: 100%;
  border-radius: 0 0 32px 32px;
}
#ourPatientsLoveTrebleHealthBlock .video_link_wrapp.is_clicked img,
#ourPatientsLoveTrebleHealthBlock .video_link_wrapp.is_clicked::before {
  opacity: 0;
  pointer-events: none;
  overflow: hidden;
}
/*whoShouldAttendBlock */
#whoShouldAttendBlock {
  padding: 40px 0 80px;
}
.who_should_attend_wrapp {
  display: flex;
  gap: 36px;
}
.who_should_attend_descr .main_title {
  margin-bottom: 8px;
}
.who_should_attend_descr_list {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.who_should_attend_item:nth-child(1) {
  display: flex;
  max-width: 560px;
  border-radius: 8px;
  border: 1px solid #e5e5e5;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.12);
}
.who_should_attend_item:nth-child(1) > div:nth-child(2) {
  padding: 28px;
  position: relative;
}
.who_should_attend_item:nth-child(1) > div:nth-child(2)::after {
  position: absolute;
  content: "";
  width: 73px;
  height: 48px;
  background: url(https://conversionratestore.github.io/projects/treblehealth/img/arrow_icon.svg) center no-repeat;
  background-size: contain;
  bottom: 59px;
  right: -19px;
}
.who_should_attend_item:nth-child(1) > div > p {
  margin-top: 20px;
}
.who_should_attend_descr_link {
  position: relative;
  padding-left: 32px;
}
.who_should_attend_descr_link::before {
  position: absolute;
  content: "";
  width: 20px;
  height: 20px;
  background: url(https://conversionratestore.github.io/projects/treblehealth/img/check_icon.svg) center no-repeat;
  background-size: contain;
  border-radius: 0;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
}
.who_should_attend_descr_link p {
  color: #2e168d;
}
.who_should_attend_item:nth-child(1) .img_wrapp {
  position: relative;
  max-width: 251px;
  width: 100%;
  overflow: hidden;
  border-radius: 8px 0 0 8px;
}
.who_should_attend_item:nth-child(1) .img_wrapp img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}
.who_should_attend_item:nth-child(1) .img_wrapp p.name_founder {
  position: absolute;
  bottom: 0;
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  background: rgba(139, 139, 139, 0.5);
  padding: 12px;
  width: 100%;
}
.who_should_attend_item:nth-child(1) .img_wrapp p.name_founder span {
  max-width: 165px;
  display: inline-block;
}
/*yourHostsBlock */
#yourHostsBlock {
  padding: 0 0 80px;
}
.your_hosts_wrapp .main_title {
  max-width: max-content;
  margin: 0 auto 48px;
}
.your_hosts_list {
  display: flex;
  gap: 36px;
}
.your_hosts_list > li {
  border-radius: 8px;
  border: 1px solid #e5e5e5;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.12);
  padding: 40px;
}
.host_full_info {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}
.host_name {
  color: #2e168d;
  font-size: 18px;
  font-weight: 800;
  line-height: 26px;
  margin-bottom: 8px;
}
.your_hosts_list p.host_doctor_of {
  color: #0a0a0a;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
}
.your_hosts_list p.host_descr {
  color: #0a0a0a;
}
#yourHostsBlock .tippy-tooltip {
border-radius: 8px;
background: #FFF;
color: #2E168D;
font-size: 14px;
font-weight: 400;
line-height: 20px;
box-shadow: 0px 0px 23px 7px rgba(0, 0, 0, 0.12);
}
#yourHostsBlock .tippy-popper {
  max-width: 167px !important;
  top: -12px !important;
}
#yourHostsBlock .tippy-tooltip[data-placement^="bottom"] > .tippy-arrow {
  border-bottom-color: #fff;
}
#yourHostsBlock .tippy-tooltip[data-placement^="top"] > .tippy-arrow {
  border-top-color: #fff;
}
#yourHostsBlock .tippy-tooltip[data-placement^="top"] .tippy-arrow {
    border-width: 22px 29px 0;
    bottom: -17px;
}
#yourHostsBlock .tippy-content {
    padding: 16px;
}
/*clinicallyProvenResultsBlock */
#clinicallyProvenResultsBlock {
  background: #efecfb;
  padding: 80px 0;
}
.clinically_proven_results_box {
  max-width: 944px;
  margin: 0 auto;
  border-radius: 32px;
    background: #FFF;
    box-shadow: 0px 4px 35px 0px rgba(153, 133, 235, 0.20);
    padding: 40px;
}
.clinically_proven_results_box .main_title {
  text-align: center;
  margin-bottom: 40px;
}
.clinically_proven_results_box > p {
  color: #2e168d;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  margin-top: 40px;
}
.clinically_proven_results_wrapp .grab_your_free_btn {
  margin: 28px auto 0;
}
.circular_chart_list {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.circular_chart_item {
  position: relative;
  width: 100%;
    max-width: 231px;
}
.circular_chart_item:nth-child(2)::before,
.circular_chart_item:nth-child(2)::after{
  position: absolute;;
  content: '';
  width: 3px;
height: 49px;
border-radius: 3px;
background: #2E168D;
top: 50%;
  transform: translateY(-50%);
}
.circular_chart_item:nth-child(2)::before{
left: -64px;
}
.circular_chart_item:nth-child(2)::after{
right: -64px;
}
.circular_chart_info {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.circular_chart_item_title {
  color: #2e168d;
  font-size: 36px;
  font-weight: 800;
  line-height: 45px;
  margin-bottom: 8px;
      text-align: center;
}
#clinicallyProvenResultsBlock p.circular_chart_item_txt {
  color: #2e168d;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  width: 100%;
    min-width: 151px;
    text-align: center;
    min-height: 100px;
}
#clinicallyProvenResultsBlock .circular_chart_item:nth-child(1) p.circular_chart_item_txt{
      min-width: 118px;
}
.circle {
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
}
/*trustpilotBlock */
#trustpilotBlock {
  background: #efecfb;
  padding: 40px 0 80px;
}
/*frequentlyAskedQuestionsBlock */
#frequentlyAskedQuestionsBlock {
  padding: 80px 0;
}
.frequently_asked_questions_wrapp .main_title{
text-align:center;
margin-bottom: 48px;
}
.questions_accordion{
      max-width: 1000px;
      margin: 0 auto;
}
.questions_accordion_link {
  padding: 20px;
  cursor: pointer;
}
#frequentlyAskedQuestionsBlock .questions_accordion_link p{
  color: #2e168d;
  font-weight: 800;
  line-height: 28px;
    font-size: 18px;
}
.questions_accordion_lists{
  padding: 15px 40px 20px 40px;
  display: none;
}
.accordion_icon_wrapp{
  margin-right: 10px;
  display: inline-block;
  float: left;
}
.accordion_icon_closed,
.accordion_icon_opened{
display: inline-block;
    width: 100%;
    max-width: 24px;
    max-height: 17px;
    height: 100%;
}
.accordion_icon_closed svg,
.accordion_icon_opened svg{
  width: 100%;
  height: 100%;
}
.accordion_icon_opened,
.questions_accordion_block.active .accordion_icon_closed{
  display: none;
}
.questions_accordion_block.active .accordion_icon_opened{
 display: block;
}
.frequently_asked_questions_wrapp .grab_your_free_btn{
margin: 28px auto 0;
}
/*verifiedReviewsOnGoogleBlock */
#verifiedReviewsOnGoogleBlock {
  background: #fbfafe;
  padding: 80px 0;
}
.verified_reviews_on_google_wrapp .main_title {
  max-width: max-content;
  margin: 0 auto 48px;
}
.ti-reviews-container-wrapper {
  overflow: visible;
  display: flex;
  flex-wrap: nowrap;
}
.ti-column {
  flex: 0 0 23%;
  max-width: 25%;
}
.ti-review-item {
  padding: 8px !important;
  transition: transform 300ms ease-out;
}
.ti-review-item > .ti-inner {
  border-top-width: 2px !important;
  border-bottom-width: 2px !important;
  border-left-width: 2px !important;
  border-right-width: 2px !important;
  background-color: white !important;
  backdrop-filter: blur(0px);
  border-style: solid !important;
  border-color: #ffffff !important;
  background: #ffffff !important;
  border-radius: 4px !important;
  padding: 20px !important;
  margin: 0 !important;
  display: block;
}
.ti-review-header {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  position: relative;
  font-size: 14px;
  line-height: 1.4em;
}
.ti-profile-img {
  margin: 0 15px 0 0 !important;
}
.ti-profile-img img {
  width: 40px !important;
  height: 40px !important;
  padding: 0px !important;
  display: block;
  border-radius: 30px;
  min-width: initial !important;
  max-width: initial !important;
  object-fit: cover;
  object-position: top;
}
.ti-profile-details {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  margin: 0 !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.ti-review-header:after {
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 0px;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(https://cdn.trustindex.io/assets/platform/Google/icon.svg);
  background-size: 100% 100%;
}
.ti-name {
  font-size: 18px !important;
  line-height: 28px !important;
  font-weight: 800 !important;
  overflow: hidden;
  padding-right: 25px;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #000000;
  margin-bottom: 2px;
}
.ti-stars {
  margin-bottom: 6px;
  margin-top: 15px;
  text-align: left;
  white-space: nowrap;
  display: block;
}
.ti-star {
  width: 17px;
  height: 17px;
  display: inline-block;
  margin: 0 !important;
  margin-right: 1px !important;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(https://cdn.trustindex.io/assets/platform/Google/star/f.svg) !important;
}
.ti-review-content {
  padding: 0;
  overflow: inherit !important;
  height: unset;
  text-align: left;
  transition: all 300ms ease-out;
  font-style: normal;
  -webkit-line-clamp: 4;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.ti-review-content .ti-inner {
  line-height: 21.75px;
  height: 77px;
  font-size: 15px;
  text-align: left;
   transition: all 700ms ease-out;
  overflow: hidden;
  padding-right: 0;
}
.ti-review-content .ti-inner.active{
      height: max-content;
}
.ti-highlight {
  padding: 1px 2px;
  margin: 0;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  border-radius: 1px;
  -webkit-border-radius: 1px;
  -moz-border-radius: 1px;
  background-color: transparent !important;
  background-image: linear-gradient(#fbe049, #fbe049);
  background-size: 100% 19px;
  background-position: bottom;
  background-repeat: no-repeat;
  color: #000 !important;
  font-size: inherit !important;
}
.ti-read-more {
  font-size: 16px !important;
  line-height: 25px !important;
  font-weight: 800 !important;
  display: block;
  padding: 5px 0 0;
  text-align: left;
}
.ti-read-more span {
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  font-size: 13.5px;
  color: #000000;
  opacity: 0.5;
  transition: all 300ms ease-out;
  cursor: pointer;
}
.ti-review-item:hover {
  -webkit-transform: translate(0, -5px);
  -ms-transform: translate(0, -5px);
  transform: translate(0, -5px);
}
.ti-read-more span:hover{
  text-decoration:underline;
  opacity: 1;
}
/*completeRecoveryBlock */
#completeRecoveryBlock {
  padding: 80px 0;
}
#completeRecoveryBlock .complete_recovery_wrapp {
  display: flex;
  align-items: center;
  gap: 36px;
}
.complete_recovery_wrapp .img_wrapp {
  border-radius: 16px;
}
.complete_recovery_wrapp .main_title {
  margin-bottom: 12px;
}
/*new_footer */
.new_footer {
  background: #b5a6f2;
  padding: 20px 0;
}
.new_footer_wrapp {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.copyright_wrapp p {
  color: #2e168d;
  font-size: 14px;
  font-weight: 600;
  line-height: 30px;
  margin: 0;
}
.policy_conditions_wrapp a {
  color: #4622da;
  font-size: 14px;
  font-weight: 400;
  line-height: 30px;
}
.policy_conditions_wrapp {
  display: flex;
  gap: 22px;
}
    </style>
    `;

    let newHtml = /*html */ `
<div class="new_header">
  <div class="container_var">
    <div class="new_header_wrapp">
      <a class="logo_link" href="https://treblehealth.com">
        <img width="211" height="40" src="https://treblehealth.com/wp-content/uploads/2021/09/site-logo.svg" data-src="https://treblehealth.com/wp-content/uploads/2021/09/site-logo.svg" class="attachment-full size-full wp-image-13 ls-is-cached lazyloaded" alt="TrebleHealth Site Logo" />
      </a>
      <a class="tel_link" href="clkn/tel/3369414041">
        <img src="//d9hhrg4mnvzow.cloudfront.net/try.treblehealth.com/tinnitus-relief-discovery-call-v1-1/4c38b6a3-header-phone-icon.svg" alt="" data-src-desktop-1x="//d9hhrg4mnvzow.cloudfront.net/try.treblehealth.com/tinnitus-relief-discovery-call-v1-1/4c38b6a3-header-phone-icon.svg" data-src-mobile-1x="//d9hhrg4mnvzow.cloudfront.net/try.treblehealth.com/tinnitus-relief-discovery-call-v1-1/4c38b6a3-header-phone-icon.svg" />
        (336) 941-4041</a>
    </div>
  </div>
</div>
<div class="sticky_header">
  <div class="container_var">
    <div class="new_header_wrapp">
      <a class="logo_link" href="https://treblehealth.com">
        <img width="211" height="40" src="https://treblehealth.com/wp-content/uploads/2021/09/site-logo.svg" data-src="https://treblehealth.com/wp-content/uploads/2021/09/site-logo.svg" class="attachment-full size-full wp-image-13 ls-is-cached lazyloaded" alt="TrebleHealth Site Logo" />
      </a>
      <div class="trust_score_wrapp">
          <img class="trust_score_stars" src="https://conversionratestore.github.io/projects/treblehealth/img/trust_score_stars.svg" alt="stars" />
          <p class="reviews_txt">TrustScore</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M14.001 5.4958L2.67338 13.374L4.32601 8.50498L-0.000976562 5.4958H5.3474L7.00002 0.626465L8.65265 5.4958H14.001ZM7.00044 10.3651L10.0941 9.74213L11.3267 13.374L7.00044 10.3651Z" fill="#2E168D"/>
          </svg>
          <p class="reviews_mark">4.9</p>
          <p class="reviews_count">(<span><b>432</b> reviews</span>)</p>
        </div>
      <div class="sticky_btn_wrapp">
        <a class="tel_link" href="clkn/tel/3369414041">
          <img src="//d9hhrg4mnvzow.cloudfront.net/try.treblehealth.com/tinnitus-relief-discovery-call-v1-1/4c38b6a3-header-phone-icon.svg" alt="" data-src-desktop-1x="//d9hhrg4mnvzow.cloudfront.net/try.treblehealth.com/tinnitus-relief-discovery-call-v1-1/4c38b6a3-header-phone-icon.svg" data-src-mobile-1x="//d9hhrg4mnvzow.cloudfront.net/try.treblehealth.com/tinnitus-relief-discovery-call-v1-1/4c38b6a3-header-phone-icon.svg" />
          (336) 941-4041</a>
          <button class="grab_your_free_btn">Book a Free Call</button>
      </div>
    </div>
  </div>
</div>
<div class="new_body">
  <section id="heroBlock">
  <div class="container_var">
    <div class="hero_wrapper">
      <div class="main_descr_wrapp">
        <div class="trust_score_wrapp">
          <img class="trust_score_stars" src="https://conversionratestore.github.io/projects/treblehealth/img/trust_score_stars.svg" alt="stars" />
          <p class="reviews_txt">TrustScore</p>
          <svg class="reviews_star" xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
            <path d="M16 6.61172L3.05597 16.5L4.94442 10.3887L0 6.61172H6.11155L8 0.5L9.88844 6.61172H16ZM8.00047 12.7235L11.5356 11.9415L12.9441 16.5L8.00047 12.7235Z" fill="#00B67A" />
          </svg>
          <p class="reviews_mark">4.9</p>
          <p class="reviews_count">(<span><b>432</b> reviews</span>)</p>
        </div>
        <h1 class="hero_main_title">Unlock Relief from Tinnitus Today!</h1>
        <p class="hero_txt">Book your spot in our discovery call and take your first step towards quieter days - <b>absolutely FREE!</b></p>
        <div class="learn_wrapp">
          <h2 class="hero_sub_title">In this FREE discovery call, you’ll learn:</h2>
          <ul class="learn_list">
            <li class="learn_item">
              <p>Effective <span class="accent_color_black">treatment options</span> from licensed doctors of audiology.</p>
            </li>
            <li class="learn_item">
              <p>Our science-backed approach to tinnitus relief with an <span class="accent_color_black">80% success rate*</span>.</p>
            </li>
            <li class="learn_item">
              <p>Techniques to dramatically reduce symptoms.</p>
            </li>
            <li class="learn_item">
              <p>Success stories of individuals reducing their tinnitus and reclaiming their lives.</p>
            </li>
            <li class="learn_item">
              <p>How anyone seeking tinnitus relief can integrate these habits into their daily life.</p>
            </li>
          </ul>
        </div>
        <div class="featured_box">
          <h2 class="hero_sub_title">Featured on :</h2>
          <div class="featured_img_wrapp">
            <img class="featured_img" src="https://conversionratestore.github.io/projects/treblehealth/img/forbes.svg" alt="logo forbes" />
            <img class="featured_img" src="https://conversionratestore.github.io/projects/treblehealth/img/healthy_hearing.svg" alt="logo healthy hearing" />
            <img class="featured_img" src="https://conversionratestore.github.io/projects/treblehealth/img/cnet.svg" alt="logo cnet" />
          </div>
        </div>
      </div>
      <div class="book_calendar_wrapp">
        <div class="calendar_header">
  <h2>Book Your Spot in a Free Tinnitus Relief Discovery Call</h2>
  <ul>
    <li><p>Free</p></li>
    <li><p>20 minutes</p></li>
    <li><p>Zoom call</p></li>
  </ul>
</div>
<div class="calendar_body">
  <iframe src="https://calendly.com/treble-health-audiologists/tinnitus-relief-discovery?embed_domain=treblehealth.com&amp;embed_type=Inline&amp;hide_event_type_details=1&amp;hide_gdpr_banner=1&amp;primary_color=4622da&amp;utm_term=1261762004.1699950023" width="100%" height="100%" frameborder="0" title="Select a Date &amp; Time - Calendly" data-gtm-yt-inspected-14="true" data-gtm-yt-inspected-60173040_75="true"></iframe>
</div>
<div class="calendar_footer">
  <div class="calendar_contacts">
    <h3 class="calendar_footer_title">Can’t find a time?</h3>
    <a class="tel_link" href="clkn/tel/8559224236">
      <img src="//d9hhrg4mnvzow.cloudfront.net/try.treblehealth.com/tinnitus-relief-discovery-call-v1-1/4c38b6a3-header-phone-icon.svg" alt="" data-src-desktop-1x="//d9hhrg4mnvzow.cloudfront.net/try.treblehealth.com/tinnitus-relief-discovery-call-v1-1/4c38b6a3-header-phone-icon.svg" data-src-mobile-1x="//d9hhrg4mnvzow.cloudfront.net/try.treblehealth.com/tinnitus-relief-discovery-call-v1-1/4c38b6a3-header-phone-icon.svg" />
      <span>Call us</span> <span>(855) 922-4236</span>
    </a>
  </div>
  <div class="calendar_footer_members">
    <img src="https://conversionratestore.github.io/projects/treblehealth/img/team members.png" alt="Our consultants" />
    <p class="calendar_footer_txt">We’re ready to support you.<br>Team members are standing by 24/7.</p>
  </div>
</div>
      </div>
    </div>
  </div>
</section>
  <section id="exclusiveBonusBlock">
    <div class="container_var">
      <ul class="exclusive_bonus_wrapp">
        <li>
          <h3 class="sub_title">Exclusive Bonus!</h3>
          <p class="accent_color">You will receive the “Tinnitus Guide: 2023 Edition” for FREE.</p>
          <p>This guide covers today's leading tinnitus treatments, how to find the root cause, and the newest research. It's an in-depth overview for managing tinnitus.</p>
          <button class="grab_your_free_btn">Grab Your FREE Seat Now!</button>
        </li>
        <li>
          <div class="img_wrapp">
            <img src="https://conversionratestore.github.io/projects/treblehealth/img/tinnitus_guide_img.png" alt="book" />
          </div>
        </li>
      </ul>
    </div>
  </section>
  <section id="ourPatientsLoveTrebleHealthBlock">
    <div class="container_var">
      <div class="our_patients_treble_health_wrapp">
        <h2 class="main_title">Why Our Patients Love Treble Health</h2>
        <p>We're proud of all the patients our solution has helped, and we're confident it will work for you too:</p>
        <div class="video_list">
          <div class="video_item">
            <p class="video_descr">Melinda had a <b>serious level of tinnitus</b>. She worked with Treble Health and found relief in just <b>47 Days</b>.</p>
            <div class="video_link_wrapp">
              <img src="https://conversionratestore.github.io/projects/treblehealth/img/melinda.png" alt="woman" />
              <iframe width="560" height="315" src="https://www.youtube.com/embed/PaJhaIUSSfQ?si=-LEXqse9UgrVqPtO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
          <div class="video_item">
            <p class="video_descr">Randy <b>lowered his tinnitus and got his life back</b> working with Treble Health over a <b>three-month</b> time period.</p>
            <div class="video_link_wrapp">
              <img src="https://conversionratestore.github.io/projects/treblehealth/img/randy.png" alt="man" />
              <iframe width="560" height="315" src="https://www.youtube.com/embed/PaJhaIUSSfQ?si=-LEXqse9UgrVqPtO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
          <div class="video_item">
            <p class="video_descr">James had severe tinnitus. He worked with Treble Health and <b>improved his condition by 75%.</b></p>
            <div class="video_link_wrapp">
              <img src="https://conversionratestore.github.io/projects/treblehealth/img/james.png" alt="man" />
              <iframe width="560" height="315" src="https://www.youtube.com/embed/8EwDVQ0gKVY?si=MmoerJmfnQog73GA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="whoShouldAttendBlock">
    <div class="container_var">
      <ul class="who_should_attend_wrapp">
        <li class="who_should_attend_item">
          <div class="img_wrapp">
            <img src="https://conversionratestore.github.io/projects/treblehealth/img/ben_thompson_img.png" alt="man" />
            <p class="name_founder"><span>Dr. Ben Thompson, AuD Founder of Treble Health</span></p>
          </div>
          <div>
            <h3 class="sub_title">Spaces are limited and filling up fast</h3>
            <p>Grab this limited time offer to transform your life today.</p>
            <p>Click the button to secure your spot!</p>
          </div>
        </li>
        <li class="who_should_attend_item">
          <div class="who_should_attend_descr">
            <h2 class="main_title">Who Should Attend?</h2>
            <p>The discovery call is designed for individuals who:</p>
            <ul class="who_should_attend_descr_list">
              <li class="who_should_attend_descr_link"><p>Struggle with tinnitus</p></li>
              <li class="who_should_attend_descr_link"><p>Have been told nothing can be done for their tinnitus</p></li>
              <li class="who_should_attend_descr_link"><p>Have wasted money on ineffective supplements or treatments</p></li>
              <li class="who_should_attend_descr_link"><p>Are near a point of desperation and just need help with their tinnitus</p></li>
            </ul>
            <p>If any of the above apply to you, you're in the right place!</p>
          </div>
          <button class="grab_your_free_btn">Grab Your FREE Seat Now!</button>
        </li>
      </ul>
    </div>
  </section>
  <section id="yourHostsBlock">
    <div class="container_var">
      <div class="your_hosts_wrapp">
        <h2 class="main_title">Your hosts:</h2>
        <ul class="your_hosts_list">
          <li>
            <div class="host_full_info">
              <div class="img_wrapp">
                <img src="https://conversionratestore.github.io/projects/treblehealth/img/tatyana_kennedy_img.png" alt="woman" />
              </div>
              <div>
                <h3 class="host_name">
                  Tatyana Kennedy, AuD
                  <svg class="tooltip_toggle" data-tooltip data-title="Doctor of Audiology" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 0C3.13428 0 0 3.13541 0 7C0 10.8668 3.13428 14 7 14C10.8657 14 14 10.8668 14 7C14 3.13541 10.8657 0 7 0ZM7 3.10484C7.65473 3.10484 8.18548 3.6356 8.18548 4.29032C8.18548 4.94505 7.65473 5.47581 7 5.47581C6.34527 5.47581 5.81452 4.94505 5.81452 4.29032C5.81452 3.6356 6.34527 3.10484 7 3.10484ZM8.58064 10.2742C8.58064 10.4612 8.42899 10.6129 8.24193 10.6129H5.75806C5.57101 10.6129 5.41935 10.4612 5.41935 10.2742V9.59677C5.41935 9.40972 5.57101 9.25806 5.75806 9.25806H6.09677V7.45161H5.75806C5.57101 7.45161 5.41935 7.29996 5.41935 7.1129V6.43548C5.41935 6.24843 5.57101 6.09677 5.75806 6.09677H7.56452C7.75157 6.09677 7.90323 6.24843 7.90323 6.43548V9.25806H8.24193C8.42899 9.25806 8.58064 9.40972 8.58064 9.59677V10.2742Z" fill="#2E168D" />
                  </svg>
                </h3>
                <p class="host_doctor_of">Doctor of Audiology</p>
              </div>
            </div>
            <p class="host_descr">Dr. Kennedy is an Audiologist with over 15 years of experience in creating tailored tinnitus solutions for patients who are looking to get back to living productive and fulfilling lives. She is a mother of two, a wife, an athlete and an avid traveler. She loves all things technology and tells unnecessarily long stories. Most importantly, Dr. Kennedy is committed to helping people make informed decisions about achieving better hearing health and well-being. She graduated with her Doctor of Audiology degree at the University of Florida.</p>
          </li>
          <li>
            <div class="host_full_info">
              <div class="img_wrapp">
                <img src="https://conversionratestore.github.io/projects/treblehealth/img/jackie_smith_img.png" alt="woman" />
              </div>
              <div>
                <h3 class="host_name">
                  Jackie Smith, AuD
                  <svg class="tooltip_toggle" data-tooltip data-title="Doctor of Audiology" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 0C3.13428 0 0 3.13541 0 7C0 10.8668 3.13428 14 7 14C10.8657 14 14 10.8668 14 7C14 3.13541 10.8657 0 7 0ZM7 3.10484C7.65473 3.10484 8.18548 3.6356 8.18548 4.29032C8.18548 4.94505 7.65473 5.47581 7 5.47581C6.34527 5.47581 5.81452 4.94505 5.81452 4.29032C5.81452 3.6356 6.34527 3.10484 7 3.10484ZM8.58064 10.2742C8.58064 10.4612 8.42899 10.6129 8.24193 10.6129H5.75806C5.57101 10.6129 5.41935 10.4612 5.41935 10.2742V9.59677C5.41935 9.40972 5.57101 9.25806 5.75806 9.25806H6.09677V7.45161H5.75806C5.57101 7.45161 5.41935 7.29996 5.41935 7.1129V6.43548C5.41935 6.24843 5.57101 6.09677 5.75806 6.09677H7.56452C7.75157 6.09677 7.90323 6.24843 7.90323 6.43548V9.25806H8.24193C8.42899 9.25806 8.58064 9.40972 8.58064 9.59677V10.2742Z" fill="#2E168D" />
                  </svg>
                </h3>
                <p class="host_doctor_of">Doctor of Audiology</p>
              </div>
            </div>
            <p class="host_descr">Dr. Smith prides herself on providing excellent patient care and improving the quality of each patient’s life through comprehensive tinnitus treatment. She graduated with her bachelor’s degree in Speech, Language, and Hearing Sciences from the University of Colorado and earned her Doctorate of Audiology at the University of Northern Colorado. Dr. Smith has worked in a variety of clinical settings including private practice, Ear Nose and Throat (ENT), and the Department of Veteran’s Affairs.</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
<section id="clinicallyProvenResultsBlock">
  <div class="container_var">
    <div class="clinically_proven_results_wrapp">
      <div class="clinically_proven_results_box">
        <h2 class="main_title">Clinically Proven Results</h2>
        <div class="circular_chart_list">
          <div class="circular_chart_item animation-none1 animated">
            <svg width="231" height="230" viewBox="0 0 231 230" fill="none" xmlns="http://www.w3.org/2000/svg" class="circular-chart">
              <path class="circle-bg" d="M230.629 115C230.629 178.513 179.142 230 115.629 230C52.1163 230 0.629028 178.513 0.629028 115C0.629028 51.4873 52.1163 0 115.629 0C179.142 0 230.629 51.4873 230.629 115ZM21.6398 115C21.6398 166.909 63.7202 208.989 115.629 208.989C167.538 208.989 209.618 166.909 209.618 115C209.618 63.0912 167.538 21.0108 115.629 21.0108C63.7202 21.0108 21.6398 63.0912 21.6398 115Z" fill="#B5A6F2" fill-opacity="0.2"></path>
              <circle id="circle1" class="circle" cx="115" cy="115" r="105" stroke="#B5A6F2" stroke-width="20" stroke-linecap="round" stroke-dasharray="552, 20000"></circle>
            </svg>
            <div class="circular_chart_info">
              <h3 class="circular_chart_item_title"><span class="count-number1">85</span>%</h3>
              <p class="circular_chart_item_txt">of patients report reduced tinnitus</p>
            </div>
          </div>
          <div class="circular_chart_item animation-none2 animated">
            <svg width="231" height="230" viewBox="0 0 231 230" fill="none" xmlns="http://www.w3.org/2000/svg" class="circular-chart">
              <path class="circle-bg" d="M230.629 115C230.629 178.513 179.142 230 115.629 230C52.1163 230 0.629028 178.513 0.629028 115C0.629028 51.4873 52.1163 0 115.629 0C179.142 0 230.629 51.4873 230.629 115ZM21.6398 115C21.6398 166.909 63.7202 208.989 115.629 208.989C167.538 208.989 209.618 166.909 209.618 115C209.618 63.0912 167.538 21.0108 115.629 21.0108C63.7202 21.0108 21.6398 63.0912 21.6398 115Z" fill="#B5A6F2" fill-opacity="0.2"></path>
              <circle id="circle2" class="circle" cx="115" cy="115" r="105" stroke="#B5A6F2" stroke-width="20" stroke-linecap="round" stroke-dasharray="492, 20000"></circle>
            </svg>
            <div class="circular_chart_info">
              <h3 class="circular_chart_item_title"><span class="count-number2">75</span>%</h3>
              <p class="circular_chart_item_txt">of patients showed clinically significant improvements in their tinnitus within six months*</p>
            </div>
          </div>
          <div class="circular_chart_item animation-none3 animated">
            <svg width="231" height="230" viewBox="0 0 231 230" fill="none" xmlns="http://www.w3.org/2000/svg" class="circular-chart">
              <path class="circle-bg" d="M230.629 115C230.629 178.513 179.142 230 115.629 230C52.1163 230 0.629028 178.513 0.629028 115C0.629028 51.4873 52.1163 0 115.629 0C179.142 0 230.629 51.4873 230.629 115ZM21.6398 115C21.6398 166.909 63.7202 208.989 115.629 208.989C167.538 208.989 209.618 166.909 209.618 115C209.618 63.0912 167.538 21.0108 115.629 21.0108C63.7202 21.0108 21.6398 63.0912 21.6398 115Z" fill="#B5A6F2" fill-opacity="0.2"></path>
              <circle id="circle3" class="circle" cx="115" cy="115" r="105" stroke="#B5A6F2" stroke-width="20" stroke-linecap="round" stroke-dasharray="630, 20000"></circle>
            </svg>
            <div class="circular_chart_info">
              <h3 class="circular_chart_item_title"><span class="count-number3">98</span>%</h3>
              <p class="circular_chart_item_txt">of patients can have their initial video visit within 3 days of signing up</p>
            </div>
          </div>
        </div>
        <p>*This data comes from our 2023 results using the Tinnitus Functional Index (TFI), out of 247 patients.</p>
      </div>
      <button class="grab_your_free_btn">Grab Your FREE Seat Now!</button>
    </div>
  </div>
</section>
  <section id="trustpilotBlock">
    <div class="container_var"></div>
  </section>
  <section id="frequentlyAskedQuestionsBlock">
    <div class="container_var">
      <div class="frequently_asked_questions_wrapp">
        <h2 class="main_title">Frequently Asked Questions</h2>
        <ul class="questions_accordion"></ul>
        <button class="grab_your_free_btn">Grab Your FREE Seat Now!</button>
      </div>
    </div>
  </section>
  <section id="verifiedReviewsOnGoogleBlock">
    <div class="container_var">
      <div class="verified_reviews_on_google_wrapp">
        <h2 class="main_title">Verified Reviews on Google</h2>
        <div class="ti-reviews-container-wrapper">
          <div class="ti-column firts_var"></div>
          <div class="ti-column second_var"></div>
          <div class="ti-column third_var"></div>
          <div class="ti-column fourth_var"></div>
        </div>
      </div>
    </div>
  </section>
  <section id="completeRecoveryBlock">
    <div class="container_var">
      <div class="complete_recovery_wrapp">
        <div class="img_wrapp">
          <img src="https://conversionratestore.github.io/projects/treblehealth/img/complete_recovery_img.png" alt="man" />
        </div>
        <div class="complete_recovery_descr">
          <h2 class="main_title">A complete recovery from tinnitus is possible</h2>
          <p>Learn how in under an hour. </p>
          <button class="grab_your_free_btn">Grab Your FREE Seat Now!</button>
        </div>
      </div>
    </div>
  </section>
</div>
<div class="new_footer">
  <div class="container_var">
    <div class="new_footer_wrapp">
      <div class="copyright_wrapp">
        <p>© Copyright 2023 Treble Health, LLC</p>
      </div>
      <div class="policy_conditions_wrapp">
        <a target="_blank" class="policy_link" href="https://treblehealth.com/privacy-policy/">Privacy Policy</a>
        <a target="_blank" class="condition_link" href="https://treblehealth.com/terms-of-service/">Terms Conditions</a>
      </div>
    </div>
  </div>
</div>
      `;

    let arrQuestions = {
      1: [`"I was told that tinnitus is permanent and I just have to “learn to live with it.” Can your services actually lower tinnitus?"`, `<p>Many doctors do not know that there are treatments for tinnitus. It’s true, there is no surgery or medication to <a href="https://treblehealth.com/tinnitus-cure/">cure tinnitus</a>, but research has shown that about 80% of patients can reduce the perception of tinnitus using tinnitus retraining techniques. Oftentimes, the volume gets softer too.</p>`],
      2: [`"Tinnitus retraining therapy takes too long. I’m looking for the fastest way to lower my tinnitus. Are you aware of any cures for tinnitus?"`, `<p><span style="font-weight: 400;">For a majority of tinnitus cases, there is no “quick-fix” solution. As part of our new patient onboarding, we help our patients identify any possible medical cause to tinnitus and refer them to the appropriate medical tests when applicable. Usually, habituation-based protocols (like the system we follow) are the only way to improve tinnitus.</span></p>`],
      3: [`"Can’t I just go to my local audiologist for this kind of service?"`, `<p><span style="font-weight: 400;">Most audiologists are not experts in tinnitus management. While you can certainly search your local area for tinnitus experts, research has shown that receiving care via telehealth can be performed at the same level of clinical efficacy. Your Treble Health audiologist may identify that you could benefit from in-person medical tests. In that case, we will refer you to the appropriate local clinic.</span></p>`],
      4: [`"I already have hearing aids for tinnitus. Isn’t that enough?"`, `<p><span style="font-weight: 400;">Hearing aids can help, but are not always enough. A comprehensive approach to managing tinnitus will focus on the whole person. This includes professional counseling, calming the central nervous system, and a comprehensive sound therapy plan.</span></p>`],
      5: [`“Do you take insurance?”`, `<p>While most insurance companies do not cover tinnitus treatment, if your insurance does offer this, typically called a benefit for hearing aids, we can provide the necessary documentation and codes for you to submit for reimbursement.</p>`],
      6: [`"I have an appointment with an ENT next week, so let me wait to meet with my doctor”`, `<p>Yes, definitely keep your ENT appointment. Our telehealth consultation is completely free, so you don’t need to wait until your ENT appt. We recommend scheduling the free consultation with us as soon as possible so that you can learn about options for tinnitus relief.</p>`],
      7: [`“I’m already scheduled to see a local audiologist. Why should I work with you instead of them?”`, `<p>You’re welcome to work with anyone that you choose, just make sure that you’re working with an audiologist who specializes in Tinnitus Retraining Therapy. Most audiologists are great for hearing loss, but few are specialized in tinnitus. We have an 85% success rate, and most patients that work with us see a significant tinnitus reduction within three months. Plus, our telehealth model allows us to have better prices and significantly shorter wait times for appointments.</p>`],
      8: [`“What do you do? How can you help?”`, `<p>We use the gold-standard method for reducing tinnitus, which is called Tinnitus Retraining Therapy. It includes medical devices worn on the ears and one-on-one appointments with an audiologist to reduce the anxiety-stress-tinnitus response. We have an 85% success rate, and most patients that work with us see a significant tinnitus reduction within three months.</p>`],
      9: [`“I’ve never used Zoom”`, `<p>No problem, it’s quite simple. You can download Zoom for your computer or mobile phone for free.</p>`],
      10: [`“Where are you located?”`, `<p>We operate via telehealth, allowing us to serve customers across all 50 states. We only see patients who live in the United States.</p>`],
      11: [`“How can you do a hearing test over the internet?”`, `<p>We do not perform hearing tests. We require that our patients have a full diagnostic hearing test performed locally and send it to us via email. This is not required before the free Zoom consultation.</p>`],
      12: [`“Are you doctors?”`, `<p>Our team is made up of licensed doctors of audiology who specialize in tinnitus treatment.</p>`],
      13: [`“How long does it take for the program to work?”`, `<p>We expect that you would see some level of improvement within 3 to 4 weeks, with the benefits increasing by month 2, 3, 6, and beyond. 82% of people who try the Bundle choose to keep it beyond the 45 day trial period, because they are experiencing improvements.</p>`],
      14: [`“Can you really help my tinnitus?”`, `<p>Yes! Based on our internal data, over 80% of our patients report tinnitus reduction using our Tinnitus Relief Bundle. We also offer a 45-day trial period, so if you’re not satisfied within that time period you can return them and be refunded 100%.</p>`],
      15: [`“Won’t my tinnitus go away on its own?”`, `<p>Tinnitus may resolve on its own but this is not guaranteed and research suggests it can take 18 months or longer. We prefer to be proactive, we believe people with tinnitus should not suffer unnecessarily while waiting and hoping it decreases on its own. The “wait-and-see” approach is not recommended.</p>`],
      16: [`“My doctor said there’s nothing that can be done for tinnitus, is that the case?”`, `<p dir="ltr" role="presentation">No, that is not the case. Our program uses Tinnitus Retraining Therapy, which is based on decades of research and has been shown to significantly reduce tinnitus in more than 80% of cases. In most cases, there is no surgery or medication that cures tinnitus, bringing it to zero, but there are legitimate approaches that reduce it and improve quality of life. Our goal is to significantly reduce tinnitus, which is absolutely possible.</p>`],
    };

    let arrGoogleReviews1 = {
      "Krista Keleher": ["https://lh3.googleusercontent.com/a-/AFdZucrEI6CcP1Pvnp3JYChAfrMZj8Yybr-3P0MVGbxllCk=s120-c-c-rp-w64-h64-mo-br100", '<mark class="ti-highlight">I am so glad I found Treble Health!</mark> I have been suffering with a major tinnitus spike for the last two months and now I have resources to help mitigate the intrusiveness of the noise in my head. Dr. Ramsay has been great to work with! She got me set up with hearing aids and a sound therapy plan. I now have hope that I will habituate to the tinnitus. Thank you!!'],
      "Tom Shell": ["https://lh3.googleusercontent.com/a-/AFdZucop5i96XVE1RojzBG-Hu2RUFxKYH1NgtFrwWrBz5g=s120-c-c-rp-w64-h64-mo-br100", `Tracy had <mark class="ti-highlight">excellent input and really listened to my particular case</mark>. I was very impressed and will be working more with Treble Health in the future.`],
      "Robbie Wigley": ["https://lh3.googleusercontent.com/a-/AFdZucrSsAAMBWRQo-Wg0vhm7j76sFgftjQ1FgUpgdfvXpY=s120-c-c-rp-w64-h64-mo-br100", `My audiologist was <mark class="ti-highlight">extremely professional very knowledgeable and respectful</mark>. She addressed all my questions and made me feel comfortable in sharing my situation. I am very grateful that I had the opportunity to speak with her and I recommend her highly to anyone else that is having difficulties.`],
    };
    let arrGoogleReviews2 = {
      "David Anderson": ["https://lh3.googleusercontent.com/a/AItbvmnda_W86_SEFT3Xw7EVJnk1rBRxnsVQfH1MqctC=s120-c-c-rp-w64-h64-mo-br100", `I think <mark class="ti-highlight">Treble Health is the most AWESOME team available for tinnitus</mark>. Your team truly cares. I think you all deserve more than an EXCELLENT. You all are beyond EXCELLENT. THANK YOU SO MUCH.`],
      "B. B.": ["https://lh3.googleusercontent.com/a/AItbvmmbY39YsL7j5_s4-ltoF77ZZ6YTcOEyY28mEgtx=s120-c-c-rp-w64-h64-mo-br100", `A life saver... <mark class="ti-highlight">I can't recommend this service enough to everyone struggling with tinnitus</mark> at the beginning, when it can as scary as hell. Suzanne has been helping me practically from the first minutes... I've seen great improvements in less than a month. Thank you Treble Health...`],
      "Pierre Alauzet": ["https://lh3.googleusercontent.com/a-/AFdZucpBgVz4iH5NW4EB8Tu6NW8QdX_WOj2C_5DnPoCB3Dg=s120-c-c-rp-w64-h64-mo-br100", `<mark class="ti-highlight">Love the services offered by Treble Health!</mark> It's helping me so much to quickly jump into the issue and doing it remotely. Thank you guys!`],
    };
    let arrGoogleReviews3 = {
      "Naf Steinmetz": ["https://lh3.googleusercontent.com/a-/AFdZucrTUcw2LtbZJP4NDf2gx89PuqC3Hgv4wZ1OsQ4BHw=s120-c-c-rp-w64-h64-mo-ba2-br100", `These are some studious, <mark class="ti-highlight">extremely well-informed professionals</mark>. That matters a lot.`],
      "Robert Berry": ["https://lh3.googleusercontent.com/a-/AFdZucqA4HdVs7owPyGh7_YKmx9aOFmYIi9oqDHgNDmYYQ=s120-c-c-rp-w64-h64-mo-ba2-br100", `<mark class="ti-highlight">The best.</mark><br><br>If you're struggling with Tinnitus stop what you are doing and give them a call.<br><br>Treble Health can help.<br><br>I am deeply appreciative for their care and efforts as without a doubt it had a huge positive impact on my life.  Thank you Dr. May.`],
    };
    let arrGoogleReviews4 = {
      "Preston D": ["https://lh3.googleusercontent.com/a/AItbvmk-58HU2kUx7f2PsN7-yRcyI0i3y0ELTlmrp7bZyg=s120-c-c-rp-w64-h64-mo-br100", 'From my experience, <mark class="ti-highlight">they are very knowledgeable</mark>. I feel better about the fact that they use proven science and methods that have been successful using techniques that were pioneered by a respected scientist.'],
      "Mark Button": [
        "https://lh3.googleusercontent.com/a-/AFdZucrdT3FgeRWu-e-Q4-zghzQ2Gv4-8DLsW75Vh0ODjQ=s120-c-c-rp-w64-h64-mo-br100",
        `Treble Health has <mark class="ti-highlight">helped me enormously in a fairly short amount of time when other doctors couldn’t</mark>. My audiologist (Dr May) has 18 years of experience in dealing with tinnitus and has suffered with and habituated to tinnitus herself.<br><br>My story…<br>I lived and dealt with tinnitus on my own for 8. years until one week when it really spiked. I couldn’t sleep, couldn’t focus and I became extremely anxious about my condition. I had very loud ringing 24/7 and was wondering if I was going to be able to live with it.  I saw my GP who referred me to an audiologist who basically I said that this is the way it’s going to be for you, and then wanted to sell me a generic hearing aid.<br><br>I did my own research into the latest and most effective tinnitus treatments, and into who could provide them. Two months later… my anxiety is nearly gone and I am sleeping well. At the moment I can go hours without noticing my tinnitus and I am hopeful that will even improve to most of my day.<br><br>Treble Health provided real solutions and gave me hope.  They deserve 10 STARS!`,
      ],
    };

    document.head.insertAdjacentHTML("beforeend", newStyle);
    renderNewElem();
    slickSliderInit();
    onClickVideoSlider();
    tooltipInit();
    stickyHeaderInit();
    accordionInit();
    onCircularInit();
    onClickReviewsGoogle();
    onClickBtnGrabYourFREE();
    onClickTrustScoreWrapp();

    function renderNewElem() {
      // newHtml
      if (document.querySelector("#lp-pom-root") && !document.querySelector(".new_body")) {
        document.querySelector("#lp-pom-root").insertAdjacentHTML("beforebegin", newHtml);
      }
      //Verified Reviews on Google items
      if (document.querySelector(".verified_reviews_on_google_wrapp") && document.querySelector(".verified_reviews_on_google_wrapp .ti-reviews-container-wrapper .ti-column.firts_var").children.length !== arrGoogleReviews1.length) {
        for (let key in arrGoogleReviews1) {
          document.querySelector(".verified_reviews_on_google_wrapp .ti-reviews-container-wrapper .ti-column.firts_var").insertAdjacentHTML("beforeend", setGoogleReviews(key, arrGoogleReviews1[key][0], arrGoogleReviews1[key][1]));
        }
      }
      if (document.querySelector(".verified_reviews_on_google_wrapp") && document.querySelector(".verified_reviews_on_google_wrapp .ti-reviews-container-wrapper .ti-column.second_var").children.length !== arrGoogleReviews2.length) {
        for (let key in arrGoogleReviews2) {
          document.querySelector(".verified_reviews_on_google_wrapp .ti-reviews-container-wrapper .ti-column.second_var").insertAdjacentHTML("beforeend", setGoogleReviews(key, arrGoogleReviews2[key][0], arrGoogleReviews2[key][1]));
        }
      }
      if (document.querySelector(".verified_reviews_on_google_wrapp") && document.querySelector(".verified_reviews_on_google_wrapp .ti-reviews-container-wrapper .ti-column.third_var").children.length !== arrGoogleReviews4.length) {
        for (let key in arrGoogleReviews4) {
          document.querySelector(".verified_reviews_on_google_wrapp .ti-reviews-container-wrapper .ti-column.third_var").insertAdjacentHTML("beforeend", setGoogleReviews(key, arrGoogleReviews4[key][0], arrGoogleReviews4[key][1]));
        }
      }
      if (document.querySelector(".verified_reviews_on_google_wrapp") && document.querySelector(".verified_reviews_on_google_wrapp .ti-reviews-container-wrapper .ti-column.fourth_var").children.length !== arrGoogleReviews3.length) {
        for (let key in arrGoogleReviews3) {
          document.querySelector(".verified_reviews_on_google_wrapp .ti-reviews-container-wrapper .ti-column.fourth_var").insertAdjacentHTML("beforeend", setGoogleReviews(key, arrGoogleReviews3[key][0], arrGoogleReviews3[key][1]));
        }
      }
      // questions_accordion
      if (document.querySelector(".questions_accordion") && document.querySelector(".questions_accordion").children.length !== arrQuestions.length) {
        for (let key in arrQuestions) {
          document.querySelector(".questions_accordion").insertAdjacentHTML("beforeend", setAccordionItem(key, arrQuestions[key][0], arrQuestions[key][1]));
        }
      }
    }

    function slickSliderInit() {
      let slickInterval = setInterval(() => {
        if (typeof jQuery("#ourPatientsLoveTrebleHealthBlock .video_list").slick === "function" && document.querySelector("#ourPatientsLoveTrebleHealthBlock .video_list")) {
          clearInterval(slickInterval);

          //  slider
          let slider = jQuery("#ourPatientsLoveTrebleHealthBlock .video_list").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            infinite: false,
            prevArrow: `
             <div class="prev_btn"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <g clip-path="url(#clip0_301_6003)">
    <path d="M24 47C36.7025 47 47 36.7025 47 24C47 11.2975 36.7025 1 24 1C11.2975 1 1 11.2975 1 24C1 36.7025 11.2975 47 24 47Z" stroke="#2E168D"/>
    <path d="M21.0178 24L27.6339 17.951C28.122 17.5047 28.122 16.781 27.6339 16.3347C27.1457 15.8884 26.3543 15.8884 25.8661 16.3347L18.3661 23.1919C17.878 23.6382 17.878 24.3618 18.3661 24.8081L25.8661 31.6653C26.3543 32.1116 27.1457 32.1116 27.6339 31.6653C28.122 31.2189 28.122 30.4953 27.6339 30.049L21.0178 24Z" fill="#2E168D"/>
  </g>
  <defs>
    <clipPath id="clip0_301_6003">
      <rect width="48" height="48" fill="white"/>
    </clipPath>
  </defs>
</svg></div>`,
            nextArrow: `
              <div class="next_btn"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <g clip-path="url(#clip0_301_6013)">
    <path d="M24 1C11.2975 1 1 11.2975 1 24C1 36.7025 11.2975 47 24 47C36.7025 47 47 36.7025 47 24C47 11.2975 36.7025 1 24 1Z" stroke="#2E168D"/>
    <path d="M26.9822 24L20.3661 30.049C19.878 30.4953 19.878 31.219 20.3661 31.6653C20.8543 32.1116 21.6457 32.1116 22.1339 31.6653L29.6339 24.8081C30.122 24.3618 30.122 23.6382 29.6339 23.1919L22.1339 16.3347C21.6457 15.8884 20.8543 15.8884 20.3661 16.3347C19.878 16.7811 19.878 17.5047 20.3661 17.951L26.9822 24Z" fill="#2E168D"/>
  </g>
  <defs>
    <clipPath id="clip0_301_6013">
      <rect width="48" height="48" fill="white" transform="matrix(-1 0 0 -1 48 48)"/>
    </clipPath>
  </defs>
</svg></div>`,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  infinite: false,
                  arrows: false,
                },
              },
            ],
          });
          slider.on("swipe", function () {});
        }
      }, 100);
    }

    function onClickVideoSlider() {
      if (document.querySelectorAll(".video_link_wrapp")) {
        document.querySelectorAll(".video_link_wrapp").forEach((video) => {
          video.addEventListener("click", (e) => {
            video.querySelector("iframe").src += "&autoplay=1";
            if (!e.currentTarget.classList.contains("is_clicked")) {
              e.currentTarget.classList.add("is_clicked");
            }
          });
        });
      }
    }

    function tooltipInit() {
      let tippyRunYourHosts = setInterval(() => {
        if (typeof tippy === "function" && document.querySelector("#yourHostsBlock [data-tooltip]")) {
          clearInterval(tippyRunYourHosts);
          document.querySelectorAll("#yourHostsBlock [data-title]").forEach((el) => {
            tippy(el, {
              content: el.getAttribute("data-title"),
              // trigger: 'click',
              placement: "top-end",
              appendTo: function () {
                return el.closest(".host_name");
              },
              onTrigger(inst, e) {
                e.stopPropagation();
                e.preventDefault();
              },
              onShown(e) {},
            });
          });
        }
      }, 500);
    }

    function stickyHeaderInit() {
      if (document.querySelector(".sticky_header")) {
        const element = document.querySelector(".sticky_header");
        const elemClose = document.querySelector("#heroBlock");

        function visible(target) {
          if (target.getBoundingClientRect().bottom < 0) {
            element.classList.add("is_fixed");
            element.style.top = "-1px";
          } else {
            if (element.classList.contains("is_fixed")) {
              element.classList.remove("is_fixed");
              element.style.top = "-1px";
            }
          }
        }
        window.addEventListener("scroll", function () {
          visible(elemClose);
        });
        visible(elemClose);
      }
    }

    function accordionInit() {
      let lookForJquery = setInterval(() => {
        if (typeof $ === "function") {
          clearInterval(lookForJquery);
          $(".questions_accordion_link").click(function (e) {
            $(this).toggleClass("active");
            $(this).closest("li").toggleClass("active");
            $(this).next(".questions_accordion_lists").slideToggle();
            if ($(".questions_accordion_link").not(this)) {
              $(".questions_accordion_link").not(this).next(".questions_accordion_lists").css("display", "none");
              $(".questions_accordion_link").not(this).removeClass("active");
              $(".questions_accordion_link").not(this).closest("li").removeClass("active");
            }

            if (e.currentTarget.classList.contains("active")) {
              // pushDataLayer('Open block', `${e.currentTarget.querySelector('p').textContent}`);
            } else {
              // pushDataLayer('Close block', `${e.currentTarget.querySelector('p').textContent}`);
            }

            // const headerOffset = 100;
            // const elementPosition = this.getBoundingClientRect().top;
            // const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            // window.scrollTo({
            //   top: offsetPosition,
            //   behavior: 'smooth',
            // });
          });
        }
      }, 100);
    }

    function setAccordionItem(count, title, text) {
      return `
<li class="questions_accordion_block" data-visability="${count}">
  <div class="questions_accordion_link">
    <span class="accordion_icon_wrapp">
      <span class="accordion_icon_closed"
        ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
          <g id="icon_plus" data-name="icon plus" transform="translate(-1210 -3068)">
            <g id="Ellipse_13" data-name="Ellipse 13" transform="translate(1210 3068)" fill="#f8fbf9" stroke="#4521d9" stroke-width="2">
              <circle cx="15" cy="15" r="15" stroke="none"></circle>
              <circle cx="15" cy="15" r="14" fill="none"></circle>
            </g>
            <rect id="Rectangle_2395" data-name="Rectangle 2395" width="2" height="12" transform="translate(1224 3077)" fill="#4521d9"></rect>
            <rect id="Rectangle_2396" data-name="Rectangle 2396" width="2" height="12" transform="translate(1231 3082) rotate(90)" fill="#4521d9"></rect>
          </g></svg
      ></span>
      <span class="accordion_icon_opened"
        ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
          <g id="icon_minus" data-name="icon minus" transform="translate(-1210 -3068)">
            <g id="Ellipse_13" data-name="Ellipse 13" transform="translate(1210 3068)" fill="#f8fbf9" stroke="#4521d9" stroke-width="2">
              <circle cx="15" cy="15" r="15" stroke="none"></circle>
              <circle cx="15" cy="15" r="14" fill="none"></circle>
            </g>
            <rect id="Rectangle_2395" data-name="Rectangle 2395" width="2" height="12" transform="translate(1231 3082) rotate(90)" fill="#6ed097"></rect>
            <rect id="Rectangle_2396" data-name="Rectangle 2396" width="2" height="12" transform="translate(1231 3082) rotate(90)" fill="#4521d9"></rect>
          </g></svg
      ></span>
    </span>
    <p>${title}</p>
  </div>
  <div class="questions_accordion_lists" data-visability-open="${count}">
    <div>${text}</div>
  </div>
</li>
        `;
    }

    function setGoogleReviews(name, img, text) {
      return `
        <div class="ti-review-item source-Google">
          <div class="ti-inner">
            <div class="ti-review-header">
              <div class="ti-profile-img"><img src="${img}" alt="${name}" /></div>
              <div class="ti-profile-details">
                <div class="ti-name">${name}</div>
              </div>
            </div>
            <span class="ti-stars"><span class="ti-star f"></span><span class="ti-star f"></span><span class="ti-star f"></span><span class="ti-star f"></span><span class="ti-star f"></span></span>
            <div class="ti-review-content">
            <div class="ti-inner">${text}</div>
              <span class="ti-read-more"><span class="ti-read-more-active">Read more</span></span>
            </div>
          </div>
        </div>
        `;
    }

    function onCircularInit() {
      let s = setInterval(() => {
        if (typeof jQuery === "function") {
          clearInterval(s);
          const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
            const target = document.querySelector(qSelector);
            let startTimestamp = null;
            const step = (timestamp) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              target.innerText = Math.floor(progress * (end - start) + start);
              if (progress < 1) {
                window.requestAnimationFrame(step);
              }
            };
            window.requestAnimationFrame(step);
          };
          let counter1 = 0;
          let counter2 = 0;
          let counter3 = 0;

          jQuery(document).scroll(function () {
            if (jQuery(".animation-none1").hasClass("animated")) {
              counter1 += 1;
            } else {
            }
            if (counter1 == 1) {
              circle1();
              counterAnim(".count-number1", 0, 85, 1800);
            }

            if (jQuery(".animation-none2").hasClass("animated")) {
              counter2 += 1;
            } else {
            }
            if (counter2 == 1) {
              circle2();
              counterAnim(".count-number2", 0, 75, 1350);
            }

            if (jQuery(".animation-none3").hasClass("animated")) {
              counter3 += 1;
            } else {
            }
            if (counter3 == 1) {
              circle3();
              counterAnim(".count-number3", 0, 98, 2000);
            }
          });

          function circle1() {
            var circle1 = document.getElementById("circle1");
            var interval1 = 18;
            var angle1 = 0;
            var angle_increment1 = 6;

            window.timer1 = window.setInterval(
              function () {
                circle1.setAttribute("stroke-dasharray", angle1 + ", 20000");

                if (angle1 >= 550) {
                  window.clearInterval(window.timer1);
                }
                angle1 += angle_increment1;
              }.bind(this),
              interval1
            );
          }
          function circle2() {
            var circle2 = document.getElementById("circle2");
            var interval2 = 15;
            var angle2 = 0;
            var angle_increment2 = 6;

            window.timer2 = window.setInterval(
              function () {
                circle2.setAttribute("stroke-dasharray", angle2 + ", 20000");

                if (angle2 >= 490) {
                  window.clearInterval(window.timer2);
                }
                angle2 += angle_increment2;
              }.bind(this),
              interval2
            );
          }
          function circle3() {
            var circle3 = document.getElementById("circle3");
            var interval3 = 18;
            var angle3 = 0;
            var angle_increment3 = 6;

            window.timer3 = window.setInterval(
              function () {
                circle3.setAttribute("stroke-dasharray", angle3 + ", 20000");

                if (angle3 >= 630) {
                  window.clearInterval(window.timer3);
                }
                angle3 += angle_increment3;
              }.bind(this),
              interval3
            );
          }
        }
      }, 10);
    }

    function onClickReviewsGoogle() {
      let lookForJqueryReviews = setInterval(() => {
        if (document.querySelector(".ti-read-more")) {
          clearInterval(lookForJqueryReviews);
          document.querySelectorAll(".ti-read-more-active").forEach((el) => {
            el.addEventListener("click", (e) => {
              e.currentTarget.classList.toggle("active");
              e.currentTarget.closest(".ti-read-more").previousElementSibling.classList.toggle("active");
              if (e.currentTarget.classList.contains("active")) {
                e.currentTarget.textContent = "Hide";
              } else {
                e.currentTarget.scrollIntoView({ block: "center", behavior: "smooth" });
                e.currentTarget.textContent = "Read more";
              }
            });
          });
        }
      }, 100);
    }

    function onClickBtnGrabYourFREE() {
      if (document.querySelector(".new_body")) {
        document.querySelectorAll(".grab_your_free_btn").forEach((el) => {
          el.addEventListener("click", () => {
            document.querySelector(".calendar_header").scrollIntoView({ block: "start", behavior: "smooth" });
          });
        });
      }
    }

    function onClickTrustScoreWrapp() {
      if (document.querySelector(".new_body")) {
        document.querySelectorAll(".trust_score_wrapp").forEach((el) => {
          el.addEventListener("click", () => {
            const headerOffset = 50;
            const elementPosition = document.querySelector("#verifiedReviewsOnGoogleBlock").getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          });
        });
      }
    }
  }
}, 100);
