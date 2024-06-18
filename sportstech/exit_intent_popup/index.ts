import { startLog, $el, $$el, waitForElement, pushData, clarityInterval, checkScrollSpeed } from '../../libraries'
import {
  popup,
  firstOrderDiscount,
  exploreOurBestFirst,
  exploreOurBestSecond,
  checkOutNow,
  checkOutNowSecond,
  checkOutNowThird,
  productItem
} from './blocks'
import { svg, git } from './data'
// @ts-ignore
import mainStyle from './main.css?raw'

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class exitIntentPopup {
  device: 'mobile' | 'desktop'
  timeoutId: NodeJS.Timeout | null
  delayTime: number
  firstSessionTime: number

  constructor(device) {
    this.device = device
    this.timeoutId = null
    this.delayTime = 60000
    this.firstSessionTime = 20 * 1000
    this.init()
  }

  init() {
    startLog({ name: 'Exit Intent Popup', dev: 'SKh' })
    clarityInterval('exp_intent_popup')

    // if (sessionStorage.getItem('exitIntentPopup')) {
    //   return
    // }
    document.head.insertAdjacentHTML('beforeend', `<style>${mainStyle}</style>`)
    this.createPopup()
    this.handleShowPopup(exploreOurBestSecond, 'firstOrderDiscount', 'test')
    // this.intentPopupTriggers()
    this.copyDiscount()
    this.handlerClickBtns()
  }

  intentPopupTriggers() {
    // for all users on first session after 20 seconds from the session start.
    this.getNewUser('_ga')

    if (this.device === 'mobile') {
      // Scroll up (JS speed value: 150) - for any page
      document.addEventListener('scroll', () => {
        const scrollSpeed = checkScrollSpeed()
        if (+scrollSpeed < -150) {
          this.getItemsBasket('differentUserCategories', 'Scroll up (JS speed value: 150) - for any page')
        }
      })
    }
    if (this.device === 'desktop') {
      // cursor moved out of the page frame
      document.addEventListener('mouseout', event => {
        if (!event.relatedTarget) {
          this.getItemsBasket('differentUserCategories', 'cursor moved out of the page frame')
        }
      })
    }

    // In 60sec. at basket, checkout without any action
    if (window.location.href.match('/checkout') || window.location.href.match('/cart')) {
      this.setupListeners()
      this.resetTimer()
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
      () => this.getItemsBasket('differentUserCategories', 'In 60sec. at basket, checkout without any action'),
      this.delayTime
    )
  }
  getNewUser(name: string) {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    let valueCookie
    let timeNewUser
    if (parts.length === 2 && !localStorage.getItem('initUser')) {
      valueCookie = parts.pop()?.split(';').shift()
      if (valueCookie) {
        timeNewUser = +(valueCookie.split('.').pop() + '000')
        if (+new Date() - +new Date(timeNewUser) <= 5 * 60 * 1000) {
          console.log(`New User`)
          localStorage.setItem('initUser', 'true')
          setTimeout(() => {
            console.log(this.firstSessionTime)
            this.getItemsBasket('firstOrderDiscount', 'firstOrderDiscount')
          }, this.firstSessionTime)
        }
      }
    }
  }
  async getItemsBasket(namePopup: string, trigger: string) {
    if (this.isPopupOpen()) {
      return
    }

    let res: Response | string = await fetch('https://www.sportstech.de/checkout/cart')
    res = await res.text()
    const parser = new DOMParser()
    const doc = parser.parseFromString(res, 'text/html')
    const itemsBasket = doc.querySelectorAll('.checkout-product-table .line-item')
    if (itemsBasket.length !== 0) {
      // checkOutNow -> New users
      if (namePopup === 'differentUserCategories') {
        $el('.new-popup-backdrop').classList.add('check_out_now')
        this.handleShowPopup(checkOutNow, 'checkOutNow', trigger)
      }
      // checkOutNowSecond -> Returning users
      // checkOutNowThird -> Returning users
      itemsBasket.forEach(item => {
        let link = item.querySelector('.line-item-label')?.getAttribute('href')
        let img = item.querySelector('.line-item-img')?.getAttribute('srcset') ?? ''
        let title = item.querySelector('.line-item-label')?.textContent ?? ''
        let opt = item.querySelector('.line-item-details-characteristics-option')?.textContent ?? ''
        let price = item.querySelector('.line-item-total-price-value')?.textContent ?? ''
        console.log(link, img, title, opt, price)

        waitForElement('.products_list').then(i => {
          console.log(`products_list`)
          $el('.products_list').insertAdjacentHTML('beforeend', productItem(img, title, opt, price))
        })
      })
      console.log(itemsBasket, `itemsBasket>>>>>>>>>>>`)
    } else {
      console.log(`w/o products in basket>>>>>>>>>>>`)
      // First order discount popup -> New users
      if (namePopup === 'firstOrderDiscount') {
        $el('.new-popup-backdrop').classList.add('first_order_discount')
        this.handleShowPopup(firstOrderDiscount, 'firstOrderDiscount', trigger)
      }
      if (namePopup === 'differentUserCategories') {
        // exploreOurBestFirst -> New users -> show popup with SALES offer
        if ($el('.new-popup-backdrop').classList.contains('first_order_discount')) {
          $el('.new-popup-backdrop').classList.remove('first_order_discount')
        }
        this.handleShowPopup(exploreOurBestFirst, 'salesOffer', trigger)
        // exploreOurBestSecond -> Returning users -> 3 product categories
        this.handleShowPopup(exploreOurBestSecond, 'threeProductCategories', trigger)
      }
    }
  }

  isPopupOpen() {
    return $el('.new-popup__content')?.children.length > 0
  }
  startCountdown() {
    let time = 15 * 60 // 18 minutes--->seconds

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
  createPopup() {
    console.log(`createPopup`)
    if (!$el('.new-popup-backdrop')) {
      $el('body').insertAdjacentHTML('afterbegin', popup)
    }
  }
  handleShowPopup(content: string, name: string, trigger: string) {
    const isShowed = sessionStorage.getItem(name)
    // if (isShowed) return
    console.log(`handleShowPopup`, trigger)

    const body = $el('body'),
      backdrop = $el('.new-popup-backdrop'),
      popup = $el('.new-popup .new-popup__content')

    if (backdrop.classList.contains('is-hidden')) {
      backdrop.classList.remove('is-hidden')
    }
    body.style.overflow = 'hidden'
    popup.innerHTML = content
    sessionStorage.setItem(name, 'yes')

    waitForElement('#counter').then(i => {
      this.startCountdown()
    })
    this.handleClosePopup()
  }
  handleClosePopup() {
    const body = $el('body'),
      backdrop = $el('.new-popup-backdrop'),
      popup = $el('.new-popup'),
      closePopupBtns = popup.querySelectorAll('[data-popup="close"]')
    closePopupBtns.forEach((btn: HTMLElement) => {
      btn.addEventListener('click', (e: any) => {
        if (e.currentTarget.matches('.no_thanks_btn')) {
          console.log(`no_thanks_btn`)
        } else if (e.currentTarget.matches('.continue_shopping_btn')) {
          console.log(`continue_shopping_btn`)
        } else {
          console.log(`Close`)
        }
        backdrop.classList.add('is-hidden')
        body.style.overflow = 'initial'

        setTimeout(() => {
          $el('.new-popup__content').innerHTML = ''
        }, 500)
      })
    })
    backdrop.addEventListener('click', (e: any) => {
      if (e.target.matches('.new-popup-backdrop')) {
        console.log(`Backdrop`)
        backdrop.classList.add('is-hidden')
        body.style.overflow = 'initial'

        setTimeout(() => {
          $el('.new-popup__content').innerHTML = ''
        }, 500)
      }
    })
  }
  copyDiscount() {
    waitForElement('[data-discount]').then(i => {
      $$el('[data-discount]').forEach((btn): void => {
        btn.addEventListener('click', (event: any) => {
          let discount = event.currentTarget.dataset.discount
          navigator.clipboard.writeText(discount)
          event.currentTarget.textContent = 'Copied!'
          pushData('exp_intent_popup_button_04', 'Promo code', 'Button', 'Pop Up Get paid as you like. In no time!')
          setTimeout(() => {
            btn.innerHTML = `${svg.copyIcon}`
          }, 600)
        })
      })
    })
  }
  handlerClickBtns() {
    document.addEventListener('click', (e: any) => {
      // Show FIRST ORDER DISCOUNT POPUP -> New users - w/o products in basket (First order discount popup)
      if (e.target.matches('.get_discount_btn') && e.target.closest('.first_order_discount')) {
        console.log(`Show FIRST ORDER DISCOUNT POPUP ----> get_discount_btn`)
        if (e.target.closest('.first_order_discount.first_var')) {
          e.target.closest('.first_order_discount').classList.add('is_hidden')
        }
        if ($el('.first_order_discount.second_var').classList.contains('is_hidden')) {
          $el('.first_order_discount.second_var').classList.remove('is_hidden')
        }
      }
      // New users (1st session) - w/o products in basket -> show popup with SALES offer
      if (e.target.matches('.shop_now_btn') && e.target.closest('.first_var')) {
        console.log(`show popup with SALES offer ----> shop_now_btn`)
        window.location.href = 'https://www.sportstech.de/sale'
      }

      //  Returning users (session number > 1)- w/o products in basket -> show 3 product categories on popup
      if (e.target.matches('.shop_now_btn') && e.target.closest('.second_var')) {
        if (e.target.closest('.bestsellers_item')) {
          console.log(`show 3 product categories on popup ----> shop_now_btn bestsellers_item`)
          window.location.href = ' https://www.sportstech.de/restposten'
        } else if (e.target.closest('.bikes_item')) {
          console.log(`show 3 product categories on popup ----> shop_now_btn bikes_item`)
          window.location.href = 'https://www.sportstech.de/bikes'
        } else if (e.target.closest('.equipment_item')) {
          console.log(`show 3 product categories on popup ----> shop_now_btn equipment_item`)
          window.location.href = 'https://www.sportstech.de/equipment'
        }
      }

      // New users - w/ products in basket (at least 1 product)
      if (e.target.matches('.check_out_now_btn') && e.target.closest('.first_var')) {
        console.log(`New users - w/ products in basket (at least 1 product) ----> check_out_now_btn`)
        window.location.href = '/checkout/confirm'
      }

      // Returning users (session number >1) with products in basket (at least 1 product at basket)
      // show popup with discount (on each session until user used this discount)
      if (
        e.target.matches('.complete_my_order_now_btn') &&
        e.target.closest('.second_var') &&
        e.target.closest('.check_out_now')
      ) {
        console.log(`New users - w/ products in basket (at least 1 product) ----> complete_my_order_now_btn second_var`)
        window.location.href = '/checkout/confirm'
      }

      //when used discount - show scarcity popup
      if (
        e.target.matches('.complete_my_order_now_btn') &&
        e.target.closest('.third_var') &&
        e.target.closest('.check_out_now')
      ) {
        console.log(`New users - w/ products in basket (at least 1 product) ----> complete_my_order_now_btn third_var`)
        window.location.href = '/checkout/confirm'
      }
    })
  }
}

new exitIntentPopup(device)
