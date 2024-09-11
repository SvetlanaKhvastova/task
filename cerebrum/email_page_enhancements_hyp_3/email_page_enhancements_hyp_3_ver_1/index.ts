import { startLog, $el, $$el, waitForElement, clarityInterval } from '../../../libraries'
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
    clarityInterval('exp_email_enhance', 'variant_1')

    if (!$el('html').classList.contains('crs_dev')) {
      $el('html').classList.add('crs_dev')
    }

    if (!$el('.crs_style')) {
      document.head.insertAdjacentHTML(
        'afterbegin',
        `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">`
      )
      document.head.insertAdjacentHTML('beforeend', `<style class="crs_style">${mainStyle}</style>`)
    }

    this.renderTitleBlock()
    this.changeInputHandler()
    this.renderNewLabelForInput()
    this.renderSafeAndSecureBlock()
    this.renderTermsConditionsBlock()
    this.renderContinueIcon()

    this.observeEmailPage()
  }

  renderTitleBlock() {
    waitForElement('main > div > div.gap-1').then(() => {
      if (!$el('.title_block')) {
        $el('main > div').insertAdjacentHTML('afterbegin', titleBlockVerB)
        // _______________________________________________________________________
        // $el('main > div').insertAdjacentHTML('afterbegin', titleBlockVerC)
        // $el('body').classList.add('ver_c')
      }
    })
  }

  changeInputHandler() {
    waitForElement('[data-slot="input-wrapper"]').then(() => {
      if ($el('[data-slot="input-wrapper"] input').placeholder !== 'example@mail.com') {
        $el('[data-slot="input-wrapper"] input').placeholder = 'example@mail.com'
      }

      if (this.device === 'mobile') {
        $el('[data-slot="input-wrapper"] input').addEventListener('focus', e => {
          $el('body').classList.add('input_focused')
          window.addEventListener('resize', handleResize)
        })
        $el('[data-slot="input-wrapper"] input').addEventListener('blur', e => {
          window.removeEventListener('resize', handleResize)
          setTimeout(() => {
            if ($el('body').classList.contains('input_focused')) {
              $el('body').classList.remove('input_focused')
            }
          }, 300)
        })
      }

      function handleResize() {
        $el('body nav').style.position = 'fixed'
        console.log('handleResize')
      }
    })
  }

  renderNewLabelForInput() {
    waitForElement('[data-slot="input-wrapper"]').then(() => {
      if (!$el('.new_label_txt')) {
        $el('[data-slot="input-wrapper"]').insertAdjacentHTML('beforebegin', newLabelTxtVerB)
        // $el('[data-slot="input-wrapper"]').insertAdjacentHTML('beforebegin', newLabelTxtVerC)
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
        if (!$el('html').classList.contains('crs_dev')) {
          $el('html').classList.add('crs_dev')
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
        if ($el('[data-slot="input-wrapper"] input').placeholder !== 'example@mail.com') {
          this.changeInputHandler()
        }
      } else {
        if ($el('html').classList.contains('crs_dev')) {
          $el('html').classList.remove('crs_dev')
        }
      }
    })

    observer.observe($el('body'), { childList: true, subtree: true })
  }
}

new EmailPageEnhancements(device)
