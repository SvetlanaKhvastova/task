// @ts-ignore
import style from './style.css?raw'
import {
  log,
  pushData,
  waitEl,
  startLog,
  loadScriptsOrStyles,
  visibilityOfTime,
  clarityInterval,
  waitForElement
} from '../../libraries'

import { $el } from '../../libraries/libraries2'

import {
  mainBlock,
  reviewsBlock,
  bonusBlock,
  hostBlock,
  videoBlock,
  trainingForBlock,
  trustPilotBlock,
  faqBlock,
  lastCtaBlock,
  footerBlock,
  popupBlock,
  videoPopupBLock,
  selectTime,
  blockersPopupBlock,
  blockersPopupContentBlock,
  exitPopup
} from './blocks'
import { tns } from 'tiny-slider/src/tiny-slider'
import { blockers, reviews } from './data'

declare global {
  interface Window {
    _wq: any[]
    tns: any
    Wistia: any
  }
}

const listStyles = [
  'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css',
  'https://fast.wistia.com/assets/external/E-v1.js'
]

loadScriptsOrStyles(listStyles)

startLog({ name: 'Opt in page V2', dev: 'SKH' })

class OptInPageV2 {
  device: 'mobile' | 'desktop'
  constructor() {
    this.device = window.innerWidth < 768 ? 'mobile' : 'desktop'
    waitEl('body', () => {
      $el('head').elements[0].insertAdjacentHTML(
        'afterbegin',
        `link class="crs_font" href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"`
      )

      $el('body').elements[0].insertAdjacentHTML(
        'afterbegin',
        /* html */ `<style class="crs_style_v2">${style}</style>`
      )
      this.init()
    })
  }

  init() {
    this.addBlocks()
    this.setActions()
    this.setEvents()

    this.setSlider()
    this.intentPopupTriggers()

  }

  addBlocks() {
    const root = $el('.crs_landing').elements[0]
    if (root && root.nextElementSibling && root.nextElementSibling.tagName.toLowerCase() === 'style') {
      root.nextElementSibling.remove()
    }
    root.classList.add('crs_style_v2')
    root.innerHTML = ''
    root.insertAdjacentHTML('afterbegin', mainBlock)
    root.insertAdjacentHTML('beforeend', reviewsBlock)
    root.insertAdjacentHTML('beforeend', bonusBlock)
    root.insertAdjacentHTML('beforeend', hostBlock)

    // var1
    root.insertAdjacentHTML('beforeend', videoBlock)
    root.insertAdjacentHTML('beforeend', trainingForBlock)
    root.insertAdjacentHTML('beforeend', trustPilotBlock)
    root.insertAdjacentHTML('beforeend', faqBlock)
    root.insertAdjacentHTML('beforeend', lastCtaBlock)

    root.insertAdjacentHTML('beforeend', footerBlock)
    root.insertAdjacentHTML('beforeend', popupBlock)
    root.insertAdjacentHTML('beforeend', videoPopupBLock)
    root.insertAdjacentHTML('beforeend', blockersPopupBlock)
    root.insertAdjacentHTML('beforeend', exitPopup)

    // if (window.location.href.includes('dropservicing.net')) {
    //   $el('#main_block h1').elements[0].innerHTML =
    //     'The 4 Steps to Start Your Online Business in 2024 and Achieve Financial Freedom Goals'
    // }
  }

