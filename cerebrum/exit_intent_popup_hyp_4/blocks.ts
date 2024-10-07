import { svg, git } from './data'

export const newCheckoutBlock = /* HTML */ `
  <div class="new_checkout_block">
    <div class="bgr_grey_block">
      <h2>Save <span class="accent_color_blue_second">50%</span> on your 7-day trial</h2>
      <div class="additional_discount_title">
        <p>${svg.arrowCheckedIcon} Additional discount applied:</p>
        <p><b>-50%</b></p>
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
  </div>
`

export const verB = /* HTML */ `
  <div class="header_popup">
    <p>Special Offer</p>
  </div>

  <div class="body_popup">
    <div class="gift_info">
      <img src="${git}steve_jobs_photo_for_popup.webp" alt="Steve Jobs" />
      <h2>Become <span class="accent_color_blue">the smartest</span> person in the room</h2>
    </div>
    ${newCheckoutBlock}
  </div>
`

export const verC = /* HTML */ `
  <div class="header_popup">
    <p>Special Offer</p>
  </div>

  <div class="body_popup">
    <div class="gift_info">
      <img src="${git}steve_jobs_photo_for_popup.webp" alt="Steve Jobs" />
      <h2>Become <span class="accent_color_blue">the smartest</span> person in the room</h2>
    </div>
    ${innerWidth < 768 ? ` <h2>Save <span class="accent_color_blue_second">50%</span> on your 7-day trial</h2>` : ''}
    <div class="bgr_grey">
      ${innerWidth >= 768 ? ` <h2>Save <span class="accent_color_blue_second">50%</span> on your 7-day trial</h2>` : ''}

      <h3>Why You Can Trust <span class="accent_color_blue">Cerebrum IQ</span></h3>
      <ul class="list_info">
        <li class="item_info">
          ${svg.firstIconItem}
          <div>
            <h3>Validated IQ Test</h3>
            <p>
              Our assessment is based on the Stanford-Binet Intelligence Scale, the gold standard in IQ testing since
              1916.
            </p>
          </div>
        </li>
        <li class="item_info">
          ${svg.secondIconItem}
          <div>
            <h3>Comprehensive Report</h3>
            <p>
              Your personalized report is generated using the widely accepted <br />
              Cattell-Horn-Carroll (CHC) theory of cognitive abilities.
            </p>
          </div>
        </li>
        <li class="item_info">
          ${svg.thirdIconItem}
          <div>
            <h3>Neuroscience-Backed Training</h3>
            <p>
              Our cognitive training programs are grounded in the latest neuroscience research, proven to enhance
              cognitive function and boost IQ scores.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <div class="footer_popup">
    ${innerWidth >= 768
      ? `<div class="btn_start_trial_now is_desk">Save 50% today ${svg.btnIcon}</div>`
      : `<div class="btn_start_trial_now is_mob">Save 50% today ${svg.arroArrowIcon}</div>`}
  </div>
`

export const verD = /* HTML */ `
  <div class="header_popup">
    <p>Special Offer</p>
  </div>

  <div class="body_popup">
    <div class="gift_info">
      ${svg.giftIcon}
      <p>We have a <span class="accent_color_blue">gift</span> for you!</p>
      <h2>Save <span class="accent_color_blue_second">50%</span> on your 7-day trial</h2>
    </div>
    <div class="bgr_grey">
      <h3>Why You Can Trust <span class="accent_color_blue">Cerebrum IQ</span></h3>
      <ul class="list_info">
        <li class="item_info">
          ${svg.firstIconItem}
          <div>
            <h3>Validated IQ Test</h3>
            <p>
              Our assessment is based on the Stanford-Binet Intelligence Scale, the gold standard in IQ testing since
              1916.
            </p>
          </div>
        </li>
        <li class="item_info">
          ${svg.secondIconItem}
          <div>
            <h3>Comprehensive Report</h3>
            <p>
              Your personalized report is generated using the widely accepted <br />
              Cattell-Horn-Carroll (CHC) theory of cognitive abilities.
            </p>
          </div>
        </li>
        <li class="item_info">
          ${svg.thirdIconItem}
          <div>
            <h3>Neuroscience-Backed Training</h3>
            <p>
              Our cognitive training programs are grounded in the latest neuroscience research, proven to enhance
              cognitive function and boost IQ scores.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <div class="footer_popup">
    ${innerWidth > 768
      ? `<div class="btn_start_trial_now is_desk">Save 50% today ${svg.btnIcon}</div>`
      : `<div class="btn_start_trial_now is_mob">Save 50% today ${svg.arroArrowIcon}</div>`}
  </div>
`

export const popup = /* HTML */ `
  <div class="new_popup_backdrop">
    <div class="new_popup">
      <button class="new_popup_close" data-popup="close">${svg.closeIcon}</button>
      <div class="new_popup_content ver_b">${verB}</div>
      <!-- <div class="new_popup_content ver_c">${verC}</div> -->
      <!-- <div class="new_popup_content ver_d">${verD}</div> -->
    </div>
  </div>
`
