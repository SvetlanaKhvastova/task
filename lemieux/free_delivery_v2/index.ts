import { startLog, $el, $$el, waitForElement, visibilityOfTime, pushData } from '../../libraries'
import { svg, freeDeliveryBanner, needMoreBlock, completeBlock, progressBlock } from './blocks'

startLog({ name: 'Free Delivery Threshold_2nd iteration', dev: 'SKh' })

const baseUrl = window.location.pathname
const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class FreeDelivery {
  device: 'mobile' | 'desktop'
  baseUrl: string
  country: string
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
    waitForElement('body.content-initiated').then(() => {
      this.renderFreeDeliveryBanner()
      this.productPage()
      if (this.device === 'desktop') {
        this.checkBasketDesktop()
      }
      this.cartPage()
      this.changeIconHeader()
      this.visibleHandler()
      this.addEventListeners()
    })
  }

  observePageChange() {
    this.observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (window.location.pathname !== this.lastPath) {
          console.log(mutation)
          this.lastPath = window.location.pathname
          this.init()
        }
        for (let node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue
          if (node.matches('minibasket') || node.matches('modal-bottom-container basket-add-notice')) {
            this.init()
          }
        }
      })
    })

    const config = { childList: true, subtree: true }
    this.observer.observe(document.body, config)
  }

  renderFreeDeliveryBanner() {
    let place: string = ''
    // pdp || listing
    if (this.checkPage() === 'product' || this.checkPage() === 'listing') {
      if (this.device === 'desktop') {
        place = 'beforebegin'
      } else {
        place = 'afterend'
      }
      if (!$el('header .free_delivery_banner')) {
        $el('#header > .page-header__inner')?.insertAdjacentHTML(place, freeDeliveryBanner)
      }
      if (this.checkPage() === 'product' && $el('header .free_delivery_banner')) {
        $el('header .free_delivery_banner').classList.add('product_var')

        if ($el('header .free_delivery_banner').classList.contains('listing_var')) {
          $el('header .free_delivery_banner').classList.remove('listing_var')
        }
      }
      if (this.checkPage() === 'listing' && $el('header .free_delivery_banner')) {
        $el('header .free_delivery_banner').classList.add('listing_var')

        if ($el('header .free_delivery_banner').classList.contains('product_var')) {
          $el('header .free_delivery_banner').classList.remove('product_var')
        }
      }
    } else {
      $el('header .free_delivery_banner')?.remove()
    }
    //check BasketMobile
    if (this.device === 'mobile') {
      waitForElement('basket-add-notice .b-t').then(i => {
        place = 'beforebegin'
        if (!$el('basket-add-notice .free_delivery_banner')) {
          $el('basket-add-notice .b-t')?.insertAdjacentHTML(place, freeDeliveryBanner)
        }
      })
    }
  }

  productPage() {
    let startPrice: number = 0

    waitForElement('product-view-price .price').then(i => {
      let price: number = this.priceToNumber($el('product-view-price .price').textContent)
      if ($el('product-view-delivery-note')) {
        $el('product-view-delivery-note').style.display = 'none'

        if (price !== startPrice) {
          startPrice = price
          if (!$el('product-view-layout .threshold_banner')) {
            $el('product-view-delivery-note')?.insertAdjacentHTML('beforebegin', this.drawThreshold(price))
          }
        }
      }
    })
  }

  checkBasketDesktop() {
    let basketPrice = 0
    waitForElement('minibasket basket-view-totals>div:first-of-type price').then(i => {
      if ($el('minibasket .custom-scrollbar>div:first-child')) {
        $el('minibasket .custom-scrollbar>div:first-child').style.display = 'none'
      }
      const price = this.priceToNumber($el('minibasket basket-view-totals>div:first-of-type price').innerText)
      if (price !== basketPrice || !$el('minibasket .threshold_banner')) {
        $el('minibasket .threshold_banner') ? $el('minibasket .threshold_banner').remove() : ''
        $el('minibasket basket-view-totals').insertAdjacentHTML('afterend', this.drawThreshold(price, true))
        basketPrice = price
      }
    })
  }

  cartPage() {
    setInterval(() => {
      if (this.checkPage() === 'basket') {
        let newPrice = this.priceToNumber($el('basket-view-totals>div:first-of-type>div').innerText)

        const basketPrice: string | null = localStorage.getItem('basketPrice')
        let price = 0
        if (basketPrice !== null) {
          price = this.priceToNumber(basketPrice)
        } else {
          price = 0
        }

        if ($el('basket-view>div>div>div>div>*:nth-child(3)>div.inline-block')) {
          $el('basket-view>div>div>div>div>*:nth-child(3)>div.inline-block').remove()
        }
        if (newPrice !== price) {
          localStorage.setItem('basketPrice', `${newPrice}`)
          if ($el('basket-view .threshold_banner')) $el('basket-view .threshold_banner').remove()

          if (this.device === 'mobile') {
            $el('basket-view bottom-panel').insertAdjacentHTML('afterbegin', this.drawThreshold(newPrice))
          } else {
            $el('basket-view ul').insertAdjacentHTML('beforebegin', this.drawThreshold(newPrice))
          }
        } else {
          if (!$el('basket-view .threshold_banner')) {
            if (this.device === 'mobile') {
              $el('basket-view bottom-panel').insertAdjacentHTML('afterbegin', this.drawThreshold(newPrice))
            } else {
              $el('basket-view ul').insertAdjacentHTML('beforebegin', this.drawThreshold(newPrice))
            }
          }
        }
      }
    }, 200)
  }

  changeIconHeader() {
    const basketPrice: string | null = localStorage.getItem('basketPrice')
    if (basketPrice !== null && +basketPrice >= this.threshold) {
      $$el('basket-qty').forEach(el => {
        console.log(`changeIconHeader`)
        el.innerHtml = `${svg.headerIcon}`
      })
    }
  }

  checkPage(): string {
    const url = window.location.href
    if ($el('product-view-layout')) {
      return 'product'
    } else if ($el('category-view-layout')) {
      return 'listing'
    } else if (url.includes('/basket')) {
      return 'basket'
    } else {
      return 'other'
    }
  }

  priceToNumber(txt: string): number {
    let priceTxt: number = parseFloat(txt.replace(',', '.').replace(/[^0-9.]/g, ''))
    return priceTxt
  }

  drawThreshold(price: number, basket: boolean = false) {
    const progressWidth = (price / this.threshold) * 100

    if (price < this.threshold && this.checkPage() === 'product' && !basket) {
      return needMoreBlock
    } else if (price < this.threshold) {
      return progressBlock
    } else if (price >= this.threshold) {
      return completeBlock
    }
  }

  visibleHandler() {
    visibilityOfTime(
      'product-view-layout .crs_need_more.threshold_banner',
      'exp_free_delivery_banner_01',
      'Banner',
      'PDP Free Express UK Delivery on orders over £'
    )
    visibilityOfTime(
      'product-view-layout .crs_complete.threshold_banner',
      'exp_free_delivery_banner_02',
      'Banner',
      'PDP Congratulations! You have Free Express UK Delivery'
    )
    visibilityOfTime(
      'header .product_var.free_delivery_banner',
      'exp_free_delivery_stickybanner_01',
      'Sticky banner',
      'PDP Free delivery and returns sticky banner visibility'
    )
    visibilityOfTime(
      'basket-add-notice .free_delivery_banner',
      'exp_free_delivery_stickybanner_02',
      'Sticky banner',
      'Minibasket Free delivery and returns sticky banner visibility'
    )
    visibilityOfTime(
      'basket-view .crs_progress.threshold_banner',
      'exp_free_delivery_banner_03',
      'Banner',
      'Shopping Bag You are £ away from Free Express UK  Delivery'
    )
    visibilityOfTime(
      'basket-view .crs_complete.threshold_banner',
      'exp_free_delivery_banner_04',
      'Banner',
      'Shopping Bag Congratulations! You have Free Express UK Delivery'
    )
    visibilityOfTime(
      'header .listing_var.free_delivery_banner',
      'exp_free_delivery_stickybanner_03',
      'Sticky banner',
      'Listing Free delivery and returns sticky banner visibility'
    )
    visibilityOfTime('header', 'exp_free_delivery_section_01', 'Section', 'Header')
    visibilityOfTime(
      'basket-qty .page-header__icon',
      'exp_free_delivery_icon_vis_01',
      'Icone',
      'Header Cart icon visibility'
    )
    visibilityOfTime(
      'header .header_icon',
      'exp_free_delivery_icon_vis_02',
      'Icone',
      'Header Free delivery icon  visibility'
    )
    visibilityOfTime(
      'minibasket .crs_progress.threshold_banner',
      'exp_free_delivery_banner_05',
      'Banner',
      'Cart You are £ away from Free Express UK  Delivery'
    )
    visibilityOfTime(
      'minibasket .crs_complete.threshold_banner',
      'exp_free_delivery_banner_06',
      'Banner',
      'Cart Congratulations! You have Free Express UK Delivery'
    )
  }

  addEventListeners() {
    waitForElement('header .header_icon').then(i => {
      $el('header .header_icon').addEventListener('click', () => {
        pushData('exp_free_delivery_icon_01', 'Icone', 'Click', 'Header Free delivery icon  visibility')
      })
    })
  }
}
new FreeDelivery(baseUrl, device)
