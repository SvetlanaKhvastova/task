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
  bestSellerLabelBlock,
  boughtSoFarBlock,
  colorWrapper,
  comparisonTableBlock,
  estimateYourShippingPeriodBlock,
  fAQBlock,
  getFreeDeliveryBlock,
  mainBenefitsBlock,
  newProductSalesPointsBlock,
  oneReviewBlock,
  productDetailsBlock,
  productImageGalleryBlock,
  stickyBlock,
  tolstoyStoriesNewTitle
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
    startLog({ name: 'PDP v2 Major Release', dev: 'SKh' })
    clarityInterval('new_pdp')

    document.head.insertAdjacentHTML('beforeend', `<style class="crs_style">${mainStyle}</style>`)

    this.renderBestSellerLabelForPhoto()
    this.renderBoughtSoFarBlock()
    this.renderGetFreeDeliveryBlock()
    this.renderNewProductSalesPointsBlock()
    this.renderKlarnaWrapper()
    this.replaceKlarnaPlacement()
    this.renderOneReviewBlock()
    this.renderTolstoyStoriesNewTitle()
    this.clickAllReviewsLink()
    this.renderProductDetailsBlock()
    this.toggleSeeMoreTxt()
    this.renderEstimateYourShippingPeriodBlock()
    this.renderMainBenefits()
    this.renderComparisonTable()
    this.renderProductImageGalleryBlock()
    this.renderFAQBlock()

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

    if (this.device === 'mobile') {
      this.renderStickyBlock()
      this.toggleStickyBlockVisibility()
      this.renderColorWrapper()
      this.clickAddToCartStickyBtn()
      this.changeColorOnPdp()
      this.syncLoadingState()
      this.resizeSlider()

      this.observeRestockRocketButton()
    }

    this.visibleHandler()
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

  renderGetFreeDeliveryBlock() {
    waitForElement('block-price').then(i => {
      const сontainerElement = $el('block-price') as HTMLElement

      if (!$el('.get_free_delivery_block')) {
        сontainerElement.insertAdjacentHTML('afterend', getFreeDeliveryBlock(this.getShippingDayDate()))
      }
    })
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

  renderKlarnaWrapper() {
    waitForElement('klarna-placement').then(i => {
      waitForElement('.page-content--product .product-single__meta block-buy-buttons').then(i => {
        const сontainerElement = $el('.page-content--product .product-single__meta block-buy-buttons') as HTMLElement

        if (!$el('.klarna_wrapper')) {
          сontainerElement.insertAdjacentHTML('beforeend', ` <div class="klarna_wrapper"></div>`)
        }
      })
    })
  }

  replaceKlarnaPlacement() {
    waitForElement('klarna-placement').then(i => {
      waitForElement('.klarna_wrapper').then(i => {
        const klarnaWrapper = $el('.klarna_wrapper') as HTMLElement
        const klarna = $el('klarna-placement') as HTMLElement

        if (!$el('.klarna_wrapper klarna-placement')) {
          klarnaWrapper.insertAdjacentElement('beforeend', klarna)
        }
      })
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

  renderTolstoyStoriesNewTitle() {
    waitForElement('.tolstoy-stories-title').then(i => {
      const сontainerElement = $el('.tolstoy-stories-title') as HTMLElement

      if (!$el('.tolstoy_stories_new_title')) {
        сontainerElement.insertAdjacentHTML(
          'afterend',
          tolstoyStoriesNewTitle(translations[this.pathName].tolstoyStoriesNewTitle)
        )
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

  toggleSeeMoreTxt() {
    waitForElement('.see_more_block').then(i => {
      const seeMoreBtn = $el('.see_more_block') as HTMLElement

      seeMoreBtn.addEventListener('click', e => {
        if (e.currentTarget && !e.currentTarget.classList.contains('is_open')) {
          pushData('exp_new_pdp_link_01', 'See more', 'Click', 'Product details')
          e.currentTarget.classList.add('is_open')
          e.currentTarget.querySelector('div').textContent = 'See Less'
          e.currentTarget.previousElementSibling.classList.remove('blur_txt')
        } else {
          pushData('exp_new_pdp_link_01', 'See Less', 'Click', 'Product details')
          e.currentTarget.classList.remove('is_open')
          e.currentTarget.querySelector('div').textContent = 'See More'
          e.currentTarget.previousElementSibling.classList.add('blur_txt')
        }
      })
    })
  }

  renderEstimateYourShippingPeriodBlock() {
    waitForElement('.product_details_block').then(i => {
      const сontainerElement = $el('.product_details_block') as HTMLElement

      if (!$el('.estimate_your_shipping_period_block')) {
        сontainerElement.insertAdjacentHTML(
          'beforebegin',
          estimateYourShippingPeriodBlock(
            translations[this.pathName].deliveryToPlace,
            this.getTodayDate(),
            translations[this.pathName].deliveryDays,
            this.getShippingDate(),
            this.getGuaranteeDate()
          )
        )
      }
    })
  }

  getTodayDate() {
    const today = new Date()
    const formattedDate = this.formatDate(today)
    return formattedDate
  }

  getShippingDate() {
    const today = new Date()
    const shippingDate = new Date(today)
    shippingDate.setDate(today.getDate() + translations[this.pathName].deliveryDays)
    const formattedDate = this.formatDate(shippingDate)
    return formattedDate
  }

  getGuaranteeDate() {
    const today = new Date()
    const guaranteeDate = new Date(today)
    guaranteeDate.setDate(today.getDate() + translations[this.pathName].guaranteeDate)
    const formattedDate = this.formatDate(guaranteeDate)
    return formattedDate
  }

  formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' }
    return date.toLocaleDateString('en-US', options)
  }

  getShippingDayDate() {
    const today = new Date()
    const guaranteeDate = new Date(today)
    guaranteeDate.setDate(today.getDate() + translations[this.pathName].guaranteeDate)
    const formattedDate = this.formatDayDate(guaranteeDate)
    return formattedDate
  }

  formatDayDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' }
    return date.toLocaleDateString('en-US', options)
  }

  renderMainBenefits() {
    waitForElement('.product-single__meta').then(i => {
      const сontainerElement = $el('.product-single__meta') as HTMLElement

      if (!$el('.main_benefits_block')) {
        сontainerElement.insertAdjacentHTML('beforeend', mainBenefitsBlock(translations[this.pathName].mainBenefits))
      }
    })
  }

  renderComparisonTable() {
    waitForElement('.main_benefits_block').then(i => {
      const сontainerElement = $el('.main_benefits_block') as HTMLElement

      if (!$el('.comparison_table_block')) {
        сontainerElement.insertAdjacentHTML(
          'afterend',
          comparisonTableBlock(translations[this.pathName].comparisonTable)
        )
      }
    })
  }

  renderFAQBlock() {
    waitForElement('.comparison_table_block').then(i => {
      waitForElement('.product_image_gallery_block').then(i => {
        let сontainerElement = $el('.comparison_table_block') as HTMLElement

        if (this.device === 'mobile') {
          сontainerElement = $el('.product_image_gallery_block') as HTMLElement
        }

        if (!$el('.faq_block')) {
          сontainerElement.insertAdjacentHTML('afterend', fAQBlock(translations[this.pathName].fAQTxt))
        }
      })
    })
  }

  renderProductImageGalleryBlock() {
    let placeElement = $el('#shopify-section-template--18038805430429__1727770539adc7a55b')
      ? '#shopify-section-template--18038805430429__1727770539adc7a55b'
      : '#shopify-section-template--18135477813405__1727770539adc7a55b'
    waitForElement(placeElement).then(i => {
      const сontainerElement = $el(placeElement) as HTMLElement

      if (!$el('.product_image_gallery_block')) {
        сontainerElement.insertAdjacentHTML(
          'beforebegin',
          productImageGalleryBlock(translations[this.pathName].productImageGalleryImgs)
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

  renderColorWrapper() {
    waitForElement('.sticky_block').then(i => {
      waitForElement('.product-single__meta block-variant-picker > .variant-button-wrap input').then(i => {
        const container = $el('.sticky_block') as HTMLElement
        const variantInputs = $$el('.product-single__meta block-variant-picker > .variant-button-wrap input')

        if (variantInputs.length > 0) {
          let dropdownItems: string[] = []
          let selectedValue = ''
          let isAnyDisabled = false

          variantInputs.forEach(input => {
            const value = input.getAttribute('value') || 'Unknown'
            const isActive = input.checked
            const isDisabled = input.hasAttribute('data-disabled')

            if (isActive) {
              selectedValue = value
              isAnyDisabled = isDisabled
            }

            dropdownItems.push(this.createDropdownItem(value, isActive, isDisabled))
          })

          if (!$el('.color_wrapper')) {
            container.insertAdjacentHTML(
              'afterbegin',
              colorWrapper(dropdownItems.join(''), selectedValue, isAnyDisabled)
            )
          }

          this.changeCustomDropdownHandler('.custom_dropdown')
        }
      })
    })
  }

  createDropdownItem(value: string, isActive: boolean, isDisabled: boolean): string {
    return /* HTML */ `
      <div class="dropdown_item ${isActive ? 'active' : ''}" data-value="${value}" ${isDisabled ? 'data-disabled' : ''}>
        ${value}
      </div>
    `
  }

  changeCustomDropdownHandler(dropdownSelector: string) {
    const dropdown = $el(dropdownSelector) as HTMLElement
    const dropdownToggle = dropdown.querySelector('.dropdown_toggle') as HTMLElement
    const dropdownMenu = dropdown.querySelector('.dropdown_menu') as HTMLElement
    const dropdownItems = dropdown.querySelectorAll('.dropdown_item') as NodeListOf<HTMLElement>
    const variantInputs = $$el(
      '.product-single__meta block-variant-picker > .variant-button-wrap input'
    ) as NodeListOf<HTMLElement>

    dropdownToggle.addEventListener('click', () => {
      pushData('exp_new_pdp_button_02', 'Color', 'Click', 'Stiky section')
      dropdownMenu.classList.toggle('show')
      this.adjustDropdownPosition(dropdownMenu)
      dropdownToggle.classList.toggle('active')
    })

    dropdownItems.forEach(item => {
      item.addEventListener('click', event => {
        const target = event.currentTarget as HTMLElement
        const value = target.getAttribute('data-value')
        const isDisabled = target.hasAttribute('data-disabled')

        dropdownMenu.style.top = '100%'

        dropdownToggle.innerHTML = target.innerHTML
        dropdownMenu.classList.remove('show')
        dropdownToggle.classList.remove('active')

        if (isDisabled) {
          dropdownToggle.setAttribute('data-disabled', '')
        } else {
          dropdownToggle.removeAttribute('data-disabled')
        }

        pushData('exp_new_pdp_dropdown_01', `Selected value: ${target?.textContent}`, 'Dropdown', 'Stiky section')
        variantInputs.forEach(opt => {
          if (opt.getAttribute('value') === value) {
            opt.click()
          }
        })
      })
    })

    document.addEventListener('click', event => {
      const target = event.target as HTMLElement
      if (!dropdown.contains(target)) {
        dropdownMenu.classList.remove('show')
        dropdownToggle.classList.remove('active')
        dropdownMenu.style.top = '100%'
      }
    })

    let observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            this.adjustDropdownPosition(dropdownMenu)
          }
        })
      },
      {
        root: null,
        threshold: 1.0
      }
    )

    observer.observe(dropdownMenu)
  }

  adjustDropdownPosition(dropdownMenu: HTMLElement) {
    const rect = dropdownMenu.getBoundingClientRect()
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight

    if (rect.bottom > viewportHeight) {
      dropdownMenu.style.top = `-${rect.height + 2}px`
    } else {
      dropdownMenu.style.top = '100%'
    }
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

  changeColorOnPdp() {
    waitForElement('.product-single__meta block-variant-picker > .variant-button-wrap input').then(i => {
      const variantInputs = $$el('.product-single__meta block-variant-picker > .variant-button-wrap input')

      variantInputs.forEach(input => {
        input.addEventListener('click', () => {
          this.updateActiveColor()
        })
      })
    })
  }

  updateActiveColor() {
    const variantInputs = $$el('.product-single__meta block-variant-picker > .variant-button-wrap input')
    const dropdownToggle = $el('.color_wrapper .dropdown_toggle')
    let activeValue = ''
    let isDisabled = false

    variantInputs.forEach(input => {
      const value = input.getAttribute('value') || 'Unknown'
      const isActive = input.checked
      const dropdownItem = $el(`.color_wrapper .dropdown_item[data-value="${value}"]`)

      if (dropdownItem) {
        if (isActive) {
          dropdownItem.classList.add('active')
          activeValue = value
          isDisabled = input.hasAttribute('data-disabled')
        } else {
          dropdownItem.classList.remove('active')
        }
      }
    })

    if (dropdownToggle && activeValue) {
      dropdownToggle.textContent = activeValue

      if (isDisabled) {
        dropdownToggle.setAttribute('data-disabled', '')
      } else {
        dropdownToggle.removeAttribute('data-disabled')
      }
    }
  }

  observeRestockRocketButton() {
    const observer = new MutationObserver(mutationsList => {
      for (const mutation of mutationsList) {
        for (let node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue

          if (node.matches('.restock-rocket-button-container')) {
            this.handleRestockButtonAdded()
          }
        }
        for (let node of mutation.removedNodes) {
          if (!(node instanceof HTMLElement)) continue

          if (node.matches('.restock-rocket-button-container')) {
            this.handleRestockButtonRemoved()
          }
        }
      }
    })

    observer.observe(document.body, { childList: true, subtree: true })
  }

  handleRestockButtonAdded() {
    const restockButton = $el('.restock-rocket-button-container')
    if (restockButton) {
      this.updateAddToCartButton('Notify me when available', 'notify_available')
    }
  }

  handleRestockButtonRemoved() {
    this.updateAddToCartButton('Add to cart', '')
  }

  updateAddToCartButton(text: string, additionalClass: string) {
    waitForElement('.add_to_cart_btn').then(() => {
      $el('.add_to_cart_btn')?.remove()
      if (!$el('.add_to_cart_btn')) {
        $el('.sticky_block')?.insertAdjacentHTML(
          'beforeend',
          `<div class="add_to_cart_btn ${additionalClass}">${text}</div>`
        )
      }
      this.clickAddToCartStickyBtn()
      this.syncLoadingState()
    })
  }

  syncLoadingState() {
    waitForElement('.product-single__meta block-buy-buttons .add-to-cart').then(() => {
      const btnPdp = $el('.product-single__meta block-buy-buttons .add-to-cart') as HTMLElement
      const btnSticky = $el('.sticky_block .add_to_cart_btn') as HTMLElement

      const observer = new MutationObserver(() => {
        if (btnPdp.classList.contains('btn--loading')) {
          btnSticky.classList.add('btn--loading')
        } else {
          btnSticky.classList.remove('btn--loading')
        }
      })

      observer.observe(btnPdp, { attributes: true, attributeFilter: ['class'] })
    })
  }

  visibleHandler() {
    waitForElement('.estimate_your_shipping_period_block').then(i => {
      visibilityOfTime(
        '.estimate_your_shipping_period_block',
        'exp_new_pdp_element_01',
        'Estimate your shipping period',
        'Shipping details',
        'View'
      )
    })
    waitForElement('.product_details_block').then(i => {
      visibilityOfTime('.product_details_block', 'exp_new_pdp_element_02', 'Product details', 'Product details', 'View')
    })
    waitForElement('.main_benefits_block').then(i => {
      visibilityOfTime('.main_benefits_block', 'exp_new_pdp_element_03', 'Benefits details', 'Benefits details', 'View')
    })
    waitForElement('.comparison_table_block').then(i => {
      visibilityOfTime(
        '.comparison_table_block',
        'exp_new_pdp_element_04',
        'Goodevas Quality vs Others',
        'Goodevas Quality vs Others',
        'View'
      )
    })
    waitForElement('.faq_block').then(i => {
      visibilityOfTime('.faq_block', 'exp_new_pdp_element_05', 'FAQ', 'FAQ', 'View')
    })
    waitForElement('.product_image_gallery_block').then(i => {
      visibilityOfTime(
        '.product_image_gallery_block',
        'exp_new_pdp_element_06',
        'Product image gallery',
        'Product image gallery',
        'View'
      )
    })
  }

  resizeSlider() {
    waitForElement('.product-slideshow').then(i => {
      const flickityElement = $$el('.product-slideshow')[0] as HTMLElement
      let s = setInterval(() => {
        if (typeof Flickity === 'function' && flickityElement) {
          // @ts-ignore
          const flkty = Flickity.data(flickityElement)

          if (flkty) {
            flkty.cells.forEach(cell => {
              cell.element.style.width = '100%'
            })

            if (!$el('.flickity-prev-next-button-new.previous.new_button')) {
              const prevButton = document.createElement('button')
              prevButton.className = 'flickity-prev-next-button-new new_button previous'
              prevButton.innerHTML = `${svg.prevBtnIcon}`
              flickityElement.appendChild(prevButton)

              prevButton.addEventListener('click', () => {
                flkty.previous()
                pushData('exp_new_pdp_slider_previous_01', 'Previous', 'Click', 'First slider photo')
              })
            }

            if (!$el('.flickity-prev-next-button-new.next.new_button')) {
              const nextButton = document.createElement('button')
              nextButton.className = 'flickity-prev-next-button-new new_button next'
              nextButton.innerHTML = `${svg.nextBtnIcon}`
              flickityElement.appendChild(nextButton)

              nextButton.addEventListener('click', () => {
                flkty.next()
                pushData('exp_new_pdp_slider_next_01', 'Next', 'Click', 'First slider photo')
              })
            }

            // Обновляем слайдер
            flkty.resize()
          }
        }
      }, 400)
    })
  }
}

waitForElement('.page-content--product').then(i => {
  new NewPdp(device)
})
