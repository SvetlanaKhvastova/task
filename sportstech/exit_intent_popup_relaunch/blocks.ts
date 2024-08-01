import { svg, git } from './data'

// New users (1st session) - w/o products in basket
// sales_offer ----> backdrop
export const exploreOurBestFirst = /* HTML */ `
  <div class="exit_intent_popup">
    <div class="explore_our_best first_var">
      <div class="header_popup">
        <h2 class="main_title">Entdecke unsere Bestseller!</h2>
        <p class="main_description">Die besten Deals nur für dich zusammengestellt.</p>
      </div>
      <div class="body_popup">
        <div class="img_wrapper">
          <img src="${git}explore_our_best_img.png" alt="photo sportstech" />
        </div>
        <div class="btn_wrapper">
          <h3>Sale (bis zu <span class="accent_color_red">30%</span>)</h3>
          <div class="shop_now_btn main_btn">JETZT SHOPPEN</div>
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
        <h2 class="main_title">Entdecke unsere besten Produkte!</h2>
        <p class="main_description">Schau dir unsere Top-Auswahl für dich an</p>
      </div>
      <div class="body_popup">
        <ul class="category_list">
          <li class="category_item bestsellers_item">
            <img src="${git}category_img_1.png" alt="photo sportstech" />
            <h3>Bestseller</h3>
            <div class="info_wrapper">
              <h3>Bestseller</h3>
              <div class="shop_now_btn main_btn">JETZT KAUFEN</div>
            </div>
          </li>
          <li class="category_item bikes_item">
            <img src="${git}category_img_3_2.png" alt="photo sportstech" />
            <h3>Speedbikes und Ergometer</h3>
            <div class="info_wrapper">
              <h3>Speedbikes und Ergometer</h3>
              <div class="shop_now_btn main_btn">JETZT KAUFEN</div>
            </div>
          </li>
          <li class="category_item equipment_item">
            <img src="${git}category_img_3_1.png" alt="photo sportstech" />
            <h3>Rudergeräte</h3>
            <div class="info_wrapper">
              <h3>Rudergeräte</h3>
              <div class="shop_now_btn main_btn">JETZT KAUFEN</div>
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
            <span class="accent_color_red">Hol dir 5 % Rabatt</span> & <br />
            gratis Versand!
          </h2>
          <p class="main_description">
            Melde dich jetzt für unseren Newsletter an und erhalte einen exklusiven Rabatt auf deine erste Bestellung.
          </p>
        </div>
        <div class="body_popup">
          <div class="email_wrapper">
            <label for="emailNew">
              <input type="email" name="emailNew" id="emailNew" placeholder="E-Mail-Adresse eingeben" />
            </label>
          </div>
          <div class="btn_wrapper">
            <div class="get_discount_btn main_btn">5% RABATT SICHERN</div>
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
          <h2 class="main_title">Du bist angemeldet</h2>
          <ul>
            <li>
              <p>
                Dein <span class="accent_color_red">5%-Rabatt</span> auf deine erste Bestellung wartet auf dich (das
                Angebot kann nicht mit anderen Rabatten, Aktionen oder Sonderangeboten kombiniert werden).
              </p>
            </li>
            <li>
              <p>Plus <span class="accent_color_red">KOSTENLOSE</span> Lieferung.</p>
            </li>
          </ul>
        </div>
        <div class="body_popup">
          <div class="discount_code_wrapper">
            <p class="discount_code_title">Gib den Code im Warenkorb ein</p>
            <div class="discount_code_container">
              <span class="discount_code_txt">SPORTSTECH5</span>
              <span data-discount="SPORTSTECH5">${svg.copyIcon}</span>
            </div>
          </div>
          <div class="btn_wrapper">
            <div class="continue_shopping_btn main_btn" data-popup="close">WEITER SHOPPEN</div>
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
            Kaufe jetzt und <span class="accent_color_red">spare 5%</span> bei deiner ersten Bestellung
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
              gerade an
            </p>
          </div>
          <div class="discount_code_wrapper">
            <p class="discount_code_title">Der Code wird beim Checkout angewendet</p>
            <div class="discount_code_container">
              <span class="discount_code_txt">SPORTSTECH5</span>
              <span data-discount="SPORTSTECH5">${svg.copyIcon}</span>
            </div>
          </div>
          <div class="btn_wrapper">
            <div class="check_out_now_btn main_btn">ZUR KASSE</div>
            <p class="new_txt_relaunch">
              Der 5%-Rabatt gilt ausschließlich für nicht reduzierte Artikel. Das Angebot kann nicht mit anderen
              Rabatten, Aktionen oder Sonderangeboten kombiniert werden.
            </p>
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
            Bestelle jetzt und sichere dir<br /><span class="accent_color_red">5% Rabatt</span> plus kostenlose
            Lieferung
          </h2>
          <p class="main_description">*5% Rabatt gilt nur für diese Bestellung</p>
        </div>
        <div class="body_popup">
          <div class="products_wrapper">
            <ul class="products_list"></ul>
          </div>
          <div class="discount_code_wrapper">
            <p class="discount_code_title">Gib den Code beim Checkout ein</p>
            <div class="discount_code_container">
              <span class="discount_code_txt">SPORTSTECH5</span>
              <span data-discount="SPORTSTECH5">${svg.copyIcon}</span>
            </div>
          </div>
          <div class="btn_wrapper">
            <p>*Der endgültige Preis wird beim Checkout berechnet</p>
            <div class="complete_my_order_now_btn main_btn">BESTELLUNG ABSCHLIEßEN</div>
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
          <h2 class="main_title">Fast deins!</h2>
          <p class="main_description">Nur noch ein Schritt:</p>
        </div>
        <div class="body_popup">
          <div class="stock_wrapper">
            ${window.innerWidth >= 768 ? `${svg.bgrYellowIcon}` : `${svg.bgrYellowMobIcon}`}
            <p>
              Sehr beliebt, bald ausverkauft. <br />
              <span class="stock_txt"
                >Nur noch <span class="stock_value">${Math.floor(Math.random() * 10) + 1}</span> auf Lager.</span
              >
            </p>
          </div>
          <div class="products_wrapper">
            <ul class="products_list"></ul>
          </div>
          <div class="popular_products">
            ${svg.groupIcon}
            <p>
              <b><span>${Math.floor(Math.random() * 12) + 4}</span> Personen</b> schauen sich dieses Produkt gerade an.
              Wir können die Verfügbarkeit nicht garantieren, wenn du den Kauf jetzt nicht abschließt.
            </p>
          </div>
          <div class="btn_wrapper">
            <div class="complete_my_order_now_btn main_btn">BESTELLUNG ABSCHLIEßEN</div>
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

export const productItem = (
  link: string,
  img: string,
  title: string,
  descr: string,
  price: string,
  starsTxt: string,
  stars: string
) => {
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
          ${starsTxt
            ? `<div class="stars_wrapper">
         ${stars}
            <span>(${starsTxt})</span>
          </div>`
            : ''}
          <span class="price_txt">${price}</span>
        </div>
      </div>
    </li>
  `
}
