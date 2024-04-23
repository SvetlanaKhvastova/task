import {
  startLog,
  $el,
  $$el,
  waitForElement,
  visibilityOfTime,
  pushData,
  clarityInterval,
  loadScriptsOrStyles
} from '../../libraries'
// @ts-ignore
import mainStyle from './main.css?raw'
import { loaderBlock, lastStepsWrapper, reviewsBlock } from './blocks'
import { git, svg } from './data'

startLog({ name: 'Contact info imrovement', dev: 'SKh' })
clarityInterval('exp_improve_contact')

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class contactInfoImrovement {
  device: 'mobile' | 'desktop'
  constructor(device) {
    this.device = device
    this.init()
  }
  init() {
    document.head.insertAdjacentHTML('beforeend', `<style>${mainStyle}</style>`)
    this.renderNewFormStep()
    this.initLoaderStep()
    this.initSliderReviews()
    this.clickInputs()
    this.clickContinueBtn()
    this.clickSeeMyResultsBtn()
    this.clickGoogleSignInBtn()
    this.visibleHandler()
    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    script.async = true
    document.head.appendChild(script)
  }

  initLoaderStep() {
    $$el('#edit-what-is-your-family-s-approximate-yearly-household-income- label').forEach(el => {
      el.addEventListener('click', (e: any) => {
        console.log(`#edit-what-is-your-family-s-approximate-yearly-household-income- label`, e.target)
        setTimeout(() => {
          $el('.dialog-off-canvas-main-canvas')?.classList.add('is_loader')
          $el('.dialog-off-canvas-main-canvas')?.classList.add('is_loader_active')
          $el('section.form-wrapper.webform-card[data-title="What is your contact info?"]')?.classList.add('is_loader')
          this.renderNewLoaderBlock()
          this.createLoader()
          this.renderReviewsBlock()
          this.changeLogoImg()
        }, 300)
      })
    })
  }

  renderNewFormStep() {
    waitForElement('section.form-wrapper.webform-card[data-title="What is your contact info?"]').then(i => {
      if (!$el('.last_steps_wrapper')) {
        $el(
          'section.form-wrapper.webform-card[data-title="What is your contact info?"] .webform-card-wrapper'
        ).insertAdjacentHTML('afterbegin', lastStepsWrapper)
      }
    })

    waitForElement('.email_name_box').then(i => {
      const emailField = $el('.form-item-email-address')
      const emailFieldLabel = $el('.form-item-email-address label:not(.error)')
      const firstNameField = $el('.form-item-first-name')
      const firstNameFieldLabel = $el('.form-item-first-name label:not(.error)')
      const firstNameFieldInput = $el('#edit-first-name')

      let lastNameFieldInput = $el('.form-item-last-name #edit-last-name')
      if (firstNameFieldLabel.textContent !== 'First Name') {
        firstNameFieldLabel.textContent = 'First Name'
      }
      if (emailFieldLabel.textContent !== 'Email') {
        emailFieldLabel.textContent = 'Email'
      }
      if (lastNameFieldInput.value !== 'CRO test') {
        lastNameFieldInput.value = 'CRO test'
      }
      if (firstNameFieldInput.placeholder !== 'John') {
        firstNameFieldInput.placeholder = 'John'
      }
      $el('#continueValidationBtn').insertAdjacentElement('beforebegin', firstNameField)
      $el('#continueValidationBtn').insertAdjacentElement('beforebegin', emailField)
      // benefits
      let benefitsBox = $el('.benefits')
      let benefitsTitle = $el('.benefits > div > p')
      if (benefitsTitle.textContent !== 'What you’ll get:') {
        benefitsTitle.textContent = 'What you’ll get:'
      }
      $el('.email_name_box').insertAdjacentElement('beforeend', benefitsBox)
    })

    waitForElement('.phone_box').then(i => {
      let phoneField = $el('.form-type-tel')
      let phoneFieldLabel = $el('.form-type-tel label:not(.error)')
      let phoneFieldInput = $el('#edit-mobile-number')

      if (phoneFieldLabel.textContent !== 'Mobile phone number') {
        phoneFieldLabel.textContent = 'Mobile phone number'
      }
      if (phoneFieldInput.placeholder !== '(___) ___-____') {
        phoneFieldInput.placeholder = '(___) ___-____'
      }
      $el('.phone_box #seeMyResultsBtn').insertAdjacentElement('beforebegin', phoneField)
    })
  }

  renderNewLoaderBlock() {
    // edit-what-is-your-contact-info
    waitForElement('section.form-wrapper.webform-card[data-title="What is your contact info?"]').then(i => {
      const liElements = $$el('.loading-data li')
      const texts = Array.from(liElements, li => li.textContent)
      if (!$el('.new_loader_block')) {
        $el('section.form-wrapper.webform-card[data-title="What is your contact info?"]').insertAdjacentHTML(
          'beforebegin',
          loaderBlock(texts)
        )
      }
    })
  }
  createLoader() {
    const duration = 12000 // 12 seconds
    const frameDuration = 1000 / 60 // 60 FPS
    const totalFrames = Math.round(duration / frameDuration)
    let frame = 0

    waitForElement('.new_loader_block').then(i => {
      const loader = $el('.new_loader_block')
      const loaderCover = $el('.loader_cover')
      const loaderCoverFill = $el('.loader_cover_fill')
      const percentage = $el('.percentage')

      const radius = loaderCover.r.baseVal.value
      const circumference = radius * 2 * Math.PI
      loaderCoverFill.style.strokeDasharray = `${circumference} ${circumference}`
      loaderCoverFill.style.strokeDashoffset = `${circumference}`

      const setProgress = percent => {
        const offset = circumference - (percent / 100) * circumference
        loaderCoverFill.style.strokeDashoffset = offset
        percentage.textContent = `${Math.round(percent)}%`
      }

      const animate = () => {
        const progress = (frame / totalFrames) * 100
        setProgress(progress)

        if (progress >= 100) {
          loader.style.display = 'none'
          if (
            $el('section.form-wrapper.webform-card[data-title="What is your contact info?"]') &&
            $el('section.form-wrapper.webform-card[data-title="What is your contact info?"]').classList.contains(
              'is_loader'
            )
          ) {
            $el('section.form-wrapper.webform-card[data-title="What is your contact info?"]').classList.remove(
              'is_loader'
            )
          }
          if ($el('.dialog-off-canvas-main-canvas')?.classList.contains('is_loader_active')) {
            $el('.dialog-off-canvas-main-canvas')?.classList.remove('is_loader_active')
          }
          if (
            $el('.dialog-off-canvas-main-canvas') &&
            !$el('.dialog-off-canvas-main-canvas').classList.contains('is_loader')
          ) {
            $el('.dialog-off-canvas-main-canvas').classList.add('is_loader')
          }
          this.renderReviewsBlock()
        } else if (frame < totalFrames) {
          frame++
          requestAnimationFrame(animate)
        }
      }
      animate()
      // Запуск анимации текста загрузки
      const paragraphs = Array.from($$el('.loading_txt_wrapper p'))
      this.animateLoadingText(paragraphs)
    })
  }
  animateLoadingText(paragraphs: string | any[]) {
    let currentIndex = 0
    let intervalId: number | NodeJS.Timeout | null = null

    const startAnimation = () => {
      // Показать первый элемент
      paragraphs[currentIndex].style.display = 'block'
      currentIndex++

      // Начать интервал после первого периода ожидания
      intervalId = setInterval(() => {
        // Скрыть предыдущий элемент
        paragraphs[currentIndex - 1].style.display = 'none'

        // Показать следующий элемент, если он существует
        if (currentIndex < paragraphs.length) {
          paragraphs[currentIndex].style.display = 'block'
        }

        // Остановить интервал, если достигнут конец
        if (currentIndex >= paragraphs.length) {
          paragraphs[currentIndex - 1].style.display = 'block'
          clearInterval(intervalId as unknown as number)
        }

        currentIndex++
      }, 12000 / paragraphs.length) // время на один элемент
    }

    // Начать анимацию
    startAnimation()
  }
  changeLogoImg() {
    if (
      $el('.dialog-off-canvas-main-canvas.is_loader .navbar-header .logo img') &&
      $el('.dialog-off-canvas-main-canvas.is_loader .navbar-header .logo img').src !==
        '/sites/default/files/inline-images/GrantMe_Colour_Full_Logo_2X_0.png'
    ) {
      $el('.dialog-off-canvas-main-canvas.is_loader .navbar-header .logo img').src =
        '/sites/default/files/inline-images/GrantMe_Colour_Full_Logo_2X_0.png'
    }
  }

  // SliderReviews
  renderReviewsBlock() {
    if (!$el('.new_reviews_block') && $el('.testimonials')) {
      $el('.testimonials').insertAdjacentHTML('afterbegin', reviewsBlock)
    }
  }
  initSliderReviews() {
    loadScriptsOrStyles([
      'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js'
    ]).then(async () => {
      let s = setInterval(() => {
        if (typeof jQuery('.new_reviews_list').slick === 'function' && $el('.new_reviews_list')) {
          clearInterval(s)
          let slidesToShowDesktop = 3.92
          let slidesToShowMobile = 1

          let slider = jQuery('.new_reviews_list')
            .on('init', function () {
              jQuery(this).css('visibility', 'visible')
            })
            .slick({
              slidesToShow: slidesToShowDesktop,
              slidesToScroll: 1,
              initialSlide: 0,
              adaptiveHeight: true,
              autoplay: true,
              autoplaySpeed: 2000,
              prevArrow: `<div class="prev_btn slider_arrow">${svg.arrPrev}</div>`,
              nextArrow: `<div class="next_btn slider_arrow">${svg.arrNext}</div>`,
              responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: slidesToShowMobile,
                    slidesToScroll: 1
                  }
                }
              ]
            })

          // Клонируем последний слайд и добавляем его в начало слайдера
          let d = setInterval(() => {
            if (typeof $ === 'function') {
              clearInterval(d)
              let lastSlide = $('.new_reviews_list').find('.slick-slide').last().clone()
              $('.new_reviews_list').slick('slickAdd', lastSlide)
            }
          }, 300)

          slider.on('swipe', function (event, slick, direction) {
            pushData('exp_improve_contact_swipe_01', direction, 'Swipe slider', `Contact info Step 1 Review`)
          })
          $$el('.slider_arrow').forEach(el => {
            el.addEventListener('click', (i: { currentTarget: { classList: { contains: (arg0: string) => any } } }) => {
              let arrowsTitle: string | null = null
              if (i.currentTarget.classList.contains('prev_btn')) {
                arrowsTitle = 'left'
              } else if (i.currentTarget.classList.contains('next_btn')) {
                arrowsTitle = 'right'
              }
              pushData('exp_improve_contact_arrows_01', arrowsTitle || '', 'Arrows', `Contact info Step 1 Review`)
            })
          })
        }
      }, 400)
    })
  }
  // GoogleSignIn
  clickGoogleSignInBtn() {
    window.onSignIn = function (res: any) {
      pushData('exp_improve_contact_button_03', 'Google', 'Button', 'Your results are ready! Step 2')
      let parts = res.credential.split('.')
      let user_info = JSON.parse(atob(parts[1]))
      console.log(user_info)
      let fNameUser = user_info.given_name
      let emailUser = user_info.email

      if ($el('#edit-first-name')) {
        $el('#edit-first-name').value = fNameUser
      }
      if ($el('#edit-email-address')) {
        $el('#edit-email-address').value = emailUser
      }
      setTimeout(() => {
        if ($el('#edit-first-name').value !== '' && $el('#edit-email-address').value !== '') {
          $el('.email_name_box').classList.add('is_hidden')
          if ($el('.phone_box').classList.contains('is_hidden')) {
            $el('.phone_box').classList.remove('is_hidden')
          }
          if (!$el('.new_reviews_block').classList.contains('is_hidden')) {
            $el('.new_reviews_block').classList.add('is_hidden')
          }
        }
      }, 500)
    }
  }
  //click on ----> Continue | SeeMyResults | input edit-first-name | input edit-email-address | input edit-mobile-number
  clickContinueBtn() {
    waitForElement('#continueValidationBtn').then(i => {
      $el('#continueValidationBtn').addEventListener('click', (e: any) => {
        e.preventDefault()
        this.validationFormEmailNameBox($el(`#edit-first-name`), true)
        this.validationFormEmailNameBox($el(`#edit-email-address`), true)
        pushData('exp_improve_contact_button_01', 'Continue', 'Button', 'Your results are ready! Step 2')
      })
    })
  }
  clickInputs() {
    waitForElement('section.form-wrapper.webform-card[data-title="What is your contact info?"]').then(i => {
      $$el('section.form-wrapper.webform-card[data-title="What is your contact info?"] input').forEach(i => {
        i.addEventListener('input', (e: any) => {
          if (e.target.getAttribute('name') !== 'mobile_number') {
            this.validationFormEmailNameBox(e.target)
          } else {
            setTimeout(() => {
              this.validationFormPhoneBox(e.target)
            }, 400)
          }
        })
        i.addEventListener('change', (e: any) => {
          if (e.target.getAttribute('name') === 'mobile_number') {
            pushData('exp_improve_contact_input_01', 'Mobile phone number', 'Input', 'Almost done! Step 3')
          }
        })
      })
    })
  }
  clickSeeMyResultsBtn() {
    waitForElement('#seeMyResultsBtn').then(i => {
      $el('#seeMyResultsBtn').addEventListener('click', (e: any) => {
        e.preventDefault()
        pushData('exp_improve_contact_button_04', 'See My Results', 'Button', 'Almost done! Step 3')
        this.validationFormPhoneBox($el(`#edit-mobile-number`), true)
      })
    })
  }
  validationFormEmailNameBox(target: any, nextStep: boolean = false) {
    let inputValueFirstName = $el(`#edit-first-name`).value.match(/\S+/)
    let inputValueEmail = $el(`#edit-email-address`).value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/)

    if (target.getAttribute('name') === 'first_name') {
      if (inputValueFirstName == null) {
        if (!$el(`#edit-first-name-error`)) {
          target.insertAdjacentHTML(
            'afterend',
            `<label id="edit-first-name-error" class="error" for="edit-first-name">Please Enter First Name</label>`
          )
        }
        let s = setInterval(() => {
          if (
            $el(`#edit-first-name-error`) &&
            $el(`#edit-first-name-error`).textContent !== 'Please Enter First Name'
          ) {
            clearInterval(s)
            $el(`#edit-first-name-error`).textContent = 'Please Enter First Name'
          }
        }, 100)
      } else {
        $el(`#edit-first-name-error`)?.remove()
      }
    }

    if (target.getAttribute('name') === 'email_address') {
      if (inputValueEmail === null) {
        console.log(`inputValueEmail === null`)
        if (!$el(`#edit-email-address-error`)) {
          target.insertAdjacentHTML(
            'afterend',
            `<label id="edit-email-address-error" class="error" for="edit-email-address">Please Enter Valid Email Address</label>`
          )
        }
        let t = setInterval(() => {
          if (
            $el(`#edit-email-address-error`) &&
            $el(`#edit-email-address-error`).textContent !== 'Please Enter Valid Email Address'
          ) {
            clearInterval(t)
            $el(`#edit-email-address-error`).textContent = 'Please Enter Valid Email Address'
          }
        }, 100)
      } else {
        console.log('$el(`#edit-email-address-error`)?.remove()')
        $el(`#edit-email-address-error`)?.remove()
      }
    }

    if (inputValueEmail !== null && inputValueFirstName !== null && nextStep) {
      $el('.email_name_box').classList.add('is_hidden')
      if ($el('.phone_box').classList.contains('is_hidden')) {
        $el('.phone_box').classList.remove('is_hidden')
      }
      if (!$el('.new_reviews_block').classList.contains('is_hidden')) {
        $el('.new_reviews_block').classList.add('is_hidden')
      }
    }
  }
  validationFormPhoneBox(target: any, nextStep: boolean = false) {
    let inputValuePhone = $el(`#edit-mobile-number`).value.match(/^\(\d{3}\) \d{3}-\d{4}$/)
    if (target.getAttribute('name') === 'mobile_number') {
      if (inputValuePhone == null) {
        if (!$el(`#edit-mobile-number-error`)) {
          target.insertAdjacentHTML(
            'afterend',
            `<label id="edit-mobile-number-error" class="error" for="edit-mobile-number">Please Enter Mobile Number</label>`
          )
        }
        let s = setInterval(() => {
          if (
            $el(`#edit-mobile-number-error`) &&
            $el(`#edit-mobile-number-error`).textContent !== 'Please Enter Mobile Number'
          ) {
            clearInterval(s)
            $el(`#edit-mobile-number-error`).textContent = 'Please Enter Mobile Number'
          }
        }, 100)
      } else {
        $el(`#edit-mobile-number-error`)?.remove()
        if (nextStep) {
          $el('.webform-button--submit').click()
        }
      }
    }
  }

  visibleHandler() {
    waitForElement('.guarantee_block').then(i => {
      visibilityOfTime(
        '.guarantee_block',
        'exp_improve_contact_banner_01',
        'Banner',
        'Contact info Step 1 Qualified GrantMe students are guaranteed scholarship winnings'
      )
    })
    waitForElement('.loader_timing_box').then(i => {
      visibilityOfTime(
        '.loader_timing_box',
        'exp_improve_contact_block_01',
        'Block',
        'Contact infoStep 1 Searching for scholarship opportunities'
      )
    })
    waitForElement('.leyton').then(i => {
      visibilityOfTime('.leyton', 'exp_improve_contact_review_01', 'Leyton - Review', 'Contact info Step 1')
    })
    waitForElement('.lauren').then(i => {
      visibilityOfTime('.lauren', 'exp_improve_contact_review_01', 'Lauren - Review', 'Contact info Step 1')
    })
    waitForElement('.ashleigh').then(i => {
      visibilityOfTime('.ashleigh', 'exp_improve_contact_review_01', 'Ashleigh - Review', 'Contact info Step 1')
    })
    waitForElement('.salwa').then(i => {
      visibilityOfTime('.salwa', 'exp_improve_contact_review_01', 'Salwa- Review', 'Contact info Step 1')
    })
  }
}

waitForElement('#edit-loading-screen').then(i => {
  new contactInfoImrovement(device)
})

// clear value LastName on the booking step
let resetLastName = setTimeout(() => {
  if (location.pathname.match('assessment-results')) {
    clearInterval(resetLastName)
    waitForElement('#newLastName').then(i => {
      if ($el('#newLastName').value === 'CRO test') {
        $el('#newLastName').value = ''
      }
    })
  }
}, 1000)
