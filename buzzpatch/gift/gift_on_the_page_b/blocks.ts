import { svg, git } from './data'

const contentPopup = /* HTML */ `
  <div class="new_popup_header">
    <div class="progress_bar"></div>
    <h2>
      ${svg.giftIcon}
      <p>Congratulations! You get <span>FREE GIFT!</span></p>
    </h2>
  </div>
  <div class="new_popup_body">
    <div class="img_wrapper">
      <img src="${git}free_gift_img.png" alt="free gift img" />
      <p>LIMITED COLLECTION</p>
    </div>
    <div class="info_wrapper">
      <p><span>FREE</span><span class="sticker_price">$9.99</span></p>
      <p>16 STICKERS</p>
      <p>added to your order</p>
    </div>
  </div>
  <div class="new_popup_footer">
    <div class="new_checkout_btn">Checkout ${svg.arrowWhiteIcon}</div>
  </div>
`

const popup = /* HTML */ `
  <div class="new_popup_backdrop is_hidden">
    <div class="new_popup">
      <div class="new_popup_content">${contentPopup}</div>
    </div>
  </div>
`

export { popup }
