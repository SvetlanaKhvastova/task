import { startLog, $el, $$el, waitForElement, pushData, clarityInterval, checkScrollSpeed } from '../../libraries'
import { popup, contentPopup } from './blocks'
// @ts-ignore
import mainStyle from './main.css?raw'

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class exitIntentPopup {
  device: 'mobile' | 'desktop'
  timeoutId: NodeJS.Timeout | null
  delayTime: number
  constructor(device) {
    this.device = device
    this.timeoutId = null
    this.delayTime = 60000
    this.init()
  }

  init() {
    startLog({ name: 'Exit Intent Popup', dev: 'SKh' })
    clarityInterval('exp_intent_popup')
    this.getNewUser('_ga')
    // if (sessionStorage.getItem('exitIntentPopup')) {
    //   return
    // }
    document.head.insertAdjacentHTML('beforeend', `<style>${mainStyle}</style>`)
    this.createPopup()
    this.intentPopupTriggers()
    this.copyDiscount()
    this.onClickCompleteYourTradeInBtn()
  }

  intentPopupTriggers() {
    console.log(`intentPopupTriggers`)
    if (this.device === 'mobile') {
      // Scroll up (JS speed value: 70)
      // Swiping (upward or downward swipes)
      document.addEventListener('scroll', () => {
        const scrollSpeed = checkScrollSpeed()
        if (+scrollSpeed < -100 || +scrollSpeed > 100) {
          this.showIntentPopup('Scroll up (JS speed value: 100)/Swiping')
        }
      })
    }
    if (this.device === 'desktop') {
      // Scroll up (JS speed value: 100)
      document.addEventListener('scroll', () => {
        const scrollSpeed = checkScrollSpeed()

        if (+scrollSpeed < -100) {
          this.showIntentPopup('Scroll up (JS speed value: 100)')
        }
      })
      // Cursor leaving active area
      document.addEventListener('mouseout', event => {
        if (!event.relatedTarget) {
          this.showIntentPopup('Cursor leaving active area')
        }
      })
      // Page focus change (activates when the user switches between tabs or windows and then returns)
      document.addEventListener('visibilitychange', () => {
        if (!document.hidden) {
          this.showIntentPopup('Page focus change')
        }
      })
    }

    // In 60 sec. on any page without any action.
    this.setupListeners()
    this.resetTimer()

    // Frequent revisiting the cart/checkout page without completing a purchase. !!!!!!!!!!!!!!!!!!!!!!!
    let cartVisitsCount: string | number | null = parseInt(sessionStorage.getItem('cartVisitsCount') || '0')
    if (window.location.href.match('/checkout') || window.location.href.match('/cart')) {
      cartVisitsCount++
      sessionStorage.setItem('cartVisitsCount', cartVisitsCount.toString())
    }
    if (cartVisitsCount >= 3) {
      setTimeout(() => {
        this.showIntentPopup('Frequent revisiting the cart/checkout')
      }, 600)
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
      () => this.showIntentPopup('In 60 sec. on any page without any action.'),
      this.delayTime
    ) // Set a new timeout
  }

  showIntentPopup(trigger: string) {
    // if (sessionStorage.getItem('exitIntentPopup')) {
    //   return
    // }
    this.handleShowPopup(contentPopup, 'exitIntentPopup', trigger)
    // waitForElement('#mini-cart-count_footer').then(i => {
    //   let s = setInterval(() => {
    //     if (+$el('#mini-cart-count_footer').textContent > 0) {
    //       clearInterval(s)
    //       console.log(+$el('#mini-cart-count_footer').textContent, '<--------at least 1 device at their cart added')
    //     }
    //   }, 10)
    // })
  }
  startCountdown() {
    let time = 18 * 60 // 18 minutes--->seconds

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
    waitForElement('.new-popup-backdrop').then(el => {
      this.handleClosePopup()
    })
  }
  handleShowPopup(content: string, name: string, trigger: string) {
    const isShowed = sessionStorage.getItem(name)
    if (isShowed) return
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

    this.startCountdown()

    pushData('exp_intent_popup_section_01', 'Section', 'Visibility', 'Pop Up Get paid as you like. In no time!')
    this.handleClosePopup()
  }
  handleClosePopup() {
    const body = $el('body'),
      backdrop = $el('.new-popup-backdrop'),
      popup = $el('.new-popup'),
      closePopupBtns = popup.querySelectorAll('[data-popup="close"]')
    closePopupBtns.forEach((btn: HTMLElement) => {
      btn.addEventListener('click', (e: any) => {
        if (e.currentTarget) {
          if (!e.currentTarget.getAttribute('data-test')) {
            if (e.currentTarget.matches('.no_thanks_btn')) {
              pushData('exp_intent_popup_button_02', 'No, thanks', 'Button', 'Pop Up Get paid as you like. In no time!')
            } else {
              pushData('exp_intent_popup_button_01', 'Close', 'Button', 'Pop Up Get paid as you like. In no time!')
            }
            backdrop.classList.add('is-hidden')
            body.style.overflow = 'initial'
          }
          e.currentTarget.setAttribute('data-test', '1')
        }
      })
    })
    backdrop.addEventListener('click', (e: any) => {
      if (!e.target.getAttribute('data-test')) {
        if (e.target.matches('.new-popup-backdrop')) {
          pushData(
            'exp_intent_popup_button_05',
            'Сlick behind the pop-up area',
            'Backdrop',
            'Pop Up Get paid as you like. In no time!'
          )
          backdrop.classList.add('is-hidden')
          body.style.overflow = 'initial'
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
  copyDiscount() {
    waitForElement('[data-discount]').then(i => {
      $$el('[data-discount]').forEach((btn): void => {
        btn.addEventListener('click', (event: any) => {
          navigator.clipboard.writeText('GG35')
          event.currentTarget.textContent = 'Copied!'
          pushData('exp_intent_popup_button_04', 'Promo code', 'Button', 'Pop Up Get paid as you like. In no time!')
          setTimeout(() => {
            event.target.textContent = 'GG35'
          }, 1000)
        })
      })
    })
  }
  onClickCompleteYourTradeInBtn() {
    waitForElement('.complete_your_trade_in_btn').then(i => {
      $el('.complete_your_trade_in_btn').addEventListener('click', (e: any) => {
        if (!e.target.classList.contains('whmc-spinner')) {
          e.target.classList.add('whmc-spinner')
        }
        pushData(
          'exp_intent_popup_button_03',
          'Complete Your Trade-In',
          'Button',
          'Pop Up Get paid as you like. In no time!'
        )
      })
    })
  }

  getNewUser(name: string) {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    let valueCookie
    let timeNewUser
    if (parts.length === 2 && !localStorage.getItem('newUser')) {
      valueCookie = parts.pop()?.split(';').shift()
      if (valueCookie) {
        timeNewUser = +(valueCookie.split('.').pop() + '000')
        if (+new Date() - +new Date(timeNewUser) <= 5 * 60 * 1000) {
          console.log(`New User`)
          localStorage.setItem('newUser', 'true')
        } else {
          console.log(new Date(timeNewUser))
        }
      }
    }
  }
}

new exitIntentPopup(device)
