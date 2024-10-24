import {
  startLog,
  $el,
  $$el,
  waitForElement,
  pushData,
  clarityInterval,
  loadScriptsOrStyles,
  visibilityOfTime
} from '../../libraries'
import {
  bestSellerLabelBlock,
  boughtSoFarBlock,
  comparisonTableBlock,
  getFreeDeliveryBlock,
  mainBenefitsBlock,
  oneReviewBlock,
  productDetailsBlock,
  yourImpactBlock
} from './blocks'
import { svg, git, translations } from './data'
// @ts-ignore
import mainStyle from './main.css?raw'

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class NewPdp {
  device: 'mobile' | 'desktop'
  observer: null | MutationObserver

  constructor(device) {
    this.device = device
    this.observer = null

    this.init()
  }

  init() {
    startLog({ name: 'PDP v2 Major Release', dev: 'SKh' })
    // clarityInterval('')

    document.head.insertAdjacentHTML(
      'beforeend',
      `<link class="crs_font" href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">`
    )
    document.head.insertAdjacentHTML('beforeend', `<style class="crs_style">${mainStyle}</style>`)

    this.renderBestSellerLabelForPhoto()
    this.renderBoughtSoFarBlock()
    this.renderGetFreeDeliveryBlock()
    this.renderYourImpactBlock()
    this.renderOneReviewBlock()
    this.renderProductDetailsBlock()
    this.initAccordionProductDetails()
    this.toggleSeeMoreTxt()
    this.renderMainBenefits()
    this.renderComparisonTable()
  }

  renderBestSellerLabelForPhoto() {
    waitForElement('.product__main-photos').then(i => {
      const сontainerElement = $el('.product__main-photos') as HTMLElement

      if (!$el('.best_seller_label_block')) {
        сontainerElement.insertAdjacentHTML('afterbegin', bestSellerLabelBlock)
      }
    })
  }

  renderBoughtSoFarBlock() {
    waitForElement('#shopify-block-yotpo_product_reviews_ugc_star_rating_FVceyX').then(i => {
      const сontainerElement = $el('#shopify-block-yotpo_product_reviews_ugc_star_rating_FVceyX') as HTMLElement

      if (!$el('.bought_so_far_block')) {
        сontainerElement.insertAdjacentHTML('beforeend', boughtSoFarBlock())
      }
    })
  }

  renderGetFreeDeliveryBlock() {
    waitForElement('block-price').then(i => {
      const сontainerElement = $el('block-price') as HTMLElement

      if (!$el('.get_free_delivery_block')) {
        сontainerElement.insertAdjacentHTML('afterend', getFreeDeliveryBlock())
      }
    })
  }

  renderYourImpactBlock() {
    waitForElement('block-buy-buttons').then(i => {
      const сontainerElement = $el('block-buy-buttons') as HTMLElement

      if (!$el('.your_impact_block')) {
        сontainerElement.insertAdjacentHTML('afterend', yourImpactBlock())
      }
    })
  }

  renderOneReviewBlock() {
    waitForElement('.your_impact_block').then(i => {
      const сontainerElement = $el('.your_impact_block') as HTMLElement

      if (!$el('.one_review_block')) {
        сontainerElement.insertAdjacentHTML('afterend', oneReviewBlock())
      }
    })
  }

  renderProductDetailsBlock() {
    waitForElement('.main_benefits_block').then(i => {
      const сontainerElement = $el('.main_benefits_block') as HTMLElement

      if (!$el('.product_details_block')) {
        сontainerElement.insertAdjacentHTML('beforebegin', productDetailsBlock())
      }
    })
  }

  initAccordionProductDetails() {
    let lookForJquery = setInterval(() => {
      if (typeof jQuery === 'function' && $el('.product_details_block')) {
        clearInterval(lookForJquery)
        console.log('product_details_block')
        $('.product_details_accordion_block').eq(0).addClass('active')
        $('.product_details_accordion_block .product_details_accordion_link').eq(0).addClass('active')
        $('.product_details_accordion_block .product_details_accordion_lists').eq(0).css('display', 'flex')

        $('.product_details_accordion_link').on('click', function (e: any) {
          // pushData(
          //   'exp_pdp_improve_accordion_01',
          //   `${e.currentTarget.querySelector('p').textContent}`,
          //   'Accordion',
          //   'Step 3: Device Details Frequently Asked Questions'
          // )
          $(this).toggleClass('active')
          $(this).closest('li').toggleClass('active')
          $(this).next('.product_details_accordion_lists').slideToggle()

          $('.product_details_accordion_link').not(this).next('.product_details_accordion_lists').slideUp()
          $('.product_details_accordion_link').not(this).removeClass('active').closest('li').removeClass('active')
        })
      }
    }, 1000)
  }

  toggleSeeMoreTxt() {
    waitForElement('.see_more_block').then(i => {
      const seeMoreBtn = $el('.see_more_block') as HTMLElement

      seeMoreBtn.addEventListener('click', e => {
        if (e.currentTarget && !e.currentTarget.classList.contains('is_open')) {
          e.currentTarget.classList.add('is_open')
          e.currentTarget.querySelector('div').textContent = 'See Less'
          e.currentTarget.previousElementSibling.classList.remove('blur_txt')
        } else {
          e.currentTarget.classList.remove('is_open')
          e.currentTarget.querySelector('div').textContent = 'See More'
          e.currentTarget.previousElementSibling.classList.add('blur_txt')
        }
      })
    })
  }

  renderMainBenefits() {
    waitForElement('.product-single__meta').then(i => {
      const сontainerElement = $el('.product-single__meta') as HTMLElement

      if (!$el('.main_benefits_block')) {
        сontainerElement.insertAdjacentHTML('beforeend', mainBenefitsBlock(translations['en'].mainBenefits))
      }
    })
  }

  renderComparisonTable() {
    waitForElement('.main_benefits_block').then(i => {
      const сontainerElement = $el('.main_benefits_block') as HTMLElement

      if (!$el('.comparison_table_block')) {
        сontainerElement.insertAdjacentHTML('afterend', comparisonTableBlock(translations['en'].comparisonTable))
      }
    })
  }
}

waitForElement('.page-content--product').then(i => {
  new NewPdp(device)
})
