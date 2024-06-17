import { svg, git } from './data'

export const exploreOurBestFirst = /* HTML */ `
  <div class="explore_our_best first_var">
    <div class="header_popup">
      <h2 class="main_title">Explore our best</h2>
      <p class="main_description">Take a closer look at our top picks just for you.</p>
    </div>
    <div class="body_popup">
      <div class="img_wrapper">
        <img src="${git}explore_our_best_img.png" alt="photo sportstech" />
      </div>
      <div class="btn_wrapper">
        <h3>Sales (up to <span class="accent_color_red">30%</span>)</h3>
        <div class="shop_now_btn main_btn">Shop Now</div>
      </div>
    </div>
  </div>
`

export const exploreOurBestSecond = /* HTML */ `
  <div class="explore_our_best second_var">
    <div class="header_popup">
      <h2 class="main_title">Explore our best</h2>
      <p class="main_description">Take a closer look at our top picks just for you.</p>
    </div>
    <div class="body_popup">
      <ul class="category_list">
        <li class="category_item">
          <img src="${git}category_img_1.png" alt="photo sportstech" />
          <h3>Bestsellers</h3>
          <div class="info_wrapper">
            <h3>Bestsellers</h3>
            <div class="shop_now_btn main_btn">Shop Now</div>
          </div>
        </li>
        <li class="category_item">
          <img src="${git}category_img_2.png" alt="photo sportstech" />
          <h3>BIKES AND ERGOMETER</h3>
          <div class="info_wrapper">
            <h3>BIKES AND ERGOMETER</h3>
            <div class="shop_now_btn main_btn">Shop Now</div>
          </div>
        </li>
        <li class="category_item">
          <img src="${git}category_img_3.png" alt="photo sportstech" />
          <h3>equipment</h3>
          <div class="info_wrapper">
            <h3>equipment</h3>
            <div class="shop_now_btn main_btn">Shop Now</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
`
export const firstOrderDiscount = /* HTML */ `
  <div class="first_order_discount first_var">
    <div class="info_wrapper">
      <div class="header_popup">
        <h2 class="main_title"><span class="accent_color_red">Get 5%</span> off & free delivery!</h2>
        <p class="main_description">Subscribe to our newsletter and save on your entire first order, no limits.</p>
      </div>
      <div class="body_popup">
        <label for="email">
          <input type="email" name="email" id="email" placeholder="Email" />
        </label>
        <div class="btn_wrapper">
          <div class="get_discount_btn main_btn">Get 5% discount</div>
          <div class="no_thanks_btn main_btn" data-popup="close">No, thanks</div>
        </div>
      </div>
    </div>
    <div class="img_wrapper">
      <img src="${git}check_out_now_img.png" alt="photo sportstech" class="desk_var" />
      <img src="${git}first_order_discount_img_mob.png" alt="photo sportstech" class="mob_var" />
    </div>
  </div>
  <div class="first_order_discount second_var is_hidden">
    <div class="info_wrapper">
      <div class="header_popup">
        <h2 class="main_title">You are on the list</h2>
        <ul>
          <li>
            <p>
              Your <span class="accent_color_red">5% first order</span> discount is ready (no minimum spend, no
              exclusions).
            </p>
          </li>
          <li>
            <p>Plus, <span class="accent_color_red">FREE</span> delivery from the manufacturer.</p>
          </li>
        </ul>
      </div>
      <div class="body_popup">
        <div class="discount_code_wrapper">
          <p class="discount_code_title">Enter code at checkout</p>
          <div class="discount_code_container">
            <span class="discount_code_txt">Welcome10</span>
            <span data-discount>${svg.copyIcon}</span>
          </div>
        </div>
        <div class="btn_wrapper">
          <div class="continue_shopping_btn main_btn">Continue shopping</div>
        </div>
      </div>
    </div>
    <div class="img_wrapper">
      <img src="${git}first_order_discount_img_2.png" alt="photo sportstech" class="desk_var" />
      <img src="${git}first_order_discount_img_mob.png" alt="photo sportstech" class="mob_var" />
    </div>
  </div>
`

export const firstOrderDiscountSecond = /* HTML */ `
  <div class="first_order_discount first_var is_hidden">
    <div class="info_wrapper">
      <div class="header_popup">
        <h2 class="main_title"><span class="accent_color_red">Get 5%</span> off & free delivery!</h2>
        <p class="main_description">Subscribe to our newsletter and save on your entire first order, no limits.</p>
      </div>
      <div class="body_popup">
        <label for="email">
          <input type="email" name="email" id="email" placeholder="Email" />
        </label>
        <div class="btn_wrapper">
          <div class="get_discount_btn main_btn">Get 5% discount</div>
          <div class="no_thanks_btn main_btn" data-popup="close">No, thanks</div>
        </div>
      </div>
    </div>
    <div class="img_wrapper">
      <img src="${git}check_out_now_img.png" alt="photo sportstech" class="desk_var" />
      <img src="${git}first_order_discount_img_mob.png" alt="photo sportstech" class="mob_var" />
    </div>
  </div>
  <div class="first_order_discount second_var is_hidden">
    <div class="info_wrapper">
      <div class="header_popup">
        <h2 class="main_title">You are on the list</h2>
        <ul>
          <li>
            <p>
              Your <span class="accent_color_red">5% first order</span> discount is ready (no minimum spend, no
              exclusions).
            </p>
          </li>
          <li>
            <p>Plus, <span class="accent_color_red">FREE</span> delivery from the manufacturer.</p>
          </li>
        </ul>
      </div>
      <div class="body_popup">
        <div class="discount_code_wrapper">
          <p class="discount_code_title">Enter code at checkout</p>
          <div class="discount_code_container">
            <span class="discount_code_txt">Welcome10</span>
            <span data-discount>${svg.copyIcon}</span>
          </div>
        </div>
        <div class="btn_wrapper">
          <div class="continue_shopping_btn main_btn">Continue shopping</div>
          <div class="enhance_your_experience_btn main_btn">Enhance your experience</div>
        </div>
      </div>
    </div>
    <div class="img_wrapper">
      <img src="${git}first_order_discount_img_2.png" alt="photo sportstech" class="desk_var" />
      <img src="${git}first_order_discount_img_mob.png" alt="photo sportstech" class="mob_var" />
    </div>
  </div>
  <div class="first_order_discount third_var">
    <div class="info_wrapper">
      <div class="header_popup">
        <h2 class="main_title">Enhance your experience with us</h2>
        <p class="main_description">We'd love to get to know you better.</p>
      </div>
      <div class="body_popup">
        <label for="birthday">
          When is your birthday?
          <input type="text" name="birthday" id="birthday" placeholder="DD / MM / YYYY" />
        </label>
        <div class="checkbox_wrapper">
          <h3>What content would you like to see?</h3>
          <div class="checkbox_list">
            <div>
              <input class="custom_checkbox" type="checkbox" name="menS" id="menS" />
              <label for="menS">
                <span class="checked_box"></span>
                <span class="choose_option_txt">Men's</span>
              </label>
            </div>
            <div>
              <input class="custom_checkbox" type="checkbox" name="accessories" id="accessories" />
              <label for="accessories">
                <span class="checked_box"></span>
                <span class="choose_option_txt">Accessories</span>
              </label>
            </div>
            <div>
              <input class="custom_checkbox" type="checkbox" name="womenS" id="womenS" />
              <label for="womenS">
                <span class="checked_box"></span>
                <span class="choose_option_txt">Women's</span>
              </label>
            </div>
            <div>
              <input class="custom_checkbox" type="checkbox" name="exercise" id="exercise" />
              <label for="exercise">
                <span class="checked_box"></span>
                <span class="choose_option_txt">Exercise</span>
              </label>
            </div>
          </div>
        </div>
        <div class="btn_wrapper">
          <div class="submit_btn main_btn">Submit</div>
        </div>
      </div>
    </div>
    <div class="img_wrapper">
      <img src="${git}first_order_discount_img_2.png" alt="photo sportstech" class="desk_var" />
      <img src="${git}first_order_discount_img_mob.png" alt="photo sportstech" class="mob_var" />
    </div>
  </div>
`

export const checkOutNow = /* HTML */ `
  <div class="check_out_now">
    <div class="info_wrapper">
      <div class="header_popup">
        <h2 class="main_title">Check out now and get <span class="accent_color_red">5% off</span> your first order</h2>
        <div id="counter">
          <div class="time_block">
            <div class="time_txt minutes_tens">1</div>
            <div class="time_txt minutes_ones">5</div>
            <div class="counter_label">minutes</div>
          </div>
          <div class="time_separator">:</div>
          <div class="time_block">
            <div class="time_txt seconds_tens">0</div>
            <div class="time_txt seconds_ones">0</div>
            <div class="counter_label">seconds</div>
          </div>
        </div>
      </div>
      <div class="body_popup">
        <div class="products_wrapper">
          <ul class="products_list">
            <li class="products_item">
              <div class="img_wrapper">
                <img src="${git}products_item_1.png" alt="photo sportstech" />
              </div>
              <div class="item_info">
                <h3>F10 Laufband - Inklusive Sportstech Pulsgurt</h3>
                <span class="txt_descr">Neu</span>
                <div class="price_wrapper">
                  <div class="stars_wrapper">
                    ${svg.starIcon}${svg.starIcon}${svg.starIcon}${svg.starIcon}${svg.starPartIcon} <span>(572)</span>
                  </div>
                  <span class="price_txt">€349.00</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="popular_products">
          ${svg.groupIcon}
          <p>Popular product. <br /><b>15 people</b> are currently looking at it.</p>
        </div>
        <div class="discount_code_wrapper">
          <p class="discount_code_title">Enter code at checkout</p>
          <div class="discount_code_container">
            <span class="discount_code_txt">SPORTSTECH5</span>
            <span data-discount>${svg.copyIcon}</span>
          </div>
        </div>
        <div class="btn_wrapper">
          <div class="check_out_now_btn main_btn">checkout NOW</div>
        </div>
      </div>
    </div>
    <div class="img_wrapper">
      <img src="${git}check_out_now_img.png" alt="photo sportstech" class="desk_var" />
    </div>
  </div>
`

