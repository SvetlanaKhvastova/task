import { startLog, $el, $$el, waitForElement, pushData, clarityInterval, loadScriptsOrStyles } from '../../libraries'
import {} from './blocks'
import { svg, git } from './data'
// @ts-ignore
import mainStyle from './main.css?raw'

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class blogPageHypSecond {
  device: 'mobile' | 'desktop'

  constructor(device) {
    this.device = device

    this.init()
  }

  init() {
    startLog({ name: 'AB test Blog pages', dev: 'SKh' })
    clarityInterval('exp_blog')
    document.head.insertAdjacentHTML('beforeend', `<style>${mainStyle}</style>`)
    this.changeTxtHeaderBanner()
    this.changeTxtAndLinkBtns()
    this.changeTxtAndLinkStickyBtn()
    this.changeTxtBloclNextStep()
  }
  changeTxtHeaderBanner() {
    waitForElement('.elementor-659 .elementor-element.elementor-element-c1c5677 .elementor-button-text').then(i => {
      $$el('.elementor-659 .elementor-element.elementor-element-c1c5677 .elementor-button-text').forEach(el => {
        if (el.closest('.elementor-button')) {
          el.closest('.elementor-button').addEventListener('click', (e: any) => {
            e.preventDefault()
            window.location.href = 'https://treblehealth.com/survey/'
          })
        }

        if (el.innerHTML !== 'Take the Tinnitus Quiz. <span>Start Now.</span>') {
          el.innerHTML = 'Take the Tinnitus Quiz. <span>Start Now.</span>'
        }
        el.querySelector('span').addEventListener('click', (e: any) => {
          e.preventDefault()
        })
      })
    })
  }
  changeTxtAndLinkBtns() {
    waitForElement('div.post .elementor-button-link').then(i => {
      $$el('div.post .elementor-button-link').forEach(link => {
        if (
          link.textContent !== 'Take the Tinnitus Quiz' &&
          !link.closest('.elementor-location-header') &&
          !link.closest('.elementor-popup-modal')
        ) {
          link.textContent = 'Take the Tinnitus Quiz'
        }
        if (
          !link.closest('.elementor-659 .elementor-element.elementor-element-e55687d') &&
          !link.closest('.elementor-popup-modal')
        ) {
          link.addEventListener('click', (e: any) => {
            e.preventDefault()
            window.location.href = 'https://treblehealth.com/survey/'
          })
        }
      })
    })
  }
  changeTxtAndLinkStickyBtn() {
    waitForElement('body .floating_button').then(i => {
      if ($el('body .floating_button a').textContent !== 'Take the Tinnitus Quiz') {
        $el('body .floating_button a').textContent = 'Take the Tinnitus Quiz'
      }
      $el('body .floating_button a').addEventListener('click', (e: any) => {
        e.preventDefault()
        window.location.href = 'https://treblehealth.com/survey/'
      })
    })
  }
  changeTxtBloclNextStep() {
    waitForElement('.elementor-12397 .elementor-element.elementor-element-1878e6ea').then(i => {
      let el = $el('.elementor-12397 .elementor-element.elementor-element-1878e6ea')
      if (
        el.querySelector('h3.elementor-heading-title') &&
        el.querySelector('h3.elementor-heading-title').textContent !== 'Next Step: Take the Tinnitus Quiz'
      ) {
        el.querySelector('h3.elementor-heading-title').textContent = 'Next Step: Take the Tinnitus Quiz'
      }
      if (
        el.querySelector('.elementor-icon-list-item:nth-child(3) .elementor-icon-list-text') &&
        el.querySelector('.elementor-icon-list-item:nth-child(3) .elementor-icon-list-text').innerHTML !==
          'Join thousands of people who have reduced their tinnitus after <br/> taking the tinnitus quiz.'
      ) {
        el.querySelector('.elementor-icon-list-item:nth-child(3) .elementor-icon-list-text').innerHTML =
          'Join thousands of people who have reduced their tinnitus after <br/> taking the tinnitus quiz.'
      }
    })
  }
}

waitForElement('.post-template-default').then(i => {
  setTimeout(() => {
    new blogPageHypSecond(device)
  }, 800)
})
