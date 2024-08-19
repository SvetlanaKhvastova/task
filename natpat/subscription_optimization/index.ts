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
import { newSubscriptionBlock, stickyBlock } from './blocks'
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
    // clarityInterval('')

    document.head.insertAdjacentHTML(
      'beforeend',
      `<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap" rel="stylesheet">`
    )
    document.head.insertAdjacentHTML('beforeend', `<style class="crs_style">${mainStyle}</style>`)

    this.changeTxtxMainBtn()
    this.observePageChange()

    if (this.device === 'mobile') {
      this.renderStickyBlock()
    }
  }

  renderNewSubscriptionBlock() {
    waitForElement('.rtx-subscription-label__wrapper').then((i: HTMLElement) => {
      if (!$el('#newSubscriptionBlock')) {
        i.insertAdjacentHTML('afterend', newSubscriptionBlock)
      }
    })

    waitForElement('.new_subscription_block').then((i: HTMLElement) => {
      waitForElement('.rtx-subscription-dropdown').then(e => {
        if (!$el('.new_subscription_block + .rtx-subscription-dropdown')) {
          i.insertAdjacentElement('afterend', $el('.rtx-subscription-dropdown'))
        }
      })
    })
    this.changeSubscriptionPlan()
    console.log('renderNewSubscriptionBlock>>>>>>>>>>>>>>>>')
  }
  changeSubscriptionPlan() {
    waitForElement('.plan_selection').then(i => {
      console.log(`plan_selection>>>>>>>>>>>>>>`)
      $$el('.plan_selection label').forEach(label => {
        label.addEventListener('click', () => {
          console.log(`label >>>>>>>>`, label.getAttribute('for'))
          switch (label.getAttribute('for')) {
            case 'oneTime':
              $el('[id="purchaseTypeOneTime"]').click()
              if (!$el('.plan_details').classList.contains('one_time_checked')) {
                $el('.plan_details').classList.add('one_time_checked')
              }
              $el('.new_subscription_block + .rtx-subscription-dropdown').disabled = true
              break
            case 'subscribeSave':
              $el('[id="purchaseTypeSubscription"]').click()
              if ($el('.plan_details').classList.contains('one_time_checked')) {
                $el('.plan_details').classList.remove('one_time_checked')
              }
              $el('.new_subscription_block + .rtx-subscription-dropdown').disabled = false
              break

            default:
              break
          }
        })
      })
    })
  }

  changeTxtxMainBtn() {
    waitForElement('.product-form__buttons button').then((i: HTMLElement) => {
      if (!$el('.new_txt_btn')) {
        i.insertAdjacentHTML('afterbegin', `<div class="new_txt_btn">Subscribe & save</div>`)
      }
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
        checkScrollPosition(0, $el('#pdpGetNow .product__title'))
      })
    })
  }
}

waitForElement('.rtx-subscription').then(i => {
  new subscriptionOptimization(device)
})
