import { svg, git } from './data'

export const anchorMenu = (data): string => {
  return /* HTML */ `
    <div class="anchor_menu">
      <ul class="anchor_menu_list">
        ${data
          .map((txt: string, index: number) => {
            return /* HTML */ `
              <li class="anchor_menu_item">
                <a href="#${txt.replace(/\s+/g, '')}" class="anchor_menu_link" data-target="${txt.replace(/\s+/g, '')}">
                  <p>${txt}</p>
                </a>
              </li>
            `
          })
          .join('')}
      </ul>
    </div>
  `
}

export const boughtSoFarBlock = (summ: string): string => {
  return /* HTML */ `
    <div class="bought_so_far_block">
      ${svg.cartIcon}
      <p><span class="">${summ}</span> bought so far</p>
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

export const oneReviewBlock = (data): string => {
  return /* HTML */ `
    <div class="one_review_block ${data.class}">
      <div class="img_wrapper">
        <img src="${data.img}" alt="photo product" />
      </div>
      <div class="info_wrapper">
        <p class="info_descr">${data.txt}</p>
        <div class="name_stars_wrapper">
          <div class="name_stars_container">
            <span class="name_review">${data.name}</span>
            <div class="stars_summary">
              <div class="stars_wrapper">${data.starIcons}</div>
              <span>${data.rating}</span>
            </div>
          </div>
          <a href="/pages/customer-review" target="_blank" rel="noopener noreferrer" class="all_reviews_link"
            >All reviews</a
          >
        </div>
      </div>
    </div>
  `
}

export const productDetailsBlock = (data): string => {
  return /* HTML */ `
    <div class="product_details_block">
      <ul class="product_details_accordion">
        ${data
          .map((q, i) => {
            return /* HTML */ `
              <li
                class="product_details_accordion_block ${q.class}"
                data-visability="${i + 1}"
                id="${q.title.replace(/\s+/g, '')}"
              >
                <div class="product_details_accordion_link">
                  <p>${q.title}</p>
                  <span class="product_details_icon">${svg.arrowAccordionIconProduct}</span>
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

export const reviewsBlock = () => {
  return /* HTML */ `
    <div class="reviews_block">
      <div class="new_container">
        <h2>Join over 85,000+ satisfied customers who trust roofing4us for quality and service</h2>
        <div class="reviews_list">
          <iframe
            name="full-page-widget_frame"
            id="full-page-widget_frame"
            src="https://widget.reviews.co.uk/vertical/widget?elementId=full-page-widget&amp;version=1&amp;&amp;store=insulation4us&amp;primaryClr=%23e0162b&amp;layout=fullWidth&amp;height=500&amp;numReviews=21"
            frameborder="0"
            width="100%"
            title="Reviews Vertical Widget"
            style="min-width: 170px;"
            height="604"
          ></iframe>
        </div>
      </div>
    </div>
  `
}

export const fAQBlock = (data): string => {
  return /* HTML */ `
    <div class="faq_block" id="FAQ">
      <div class="new_container">
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
    </div>
  `
}

export const comparisonTableBlock = (data): string => {
  return /* HTML */ `
    <div class="comparison_table_block">
      <div class="new_container">
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

          <div class="competitors_row">
            <div class="header_table">
              <div class="table_cell">
                <h3>${data.myTitle}</h3>
              </div>
            </div>
            <div class="body_table">
              ${data.benefits
                .map(
                  item => /* HTML */ `
                    <div class="my_cell table_cell">
                      <p>${item.myDescr}</p>
                    </div>
                  `
                )
                .join('')}
            </div>
          </div>

          <div class="my_row is_active">
            <div class="header_table">
              <div class="table_cell">
                <h3>${data.competitorsTitle}</h3>
              </div>
            </div>
            <div class="body_table">
              ${data.benefits
                .map(
                  item => /* HTML */ `
                    <div class="competitors_cell table_cell">
                      <p>${item.competitorsDescr}</p>
                    </div>
                  `
                )
                .join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}

export const stickyBlock = (title: string, price: string) => {
  return /* HTML */ `
    <div class="sticky_block">
      <div class="sticky_product_title">${title}</div>
      <div class="sticky_product_price">${price}</div>
    </div>
  `
}
