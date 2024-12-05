// @ts-ignore
import style from './style.css?raw'
import {
  log,
  pushData,
  waitEl,
  startLog,
  loadScriptsOrStyles,
  clarityInterval,
  $$el,
  waitForElement,
  scrollToHtmlElement
} from '../../libraries'

import { $el, visibilityOfTime } from '../../libraries/libraries2'

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
    clarityInterval('exp_opt_in_v2', 'variant_1')

    if (!this.getRandomNumberForSeatsLeft()) {
      this.generateAndStoreRandomNumberForSeatsLeft()
    }

    this.addBlocks()
    this.setActions()
    this.setEvents()

    this.setInnerTxtRandomNumberForSeatsLeft()
    this.setSliderStories('#main_block')
    this.setSliderStories('.crs_exit_popup')
    this.intentPopupTriggers()
  }

  getRandomNumberForSeatsLeft() {
    return sessionStorage.getItem('randomNumber')
  }

  generateAndStoreRandomNumberForSeatsLeft() {
    const randomNumber = Math.floor(Math.random() * 5) + 3 // Генерируем число от 3 до 7
    sessionStorage.setItem('randomNumber', randomNumber.toString())
  }

  setInnerTxtRandomNumberForSeatsLeft() {
    waitForElement('.seats_left_value').then(i => {
      const randomNumber = this.getRandomNumberForSeatsLeft()
      let seatsLeft = $$el('.seats_left_value') as NodeListOf<HTMLElement>

      if (randomNumber && seatsLeft) {
        seatsLeft.forEach(el => {
          el.textContent = randomNumber
        })
      }
    })
  }

  addBlocks() {
    const root = $el('.crs_landing').elements[0]
    if (root && root.nextElementSibling && root.nextElementSibling.tagName.toLowerCase() === 'style') {
      root.nextElementSibling.remove()
    }
    root.innerHTML = ''
    console.log(`ROOT`, root)
    root.classList.add('crs_v2')
    root.insertAdjacentHTML('afterbegin', mainBlock)
    root.insertAdjacentHTML('beforeend', reviewsBlock)
    root.insertAdjacentHTML('beforeend', bonusBlock)
    root.insertAdjacentHTML('beforeend', hostBlock)
    root.insertAdjacentHTML('beforeend', videoBlock)

    if (this.device === 'desktop') {
      root.insertAdjacentHTML('beforeend', trainingForBlock)
      root.insertAdjacentHTML('beforeend', trustPilotBlock)
      root.insertAdjacentHTML('beforeend', faqBlock)
      root.insertAdjacentHTML('beforeend', lastCtaBlock)
    }

    root.insertAdjacentHTML('beforeend', footerBlock)
    root.insertAdjacentHTML('beforeend', popupBlock)
    root.insertAdjacentHTML('beforeend', blockersPopupBlock)
    root.insertAdjacentHTML('beforeend', exitPopup)
    root.insertAdjacentHTML('beforeend', videoPopupBLock)
  }

  setActions() {
    function addScrollListener() {
      const videoWrappers = $$el('.txt_container')
      videoWrappers.forEach(wrapper => {
        wrapper.addEventListener('scroll', () => handleScroll(wrapper))
      })
    }

    function handleScroll(wrapper) {
      const scrollTop = wrapper.scrollTop
      const scrollHeight = wrapper.scrollHeight
      const clientHeight = wrapper.clientHeight

      if (scrollTop + clientHeight < scrollHeight) {
        console.log(`remove scrolling-up`, wrapper)
        wrapper.classList.remove('scrolling-up')
      } else {
        console.log(`add scrolling-up`, wrapper)
        wrapper.classList.add('scrolling-up')
      }
    }
    function closeBlockersPopup() {
      $el('.crs_blockers_popup').elements[0].classList.remove('active')

      setTimeout(() => {
        $el('.crs_blockers_content').elements[0].innerHTML = ''
        $el('.sticky_btn_wrapper')?.elements[0]?.remove()
      }, 300)
    }

    if (this.device === 'desktop' && $el('#blokers .blokers_list').elements[0]) {
      const baseBlokersSlider = tns({
        container: '#blokers .blokers_list',
        slideBy: 1,
        items: 1,
        loop: false,
        mouseDrag: true,
        gutter: 24,
        autoHeight: true,
        controls: true,
        nav: false,
        responsive: {
          0: {
            items: 2.2
          },
          1100: {
            items: 2.2
          },
          1290: {
            items: 3.25
          }
        }
      })

      let previousIndex = baseBlokersSlider.getInfo().index

      baseBlokersSlider.events.on('indexChanged', function (info) {
        const currentIndex = info.index
        if (currentIndex > previousIndex) {
          pushData(
            'exp_opt_in_v2__slider__right',
            'Change slides. Right',
            'click',
            'What’s stopping you from achieving your financial and lifestyle goals?'
          )
        } else if (currentIndex < previousIndex) {
          pushData(
            'exp_opt_in_v2__slider__left',
            'Change slides. Left',
            'click',
            'What’s stopping you from achieving your financial and lifestyle goals?'
          )
        }
        previousIndex = currentIndex
      })
    }

    $el('.btn_see_details').on('click', function (e) {
      const target = e.currentTarget as HTMLElement | null
      if (!target) return
      ;($el('body').elements[0] as HTMLElement).style.overflow = 'hidden'

      $el('.crs_blockers_popup').elements[0].classList.add('active')

      const id = target.getAttribute('data-id')
      const blockersPopup = $el('.crs_blockers_popup').elements[0]
      const container = $el('.crs_blockers_content').elements[0]
      const popupContentElements = blockers.find(block => block.id === parseInt(id || ''))
      const popupName = popupContentElements?.popupContent.title

      pushData(
        'exp_opt_in_v2__slider__open',
        `See details. ${popupName}`,
        'click',
        'What’s stopping you from achieving your financial and lifestyle goals?'
      )

      if (window.innerWidth < 768) {
        console.log(`MOB`)
        blockersPopup.insertAdjacentHTML(
          'beforeend',
          `<div class="sticky_btn_wrapper"><button class="cta pop">Yes! Get Access Now!</button></div>`
        )
      }

      if (popupContentElements) {
        const { icon, title, text, button, video, review } = popupContentElements?.popupContent || {}

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
            button,
            video
          )
        )
        waitForElement('.crs_blockers_content .info_wrapper').then(el => {
          pushData('exp_opt_in_v2__popup_det__view', 'Popup', 'view', `Popup. ${popupName}`)
        })

        $el('.crs_blockers_popup .cta').on('click', function (e) {
          const target = e.currentTarget as HTMLElement | null
          if (!target) return

          pushData('exp_opt_in_v2__popup_det__cta', 'Yes! Get Access Now!', 'click', `Popup. ${popupName}`)

          closeBlockersPopup()
          setTimeout(() => {
            $el('.crs_popup_form').elements[0].classList.add('active')
            visibilityOfTime(
              '.crs_popup_form.active .inputs1',
              'exp_opt_in_v2__p_form__1__view',
              'Popup. Access Your Exclusive Online Training. Step 1',
              'Popup'
            )
          }, 800)
        })

        addScrollListener()
      }
    })

    $el('[data-closeblokers]').on('click', function (e) {
      if (!(e.target as Element).closest('.crs_blockers_content')) {
        closeBlockersPopup()
        ;($el('body').elements[0] as HTMLElement).style.overflow = 'auto'
      }
    })

    $el('.show_more_block').on('click', function (e) {
      const target = e.currentTarget as HTMLElement | null
      if (!target) return

      target.classList.toggle('is_open')

      const block = target.previousElementSibling
      const spanElement = target.querySelector('span')

      if (block) {
        block.classList.toggle('is_open')
      }

      if (spanElement && !target.classList.contains('is_open')) {
        spanElement.textContent = 'Show more options'
        scrollToHtmlElement($$el('.blokers_item')[3], 24)
      } else {
        if (spanElement) {
          spanElement.textContent = 'Show less options'
        }
      }
    })

    $el('[data-closeexit]').on('click', function (e) {
      if (!(e.target as Element).closest('.crs_main_info') && !(e.target as Element).closest('.crs_stories')) {
        ;($el('body').elements[0] as HTMLElement).style.overflow = 'auto'
        $el('.crs_exit_popup').elements[0].classList.remove('active')
      }
    })

    $el('.crs_exit_popup .cta').on('click', function (e) {
      pushData('exp_opt_in_v2__p_exit__yes', 'Yes, I want free training & bonuses', 'click', 'Popup. Exit-intent')
      $el('.crs_exit_popup').elements[0].classList.remove('active')
      visibilityOfTime(
        '.crs_popup_form.active .inputs1',
        'exp_opt_in_v2__p_form__1__view',
        'Popup. Access Your Exclusive Online Training. Step 1',
        'Popup'
      )
      setTimeout(() => {
        $el('.crs_popup_form').elements[0].classList.add('active')
      }, 800)
    })

    $el('.no_btn').on('click', function (e) {
      pushData('exp_opt_in_v2__p_exit__no', `No, I'll miss out`, 'click', 'Popup. Exit-intent')
      ;($el('body').elements[0] as HTMLElement).style.overflow = 'auto'
      $el('.crs_exit_popup').elements[0].classList.remove('active')
    })

    $el('.inputs2').on('click', 'li', function () {
      if (!this.classList.contains('selected')) {
        this.closest('.inputs2').querySelector('.selected').classList.remove('selected')
        this.classList.add('selected')
        const schedule = this.getAttribute('data-schedule')
        pushData(
          'exp_opt_in_v2__p_form__2__time',
          `Input. Time. ${schedule}`,
          'click',
          'Popup. Access Your Exclusive Online Training. Step 2'
        )
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
          `exp_opt_in_v2__p_form__${
            !this.querySelector('.inputs2').classList.contains('active') ? '1__get' : '2__select'
          }`,
          `${!this.querySelector('.inputs2').classList.contains('active') ? 'Get free training' : 'Select a Time'}`,
          'click',
          `${
            !this.querySelector('.inputs2').classList.contains('active')
              ? 'Popup. Access Your Exclusive Online Training. Step 1'
              : 'Popup. Access Your Exclusive Online Training. Step 2'
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
          pushData(
            'exp_opt_in_v2__p_form__2__view',
            'Popup',
            'view',
            'Popup. Access Your Exclusive Online Training. Step 2'
          )
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
        pushData(
          'exp_opt_in_v2__p_form__1__name',
          'Input. Enter your name',
          'click',
          'Popup. Access Your Exclusive Online Training. Step 1'
        )
      }
    })

    $el('input[name="email"]').on('change', function () {
      const mainLoc = this.closest('#main_block') ? true : false
      if (mainLoc) {
        pushData('exp_optin_fs_email', 'Enter email address', 'input', 'First screen form')
      } else {
        pushData(
          'exp_opt_in_v2__p_form__1__email',
          'Input. Enter email address',
          'click',
          'Popup. Access Your Exclusive Online Training. Step 1'
        )
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
      ;($el('body').elements[0] as HTMLElement).style.overflow = 'hidden'
      console.log(`.cta.pop`)
      if ($el('.crs_video_popup')?.elements[0]?.classList.contains('active')) {
        $el('.crs_video_popup .video *:not(.crs_close)').elements.forEach(el => el.remove())
      }
      $el('.crs_video_popup')?.elements[0]?.classList.remove('active')
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
        pushData('exp_opt_in_v2__fs__cta', 'Yes! Get Access Now!', 'click', 'First screen')
      }

      visibilityOfTime(
        '.crs_popup_form.active',
        'exp_opt_in_v2__p_form__1__view',
        'Popup. Access Your Exclusive Online Training. Step 1',
        'Popup'
      )
    })

    $el('[data-closeform]').on('click', function (e) {
      if (!(e.target as Element).closest('.bonus') && !(e.target as Element).closest('.crs_form')) {
        ;($el('body').elements[0] as HTMLElement).style.overflow = 'auto'
        $el('.crs_popup_form').elements[0].classList.remove('active')
        ;($el('.crs_popup_form .inputs1').elements[0] as HTMLElement).style.display = 'block'
        $el('.crs_popup_form .inputs2').removeClass('active')

        if (!sessionStorage.getItem('intentPopupTriggers')) {
          setTimeout(() => {
            sessionStorage.setItem('intentPopupTriggers', 'true')
            $el('.crs_exit_popup').elements[0].classList.add('active')
            ;($el('body').elements[0] as HTMLElement).style.overflow = 'hidden'
            pushData('exp_opt_in_v2__p_exit__view', 'Popup', 'view', 'Popup. Exit-intent')
          }, 400)
        }
      }
    })

    $el('#base_review .slide').on('click', function () {
      const text = this.querySelector('.slide>p').textContent
      const videoId = this.getAttribute('data-video')

      // var 1
      const videoBlock = $el(`.video_slide[data-video="${videoId}"] .video`).elements[0].cloneNode(true)
      console.log(videoBlock, videoId, `videoBlock`)
      $el('.crs_video_popup .video').elements[0].appendChild(videoBlock)

      $el('.crs_video_popup')?.elements[0]?.classList.add('active')
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

    if (this.device === 'mobile') {
      if ($el('#base_review ul').elements[0]) {
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
              items: 1.25,
              gutter: 16,
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
      }
    }

    // var 1
    if (this.device === 'desktop') {
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
    }

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
    visibilityOfTime('#base_review', 'exp_optin_why_join_view', 'Why Join This Webinar')
    visibilityOfTime('#bonus_block', 'exp_optin_bonuses_view', 'Exclusive Bonuses')
    visibilityOfTime('#host_block', 'exp_optin_host_view', 'Your Host: Dylan Sydney')
    visibilityOfTime('#video_block', 'exp_optin_hear_view', 'Hear from Our Participants')
    visibilityOfTime('#training_for', 'exp_optin_who_view', 'Who is the Training for')
    visibilityOfTime('#trust_pilot', 'exp_optin_trustscore_view', 'TrustScore')
    visibilityOfTime('#faq_block', 'exp_optin_faq_view', 'Frequently asked questions')
    visibilityOfTime('#last_cta', 'exp_optin_future_view', 'Your Future Starts Here')
    visibilityOfTime('#main_block .inputs2', 'exp_optin_main_form_view_step2', 'First screen form')
  }

  setSliderStories(sliderContainer) {
    $el(`${sliderContainer} .crs_stories_nav span`).on('click', function (e) {
      if (this.classList.contains('active')) return

      $el(`${sliderContainer} .crs_stories_nav span`).removeClass('active')
      this.classList.add('active')
      const index = Array.from(this.parentElement.children).indexOf(this)
      const elemPosition = $el(`${sliderContainer} .crs_stories_content .crs_story`).elements[
        index
      ].getBoundingClientRect().left
      const blockPosition = $el(`${sliderContainer} .crs_stories_content`).elements[0].getBoundingClientRect().left
      const elemScrollPosition = blockPosition - elemPosition
      const blockScrollPosition = $el(`${sliderContainer} .crs_stories_content`).elements[0].scrollLeft
      $el(`${sliderContainer} .crs_stories_content`).elements[0].scrollTo({
        left: blockScrollPosition - elemScrollPosition,
        behavior: 'smooth'
      })
    })
  }

  intentPopupTriggers() {
    if (sessionStorage.getItem('intentPopupTriggers')) return

    if (this.device === 'desktop') {
      // On desktop only: Mouse exit from current tab
      document.addEventListener('mouseout', event => {
        if (
          !event.relatedTarget &&
          !sessionStorage.getItem('intentPopupTriggers') &&
          !$el('.crs_popup_form.active').elements[0]
        ) {
          console.log(`mouseout`)
          this.showExitPopup()
        }
      })
    }
  }

  showExitPopup() {
    sessionStorage.setItem('intentPopupTriggers', 'true')
    ;($el('body').elements[0] as HTMLElement).style.overflow = 'hidden'
    $el('.crs_exit_popup').elements[0].classList.add('active')
    pushData('exp_opt_in_v2__p_exit__view', 'Popup', 'view', 'Popup. Exit-intent')
  }
}

waitForElement('.crs_landing').then(i => {
  new OptInPageV2()
})
