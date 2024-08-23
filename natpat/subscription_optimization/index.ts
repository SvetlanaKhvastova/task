import {
  startLog,
  $el,
  $$el,
  waitForElement,
  pushData,
  clarityInterval,
  scrollToElement,
  checkScrollPosition,
  loadScriptsOrStyles
} from '../../libraries'
import { customDropdown, newSubscriptionBlock, stickyBlock } from './blocks'
import { svg, git } from './data'
// @ts-ignore
import mainStyle from './main.css?raw'

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class subscriptionOptimization {
  device: 'mobile' | 'desktop'
  observer: null | MutationObserver

  constructor(device) {
    this.device = device
    this.observer = null

    this.init()
  }

  init() {
    startLog({ name: 'NatPat: subscription Optimization', dev: 'SKh' })
    clarityInterval('exp_sub_option')

    document.head.insertAdjacentHTML(
      'beforeend',
      `<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">`
    )
    document.head.insertAdjacentHTML('beforeend', `<style class="crs_style">${mainStyle}</style>`)

    this.changeTxtxMainBtn()
    this.observePageChange()

    if (this.device === 'mobile') {
      this.renderStickyBlock()
    }
  }

  changeTxtxMainBtn() {
    waitForElement('.product-form__buttons button').then((i: HTMLElement) => {
      if (!$el('.new_txt_btn')) {
        i.insertAdjacentHTML('afterbegin', `<div class="new_txt_btn">Add to cart</div>`)
      }
    })
  }
  replacePriceTxtHandler() {
    waitForElement('.cPrice span').then((i: HTMLElement) => {
      waitForElement('.price__container').then((e: HTMLElement) => {
        waitForElement('.product-form__submit span[data-rtx-subscription-price]').then((p: HTMLElement) => {
          let v = setInterval(() => {
            if (p.textContent !== '' && $el('[data-percent]')) {
              clearInterval(v)
              waitForElement('.price--on-sale .price__badge-sale').then(n => {
                const regPrice = i.textContent
                let salePrice = ''
                let percentOff = ''
                if (!$el('.product-form__submit span[data-rtx-subscription-price]').classList.contains('hidden')) {
                  salePrice = $el('.product-form__submit span[data-rtx-subscription-price]').textContent
                  percentOff = $el('[data-percent]').getAttribute('data-percent')
                  console.log(`Тут %`)
                }
                if (!$el('.product-form__submit span[data-rtx-onetime-price]').classList.contains('hidden')) {
                  salePrice = $el('.product-form__submit span[data-rtx-onetime-price]').textContent
                  percentOff = $el('.price--on-sale .price__badge-sale')?.textContent.trim()
                  console.log(percentOff, `percentOff`)
                }
                if (!$el('.new_price_wrapper')) {
                  e.insertAdjacentHTML(
                    'beforebegin',
                    `<div class="new_price_wrapper">
                      <div class="new_reg_price">${regPrice}</div>
                      <div class="new_sale_price">${salePrice}</div>
                      <div class="percent_off">${svg.percentIcon} ${percentOff}</div>
                    </div>`
                  )
                }
              })
            }
          }, 300)
        })
      })
    })
  }
  observePageChange() {
    this.observer = new MutationObserver(mutations => {
      if ($el('.rtx-subscription-unselected.np-one-pack.is-hidden')) {
        if (!$el('#newSubscriptionBlock')) {
          this.renderNewSubscriptionBlock()
          $el('body').classList.add('new_subscription_block_visible')
        }
      } else {
        $el('#newSubscriptionBlock')?.remove()
        if ($el('body').classList.contains('new_subscription_block_visible')) {
          $el('body').classList.remove('new_subscription_block_visible')
        }
      }

      if (!$el('.one_time_checked')) {
        this.changeSubscribePricePacksHandler()
      } else {
        $el('.each_pack_subscribe')?.remove()
      }
    })

    const config = { childList: true, subtree: true }
    this.observer.observe($el('body'), config)
  }

  renderNewSubscriptionBlock() {
    waitForElement('.rtx-subscription-label__wrapper').then((i: HTMLElement) => {
      if (!$el('#newSubscriptionBlock')) {
        i.insertAdjacentHTML('afterend', newSubscriptionBlock)
      }
    })

    waitForElement('.new_subscription_block').then((i: HTMLElement) => {
      this.replacePriceTxtHandler()
      this.changeSubscriptionPlanHandler()
      this.renderCustomDropdown()
    })
    this.initTooltip()
    console.log('renderNewSubscriptionBlock>>>>>>>>>>>>>>>>')
  }
  changeSubscriptionPlanHandler() {
    waitForElement('.plan_selection').then(i => {
      $$el('.plan_selection label').forEach(label => {
        label.addEventListener('click', () => {
          switch (label.getAttribute('for')) {
            case 'oneTime':
              pushData('exp_sub_option_button_01', 'One-Time', 'Button', 'Subscribe section')
              if (label.previousElementSibling?.checked) return
              $el('.custom_dropdown')?.remove()
              $el('.new_price_wrapper')?.remove()
              $el('[id="purchaseTypeOneTime"]').click()
              if (!$el('.plan_details').classList.contains('one_time_checked')) {
                $el('.plan_details').classList.add('one_time_checked')
              }
              break
            case 'subscribeSave':
              pushData('exp_sub_option_button_02', 'Subscribe & Save', 'Button', 'Subscribe section')
              if (label.previousElementSibling?.checked) return
              $el('.custom_dropdown')?.remove()
              $el('.new_price_wrapper')?.remove()
              $el('[id="purchaseTypeSubscription"]').click()
              if ($el('.plan_details').classList.contains('one_time_checked')) {
                $el('.plan_details').classList.remove('one_time_checked')
              }
              break

            default:
              break
          }
          this.renderCustomDropdown()
          this.replacePriceTxtHandler()
        })
      })
    })
  }

  renderCustomDropdown() {
    waitForElement('#newSubscriptionBlock').then((i: HTMLElement) => {
      if (!$el('.custom_dropdown')) {
        i.insertAdjacentHTML('beforeend', customDropdown)
      }
      this.renderOptions()
      console.log(`renderCustomDropdown`)
    })
  }

  renderOptions() {
    waitForElement('.rtx-subscription-dropdown option').then(i => {
      waitForElement('.custom_dropdown').then(i => {
        const subscriptionDropdown = $el('.rtx-subscription-dropdown') as HTMLSelectElement
        const subscriptionDropdownOption = $$el('.rtx-subscription-dropdown option') as NodeListOf<HTMLElement>
        const customDropdown = $el('.dropdown_menu') as HTMLElement
        const dropdownToggle = $el('.dropdown_toggle') as HTMLElement
        subscriptionDropdownOption.forEach(opt => {
          let selected = opt.getAttribute('selected') !== null ? 'selected' : ''
          const value = opt.getAttribute('value')
          let text = opt.textContent?.includes('Every')
            ? `<b>Ship every:</b> <span class="text_transform">${opt.textContent?.split('Every ')[1]}</span>`
            : opt.textContent

          if (opt.textContent?.includes('(most common)')) {
            text = `<b>Ship every:</b> <span class="text_transform">${opt.textContent
              ?.split('Every ')[1]
              .split('(most common)')[0]}</span> <span class="most_common">(${opt.textContent?.split('(')[1]}</span>`
          }

          if (subscriptionDropdown && subscriptionDropdown.value === value) {
            dropdownToggle.innerHTML = `${text}`
            selected = 'selected'
          }

          // if (text && text.includes('One Time') && $el('[id="purchaseTypeOneTime"]').checked) {
          //   dropdownToggle.classList.add('disabled')
          // }
          if ($el('.one_time_checked')) {
            dropdownToggle.classList.add('disabled')
          }
          customDropdown.insertAdjacentHTML(
            'beforeend',
            `<div class="dropdown_item ${selected}" data-value="${value}">${text}</div>`
          )
        })
        this.changeCustomDropdownHandler('.custom_dropdown')
      })
    })
  }

  changeCustomDropdownHandler(dropdownSelector: string) {
    const dropdown = $el(dropdownSelector) as HTMLElement
    const dropdownToggle = dropdown.querySelector('.dropdown_toggle') as HTMLElement
    const dropdownMenu = dropdown.querySelector('.dropdown_menu') as HTMLElement
    const dropdownItems = dropdown.querySelectorAll('.dropdown_item') as NodeListOf<HTMLElement>
    const subscriptionDropdownOption = $$el('.rtx-subscription-dropdown option') as NodeListOf<HTMLElement>

    dropdownToggle.addEventListener('click', () => {
      pushData('exp_sub_option_dropdown_01', 'Ship every', 'Dropdown', 'Subscribe section')
      dropdownMenu.classList.toggle('show')
      this.adjustDropdownPosition(dropdownMenu)
      dropdownToggle.classList.toggle('active')
    })

    dropdownItems.forEach(item => {
      item.addEventListener('click', event => {
        const target = event.currentTarget as HTMLElement
        const value = target.getAttribute('data-value')

        dropdownItems.forEach(item => item.classList.remove('selected'))

        target.classList.add('selected')
        dropdownMenu.style.top = '100%'

        dropdownToggle.innerHTML = target.innerHTML
        dropdownMenu.classList.remove('show')
        dropdownToggle.classList.remove('active')
        pushData(
          'exp_sub_option_dropdown_02',
          `Selected value: ${target.querySelector('.text_transform')?.textContent}`,
          'Dropdown',
          'Subscribe section'
        )
        subscriptionDropdownOption.forEach(opt => {
          if (opt.getAttribute('value') === value) {
            if (opt.closest('select')) {
              opt.closest('select').value = value
            }
          }
        })
      })
    })

    document.addEventListener('click', event => {
      const target = event.target as HTMLElement
      if (!dropdown.contains(target)) {
        dropdownMenu.classList.remove('show')
        dropdownToggle.classList.remove('active')
        dropdownMenu.style.top = '100%'
      }
    })

    let observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            this.adjustDropdownPosition(dropdownMenu)
          }
        })
      },
      {
        root: null,
        threshold: 1.0
      }
    )

    observer.observe(dropdownMenu)
  }

  adjustDropdownPosition(dropdownMenu: HTMLElement) {
    const rect = dropdownMenu.getBoundingClientRect()
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight

    if (rect.bottom > viewportHeight) {
      dropdownMenu.style.top = `-${rect.height + 2}px`
    } else {
      dropdownMenu.style.top = '100%'
    }
  }

  changeSubscribePricePacksHandler() {
    waitForElement('label .each-pack[data-subscribe]').then(i => {
      $$el('label .each-pack').forEach((i: HTMLElement) => {
        if (i.closest('label[data-pack="1"]')) return

        if (!i.previousElementSibling?.classList.contains('each_pack_subscribe')) {
          i.insertAdjacentHTML(
            'beforebegin',
            `<span class="each_pack_subscribe">${i.getAttribute('data-subscribe')}</span>`
          )
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
              // trigger: 'click',
              allowHTML: true,
              arrow: true,
              arrowType: 'round',
              appendTo: function () {
                return el.closest('.plan_comment')
              },
              placement: 'bottom-end',
              interactive: true,
              onShow(instance: any) {
                pushData(
                  'exp_sub_option_tooltip_01',
                  'A choice that saves both time and money',
                  'Visibility',
                  'Subscribe section'
                )
              }
            })
          })
        }
      }, 100)
    })
  }

  // MOBILE
  renderStickyBlock() {
    waitForElement('body').then((i: HTMLElement) => {
      if (!$el('.sticky_block')) {
        i.insertAdjacentHTML('afterend', stickyBlock)
      }

      waitForElement('.sticky_block').then((i: HTMLElement) => {
        let getIt = setInterval(() => {
          if ($$el('a.get-it') && $$el('a.get-it').length > 0) {
            clearInterval(getIt)
            this.toggleStickyBlockVisibility('a.get-it')
          }
        }, 300)
        let scrollToCheckout = setInterval(() => {
          if ($$el('a.scroll-to-checkout') && $$el('a.scroll-to-checkout').length > 0) {
            clearInterval(scrollToCheckout)
            this.toggleStickyBlockVisibility('a.scroll-to-checkout')
          }
        }, 300)
        let getItNow = setInterval(() => {
          if ($$el('a.get-it-now') && $$el('a.get-it-now').length > 0) {
            clearInterval(getItNow)
            this.toggleStickyBlockVisibility('a.get-it-now')
          }
        }, 300)
        let heroBtn = setInterval(() => {
          if (
            window.location.pathname.match('focuspatch-focus-enhancing-sticker') &&
            $$el('a[href="#pdpGetNow"]') &&
            $$el('a[href="#pdpGetNow"]').length > 0
          ) {
            clearInterval(heroBtn)
            this.toggleStickyBlockVisibility('a[href="#pdpGetNow"]')
          }
        }, 300)

        this.clickStickyBtnHandler()
      })
    })
  }
  toggleStickyBlockVisibility(getItButtonsSelector: string) {
    waitForElement('section.page-width').then(() => {
      waitForElement('.sticky_block').then(() => {
        const stickyButton = $el('.sticky_block') as HTMLElement
        const elemClose = $el('section.page-width') as HTMLElement
        let getItButtons = $$el(getItButtonsSelector) as NodeListOf<HTMLElement>

        function isElementInViewport(el: HTMLElement): boolean {
          const rect = el.getBoundingClientRect()
          return (
            rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom > 0 &&
            rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
            rect.right > 0
          )
        }

        function checkVisibility() {
          let anyVisible = false

          if (isElementInViewport(elemClose)) {
            anyVisible = true
          }

          getItButtons.forEach(button => {
            if (isElementInViewport(button)) {
              anyVisible = true
            }
          })

          if (anyVisible) {
            stickyButton.style.display = 'none'
            if ($el('body').classList.contains('sticky_block_visible')) {
              $el('body').classList.remove('sticky_block_visible')
            }
          } else {
            stickyButton.style.display = 'block'
            $el('body').classList.add('sticky_block_visible')
          }
        }

        checkVisibility()

        window.addEventListener('scroll', checkVisibility)
        window.addEventListener('resize', checkVisibility)
      })
    })
  }
  clickStickyBtnHandler() {
    waitForElement('.choose_your_product_btn').then((i: HTMLElement) => {
      i.addEventListener('click', () => {
        pushData('exp_sub_option_button_03', 'Choose your product', 'Button', 'Sticky button')
        checkScrollPosition(0, $el('#pdpGetNow .product__title'))
        if (window.innerWidth < 376) {
          checkScrollPosition(10, $el('variant-radios'))
        }
      })
    })
  }
}

waitForElement('.rtx-subscription').then(i => {
  new subscriptionOptimization(device)
})
