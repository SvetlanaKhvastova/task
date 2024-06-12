import { svg, git } from './data'

const contentPopupVerB = /* HTML */ `
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
      <p><span class="sticker_price">$9.99</span><span>FREE</span></p>
      <p>16 STICKERS</p>
      <p>added to your order</p>
    </div>
  </div>
  <div class="new_popup_footer">
    <div class="new_checkout_btn">Checkout ${svg.arrowWhiteIcon}</div>
  </div>
`

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
        <input value="39542857695276" type="radio" name="socks" id="smallSize" />
        <label for="smallSize"> small - 12*8cm </label>

        <input value="39542857728044" type="radio" name="socks" id="mediumSize" checked />
        <label for="mediumSize"> Medium - 14*9cm </label>

        <input value="39542857760812" type="radio" name="socks" id="largeSize" />
        <label for="largeSize"> large - 16*10cm </label>
      </div>
    </div>
  </div>
  <div class="new_popup_footer">
    <div class="new_checkout_btn">Add Gift to order and check out ${svg.arrowWhiteIcon}</div>
    <div class="new_no_thanks_btn" data-popup="close">No, thanks. I do not want the free gift</div>
  </div>
`

const popup = /* HTML */ `
  <div class="new_popup_backdrop is_hidden">
    <div class="new_popup">
      <!-- <div class="new_popup_content version_b">${contentPopupVerB}</div> -->
      <div class="new_popup_content version_c">${contentPopupVerC}</div>
    </div>
  </div>
`

export { popup }
