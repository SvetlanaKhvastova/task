import {
  startLog,
  $el,
  $$el,
  waitForElement,
  pushData,
  clarityInterval,
  scrollToElement,
  checkScrollPosition
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
        const regPrice = i.textContent
        let salePrice = ''
        if (!$el('.product-form__submit span[data-rtx-subscription-price]').classList.contains('hidden')) {
          salePrice = $el('.product-form__submit span[data-rtx-subscription-price]').textContent
        }
        if (!$el('.product-form__submit span[data-rtx-onetime-price]').classList.contains('hidden')) {
          salePrice = $el('.product-form__submit span[data-rtx-onetime-price]').textContent
        }
        console.log(salePrice, `salePrice`)
        if (!$el('.new_price_wrapper')) {
          e.insertAdjacentHTML(
            'beforebegin',
            `<div class="new_price_wrapper">
              <div class="new_reg_price">${regPrice}</div>
              <div class="new_sale_rice">${salePrice}</div>
            </div>`
          )
        }
      })
    })
  }
  observePageChange() {
    this.observer = new MutationObserver(mutations => {
      if ($el('.rtx-subscription-unselected.np-one-pack.is-hidden')) {
        if (!$el('#newSubscriptionBlock')) {
          this.renderNewSubscriptionBlock()
        }
      } else {
        $el('#newSubscriptionBlock')?.remove()
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
    console.log('renderNewSubscriptionBlock>>>>>>>>>>>>>>>>')
  }
  changeSubscriptionPlanHandler() {
    waitForElement('.plan_selection').then(i => {
      console.log(`plan_selection>>>>>>>>>>>>>>`)
      $$el('.plan_selection label').forEach(label => {
        label.addEventListener('click', () => {
          console.log(`label >>>>>>>>`, label.getAttribute('for'))
          $el('.custom_dropdown')?.remove()
          $el('.new_price_wrapper')?.remove()
          switch (label.getAttribute('for')) {
            case 'oneTime':
              pushData('exp_sub_option_button_01', 'One-Time', 'Button', 'Subscribe section')
              $el('[id="purchaseTypeOneTime"]').click()
              if (!$el('.plan_details').classList.contains('one_time_checked')) {
                $el('.plan_details').classList.add('one_time_checked')
              }
              break
            case 'subscribeSave':
              pushData('exp_sub_option_button_02', 'Subscribe & Save', 'Button', 'Subscribe section')
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

          if (text && text.includes('One Time')) {
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
        console.log(`Selected value: ${value}`)
        pushData(
          'exp_sub_option_dropdown_02',
          `Selected value: ${target.querySelector('.text_transform')?.textContent}`,
          'Dropdown',
          'Subscribe section'
        )
        subscriptionDropdownOption.forEach(opt => {
          if (opt.getAttribute('value') === value) {
            console.log(opt.getAttribute('value') === value)
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

  // MOBILE
  renderStickyBlock() {
    waitForElement('body').then((i: HTMLElement) => {
      if (!$el('.sticky_block')) {
        i.insertAdjacentHTML('afterend', stickyBlock)
      }
      this.toggleStickyBlockVisibility()
      this.clickStickyBtnHandler()
    })
  }
  toggleStickyBlockVisibility() {
    waitForElement('section.page-width').then(() => {
      waitForElement('.sticky_block').then(() => {
        const stickyButton = document.querySelector('.sticky_block') as HTMLElement
        const elemClose = document.querySelector('section.page-width') as HTMLElement
        const getItButtons = document.querySelectorAll('.get-it') as NodeListOf<HTMLElement>

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
