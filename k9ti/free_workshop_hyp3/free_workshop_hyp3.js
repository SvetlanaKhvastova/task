if (window.location.pathname === "/free-workshop/") {
  let startFunkDesk = setInterval(() => {
    if (document.querySelector(".entry-content")) {
      clearInterval(startFunkDesk)

      function pushDataLayer(actionDataLayer, labelDataLayer) {
        window.dataLayer = window.dataLayer || []
        if (labelDataLayer) {
          console.log(actionDataLayer + " : " + labelDataLayer)
          dataLayer.push({
            event: "event-to-ga",
            eventCategory: `Exp: Improved registration flow`,
            eventAction: `${actionDataLayer}`,
            eventLabel: `${labelDataLayer}`,
          })
        } else {
          console.log(actionDataLayer)
          dataLayer.push({
            event: "event-to-ga",
            eventCategory: `Exp: Improved registration flow`,
            eventAction: `${actionDataLayer}`,
          })
        }
      }

      let popupStyle = /*html */ `
    <style>
.container_var {
  width: 95%;
  max-width: 1276px;
  margin: 0 auto;
}

.img_wrap {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.img_wrap img {
  width: 100%;
  height: 100%;
}

.btn_continue {
  background: #193973;
  border-radius: 10px;
  margin: 0 0 0 auto;
  max-width: 304px;
  width: 100%;
  height: 45px;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #ffffff !important;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: none;
  text-transform: none;
  transition: all 250ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

/*join_text */
.join_text {
  background: #193973;
  padding: 20px 10px;
  text-align: center;
}

.join_text p {
  margin: 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: #ffffff !important;
}

#contact-submit:hover,
.btn_continue:hover,
.button_input_name:hover {
  box-shadow: 4px -4px 10px #272020;
}

.enroll_box .info_box > div.img_wrap {
  max-width: 413px;
}
/*start_step */
.start_step{
  display: none;
}
.start_step h2{
    max-width: 844px;
    font-weight: 800 !important;
    font-size: 32px !important;
    line-height: 40px !important;
    color: #193973 !important;
    margin: 0 auto 24px !important;
}
.start_step h2 span{
    color: #6FB3FA !important;
}
.start_step > p{
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #808080 !important;
    margin: 0 auto 62px;
    text-align: center;
}
.start_step > p span{
    color: #193973 !important;
}
.start_step ul{
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 844px;
    margin: 0 auto;
    padding: 0 0 20px;
}
.start_step ul li{
    width: 49%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    cursor: pointer;
    transition: all 350ms ease-in-out;
}
.start_step ul li:hover{
  box-shadow: 10px 4px 15px 1px rgb(39 32 32 / 50%);
}
.start_step ul li + li{
    margin-left: 20px;
}
.start_step ul li > div:nth-child(2){
    background: #193973;
    padding: 17px 5px;
    border-radius: 0px 0px 10px 10px;
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
}
.start_step ul li p{
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    letter-spacing: -0.01em;
    color: #FFFFFF !important;
    margin: 0;
}
/*popup_first */
.popup_new {
  display: none;
  gap: 20px;
  justify-content: space-between;
  max-width: 1358px;
  width: 90%;
  margin: 0 auto;
}

.popup_new .img_wrap {
  width: 40%;
}

.popup_new .img_wrap img {
  border-radius: 10px;
}
.popup_new .img_wrap img:nth-child(1){
  max-width: 445px;
}

.popup_new > div:last-child {
  width: 70%;
}

.popup_new > div:last-child .popup_first {
  display: none;
}

.popup_new > div:last-child .popup_first > h2 {
  font-weight: 700;
  font-size: 22px;
  line-height: 182%;
  text-align: center;
  color: #734f22;
  margin: 10px 0 12px;
}

.popup_new > div:last-child .popup_first > p {
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  color: #808080 !important;
  margin: 0 0 30px;
}

.popup_new > div:last-child .progress_bar > ul {
  display: flex;
  background: #d1deee;
  width: 100%;
  height: 20px;
  justify-content: space-between;
  padding: 0;
  margin: 0 0 10px;
  border-radius: 10px;
}

.popup_new > div:last-child .progress_bar > ul li {
  width: 33.2%;
}

.popup_new > div:last-child .progress_bar > ul li.active_step {
  background: #193973;
}

.popup_new > div:last-child .progress_bar > ul li:nth-child(1) {
  border-radius: 10px 0px 0px 10px;
}

.popup_new > div:last-child .progress_bar > ul li:nth-child(2) {
  border-radius: 0px;
}

.popup_new > div:last-child .progress_bar > ul li:nth-child(3) {
  border-radius: 0px 10px 10px 0px;
}

.popup_new > div:last-child .progress_bar > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.popup_new > div:last-child .progress_bar > div p {
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: #808080 !important;
  margin: 0;
  display: flex;
  align-items: center;
}

.popup_new > div:last-child .progress_bar > div p.active_btn_second {
  display: none;
}

.popup_new > div:last-child .progress_bar > div p:nth-child(2),
.popup_new > div:last-child .progress_bar > div p:nth-child(1) {
  cursor: pointer;
}

.popup_new > div:last-child .progress_bar > div p:nth-child(1) span {
  margin-left: 10px;
}

.popup_new > div:last-child .progress_bar > div p:nth-child(2) span {
  margin-left: 10px;
}

.first_block_checkbox {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 15px;
  margin: 0 auto 50px;
  max-width: 628px;
}

.first_block_checkbox input.custom_checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.first_block_checkbox label {
  width: 48%;
  border: 1px solid #e8f1f9;
  border-radius: 10px;
  padding: 10px 22px;
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #193973;
  user-select: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-align: left;
}

.custom_checkbox + label::before {
  content: "";
  display: inline-block;
  width: 12px;
  height: 12px;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #808080;
  border-radius: 2px;
  margin-right: 15px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}

.custom_checkbox:checked + label::before {
  background-image: url(https://conversionratestore.github.io/projects/knineti/img/dark_blue_check_mark.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  border-color: #193973;
}


/*popup_second */
.popup_new > div:last-child .popup_second {
  display: none;
}

.popup_new > div:last-child .popup_second > h2{
  font-weight: 700;
  font-size: 24px;
  line-height: 125%;
  text-align: center;
  color: #734f22;
  margin: 40px 0 10px;
}

.last_step_title{
  display: none;
    margin: 40px auto 20px;
    max-width: 618px;
}
.last_step_title h2{
  font-weight: 700 !important;
    font-size: 26px !important;
    line-height: 30px !important;
    color: #734F22 !important;
    margin-bottom: 10px !important;
}
.last_step_title p{
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #734F22 !important;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
}

.popup_new > div:last-child .popup_first.active_popup,
.popup_new > div:last-child .popup_second.active_popup,
.start_step.active_popup{
  display: block;
}

.popup_new.active_popup{
  display: flex;
}

.dog_second,
.dog_third {
  display: none;
}

*choosen */
.popup_new .chosen-container .chosen-drop {
  max-height: 240px;
}

.chosen-container .chosen-results li {
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #193973 !important;
}

.chosen-container .chosen-results li em {
  font-weight: 700;
  text-decoration: unset;
}

/*chosen_select */
.chosen_select {
  position: relative;
  max-width: 304px;
  margin: 0 auto 16px;
}

.chosen_select label {
  border: 1px solid #e8f1f9;
  border-radius: 10px;
  outline: unset;
  display: flex;
  width: 100%;
  height: 44px;
  max-width: 520px;
  margin: 0 0 8px;
  align-items: center;
  padding: 5px 18px;
   transition: all 250ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

.chosen_select label.on_focus{
    border: 1px solid #6FB3FA;
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%); 
}

.chosen_select label:hover{
  border: 1px solid #6FB3FA;
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%); 
}


.chosen_select p.hover_text{
  display: flex;
  align-items: center;
  position: absolute;
    bottom: -30px;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    color: #808080 !important;
    left: 6px;
    margin: 0;
     transition: all 250ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

.chosen_select p.hover_text svg{
  margin-right: 8px;
}

.chosen_select label svg {
  max-width: 24px;
  height: 24px;
  width: 100%;
}

.chosen_select label svg#removeTextInput {
  cursor: pointer;
  display: none;
}

.chosen_select label > input {
  width: 100% !important;
  outline: unset;
  border-radius: 10px;
  border: none;
  padding: 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: #193973 !important;
  height: 100%;
  margin: 0 0 0 8px !important;
}

.chosen_select label > input::placeholder {
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: #a9b4b8;
}

.chosen_select label > input:focus {
  box-shadow: unset;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: #000000;
}

.chosen_select div {
  border: 1px solid #e8f1f9;
  border-radius: 10px;
  padding: 10px 19px 0px 16px;
  max-width: 520px;
}

.chosen_select div ul {
  overflow-x: auto;
  max-height: 240px;
}

.chosen_select ul::-webkit-scrollbar {
  width: 2px;
}

.chosen_select ul::-webkit-scrollbar-thumb {
  background: #6f767b;
  border-radius: 10px;
}

.chosen_select ul li {
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #193973 !important;
  padding: 6px 10px;
  text-align: left;
  cursor: pointer;
}

.chosen_select ul li:hover{  
  background: #E8F1F9;
}

/* */

#firstModal {
  background-color: #ffffff;
}

#firstModal .for-spacing,
#firstModal .modal-header.modal-header-style.modal-of-header.style-border,
#firstModal .row-md-12.style-of-row-free-workshop > div:first-child {
  display: none !important;
}

#firstModal .border-of-modal .modal-header {
  border: unset !important;
}

#firstModal #subs-email2,
#firstModal #subs-mobile2 {
  display: none;
}

#firstModal #firstModal .form-group {
  background: white;
  border-radius: 10px;
}

#firstModal .border-of-modal .vis-ver-2_2.modal-header.modal-header-style.modal-of-header.style-border.modal-header1 {
  display: none;
}

#firstModal .popup_third {
  display: none;
}

#firstModal .btn_wrapp {
  display: none;
  max-width: 844px;
  width: 100%;
  margin: 20px auto;
  position: relative;
}

#firstModal .btn_wrapp > p {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #808080 !important;
  margin: 0;
  cursor: pointer;
}

.btn_wrapp > p span {
  margin-left: 8px;
}

#firstModal .btn_wrapp button.close {
  top: 0;
  right: -5px;
  color: #808080;
  display: none !important;
}

#firstModal .btn_wrapp > p.active_btn_fifth {
  opacity: 0;
  pointer-events: none;
}

#firstModal .popup_third {
  display: block;
}

#firstModal .border-of-modal {
  margin: 0;
}

#firstModal .modal-dialog {
  width: 95% !important;
  margin: 10px auto;
}

#firstModal .modal-dialog > .img_wrap {
  margin: 0 auto 10px;
  max-width: 1358px;
  width: 90%;
}

#firstModal .modal-dialog > .img_wrap img {
  max-width: 200px;
}

#firstModal .modal-content {
  background: unset !important;
  border-radius: 10px;
  background-color: unset !important;
  box-shadow: unset !important;
  border: unset !important;
  max-height: unset !important;
  max-width: unset !important;
}

#firstModal .modal-body {
  display: none;
  background: unset !important;
  padding: 30px;
  max-width: 559px;
  width: 100%;
  margin: 0 auto;
}

#firstModal .modal-body.is_active{
  border: 1px solid #E8F1F9;
  border-radius: 10px;
}

.header_popup {
  background: #193973;
  border-radius: 0px;
  padding: 22px 0;
  text-align: center;
  position: relative;
}

.header_popup > p {
  margin: 0;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  color: #ffffff !important;
}

.body_popup {
  background: #ffffff;
}

.new_block_breed{
  margin-top: 24px;
}

.body_popup > h2,
.new_block_breed > h2 {
  font-weight: 600 !important;
  font-size: 18px !important;
  line-height: 30px !important;
  text-align: center;
  color: #193973 !important;
  margin-bottom: 10px !important;
}

.button_input_name,
#firstModal #contact-submit {
  background: #193973;
  border-radius: 10px;
  margin: 0 auto;
  max-width: 304px;
  width: 100%;
  height: 45px;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #ffffff !important;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: none;
  text-transform: none;
  transition: all 250ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

#firstModal #contact-submit {
  margin: 0 !important;
}

.button_input_name {
  margin: 24px auto 0;
}

.button_input_name:focus,
#contact-submit:focus,
.btn_continue:focus {
  box-shadow: 2px 2px 6px 6px rgba(0, 0, 0, 0.2);
}

#firstModal #finalForm .style-text,
#firstModal form .form-group > div:last-child,
#firstModal form .form-group img,
#firstModal .fst_icon.fa-user:before,
#firstModal .fa-envelope:before,
#firstModal #subs-email,
#firstModal #subs-mobile,
#firstModal #contact-submit,
.benefits,
.popup_adress,
.privacy_policy_wrap {
  display: none;
}

.privacy_policy_wrap{
  max-width: 400px;
  margin: 20px auto 0;
  text-align: center;
}
.privacy_policy_wrap p{
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #808080 !important;
  margin: 0 !important;
}
.privacy_policy_wrap p a{
  text-decoration: underline;
  color: inherit;
}

#firstModal #subs-email,
#firstModal #subs-mobile,
#firstModal #contact-submit,
#firstModal #subs-email2,
#firstModal #subs-mobile2 {
  max-width: 331px;
  width: 100% !important;
  margin: 0 auto 16px !important;
}

#firstModal .fa {
  display: none !important;
}

#firstModal form span.top-levels {
  right: 139px !important;
}
#firstModal #finalForm {
  display: block;
  background: #ffffff;
  border-radius: 10px;
}

#firstModal .form-group {
  margin: 0;
  padding: 0 0 24px;
}

#firstModal #finalForm .popup_third .body_popup > h2 {
  margin: 0 auto !important;
}

#firstModal #finalForm .popup_third .body_popup {
  padding: 28px 164px 0;
  margin-bottom: 56px;
}

#firstModal .form-control,
.new_block_breed input {
  width: 100% !important;
  margin: 0 auto 16px !important;
  padding: 10px 18px;
  border: 1px solid #dee8f1;
  box-sizing: border-box;
  border-radius: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  height: 40px;
  text-align: left;
  color: #a0a1a8 !important;
  max-width: 304px;
  box-shadow: none;
}

.benefits ul {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 15px auto 15px 195px;
  gap: 10px;
  max-width: 415px;
}

.benefits ul li {
  display: flex;
  align-items: center;
}

.benefits ul li > p {
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: #808080 !important;
  margin: 0 0 0 16px;
  text-align: left;
}

.security_box {
  display: flex;
  align-items: flex-start;
  margin: 0 auto;
  max-width: 440px;
  justify-content: flex-start;
}

.security_box > svg {
  margin-top: 5px;
}

.security_box > p {
  font-weight: 400;
  font-size: 12px;
  line-height: 167%;
  color: #9da1aa !important;
  text-align: left;
  margin: 0 0 0 14px;
}

#firstModal #subs-name,
#firstModal #dog-name,
#firstModal #subs-name2,
#firstModal #dog-name2 {
  display: flex;
}

.popup_adress .header_popup {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
}

.popup_adress .header_popup > p {
  margin-left: 10px;
}

#firstModal #finalForm .popup_third .popup_adress .body_popup {
  padding: 24px 0 0;
  margin-bottom: 16px;
}

.popup_adress .body_popup > p {
  margin: 0 auto 15px;
  padding: 10px;
  border: 1px solid #6fb3fa;
  box-sizing: border-box;
  border-radius: 10px;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  max-width: 560px;
  color: #808080 !important;
}

#firstModal button.close {
  display: block;
  position: absolute;
  top: 13px;
  right: 18px;
  color: black;
  opacity: 1;
  text-shadow: unset;
}

#firstModal .close:hover,
#firstModal .close:focus {
  color: #a0a1a8;
  opacity: 1;
}

.input_error_text {
  font-size: 10px;
  line-height: 20px;
  color: #f15050;
  margin: -12px auto 10px;
  display: none;
  max-width: 304px;
  text-align: left;
}

.popup_adress .body_popup > h2 {
      margin: 0px auto 20px !important;
    max-width: 508px;
}

#firstModal form .text_for_work_shop {
  font-weight: 400;
  font-size: 12px !important;
  line-height: 20px;
  text-align: center;
  color: #808080 !important;
  margin-bottom: 23px !important;
  display: none;
}


.hide {
	visibility: hidden;
	position: absolute;
}

.show {
	visibility: visible;
}

/*backdrop_popup */
.backdrop_popup{
    position: fixed !important;
    overflow: hidden;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    opacity: 1;
    background: rgb(0 0 0 / 70%);
    transition: all 0.5s ease 0s;
    z-index: 9005;
    display: block;
    max-height: 100%;
}
.backdrop_popup.is_hidden {
  opacity: 0;
  pointer-events: none;
}
.backdrop_popup .container_popup {
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  max-width: 628px;
  height: max-content;
  padding: 32px 13px 24px;
  margin: 60px auto;
  background: #fdfdfd;
  border-radius: 10px;
  transition: all 0.5s ease 0s;
}
.backdrop_popup .container_popup > svg {
  position: absolute;
  top: 24px;
  right: 24px;
  outline: none;
  cursor: pointer;
}
.content_popup div{
  padding: 0 11px;
  overflow-y: scroll;
  height: 530px;
}
.content_popup div::-webkit-scrollbar-thumb {
    background: #6F767B;
    border-radius: 10px;
    border: 2px solid #6F767B;
}
*::-webkit-scrollbar {
  width: 2px;
}
*::-webkit-scrollbar-track {
  background: transparent;
}
.content_popup h2{
  font-weight: 400;
  font-size: 19px;
  line-height: 20px;
  color: #734F22;
  margin: 0 0 24px;
  padding: 0 0 18px;
  border-bottom: 1px solid rgb(119 119 125 / 30%);
}
.content_popup p{
  font-weight: 400;
  font-size: 14px !important;
  line-height: 24px;
  color: #77777D !important;
  margin: 0;
}
.content_popup p + p{
  margin-top: 20px;
}

@media (max-width: 768px) {
  .content_popup div{
    height: 400px;
  }
}

    </style>
    `

      // popup
      let popUpPrivacy = /*html */ `
  <div class="backdrop_popup is_hidden" data-modal>
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

      let popupNew = /*html*/ `
    <div class="popup_new_wrap">
        <div class="start_step active_popup">
            <h2>Learn how to train your dog to become as <span>obedient</span> as a service dog</h2>
            <p>Take a <span>1-minute quiz</span> about your dog <br> and know how to deal with barking, housebreaking, nipping and more.</p>
            <ul>
                <li>
                    <div class="img_wrap">
                        <img src="https://conversionratestore.github.io/projects/knineti/img/puppy_dog.jpg" alt="dog">
                    </div>
                    <div>
                        <p>I have puppy ( up to 1 year ) </p>
                    </div>
                </li>
                <li>
                    <div class="img_wrap">
                        <img src="https://conversionratestore.github.io/projects/knineti/img/adult_dog.jpg" alt="dog">
                    </div>
                    <div>
                        <p>I have adult dog ( 1+ year )</p>
                    </div>
                </li>
            </ul>
        </div>

        <div class="popup_new">
          <div class="img_wrap">
                <img src="https://conversionratestore.github.io/projects/knineti/img/dog_select_problem.jpg" alt="dog" class="dog_first">
                <img src="https://conversionratestore.github.io/projects/knineti/img/dog_breed_block.jpg" alt="dog" class="dog_second">
                <img src="https://conversionratestore.github.io/projects/knineti/img/dog_last_block.jpg" alt="dog" class="dog_third">
            </div>
    
            <div>
                <div class="progress_bar">
                    <ul>
                        <li class="active_step"></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <div>
                       <p class="active_btn_first" class="close" id="closestepthree" data-dismiss="modal" style="display: block;" data-original-title="" title="" tabIndex="0">
                           <img src="https://conversionratestore.github.io/projects/knineti/img/previous_btn.svg" alt="previous button">
                           <span>Back</span>
                       </p>
                        <p class="active_btn_second" tabIndex="0">
                           <img src="https://conversionratestore.github.io/projects/knineti/img/previous_btn.svg" alt="previous button">
                           <span>Back</span>
                       </p>
                       <p><span>1</span>/<span>3</span></p>
                    </div>
                </div>
    
                <div class="popup_first active_popup">
                    <h2>What unwanted behavior do you want to address?</h2>
                    <p>Select any problems you’ve experienced in the last 2 months</p>
                    <div class="first_block_checkbox">
                        <input class="custom_checkbox" id="barking" type="checkbox" name="barking" value="barking">
                        <label for="barking" tabIndex="0">Barking
                        </label>
        
                        <input class="custom_checkbox" id="jumping" type="checkbox" name="jumping" value="jumping">
                        <label for="jumping" tabIndex="0">Jumping
                        </label>
        
                        <input class="custom_checkbox" id="pulling" type="checkbox" name="pulling" value="pulling">
                        <label for="pulling" tabIndex="0">Pulling leash
                        </label>
        
                        <input class="custom_checkbox" id="housebreaking" type="checkbox" name="housebreaking" value="housebreaking">
                        <label for="housebreaking" tabIndex="0">Housebreaking
                        </label>
        
                        <input class="custom_checkbox" id="nipping" type="checkbox" name="nipping" value="nipping">
                        <label for="nipping" tabIndex="0">Nipping or biting
                        </label>
        
                        <input class="custom_checkbox" id="called" type="checkbox" name="called" value="called">
                        <label for="called" tabIndex="0">Not coming when called
                        </label>
        
                        <input class="custom_checkbox" id="listen" type="checkbox" name="listen" value="listen">
                        <label for="listen" tabIndex="0">Doesn't listen</label>
        
                        <input class="custom_checkbox" id="chewing" type="checkbox" name="chewing" value="chewing">
                        <label for="chewing" tabIndex="0">Chewing</label>
        
                        <input class="custom_checkbox" id="excitable" type="checkbox" name="excitable" value="excitable">
                        <label for="excitable" tabIndex="0">Extremely excited</label>
        
                        <input class="custom_checkbox" id="aggression" type="checkbox" name="aggression" value="aggression">
                        <label for="aggression" tabIndex="0">Aggression</label>
        
                        <input class="custom_checkbox" id="anxiety" type="checkbox" name="anxiety" value="anxiety">
                        <label for="anxiety" tabIndex="0">Anxiety</label>
        
                        <input class="custom_checkbox" type="checkbox" id="reacting" name="reacting" value="reacting">
                        <label for="reacting" tabIndex="0">Reacting to other dogs</label>
        
                        <input class="custom_checkbox" type="checkbox" id="other" name="other" value="other">
                        <label for="other" tabIndex="0">Other</label>
                    </div>
                    <div class="btn_continue" tabIndex="0">Continue</div>
                </div>
    
    
                <div class="popup_second">
                    <div class="last_step_title">
                      <h2>Discover how to eliminate <span class="your_dog_name">[dog’s name]</span> behavior problems today!</h2>
                      <p>Get access to FREE online workshop which has helped train 2.7 million dogs.</p>                      
                    </div>
                    <h2>Let's get acquainted!</h2>
                </div>     
            </div>
    </div>
    </div>
   
    `

      let arrayBreedDog = [
        "Yorkshire Terrier",
        "Wolfdog",
        "Wire Fox Terrier",
        "White German Shepherd",
        "Whippet",
        "West Highland White Terrier",
        "Welsh Terrier",
        "Welsh Springer Spaniel",
        "Weimaraner",
        "Vizsla",
        "Tosa Inu",
        "Tibetan Terrier",
        "Tibetan Spaniel",
        "Tasy",
        "Spanish Water Dog",
        "Soft Coated Wheaten Terrier",
        "Smoushond",
        "Smooth Fox Terrier",
        "Skye Terrier",
        "Siberian Husky",
        "Shiloh Shepherd",
        "Shih Tzu",
        "Shiba Inu",
        "Shetland Sheepdog",
        "Scottish Terrier",
        "Schipperke",
        "Samoyed",
        "Saluki",
        "Saint Bernard",
        "Rottweiler",
        "Rhodesian Ridgeback",
        "Thai Ridgeback",
        "Rat Terrier",
        "Pumi",
        "Puli",
        "Pug",
        "Presa Canario",
        "Portuguese Water Dog",
        "Poodle",
        "Toy Poodle",
        "Pomeranian",
        "Pointer",
        "Pudelpointer",
        "Plott Hound",
        "Pit Bull",
        "Pharaoh Hound",
        "Pembroke Welsh Corgi",
        "Pekingese",
        "Patterdale Terrier",
        "Papillon",
        "Otterhound",
        "Old English Sheepdog",
        "Nova Scotia Duck Tolling Retriever",
        "Norwich Terrier",
        "Norwegian Elkhound",
        "Norfolk Terrier",
        "Newfoundland",
        "Munsterlander",
        "Mudi",
        "Mountain Cur",
        "Miniature Schnauzer",
        "Miniature Pinscher",
        "Mastiff",
        "Tibetan Mastiff",
        "Neapolitan Mastiff",
        "Manchester Terrier",
        "Maltese",
        "Malinois",
        "Lowchen",
        "Lhasa Apso",
        "Leonberger",
        "Lapphund",
        "Landseer",
        "Lakeland Terrier",
        "Labrador Retriever",
        "Kuvasz",
        "Komondor",
        "King Shepherd",
        "Kerry Blue Terrier",
        "Keeshond",
        "Jindo",
        "Japanese Spitz",
        "Japanese Chin",
        "Jack Russell Terrier",
        "Parson Russell Terrier",
        "Italian Spinone",
        "Irish Wolfhound",
        "Irish Water Spaniel",
        "Irish Terrier",
        "Irish Setter",
        "Ibizan Hound",
        "Hovawart",
        "Havanese",
        "Greyhound",
        "Italian Greyhound",
        "Greater Swiss Mountain Dog",
        "Great Dane",
        "Gordon Setter",
        "Golden Retriever",
        "Glen of Imaal Terrier",
        "Giant Schnauzer",
        "German Wirehaired Pointer",
        "German Spitz",
        "German Shorthaired Pointer",
        "German Shepherd",
        "German Pinscher",
        "Flat-Coated Retriever",
        "Finnish Spitz",
        "Field Spaniel",
        "Eurasier",
        "Entlebucher",
        "English Toy Spaniel",
        "English Springer Spaniel",
        "English Setter",
        "English Foxhound",
        "English BullDog",
        "Olde English BullDogge",
        "French BullDog",
        "Dutch Shepherd",
        "Drever",
        "Doberman Pinscher",
        "Dingo",
        "Dalmatian",
        "Dachshund",
        "Curly-Coated Retriever",
        "Coton De Tulear",
        "Cocker Spaniel",
        "English Cocker Spaniel",
        "Clumber Spaniel",
        "Chow Chow",
        "Chinese Shar-Pei",
        "Chinese Crested",
        "Chihuahua",
        "Chesapeake Bay Retriever",
        "Cavalier King Charles Spaniel",
        "Caucasian Mountain Dog",
        "Catahoula",
        "Carolina Dog",
        "Cardigan Welsh Corgi",
        "Cane Corso",
        "Canaan Dog",
        "Cairn Terrier",
        "Bull Terrier",
        "Staffordshire Bull Terrier",
        "Bull Mastiff",
        "Brussels Griffon",
        "Brittany Dog",
        "Briquet",
        "Briard",
        "Brandlbracke",
        "Boykin Spaniel",
        "Boxer",
        "Boston Terrier",
        "Borzoi",
        "Border Terrier",
        "Border Collie",
        "Boerboel",
        "Blue Heeler",
        "Bloodhound",
        "Black Russian Terrier",
        "Black and Tan Coonhound",
        "Redbone Coonhound",
        "Biewer",
        "Bichon Frise",
        "Bernese Mountain Dog",
        "Berger Pyrenees",
        "Berger Picard",
        "Bergamasco",
        "Belgian Tervuren",
        "Belgian Sheepdog",
        "Bedlington Terrier",
        "Beauceron",
        "Bearded Collie",
        "Beagle",
        "Basset Hound",
        "Basset Griffon",
        "Basenji",
        "Barbet",
        "Australian Terrier",
        "Australian Shepherd",
        "Australian Kelpie",
        "Australian Cattle Dog",
        "Armant",
        "Argentine Dogo",
        "Anatolian Shepherd",
        "American Staffordshire Terrier",
        "American Pit Bull Terrier",
        "American Hairless Terrier",
        "Mexican Hairless Terrier",
        "American Foxhound",
        "American Eskimo",
        "American BullDog",
        "Alaskan Malamute",
        "Alaskan Klee Kai",
        "Alaskan Husky",
        "Akita",
        "Akbash",
        "Airedale Terrier",
        "Afghan Hound",
        "Affenpinscher",
      ]

      let buttonInputName = /*html*/ `
        <div class="new_block_breed">
          <h2>What breed is your dog?</h2>
          <input type="text" class="" data-html="true" name="breed" id="breedDog" placeholder="Your dog’s breed" tabindex="0">
          <div class="chosen_select">
                  <label>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.04 17.2798C7.58405 17.2798 4.80005 14.4958 4.80005 11.0398C4.80005 7.5838 7.58405 4.7998 11.04 4.7998C14.496 4.7998 17.28 7.5838 17.28 11.0398C17.28 14.4958 14.496 17.2798 11.04 17.2798ZM11.04 5.7598C8.11205 5.7598 5.76005 8.1118 5.76005 11.0398C5.76005 13.9678 8.11205 16.3198 11.04 16.3198C13.968 16.3198 16.32 13.9678 16.32 11.0398C16.32 8.1118 13.968 5.7598 11.04 5.7598Z" fill="#A9B4B8"/>
                    <path d="M15.6873 15.0078L19.9977 19.3182L19.3189 19.9969L15.0085 15.6865L15.6873 15.0078Z" fill="#A9B4B8"/>
                    </svg>
                    <input type="text" placeholder='Enter your dog’s breed'>

                    <svg id="removeTextInput" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.0604 11.9996L17.7802 7.27982C17.9168 7.13837 17.9924 6.94892 17.9907 6.75227C17.989 6.55562 17.9101 6.36751 17.7711 6.22846C17.632 6.0894 17.4439 6.01053 17.2472 6.00882C17.0506 6.00711 16.8611 6.0827 16.7197 6.21932L11.9999 10.9391L7.28019 6.21932C7.13874 6.0827 6.94929 6.00711 6.75264 6.00882C6.55599 6.01053 6.36788 6.0894 6.22882 6.22846C6.08977 6.36751 6.01089 6.55562 6.00918 6.75227C6.00747 6.94892 6.08307 7.13837 6.21969 7.27982L10.9394 11.9996L6.21969 16.7193C6.14806 16.7885 6.09092 16.8713 6.05161 16.9628C6.01231 17.0543 5.99162 17.1527 5.99075 17.2523C5.98989 17.3519 6.00886 17.4506 6.04657 17.5428C6.08428 17.635 6.13997 17.7187 6.21039 17.7891C6.28081 17.8595 6.36455 17.9152 6.45672 17.9529C6.5489 17.9907 6.64765 18.0096 6.74724 18.0088C6.84682 18.0079 6.94524 17.9872 7.03674 17.9479C7.12825 17.9086 7.211 17.8515 7.28019 17.7798L11.9999 13.0601L16.7197 17.7798C16.8611 17.9164 17.0506 17.992 17.2472 17.9903C17.4439 17.9886 17.632 17.9097 17.7711 17.7707C17.9101 17.6316 17.989 17.4435 17.9907 17.2469C17.9924 17.0502 17.9168 16.8608 17.7802 16.7193L13.0604 11.9996Z" fill="#808080"/>
                    </svg>
                  </label>
                  <div>
                    <ul></ul>
                  </div>
                </div>
        </div>
        <div class="button_input_name" tabindex="0">Continue</div>
        <div class="privacy_policy_wrap">
          <p>Your email address and mobile number won't be shared with anyone. Please review our <a href="#" class="privacy_policy">Privacy policy</a> for more information.</p>
        </div>
        <div class="benefits">
            <ul>
                <li>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.25 24.5C5.25 24.5 3.5 24.5 3.5 22.75C3.5 21 5.25 15.75 14 15.75C22.75 15.75 24.5 21 24.5 22.75C24.5 24.5 22.75 24.5 22.75 24.5H5.25ZM14 14C15.3924 14 16.7277 13.4469 17.7123 12.4623C18.6969 11.4777 19.25 10.1424 19.25 8.75C19.25 7.35761 18.6969 6.02226 17.7123 5.03769C16.7277 4.05312 15.3924 3.5 14 3.5C12.6076 3.5 11.2723 4.05312 10.2877 5.03769C9.30312 6.02226 8.75 7.35761 8.75 8.75C8.75 10.1424 9.30312 11.4777 10.2877 12.4623C11.2723 13.4469 12.6076 14 14 14Z" fill="#699CD0"/>
                    </svg>
                    <p>This workshop has helped train 2.7 million dogs</p>
                </li>
                <li>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.9997 2.3335C7.56667 2.3335 2.33301 7.56716 2.33301 14.0002C2.33301 20.4332 7.56667 25.6668 13.9997 25.6668C20.4327 25.6668 25.6663 20.4332 25.6663 14.0002C25.6663 7.56716 20.4327 2.3335 13.9997 2.3335ZM13.9997 23.3335C8.85351 23.3335 4.66634 19.1463 4.66634 14.0002C4.66634 8.854 8.85351 4.66683 13.9997 4.66683C19.1458 4.66683 23.333 8.854 23.333 14.0002C23.333 19.1463 19.1458 23.3335 13.9997 23.3335Z" fill="#699CD0"/>
                        <path d="M15.1663 8.1665H12.833V14.4828L16.6748 18.3247L18.3245 16.675L15.1663 13.5168V8.1665Z" fill="#699CD0"/>
                    </svg>
                    <p>Watch on demand at your convenience</p>
                </li>
                <li>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 1.75C7.23516 1.75 1.75 7.23516 1.75 14C1.75 20.7648 7.23516 26.25 14 26.25C20.7648 26.25 26.25 20.7648 26.25 14C26.25 7.23516 20.7648 1.75 14 1.75ZM17.9402 14.1887L11.9684 18.5336C11.9356 18.5571 11.897 18.5712 11.8568 18.5742C11.8166 18.5772 11.7764 18.5691 11.7405 18.5507C11.7046 18.5324 11.6745 18.5044 11.6534 18.4701C11.6323 18.4357 11.6212 18.3962 11.6211 18.3559V9.67148C11.621 9.63109 11.632 9.59144 11.653 9.55695C11.6741 9.52245 11.7042 9.49444 11.7402 9.47604C11.7761 9.45763 11.8165 9.44955 11.8568 9.45267C11.897 9.4558 11.9357 9.47002 11.9684 9.49375L17.9402 13.8359C17.9684 13.8559 17.9915 13.8823 18.0073 13.913C18.0232 13.9437 18.0315 13.9777 18.0315 14.0123C18.0315 14.0469 18.0232 14.0809 18.0073 14.1116C17.9915 14.1423 17.9684 14.1687 17.9402 14.1887Z" fill="#699CD0"/>
                    </svg>
                    <p>Workshop duration: 56 minutes</p>
                </li>
            </ul>
    
            <div class="security_box">
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.83801 1.59C4.88559 1.85248 3.93965 2.1379 3.00101 2.446C2.91529 2.47376 2.8391 2.52504 2.78111 2.59399C2.72312 2.66295 2.68567 2.7468 2.67301 2.836C2.11901 6.993 3.39901 10.026 4.92601 12.024C5.57252 12.8784 6.34341 13.6311 7.21301 14.257C7.55901 14.501 7.86501 14.677 8.10601 14.79C8.22601 14.847 8.32401 14.885 8.39901 14.908C8.43181 14.9195 8.46562 14.9279 8.50001 14.933C8.53398 14.9275 8.56743 14.9191 8.60001 14.908C8.67601 14.885 8.77401 14.847 8.89401 14.79C9.13401 14.677 9.44101 14.5 9.78701 14.257C10.6566 13.6311 11.4275 12.8784 12.074 12.024C13.601 10.027 14.881 6.993 14.327 2.836C14.3145 2.74676 14.277 2.66285 14.219 2.59388C14.161 2.52491 14.0848 2.47366 13.999 2.446C13.348 2.233 12.249 1.886 11.162 1.591C10.052 1.29 9.03101 1.067 8.50001 1.067C7.97001 1.067 6.94801 1.29 5.83801 1.591V1.59ZM5.57201 0.56C6.65701 0.265 7.81001 0 8.50001 0C9.19001 0 10.343 0.265 11.428 0.56C12.538 0.86 13.657 1.215 14.315 1.43C14.5901 1.52085 14.834 1.68747 15.0187 1.9107C15.2034 2.13394 15.3213 2.40474 15.359 2.692C15.955 7.169 14.572 10.487 12.894 12.682C12.1824 13.621 11.334 14.4479 10.377 15.135C10.0461 15.3728 9.69549 15.5819 9.32901 15.76C9.04901 15.892 8.74801 16 8.50001 16C8.25201 16 7.95201 15.892 7.67101 15.76C7.30452 15.5819 6.95391 15.3728 6.62301 15.135C5.66603 14.4478 4.81759 13.621 4.10601 12.682C2.42801 10.487 1.04501 7.169 1.64101 2.692C1.67869 2.40474 1.79665 2.13394 1.98132 1.9107C2.166 1.68747 2.4099 1.52085 2.68501 1.43C3.6402 1.11681 4.60281 0.826725 5.57201 0.56Z" fill="#9DA1AA"/>
                    <path d="M10 6.49995C10.0002 6.81027 9.90407 7.11301 9.72497 7.36644C9.54587 7.61986 9.29258 7.8115 9 7.91495L9.385 9.90495C9.39901 9.97732 9.39684 10.0519 9.37864 10.1233C9.36045 10.1948 9.32668 10.2613 9.27976 10.3182C9.23283 10.375 9.17392 10.4208 9.10723 10.4523C9.04054 10.4837 8.96772 10.5 8.894 10.4999H8.106C8.03236 10.4998 7.95966 10.4834 7.8931 10.4519C7.82653 10.4204 7.76774 10.3746 7.72093 10.3178C7.67412 10.261 7.64044 10.1945 7.6223 10.1231C7.60416 10.0517 7.60201 9.97724 7.616 9.90495L8 7.91495C7.74076 7.82329 7.5117 7.66214 7.33786 7.44911C7.16401 7.23608 7.05206 6.97936 7.01425 6.70701C6.97644 6.43465 7.01422 6.15715 7.12345 5.90481C7.23269 5.65248 7.40919 5.43502 7.63365 5.27621C7.85812 5.1174 8.12192 5.02335 8.39623 5.00433C8.67053 4.9853 8.94479 5.04205 9.18903 5.16835C9.43327 5.29466 9.63809 5.48567 9.78111 5.72051C9.92414 5.95535 9.99986 6.22498 10 6.49995Z" fill="#9DA1AA"/>
                </svg>
                <p>Your email address and mobile number won't be shared with anyone. <br> Please review our privacy policy for more information.</p>
            </div>
        </div>
    `

      let popup_third = /*html*/ `
    <div class="popup_third">       
        <div class="popup_name">
            <div class="body_popup">
                <h2>How should we address you and your dog?</h2>
            </div>
        </div>
    
        <div class="popup_adress">
            <div class="body_popup">
                <h2>We’ll email and text you the link for the workshop and tips to train your dog.</h2>
            </div>
        </div>
    </div>
    `

      function setListBreedDog(title) {
        return `  <li data-breed="${title}">${title}</li>`
      }

      document.head.insertAdjacentHTML("beforeend", popupStyle)
      document.body.insertAdjacentHTML("afterbegin", popUpPrivacy)

      // #firstModal
      let a = setInterval(() => {
        if (document.querySelector("#firstModal .vis-ver-0_0.modal-header.modal-header-style.modal-of-header.style-border.modal-header1")) {
          clearInterval(a)

          document.querySelector("#firstModal .border-of-modal").insertAdjacentHTML("afterbegin", popupNew)

          let b = setInterval(() => {
            if (document.querySelector("#firstModal.modal .modal-dialog")) {
              clearInterval(b)

              document.querySelector("#firstModal.modal .modal-dialog").insertAdjacentHTML(
                "afterbegin",
                `     <div class="img_wrap">
                              <img src="https://conversionratestore.github.io/projects/knineti/img/logo_dog.png" alt="logo dog">
                          </div>`
              )

              document.querySelector(".popup_new > div:last-child .popup_second > h2")?.after(document.querySelector("#firstModal .modal-body"))

              // click on btn My dog is a puppy (aged less than 1 year)
              document.querySelector(".start_step ul li:first-child").addEventListener("click", function (e) {
                e.preventDefault()

                document.querySelector("#firstModal .sec .puppy-popup-link #puppyCheck").click()
                pushDataLayer("click on btn My dog is a puppy (aged less than 1 year)")
                document.querySelector("#firstModal #puppyContent .yesno .ysn.popup_link:nth-child(1) a").click()
                document.querySelector(".start_step")?.classList.remove("active_popup")
                document.querySelector(".popup_new")?.classList.add("active_popup")
                document.querySelector(".popup_new").style.display = "flex"
              })

              // click on btn My dog is a young or adult dog (aged 1 year or more)
              document.querySelector(".start_step ul li:last-child").addEventListener("click", function (e) {
                e.preventDefault()

                document.querySelector("#firstModal .sec .popup_link:last-child #puppyCheck").click()
                pushDataLayer("click on btn My dog is a young or adult dog (aged 1 year or more)")
                document.querySelector("#firstModal #puppyContent .yesno .ysn.popup_link:nth-child(1) a").click()
                document.querySelector(".start_step")?.classList.remove("active_popup")
                document.querySelector(".popup_new")?.classList.add("active_popup")
                document.querySelector(".popup_new").style.display = "flex"
              })

              if (document.querySelector(".privacy_policy_wrap p a")) {
                let body = document.body,
                  overlay = document.querySelector(".backdrop_popup")

                document.querySelector(".privacy_policy_wrap p a").addEventListener("click", (e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  console.log(`link`)
                  onOpenPopup()
                })

                // click on btn close popup
                document.querySelector(".backdrop_popup .container_popup > svg")?.addEventListener("click", (e) => {
                  onClosePopup()
                })

                // click on overlay popup
                overlay.addEventListener("click", (e) => {
                  if (e.target.matches(".backdrop_popup")) {
                    onClosePopup()
                  }
                })

                function onOpenPopup() {
                  overlay.classList.remove("is_hidden")
                  body.style.overflow = "hidden"
                  document.querySelector(".backdrop_popup .container_popup").insertAdjacentHTML(
                    "beforeend",
                    `    <div class="content_popup">
      <h2>Usage and Disclosure of Personal Information</h2>
      <div>
      <p>
        We may use your Personal Information, and/or transfer your Personal Information for any legal purpose including, without limitation: (1) to deliver the Program and/or the
        Products to you that you have requested; (2) to validate your compliance with the Terms & Conditions; (3) for content improvement and feedback purposes; (4) to reach you,
        when necessary, regarding your use of our Website, our Program or our Products; and (5) to bring retail opportunities and promotional offers to you by email, direct mail,
        telemarketing, and/or online banner advertising.
      </p>
      <p>
        We will not disclose Personal Information collected from customers of our Website to third parties, except to companies with which we are actively affiliated, to
        contractors we use to support our business (such as technical support, delivery services, and financial institutions) whereby we will require such third parties to treat
        such Personal Information in accordance with this Privacy Policy, and in connection with the sale, assignment, or other transfer of the business of our Website to which the
        information relates. We may hire third parties to review certain Personal Information to advise us on demographic and marketing related issues, but only after such third
        parties have agreed to maintain the confidentiality, security, and integrity of any Personal Information contained in accordance with this Privacy Policy.
      </p>
      <p>
        When your information is provided to third parties, these third parties may include providers of direct marketing services and applications. We or these third parties may
        supplement the information we collect online with outside records to enhance our ability to serve you, to tailor our Website, our Program and our Products to you, and/or to
        offer you targeted advertising and other opportunities to purchase products and services that we believe may be of interest to you. We will NEVER share your credit card
        information with third parties unless you have given us explicit permission to do so, such as in order to fulfill a third party offer that you have accepted from us. By
        permitting us to collect this information, you will be able to receive free information on products and services that may be of interest to you. You also enable us to
        personalize your experience with us so that we can provide you with the highest quality of service. By submitting your email address on our Website, you agree to receive
        email from us and our third party advertisers. We, and our third party advertisers, may maintain separate email lists for different purposes. You may cancel your
        participation in any of these email lists at any time by clicking the opt out link or other unsubscribe option that is included in the email. We only send emails to people
        who have voluntarily provided us with such contact information, either directly, or through a third party. We do not send unsolicited commercial emails.
      </p>
      </div>
    </div>`
                  )
                }

                function onClosePopup() {
                  overlay.classList.add("is_hidden")
                  body.style.overflow = "auto"
                  setTimeout(() => {
                    document.querySelector(".content_popup").remove()
                  }, 400)
                }
              }
            }
          }, 10)

          // click on label checkbox
          document.querySelectorAll("#firstModal .custom_checkbox + label").forEach((el) => {
            el.addEventListener("click", function () {
              console.log(`behavior`, el)
              pushDataLayer(`${this.getAttribute("for")} selected`)
            })
          })

          let arr = []
          //   click on first btn Continue
          if (document.querySelector(".popup_new > div:last-child .popup_first .btn_continue")) {
            document.querySelector(".popup_new > div:last-child .popup_first .btn_continue").addEventListener("click", function (el) {
              pushDataLayer(`Click on Continue on step "What unwanted behavior do you want to address`)
              this.closest(".popup_first")?.classList.remove("active_popup")

              document.querySelector(".popup_new > div:last-child .progress_bar > div p:first-child.active_btn_first").style.display = "none"
              document.querySelector("#firstModal .modal-body").style.display = "block"
              if (document.querySelector(".popup_new > div:last-child .progress_bar > div p:nth-child(1)")?.classList.contains("active_btn_first")) {
                document.querySelector(".popup_new > div:last-child .progress_bar > div p:nth-child(1)")?.classList.remove("active_btn_first")
              }
              document.querySelector(".popup_new > div:last-child .progress_bar > div p:nth-child(2).active_btn_second").style.display = "flex"
              document.querySelector(".popup_new > div:last-child .popup_second")?.classList.add("active_popup")
              document.querySelector(".popup_new .img_wrap .dog_first").style.display = "none"
              document.querySelector(".popup_new .img_wrap .dog_second").style.display = "block"
              document.querySelector(".popup_new > div:last-child .progress_bar > ul li:nth-child(2)")?.classList.add("active_step")
              document.querySelector(".popup_new > div:last-child .progress_bar > div p:last-child span:nth-child(1)").textContent = "2"

              document.querySelectorAll("#firstModal .custom_checkbox:checked + label").forEach((el) => {
                let text = el.textContent
                arr.push(text)
              })

              console.log(arr)

              if (localStorage.getItem("data-behavior")) {
                localStorage.removeItem("data-behavior")
                localStorage.setItem("data-behavior", arr)
              } else {
                localStorage.setItem("data-behavior", arr)
              }
            })
          }

          // //   btn back first
          document.querySelector(".popup_new > div:last-child .progress_bar > div p:nth-child(1)").addEventListener("click", function () {
            pushDataLayer(`Click on Previous on step "What unwanted behavior do you want to address?"`)

            document.querySelector(".start_step").classList.add("active_popup")
            document.querySelector(".popup_new").classList.remove("active_popup")
            document.querySelector(".popup_new").style.display = "none"

            if (document.querySelector(".popup_new > div:last-child .popup_first .btn_continue").getAttribute("data-lst-dog")) {
              document.querySelector(".popup_new > div:last-child .popup_first .btn_continue").removeAttribute("data-lst-dog", "2")
            }
          })

          if (document.querySelector(".popup_new > div:last-child .progress_bar > div p:nth-child(2)")) {
            document.querySelector(".popup_new > div:last-child .progress_bar > div p:nth-child(2)").addEventListener("click", function (el) {
              //   btn back active_btn_second
              if (this?.classList.contains("active_btn_second")) {
                arr = []
                pushDataLayer(`Click on Previous on step "What’s your dog’s age?"`)
                this.style.display = "none"
                document.querySelector(".popup_new > div:last-child .progress_bar > div p:nth-child(1)").style.display = "flex"
                document.querySelector(".popup_new > div:last-child .progress_bar > div p:nth-child(1)")?.classList.add("active_btn_first")
                document.querySelector(".popup_new > div:last-child .popup_first")?.classList.add("active_popup")
                document.querySelector(".popup_new > div:last-child .popup_second")?.classList.remove("active_popup")
                document.querySelector(".popup_new .img_wrap .dog_second").style.display = "none"
                document.querySelector(".popup_new .img_wrap .dog_first").style.display = "block"
                document.querySelector(".popup_new > div:last-child .progress_bar > ul li:nth-child(2)")?.classList.remove("active_step")
                document.querySelector(".popup_new > div:last-child .progress_bar > div p:last-child span:nth-child(1)").textContent = "1"
              }

              //   btn back active_btn_third
              if (this?.classList.contains("active_btn_third")) {
                pushDataLayer(`Click on Previous on step "What breed is your dog?"`)
                this?.classList.remove("active_btn_third")
                this?.classList.add("active_btn_second")

                document.querySelector(".popup_new > div:last-child .popup_first .btn_continue").setAttribute("data-lst-dog", "2")

                document.querySelector(".popup_new .img_wrap .dog_third").style.display = "none"
                document.querySelector(".popup_new .img_wrap .dog_second").style.display = "block"

                document.querySelector(".popup_new > div:last-child .popup_second > h2").style.display = "block"
                document.querySelector(".new_block_breed").style.display = "block"
                document.querySelector("#firstModal .button_input_name").style.display = "flex"
                document.querySelector("#firstModal #subs-name").style.display = "flex"
                document.querySelector("#firstModal #dog-name").style.display = "flex"
                document.querySelector("#firstModal .popup_name").style.display = "block"
                document.querySelector("#firstModal #dog-name-top-levels").style.display = "block"
                document.querySelector("#firstModal #subs-name-top-levels").style.display = "block"

                document.querySelector("#firstModal form span.top-levels#subs-email-top-levels").style.display = "none"
                document.querySelector("#firstModal form span.top-levels#subs-mobile-top-levels").style.display = "none"
                document.querySelector(".last_step_title").style.display = "none"
                document.querySelector("#firstModal #subs-email").style.display = "none"
                document.querySelector("#firstModal #subs-mobile").style.display = "none"
                document.querySelector("#firstModal #contact-submit").style.display = "none"
                document.querySelector("#firstModal .popup_adress").style.display = "none"
                document.querySelector("#firstModal .privacy_policy_wrap").style.display = "none"
                document.querySelector("#firstModal .modal-body").classList.remove("is_active")

                document.querySelector(".popup_new > div:last-child .progress_bar > ul li:nth-child(3)")?.classList.remove("active_step")
                document.querySelector(".popup_new > div:last-child .progress_bar > div p:last-child span:nth-child(1)").textContent = "2"
              }
            })
          }

          //FORM
          document.querySelector("#firstModal #subs-name").placeholder = "Your name"
          document.querySelector("#firstModal #dog-name").placeholder = "Dog’s name"
          document.querySelector("#firstModal #subs-email").placeholder = "Enter your email"
          document.querySelector("#firstModal #subs-mobile").placeholder = "Enter your mobile number"
          document.querySelector("#firstModal #contact-submit").textContent = "Get workshop link"
          document.querySelector("#firstModal #dog-name-top-levels").textContent = "Dog’s name"
          document.querySelector("#firstModal #subs-name-top-levels").textContent = "Your name"
          document.querySelector("#firstModal #subs-name").tabIndex = "0"
          document.querySelector("#firstModal #dog-name").tabIndex = "0"
          document.querySelector("#firstModal #subs-email").tabIndex = "0"
          document.querySelector("#firstModal #subs-mobile").tabIndex = "0"
          document.querySelector("#firstModal #contact-submit").tabIndex = "0"

          document
            .querySelector(`#firstModal input[name='dog_name']`)
            .insertAdjacentHTML("afterend", `<span class="input_error_text">Please enter Your Dog’s name without spaces, numbers or special characters</span>`)

          document
            .querySelector(`#firstModal input[name='first_name']`)
            .insertAdjacentHTML("afterend", `<span class="input_error_text">Please enter Your name without spaces, numbers or special characters</span>`)

          // create new element popup finalForm -> input name, email, number
          document.querySelector("#firstModal .row-md-12.style-of-row-free-workshop > div:first-child").insertAdjacentHTML("afterend", popup_third)

          if (document.querySelector("#firstModal form .form-group")) {
            //   value btn main submit
            document.querySelector("#firstModal #contact-submit").value = "Get workshop link"

            //   create btn last continue
            document.querySelector("#firstModal form .form-group > div:last-child").insertAdjacentHTML("beforebegin", buttonInputName)
          }

          if (document.querySelector("#firstModal .button_input_name")) {
            document.querySelector("#firstModal .button_input_name").addEventListener("click", () => {
              validationForm("#firstModal")
            })
          }

          // click on btn Get workshop link clicked
          if (document.querySelector("#firstModal #contact-submit")) {
            document.querySelector("#firstModal #contact-submit").addEventListener("click", function () {
              pushDataLayer("Get workshop link clicked")
            })
          }

          // choose select
          if (document.querySelector(".chosen_select")) {
            filteInputText()
            // remove all text input
            document.querySelector("#removeTextInput").addEventListener("click", function (e) {
              pushDataLayer("Click on Closed on step 'What breed is your dog?'")
              document.querySelector(".chosen_select ul").innerHTML = ""
              arrayBreedDog.forEach((el) => {
                document.querySelector(".chosen_select ul").insertAdjacentHTML("afterbegin", setListBreedDog(el))
              })
              this.previousElementSibling.value = ""
              document.querySelector(".chosen_select div").style.display = "block"
              document.querySelector(".popup_new > div:last-child .popup_third_box .btn_continue")?.classList.add("disabled_var")
              filteInputText()
            })

            // filter
            document.querySelector(".chosen_select label > input").addEventListener("focus", () => {
              document.querySelector(".chosen_select label")?.classList.add("on_focus")
              document.querySelector(".chosen_select").insertAdjacentHTML(
                "beforeend",
                `<p class="hover_text"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_732_846)"><path d="M11.8087 9.26711L7.222 1.3227C6.96695 0.880953 6.51013 0.617188 5.99999 0.617188C5.48988 0.617188 5.03303 0.880953 4.77799 1.3227L0.191302 9.26708C-0.0637675 9.70888 -0.0637675 10.2364 0.191302 10.6781C0.446372 11.1199 0.903168 11.3837 1.41331 11.3837H10.5867C11.0968 11.3837 11.5536 11.1199 11.8087 10.6782C12.0638 10.2364 12.0638 9.70888 11.8087 9.26711ZM11.1999 10.3266C11.0719 10.5483 10.8426 10.6806 10.5867 10.6806H1.41331C1.15732 10.6806 0.928106 10.5483 0.800137 10.3266C0.672169 10.105 0.672169 9.84032 0.800137 9.61865L5.38687 1.67424C5.51484 1.45257 5.74406 1.32024 6.00002 1.32024C6.25595 1.32024 6.4852 1.45257 6.61316 1.67424L11.1999 9.61865C11.3278 9.84032 11.3278 10.105 11.1999 10.3266Z" fill="#808080"/><path d="M6.35147 4.125H5.64844V7.6402H6.35147V4.125Z" fill="#808080"/><path d="M5.99995 8.34375C5.74151 8.34375 5.53125 8.55401 5.53125 8.81245C5.53125 9.0709 5.74151 9.28115 5.99995 9.28115C6.25837 9.28115 6.46865 9.0709 6.46865 8.81245C6.46865 8.55401 6.2584 8.34375 5.99995 8.34375Z" fill="#808080"/></g><defs><clipPath id="clip0_732_846"><rect width="12" height="12" fill="white"/></clipPath></defs></svg>
              Choose your dog breed to continue</p>`
              )
            })

            document.querySelector(".chosen_select label > input").addEventListener("keydown", (e) => {
              document.querySelector(".chosen_select label")?.classList.add("on_focus")
              let x = document.querySelector(`${e.target}`).closest("label").nextElementSibling

              // if (e.keyCode == 40) {
              //   console.log(x)
              // } else if (e.keyCode == 38) {
              //   console.log(x)
              // } else if (e.keyCode == 13) {
              //   console.log(x)
              //   e.preventDefault()
              // }
            })

            document.querySelector(".chosen_select label > input").addEventListener("blur", () => {
              if (document.querySelector(".chosen_select label")?.classList.contains("on_focus")) {
                document.querySelector(".chosen_select label")?.classList.remove("on_focus")

                if (document.querySelector(".chosen_select > p")) {
                  document.querySelector(".chosen_select > p").remove()
                }
                if (document.querySelector(".chosen_select label > input").value === "") {
                  document.querySelector(".chosen_select label svg#removeTextInput").style.display = "none"
                }
              }
            })

            document.querySelector(".chosen_select label > input").addEventListener("input", function (e) {
              if (e.value !== "") {
                document.querySelector(".chosen_select label svg#removeTextInput").style.display = "block"
              }

              document.querySelector(".chosen_select ul").innerHTML = ""
              arrayBreedDog.forEach((el) => {
                document.querySelector(".chosen_select ul").insertAdjacentHTML("afterbegin", setListBreedDog(el))
              })

              document.querySelector(".chosen_select div").style.display = "block"
              document.querySelector(".popup_new > div:last-child .popup_third_box .btn_continue")?.classList.add("disabled_var")
              filteInputText()
            })

            function filteInputText() {
              let filterValue = document.querySelector(".chosen_select label > input").value.toUpperCase()
              let notFound = true

              document.querySelectorAll(".chosen_select ul li").forEach(function (el) {
                el.addEventListener("click", function () {
                  document.querySelector(".chosen_select label > input").value = el.textContent
                  document.querySelector(".chosen_select div").style.display = "none"
                  document.querySelector(".popup_new > div:last-child .popup_third_box .btn_continue.disabled_var")?.classList.remove("disabled_var")
                  if (document.querySelector(".chosen_select label > input").value !== "") {
                    document.querySelector(".chosen_select label svg#removeTextInput").style.display = "block"
                  }
                })

                let text = el.textContent.toUpperCase()
                if (text.includes(filterValue)) {
                  el?.classList.add("show")
                  el?.classList.remove("hide")
                  notFound = false
                  includesSymb(filterValue, text, el.firstChild)
                } else {
                  el?.classList.add("hide")
                  el?.classList.remove("show")
                }
              })

              if (notFound) {
                document.querySelector(".chosen_select ul").innerHTML = `<li>Oops, nothing found!</li>`
              }
            }
          }

          function includesSymb(text, cont, element) {
            let root = element
            let content = cont

            let rng = document.createRange()

            rng.setStart(root, content.indexOf(text))

            rng.setEnd(root, content.indexOf(text) + text.length)

            let highlightDiv = document.createElement("strong")

            rng.surroundContents(highlightDiv)
          }
        }
      }, 10)

      // validate formu
      function validationForm(parent) {
        let inputValueName = document.querySelector(`${parent} input[name='first_name']`).value.match(/^[a-zA-Z]+$/)
        let inputDogName = document.querySelector(`${parent} input[name='dog_name']`).value.match(/^[a-zA-Z]+$/)

        // first_name
        if (inputValueName === null) {
          document.querySelector(`${parent} input[name='first_name']`)?.classList.add("input_error")
          document.querySelector(`${parent} .input_error_text`).style.display = "block"
        } else {
          document.querySelector(`${parent} input[name='first_name']`)?.classList.remove("input_error")
          document.querySelector(`${parent} .input_error_text`).style.display = "none"
        }

        // dog_name
        if (inputDogName === null) {
          document.querySelector(`${parent} input[name='dog_name']`)?.classList.add("input_error")
          document.querySelector(`${parent} input[name='dog_name'] + .input_error_text`).style.display = "block"
        } else {
          document.querySelector(`${parent} input[name='dog_name']`)?.classList.remove("input_error")
          document.querySelector(`${parent} input[name='dog_name'] + .input_error_text`).style.display = "none"
        }

        if (document.querySelector(`${parent} input.input_error`) === null && parent === `#firstModal`) {
          pushDataLayer(`Click on Continue on step "How should we address you and your dog?"`)

          if (document.querySelector(".popup_new > div:last-child .progress_bar > div p:nth-child(2)").classList.contains("active_btn_second")) {
            document.querySelector(".popup_new > div:last-child .progress_bar > div p:nth-child(2)").classList.remove("active_btn_second")
            document.querySelector(".popup_new > div:last-child .progress_bar > div p:nth-child(2)").classList.add("active_btn_third")
            document.querySelector("#firstModal .modal-body").classList.add("is_active")
          }
          document.querySelector(".popup_new > div:last-child .progress_bar > ul li:nth-child(3)")?.classList.add("active_step")
          document.querySelector(".popup_new > div:last-child .progress_bar > div p:last-child span:nth-child(1)").textContent = "3"

          document.querySelector(".popup_new .img_wrap .dog_second").style.display = "none"
          document.querySelector(".popup_new > div:last-child .popup_second > h2").style.display = "none"
          document.querySelector(".new_block_breed").style.display = "none"
          document.querySelector("#firstModal .button_input_name").style.display = "none"
          document.querySelector("#firstModal #subs-name").style.display = "none"
          document.querySelector("#firstModal #dog-name").style.display = "none"
          document.querySelector("#firstModal #dog-name-top-levels").style.display = "none"
          document.querySelector("#firstModal #subs-name-top-levels").style.display = "none"

          if (document.querySelector("#firstModal #subs-email").value !== "") {
            document.querySelector("#firstModal form span.top-levels#subs-email-top-levels").style.display = "block"
          }
          if (document.querySelector("#firstModal #subs-mobile").value !== "") {
            document.querySelector("#firstModal form span.top-levels#subs-mobile-top-levels").style.display = "block"
          }
          document.querySelector(".last_step_title").style.display = "block"
          document.querySelector(".popup_new .img_wrap .dog_third").style.display = "block"
          document.querySelector("#firstModal #subs-email").style.display = "flex"
          document.querySelector("#firstModal #subs-mobile").style.display = "flex"
          document.querySelector("#firstModal #contact-submit").style.display = "flex"

          localStorage.setItem("dogName", document.querySelector("#firstModal #dog-name").value)

          if (localStorage.getItem("dogName")) {
            document.querySelector(".your_dog_name").textContent = localStorage.getItem("dogName")
          }

          document.querySelector("#firstModal .privacy_policy_wrap").style.display = "block"
          document.querySelector("#firstModal .popup_adress").style.display = "block"
          document.querySelector("#firstModal .popup_name").style.display = "none"
        }
      }

      pushDataLayer("loaded")
      const record = setInterval(() => {
        if (typeof clarity === "function") {
          clearInterval(record)

          clarity("set", "reg_popup_impr", "variant_1")
        }
      }, 200)
      document.querySelector(".exp")?.remove()
    }
  }, 10)
}

