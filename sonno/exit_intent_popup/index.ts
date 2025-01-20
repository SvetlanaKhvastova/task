import {
  startLog,
  $el,
  $$el,
  waitForElement,
  pushData,
  clarityInterval,
  checkScrollSpeed,
  getCookies
} from '../../libraries'
import {
  popup,
  firstOrderDiscount,
  newUsersWOProducts,
  returningUsersWOProducts,
  newUsersWithProducts,
  returningUsersWithProducts,
  createProductItem
} from './blocks'
import { svg, git } from './data'
// @ts-ignore
import mainStyle from './main.css?raw'

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class ExitIntentPopup {
  device: 'mobile' | 'desktop'
  timeoutId: NodeJS.Timeout | null
  delayTime: number
  firstSessionTime: number
  lastPopupTime: number
  timeLag: number
  active: boolean

  constructor(device) {
    this.device = device
    this.timeoutId = null
    this.delayTime = 60000
    this.firstSessionTime = 10 * 1000
    this.lastPopupTime = 0
    this.timeLag = 3 * 60 * 1000
    this.active = false
    this.init()
  }

  init() {
    startLog({ name: 'Exit Intent Popup', dev: 'SKh' })
    // clarityInterval('exp_exit_intent_popup')

    document.head.insertAdjacentHTML('beforeend', `<style>${mainStyle}</style>`)

    this.createPopup()
    this.checkSessionNumber()
    this.intentPopupTriggers()

    this.handlerClickBtns()
    this.copyDiscount()
    this.handlerClickInput()
  }

  createPopup() {
    console.log(`createPopup`)
    if (!$el('.new_popup_backdrop')) {
      $el('body').insertAdjacentHTML('afterbegin', popup)
    }
  }
  checkSessionNumber() {
    const incrementSession = () => {
      let session = Number(localStorage.getItem('session'))
      localStorage.setItem('session', (session + 1).toString())
      sessionStorage.setItem('session', '1')
    }

    const initializeSession = () => {
      localStorage.setItem('session', '1')
      sessionStorage.setItem('session', '1')
    }

    window.onload = () => {
      const localSession = localStorage.getItem('session')
      const sessionSession = sessionStorage.getItem('session')

      if (localSession && !sessionSession) {
        incrementSession()
      } else if (!localSession) {
        initializeSession()
      }

      const sessionNumber = Number(localStorage.getItem('session'))
      if (sessionNumber > 1) {
        console.log('Returning users (session number > 1)', sessionNumber)
      } else {
        console.log('(1st session)', sessionNumber)
      }
    }
  }
  intentPopupTriggers() {
    // for all users on first session after 10 seconds from the session start.
    if (!localStorage.getItem('initUser')) {
      this.getNewUser('_ga')
    }

    if (this.device === 'mobile') {
      // Scroll up (JS speed value: 150) - for any page
      document.addEventListener('scroll', () => {
        const scrollSpeed = checkScrollSpeed()
        if (+scrollSpeed < -150) {
          this.getItemsBasket('Scroll up (JS speed value: 150) - for any page')
        }
      })
    }
    if (this.device === 'desktop') {
      // cursor moved out of the page frame
      document.addEventListener('mouseout', event => {
        if (!event.relatedTarget) {
          this.getItemsBasket('cursor moved out of the page frame')
        }
      })
    }

    // In 60sec. at basket, checkout without any action
    if (window.location.href.match('/checkout') || window.location.href.match('/cart')) {
      this.setupListeners()
      this.resetTimer()
    }
  }
  getNewUser(name: string) {
    const ga = getCookies(name)

    const showPopupForNewUser = () => {
      console.log('New User')
      localStorage.setItem('initUser', 'true')
      setTimeout(() => {
        if (this.isPopupOpen()) return
        // New users - First order discount popup
        this.handleShowPopup(firstOrderDiscount, 'firstOrderDiscount', 'firstOrderDiscount', 'firstOrderDiscount')
        $el('.new_popup_backdrop').setAttribute('popup', `firstOrderDiscount`)
      }, this.firstSessionTime)
    }

    if (!ga) {
      showPopupForNewUser()
    } else {
      const timeNewUser = +(ga.split('.').pop() + '000')
      if (+new Date() - +new Date(timeNewUser) <= 5 * 60 * 1000) {
        showPopupForNewUser()
      }
    }
  }
  setupListeners() {
    // Attach the resetTimer function to relevant events
    document.addEventListener('mousemove', () => this.resetTimer())
    document.addEventListener('keydown', () => this.resetTimer())

    // Add touch event listeners for mobile devices
    if (this.device === 'mobile') {
      document.addEventListener('touchstart', () => this.resetTimer())
      document.addEventListener('touchmove', () => this.resetTimer())
    }
  }
  resetTimer() {
    clearTimeout(this.timeoutId) // Clear the previous timeout
    this.timeoutId = setTimeout(
      () => this.getItemsBasket('In 60sec. at basket, checkout without any action'),
      this.delayTime
    )
  }

  async getItemsBasket(trigger: string) {
    if (this.isPopupOpen()) return

    const now = Date.now()
    this.lastPopupTime = Number(sessionStorage.getItem('lastPopupTime')) || 0

    if (now - this.lastPopupTime < this.timeLag) return
    sessionStorage.setItem('lastPopupTime', now.toString())

    const isProductsInBasket = await this.getCartCheckout()
    const isReturningUser = Number(localStorage.getItem('session')) > 1

    const showPopup = (popup: any, popupType: string) => {
      this.handleShowPopup(popup, popupType, trigger, popupType)
    }

    const insertProductItems = (products: any[], isNewUser: boolean) => {
      products.forEach(item => {
        const { url, image, product_title, variant_title, presentment_price, quantity } = item
        const productLink = url
        const productImg = image
        const productTitle = product_title
        const productDescr = variant_title
        const productFinalPrice = +presentment_price * +quantity
        const productDiscountedPrice = +presentment_price * +quantity
        const productOldPrice = productFinalPrice + productDiscountedPrice

        waitForElement('.products_list').then(() => {
          $el('.products_list').insertAdjacentHTML(
            'beforeend',
            createProductItem(
              productLink,
              productImg,
              productTitle,
              productDescr,
              productOldPrice,
              productFinalPrice,
              productDiscountedPrice,
              isNewUser
            )
          )
        })
      })
    }

    if (isProductsInBasket.length > 0) {
      if (isReturningUser) {
        showPopup(returningUsersWithProducts, 'returningUsersWithProducts')
        insertProductItems(isProductsInBasket, false)
        $el('.new_popup_backdrop').setAttribute('popup', `returningUsersWithProducts`)
      } else {
        showPopup(newUsersWithProducts, 'newUsersWithProducts')
        insertProductItems(isProductsInBasket, true)
        $el('.new_popup_backdrop').setAttribute('popup', `newUsersWithProducts`)
      }
    } else {
      if (isReturningUser) {
        showPopup(returningUsersWOProducts, 'returningUsersWOProducts')
        $el('.new_popup_backdrop').setAttribute('popup', `returningUsersWOProducts`)
      } else {
        if (window.location.pathname.match('/products/')) {
          waitForElement('[x-data="product"]').then(() => {
            let imgProduct = $el('[x-data="product"] .splide__slide.is-active img').getAttribute('src') ?? ''
            let titleProduct = $el('[x-data="product"] h1.leading-normal').textContent ?? ''
            let oldPriceProduct =
              $el('[x-data="product"] section.price-pro .text-primary.line-through').textContent ?? ''
            let priceProduct =
              $el('[x-data="product"] section.price-pro .text-primary:not(.line-through)').textContent ?? ''
            let saveTxtProduct = $el('[x-data="product"] .bg-danger').textContent.split('SAVE ')[1] ?? ''
            let linkProduct = window.location.pathname ?? ''

            showPopup(
              newUsersWOProducts(
                true,
                imgProduct,
                titleProduct,
                oldPriceProduct,
                priceProduct,
                saveTxtProduct,
                linkProduct
              ),
              'newUsersWOProducts'
            )
          })
        } else {
          showPopup(newUsersWOProducts(), 'newUsersWOProducts')
        }
        $el('.new_popup_backdrop').setAttribute('popup', `newUsersWOProducts`)
      }
    }
  }

  isPopupOpen() {
    return $el('.new_popup_content')?.children.length > 0
  }

  handleShowPopup(content: string, name: string, trigger: string, visibilityName: string) {
    console.log(`handleShowPopup`, trigger, name)
    const isShowed = sessionStorage.getItem(name)
    if (isShowed && name !== 'firstOrderDiscount') return

    const body = $el('body'),
      backdrop = $el('.new_popup_backdrop'),
      popup = $el('.new_popup .new_popup_content')

    if (backdrop.classList.contains('is_hidden')) {
      backdrop.classList.remove('is_hidden')
    }
    body.style.overflow = 'hidden'
    popup.innerHTML = content
    sessionStorage.setItem(name, 'yes')

    switch (visibilityName) {
      case 'firstOrderDiscount':
        break
      case 'returningUsersWithProducts':
        break
      case 'newUsersWithProducts':
        break
      case 'returningUsersWOProducts':
        break
      case 'newUsersWOProducts':
        break
      default:
        break
    }

    waitForElement('#counter').then(i => {
      this.startCountdown()
    })
    this.handleClosePopup()
  }
  handleClosePopup() {
    const body = $el('body'),
      backdrop = $el('.new_popup_backdrop'),
      popup = $el('.new_popup'),
      closePopupBtns = popup.querySelectorAll('[data-popup="close"]')

    closePopupBtns.forEach((btn: HTMLElement) => {
      btn.addEventListener('click', (e: any) => {
        backdrop.classList.add('is_hidden')
        body.style.overflow = 'initial'

        setTimeout(() => {
          $el('.new_popup_content').innerHTML = ''
        }, 500)
      })
    })
    backdrop.addEventListener('click', (e: any) => {
      if (e.target.matches('.new_popup_backdrop')) {
        console.log(`backdrop`)
        backdrop.classList.add('is_hidden')
        body.style.overflow = 'initial'

        setTimeout(() => {
          $el('.new_popup_content').innerHTML = ''
        }, 500)
      }
    })
  }

  startCountdown() {
    let time = 15 * 60
    const intervalId = setInterval(() => {
      time--

      const minutes = Math.floor(time / 60)
      const seconds = time % 60

      const minutesTens = $el('.minutes_tens')
      const minutesOnes = $el('.minutes_ones')
      const secondsTens = $el('.seconds_tens')
      const secondsOnes = $el('.seconds_ones')

      if (minutesTens) minutesTens.textContent = Math.floor(minutes / 10)
      if (minutesOnes) minutesOnes.textContent = minutes % 10
      if (secondsTens) secondsTens.textContent = Math.floor(seconds / 10)
      if (secondsOnes) secondsOnes.textContent = seconds % 10

      if (time <= 0) {
        clearInterval(intervalId)
      }
    }, 1000)
  }
  copyDiscount() {
    waitForElement('[data-discount]').then(i => {
      $$el('[data-discount]').forEach((btn): void => {
        btn.addEventListener('click', (event: any) => {
          let discount = event.currentTarget.dataset.discount
          navigator.clipboard.writeText(discount)
          event.currentTarget.innerHTML = `Copied! ${svg.copyCheeckIcon}`
          event.currentTarget.closest('.discount_code_container').classList.add('copied')

          setTimeout(() => {
            btn.innerHTML = `Copy ${svg.copyIcon}`
            if (btn.closest('.discount_code_container').classList.contains('copied')) {
              btn.closest('.discount_code_container').classList.remove('copied')
            }
          }, 600)
        })
      })
    })
  }
  handlerClickBtns() {
    document.addEventListener('click', (e: any) => {
      const target = e.target
      if (target.matches('.first_order_get_discount_btn')) {
        console.log(`first_order_get_discount_btn`)
        this.validateEmailForm($el(`#emailNew`), true)
      }
      if (target.matches('.first_order_continue_shopping_btn')) {
        console.log(`first_order_continue_shopping_btn`)
      }
      if (target.matches('.divan_beds_shop_now_btn')) {
        console.log(`divan_beds_shop_now_btn`)
        this.getCoupon('NY20', '/collections/divan-beds')
      }
      if (target.matches('.active_product_shop_now_btn')) {
        console.log(`active_product_shop_now_btn`)
        this.getCoupon('NY20')
      }
      if (target.matches('.new_users_with_products_checkout_btn')) {
        console.log(`new_users_with_products_checkout_btn`)
        this.getCoupon('NY20', '/checkout')
      }
      if (target.matches('.returning_users_w_o_products_shop_now_btn')) {
        console.log(`returning_users_w_o_products_shop_now_btn`, target.previousElementSibling.textContent)
      }
      if (target.matches('.returning_users_with_products_checkout_btn')) {
        console.log(`returning_users_with_products_checkout_btn`)
        window.location.pathname = '/checkout'
      }
    })
  }
  handlerClickInput() {
    waitForElement('#emailNew').then(i => {
      $$el('#emailNew').forEach(i => {
        i.addEventListener('input', (e: any) => {
          this.validateEmailForm(e.target)
        })
        i.addEventListener('keyup', (e: any) => {
          if (e.key === 'Enter') {
            this.validateEmailForm(e.target)
          }
        })
        i.addEventListener('blur', (e: any) => {})
      })
    })
  }
  validateEmailForm(target: any, nextStep: boolean = false) {
    const emailInputValue = $el(`#emailNew`).value
    const isValidEmail = emailInputValue.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/)

    if (target.getAttribute('name') === 'emailNew') {
      if (isValidEmail === null) {
        if (!$el(`#emailAddressError`)) {
          target
            .closest('label')
            .insertAdjacentHTML(
              'afterend',
              `<span id="emailAddressError" class="error">Please Enter Valid Email Address</span>`
            )
        }
      } else {
        $el(`#emailAddressError`)?.remove()
      }
    }

    if (isValidEmail !== null && nextStep) {
      const privateKey = 'pk_bbcf811227dc01d7b640c5cb8a0ce1c1e0'
      const listId = 'TNnBFE'
      this.subscribeToKlaviyo(emailInputValue, privateKey, listId)
    }
  }

  async subscribeToKlaviyo(email: string, privateKey: string, listId: string) {
    const url = `https://a.klaviyo.com/api/v2/list/${listId}/subscribe`

    const data = {
      api_key: privateKey,
      profiles: [
        {
          email: email
        }
      ]
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`)
      }

      const result = await response.json()
      console.log('Successfully subscribed:', result)
      if ($el('.first_order_discount.first_var')) {
        $el('.first_order_discount.first_var').classList.add('is_hidden')
      }
      if ($el('.first_order_discount.second_var').classList.contains('is_hidden')) {
        $el('.first_order_discount.second_var').classList.remove('is_hidden')
      }
    } catch (error) {
      console.error('Error subscribing to Klaviyo:', error)
    }
  }

  async getCartCheckout() {
    try {
      const response = await fetch('/cart.js', {
        method: 'GET'
      })
      const data = await response.json()
      const products = data.items
      return products
    } catch (error) {
      console.error('Error:', error)
      return []
    }
  }
  async getCoupon(couponCode: string, redirect: string = '') {
    const currentPath = window.location.pathname
    if (redirect === '/collections/divan-beds' || redirect === '/checkout') {
      console.log(`redirect`, redirect)
      window.location.href = `/discount/${couponCode}?redirect=${redirect}`
    } else {
      console.log(`currentPath`)
      window.location.href = `/discount/${couponCode}?redirect=${currentPath}`
    }
  }
}

new ExitIntentPopup(device)
