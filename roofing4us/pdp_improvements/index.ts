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
  additionalImgBlock,
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
  sliderBlock,
  stickyBlock,
  tooltipBlock,
  videoBlock
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
    return keys.find(key => decodeURIComponent(path).includes(decodeURIComponent(key))) || ''
  }

  init() {
    startLog({ name: 'PDP improvements', dev: 'SKh' })
    clarityInterval('new_pdp')

    document.head.insertAdjacentHTML('beforeend', `<style class="crs_style">${mainStyle}</style>`)

    this.addIdGeneral()
    this.changeTxtBannerCustomerReview()
    if (this.device === 'desktop') {
      this.renderkeySellingPointsBlock()
      this.renderAdditionalImgBlock()
    }
    this.addClassOldSlider()
    this.renderBoughtSoFarBlock()
    this.renderTooltipBlock()
    this.initTooltipBlock()
    this.renderInStockBlock()
    this.renderBtnsWrapper()
    this.replaceBtnsPayToBtnsWrapper()
    this.replaceCallFPBtn()
    this.renderNewProductSalesPointsBlock()
    this.renderOneReviewBlockFirst()
    if (this.device === 'desktop') {
      this.renderOneReviewBlockSecond()
    }
    this.renderVideoBlock()
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

    this.renderSliderBlock()
    this.initSlickCarousel()
    this.initFancybox()
    this.clickDescriptionRelatedProducts()
    this.visibleHandler()

    this.addClassLabelColor()
    this.addClassLabelLength()
    this.addClassLabelThicknessFirst()
    this.addClassLabelThickness()
    this.addClassLabelSize()

    // this.trackYouTubePlay()
    this.changeFisrtImgInMainSlider()

    if (this.device === 'mobile') {
      this.toggleChatWidgetVisibility()
    }
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

  changeTxtBannerCustomerReview() {
    waitForElement('.usp-banner-item a[href="/pages/customer-review"]').then(i => {
      const banner = $el('.usp-banner-item a[href="/pages/customer-review"]') as HTMLElement

      if (banner && banner.textContent && !banner.textContent.includes('198 Reviews')) {
        banner.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/0579/4807/8277/files/review-star-rating-Insulation4less-110-x-20.png?v=1637592262" alt="5 star rating">4.8  |  <span>198 Reviews</span>`
      }
    })
  }

  renderkeySellingPointsBlock() {
    waitForElement('.product-image-section').then(i => {
      const сontainerElement = $el('.product-image-section') as HTMLElement

      if (!$el('.key_selling_points_block')) {
        сontainerElement.insertAdjacentHTML(
          'beforeend',
          keySellingPointsBlock(translations[this.pathName].keySellingPointsTxt)
        )
      }
    })
  }

  addClassOldSlider() {
    waitForElement('div[data-thumbnail-slider]').then(i => {
      if (window.location.pathname.includes('/products/landmark-shingles-all-colors')) {
        console.log(`>>>>>>>>>>>>>>>>>>>`)
        const thumbnailSlider = $el('div[data-thumbnail-slider]') as HTMLElement
        thumbnailSlider.classList.add('old_slider')
      }
    })
  }

  renderAdditionalImgBlock() {
    waitForElement('.key_selling_points_block').then(i => {
      const сontainerElement = $el('.key_selling_points_block') as HTMLElement

      if (!$el('.additional_img_block') && translations[this.pathName].additionalImg.length > 0) {
        сontainerElement.insertAdjacentHTML('afterend', additionalImgBlock(translations[this.pathName].additionalImg))
      }
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

    if (this.device === 'mobile') {
      waitForElement('.product-template__container > .product-section .product-image-section').then(i => {
        const сontainerElement = $el(
          '.product-template__container > .product-section .product-image-section'
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
      const сontainerElements = $$el('.free_delivery p') as NodeListOf<HTMLElement>

      сontainerElements.forEach(сontainerElement => {
        if (!$el('.tooltip_zone')) {
          console.log(сontainerElement.textContent?.trim(), `сontainerElement.textContent`)
          const workingDays = this.extractWorkingDays(сontainerElement.textContent?.trim() || '')
          console.log(workingDays, `workingDays`)
          сontainerElement.insertAdjacentHTML(
            'beforeend',
            tooltipBlock(
              `While the estimated delivery time is <span>${workingDays}</span>, we often ship faster! Place your order today and we'll do our best to get it to you sooner. If the timeline doesn’t work for you, no worries – you can cancel your order anytime before it ships.`
            )
          )
        }
      })
    })
  }

  extractWorkingDays(text: string): string {
    const match = text.match(/Time (\d+-\d+ Working Days)/)
    return match ? match[1] : ''
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
                return el.closest('.free_delivery')
              },
              placement: window.innerWidth < 768 ? 'top' : 'bottom',
              interactive: true,
              onShow(instance: any) {
                pushData('exp_add_quality_visibility_01', 'Tooltip', 'view', 'Product benefits')
              },
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

  replaceCallFPBtn() {
    waitForElement('.call_F_P_tag2:not(.cfp_note)').then(() => {
      waitForElement('.in_stock_block').then(i => {
        this.moveElement('.call_F_P_tag2:not(.cfp_note)', '.in_stock_block', 'beforebegin')
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

  renderVideoBlock() {
    if (this.device === 'desktop') {
      waitForElement('.product-template__container > .product-section .product-image-section').then(i => {
        const сontainerElement = $el(
          '.product-template__container > .product-section .product-image-section'
        ) as HTMLElement

        if (!$el('.video_block') && translations[this.pathName].videoLink.length > 0) {
          сontainerElement.insertAdjacentHTML('beforeend', videoBlock(translations[this.pathName].videoLink))
        }
      })
    } else {
      waitForElement('.product-template__container > .product-section .detail_page_padding .product-atc-section').then(
        i => {
          const сontainerElement = $el(
            '.product-template__container > .product-section .detail_page_padding .product-atc-section'
          ) as HTMLElement

          if (!$el('.video_block') && translations[this.pathName].videoLink.length > 0) {
            сontainerElement.insertAdjacentHTML('beforeend', videoBlock(translations[this.pathName].videoLink))
          }
        }
      )
    }
  }

  clickAllReviewsLink() {
    waitForElement('.one_review_block').then(i => {
      const link = $$el('.one_review_block') as NodeListOf<HTMLElement>

      link.forEach(i => {
        i.addEventListener('click', () => {
          if (i.classList.contains('first_review')) {
            pushData('exp_add_quality_element_02', '1', 'click', 'Reviews')
          } else {
            pushData('exp_add_quality_element_02', '2', 'click', 'Reviews')
          }
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
      // this.moveElement(
      //   '#productDescription',
      //   '.product_details_block .new_description .product_details_accordion_lists > div',
      //   'afterbegin'
      // )
      waitForElement('.product_details_block .new_technical_specs .product_details_accordion_lists > div').then(() => {
        this.moveElement(
          '#productSpecs',
          '.product_details_block .new_technical_specs .product_details_accordion_lists > div',
          'afterbegin'
        )
      })
      waitForElement('.product_details_block .new_datasheets .product_details_accordion_lists > div').then(() => {
        this.moveElement(
          '#productDatasheets',
          '.product_details_block .new_datasheets .product_details_accordion_lists > div',
          'afterbegin'
        )
      })
      waitForElement('.product_details_block .delivery_information .product_details_accordion_lists > div').then(() => {
        this.moveElement(
          '#productShipping',
          '.product_details_block .delivery_information .product_details_accordion_lists > div',
          'afterbegin'
        )
      })
      waitForElement('.product_details_block .new_reviews .product_details_accordion_lists > div').then(() => {
        this.moveElement(
          '#productReviews',
          '.product_details_block .new_reviews .product_details_accordion_lists > div',
          'afterbegin'
        )
      })
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
                scrollToHtmlElement(closestElement, 43)
              }
            }, 400)

            if (!localStorage.getItem('anchorMenu')) {
              const menuLinks = $$el('.anchor_menu_link')
              menuLinks?.forEach(link => link.classList.remove('is_active'))
              if (e.currentTarget.classList.contains('active')) {
                pushData(
                  'exp_add_quality_button_08',
                  `${e.currentTarget.querySelector('p').textContent} - Open`,
                  'click',
                  'Product details'
                )
              } else {
                pushData(
                  'exp_add_quality_button_08',
                  `${e.currentTarget.querySelector('p').textContent} - Close`,
                  'click',
                  'Product details'
                )
              }
            }
          }

          if (containerClass === '.faq_block') {
            if (e.currentTarget.classList.contains('active')) {
              pushData(
                'exp_add_quality_button_03',
                `${e.currentTarget.querySelector('p').textContent} - Open`,
                'click',
                'FAQ'
              )
            } else {
              pushData(
                'exp_add_quality_button_03',
                `${e.currentTarget.querySelector('p').textContent} - Close`,
                'click',
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
      let сontainerElement = $el('#PageContainer') as HTMLElement
      let placement = 'beforebegin' as InsertPosition

      if (this.device === 'mobile') {
        сontainerElement = $el('body') as HTMLElement
        placement = 'afterbegin' as InsertPosition
      }

      if (!$el('.anchor_menu')) {
        сontainerElement.insertAdjacentHTML(placement, anchorMenu(translations[this.pathName].anchorMenuTxt))
      }
    })
  }

  initializeAnchorMenu() {
    waitForElement('.product_details_accordion').then(i => {
      const anchorElem = $el('#shopify-section-product-template') as HTMLElement
      const anchorMenu = $el('.anchor_menu')
      const menuLinks = $$el('.anchor_menu_link')
      const sections = Array.from(menuLinks).map(link => $el(link.getAttribute('href')))

      const handleScroll = () => {
        if (anchorElem && anchorElem.getBoundingClientRect().top <= 0) {
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

            if (!entry.isIntersecting) {
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

          menuLinks.forEach(link => link.classList.remove('is_active'))
          this.classList.add('is_active')

          pushData('exp_add_quality_button_01', this.textContent.trim(), 'click', 'Header')
          localStorage.setItem('anchorMenu', this.textContent.trim())

          if (targetElement) {
            if (
              targetElement.classList.contains('product_details_accordion_block') &&
              !targetElement.classList.contains('active')
            ) {
              ;(targetElement?.querySelector('.product_details_accordion_link') as HTMLElement)?.click()
            } else {
              scrollToHtmlElement(targetElement, 43)
            }
          }

          localStorage.removeItem('anchorMenu')
        })
      })

      window.addEventListener('scroll', handleScroll)
      handleScroll()
    })
  }

  renderStickyBlock() {
    waitForElement('.btns_wrapper_payment ').then(i => {
      const сontainerElement = $el('body') as HTMLElement
      const title = $el('.template-product h1.product-single__title').textContent
      const priceElement = $el('.price-item') as HTMLElement
      const price = priceElement.textContent

      if (!$el('.sticky_block') && price) {
        сontainerElement.insertAdjacentHTML('beforeend', stickyBlock(title, price))
      }

      this.observePriceChange(priceElement)
      this.observeCallForPrice()
      this.clickStickyAddToCartBtn()
      this.clickStickyCallForPriceBtn()
    })
  }

  observePriceChange(priceElement: HTMLElement) {
    const stickyPriceElement = $el('.sticky_product_price') as HTMLElement

    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === 'childList' && stickyPriceElement) {
          stickyPriceElement.textContent = priceElement.textContent
        }
      })
    })

    observer.observe(priceElement, { childList: true })
  }

  observeCallForPrice() {
    waitForElement('.product-single__meta').then(i => {
      const metaElement = $el('.product-single__meta') as HTMLElement
      const stickyCallBtn = $el('.sticky_call_to_inquire') as HTMLElement
      const stickyAddToCartBtn = $el('.sticky_add_to_cart') as HTMLElement

      const updateButtonState = () => {
        if (metaElement.classList.contains('callforprice_meta')) {
          stickyCallBtn.style.display = 'flex'
          stickyAddToCartBtn.style.display = 'none'
        } else {
          stickyCallBtn.style.display = 'none'
          stickyAddToCartBtn.style.display = 'flex'
        }
      }

      const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          if (mutation.attributeName === 'class') {
            updateButtonState()
          }
        })
      })

      observer.observe(metaElement, { attributes: true })
      updateButtonState()
    })
  }

  toggleStickyBlockVisibility() {
    waitForElement('.product-template__container > .product-section .product-atc-section .product-form').then(() => {
      waitForElement('.sticky_block').then(() => {
        const stickyBlock = $el('.sticky_block') as HTMLElement
        const elemClose = $el('.product-single__meta') as HTMLElement
        let isStickyVisible = false

        function handleVisibilityChange(entries: IntersectionObserverEntry[]) {
          entries.forEach(entry => {
            if (!entry.isIntersecting) {
              if (!isStickyVisible) {
                isStickyVisible = true
                $el('body').classList.add('sticky_block_visible')
                stickyBlock.classList.add('visible')
              }
            } else {
              if (isStickyVisible) {
                isStickyVisible = false
                $el('body').classList.remove('sticky_block_visible')
                stickyBlock.classList.remove('visible')
              }
            }
          })
        }

        const observerSticky = new IntersectionObserver(handleVisibilityChange, {
          root: null,
          threshold: 0.1
        })

        observerSticky.observe(elemClose)

        const initialRect = elemClose.getBoundingClientRect()
        handleVisibilityChange([
          {
            target: elemClose,
            isIntersecting: initialRect.top >= 0 && initialRect.bottom <= window.innerHeight
          } as unknown as IntersectionObserverEntry
        ])
      })
    })
  }

  clickStickyAddToCartBtn() {
    waitForElement('.sticky_add_to_cart').then(i => {
      waitForElement('.product-single__meta .btns_wrapper_payment .product-form__cart-submit').then(i => {
        const stickyAddToCartBtn = $el('.sticky_add_to_cart') as HTMLElement
        const addToCartBtn = $el(
          '.product-single__meta .btns_wrapper_payment .product-form__cart-submit'
        ) as HTMLElement

        const observer = new MutationObserver(mutations => {
          mutations.forEach(mutation => {
            if (mutation.attributeName === 'aria-disabled') {
              if (addToCartBtn.hasAttribute('aria-disabled')) {
                stickyAddToCartBtn.setAttribute('disabled', 'true')
              } else {
                stickyAddToCartBtn.removeAttribute('disabled')
              }
            }
          })
        })

        observer.observe(addToCartBtn, { attributes: true })

        stickyAddToCartBtn.addEventListener('click', () => {
          pushData('exp_add_quality_button_07', 'Add to cart', 'click', 'Sticky add to cart')
          addToCartBtn.click()
        })
      })
    })
  }

  clickStickyCallForPriceBtn() {
    waitForElement('.call_F_P_tag2 a').then(i => {
      waitForElement('.sticky_call_to_inquire').then(i => {
        const stickyCallInquireBtn = $el('.sticky_call_to_inquire') as HTMLElement
        const callInquireBtn = $el('.call_F_P_tag2 a') as HTMLElement

        stickyCallInquireBtn.addEventListener('click', () => {
          pushData('exp_add_quality_button_09', 'Sticky Call to inquire', 'click', 'Sticky Call to inquire')
          callInquireBtn.click()
        })
      })
    })
  }

  renderSliderBlock() {
    waitForElement('#ProductSection-product-template').then(i => {
      let сontainerElement = $el('#ProductSection-product-template') as HTMLElement
      let placement = 'afterbegin' as InsertPosition

      if (this.device === 'mobile') {
        сontainerElement = $el('.product-template__container > .product-section .product-image-section') as HTMLElement
        placement = 'afterend'
      }

      if (!$el('.slider_block') && translations[this.pathName].sideSliderImg.length > 0) {
        сontainerElement.insertAdjacentHTML(placement, sliderBlock(translations[this.pathName].sideSliderImg))
      }
    })
  }

  initSlickCarousel() {
    loadScriptsOrStyles([
      'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js'
    ]).then(async () => {
      let s = setInterval(() => {
        if (typeof jQuery('.slider_wrapper').slick === 'function' && $el('.slider_block')) {
          clearInterval(s)

          let slider = jQuery('.slider_wrapper').slick({
            slidesToShow: 12,
            vertical: true,
            infinite: false,
            arrows: true,
            prevArrow: ` <div class="prev_btn slider_arrow">${svg.sliderArroWIcon}</div> `,
            nextArrow: ` <div class="next_btn slider_arrow">${svg.sliderArroWIcon}</div> `,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 4,
                  arrows: true,
                  vertical: false
                }
              }
            ]
          })

          $el('.slider_block').style.display = 'block'
        }
      }, 100)
    })
  }

  initFancybox() {
    loadScriptsOrStyles([
      'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js',
      'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css'
    ]).then(async () => {
      let s = setInterval(() => {
        if (typeof Fancybox === 'function' && $el('.slider_block')) {
          clearInterval(s)
          Fancybox.bind('[data-fancybox="gallery"]', {
            Thumbs: {
              type: 'classic'
            }
          })

          $$el('[data-fancybox]').forEach((el, i) => {
            el.addEventListener('click', function () {
              pushData('exp_add_quality_image_01', `photo_${i + 1}`, 'click', 'PDP Images')
            })
          })
        }
      }, 100)
    })
  }

  clickDescriptionRelatedProducts() {
    waitForElement('.description-related-products a').then(i => {
      const descriptionRelatedProducts = $$el('.description-related-products a') as NodeListOf<HTMLElement>

      descriptionRelatedProducts.forEach(item => {
        item.addEventListener('click', e => {
          pushData(
            'exp_add_quality_button_02',
            (e.currentTarget as HTMLElement)?.getAttribute('href') || '',
            'click',
            'Frequently Bought Together'
          )
        })
      })
    })
  }

  visibleHandler() {
    waitForElement('.one_review_block.first_review').then(i => {
      visibilityOfTime('.one_review_block.first_review', 'exp_add_quality_visibility_02', 'Reviews', '1', 'view')
    })
    waitForElement('.one_review_block.second_review').then(i => {
      visibilityOfTime('.one_review_block.second_review', 'exp_add_quality_visibility_02', 'Reviews', '2', 'view')
    })
    waitForElement('.description-related-products').then(i => {
      visibilityOfTime(
        '.description-related-products',
        'exp_add_quality_visibility_03',
        'Frequently Bought Together',
        'Frequently Bought Together',
        'view'
      )
    })
    waitForElement('.reviews_block').then(i => {
      visibilityOfTime('.reviews_block', 'exp_add_quality_visibility_04', 'All Reviews', 'Reviews io', 'view')
    })
    waitForElement('.faq_block').then(i => {
      visibilityOfTime('.faq_block', 'exp_add_quality_visibility_05', 'FAQ', 'FAQ', 'view')
    })
    waitForElement('.comparison_table_block').then(i => {
      visibilityOfTime(
        '.comparison_table_block',
        'exp_add_quality_visibility_06',
        'Why Buy From Roofing4US?',
        'Why Buy From Roofing4US?',
        'view'
      )
    })
  }

  addClassLabelColor() {
    waitForElement('[for="SingleOptionSelector-0"]').then(i => {
      const label = $el('[for="SingleOptionSelector-0"]') as HTMLElement

      if (label.textContent?.includes('Color')) {
        label.parentElement?.classList.add('label_color')
      }

      if (window.location.pathname.includes('/products/landmark-shingles-all-colors')) {
        label.closest('.product-form__controls-group')?.classList.add('label_parent')
        label.parentElement?.classList.add('label_color_first')
      }
    })
  }

  addClassLabelLength() {
    waitForElement('[for="SingleOptionSelector-0"]').then(i => {
      const label = $el('[for="SingleOptionSelector-0"]') as HTMLElement

      if (label.textContent?.includes('Length')) {
        label.parentElement?.classList.add('label_length')
      }
    })
  }

  addClassLabelSize() {
    waitForElement('[for="SingleOptionSelector-0"]').then(i => {
      const label = $el('[for="SingleOptionSelector-0"]') as HTMLElement

      if (label.textContent?.includes('Size')) {
        label.parentElement?.classList.add('label_size')
      }
    })
  }

  addClassLabelThicknessFirst() {
    waitForElement('[for="SingleOptionSelector-0"]').then(i => {
      const label = $el('[for="SingleOptionSelector-0"]') as HTMLElement

      if (label.textContent?.includes('Thickness')) {
        label.parentElement?.classList.add('label_thickness_first')
      }

      if (window.location.pathname.includes('/products/dow-thermax-sheathing-4-x-8-polyiso-all-sizes')) {
        label.closest('.product-form__controls-group')?.classList.add('label_parent')
      }
    })
  }

  addClassLabelThickness() {
    waitForElement('[for="SingleOptionSelector-1"]').then(i => {
      const label = $el('[for="SingleOptionSelector-1"]') as HTMLElement

      if (label.textContent?.includes('Thickness')) {
        label.parentElement?.classList.add('label_thickness')
      }
    })
  }

  trackYouTubePlay() {
    let tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    tag.async = false
    document.head.appendChild(tag)

    waitForElement('.video_block').then(i => {
      window.onYouTubeIframeAPIReady = () => {
        const iframes = $$el('iframe[src*="youtube.com/embed/"]')
        iframes.forEach((iframe, index) => {
          const videoId = iframe.src.match(/embed\/([a-zA-Z0-9_-]+)/)[1]

          const player = new YT.Player(iframe, {
            events: {
              onStateChange: onPlayerStateChange
            }
          })
          console.log(player, `Player`)
        })
      }

      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING) {
          console.log('YouTube video is playing')
          pushData('exp_add_quality_element_01', 'video', 'click', 'Product specification')
        }
      }
    })
  }

  changeFisrtImgInMainSlider() {
    //
    waitForElement('#FeaturedMedia-product-template-30758060785816-wrapper').then(i => {
      const parentElem = $el('#FeaturedMedia-product-template-30758060785816-wrapper') as HTMLElement
      const imgs = parentElem.querySelectorAll('img') as NodeListOf<HTMLImageElement>

      imgs.forEach(img => {
        if (
          img.src !== `${git}polycarbonate_sheet_img_1.webp` &&
          img.getAttribute('srcset') !== `${git}polycarbonate_sheet_img_1.webp`
        ) {
          img.src = `${git}polycarbonate_sheet_img_1.webp`
          img.setAttribute('srcset', `${git}polycarbonate_sheet_img_1.webp`)
        }
      })
    })

    waitForElement('#FeaturedMedia-product-template-30758060818584-wrapper').then(i => {
      const parentElem = $el('#FeaturedMedia-product-template-30758060818584-wrapper') as HTMLElement
      const imgs = parentElem.querySelectorAll('img') as NodeListOf<HTMLImageElement>

      imgs.forEach(img => {
        if (
          img.src !== `${git}polycarbonate_sheet_img_5.webp` &&
          img.getAttribute('srcset') !== `${git}polycarbonate_sheet_img_5.webp`
        ) {
          img.src = `${git}polycarbonate_sheet_img_5.webp`
          img.setAttribute('srcset', `${git}polycarbonate_sheet_img_5.webp`)
        }
      })
    })

    waitForElement('#FeaturedMedia-product-template-30758062063768-wrapper').then(i => {
      const parentElem = $el('#FeaturedMedia-product-template-30758062063768-wrapper') as HTMLElement
      const imgs = parentElem.querySelectorAll('img') as NodeListOf<HTMLImageElement>

      imgs.forEach(img => {
        if (
          img.src !== `${git}h_channel_polycarbonate_sheet_img_1.webp` &&
          img.getAttribute('srcset') !== `${git}h_channel_polycarbonate_sheet_img_1.webp`
        ) {
          img.src = `${git}h_channel_polycarbonate_sheet_img_1.webp`
          img.setAttribute('srcset', `${git}h_channel_polycarbonate_sheet_img_1.webp`)
        }
      })
    })

    waitForElement('#FeaturedMedia-product-template-30758061998232-wrapper').then(i => {
      const parentElem = $el('#FeaturedMedia-product-template-30758061998232-wrapper') as HTMLElement
      const imgs = parentElem.querySelectorAll('img') as NodeListOf<HTMLImageElement>

      imgs.forEach(img => {
        if (
          img.src !== `${git}u_chanel_polycarbonate_sheet_img_1.webp` &&
          img.getAttribute('srcset') !== `${git}u_chanel_polycarbonate_sheet_img_1.webp`
        ) {
          img.src = `${git}u_chanel_polycarbonate_sheet_img_1.webp`
          img.setAttribute('srcset', `${git}u_chanel_polycarbonate_sheet_img_1.webp`)
        }
      })
    })

    waitForElement('#FeaturedMedia-product-template-37519802138776-wrapper').then(i => {
      const parentElem = $el('#FeaturedMedia-product-template-37519802138776-wrapper') as HTMLElement
      const imgs = parentElem.querySelectorAll('img') as NodeListOf<HTMLImageElement>

      imgs.forEach(img => {
        if (
          img.src !== `${git}Roofing Shovel_img_1.webp` &&
          img.getAttribute('srcset') !== `${git}Roofing Shovel_img_1.webp`
        ) {
          img.src = `${git}Roofing Shovel_img_1.webp`
          img.setAttribute('srcset', `${git}Roofing Shovel_img_1.webp`)
        }
      })
    })

    waitForElement('#FeaturedMedia-product-template-37457632723096-wrapper').then(i => {
      const parentElem = $el('#FeaturedMedia-product-template-37457632723096-wrapper') as HTMLElement
      const imgs = parentElem.querySelectorAll('img') as NodeListOf<HTMLImageElement>

      imgs.forEach(img => {
        if (
          img.src !== `${git}roofing_knife_img_1.webp` &&
          img.getAttribute('srcset') !== `${git}roofing_knife_img_1.webp`
        ) {
          img.src = `${git}roofing_knife_img_1.webp`
          img.setAttribute('srcset', `${git}roofing_knife_img_1.webp`)
        }
      })
    })

    waitForElement('#FeaturedMedia-product-template-10901381841048-wrapper').then(i => {
      const parentElem = $el('#FeaturedMedia-product-template-10901381841048-wrapper') as HTMLElement
      const imgs = parentElem.querySelectorAll('img') as NodeListOf<HTMLImageElement>

      imgs.forEach(img => {
        if (
          img.src !== `${git}roof_membranes_img_1.webp` &&
          img.getAttribute('srcset') !== `${git}roof_membranes_img_1.webp`
        ) {
          img.src = `${git}roof_membranes_img_1.webp`
          img.setAttribute('srcset', `${git}roof_membranes_img_1.webp`)
        }
      })
    })

    waitForElement('#FeaturedMedia-product-template-10918798885016-wrapper').then(i => {
      const parentElem = $el('#FeaturedMedia-product-template-10918798885016-wrapper') as HTMLElement
      const imgs = parentElem.querySelectorAll('img') as NodeListOf<HTMLImageElement>

      imgs.forEach(img => {
        if (
          img.src !== `${git}dow_thermax_sheathing_img_1.webp` &&
          img.getAttribute('srcset') !== `${git}dow_thermax_sheathing_img_1.webp`
        ) {
          img.src = `${git}dow_thermax_sheathing_img_1.webp`
          img.setAttribute('srcset', `${git}dow_thermax_sheathing_img_1.webp`)
        }
      })
    })
  }

  toggleChatWidgetVisibility() {
    waitForElement('#chat-widget-container').then(i => {
      const chatWidget = $el('#chat-widget-container') as HTMLElement

      const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
            const right = window.getComputedStyle(chatWidget).right
            if (right === '0px') {
              console.log(`right !!!!!!!!!!!!!!!!!`)
              chatWidget.classList.add('visible')
            } else {
              console.log(`NON !!!!!!!!!!!!!!!!!`)
              chatWidget.classList.remove('visible')
            }
          }
        })
      })

      observer.observe(chatWidget, { attributes: true, attributeFilter: ['style'] })

      // Инициализируем состояние при загрузке страницы
      const initialRight = window.getComputedStyle(chatWidget).right
      if (initialRight === '0px') {
        chatWidget.classList.add('visible')
      } else {
        chatWidget.classList.remove('visible')
      }
    })
  }
}

waitForElement('.product-template__container').then(i => {
  new NewPdp(device)
})
