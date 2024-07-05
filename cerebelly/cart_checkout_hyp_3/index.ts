import {
  startLog,
  $el,
  $$el,
  waitForElement,
  pushData,
  clarityInterval,
  visibilityOfTime,
  loadScriptsOrStyles
} from '../../libraries'
import { freeShippingBlock, flavorGuaranteeBlock } from './blocks'
import { svg } from './data'

// @ts-ignore
import mainStyle from './main.css?raw'

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class cartCheckoutPages {
  device: 'mobile' | 'desktop'

  constructor(device) {
    this.device = device
    this.init()
  }

  init() {
    console.dir("name: 'Cart + Checkout', dev: 'SKh")
    startLog({ name: 'Cart + Checkout', dev: 'SKh' })
    // clarityInterval('')
    if (!$el('.crs_inter')) {
      document.head.insertAdjacentHTML(
        'afterbegin',
        `<link class="crs_inter" href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">`
      )
    }
    document.head.insertAdjacentHTML('beforeend', `<style>${mainStyle}</style>`)

    if (window.location.pathname.match('cart')) {
      this.renderFlavorGuaranteeBlock()
      this.changedTxtBtnCheckout()
      this.initTooltip()
      setTimeout(() => {
        this.changedTxtShipping()
      }, 1500)
    }
  }

  renderFlavorGuaranteeBlock() {
    waitForElement('.summary-table').then(() => {
      if (!$el('.flavor_guarantee_block')) {
        $el('.summary-table').insertAdjacentHTML('beforebegin', flavorGuaranteeBlock)
      }
    })
  }

  renderFreeShippingBlock() {
    waitForElement('.flavor_guarantee_block').then(() => {
      if (!$el('.free_shipping_block')) {
        $el('.flavor_guarantee_block').insertAdjacentHTML('beforebegin', freeShippingBlock)
      }
    })
  }

  changedTxtBtnCheckout() {
    waitForElement('.actions-wrapper button').then(() => {
      const btn = $el('.actions-wrapper button')
      if (btn && !btn.innerHTML.includes('Proceed to checkout')) {
        btn.innerHTML = `Proceed to checkout ${svg.arrowWhiteicon} `
      }
    })
  }
  changedTxtShipping() {
    waitForElement('.promo-code').then(() => {
      $$el('.sum-row.total.coupon .caption').forEach(el => {
        if (el.nextElementSibling.textContent === `Free`) {
          this.renderFreeShippingBlock()
        }
        if (!el.textContent.includes('Subscription savings') && !el.textContent.includes('Standart shipping')) {
          console.dir(el, `el`)
          el.textContent = `Standart shipping`
        }
      })
    })
  }

  initTooltip() {
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
                return el.closest('.info_wrapper')
              },
              placement: 'top-end',
              interactive: true,
              onShow(instance: any) {},
              onTrigger(e: any) {},
              onHide(instance: any) {}
            })
          })
        }
      }, 100)
    })
  }
}

new cartCheckoutPages(device)
