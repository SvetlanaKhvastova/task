import { svg, git, bundlesInfo, tooltipObj } from './data'

export const stockUpTitle = /* HTML */ `<h2 class="stock_up_title">Stock up & Save!</h2>`

export const budleHtmlVerB = (price: string) => {
  return /* HTML */ `
    <div class="new_bundle_pack">
      <h3 class="new_bundle_main_title">Bundle & save</h3>
      <div class="packs">
        <span class="bundle_off">60 % OFF</span>
        <input
          type="radio"
          name="price"
          id="bundle"
          value="${bundlesInfo.ver_b.id}"
          data-tick-id="${bundlesInfo.ver_b.id}"
        />
        <label for="bundle">
          <div class="new_bundle_wrapper" id="${bundlesInfo.ver_b.id}">
            <div class="img_wrapper">
              <img src="${bundlesInfo.ver_b.img}" alt="${bundlesInfo.ver_b.title}" />
            </div>
            <div class="info_wrapper">
              <h2 class="new_bundle_title">${bundlesInfo.ver_b.title}</h2>
              <p class="new_bundle_description">${bundlesInfo.ver_b.description}</p>
              <span class="new_bundle_price">${price} Each item</span>
            </div>
          </div>
        </label>
        ${tooltipBlockVerB}
      </div>
    </div>
  `
}

export const tooltipBlockVerB = /* HTML */ `
  <span class="new_bundle_tooltip" data-tooltip data-title="${tooltipObj.ver_b}">${svg.tooltipIcon}</span>
`

export const guaranteeBlock = /* HTML */ `
  <div class="guarantee_block">
    <ul>
      <li>
        ${svg.moneyBackGuaranteeIcon}
        <span>Money-Back Guarantee</span>
      </li>
      <li>
        <img src="${git}secure_checkout_icon.svg" alt="secure checkout icon" />
        <span>Secure Checkout</span>
      </li>
    </ul>
  </div>
`
