import {
  startLog,
  $el,
  $$el,
  waitForElement,
  pushData,
  clarityInterval,
  visibilityOfTime,
  scrollToElement,
  scrollToHtmlElement,
  loadScriptsOrStyles
} from '../../libraries'
import {
  anchorMenu,
  boughtSoFarBlock,
  comparisonTableBlock,
  fAQBlock,
  inStockBlock,
  keySellingPointsBlock,
  newProductSalesPointsBlock,
  oneReviewBlock,
  productDetailsBlock,
  reviewsBlock,
  stickyBlock,
  tooltipBlock
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

    this.addIdGeneral()
    this.renderkeySellingPointsBlock()
    this.renderBoughtSoFarBlock()
    this.renderTooltipBlock()
    this.initTooltipBlock()
    this.renderInStockBlock()
    this.renderBtnsWrapper()
    this.replaceBtnsPayToBtnsWrapper()
    this.renderNewProductSalesPointsBlock()
    this.renderOneReviewBlockFirst()
    if (this.device === 'desktop') {
      this.renderOneReviewBlockSecond()
    }
    this.clickAllReviewsLink()
    this.renderProductDetailsBlock()
    this.replaceInformationToProductDetailsBlock()
    this.replaceFrequentlyBoughtTogetherBlock()
    this.changeTxtViewProduct()
    this.renderReviewsBlock()
    this.renderFAQBlock()
    this.renderComparisonTable()

    this.initAccordionProductDetails(
      '.product_details_block',
      '.product_details_accordion_block',
      '.product_details_accordion_link',
      '.product_details_accordion_lists'
    )
    this.initAccordionProductDetails(
      '.faq_block',
      '.faq_accordion_block',
      '.faq_accordion_link',
      '.faq_accordion_lists'
    )

    this.renderAnchorMenu()
    this.initializeAnchorMenu()

    this.renderStickyBlock()
    this.toggleStickyBlockVisibility()
  }

  addIdGeneral() {
    waitForElement(
      '.product-template__container > .product-section .detail_page_padding .product-content-section'
    ).then(i => {
      $el('.product-template__container > .product-section .detail_page_padding .product-content-section').setAttribute(
        'id',
        'General'
      )
    })
  }

  renderkeySellingPointsBlock() {
    waitForElement('.product-single__media-wrapper').then(i => {
      const сontainerElements = $$el('.product-single__media-wrapper') as NodeListOf<HTMLElement>

      сontainerElements.forEach(сontainerElement => {
        if (!сontainerElement.classList.contains('hide')) {
          if (!$el('.key_selling_points_block')) {
            сontainerElement.insertAdjacentHTML(
              'beforeend',
              keySellingPointsBlock(translations[this.pathName].keySellingPointsTxt)
            )
          }
        }
      })
    })
  }

  renderBoughtSoFarBlock() {
    if (this.device === 'desktop') {
      waitForElement(
        '.product-template__container > .product-section .detail_page_padding .product-content-section'
      ).then(i => {
        const сontainerElement = $el(
          '.product-template__container > .product-section .detail_page_padding .product-content-section'
        ) as HTMLElement

        if (!$el('.bought_so_far_block')) {
          сontainerElement.insertAdjacentHTML(
            'afterbegin',
            boughtSoFarBlock(translations[this.pathName].boughtSoFarTxt)
          )
        }
      })
    }
  }

  renderTooltipBlock() {
    waitForElement('.free_delivery p').then(i => {
      const сontainerElement = $el('.free_delivery p') as HTMLElement

      if (!$el('.tooltip_zone')) {
        сontainerElement.insertAdjacentHTML('beforeend', tooltipBlock(translations[this.pathName].tooltipTxt))
      }
    })
  }

  initTooltipBlock() {
    loadScriptsOrStyles([
      'https://unpkg.com/@popperjs/core@2.11.6/dist/umd/popper.min.js',
      'https://unpkg.com/tippy.js@6.3.7/dist/tippy-bundle.umd.min.js'
    ]).then(async () => {
      let s = setInterval(() => {
        if (typeof tippy === 'function') {
          clearInterval(s)
          $$el('[data-tooltip]').forEach(el => {
            tippy(el, {
              content: el.getAttribute('data-title'),
              // trigger: 'click',
              allowHTML: true,
              arrow: true,
              arrowType: 'round',
              appendTo: function () {
                return el.closest('.product-page-sku')
              },
              placement: 'bottom',
              interactive: true,
              onShow(instance: any) {},
              onTrigger(e: any) {},
              onHide(instance: any) {}
            })
          })
        }
      }, 100)
    })
  }

  renderInStockBlock() {
    waitForElement('.product-form .product-form__controls-group--submit').then(i => {
      const сontainerElement = $el('.product-form .product-form__controls-group--submit') as HTMLElement

      if (!$el('.in_stock_block')) {
        сontainerElement.insertAdjacentHTML('beforebegin', inStockBlock())
      }
    })
  }

  renderBtnsWrapper() {
    waitForElement('.product-form .product-form__controls-group--submit').then(i => {
      const сontainerElement = $el('.product-form .product-form__controls-group--submit') as HTMLElement

      if (!$el('.btns_wrapper_payment')) {
        сontainerElement.insertAdjacentHTML('afterbegin', `<div class="btns_wrapper_payment"></div>`)
      }
    })
  }

  replaceBtnsPayToBtnsWrapper() {
    waitForElement('.btns_wrapper_payment').then(() => {
      waitForElement('.product-form__cart-submit').then(i => {
        this.moveElement('.product-form__cart-submit', '.btns_wrapper_payment', 'afterbegin')
      })
      waitForElement('[data-shopify="payment-button"]').then(i => {
        this.moveElement('[data-shopify="payment-button"]', '.btns_wrapper_payment', 'beforeend')
      })
    })
  }

  renderNewProductSalesPointsBlock() {
    waitForElement('.product-template__container > .product-section .detail_page_padding .product-atc-section').then(
      i => {
        const сontainerElement = $el(
          '.product-template__container > .product-section .detail_page_padding .product-atc-section'
        ) as HTMLElement

        if (!$el('.new_product_sales_points_block')) {
          сontainerElement.insertAdjacentHTML(
            'beforeend',
            newProductSalesPointsBlock(translations[this.pathName].newProductSalesPointsTxt)
          )
        }
      }
    )
  }

  renderOneReviewBlockFirst() {
    waitForElement('.new_product_sales_points_block').then(i => {
      const сontainerElement = $el('.new_product_sales_points_block') as HTMLElement

      if (!$el('.one_review_block.first_review')) {
        сontainerElement.insertAdjacentHTML('afterend', oneReviewBlock(translations[this.pathName].oneReviewBlockFirst))
      }
    })
  }

  renderOneReviewBlockSecond() {
    waitForElement('.product-template__container > .product-section .detail_page_padding .product-atc-section').then(
      i => {
        const сontainerElement = $el(
          '.product-template__container > .product-section .detail_page_padding .product-atc-section'
        ) as HTMLElement

        if (!$el('.one_review_block.second_review')) {
          сontainerElement.insertAdjacentHTML(
            'beforeend',
            oneReviewBlock(translations[this.pathName].oneReviewBlockSecond)
          )
        }
      }
    )
  }

  clickAllReviewsLink() {
    waitForElement('.all_reviews_link').then(i => {
      const link = $$el('.all_reviews_link') as NodeListOf<HTMLElement>

      link.forEach(i => {
        i.addEventListener('click', () => {
          pushData('exp_new_pdp_button_03', 'All reviews', 'Click', 'Review section')
        })
      })
    })
  }

  renderProductDetailsBlock() {
    waitForElement('.one_review_block.first_review').then(i => {
      const сontainerElement = $el('.one_review_block.first_review') as HTMLElement

      if (!$el('.product_details_block')) {
        сontainerElement.insertAdjacentHTML(
          'afterend',
          productDetailsBlock(translations[this.pathName].productDetailsTxt)
        )
      }
    })
  }

  replaceInformationToProductDetailsBlock() {
    waitForElement('.product_details_block').then(() => {
      this.moveElement(
        '#productDescription',
        '.product_details_block .new_description .product_details_accordion_lists > div',
        'afterbegin'
      )
      this.moveElement(
        '#productSpecs',
        '.product_details_block .new_technical_specs .product_details_accordion_lists > div',
        'afterbegin'
      )
      this.moveElement(
        '#productDatasheets',
        '.product_details_block .new_datasheets .product_details_accordion_lists > div',
        'afterbegin'
      )
      this.moveElement(
        '#productReviews',
        '.product_details_block .new_reviews .product_details_accordion_lists > div',
        'afterbegin'
      )
    })
  }

  replaceFrequentlyBoughtTogetherBlock() {
    waitForElement('.description-related-products').then(() => {
      waitForElement('.one_review_block.first_review').then(i => {
        this.moveElement('.description-related-products', '.one_review_block.first_review', 'afterend')
      })
    })
  }

  moveElement(sourceSelector: string, targetSelector: string, place: InsertPosition) {
    waitForElement(sourceSelector).then(() => {
      const sourceElement = $el(sourceSelector) as HTMLElement
      const targetElement = $el(targetSelector) as HTMLElement
      targetElement.insertAdjacentElement(place, sourceElement)
    })
  }

  changeTxtViewProduct() {
    waitForElement('.description-related-products b').then(() => {
      const elements = $$el('.description-related-products b') as NodeListOf<HTMLElement>
      elements.forEach(i => {
        i.textContent = 'View product'
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
                  scrollToHtmlElement(closestElement, 50)
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

  renderAnchorMenu() {
    waitForElement('#PageContainer').then(i => {
      const сontainerElement = $el('#PageContainer') as HTMLElement

      if (!$el('.anchor_menu')) {
        сontainerElement.insertAdjacentHTML('beforebegin', anchorMenu(translations[this.pathName].anchorMenuTxt))
      }
    })
  }

  initializeAnchorMenu() {
    waitForElement('.product_details_accordion').then(i => {
      const breadcrumbs = $el('.breadcrumbs') as HTMLElement
      const anchorMenu = $el('.anchor_menu')
      const menuLinks = $$el('.anchor_menu_link')
      const sections = Array.from(menuLinks).map(link => $el(link.getAttribute('href')))

      const handleScroll = () => {
        if (breadcrumbs && breadcrumbs.getBoundingClientRect().top <= 0) {
          anchorMenu.classList.add('is_sticky')
        } else {
          anchorMenu.classList.remove('is_sticky')
        }
      }

      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            const id = entry.target.getAttribute('id')
            const link = $el(`.anchor_menu_link[href="#${id}"]`)

            if (entry.isIntersecting) {
              // Проверяем, если это аккордеон и виден элемент с классом product_details_accordion_lists
              const accordionContent = entry.target.querySelector('.product_details_accordion_lists')
              if (accordionContent) {
                const accordionRect = accordionContent.getBoundingClientRect()
                if (
                  (accordionRect.top >= 110 && accordionRect.top <= window.innerHeight) ||
                  (accordionRect.bottom >= -100 && accordionRect.bottom <= window.innerHeight)
                ) {
                  link.classList.add('is_active')
                } else {
                  link.classList.remove('is_active')
                }
              } else {
                // Если это не аккордеон, добавляем класс is_active, когда блок виден
                link.classList.add('is_active')
              }
            } else {
              link.classList.remove('is_active')
            }
          })
        },
        { threshold: [0.5] }
      )

      sections.forEach(section => {
        observer.observe(section)
      })

      menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
          e.preventDefault()
          const targetId = this.getAttribute('data-target')
          const targetElement = $el(`#${targetId}`)

          if (targetElement) {
            if (targetElement.classList.contains('product_details_accordion_block')) {
              ;(targetElement?.querySelector('.product_details_accordion_link') as HTMLElement)?.click()
            } else {
              scrollToHtmlElement(targetElement, 80)
            }
          }
        })
      })

      window.addEventListener('scroll', handleScroll)
      handleScroll()
    })
  }

  renderStickyBlock() {
    waitForElement('.product-form__cart-submit').then(i => {
      const сontainerElement = $el('body') as HTMLElement
      const title = $el('.template-product h1.product-single__title').textContent
      const price = $el('.price-item').textContent
      const addToCartButton = $el('.product-form__cart-submit') as HTMLElement

      if (!$el('.sticky_block')) {
        сontainerElement.insertAdjacentHTML('beforeend', stickyBlock(title, price))
      }
    })
  }

  toggleStickyBlockVisibility() {
    waitForElement('.product-template__container > .product-section .product-atc-section .product-form').then(() => {
      waitForElement('.sticky_block').then(() => {
        const element = $el('.sticky_block') as HTMLElement
        const elemClose = $el(
          '.product-template__container > .product-section .product-atc-section .product-form'
        ) as HTMLElement

        function visible() {
          const options = {
            root: null,
            threshold: 0
          }

          let observerSticky = new IntersectionObserver(entries => {
            entries.forEach(i => {
              if (i.isIntersecting) {
                if ($el('body').classList.contains('sticky_block_visible')) {
                  $el('body').classList.remove('sticky_block_visible')
                }
                element.style.display = 'none'
              } else {
                $el('body').classList.add('sticky_block_visible')
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
}

waitForElement('.product-template__container').then(i => {
  new NewPdp(device)
})
