import { startLog, $el, $$el, waitForElement, pushData, clarityInterval } from '../../../libraries'
import { newBtnSkipVerC } from './blocks'
import { svg } from './data'
// @ts-ignore
import mainStyle from './main.css?raw'

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class ProvideNewAlternatives {
  device: 'mobile' | 'desktop'
  lastPath: string

  constructor(device) {
    this.device = device
    this.lastPath = window.location.pathname

    this.init()
  }

  init() {
    startLog({ name: 'Provide new alternatives', dev: 'SKh' })
    clarityInterval('exp_hyp5', 'variant_2')

    this.observeMain()
    this.loadFontsAndStyles()
    this.allFunctionsInitHandler()
  }

  observeMain() {
    let observer = new MutationObserver(mutations => {
      for (let mutation of mutations) {
        if (window.location.pathname !== this.lastPath) {
          this.lastPath = window.location.pathname
          this.allFunctionsInitHandler()
        }
      }
    })

    observer.observe($el('body'), { childList: true, subtree: true })
  }

  loadFontsAndStyles() {
    if (!$el('.crs_inter')) {
      document.head.insertAdjacentHTML(
        'afterbegin',
        `<link class="crs_inter" href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">`
      )
    }

    if (!$el('.crs_style')) {
      document.head.insertAdjacentHTML('beforeend', `<style class="crs_style">${mainStyle}</style>`)
    }
  }

  // allFunctions
  allFunctionsInitHandler() {
    if (this.checkPage() === 'subscriptionPlan') {
      console.log(`subscriptionPlan`)
      this.addClassToBody()
      this.renderNewBtnSkip()
    } else {
      console.log(this.checkPage())
      this.removeClassFromBody()
    }
  }

  checkPage(): string {
    const url = window.location.href
    if (url.includes('paywall')) return 'paywall'
    if (url.includes('subscription-plan')) return 'subscriptionPlan'
    if (url.includes('email')) return 'email'
    return 'other'
  }

  addClassToBody() {
    waitForElement('[alt="arrow-top"]').then(i => {
      const body = $el('body')
      body.classList.add('crs_subscriptionPlan')
      pushData('exp_new_astro_visibility_02', 'Screen view', 'View', 'Try hint for 1 week')
    })
  }

  removeClassFromBody() {
    const body = $el('body')
    if (body.classList.contains('crs_subscriptionPlan')) {
      body.classList.remove('crs_subscriptionPlan')
    }
  }

  renderNewBtnSkip() {
    waitForElement('.crs_subscriptionPlan [alt="arrow-top"]').then(i => {
      waitForElement('.bg-gray-100').then(i => {
        const сontainerElement = $el('.crs_subscriptionPlan div.sticky') as HTMLElement

        if (!$el('.new_btn_skip')) {
          сontainerElement.insertAdjacentHTML('beforeend', newBtnSkipVerC())
        }
        this.addClickhandlerOnNewBtnSkip()
      })
    })
  }

  addClickhandlerOnNewBtnSkip() {
    waitForElement('.new_btn_skip').then(i => {
      const btnSkip = $el('.new_btn_skip') as HTMLElement
      const btnContinue = $el('div.sticky > button') as HTMLElement
      const firstPlan = $$el('.bg-gray-100')[0]
      const containerPlan = $el('.crs_subscriptionPlan main > .pt-4 > .gap-4 > .gap-4')

      btnSkip.addEventListener('click', e => {
        if (e.target && (e.target as HTMLElement).classList.contains('ver_b')) {
          pushData('exp_new_astro_button_01', 'Skip and start reading for just $1', 'Click', 'Try hint for 1 week')
        } else {
          pushData('exp_new_astro_button_02', 'Opt for the minimum cost', 'Click', 'Try hint for 1 week')
        }

        if (containerPlan) {
          containerPlan.style.opacity = '0'
          firstPlan?.click()
          btnContinue?.click()
        }
      })
    })
  }
}

waitForElement('body').then(element => {
  new ProvideNewAlternatives(device)
})
