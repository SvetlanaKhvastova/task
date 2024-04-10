import { startLog, $el, $$el, waitForElement, loadScriptsOrStyles, visibilityOfTime, pushData } from '../../libraries'
// @ts-ignore
import mainStyle from './main.css?raw'
import { newBundleItem } from './blocks'
import { git } from './data'

startLog({ name: 'Introduce bundle on the page', dev: 'SKh' })
const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class introduceBundle {
  device: 'mobile' | 'desktop'
  singleClick: boolean
  constructor(device) {
    this.device = device
    this.singleClick = true
    this.init()
  }
  init() {
    if (this.device === 'mobile') {
      document.head.insertAdjacentHTML(
        'beforeend',
        `<link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;600&family=Noto+Sans+SC:wght@100..900&family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet">`
      )
      document.head.insertAdjacentHTML('beforeend', `<style>${mainStyle}</style>`)
      this.replaceElemsSlideInCart()
      this.renderNewBundleItem()
      this.addClickOldPaksHandler()
      this.addClickBtnsOpenSlideInCartHandler()
      waitForElement('.list-packs-bundle').then(i => {
        this.initTooltip()
        this.addClickNewBundleHandlers()
      })
      this.addClassScrollBlock()

      window.addEventListener('resize', () => {
        this.getHeightSlideInCartScroll()
      })
    }
  }

  replaceElemsSlideInCart() {
    $el('#cons').insertAdjacentHTML(
      'afterbegin',
      `<div id="slideInCartScroll"><div class="scroll_wrapper"></div></div>`
    )
    $el('#cons').insertAdjacentHTML('afterbegin', `<div id="slideInCartHeader"></div>`)
    $el('#cons').insertAdjacentHTML('beforeend', `<div id="slideInCartFooter"></div>`)

    waitForElement('#slideInCartHeader').then(i => {
      $el('#slideInCartHeader').insertAdjacentElement('afterbegin', $el('#cons .title-logo'))
    })
    waitForElement('#slideInCartScroll').then(i => {
      $el('#slideInCartScroll .scroll_wrapper').insertAdjacentElement('beforeend', $el('#cons .magicpatch-packs'))
    })

    waitForElement('#slideInCartFooter').then(i => {
      $el('#slideInCartFooter').insertAdjacentElement('afterbegin', $el('#cons .view-prices'))
      $el('#slideInCartFooter').insertAdjacentElement('beforeend', $el('#cons .reviews-slide'))
    })
    $$el('.reviews-slide img').forEach(i => {
      i.src = `${git}/img/new_logos.png`
    })
    $$el('.close-btn').forEach(i => {
      i.src = `${git}/img/close_icon.svg`
    })
    //
    $$el('.np-one-pack').forEach(t => {
      t.innerHTML =
        'Select 2, 3 or 4 packs to subscribe with an <b>extra 15% off</b> - <span>save time and money</span>'
    })
  }
  renderNewBundleItem() {
    $$el('.list-packs.list-packs-3').forEach(pack => {
      if (!pack.nextElementSibling.classList.contains('list-packs-bundle')) {
        pack.insertAdjacentHTML('afterend', newBundleItem)
        this.getHeightSlideInCartScroll()
      }
    })
  }
  addClickOldPaksHandler() {
    $$el('.list-packs').forEach(pack => {
      pack.addEventListener('click', () => {
        if (!pack.classList.contains('list-packs-bundle')) {
          this.removeOrChangeElems()
        }
        setTimeout(() => {
          this.getHeightSlideInCartScroll()
        }, 500)
      })
    })
  }
  addClickBtnsOpenSlideInCartHandler() {
    $$el('#open').forEach(pack => {
      pack.addEventListener('click', () => {
        this.removeOrChangeElems()
        this.getHeightSlideInCartScroll()
      })
    })
  }
  removeOrChangeElems() {
    this.singleClick = true
    $$el('.info_subscription').forEach(i => {
      i.remove()
    })
    $$el('.new_checkout_btn').forEach(i => {
      i.remove()
    })
    $$el('#no-icart-open').forEach(i => {
      i.style.display = 'block'
    })
  }
  addClickNewBundleHandlers() {
    const elements = $$el('.list-packs-bundle')

    let timeout: any
    elements.forEach(bundle => {
      bundle.addEventListener('click', e => {
        if (
          !e.target.classList.contains('tooltip_zone') &&
          !e.target.classList.contains('tooltip_bgr') &&
          !e.target.classList.contains('tooltip_icon') &&
          !e.target.classList.contains('path_var')
        ) {
          console.log(e.target, `>>>>>>>>>>>>>>>>>.`)
          if (!timeout && this.singleClick) {
            timeout = setTimeout(() => {
              timeout = null
              this.singleClick = false
              this.clickBundleHandler(bundle)
            }, 300)
          } else {
            clearTimeout(timeout)
            timeout = null
            this.doubleClickBundleHandler(43053597229100)
            this.singleClick = true
          }
        }
      })
    })
  }
  clickBundleHandler(target: any) {
    console.log('Clicked', target)
    $$el('.list-packs').forEach(pack => {
      if (!pack.classList.contains('list-packs-bundle') && pack.classList.contains('active-slide')) {
        pack.classList.remove('active-slide')
      }
      if (pack.classList.contains('list-packs-bundle')) {
        pack.classList.add('active-slide')
      }
    })

    $$el('.view-prices').forEach(el => {
      if (!el.querySelector('.info_subscription')) {
        el.querySelector('.stay-container').insertAdjacentHTML(
          'beforebegin',
          `<div class="info_subscription"><p>Subscription is available for 2, 3, or 4 packs of ZenPatch only</p></div>`
        )
      }
      if (!el.querySelector('.new_checkout_btn')) {
        el.querySelector('#no-icart-open').insertAdjacentHTML(
          'beforebegin',
          `<a class="new_checkout_btn" href="#">PROCEED TO CHECKOUT</a>`
        )
        this.clickNewCheckoutBtnHandler()
      }
      el.querySelector('.stay-container .np-multiple-pack').style.display = 'none'
      el.querySelector('.stay-container .np-one-pack').style.display = 'none'
      el.querySelector('.sale-price').textContent = '40.00'
      el.querySelector('.off-price').textContent = '60'
      el.querySelector('.line-through').textContent = '$'
      el.querySelector('.strikethrough-lg').textContent = '99.96'
      el.querySelector('.text-save').textContent = '$59.96'
      el.querySelector('#no-icart-open').style.display = 'none'
    })
  }
  async doubleClickBundleHandler(idValue: number, reset: boolean = false) {
    console.log('Double Clicked')
    // clearCart
    if (!reset) {
      await fetch('/cart/clear.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          return response.json()
        })
        .catch(error => {
          console.error('Error:', error)
        })
    }

    let formData = {
      items: [
        {
          id: idValue,
          quantity: 1
        }
      ]
    }
    // addToCart
    await fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        response.json()
        setTimeout(() => {
          window.location.href = '/checkout'
        }, 300)
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }
  clickNewCheckoutBtnHandler() {
    $$el('.new_checkout_btn').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault()
        if (!e.target.getAttribute('data-test')) {
          this.doubleClickBundleHandler(43053597229100, true)
        }
        e.target.setAttribute('data-test', '1')
        setTimeout(() => {
          if (e.target.getAttribute('data-test')) {
            e.target.removeAttribute('data-test')
          }
        }, 1000)
      })
    })
  }
  initTooltip() {
    let s = setInterval(() => {
      if (typeof tippy === 'function') {
        clearInterval(s)
        $$el('[data-tooltip]').forEach(el => {
          tippy(el, {
            content: el.getAttribute('data-title'),
            trigger: 'click',
            arrow: true,
            arrowType: 'round',
            appendTo: function () {
              return el.closest('li')
            },
            placement: 'top-end',
            interactive: true,
            onShow(instance) {},
            onTrigger(e) {}
          })
        })
      }
    }, 100)
  }
  addClassScrollBlock() {
    $$el('[for="rtxSubscribe"]')?.forEach(el => {
      el.addEventListener('click', () => {
        this.getHeightSlideInCartScroll()
      })
    })
  }
  getHeightSlideInCartScroll() {
    waitForElement('#slideInCartScroll').then(i => {
      console.log('slideInCartScroll!!!!!!!!!!!!!!!!!!')
      $el('#slideInCartScroll').style.maxHeight = `${
        $el('#cons')?.clientHeight - $el('#slideInCartFooter')?.clientHeight + 12
      }px`
    })
  }
}

new introduceBundle(device)
