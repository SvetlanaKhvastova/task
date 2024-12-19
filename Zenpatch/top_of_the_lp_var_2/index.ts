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
    startLog({ name: 'Top of the LP Var 2', dev: 'SKh' })
    clarityInterval('exp_zenpet_ux2')

    if (!$el('.crs_font')) {
      document.head.insertAdjacentHTML(
        'afterbegin',
        `link class="crs_font" href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"`
      )
    }
    document.head.insertAdjacentHTML('beforeend', `<style>${mainStyle}</style>`)

    this.renderMainBenefitsBlock()

    if (window.innerWidth >= 768) {
      console.log(this.device, window.innerWidth)
      this.renderLearnMoreBtnOnDesktop()
      this.scrollToFAQ('.new_learn_more_btn')
    } else {
      console.log(this.device, window.innerWidth)
      this.changeIconLearnMore()
      this.scrollToFAQ('.lp-tr--hero-section .lp-tr--learn-more-btn')
      $el('.new_learn_more_btn')?.remove()
      this.toggleStickyHeader()
      this.handleClickGetNow()
    }

    this.addEventsAccordion()
    this.renderBtnGetZenToAccordionBody()
    this.scrollToFromNewGetZenStickersNowBtns('.new_get_zen_stickers_now')
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
      let offsetTop = -60
      if (this.device === 'mobile') {
        offsetTop = 110
      }

      btnLearnMore.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        scrollToElement('.lp-tr--why-kids-love-np-section', offsetTop)
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

  renderBtnGetZenToAccordionBody() {
    waitForElement('.lp-tr--what-tick-accordion .card-body').then(i => {
      const сontainerElements = $$el('.lp-tr--what-tick-accordion .card-body') as NodeListOf<HTMLElement>

      сontainerElements.forEach(el => {
        if (!el.querySelector('.new_get_zen_stickers_now')) {
          el.insertAdjacentHTML('beforeend', `<div class="new_get_zen_stickers_now">Get Zen Stickers Now</div>`)
        }
      })
    })
  }

  scrollToFromNewGetZenStickersNowBtns(selector: string) {
    waitForElement(selector).then(i => {
      const newGetZenStickersNowBtns = $$el(selector) as NodeListOf<HTMLElement>

      newGetZenStickersNowBtns.forEach((btn, idx) => {
        btn.addEventListener('click', e => {
          e.preventDefault()
          e.stopPropagation()
          scrollToElement('#lptrPurchase', 0)
          pushData(
            'exp_zenpet_ux_new_get_zen_stickers_now_01',
            `Get Zen Stickers Now ${idx + 1}`,
            'Click',
            'ZenPatch is Perfect If Your Pet...'
          )
        })
      })
    })
  }

  toggleStickyHeader() {
    waitForElement('.lp-tr--hero-section .lp-tr--btn a').then(i => {
      const button = $el('.lp-tr--hero-section .lp-tr--btn a') as HTMLElement
      const header = $el('header') as HTMLElement
      const purchaseSection = $el('.lp-tr--purchase') as HTMLElement

      function handleScroll() {
        const buttonRect = button.getBoundingClientRect()
        const purchaseRect = purchaseSection.getBoundingClientRect()

        if (purchaseRect.top <= window.innerHeight && purchaseRect.bottom >= 0) {
          header.classList.remove('sticky')
          header.classList.add('hidden')
        } else if (buttonRect.top <= 0) {
          header.classList.add('sticky')
          header.classList.remove('hidden')
        } else {
          header.classList.remove('sticky')
          header.classList.remove('hidden')
        }
      }

      window.addEventListener('scroll', handleScroll)
      handleScroll()
    })
  }

  handleClickGetNow() {
    waitForElement('.scroll-to-checkout').then(i => {
      $$el('.scroll-to-checkout').forEach(el => {
        el.addEventListener('click', (e: any) => {
          e.preventDefault()
          e.stopPropagation()
          $('html, body').stop()
          let coverageElem: HTMLElement = $el('#lptrPurchase')

          let headerOffset: number = 0
          let scroll = true
          let s = setInterval(async () => {
            if (
              coverageElem.getBoundingClientRect().top > headerOffset - 1 &&
              coverageElem.getBoundingClientRect().top <= headerOffset + 1
            ) {
              clearInterval(s)
            } else {
              if (scroll) {
                scroll = false
                scroll = await checkScrollPosition(headerOffset, coverageElem)
              }
            }
          }, 100)
        })
      })
    })
  }
}

if (window.location.pathname.match('pages')) {
  new TopOfTheLP(device)
}
