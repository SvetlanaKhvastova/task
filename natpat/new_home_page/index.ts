import { set } from 'express/lib/application'
import { startLog, pushData, clarityInterval, visibilityOfTime, scrollToElement, waitEl } from './lib'
import {
  mainBlock,
  stickersSlider,
  trustPilotReviews,
  sliderNews,
  scienceBlock,
  natPatBlock,
  infoBlock,
  reviewsBlock,
  info2Block,
  upBtn
} from './blocks'
import { sliderData, git } from './data'

waitEl('main', () => {
  document.querySelector('main').style.opacity = '0'
})
startLog({ name: 'HomePage Redesign', dev: 'YK' })

clarityInterval('HomePage_Redesign')

declare global {
  interface Window {
    Shopify: any
    jQuery: any
  }
}

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

const style = document.createElement('link')
style.rel = 'stylesheet'
style.href =
  'https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=M+PLUS+Rounded+1c:wght@900&display=swap'
document.head.appendChild(style)

class HomePage {
  device: 'mobile' | 'desktop'

  constructor(d) {
    this.device = d
    this.init()
  }

  init() {
    this.clearOldContent()
  }

  clearOldContent() {
    waitEl('#MainContent .icartShopifyCartContent', () => {
      $('#MainContent .icartShopifyCartContent').css('display', 'none')
      $('#MainContent .icartShopifyCartContent').after('<div class="new_home_page"></div>')
      waitEl('#featured-reviews2 .carousel-item:not(.slick-cloned)', () => {
        this.addBlocks()
        this.patchesCardsFunctionality()
        this.addEvents()
        this.fixes()
      })
    })
  }

  async addBlocks() {
    $('.new_home_page')
      .append(mainBlock(this.device))
      .append(stickersSlider)
      .append(trustPilotReviews)
      .append(sliderNews)
      .append(scienceBlock)
      .append(natPatBlock)
      .append(infoBlock)
      .append(reviewsBlock)
      .append(info2Block)
      .append(upBtn)

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

    waitEl('.slider_dots-2.slick-initialized', () => {
      $('.insta_widget').append($('#shopify-section-template--15241309847596__17097813754ae81b0d'))
      $('.new_stickers_slider').append($('#shopify-section-template--15241309847596__custom_liquid_HmbWPi'))
      $('#shopify-block-archive_detect_ugc_gallery_8cpCVL').css('display', 'block')
      $('#purchaseSlide.slick-initialized').slick('setPosition')
      $('.slider_dots-2.slick-initialized').slick('setPosition')
    })

    document.querySelector('main').style.opacity = '1'

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
      centerPadding: this.device === 'mobile' ? '24px' : window.innerWidth > 1440 ? '90px' : '0',
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
  }

