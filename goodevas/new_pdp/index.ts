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
import { comparisonTableBlock, mainBenefitsBlock } from './blocks'
import { svg, git, translations } from './data'
// @ts-ignore
import mainStyle from './main.css?raw'

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class NewPdp {
  device: 'mobile' | 'desktop'
  observer: null | MutationObserver

  constructor(device) {
    this.device = device
    this.observer = null

    this.init()
  }

  init() {
    startLog({ name: 'PDP v2 Major Release', dev: 'SKh' })
    // clarityInterval('')

    document.head.insertAdjacentHTML(
      'beforeend',
      `<link class="crs_font" href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">`
    )
    document.head.insertAdjacentHTML('beforeend', `<style class="crs_style">${mainStyle}</style>`)

    this.renderMainBenefits()
    this.renderComparisonTable()
  }

  renderMainBenefits() {
    waitForElement('.product-single__meta').then(i => {
      const сontainerElement = $el('.product-single__meta') as HTMLElement

      if (!$el('.main_benefits_block')) {
        сontainerElement.insertAdjacentHTML('beforeend', mainBenefitsBlock(translations['en'].mainBenefits))
      }
    })
  }

  renderComparisonTable() {
    waitForElement('.main_benefits_block').then(i => {
      const сontainerElement = $el('.main_benefits_block') as HTMLElement

      if (!$el('.comparison_table_block')) {
        сontainerElement.insertAdjacentHTML('afterend', comparisonTableBlock(translations['en'].comparisonTable))
      }
    })
  }
}

waitForElement('.page-content--product').then(i => {
  new NewPdp(device)
})
