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
        <h3>Sales (up to <span>30%</span>)</h3>
        <div class="shop_now_btn">Shop Now</div>
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
            <div class="shop_now_btn">Shop Now</div>
          </div>
        </li>
        <li class="category_item">
          <img src="${git}category_img_2.png" alt="photo sportstech" />
          <h3>BIKES AND ERGOMETER</h3>
          <div class="info_wrapper">
            <h3>BIKES AND ERGOMETER</h3>
            <div class="shop_now_btn">Shop Now</div>
          </div>
        </li>
        <li class="category_item">
          <img src="${git}category_img_3.png" alt="photo sportstech" />
          <h3>equipment</h3>
          <div class="info_wrapper">
            <h3>equipment</h3>
            <div class="shop_now_btn">Shop Now</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
`

export const contentPopup = /* HTML */ ` <div class="exit_intent_popup">${exploreOurBestSecond}</div> `

export const popup = /* HTML */ `
  <div class="new-popup-backdrop is-hidden">
    <div class="new-popup">
      <button class="new-popup__close" data-popup="close">${svg.closeIcon}</button>
      <div class="new-popup__content"></div>
    </div>
  </div>
`
