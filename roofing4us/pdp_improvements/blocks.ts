import { svg, git } from './data'

export const keySellingPointsBlock = (data): string => {
  return /* HTML */ `
    <div class="key_selling_points_block">
      <ul class="key_selling_points_list">
        ${data
          .map(point => {
            return /* HTML */ `
              <li class="key_selling_points_item">
                ${point.icon}
                <div>
                  <h3>${point.title}</h3>
                  <p>${point.txt}</p>
                </div>
              </li>
            `
          })
          .join('')}
      </ul>
    </div>
  `
}

export const anchorMenu = (data): string => {
  return /* HTML */ `
    <div class="anchor_menu">
      <ul class="anchor_menu_list">
        <li class="anchor_menu_item">
          <a href="#General" class="anchor_menu_link is_active" data-target="General">
            <span>General</span>
          </a>
        </li>
        ${data
          .map((txt: string) => {
            return /* HTML */ `
              <li class="anchor_menu_item">
                <a href="#${txt.replace(/\s+/g, '')}" class="anchor_menu_link" data-target="${txt.replace(/\s+/g, '')}">
                  <span>${txt}</span>
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

export const tooltipBlock = (tooltipTxt: string): string => {
  return /* HTML */ ` <div class="tooltip_zone" data-tooltip data-title="${tooltipTxt}">${svg.tooltipIcon}</div> `
}

export const inStockBlock = (): string => {
  return /* HTML */ `
    <div class="in_stock_block">
      <span class="in_stock_icon"></span>
      <p class="in_stock_txt">In stock, ready to ship</p>
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
    <a href="/pages/customer-review" target="_blank" rel="noopener noreferrer" class="one_review_block ${data.class}">
      ${window.innerWidth >= 768
        ? `<div class="img_wrapper">
        <img src="${data.img}" alt="photo product" />
      </div>`
        : ''}
      <div class="info_wrapper">
        ${window.innerWidth < 768 ? `<span class="all_reviews_link">All reviews</span>` : ''}
        <p class="info_descr">${data.txt}</p>
        <div class="name_stars_wrapper">
          <div class="name_stars_container">
            <span class="name_review">${data.name}</span>
            <div class="stars_summary">
              <div class="stars_wrapper">${data.starIcons}</div>
              <span>${data.rating}</span>
            </div>
          </div>
          ${window.innerWidth >= 768 ? `<span class="all_reviews_link">All reviews</span>` : ''}
        </div>
      </div>
    </a>
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

export const videoBlock = (video: string): string => {
  return /* HTML */ `
    <div class="video_block">
      <div class="new_container">
        <img src="${video}" alt="photo product roofing4us" />
      </div>
    </div>
  `
}

export const reviewsBlock = () => {
  return /* HTML */ `
    <div class="reviews_block">
      <div class="new_container">
        ${window.innerWidth >= 768
          ? ` <h2>Join over 85,000+ satisfied customers who trust roofing4us for quality and service</h2>`
          : ' <h2>Customer Reviews</h2>'}

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
      ${window.innerWidth >= 768
        ? `<div class="sticky_product_info">
        <div class="sticky_product_title">${title}</div>
        <div class="sticky_product_price">${price}</div>
      </div>`
        : ``}
      <div class="sticky_btn_wrapper">
        <div class="sticky_add_to_cart">
          <span class="txt">Add to cart </span>
          <span class="hide" data-loader="">
            <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-spinner" viewBox="0 0 20 20">
              <path
                d="M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z"
                fill="#919EAB"
              ></path>
            </svg>
          </span>
        </div>

        <div class="sticky_call_to_inquire">
          <span class="txt">Call to inquire</span>
        </div>
      </div>
    </div>
  `
}

export const sliderBlock = (data): string => {
  return /* HTML */ `
    <div class="slider_block">
      <div class="slider_wrapper">
        ${data
          .map((img: string) => {
            return /* HTML */ `
              <div data-fancybox="demo" data-src="${img}" class="slider_item">
                <img src="${img}" alt="photo product roofing4us" />
              </div>
            `
          })
          .join('')}
      </div>
    </div>
  `
}

export const additionalImgBlock = (data): string => {
  return /* HTML */ `
    <ul class="additional_img_block">
      ${data
        .map((img: string) => {
          return /* HTML */ `
            <li>
              <img src="${img}" alt="photo product roofing4us" />
            </li>
          `
        })
        .join('')}
    </ul>
  `
}
