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
import { budleHtmlVerB, budleHtmlVerC, tooltipBlockVerB, tooltipBlockVerC } from './blocks'
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
    clarityInterval('exp_introduce_c')
    document.head.insertAdjacentHTML(
      'beforeend',
      `<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet">`
    )
    document.head.insertAdjacentHTML('beforeend', `<style>${mainStyle}</style>`)
    this.changeBundleInfo()
    this.clickBundleHandler()
    this.handleClickGetNow()
    this.clickProceedToCheckoutBtnHandler()
    this.visibleHandler()
  }

  changeBundleInfo() {
    waitForElement('.new-bundle-pack').then(i => {
      const dataEachPriceVerB = $el('.np-family-kit span.np-whole-family-kit')?.getAttribute('data-each-price') ?? ''
      const dataEachPriceVerC = $el('.np-family-kit span.outdoor-protection-kit')?.getAttribute('data-each-price') ?? ''

      if (!$el('.new_bundle_wrapper')) {
        // $el('.new-bundle-pack label').insertAdjacentHTML('afterbegin', budleHtmlVerB(dataEachPriceVerB))
        // $el('.new-bundle-pack input').value = bundlesInfo.ver_b.id
        // $el('.new-bundle-pack label').insertAdjacentHTML('afterend', tooltipBlockVerB)

        $el('.new-bundle-pack label').insertAdjacentHTML('afterbegin', budleHtmlVerC(dataEachPriceVerC))
        $el('.new-bundle-pack input').value = bundlesInfo.ver_c.id
        $el('.new-bundle-pack label').insertAdjacentHTML('afterend', tooltipBlockVerC)
      }
      this.initTooltip()
    })
  }
  clickBundleHandler() {
    const variantIdVerB = '7674900676652'
    const variantIdVerC = '7313490542636'
    $$el('#getNow input[type=radio] + label').forEach((el: HTMLElement) => {
      el.addEventListener('click', e => {
        if (
          el.getAttribute('for') === 'radios-0' ||
          el.getAttribute('for') === 'radios-1' ||
          el.getAttribute('for') === 'radios-2' ||
          el.getAttribute('for') === 'radios-3'
        ) {
          $el('.js-total').style.display = 'block'
          $el('.new_js_total')?.remove()
        } else {
          pushData('exp_introduce_v3_click_01', 'Outdoor protection kit', 'Click', 'Bundle & save')
          $el('.js-total').style.display = 'none'
          if (!$el('.new_js_total')) {
            // $el('.js-total').insertAdjacentHTML('afterend', this.npFamilyKitHtml(variantIdVerB))
            $el('.js-total').insertAdjacentHTML('afterend', this.npFamilyKitHtml(variantIdVerC))
          }
        }
      })
    })
  }

  npFamilyKitHtml(id: string) {
    const npFamilyKit = $$el('.np-family-kit span')
    let html = ''
    if (npFamilyKit) {
      npFamilyKit?.forEach(el => {
        if (el.getAttribute('data-variant-id') === id) {
          html = `<div class="new_js_total">
            <span class="new_price">${el.getAttribute('data-price')}</span> (<span class="new_price_off"
              >60%</span> OFF)</div>`
        }
      })
    } else {
      html = ''
    }

    return html
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
                return el.closest('.new-bundle-pack')
              },
              placement: 'top-end',
              interactive: true,
              onShow(instance: any) {
                pushData('exp_introduce_v3_element_02', 'Outdoor protection kit tooltip', 'Visibility', 'Bundle & save')
              },
              onTrigger(e: any) {
                $el('body').classList.add('tooltip_open')
                pushData('exp_introduce_v3_click_02', 'Outdoor protection kit tooltip', 'Click', 'Bundle & save')
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

  visibleHandler() {
    waitForElement('.new_bundle_wrapper').then(i => {
      visibilityOfTime('.new_bundle_wrapper', 'exp_introduce_v3_element_01', 'Bundle & save', 'Outdoor protection kit')
    })
  }
}

if (window.location.pathname.match('pages')) {
  new bundleOptimization(device)
}
