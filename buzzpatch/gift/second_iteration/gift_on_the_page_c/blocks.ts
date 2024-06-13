import { svg, git } from './data'

const contentPopupVerB = (price: string) => {
  return /* HTML */ `
    <div class="new_popup_header">
      <div class="progress_bar"></div>
      <h2>
        ${svg.giftIcon}
        <p>Congratulations! You get <span>a FREE GIFT!</span></p>
      </h2>
    </div>
    <div class="new_popup_body">
      <div class="img_wrapper">
        <img src="${git}free_gift_img.png" alt="free gift img" />
        <p>LIMITED COLLECTION</p>
      </div>
      <div class="info_wrapper">
        <p><span class="sticker_price">${price}</span><span>FREE</span></p>
        <p>16 STICKERS</p>
        <p>added to your order</p>
      </div>
    </div>
    <div class="new_popup_footer">
      <div class="new_checkout_btn">Checkout ${svg.arrowWhiteIcon}</div>
    </div>
  `
}

const contentPopupVerC = /* HTML */ `
  <div class="new_popup_header">
    <h2>
      ${svg.giftIcon}
      <p>Congratulations! You get <span>a FREE GIFT!</span></p>
    </h2>
  </div>
  <div class="new_popup_body">
    <div class="img_wrapper">
      <img src="${git}free_gift_img_c.png" alt="free gift img" />
    </div>
    <div class="info_wrapper">
      <p>NATPAT Silly Socks</p>
      <div class="socks_radio_wrapper">
        <input value="43502214283308" type="radio" name="socks" id="smallSize" />
        <label for="smallSize"> small - 12*8cm </label>

        <input value="43502214316076" type="radio" name="socks" id="mediumSize" checked />
        <label for="mediumSize"> Medium - 14*9cm </label>

        <input value="43502214348844" type="radio" name="socks" id="largeSize" />
        <label for="largeSize"> large - 16*10cm </label>
      </div>
    </div>
  </div>
  <div class="new_popup_footer">
    <div class="new_checkout_btn">Add Gift to order and check out ${svg.arrowWhiteIcon}</div>
    <div class="new_no_thanks_btn">No, thanks. I do not want the free gift</div>
  </div>
`

const popup = (price: string) => {
  return /* HTML */ `
    <div class="new_popup_backdrop is_hidden">
      <div class="new_popup">
        <!-- <div class="new_popup_content version_b">${contentPopupVerB(price)}</div> -->
        <div class="new_popup_content version_c">${contentPopupVerC}</div>
      </div>
    </div>
  `
}

export { popup }
