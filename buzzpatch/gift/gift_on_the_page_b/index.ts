import {
  startLog,
  $el,
  $$el,
  waitForElement,
  pushData,
  clarityInterval,
  visibilityOfTime,
  checkScrollPosition
} from '../../../libraries'
import { popup } from './blocks'
import { svg, git } from './data'
// @ts-ignore
import mainStyle from './main.css?raw'

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class exitIntentPopup {
  device: 'mobile' | 'desktop'

  constructor(device) {
    this.device = device

    this.init()
  }

  init() {
    startLog({ name: 'Gift hypothesis (second iteration) v.B', dev: 'SKh' })
    clarityInterval('exp_introduce_b')
    document.head.insertAdjacentHTML(
      'beforeend',
      `<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet">`
    )
    document.head.insertAdjacentHTML('beforeend', `<style>${mainStyle}</style>`)
    this.createPopup()
    this.rendergGiftElements()
    this.clickProceedToCheckoutBtnHandler()
    this.clickNewCheckoutBtnHandler()
    this.visibleHandler()
    this.handleClickGetNow()
  }

  rendergGiftElements() {
    $$el('#getNow input[type=radio] + label').forEach((el: HTMLElement) => {
      if (el.getAttribute('for') === 'radios-3') return
      el.insertAdjacentHTML('afterbegin', svg.giftIcon)
    })
    if ($el('.new-bundle-pack img').src !== `${git}new_bundle_img.png`) {
      $el('.new-bundle-pack img').src = `${git}new_bundle_img.png`
    }
    if ($el('#getNow .days').src !== `${git}new_trustpilot_reviews_img.png`) {
      $el('#getNow .days').src = `${git}new_trustpilot_reviews_img.png`
    }
  }
  createPopup() {
    if (!$el('.new_popup_backdrop')) {
      $el('body').insertAdjacentHTML('afterbegin', popup)
    }
    waitForElement('.new_popup_backdrop').then(el => {
      this.handleClosePopup()
    })
  }
  handleShowPopup(idValue: number) {
    const body = $el('body'),
      backdrop = $el('.new_popup_backdrop'),
      html = $el('html')
    if (backdrop.classList.contains('is_hidden')) {
      backdrop.classList.remove('is_hidden')
    }
    body.style.overflow = 'hidden'
    html.style.overflow = 'hidden'
    // Start the progress bar animation
    setTimeout(() => {
      this.addToCartGiftHandler(idValue)
    }, 3000)
    $el('.progress_bar').classList.add('progress_bar_fill')

    pushData('exp_introduce_b_popup_01', '16 magical characters', 'Visibility', 'Pop up')
  }
  handleClosePopup() {
    const body = $el('body'),
      backdrop = $el('.new_popup_backdrop'),
      popup = $el('.new_popup'),
      closePopupBtns = popup.querySelectorAll('[data-popup="close"]'),
      html = $el('html')
    closePopupBtns.forEach((btn: HTMLElement) => {
      btn.addEventListener('click', (e: any) => {
        if (e.currentTarget) {
          pushData('exp_introduce_b_button_01', 'Close', 'Button', 'Pop up')
          backdrop.classList.add('is_hidden')
          body.style.overflow = 'initial'
          html.style.overflow = 'initial'
        }
      })
    })
  }
  clickProceedToCheckoutBtnHandler() {
    $el('#addToCart')?.addEventListener('click', (e: any) => {
      e.preventDefault()
      let idValue = $el('.js-packs input[type=radio]:checked+label')?.previousElementSibling.value
      let idValueForFalse = '39542857695276'
      idValue === idValueForFalse ? this.addToCartGiftHandler(idValue, false) : this.handleShowPopup(idValue)
    })
  }
  clickNewCheckoutBtnHandler() {
    waitForElement('.new_checkout_btn').then(i => {
      $el('.new_checkout_btn')?.addEventListener('click', (e: any) => {
        e.preventDefault()
        let idValue = $el('.js-packs input[type=radio]:checked+label')?.previousElementSibling.value
        let idValueForFalse = '39542857695276'
        idValue === idValueForFalse ? this.addToCartGiftHandler(idValue, false) : this.addToCartGiftHandler(idValue)
      })
    })
  }
  async addToCartGiftHandler(idValue: number, gift: boolean = true) {
    // clearCart
    await fetch('/cart/clear.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    let items = [
      {
        id: idValue,
        quantity: 1
      }
    ]

    if (gift) {
      items.push({
        id: 43320074436652,
        quantity: 1
      })
    }

    let formData = {
      items: items
    }

    // addToCart
    await fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    window.location.href = '/checkout'
  }
  visibleHandler() {}
  handleClickGetNow() {
    waitForElement('#getNow').then(i => {
      $$el('[href="#getFormNow"]').forEach(el => {
        el.addEventListener('click', (e: any) => {
          e.preventDefault()
          e.stopPropagation()
          $('html, body').stop()
          let coverageElem: HTMLElement = $el('#getNow')

          let headerOffset: number = 65
          let scroll = true
          let s = setInterval(async () => {
            if (
              coverageElem.getBoundingClientRect().top > headerOffset - 1 &&
              coverageElem.getBoundingClientRect().top <= headerOffset + 1
            ) {
              clearInterval(s)
            } else {
              if (scroll) {
                scroll = false
                scroll = await checkScrollPosition(headerOffset, coverageElem)
              }
            }
          }, 100)
        })
      })
    })
  }
}

if (window.location.pathname.match('pages')) {
  new exitIntentPopup(device)
}
