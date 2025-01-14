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

    const isProductsInBasket = '1'
    const isReturningUser = Number(localStorage.getItem('session')) > 1

    const showPopup = (popup: any, popupType: string) => {
      this.handleShowPopup(popup, popupType, trigger, popupType)
    }

    if (isProductsInBasket.length > 0) {
      if (isReturningUser) {
        showPopup(returningUsersWithProducts, 'returningUsersWithProducts')
      } else {
        showPopup(newUsersWithProducts, 'newUsersWithProducts')
      }
    } else {
      if (isReturningUser) {
        showPopup(returningUsersWOProducts, 'returningUsersWOProducts')
      } else {
        showPopup(newUsersWOProducts(), 'newUsersWOProducts')
      }
    }
  }

  isPopupOpen() {
    return $el('.new_popup_content')?.children.length > 0
  }

  handleShowPopup(content: string, name: string, trigger: string, visibilityName: string) {
    console.log(`handleShowPopup`, trigger, name)
    const isShowed = sessionStorage.getItem(name)
    if (isShowed && name !== 'firstOrderDiscountClick') return

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
        pushData(
          'exp_exit_intent_popup_section_01',
          'Section',
          'Visibility',
          'Erhalten Sie 5% Rabatt & kostenlose Lieferung!'
        )
        break
      case 'returningUsersWOProducts':
        pushData(
          'exp_exit_intent_popup_section_04',
          'Section',
          'Visibility',
          'Entdecken Sie unsere besten Produkte Step 2'
        )
        break
      case 'newUsersWOProducts':
        pushData(
          'exp_exit_intent_popup_section_03',
          'Section',
          'Visibility',
          'Entdecken Sie unsere besten Produkte Step 1'
        )
        break
      case 'newUsersWithProducts':
        pushData(
          'exp_exit_intent_popup_section_05',
          'Section',
          'Visibility',
          'Jetzt zur Kasse gehen und  5% Rabatt auf Ihre erste Bestellung erhalten Step 1'
        )
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
        if (!e.currentTarget.getAttribute('data-test')) {
          if (e.currentTarget.matches('.no_thanks_btn')) {
            pushData(
              'exp_exit_intent_popup_button_03',
              'Nein, danke',
              'Button',
              'Erhalten Sie 5% Rabatt & kostenlose Lieferung!'
            )
          }
          if (e.currentTarget.matches('.continue_shopping_btn')) {
            pushData('exp_exit_intent_popup_button_06', 'Weiter einkaufen', 'Button', 'Sie stehen auf der Liste')
          }
          if (
            e.currentTarget.closest('.first_order_discount') &&
            e.currentTarget.matches('.new_popup_close') &&
            !e.currentTarget
              .closest('.first_order_discount')
              .querySelector('.first_var')
              .classList.contains('is_hidden')
          ) {
            pushData(
              'exp_exit_intent_popup_button_01',
              'Close',
              'Button',
              'Erhalten Sie 5% Rabatt & kostenlose Lieferung!'
            )
          }
          if (
            e.currentTarget.closest('.first_order_discount') &&
            e.currentTarget.matches('.new_popup_close') &&
            !e.currentTarget
              .closest('.first_order_discount')
              .querySelector('.second_var')
              .classList.contains('is_hidden')
          ) {
            pushData('exp_exit_intent_popup_button_04', 'Close', 'Button', 'Sie stehen auf der Liste')
          }
          if (e.currentTarget.closest('.categories_product')) {
            pushData(
              'exp_exit_intent_popup_button_09',
              'Close',
              'Button',
              'Entdecken Sie unsere besten Produkte Step 2'
            )
          }
          if (e.currentTarget.closest('.sales_offer')) {
            pushData(
              'exp_exit_intent_popup_button_07',
              'Close',
              'Button',
              'Entdecken Sie unsere besten Produkte Step 1'
            )
          }
          if (e.currentTarget.closest('.check_out_now')) {
            pushData(
              'exp_exit_intent_popup_button_11',
              'Close',
              'Button',
              'Jetzt zur Kasse gehen und  5% Rabatt auf Ihre erste Bestellung erhalten Step 1'
            )
            this.getCoupon('SPORTSTECH5', false)
          }
          if (e.currentTarget.closest('.check_out_now_second')) {
            pushData(
              'exp_exit_intent_popup_button_14',
              'Close',
              'Button',
              'Jetzt zur Kasse gehen und  5% Rabatt sowie kostenlose Lieferung erhalten Step 2'
            )
            this.getCoupon('SPORTSTECH5', false)
          }
          if (e.currentTarget.closest('.check_out_now_third')) {
            pushData('exp_exit_intent_popup_button_17', 'Close', 'Button', 'Es gehört fast Ihnen!')
          }

          backdrop.classList.add('is_hidden')
          body.style.overflow = 'initial'

          setTimeout(() => {
            $el('.new_popup_content').innerHTML = ''
          }, 500)
        }
        e.currentTarget.setAttribute('data-test', '1')
        setTimeout(() => {
          if (btn.getAttribute('data-test')) {
            btn.removeAttribute('data-test')
          }
        }, 1000)
      })
    })
    backdrop.addEventListener('click', (e: any) => {
      if (!e.target.getAttribute('data-test')) {
        if (e.target.matches('.new_popup_backdrop')) {
          backdrop.classList.add('is_hidden')
          body.style.overflow = 'initial'

          if (
            e.currentTarget.matches('.first_order_discount') &&
            !e.currentTarget.querySelector('.first_var').classList.contains('is_hidden')
          ) {
            pushData(
              'exp_exit_intent_popup_click_01',
              'Close behind the pop-up area',
              'Click',
              'Erhalten Sie 5% Rabatt & kostenlose Lieferung!'
            )
          }

          if (
            e.currentTarget.matches('.first_order_discount') &&
            !e.currentTarget.querySelector('.second_var').classList.contains('is_hidden')
          ) {
            pushData(
              'exp_exit_intent_popup_click_02',
              'Close behind the pop-up area',
              'Click',
              'Sie stehen auf der Liste'
            )
          }
          if (e.currentTarget.matches('.categories_product')) {
            pushData(
              'exp_exit_intent_popup_click_04',
              'Close behind the pop-up area',
              'Click',
              'Entdecken Sie unsere besten Produkte Step 2'
            )
          }
          if (e.currentTarget.matches('.sales_offer')) {
            pushData(
              'exp_exit_intent_popup_click_03',
              'Close behind the pop-up area',
              'Click',
              'Entdecken Sie unsere besten Produkte Step 1'
            )
          }
          if (e.currentTarget.matches('.check_out_now')) {
            pushData(
              'exp_exit_intent_popup_click_05',
              'Close behind the pop-up area',
              'Click',
              'Jetzt zur Kasse gehen und  5% Rabatt auf Ihre erste Bestellung erhalten Step 1'
            )
            this.getCoupon('SPORTSTECH5', false)
          }
          if (e.currentTarget.matches('.check_out_now_second')) {
            pushData(
              'exp_exit_intent_popup_click_06',
              'Close behind the pop-up area',
              'Click',
              'Jetzt zur Kasse gehen und  5% Rabatt sowie kostenlose Lieferung erhalten Step 2'
            )
            this.getCoupon('SPORTSTECH5', false)
          }
          if (e.currentTarget.matches('.check_out_now_third')) {
            pushData('exp_exit_intent_popup_click_07', 'Close behind the pop-up area', 'Click', 'Es gehört fast Ihnen!')
          }

          setTimeout(() => {
            $el('.new_popup_content').innerHTML = ''
          }, 500)
        }
      }
      e.target.setAttribute('data-test', '1')
      setTimeout(() => {
        if (e.target.getAttribute('data-test')) {
          e.target.removeAttribute('data-test')
        }
      }, 1000)
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
          event.currentTarget.textContent = 'Copied!'

          if (btn.closest('.first_order_discount')) {
            pushData('exp_exit_intent_popup_button_05', 'Code  Welcome5', 'Button', 'Sie stehen auf der Liste')
          }
          if (btn.closest('.check_out_now.first_var')) {
            pushData(
              'exp_exit_intent_popup_button_12',
              'Code SPORTSTECH5',
              'Button',
              'Jetzt zur Kasse gehen und  5% Rabatt auf Ihre erste Bestellung erhalten Step 1'
            )
          }
          if (btn.closest('.check_out_now_second')) {
            pushData(
              'exp_exit_intent_popup_button_15',
              'Code PRSNLoffer5',
              'Button',
              'Jetzt zur Kasse gehen und  5% Rabatt sowie kostenlose Lieferung erhalten Step 2'
            )
          }

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
        pushData(
          'exp_exit_intent_popup_button_02',
          '5% Rabatt erhalten',
          'Button',
          'Erhalten Sie 5% Rabatt & kostenlose Lieferung!'
        )
        this.validateEmailForm($el(`#emailNew`), true)
      }
      // New users (1st session) - w/o products in basket -> show popup with SALES offer
      if (e.target.matches('.shop_now_btn') && e.target.closest('.first_var')) {
        pushData(
          'exp_exit_intent_popup_button_08',
          ' Jetzt einkaufen',
          'Button',
          'Entdecken Sie unsere besten Produkte Step 1'
        )
        window.location.href = 'https://www.sportstech.de/sale'
      }

      //  Returning users (session number > 1)- w/o products in basket -> show 3 product categories on popup
      if (e.target.matches('.shop_now_btn') && e.target.closest('.second_var')) {
        if (e.target.closest('.bestsellers_item')) {
          pushData(
            'exp_exit_intent_popup_button_10',
            'Bestseller - Jetzt einkaufen',
            'Button',
            'Entdecken Sie unsere besten Produkte Step 2'
          )
          window.location.href = 'https://www.sportstech.de/sale'
        } else if (e.target.closest('.bikes_item')) {
          pushData(
            'exp_exit_intent_popup_button_10',
            'Speedbikes und Ergometer -Jetzt einkaufen',
            'Button',
            'Entdecken Sie unsere besten Produkte Step 2'
          )
          window.location.href = 'https://www.sportstech.de/bikes'
        } else if (e.target.closest('.equipment_item')) {
          pushData(
            'exp_exit_intent_popup_button_10',
            'Ausrüstung - Jetzt einkaufen',
            'Button',
            'Entdecken Sie unsere besten Produkte Step 2'
          )
          window.location.href = 'https://www.sportstech.de/rudergeraet'
        }
      }

      // New users - w/ products in basket (at least 1 product)
      if (e.target.matches('.check_out_now_btn') && e.target.closest('.first_var')) {
        pushData(
          'exp_exit_intent_popup_button_13',
          'Jetzt zur Kasse',
          'Button',
          'Jetzt zur Kasse gehen und  5% Rabatt auf Ihre erste Bestellung erhalten Step 1'
        )
        this.getCoupon('SPORTSTECH5')
      }

      // Returning users (session number >1) with products in basket (at least 1 product at basket)
      // show popup with discount (on each session until user used this discount)
      if (
        e.target.matches('.complete_my_order_now_btn') &&
        e.target.closest('.second_var') &&
        e.target.closest('.check_out_now')
      ) {
        pushData(
          'exp_exit_intent_popup_button_16',
          'Meine Bestellung jetzt abschließen',
          'Button',
          'Jetzt zur Kasse gehen und  5% Rabatt sowie kostenlose Lieferung erhalten Step 2'
        )
        this.getCoupon('SPORTSTECH5')
      }

      //when used discount - show scarcity popup
      if (
        e.target.matches('.complete_my_order_now_btn') &&
        e.target.closest('.third_var') &&
        e.target.closest('.check_out_now')
      ) {
        pushData(
          'exp_exit_intent_popup_button_18',
          'Meine Bestellung jetzt abschließen',
          'Button',
          'Es gehört fast Ihnen!'
        )
        window.location.href = '/checkout/confirm'
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
        i.addEventListener('blur', (e: any) => {
          pushData(
            'exp_exit_intent_popup_input_01',
            '5% Rabatt erhalten',
            'Input',
            'Erhalten Sie 5% Rabatt & kostenlose Lieferung!'
          )
        })
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
      this.handleEmailSubmission(emailInputValue)
    }
  }
  handleEmailSubmission(email: string) {
    this.sendEmailToGoogleSheet(email)

    $el('.new_popup_backdrop').classList.add('step_coupon_wrapper')

    $el('.get_discount_btn_pdp').classList.add('is_hidden')

    if ($el('.first_screen')) {
      $el('.first_screen').classList.add('is_hidden')
    }

    if ($el('.second_screen').classList.contains('is_hidden')) {
      $el('.second_screen').classList.remove('is_hidden')
    }
    pushData('exp_01_welcome__popup_2__view', 'Step 2. Coupon code', 'view', 'Popup Save 5% on Your next order')
  }
  sendEmailToGoogleSheet(email: string) {
    const scriptURL = 'https://script.google.com/macros/s/1/exec'

    fetch(scriptURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({ email: email })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        sessionStorage.setItem('sentEmail', 'yes')
        return response.json()
      })
      .then(data => {
        console.log('Success:', data)
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }
  async getCartCheckout() {
    await fetch('/cart.js', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        // data.items.forEach(el => {})
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }
  async getCoupon(couponCode: string, isActive: boolean = true) {
    const currentPath = window.location.pathname
    window.location.href = `/discount/${couponCode}?redirect=${currentPath}`
  }
}

new ExitIntentPopup(device)
