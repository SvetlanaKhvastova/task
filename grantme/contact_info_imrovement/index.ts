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
  }

  initLoaderStep() {
    $$el('#edit-what-is-your-family-s-approximate-yearly-household-income- label').forEach(el => {
      el.addEventListener('click', (e: any) => {
        setTimeout(() => {
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
        }, 700)
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
      if (btnSubmit.textContent !== 'See My Results') {
        btnSubmit.textContent = 'See My Results'
      }
      $el('.phone_box').insertAdjacentElement('beforeend', phoneField)
      $el('.phone_box').insertAdjacentElement('beforeend', btnSubmit)
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
          loader.style.display = 'none' // Замените 'loader' на селектор вашего лоадера
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
          //
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
          let lastSlide = $('.new_reviews_list').find('.slick-slide').last().clone()
          $('.new_reviews_list').slick('slickAdd', lastSlide)
        }
      }, 400)
    })
  }
}

//
waitForElement('#edit-loading-screen').then(i => {
  new contactInfoImrovement(device)
})
