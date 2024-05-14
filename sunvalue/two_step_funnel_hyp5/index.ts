import { startLog, $el, $$el, waitForElement, pushData, clarityInterval, loadScriptsOrStyles } from '../../libraries'
import { newTitleStepsBlock } from './blocks'
import { svg, git } from './data'
// @ts-ignore
import mainStyle from './main.css?raw'

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class twoStepFunnelHypFive {
  device: 'mobile' | 'desktop'

  constructor(device) {
    this.device = device

    this.init()
  }

  init() {
    startLog({ name: 'Two-step funnel with generic copy and No Net Cost Solar', dev: 'SKh' })
    // clarityInterval('')
    document.head.insertAdjacentHTML('beforeend', `<style>${mainStyle}</style>`)
    this.renderNewTitleStepsBlock()
  }

  renderNewTitleStepsBlock() {
    if (!$el('.new_title_steps_block')) {
      $el('.progress-block').insertAdjacentHTML('afterend', newTitleStepsBlock)
    }
  }
}

new twoStepFunnelHypFive(device)
