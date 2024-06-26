import {
  startLog,
  $el,
  $$el,
  waitForElement,
  pushData,
  clarityInterval,
  visibilityOfTime,
  checkScrollPosition
} from '../../../../libraries'
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
    startLog({ name: 'Gift hypothesis (second iteration) v.C', dev: 'SKh' })
    clarityInterval('exp_introduce_c')

    if (localStorage.getItem('clickCheckoutBtn') === 'yes') localStorage.removeItem('clickCheckoutBtn')
    if (localStorage.getItem('setTimeout3000') === 'yes') localStorage.removeItem('setTimeout3000')

    document.head.insertAdjacentHTML(
      'beforeend',
      `<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet">`
    )
    document.head.insertAdjacentHTML('beforeend', `<style>${mainStyle}</style>`)
    this.createPopup()
    this.rendergGiftElements()
    this.clickProceedToCheckoutBtnHandler()
    this.clickNewCheckoutBtnHandler()
    this.clickNewNoThanksBtnHandler()
    this.clickRadioBtnHandler()
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
  triggerPopupOpenVerC(idValue: number) {
    this.handleShowPopup()
  }

  createPopup() {
    const price = $el('.free-natpat-products .np-decals')?.getAttribute('data-price-compare')
    if (!$el('.new_popup_backdrop')) {
      $el('body').insertAdjacentHTML('afterbegin', popup(price ? price : '$9.99'))
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
    $el('.progress_bar')?.classList.add('progress_bar_fill')
    pushData('exp_introduce_v2_element_01', 'Popover', 'Visibility', 'Congratulations! You get a FREE GIFT!  ')
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
      // version C
      idValue === idValueForFalse ? this.addToCartGiftHandler(idValue, false) : this.triggerPopupOpenVerC(idValue)
    })
  }
  clickNewCheckoutBtnHandler() {
    waitForElement('.new_checkout_btn').then(i => {
      $el('.new_checkout_btn')?.addEventListener('click', (e: any) => {
        e.preventDefault()
        pushData(
          'exp_introduce_v2_button_04',
          'Add Gift to order and check out',
          'Button',
          'Congratulations! You get a FREE GIFT!  '
        )
        localStorage.setItem('clickCheckoutBtn', 'yes')
        if (localStorage.getItem('setTimeout3000') === 'yes') return
        let idValue = $el('.js-packs input[type=radio]:checked+label')?.previousElementSibling.value
        let idValueForFalse = '39542857695276'
        // version C
        let idValueSocks = $el('.socks_radio_wrapper input[type=radio]:checked')?.value
        idValue === idValueForFalse
          ? this.addToCartGiftHandler(idValue, false)
          : this.addToCartGiftHandler(idValue, true, true, idValueSocks)
      })
    })
  }
  clickNewNoThanksBtnHandler() {
    // version C
    waitForElement('.new_no_thanks_btn').then(i => {
      $el('.new_no_thanks_btn')?.addEventListener('click', (e: any) => {
        e.preventDefault()
        pushData(
          'exp_introduce_v2_button_05',
          'No, thanks. I do not want the free gift',
          'Button',
          'Congratulations! You get a FREE GIFT!  '
        )
        let idValue = $el('.js-packs input[type=radio]:checked+label')?.previousElementSibling.value
        this.addToCartGiftHandler(idValue, false, true)
      })
    })
  }
  clickRadioBtnHandler() {
    waitForElement('.socks_radio_wrapper').then(i => {
      $$el('.socks_radio_wrapper label').forEach(el => {
        el.addEventListener('click', (e: any) => {
          pushData(
            'exp_introduce_v2_button_03',
            el.textContent.trim(),
            'Button',
            'Congratulations! You get a FREE GIFT!'
          )
        })
      })
    })
  }
  async addToCartGiftHandler(idValue: number, gift: boolean = true, closed = false, idValueSocks?: number) {
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
        id: idValueSocks ?? 43320074436652,
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
    if (closed) {
      $el('.new_popup_backdrop')?.classList.add('is_hidden')
      $el('body').style.overflow = 'initial'
      $el('html').style.overflow = 'initial'
    }
    window.location.href = '/checkout'
  }

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
