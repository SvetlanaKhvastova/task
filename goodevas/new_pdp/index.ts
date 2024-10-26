import {
  startLog,
  $el,
  $$el,
  waitForElement,
  pushData,
  clarityInterval,
  loadScriptsOrStyles,
  visibilityOfTime,
  scrollToElement
} from '../../libraries'
import {
  bestSellerLabelBlock,
  boughtSoFarBlock,
  colorWrapper,
  comparisonTableBlock,
  fAQBlock,
  getFreeDeliveryBlock,
  mainBenefitsBlock,
  newProductSalesPointsBlock,
  oneReviewBlock,
  productDetailsBlock,
  productImageGalleryBlock,
  stickyBlock,
  yourImpactBlock
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
    // clarityInterval('')
    document.head.insertAdjacentHTML('beforeend', `<style class="crs_style">${mainStyle}</style>`)

    this.renderBestSellerLabelForPhoto()
    this.renderBoughtSoFarBlock()
    this.renderGetFreeDeliveryBlock()
    this.renderNewProductSalesPointsBlock()
    this.renderYourImpactBlock()
    this.renderOneReviewBlock()
    this.clickAllReviewsLink()
    this.renderProductDetailsBlock()
    this.toggleSeeMoreTxt()
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
    }
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
        сontainerElement.insertAdjacentHTML('beforeend', boughtSoFarBlock(translations[this.pathName].boughtSoFarTxt))
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

  renderYourImpactBlock() {
    waitForElement('block-buy-buttons').then(i => {
      const сontainerElement = $el('block-buy-buttons') as HTMLElement

      if (!$el('.your_impact_block')) {
        сontainerElement.insertAdjacentHTML('afterend', yourImpactBlock(translations[this.pathName].yourImpactTxt))
      }
    })
  }

  renderOneReviewBlock() {
    waitForElement('.your_impact_block').then(i => {
      const сontainerElement = $el('.your_impact_block') as HTMLElement

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
    waitForElement('#MainContent .shopify-section:nth-child(1)').then(i => {
      const сontainerElement = $el('#MainContent .shopify-section:nth-child(1)') as HTMLElement

      if (!$el('.product_image_gallery_block')) {
        сontainerElement.insertAdjacentHTML(
          'afterend',
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
        })
      }
    }, 1000)
  }

  renderStickyBlock() {
    waitForElement('body').then(i => {
      const сontainerElement = $el('body') as HTMLElement

      if (!$el('.sticky_block')) {
        сontainerElement.insertAdjacentHTML('afterbegin', stickyBlock)
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

          variantInputs.forEach(input => {
            const value = input.getAttribute('value') || 'Unknown'
            const isActive = input.checked

            if (isActive) {
              selectedValue = value
            }

            dropdownItems.push(this.createDropdownItem(value, isActive))
          })

          if (!$el('.color_wrapper')) {
            container.insertAdjacentHTML('afterbegin', colorWrapper(dropdownItems.join(''), selectedValue))
          }

          this.changeCustomDropdownHandler('.custom_dropdown')
        }
      })
    })
  }

  createDropdownItem(value: string, isActive: boolean): string {
    return /* HTML */ ` <div class="dropdown_item ${isActive ? 'active' : ''}" data-value="${value}">${value}</div> `
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
      // pushData('exp_sub_option_dropdown_01', 'Ship every', 'Dropdown', 'Subscribe section')
      dropdownMenu.classList.toggle('show')
      this.adjustDropdownPosition(dropdownMenu)
      dropdownToggle.classList.toggle('active')
    })

    dropdownItems.forEach(item => {
      item.addEventListener('click', event => {
        const target = event.currentTarget as HTMLElement
        const value = target.getAttribute('data-value')

        dropdownMenu.style.top = '100%'

        dropdownToggle.innerHTML = target.innerHTML
        dropdownMenu.classList.remove('show')
        dropdownToggle.classList.remove('active')
        // pushData(
        //   'exp_sub_option_dropdown_02',
        //   `Selected value: ${target.querySelector('.text_transform')?.textContent}`,
        //   'Dropdown',
        //   'Subscribe section'
        // )
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
      waitForElement('.sticky_block').then(i => {
        const btnSticky = $el('.add_to_cart_btn') as HTMLElement
        const btnPdp = $el('.product-single__meta block-buy-buttons .add-to-cart') as HTMLElement

        btnSticky.addEventListener('click', () => {
          btnPdp.click()
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

    variantInputs.forEach(input => {
      const value = input.getAttribute('value') || 'Unknown'
      const isActive = input.checked
      const dropdownItem = $el(`.color_wrapper .dropdown_item[data-value="${value}"]`)

      if (dropdownItem) {
        if (isActive) {
          dropdownItem.classList.add('active')
          activeValue = value
        } else {
          dropdownItem.classList.remove('active')
        }
      }
    })

    if (dropdownToggle && activeValue) {
      dropdownToggle.textContent = activeValue
    }
  }
}

waitForElement('.page-content--product').then(i => {
  new NewPdp(device)
})
