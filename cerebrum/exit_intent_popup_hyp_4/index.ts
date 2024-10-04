import { startLog, $el, $$el, waitForElement, pushData, clarityInterval, checkScrollSpeed } from '../../libraries'
import { popup } from './blocks'
// @ts-ignore
import mainStyle from './main.css?raw'

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class ExitIntentPopup {
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
    // clarityInterval('exp_intent_popup')

    // if (sessionStorage.getItem('exitIntentPopup')) {
    //   return
    //   //Frequency: once per session
    // }
    if (!$el('.crs_font')) {
      document.head.insertAdjacentHTML(
        'afterbegin',
        `link class="crs_font" href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"`
      )
    }
    document.head.insertAdjacentHTML('beforeend', `<style>${mainStyle}</style>`)
    this.createPopup()
    this.intentPopupTriggers()
    this.observePaymentPage()
  }

  intentPopupTriggers() {
    console.log(`intentPopupTriggers`)
    if (this.device === 'mobile') {
      // Swiping (upward or downward swipes)
      // Scroll up (JS speed value: 100)
      document.addEventListener('scroll', () => {
        const scrollSpeed = checkScrollSpeed()
        if (+scrollSpeed < -100 || +scrollSpeed > 100) {
          this.showIntentPopup('Scroll up (JS speed value: 100)/Swiping')
        }
      })
    }
    if (this.device === 'desktop') {
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
      // Scroll up (JS speed value: 100)
      document.addEventListener('scroll', () => {
        const scrollSpeed = checkScrollSpeed()

        if (+scrollSpeed < -100) {
          this.showIntentPopup('Scroll up (JS speed value: 100)')
        }
      })
    }

    // Frequent revisiting the checkout page without completing a purchase. !!!!!!!!!!!!!!!!!!!!!!!
    let cartVisitsCount: string | number | null = parseInt(sessionStorage.getItem('cartVisitsCount') || '0')
    if (window.location.href.match('/checkout') || window.location.href.match('/cart')) {
      cartVisitsCount++
      sessionStorage.setItem('cartVisitsCount', cartVisitsCount.toString())
    }
    if (cartVisitsCount >= 3) {
      setTimeout(() => {
        this.showIntentPopup('Frequent revisiting the checkout page without completing a purchase.')
      }, 600)
    }
    // In 60 sec. on checkout page without any action.
    this.setupListeners()
    this.resetTimer()

    // On unfinished attempt to purchase via card/paypal/google pay/apple pay ??????????????????????????????
    // _________________________________________________________________________________________________________
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
    if (sessionStorage.getItem('exitIntentPopup')) {
      return
    }
    this.handleShowPopup('exitIntentPopup', trigger)
  }

  createPopup() {
    console.log(`createPopup`)
    if (!$el('.new_popup_backdrop')) {
      $el('body').insertAdjacentHTML('afterbegin', popup)
    }
    waitForElement('.new_popup_backdrop').then(el => {
      this.handleClosePopup()
    })
  }
  handleShowPopup(name: string, trigger: string) {
    const isShowed = sessionStorage.getItem(name)
    if (isShowed) return
    console.log(`handleShowPopup`, trigger)

    const body = $el('body'),
      backdrop = $el('.new_popup_backdrop')

    if (backdrop.classList.contains('is-hidden')) {
      backdrop.classList.remove('is-hidden')
    }
    body.style.overflow = 'hidden'
    sessionStorage.setItem(name, 'yes')

    // pushData('exp_intent_popup_section_01', 'Section', 'Visibility', 'Pop Up Get paid as you like. In no time!')
    this.handleClosePopup()
  }
  handleClosePopup() {
    const body = $el('body'),
      backdrop = $el('.new_popup_backdrop'),
      popup = $el('.new_popup'),
      closePopupBtns = popup.querySelectorAll('[data-popup="close"]')
    closePopupBtns.forEach((btn: HTMLElement) => {
      btn.addEventListener('click', (e: any) => {
        if (e.currentTarget) {
          // pushData('exp_intent_popup_button_01', 'Close', 'Button', 'Pop Up Get paid as you like. In no time!')
          backdrop.classList.add('is-hidden')
          body.style.overflow = 'initial'
        }
      })
    })
    backdrop.addEventListener('click', (e: any) => {
      if (e.target.matches('.new_popup_backdrop')) {
        // pushData(
        //   'exp_intent_popup_button_05',
        //   'Сlick behind the pop-up area',
        //   'Backdrop',
        //   'Pop Up Get paid as you like. In no time!'
        // )
        backdrop.classList.add('is-hidden')
        body.style.overflow = 'initial'
      }
    })
  }

  observePaymentPage() {
    const observer = new MutationObserver(() => {
      if (location.pathname.match('/checkout')) {
        if (!$el('.new_popup_backdrop')) {
          this.createPopup()
        }
      } else {
        if ($el('html').classList.contains('crs_dev')) {
          $el('html').classList.remove('crs_dev')
        }
      }
    })

    observer.observe($el('body'), { childList: true, subtree: true })
  }
}

new ExitIntentPopup(device)
