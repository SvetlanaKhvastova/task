let cancelTrial = setInterval(() => {
  if (window.location.pathname.match("subscription") && !document.querySelector(".reactivate") && JSON.parse(document.querySelector('[data-drupal-selector="drupal-settings-json"]')?.textContent).dywm.gtm.customer_info.user.isSubscriber === true) {
    clearInterval(cancelTrial);

    function pushDataLayer([event_name, event_desc, event_type, event_loc]) {
      console.log(event_name + " / " + event_desc + " / " + event_type + " / " + event_loc);

      // Send a Google Analytics event
      const eventData = {
        event: "event-to-ga4",
        event_name,
        event_desc,
        event_type,
        event_loc,
      };

      window.dataLayer = window.dataLayer || [];
      dataLayer.push(eventData);
    }

    //swipe
    let script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js";
    script.async = false;
    document.head.appendChild(script);
    let scriptCustom = document.createElement("script");
    scriptCustom.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.19/jquery.touchSwipe.min.js";
    scriptCustom.async = false;
    document.head.appendChild(scriptCustom);

    let cancelTrialStyle = /*html */ `
      <style>
        #block-tabs + #block-lotus-content{
          display: none;
        }
        .o-page--user .o-page__mainContent{
          margin-left: auto;
          margin-right:  auto;
        }
        /*your_trial_new_block */
        .your_trial_new_block{
          margin: 10px 0 165px;
        }
        .your_trial_new_title{
          color: #000;
          font-family: 'Source Serif Pro';
          font-size: 36px;
          font-weight: 700;
          line-height: normal;
          margin: 0 0 12px;
        }
        .your_trial_new_txt{
          color: #272727;
          font-family: 'Manrope';
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          margin: 0 0 18px;
          max-width: 540px;
        }
        .your_trial_new_descr > p{
          margin: 0;
          color: #272727;
          font-family: 'Manrope';
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          max-width: unset;
        }
        .your_trial_new_descr > p + p{
          margin-top: 10px;
        }
/*cancel_trial_btn */
.cancel_trial_btn {
  display: block;
  font-family: "Manrope", sans-serif !important;
  color: #027db8;
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
  cursor: pointer;
  margin: 18px 0 0;
}
/*popup */
.overlay_popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
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
  max-width: 440px;
  margin: auto;
  transition: all 0.5s ease 0s;
  border-radius: 12px;
  background: #fff;
  height: max-content;
}
.overlay_popup .container_popup > .btn_close {
  position: absolute;
  top: 16px;
  right: 16px;
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
  border-radius: 12px;
  padding: 30px;
}
.content_popup .popup_title {
  color: #272727;
  font-family: "Manrope", sans-serif !important;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  margin: 0 0 12px;
}
.content_popup .popup_subtitle {
  color: #272727;
  font-family: "Manrope", sans-serif !important;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin: 0 0 12px;
  max-width: 330px;
}
.content_popup .popup_descr {
  color: #555;
  font-family: "Manrope", sans-serif !important;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0 0 12px;
  max-width: 355px;
}
.content_popup .popup_descr a {
  color: inherit;
  text-decoration: underline;
}
.popup_list_txt {
  margin: 0;
  padding: 0;
  list-style: none;
}
.popup_list_txt li + li {
  margin-top: 12px;
}
.popup_list_txt li {
  position: relative;
  padding-left: 28px;
}
.popup_list_txt li::before {
  position: absolute;
  content: "";
  width: 20px;
  height: 20px;
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/lotus.svg) no-repeat center center;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background-size: contain;
}
.popup_list_txt li p {
  color: #272727;
  font-family: "Manrope", sans-serif !important;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
}
.content_popup .btn_wrapp {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
}
.content_popup .popup_cancel_trial_btn,
.skip_btn {
  color: #555;
  font-family: "Manrope", sans-serif !important;
  font-size: 16px;
  font-weight: 700;
  line-height: 32px;
  text-transform: capitalize;
  border-radius: 30px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 116px;
  width: 100%;
  margin: 0;
  cursor: pointer;
}
.content_popup .keep_my_trial_btn,
.close_btn,
#helpUsBecomeBetter .submit_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background: #017922;
  max-width: 240px;
  width: 100%;
  height: 50px;
  color: #fff;
  font-family: "Manrope", sans-serif !important;
  font-size: 16px;
  font-weight: 700;
  line-height: 32px;
  text-transform: capitalize;
  margin: 0;
  cursor: pointer;
  outline: unset;
  border: none;
}
#yourTrialWasCancelled .popup_subtitle {
  max-width: unset;
  margin-bottom: 24px;
}
#yourTrialWasCancelled .close_btn {
  max-width: unset;
  display: none !important;
}
.overlay_popup.last_step .btn_close{
  display: none !important;
}
#helpUsBecomeBetter .popup_subtitle {
  max-width: unset;
  margin: 0 0 16px;
}
#helpUsBecomeBetter ol {
  list-style: none;
  padding: 0;
  margin: 0;
}
#helpUsBecomeBetter ol > li + li {
  margin-top: 16px;
}
#helpUsBecomeBetter .form_title {
  color: #272727;
  font-family: "Manrope", sans-serif !important;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  margin: 0 0 5px 4px;
  display: block;
}
#helpUsBecomeBetter .form_descr {
  color: #555;
  font-family: "Manrope", sans-serif !important;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
}
#helpUsBecomeBetter .grade_list {
  display: flex;
  gap: 4px;
  margin-top: 12px;
}
#helpUsBecomeBetter label {
  margin: 0;
}
#helpUsBecomeBetter input.custom_radio_btn {
  z-index: -1;
  opacity: 0;
  height: 0;
  margin: 0;
  padding: 0;
  display: none;
}
#helpUsBecomeBetter .choose_option_txt {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  border: 2px solid #e0e0e0;
  background: #fff;
  color: #555;
  font-family: "Manrope", sans-serif !important;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;
}
#helpUsBecomeBetter input.custom_radio_btn:checked + .choose_option_txt {
  background: #017922;
  color: #fff;
  border: 2px solid #017922;
}
#helpUsBecomeBetter .submit_btn:disabled {
  border-radius: 30px;
  background: #a5a5a5;
  border: none;
  color: #fff;
  cursor: initial;
}
.questions_list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 12px;
}
.questions_label {
  cursor: pointer;
  border-radius: 8px;
  border: 2px solid #e0e0e0;
  background: #fff;
  padding: 12px;
}
.choose_option_box {
  position: absolute;
  display: inline-block;
  flex-shrink: 0;
  flex-grow: 0;
  width: 20px;
  left: 12px;
  height: 20px;
  border-radius: 4px;
  border: 2px solid #e0e0e0;
}
.choose_option_txt_quest {
  color: #555;
  font-family: "Manrope", sans-serif !important;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-left: 32px;
}
#helpUsBecomeBetter .descr_text_input {
  display: none;
  color: #555;
  font-family: "Manrope", sans-serif !important;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 12px 0 8px;
}
#helpUsBecomeBetter textarea.text_textarea {
  width: 100%;
  max-height: 94px;
  min-height: 94px;
  height: 100%;
  display: none;
  resize: none;
  color: #555;
  font-family: "Manrope", sans-serif !important;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  padding: 12px;
  border-width: inherit;
  border-radius: 8px;
  border: 2px solid #e0e0e0;
}
#helpUsBecomeBetter textarea.text_textarea:focus {
  outline: none;
  outline-offset: unset;
  border: 2px solid #027db8;
}
#helpUsBecomeBetter input.custom_radio_btn:checked + .questions_label {
  background: #f2fbff;
}
#helpUsBecomeBetter input.custom_radio_btn:checked + .questions_label .choose_option_box {
  border: 2px solid #027db8;
}
#helpUsBecomeBetter input.custom_radio_btn:checked + .questions_label .choose_option_box::after {
  content: "";
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 2px;
  background: #027db8;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#helpUsBecomeBetter input.custom_radio_btn:checked + .questions_label .choose_option_txt_quest {
  color: #272727;
}
#helpUsBecomeBetter input.custom_radio_btn:checked + .questions_label textarea.text_textarea {
  display: block;
}
#helpUsBecomeBetter input.custom_radio_btn:checked + .questions_label .descr_text_input {
  display: block;
}
html.open_var {
  overflow: hidden !important;
}
.content_popup .is_hidden,
.border_bottom_span,
.content_popup .btn_wrapp.mob_fixed {
  display: none;
}
@media (max-width: 768px) {
  /*your_trial_new_block */
  .your_trial_new_block {
    margin: 10px 20px 165px;
}
  .overlay_popup .container_popup {
    max-width: 350px;
    margin: auto auto 0;
    border-radius: 12px 12px 0 0;
  }
  .content_popup{
    padding: 32px 16px 16px;
        border-radius: 12px 12px 0 0;
        position: relative;
  }
  .overlay_popup .container_popup.mob_var {
    margin: auto auto 89px;
  }
  .overlay_popup.is_hidden .container_popup {
    transform: translateY(100%);
    transition: all 0.8s ease 0s;
  }
  .border_bottom_span {
    border-radius: 10px;
    background: var(--Green-main, #017922);
    position: absolute;
    left: 50%;
    width: 80px;
    height: 4px;
    top: 12px;
    z-index: 3;
    transform: translateX(-50%);
    display: block;
  }
  .overlay_popup .container_popup > .btn_close {
    display: none;
  }
  .content_popup .popup_title{
    font-size: 22px;
    line-height: 30px;
  }
  .content_popup .popup_descr{
    margin: 0 0 16px;
  }
  .popup_list_txt li + li {
    margin-top: 16px;
}
.content_popup .keep_my_trial_btn, .close_btn, #helpUsBecomeBetter .submit_btn{
      max-width: 179px;
}
#helpUsBecomeBetter .choose_option_txt{
  width: 23px;
    height: 23px;
}
#helpUsBecomeBetter ol > li + li {
    margin-top: 12px;
}
.questions_label{
  padding: 10px 12px;
}
#helpUsBecomeBetter form{
  position: inherit;
}
.help_us_become_better_form .btn_wrapp{
display: none;
}
.content_popup .btn_wrapp.mob_fixed{
  display: flex;
  background: #FFF;
box-shadow: 0px -2px 8px 0px rgba(0, 0, 0, 0.10);
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    margin: 0 -16px -16px;
    padding: 12px 16px;
}
.help_us_become_better_wrapp{
    overflow-y: scroll;
    max-height: 611px;
    padding-bottom: 70px;
}
}
@media (max-width: 376px) {
  .help_us_become_better_wrapp{
    max-height: 526px;
  }
}

      </style>
    `;

    let popUp = /*html */ `
        <div class="overlay_popup is_hidden first_step">
          <div class="container_popup">
            <span class="border_bottom_span"></span>
            <div class="btn_close">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20 20L4 4M20 4L4 20" stroke="#272727" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>
          </div>
        </div>
    `;

    let contentPopupHtml = /*html */ `
     <div class="content_popup" id="test">
    <div id="confirmTrialCancellation" class="parent_wrapp">
      <h2 class="popup_title">Confirm Trial Cancellation</h2>
      <h3 class="popup_subtitle">Are you sure you want to cancel your trial access to DoYogaWithMe?</h3>
      <p class="popup_descr">We'd love to know if there's anything we can improve or assist you with. If you're facing any issues or have feedback, please reach out to our support team at <a href="mailto:info@doyogawithme.com">info@doyogawithme.com.</a></p>
      <ul class="popup_list_txt">
        <li>
          <p>Your trial will end on <span class="after_trial_txt_popup">October 5th, 2023</span>.</p>
        </li>
        <li><p>Access to our premium content will be suspended.</p></li>
        <li><p>You won't be charged for the trial cancellation.</p></li>
      </ul>
      <div class="btn_wrapp">
        <p class="popup_cancel_trial_btn">Cancel Trial</p>
        <p class="keep_my_trial_btn">Keep My Trial</p>
      </div>
    </div>
    <div id="helpUsBecomeBetter" class="is_hidden parent_wrapp">
      <div class="help_us_become_better_wrapp">
        <h2 class="popup_title">Help Us Become Better</h2>
        <h3 class="popup_subtitle">Please answer a couple of questions to help us understand how we should improve our product</h3>
        <form action="#" class="help_us_become_better_form">
          <ol>
            <li>
              <span class="form_title">1. Overall Satisfaction:</span>
              <p class="form_descr">On a scale of 1 to 10, how satisfied were you with DoYogaWithMe during the trial?</p>
              <div class="grade_list">
                <label class="grade_label">
                  <input class="custom_radio_btn" type="radio" name="grade" value="1" />
                  <span class="choose_option_txt">1</span>
                </label>
                <label class="grade_label">
                  <input class="custom_radio_btn" type="radio" name="grade" value="2" />
                  <span class="choose_option_txt">2</span>
                </label>
                <label class="grade_label">
                  <input class="custom_radio_btn" type="radio" name="grade" value="3" />
                  <span class="choose_option_txt">3</span>
                </label>
                <label class="grade_label">
                  <input class="custom_radio_btn" type="radio" name="grade" value="4" />
                  <span class="choose_option_txt">4</span>
                </label>
                <label class="grade_label">
                  <input class="custom_radio_btn" type="radio" name="grade" value="5" />
                  <span class="choose_option_txt">5</span>
                </label>
                <label class="grade_label">
                  <input class="custom_radio_btn" type="radio" name="grade" value="6" />
                  <span class="choose_option_txt">6</span>
                </label>
                <label class="grade_label">
                  <input class="custom_radio_btn" type="radio" name="grade" value="7" />
                  <span class="choose_option_txt">7</span>
                </label>
                <label class="grade_label">
                  <input class="custom_radio_btn" type="radio" name="grade" value="8" />
                  <span class="choose_option_txt">8</span>
                </label>
                <label class="grade_label">
                  <input class="custom_radio_btn" type="radio" name="grade" value="9" />
                  <span class="choose_option_txt">9</span>
                </label>
                <label class="grade_label">
                  <input class="custom_radio_btn" type="radio" name="grade" value="10" />
                  <span class="choose_option_txt">10</span>
                </label>
              </div>
            </li>
            <li>
              <span class="form_title">2. Reason for Cancellation:</span>
              <p class="form_descr">Please select the primary reason for cancelling your trial:</p>
              <div class="questions_list">
                <input id="questions1" class="custom_radio_btn" type="radio" name="questions" value="contentQuality" />
                <label for="questions1" class="questions_label">
                  <span class="choose_option_box"></span>
                  <span class="choose_option_txt_quest">Content Quality</span>
                  <p class="descr_text_input">Please provide more details about what aspects of the content you found lacking or unsatisfactory.</p>
                   <textarea name="" id="questions1" class="text_textarea"></textarea>
                </label>
  
                <input  id="questions2" class="custom_radio_btn" type="radio" name="questions" value="pricing" />
                <label  for="questions2" class="questions_label">
                  <span class="choose_option_box"></span>
                  <span class="choose_option_txt_quest">Pricing</span>
                  <p class="descr_text_input">What pricing model or plan would have been more suitable for you?</p>
                   <textarea name="" id="questions2" class="text_textarea"></textarea>
                </label>
  
                <input  id="questions3" class="custom_radio_btn" type="radio" name="questions" value="personalReasons" />
                <label  for="questions3" class="questions_label">
                  <span class="choose_option_box"></span>
                  <span class="choose_option_txt_quest">Lack of Time / Personal reasons</span>
                  <p class="descr_text_input">Is there anything we could have done to make it more convenient for you to continue using our product?</p>
                  <textarea name="" id="questions3" class="text_textarea"></textarea>
                </label>
  
                <input  id="questions4" class="custom_radio_btn" type="radio" name="questions" value="technicalIssues" />
                <label  for="questions4" class="questions_label">
                  <span class="choose_option_box"></span>
                  <span class="choose_option_txt_quest">Technical Issues</span>
                  <p class="descr_text_input">If you experienced technical issues, please describe the problems you encountered and any suggestions for improvement.</p>
                   <textarea name="" id="questions4" class="text_textarea"></textarea>
                </label>
  
                <input  id="questions5" class="custom_radio_btn" type="radio" name="questions" value="foundABetterAlternative" />
                <label  for="questions5" class="questions_label">
                  <span class="choose_option_box"></span>
                  <span class="choose_option_txt_quest">Found a Better Alternative</span>
                  <p class="descr_text_input">If you found a better alternative, could you share the name or details of the alternative, and what features or benefits it offered that attracted you?</p>
                  <textarea name="" id="questions5" class="text_textarea"></textarea>
                </label>
  
                <input  id="questions6" class="custom_radio_btn" type="radio" name="questions" value="other" />
                <label  for="questions6" class="questions_label">
                  <span class="choose_option_box"></span>
                  <span class="choose_option_txt_quest">Other (please specify)</span>
                  <p class="descr_text_input">Please provide any comments or suggestions you have for us to enhance our product and service.</p>
                  <textarea name="" id="questions6" class="text_textarea"></textarea>
                </label>
              </div>
            </li>
          </ol>
          <div class="btn_wrapp">
            <p class="skip_btn">Skip</p>
            <button disabled class="submit_btn">Submit</button>
          </div>
        </form>
      </div>
      <div class="btn_wrapp mob_fixed">
            <p class="skip_btn">Skip</p>
            <button disabled class="submit_btn">Submit</button>
      </div>
    </div>
    <div id="yourTrialWasCancelled" class="is_hidden parent_wrapp">
      <h2 class="popup_title">Your Trial Was Cancelled</h2>
      <h3 class="popup_subtitle">Your Trial was successfully cancelled. You will still have full access till <span class="after_trial_txt_popup">October 5th, 2023</span>.</h3>
      <p class="close_btn">Close</p>
    </div>
     </div>
    `;

    document.head.insertAdjacentHTML("beforeend", cancelTrialStyle);
    document.body.insertAdjacentHTML("afterbegin", popUp);

    if (!document.querySelector(".your_trial_new_block") && document.querySelectorAll(".in_trial.active li")[0]?.textContent.match("Currently in trial")) {
      document.querySelector("#block-lotus-content").insertAdjacentHTML(
        "afterend",
        `<div class="your_trial_new_block">
          <h2 class="your_trial_new_title">Your Trial</h2>
          <p class="your_trial_new_txt">Your Trial gives you free 7-day access to our catalog of over 1000 yoga classes and challenges.</p>
          <div class="your_trial_new_descr">
            <p><b>Trial end date:</b> <span class="end_date_txt">October 5th, 2023</span></p>
            <p><b>Subscription after trial:</b> <span class="after_trial_txt">Yearly Subscription at $108.99 USD per year</span></p>
          </div>
          <span class="cancel_trial_btn">Cancel trial</span>
        </div>`
      );
    }

    if (document.querySelector(".your_trial_new_block")) {
      document.querySelector(".your_trial_new_block .end_date_txt").textContent = document.querySelectorAll(".in_trial.active li")[3].textContent.split("Invoice: ")[1];
      if (JSON.parse(document.querySelector('[data-drupal-selector="drupal-settings-json"]')?.textContent).dywm.gtm.customer_info.currentSubscription.subscriptionTypeKey === "Monthly Subscription") {
        document.querySelector(".your_trial_new_block .after_trial_txt").textContent = "Monthly Subscription at $13.99 USD per month";
      } else {
        document.querySelector(".your_trial_new_block .after_trial_txt").textContent = "Yearly Subscription at $108.99 USD per year";
      }

      if (document.querySelector(".cancel_trial_btn")) {
        document.querySelector(".cancel_trial_btn").addEventListener("click", (e) => {
          if (!e.target.getAttribute("data-test")) {
            pushDataLayer(["exp_trial_account_but_cencel", "Cancel trial", "Button", "Account page"]);
            document.querySelector(".cancel a")?.click();
          }
          e.target.setAttribute("data-test", "1");
          setTimeout(() => {
            if (e.target.getAttribute("data-test")) {
              e.target.removeAttribute("data-test");
            }
          }, 1000);
        });
      }
    }

    let subscriptionIdPage = setInterval(() => {
      if (window.location.pathname.match("subscription/id/")) {
        clearInterval(subscriptionIdPage);
        createConfirmTrialCancellationPopup();
      }
    }, 100);

    function createConfirmTrialCancellationPopup() {
      if (document.querySelector(".overlay_popup")) {
        console.log(`POPUP`);
        onOpenPopup();
        // if (document.querySelector(".cancel_trial_btn")) {
        //   document.querySelector(".cancel_trial_btn").addEventListener("click", (e) => {
        //     if (!e.target.getAttribute("data-test")) {
        //       console.log(`cancel_trial_btn openPopup`);
        //     }
        //     e.target.setAttribute("data-test", "1");
        //     setTimeout(() => {
        //       if (e.target.getAttribute("data-test")) {
        //         e.target.removeAttribute("data-test");
        //       }
        //     }, 1000);
        //   });
        // }

        function onOpenPopup() {
          document.querySelector("html").classList.add("open_var");
          document.querySelector(".overlay_popup").classList.remove("is_hidden");
          if (!document.querySelector(".overlay_popup .content_popup")) {
            document.querySelector(".overlay_popup .container_popup")?.insertAdjacentHTML("beforeend", contentPopupHtml);
          }

          document.querySelectorAll(".overlay_popup .btn_close").forEach((i) => {
            i.addEventListener("click", (e) => {
              if (e.currentTarget.closest(".overlay_popup").classList.contains("first_step")) {
                document.querySelector("#edit-cancel--3").click();
              }
              if (e.currentTarget.closest(".overlay_popup").classList.contains("last_step")) {
                window.location = "/";
              }
              // click on btn close popup
              // onClosePopup();
            });
          });
          document.querySelectorAll(".overlay_popup").forEach((i) => {
            i.addEventListener("click", (e) => {
              // click on overlay popup
              if (e.target.matches(".overlay_popup") && e.currentTarget.classList.contains("first_step")) {
                document.querySelector("#edit-cancel--3").click();
                // onClosePopup();
              }
              // if (e.target.matches(".overlay_popup") && e.currentTarget.classList.contains("last_step")) {
              //   window.location = "/";
              //   // onClosePopup();
              // }
            });
          });

          if (document.querySelector(".overlay_popup .content_popup")) {
            document.querySelectorAll(".after_trial_txt_popup").forEach((el) => {
              el.textContent = document.querySelector("#recurly-subscription-cancel-confirm-form > p > strong").textContent;
            });
            document.querySelectorAll("#helpUsBecomeBetter .grade_list input.custom_radio_btn").forEach((el) => {
              el.addEventListener("click", (e) => {
                if (!e.target.getAttribute("data-test")) {
                  pushDataLayer(["exp_trial_popup_but_rating", `Overall Satisfaction - ${el.getAttribute("value")}`, "Radio button", "Pop up did you now Help Us Become Better"]);
                }
                e.target.setAttribute("data-test", "1");
                setTimeout(() => {
                  if (e.target.getAttribute("data-test")) {
                    e.target.removeAttribute("data-test");
                  }
                }, 1000);
              });
            });
            document.querySelectorAll("#helpUsBecomeBetter .questions_list input.custom_radio_btn").forEach((el) => {
              el.addEventListener("click", (e) => {
                if (!e.target.getAttribute("data-test")) {
                  pushDataLayer(["exp_trial_popup_but_selection", `Reason for Cancellation - ${el.nextElementSibling.querySelector(".choose_option_txt_quest").textContent}`, "Radio button", "Pop up did you now Help Us Become Better"]);
                  el.nextElementSibling.querySelector("textarea").focus();
                }
                e.target.setAttribute("data-test", "1");
                setTimeout(() => {
                  if (e.target.getAttribute("data-test")) {
                    e.target.removeAttribute("data-test");
                  }
                }, 1000);
              });
            });
            document.querySelectorAll("#helpUsBecomeBetter .questions_list textarea").forEach((el) => {
              el.addEventListener("blur", (e) => {
                if (!e.target.getAttribute("data-test")) {
                  pushDataLayer(["exp_trial_popup_input_answer", `${el.value}`, "Input", "Pop up did you now Help Us Become Better"]);
                }
                e.target.setAttribute("data-test", "1");
                setTimeout(() => {
                  if (e.target.getAttribute("data-test")) {
                    e.target.removeAttribute("data-test");
                  }
                }, 1000);
              });
            });
            //Cancel Trial ->>>>> Confirm Trial Cancellation
            document.querySelectorAll(".content_popup .popup_cancel_trial_btn").forEach((i) => {
              i.addEventListener("click", (e) => {
                if (!e.target.getAttribute("data-test")) {
                  pushDataLayer(["exp_trial_popup_but_cancel", "Cancel Trial", "Button", "Pop up did you now Confirm Trial Cancellation"]);
                  i.closest("div.parent_wrapp").classList.add("is_hidden");
                  if (document.querySelector("#helpUsBecomeBetter").classList.contains("is_hidden")) {
                    document.querySelector("#helpUsBecomeBetter").classList.remove("is_hidden");
                  }
                  // ОТМЕНИТЬ ПОДПИСКУ
                }
                e.target.setAttribute("data-test", "1");
                setTimeout(() => {
                  if (e.target.getAttribute("data-test")) {
                    e.target.removeAttribute("data-test");
                  }
                }, 1000);
              });
            });
            // Keep My Trial ->>>>> Confirm Trial Cancellation
            document.querySelector(".content_popup .keep_my_trial_btn").addEventListener("click", (e) => {
              if (!e.target.getAttribute("data-test")) {
                // onClosePopup();
                pushDataLayer(["exp_trial_popup_but_keep", "Keep My Trial", "Button", "Pop up did you now Confirm Trial Cancellation"]);
                document.querySelector("#edit-cancel--3").click();
              }
              e.target.setAttribute("data-test", "1");
              setTimeout(() => {
                if (e.target.getAttribute("data-test")) {
                  e.target.removeAttribute("data-test");
                }
              }, 1000);
            });
            //submit_btn ->>>>>>>> Help Us Become Better
            document.querySelectorAll("#helpUsBecomeBetter .submit_btn").forEach((el) => {
              el.addEventListener("click", (e) => {
                if (!e.target.getAttribute("data-test")) {
                  e.preventDefault();
                  if (el.closest(".overlay_popup").classList.contains("first_step")) {
                    el.closest(".overlay_popup").classList.remove("first_step");
                    el.closest(".overlay_popup").classList.add("last_step");
                  }
                  let value1 = document.querySelector("#helpUsBecomeBetter .grade_list input.custom_radio_btn:checked").value;
                  let value2 = document.querySelector("#helpUsBecomeBetter .questions_list input.custom_radio_btn:checked + label .choose_option_txt_quest").textContent;
                  let value3 = document.querySelector("#helpUsBecomeBetter .questions_list input.custom_radio_btn:checked").nextElementSibling.querySelector("textarea").value;

                  pushDataLayer(["exp_trial_popup_but_submit", `Submit - ${value2} ${value3} - ${value1}", "Button`, "Pop up did you now Help Us Become Better"]);
                  if (window.innerWidth <= 768) {
                    document.querySelector(".overlay_popup .container_popup").classList.add("mob_var");
                  }
                  document.querySelector("#helpUsBecomeBetter").classList.add("is_hidden");
                  if (document.querySelector("#yourTrialWasCancelled").classList.contains("is_hidden")) {
                    document.querySelector("#yourTrialWasCancelled").classList.remove("is_hidden");
                  }

                  document.querySelector('input[value="Cancel at Renewal"]').click();
                  // ОТМЕНИТЬ ПОДПИСКУ
                }
                e.target.setAttribute("data-test", "1");
                setTimeout(() => {
                  if (e.target.getAttribute("data-test")) {
                    e.target.removeAttribute("data-test");
                  }
                }, 1000);
              });
            });
            // skip_btn ->>>>> Help Us Become Better
            document.querySelectorAll(".content_popup .skip_btn").forEach((i) => {
              i.addEventListener("click", (e) => {
                if (!e.target.getAttribute("data-test")) {
                  pushDataLayer(["exp_trial_popup_but_skip", "Skip", "Button", "Pop up did you now Help Us Become Better"]);
                  if (window.innerWidth <= 768) {
                    document.querySelector(".overlay_popup .container_popup").classList.add("mob_var");
                  }
                  i.closest("div.parent_wrapp").classList.add("is_hidden");
                  if (i.closest(".overlay_popup").classList.contains("first_step")) {
                    i.closest(".overlay_popup").classList.remove("first_step");
                    i.closest(".overlay_popup").classList.add("last_step");
                  }
                  if (document.querySelector("#yourTrialWasCancelled").classList.contains("is_hidden")) {
                    document.querySelector("#yourTrialWasCancelled").classList.remove("is_hidden");
                  }
                  document.querySelector('input[value="Cancel at Renewal"]').click();
                  // ОТМЕНИТЬ ПОДПИСКУ
                }
                e.target.setAttribute("data-test", "1");
                setTimeout(() => {
                  if (e.target.getAttribute("data-test")) {
                    e.target.removeAttribute("data-test");
                  }
                }, 1000);
              });
            });
            // close_btn ->>>>> Your Trial Was Cancelled
            document.querySelector("#yourTrialWasCancelled .close_btn").addEventListener("click", (e) => {
              if (!e.target.getAttribute("data-test")) {
                console.log(`close_btn ->>>>> Your Trial Was Cancelled`);
                pushDataLayer(["exp_trial_popup_but_close", "Close", "Button", "Pop up did you now Your Trial Was Cancelled"]);
                // onClosePopup();
                if (e.currentTarget.closest(".overlay_popup").classList.contains("last_step")) {
                  window.location = "/";
                }
              }
              e.target.setAttribute("data-test", "1");
              setTimeout(() => {
                if (e.target.getAttribute("data-test")) {
                  e.target.removeAttribute("data-test");
                }
              }, 1000);
            });
            // remove disabled ->>>> submit_btn
            let disabledBtn = setInterval(() => {
              if (document.querySelector("#helpUsBecomeBetter .questions_list input.custom_radio_btn:checked") && document.querySelector("#helpUsBecomeBetter .grade_list input.custom_radio_btn:checked")) {
                clearInterval(disabledBtn);
                document.querySelectorAll("#helpUsBecomeBetter .submit_btn").forEach((el) => {
                  el.disabled = false;
                });
              }
            }, 100);

            if (window.innerWidth <= 768) {
              let f = setInterval(() => {
                if (typeof $ === "function" && typeof $("#test").swipe === "function") {
                  clearInterval(f);
                  $("#test").swipe({
                    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                      if (direction === "down") {
                        onClosePopup();
                      }
                    },
                  });
                }
              }, 100);
            }
          }
        }

        function onClosePopup() {
          document.querySelectorAll(".overlay_popup").forEach((el) => {
            el.classList.add("is_hidden");
          });

          if (document.querySelector("html").classList.contains("open_var")) {
            document.querySelector("html").classList.remove("open_var");
          }
        }
      }
    }

    visibElem();
    function visibElem() {
      waitForElement("#confirmTrialCancellation").then((el) => {
        handleVisibility(el, ["exp_trial_popup_visib_focus", "{{focusTime}}", "Visibility", "Pop up did you now Confirm Trial Cancellation"]);
      });
      waitForElement("#yourTrialWasCancelled").then((el) => {
        handleVisibility(el, ["exp_trial_popupcancel_vis_focus", "{{focusTime}}", "Visibility", "Pop up did you now Your Trial Was Cancelled"]);
      });
    }

    function handleVisibility(el, eventParams) {
      let isVisible = false;
      let entryTime;
      const config = {
        root: null,
        threshold: 0, // Trigger when any part of the element is out of viewport
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!isVisible) {
              // The element has become visible
              isVisible = true;
              entryTime = new Date().getTime();
            }
          } else if (isVisible) {
            // The element is out of the viewport, calculate visibility duration
            isVisible = false;
            const exitTime = new Date().getTime();
            const visibilityDuration = exitTime - entryTime; // / 1000 Convert to seconds
            const roundedDuration = Math.round(visibilityDuration);

            if (roundedDuration) {
              const eventData = eventParams;
              eventData[1] = roundedDuration;
              pushDataLayer(eventData);
              observer.disconnect();
            }
          }
        });
      }, config);

      observer.observe(el);
    }

    function waitForElement(selector) {
      return new Promise((resolve) => {
        if (document.querySelector(selector)) {
          return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(() => {
          if (document.querySelector(selector)) {
            resolve(document.querySelector(selector));
            observer.disconnect();
          }
        });

        observer.observe(document.documentElement, {
          childList: true,
          subtree: true,
        });
      });
    }

    const record = setInterval(() => {
      if (typeof clarity === "function") {
        clearInterval(record);
        clarity("set", "exp_trial", "variant_1");
      }
    }, 200);
  }
}, 100);
