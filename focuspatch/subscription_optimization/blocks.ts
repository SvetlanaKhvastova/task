import { svg, git, tooltipObj, packagesData } from './data'

export const newTitleBlockPackage = /* HTML */ `
  <div class="new_title_block_package">
    <p>Focus In Just One Sticker</p>
    <h2>Choose Your Package</h2>
  </div>
`

export const newFreeShippingBlockPackage = /* HTML */ `
  <div class="new_free_shipping_block_package">
    <div class="free_shipping_icon">${svg.freeShippingIcon}</div>
    <p><b>FREE Shipping</b> Worldwide</p>
  </div>
`

export const newBlockPackages = () => {
  return /* HTML */ `
    <div class="focuspatch_packs">
      <ul class="focuspatch_packs_list">
        ${packagesData.packages
          .map(
            pack => /* HTML */ `
              <li
                class="focuspatch_packs_item ${pack.id === 3 ? 'active' : ''}"
                data-pack="${pack.packs}"
                data-id="${pack.id}"
              >
                <div class="focuspatch_packs_prices">
                  <div class="focuspatch_packs_image">
                    <img src="${git}${pack.image}" class="ls-is-cached lazyloaded" />
                  </div>
                  <div class="focuspatch_packs_info">
                    <p class="focuspatch_packs_price_per_pack">$${pack.pricePerPack}/Pack</p>
                    <p class="focuspatch_packs_pcs_wrapper">
                      ${pack.packs}
                      <span>|</span> <span class="number_patches">${pack.totalPatches}</span>
                    </p>
                    <div class="focuspatch_packs_reg_final_prices">
                      <p class="focuspatch_packs_reg_price">$<span class="reg_price_txt">${pack.regularPrice}</span></p>
                      <p class="focuspatch_packs_final_price">
                        $<span class="final_price_txt">${pack.finalPrice}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="focuspatch_packs_banners">
                  <p class="save_banner">
                    Save
                    <span class="save_banner_percent">${pack.savePercent}%</span>
                  </p>
                  ${pack.bestDeal ? '<p class="best_deal_banner">Best Deal</p>' : ''}
                  ${pack.topSeller ? '<p class="top_seller_banner">Top seller</p>' : ''}
                </div>
              </li>
            `
          )
          .join('')}
      </ul>
    </div>
  `
}

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
    <div class="new_price_wrapper_package">
      <div class="new_reg_price">${regPrice}</div>
      <div class="new_final_price">${salePrice}</div>
      <div class="percent_off">${svg.percentIcon} ${percentOff} OFF</div>
    </div>
  `
}

export const proceedToCheckoutBtn = /* HTML */ `
  <div class="new_proceed_to_checkout_wrapper">
    <div class="new_proceed_to_checkout_btn">PROCEED TO CHECKOUT</div>
  </div>
`

export const newGuaranteeBlockPackage = /* HTML */ `
  <div class="new_guarantee_block_package">
    <img src="${git}logos.png" alt="free shipping guarantee TrustScore" />
  </div>
`

export const newBlockPackage = () => {
  return /* HTML */ `
    <div id="newBlockPackage">
      ${newTitleBlockPackage} ${newFreeShippingBlockPackage} ${proceedToCheckoutBtn} ${newGuaranteeBlockPackage}
    </div>
  `
}

export const headerSlideInPackage = /* HTML */ `
  <div class="header_slide_in_package">
    <h2>select <span class="active_title">package</span></h2>
    <p class="step_wrapper"><span class="active_step">1</span>/2</p>
  </div>
`

export const footerSlideInPackage = /* HTML */ `
  <div class="footer_slide_in_package">${proceedToCheckoutBtn} ${newGuaranteeBlockPackage}</div>
`

export const slideInPackage = /* HTML */ `
  <div class="crs_slide_in">
    <div class="crs_slide_in_container">
      <div class="close">${svg.closeIconPopup}</div>
      <div class="crs_slide_in_content">${headerSlideInPackage}${newBlockPackages()}${footerSlideInPackage}</div>
    </div>
  </div>
`
