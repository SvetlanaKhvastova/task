import { startLog, $el, $$el, waitForElement, pushData, clarityInterval, visibilityOfTime } from '../../../libraries'
import { lockerMechanics, moneyBackGuaranteeBlock, palmReadingIsReady } from './blocks'
import { HintState, svg } from './data'
// @ts-ignore
import mainStyle from './main.css?raw'

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class NewSectionStructureAndLockerMechanics {
  device: 'mobile' | 'desktop'
  lastPath: string
  relationshipStatus: string | null
  goal: string | null
  txtMoneyBackGuarantee: string | null

  constructor(device) {
    this.device = device
    this.lastPath = window.location.pathname
    this.relationshipStatus = null
    this.goal = null
    this.txtMoneyBackGuarantee = null

    this.init()
  }

  init() {
    startLog({ name: 'Improvements on the paywall screen (new section structure + Locker mechanics)', dev: 'SKh' })
    clarityInterval('exp_6', 'variant_2')

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
      this.addClickForGetMyPrediction()
      this.renderMoneyBackGuarantee()
      this.visibleHandler()
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
            let alt = (e.currentTarget as HTMLElement).getAttribute('alt')

            if (e.currentTarget && alt) {
              pushData(`exp_6__${alt.toLocaleLowerCase().split(' ').join('_')}`, alt, 'Click', 'Palm hand with icons')
            } else {
              pushData(
                'exp_6__locker_mechanics',
                'Locker mechanics',
                'Click',
                'To read the full report, you need to get access'
              )
            }

            $el('footer + .bg-violet-50 button')?.click()
          })
        })
      })
    })
  }

  addClickForGetMyPrediction() {
    waitForElement('.mx-auto > .flex.gap-4 > div.w-full button').then(i => {
      const btn = $el('.mx-auto > .flex.gap-4 > div.w-full button') as HTMLElement

      btn.addEventListener('click', e => {
        pushData('exp_6__get_my_prediction', 'Get My Prediction', 'Click', 'Content')
      })
    })
  }

  getGoalHandler(): string {
    const data = this.getParsedHintState() as HintState | null
    if (!data) return ''

    switch (data.wish) {
      case '1':
        this.goal = `Deep analysis of the relationships with your ${this.getRelationshipStatusHandler()} partner based on a unique birth chart.`
        break
      case '2':
        this.goal = `In-depth analysis of your health and vitality based on the unique patterns in your palm lines.`
        break
      case '3':
        this.goal = `In-depth analysis of your career and destiny based on the unique patterns in your palm lines.`
        break

      default:
        this.goal = `Deep analysis of the relationships with your ${this.getRelationshipStatusHandler()} partner based on a unique birth chart.`
        break
    }

    return this.goal
  }

  renderMoneyBackGuarantee() {
    waitForElement('main .mx-auto > .flex.gap-4 > ul.flex').then(i => {
      const сontainerElement = $el('main .mx-auto > .flex.gap-4 > ul.flex') as HTMLElement

      if (!$el('.money_back_guarantee')) {
        сontainerElement.insertAdjacentHTML(
          'beforebegin',
          moneyBackGuaranteeBlock(this.getTxtMoneyBackGuaranteeHandler())
        )
      }
    })
  }

  getTxtMoneyBackGuaranteeHandler(): string {
    const data = this.getParsedHintState() as HintState | null
    if (!data) return ''

    switch (data.wish) {
      case '1':
        this.txtMoneyBackGuarantee = `We are convinced that this report will provide you with a deeper understanding of your ${this.getRelationshipStatusHandler()} partner and suggest ways to enhance your relationship. With a track record of stellar customer reviews, we are fully prepared to refund your money if you find that this report does not deliver any value.`
        break
      case '2':
        this.txtMoneyBackGuarantee = `We are confident that this report will provide you with valuable insights into your health and vitality while offering practical suggestions to improve your overall well-being. With a track record of stellar customer reviews, we are fully prepared to refund your money if you find that this report does not deliver any value.`
        break
      case '3':
        this.txtMoneyBackGuarantee = `We are confident this report will provide valuable insights into your career and life's purpose, with actionable guidance to help you succeed. With a track record of stellar customer reviews, we are fully prepared to refund your money if you find that this report does not deliver any value.`
        break

      default:
        this.txtMoneyBackGuarantee = `We are convinced that this report will provide you with a deeper understanding of your ${this.getRelationshipStatusHandler()} partner and suggest ways to enhance your relationship. With a track record of stellar customer reviews, we are fully prepared to refund your money if you find that this report does not deliver any value.`
        break
    }

    return this.txtMoneyBackGuarantee
  }

  getRelationshipStatusHandler() {
    const data = this.getParsedHintState() as HintState | null
    if (!data) return ''

    switch (data.relationship) {
      case '1':
        this.relationshipStatus = `potential`
        break
      case '2':
        this.relationshipStatus = ``
        break

      default:
        this.relationshipStatus = ``
        break
    }

    return this.relationshipStatus
  }

  getParsedHintState(): Object | null {
    const hintState = localStorage.getItem('hint-state')
    if (hintState) {
      try {
        const data = JSON.parse(hintState)
        return data.state
      } catch (error) {
        console.error('Error parsing hint-state from localStorage', error)
        return null
      }
    }
    return null
  }

  visibleHandler() {
    waitForElement('.palm_reading_is_ready').then(i => {
      visibilityOfTime('.palm_reading_is_ready', 'exp_6__view__hand', 'Content', 'Palm hand with icons', 'View')
    })
    waitForElement('.locker_mechanics').then(i => {
      visibilityOfTime('.locker_mechanics', 'exp_6__view__content', 'Content', 'Content', 'View')
    })

    waitForElement('.money_back_guarantee').then(i => {
      visibilityOfTime(
        '.money_back_guarantee',
        'exp_6__view__money_back',
        'Content',
        '100% money-back guarantee',
        'View'
      )
    })
  }
}

waitForElement('body').then(element => {
  new NewSectionStructureAndLockerMechanics(device)
})
