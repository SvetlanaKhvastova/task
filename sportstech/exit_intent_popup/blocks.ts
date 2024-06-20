import { svg, git } from './data'

// New users (1st session) - w/o products in basket
// sales_offer ----> backdrop
export const exploreOurBestFirst = /* HTML */ `
  <div class="exit_intent_popup">
    <div class="explore_our_best first_var">
      <div class="header_popup">
        <h2 class="main_title">Entdecken Sie unsere besten Produkte</h2>
        <p class="main_description">Werfen Sie einen genaueren Blick auf unsere Top-Auswahl nur für Sie</p>
      </div>
      <div class="body_popup">
        <div class="img_wrapper">
          <img src="${git}explore_our_best_img.png" alt="photo sportstech" />
        </div>
        <div class="btn_wrapper">
          <h3>Verkauf (bis zu <span class="accent_color_red">30%</span>)</h3>
          <div class="shop_now_btn main_btn">Jetzt einkaufen</div>
        </div>
      </div>
    </div>
  </div>
`

// Returning users (session number > 1)- w/o products in basket
// categories_products ----> backdrop
export const exploreOurBestSecond = /* HTML */ `
  <div class="exit_intent_popup">
    <div class="explore_our_best second_var">
      <div class="header_popup">
        <h2 class="main_title">Entdecken Sie unsere besten Produkte</h2>
        <p class="main_description">Werfen Sie einen genaueren Blick auf unsere Top-Auswahl nur für Sie</p>
      </div>
      <div class="body_popup">
        <ul class="category_list">
          <li class="category_item bestsellers_item">
            <img src="${git}category_img_1.png" alt="photo sportstech" />
            <h3>Bestseller</h3>
            <div class="info_wrapper">
              <h3>Bestseller</h3>
              <div class="shop_now_btn main_btn">Jetzt einkaufen</div>
            </div>
          </li>
          <li class="category_item bikes_item">
            <img src="${git}category_img_2.png" alt="photo sportstech" />
            <h3>Speedbikes und Ergometer</h3>
            <div class="info_wrapper">
              <h3>Speedbikes und Ergometer</h3>
              <div class="shop_now_btn main_btn">Jetzt einkaufen</div>
            </div>
          </li>
          <li class="category_item equipment_item">
            <img src="${git}category_img_3.png" alt="photo sportstech" />
            <h3>Ausrüstung</h3>
            <div class="info_wrapper">
              <h3>Ausrüstung</h3>
              <div class="shop_now_btn main_btn">Jetzt einkaufen</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
`
// Show FIRST ORDER DISCOUNT POPUP -> New users - w/o products in basket (First order discount popup)
// first_order_discount ----> backdrop
export const firstOrderDiscount = /* HTML */ `
  <div class="exit_intent_popup">
    <div class="first_order_discount first_var">
      <div class="info_wrapper">
        <div class="header_popup">
          <h2 class="main_title">
            <span class="accent_color_red">Erhalten Sie 5%</span> Rabatt & kostenlose Lieferung!
          </h2>
          <p class="main_description">
            Klicken Sie auf den unten stehenden Button, um <b>einen personalisierten Code zu erhalten</b> und 5% bei
            Ihrer ersten Bestellung zu sparen, plus kostenlosen Versand.
          </p>
        </div>
        <div class="body_popup">
          <div class="email_wrapper">
            <label for="emailNew">
              <input type="email" name="emailNew" id="emailNew" placeholder="Email" />
            </label>
          </div>
          <div class="btn_wrapper">
            <div class="get_discount_btn main_btn">5% Rabatt erhalten</div>
            <div class="no_thanks_btn main_btn" data-popup="close">Nein, danke</div>
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
          <h2 class="main_title">Sie stehen auf der Liste</h2>
          <ul>
            <li>
              <p>
                Ihr <span class="accent_color_red">5% Rabatt</span> auf die erste Bestellung ist bereit (kein
                Mindestbestellwert, keine Ausschlüsse).
              </p>
            </li>
            <li>
              <p>Zusätzlich <span class="accent_color_red">KOSTENLOSE</span> Lieferung vom Hersteller.</p>
            </li>
          </ul>
        </div>
        <div class="body_popup">
          <div class="discount_code_wrapper">
            <p class="discount_code_title">Geben Sie den Code beim Checkout ein</p>
            <div class="discount_code_container">
              <span class="discount_code_txt">Welcome10</span>
              <span data-discount="Welcome10">${svg.copyIcon}</span>
            </div>
          </div>
          <div class="btn_wrapper">
            <div class="continue_shopping_btn main_btn" data-popup="close">Weiter einkaufen</div>
          </div>
        </div>
      </div>
      <div class="img_wrapper">
        <img src="${git}first_order_discount_img_2.png" alt="photo sportstech" class="desk_var" />
        <img src="${git}first_order_discount_img_mob.png" alt="photo sportstech" class="mob_var" />
      </div>
    </div>
  </div>
`

// відмінили цей попап
export const firstOrderDiscountSecond = /* HTML */ `
  <div class="exit_intent_popup">
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
              <span data-discount="Welcome10">${svg.copyIcon}</span>
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
  </div>
`

