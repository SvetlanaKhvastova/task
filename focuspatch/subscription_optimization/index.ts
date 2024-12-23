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
import {
  slideInPackage,
  customDropdown,
  newBlockPackage,
  newBlockPackages,
  newPriceWrapper,
  newSubscriptionBlock
} from './blocks'
import { svg, git } from './data'
// @ts-ignore
import mainStyle from './main.css?raw'

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class SubscriptionOptimization {
  device: 'mobile' | 'desktop'
  observer: null | MutationObserver
  isActiveOnePack: boolean
  isActiveTwoPack: boolean
  regPrice: string
  salePrice: string
  percentOff: string
  imgSrc: string
  packPrice: string
  pcs: string
  uniqueId: string

  constructor(device) {
    this.device = device
    this.observer = null
    this.isActiveOnePack = false
    this.isActiveTwoPack = false
    this.regPrice = ''
    this.salePrice = ''
    this.percentOff = ''
    this.imgSrc = ''
    this.packPrice = ''
    this.pcs = ''
    this.uniqueId = ''

    this.init()
  }

  init() {
    startLog({ name: 'focuspatch: subscription Optimization', dev: 'SKh' })
    // clarityInterval('exp_sub_land')

    document.head.insertAdjacentHTML(
      'beforeend',
      `<link class="crs_font" href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">`
    )
    document.head.insertAdjacentHTML('beforeend', `<style class="crs_style">${mainStyle}</style>`)

    this.renderNewTitleBlockPackage()
    this.renderNewBlockPackages()
    this.changeActivePackHandler()
    this.renderNewSubscriptionBlock()
    this.changeSubscriptionPlanHandler()
    this.initTooltip()
    this.renderCustomDropdown()
    this.renderNewPriceBlock()

    this.renderSlideIn()
    this.openSlideInCart()
  }

  renderNewTitleBlockPackage() {
    waitForElement('#lpfpPackage').then(i => {
      const containerElement = $el('#lpfpPackage') as HTMLElement

      if (!$el('#newBlockPackage')) {
        containerElement.insertAdjacentHTML('afterbegin', newBlockPackage())
      }
    })
  }

  renderNewBlockPackages() {
    waitForElement('#newBlockPackage .new_free_shipping_block_package').then(n => {
      const containerElement = $el('#newBlockPackage .new_free_shipping_block_package') as HTMLElement

      if (!$el('.focuspatch_packs')) {
        containerElement.insertAdjacentHTML('afterend', newBlockPackages())
      }
    })
  }

  changeActivePackHandler() {
    waitForElement('.focuspatch_packs').then(n => {
      const packageItems = $$el('.focuspatch_packs_item') as NodeListOf<HTMLElement>

      packageItems.forEach(item => {
        item.addEventListener('click', () => {
          console.log(item)
          packageItems.forEach(i => {
            i.classList.remove('active')
          })

          item.classList.add('active')
        })
      })
    })
  }

  renderNewSubscriptionBlock() {
    waitForElement('.focuspatch_packs').then(i => {
      const сontainerElements = $$el('.focuspatch_packs') as NodeListOf<HTMLElement>
      let checkedIsActiveOnePack = false
      this.uniqueId = 'Landing'

      сontainerElements.forEach(container => {
        if (!container.previousElementSibling.classList.contains('new_subscription')) {
          container.insertAdjacentHTML('afterend', newSubscriptionBlock(checkedIsActiveOnePack, this.uniqueId))
        }
      })
    })
  }

  changeSubscriptionPlanHandler() {
    waitForElement(`.new_subscription_block `).then(() => {
      const newSubscriptionPlanLabels = $$el(`.plan_selection label`) as NodeListOf<HTMLElement>

      newSubscriptionPlanLabels.forEach(label => {
        const newLabel = label.cloneNode(true) as HTMLElement
        label.replaceWith(newLabel)

        newLabel.addEventListener('click', () => {
          console.log(newLabel.getAttribute('for'), `newLabel.getAttribute('for') `)

          switch (newLabel?.previousElementSibling?.value) {
            case `oneTime`:
              $$el('.plan_details')?.forEach(el => {
                if (!el.classList.contains('one_time_checked')) {
                  el.classList.add('one_time_checked')
                }
              })

              break

            case `subscribeSave`:
              $$el('.plan_details')?.forEach(el => {
                if (el.classList.contains('one_time_checked')) {
                  el.classList.remove('one_time_checked')
                }
              })

              break
          }
        })
      })
    })

    console.log(`changeSubscriptionPlanHandler`)
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
                return el.closest('.plan_comment') || el.closest('.is_active_one_pack')
              },
              placement: 'bottom-end',
              interactive: true,
              onShow(instance: any) {
                if (el.closest('.plan_comment')) {
                  pushData(
                    'exp_sub_land_tooltip_01',
                    'A choice that saves both time and money',
                    'View',
                    'Subscribe section'
                  )
                }
                if (el.closest('.is_active_one_pack')) {
                  pushData('exp_sub_land_tooltip_02', 'Select 2, 3 or 4 packs..', 'View', 'Subscribe section')
                }
              }
            })
          })
        }
      }, 100)
    })
  }

  renderCustomDropdown() {
    waitForElement('.new_subscription_block').then((i: HTMLElement) => {
      const newSubscriptionBlock = $$el('.new_subscription_block') as NodeListOf<HTMLElement>
      newSubscriptionBlock.forEach(s => {
        if (!s.querySelector('.custom_dropdown')) {
          s.insertAdjacentHTML('beforeend', customDropdown)
        }
      })
    })
  }

  renderNewPriceBlock() {
    waitForElement('#newBlockPackage .new_proceed_to_checkout_wrapper').then(n => {
      const containerElement = $el('#newBlockPackage .new_proceed_to_checkout_wrapper') as HTMLElement

      if (!$el('.proceed_to_checkout_btn')) {
        containerElement.insertAdjacentHTML('beforebegin', newPriceWrapper('$99.96', '$36.60', '50%'))
      }
    })
  }

  renderSlideIn() {
    waitForElement('body').then(n => {
      const containerElement = $el('body') as HTMLElement

      if (!$el('.crs_slide_in')) {
        containerElement.insertAdjacentHTML('afterbegin', slideInPackage)
      }
    })
  }

  openSlideInCart() {
    waitForElement('.crs_slide_in').then(n => {
      const btnsOpenSlideInCart = $$el('[href="#lpfpPackage"]') as NodeListOf<HTMLElement>
      const slideInCart = $el('.crs_slide_in') as HTMLElement

      btnsOpenSlideInCart?.forEach(btn => {
        btn.addEventListener('click', e => {
          e.preventDefault()
          slideInCart.classList.add('active')
        })
      })
    })
  }
}

waitForElement('.lp-fp--package-cards li').then(i => {
  new SubscriptionOptimization(device)
})
