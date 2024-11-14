import { startLog, $el, $$el, waitForElement, pushData, clarityInterval } from '../../../libraries'
import { lockerMechanics, moneyBackGuaranteeBlock, palmReadingIsReady } from './blocks'
import { HintState, svg } from './data'
// @ts-ignore
import mainStyle from './main.css?raw'

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class NewSectionStructureAndLockerMechanics {
  device: 'mobile' | 'desktop'
  lastPath: string
  goal: string | null

  constructor(device) {
    this.device = device
    this.lastPath = window.location.pathname
    this.goal = null

    this.init()
  }

  init() {
    startLog({ name: 'Improvements on the paywall screen (new section structure + Locker mechanics)', dev: 'SKh' })
    // clarityInterval('exp_hyp5', 'variant_1')

    this.observeMain()
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
    if (this.checkPage() === 'paywall') {
      console.log(`paywall`)
      this.loadFontsAndStyles()
      this.addClassToBody()
      this.renderPalmReadingIsReady()
      this.renderLockerMechanics()
      this.addClickForImgProceedToCheckout()
      this.renderMoneyBackGuarantee()
    } else {
      console.log(this.checkPage())
      this.removeClassFromBody()
      $el('.palmReadingIsReady')?.remove()
      $el('.locker_mechanics')?.remove()
      $el('money_back_guarantee')?.remove()
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
    waitForElement('main .gap-3.flex.aspect-square').then(i => {
      const body = $el('body')
      body.classList.add('crs_paywall')
    })
  }

  removeClassFromBody() {
    const body = $el('body')
    if (body.classList.contains('crs_paywall')) {
      body.classList.remove('crs_paywall')
    }
  }

  renderPalmReadingIsReady() {
    waitForElement('main .mx-auto.pb-6 > div.mx-auto').then(i => {
      const сontainerElement = $el('main .mx-auto.pb-6 > div.mx-auto') as HTMLElement

      if (!$el('.palm_reading_is_ready')) {
        сontainerElement.insertAdjacentHTML('afterbegin', palmReadingIsReady)
      }
    })
  }

  renderLockerMechanics() {
    waitForElement('.mx-auto > .flex.gap-4').then(i => {
      const сontainerElement = $el('.mx-auto > .flex.gap-4') as HTMLElement
      const firstTxtList = this.getGoalHandler()

      if (!$el('.locker_mechanics')) {
        сontainerElement.insertAdjacentHTML('beforebegin', lockerMechanics(firstTxtList))
      }
    })
  }

  addClickForImgProceedToCheckout() {
    waitForElement('.mx-auto > .flex.gap-4 > div.w-full button').then(i => {
      waitForElement('[data-tocheckout]').then(i => {
        const btns = $$el('[data-tocheckout]') as NodeListOf<HTMLElement>

        btns.forEach(btn => {
          btn.addEventListener('click', e => {
            console.log(e.currentTarget)
            $el('.mx-auto > .flex.gap-4 > div.w-full button')?.click()
          })
        })
      })
    })
  }

  getGoalHandler(): string {
    const data = this.getParsedHintState() as HintState | null
    if (!data) return ''

    switch (data.wish) {
      case '1':
        this.goal = `Deep analysis of the relationships with your partner based on a unique birth chart`
        break
      case '2':
        this.goal = `In-depth analysis of your health and vitality based on the unique patterns in your palm lines.`
        break
      case '3':
        this.goal = `In-depth analysis of your career and destiny based on the unique patterns in your palm lines.`
        break

      default:
        this.goal = `Deep analysis of the relationships with your partner based on a unique birth chart`
        break
    }

    return this.goal
  }

  getParsedHintState(): Object | null {
    const hintState = localStorage.getItem('hint-state')
    if (hintState) {
      try {
        const data = JSON.parse(hintState)
        console.log(data.state)
        return data.state
      } catch (error) {
        console.error('Error parsing hint-state from localStorage', error)
        return null
      }
    }
    return null
  }

  renderMoneyBackGuarantee() {
    waitForElement('main .mx-auto > .flex.gap-4 > ul.flex').then(i => {
      const сontainerElement = $el('main .mx-auto > .flex.gap-4 > ul.flex') as HTMLElement

      if (!$el('.money_back_guarantee')) {
        сontainerElement.insertAdjacentHTML('beforebegin', moneyBackGuaranteeBlock)
      }
    })
  }
}

waitForElement('body').then(element => {
  new NewSectionStructureAndLockerMechanics(device)
})
