import { svg, git, tooltipObj } from './data'

// Cart page:
export const freeShippingBlock = /* HTML */ `
  <div class="free_shipping_block">
    ${svg.tickCircleIcon}
    <p>Congtatulations! You get <span class="accent_color_green">Free shipping</span></p>
  </div>
`

export const flavorGuaranteeBlock = /* HTML */ `
  <div class="flavor_guarantee_block">
    <div class="img_wrapper">
      <img src="${git}flavor_guarantee_img.png" alt="child" />
    </div>
    <div class="info_wrapper">
      <h3>Flavor Guarantee</h3>
      <p>
        <span>Not happy with a flavor?</span>
        <span
          >Try 3 new ones <b>for FREE.</b>
          <span data-tooltip data-title="${tooltipObj.flavorGuarantee}" class="learn_more_btn">Learn more</span></span
        >
      </p>
    </div>
  </div>
`

export const stickyBlock = /* HTML */ `
  <div class="sticky_block">
    <div class="total_box"></div>
    <button class="proceed_to_checkout_btn">Proceed to checkout ${svg.arrowWhiteicon}</button>
  </div>
`

// Checkout page:
export const orderSummaryBlock = /* HTML */ `
  <div class="order_summary_block">
    <ul class="products_list"></ul>
  </div>
`
export const productItem = (
  img: string,
  title: string,
  itemsCount: string,
  cadence: string,
  price: string,
  subscribeBoxPercent: number
) => {
  return /* HTML */ `
    <li class="products_item">
      <div class="img_wrapper">
        <img src=${img} alt="photo" />
      </div>
      <div class="item_info">
        <div>
          <h3>${title}</h3>
          <div class="quantity_packs_info">
            <span class="items_count">${itemsCount}</span>
            <span>|</span>
            <span class="cadence_txt">${cadence}</span>
          </div>
          ${subscribeBoxPercent === 15 ? `<div class="subscribe_txt">Subscribe & Save 15%</div>` : ''}
        </div>
        <div class="price_wrapper">
          ${subscribeBoxPercent === 15
            ? `<span class="price_txt green_color">${price}</span>`
            : `<span class="price_txt">${price}</span>`}
        </div>
      </div>
    </li>
  `
}

export const payNowTxtBlock = /* HTML */ `
  <div class="pay_now_txt_block">
    <p>
      By clicking "Pay now", you agree to our
      <a class="terms_sale_link" href="https://cerebelly.com/terms-sale" target="_blank" rel="noopener noreferrer"
        >Terms and Conditions</a
      >
      and
      <a class="privacy_link" href="https://cerebelly.com/privacy" target="_blank" rel="noopener noreferrer"
        >Privacy Policy</a
      >.
    </p>
  </div>
`

export const newShippingBlock = (standartShipping: string, expeditedShipping: string) => {
  return /* HTML */ `
    <div class="new_shipping_block">
      <input class="custom_radio" value="" type="radio" name="shipping" id="standartShippingVar" />
      <label for="standartShippingVar">
        <div class="radio_info">
          <div class="radio_txt_box">
            <span class="new_custom_radio"></span>
            <span class="radio_txt">Standart shipping</span>
            <span class="shipping_txt accent_color_green">${standartShipping}</span>
          </div>
        </div>
        <div class="radio_days">
          <span>5-7 days</span>
          <img src="${git}shipping_img.png" alt="shipping img" />
        </div>
      </label>

      <input class="custom_radio" value="" type="radio" name="shipping" id="expeditedShippingVar" />
      <label for="expeditedShippingVar">
        <div class="radio_info">
          <div class="radio_txt_box">
            <span class="new_custom_radio"></span>
            <span class="radio_txt">Expedited shipping</span>
            <span class="shipping_txt">${expeditedShipping}</span>
          </div>
        </div>
        <div class="radio_days">
          <span>1-3 days</span>
          <img src="${git}shipping_img.png" alt="shipping img" />
        </div>
      </label>
    </div>
  `
}

export const newShippingTxtBlock = (price: string, name: string, className: string) => {
  return /* HTML */ `
    <div class="new_shipping_txt_block">
      <span class="txt_name">${name}</span>
      <span class="txt_price ${className}">${price}</span>
    </div>
  `
}
