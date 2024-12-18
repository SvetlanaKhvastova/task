import { svg, git, tooltipObj } from './data'

export const newSubscriptionBlock = /* HTML */ `
  <div id="newSubscriptionBlock">
    <div class="new_subscription_block">
      <div class="plan_selection">
        <input type="radio" name="plan" value="oneTime" id="oneTime" />
        <label for="oneTime" class="one_time_variant"> One-time</label>

        <input type="radio" name="plan" value="subscribeSave" id="subscribeSave" checked />
        <label for="subscribeSave" class="subscribe_save_variant"> Subscribe & Save</label>
      </div>
      <div class="plan_comment">
        A choice that saves both time and money ${svg.orangeArrowIcon}<span
          data-tooltip
          data-title="${tooltipObj.subscribe}"
          >${svg.tooltipIcon}</span
        >
      </div>
      <ul class="plan_details">
        <li>100% Money-Back Guarantee</li>
        <li>Priority Customer Service</li>
        <li>Free, Fast Shipping Worldwide</li>
        <li>5 Day Reminder - Cancel Anytime</li>
        <li>Extra 15% Off First and Future Orders</li>
      </ul>
    </div>
  </div>
`

export const customDropdown = /* HTML */ `
  <div class="custom_dropdown">
    <button class="dropdown_toggle">Select an option</button>
    <div class="dropdown_menu"></div>
  </div>
`

export const stickyBlock = /* HTML */ `
  <div class="sticky_block">
    <div class="choose_your_product_btn">Choose your product</div>
  </div>
`
