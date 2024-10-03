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
} from '../../libraries'
import { budleHtmlVerB, guaranteeBlock, stockUpTitle, tooltipBlockVerB } from './blocks'
import { svg, git, bundlesInfo } from './data'
// @ts-ignore
import mainStyle from './main.css?raw'

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class StarterPackBundle {
  device: 'mobile' | 'desktop'

  constructor(device) {
    this.device = device

    this.init()
  }

  init() {
    startLog({ name: 'Starter Pack" Bundle and UX Improvements on Shopping block', dev: 'SKh' })
    // clarityInterval('')

    if (!$el('.crs_font')) {
      document.head.insertAdjacentHTML(
        'afterbegin',
        `link class="crs_font" href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"`
      )
    }
    document.head.insertAdjacentHTML('beforeend', `<style>${mainStyle}</style>`)
    if (this.device === 'desktop') {
      this.renderNewTitle()
    }
    this.changePurchaseBlock()

    this.renderGuaranteeBlock()
    this.renderNewBundle()

    this.clickBundleHandler()
    this.clickProceedToCheckoutBtnHandler()
    this.visibleHandler()
  }

  renderNewTitle() {
    waitForElement('h3.purchase__title').then(i => {
      if (!$el('.stock_up_title')) {
        $el('h3.purchase__title').insertAdjacentHTML('afterend', stockUpTitle)
      }
    })
  }

  changePurchaseBlock() {
    waitForElement('.lp-tr--purchase .form-group .packs label span:not(.lp-tr--pack-price)').then(i => {
      const priceElements = $$el('.lp-tr--purchase .form-group .packs label span:not(.lp-tr--pack-price)')
      priceElements.forEach(element => {
        const text = element.textContent
        const match = text.match(/\(([^)]+)\/each\)/i)

        if (match) {
          const price = match[1]
          element.textContent = `${price} Each`
        }
      })
    })
    waitForElement('.lp-tr--purchase .form-group .packs label[for=pack1] span.lp-tr--pack-price').then(i => {
      const priceElement = $el('.lp-tr--purchase .form-group .packs label[for=pack1] span.lp-tr--pack-price')
      if (priceElement) {
        priceElement.textContent = `${priceElement.textContent} Each`
      }
    })
    waitForElement('.lp-tr--purchase .lp-tr--gray-bg > .lp-tr--desktop img').then(i => {
      const imgElements = $$el('.lp-tr--purchase .lp-tr--gray-bg > .lp-tr--desktop img')
      imgElements.forEach(img => {
        console.log(img)
        let src = `${git}zenpatch-pet_img_11zon.webp`
        if (this.device === 'mobile') {
          src = `${git}zenpatch-pet_img_mob.webp`
        }
        if (img && img.src !== src) {
          img.src = src
        }
      })
    })
    waitForElement('.lp-tr--purchase .purchase__pet-locket').then(i => {
      const petLocketElement = $el('.lp-tr--purchase .purchase__pet-locket')
      const elemForm = $el('#lptrPurchase .form')
      const label = $el('.lp-tr--purchase .purchase__pet-locket label:not(.custom-label)')

      if (!$el('#lptrPurchase .form + .purchase__pet-locket') && elemForm) {
        $el('#lptrPurchase .form').insertAdjacentElement('afterend', petLocketElement)
      }

      if (!label.textContent.includes('separately')) {
        label.textContent = `Add a Pet Locket separately for ${label.textContent.split('for')[1]}`
      }
    })
    //
  }

  renderGuaranteeBlock() {
    waitForElement('.lp-tr--purchase .lp-tr--btn').then(i => {
      if (!$el('.guarantee_block')) {
        $el('.lp-tr--purchase .lp-tr--btn').insertAdjacentHTML('afterend', guaranteeBlock)
      }
    })
  }

  renderNewBundle() {
    waitForElement('#lptrPurchase .form .form-group').then(i => {
      const dataEachPriceVerB = $el('.np-family-kit span.np-whole-family-kit')?.getAttribute('data-each-price') ?? ''

      if (!$el('.new_bundle_wrapper')) {
        $el('#lptrPurchase .form .form-group').insertAdjacentHTML('afterend', budleHtmlVerB(dataEachPriceVerB))
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
          pushData('exp_introduce_v3_click_01', 'Whole family protection kit', 'Click', 'Bundle & save')
          $el('.js-total').style.display = 'none'
          if (!$el('.new_js_total')) {
            $el('.js-total').insertAdjacentHTML('afterend', this.npFamilyKitHtml(variantIdVerB))
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
                return el.closest('.new_bundle_pack')
              },
              placement: 'top-end',
              interactive: true,
              onShow(instance: any) {
                // pushData(
                //   'exp_introduce_v3_element_02',
                //   'Whole family protection kit tooltip',
                //   'Visibility',
                //   'Bundle & save'
                // )
              },
              onTrigger(e: any) {
                $el('body').classList.add('tooltip_open')
                // pushData('exp_introduce_v3_click_02', 'Whole family protection kit tooltip', 'Click', 'Bundle & save')
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
      // visibilityOfTime(
      //   '.new_bundle_wrapper',
      //   'exp_introduce_v3_element_01',
      //   'Bundle & save',
      //   'Whole family protection kit'
      // )
    })
  }
}

if (window.location.pathname.match('pages')) {
  new StarterPackBundle(device)
}
