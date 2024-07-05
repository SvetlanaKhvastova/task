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
    <div class="total_box">
      <p>Order total</p>
      <span>$11.98</span>
    </div>
    <button class="proceed_to_checkout_btn">Proceed to checkout</button>
  </div>
`

// Checkout page:
