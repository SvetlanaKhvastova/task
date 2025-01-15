import { svg, git, categoriesDataForReturningUsersWOProducts } from './data'

// New users - First order discount popup
export const firstOrderDiscount = /* HTML */ `
  <div class="first_order_discount first_var">
    <div class="info_wrapper">
      <div class="header_popup">
        <h2 class="main_title">
          <span class="accent_color_orange">Get 10% off </span> <br />
          your first order now
        </h2>
        <p class="main_description">
          Subscribe to our newsletter now and receive an exclusive discount on your first order.
        </p>
      </div>
      <div class="body_popup">
        <div class="email_wrapper">
          <label for="emailNew">
            <input type="email" name="emailNew" id="emailNew" placeholder="Your e-mail" />
          </label>
        </div>
        <div class="btn_wrapper">
          <div class="get_discount_btn main_btn">Get 10% off</div>
        </div>
      </div>
    </div>
    <div class="img_wrapper">
      <img src="${git}check_out_now_img.png" alt="photo" class="desk_var" />
      <img src="${git}first_order_discount_img_mob.png" alt="photo" class="mob_var" />
    </div>
  </div>
  <div class="first_order_discount second_var is_hidden">
    <div class="info_wrapper">
      <div class="header_popup">
        <h2 class="main_title">You are on the list!</h2>
        <p>
          Your <b>10% first order discount is ready</b> <br />
          (no minimum spend, no exclusions)
        </p>
      </div>
      <div class="body_popup">
        <div class="discount_code_wrapper">
          <p class="discount_code_title">Copy and Enter code at checkout</p>
          <div class="discount_code_container">
            <span class="discount_code_txt">sonno10</span>
            <span data-discount="sonno10">Copy ${svg.copyIcon}</span>
          </div>
        </div>
        <div class="btn_wrapper">
          <div class="continue_shopping_btn main_btn" data-popup="close">Continue Shopping</div>
        </div>
      </div>
    </div>
    <div class="img_wrapper">
      <img src="${git}popup_img_1.webp" alt="photo" class="desk_var" />
      <img src="${git}popup_img_1_mob.webp" alt="photo" class="mob_var" />
    </div>
  </div>
`

// New users - w/o products in basket
export const newUsersWOProducts = (
  viewedItem: boolean = false,
  img: string = '',
  title: string = '',
  oldPrice: string = '',
  price: string = '',
  saveTxt: string = '',
  link: string = ''
) => {
  return /* HTML */ `
    ${viewedItem
      ? /* HTML */ `
          <div class="new_users_w_o_products exit_intent_popup">
            <div class="header_popup">
              <h2 class="main_title">
                You recently viewed. <br />
                Buy now and <span class="accent_color_orange">get 10% off!</span>
              </h2>
            </div>
            <div class="body_popup">
              <div class="item_wrapper">
                <div class="img_wrapper">
                  <img src=${img} alt="photo" />
                </div>
                <div class="item_info">
                  <h3>${title}</h3>
                  <div class="price_wrapper">
                    <span class="old_price_txt">${oldPrice}</span>
                    <span class="price_txt">${price}</span>
                    <span class="save_txt">Save ${saveTxt}</span>
                  </div>
                </div>
              </div>
              <div class="btn_wrapper">
                <p>Discount will be applied on Checkout</p>
                <a href="${link}" class="shop_now_btn main_btn"> Shop Now</a>
              </div>
            </div>
          </div>
        `
      : /* HTML */ `
          <div class="new_users_w_o_products exit_intent_popup">
            <div class="header_popup">
              <h2 class="main_title">Get an <span class="accent_color_orange">extra 10% off</span> all Divan Beds</h2>
            </div>
            <div class="body_popup">
              <div class="img_wrapper">
                <img src="${git}popup_img_2.webp" alt="photo" />
              </div>
              <div class="btn_wrapper">
                <p>Discount will be applied on Checkout</p>
                <div class="shop_now_btn main_btn">Shop Now</div>
              </div>
            </div>
          </div>
        `}
  `
}
// New users - with products in basket
export const newUsersWithProducts = /* HTML */ `
  <div class="new_users_with_products exit_intent_popup">
    <div class="info_wrapper">
      <div class="header_popup">
        <h2 class="main_title">
          Check out now and get <br />
          <span class="accent_color_orange">10% off</span> your first order
        </h2>
        <p class="main_description">Your cart reserved for:</p>
        <div id="counter">
          <div class="time_block">
            <div class="time_txt minutes_tens">1</div>
            <div class="time_txt minutes_ones">5</div>
            <div class="counter_label">Minutes</div>
          </div>
          <div class="time_separator">:</div>
          <div class="time_block">
            <div class="time_txt seconds_tens">0</div>
            <div class="time_txt seconds_ones">0</div>
            <div class="counter_label">Seconds</div>
          </div>
        </div>
      </div>
      <div class="body_popup">
        <div class="products_wrapper">
          <ul class="products_list"></ul>
        </div>
        <div class="discount_code_wrapper">
          <p class="discount_code_title">Copy and Enter code at checkout</p>
          <div class="discount_code_container">
            <span class="discount_code_txt">sonno10</span>
            <span data-discount="sonno10">Copy ${svg.copyIcon}</span>
          </div>
        </div>
        <div class="btn_wrapper">
          <div class="checkout_btn main_btn">Checkout</div>
        </div>
      </div>
    </div>
    <div class="img_wrapper">
      <img src="${git}popup_img_3.webp" alt="photo" class="desk_var" />
    </div>
  </div>
`

