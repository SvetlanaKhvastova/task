import { startLog, $el, $$el, waitForElement, pushData, clarityInterval, visibilityOfTime } from '../../../libraries'
import { heroVerA, heroVerB, heroVerC, stickyBlock } from './blocks'

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
    this.initAllFunc()
    this.observeMain()
  }

  initAllFunc() {
    if (window.location.href.match('paywall2')) {
      startLog({ name: 'Payment-Page-Improvements', dev: 'SKh' })
      console.log(this.device)
      clarityInterval('exp_paywall2')
      document.head.insertAdjacentHTML(
        'afterbegin',
        `<link class="crs_inter" href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">`
      )
      document.head.insertAdjacentHTML('beforeend', `<style class="crs_style">${mainStyle}</style>`)

      this.renderHeroSection()
      this.renderHeroBtn()
      this.handleClickHeroBtn()

      this.renderStickyBlock()
      this.renderStickyBtn()
      this.handleClickStickyBtn()

      this.handleVisibility()
      this.observeNewSection()
    }
  }

  renderHeroSection() {
    waitForElement('main > div > section:nth-child(2)').then(() => {
      let place = 'beforeend'
      if (this.device === 'mobile') {
        place = 'afterend'
      }
      if (!$el('.hero_section')) {
        $el('main > div > section:nth-child(2) > div >div:nth-child(1)').insertAdjacentHTML(place, heroVerB)
      }
    })
  }

  renderHeroBtn() {
    if (this.device === 'desktop') {
      waitForElement('.hero_section').then(() => {
        const btn = $el('main > div > section:nth-child(2) > div >div:nth-child(1) button')
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
        if (!$el('.hero_section')?.getAttribute('data-test')) {
          const btn = e.target.closest('.z-0')
          if (!btn) return

          const targetClass =
            e.target.closest('.ver_a') && !e.target.closest('.sticky_block')
              ? 'ver_1'
              : e.target.closest('.ver_b') && !e.target.closest('.sticky_block')
              ? 'ver_2'
              : e.target.closest('.ver_c') && !e.target.closest('.sticky_block')
              ? 'ver_3'
              : null

          if (targetClass) {
            console.log('hero_section')
            // pushData(
            //   `exp_screen_motivation_button_01_${targetClass}`,
            //   'Get My IQ Certificate Now!',
            //   'Button',
            //   'First screen Header'
            // )
          }
        }
        $el('.hero_section')?.setAttribute('data-test', '1')
        setTimeout(() => {
          if ($el('.hero_section')?.getAttribute('data-test')) {
            $el('.hero_section')?.removeAttribute('data-test')
          }
        }, 1000)
      })
    })
  }

  renderStickyBlock() {
    waitForElement('main').then(() => {
      let place = 'afterbegin'
      if (!$el('.sticky_block')) {
        $el('main').insertAdjacentHTML(place, stickyBlock)
      }
      if (this.device === 'desktop') {
        this.toggleStickyBlockVisibility('.hero_section')
      } else {
        this.toggleStickyBlockVisibility('.hero_section_content button')
      }
    })
  }

  renderStickyBtn() {
    waitForElement('.sticky_block').then(() => {
      const btn = $el('footer + div > button')
      const stickyBlock = $el('.sticky_block')
      if (!$el('.sticky_block button') && btn) {
        const closestVersion = 'Get My Investment Plan!'

        if (closestVersion) {
          btn.textContent = closestVersion
          stickyBlock.insertAdjacentElement('beforeend', btn)
        }
      }
    })
  }

  handleClickStickyBtn() {
    waitForElement('.sticky_block').then(() => {
      const container = $el('body')
      if (!container) return

      container.addEventListener('click', (e: any) => {
        if (!$el('.sticky_block')?.getAttribute('data-test')) {
          const btn = e.target.closest('.z-0')
          if (!btn) return

          const targetClass =
            e.target.closest('.sticky_block') && !e.target.closest('.ver_a')
              ? 'ver_1'
              : e.target.closest('.ver_b') && !e.target.closest('.ver_b')
              ? 'ver_2'
              : e.target.closest('.ver_c') && !e.target.closest('.ver_c')
              ? 'ver_3'
              : null

          if (targetClass) {
            console.log('sticky_block')
            // pushData(
            //   `exp_screen_motivation_button_01_${targetClass}`,
            //   'Get My IQ Certificate Now!',
            //   'Button',
            //   'First screen Header'
            // )
          }
        }
        $el('.sticky_block')?.setAttribute('data-test', '1')
        setTimeout(() => {
          if ($el('.sticky_block')?.getAttribute('data-test')) {
            $el('.sticky_block')?.removeAttribute('data-test')
          }
        }, 1000)
      })
    })
  }

  toggleStickyBlockVisibility(getItButtonsSelector: string) {
    waitForElement('#checkout-container').then(() => {
      waitForElement('.sticky_block').then(() => {
        const stickyButton = $el('.sticky_block') as HTMLElement
        const elemClose = $el('#checkout-container') as HTMLElement
        let getItButtons = $$el(getItButtonsSelector) as NodeListOf<HTMLElement>

        function isElementInViewport(el: HTMLElement): boolean {
          const rect = el.getBoundingClientRect()
          return (
            rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom > 0 &&
            rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
            rect.right > 0
          )
        }

        function checkVisibility() {
          let anyVisible = false

          if (isElementInViewport(elemClose)) {
            anyVisible = true
          }

          getItButtons.forEach(button => {
            if (isElementInViewport(button)) {
              anyVisible = true
            }
          })

          if (anyVisible) {
            stickyButton.style.display = 'none'
            if ($el('body').classList.contains('sticky_block_visible')) {
              $el('body').classList.remove('sticky_block_visible')
            }
          } else {
            stickyButton.style.display = 'flex'
            $el('body').classList.add('sticky_block_visible')
          }
        }

        checkVisibility()

        window.addEventListener('scroll', checkVisibility)
        window.addEventListener('resize', checkVisibility)
      })
    })
  }

  observeNewSection() {
    const observer = new MutationObserver(() => {
      if (!$el('.hero_section')) {
        this.renderHeroSection()
      }

      if (!$el('.stickyBlock')) {
        this.renderStickyBlock()
      }

      if (!$el('.sticky_block button')) {
        this.renderStickyBtn()
      }

      if (!$el('.hero_section_content button')) {
        this.renderHeroBtn()
      }
    })

    observer.observe($el('body'), { childList: true, subtree: true })
  }

  observeMain() {
    let observer = new MutationObserver(mutations => {
      for (let mutation of mutations) {
        for (let node of mutation.removedNodes) {
          if (!(node instanceof HTMLElement)) continue
          if (node.tagName === 'HEADER') {
            console.log(node)
            this.initAllFunc()
          }
        }
        for (let node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue
          if (node.tagName === 'HEADER') {
            console.log(node)
            $el('.hero_section')?.remove()
            $el('.stickyBlock')?.remove()
            $el('.crs_style')?.remove()
            $el('.crs_inter')?.remove()
          }
        }
      }
    })

    observer.observe($el('body'), { childList: true, subtree: true })
  }

  handleVisibility() {
    waitForElement('.hero_section').then(i => {
      // pushData('exp_screen_motivation_section_01_ver_1', 'Section', 'Visibility', 'First screen Header')
    })
  }
}

new exitIntentPopup(device)
