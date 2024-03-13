import { startLog, $el, $$el, waitForElement, visibilityOfTime, pushData } from '../../libraries'
import { svg, freeDeliveryBanner, needMoreBlock, completeBlock, progressBlock } from './blocks'

startLog({ name: 'Free Delivery Threshold_2nd iteration', dev: 'SKh' })

const baseUrl = window.location.pathname
const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class FreeDelivery {
  device: 'mobile' | 'desktop'
  baseUrl: string
  country: 'UK' | 'US'
  currency: string
  threshold: number
  observer: null | MutationObserver
  lastPath: string

  constructor(baseUrl, device) {
    this.observer = null
    this.lastPath = window.location.pathname
    this.device = device
    this.baseUrl = baseUrl
    this.country = 'UK'
    this.currency = '£'
    this.threshold = 75.0
    this.init()
    this.observePageChange()
  }

  init() {
    // this.visibleHandler()
    waitForElement('body.content-initiated').then(() => {
      this.renderFreeDeliveryBanner()
      this.productPage()
      if (this.device === 'desktop') {
        this.checkBasketDesktop()
      }
      this.cartPage()
      this.changeIconHeader()
      this.addEventListeners()
      this.getGrandTotalPriceFromWindow()
    })
  }

  observePageChange() {
    this.observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        // console.log(mutation)
        this.changeIconHeader()

        if (window.location.pathname !== this.lastPath) {
          this.lastPath = window.location.pathname
          this.init()
        }
        for (let node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue
          if (node.matches('basket-view-totals > .flex') || node.matches('modal-bottom-container basket-add-notice')) {
            this.getGrandTotalPriceFromWindow()
            this.cartPage()
            this.addEventListeners()
            if (this.device === 'desktop') {
              this.checkBasketDesktop()
            } else {
              this.renderFreeDeliveryBanner()
            }
          }
          if (node.matches('[cy-basketempty]') && localStorage.getItem('basketPriceForIcon')) {
            localStorage.removeItem('basketPriceForIcon')
          }
        }
      })
    })

    const config = { childList: true, subtree: true }
    this.observer.observe(document.body, config)
  }

  renderFreeDeliveryBanner(): void {
    let place: string = ''
    // pdp || listing
    if (this.checkPage() === 'product') {
      $el('header .listing_var.free_delivery_banner')?.remove()
      if (this.device === 'desktop') {
        place = 'beforebegin'
      } else {
        place = 'afterend'
      }
      if (!$el('header .free_delivery_banner')) {
        $el('#header > .page-header__inner')?.insertAdjacentHTML(
          place,
          freeDeliveryBanner(this.currency, this.threshold)
        )
      }
      if ($el('header .free_delivery_banner')) {
        $el('header .free_delivery_banner').classList.add('product_var')
      }
    } else if (this.checkPage() === 'listing') {
      $el('header .product_var.free_delivery_banner')?.remove()
      place = 'afterend'

      if (!$el('header .free_delivery_banner')) {
        $el('#header > .page-header__inner')?.insertAdjacentHTML(
          place,
          freeDeliveryBanner(this.currency, this.threshold)
        )
      }
      if ($el('header .free_delivery_banner')) {
        $el('header .free_delivery_banner').classList.add('listing_var')
      }
    } else {
      $el('header .free_delivery_banner')?.remove()
    }
    //check BasketMobile
    if (this.device === 'mobile') {
      waitForElement('basket-add-notice .b-t').then(i => {
        place = 'beforebegin'
        if (!$el('basket-add-notice .free_delivery_banner')) {
          $el('basket-add-notice .b-t')?.insertAdjacentHTML(place, freeDeliveryBanner(this.currency, this.threshold))
        }
      })
    }
  }

  productPage(): void {
    waitForElement('product-view-price .price').then(i => {
      let startPrice: number = 0
      let priceElement = $el('product-view-price .price')
      let deliveryNoteElement = $el('product-view-delivery-note')
      let thresholdBannerElement = $el('product-view-layout .threshold_banner')

      if (deliveryNoteElement) {
        deliveryNoteElement.style.display = 'none'

        if (priceElement) {
          let price: number = this.priceToNumber(priceElement.textContent)

          if (price !== startPrice && !thresholdBannerElement) {
            startPrice = price
            if (deliveryNoteElement) {
              deliveryNoteElement.insertAdjacentHTML('beforebegin', this.drawThreshold(price))
            }
          }
        }
      }
    })
  }

  checkBasketDesktop(): void {
    waitForElement('minibasket basket-view-totals').then(i => {
      if ($el('minibasket .custom-scrollbar>div:first-child')) {
        $el('minibasket .custom-scrollbar>div:first-child').style.display = 'none'
      }
      let basketPrice: any | null = localStorage.getItem('basketPriceForIcon')
      const thresholdExceeded: boolean = basketPrice !== null
      if (thresholdExceeded) {
        basketPrice = +basketPrice
        $el('minibasket .threshold_banner') ? $el('minibasket .threshold_banner').remove() : ''
        $el('minibasket basket-view-totals').insertAdjacentHTML('afterend', this.drawThreshold(basketPrice, true))
      }
    })
  }

  cartPage(): void {
    waitForElement('basket-view-totals>div:first-of-type>div').then(i => {
      if (this.checkPage() === 'basket') {
        let basketPrice: any | null = localStorage.getItem('basketPriceForIcon')
        const thresholdExceeded: boolean = basketPrice !== null

        if (thresholdExceeded) {
          basketPrice = +basketPrice
          if ($el('basket-view .threshold_banner')) $el('basket-view .threshold_banner').remove()
          if (this.device === 'mobile') {
            $el('basket-view bottom-panel').insertAdjacentHTML('afterbegin', this.drawThreshold(basketPrice))
          } else {
            $el('basket-view ul').insertAdjacentHTML('beforebegin', this.drawThreshold(basketPrice))
          }
        }

        if ($el('basket-view>div>div>div>div>*:nth-child(3)>div.inline-block')) {
          $el('basket-view>div>div>div>div>*:nth-child(3)>div.inline-block').remove()
        }
      }
    })
  }

  changeIconHeader(): void {
    const basketPrice: string | null = localStorage.getItem('basketPriceForIcon')
    const thresholdExceeded: boolean = basketPrice !== null && +basketPrice >= this.threshold

    $$el('basket-qty').forEach(el => {
      const hasHeaderIcon: boolean = !!el.querySelector('.header_icon')
      const lastHeaderIcon = el.querySelector('[cy-basketbagbtn]')

      if (thresholdExceeded) {
        if (!hasHeaderIcon) {
          el.insertAdjacentHTML('beforeend', svg.headerIcon)
        }
        lastHeaderIcon.style.display = 'none'
      } else {
        el.querySelector('.header_icon')?.remove()
        lastHeaderIcon.style.display = 'block'
      }
    })
  }

  checkPage(): string {
    const url = window.location.href
    switch (true) {
      case $el('product-view-layout') !== null:
        return 'product'
      case $el('category-view-layout') !== null:
        return 'listing'
      case url.includes('/basket'):
        return 'basket'
      default:
        return 'other'
    }
  }

  getGrandTotalPriceFromWindow() {
    const grandTotal = window?.app?.customer?.basket?.data?.totals?.grand_total
    if (grandTotal !== undefined) {
      localStorage.setItem('basketPriceForIcon', `${grandTotal}`)
    }
  }

  priceToNumber(txt: string): number {
    let priceTxt: number = parseFloat(txt.replace(',', '.').replace(/[^0-9.]/g, ''))
    return priceTxt
  }

  drawThreshold(price: number, basket: boolean = false) {
    const progressWidth = (price / this.threshold) * 100

    if (price < this.threshold && this.checkPage() === 'product' && !basket) {
      return needMoreBlock(this.country, this.currency, this.threshold)
    } else if (price < this.threshold) {
      return progressBlock(progressWidth, this.currency, this.threshold, price, this.country)
    } else if (price >= this.threshold) {
      return completeBlock(this.country)
    }
  }

  visibleHandler() {
    // HEADER  -----> header | icon | free delivery icon
    waitForElement('header').then(i => {
      visibilityOfTime('header', 'exp_free_delivery_section_01', 'Section', 'Header')
    })
    waitForElement('basket-qty .page-header__icon').then(i => {
      visibilityOfTime(
        'basket-qty .page-header__icon',
        'exp_free_delivery_icon_vis_01',
        'Icone',
        'Header Cart icon visibility'
      )
    })
    waitForElement('header .header_icon').then(i => {
      visibilityOfTime(
        'header .header_icon',
        'exp_free_delivery_icon_vis_02',
        'Icone',
        'Header Free delivery icon  visibility'
      )
    })
    //Free Delivery Banner -----> listing | product | minibasket mobile
    waitForElement('header .listing_var.free_delivery_banner').then(i => {
      visibilityOfTime(
        'header .listing_var.free_delivery_banner',
        'exp_free_delivery_stickybanner_03',
        'Sticky banner',
        'Listing Free delivery and returns sticky banner visibility'
      )
    })
    waitForElement('header .product_var.free_delivery_banner').then(i => {
      visibilityOfTime(
        'header .product_var.free_delivery_banner',
        'exp_free_delivery_stickybanner_01',
        'Sticky banner',
        'PDP Free delivery and returns sticky banner visibility'
      )
    })
    waitForElement('basket-add-notice .free_delivery_banner').then(i => {
      visibilityOfTime(
        'basket-add-notice .free_delivery_banner',
        'exp_free_delivery_stickybanner_02',
        'Sticky banner',
        'Minibasket Free delivery and returns sticky banner visibility'
      )
    })
    // Shopping Bag Threshold Banner
    waitForElement('basket-view .crs_progress.threshold_banner').then(i => {
      visibilityOfTime(
        'basket-view .crs_progress.threshold_banner',
        'exp_free_delivery_banner_03',
        'Banner',
        'Shopping Bag You are £ away from Free Express UK  Delivery'
      )
    })
    waitForElement('basket-view .crs_complete.threshold_banner').then(i => {
      visibilityOfTime(
        'basket-view .crs_complete.threshold_banner',
        'exp_free_delivery_banner_04',
        'Banner',
        'Shopping Bag Congratulations! You have Free Express UK Delivery'
      )
    })
    // PDP Threshold Banner
    waitForElement('product-view-layout .crs_need_more.threshold_banner').then(i => {
      visibilityOfTime(
        'product-view-layout .crs_need_more.threshold_banner',
        'exp_free_delivery_banner_01',
        'Banner',
        'PDP Free Express UK Delivery on orders over £'
      )
    })
    waitForElement('product-view-layout .crs_complete.threshold_banner').then(i => {
      visibilityOfTime(
        'product-view-layout .crs_complete.threshold_banner',
        'exp_free_delivery_banner_02',
        'Banner',
        'PDP Congratulations! You have Free Express UK Delivery'
      )
    })
    // minibasket Threshold Banner Desktop
    waitForElement('minibasket .crs_progress.threshold_banner').then(i => {
      visibilityOfTime(
        'minibasket .crs_progress.threshold_banner',
        'exp_free_delivery_banner_05',
        'Banner',
        'Cart You are £ away from Free Express UK  Delivery'
      )
    })
    waitForElement('minibasket .crs_complete.threshold_banner').then(i => {
      visibilityOfTime(
        'minibasket .crs_complete.threshold_banner',
        'exp_free_delivery_banner_06',
        'Banner',
        'Cart Congratulations! You have Free Express UK Delivery'
      )
    })
  }

  addEventListeners(): void {
    waitForElement('header .header_icon').then(i => {
      $el('header .header_icon')?.addEventListener('click', e => {
        if (!e.target.getAttribute('data-test')) {
          pushData('exp_free_delivery_icon_01', 'Icone', 'click', 'Header Free delivery icon  visibility')
        }
        e.target.setAttribute('data-test', '1')
        setTimeout(() => {
          if (e.target.getAttribute('data-test')) {
            e.target.removeAttribute('data-test')
          }
        }, 1000)
      })
    })
  }
}
new FreeDelivery(baseUrl, device)
