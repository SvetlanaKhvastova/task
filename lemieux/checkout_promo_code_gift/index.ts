import { startLog, $el, $$el, waitForElement, clarityInterval } from '../../libraries'
import {} from './blocks'
import { svg } from './data'

declare global {
  interface Window {
    hj: (...args: any[]) => void
    _hjSettings: { hjid: number; hjsv: number }
    autoInitData?: {
      website?: {
        websiteCode?: string
      }
    }
  }
}

;(function (h: any, o: Document, t: string, j: string, a?: HTMLElement | null, r?: HTMLScriptElement | null) {
  h.hj =
    h.hj ||
    function () {
      ;(h.hj.q = h.hj.q || []).push(arguments)
    }
  h._hjSettings = { hjid: 2667925, hjsv: 6 }
  a = o.getElementsByTagName('head')[0]
  r = o.createElement('script')
  r.async = true // Змінено з 1 на true для відповідності типу
  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
  if (a) a.appendChild(r) // Вже враховано перевірку на null
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=')

window.hj('event', 'eliminate_cart_page')

// @ts-ignore
import mainStyle from './main.css?raw'

class CheckoutPromoCodeGift {
  device: 'mobile' | 'desktop'
  observerNew: null | MutationObserver
  lastPath: string

  constructor() {
    this.device = window.innerWidth > 1100 ? 'desktop' : 'mobile'
    this.observerNew = null
    this.lastPath = window.location.pathname
    this.initFunc()
    this.observePageChange()
  }

  initFunc() {
    startLog({
      name: 'Adding promo code and gift card options to the checkout + Eliminate cart page step on Desktop',
      dev: 'SKh'
    })

    if (!$el('.crs_style')) {
      document.head.insertAdjacentHTML('beforeend', `<style class="crs_style">${mainStyle}</style>`)
    }

    if (this.checkPage() === 'checkout') {
      if (!$el('[zippyname="basketTab"] coupon-form')) {
        waitForElement('coupon-form').then(i => {
          waitForElement('[zippyname="basketTab"]').then(i => {
            waitForElement('mention-me-wrapper').then(i => {
              this.toggleElementBetweenContainers('coupon-form', 'mention-me-wrapper', '[zippyname="basketTab"]')
            })
          })
        })
      }
      if (!$el('[zippyname="basketTab"] giftcards-form')) {
        waitForElement('giftcards-form').then(i => {
          waitForElement('[zippyname="basketTab"]').then(i => {
            this.toggleElementBetweenContainers('giftcards-form', 'mention-me-wrapper', '[zippyname="basketTab"]')
          })
        })
      }
    }
  }

  toggleElementBetweenContainers(selector, container1Selector, container2Selector) {
    const element = document.querySelector(selector)
    const container1 = document.querySelector(container1Selector)
    const container2 = document.querySelector(container2Selector)

    if (!element || !container1 || !container2) {
      console.log(element, container1, container2)
      console.error('Element or containers not found')
      return
    }

    // Функция для перемещения элемента в указанный контейнер
    function moveToContainer(container) {
      if (container.contains(element)) return
      container.appendChild(element)
    }

    console.log('toggleElementBetweenContainers', selector)
    // Наблюдаем за обоими контейнерами
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === container1) {
            moveToContainer(container1)
          } else if (entry.target === container2) {
            moveToContainer(container2)
          }
        }
      })
    })

    observer.observe(container1)
    observer.observe(container2)
  }

  observePageChange() {
    this.observerNew = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (window.location.pathname !== this.lastPath) {
          if (this.checkPage() === 'checkout') {
            if (!$el('[zippyname="basketTab"] coupon-form')) {
              waitForElement('coupon-form').then(i => {
                waitForElement('[zippyname="basketTab"]').then(i => {
                  waitForElement('mention-me-wrapper').then(i => {
                    this.toggleElementBetweenContainers('coupon-form', 'mention-me-wrapper', '[zippyname="basketTab"]')
                  })
                })
              })
            }
            if (!$el('[zippyname="basketTab"] giftcards-form')) {
              waitForElement('giftcards-form').then(i => {
                waitForElement('[zippyname="basketTab"]').then(i => {
                  this.toggleElementBetweenContainers('giftcards-form', 'mention-me-wrapper', '[zippyname="basketTab"]')
                })
              })
            }
          }
          this.lastPath = window.location.pathname
        }
      })
    })

    const config = { childList: true, subtree: true }
    this.observerNew.observe(document.body, config)
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
      case url.includes('/checkout'):
        return 'checkout'
      default:
        return 'other'
    }
  }
}

