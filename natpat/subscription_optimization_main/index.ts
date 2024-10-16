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
import { customDropdown, newPriceWrapper, newSubscriptionBlock } from './blocks'
import { svg, git } from './data'
// @ts-ignore
import mainStyle from './main.css?raw'

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class SubscriptionOptimization {
  device: 'mobile' | 'desktop'
  observer: null | MutationObserver
  isActiveOnePack: boolean

  constructor(device) {
    this.device = device
    this.observer = null
    this.isActiveOnePack = false

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

    // this.observePageChange()
    this.renderNewSubscriptionBlock()
    this.changeActivePackHandler()
    this.renderNewLogoUnderButton()
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
          // $el('.new_subscription')?.remove()
          if ($el('body').classList.contains('new_subscription_block_visible')) {
            $el('body').classList.remove('new_subscription_block_visible')
          }
        }
      }
    })

    const config = { childList: true, subtree: true }
    this.observer.observe($el('body'), config)
  }

  renderNewSubscriptionBlock() {
    waitForElement('#getNow .stay-container').then(i => {
      const stayContainerElements = $$el('#getNow .stay-container')
      let checkedIsActiveOnePack = false

      stayContainerElements.forEach(container => {
        if (!container.previousElementSibling.classList.contains('new_subscription')) {
          if (this.isActiveOnePack) {
            checkedIsActiveOnePack = true
          }
          container.insertAdjacentHTML('beforebegin', newSubscriptionBlock(checkedIsActiveOnePack))
        }
      })
      console.log('renderNewSubscriptionBlock>>>>>>>>>>>>>>>>')
    })

    this.newSubscriptionBlockHandlers()
  }

  newSubscriptionBlockHandlers() {
    waitForElement('.new_subscription').then((i: HTMLElement) => {
      if (!this.isActiveOnePack) {
        this.checkSubscriptionDefault()
      }
      this.renderCustomDropdown()
      this.changeSubscriptionPlanHandler()
      this.replacePriceTxtHandler()
      this.initTooltip()
    })
  }

  checkSubscriptionDefault() {
    waitForElement('#getNow #rtxSubscribe').then(i => {
      const inputControlVar = $el('#getNow #rtxSubscribe') as HTMLInputElement
      const labelControlVar = inputControlVar.nextElementSibling as HTMLLabelElement

      if (!inputControlVar.checked) {
        labelControlVar.click()
      }
    })
  }

  renderCustomDropdown() {
    waitForElement('.new_subscription_block').then((i: HTMLElement) => {
      if (!$el('.custom_dropdown')) {
        i.insertAdjacentHTML('beforeend', customDropdown)
      }
      this.renderCustomOptions()
      console.log(`renderCustomDropdown`)
    })
  }

  renderCustomOptions() {
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

  changeSubscriptionPlanHandler() {
    waitForElement('.plan_selection').then(i => {
      const inputControlVar = $el('#getNow #rtxSubscribe') as HTMLInputElement
      const labelControlVar = inputControlVar.nextElementSibling as HTMLLabelElement
      const activeSlideOnePack = $el('#getNow .active-slide') as HTMLElement

      $$el('.plan_selection label').forEach(label => {
        label.addEventListener('click', () => {
          switch (label.getAttribute('for')) {
            case 'oneTime':
              pushData('exp_sub_option_button_01', 'One-Time', 'Button', 'Subscribe section')
              if (label.previousElementSibling?.checked) return
              $el('.custom_dropdown')?.remove()
              $el('.new_price_wrapper')?.remove()

              if (inputControlVar.checked) {
                labelControlVar.click()
              }

              if (!$el('.plan_details').classList.contains('one_time_checked')) {
                $el('.plan_details').classList.add('one_time_checked')
              }
              break
            case 'subscribeSave':
              pushData('exp_sub_option_button_02', 'Subscribe & Save', 'Button', 'Subscribe section')
              if (label.previousElementSibling?.checked) return
              $el('.custom_dropdown')?.remove()
              $el('.new_price_wrapper')?.remove()

              if (!inputControlVar.checked) {
                labelControlVar.click()
              }
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

  changeActivePackHandler() {
    waitForElement('#getNow .magicpatch-packs').then(n => {
      const packItems = $$el('#getNow .magicpatch-packs .list-packs') as NodeListOf<HTMLElement>
      console.log(`object`, packItems)

      packItems.forEach(pack => {
        pack.addEventListener('click', () => {
          console.log(`object`)
          if (pack.classList.contains('list-packs-1')) {
            this.isActiveOnePack = true
          } else {
            this.isActiveOnePack = false
          }

          $el('.new_subscription')?.remove()
          $el('.new_price_wrapper')?.remove()

          if (!$el('.new_subscription')) {
            this.renderNewSubscriptionBlock()
          }

          this.replacePriceTxtHandler()
        })
      })
    })
  }

  replacePriceTxtHandler() {
    waitForElement('#getNow .active-slide').then(n => {
      const activeSlide = $el('#getNow .active-slide') as HTMLElement
      const button = $el('#getNow #no-icart-open') as HTMLElement

      const regPrice = activeSlide.querySelector('.info .before-after-prices .strikethrough')?.textContent?.trim()
      let salePrice = activeSlide.querySelector('.info .before-after-prices .after-price')?.textContent?.trim()
      let percentOff = activeSlide.querySelector('.save-btn span')?.textContent?.trim()

      if (regPrice && salePrice && percentOff) {
        if (!$el('.new_price_wrapper')) {
          button.insertAdjacentHTML('beforebegin', newPriceWrapper(regPrice, salePrice, percentOff))
        }
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

  renderNewLogoUnderButton() {
    waitForElement('.reviews-slide > img').then(i => {
      const stayContainerElements = $$el('.reviews-slide > img')
      const newLogo = 'https://conversionratestore.github.io/projects/zenpatch/img/new_logos.png'

      stayContainerElements.forEach(img => {
        if (img.src !== newLogo) {
          img.src = newLogo
        }
      })
    })
  }
}

waitForElement('#getNow .stay-container').then(i => {
  new SubscriptionOptimization(device)
})
