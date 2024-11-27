import { startLog, $el, $$el, waitForElement, pushData, clarityInterval } from '../../libraries'
import { btnTriggerForPopup, popup } from './blocks'
import { svg } from './data'
// @ts-ignore
import mainStyle from './main.css?raw'

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class WelcomeDiscountOnPdp {
  device: 'mobile' | 'desktop'
  private isPopupEventHandlersAdded: boolean = false

  constructor(device) {
    this.device = device
    this.init()
    this.observeLocalStorage()
  }

  init() {
    startLog({ name: 'Welcome discount on PDP', dev: 'SKh' })
    if (!$el('.crs_style')) {
      document.head.insertAdjacentHTML('beforeend', `<style class="crs_style">${mainStyle}</style>`)
    }

    this.renderButtonTriggerForPopup()
    this.addClickOnButtonTriggerToOpenPopup()
    this.createPopup()
    this.addClickOnEmailInput()
    this.addClickOnStepEmailButton()
    this.addClickOnStepCouponButton()
    this.copyDiscount()
    this.observeControlPopup()
  }

  renderButtonTriggerForPopup() {
    waitForElement('.page-container .product__price').then(i => {
      const placeElement = $el('.page-container .product__price') as HTMLElement

      if (
        !$el('.get_discount_btn_pdp') &&
        !localStorage.getItem('pushowl_email') &&
        !sessionStorage.getItem('sentEmail')
      ) {
        placeElement.insertAdjacentHTML('afterend', btnTriggerForPopup())
      }
    })
  }

  observeLocalStorage() {
    const originalSetItem = localStorage.setItem
    localStorage.setItem = function (key, value) {
      const event = new Event('itemInserted')
      document.dispatchEvent(event)
      originalSetItem.apply(this, arguments)
    }

    document.addEventListener('itemInserted', () => {
      if (localStorage.getItem('pushowl_email')) {
        const discountButton = $el('.get_discount_btn_pdp')
        if (discountButton) {
          discountButton.classList.add('is_hidden')
        }
      }
    })
  }

  addClickOnButtonTriggerToOpenPopup() {
    waitForElement('.get_discount_btn_pdp').then(i => {
      const btn = $el('.get_discount_btn_pdp') as HTMLElement

      btn.addEventListener('click', () => {
        this.showPopup('getDiscount', 'Click on the btn')
      })
    })
  }

  createPopup() {
    waitForElement('.page-container .product__price').then(i => {
      console.log(`createPopup !!!`)

      if (!$el('.new_popup_backdrop')) {
        $el('body').insertAdjacentHTML('afterbegin', popup)
      }
    })
  }

  showPopup(name: string, trigger: string) {
    const isShowed = sessionStorage.getItem(name)
    if (isShowed) return
    console.log(`handleShowPopup`, trigger)

    const body = $el('body'),
      backdrop = $el('.new_popup_backdrop')

    if (backdrop.classList.contains('is_hidden')) {
      backdrop.classList.remove('is_hidden')
    }
    body.style.overflow = 'hidden'

    // pushData('exp_intent_popup_section_01', 'Section', 'Visibility', 'Pop Up Get paid as you like. In no time!')
    this.closePopup()
  }

  closePopup() {
    const backdrop = $el('.new_popup_backdrop') as HTMLElement
    const popup = $el('.new_popup') as HTMLElement
    const closePopupBtns = popup.querySelectorAll('[data-popup="close"]') as NodeListOf<HTMLElement>

    if (!this.isPopupEventHandlersAdded) {
      closePopupBtns.forEach((btn: HTMLElement) => {
        btn.addEventListener('click', this.handleBtnClosePopupClick.bind(this))
      })

      backdrop.addEventListener('click', this.handleBackdropClick.bind(this))

      this.isPopupEventHandlersAdded = true
    }
  }

  handleBtnClosePopupClick(e: any) {
    if (e.currentTarget && e.currentTarget.closest('.step_coupon_wrapper')) {
      console.log(`step_coupon_wrapper close_btn`)
      this.applyCoupon(`couponCode`)
    } else {
      // pushData('exp_intent_popup_button_01', 'Close', 'Button', 'Pop Up Get paid as you like. In no time!');
      console.log(`close_btn`)
      this.hidePopup()
    }
  }

  handleBackdropClick(e: any) {
    if (e.target.matches('.new_popup_backdrop')) {
      if (e.target.closest('.step_coupon_wrapper')) {
        console.log('new_popup_backdrop step_coupon_wrapper')
        this.applyCoupon(`couponCode`)
      } else {
        // pushData(
        //   'exp_intent_popup_button_05',
        //   'Сlick behind the pop-up area',
        //   'Backdrop',
        //   'Pop Up Get paid as you like. In no time!'
        // );
        console.log('new_popup_backdrop')
        this.hidePopup()
      }
    }
  }

  hidePopup() {
    const body = $el('body')
    const backdrop = $el('.new_popup_backdrop')

    backdrop.classList.add('is_hidden')
    body.style.overflow = 'initial'
  }

  addClickOnEmailInput() {
    waitForElement('#emailNew').then(i => {
      $$el('#emailNew').forEach(i => {
        i.addEventListener('input', (e: any) => {
          this.validateEmailForm(e.target)
        })
        i.addEventListener('keyup', (e: any) => {
          if (e.key === 'Enter') {
            this.validateEmailForm(e.target, true)
          }
        })
        i.addEventListener('blur', (e: any) => {
          // pushData(
          //   'exp_exit_intent_popup_input_01',
          //   '5% Rabatt erhalten',
          //   'Input',
          //   'Erhalten Sie 5% Rabatt & kostenlose Lieferung!'
          // )
        })
      })
    })
  }

  addClickOnStepEmailButton() {
    waitForElement('.main_red_btn.step_email').then(i => {
      const btn = $el('.main_red_btn.step_email') as HTMLElement
      const emailInput = $el('#emailNew') as HTMLInputElement

      btn.addEventListener('click', () => {
        this.validateEmailForm(emailInput, true)
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
  }

  sendEmailToGoogleSheet(email: string) {
    const scriptURL =
      'https://script.google.com/macros/s/AKfycbyA8NPDk20WCSWow0TDtKORatekqwFNliI74uv8h4Cb3woquUnCID-NA6OpGssJAG6iOw/exec'

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

  addClickOnStepCouponButton() {
    waitForElement('.main_red_btn.step_coupon').then(i => {
      const btn = $el('.main_red_btn.step_coupon') as HTMLElement

      btn.addEventListener('click', () => {
        this.applyCoupon(`couponCode`)
      })
    })
  }

  applyCoupon(couponCode: string) {
    const currentPath = window.location.pathname
    window.location.href = `/discount/${couponCode}?redirect=${currentPath}`
  }

  copyDiscount() {
    waitForElement('[data-discount]').then(i => {
      $$el('[data-discount]').forEach((btn): void => {
        btn.addEventListener('click', (event: any) => {
          let discount = event.currentTarget.dataset.discount
          navigator.clipboard.writeText(discount)
          event.currentTarget.textContent = 'Copied!'

          setTimeout(() => {
            btn.innerHTML = `${svg.copyIcon}`
          }, 600)
        })
      })
    })
  }

  observeControlPopup() {
    const observer = new MutationObserver(mutationsList => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          const popup = $el('.new_popup_backdrop')
          if (popup && !popup.classList.contains('is_hidden')) {
            const needsClickElement = $el('body > div> div.needsclick.kl-private-reset-css-Xuajs1')
            if (needsClickElement) {
              console.log(`popup`)
              needsClickElement.classList.add('is_hidden')
            }
          }
        }
      }
    })

    observer.observe(document.body, { childList: true, subtree: true })
  }
}

new WelcomeDiscountOnPdp(device)

// https://docs.google.com/spreadsheets/d/1oxoMuVbbUiQqoU-VAUemZwPVNuXzgEpuY3Ij058NMbs/edit?usp=sharing
// https://script.google.com/home/projects/1vmQyhqYKQqGejrDOPa1VM27gpdTpbx4qAzN7z7VULSLZ_Bjl7vy3KBEE/edit
