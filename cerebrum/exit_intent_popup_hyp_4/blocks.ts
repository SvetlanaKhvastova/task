import { svg, git } from './data'

export const verC = /* HTML */ `
  <div class="header_popup">
    <p>Special Offer</p>
  </div>

  <div class="body_popup">
    <div class="gift_info">
      <img src="" alt="" />
      <h2>Become the smartest person in the room</h2>
    </div>
    <div class="bgr_grey">
      <h2>Save <span class="accent_color_blue_second">50%</span> on your 7-day trial</h2>
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
          </div>
        </li>
      </ul>
    </div>
  </div>

  <div class="footer_popup">
    <div class="btn_start_trial_now">Start Trial Now ${svg.btnIcon}</div>
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
          </div>
        </li>
      </ul>
    </div>
  </div>

  <div class="footer_popup">
    <div class="btn_start_trial_now">Start Trial Now ${svg.btnIcon}</div>
  </div>
`

export const popup = /* HTML */ `
  <div class="new_popup_backdrop">
    <div class="new_popup">
      <button class="new_popup_close" data-popup="close">${svg.closeIcon}</button>
      <div class="new_popup_content ver_c">${verC}</div>
    </div>
  </div>
`
