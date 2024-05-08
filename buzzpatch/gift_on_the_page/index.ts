import { startLog, $el, $$el, waitForElement, pushData, clarityInterval, checkScrollSpeed } from '../../libraries'
import { giftBox, popup } from './blocks'
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
    document.head.insertAdjacentHTML('beforeend', `<style>${mainStyle}</style>`)
    this.createPopup()
    this.rendergGiftBoxs()
  }

  rendergGiftBoxs() {
    $$el('.row .text-center a.get-it').forEach((el: HTMLElement) => {
      el.innerHTML = 'buy buzzpatch <br/> stickers'
      if (!el.nextElementSibling?.classList.contains('.cta_box')) {
        el.insertAdjacentHTML('afterend', giftBox(true, 'cta_box'))
      }
    })
    $$el('.hand-banner a.get-it').forEach((el: HTMLElement) => {
      if (!el.querySelector('.banner_box')) {
        el.insertAdjacentHTML('beforebegin', giftBox(true, 'banner_box'))
      }
    })
  }

  showIntentPopup() {}

  createPopup() {
    console.log(`createPopup`)
    if (!$el('.new-popup-backdrop')) {
      // $el('body').insertAdjacentHTML('afterbegin', popup)
    }
  }
  handleShowPopup(content: string, name: string) {
    const body = $el('body'),
      backdrop = $el('.new-popup-backdrop'),
      popup = $el('.new-popup .new-popup__content')

    if (backdrop.classList.contains('is-hidden')) {
      backdrop.classList.remove('is-hidden')
    }
    body.style.overflow = 'hidden'
    popup.innerHTML = content

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
            backdrop.classList.add('is-hidden')
            body.style.overflow = 'initial'
          }
          e.currentTarget.setAttribute('data-test', '1')
        }
      })
    })
  }
}

new exitIntentPopup(device)
