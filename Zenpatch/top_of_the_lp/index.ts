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
import { mainBenefitsBlock, newTooltipBlock } from './blocks'
import { git, svg, txtObj } from './data'
// @ts-ignore
import mainStyle from './main.css?raw'

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class TopOfTheLP {
  device: 'mobile' | 'desktop'

  constructor(device) {
    this.device = device

    this.init()
  }

  init() {
    startLog({ name: 'Top of the LP', dev: 'SKh' })
    // clarityInterval('')

    if (!$el('.crs_font')) {
      document.head.insertAdjacentHTML(
        'afterbegin',
        `link class="crs_font" href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"`
      )
    }
    document.head.insertAdjacentHTML('beforeend', `<style>${mainStyle}</style>`)

    this.renderMainBenefitsBlock()
    this.changeIconLearnMore()
    this.replaceFAQBlock()
    this.newTooltipBlock()
  }

  renderMainBenefitsBlock() {
    waitForElement('.lp-tr--hero-section .lp-tr--main-title').then(i => {
      const сontainerElement = $el('.lp-tr--hero-section .lp-tr--main-title') as HTMLElement

      if (!$el('.main_benefits_block')) {
        сontainerElement.insertAdjacentHTML('beforebegin', mainBenefitsBlock(txtObj.mainBenefits))
      }
    })
  }

  changeIconLearnMore() {
    waitForElement('.lp-tr--hero-section .lp-tr--learn-more-btn').then(i => {
      const сontainerElement = $el('.lp-tr--hero-section .lp-tr--learn-more-btn') as HTMLElement

      if (!$el('.new_yellow_icon')) {
        сontainerElement.insertAdjacentHTML('beforeend', `${svg.newYellowIcon}`)
      }
    })
  }

  replaceFAQBlock() {
    waitForElement('.lp-tr--formula').then(i => {
      waitForElement('.lp-tr--accordion-section').then(i => {
        const сontainerElement = $el('.lp-tr--formula') as HTMLElement
        const faqBlock = $el('.lp-tr--accordion-section') as HTMLElement

        if (!$el('.lp-tr--accordion-section + .lp-tr--formula')) {
          сontainerElement.insertAdjacentElement('beforebegin', faqBlock)
        }
      })
    })
  }

  newTooltipBlock() {
    waitForElement('.lp-tr--formula .col-md-6:not(.lp-pet-zen--padding)').then(i => {
      const сontainerElement = $el('.lp-tr--formula .col-md-6:not(.lp-pet-zen--padding)') as HTMLElement

      if (!$el('.new_tooltip_block')) {
        сontainerElement.insertAdjacentHTML('afterbegin', newTooltipBlock(txtObj.arrTooltip))
      }
    })
  }
}

if (window.location.pathname.match('pages')) {
  new TopOfTheLP(device)
}
