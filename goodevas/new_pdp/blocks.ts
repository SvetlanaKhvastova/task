import { svg, git, productDetailsTxt } from './data'

export const bestSellerLabelBlock = /* HTML */ ` <div class="best_seller_label_block">${svg.bestSellerLabelIcon}</div> `

export const boughtSoFarBlock = (summ: string = ''): string => {
  return /* HTML */ `
    <div class="bought_so_far_block">
      ${svg.cartIcon}
      <p><span class="">3K+</span> bought so far</p>
    </div>
  `
}

export const getFreeDeliveryBlock = () => {
  return /* HTML */ `
    <div class="get_free_delivery_block">
      ${svg.freeDeliveryIcon}
      <p>
        Order now and get <span class="accent_underline">FREE delivery</span> on or before
        <span class="date_txt">Sunday, October 19</span>
      </p>
    </div>
  `
}

export const yourImpactBlock = () => {
  return /* HTML */ `
    <div class="your_impact_block">
      ${svg.treeIcon}
      <p>Your Impact: 5 trees planted with this order</p>
    </div>
  `
}

export const oneReviewBlock = () => {
  return /* HTML */ `
    <div class="one_review_block">
      <div class="info_wrapper">
        <p class="info_descr">
          “Amazing quality of the product. Very easy to assemble. Both of my kids love it! I’m really happy with our
          purchase. Definitely happy and will purchase again next time.”
        </p>
        <div class="name_stars_wrapper">
          <span class="name_review">Courtney D.</span>
          <div class="stars_summary">
            <div class="stars_wrapper">${svg.starIcon}${svg.starIcon}${svg.starIcon}${svg.starIcon}${svg.starIcon}</div>
            <span>5</span>
          </div>
        </div>
      </div>
      <div class="img_wrapper">
        <img src="" alt="photo product" />
        <a href="#" class="all_reviews_link">All reviews</a>
      </div>
    </div>
  `
}

export const productDetailsBlock = () => {
  return /* HTML */ `
    <div class="product_details_block">
      <h2>Product details</h2>
      <ul class="product_details_accordion">
        ${productDetailsTxt
          .map((q, i) => {
            return /* HTML */ `
              <li class="product_details_accordion_block" data-visability="${i + 1}">
                <div class="product_details_accordion_link">
                  <p>${q.title}</p>
                  <span class="product_details_icon">${svg.arrowAccordionIcon}</span>
                </div>
                <div class="product_details_accordion_lists" data-visability-open="" ${i + 1}>
                  <div>${q.txt}</div>
                </div>
              </li>
            `
          })
          .join('')}
      </ul>
    </div>
  `
}

interface Benefit {
  icon: string
  title: string
  txt: string
}

export const mainBenefitsBlock = (data: Record<string, Benefit>): string => {
  return /* HTML */ `
    <div class="main_benefits_block">
      <ul class="main_benefits_list">
        ${Object.values(data)
          .map(
            benefit => /* HTML */ `
              <li class="main_benefits_item">
                <div class="main_benefits_item_icon_wrapper">${benefit.icon}</div>
                <div class="main_benefits_item_info">
                  <h2 class="main_benefits_item_title">${benefit.title}</h2>
                  <p class="main_benefits_item_txt">${benefit.txt}</p>
                </div>
              </li>
            `
          )
          .join('')}
      </ul>
    </div>
  `
}

export const comparisonTableBlock = (data): string => {
  return /* HTML */ `
    <div class="comparison_table_block">
      <h2 class="comparison_table_main_title">${data.mainTitle}</h2>

      <div class="custom_table">
        <div class="benefits_row">
          <div class="header_table">
            <div class="table_cell"></div>
          </div>
          <div class="body_table">
            ${data.benefits
              .map(item => /* HTML */ ` <div class="benefits_cell table_cell"><p>${item.benefitName}</p></div> `)
              .join('')}
          </div>
        </div>

        <div class="goodevas_row is_active">
          <div class="header_table">
            <div class="table_cell">
              <h3>${data.goodevasTitle}</h3>
              <div class="new_img"></div>
            </div>
          </div>
          <div class="body_table">
            ${data.benefits
              .map(
                item => /* HTML */ `
                  <div class="goodevas_cell table_cell">
                    <span class="check_icon_wrapper">${svg.checkIcon}</span>
                    <p>${item.goodevasDescr}</p>
                  </div>
                `
              )
              .join('')}
          </div>
        </div>

        <div class="competitors_row">
          <div class="header_table">
            <div class="table_cell">
              <h3>${data.competitorsTitle}</h3>
              <div class="new_img"></div>
            </div>
          </div>
          <div class="body_table">
            ${data.benefits
              .map(
                item => /* HTML */ `
                  <div class="competitors_cell table_cell">
                    <span class="cancel_icon_wrapper">${svg.cancelIcon}</span>
                    <p>${item.competitorsDescr}</p>
                  </div>
                `
              )
              .join('')}
          </div>
        </div>
      </div>
    </div>
  `
}
