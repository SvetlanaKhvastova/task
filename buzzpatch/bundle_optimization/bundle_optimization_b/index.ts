import {
  startLog,
  $el,
  $$el,
  waitForElement,
  pushData,
  clarityInterval,
  loadScriptsOrStyles,
  visibilityOfTime,
  checkScrollPosition
} from '../../../libraries'
import { budleHtmlVerB, budleHtmlVerC } from './blocks'
import { svg, git, bundlesInfo } from './data'
// @ts-ignore
import mainStyle from './main.css?raw'

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class bundleOptimization {
  device: 'mobile' | 'desktop'

  constructor(device) {
    this.device = device

    this.init()
  }

  init() {
    startLog({ name: 'bundle optimization v.B', dev: 'SKh' })
    // clarityInterval('')
    document.head.insertAdjacentHTML(
      'beforeend',
      `<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet">`
    )
    document.head.insertAdjacentHTML('beforeend', `<style>${mainStyle}</style>`)
    this.changeBundleInfo()
    this.handleClickGetNow()
    this.clickProceedToCheckoutBtnHandler()
  }

  changeBundleInfo() {
    waitForElement('.new-bundle-pack').then(i => {
      if (!$el('.new_bundle_wrapper')) {
        $el('.new-bundle-pack label').insertAdjacentHTML('afterbegin', budleHtmlVerB)
        $el('.new-bundle-pack input').value = bundlesInfo.ver_b.id

        // $el('.new-bundle-pack label').insertAdjacentHTML('afterbegin', budleHtmlVerC)
        // $el('.new-bundle-pack input').value = bundlesInfo.ver_c.id
      }
      this.initTooltip()
    })
  }

  clickProceedToCheckoutBtnHandler() {
    waitForElement('#addToCart').then(i => {
      $el('#addToCart')?.addEventListener('click', (e: any) => {
        e.preventDefault()
        e.stopPropagation()
        let idValue = $el('.js-packs input[type=radio]:checked+label')?.previousElementSibling.value
        this.addToCartHandler(idValue)
      })
    })
  }

  async addToCartHandler(idValue: number) {
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
    }).then(() => {
      console.log(`idValue`, idValue)
      window.location.href = '/checkout'
    })
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

  initTooltip() {
    let placement = 'top-end'

    loadScriptsOrStyles([
      'https://unpkg.com/@popperjs/core@2.11.6/dist/umd/popper.min.js',
      'https://unpkg.com/tippy.js@6.3.7/dist/tippy-bundle.umd.min.js'
    ]).then(async () => {
      let s = setInterval(() => {
        if (typeof tippy === 'function' && $el('[data-tooltip]')) {
          clearInterval(s)
          $$el('[data-tooltip]').forEach(el => {
            tippy(el, {
              content: el.getAttribute('data-title'),
              trigger: 'click',
              allowHTML: true,
              arrow: true,
              arrowType: 'round',
              appendTo: function () {
                return el.closest('.new_bundle_wrapper')
              },
              placement: placement,
              interactive: true,
              onShow(instance: any) {},
              onTrigger(e: any) {
                $el('body').classList.add('tooltip_open')
              },
              onHide(instance: any) {
                $el('body').classList.remove('tooltip_open')
              }
            })
          })
        }
      }, 100)
    })
  }
}

if (window.location.pathname.match('pages')) {
  new bundleOptimization(device)
}
