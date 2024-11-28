// @ts-ignore
import style from './style.css?raw'
import { log, pushData, waitEl, startLog, $el, visibilityOfTime, clarityInterval } from '../../libraries'

import { popup } from './blocks'

startLog({ name: 'Webinar popups', dev: 'YK' })
clarityInterval('webinar_popups')

pushData('exp_exit_intent_loaded', 'Loaded', 'success', 'Webinar popups')

class WebinarPopups {
  constructor() {
    this.init()
  }

  init() {
    document.body.insertAdjacentHTML('afterbegin', `<style>${style}</style>`)
    document.body.insertAdjacentHTML('beforeend', `<div class="crs_popup_wrapper"></div>`)
    $el('.crs_popup_wrapper').on('click', e => {
      if ((e.target as HTMLElement)!.classList.contains('crs_popup_wrapper')) {
        $el('.crs_popup_wrapper').removeClass('active')
        pushData(
          `exp_exit_intent_popup${this.checkPopup()}_close`,
          `Close popup through the background`,
          'click',
          `Popup #${this.checkPopup()}`
        )
      }
    })
    this.setTriggers()
  }

  async showPopup() {
    const popupShown = localStorage.getItem('popupShown')
    const currentTime = ($el('video').elements[0] as HTMLVideoElement).currentTime
    let step = currentTime < 25 * 60 ? 0 : currentTime < 50 * 60 ? 1 : currentTime < 70 * 60 ? 2 : 3
    if (popupShown && +popupShown === step) return
    $el('.crs_popup_wrapper').elements[0].innerHTML = popup(step)
    $el('.crs_popup_wrapper').addClass('active')
    localStorage.setItem('popupShown', step.toString())
    $el('.crs_popup_wrapper .crs_close').on('click', () => {
      $el('.crs_popup_wrapper').removeClass('active')
      pushData(`exp_exit_intent_popup${this.checkPopup()}_close`, `Close`, 'click', `Popup #${this.checkPopup()}`)
    })
    $el('button.crs_btn').on('click', () => {
      $el('.crs_popup_wrapper').removeClass('active')
      pushData(
        `exp_exit_intent_popup${this.checkPopup()}_click`,
        `Continue watching`,
        'click',
        `Popup #${this.checkPopup()}`
      )
    })
    $el('a.crs_btn').on('click', () => {
      pushData(
        `exp_exit_intent_popup${this.checkPopup()}_click`,
        `Click on link`,
        'click',
        `Popup #${this.checkPopup()}`
      )
    })
    this.setSlider()
    pushData(`exp_exit_intent_popup${this.checkPopup()}_view`, `View on screen`, 'view', `Popup #${this.checkPopup()}`)
  }

  setSlider() {
    $el('.crs_stories_nav span').on('click', function (e) {
      if (this.classList.contains('active')) return
      $el('.crs_stories_nav span').removeClass('active')
      this.classList.add('active')
      const index = Array.from(this.parentElement.children).indexOf(this)
      const elemPosition = $el('.crs_stories_content .crs_story').elements[index].getBoundingClientRect().left
      const blockPosition = $el('.crs_stories_content').elements[0].getBoundingClientRect().left
      const elemScrollPosition = blockPosition - elemPosition
      const blockScrollPosition = $el('.crs_stories_content').elements[0].scrollLeft
      $el('.crs_stories_content').elements[0].scrollTo({
        left: blockScrollPosition - elemScrollPosition,
        behavior: 'smooth'
      })
    })
  }

  setTriggers() {
    document.addEventListener('mouseout', async e => {
      // @ts-ignore
      const from = e.relatedTarget || e.toElement
      if (!from || from.nodeName === 'HTML') {
        const currentTime = ($el('video').elements[0] as HTMLVideoElement).currentTime
        if (currentTime === 0) return
        this.showPopup()
      }
    })

    document.addEventListener('visibilitychange', async () => {
      const currentTime = ($el('video').elements[0] as HTMLVideoElement).currentTime
      if (currentTime === 0) return
      if (document.visibilityState === 'visible') {
        this.showPopup()
      }
    })

    if (window.innerWidth < 768) {
      let lastTap = 0
      $el('.top_content_wrapper').on('touchend', async e => {
        const currentTime = new Date().getTime()
        const tapLength = currentTime - lastTap
        lastTap = currentTime
        if (tapLength < 500 && tapLength > 0) {
          e.preventDefault()
          this.showPopup()
        }
      })
    }
  }

  checkPopup(): number {
    if ($el('.crs_popup').elements.length === 0) return 0
    const int = ($el('.crs_popup').elements[0] as HTMLElement).dataset.interval
    if (int) return +int
    return 0
  }
}

new WebinarPopups()
