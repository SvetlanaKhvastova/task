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
// clarityInterval('')

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
    this.clickContinueBtn()
    this.clickSeeMyResultsBtn()
    this.clickGoogleSignInBtn()
  }

  initLoaderStep() {
    $$el('#edit-what-is-your-family-s-approximate-yearly-household-income- label').forEach(el => {
      el.addEventListener('click', (e: any) => {
        setTimeout(() => {
          $el('.dialog-off-canvas-main-canvas')?.classList.add('is_loader')
          $el('.dialog-off-canvas-main-canvas')?.classList.add('is_loader_active')
          $el('#edit-what-is-your-contact-info-')?.classList.add('is_loader')
          $el('#edit-what-is-your-contact-info-2')?.classList.add('is_loader')
          // https://app.grantme.com/program-assessment
          if ($el('.path-program-assessment .webform-progress-wrapper')) {
            $el('.path-program-assessment .webform-progress-wrapper').style.display = 'none'
          }
          // https://app.grantme.com/scholarship-eligibility-quiz
          if ($el('.webform-progress')) {
            $el('.webform-progress').style.display = 'none'
          }
          if ($el('.back-button-wrapper')) {
            $el('.back-button-wrapper').style.display = 'none'
          }
          if ($el('.quiz-title')) {
            $el('.quiz-title').style.display = 'none'
          }

          this.renderNewLoaderBlock()
          this.createLoader()

          if (!$el('.new_reviews_block') && $el('.testimonials')) {
            $el('.testimonials').insertAdjacentHTML('afterbegin', reviewsBlock)
          }
          this.initSliderReviews()
        }, 300)
      })
    })
  }

  renderNewFormStep() {
    waitForElement('[data-drupal-selector="edit-what-is-your-contact-info-"]').then(i => {
      if (!$el('.last_steps_wrapper')) {
        $el('[data-drupal-selector="edit-what-is-your-contact-info-"] .panel-body').insertAdjacentHTML(
          'afterbegin',
          lastStepsWrapper
        )
      }
    })

    //
    waitForElement('.email_name_box').then(i => {
      const emailField = $el('.form-item-email-address')
      const emailFieldLabel = $el('.form-item-email-address label:not(.error)')
      const firstNameField = $el('.form-item-first-name')
      const firstNameFieldLabel = $el('.form-item-first-name label:not(.error)')
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
      let btnSubmit = $el('.path-program-assessment .webform-button--submit')

      if (phoneFieldLabel.textContent !== 'Mobile phone number') {
        phoneFieldLabel.textContent = 'Mobile phone number'
      }
      if (phoneFieldInput.placeholder !== '(___) ___-____') {
        phoneFieldInput.placeholder = '(___) ___-____'
      }
      $el('.phone_box #seeMyResultsBtn').insertAdjacentElement('beforebegin', phoneField)
      // if (btnSubmit.textContent !== 'See My Results') {
      //   btnSubmit.textContent = 'See My Results'
      // }
      // $el('.phone_box').insertAdjacentElement('beforeend', btnSubmit)
    })
  }

  renderNewLoaderBlock() {
    // edit-what-is-your-contact-info
    waitForElement('#edit-what-is-your-contact-info-').then(i => {
      const liElements = $$el('.loading-data li')
      const texts = Array.from(liElements, li => li.textContent)
      if (!$el('.new_loader_block')) {
        $el('#edit-what-is-your-contact-info-').insertAdjacentHTML('beforebegin', loaderBlock(texts))
      }
    })
    // edit-what-is-your-contact-info-2
    waitForElement('#edit-what-is-your-contact-info-2').then(i => {
      const liElements = $$el('.loading-data li')
      const texts = Array.from(liElements, li => li.textContent)
      if (!$el('.new_loader_block')) {
        $el('#edit-what-is-your-contact-info-2').insertAdjacentHTML('beforebegin', loaderBlock(texts))
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
            $el('#edit-what-is-your-contact-info-') &&
            $el('#edit-what-is-your-contact-info-').classList.contains('is_loader')
          ) {
            $el('#edit-what-is-your-contact-info-').classList.remove('is_loader')
          }
          if (
            $el('#edit-what-is-your-contact-info-2') &&
            $el('#edit-what-is-your-contact-info-2').classList.contains('is_loader')
          ) {
            $el('#edit-what-is-your-contact-info-2').classList.remove('is_loader')
          }
          if ($el('.dialog-off-canvas-main-canvas')?.classList.contains('is_loader_active')) {
            $el('.dialog-off-canvas-main-canvas')?.classList.remove('is_loader_active')
          }
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
          clearInterval(intervalId as unknown as number)
        }

        currentIndex++
      }, 12000 / paragraphs.length) // время на один элемент
    }

    // Начать анимацию
    startAnimation()
  }

  initSliderReviews() {
    loadScriptsOrStyles([
      'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js'
    ]).then(async () => {
      let s = setInterval(() => {
        if (
          typeof jQuery('.new_reviews_list').slick === 'function' &&
          $el('.new_reviews_list') &&
          $el('.new_reviews_list').children.length > 3
        ) {
          clearInterval(s)
          let slidesToShowDesktop = 3.92
          let slidesToShowMobile = 1

          let slider = jQuery('.new_reviews_list').slick({
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
          let lastSlide = jQuery('.new_reviews_list').find('.slick-slide').last().clone()
          jQuery('.new_reviews_list').slick('slickAdd', lastSlide)
        }
      }, 400)
    })
  }
  // GoogleSignIn
  clickGoogleSignInBtn() {
    waitForElement('#googleSignInBtn').then(i => {
      $el('#googleSignInBtn').addEventListener('click', (e: any) => {
        e.preventDefault()
        gapi.load('auth2', () => {
          gapi.auth2.init({
            client_id: '569574819297-i3o28u5doob33c39p0aqd8slo5jg4rc0.apps.googleusercontent.com'
          })

          let auth2 = gapi.auth2.getAuthInstance()
          auth2.signIn().then(this.onSignIn, this.onFailure)
        })
      })
    })
  }
  onSignIn(googleUser: any) {
    let profile = googleUser.getBasicProfile()
    console.log('Full Name: ' + profile.getName())
    console.log('Given Name: ' + profile.getGivenName())
    console.log('Family Name: ' + profile.getFamilyName())
    console.log('Email: ' + profile.getEmail())

    $el('#edit-first-name').value = profile.getName()
    $el('#edit-email-address').value = profile.getEmail()
  }
  onFailure(error: any) {
    console.error('Google Sign-In failed:', error)
  }
  //
  clickContinueBtn() {
    waitForElement('#continueValidationBtn').then(i => {
      $el('#continueValidationBtn').addEventListener('click', (e: any) => {
        e.preventDefault()
        this.validationFormEmailNameBox($el(`#edit-first-name`), true)
        this.validationFormEmailNameBox($el(`#edit-email-address`), true)
      })
    })

    $$el('#edit-what-is-your-contact-info- input').forEach(i => {
      i.addEventListener('input', (e: any) => {
        if (e.target.getAttribute('name') !== 'mobile_number') {
          this.validationFormEmailNameBox(e.target)
        }
      })
    })
  }
  clickSeeMyResultsBtn() {
    waitForElement('#seeMyResultsBtn').then(i => {
      $el('#seeMyResultsBtn').addEventListener('click', (e: any) => {
        e.preventDefault()
        this.validationFormPhoneBox($el(`#edit-mobile-number`))
      })
    })
  }
  validationFormEmailNameBox(target: any, nextStep: boolean = false) {
    console.log(target, `target`)
    let inputValueFirstName = $el(`#edit-first-name`).value.match(/\S+/)
    let inputValueEmail = $el(`#edit-email-address`).value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)

    if (target.getAttribute('name') === 'first_name') {
      if (inputValueFirstName == null) {
        console.log(target, `targetINPUT`)
        target.previousElementSibling.classList.add('label_error')
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
        target.previousElementSibling.classList.remove('label_error')
        $el(`#edit-first-name-error`)?.remove()
      }
    }

    if (target.getAttribute('name') === 'email_address') {
      if (inputValueEmail === null) {
        target.previousElementSibling.classList.add('label_error')

        if (!$el(`#edit-email-address-error`)) {
          target.insertAdjacentHTML(
            'afterend',
            `<label id="edit-email-address-error" class="error" for="edit-email-address">Please Enter Valid Email Address</label>`
          )
        }
        setTimeout(() => {
          if (
            $el(`#edit-email-address-error`) &&
            $el(`#edit-email-address-error`).textContent !== 'Please Enter Valid Email Address'
          ) {
            $el(`#edit-email-address-error`).textContent = 'Please Enter Valid Email Address'
          }
        }, 200)
      } else {
        target.previousElementSibling.classList.remove('label_error')
        $el(`#edit-email-address-error`)?.remove()
      }
    }

    if (!$el(`#edit-first-name-error`) && !$el(`#edit-email-address-error`) && nextStep) {
      $el('.email_name_box').classList.add('is_hidden')
      if ($el('.phone_box').classList.contains('is_hidden')) {
        $el('.phone_box').classList.remove('is_hidden')
      }
      if (!$el('.new_reviews_block').classList.contains('is_hidden')) {
        $el('.new_reviews_block').classList.add('is_hidden')
      }
    }
  }
  validationFormPhoneBox(target: any) {
    let inputValuePhone = $el(`#edit-mobile-number`).value.match(/^\(\d{3}\) \d{3}-\d{4}$/)
    if (target.getAttribute('name') === 'mobile_number') {
      if (inputValuePhone == null) {
        target.previousElementSibling.classList.add('label_error')

        if (!$el(`#edit-mobile-number-error`)) {
          target.insertAdjacentHTML(
            'afterend',
            `<label id="edit-mobile-number-error" class="error" for="edit-mobile-number">Please Enter Mobile Number</label>`
          )
        }
        setTimeout(() => {
          if (
            $el(`#edit-mobile-number-error`) &&
            $el(`#edit-mobile-number-error`).textContent !== 'Please Enter Mobile Number'
          ) {
            $el(`#edit-mobile-number-error`).textContent = 'Please Enter Mobile Number'
          }
        }, 200)
      } else {
        $el('.path-program-assessment .webform-button--submit').click()
      }
    }
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
