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
import {
  freeShippingBlock,
  flavorGuaranteeBlock,
  stickyBlock,
  payNowTxtBlock,
  orderSummaryBlock,
  productItem,
  newShippingBlock,
  newShippingTxtBlock
} from './blocks'
import { svg, git } from './data'

// @ts-ignore
import mainStyle from './main.css?raw'

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class cartCheckoutPages {
  device: 'mobile' | 'desktop'
  observer: null | MutationObserver
  lastPath: string

  constructor(device) {
    this.device = device
    this.observer = null
    this.lastPath = window.location.pathname
    this.init()
    this.observePageChange()
  }

  init() {
    console.dir("name: 'Cart + Checkout', dev: 'SKh")
    // startLog({ name: 'Cart + Checkout', dev: 'SKh' })
    // clarityInterval('')
    if (!$el('.crs_inter')) {
      document.head.insertAdjacentHTML(
        'afterbegin',
        `<link class="crs_inter" href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">`
      )
    }
    if (!$el('.crs_style')) {
      document.head.insertAdjacentHTML('beforeend', `<style class="crs_style">${mainStyle}</style>`)
    }
    // _________________________________________________________________________________________________________________
    if (this.checkPage() === 'cart') {
      if (!$el('.flavor_guarantee_block')) {
        this.renderFlavorGuaranteeBlock()
      }
      this.initTooltip()
      if (!$el('.actions-wrapper button')?.innerHTML.includes('Proceed to checkout')) {
        this.changedTxtBtnCheckout()
      }
      setTimeout(() => {
        this.changedTxtShipping()
      }, 1500)
      if (this.device === 'mobile') {
        if (!$el('.sticky_block')) {
          this.renderStickyBlock()
        }
        this.renderTxtStickyBlock()
        this.toggleStickyBlockVisibility()
      }
    }
    // _________________________________________________________________________________________________________________
    if (this.checkPage() === 'checkout') {
      if (!$el('.flavor_guarantee_block')) {
        this.renderFlavorGuaranteeBlock()
        this.initTooltip()
      }

      if (!$el('.order_summary_block')) {
        this.renderOrderSummaryBlock()
      }

      if (!$el('.new_shipping_block')) {
        this.renderStandardFreeShippingBlock()
      }
      if (!$el('.pay_now_txt_block')) {
        this.renderPayNowTxtBlock()
      }

      this.checkedShippingRadioInit()

      if (!$el('.secure_encrypted_txt') || !$el('.payment_img')) {
        this.renderPaymentImgAndDescription()
      }

      if (this.device === 'mobile') {
        $el('.sticky_block')?.remove()
        if (!$el('.footer_mobile')) {
          this.renderFooterMobile()
        }
      }
    }
  }

  checkPage(): string {
    const url = window.location.href
    switch (true) {
      case url.includes('/checkout'):
        return 'checkout'
      case url.includes('/cart'):
        return 'cart'
      default:
        return 'other'
    }
  }

  observePageChange() {
    this.observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (window.location.pathname !== this.lastPath) {
          this.lastPath = window.location.pathname
          console.dir(this.lastPath, `>>>>>>>>>>>>>>>>>>>>>>`)
          if (this.lastPath === '/checkout') {
            this.checkedShippingRadioInit()

            if (!$el('.secure_encrypted_txt') || !$el('.payment_img')) {
              this.renderPaymentImgAndDescription()
            }
            if (!$el('.new_shipping_block')) {
              this.renderStandardFreeShippingBlock()
            }

            if (this.device === 'mobile') {
              $el('.sticky_block')?.remove()
            }
          }
        }
        if (mutation.target.nodeName === 'BODY') {
          // _________________________________________________________________________________________________________________
          if (this.checkPage() === 'cart') {
            // console.dir(mutation, `mutation`)
            if (!$el('.flavor_guarantee_block')) {
              this.renderFlavorGuaranteeBlock()
            }
            this.initTooltip()
            if (!$el('.actions-wrapper button')?.innerHTML.includes('Proceed to checkout')) {
              this.changedTxtBtnCheckout()
            }
            setTimeout(() => {
              this.changedTxtShipping()
            }, 1500)

            if (this.device === 'mobile') {
              if (!$el('.sticky_block')) {
                this.renderStickyBlock()
                this.toggleStickyBlockVisibility()
              }
            }
          }
          // _________________________________________________________________________________________________________________
          if (this.checkPage() === 'checkout') {
            if (!$el('.flavor_guarantee_block')) {
              this.renderFlavorGuaranteeBlock()
            }
            this.initTooltip()

            if (!$el('.order_summary_block')) {
              this.renderOrderSummaryBlock()
            }

            if (!$el('.pay_now_txt_block')) {
              this.renderPayNowTxtBlock()
            }
            if (this.device === 'mobile') {
              if (!$el('.footer_mobile')) {
                this.renderFooterMobile()
              }
            }
          }
        }

        // _________________________________________________________________________________________________________________
        for (let node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue
          // console.dir(node, `node`)
          // _________________________________________________________________________________________________________________
          if (this.checkPage() === 'cart') {
            if (this.device === 'mobile') {
              this.handleDisabledStickyBlock()

              if (node.classList.contains('text-green')) {
                this.renderTxtStickyBlock()
              }
            }
          }
          // _________________________________________________________________________________________________________________
          if (this.checkPage() === 'checkout') {
            this.handleDisabledRadioBlock()
          }
        }
      })
    })

    const config = { childList: true, subtree: true }
    this.observer.observe(document.body, config)
  }
  // cart and checkout
  renderFlavorGuaranteeBlock() {
    waitForElement('.summary-table').then(() => {
      let elemTrigger: string = ''
      let place: string = ''
      if (!$el('.flavor_guarantee_block')) {
        if (this.checkPage() === 'cart') {
          if (this.device === 'mobile') {
            elemTrigger = '.container-fluid .heading'
            place = 'afterend'
          } else {
            elemTrigger = '.summary-table'
            place = 'beforebegin'
          }
        }

        if (this.checkPage() === 'checkout') {
          if (this.device === 'mobile') {
            elemTrigger = '.form-column-left'
            place = 'afterbegin'
          } else {
            elemTrigger = '.form-column-left'
            place = 'afterbegin'
          }
        }

        $el(elemTrigger).insertAdjacentHTML(place, flavorGuaranteeBlock)
      }
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

  renderFreeShippingBlock() {
    waitForElement('.flavor_guarantee_block').then(() => {
      if (!$el('.free_shipping_block')) {
        $el('.flavor_guarantee_block').insertAdjacentHTML('beforebegin', freeShippingBlock)
      }
    })
  }

  // cart
  changedTxtShipping() {
    waitForElement('.promo-code').then(() => {
      $$el('.sum-row.total.coupon .caption').forEach(el => {
        if (el.nextElementSibling.textContent === `Free`) {
          if (!$el('.free_shipping_block')) {
            this.renderFreeShippingBlock()
          }
        } else {
          $el('.free_shipping_block')?.remove()
        }
        if (
          !el.textContent.includes('Subscription savings') &&
          !el.textContent.includes('Standart shipping') &&
          !el.closest('.total').previousElementSibling.classList.contains('sum-row-hr') &&
          el.textContent !== 'Standart shipping'
        ) {
          el.textContent = `Standart shipping`
        }
      })
    })
  }
  changedTxtBtnCheckout() {
    waitForElement('.actions-wrapper button').then(() => {
      const btn = $el('.actions-wrapper button')
      if (btn && !btn.innerHTML.includes('Proceed to checkout')) {
        btn.innerHTML = `Proceed to checkout ${svg.arrowWhiteicon}`
      }
    })
  }
  renderStickyBlock() {
    waitForElement('#root').then(() => {
      if (!$el('.sticky_block')) {
        $el('#root').insertAdjacentHTML('afterbegin', stickyBlock)
      }
    })
  }
  renderTxtStickyBlock() {
    waitForElement('.sticky_block').then(() => {
      waitForElement('.sum-row.order-total .total').then(() => {
        $el('.sticky_block .total_box').innerHTML = ''

        let orderTotalElemClone = $el('.container-fluid .sum-row.order-total').cloneNode(true)
        if (!$el('.sticky_block .total_box .sum-row.order-total')) {
          $el('.sticky_block .total_box').insertAdjacentElement('afterbegin', orderTotalElemClone)
        }
      })
    })
  }
  handleDisabledStickyBlock() {
    if (!$el('.sticky_block .proceed_to_checkout_btn') && !$el('.actions-wrapper button')) return

    if ($el('.actions-wrapper button')?.disabled) {
      $el('.sticky_block .proceed_to_checkout_btn').disabled = true
    } else {
      $el('.sticky_block .proceed_to_checkout_btn').disabled = false
    }
  }
  toggleStickyBlockVisibility() {
    waitForElement('.actions-wrapper').then(() => {
      const element = $el('.sticky_block') as HTMLElement
      const elemClose = $el('.actions-wrapper') as HTMLElement

      function visible() {
        const options = {
          root: null,
          threshold: 0.5
        }

        let observerSticky = new IntersectionObserver(entries => {
          entries.forEach(i => {
            if (i.isIntersecting) {
              element.style.display = 'none'
            } else {
              element.style.display = 'block'
            }

            observerSticky.unobserve(i.target)
          })

          observerSticky.disconnect()
        }, options)

        observerSticky.observe(elemClose)
      }

      window.addEventListener('scroll', () => {
        visible()
      })

      visible()
    })
  }

  // checkout
  renderPayNowTxtBlock() {
    waitForElement('.form-column-left button').then(() => {
      if (!$el('.pay_now_txt_block')) {
        $el('.form-column-left button').insertAdjacentHTML('afterend', payNowTxtBlock)
      }
      if ($el('.form-column-left button').textContent !== 'Pay now') {
        $el('.form-column-left button').textContent = 'Pay now'
      }
    })
  }
  renderOrderSummaryBlock() {
    waitForElement('.form-column-right .sum-row.total .total').then(() => {
      if (!$el('.order_summary_block')) {
        console.dir('renderOrderSummaryBlock')
        if (this.device === 'desktop') {
          $el('.form-column-right .checokut-title-wrapper').insertAdjacentHTML('afterend', orderSummaryBlock)
        } else {
          $el('.form-column-right .checokut-title-wrapper').insertAdjacentHTML('afterend', orderSummaryBlock)
        }

        waitForElement('.order_summary_block .products_list').then(() => {
          if (!localStorage.getItem('v4Cart')) return
          $el('.products_list').innerHTML = ''

          let cartLocalStor = JSON.parse(localStorage.getItem('v4Cart'))
          let products = cartLocalStor.cart.boxes
          const currency = $$el('.sum-row.total .total')[0]?.textContent.charAt(0)

          if ($el('.products_list').children.length === products.length) return

          for (const key in products) {
            const img = products[key]?.image?.includes('https://cerebelly.com/wp-json/')
              ? products[key].image
              : `https://cerebelly.com/wp-json/cerebelly/image/get?path=${products[key].image}`
            const title = products[key].title
            const itemsCount = products[key].count
            const cadence = products[key].cadence.includes('week')
              ? `Every ${products[key].cadence}`
              : 'One-time purchase'

            const price = `${currency}${products[key].price.toFixed(2)}`
            const subscribeBoxPercent = (
              ((products[key].priceDefault - products[key].price) / products[key].priceDefault) *
              100
            ).toFixed(0)

            if ($el('.products_list').children.length !== products.length) {
              $el('.products_list').insertAdjacentHTML(
                'beforeend',
                productItem(img, title, itemsCount, cadence, price, +subscribeBoxPercent)
              )
            }
          }
          console.dir(products, 'products')
        })
      }
    })
  }
  renderStandardFreeShippingBlock() {
    waitForElement('.sum-row.shipping.standard-shipping.active').then(() => {
      const standartShipping = $$el('.sum-row.standard-shipping .total')[0].textContent
      const expeditedShipping = $$el('.sum-row.standard-shipping .total')[1].textContent
      if (!$el('.new_shipping_block')) {
        $el('.stripe-inputs.checkout-block').previousElementSibling.insertAdjacentHTML(
          'beforebegin',
          newShippingBlock(standartShipping, expeditedShipping)
        )
      }

      waitForElement('.new_shipping_block').then(() => {
        $$el('.new_shipping_block label').forEach(el => {
          el.addEventListener('click', e => {
            console.dir(el.previousElementSibling.getAttribute('id'))
            $el('.new_shipping_txt_block')?.remove()
            if (el.previousElementSibling.getAttribute('id') === 'expeditedShippingVar') {
              $el('.sum-row.shipping [name="shipping-option-1"]')?.click()
            } else {
              $el('.sum-row.shipping [name="shipping-option-0"]')?.click()
            }
            if (!$el('.new_shipping_txt_block')) {
              this.renderNewShippingTxtBlock()
            }
          })
        })
      })
    })
  }
  handleDisabledRadioBlock() {
    waitForElement('.new_shipping_block').then(() => {
      if (!$el('.form-column-left button')) return

      if ($el('.form-column-left button')?.disabled) {
        $el('.new_shipping_block').style.opacity = '0.5'
        $el('.new_shipping_block').style.pointerEvents = 'none'
      } else {
        $el('.new_shipping_block').style.opacity = '1'
        $el('.new_shipping_block').style.pointerEvents = 'auto'
      }
    })
  }
  checkedShippingRadioInit() {
    waitForElement('.sum-row.shipping.standard-shipping.active').then(() => {
      if (!$el('.new_shipping_txt_block')) {
        this.renderNewShippingTxtBlock()
      }

      $$el('.sum-row.shipping.standard-shipping .total').forEach(el => {
        if (el.textContent.includes('FREE') && !$el('.free_shipping_block')) {
          this.renderFreeShippingBlock()
        }
      })
      waitForElement('.new_shipping_block').then(() => {
        if (
          document.querySelector('.sum-row.shipping.standard-shipping.active input')?.getAttribute('name') ===
          'shipping-option-1'
        ) {
          $el('#expeditedShippingVar').checked = true
          console.dir('expeditedShippingVar>>>>>>>>>>>>>>>>>>>')
        }

        if (
          document.querySelector('.sum-row.shipping.standard-shipping.active input')?.getAttribute('name') ===
          'shipping-option-0'
        ) {
          $el('#standartShippingVar').checked = true
          console.dir('standartShippingVar>>>>>>>>>>>>>>')
        }
      })
    })
  }
  renderPaymentImgAndDescription() {
    waitForElement('.form-column-left .title-with-cards').then(() => {
      if (!$el('.payment_img')) {
        $el('.form-column-left .title-with-cards').insertAdjacentHTML(
          'beforeend',
          `<img class="payment_img" src='${git}payment_img.png' alt="photo" />`
        )
      }
      if (!$el('.secure_encrypted_txt')) {
        $el('.form-column-left .title-with-cards').insertAdjacentHTML(
          'afterend',
          `<p class="secure_encrypted_txt">All transactions are secure and encrypted</p>`
        )
      }
    })
  }
  renderNewShippingTxtBlock() {
    waitForElement('.sum-row.shipping.standard-shipping.active').then(() => {
      const total = $el('.sum-row.shipping.standard-shipping.active .total').textContent
      const name = $el('.sum-row.shipping.standard-shipping.active label .name').textContent
      const className = total.includes('FREE') ? 'accent_color_green' : ''

      if (!$el('.new_shipping_txt_block')) {
        $el('.sum-row-hr + .sum-row.shipping.standard-shipping').insertAdjacentHTML(
          'beforebegin',
          newShippingTxtBlock(total, name, className)
        )
      }

      setTimeout(() => {
        if (!$el('.new_subtotal')) {
          $el('.sum-row.order-total .total').insertAdjacentHTML(
            'afterbegin',
            `<span class="new_subtotal">${$$el('.sum-row.total:not(.coupon) .total')[1].textContent}</span>`
          )
        }
      }, 200)
    })
  }
  renderFooterMobile() {
    waitForElement('.form-row').then(() => {
      if (!$el('.footer_mobile')) {
        $el('.form-row').insertAdjacentHTML('afterbegin', `<div class="footer_mobile"></div>`)
      }
    })
    waitForElement('.footer_mobile').then(() => {
      if (!$el('.footer_mobile .tm-text')) {
        $el('.footer_mobile').insertAdjacentElement('afterbegin', $el('.tm-text'))
      }
      if (!$el('.footer_mobile .css-1f2tjn7')) {
        $el('.footer_mobile').insertAdjacentElement('afterbegin', $el('.css-1f2tjn7'))
      }
    })
  }
}

new cartCheckoutPages(device)
