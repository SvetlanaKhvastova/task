import { startLog, $el, $$el, waitForElement, pushData, clarityInterval, visibilityOfTime } from '../../../libraries'
import {
  newLabelTxtVerB,
  newLabelTxtVerC,
  safeAndSecureBlock,
  termsConditionsBlock,
  titleBlockVerB,
  titleBlockVerC
} from './blocks'
import { svg } from './data'

// @ts-ignore
import mainStyle from './main.css?raw'

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class EmailPageEnhancements {
  device: 'mobile' | 'desktop'

  constructor(device) {
    this.device = device
    this.init()
  }

  init() {
    startLog({ name: 'Email page enhancements', dev: 'SKh' })
    // clarityInterval('')

    if (!$el('body').classList.contains('crs_dev')) {
      $el('body').classList.add('crs_dev')
    }

    if (!$el('.crs_style')) {
      document.head.insertAdjacentHTML(
        'afterbegin',
        `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">`
      )
      document.head.insertAdjacentHTML('beforeend', `<style class="crs_style">${mainStyle}</style>`)
    }

    this.renderTitleBlock()
    this.changeInputhandler()
    this.renderNewLabelForInput()
    this.renderSafeAndSecureBlock()
    this.renderTermsConditionsBlock()
    this.renderContinueIcon()

    this.observeEmailPage()
  }

  renderTitleBlock() {
    waitForElement('main > div > div.gap-1').then(() => {
      if (!$el('.title_block')) {
        // $el('main > div').insertAdjacentHTML('afterbegin', titleBlockVerB)
        // _______________________________________________________________________
        $el('main > div').insertAdjacentHTML('afterbegin', titleBlockVerC)
        $el('body').classList.add('ver_c')
      }
    })
  }

  changeInputhandler() {
    waitForElement('[data-slot="input-wrapper"]').then(() => {
      $el('[data-slot="input-wrapper"] input').placeholder = 'example@mail.com'
    })
  }

  renderNewLabelForInput() {
    waitForElement('[data-slot="input-wrapper"]').then(() => {
      if (!$el('.new_label_txt')) {
        // $el('[data-slot="input-wrapper"]').insertAdjacentHTML('beforebegin', newLabelTxtVerB)
        $el('[data-slot="input-wrapper"]').insertAdjacentHTML('beforebegin', newLabelTxtVerC)
      }
    })
  }

  renderSafeAndSecureBlock() {
    waitForElement('body main > div > .w-full').then(() => {
      if (!$el('.safe_and_secure_block')) {
        $el('body main > div > .w-full').insertAdjacentHTML('afterend', safeAndSecureBlock)
      }
    })
  }

  renderTermsConditionsBlock() {
    waitForElement('main > div > .mx-auto').then(() => {
      if (!$el('.terms_conditions_block')) {
        $el('main > div > .mx-auto').insertAdjacentHTML('beforeend', termsConditionsBlock)
      }
      this.clickLinkTermsHandler()
    })
  }

  renderContinueIcon() {
    waitForElement('main > div > .mx-auto button').then(() => {
      if (!$el('.continue_icon')) {
        $el('main > div > .mx-auto button').insertAdjacentHTML('beforeend', `${svg.continueIcon}`)
      }
    })
  }

  clickLinkTermsHandler() {
    waitForElement('.terms_conditions_block').then(() => {
      $$el('.terms_conditions_block a').forEach(el => {
        el.addEventListener('click', e => {
          e.preventDefault()
          if (el.classList.contains('terms')) {
            $el('main p.text-default-600 a:nth-child(1)').click()
          }

          if (el.classList.contains('privacy')) {
            $el('main p.text-default-600 a:nth-child(2)').click()
          }
          console.log('Link clicked')
        })
      })
    })
  }

  observeEmailPage() {
    const observer = new MutationObserver(() => {
      if (location.pathname.match('/email')) {
        if (!$el('body').classList.contains('crs_dev')) {
          $el('body').classList.add('crs_dev')
        }

        if (!$el('.crs_style')) {
          document.head.insertAdjacentHTML(
            'afterbegin',
            `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">`
          )
          document.head.insertAdjacentHTML('beforeend', `<style class="crs_style">${mainStyle}</style>`)
        }

        if (!$el('.title_block')) {
          this.renderTitleBlock()
        }
        if (!$el('.new_label_txt')) {
          this.renderNewLabelForInput()
        }
        if (!$el('.safe_and_secure_block')) {
          this.renderSafeAndSecureBlock()
        }
        if (!$el('.terms_conditions_block')) {
          this.renderTermsConditionsBlock()
        }
        if (!$el('.continue_icon')) {
          this.renderContinueIcon()
        }
      } else {
        if ($el('body').classList.contains('crs_dev')) {
          $el('body').classList.remove('crs_dev')
        }
      }
    })

    observer.observe($el('body'), { childList: true, subtree: true })
  }
}

new EmailPageEnhancements(device)
