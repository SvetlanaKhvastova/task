import {
  startLog,
  $el,
  $$el,
  waitForElement,
  pushData,
  clarityInterval,
  loadScriptsOrStyles,
  visibilityOfTime
} from '../../libraries'
import { budleHtmlVerB, guaranteeBlock, stockUpTitle } from './blocks'
import { git } from './data'
// @ts-ignore
import mainStyle from './main.css?raw'

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class StarterPackBundle {
  device: 'mobile' | 'desktop'
  idValue: string

  constructor(device) {
    this.device = device
    this.idValue = ''

    this.init()
  }

  init() {
    startLog({ name: 'Starter Pack" Bundle and UX Improvements on Shopping block', dev: 'SKh' })
    clarityInterval('exp_zen_introduce', 'variant_1')

    if (!$el('.crs_font')) {
      document.head.insertAdjacentHTML(
        'afterbegin',
        `link class="crs_font" href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"`
      )
    }
    document.head.insertAdjacentHTML('beforeend', `<style>${mainStyle}</style>`)
    this.renderNewTitle()
    this.changePurchaseBlock()
    this.clickPetLocketInputHandler()

    this.renderGuaranteeBlock()
    this.renderNewBundle()

    this.clickBundleHandler()
    this.clickProceedToCheckoutBtnHandler()
    this.visibleHandler()
  }

  renderNewTitle() {
    waitForElement('h3.purchase__title').then(i => {
      let place = 'h3.purchase__title'
      if (this.device === 'mobile') {
        place = '.lp-tr--purchase h2.lp-tr--section-big-title'
      }
      if (!$el('.stock_up_title')) {
        $el(place).insertAdjacentHTML('afterend', stockUpTitle)
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

      if (this.device === 'desktop') {
        if (!$el('#lptrPurchase .form + .purchase__pet-locket') && elemForm) {
          $el('#lptrPurchase .form').insertAdjacentElement('afterend', petLocketElement)
        }
      }

      if (this.device === 'mobile') {
        if (!$el('#lptrPurchase .new_pet_locket_wrapper')) {
          $el('#lptrPurchase .form').insertAdjacentHTML('afterend', `<div class="new_pet_locket_wrapper"></div>`)
        }

        waitForElement('.lp-tr--purchase .new_pet_locket_wrapper').then(i => {
          if (!$el('#lptrPurchase .new_pet_locket_wrapper .purchase__pet-locket') && elemForm) {
            $el('#lptrPurchase .new_pet_locket_wrapper').insertAdjacentElement('beforeend', petLocketElement)
          }
        })
      }

      if (!label.textContent.includes('separately')) {
        label.textContent = `Add a Pet Locket separately for ${label.textContent.split('for')[1]}`
      }
    })
    //
  }

  clickPetLocketInputHandler() {
    waitForElement('.purchase__pet-locket').then(i => {
      const label = $el('.purchase__pet-locket')
      const input = $el('#petlocket')

      if (input) {
        label.addEventListener('click', e => {
          if (!e.target.getAttribute('data-test')) {
            if (e.target.classList.contains('purchase__pet-locket')) {
              input?.click()
            }
          }
          e.target.setAttribute('data-test', '1')
          setTimeout(() => {
            if (e.target.getAttribute('data-test')) {
              e.target.removeAttribute('data-test')
            }
          }, 400)
        })
      }
    })
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
    waitForElement('.new_bundle_pack').then(i => {
      const variantIdVerB = '7737278857260'
      $$el('.lp-tr--purchase input[type=radio] + label').forEach((el: HTMLElement) => {
        el.addEventListener('click', e => {
          if (
            el.getAttribute('for') === 'pack3' ||
            el.getAttribute('for') === 'pack2' ||
            el.getAttribute('for') === 'pack1' ||
            el.getAttribute('for') === 'pack4'
          ) {
            if ($el('.lp-tr--purchase .overall-price.lp-tr--mobile').classList.contains('is_hidden')) {
              $el('.lp-tr--purchase .overall-price.lp-tr--mobile').classList.remove('is_hidden')
            }
            if ($el('.lp-tr--purchase .purchase__regular-price').classList.contains('is_hidden')) {
              $el('.lp-tr--purchase .purchase__regular-price').classList.remove('is_hidden')
            }
            $el('.new_bundle_price_wrapper')?.remove()
          } else {
            pushData('exp_zen_introduce_click_01', 'Pet Zen Starter Pack', 'Click', 'Bundle & save')
            $el('.lp-tr--purchase .overall-price.lp-tr--mobile').classList.add('is_hidden')
            $el('.lp-tr--purchase .purchase__regular-price').classList.add('is_hidden')

            if (!$el('.new_bundle_price_wrapper')) {
              $el('.lp-tr--purchase .overall-price.lp-tr--mobile').insertAdjacentHTML(
                'afterend',
                this.newPricePetZenStarterPackHtml(variantIdVerB)
              )
            }
          }
        })
      })
    })
  }

  newPricePetZenStarterPackHtml(id: string) {
    const npFamilyKit = $$el('.np-family-kit span')
    let html = ''
    // if (npFamilyKit) {
    //   npFamilyKit?.forEach(el => {
    //     if (el.getAttribute('data-variant-id') === id) {
    //       html = `<div class="new_js_total">
    //         <span class="new_price">${el.getAttribute('data-price')}</span> (<span class="new_price_off"
    //           >60%</span> OFF)</div>`
    //     }
    //   })
    // } else {
    //   html = ''
    // }

    html = /* HTML */ `
      <div class="new_bundle_price_wrapper">
        <div class="new_bundle_price_total">
          <span class="new_price">$36.00</span>
          <span class="new_price_off">(51% OFF)</span>
        </div>
        <div class="new_bundle_reg_price_total">Reg. Price: <span>$80.00</span> (Save <span>$38.97</span>)</div>
      </div>
    `

    return html
  }

  clickProceedToCheckoutBtnHandler() {
    waitForElement('.new_bundle_pack').then(i => {
      $el('.lp-tr--purchase #proceed')?.addEventListener('click', (e: any) => {
        e.preventDefault()
        e.stopPropagation()

        this.idValue = $el('.lp-tr--purchase input[type=radio]:checked+label')?.previousElementSibling.getAttribute(
          'data-tick-id'
        )

        $el('#petlocket:checked') ? this.addToCartHandler(+this.idValue, true) : this.addToCartHandler(+this.idValue)
      })
    })
  }

  async addToCartHandler(idValue: number, petlocket: boolean = false) {
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

    if (petlocket) {
      items.push({
        id: 43558182027308,
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
              onShow(instance: any) {},
              onTrigger(e: any) {
                $el('body').classList.add('tooltip_open')
                pushData('exp_zen_introduce_click_02', 'Pet Zen Starter Pack', 'Click', 'Bundle & save')
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
    waitForElement('.new_bundle_pack').then(i => {
      visibilityOfTime(
        '.new_bundle_pack',
        'exp_zen_introduce_element_01',
        'Bundle & save',
        'Pet Zen Starter Pack',
        'View'
      )
    })
    waitForElement('.guarantee_block').then(i => {
      visibilityOfTime('.guarantee_block', 'exp_zen_introduce_element_02', 'Bundle & save', 'Guarantee', 'View')
    })
  }
}

if (window.location.pathname.match('pages')) {
  new StarterPackBundle(device)
}
