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
    window.onload = () => {
      // Check if there is a 'session' value in localStorage
      if (localStorage.getItem('session') && !sessionStorage.getItem('session')) {
        // If there is, increment it by 1
        let session = Number(localStorage.getItem('session'))
        localStorage.setItem('session', (session + 1).toString())
        sessionStorage.setItem('session', '1')
      } else {
        // If not, set it to 1
        if (!localStorage.getItem('session')) {
          localStorage.setItem('session', '1')
          sessionStorage.setItem('session', '1')
        }
      }

      // Now we can check if the user is returning
      if (Number(localStorage.getItem('session')) > 1) {
        console.log('Returning users (session number > 1)', Number(localStorage.getItem('session')))
      } else {
        console.log('(1st session)', Number(localStorage.getItem('session')))
      }
    }

    startLog({ name: 'Exit Intent Popup Relaunch', dev: 'SKh' })
    clarityInterval('exp_exit_intent_popup')

    document.head.insertAdjacentHTML(
      'afterbegin',
      `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">`
    )

    document.head.insertAdjacentHTML('beforeend', `<style>${mainStyle}</style>`)

    if (
      !sessionStorage.getItem('firstOrderDiscount') ||
      !localStorage.getItem('initUser') ||
      !localStorage.getItem('klaviyoForm')
    ) {
      document.body.insertAdjacentHTML(
        'afterbegin',
        `<style class="crs_style_klaviyo">
          body > div > div.needsclick.kl-private-reset-css-Xuajs1 {
            opacity: 0;
            pointer-events: none;
            display: none;
          }
        </style`
      )
    }
    // for all users on first session after 20 seconds from the session start.
    if (!localStorage.getItem('initUser')) {
      this.getNewUser('_ga')
    }

    this.createPopup()
    setTimeout(() => {
      this.intentPopupTriggers()
    }, 200)
    this.handlerClickBtns()
    this.copyDiscount()
    this.handlerClickInput()
    this.observerKlaviyo()
    this.autoCompleteHiddenInput()
  }

  intentPopupTriggers() {
    if (Number(localStorage.getItem('session')) > 1) {
      if (sessionStorage.getItem('returningUsers')) return
    } else {
      if (sessionStorage.getItem('salesOffer') && sessionStorage.getItem('checkOutNow')) return
    }

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
    const ga = getCookies(name)
    if (!ga) {
      console.log(`New User`)
      localStorage.setItem('initUser', 'true')
      setTimeout(() => {
        if (this.isPopupOpen()) {
          return
        }
        // First order discount popup -> New users
        $el('.new-popup-backdrop').classList.add('first_order_discount')
        this.handleShowPopup(firstOrderDiscount, 'firstOrderDiscount', 'firstOrderDiscount', 'firstOrderDiscount')

        if (!sessionStorage.getItem('firstOrderDiscount')) {
          this.handlerCloseKlaviyo()
        }
      }, this.firstSessionTime)
    } else {
      if (ga) {
        const timeNewUser = +(ga.split('.').pop() + '000')
        if (+new Date() - +new Date(timeNewUser) <= 5 * 60 * 1000) {
          console.log(`New User`)
          localStorage.setItem('initUser', 'true')
          setTimeout(() => {
            if (this.isPopupOpen()) {
              return
            }
            // First order discount popup -> New users
            $el('.new-popup-backdrop').classList.add('first_order_discount')
            this.handleShowPopup(firstOrderDiscount, 'firstOrderDiscount', 'firstOrderDiscount', 'firstOrderDiscount')

            if (!sessionStorage.getItem('firstOrderDiscount')) {
              this.handlerCloseKlaviyo()
            }
          }, this.firstSessionTime)
        }
      }
    }
  }
  async getItemsBasket(namePopup: string, trigger: string) {
    if (this.isPopupOpen()) {
      return
    }
    // _______________________________________________________________________________________
    // not more than 2 popups with time lag in 3 minutes
    const now = Date.now()
    if (sessionStorage.getItem('lastPopupTime')) {
      this.lastPopupTime = Number(sessionStorage.getItem('lastPopupTime'))
    }

    if (now - this.lastPopupTime < this.timeLag) return
    sessionStorage.setItem('lastPopupTime', now.toString())

    // _______________________________________________________________________________________
    // rating
    const ratingArr = await this.getCartCheckout()

    // _______________________________________________________________________________________
    let res: Response | string = await fetch('https://www.sportstech.de/checkout/cart')
    res = await res.text()
    const parser = new DOMParser()
    const doc = parser.parseFromString(res, 'text/html')
    const itemsBasket = doc.querySelectorAll('.checkout-product-table .line-item-product')
    // _______________________________________________________________________________________
    //  - - -> with products in basket
    if (itemsBasket.length !== 0) {
      if (namePopup === 'differentUserCategories') {
        if ($el('.new-popup-backdrop').classList.contains('first_order_discount')) {
          $el('.new-popup-backdrop').classList.remove('first_order_discount')
        }
        if ($el('.new-popup-backdrop').classList.contains('sales_offer')) {
          $el('.new-popup-backdrop').classList.remove('sales_offer')
        }
        if ($el('.new-popup-backdrop').classList.contains('categories_product')) {
          $el('.new-popup-backdrop').classList.remove('categories_product')
        }
        if (itemsBasket.length > 1) {
          $el('.new-popup-backdrop').classList.add('large_popup')
        } else {
          if ($el('.new-popup-backdrop').classList.contains('large_popup')) {
            $el('.new-popup-backdrop').classList.remove('large_popup')
          }
        }

        if (Number(localStorage.getItem('session')) > 1) {
          // - - -> Returning users
          // _______________________________________________________________________________________
          // checkOutNowSecond
          // if (!localStorage.getItem('checkOutNowSecond')) {
          //   // if ($el('.new-popup-backdrop').classList.contains('check_out_now')) {
          //   //   $el('.new-popup-backdrop').classList.remove('check_out_now')
          //   // }
          //   // if ($el('.new-popup-backdrop').classList.contains('check_out_now_third')) {
          //   //   $el('.new-popup-backdrop').classList.remove('check_out_now_third')
          //   // }
          //   // $el('.new-popup-backdrop').classList.add('check_out_now_second')
          //   // this.handleShowPopup(checkOutNowSecond, 'returningUsers', trigger, 'checkOutNowSecond')
          //   // localStorage.setItem('checkOutNowSecond', 'yes')
          // } else {
          // }
          // _______________________________________________________________________________________
          // checkOutNowThird
          if ($el('.new-popup-backdrop').classList.contains('check_out_now')) {
            $el('.new-popup-backdrop').classList.remove('check_out_now')
          }
          if ($el('.new-popup-backdrop').classList.contains('check_out_now_second')) {
            $el('.new-popup-backdrop').classList.remove('check_out_now_second')
          }
          $el('.new-popup-backdrop').classList.add('check_out_now_third')
          this.handleShowPopup(checkOutNowThird, 'returningUsers', trigger, 'checkOutNowThird')
        } else {
          // - - -> New users
          // _______________________________________________________________________________________
          // checkOutNow
          if ($el('.new-popup-backdrop').classList.contains('check_out_now_second')) {
            $el('.new-popup-backdrop').classList.remove('check_out_now_second')
          }
          if ($el('.new-popup-backdrop').classList.contains('check_out_now_third')) {
            $el('.new-popup-backdrop').classList.remove('check_out_now_third')
          }

          $el('.new-popup-backdrop').classList.add('check_out_now')
          this.handleShowPopup(checkOutNow, 'checkOutNow', trigger, 'checkOutNow')
        }
      }

      if ($el('.new-popup-backdrop.check_out_now .first_var > .img_wrapper img')) {
        $el('.new-popup-backdrop.check_out_now .first_var > .img_wrapper img').src = itemsBasket[itemsBasket.length - 1]
          .querySelector('.line-item-img')
          ?.getAttribute('src')
      }

      itemsBasket.forEach(item => {
        let link = item.querySelector('.line-item-label')?.getAttribute('href') ?? ''
        let img = item.querySelector('.line-item-img')?.getAttribute('srcset') ?? ''
        let title = item.querySelector('.line-item-label')?.textContent ?? ''
        let opt = item.querySelector('.line-item-details-characteristics-option')?.textContent ?? ''
        let price = item.querySelector('.line-item-total-price-value')?.textContent ?? ''
        let rating
        let stars

        ratingArr.forEach(o => {
          if (o?.titleProduct?.trim().toLocaleLowerCase() === title.trim().toLocaleLowerCase()) {
            rating = o.numRatings
            stars = o.averageRating
          }
        })

        waitForElement('.products_list').then(i => {
          $el('.products_list').insertAdjacentHTML(
            'beforeend',
            productItem(link, img, title, opt, price, rating, this.renderStars(stars))
          )
        })
      })
    } else {
      // _______________________________________________________________________________________
      // w/o products in basket
      if ($el('.new-popup-backdrop').classList.contains('check_out_now')) {
        $el('.new-popup-backdrop').classList.remove('check_out_now')
      }
      if ($el('.new-popup-backdrop').classList.contains('check_out_now_second')) {
        $el('.new-popup-backdrop').classList.remove('check_out_now_second')
      }
      if ($el('.new-popup-backdrop').classList.contains('check_out_now_third')) {
        $el('.new-popup-backdrop').classList.remove('check_out_now_third')
      }
      if ($el('.new-popup-backdrop').classList.contains('large_popup')) {
        $el('.new-popup-backdrop').classList.remove('large_popup')
      }
      if ($el('.new-popup-backdrop').classList.contains('categories_product')) {
        $el('.new-popup-backdrop').classList.remove('categories_product')
      }
      if ($el('.new-popup-backdrop').classList.contains('sales_offer')) {
        $el('.new-popup-backdrop').classList.remove('sales_offer')
      }
      if ($el('.new-popup-backdrop').classList.contains('first_order_discount')) {
        $el('.new-popup-backdrop').classList.remove('first_order_discount')
      }
      // _______________________________________________________________________________________
      // First order discount popup -> New users
      // if (namePopup === 'firstOrderDiscount') {
      //   $el('.new-popup-backdrop').classList.add('first_order_discount')
      //   this.handleShowPopup(firstOrderDiscount, 'firstOrderDiscount', trigger, 'firstOrderDiscount')
      // }
      // _______________________________________________________________________________________
      if (namePopup === 'differentUserCategories') {
        if (Number(localStorage.getItem('session')) > 1) {
          // - - -> Returning users
          // _______________________________________________________________________________________
          // exploreOurBestSecond -> 3 product categories
          $el('.new-popup-backdrop').classList.add('categories_product')
          this.handleShowPopup(exploreOurBestSecond, 'returningUsers', trigger, 'categoriesProduct')
        } else {
          // - - -> New users
          // _______________________________________________________________________________________
          // exploreOurBestFirst -> show popup with SALES offer
          $el('.new-popup-backdrop').classList.add('sales_offer')
          this.handleShowPopup(exploreOurBestFirst, 'salesOffer', trigger, 'salesOffer')
        }
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
  handleShowPopup(content: string, name: string, trigger: string, visibilityName: string) {
    console.log(`handleShowPopup`, trigger, name)
    const isShowed = sessionStorage.getItem(name)
    if (isShowed && name !== 'firstOrderDiscountClick') return

    const body = $el('body'),
      backdrop = $el('.new-popup-backdrop'),
      popup = $el('.new-popup .new-popup__content')

    if (backdrop.classList.contains('is-hidden')) {
      backdrop.classList.remove('is-hidden')
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
      case 'categoriesProduct':
        pushData(
          'exp_exit_intent_popup_section_04',
          'Section',
          'Visibility',
          'Entdecken Sie unsere besten Produkte Step 2'
        )
        break
      case 'salesOffer':
        pushData(
          'exp_exit_intent_popup_section_03',
          'Section',
          'Visibility',
          'Entdecken Sie unsere besten Produkte Step 1'
        )
        break
      case 'checkOutNow':
        pushData(
          'exp_exit_intent_popup_section_05',
          'Section',
          'Visibility',
          'Jetzt zur Kasse gehen und  5% Rabatt auf Ihre erste Bestellung erhalten Step 1'
        )
        break
      case 'checkOutNowSecond':
        pushData(
          'exp_exit_intent_popup_section_06',
          'Section',
          'Visibility',
          'Jetzt zur Kasse gehen und  5% Rabatt sowie kostenlose Lieferung erhalten Step 2'
        )
        break
      case 'checkOutNowThird':
        pushData('exp_exit_intent_popup_section_07', 'Section', 'Visibility', 'Es gehört fast Ihnen!')
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
      backdrop = $el('.new-popup-backdrop'),
      popup = $el('.new-popup'),
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
            this.handlerCloseKlaviyo()
          }
          if (e.currentTarget.matches('.continue_shopping_btn')) {
            pushData('exp_exit_intent_popup_button_06', 'Weiter einkaufen', 'Button', 'Sie stehen auf der Liste')
          }
          if (
            e.currentTarget.closest('.first_order_discount') &&
            e.currentTarget.matches('.new-popup__close') &&
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
            this.handlerCloseKlaviyo()
          }
          if (
            e.currentTarget.closest('.first_order_discount') &&
            e.currentTarget.matches('.new-popup__close') &&
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

          backdrop.classList.add('is-hidden')
          body.style.overflow = 'initial'

          setTimeout(() => {
            $el('.new-popup__content').innerHTML = ''
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
        if (e.target.matches('.new-popup-backdrop')) {
          backdrop.classList.add('is-hidden')
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
            this.handlerCloseKlaviyo()
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
            $el('.new-popup__content').innerHTML = ''
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
        this.validationFormEmail($el(`#emailNew`), true)
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
          this.validationFormEmail(e.target)
        })
        i.addEventListener('keyup', (e: any) => {
          if (e.key === 'Enter') {
            this.validationFormEmail(e.target)
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

  validationFormEmail(target: any, nextStep: boolean = false) {
    let inputValueEmail = $el(`#emailNew`).value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/)

    if (target.getAttribute('name') === 'emailNew') {
      if (inputValueEmail === null) {
        if (!$el(`#edit-email-address-error`)) {
          target.insertAdjacentHTML(
            'afterend',
            `<span id="edit-email-address-error" class="error">Please Enter Valid Email Address</span>`
          )
        }
        let t = setInterval(() => {
          if (
            $el(`#edit-email-address-error`) &&
            $el(`#edit-email-address-error`).textContent !== 'Please Enter Valid Email Address'
          ) {
            clearInterval(t)
            $el(`#edit-email-address-error`).textContent = 'Please Enter Valid Email Address'
          }
        }, 100)
      } else {
        $el(`#edit-email-address-error`)?.remove()
      }
    }

    if (inputValueEmail !== null && nextStep) {
      let waitFoundBtnKlaviyo = setInterval(() => {
        if ($el('.klaviyo-form [name="email"]')) {
          clearInterval(waitFoundBtnKlaviyo)
          const inputElement = $el('.klaviyo-form [name="email"]')
          inputElement.value = target.value
          inputElement.dispatchEvent(new Event('input'))
          setTimeout(() => {
            $el('.klaviyo-form button.needsclick.go952291206.kl-private-reset-css-Xuajs1').click()
            localStorage.setItem('klaviyoForm', 'yes')
            setTimeout(() => {
              this.handlerCloseKlaviyo()
            }, 1000)
          }, 1500)
        }
      }, 100)

      if ($el('.first_order_discount.first_var')) {
        $el('.first_order_discount.first_var').classList.add('is_hidden')
      }
      if ($el('.first_order_discount.second_var').classList.contains('is_hidden')) {
        $el('.first_order_discount.second_var').classList.remove('is_hidden')
      }
      pushData('exp_exit_intent_popup_section_02', 'Section', 'Visibility', 'Sie stehen auf der Liste')
    }
  }
  handlerCloseKlaviyo() {
    $el('.needsclick.klaviyo-close-form.kl-private-reset-css-Xuajs1')?.click()
    setTimeout(() => {
      $el('.crs_style_klaviyo')?.remove()
    }, 1600)
  }
  hanlderClickBtnFirtsPopupKlaviyo() {
    let trigger = this.device === 'mobile' ? 'button.needsclick.kl-teaser-SP24tu' : 'button.needsclick.kl-teaser-SH5AsN'
    waitForElement(trigger).then(i => {
      $el(trigger).addEventListener('click', (e: any) => {
        e.preventDefault()
        e.stopPropagation()
        $el('.new-popup-backdrop').classList.add('first_order_discount')
        this.handleShowPopup(firstOrderDiscount, 'firstOrderDiscountClick', 'click', 'firstOrderDiscount')
        this.copyDiscount()
      })
    })
  }

  observerKlaviyo() {
    let trigger = this.device === 'mobile' ? 'button.needsclick.kl-teaser-SP24tu' : 'button.needsclick.kl-teaser-SH5AsN'
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        for (let node of mutation.removedNodes) {
          if (!(node instanceof HTMLElement)) continue
          if (node.querySelector('.needsclick.kl-private-reset-css-Xuajs1')) {
            this.hanlderClickBtnFirtsPopupKlaviyo()
          }
        }

        for (let node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue
          if (node.querySelector(trigger)) {
            this.hanlderClickBtnFirtsPopupKlaviyo()
          }
          if (node.closest('.offcanvas')) {
            this.autoCompleteHiddenInput()
          }
        }
      })
    })

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true
    })
  }

  renderStars(averageRating: string): string {
    const rating = parseFloat(averageRating)
    const fullStars = Math.floor(rating)
    const partialStarThreshold = 0.5 // Порог для отображения части звезды
    const hasPartialStar = rating % 1 >= partialStarThreshold
    const totalStars = 5

    let starsHtml = ''

    // Добавляем полные звезды
    for (let i = 0; i < fullStars; i++) {
      starsHtml += svg.starIcon // Полная звезда
    }

    // Добавляем часть звезды, если десятичная часть больше порога
    if (hasPartialStar) {
      starsHtml += svg.starPartIcon // Часть звезды
    }

    // Добавляем пустые звезды, учитывая часть звезды
    const emptyStarsCount = totalStars - fullStars - (hasPartialStar ? 1 : 0)
    for (let i = 0; i < emptyStarsCount; i++) {
      starsHtml += svg.starEmptyIcon // Пустая звезда
    }

    return starsHtml
  }

  autoCompleteHiddenInput() {
    waitForElement('#addPromotionOffcanvasCartInput').then(i => {
      $$el('#addPromotionOffcanvasCartInput').forEach(i => {
        if (i.autocomplete !== 'off') {
          i.autocomplete = 'off'
        }
      })
    })
    waitForElement('#addPromotionInput').then(i => {
      $$el('#addPromotionInput').forEach(i => {
        if (i.autocomplete !== 'off') {
          i.autocomplete = 'off'
        }
      })
    })
  }
  // ______________________________________________________________________________________
  // FETCH
  async getCartCheckout() {
    try {
      const response = await fetch(`https://www.sportstech.de/mm-fp/cart `.trim(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      const items = data?.lineItems
      const keys = Object.keys(items)

      const sValues = await Promise.all(
        keys.map(async el => {
          const sku = await this.getProductInfo(el)
          const ratingArr = await this.getRating(sku.manufacturerNumber, sku.titleProduct)
          return ratingArr
        })
      )

      return sValues
    } catch (error) {
      throw error
    }
  }

  async getProductInfo(id: string): Promise<string | undefined> {
    try {
      const response = await fetch(`https://www.sportstech.de/store-api/product/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'sw-access-key': 'SWSCSNIXRK51Z1JNSMZIUXHEVW'
        }
      })

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`)
      }

      const data = await response.json()
      const titleProduct = data?.product?.name
      const manufacturerNumber = data?.product?.productNumber
      const q = { titleProduct: titleProduct, manufacturerNumber: manufacturerNumber }
      return q
    } catch (error) {
      throw error
    }
  }

  async getRating(sku: string, titleProduct: string): Promise<any> {
    try {
      const response = await fetch(
        `https://api.reviews.io/product/rating-batch?sku=${sku}&store=www.sportstech.de&lang=de&enableSyndication=true`.trim(),
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`)
      }
      const data = await response.json()
      // Проверяем, существует ли ключ '0' и возвращаем его значение напрямую
      if (data.hasOwnProperty('0')) {
        return {
          titleProduct: titleProduct,
          numRatings: data['0'].num_ratings,
          averageRating: data['0'].average_rating
        }
      }
      // Если ключ '0' отсутствует, возвращаем объект ratings как раньше
      const ratings = Object.keys(data).reduce((acc, key) => {
        acc[key] = {
          titleProduct: titleProduct,
          numRatings: data[key].num_ratings,
          averageRating: data[key].average_rating
        }
        return acc
      }, {})
      return ratings
    } catch (error) {
      throw error
    }
  }

  async getCoupon(code: string, isActive: boolean = true) {
    await fetch(`https://www.sportstech.de/checkout/promotion/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        code: code
      })
    })
      .then(response => {
        return response
      })
      .then(data => {
        if (data.status === 200) {
          console.log(data.status, `getCoupon`)
          if (isActive) {
            window.location.href = '/checkout/confirm'
          }
        }
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }
}

new exitIntentPopup(device)
