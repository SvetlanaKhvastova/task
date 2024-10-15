import {
  startLog,
  $el,
  $$el,
  waitForElement,
  pushData,
  clarityInterval,
  checkScrollPosition,
  loadScriptsOrStyles
} from '../../libraries'
import { customDropdown, newSubscriptionBlock, stickyBlock } from './blocks'
import { svg, git } from './data'
// @ts-ignore
import mainStyle from './main.css?raw'

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class SubscriptionOptimization {
  device: 'mobile' | 'desktop'
  observer: null | MutationObserver

  constructor(device) {
    this.device = device
    this.observer = null

    this.init()
  }

  init() {
    startLog({ name: 'NatPat: subscription Optimization', dev: 'SKh' })
    // clarityInterval('exp_sub_option')

    document.head.insertAdjacentHTML(
      'beforeend',
      `<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">`
    )
    document.head.insertAdjacentHTML('beforeend', `<style class="crs_style">${mainStyle}</style>`)

    this.observePageChange()
  }

  observePageChange() {
    this.observer = new MutationObserver(mutations => {
      const element = $el('#getNow .np-one-pack')
      if (element) {
        const style = window.getComputedStyle(element)
        if (style.display === 'none') {
          if (!$el('.new_subscription')) {
            this.renderNewSubscriptionBlock()
            $el('body').classList.add('new_subscription_block_visible')
          }
        } else {
          $el('.new_subscription')?.remove()
          if ($el('body').classList.contains('new_subscription_block_visible')) {
            $el('body').classList.remove('new_subscription_block_visible')
          }
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

  renderNewSubscriptionBlock() {
    waitForElement('#getNow .stay-container').then(i => {
      const stayContainerElements = $$el('#getNow .stay-container')

      stayContainerElements.forEach(container => {
        if (!container.previousElementSibling.classList.contains('new_subscription')) {
          container.insertAdjacentHTML('beforebegin', newSubscriptionBlock)
        }
      })
    })

    waitForElement('.new_subscription').then((i: HTMLElement) => {
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
              $el('[id="rtxSubscribe"]').click()
              if (!$el('.plan_details').classList.contains('one_time_checked')) {
                $el('.plan_details').classList.add('one_time_checked')
              }
              break
            case 'subscribeSave':
              pushData('exp_sub_option_button_02', 'Subscribe & Save', 'Button', 'Subscribe section')
              if (label.previousElementSibling?.checked) return
              $el('.custom_dropdown')?.remove()
              $el('.new_price_wrapper')?.remove()
              $el('[id="rtxSubscribe"]').click()
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
    waitForElement('.new_subscription_block').then((i: HTMLElement) => {
      if (!$el('.custom_dropdown')) {
        i.insertAdjacentHTML('beforeend', customDropdown)
      }
      this.renderOptions()
      console.log(`renderCustomDropdown`)
    })
  }

  renderOptions() {
    waitForElement('#getNow .subscribe-frequency select option').then(i => {
      waitForElement('.custom_dropdown').then(i => {
        const subscriptionDropdown = $el('#getNow .subscribe-frequency select') as HTMLSelectElement
        const subscriptionDropdownOption = $$el('#getNow .subscribe-frequency select option') as NodeListOf<HTMLElement>
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
    const subscriptionDropdownOption = $$el('#getNow .subscribe-frequency select option') as NodeListOf<HTMLElement>

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
}

waitForElement('#getNow .stay-container').then(i => {
  new SubscriptionOptimization(device)
})
