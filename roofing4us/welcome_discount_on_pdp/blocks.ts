import { svg, git } from './data'

export const btnTriggerForPopup = () => {
  return /* HTML */ `
    <div class="get_discount_btn_pdp">
      ${svg.btnIcon}
      <span>Get a 5% Discount</span>
    </div>
  `
}

export const contentPopupWithDiscount = /* HTML */ `
  <div class="discount_popup">
    <div class="first_screen ">
      <div class="info_wrapper">
        <div class="header_popup">
          <p>Join the Roofing4US Family and</p>
          <h2 class="main_title">
            <span>Save 5%</span> on <br />
            Your Next Order!
          </h2>
          <p class="accent_txt">Applies to any order over $300</p>
        </div>
        <div class="body_popup">
          <h3 class="sub_title">Sign up today and be the first to hear about exclusive offers and updates!</h3>
          <div class="email_wrapper">
            <label for="emailNew">
              <input type="email" name="emailNew" id="emailNew" placeholder="Email" />
            </label>
          </div>
          <div class="btn_wrapper">
            <div class="get_discount_btn">Got it, Let’s Shop!</div>
          </div>
        </div>
      </div>
      <div class="img_wrapper">
        <img src="${git}check_out_now_img.png" alt="photo" class="desk_var" />
      </div>
    </div>
    <div class="second_screen is_hidden">
      <div class="info_wrapper">
        <div class="header_popup">
          <p>Join the Roofing4US Family and</p>
          <h2 class="main_title">
            <span>Save 5%</span> on <br />
            Your Next Order!
          </h2>
          <p class="accent_txt">Applies to any order over $300</p>
        </div>
        <div class="body_popup">
          <h3 class="sub_title">Enter code at checkout</h3>
          <div class="discount_code_wrapper">
            <div class="discount_code_container">
              <span class="discount_code_txt">USROOFING5</span>
              <span data-discount="USROOFING5">${svg.copyIcon}</span>
            </div>
          </div>
          <div class="btn_wrapper">
            <div class="get_discount_btn">Got it, Let’s Shop!</div>
          </div>
        </div>
      </div>
      <div class="img_wrapper">
        <img src="${git}check_out_now_img.png" alt="photo" class="desk_var" />
      </div>
    </div>
    <div class="third_screen is_hidden">
      <div class="info_wrapper">
        <div class="body_popup">
          <div class="check_your_inbox">
            ${svg.checkIcon}
            <h2>Check your inbox!</h2>
            <h3>Your code is waiting in your inbox.</h3>
          </div>
          <div class="btn_wrapper">
            <div class="get_discount_btn">Continue shopping</div>
          </div>
        </div>
      </div>
      <div class="img_wrapper">
        <img src="${git}check_out_now_img.png" alt="photo" class="desk_var" />
      </div>
    </div>
  </div>
`

export const popup = /* HTML */ `
  <div class="new_popup_backdrop is-hidden">
    <div class="new_popup">
      <button class="new_popup_close" data-popup="close">${svg.closeIcon}</button>
      <div class="new_popup_content">${contentPopupWithDiscount}</div>
    </div>
  </div>
`