  setActions() {
    function closeBlockersPopup() {
      $el('.crs_blockers_popup').elements[0].classList.remove('active')

      setTimeout(() => {
        $el('.crs_blockers_content').elements[0].innerHTML = ''
      }, 500)
    }

    $el('.btn_see_details').on('click', function (e) {
      const target = e.currentTarget as HTMLElement | null
      if (!target) return

      $el('.crs_blockers_popup').elements[0].classList.add('active')

      const id = target.getAttribute('data-id')
      const container = $el('.crs_blockers_content').elements[0]
      const popupContentElements = blockers.find(block => block.id === parseInt(id || ''))

      if (popupContentElements) {
        const { icon, title, text, button, review } = popupContentElements?.popupContent || {}

        container.insertAdjacentHTML(
          'beforeend',
          blockersPopupContentBlock(
            review.reviewerPhoto,
            review.reviewerName,
            review.reviewText,
            review.stars,
            icon,
            title,
            text,
            button
          )
        )

        $el('.crs_blockers_content .cta').on('click', function (e) {
          const target = e.currentTarget as HTMLElement | null
          if (!target) return

          closeBlockersPopup()
          setTimeout(() => {
            $el('.crs_popup_form').elements[0].classList.add('active')
          }, 800)
        })
      }
    })

    $el('[data-closeblokers]').on('click', function (e) {
      if (!(e.target as Element).closest('.crs_blockers_content')) {
        closeBlockersPopup()
      }
    })

    $el('[data-closeexit]').on('click', function (e) {
      if (!(e.target as Element).closest('.crs_main_info') && !(e.target as Element).closest('.crs_stories')) {
        $el('.crs_exit_popup').elements[0].classList.remove('active')
      }
    })

    $el('.crs_exit_popup .cta').on('click', function (e) {
      $el('.crs_exit_popup').elements[0].classList.remove('active')
      setTimeout(() => {
        $el('.crs_popup_form').elements[0].classList.add('active')
      }, 800)
    })

    $el('.no_btn').on('click', function (e) {
      $el('.crs_exit_popup').elements[0].classList.remove('active')
    })

    $el('.inputs2').on('click', 'li', function () {
      if (!this.classList.contains('selected')) {
        this.closest('.inputs2').querySelector('.selected').classList.remove('selected')
        this.classList.add('selected')
        const schedule = this.getAttribute('data-schedule')
        pushData('exp_optin_popup_cta_time', `Select time ${schedule}`, 'click', 'Popup after click on CTA')
      }
    })

    $el('form').on('submit', async function (e) {
      e.preventDefault()
      const webinarType = window.location.href.includes('dropservicingblueprint') ? 1 : 2
      const name = this.querySelector('input[name="name"]').value
      const email = this.querySelector('input[name="email"]').value
      let check = true
      if (!name || name.trim() === '') {
        this.querySelector('input[name="name"]').closest('label').classList.add('error')
        check = false
      }

      if (!email || email.trim() === '' || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        this.querySelector('input[name="email"]').closest('label').classList.add('error')
        check = false
      }

      if (!check) {
        return
      }

      if (this.closest('#main_block')) {
        pushData(
          `exp_optin_fs_button_${!this.querySelector('.inputs2').classList.contains('active') ? 'step_1' : 'step_2'}`,
          'Grab Your FREE Seat Now',
          'click',
          `First screen form ${!this.querySelector('.inputs2').classList.contains('active') ? 'step 1' : 'step 2'}`
        )
      } else {
        pushData(
          `exp_optin_popup_cta_button_${
            !this.querySelector('.inputs2').classList.contains('active') ? 'step_1' : 'step_2'
          }`,
          'Grab Your FREE Seat Now',
          'click',
          `Popup after click on CTA ${
            !this.querySelector('.inputs2').classList.contains('active') ? 'step 1' : 'step 2'
          }`
        )
      }

      const GMT = new Date().getTimezoneOffset() / 60
      const timeZone = `GMT${GMT > 0 ? '-' : '+'}${Math.abs(GMT)}`
      if (!this.querySelector('.inputs2').classList.contains('active')) {
        try {
          const schedule = await fetch('https://conversionrate.top/api/dropservicing/get-schedules', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              webinarId: window.innerWidth > 768 ? (webinarType === 1 ? 74 : 73) : webinarType === 1 ? 75 : 72,
              timezone: timeZone
            })
          }).then(res => res.json())
          console.log(schedule)
          console.log(this)
          this.querySelector('.inputs1').style.display = 'none'
          this.querySelector('.inputs2').innerHTML = selectTime(schedule.webinar.schedules, schedule.webinar.timezone)
          this.querySelector('.inputs2').classList.add('active')
        } catch (error) {
          console.log(error)
        }
      } else {
        const schedule = $el('.inputs2 .selected').elements[0].getAttribute('data-schedule')
        fetch('https://conversionrate.top/api/dropservicing/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            webinarId: window.innerWidth > 768 ? (webinarType === 1 ? 74 : 73) : webinarType === 1 ? 75 : 72,
            name: name,
            email: email,
            schedule: schedule
          })
        })
          .then(res => res.json())
          .then(data => {
            window.location.href = data.user.thank_you_url
          })
      }
    })

    $el('form input').on('input', function () {
      this.closest('label').classList.remove('error')
    })

    $el('input[name="name"]').on('change', function () {
      const mainLoc = this.closest('#main_block') ? true : false
      if (mainLoc) {
        pushData('exp_optin_fs_name', 'Enter your name', 'input', 'First screen form')
      } else {
        pushData('exp_optin_popup_cta_name', 'Enter your name', 'input', 'Popup after click on CTA')
      }
    })

    $el('input[name="email"]').on('change', function () {
      const mainLoc = this.closest('#main_block') ? true : false
      if (mainLoc) {
        pushData('exp_optin_fs_email', 'Enter email address', 'input', 'First screen form')
      } else {
        pushData('exp_optin_popup_cta_email', 'Enter email address', 'input', 'Popup after click on CTA')
      }
    })

    $el('input[name="email"]').on('focus', function () {
      if ($el('.name_label').elements[0].classList.contains('is_hidden')) {
        $el('.name_label').elements[0].classList.remove('is_hidden')
      }
    })

    $el('.question').on('click', function () {
      const text = this.innerText
      if (this.classList.contains('active')) {
        this.classList.remove('active')
        pushData('exp_optin_faq_close', `Close question. ${text}`, 'click', 'Frequently asked questions')
        return
      }
      $el('.question.active').removeClass('active')
      this.classList.toggle('active')
      pushData('exp_optin_faq_open', `Open question. ${text}`, 'click', 'Frequently asked questions')
    })

    $el('.cta.pop').on('click', function () {
      console.log(`.cta.pop`)
      if ($el('.crs_video_popup').elements[0].classList.contains('active')) {
        $el('.crs_video_popup .video *:not(.crs_close)').elements.forEach(el => el.remove())
      }
      $el('.crs_video_popup').elements[0].classList.remove('active')
      $el('.crs_popup_form').elements[0].classList.add('active')
      if (this.closest('#last_cta')) {
        pushData('exp_optin_future_cta', 'Join the exclusive training', 'click', 'Your Future Starts Here')
      }
      if (this.closest('#training_for')) {
        pushData('exp_optin_who_cta', 'Join The FREE Training Now', 'click', 'Who is the Training for')
      }
      if (this.closest('#host_block')) {
        pushData('exp_optin_host_cta', 'Unlock Dylan’s Formula for Free ', 'click', 'Your Host: Dylan Sydney')
      }
      if (this.closest('#bonus_block')) {
        pushData('exp_optin_bonuses_cta', 'Grab Your FREE Seat Now', 'click', 'Exclusive Bonuses')
      }
      if (this.closest('.crs_video_popup')) {
        pushData('exp_optin_popup_review_cta', 'Grab Your FREE Seat Now', 'click', 'Popup after review')
      }
      if (this.closest('#main_block')) {
        pushData('exp_optin_fs_button_mobile', 'Grab Your FREE Seat Now', 'click', 'First screen form')
      }
    })

    $el('[data-closeform]').on('click', function (e) {
      if (!(e.target as Element).closest('.bonus') && !(e.target as Element).closest('.crs_form')) {
        $el('.crs_popup_form').elements[0].classList.remove('active')
        ;($el('.crs_popup_form .inputs1').elements[0] as HTMLElement).style.display = 'block'
        $el('.crs_popup_form .inputs2').removeClass('active')
      }
    })

    $el('#base_review .slide').on('click', function () {
      const text = this.querySelector('.slide>p').textContent
      const videoId = this.getAttribute('data-video')

      // var 1
      const videoBlock = $el(`.video_slide[data-video="${videoId}"] .video`).elements[0].cloneNode(true)
      $el('.crs_video_popup .video').elements[0].appendChild(videoBlock)

      $el('.crs_video_popup').elements[0].classList.add('active')
      pushData('exp_optin_why_join_review', `Open review. ${text}`, 'click', 'Why Join This Webinar')

      // var 1
      $el('.crs_video_popup .wistia_embed').on('click', function () {
        pushData('exp_optin_popup_review_video', `Play video ${text}`, 'click', 'Popup after review')
      })

      // var 2
      // $el(
      //   '.crs_video_popup .video'
      // ).elements[0].innerHTML = /* html */ `<div class="crs_close"></div><div class="wistia_embed wistia_async_${videoId}"></div>`
      // $el('.crs_video_popup .crs_close').on('click', function () {
      //   $el('.crs_video_popup').elements[0].classList.remove('active')
      // })

      // window._wq.push({
      //   id: videoId,
      //   onReady: function (video) {
      //     video.bind('play', function () {
      //       pushData('exp_optin_popup_review_video', `Play video ${text}`, 'click', 'Popup after review')
      //     })
      //   }
      // })
    })

    // var 1
    $el('.crs_video_popup .crs_close').on('click', function () {
      $el('.crs_video_popup .video *:not(.crs_close)').elements.forEach(el => el.remove())
      $el('.crs_video_popup').elements[0].classList.remove('active')
    })

    const baseReviewSlider = tns({
      container: '#base_review ul',
      slideBy: 1,
      loop: false,
      navPosition: 'bottom',
      //@ts-ignore
      controlsPosition: 'bottom',
      mouseDrag: false,
      gutter: 30,
      responsive: {
        0: {
          items: 1,
          controls: false,
          autoHeight: true
        },
        768: {
          items: 3,
          controls: true,
          nav: false
        }
      }
    })

    // var 1
    const videoSlider = tns({
      container: '#video_block ul',
      items: 1,
      slideBy: 1,
      //@ts-ignore
      controlsPosition: 'bottom',
      loop: false,
      navPosition: 'bottom',
      gutter: 0,
      center: true,
      responsive: {
        0: {
          edgePadding: 16,
          controls: false
        },
        768: {
          edgePadding: 200,
          controls: true
        }
      }
    })
    setTimeout(() => {
      if (baseReviewSlider.getInfo().navItems) {
        ;(baseReviewSlider.getInfo().navItems as HTMLCollection)[1].classList.add('tns-nav-near')
      }
    }, 500)

    baseReviewSlider.events.on('indexChanged', function (info) {
      const navItems = info.navItems as HTMLCollection
      Array.from(navItems).forEach(nav => nav.classList.remove('tns-nav-near'))
      navItems[info.index - 1]?.classList.add('tns-nav-near')
      navItems[info.index + 1]?.classList.add('tns-nav-near')
    })

    videoSlider.getInfo().slideItems[0].classList.add('tns-current')
    ;(videoSlider.getInfo().navItems as HTMLCollection)[1].classList.add('tns-nav-near')

    videoSlider.events.on('indexChanged', function (info) {
      const slideItems = info.slideItems
      const navItems = info.navItems as HTMLCollection
      Array.from(navItems).forEach(nav => nav.classList.remove('tns-nav-near'))
      Array.from(slideItems).forEach(slide => slide.classList.remove('tns-current'))
      navItems[info.index - 1]?.classList.add('tns-nav-near')
      navItems[info.index + 1]?.classList.add('tns-nav-near')
      const currentSlide = slideItems[info.index]
      currentSlide.classList.add('tns-current')
    })

    tns({
      container: '#trust_pilot ul',
      items: 3,
      slideBy: 1,
      controls: true,
      //@ts-ignore
      controlsPosition: 'bottom',
      loop: false,
      navPosition: 'bottom',
      mouseDrag: true,
      gutter: 20,
      autoHeight: true,
      responsive: {
        0: {
          items: 1,
          controls: false
        },
        768: {
          items: 3,
          controls: true
        }
      }
    })

    const videoApi = setInterval(() => {
      if (window.Wistia) {
        clearInterval(videoApi)
        window._wq = window._wq || []
        reviews.forEach(review => {
          window._wq.push({
            id: review.videoId,
            onReady: function (video) {
              video.bind('play', function () {
                if (video.container.closest('.video_slide')) {
                  pushData(
                    'exp_optin_hear_video',
                    `Video ${video.data.media.name}`,
                    'click',
                    'Hear from Our Participants'
                  )
                }
              })
            }
          })
        })
      }
    }, 500)
  }

  setEvents() {
    visibilityOfTime('.crs_video_popup', 'exp_optin_popup_review_view', 'Popup after review')
    visibilityOfTime('.crs_popup_form', 'exp_optin_popup_cta_view', 'Popup after click on CTA')
    visibilityOfTime('#base_review', 'exp_optin_why_join_view', 'Why Join This Webinar')
    visibilityOfTime('#bonus_block', 'exp_optin_bonuses_view', 'Exclusive Bonuses')
    visibilityOfTime('#host_block', 'exp_optin_host_view', 'Your Host: Dylan Sydney')
    visibilityOfTime('#video_block', 'exp_optin_hear_view', 'Hear from Our Participants')
    visibilityOfTime('#training_for', 'exp_optin_who_view', 'Who is the Training for')
    visibilityOfTime('#trust_pilot', 'exp_optin_trustscore_view', 'TrustScore')
    visibilityOfTime('#faq_block', 'exp_optin_faq_view', 'Frequently asked questions')
    visibilityOfTime('#last_cta', 'exp_optin_future_view', 'Your Future Starts Here')
    visibilityOfTime('.crs_popup_form .inputs2', 'exp_optin_popup_cta_time_view_step2', 'Popup after click on CTA')
    visibilityOfTime('#main_block .inputs2', 'exp_optin_main_form_view_step2', 'First screen form')
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

  intentPopupTriggers() {
    if (sessionStorage.getItem('intentPopupTriggers')) return
    
    if (this.device === 'desktop') {
      // cursor moved out of the page frame
      document.addEventListener('mouseout', event => {
        if (!event.relatedTarget) {
          sessionStorage.setItem('intentPopupTriggers', 'true')
          $el('.crs_exit_popup').elements[0].classList.add('active')
        }
      })
    }
  }
}

new OptInPageV2()