  patchesCardsFunctionality() {
    $('.new_stickers_slider .item').each(function (i, item) {
      const $span = $(item).find('span')
      const $img = $(item).find('.img img[alt=main]')
      const $btn = $(item).find('button')
      const $price = $(item).find('.price')
      const $label = $(item).find('.save')
      $span.on('click', function () {
        $(this).addClass('active').siblings().removeClass('active')
        $img.attr('src', $(this).data('img'))
        $btn.attr('data-id', $(this).data('variant'))
        $price.text(`$${$(this).data('price')} each`)
        $label.text(`${$(this).data('save')}% off`)
      })

      $btn.on('click', function () {
        const id = $(this).data('id')
        const quantity = 1
        const formData = {
          items: [
            {
              id: id,
              quantity: quantity
            }
          ]
        }

        fetch(window.Shopify.routes.root + 'cart/add.js?ref_icart=true', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        }).then(response => {
          return response.json()
        })
      })
    })
  }

  addEvents() {
    const exp = 'exp_homepage_'

    $('.new_main_block .crs_btn').on('click', function () {
      pushData(`${exp}main_button`, 'Button', 'click', 'Main block')
    })

    $('.new_main_block .images a').each(function (i, item) {
      let descr = i === 0 ? 'Sleep' : i === 1 ? 'Allergy' : 'Protection'
      visibilityOfTime(item, `${exp}main_image_${i}`, 'Main block', descr)
      $(item).on('click', function () {
        pushData(`${exp}main_image_${i}`, descr, 'click', 'Main block')
      })
    })

    waitEl('.new_stickers_slider .item:not(.slick-cloned)', () => {
      console.log($('.new_stickers_slider .item:not(.slick-cloned)'))
      $('.new_stickers_slider .item:not(.slick-cloned)').each(function (i, item) {
        visibilityOfTime(item, `${exp}stickers_slider_${i}`, 'Stickers slider', $(item).find('.name').text())
      })
      $('.new_stickers_slider').on('click', '.pack', function () {
        const name = $(this).closest('.item').find('h3').text().trim().replace(/\s/g, '_').split('_')[0]
        pushData(`${exp}stick_slider_qty_${name}`, `Quantity ${$(this).text()}`, 'click', `Stickers slider ${name}`)
      })

      $('.new_stickers_slider').on('click', '.footer-btns .learn-more', function () {
        const name = $(this).closest('.item').find('h3').text().trim().replace(/\s/g, '_').split('_')[0]
        pushData(`${exp}stick_slider_learn_${name}`, 'Learn more', 'click', `Stickers slider ${name}`)
      })

      $('.new_stickers_slider').on('click', '.footer-btns .add-to-cart', function () {
        const name = $(this).closest('.item').find('h3').text().trim().replace(/\s/g, '_').split('_')[0]
        pushData(`${exp}stic_slider_add_${name}`, 'Add to cart', 'click', `Stickers slider ${name}`)
      })

      $('.new_stickers_slider').on('click', '.slick-arrow', function () {
        if ($(this).hasClass('slick-next')) {
          pushData(`${exp}stickers_slider_next`, 'Next', 'click', 'Stickers slider')
        } else {
          pushData(`${exp}stickers_slider_prev`, 'Prev', 'click', 'Stickers slider')
        }
      })

      $('.new_slider_news').on('click', '.slick-arrow', function () {
        if ($(this).hasClass('slick-next')) {
          pushData(`${exp}slider_news_next`, 'Next', 'click', 'Slider news')
        } else {
          pushData(`${exp}slider_news_prev`, 'Prev', 'click', 'Slider news')
        }
      })
    })

    $('.slider_photo').on('afterChange', function () {
      pushData(`${exp}slider_photo`, 'Slider photo', 'change', 'Slider photo')
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
            img.addEventListener('click', () => {
              pushData(`${exp}insta_image_${i}`, 'Image', 'click', 'Instagram widget')
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
    visibilityOfTime('.new_slider_news .slider_wrapper', `${exp}slider_news`, 'Slider news block', 'Slider news')
    visibilityOfTime('.new_science_block .content_wrapper', `${exp}science_block`, 'Science block', 'Science block')
    visibilityOfTime('.new_natpat_block .layer', `${exp}natpat_block`, 'NatPat block', 'Parallax NatPat block')
    visibilityOfTime('.new_info_block .content_wrapper p', `${exp}info_block`, 'Info block', 'Blue info block')
    visibilityOfTime('.new_reviews_block .basic_slider', `${exp}reviews_block`, 'Reviews block', 'Reviews block')
    visibilityOfTime(
      '.new_info2_block .content_wrapper',
      `${exp}info2_block`,
      'Info2 block',
      'Last info block',
      1000,
      0.3
    )
    visibilityOfTime('.slider_photo', `${exp}slider_photo`, 'Slider photo', 'Slider photo')
  }

  fixes() {
    const btnFix = setInterval(() => {
      if (
        document.querySelector('#amped-6269-26072') &&
        document.querySelector('#amped-6269-26072').shadowRoot &&
        document.querySelector('#amped-6269-26072').shadowRoot.querySelector('#el_uNBrKg7ulB')
      ) {
        clearInterval(btnFix)
        document.querySelector('#amped-6269-26072').shadowRoot.querySelector('#el_uNBrKg7ulB').style.top = '75%'
      }
    }, 100)
    setTimeout(() => {
      clearInterval(btnFix)
    }, 5000)

    document.querySelectorAll('.new_home_page a:not([class]), .new_home_page a.crs_btn').forEach(item => {
      const newHref =
        window.location.pathname === '/'
          ? item.getAttribute('href')
          : window.location.pathname + item.getAttribute('href')
      item.setAttribute('href', newHref)
    })
  }
}
const checkJquery = setInterval(() => {
  if (window.jQuery) {
    clearInterval(checkJquery)
    const homePage = new HomePage(device)
  }
}, 100)
