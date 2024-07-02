import { startLog, $el, $$el, waitForElement, pushData, clarityInterval } from '../../../libraries'
import { emailBlock, titleBlock, peopleJoinedBlock, guaranteeBlock, noteBlock, proceedToFindOutBlock } from './blocks'
import { svg } from './data'
// @ts-ignore
import mainStyle from './main.css?raw'

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class exitIntentPopup {
  device: 'mobile' | 'desktop'

  constructor(device) {
    this.device = device
    this.init()
  }

  init() {
    startLog({ name: 'select Trial Price Page Improvements', dev: 'SKh' })
    // clarityInterval('')
    this.observeMain()

    if (window.location.pathname.match('subscription-pla')) {
      this.handleSubscriptionPage()
    } else if (window.location.pathname.match('email')) {
      this.removeCustomStyles()
      this.handleClickBtnContinueForEmail()
    } else {
      this.removeCustomStyles()
    }
  }

  // ___________________________________________________________________________________________________________
  // window.location.pathname.match('email')
  handleClickBtnContinueForEmail() {
    waitForElement('button.z-0').then(() => {
      $el('button.z-0').addEventListener('click', () => {
        const email = $el('input[name="email"]')?.value
        localStorage.setItem('emailValue', email)
      })
    })
  }

  // ___________________________________________________________________________________________________________
  // window.location.pathname.match('subscription-pla')
  handleSubscriptionPage() {
    if (!$el('.crs_inter')) {
      document.head.insertAdjacentHTML(
        'afterbegin',
        `<link class="crs_inter" href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">`
      )
    }

    if (!$el('.crs_style')) {
      document.head.insertAdjacentHTML('beforeend', `<style class="crs_style">${mainStyle}</style>`)
    }

    this.renderTitleBlock()
    this.renderEmailBlock()
    this.renderNoteBlock()
    this.renderPeopleJoinedBlock()
    // this.renderProceedToFindOutBlock()
    this.renderGuaranteeBlock()
    this.replaceTxtBtnGetStarted()
  }
  renderTitleBlock() {
    waitForElement('.styles_plans__kjWfh').then(() => {
      if (!$el('.title_block')) {
        $el('.styles_plans__kjWfh').insertAdjacentHTML('beforebegin', titleBlock)
      }
    })
  }
  renderEmailBlock() {
    waitForElement('main').then(() => {
      if (!$el('.email_block') && localStorage.getItem('emailValue')) {
        const emailTxt = localStorage.getItem('emailValue')
        if (emailTxt !== null) {
          const emailTxtFirtsLetter = emailTxt.charAt(0).toUpperCase()
          $el('main').insertAdjacentHTML('afterbegin', emailBlock(emailTxt, emailTxtFirtsLetter))
        }
      }
    })
  }
  renderNoteBlock() {
    waitForElement('.styles_plans__kjWfh').then(() => {
      setTimeout(() => {
        const price = $el('.styles_plans__kjWfh>:last-child').textContent.trim()
        if (!$el('.note_block')) {
          $el('.styles_plans__kjWfh').insertAdjacentHTML('afterend', noteBlock(price))
        }
      }, 700)
    })
  }
  renderPeopleJoinedBlock() {
    waitForElement('button.z-0').then(() => {
      if (!$el('.people_joined_block')) {
        $el('button.z-0').insertAdjacentHTML('beforebegin', peopleJoinedBlock)
      }
    })
  }
  renderProceedToFindOutBlock() {
    waitForElement('button.z-0').then(() => {
      if (!$el('.proceed_to_find_out_block')) {
        $el('button.z-0').insertAdjacentHTML('beforebegin', proceedToFindOutBlock)
      }
    })
  }
  renderGuaranteeBlock() {
    waitForElement('button.z-0').then(() => {
      if (!$el('.guarantee_block')) {
        $el('button.z-0').insertAdjacentHTML('afterend', guaranteeBlock)
      }
    })
  }
  replaceTxtBtnGetStarted() {
    waitForElement('button.z-0').then(() => {
      if (!$el('button.z-0').textContent.match('Get Started')) {
        $el('button.z-0').innerHTML = `Get Started ${svg.arrowIcon}`
      }
    })
  }
  handleVisibility() {
    // waitForElement('').then(i => {})
  }

  // ___________________________________________________________________________________________________________
  observeMain() {
    let observer = new MutationObserver(mutations => {
      for (let mutation of mutations) {
        for (let node of mutation.removedNodes) {
          if (!(node instanceof HTMLElement)) continue
          if (node.tagName === 'MAIN') {
            console.log(node)
            if (window.location.pathname.match('subscription-pla')) {
              this.handleSubscriptionPage()
            } else if (window.location.pathname.match('email')) {
              this.removeCustomStyles()
              this.handleClickBtnContinueForEmail()
            } else {
              this.removeCustomStyles()
            }
          }
        }
      }
    })

    observer.observe($el('body'), { childList: true, subtree: true })
  }
  removeCustomStyles() {
    $el('.crs_style')?.remove()
    $el('.crs_inter')?.remove()
  }
}

new exitIntentPopup(device)
