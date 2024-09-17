import { startLog, $el, $$el, waitForElement, pushData, clarityInterval, visibilityOfTime } from '../../../libraries'
import { heroVerA, heroVerB, heroVerC } from './blocks'

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
    startLog({ name: 'Payment-Page-Improvements', dev: 'SKh' })
    console.log(this.device)
    // clarityInterval('exp_screen_motivation')
    document.head.insertAdjacentHTML(
      'afterbegin',
      `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">`
    )
    document.head.insertAdjacentHTML('beforeend', `<style>${mainStyle}</style>`)

    this.renderHerosection()
    this.renderHeroBtn()
    this.handleClickHeroBtn()
    this.observeHeroSection()
    this.handleVisibility()
  }

  renderHerosection() {
    waitForElement('main > div:nth-child(2)').then(() => {
      let place = 'beforeend'
      if (this.device === 'mobile') {
        place = 'afterend'
      }
      if (!$el('.hero_section')) {
        $el('main > div:nth-child(2) .mb-4').insertAdjacentHTML(place, heroVerC)
      }
    })
  }

  renderHeroBtn() {
    if (this.device === 'desktop') {
      waitForElement('.hero_section').then(() => {
        const btn = $el('main > div:nth-child(2) button')
        const heroSectionContent = $el('.hero_section_content')
        if (!$el('.hero_section_content button') && btn) {
          const closestVersion = 'Get My Investment Plan!'

          if (closestVersion) {
            btn.textContent = closestVersion
            heroSectionContent.insertAdjacentElement('beforeend', btn)
          }
        }
      })
    }
  }

  handleClickHeroBtn() {
    waitForElement('.hero_section').then(() => {
      const container = $el('body')
      if (!container) return

      container.addEventListener('click', (e: any) => {
        const btn = e.target.closest('.z-0')
        if (!btn) return

        const targetClass = e.target.closest('.ver_a')
          ? 'ver_1'
          : e.target.closest('.ver_b')
          ? 'ver_2'
          : e.target.closest('.ver_c')
          ? 'ver_3'
          : null

        if (targetClass) {
          pushData(
            `exp_screen_motivation_button_01_${targetClass}`,
            'Get My IQ Certificate Now!',
            'Button',
            'First screen Header'
          )
        }
      })
    })
  }

  observeHeroSection() {
    const observer = new MutationObserver(() => {
      if (!$el('.hero_section')) {
        this.renderHerosection()
      }

      if (!$el('.hero_section_content button')) {
        this.renderHeroBtn()
      }
    })

    observer.observe($el('body'), { childList: true, subtree: true })
  }

  handleVisibility() {
    waitForElement('.hero_section').then(i => {
      pushData('exp_screen_motivation_section_01_ver_1', 'Section', 'Visibility', 'First screen Header')
    })
  }
}

new exitIntentPopup(device)
