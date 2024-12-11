import {
  startLog,
  $el,
  $$el,
  waitForElement,
  pushData,
  clarityInterval,
  visibilityOfTime,
  scrollToElement,
  scrollToHtmlElement
} from '../../libraries'
import {
  boughtSoFarBlock,
  comparisonTableBlock,
  fAQBlock,
  mainBenefitsBlock,
  newProductSalesPointsBlock,
  oneReviewBlock,
  productDetailsBlock,
  reviewsBlock,
  stickyBlock
} from './blocks'
import { svg, git, translations } from './data'
// @ts-ignore
import mainStyle from './main.css?raw'

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class NewPdp {
  device: 'mobile' | 'desktop'
  observer: null | MutationObserver
  pathName: string

  constructor(device) {
    this.device = device
    this.observer = null
    this.pathName = this.findTranslationKey(window.location.pathname)

    this.init()
  }

  findTranslationKey(path: string): string {
    const keys = Object.keys(translations)
    return keys.find(key => path.includes(key)) || ''
  }

  init() {
    startLog({ name: 'PDP improvements', dev: 'SKh' })
    // clarityInterval('new_pdp')

    document.head.insertAdjacentHTML('beforeend', `<style class="crs_style">${mainStyle}</style>`)

    // this.renderBoughtSoFarBlock()
    // this.renderNewProductSalesPointsBlock()
    // this.renderOneReviewBlock()
    // this.clickAllReviewsLink()
    // this.renderProductDetailsBlock()
    // this.renderMainBenefits()

    this.renderReviewsBlock()
    this.renderFAQBlock()
    this.renderComparisonTable()

    // this.initAccordionProductDetails(
    //   '.product_details_block',
    //   '.product_details_accordion_block',
    //   '.product_details_accordion_link',
    //   '.product_details_accordion_lists'
    // )
    this.initAccordionProductDetails(
      '.faq_block',
      '.faq_accordion_block',
      '.faq_accordion_link',
      '.faq_accordion_lists'
    )

    // if (this.device === 'mobile') {
    //   this.renderStickyBlock()
    //   this.toggleStickyBlockVisibility()
    //   this.renderColorWrapper()
    //   this.clickAddToCartStickyBtn()
    // }
  }

  renderBoughtSoFarBlock() {
    if (this.device === 'desktop') {
      waitForElement('#shopify-block-yotpo_product_reviews_ugc_star_rating_FVceyX').then(i => {
        const сontainerElement = $el('#shopify-block-yotpo_product_reviews_ugc_star_rating_FVceyX') as HTMLElement

        if (!$el('.bought_so_far_block')) {
          сontainerElement.insertAdjacentHTML('beforeend', boughtSoFarBlock(translations[this.pathName].boughtSoFarTxt))
        }
      })
    }
    if (this.device === 'mobile') {
      waitForElement('.page-content--product .product-single__meta').then(i => {
        const сontainerElement = $el('.page-content--product .product-single__meta') as HTMLElement

        if (!$el('.bought_so_far_block')) {
          сontainerElement.insertAdjacentHTML(
            'afterbegin',
            boughtSoFarBlock(translations[this.pathName].boughtSoFarTxt)
          )
        }
      })
    }
  }

  renderNewProductSalesPointsBlock() {
    waitForElement('product-inventory').then(i => {
      const сontainerElement = $el('product-inventory') as HTMLElement

      if (!$el('.new_product_sales_points_block')) {
        сontainerElement.insertAdjacentHTML(
          'beforebegin',
          newProductSalesPointsBlock(translations[this.pathName].newProductSalesPointsTxt)
        )
      }
    })
  }

  renderOneReviewBlock() {
    waitForElement('block-buy-buttons').then(i => {
      const сontainerElement = $el('block-buy-buttons') as HTMLElement

      if (!$el('.one_review_block')) {
        сontainerElement.insertAdjacentHTML('afterend', oneReviewBlock(translations[this.pathName].oneReviewBlock))
      }
    })
  }

  clickAllReviewsLink() {
    waitForElement('.all_reviews_link').then(i => {
      waitForElement('.yotpo-main-layout').then(i => {
        const link = $el('.all_reviews_link') as HTMLElement

        link.addEventListener('click', () => {
          pushData('exp_new_pdp_button_03', 'All reviews', 'Click', 'Review section')
          scrollToElement('.yotpo-main-layout')
        })
      })
    })
  }

  renderProductDetailsBlock() {
    waitForElement('.main_benefits_block').then(i => {
      const сontainerElement = $el('.main_benefits_block') as HTMLElement

      if (!$el('.product_details_block')) {
        сontainerElement.insertAdjacentHTML(
          'beforebegin',
          productDetailsBlock(translations[this.pathName].productDetailsTxt)
        )
      }
    })
  }

  renderMainBenefits() {
    waitForElement('.product-single__meta').then(i => {
      const сontainerElement = $el('.product-single__meta') as HTMLElement

      if (!$el('.main_benefits_block')) {
        сontainerElement.insertAdjacentHTML('beforeend', mainBenefitsBlock(translations[this.pathName].mainBenefits))
      }
    })
  }

  renderStickyBlock() {
    waitForElement('.product-single__meta block-buy-buttons .add-to-cart').then(i => {
      const сontainerElement = $el('body') as HTMLElement
      const addToCartButton = $el('.product-single__meta block-buy-buttons .add-to-cart span') as HTMLElement
      const restockButton = $el('.restock-rocket-button-container button') as HTMLElement
      let txtBtn = addToCartButton.textContent || ''
      let additonalClass = ''

      if (restockButton) {
        additonalClass = 'notify_available'
        txtBtn = restockButton.textContent || ''
      }

      if (!$el('.sticky_block')) {
        сontainerElement.insertAdjacentHTML('beforeend', stickyBlock(txtBtn, additonalClass))
      }
    })
  }

  toggleStickyBlockVisibility() {
    waitForElement('block-buy-buttons').then(() => {
      waitForElement('.sticky_block').then(() => {
        const element = $el('.sticky_block') as HTMLElement
        const elemClose = $el('block-buy-buttons') as HTMLElement

        function visible() {
          const options = {
            root: null,
            threshold: 0
          }

          let observerSticky = new IntersectionObserver(entries => {
            entries.forEach(i => {
              if (i.isIntersecting) {
                element.style.display = 'none'
              } else {
                element.style.display = 'flex'
              }

              observerSticky.unobserve(i.target)
            })

            observerSticky.disconnect()
          }, options)

          observerSticky.observe(elemClose)
        }

        window.addEventListener('scroll', () => {
          visible()
        })

        visible()
      })
    })
  }

  clickAddToCartStickyBtn() {
    waitForElement('.sticky_block').then(i => {
      waitForElement('.add_to_cart_btn').then(i => {
        const btnSticky = $el('.add_to_cart_btn') as HTMLElement

        btnSticky.addEventListener('click', () => {
          pushData('exp_new_pdp_button_01', 'Add to cart', 'Click', 'Stiky section')
          const restockButton = $el('.restock-rocket-button-container .restock-rocket-button-cover') as HTMLElement
          const addToCartButton = $el('.product-single__meta block-buy-buttons .add-to-cart') as HTMLElement

          if (restockButton) {
            restockButton.click()
          } else {
            addToCartButton.click()
          }
        })
      })
    })
  }

  renderReviewsBlock() {
    waitForElement('#shopify-section-product-template.shopify-section').then(i => {
      const сontainerElement = $el('#shopify-section-product-template.shopify-section') as HTMLElement

      if (!$el('.reviews_block')) {
        сontainerElement.insertAdjacentHTML('afterend', reviewsBlock())
      }
    })
  }

  renderFAQBlock() {
    waitForElement('.reviews_block').then(i => {
      let сontainerElement = $el('.reviews_block') as HTMLElement

      if (!$el('.faq_block')) {
        сontainerElement.insertAdjacentHTML('afterend', fAQBlock(translations[this.pathName].fAQTxt))
      }
    })
  }

  renderComparisonTable() {
    waitForElement('.faq_block').then(i => {
      const сontainerElement = $el('.faq_block') as HTMLElement

      if (!$el('.comparison_table_block')) {
        сontainerElement.insertAdjacentHTML(
          'afterend',
          comparisonTableBlock(translations[this.pathName].comparisonTable)
        )
      }
    })
  }

  initAccordionProductDetails(
    containerClass: string,
    accordionBlockClass: string,
    accordionLinkClass: string,
    accordionListsClass: string
  ) {
    let lookForJquery = setInterval(() => {
      if (typeof jQuery === 'function' && $el(containerClass)) {
        clearInterval(lookForJquery)
        console.log('Accordion initialized for', containerClass)

        $(`${accordionBlockClass}`).eq(0).addClass('active')
        $(`${accordionBlockClass} ${accordionLinkClass}`).eq(0).addClass('active')
        $(`${accordionBlockClass} ${accordionListsClass}`).eq(0).css('display', 'flex')

        $(`${accordionLinkClass}`).on('click', function (e: any) {
          $(this).toggleClass('active')
          $(this).closest('li').toggleClass('active')
          $(this).next(accordionListsClass).slideToggle()

          $(`${accordionLinkClass}`).not(this).next(accordionListsClass).slideUp()
          $(`${accordionLinkClass}`).not(this).removeClass('active').closest('li').removeClass('active')

          if (containerClass === '.product_details_block') {
            setTimeout(() => {
              const target = e.target as HTMLElement
              const closestElement = target.closest('.product_details_accordion_block') as HTMLElement

              if (closestElement) {
                if (window.innerWidth < 768) {
                  scrollToHtmlElement(closestElement, 90)
                } else {
                  scrollToHtmlElement(closestElement, 0)
                }
              }
            }, 400)
            if (e.currentTarget.classList.contains('active')) {
              pushData(
                'exp_new_pdp_dropdown_02',
                `Open - ${e.currentTarget.querySelector('p').textContent}`,
                'Click',
                'Product details'
              )
            } else {
              pushData(
                'exp_new_pdp_dropdown_03',
                `Close - ${e.currentTarget.querySelector('p').textContent}`,
                'Click',
                'Product details'
              )
            }
          }

          if (containerClass === '.faq_block') {
            if (e.currentTarget.classList.contains('active')) {
              pushData(
                'exp_new_pdp_dropdown_04',
                `Open - ${e.currentTarget.querySelector('p').textContent}`,
                'Click',
                'FAQ'
              )
            } else {
              pushData(
                'exp_new_pdp_dropdown_05',
                `Close - ${e.currentTarget.querySelector('p').textContent}`,
                'Click',
                'FAQ'
              )
            }
          }
        })
      }
    }, 1000)
  }
}

waitForElement('.product-template__container').then(i => {
  new NewPdp(device)
})
