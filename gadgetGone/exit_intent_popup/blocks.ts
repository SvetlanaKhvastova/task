import { svg, git } from './data'

export const contentPopup = /* HTML */ `
  <div class="exit-intent__popup">
    <div class="logo_wrapper">
      <a href="https://www.gadgetgone.com/">${svg.logoIcon}</a>
      <p>Get paid as you like. In no time!</p>
      <img src="${git}logo_collection_desktop.png" alt="logo collection" />
    </div>
    <div class="information_wrapper">
      <h2>Get up to $35 Extra</h2>
      <h3>to the Offer Value</h3>
      <div class="counter_wrapper">
        <h4 class="counter_title">
          ${window.innerWidth >= 768 ? 'If you complete your deal within:' : 'When you submit your offer in:'}
        </h4>
        <div id="counter">
          <div class="time_block">
            <div class="gradient_border">
              <div class="time_txt minutes_tens">1</div>
            </div>
            <div class="gradient_border">
              <div class="time_txt minutes_ones">8</div>
            </div>
            <div class="counter_label">mins</div>
          </div>
          <div class="time_separator">:</div>
          <div class="time_block">
            <div class="gradient_border">
              <div class="time_txt seconds_tens">0</div>
            </div>
            <div class="gradient_border">
              <div class="time_txt seconds_ones">0</div>
            </div>
            <div class="counter_label">secs</div>
          </div>
        </div>
      </div>
      <div class="discount_code_wrapper">
        <span class="discount_code_txt" data-discount>GG35</span>
        <p class="discount_code_descr">will be applied instantly</p>
      </div>
      <p>
        First-time submissions only. Get a $35 bonus on offers over $350; 10% extra on lower-value offers. Cannot be
        combined with other coupons.
      </p>
      <a class="complete_your_trade_in_btn" href="https://www.gadgetgone.com/?coupon-code=GG35&sc-page=checkout"
        >Complete Your Trade-In</a
      >
      <span class="no_thanks_btn" data-popup="close">No, thanks</span>
      ${window.innerWidth >= 768 ? `` : `<img src="${git}logo_collection_mobile.png" alt="logo collection"/>`}
    </div>
  </div>
`

export const popup = /* HTML */ `
  <div class="new-popup-backdrop is-hidden">
    <div class="new-popup">
      <button class="new-popup__close" data-popup="close">${svg.closeIcon}</button>
      <div class="new-popup__content"></div>
    </div>
  </div>
`
