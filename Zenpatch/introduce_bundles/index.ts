import {
  startLog,
  $el,
  $$el,
  waitForElement,
  visibilityOfTime,
  pushData,
  clarityInterval,
  loadScriptsOrStyles
} from '../../libraries'
// @ts-ignore
import mainStyle from './main.css?raw'
import { newBundleItem } from './blocks'
import { git } from './data'

startLog({ name: 'Introduce bundle on the page', dev: 'SKh' })
clarityInterval('exp_introduce')

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class introduceBundle {
  device: 'mobile' | 'desktop'
  singleClick: boolean
  currency: string
  salePrice: number
  regularPrice: number
  offPrice: number
  savePrice: number
  observer: null | MutationObserver
  constructor(device) {
    this.device = device
    this.singleClick = true
    this.currency = $el('.all-in-one-bundle span').getAttribute('data-currency')
    this.salePrice = $el('.all-in-one-bundle span').getAttribute('data-price')
    this.regularPrice = $el('.all-in-one-bundle span').getAttribute('data-price-compare')
    this.offPrice = $el('.all-in-one-bundle span').getAttribute('data-price-off')
    this.savePrice = $el('.all-in-one-bundle span').getAttribute('data-price-save')
    this.observer = null
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
      this.visibleHandler()
      this.initCustomScrollBar()
    }
  }

  replaceElemsSlideInCart() {
    $el('#cons').insertAdjacentHTML(
      'afterbegin',
      `<div id="slideInCartScroll"><div class="scroll_wrapper"></div><div class="new_scroll_bar"><div class="new_thumb"></div></div></div>`
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
        pack.insertAdjacentHTML('afterend', newBundleItem(this.currency, this.regularPrice, this.salePrice))
        this.getHeightSlideInCartScroll()
      }
    })
  }
  renderInfoSubscription() {
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
      el.querySelector('#no-icart-open').style.display = 'none'
      el.querySelector('.stay-container .np-multiple-pack').style.display = 'none'
      el.querySelector('.stay-container .np-one-pack').style.display = 'none'
      el.querySelector('.sale-price').textContent = this.salePrice
      el.querySelector('.off-price').textContent = this.offPrice
      el.querySelector('.line-through').textContent = this.currency
      el.querySelector('.strikethrough-lg').textContent = this.regularPrice
      el.querySelector('.text-save').textContent = `${this.currency}${this.savePrice}`
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
        $el('html').classList.add('is_open')
        document.documentElement.style.overflow = 'hidden'
        this.removeOrChangeElems()
        this.getHeightSlideInCartScroll()
        this.changeActiveClassHtml()

        $$el('#cons .list-packs').forEach(pack => {
          if (pack.classList.contains('list-packs-bundle') && pack.classList.contains('active-slide')) {
            console.log(`list-packs-bundle, .add('active-slide')!!!!!!!!!!!!!!!!!!!!!!!!!`)
            this.renderInfoSubscription()
          }
        })
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
    console.log(`addClickNewBundleHandlers`)
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
          if (!timeout && this.singleClick) {
            timeout = setTimeout(() => {
              timeout = null
              this.singleClick = false
              this.clickBundleHandler(bundle)
            }, 300)
          }
          // else {
          //   clearTimeout(timeout)
          //   timeout = null
          //   this.doubleClickBundleHandler(bundle, 43053597229100)
          //   this.singleClick = true
          // }
        }
      })
    })
  }
  clickBundleHandler(target: any) {
    $$el('.list-packs').forEach(pack => {
      if (!pack.classList.contains('list-packs-bundle') && pack.classList.contains('active-slide')) {
        pack.classList.remove('active-slide')
      }
      if (pack.classList.contains('list-packs-bundle')) {
        pack.classList.add('active-slide')
        console.log(`list-packs-bundle, .add('active-slide')`)
      }
    })

    if (target.closest('#cons')) {
      pushData('exp_introduce_packs_02', 'Click List Packs Bundle', 'Button', 'Slide-in Cart')
    } else {
      pushData('exp_introduce_packs_01', 'Click List Packs Bundle', 'Button', 'Shopping section Stock up and save')
    }

    this.renderInfoSubscription()
  }
  async doubleClickBundleHandler(target: any, idValue: number, reset: boolean = false) {
    $$el('.list-packs').forEach(pack => {
      if (!pack.classList.contains('list-packs-bundle') && pack.classList.contains('active-slide')) {
        pack.classList.remove('active-slide')
      }
      if (pack.classList.contains('list-packs-bundle')) {
        pack.classList.add('active-slide')
        console.log(`list-packs-bundle, .add('active-slide')`)
      }
    })

    if (target.closest('#cons')) {
      if (target.closest('.new_checkout_btn')) {
        pushData('exp_introduce_link_02', 'Click PROCEED TO CHECKOUT', 'Button', 'Slide-in Cart')
      } else {
        pushData('exp_introduce_packs_04', 'Double Click List Packs Bundle', 'Button', 'Slide-in Cart')
      }
    } else if (target.closest('#getNow')) {
      if (target.closest('.new_checkout_btn')) {
        pushData('exp_introduce_link_01', 'Click PROCEED TO CHECKOUT', 'Button', 'Shopping section Stock up and save')
      } else {
        pushData(
          'exp_introduce_packs_03',
          'Double Click List Packs Bundle',
          'Button',
          'Shopping section Stock up and save'
        )
      }
    }

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
          console.log(`Go to checkout !!!!!!!!!!!!!! `)
          window.location.href = '/checkout'
        }, 350)
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
          this.doubleClickBundleHandler(link, 43053597229100, true)
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
    loadScriptsOrStyles([
      'https://unpkg.com/@popperjs/core@2.11.6/dist/umd/popper.min.js',
      'https://unpkg.com/tippy.js@6.3.7/dist/tippy-bundle.umd.min.js'
    ]).then(async () => {
      let s = setInterval(() => {
        if (typeof tippy === 'function') {
          clearInterval(s)
          console.log(`>>>>>>>>>>>>>>>>>>>>>>.`)
          $$el('[data-tooltip]').forEach(el => {
            tippy(el, {
              content: el.getAttribute('data-title'),
              trigger: 'click',
              allowHTML: true,
              arrow: true,
              arrowType: 'round',
              appendTo: function () {
                return el.closest('li')
              },
              placement: 'top-end',
              interactive: true,
              onShow(instance: any) {
                $el('#slideInCartScroll').classList.add('tooltip_open')
                if (el.closest('#cons')) {
                  visibilityOfTime(
                    instance.reference,
                    'exp_introduce_tooltip_02',
                    'Slide-in Cart',
                    'Tooltip All-in-one stress-relief kit'
                  )
                } else {
                  visibilityOfTime(
                    instance.reference,
                    'exp_introduce_tooltip_01',
                    'Shopping section Stock up and save',
                    'Tooltip All-in-one stress-relief kit'
                  )
                }
              },
              onTrigger(e: any) {
                if (el.closest('#cons')) {
                  pushData('exp_introduce_button_02', 'All-in-one stress-relief kit', 'Button', 'Slide-in Cart')
                } else {
                  pushData(
                    'exp_introduce_button_01',
                    'All-in-one stress-relief kit',
                    'Button',
                    'Shopping section Stock up and save'
                  )
                }
              },
              onHide(instance: any) {
                $el('#slideInCartScroll').classList.toggle('tooltip_open')
              }
            })
          })
        }
      }, 100)
    })
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
      $el('#slideInCartScroll').style.maxHeight = `${
        $el('#cons')?.clientHeight - $el('#slideInCartFooter')?.clientHeight + 12
      }px`

      // Получите элементы
      let slideInCartScroll = $el('#slideInCartScroll')
      let newScrollBar = $el('.new_scroll_bar')
      let newThumb = $el('.new_thumb')

      newScrollBar.style.maxHeight = `${$el('#cons')?.clientHeight - $el('#slideInCartFooter')?.clientHeight}px`

      // Проверьте, есть ли скролл в slideInCartScroll
      let hasScroll = slideInCartScroll.scrollHeight > slideInCartScroll.clientHeight

      // Если нет скролла, скройте new_scroll_bar
      if (!hasScroll) {
        newScrollBar.style.display = 'none'
      } else {
        newScrollBar.style.display = 'block'
      }

      // Установите высоту newThumb в соответствии с высотой контента и высотой прокрутки
      let scrollHeight = slideInCartScroll.scrollHeight
      let clientHeight = slideInCartScroll.clientHeight
      newThumb.style.height = (clientHeight / scrollHeight) * 100 + '%'

      // Добавьте обработчик события прокрутки
      slideInCartScroll.addEventListener('scroll', function (e: any) {
        // Вычислите новую позицию newThumb
        let scrollTop = slideInCartScroll.scrollTop
        let thumbHeight = newThumb.offsetHeight
        let trackHeight = clientHeight - thumbHeight
        let scrollRatio = scrollTop / (clientHeight - thumbHeight)
        newThumb.style.top = scrollRatio * trackHeight + 'px'
      })
    })
  }
  visibleHandler() {
    waitForElement('#getNow .list-packs-bundle').then(i => {
      visibilityOfTime(
        '#getNow .list-packs-bundle',
        'exp_introduce_element_01',
        'Shopping section Stock up and save All-in-one stress-relief kit',
        'Element'
      )
    })
    waitForElement('#cons .list-packs-bundle').then(i => {
      visibilityOfTime('#cons .list-packs-bundle', 'exp_introduce_element_02', 'Slide-in Cart', 'Element')
    })
  }
  changeActiveClassHtml() {
    let t = setInterval(() => {
      if (!$el('.sidebar').classList.contains('active-sidebar') && $el('html').classList.contains('is_open')) {
        clearInterval(t)
        $el('html').classList.remove('is_open')
        document.documentElement.style.overflow = ''
      }
    }, 100)
  }
  initCustomScrollBar() {}
}

waitForElement('.all-in-one-bundle').then(i => {
  setTimeout(() => {
    if (window.location.pathname.match('pages')) {
      new introduceBundle(device)
    }
  }, 1000)
})