// Returning users - w/o products in basket
export const returningUsersWOProducts = /* HTML */ `
  <div class="returning_users_w_o_products exit_intent_popup">
    <div class="header_popup">
      <h2 class="main_title">Explore our best</h2>
      <p class="main_description">Take a closer look at our top picks just for you</p>
    </div>
    <div class="body_popup">
      <ul class="category_list">
        ${categoriesDataForReturningUsersWOProducts
          .map(category => {
            return /* HTML */ `
              <li class="category_item">
                <img src="${git}${window.innerWidth >= 768 ? category.img : category.imgMob}" alt="photo" />
                <div class="info_wrapper">
                  <h3>${category.title}</h3>
                  <a href="${category.link}" class="shop_now_btn main_btn"
                    >${category.buttonText} ${svg.arrowWhiteBtnIcon}</a
                  >
                </div>
              </li>
            `
          })
          .join('')}
      </ul>
    </div>
  </div>
`
// Returning users with products in basket
export const returningUsersWithProducts = /* HTML */ `
  <div class="returning_users_with_products exit_intent_popup">
    <div class="info_wrapper">
      <div class="header_popup">
        <h2 class="main_title">It’s almost yours!</h2>
        <p class="main_description">Only one step left:</p>
      </div>
      <div class="body_popup">
        <div class="products_wrapper">
          <ul class="products_list"></ul>
        </div>
        <div class="btn_wrapper">
          <div class="checkout_btn main_btn">Checkout</div>
        </div>
      </div>
    </div>
    <div class="img_wrapper">
      <img src="${git}popup_img_8.webp" alt="photo" class="desk_var" />
    </div>
  </div>
`

export const popup = /* HTML */ `
  <div class="new_popup_backdrop is_hidden">
    <div class="new_popup">
      <button class="new_popup_close" data-popup="close">${svg.closeIcon}</button>
      <div class="new_popup_content"></div>
    </div>
  </div>
`

export const createProductItem = (
  link: string,
  img: string,
  title: string,
  descr: string,
  oldPrice: number,
  price: number,
  saveTxt: number,
  newUser: boolean = false
) => {
  const stockValue = Math.floor(Math.random() * 10) + 1
  const peopleViewing = Math.floor(Math.random() * 12) + 4

  return /* HTML */ `
    <li class="products_item">
      <div class="product_wrapper">
        ${window.innerWidth < 768 && !newUser
          ? /* HTML */ ` <div class="stock_wrapper">
              ${svg.exclamationPointIcon}
              <p>
                We may run out of stock soon.
                <span class="stock_txt"> Only <span class="stock_value">${stockValue}</span> left </span>
              </p>
            </div>`
          : ''}
        ${window.innerWidth < 768 && newUser
          ? /* HTML */ `<div class="popular_products">
              ${svg.peopleViewingIcon}
              <p><span class="stock_txt">${peopleViewing} people</span> are watching this product right now</p>
            </div>`
          : ``}
        <div class="product_all_info">
          <a class="img_wrapper" href="${link}">
            <img src=${img} alt="photo" />
          </a>
          <div class="item_info">
            ${window.innerWidth >= 768 && !newUser
              ? /* HTML */ ` <div class="stock_wrapper">
                  ${svg.exclamationPointIcon}
                  <p>
                    We may run out of stock soon.
                    <span class="stock_txt"> Only <span class="stock_value">${stockValue}</span> left </span>
                  </p>
                </div>`
              : ''}
            ${window.innerWidth >= 768 && newUser
              ? /* HTML */ `<div class="popular_products">
                  ${svg.peopleViewingIcon}
                  <p><span class="stock_txt">${peopleViewing} people</span> are watching this product right now</p>
                </div>`
              : ``}
            <h3 class="item_title"><a href="${link}">${title}</a></h3>
            ${descr ? `<span class="item_descr">${descr}</span>` : ''}
            <div class="price_wrapper">
              <span class="old_price_txt">£${oldPrice}</span>
              <span class="price_txt">£${price}</span>
              <span class="save_txt">Save £${saveTxt}</span>
            </div>
          </div>
        </div>
      </div>
      ${newUser
        ? ``
        : /* HTML */ `<div class="popular_products">
            ${svg.peopleViewingIcon}
            <p>
              <b><span>${peopleViewing}</span> people are viewing this product—</b>availability isn’t guaranteed.
              Complete your purchase now!
            </p>
          </div>`}
    </li>
  `
}
