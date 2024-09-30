import { startLog, $el, $$el, waitForElement, pushData, clarityInterval } from '../../../libraries'
import { newRedirectLinkVerFirst, newRedirectLinkVerSecond } from './blocks'
import { svg, git } from './data'
// @ts-ignore
import mainStyle from './main.css?raw'

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class AdultsVersion {
  device: 'mobile' | 'desktop'
  observer: null | MutationObserver

  constructor(device) {
    this.device = device
    this.observer = null

    this.init()
  }

  init() {
    startLog({ name: 'NatPat: Adults Version', dev: 'SKh' })
    clarityInterval('exp_adilt', 'variant_2')

    document.head.insertAdjacentHTML('beforeend', `<style class="crs_style">${mainStyle}</style>`)
    this.renderNewRedirectLink()
    this.fixesLocation()
    this.clickLinkHandler()
  }

  renderNewRedirectLink() {
    waitForElement('a.learn-now').then(i => {
      if (!$el('.new_redirect_link')) {
        $el('.learn-now').insertAdjacentHTML('afterend', newRedirectLinkVerSecond)
      }
    })
  }

  clickLinkHandler() {
    waitForElement('.new_redirect_link').then(i => {
      $el('.new_redirect_link a').addEventListener('click', e => {
        pushData('exp_adult_button_02', 'See the grownup version', 'Click', 'First screen')
      })
    })
  }

  fixesLocation() {
    waitForElement('.new_redirect_link').then(i => {
      $$el('.new_redirect_link a').forEach(item => {
        const newHref =
          window.location.pathname === '/'
            ? item.getAttribute('href')
            : window.location.pathname.split('/pages/buzzpatch')[0] + item.getAttribute('href')
        item.setAttribute('href', newHref)
      })
    })
  }
}

waitForElement('a.learn-now').then(i => {
  new AdultsVersion(device)
})
