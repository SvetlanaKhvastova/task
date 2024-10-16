import { svg, git, tooltipObj } from './data'

export const newSubscriptionBlock = (isActiveOnePack: boolean = false) => {
  return /* HTML */ `
    <div class="new_subscription">
      <div class="new_subscription_block ${isActiveOnePack ? 'is_disabled' : ''}">
        <div class="plan_selection">
          <input type="radio" name="plan" value="oneTime" id="oneTime" ${isActiveOnePack ? 'checked' : ''} />
          <label for="oneTime" class="one_time_variant"> One-time</label>

          <input
            type="radio"
            name="plan"
            value="subscribeSave"
            id="subscribeSave"
            ${!isActiveOnePack ? 'checked' : ''}
          />
          <label for="subscribeSave" class="subscribe_save_variant"> Subscribe & Save</label>
        </div>
        <div class="plan_comment">
          A choice that saves both time and money ${svg.orangeArrowIcon}<span
            data-tooltip
            data-title="${tooltipObj.subscribe}"
            >${svg.tooltipIcon}</span
          >
        </div>
        <div class="is_active_one_pack">
          <p>Select 2, 3 or 4 packs to subscribe with an extra of 15% off — save time and money</p>
        </div>
        <ul class="plan_details  ${isActiveOnePack ? 'one_time_checked' : ''}">
          <li>100% Money-Back Guarantee</li>
          <li>Free, Fast Shipping Worldwide</li>
          <li>Extra 15% Off First and Future Orders</li>
          <li>Priority Customer Service</li>
          <li>5 Day Reminder - Cancel Anytime</li>
        </ul>
      </div>
    </div>
  `
}

export const customDropdown = /* HTML */ `
  <div class="custom_dropdown">
    <div class="dropdown_toggle">Select an option</div>
    <div class="dropdown_menu"></div>
  </div>
`

export const newPriceWrapper = (regPrice: string, salePrice: string, percentOff: string) => {
  return /* HTML */ `
    <div class="new_price_wrapper">
      <div class="new_reg_price">${regPrice}</div>
      <div class="new_sale_price">${salePrice}</div>
      <div class="percent_off">${svg.percentIcon} ${percentOff}% OFF</div>
    </div>
  `
}
