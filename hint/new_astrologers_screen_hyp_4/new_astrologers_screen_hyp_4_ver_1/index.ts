import { startLog, $el, $$el, waitForElement, visibilityOfTime, pushData, clarityInterval } from '../../../libraries'
import { newAstrologersScreenVerB, newAstrologersScreenVerC } from './blocks'
import { svg } from './data'
// @ts-ignore
import mainStyle from './main.css?raw'

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class NewAstrologersScreen {
  device: 'mobile' | 'desktop'
  lastPath: string
  storage: string

  constructor(device) {
    this.device = device
    this.lastPath = window.location.pathname
    this.storage = ''

    this.init()
  }

  init() {
    startLog({ name: 'New Astrologers Screen', dev: 'SKh' })
    clarityInterval('exp_astro_screen', 'variant_1')
    this.observeMain()
    this.loadFontsAndStyles()
    this.allFunctionsInitHandler()
  }

  loadFontsAndStyles() {
    if (!$el('.crs_inter_astrologers')) {
      document.head.insertAdjacentHTML(
        'afterbegin',
        `<link class="crs_inter_astrologers" href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">`
      )
    }

    if (!$el('.crs_style_astrologers')) {
      document.head.insertAdjacentHTML('beforeend', `<style class="crs_style_astrologers">${mainStyle}</style>`)
    }
  }

  // allFunctions
  allFunctionsInitHandler() {
    const body = $el('body')
    if (this.checkPage() === 'paywall') {
      $el('.new_btn_back')?.remove()
      if (body.classList.contains('subscription_plan_page')) {
        body.classList.remove('subscription_plan_page')
      }
    } else if (this.checkPage() === 'subscriptionPlan') {
      console.log(`subscriptionPlan`)
      body.classList.add('subscription_plan_page')
      let d = setInterval(() => {
        if ($el('.subscription_plan_page main')) {
          clearInterval(d)
          $el('.subscription_plan_page main').classList.add('is_hidden')
        }
      }, 300)

      if (!localStorage.getItem('newAstrologersScreen')) {
        if ($el('main')) {
          $el('main').style.display = 'none'
        }

        this.renderNewAstrologersScreenSection()
      }

      if (localStorage.getItem('newAstrologersScreen')) {
        this.renderNewBtnBack()
        let d = setInterval(() => {
          if ($el('.subscription_plan_page main.is_hidden')) {
            clearInterval(d)
            $el('.subscription_plan_page main').classList.remove('is_hidden')
          }
        }, 300)
      }
    } else {
      console.log(this.checkPage())
      $el('.new_btn_back')?.remove()
      $el('.new_astrologers_screen')?.remove()

      if (body.classList.contains('subscription_plan_page')) {
        body.classList.remove('subscription_plan_page')
      }
    }
  }

  // subscription-plan
  renderNewAstrologersScreenSection() {
    waitForElement('main').then(element => {
      const mainElement = element as HTMLElement
      if (!$el('.new_astrologers_screen')) {
        mainElement.insertAdjacentHTML('beforebegin', newAstrologersScreenVerB)
      }
    })
    this.clickNewContinueBtnHandler()
    this.clickRadioBtnsHandler()

    waitForElement('.new_astrologers_screen').then(element => {
      const mainElement = element as HTMLElement
      pushData('exp_new_astro_visibility_01', 'Screen view', 'View', 'palm readers')
    })
  }

  clickNewContinueBtnHandler() {
    waitForElement('[data-nextBtn]').then(element => {
      const buttons = $$el('[data-nextBtn]')
      const main = $el('.subscription_plan_page main')

      buttons.forEach(e => {
        e.addEventListener('click', () => {
          pushData('exp_new_astro_button_01', 'Continue', 'Click', 'palm readers')
          main.style.display = 'block'
          if (main.classList.contains('is_hidden')) {
            main.classList.remove('is_hidden')
          }
          $el('.new_astrologers_screen')?.remove()
          localStorage.setItem('newAstrologersScreen', 'yes')
          this.renderNewBtnBack()
        })
      })
    })
  }
  clickRadioBtnsHandler() {
    waitForElement('.radio_item label').then(element => {
      const labels = $$el('.radio_item label')
      labels.forEach(e => {
        e.addEventListener('click', label => {
          this.storage = label.currentTarget.previousElementSibling.getAttribute('value').trim()
          localStorage.setItem('newAstrologerValue', this.storage)
          pushData('exp_new_astro_button_06', this.storage, 'Click', 'palm readers')

          if ($el('.new_continue_btn')?.classList.contains('is_disabled')) {
            $el('.new_continue_btn')?.classList.remove('is_disabled')
          }
        })
      })
    })
  }
  renderNewBtnBack() {
    waitForElement('header button').then(element => {
      const mainElement = element as HTMLElement
      setTimeout(() => {
        if (!$el('.new_btn_back')) {
          mainElement.insertAdjacentHTML('beforebegin', `<div class="new_btn_back">${svg.arrowLeftHeaderIcon}</div>`)
        }
        this.clickNewBtnBackHandler()
      }, 500)
    })
  }
  clickNewBtnBackHandler() {
    waitForElement('.new_btn_back').then(element => {
      const backButton = element as HTMLElement
      const main = $el('.subscription_plan_page main')

      backButton.addEventListener('click', () => {
        pushData('exp_new_astro_button_02', 'Back', 'Click', 'palm readers')
        if (localStorage.getItem('newAstrologersScreen')) {
          localStorage.removeItem('newAstrologersScreen')
        }
        main.style.display = 'none'
        main.classList.add('is_hidden')

        this.renderNewAstrologersScreenSection()
        backButton.remove()
      })
    })
  }
  // initChooseAstrologer() {
  //   if (localStorage.getItem('newAstrologerValue')) {
  //     waitForElement('.subscription_plan_page .new_astrologers_screen.ver_c .astrologers_list').then(element => {
  //       $$el('.subscription_plan_page .new_astrologers_screen.ver_c .astrologers_list input').forEach(el => {
  //         console.log(el.value)
  //         if (el.value === localStorage.getItem('newAstrologerValue')) {
  //           el.checked = true
  //         }
  //       })
  //     })
  //   }
  // }

  // main
  // __________________________________________________________________________________________
  checkPage(): string {
    const url = window.location.href
    if (url.includes('paywall')) return 'paywall'
    if (url.includes('subscription-plan')) return 'subscriptionPlan'
    if (url.includes('email')) return 'email'
    return 'other'
  }

  observeMain() {
    let observer = new MutationObserver(mutations => {
      for (let mutation of mutations) {
        // console.log(mutation, `mutation>>>>>>>>>>>>>>>>`)
        if (window.location.pathname !== this.lastPath) {
          this.lastPath = window.location.pathname
          if (this.checkPage() === 'paywall') {
            this.allFunctionsInitHandler()
          }
          if (this.checkPage() === 'subscriptionPlan' && !$el('body').classList.contains('subscription_plan_page')) {
            this.allFunctionsInitHandler()
          }
          // this.allFunctionsInitHandler()
          // console.log(this.lastPath)
        }
        for (let node of mutation.removedNodes) {
          if (!(node instanceof HTMLElement)) continue
          if (node.tagName === 'MAIN' && this.checkPage() === 'email') {
            // console.log(node, `NODE!!!!!!!!!!!!!!!!!!!!`)
            this.allFunctionsInitHandler()
          }
        }
      }
    })

    observer.observe($el('body'), { childList: true, subtree: true })
  }
}

new NewAstrologersScreen(device)
