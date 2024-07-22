import {
  startLog,
  $el,
  $$el,
  waitForElement,
  pushData,
  clarityInterval,
  visibilityOfTime,
  loadScriptsOrStyles,
  checkScrollPosition
} from '../../libraries'
import {
  freeShippingBlock,
  flavorGuaranteeBlock,
  stickyBlock,
  payNowTxtBlock,
  orderSummaryBlock,
  productItem,
  newShippingBlock,
  newShippingTxtBlock,
  orderSummaryBlockMobile
} from './blocks'
import { svg, git } from './data'

// @ts-ignore
import mainStyle from './main.css?raw'

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class cartCheckoutPages {
  device: 'mobile' | 'desktop'
  observer: null | MutationObserver
  lastPath: string
  isActivated: boolean
  isClicked: boolean

  constructor(device) {
    this.device = device
    this.observer = null
    this.lastPath = window.location.pathname
    this.observePageChange()
    this.isActivated = false
    this.isClicked = false
    this.init()
    this.observePageChange()
  }

  init() {
    clarityInterval('new_enhancement_cart_checkout')
    // _________________________________________________________________________________________________________________
    if (this.checkPage() === 'cart') {
      this.renderStyles()
      console.dir("name: 'Cart', dev: 'SKh")

      if (!$el('.flavor_guarantee_block')) {
        this.renderFlavorGuaranteeBlock()
      }

      if (!$el('.actions-wrapper button')?.innerHTML.includes('Proceed to checkout')) {
        this.changedTxtBtnCheckout()
      }
      this.handleClickProceedToCheckoutBtn()

      if (this.device === 'mobile') {
        if (!$el('.sticky_block')) {
          this.renderStickyBlock()
        }
        this.toggleStickyBlockVisibility()
        this.renderTxtStickyBlock()
        this.handleDisabledStickyBlock()
      }
    }
    // _________________________________________________________________________________________________________________
    if (this.checkPage() === 'checkout') {
      console.dir("name: 'Checkout', dev: 'SKh")
      this.renderStyles()

      if (!$el('.flavor_guarantee_block')) {
        this.renderFlavorGuaranteeBlock()
      }
      if (!$el('.order_summary_block')) {
        this.renderOrderSummaryBlock()
      }
      if (!$el('.new_shipping_block')) {
        this.renderStandardFreeShippingBlock()
      }
      if (!$el('.secure_encrypted_txt') || !$el('.payment_img')) {
        this.renderPaymentImgAndDescription()
      }
      this.checkedShippingRadioInit()

      if (!$el('.pay_now_txt_block')) {
        this.renderPayNowTxtBlock()
      }

      if (this.device === 'mobile') {
        $el('.sticky_block')?.remove()
        if (!$el('.footer_mobile')) {
          this.renderFooterMobile()
        }
        if (!$el('.order_summary_block_mobile')) {
          this.renderOrderSummaryBlockMobile()
        }
        this.replaceOrderTotal()
        this.renderTxtTotalToSummaryBlockMobile()
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
      if ($el('.css-jobqsc')) {
        $el('.flavor_guarantee_block')?.remove()
        $el('.free_shipping_block')?.remove()
        $el('.sticky_block')?.remove()
      }
      mutations.forEach(mutation => {
        if (window.location.pathname !== this.lastPath) {
          this.lastPath = window.location.pathname
          console.dir(this.lastPath)

          if (this.lastPath === '/checkout') {
            this.renderStyles()
            if (this.device === 'mobile') {
              $el('.sticky_block')?.remove()
              if (!$el('.footer_mobile')) {
                this.renderFooterMobile()
              }
              if (!$el('.order_summary_block_mobile')) {
                this.renderOrderSummaryBlockMobile()
              }

              this.replaceOrderTotal()
            }
            if (!$el('.order_summary_block')) {
              this.renderOrderSummaryBlock()
            }
            if (!$el('.secure_encrypted_txt') || !$el('.payment_img')) {
              this.renderPaymentImgAndDescription()
            }
            if (!$el('.new_shipping_block')) {
              this.renderStandardFreeShippingBlock()
            }
            this.checkedShippingRadioInit()
            if (!$el('.pay_now_txt_block')) {
              this.renderPayNowTxtBlock()
            }
          } else if (this.lastPath === '/cart') {
            this.renderStyles()
            if (!$el('.actions-wrapper button')?.innerHTML.includes('Proceed to checkout')) {
              this.changedTxtBtnCheckout()
            }
            this.handleClickProceedToCheckoutBtn()
            if (this.device === 'mobile' && !$el('.css-jobqsc')) {
              if (!$el('.sticky_block')) {
                this.renderStickyBlock()
              }
              this.toggleStickyBlockVisibility()
            }
          } else {
            $el('.sticky_block')?.remove()
            $el('.flavor_guarantee_block')?.remove()
            $el('.free_shipping_block')?.remove()
            $el('.order_summary_block')?.remove()
            $el('.pay_now_txt_block')?.remove()
            $el('.new_shipping_block')?.remove()
            $el('.new_shipping_txt_block')?.remove()
            $el('.order_summary_block_mobile')?.remove()
            $el('.footer_mobile')?.remove()
            $el('.payment_img')?.remove()
            $el('.secure_encrypted_txt')?.remove()
            $el('.crs_inter')?.remove()
            $el('.crs_style')?.remove()
            if ($el('body').classList.contains('cart_page')) {
              $el('body').classList.remove('cart_page')
            }
          }
        }
        //  _________________________________________________________________________________________________________________
        if (mutation.target.nodeName === 'BODY') {
          if (this.checkPage() === 'cart' || this.checkPage() === 'checkout') {
            if (!$el('.flavor_guarantee_block') && !$el('.css-jobqsc')) {
              this.renderFlavorGuaranteeBlock()
            }
          }
        }

        // _________________________________________________________________________________________________________________
        for (let node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue
          if (this.isActivated) return

          if (node.classList.contains('css-1i5hss0')) {
            this.isActivated = true
            console.dir(node, `node`)
            // _________________________________________________________________________________________________________________
            if (this.checkPage() === 'cart') {
              if (this.device === 'mobile' && !$el('.css-jobqsc')) {
                this.handleDisabledStickyBlock()
              }
            }
            // _________________________________________________________________________________________________________________
            if (this.checkPage() === 'checkout') {
              this.handleDisabledRadioBlock()
              if (this.device === 'mobile') {
                if ($el('.order_summary_body').classList.contains('is_open')) {
                  $el('.order_summary_body').style.height = 'auto'
                }
              }
            }
          }
          if (node.classList.contains('input-holder')) {
            if (this.checkPage() === 'checkout') {
              if (this.device === 'mobile') {
                if ($el('.order_summary_body').classList.contains('is_open')) {
                  $el('.order_summary_body').style.height = 'auto'
                }
              }
            }
          }
          setTimeout(() => {
            this.isActivated = false
          }, 700)
        }
        // _________________________________________________________________________________________________________________
        for (let node of mutation.removedNodes) {
          if (!(node instanceof HTMLElement)) continue
          if (this.isActivated) return
          if (node.classList.contains('css-1i5hss0')) {
            this.isActivated = true
            if (this.checkPage() === 'cart') {
              if (!$el('.caption.txt_shipping')) {
                this.changedTxtShipping()
              }
              if (this.device === 'mobile' && !$el('.css-jobqsc')) {
                this.renderTxtStickyBlock()
                this.handleDisabledStickyBlock()
              }
            }
            if (this.checkPage() === 'checkout') {
              this.handleDisabledRadioBlock()
              if (this.device === 'mobile') {
                this.renderTxtTotalToSummaryBlockMobile()
                if ($el('.order_summary_body').classList.contains('is_open')) {
                  $el('.order_summary_body').style.height = 'auto'
                }
              }
            }
          }
          setTimeout(() => {
            this.isActivated = false
          }, 700)
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

        $el(elemTrigger)?.insertAdjacentHTML(place, flavorGuaranteeBlock)
        console.dir('renderFlavorGuaranteeBlock')
        this.initTooltip()
      }
    })
  }
  initTooltip() {
    let placement = 'bottom-end'
    if (this.device === 'mobile') {
      placement = 'top-end'
    }
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
              placement: placement,
              interactive: true,
              onShow(instance: any) {},
              onTrigger(e: any) {
                if (window.location.pathname === '/cart') {
                  pushData('exp_learnmorecart_click_01', 'Learn More', 'Button', 'Cart')
                }
                if (window.location.pathname === '/checkout') {
                  pushData('exp_learnmorecheckout_click_02', 'Learn More', 'Button', 'Checkout')
                }
              },
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
  renderStyles() {
    if (!$el('.crs_inter')) {
      document.head.insertAdjacentHTML(
        'afterbegin',
        `<link class="crs_inter" href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">`
      )
    }
    if (!$el('.crs_style')) {
      document.head.insertAdjacentHTML('beforeend', `<style class="crs_style">${mainStyle}</style>`)
    }

    if (this.checkPage() === 'cart' && !$el('body').classList.contains('cart_page')) {
      $el('body').classList.add('cart_page')
    } else {
      $el('body').classList.remove('cart_page')
    }
    console.dir('renderStyles')
  }

  // cart
  changedTxtShipping() {
    if ($el('.caption.txt_shipping')) return
    waitForElement('.promo-code').then(() => {
      $$el('.sum-row.total.coupon .caption').forEach(el => {
        if (el.nextElementSibling.textContent === `Free`) {
          if (!$el('.free_shipping_block')) {
            this.renderFreeShippingBlock()
          }
          el.nextElementSibling.style.lineHeight = '22px'
        } else {
          $el('.free_shipping_block')?.remove()
        }
        if (
          !el.textContent.includes('Subscription savings') &&
          !el.textContent.includes('Standart shipping') &&
          !el.closest('.total').previousElementSibling.classList.contains('sum-row-hr') &&
          el.textContent !== 'Standart shipping' &&
          !el.classList.contains('txt_shipping')
        ) {
          el.textContent = `Standart shipping`
          el.classList.add('txt_shipping')
          console.dir('changedTxtShipping')
        }
      })
    })
  }
  changedTxtBtnCheckout() {
    waitForElement('.actions-wrapper button').then(() => {
      if ($el('.actions-wrapper button') && !$el('.actions-wrapper button').innerHTML.includes('Proceed to checkout')) {
        $el('.actions-wrapper button').innerHTML = `Proceed to checkout ${svg.arrowWhiteIcon}`
        console.dir('changedTxtBtnCheckout')
      }
    })
  }
  renderStickyBlock() {
    waitForElement('#root').then(() => {
      if (!$el('.sticky_block')) {
        $el('#root').insertAdjacentHTML('afterbegin', stickyBlock)
      }
      this.handleClickStickyBtn()
      this.handleDisabledStickyBlock()
      console.dir(`renderStickyBlock`)
    })
  }
  renderTxtStickyBlock() {
    waitForElement('.sticky_block').then(() => {
      waitForElement('.sum-row.order-total .total').then(() => {
        if ($el('.sticky_block .total_box')) {
          $el('.sticky_block .total_box').innerHTML = ''
          let orderTotalElemClone = $el('.container-fluid .sum-row.order-total').cloneNode(true)
          if (!$el('.sticky_block .total_box .sum-row.order-total')) {
            $el('.sticky_block .total_box').insertAdjacentElement('afterbegin', orderTotalElemClone)
            console.dir('renderTxtStickyBlock')
          }
        }
      })
    })
  }
  handleDisabledStickyBlock() {
    waitForElement('.sticky_block .proceed_to_checkout_btn').then(() => {
      waitForElement('.actions-wrapper button').then(() => {
        if ($el('.actions-wrapper button').disabled) {
          $el('.sticky_block .proceed_to_checkout_btn').disabled = true
        } else {
          $el('.sticky_block .proceed_to_checkout_btn').disabled = false
        }
        console.dir('handleDisabledStickyBlock')
      })
    })
  }
  toggleStickyBlockVisibility() {
    waitForElement('.actions-wrapper').then(() => {
      waitForElement('.sticky_block').then(() => {
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
    })
    console.dir('toggleStickyBlockVisibility')
  }
  handleClickStickyBtn() {
    waitForElement('.sticky_block button').then(() => {
      $el('.sticky_block button')?.addEventListener('click', e => {
        e.preventDefault()
        this.isClicked = true
        pushData('exp_stickyproceed_click_03', 'Proceed to Checkout', 'Button', 'Cart - Sticky Banner')
        $el('.container-fluid .col-md-4.custom-column .actions-wrapper button').click()
        this.isClicked = false
      })
      console.dir('handleClickStickyBtn')
    })
  }
  handleClickProceedToCheckoutBtn() {
    waitForElement('.container-fluid .col-md-4.custom-column .actions-wrapper button').then(() => {
      $el('.container-fluid .col-md-4.custom-column .actions-wrapper button')?.addEventListener('click', e => {
        if (!this.isClicked) {
          pushData('exp_cartproceed_click_04', 'Proceed to Checkout', 'Button', 'Cart')
        }
      })
      console.dir('handleClickProceedToCheckoutBtn')
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
      console.dir('renderPayNowTxtBlock')
      this.handleClickNewLinksNearPayNow()
    })
  }
  handleClickNewLinksNearPayNow() {
    waitForElement('.pay_now_txt_block').then(() => {
      $el('.terms_sale_link').addEventListener('click', e => {
        console.dir('terms_sale_link')
      })
      $el('.privacy_link').addEventListener('click', e => {
        console.dir('privacy_link')
      })
    })
  }
  renderOrderSummaryBlock() {
    waitForElement('.form-column-right .sum-row.total .total').then(() => {
      if (!$el('.order_summary_block')) {
        if (this.device === 'desktop') {
          $el('.form-column-right .checokut-title-wrapper').insertAdjacentHTML('afterend', orderSummaryBlock)
        } else {
          waitForElement('.order_summary_block_mobile').then(() => {
            $el('.order_summary_block_mobile .order_summary_body').insertAdjacentHTML('afterbegin', orderSummaryBlock)
          })
        }

        waitForElement('.order_summary_block .products_list').then(() => {
          if (!localStorage.getItem('v4Cart')) return
          $el('.products_list').innerHTML = ''

          // @ts-ignore
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
            // const type = products[key].blueprint.type === 'medium' ? 'items' : ''
            const type = getTypeName(products[key].blueprint, itemsCount)
            console.dir(products[key].blueprint.type)

            function getTypeName({ type, name }, count) {
              if (type === 'bar' || name.toLowerCase().includes('bar')) {
                return count === 1 ? '5-pack' : `5-pack (${count})`
              }

              if (type === 'pouch' || name.toLowerCase().includes('pouch')) {
                return count === 1 ? '6-pack' : `6-pack (${count})`
              }

              return count + ' items' // small, medium, large, family, varietypack, bonebrothpouch
            }

            const cadence =
              products[key].cadence.includes('week') && products[key].subscribe
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
                productItem(img, title, type, cadence, price, +subscribeBoxPercent)
              )
            }
          }
        })
      }
      console.dir('renderOrderSummaryBlock')
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
            $el('.new_shipping_txt_block')?.remove()
            if (el.previousElementSibling.getAttribute('id') === 'expeditedShippingVar') {
              $el('.sum-row.shipping [name="shipping-option-1"]')?.click()
              pushData('exp_shippingexpedited_radio_02', 'Expedited Shipping', 'Radio', 'Checkout')
            } else {
              $el('.sum-row.shipping [name="shipping-option-0"]')?.click()
              pushData('exp_shippingstandard_radio_01', 'Standard Shipping', 'Radio', 'Checkout')
            }
            if (!$el('.new_shipping_txt_block')) {
              this.renderNewShippingTxtBlock()
            }
          })
        })
      })
      console.dir('renderStandardFreeShippingBlock')
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
      console.dir('handleDisabledRadioBlock')
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
      console.dir('checkedShippingRadioInit')
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
      console.dir('renderPaymentImgAndDescription')
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

      waitForElement('.summary-table').then(() => {
        setTimeout(() => {
          let currency = $el('.sum-row.order-total .total').textContent.split('$')[0]
          let torderTotalPrice = +$el('.sum-row.order-total .total').textContent.split('$')[1]
          let saveSavingsPrice = ' '
          $$el('.sum-row.total .caption').forEach(el => {
            if (el.textContent === `Total`) {
              el.closest('.sum-row.total').style.display = 'none'
            }
            if (el.textContent === `Subscribe & save savings (15% off)`) {
              saveSavingsPrice = el.nextElementSibling.textContent.split('$')[1]
            }
          })
          let q = setInterval(() => {
            if (saveSavingsPrice) {
              clearInterval(q)
              if (!$el('.new_subtotal')) {
                $el('.sum-row.order-total .total').insertAdjacentHTML(
                  'beforebegin',
                  `<span class="new_subtotal">${
                    torderTotalPrice === torderTotalPrice + +saveSavingsPrice
                      ? ''
                      : `${currency}${(torderTotalPrice + +saveSavingsPrice).toFixed(2)}`
                  }</span>`
                )
              }
            }
          }, 100)
        }, 500)
      })
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
    console.dir('renderFooterMobile')
  }
  renderOrderSummaryBlockMobile() {
    waitForElement('.form-row .form-column-right > .css-kq9w2n').then(() => {
      if (!$el('.order_summary_block_mobile')) {
        $el('.form-row .form-column-right > .css-kq9w2n').insertAdjacentHTML('afterbegin', orderSummaryBlockMobile)
      }
      this.handleOpenAndCloseOrderSummaryBlockMobile()
      console.dir('renderOrderSummaryBlockMobile')
    })
  }
  handleOpenAndCloseOrderSummaryBlockMobile() {
    waitForElement('.order_summary_block_mobile').then(() => {
      $el('.order_summary_header .order_summary_toggle').addEventListener('click', el => {
        pushData('exp_ordersummary_click_05', 'Show Order Summary', 'Button', 'Checkout')
        checkScrollPosition(100, $el('.order_summary_header'))
        const body = $el('.order_summary_body')
        el.currentTarget.classList.toggle('is_open')
        if (body.classList.contains('is_open')) {
          el.currentTarget.querySelector('span').textContent = 'Show order summary'
        } else {
          el.currentTarget.querySelector('span').textContent = 'Hide order summary'
        }
        this.resizeOrderSummaryBlockMobile(body)
        body.classList.toggle('is_open')
      })
      console.dir('handleOpenAndCloseOrderSummaryBlockMobile')
    })
  }
  resizeOrderSummaryBlockMobile(body: HTMLElement) {
    if (body.classList.contains('is_open')) {
      const fullHeight = body.scrollHeight
      body.style.height = fullHeight + 'px'
      setTimeout(() => {
        body.style.height = '0'
      }, 0)
    } else {
      body.style.height = 'auto'
      const fullHeight = body.scrollHeight + 'px'
      body.style.height = '0'
      setTimeout(() => {
        body.style.height = fullHeight
      }, 0)
    }
  }
  replaceOrderTotal() {
    waitForElement('.summary-table').then(() => {
      waitForElement('.order_summary_block_mobile').then(() => {
        if (!$el('.order_summary_block_mobile .order_summary_body .summary-table')) {
          $el('.order_summary_block_mobile .order_summary_body').insertAdjacentElement(
            'beforeend',
            $el('.summary-table')
          )
        }
        console.dir('replaceOrderTotal')
        this.renderTxtTotalToSummaryBlockMobile()
      })
    })
  }
  renderTxtTotalToSummaryBlockMobile() {
    waitForElement('.order_summary_block_mobile .order_summary_body .summary-table .new_subtotal').then(() => {
      waitForElement('.order_summary_block_mobile .order_summary_header .price_total .price_order_total').then(() => {
        $el('.order_summary_block_mobile .order_summary_header .price_total .price_order_total').textContent =
          $el('.sum-row.order-total .total').textContent

        $el('.order_summary_block_mobile .order_summary_header .price_total .price_total_strikethrough').textContent =
          $el('.order_summary_block_mobile .order_summary_body .summary-table .new_subtotal').textContent

        console.dir('renderTxtTotalToSummaryBlockMobile')
      })
    })
  }
}

new cartCheckoutPages(device)
