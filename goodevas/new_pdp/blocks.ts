import { svg, git } from './data'

export const bestSellerLabelBlock = /* HTML */ ` <div class="best_seller_label_block">${svg.bestSellerLabelIcon}</div> `

export const boughtSoFarBlock = (summ: string): string => {
  return /* HTML */ `
    <div class="bought_so_far_block">
      ${svg.cartIcon}
      <p><span class="">${summ}</span> bought so far</p>
    </div>
  `
}

export const getFreeDeliveryBlock = (shippingDate: string) => {
  return /* HTML */ `
    <div class="get_free_delivery_block">
      ${svg.freeDeliveryIcon}
      <p>
        Order now and get <span class="accent_underline">FREE delivery</span> on or before
        <span class="date_txt">${shippingDate}</span>
      </p>
    </div>
  `
}

export const newProductSalesPointsBlock = (data): string => {
  return /* HTML */ `
    <div class="new_product_sales_points_block">
      <ul class="new_product_sales_points_list">
        ${data
          .map((txt: string) => {
            return /* HTML */ `
              <li class="new_product_sales_points_item">
                ${svg.salesPointIcon}
                <p>${txt}</p>
              </li>
            `
          })
          .join('')}
      </ul>
    </div>
  `
}

export const yourImpactBlock = (txt: string): string => {
  return /* HTML */ `
    <div class="your_impact_block">
      ${svg.treeIcon}
      <p>${txt}</p>
    </div>
  `
}

export const oneReviewBlock = (data): string => {
  return /* HTML */ `
    <div class="one_review_block">
      <div class="info_wrapper">
        <p class="info_descr">${data.txt}</p>
        <div class="name_stars_wrapper">
          <span class="name_review">${data.name}</span>
          <div class="stars_summary">
            <div class="stars_wrapper">${svg.starIcon}${svg.starIcon}${svg.starIcon}${svg.starIcon}${svg.starIcon}</div>
            <span>${data.rating}</span>
          </div>
        </div>
      </div>
      <div class="img_wrapper">
        <img src="${data.img}" alt="photo product" />
        <span class="all_reviews_link">All reviews</span>
      </div>
    </div>
  `
}

export const tolstoyStoriesNewTitle = (title: string): string => {
  return /* HTML */ ` <h2 class="tolstoy_stories_new_title">${title}</h2> `
}

export const productDetailsBlock = (data): string => {
  return /* HTML */ `
    <div class="product_details_block">
      <h2>Product details</h2>
      <ul class="product_details_accordion">
        ${data
          .map((q, i) => {
            return /* HTML */ `
              <li class="product_details_accordion_block" data-visability="${i + 1}">
                <div class="product_details_accordion_link">
                  <p>${q.title}</p>
                  <span class="product_details_icon">${svg.arrowAccordionIcon}</span>
                </div>
                <div class="product_details_accordion_lists" data-visability-open="${i + 1}">
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
              <img src="${git}goodevas_1_img.png" alt="child girl" />
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
              <img src="${git}competitors_1_img.png" alt="child girl" />
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

export const fAQBlock = (data): string => {
  return /* HTML */ `
    <div class="faq_block">
      <h2>FAQ</h2>
      <ul class="faq_accordion">
        ${data
          .map((q, i) => {
            return /* HTML */ `
              <li class="faq_accordion_block" data-visability="${i + 1}">
                <div class="faq_accordion_link">
                  <p>${q.title}</p>
                  <span class="faq_icon">${svg.arrowAccordionIcon}</span>
                </div>
                <div class="faq_accordion_lists" data-visability-open="${i + 1}">
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

export const productImageGalleryBlock = (data): string => {
  return /* HTML */ `
    <div class="product_image_gallery_block">
      <div class="product_image_gallery_container">
        <h2>Product image gallery</h2>
        <ul class="product_image_gallery_list">
          ${data
            .map((img: string) => {
              return /* HTML */ `
                <li class="product_image_gallery_item">
                  <img src="${img}" alt="photo product" />
                </li>
              `
            })
            .join('')}
        </ul>
      </div>
    </div>
  `
}

export const stickyBlock = (txtBtn: string, additonalClass: string) => {
  return /* HTML */ `
    <div class="sticky_block">
      <div class="add_to_cart_btn ${additonalClass}">${txtBtn}</div>
    </div>
  `
}

export const colorWrapper = (dropdownItem, selectedValue: string, isAnyDisabled: boolean): string => {
  return /* HTML */ `
    <div class="color_wrapper">
      <span>Color</span>
      <div class="custom_dropdown" id="productColor">
        <div class="dropdown_toggle" ${isAnyDisabled ? 'data-disabled' : ''}>${selectedValue}</div>
        <div class="dropdown_menu">${dropdownItem}</div>
      </div>
    </div>
  `
}

export const estimateYourShippingPeriodBlock = (
  country: string,
  todayDate: string,
  days: number,
  shippingDate: string,
  guaranteeDate: string
): string => {
  return /* HTML */ `
    <div class="estimate_your_shipping_period_block">
      <h2 class="shipping_title">Estimate <span>your</span> shipping period</h2>
      <div class="shipping_destination">
        <span>Ship to:</span>
        <span class="country_txt">${country}</span>
      </div>
      <div class="shipping_details">
        <div class="buy_goodevas">
          <h3 class="shipping_details_title">Buy Goodevas</h3>
          <span class="shipping_details_date">Today</span>
          <span class="shipping_details_estimated_date buy_estimated_date">${todayDate}</span>
        </div>
        <div class="shipping_info">
          <h3 class="shipping_details_title">Shipping</h3>
          <span class="shipping_details_date shipping_duration">${days} days</span>
          <span class="shipping_details_estimated_date shipping_estimated_date">${shippingDate}</span>
        </div>
        <div class="money_back_guarantee">
          <h3 class="shipping_details_title">100% money-back guarantee through</h3>
          <span class="shipping_details_date guarantee_duration">30 days after purchase</span>
          <span class="shipping_details_estimated_date guarantee_estimated_date">${guaranteeDate}</span>
        </div>
      </div>
    </div>
  `
}
