import { svg, git } from './data'

export const radioBtnsBlock = /* HTML */ `
  <div class="radio_btns_block">
    <ul class="new_list_txt">
      <li>
        ${svg.checkIcon}
        <p>Get your precise IQ score with our scientifically-validated assessment</p>
      </li>
      <li>
        ${svg.checkIcon}
        <p>Know where you stand compared to the general population</p>
      </li>
      <li>
        ${svg.checkIcon}
        <p>Identify your cognitive strengths and weaknesses</p>
      </li>
      <li>
        ${svg.checkIcon}
        <p>Evidence-based personalized training to boost IQ by up to 37% in 4 weeks</p>
      </li>
    </ul>
    <!-- <div class="radio_btns_wrapper ver_a">
      <div class="radio_btn">
        <input type="radio" id="radio_btn_1" name="radio_btn" value="1" />
        <label for="radio_btn_1">
          <div class="radio_title_wrapper">
            <p class="radio_name">3-Day Trial</p>
            <p class="radio_description">then only <span>$2.85/day</span> billed weekly</p>
          </div>
          <div class="radio_price_wrapper">
            <p class="radio_price"><span class="old_price">$8.99</span><span class="new_price">$0.99</span></p>
            <p class="savings">You save 85%</p>
          </div>
        </label>
      </div>
      <div class="radio_btn">
        <input type="radio" id="radio_btn_2" name="radio_btn" value="2" checked />
        <label for="radio_btn_2">
          <span class="absolute_txt">${svg.fireIcon} Best Deal</span>
          <div class="radio_title_wrapper">
            <p class="radio_name">7-Day Trial</p>
            <p class="radio_description">then only <span>$2.85/day</span> billed weekly</p>
          </div>
          <div class="radio_price_wrapper">
            <p class="radio_price"><span class="old_price">$14.99</span><span class="new_price">$1.49</span></p>
            <p class="savings">You save 85%</p>
          </div>
        </label>
      </div>
    </div> -->
    <!-- <div class="radio_btns_wrapper ver_b">
      <div class="radio_btn">
        <input type="radio" id="radio_btn_1" name="radio_btn" value="1" />
        <label for="radio_btn_1">
          <div class="radio_title_wrapper">
            <p class="radio_name">Weekly + <span class="accent_color_blue">7-Day Trial</span></p>
            <p class="radio_description">just for $0.99</p>
          </div>
          <div class="radio_price_wrapper">
            <p class="radio_price"><span class="then_txt">then</span><span class="new_price">$2.85/day</span></p>
            <p class="savings">Billed monthly</p>
          </div>
        </label>
      </div>
      <div class="radio_btn">
        <input type="radio" id="radio_btn_2" name="radio_btn" value="2" checked />
        <label for="radio_btn_2">
          <span class="absolute_txt">${svg.percentIcon} Save 55%</span>
          <div class="radio_title_wrapper">
            <p class="radio_name">Weekly + <span class="accent_color_blue">7-Day Trial</span></p>
            <p class="radio_description">just for $0.99</p>
          </div>
          <div class="radio_price_wrapper">
            <p class="radio_price"><span class="then_txt">then</span><span class="new_price">$1.29/day</span></p>
            <p class="savings">Billed monthly</p>
          </div>
        </label>
      </div>
    </div> -->
    <div class="radio_btns_wrapper ver_c">
      <div class="radio_btn">
        <input type="radio" id="radio_btn_1" name="radio_btn" value="1" />
        <label for="radio_btn_1">
          <div class="radio_title_wrapper">
            <p class="radio_name">One-Time Purchase</p>
            <p class="radio_description">Lifetime access</p>
          </div>
          <div class="radio_price_wrapper">
            <p class="radio_price"><span class="new_price">$99.99</span></p>
          </div>
        </label>
      </div>
      <div class="radio_btn">
        <input type="radio" id="radio_btn_2" name="radio_btn" value="2" checked />
        <label for="radio_btn_2">
          <span class="absolute_txt">${svg.percentIcon} Special offer</span>
          <div class="radio_title_wrapper">
            <p class="radio_name">7-Day Trial</p>
            <p class="radio_description">then only $2.85/day paid weekly</p>
          </div>
          <div class="radio_price_wrapper">
            <p class="radio_price"><span class="old_price">$14.99</span><span class="new_price">$0.99 </span></p>
            <p class="savings">You save 85%</p>
          </div>
        </label>
      </div>
    </div>
    <div class="btn_start_trial_now">Start Trial Now ${svg.arrowRightIcon}</div>
  </div>
`
export const newCheckoutBlock = /* HTML */ `
  <div class="new_checkout_block">
    <div class="checkout_header">
      <span class="checkout_back_btn">${svg.arrowLeftIcon} Back</span>
      <h2 class="checkout_title">Checkout</h2>
    </div>
    <div class="checkout_total">
      <div class="checkout_total_description">
        <p class="total_title">Total due today:</p>
        <p class="trial_info">Your 7-day trial will cost only $0.99. Afterwards, it will be $19.99/week.</p>
      </div>
      <div class="checkout_pricing">
        <p class="pricing">
          <span class="old_price">$14.99</span>
          <span class="new_price">$1.49</span>
        </p>
        <p class="savings">You save 85%</p>
      </div>
    </div>
    <ul class="benefits_list">
      <li>
        ${svg.guaranteeIcon}
        <div>
          <p>30-Day Money-Back Guarantee</p>
          <span>We will remind you 2 days before your trialends</span>
        </div>
      </li>
      <li>
        ${svg.calendarIcon}
        <div>
          <p>No commitment.</p>
          <span>Cancel anytime.</span>
        </div>
      </li>
    </ul>
    <h3 class="title_payment_btns">Choose your payment method</h3>
  </div>
`
export const popup = /* HTML */ `
  <div id="popup" class="new_popup_backdrop is_hidden">
    <div class="new_popup">
      <button class="new_popup_close" data-popup="close"></button>
      <div class="new_popup_content"></div>
    </div>
  </div>
`
