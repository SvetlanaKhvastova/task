import {
  startLog,
  $el,
  $$el,
  waitForElement,
  pushData,
  clarityInterval,
  checkScrollSpeed,
  getCookies
} from '../../libraries'
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
    // clarityInterval('')
    document.head.insertAdjacentHTML('beforeend', `<style>${mainStyle}</style>`)

    this.renderHerosection()
  }

  renderHerosection() {
    waitForElement('#top > div.mx-auto.flex').then(() => {
      setTimeout(() => {
        if (!$el('.hero_section')) {
          $el('#top').insertAdjacentHTML('afterbegin', heroVerC)
          console.log(`object`)
        }
      }, 2000)
    })
  }
}

new exitIntentPopup(device)