// New users - w/ products in basket (at least 1 product)
// check_out_now ----> backdrop
export const checkOutNow = /* HTML */ `
  <div class="exit_intent_popup">
    <div class="check_out_now first_var">
      <div class="info_wrapper">
        <div class="header_popup">
          <h2 class="main_title">
            Jetzt zur Kasse gehen und <span class="accent_color_red">5%</span> Rabatt auf Ihre erste Bestellung erhalten
          </h2>
          <div id="counter">
            <div class="time_block">
              <div class="time_txt minutes_tens">1</div>
              <div class="time_txt minutes_ones">5</div>
              <div class="counter_label">Minuten</div>
            </div>
            <div class="time_separator">:</div>
            <div class="time_block">
              <div class="time_txt seconds_tens">0</div>
              <div class="time_txt seconds_ones">0</div>
              <div class="counter_label">Sekunden</div>
            </div>
          </div>
        </div>
        <div class="body_popup">
          <div class="products_wrapper">
            <ul class="products_list"></ul>
          </div>
          <div class="popular_products">
            ${svg.groupIcon}
            <p>
              Beliebtes Produkt. <br /><b><span>${Math.floor(Math.random() * 14) + 2}</span> Personen</b> sehen es sich
              gerade an.
            </p>
          </div>
          <div class="discount_code_wrapper">
            <p class="discount_code_title">Code beim Checkout eingeben</p>
            <div class="discount_code_container">
              <span class="discount_code_txt">SPORTSTECH5</span>
              <span data-discount="SPORTSTECH5">${svg.copyIcon}</span>
            </div>
          </div>
          <div class="btn_wrapper">
            <div class="check_out_now_btn main_btn">Jetzt zur Kasse</div>
          </div>
        </div>
      </div>
      <div class="img_wrapper">
        <img src="${git}check_out_now_img.png" alt="photo sportstech" class="desk_var" />
      </div>
    </div>
  </div>
`

// Returning users (session number >1) with products in basket (at least 1 product at basket) -> show popup with discount (on each session until user used this discount)
// check_out_now_second ----> backdrop
export const checkOutNowSecond = /* HTML */ `
  <div class="exit_intent_popup">
    <div class="check_out_now second_var">
      <div class="info_wrapper">
        <div class="header_popup">
          <h2 class="main_title">
            Jetzt zur Kasse gehen und<br /><span class="accent_color_red">5% Rabatt</span> sowie kostenlose Lieferung
            erhalten
          </h2>
          <p class="main_description">*5% Rabatt gilt nur für diese Bestellung</p>
        </div>
        <div class="body_popup">
          <div class="products_wrapper">
            <ul class="products_list"></ul>
          </div>
          <div class="discount_code_wrapper">
            <p class="discount_code_title">Code beim Checkout eingeben</p>
            <div class="discount_code_container">
              <span class="discount_code_txt">PRSNLoffer5</span>
              <span data-discount="PRSNLoffer5">${svg.copyIcon}</span>
            </div>
          </div>
          <div class="btn_wrapper">
            <p>*Der endgültige Preis wird beim Checkout berechnet</p>
            <div class="complete_my_order_now_btn main_btn">Meine Bestellung jetzt abschließen</div>
          </div>
        </div>
      </div>
    </div>
  </div>
`

// Returning users (session number >1) with products in basket (at least 1 product at basket) -> when used discount - show scarcity popup
// check_out_now_third ---> backdrop
export const checkOutNowThird = /* HTML */ `
  <div class="exit_intent_popup">
    <div class="check_out_now third_var">
      <div class="info_wrapper">
        <div class="header_popup">
          <h2 class="main_title">Es gehört fast Ihnen!</h2>
          <p class="main_description">Nur noch ein Schritt:</p>
        </div>
        <div class="body_popup">
          <div class="stock_wrapper">
            ${window.innerWidth >= 768 ? `${svg.bgrYellowIcon}` : `${svg.bgrYellowMobIcon}`}
            <p>
              Beliebte Wahl, wir könnten bald ausverkauft sein.
              <span class="stock_txt">Nur noch <span>3</span> Stück übrig.</span>
            </p>
          </div>
          <div class="products_wrapper">
            <ul class="products_list"></ul>
          </div>
          <div class="popular_products">
            ${svg.groupIcon}
            <p>
              <b><span>${Math.floor(Math.random() * 12) + 4}</span> Personen</b> sehen sich dieses Produkt gerade an.
              Wir können die Verfügbarkeit nicht garantieren, wenn Sie den Kauf jetzt nicht abschließen.
            </p>
          </div>
          <div class="btn_wrapper">
            <div class="complete_my_order_now_btn main_btn">Meine Bestellung jetzt abschließen</div>
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const popup = /* HTML */ `
  <div class="new-popup-backdrop is-hidden">
    <div class="new-popup">
      <button class="new-popup__close" data-popup="close">${svg.closeIcon}</button>
      <div class="new-popup__content"></div>
    </div>
  </div>
`

export const productItem = (link: string, img: string, title: string, descr: string, price: string) => {
  return /* HTML */ `
    <li class="products_item">
      <div class="img_wrapper">
        <a href="${link}">
          <img src=${img} alt="photo sportstech" />
        </a>
      </div>
      <div class="item_info">
        <h3><a href="${link}">${title}</a></h3>
        ${descr ? `<span class="txt_descr">${descr}</span>` : ''}
        <div class="price_wrapper">
          <div class="stars_wrapper">
            ${svg.starIcon}${svg.starIcon}${svg.starIcon}${svg.starIcon}${svg.starPartIcon}
            <span>(572)</span>
          </div>
          <span class="price_txt">${price}</span>
        </div>
      </div>
    </li>
  `
}
