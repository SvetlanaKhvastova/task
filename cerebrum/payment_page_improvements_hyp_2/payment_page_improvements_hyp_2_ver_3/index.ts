import { startLog, $el, $$el, waitForElement, pushData, clarityInterval, visibilityOfTime } from '../../../libraries'
import { heroVerA, heroVerB, heroVerC, leftPartPaymentBlock, moneyBackGuaranteeBlock } from './blocks'

// @ts-ignore
import mainStyle from './main.css?raw'

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class paymentPageImprovements {
  device: 'mobile' | 'desktop'

  constructor(device) {
    this.device = device
    this.init()
  }

  init() {
    startLog({ name: 'Payment-Page-Improvements Hyp 2', dev: 'SKh' })
    clarityInterval('exp_improve_payment', 'variant_3')
    if (!$el('.crs_style')) {
      document.head.insertAdjacentHTML(
        'afterbegin',
        `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">`
      )
      document.head.insertAdjacentHTML('beforeend', `<style class="crs_style">${mainStyle}</style>`)
    }

    // HYP 1
    // this.renderHerosection()
    // this.renderHeroBtn()
    // this.handleClickHeroBtn()
    // this.observeHeroSection()
    // this.handleVisibility()
    // HYP 2
    this.renderLeftPartPaymentBlock()
    this.chanheTxtCount()
    this.observeTxtCount()
    this.renderMoneyBackGuaranteeBlock()
    this.observePaymentSection()
  }

  // HYP 2 _________________________________________________________________________________________________________________________________
  renderLeftPartPaymentBlock() {
    waitForElement('#payment > div').then(() => {
      const txt = $el('#payment .bg-blue-100 .text-inherit b').textContent
      if (!$el('.left_part_payment_block')) {
        $el('#payment > div').insertAdjacentHTML('afterbegin', leftPartPaymentBlock(txt))
      }
    })
  }
  chanheTxtCount() {
    waitForElement('#payment .bg-blue-100 .text-inherit b').then(() => {
      waitForElement('.left_part_payment_block .count_var').then(() => {
        const txt = $el('#payment .bg-blue-100 .text-inherit b').textContent
        $el('.left_part_payment_block .count_var').textContent = txt
      })
    })
  }

  renderMoneyBackGuaranteeBlock() {
    waitForElement('#payment span.mb-4').then(() => {
      if (!$el('.money_back_guarantee_block')) {
        $el('#payment span.mb-4').insertAdjacentHTML('afterend', moneyBackGuaranteeBlock)
      }
    })
  }
  observeTxtCount() {
    if (!$el('#payment .subpixel-antialiased')) return
    const observer = new MutationObserver(() => {
      this.chanheTxtCount()
    })

    observer.observe($el('#payment .subpixel-antialiased'), { childList: true, subtree: true })
  }
  observePaymentSection() {
    const observer = new MutationObserver(() => {
      if (!$el('.crs_style')) {
        document.head.insertAdjacentHTML(
          'afterbegin',
          `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">`
        )
        document.head.insertAdjacentHTML('beforeend', `<style class="crs_style">${mainStyle}</style>`)
      }

      // HYP 2
      if (!$el('.left_part_payment_block')) {
        this.renderLeftPartPaymentBlock()
        this.observeTxtCount()
      }
      if (!$el('.money_back_guarantee_block')) {
        this.renderMoneyBackGuaranteeBlock()
      }
    })

    observer.observe($el('body'), { childList: true, subtree: true })
  }

  // HYP 1 _________________________________________________________________________________________________________________________________
  // renderHerosection() {
  //   waitForElement('#top > div.mx-auto.flex').then(() => {
  //     if (!$el('.hero_section')) {
  //       $el('#top').insertAdjacentHTML('afterbegin', heroVerB)
  //     }
  //   })
  // }

  // renderHeroBtn() {
  //   waitForElement('.hero_section').then(() => {
  //     const btn = $el('#top div.mx-auto.flex button')
  //     const heroSectionContent = $el('.hero_section_content')
  //     if (!$el('.hero_section_content button') && btn) {
  //       const closestVersion =
  //         heroSectionContent.closest('.ver_c') || heroSectionContent.closest('.ver_b')
  //           ? 'Get My IQ Score Now!'
  //           : heroSectionContent.closest('.ver_a')
  //           ? 'Get My IQ Certificate Now!'
  //           : ''

  //       if (closestVersion) {
  //         btn.textContent = closestVersion
  //         heroSectionContent.insertAdjacentElement('beforeend', btn)
  //       }
  //     }
  //   })
  // }

  // handleClickHeroBtn() {
  //   waitForElement('.hero_section').then(() => {
  //     const container = $el('body')
  //     if (!container) return

  //     container.addEventListener('click', (e: any) => {
  //       const btn = e.target.closest('.z-0')
  //       if (!btn) return

  //       const targetClass = e.target.closest('.ver_a')
  //         ? 'ver_1'
  //         : e.target.closest('.ver_b')
  //         ? 'ver_2'
  //         : e.target.closest('.ver_c')
  //         ? 'ver_3'
  //         : null

  //       if (targetClass) {
  //         pushData(
  //           `exp_screen_motivation_button_01_${targetClass}`,
  //           'Get My IQ Certificate Now!',
  //           'Button',
  //           'First screen Header'
  //         )
  //       }
  //     })
  //   })
  // }

  // observeHeroSection() {
  //   const observer = new MutationObserver(() => {
  //     if (!$el('.crs_style')) {
  //       document.head.insertAdjacentHTML(
  //         'afterbegin',
  //         `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">`
  //       )
  //       document.head.insertAdjacentHTML('beforeend', `<style class="crs_style">${mainStyle}</style>`)
  //     }

  //     // HYP 1
  //     if (!$el('.hero_section')) {
  //       this.renderHerosection()
  //     }

  //     if (!$el('.hero_section_content button')) {
  //       this.renderHeroBtn()
  //     }
  //   })

  //   observer.observe($el('body'), { childList: true, subtree: true })
  // }

  handleVisibility() {
    waitForElement('.hero_section').then(i => {
      pushData('exp_screen_motivation_section_01_ver_2', 'Section', 'Visibility', 'First screen Header')
    })
  }
}

new paymentPageImprovements(device)
