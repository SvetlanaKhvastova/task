import { startLog, $el, $$el, waitForElement, pushData } from '../../libraries'
import {} from './blocks'

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

window.hj('event', 'exp_cart_page_step')

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
      name: 'Adding promo code and gift card options to the checkout',
      dev: 'SKh'
    })

    if (!$el('.crs_style')) {
      document.head.insertAdjacentHTML('beforeend', `<style class="crs_style">${mainStyle}</style>`)
    }

    this.initAllFunc()
  }

  initAllFunc() {
    if (this.checkPage() === 'checkout') {
      if (!$el('[zippyname="basketTab"] coupon-form')) {
        waitForElement('coupon-form').then(i => {
          waitForElement('[zippyname="basketTab"]').then(i => {
            waitForElement('mention-me-wrapper').then(i => {
              console.log('coupon>>>>')
              this.toggleElementBetweenContainers(
                'coupon-form',
                'mention-me-wrapper #mmWrapper',
                '[zippyname="basketTab"] > div.zippy-hide-up'
              )
            })
          })
        })
      }
      if (!$el('[zippyname="basketTab"] giftcards-form')) {
        waitForElement('giftcards-form').then(i => {
          waitForElement('[zippyname="basketTab"]').then(i => {
            console.log('giftcards>>>>')
            this.toggleElementBetweenContainers('giftcards-form', 'mention-me-wrapper', '[zippyname="basketTab"]')
          })
        })
        waitForElement('[zippyname="basketTab"] coupon-form').then(i => {})
      }
    }
  }

  toggleElementBetweenContainers(selector: string, container1Selector: string, container2Selector: string) {
    const element = $el(selector)
    const container1 = $el(container1Selector)
    const container2 = $el(container2Selector)

    if (!element || !container1 || !container2) {
      console.log(element, container1, container2)
      console.error('Element or containers not found')
      return
    }

    // Обработчики событий
    function handleCouponEvents() {
      waitForElement('[zippyname="basketTab"] coupon-form').then(i => {
        const couponForm = $el("[zippyname=basketTab] coupon-form [zippyclass='is-open']")
        couponForm.addEventListener('click', handleCouponClick)

        waitForElement('[zippyname=basketTab] coupon-form input').then(i => {
          const couponInput = $el('[zippyname=basketTab] coupon-form input')
          couponInput.addEventListener('change', handleCouponInputChange)
        })

        waitForElement('[zippyname=basketTab] coupon-form action.button').then(i => {
          const couponButton = $el('[zippyname=basketTab] coupon-form action.button')
          couponButton.addEventListener('click', handleCouponApplyClick)
        })

        waitForElement('[zippyname=basketTab] coupon-form button').then(i => {
          const couponCancelButton = $el('[zippyname=basketTab] coupon-form button')
          couponCancelButton.addEventListener('click', handleCouponCancelClick)
        })
      })
    }
    // Обработчики событий для giftcards-form
    function handleGiftcardEvents() {
      waitForElement('[zippyname="basketTab"] giftcards-form').then(i => {
        const giftcardForm = $el(`[zippyname="basketTab"] giftcards-form [zippyclass='is-open']`)
        giftcardForm.addEventListener('click', handleGiftcardClick)

        waitForElement('[zippyname=basketTab] giftcards-form input').then(i => {
          const giftcardInput = $el('[zippyname=basketTab] giftcards-form input')
          giftcardInput.addEventListener('change', handleGiftcardInputChange)
        })

        waitForElement('[zippyname=basketTab] giftcards-form action.button').then(i => {
          const giftcardButton = $el('[zippyname=basketTab] giftcards-form action.button')
          giftcardButton.addEventListener('click', handleGiftcardApplyClick)
        })

        waitForElement('[zippyname=basketTab] giftcards-form action.button-1').then(i => {
          const giftcardCheckButton = $el('[zippyname=basketTab] giftcards-form action.button-1')
          giftcardCheckButton.addEventListener('click', handleGiftcardCheckClick)
        })
      })
    }

    // Функции-обработчики
    function handleCouponClick(e) {
      if (e.currentTarget.classList.contains('is-open')) {
        pushData('exp_cart_page_cart_promocode_open', 'Have you got a promo code', 'Click', 'Bag summary')
      } else {
        pushData('exp_cart_page_cart_promocode_close', 'Have you got a promo code', 'Click', 'Bag summary')
      }
    }

    function handleCouponInputChange(e) {
      pushData('exp_cart_page_cart_promocode_input', 'Enter offer code', 'Input', 'Bag summary')
    }

    function handleCouponApplyClick(e) {
      pushData('exp_cart_page_cart_promocode_apply', 'Apply', 'Click', 'Bag summary')
    }

    function handleCouponCancelClick(e) {
      pushData('exp_cart_page_cart_promocode_close', 'Cancel', 'Click', 'Bag summary')
    }

    // Функции-обработчики для giftcards-form
    function handleGiftcardClick(e) {
      if (e.currentTarget.classList.contains('is-open')) {
        pushData('exp_cart_page_cart_giftcode_open', 'Have you got a gift card', 'Click', 'Bag summary')
      } else {
        pushData('exp_cart_page_cart_giftcode_close', 'Have you got a gift card', 'Click', 'Bag summary')
      }
    }

    function handleGiftcardInputChange(e) {
      pushData('exp_cart_page_cart_giftcode_input', 'Enter a gift card', 'Input', 'Bag summary')
    }

    function handleGiftcardApplyClick(e) {
      pushData('exp_cart_page_cart_giftcode_apply', 'Apply', 'Click', 'Bag summary')
    }

    function handleGiftcardCheckClick(e) {
      pushData('exp_cart_page_cart_giftcode_check', 'Check balance', 'Click', 'Bag summary')
    }

    // Функция для удаления обработчиков событий
    function removeCouponEventListeners() {
      const couponForm = $el("coupon-form [zippyclass='is-open']")
      couponForm.removeEventListener('click', handleCouponClick)

      const couponInput = $el('coupon-form input')
      couponInput.removeEventListener('change', handleCouponInputChange)

      const couponButton = $el('coupon-form action.button')
      couponButton.removeEventListener('click', handleCouponApplyClick)

      const couponCancelButton = $el('coupon-form button')
      couponCancelButton.removeEventListener('click', handleCouponCancelClick)
    }

    // Функция для удаления обработчиков событий для giftcards-form
    function removeGiftcardEventListeners() {
      const giftcardForm = $el(`giftcards-form [zippyclass='is-open']`)
      giftcardForm.removeEventListener('click', handleGiftcardClick)

      const giftcardInput = $el('giftcards-form input')
      giftcardInput.removeEventListener('change', handleGiftcardInputChange)

      const giftcardButton = $el('giftcards-form action.button')
      giftcardButton.removeEventListener('click', handleGiftcardApplyClick)

      const giftcardCheckButton = $el('giftcards-form action.button-1')
      giftcardCheckButton.removeEventListener('click', handleGiftcardCheckClick)
    }

    // Функция для перемещения элемента в указанный контейнер
    function moveToContainer(container) {
      if (container.contains(element)) return

      container.insertAdjacentElement('beforeend', element)
      if (selector === 'coupon-form') {
        container.insertAdjacentElement('afterend', element)
      }

      if (container === container2) {
        if (selector === 'coupon-form') {
          handleCouponEvents()
        }
        if (selector === 'giftcards-form') {
          handleGiftcardEvents()
        }
      } else {
        if (selector === 'coupon-form') {
          removeCouponEventListeners()
        }
        if (selector === 'giftcards-form') {
          removeGiftcardEventListeners()
        }
      }
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
          this.initAllFunc()
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
    startLog({ name: 'Eliminate cart page step on Desktop', dev: 'OS (SKh)' })
    this.basketButtonHandler()

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
        waitForButtonAndAttachEvent()
      }
    }

    this.pageChangeHandler(checkForBasketPage)
    checkForBasketPage()
  }

  private pageChangeHandler(cb: () => void) {
    ;(function (history) {
      const pushState = history.pushState
      const replaceState = history.replaceState

      history.pushState = function (state) {
        pushState.apply(history, arguments)
        cb()
      }

      history.replaceState = function (state) {
        replaceState.apply(history, arguments)
        cb()
      }

      window.addEventListener('popstate', function (event) {
        cb()
      })
    })(window.history)
  }

  private basketButtonHandler = () => {
    const changeBasketBtn = () => {
      if (
        this.country !== 'other' &&
        this.device === 'desktop' &&
        !location.href.includes('basket') &&
        !location.href.includes('checkout')
      ) {
        this.waitForElementCustom('minibasket a[href*="/basket"]', elem => {
          const checkoutUrl = this.country === 'us' ? '/us/checkout' : '/checkout'
          const newBtnHTML = /* HTML */ `<a class="w-12 p-r-0 p-l-0 button" href="${checkoutUrl}"
            ><span class="p1 col-w">Checkout securely</span></a
          >`

          elem.outerHTML = newBtnHTML

          $el('minibasket a[href*="/checkout"]')?.addEventListener('click', event => {
            const closeBtn = document.querySelector<HTMLButtonElement>('minibasket [aria-label="Close"]')
            localStorage.setItem('lastPdpHref', location.href)
            if (closeBtn) {
              closeBtn.click()
            }
          })
        })
      }
    }
    changeBasketBtn()
    this.pageChangeHandler(changeBasketBtn)
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
