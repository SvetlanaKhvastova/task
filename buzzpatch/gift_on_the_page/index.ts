import {
  startLog,
  $el,
  $$el,
  waitForElement,
  pushData,
  clarityInterval,
  checkScrollSpeed,
  loadScriptsOrStyles
} from '../../libraries'
import { giftBox, popup } from './blocks'
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
    startLog({ name: 'Exit Intent Popup', dev: 'SKh' })
    clarityInterval('exp_intent_popup')
    document.head.insertAdjacentHTML(
      'beforeend',
      `<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet">`
    )
    document.head.insertAdjacentHTML('beforeend', `<style>${mainStyle}</style>`)
    this.createPopup()
    this.rendergGiftElements()
    this.triggerPopupOpen()
    this.setupSwipeToClosePopup()
    this.clickAddToCartBtnHandler()
  }

  rendergGiftElements() {
    $$el('.row .text-center a.get-it').forEach((el: HTMLElement) => {
      el.innerHTML = 'buy buzzpatch <br/> stickers'
      if (!el.nextElementSibling?.classList.contains('.cta_box')) {
        el.insertAdjacentHTML('afterend', giftBox(true, 'cta_box'))
      }
    })
    $$el('.hand-banner a.get-it').forEach((el: HTMLElement) => {
      if (!el.previousElementSibling?.classList.contains('.banner_box')) {
        el.insertAdjacentHTML('beforebegin', giftBox(true, 'banner_box'))
      }
    })
    $$el('#getNow .prices').forEach((el: HTMLElement) => {
      if (!el.previousElementSibling?.classList.contains('.bundle_box')) {
        el.insertAdjacentHTML('beforebegin', giftBox(false, 'bundle_box'))
      }
    })
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
  triggerPopupOpen() {
    waitForElement('.trigger_popup_open').then(i => {
      $el('.trigger_popup_open').addEventListener('click', (e: any) => {
        e.preventDefault()
        console.log(`trigger_popup_open`)
        this.handleShowPopup()
      })
    })
  }
  setupSwipeToClosePopup() {
    loadScriptsOrStyles([
      'https://cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.19/jquery.touchSwipe.min.js'
    ]).then(async () => {
      let s = setInterval(() => {
        if (typeof $('.border_icon').swipe === 'function' && $el('.border_icon')) {
          clearInterval(s)
          $('.border_icon').swipe({
            swipeUp: function () {
              console.log(`swipeUp`)
              $el('.new_popup_backdrop').classList.add('is_hidden')
              $el('body').style.overflow = 'initial'
            },
            threshold: 0
          })
        }
      }, 400)
    })
  }

  createPopup() {
    if (!$el('.new_popup_backdrop')) {
      $el('body').insertAdjacentHTML('afterbegin', popup)
    }
    waitForElement('.new_popup_backdrop').then(el => {
      this.handleClosePopup()
    })
  }
  handleShowPopup() {
    const body = $el('body'),
      backdrop = $el('.new_popup_backdrop')
    if (backdrop.classList.contains('is_hidden')) {
      backdrop.classList.remove('is_hidden')
    }
    body.style.overflow = 'hidden'
  }
  handleClosePopup() {
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
  }
  clickAddToCartBtnHandler() {
    $el('#addToCart')?.addEventListener('click', (e: any) => {
      e.preventDefault()
      let idValue = $el('.js-packs input[type=radio]:checked+label')?.previousElementSibling.value
      console.log(idValue, `idValue`)
      idValue === '39542857695276' ? this.addToCartGiftHandler(idValue, false) : this.addToCartGiftHandler(idValue)
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
}

if (window.location.pathname.match('pages')) {
  new exitIntentPopup(device)
}
