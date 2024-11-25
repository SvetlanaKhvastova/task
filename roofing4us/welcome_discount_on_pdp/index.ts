import { startLog, $el, $$el, waitForElement, pushData, clarityInterval, checkScrollSpeed } from '../../libraries'
import { btnTriggerForPopup, popup } from './blocks'
import { svg } from './data'
// @ts-ignore
import mainStyle from './main.css?raw'

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class WelcomeDiscountOnPdp {
  device: 'mobile' | 'desktop'

  constructor(device) {
    this.device = device
    this.init()
  }

  init() {
    startLog({ name: 'Welcome discount on PDP', dev: 'SKh' })
    if (!$el('.crs_style')) {
      document.head.insertAdjacentHTML('beforeend', `<style class="crs_style">${mainStyle}</style>`)
    }

    this.createPopup()
    this.renderBtnTriggerForPopup()
    this.addClickOnBtnTriggerToOpenPopup()
    this.addClickOnEmailInput()
    this.copyDiscount()
  }

  renderBtnTriggerForPopup() {
    waitForElement('.page-container .product__price').then(i => {
      const placeElement = $el('.page-container .product__price') as HTMLElement

      if (!$el('.get_discount_btn_pdp') && !localStorage.getItem('pushowl_email')) {
        placeElement.insertAdjacentHTML('beforeend', btnTriggerForPopup())
      }
    })
  }

  addClickOnBtnTriggerToOpenPopup() {
    waitForElement('.get_discount_btn_pdp').then(i => {
      const btn = $el('.get_discount_btn_pdp') as HTMLElement

      btn.addEventListener('click', () => {
        console.log(`Click on the btn`)
        this.showPopup('Click on the btn')
      })
    })
  }

  showPopup(trigger: string) {
    // if (sessionStorage.getItem('getDiscount')) {
    //   return
    // }
    this.handleShowPopup('getDiscount', trigger)
  }

  createPopup() {
    waitForElement('.page-container .product__price').then(i => {
      console.log(`createPopup !!!`)

      if (!$el('.new_popup_backdrop')) {
        $el('body').insertAdjacentHTML('afterbegin', popup)
      }
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
    // sessionStorage.setItem(name, 'yes')

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

  addClickOnEmailInput() {
    waitForElement('#emailNew').then(i => {
      $$el('#emailNew').forEach(i => {
        i.addEventListener('input', (e: any) => {
          this.validationFormEmail(e.target)
        })
        i.addEventListener('keyup', (e: any) => {
          if (e.key === 'Enter') {
            this.validationFormEmail(e.target, true)
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

  validationFormEmail(target: any, nextStep: boolean = false) {
    let inputValueEmail = $el(`#emailNew`).value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/)

    if (target.getAttribute('name') === 'emailNew') {
      if (inputValueEmail === null) {
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

    if (inputValueEmail !== null && nextStep) {
      if ($el('.first_screen')) {
        $el('.first_screen').classList.add('is_hidden')
      }
      if ($el('.second_screen').classList.contains('is_hidden')) {
        $el('.second_screen').classList.remove('is_hidden')
      }
    }
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
}

new WelcomeDiscountOnPdp(device)