//
if (window.location.pathname === "/mc/") {
  let startFuncMc = setInterval(() => {
    if (document.querySelector("#player")) {
      clearInterval(startFuncMc)

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
            eventCategory: `Exp: New reg/fw flow ${eventVar}`,
            eventAction: `${actionDataLayer}`,
            eventLabel: `${labelDataLayer}`,
          })
        } else {
          console.log(actionDataLayer)
          dataLayer.push({
            event: "event-to-ga",
            eventCategory: `Exp: New reg/fw flow ${eventVar}`,
            eventAction: `${actionDataLayer}`,
          })
        }
      }

      let style = /*html */ `
      <style>
        #myHeaderr .top_menu_box{
            display: none !important;
        }
        #myHeaderr{
            padding: 0 !important;
        }
        /* sticky_new_header*/
        .sticky_new_header{
            background: #FFFFFF;
            border-bottom: 3px solid #794E15;
            text-align: center;
        }
        .sticky_new_header p.special_offer_text{
            background: #794E15;
            padding: 8px;
            font-weight: 700;
            font-size: 18px;
            line-height: 130%;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            color: #FFFFFF !important;
            margin: 0;
        }
        .sticky_new_header > div{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
        }
        .sticky_new_header .last_price_text{
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;
            text-decoration-line: line-through;
            color: rgb(128 128 128 / 75%) !important;
            margin: 0;
        }
        .sticky_new_header .new_price_text{
            font-weight: 700;
            font-size: 32px;
            line-height: 24px;
            color: #173775 !important;
            margin: 0 16px 0 8px;
        }
        .sticky_new_header .you_save_text{
            display: flex;
            align-items: center;
            text-align: center;
            font-weight: 700;
            font-size: 12px;
            line-height: 14px;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            color: #FFFFFF;
            padding: 4px 8px;
            margin: 0;
            background: #794E15;
            border-radius: 4px;
        }
        .sticky_new_header button.new_btn{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 48px;
            max-width: 235px;
            width: 100%;
            outline: none;
            border: none;
            background: #173775;
            box-shadow: 5px 5px 10px rgb(39 32 32 / 80%);
            border-radius: 10px;
            font-weight: 600;
            font-size: 14px;
            line-height: 20px;
            text-align: center;
            text-transform: uppercase;
            color: #FFFFFF !important;
            transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
            margin: 0 0 0 24px;
        }
        [data-enrollbtn] svg{
            margin-left: 8px;
        }
        .sticky_new_header button.new_btn:hover,
        .sticky_new_header button.new_btn:focus{
            box-shadow: unset;
        }
         @media (max-width: 768px) {
            .sticky_new_header{
                border-bottom: 2px solid #794E15;
            }
            .sticky_new_header p.special_offer_text{
              padding: 6px;
              font-size: 14px;
            }
            .sticky_new_header > div{
                flex-wrap: wrap;
            }
            .sticky_new_header .new_price_text{
              font-size: 28px;
              line-height: 24px;
              margin: 0 8px;
            }
            .sticky_new_header .last_price_text{
                margin: 0 0 0 35px;
            }
            p.special_offer_text{
                padding: 6px;
                font-weight: 700;
                font-size: 14px;
            }
            .sticky_new_header button.new_btn{
              margin: 16px 0 0;
            }
         }
          @media (max-width: 280px) {
            .sticky_new_header .last_price_text{
                margin: 0;
            }
          }
      </style>
      `

      let notFirstVisitStickyBlock = /*html */ ` 
        <div class="sticky_new_header">
          <p class="special_offer_text">Special Offer - Ends <span class="count_days">7</span> <span class="text_days">days</span></p>
          <div>
              <span class="last_price_text">$497</span>
              <span class="new_price_text">$297</span>
              <span class="you_save_text">You save $200</span>
              <button data-enrollbtn='(sticky header)' class="new_btn enroll_now_btn_new">EnRoll now 
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.741797 8.23307L3.97513 4.99974L0.741797 1.76641C0.416797 1.44141 0.416797 0.916406 0.741797 0.591406C1.0668 0.266406 1.5918 0.266406 1.9168 0.591406L5.7418 4.41641C6.0668 4.74141 6.0668 5.26641 5.7418 5.59141L1.9168 9.4164C1.5918 9.7414 1.0668 9.7414 0.741797 9.4164C0.42513 9.0914 0.416797 8.55807 0.741797 8.23307Z" fill="white"/>
                </svg>
              </button>
          </div>
        </div>
    `
      document.head.insertAdjacentHTML("beforeend", style)
      document.querySelector("#myHeaderr").insertAdjacentHTML("beforeend", notFirstVisitStickyBlock)

      getEndsDays()

      //getEndsDays
      function getEndsDays() {
        if (document.querySelector("#myHeaderr h4.box_text")) {
          let paramsLocation = new URLSearchParams(window.location.search)
          let dQueryDate = atob(paramsLocation.get("d"))
          let dsp = dQueryDate.split("-")

          let today = new Date(new Date().setDate(new Date().getDate())).toDateString().split(" ")
          let dayStart = new Date(new Date(dsp[0], dsp[1] - 1, dsp[2]).setDate(new Date(dsp[0], dsp[1] - 1, dsp[2]).getDate())).toDateString().split(" ")
          let dayFirst = new Date(new Date(dsp[0], dsp[1] - 1, dsp[2]).setDate(new Date(dsp[0], dsp[1] - 1, dsp[2]).getDate() + 1)).toDateString().split(" ")
          let daySecond = new Date(new Date(dsp[0], dsp[1] - 1, dsp[2]).setDate(new Date(dsp[0], dsp[1] - 1, dsp[2]).getDate() + 2)).toDateString().split(" ")
          let dayThird = new Date(new Date(dsp[0], dsp[1] - 1, dsp[2]).setDate(new Date(dsp[0], dsp[1] - 1, dsp[2]).getDate() + 3)).toDateString().split(" ")
          let dayFourth = new Date(new Date(dsp[0], dsp[1] - 1, dsp[2]).setDate(new Date(dsp[0], dsp[1] - 1, dsp[2]).getDate() + 4)).toDateString().split(" ")
          let dayFifth = new Date(new Date(dsp[0], dsp[1] - 1, dsp[2]).setDate(new Date(dsp[0], dsp[1] - 1, dsp[2]).getDate() + 5)).toDateString().split(" ")
          let daySixth = new Date(new Date(dsp[0], dsp[1] - 1, dsp[2]).setDate(new Date(dsp[0], dsp[1] - 1, dsp[2]).getDate() + 6)).toDateString().split(" ")
          let daySeventh = new Date(new Date(dsp[0], dsp[1] - 1, dsp[2]).setDate(new Date(dsp[0], dsp[1] - 1, dsp[2]).getDate() + 7)).toDateString().split(" ")
          let todayFormat = `${today[0]}${today[1]}${today[2]}${today[3]}`
          let dayStartFormat = `${dayStart[0]}${dayStart[1]}${dayStart[2]}${dayStart[3]}`
          let dayFirstFormat = `${dayFirst[0]}${dayFirst[1]}${dayFirst[2]}${dayFirst[3]}`
          let daySecondFormat = `${daySecond[0]}${daySecond[1]}${daySecond[2]}${daySecond[3]}`
          let dayThirdFormat = `${dayThird[0]}${dayThird[1]}${dayThird[2]}${dayThird[3]}`
          let dayFourthFormat = `${dayFourth[0]}${dayFourth[1]}${dayFourth[2]}${dayFourth[3]}`
          let dayFifthFormat = `${dayFifth[0]}${dayFifth[1]}${dayFifth[2]}${dayFifth[3]}`
          let daySixthFormat = `${daySixth[0]}${daySixth[1]}${daySixth[2]}${daySixth[3]}`
          let daySeventhFormat = `${daySeventh[0]}${daySeventh[1]}${daySeventh[2]}${daySeventh[3]}`

          if (todayFormat === dayStartFormat) {
            days = "in 7"
            textDays = "days"
          } else if (todayFormat === dayFirstFormat) {
            days = "in 6"
            textDays = "days"
          } else if (todayFormat === daySecondFormat) {
            days = "in 5"
            textDays = "days"
          } else if (todayFormat === dayThirdFormat) {
            days = "in 4"
            textDays = "days"
          } else if (todayFormat === dayFourthFormat) {
            days = "in 3"
            textDays = "days"
          } else if (todayFormat === dayFifthFormat) {
            days = "in 2"
            textDays = "days"
          } else if (todayFormat === daySixthFormat) {
            days = "tomorrow"
            textDays = ""
          } else if (todayFormat === daySeventhFormat) {
            days = "today"
            textDays = ""
          }
          //

          if (document.querySelector(".sticky_new_header")) {
            document.querySelectorAll(".count_days").forEach((el) => {
              el.textContent = days
            })
            document.querySelectorAll(".text_days").forEach((el) => {
              el.textContent = textDays
            })

            document.querySelectorAll("[data-enrollbtn]").forEach((el) => {
              el.addEventListener("click", (e) => {
                e.preventDefault()
                pushDataLayer(`Enroll now ${el.getAttribute("data-enrollbtn")} clicked`)
                document.querySelector("#myHeaderr a.enroll_now_btn").click()
              })
            })

            //observer
            const options = {
              root: null,
              threshold: 0.5,
            }

            let observerNewHeader = new IntersectionObserver((entries) => {
              if (!entries[0].isIntersecting) return
              pushDataLayer(`View element on screen`, `Special offer - ends ${days} ${textDays} (header)`)
              observerNewHeader.disconnect()
            })

            observerNewHeader.observe(document.querySelector(".sticky_new_header"), options)
          }
        }
      }
    }
  })
}