new CheckoutPromoCodeGift()

class LaunchExperiment {
  private observer: MutationObserver | null = null
  private countryCode = window?.autoInitData?.website?.websiteCode
  private country: 'uk' | 'us' | 'other'
  private device: 'desktop' | 'mobile'

  constructor() {
    this.country = this.countryCode === 'base' ? 'uk' : this.countryCode === 'us' ? 'us' : 'other'
    this.device = window.innerWidth > 1100 ? 'desktop' : 'mobile'

    this.init()
  }

  public init() {
    startLog({ name: 'Eliminate cart page step on Desktop', dev: 'OS' })
    if (
      this.country !== 'other' &&
      this.device === 'desktop' &&
      !location.href.includes('basket') &&
      !location.href.includes('checkout')
    ) {
      this.basketButtonHandler()
    }
    this.updateDevice()
    this.checkBasketPage()
  }

  updateDevice() {
    window.addEventListener('resize', () => {
      const oldDevice = this.device
      this.device = window.innerWidth > 1024 ? 'desktop' : 'mobile'
      if (oldDevice !== this.device) {
        this.init()
      }
    })
  }

  private checkBasketPage() {
    function waitForButtonAndAttachEvent() {
      const checkExist = setInterval(function () {
        const btns = document.querySelectorAll('button')
        btns.forEach(btn => {
          if (btn && btn.textContent?.includes('Continue shopping')) {
            console.log('Button found.')
            const lastPdpHref = localStorage.getItem('lastPdpHref')
            const newContinueShoppingBtn = /* HTML */ ` <a class="w-12 button-1 m-b m-t-2" href="${lastPdpHref}"
              ><span class="button__body">Continue shopping</span></a
            >`
            if (lastPdpHref) {
              btn.outerHTML = newContinueShoppingBtn
            }

            clearInterval(checkExist)
          }
        })
      }, 100)
    }

    function checkForBasketPage() {
      if (location.href.includes('basket')) {
        console.log('here is basket page')
        waitForButtonAndAttachEvent()
      }
    }

    ;(function (history) {
      const pushState = history.pushState
      const replaceState = history.replaceState

      history.pushState = function (state) {
        pushState.apply(history, arguments)
        checkForBasketPage()
      }

      history.replaceState = function (state) {
        replaceState.apply(history, arguments)
        checkForBasketPage()
      }

      window.addEventListener('popstate', function (event) {
        checkForBasketPage()
      })
    })(window.history)
    checkForBasketPage()
  }

  private basketButtonHandler = () => {
    this.waitForElementCustom('minibasket a[href*="/basket"]', elem => {
      const checkoutUrl = this.country === 'us' ? '/us/checkout' : '/checkout'
      console.log('Element appeared!')

      const newBtnHTML = /* HTML */ `<a class="w-12 p-r-0 p-l-0 button" href="${checkoutUrl}"
        ><span class="p1 col-w">Checkout securely</span></a
      >`

      elem.outerHTML = newBtnHTML

      document.querySelector('minibasket a[href*="/checkout"]')?.addEventListener('click', event => {
        const closeBtn = document.querySelector<HTMLButtonElement>('minibasket [aria-label="Close"]')
        localStorage.setItem('lastPdpHref', location.href)
        if (closeBtn) {
          closeBtn.click()
        }
      })
    })
  }

  private waitForElementCustom(selector: string, callback: (element: HTMLElement) => void) {
    if (this.observer) {
      this.observer.disconnect()
    }
    this.observer = new MutationObserver((mutations, obs) => {
      const element = document.querySelector<HTMLElement>(selector)
      if (element) {
        callback(element)
      }
    })
    this.observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['href']
    })
  }
}

new LaunchExperiment()
