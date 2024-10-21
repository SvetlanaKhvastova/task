import { svg, git, tooltipObj } from './data'

export const newFreeShippingBlock = /* HTML */ `
  <div class="new_free_shipping_block">
    <img
      src="https://www.natpat.com/cdn/shop/files/free-shipping-worldwide.svg?v=2160055944846624631"
      alt="new_free_shipping_block"
    />
  </div>
`

export const newSubscriptionBlock = (isActiveOnePack: boolean = false, uniqueId: string): string => {
  return /* HTML */ `
    <div class="new_subscription" id="subscription${uniqueId}">
      <div class="new_subscription_block ${isActiveOnePack ? 'is_disabled' : ''}">
        <div class="plan_selection">
          <input
            type="radio"
            name="plan${uniqueId}"
            value="oneTime"
            id="oneTime${uniqueId}"
            ${isActiveOnePack ? 'checked' : ''}
          />
          <label for="oneTime${uniqueId}" class="one_time_variant"> One-time</label>

          <input
            type="radio"
            name="plan${uniqueId}"
            value="subscribeSave"
            id="subscribeSave${uniqueId}"
            ${!isActiveOnePack ? 'checked' : ''}
          />
          <label for="subscribeSave${uniqueId}" class="subscribe_save_variant"> Subscribe & Save</label>
        </div>
        <div class="plan_comment">
          A choice that saves both time and money ${svg.orangeArrowIcon}<span
            data-tooltip
            data-title="${tooltipObj.subscribe}"
            >${svg.tooltipIcon}</span
          >
        </div>
        <div class="is_active_one_pack">
          Select 2, 3 or 4 packs to subscribe with an extra of 15% off — save time and money ${svg.orangeArrowIcon}<span
            data-tooltip
            data-title="${tooltipObj.subscribe}"
            >${svg.tooltipIcon}</span
          >
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

export const newPriceWrapper = (regPrice: string, salePrice: string, percentOff: string): string => {
  return /* HTML */ `
    <div class="new_price_wrapper">
      <div class="new_reg_price">${regPrice}</div>
      <div class="new_sale_price">${salePrice}</div>
      <div class="percent_off">${svg.percentIcon} ${percentOff}% OFF</div>
    </div>
  `
}

export const headerSlideInCart = /* HTML */ `
  <div class="header_slide_in_cart">
    <h2>select <span class="active_title">package</span></h2>
    <p class="step_wrapper"><span class="active_step">1</span>/2</p>
  </div>
`
export const nextStepBtnSlideInCart = /* HTML */ `<div class="next_step_btn">Next step 1/2</div> `

export const bodySlideInCart = /* HTML */ `
  <div class="body_slide_in_cart">
    <div class="main_title_wrapper">
      <p class="main_title">SELECTED Package</p>
      <div data-btnBack class="change_btn">Change</div>
    </div>
  </div>
`

export const infoWrapperSlideInCart = (
  regPrice: string,
  salePrice: string,
  imgSrc: string,
  packPrice: string,
  pcs: string
): string => {
  return /* HTML */ `
    <div class="info_wrapper">
      <div class="details_wrapper">
        <div class="details_img_wrapper">
          <img src="${imgSrc}" alt="packs" />
        </div>
        <div class="details_quantity_wrapper">
          <p class="details_price_for_pack">${packPrice}</p>
          <p class="details_quantity">${pcs}</p>
        </div>
      </div>
      <div class="price_wrapper">
        <span class="new_reg_price">${regPrice}</span>
        <span class="new_sale_price">${salePrice}</span>
      </div>
    </div>
  `
}