export const checkOutNowSecond = /* HTML */ `
  <div class="check_out_now second_var">
    <div class="info_wrapper">
      <div class="header_popup">
        <h2 class="main_title">
          Check out now and get<br /><span class="accent_color_red">5% off & free delivery</span>
        </h2>
        <p class="main_description">*5% discount applies to this order only</p>
      </div>
      <div class="body_popup">
        <div class="products_wrapper">
          <ul class="products_list">
            <li class="products_item">
              <div class="img_wrapper">
                <img src="${git}products_item_1.png" alt="photo sportstech" />
              </div>
              <div class="item_info">
                <h3>F10 Laufband - Inklusive Sportstech Pulsgurt</h3>
                <span class="txt_descr">Neu</span>
                <div class="price_wrapper">
                  <div class="stars_wrapper">
                    ${svg.starIcon}${svg.starIcon}${svg.starIcon}${svg.starIcon}${svg.starPartIcon} <span>(572)</span>
                  </div>
                  <span class="price_txt">€349.00</span>
                </div>
              </div>
            </li>
            <li class="products_item">
              <div class="img_wrapper">
                <img src="${git}products_item_1.png" alt="photo sportstech" />
              </div>
              <div class="item_info">
                <h3>F10 Laufband - Inklusive Sportstech Pulsgurt</h3>
                <span class="txt_descr">Neu</span>
                <div class="price_wrapper">
                  <div class="stars_wrapper">
                    ${svg.starIcon}${svg.starIcon}${svg.starIcon}${svg.starIcon}${svg.starPartIcon} <span>(572)</span>
                  </div>
                  <span class="price_txt">€349.00</span>
                </div>
              </div>
            </li>
            <li class="products_item">
              <div class="img_wrapper">
                <img src="${git}products_item_1.png" alt="photo sportstech" />
              </div>
              <div class="item_info">
                <h3>F10 Laufband - Inklusive Sportstech Pulsgurt</h3>
                <span class="txt_descr">Neu</span>
                <div class="price_wrapper">
                  <div class="stars_wrapper">
                    ${svg.starIcon}${svg.starIcon}${svg.starIcon}${svg.starIcon}${svg.starPartIcon} <span>(572)</span>
                  </div>
                  <span class="price_txt">€349.00</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="discount_code_wrapper">
          <p class="discount_code_title">Enter code at checkout</p>
          <div class="discount_code_container">
            <span class="discount_code_txt">PRSNLoffer5</span>
            <span data-discount>${svg.copyIcon}</span>
          </div>
        </div>
        <div class="btn_wrapper">
          <p>*The final price will be calculated at checkout</p>
          <div class="complete_my_order_now_btn main_btn">Complete my order now</div>
        </div>
      </div>
    </div>
  </div>
`

export const checkOutNowThird = /* HTML */ `
  <div class="check_out_now third_var">
    <div class="info_wrapper">
      <div class="header_popup">
        <h2 class="main_title">It’s almost yours!</h2>
        <p class="main_description">Only one step left:</p>
      </div>
      <div class="body_popup">
        <div class="stock_wrapper">
          ${window.innerWidth >= 768 ? `${svg.bgrYellowIcon}` : `${svg.bgrYellowMobIcon}`}
          <p>Popular choice, we may run out of stock soon. Only 3 left.</p>
        </div>
        <div class="products_wrapper">
          <ul class="products_list">
            <li class="products_item">
              <div class="img_wrapper">
                <img src="${git}products_item_1.png" alt="photo sportstech" />
              </div>
              <div class="item_info">
                <h3>F10 Laufband - Inklusive Sportstech Pulsgurt</h3>
                <span class="txt_descr">Neu</span>
                <div class="price_wrapper">
                  <div class="stars_wrapper">
                    ${svg.starIcon}${svg.starIcon}${svg.starIcon}${svg.starIcon}${svg.starPartIcon} <span>(572)</span>
                  </div>
                  <span class="price_txt">€349.00</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="popular_products">
          ${svg.groupIcon}
          <p>
            There are <b>15 people</b> looking at this product. We can’t guarantee its availability if you don't
            complete the purchase now
          </p>
        </div>
        <div class="btn_wrapper">
          <div class="complete_my_order_now_btn main_btn">Complete my order now</div>
        </div>
      </div>
    </div>
  </div>
`

export const contentPopup = /* HTML */ ` <div class="exit_intent_popup">${checkOutNowThird}</div> `

export const popup = /* HTML */ `
  <div class="new-popup-backdrop is-hidden check_out_now_third">
    <div class="new-popup">
      <button class="new-popup__close" data-popup="close">${svg.closeIcon}</button>
      <div class="new-popup__content"></div>
    </div>
  </div>
`
