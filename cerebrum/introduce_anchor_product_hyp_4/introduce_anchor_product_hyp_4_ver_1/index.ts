import { startLog, $el, $$el, waitForElement, clarityInterval } from '../../../libraries'
import { newCheckoutBlock, popup, radioBtnsBlock } from './blocks'
import { svg } from './data'

// @ts-ignore
import mainStyle from './main.css?raw'

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class EmailPageEnhancements {
  device: 'mobile' | 'desktop'

  constructor(device) {
    this.device = device
    this.init()
  }

  init() {
    startLog({ name: 'Introduce anchor product', dev: 'SKh' })
    // clarityInterval('exp_email_enhance', 'variant_1')

    if (!$el('html').classList.contains('crs_dev')) {
      $el('html').classList.add('crs_dev')
    }

    if (!$el('.crs_style')) {
      document.head.insertAdjacentHTML(
        'afterbegin',
        `<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet">`
      )
      document.head.insertAdjacentHTML('beforeend', `<style class="crs_style">${mainStyle}</style>`)
    }

    this.renderRadioBtnsBlock()
    this.renderNewCheckoutBlock()
    this.observePaymentPage()

    if (this.device === 'mobile') {
      this.renderPopup()
    }
  }

  renderRadioBtnsBlock() {
    waitForElement('#payment').then(() => {
      if (!$el('.radio_btns_block')) {
        $el('#payment').insertAdjacentHTML('afterbegin', radioBtnsBlock)
      }
      this.clickBtnStartTrialNowHandler()
    })
  }
  renderNewCheckoutBlock() {
    waitForElement('#payment #checkout-container').then(() => {
      if (!$el('.new_checkout_block')) {
        $el('#payment #checkout-container').insertAdjacentHTML('beforebegin', newCheckoutBlock)
      }
      this.clickCheckoutBackBtnHandler()
    })
  }

  clickBtnStartTrialNowHandler() {
    console.log('clickBtnStartTrialNowHandler')
    waitForElement('.radio_btns_block').then(() => {
      $el('.btn_start_trial_now').addEventListener('click', (e: any) => {
        if (this.device === 'desktop') {
          e.target.closest('.radio_btns_block').style.display = 'none'
          $el('html.crs_dev #payment > .transition-transform-background').style.display = 'block'
        } else {
          console.log('popup')
          waitForElement('#popup').then(() => {
            this.openPopupHandler()
          })
        }
      })
    })
  }

  clickCheckoutBackBtnHandler() {
    console.log('clickCheckoutBackBtnHandler')
    waitForElement('.new_checkout_block').then(() => {
      $el('.checkout_back_btn').addEventListener('click', (e: any) => {
        $el('.radio_btns_block').style.display = 'block'
        $el('html.crs_dev #payment > .transition-transform-background').style.display = 'none'
      })
    })
  }

  renderPopup() {
    waitForElement('body').then(() => {
      if (!$el('#popup')) {
        $el('body').insertAdjacentHTML('afterbegin', popup)
      }
      this.closePopupHandler()
    })
  }

  openPopupHandler() {
    const body = $el('body'),
      backdrop = $el('.new_popup_backdrop'),
      popup = $el('.new-popup .new_popup_content')

    if (backdrop.classList.contains('is_hidden')) {
      backdrop.classList.remove('is_hidden')
    }
    body.style.overflow = 'hidden'

    $el('.new_popup_content').insertAdjacentElement(
      'afterbegin',
      $el('html.crs_dev #payment > .transition-transform-background')
    )
  }

  closePopupHandler() {
    const body = $el('body'),
      backdrop = $el('.new_popup_backdrop'),
      popup = $el('.new_popup'),
      closePopupBtns = popup.querySelectorAll('[data-popup="close"]')

    closePopupBtns.forEach((btn: HTMLElement) => {
      btn.addEventListener('click', (e: any) => {
        if (e.currentTarget) {
          console.log(`closePopupBtns`)
          backdrop.classList.add('is_hidden')
          body.style.overflow = 'initial'
        }
      })
    })
    backdrop.addEventListener('click', (e: any) => {
      if (e.target.matches('.new_popup_backdrop')) {
        console.log(`backdrop`)
        backdrop.classList.add('is_hidden')
        body.style.overflow = 'initial'
      }
    })
  }

  observePaymentPage() {
    const observer = new MutationObserver(() => {
      if (location.pathname.match('/checkout')) {
        if (!$el('html').classList.contains('crs_dev')) {
          $el('html').classList.add('crs_dev')
        }
        if (!$el('.crs_style')) {
          document.head.insertAdjacentHTML(
            'afterbegin',
            `<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet">`
          )
          document.head.insertAdjacentHTML('beforeend', `<style class="crs_style">${mainStyle}</style>`)
        }

        if (!$el('.radio_btns_block')) {
          this.renderRadioBtnsBlock()
        }
        if (!$el('.new_checkout_block')) {
          this.renderNewCheckoutBlock()
        }
        if (this.device === 'mobile') {
          if (!$el('#popup')) {
            this.renderPopup()
          }
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

new EmailPageEnhancements(device)
