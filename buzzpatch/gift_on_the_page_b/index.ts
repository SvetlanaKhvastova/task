import {
  startLog,
  $el,
  $$el,
  waitForElement,
  pushData,
  clarityInterval,
  visibilityOfTime,
  checkScrollPosition
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
    startLog({ name: 'Exit Intent Popup v.B', dev: 'SKh' })
    clarityInterval('exp_introduce_b')
    document.head.insertAdjacentHTML(
      'beforeend',
      `<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet">`
    )
    document.head.insertAdjacentHTML('beforeend', `<style>${mainStyle}</style>`)
    this.createPopup()
    this.rendergGiftElements()
    this.triggerPopupOpen()
    this.clickAddToCartBtnHandler()
    this.visibleHandler()
    this.handleClickGetNow()
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
        pushData('exp_introduce_b_link_01', '16 magical characters', 'Link', 'Shopping section')
        this.handleShowPopup()
      })
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
      backdrop = $el('.new_popup_backdrop'),
      html = $el('html')
    if (backdrop.classList.contains('is_hidden')) {
      backdrop.classList.remove('is_hidden')
    }
    body.style.overflow = 'hidden'
    html.style.overflow = 'hidden'

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
  clickAddToCartBtnHandler() {
    $el('#addToCart')?.addEventListener('click', (e: any) => {
      e.preventDefault()
      let idValue = $el('.js-packs input[type=radio]:checked+label')?.previousElementSibling.value
      console.log(idValue, `idValue`)
      let idValueForFalse = '39542857695276'
      idValue === idValueForFalse ? this.addToCartGiftHandler(idValue, false) : this.addToCartGiftHandler(idValue)
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
  visibleHandler() {
    waitForElement('.hand-banner .banner_box').then(i => {
      visibilityOfTime('.hand-banner .banner_box', 'exp_introduce_b_element_01', 'First screen', 'Limited time offer')
    })
    waitForElement('.effectiveness .cta_box').then(i => {
      visibilityOfTime(
        '.effectiveness .cta_box',
        'exp_introduce_b_element_02',
        'Limited Time Offer',
        `Limited time offer - 1`
      )
    })
    waitForElement('.bp-comparison .cta_box').then(i => {
      visibilityOfTime(
        '.bp-comparison .cta_box',
        'exp_introduce_b_element_02',
        'Limited Time Offer',
        `Limited time offer - 2`
      )
    })
    waitForElement('#ingredients .cta_box').then(i => {
      visibilityOfTime(
        '#ingredients .cta_box',
        'exp_introduce_b_element_02',
        'Limited Time Offer',
        `Limited time offer - 3`
      )
    })
    waitForElement('#getNow .bundle_box').then(i => {
      visibilityOfTime('#getNow .bundle_box', 'exp_introduce_b_element_03', 'Shopping section', 'Limited time offer')
    })
  }
  handleClickGetNow() {
    waitForElement('#getNow').then(i => {
      $$el('[href="#getNow"]').forEach(el => {
        el.addEventListener('click', (e: any) => {
          e.preventDefault()
          e.stopPropagation()
          $('html, body').stop()
          let coverageElem: HTMLElement = $el('#getNow')
          let headerOffset: number = 35
          if (e.target.closest('.hand-banner') || (e.target.closest('.navbar') && !e.target.closest('.fixed-top'))) {
            headerOffset = 110
          }
          checkScrollPosition(headerOffset, coverageElem)
        })
      })
    })
  }
}

if (window.location.pathname.match('pages')) {
  new exitIntentPopup(device)
}
