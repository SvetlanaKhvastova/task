import { startLog, $el, $$el, waitForElement, pushData, clarityInterval, visibilityOfTime } from '../../libraries'
import {} from './blocks'
import { svg, git } from './data'
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
    startLog({ name: 'Opt in page improvements V.2', dev: 'SKh' })
    // clarityInterval('')

    document.head.insertAdjacentHTML('beforeend', `<style class="crs_style">${mainStyle}</style>`)
  }
}

waitForElement('.page-content--product').then(i => {
  new NewPdp(device)
})
