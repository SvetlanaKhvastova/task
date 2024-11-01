import { startLog, $el, $$el, waitForElement, pushData, clarityInterval, scrollToElement } from '../../libraries'
import { mainBenefitsBlock } from './blocks'
import { svg, txtObj } from './data'
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
    clarityInterval('exp_zenpet_ux2')

    if (!$el('.crs_font')) {
      document.head.insertAdjacentHTML(
        'afterbegin',
        `link class="crs_font" href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"`
      )
    }
    document.head.insertAdjacentHTML('beforeend', `<style>${mainStyle}</style>`)

    this.renderMainBenefitsBlock()

    if (this.device === 'mobile') {
      this.changeIconLearnMore()
      this.scrollToFAQ('.lp-tr--hero-section .lp-tr--learn-more-btn')
    }

    if (this.device === 'desktop') {
      this.renderLearnMoreBtnOnDesktop()
      this.scrollToFAQ('.new_learn_more_btn')
    }

    this.replaceFAQBlock()
    this.addEventsAccordion()
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

  renderLearnMoreBtnOnDesktop() {
    waitForElement('.lp-tr--hero-section .lp-tr--btn').then(i => {
      const сontainerElement = $el('.lp-tr--hero-section .lp-tr--btn') as HTMLElement

      if (!$el('.new_learn_more_btn')) {
        сontainerElement.insertAdjacentHTML(
          'afterend',
          `<div class="new_learn_more_btn">Learn more ${svg.newYellowIcon}</div>`
        )
      }
    })
  }

  scrollToFAQ(selector: string) {
    waitForElement(selector).then(i => {
      const btnLearnMore = $el(selector) as HTMLElement

      btnLearnMore.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        scrollToElement('.lp-tr--accordion-section .lp-tr--accordion-header', 0)
        if (selector === '.new_learn_more_btn') {
          pushData(
            'exp_zenpet_ux_learn_more_01',
            'Learn more',
            'Click',
            'Help Your Pet Stay zen - stress relief for every occasion'
          )
        }
      })
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

  addEventsAccordion() {
    waitForElement('.lp-tr--what-tick-accordion .card .btn').then(i => {})
    const btns = $$el('.lp-tr--what-tick-accordion .card .btn')
    btns?.forEach(btn => {
      btn.addEventListener('click', e => {
        const txt = e.target?.textContent?.trim()
        pushData('exp_zenpet_ux_item_01', txt, 'Accordion', 'Zenpatch is perfect')
      })
    })
  }
}

if (window.location.pathname.match('pages')) {
  new TopOfTheLP(device)
}
