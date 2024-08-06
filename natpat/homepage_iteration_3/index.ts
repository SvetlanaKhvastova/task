import {
  startLog,
  $el,
  $$el,
  waitForElement,
  pushData,
  clarityInterval,
  visibilityOfTime,
  scrollToElement,
  loadScriptsOrStyles
} from '../../libraries'
import {
  differentInfoHeroBlock,
  guaranteeBlock,
  info2Block,
  infoBlock,
  mainBlock,
  natPatBlock,
  reviewsBlock,
  scienceBlock,
  shopByCategoryBlock,
  sliderNews,
  stickersSlider,
  stickyBlock,
  trustPilotReviews,
  upBtn
} from './blocks'
import { svg, git, sliderData } from './data'
// @ts-ignore
import mainStyle from './main.css?raw'

waitForElement('#purchase-slide').then(i => {
  if (!$el('main')) return
  $el('main').style.opacity = '0'
})

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class HomePage {
  device: 'mobile' | 'desktop'

  constructor(device) {
    this.device = device

    this.init()
  }

  init() {
    startLog({ name: 'NatPat: Homepage - iteration 3', dev: 'SKh' })
    clarityInterval('exp_homepage')

    document.head.insertAdjacentHTML(
      'beforeend',
      `<link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=M+PLUS+Rounded+1c:wght@900&display=swap" rel="stylesheet">`
    )
    document.head.insertAdjacentHTML('beforeend', `<style>${mainStyle}</style>`)

    this.clearOldContent()
  }

  clearOldContent() {
    waitForElement('#MainContent .icartShopifyCartContent').then(i => {
      $('#MainContent .icartShopifyCartContent').css('display', 'none')
      $('#MainContent .icartShopifyCartContent').after('<div class="new_home_page"></div>')

      waitForElement('#featured-reviews2 .carousel-item:not(.slick-cloned)').then(i => {
        this.addBlocks()
        this.addEvents()
        this.fixes()
        this.toggleStickyBlockVisibility()
        // this.allGroupProductSlider()
      })
    })
  }

  async addBlocks() {
    $('.new_home_page')
      .append(mainBlock())
      .append(stickyBlock)
      .append(guaranteeBlock)
      .append(differentInfoHeroBlock)
      .append(shopByCategoryBlock)
      .append(stickersSlider)
      .append(trustPilotReviews)
      .append(sliderNews)
      .append(scienceBlock)
      .append(natPatBlock)
      .append(infoBlock)
      .append(reviewsBlock)
      .append(info2Block)

    const slider = sliderData()
      .map((s, i) => {
        return /* HTML */ `
          <div class="slide">
            <div class="img">
              <img src="${s.img}" alt="review img" />
            </div>
            <p class="head">
              <img src="${git}/img/new-home-page/stars_green.svg" alt="stars" />
              ${s.name}
            </p>
            <p class="text">${s.text}</p>
            <span>
              <img src="${git}/img/new-home-page/check_white.svg" alt="verified" />
              Verified Buyer
            </span>
          </div>
        `
      })
      .join('')
    $('.new_reviews_block .basic_slider').append(slider)

    waitForElement('.slider_dots-2.slick-initialized').then(i => {
      $('.insta_widget').append($('#shopify-section-template--15241309847596__17097813754ae81b0d'))
      $('.new_stickers_slider').append($('#shopify-section-template--15241309847596__custom_liquid_HmbWPi'))
      $('#shopify-block-archive_detect_ugc_gallery_8cpCVL').css('display', 'block')
      $('#purchaseSlide.slick-initialized').slick('setPosition')
      $('.slider_dots-2.slick-initialized').slick('setPosition')
    })

    $el('main').style.opacity = '1'

    $(window).on('scroll', function () {
      if ($(window).scrollTop() || 0 > 100) {
        $('.up_btn').fadeIn()
      } else {
        $('.up_btn').fadeOut()
      }

      const parallax = $('.new_natpat_block .parallax')
      const rect = parallax[0].getBoundingClientRect()
      const scrollPosition = window.scrollY || document.documentElement.scrollTop
      const offset = rect.top + scrollPosition

      if (scrollPosition + window.innerHeight > offset) {
        parallax.css('transform', `translateY(${(scrollPosition - offset) * 0.3}px)`)
      }
    })

    $('.up_btn').on('click', function () {
      $('html, body').animate({ scrollTop: 0 }, 500)
    })

    if (this.device === 'mobile') {
      $('.new_info2_block').prepend($('.slider_photo'))
    }

    $('.new_stickers_slider .slider_wrapper').slick({
      slidesToShow: this.device === 'mobile' ? 1 : 3,
      slidesToScroll: 1,
      arrows: this.device === 'mobile' ? false : true,
      infinite: true,
      centerMode: this.device === 'mobile' ? true : false,
      centerPadding: this.device === 'mobile' ? '24px' : '0',
      asNavFor: '.new_stickers_slider .slider_dots'
    })

    if (this.device === 'mobile') {
      $('.new_trustpilot_reviews .reviews_trust').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        centerMode: true,
        centerPadding: '35px',
        adaptiveHeight: true,
        asNavFor: '.new_trustpilot_reviews .slider_dots'
      })
    }

    $('.new_slider_news .slider_wrapper').slick({
      slidesToShow: this.device === 'mobile' ? 1 : 3,
      slidesToScroll: 1,
      arrows: this.device === 'mobile' ? false : true,
      infinite: true,
      centerMode: true,
      centerPadding: this.device === 'mobile' ? '24px' : window.innerWidth > 1440 ? '120px' : '0',
      asNavFor: '.new_slider_news .slider_dots'
    })

    $('.basic_slider').slick({
      slidesToShow: this.device === 'mobile' ? 1 : 3,
      slidesToScroll: 1,
      arrows: false,
      infinite: true,
      centerMode: this.device === 'mobile' ? true : false,
      centerPadding: this.device === 'mobile' ? '24px' : '0',
      asNavFor: '.new_reviews_block .slider_dots'
    })

    $('.slider_photo').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: this.device === 'mobile' ? false : true,
      infinite: true,
      centerMode: this.device === 'mobile' ? true : false,
      fade: this.device === 'mobile' ? false : true
    })

    $('.slider_dots').each(function (i, item) {
      $(item).slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        centerMode: true,
        centerPadding: '60px',
        focusOnSelect: true,
        asNavFor: $(item).closest('section').find('.parent_slider')
      })
    })

    $('.big-stickers .swiper-wrapper').slick({
      slidesToShow: this.device === 'mobile' ? 1 : 3,
      slidesToScroll: 1,
      arrows: false,
      infinite: true,
      centerMode: true,
      centerPadding: this.device === 'mobile' ? '24px' : '0',
      asNavFor: '.new_main_block .slider_dots',
      autoplay: true,
      autoplaySpeed: 2500,
      speed: 700
    })

    $('a.total_reviews').on('click', function (e) {
      e.preventDefault()
      scrollToElement('.new_trustpilot_reviews')
    })

    // add readmore button
    $('.reviews_trust p:nth-child(2)').each(function (i, item) {
      if ($(item).text().length > 200) {
        const text = $(item).text()
        const lastSpace = text.slice(0, 200).lastIndexOf(' ')
        if (lastSpace !== -1) {
          $(item).text(text.slice(0, lastSpace) + '...')
        }
        $(item).after('<span class="read_more">Read more</span>')

        $(item)
          .next()
          .on('click', function () {
            $(item).text(text)
            $(this).remove()
            $(item).closest('.reviews_trust').slick('setPosition')
          })
      }
    })

    if (this.device === 'desktop') {
      const show = 6
      const $reviews = $('.new_trustpilot_reviews .reviews_trust li')
      $reviews.each(function (i, item) {
        if (i >= show) {
          $(item).css('display', 'none')
        }
      })

      $('.pages_r span').on('click', function () {
        if ($(this).hasClass('active')) return
        const page = +$(this).text()
        const start = (page - 1) * show
        const end = page * show - 1
        const $reviewsContainer = $('.new_trustpilot_reviews .reviews_trust')
        $reviewsContainer.fadeOut(function () {
          $reviews.each(function (i, item) {
            if (i >= start && i <= end) {
              $(item).show()
            } else {
              $(item).hide()
            }
          })
          $reviewsContainer.fadeIn()
        })

        $(this).addClass('active').siblings().removeClass('active')
      })
    }

    $('.explore_stickers_btn').on('click', function (e) {
      e.preventDefault()
      window.location = '/en-eu/collections/homepage'
    })
  }

  addEvents() {
    const exp = 'exp_homepage_'

    $('.new_main_block .crs_btn').on('click', function (e) {
      pushData('exp_hp_3_main_image_0', 'Explore Natpat Stickers', 'Button', 'Main block')
    })

    $('.new_main_block .images a').each(function (i, item) {
      let descr = i === 0 ? 'Sleep' : i === 1 ? 'Allergy' : 'Protection'
      visibilityOfTime(item, `${exp}main_image_${i}`, 'Main block', descr)
      $(item).on('click', function () {
        pushData(`${exp}main_image_${i}`, descr, 'Click', 'Main block')
      })
    })

    waitForElement('.new_stickers_slider .item:not(.slick-cloned)').then(i => {
      console.log($('.new_stickers_slider .item:not(.slick-cloned)'))
      $('.new_stickers_slider .item:not(.slick-cloned)').each(function (i, item) {
        const name = $(this).closest('.item').find('h3').text().trim()
        visibilityOfTime(
          item,
          `exp_hp_3_stickers_slider_product__${name}`,
          'Homepage Our bestsellers: Tried and True',
          `${name}  - Section`
        )
      })
      $('.new_stickers_slider').on('click', '.pack', function () {
        const name = $(this).closest('.item').find('h3').text().trim()
        pushData(`${exp}stick_slider_qty_${name}`, `Quantity ${$(this).text()}`, 'Click', `Stickers slider ${name}`)
      })

      $('.new_stickers_slider').on('click', '.footer-btns .learn-more', function (e) {
        const name = $(this).closest('.item').find('h3').text().trim()
        pushData(`exp_hp_3_stick_slider_learn_${name}`, 'Learn more', 'Click', 'Stickers slider')
      })

      $('.new_stickers_slider').on('click', '.footer-btns .add-to-cart', function () {
        const name = $(this).closest('.item').find('h3').text().trim()
        pushData(
          `exp_hp_3_stick_slider_add_${name}`,
          'Add to cart',
          'Button',
          'Homepage Our bestsellers: Tried and True'
        )
      })

      $('.new_stickers_slider').on('click', '.slick-arrow', function () {
        if ($(this).hasClass('slick-next')) {
          pushData(
            `exp_hp_3_pagination_01`,
            'Next - Product selection',
            'Pagination',
            'Homepage Our bestsellers: Tried and True'
          )
        } else {
          pushData(
            `exp_hp_3_pagination_01`,
            'Prev - Product selection',
            'Pagination',
            'Homepage Our bestsellers: Tried and True'
          )
        }
      })

      $('.new_slider_news').on('click', '.slick-arrow', function () {
        if ($(this).hasClass('slick-next')) {
          pushData(`${exp}slider_news_next`, 'Next', 'Click', 'Slider news')
        } else {
          pushData(`${exp}slider_news_prev`, 'Prev', 'Click', 'Slider news')
        }
      })
    })

    $('.slider_photo').on('afterChange', function () {
      pushData('exp_hp_3_slider_photo ', 'Choose', 'Change', 'Homepage The section with photos')
    })

    const insta = setInterval(() => {
      if (
        ($('.insta_widget [data-widget-host]')[0].shadowRoot &&
          $('.insta_widget [data-widget-host]')[0].shadowRoot?.querySelectorAll('img').length) ||
        0 > 0
      ) {
        clearInterval(insta)
        $('.insta_widget [data-widget-host]')[0]
          .shadowRoot?.querySelectorAll('img')
          .forEach((img, i) => {
            img.addEventListener('Click', () => {
              pushData(`${exp}insta_image_${i}`, 'Image', 'Click', 'Instagram widget')
            })
          })
      }
    }, 1000)

    $('.new_trustpilot_reviews .reviews_trust li:not(.slick-cloned)').each(function (i, item) {
      visibilityOfTime(
        item,
        `${exp}trustpilot_reviews_${i}`,
        'Trustpilot reviews block',
        $(item).find('p:first-of-type').text()
      )
    })

    visibilityOfTime('.new_main_block .crs_btn', `${exp}main_button`, 'Main block', 'Button')
    visibilityOfTime(
      '.new_trustpilot_reviews .reviews_trust',
      `${exp}trustpilot_reviews`,
      'Trustpilot reviews block',
      'Trustpilot reviews'
    )
    visibilityOfTime('.new_main_block .points', `${exp}main_benefits`, 'Main block', 'Benefits')
    visibilityOfTime(
      '.new_slider_news .slider_wrapper',
      `exp_hp_3_slider_news`,
      `Homepage We're in the news... for good reasons.`,
      'Section'
    )
    visibilityOfTime(
      '.new_science_block .content_wrapper',
      `exp_hp_3_science_block`,
      'Homepage Unlocking the science behind natpat patches',
      'Section'
    )
    visibilityOfTime(
      '.new_natpat_block .layer',
      `exp_hp_3_natpat_block`,
      `Homepage At NATPAT, it's not just about products; it's about a way of life. We're ....`,
      'Section'
    )
    visibilityOfTime(
      '.new_info_block .content_wrapper p',
      `exp_hp_3_info_block`,
      `Homepage Hey there! At NATPAT, we're all about unlocking the superhero potential in eve.....`,
      'Section'
    )

    visibilityOfTime('.slider_photo', `exp_hp_3_slider_photo`, 'Homepage The section with photos', 'Section')
    visibilityOfTime(
      '.new_reviews_block .basic_slider',
      `exp_hp_3_reviews_block`,
      'Homepage Megan Hilling....',
      'Section'
    )
    visibilityOfTime(
      '.new_info2_block .content_wrapper',
      `exp_hp_3_section_09`,
      'Health and wellness patches',
      'Section',
      1000,
      0.3
    )
  }

  fixes() {
    const btnFix = setInterval(() => {
      if (
        $el('#amped-6269-26072') &&
        $el('#amped-6269-26072').shadowRoot &&
        $el('#amped-6269-26072').shadowRoot.querySelector('#el_uNBrKg7ulB')
      ) {
        clearInterval(btnFix)
        $el('#amped-6269-26072').shadowRoot.querySelector('#el_uNBrKg7ulB').style.top = '75%'
      }
    }, 100)
    setTimeout(() => {
      clearInterval(btnFix)
    }, 5000)

    $$el('.new_home_page a:not([class]), .new_home_page a.crs_btn').forEach(item => {
      const newHref =
        window.location.pathname === '/'
          ? item.getAttribute('href')
          : window.location.pathname + item.getAttribute('href')
      item.setAttribute('href', newHref)
    })
  }

  toggleStickyBlockVisibility() {
    waitForElement('.new_trustpilot_reviews').then(() => {
      waitForElement('.sticky_block').then(() => {
        const element = $el('.sticky_block') as HTMLElement
        const elemClose = $el('.new_trustpilot_reviews') as HTMLElement

        function visible() {
          const options = {
            root: null,
            threshold: 0
          }

          let observerSticky = new IntersectionObserver(entries => {
            entries.forEach(i => {
              if (i.boundingClientRect.top <= 0) {
                element.style.display = 'flex'
              } else {
                element.style.display = 'none'
              }

              observerSticky.unobserve(i.target)
            })

            observerSticky.disconnect()
          }, options)

          observerSticky.observe(elemClose)
        }

        window.addEventListener('scroll', () => {
          visible()
        })

        visible()
      })
    })
  }
  allGroupProductSlider() {
    loadScriptsOrStyles([
      'https://unpkg.com/swiper/swiper-bundle.min.css',
      'https://unpkg.com/swiper/swiper-bundle.min.js'
    ]).then(async () => {
      let s = setInterval(() => {
        if (typeof Swiper === 'function' && $el('.big-stickers')) {
          clearInterval(s)
          console.log(typeof Swiper, `typeof Swiper `)

          const swiper = new Swiper('.swiper-container', {
            centeredSlides: true,
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 10,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              dynamicBullets: true
            }
            // autoplay: {
            //   delay: 3000,
            //   disableOnInteraction: false
            // }
          })
          $el('.new_main_block .big-stickers .swiper-container').style.opacity = '1'
        }
      }, 100)
    })
  }
}

const checkJquery = setInterval(() => {
  if (window.jQuery && $el('#purchase-slide')) {
    clearInterval(checkJquery)
    const homePage = new HomePage(device)
  }
}, 100)
