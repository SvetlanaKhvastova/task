console.log(
  '%c EXP: exit intent popup (DEV: SKh)',
  'background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;'
)
const $$el = selector => document.querySelectorAll(selector)
const $el = selector => document.querySelector(selector)
const git = 'https://conversionratestore.github.io/projects/'
// clarity script
const clarityInterval = setInterval(function () {
  if (typeof clarity == 'function') {
    clearInterval(clarityInterval)
    //clarity('set', 'exit-intent-popup', 'variant_1')
  }
}, 1000)
// funtion for push data to GA4
const pushDataLayer = (name, desc, type = '', loc = '') => {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'event-to-ga4',
    event_name: name,
    event_desc: desc,
    event_type: type,
    event_loc: loc
  })
  console.log(`Event: ${name} ${desc} ${type} ${loc}`)
}

function checkFocusTime(selector, event, location) {
  const checker = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.getAttribute('data-startShow')) {
        entry.target.setAttribute('data-startShow', new Date().getTime())
      } else if (!entry.isIntersecting && entry.target.getAttribute('data-startShow')) {
        const startShow = entry.target.getAttribute('data-startShow')
        const endShow = new Date().getTime()
        const timeShow = Math.round(endShow - startShow)
        entry.target.removeAttribute('data-startShow')
        pushDataLayer(event, timeShow, 'Visibility', location)
        checker.unobserve(entry.target)
      }
    })
  })

  checker.observe(document.querySelector(selector))
}

const checkScrollSpeed = (function (settings) {
  settings = settings || {}

  let lastPos
  let newPos
  let timer
  let delta,
    delay = settings.delay || 70

  function clear() {
    lastPos = null
    delta = 0
  }

  clear()

  return function () {
    newPos = window.scrollY
    if (lastPos != null) {
      delta = newPos - lastPos
    }
    lastPos = newPos
    clearTimeout(timer)
    timer = setTimeout(clear, delay)
    return delta
  }
})()

function setSessionStorage(name, value) {
  sessionStorage.setItem(name, value)
}

function getSessionStorage(name) {
  let exitPopupLoaded = sessionStorage.getItem(name)
  return exitPopupLoaded
}
function waitForElement(selector) {
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector))
    }

    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector))
        observer.disconnect()
      }
    })

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true
    })
  })
}

const icons = {
  close: /* HTML */ `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <g clip-path="url(#clip0_1656_33454)">
        <path
          d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
          fill="white"
        />
        <path
          d="M17.7338 6.27531C17.3788 5.92036 16.8055 5.92036 16.4505 6.27531L12 10.7167L7.54949 6.26621C7.19454 5.91126 6.62116 5.91126 6.26621 6.26621C5.91126 6.62116 5.91126 7.19454 6.26621 7.54949L10.7167 12L6.26621 16.4505C5.91126 16.8055 5.91126 17.3788 6.26621 17.7338C6.62116 18.0887 7.19454 18.0887 7.54949 17.7338L12 13.2833L16.4505 17.7338C16.8055 18.0887 17.3788 18.0887 17.7338 17.7338C18.0887 17.3788 18.0887 16.8055 17.7338 16.4505L13.2833 12L17.7338 7.54949C18.0796 7.20364 18.0796 6.62116 17.7338 6.27531Z"
          fill="#273038"
        />
      </g>
      <defs>
        <clipPath id="clip0_1656_33454">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  `,
  copy: /* HTML */ `
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <path
        d="M22.0815 0H8.45692C7.81626 0.0024314 7.20252 0.258014 6.7495 0.711037C6.29648 1.16406 6.04089 1.77779 6.03846 2.41846V5.53846H2.91846C2.27779 5.54089 1.66406 5.79648 1.21104 6.2495C0.758014 6.70252 0.502431 7.31626 0.5 7.95692V21.5815C0.502431 22.2222 0.758014 22.8359 1.21104 23.289C1.66406 23.742 2.27779 23.9976 2.91846 24H16.5431C17.1837 23.9976 17.7975 23.742 18.2505 23.289C18.7035 22.8359 18.9591 22.2222 18.9615 21.5815V18.4615H22.0815C22.7222 18.4591 23.3359 18.2035 23.789 17.7505C24.242 17.2975 24.4976 16.6837 24.5 16.0431V2.41846C24.4976 1.77779 24.242 1.16406 23.789 0.711037C23.3359 0.258014 22.7222 0.0024314 22.0815 0ZM17.1154 21.5815C17.1154 21.7333 17.0551 21.8789 16.9478 21.9862C16.8404 22.0935 16.6949 22.1538 16.5431 22.1538H2.91846C2.76668 22.1538 2.62111 22.0935 2.51378 21.9862C2.40645 21.8789 2.34615 21.7333 2.34615 21.5815V7.95692C2.34615 7.80514 2.40645 7.65957 2.51378 7.55224C2.62111 7.44491 2.76668 7.38462 2.91846 7.38462H16.5431C16.6949 7.38462 16.8404 7.44491 16.9478 7.55224C17.0551 7.65957 17.1154 7.80514 17.1154 7.95692V21.5815ZM22.6538 16.0431C22.6538 16.1949 22.5935 16.3404 22.4862 16.4478C22.3789 16.5551 22.2333 16.6154 22.0815 16.6154H18.9615V7.95692C18.9591 7.31626 18.7035 6.70252 18.2505 6.2495C17.7975 5.79648 17.1837 5.54089 16.5431 5.53846H7.88462V2.41846C7.88462 2.26668 7.94491 2.12111 8.05224 2.01378C8.15957 1.90645 8.30514 1.84615 8.45692 1.84615H22.0815C22.2333 1.84615 22.3789 1.90645 22.4862 2.01378C22.5935 2.12111 22.6538 2.26668 22.6538 2.41846V16.0431Z"
        fill="#FEA900"
      />
    </svg>
  `,
  copied: /* HTML */ `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
        fill="#FEA900"
      />
    </svg>
  `,
  minus: /* HTML */ `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M6 12H18" stroke="#333F48" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `
}

// IntentPopup
class IntentPopup {
  constructor(targetUrl) {
    this.targetUrl = targetUrl
    this.device = screen.width <= 768 ? 'Mobile' : 'Desktop'
    this.init()
  }

  init() {
    this.#initMainStyles()
    const currentUrl = location.href

    if (currentUrl.includes(this.targetUrl)) {
      this.#createPopup()
      this.#popupTriggers()
    }
  }

  // private methods -----> popup
  #createPopup() {
    const popupStyle = /* HTML */ `
      <style>
        .indent-popup-backdrop {
          background: rgba(39, 48, 56, 0.65);
          backdrop-filter: blur(5px);
          position: fixed;
          display: none;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1000000000000;
        }
        .indent-popup {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          max-width: 500px;
          width: calc(100% - 32px);
          background: #273038;
        }
        .indent-popup__close {
          position: absolute;
          background: none;
          padding: 0;
          top: 12px;
          right: 12px;
          width: 24px;
          height: 24px;
        }
        .indent-popup__close:hover,
        .indent-popup__close:focus {
          background: none;
        }
        @media (max-width: 768px) {
          .indent-popup {
            max-width: 335px;
            top: 74px;
            transform: translateX(-50%);
          }
          .indent-popup__close {
            top: -50px;
            right: 0;
          }
        }
      </style>
    `
    const popup = /* HTML */ `
      ${popupStyle}
      <div class="indent-popup-backdrop">
        <div class="indent-popup">
          <button class="indent-popup__close" data-popup="close">${icons.close}</button>
          <div class="indent-popup__content"></div>
        </div>
      </div>
    `
    this.#insert(popup, 'body', 'afterbegin')
    this.#handleClosePopup()
  }
  #popupTriggers() {
    const timer = setTimeout(() => {
      this.#renderDiscountPopup()
      clearTimeout(timer)
    }, 20000)

    if (this.device === 'Mobile') {
      window.addEventListener('scroll', () => {
        const scrollSpeed = checkScrollSpeed()
        if (scrollSpeed > 70) {
          this.#renderDiscountPopup()
        }
      })
    } else {
      document.addEventListener('mouseleave', event => {
        if (
          event.clientY <= 0 ||
          event.clientX <= 0 ||
          event.clientX >= window.innerWidth ||
          event.clientY >= window.innerHeight
        ) {
          this.#renderDiscountPopup()
        }
      })
    }
  }
  #renderDiscountPopup() {
    const popupStyle = /* HTML */ `
      <style>
        .discount__popup {
          display: flex;
          flex-direction: column;
        }
        .discount__header {
          background: #fea900;
          padding: 20px;
        }
        .discount__header h2 {
          max-width: 311px;
          font-family: Poppins;
          color: #fff;
          text-align: center;
          font-size: 22px;
          font-weight: 700;
          line-height: 28px;
          margin: 0 auto;
        }
        .discount__body {
          padding: 20px;
        }
        .discount__code {
          max-width: 311px;
          margin: 0 auto;
        }
        .discount__code-title {
          color: #fff;
          text-align: center;
          font-family: Poppins;
          font-size: 22px;
          font-weight: 700;
          line-height: 28px;
          margin-bottom: 20px;
        }
        .discount__code-container {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-radius: 6px;
          border: 2px solid #fea900;
          background: rgba(255, 255, 255, 0.2);
          width: 100%;
          padding: 10px 14px 10px 20px;
          transition: all 0.5s ease 0s;
        }
        .discount__code-container button {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          width: 25px;
          padding: 0;
          height: 25px;
          background: none;
        }
        .discount__code-container:hover {
          background: #686f76;
        }
        .discount__code-container.is_active {
          background: rgba(255, 255, 255, 0.2) !important;
        }
        .discount__code-container span {
          color: #fff;
          font-family: Poppins;
          font-size: 15px;
          font-weight: 500;
          line-height: 24px;
          letter-spacing: 3px;
        }
        .discount__action {
          display: flex;
          justify-content: center;
          margin-top: 16px;
          width: 100%;
        }
        .discount__action button {
          border-radius: 100px;
          background: #18aae2;
          padding: 12px 32px;
          width: 100%;
          color: #fff;
          text-align: center;
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          text-transform: uppercase;
        }
        [data-discount] {
          position: relative;
        }
        .copy_code_inform + svg {
          display: none;
        }
        .discount__description {
          max-width: 311px;
          margin: 20px auto 0;
        }
        .discount__description p {
          color: #fff;
          text-align: center;
          font-family: Poppins;
          font-size: 14px;
          font-weight: 500;
          line-height: 23.1px;
        }
      </style>
    `
    const discountPopup = /* HTML */ `
      ${popupStyle}
      <div class="discount__popup">
        <div class="discount__header"><h2>Wait! Don’t leave without staying connected!</h2></div>
        <div class="discount__img dn_mob"><img src="${git}simify/img/desk_popup_img_block.png" alt="people" /></div>
        <div class="discount__img dn_desk"><img src="${git}simify/img/mob_popup_img_block.png" alt="people" /></div>
        <div class="discount__body">
          <div class="discount__code">
            <div class="discount__code-title">Take 10% off your eSIM order with the code:</div>
            <div class="discount__code-container">
              <span>STAYCONNECTED10</span>
              <button data-discount data-target="popup">${icons.copy}</button>
            </div>
          </div>
          <div class="discount__description">
            <p>Simply use the code at checkout to ensure seamless connectivity with ease.</p>
          </div>
        </div>
      </div>
    `
    this.#handleShowPopup(discountPopup, 'discountPopup')
  }
  #handleShowPopup(content, name) {
    const isShowed = getSessionStorage(name)
    if (isShowed) return

    const body = $el('body'),
      backdrop = $el('.indent-popup-backdrop'),
      popup = $el('.indent-popup .indent-popup__content')
    backdrop.style.display = 'block'
    body.style.overflow = 'hidden'
    popup.innerHTML = content
    setSessionStorage('discountPopup', 'yes')
    if (name === 'discountPopup') {
      //   checkFocusTime(
      //     '.discount__popup',
      //     'exp_exit_popup_vis_popbook_focu',
      //     'Popup BOOK NOW & get 10% OFF on your tickets'
      //   )
    }
    this.#handleClosePopup()
    this.#copyDiscount()
  }
  #handleClosePopup() {
    const body = $el('body'),
      backdrop = $el('.indent-popup-backdrop'),
      popup = $el('.indent-popup'),
      closePopupBtns = popup.querySelectorAll('[data-popup="close"]')
    closePopupBtns.forEach(btn => {
      btn.addEventListener('click', event => {
        if (backdrop.querySelector('.discount__popup')) {
          //   pushDataLayer(
          //     'exp_exit_popup_but_popbook_clos',
          //     'Close',
          //     'Button',
          //     'Popup BOOK NOW & get 10% OFF on your tickets'
          //   )
        }
        backdrop.style.display = 'none'
        body.style.overflow = 'initial'
      })
    })
    backdrop.addEventListener('click', event => {
      if (backdrop.style.display === 'block' && event.target.matches('.indent-popup-backdrop')) {
        backdrop.style.display = 'none'
        body.style.overflow = 'initial'
      }
    })
  }
  #copyDiscount() {
    $$el('[data-discount]').forEach(btn => {
      btn.addEventListener('click', event => {
        navigator.clipboard.writeText('STAYCONNECTED10')
        if (!$el('.copy_code_inform')) {
          event.currentTarget.insertAdjacentHTML('afterbegin', this.#showCopiedBadge())
          btn.closest('.discount__code-container').classList.add('is_active')
        }
        setTimeout(() => {
          $el('.copy_code_inform').remove()
          if (btn.closest('.discount__code-container').classList.contains('is_active')) {
            btn.closest('.discount__code-container').classList.remove('is_active')
          }
        }, 2000)
        if (event.currentTarget.dataset.target === 'popup') {
          //   pushDataLayer(
          //     'exp_exit_popup_ico_popbook_prom',
          //     'Promo code',
          //     'Icone',
          //     'Popup BOOK NOW & get 10% OFF on your tickets'
          //   )
        }
      })
    })
  }
  #showCopiedBadge() {
    const copied = /* HTML */ ` <div class="copy_code_inform">${icons.copied}</div> `
    return copied
  }
  #insert(html, selector, position = 'beforeend') {
    $el(selector).insertAdjacentHTML(position, html)
  }
  #initMainStyles() {
    const styles = /* HTML */ `
      <style>
        .dn_desk {
          display: none;
        }
        @media (max-width: 768px) {
          .dn_mob {
            display: none;
          }
          .dn_desk {
            display: block;
          }
        }
      </style>
    `
    this.#insert(styles, 'head')
  }
}

new IntentPopup('/collections')
new IntentPopup('/products')

// reDesignPdp
class reDesignPdp {
  constructor() {
    this.device = screen.width <= 768 ? 'Mobile' : 'Desktop'
    this.init()
  }

  init() {
    this.newVideoBlock()
  }

  newVideoBlock() {
    const videoBoxStyle = /* HTML */ `
      <style>
        .video-explanation__block {
          border-radius: 6px;
          background: #eef4fc;
        }
        .video-explanation__link {
          padding: 24px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .video-explanation__link p {
          overflow: hidden;
          color: #333f48;
          text-overflow: ellipsis;
          font-family: Poppins;
          font-size: 13px;
          font-weight: 500;
          line-height: 20px;
          margin: 0;
        }
        .video-explanation__lists {
          padding: 0 24px 24px;
        }
        .video-explanation__opened,
        .video-explanation__closed {
          display: block;
          width: 100%;
          max-width: 24px;
          max-height: 24px;
          height: 100%;
        }
        .video-explanation__opened svg,
        .video-explanation__closed svg {
          width: 100%;
          height: 100%;
        }
        .video-explanation__opened,
        .video-explanation__link.active .video-explanation__closed {
          display: none;
        }
        .video-explanation__link.active .video-explanation__opened {
          display: block;
        }
        .video-explanation__description {
          margin-top: 10px;
        }
        .video-explanation__lists ul,
        .video-explanation__lists ol,
        .video-explanation__description p {
          color: #7b8791;
          font-family: Poppins;
          font-size: 12px;
          font-weight: 500;
          line-height: 20px;
          margin: 0;
        }
      </style>
    `
    const videoBoxHtml = /* HTML */ `
      <section id="videoExplanation">
        ${videoBoxStyle}
        <div class="esim-compatible-inner">
          <div class="video-explanation__block">
            <div class="video-explanation__link">
              <p>Learn how to activate your eSIM</p>
              <span class="video-explanation__icon">
                <span class="video-explanation__closed">+</span>
                <span class="video-explanation__opened">${icons.minus}</span>
              </span>
            </div>
            <div class="video-explanation__lists">
              <div>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/NMEISemQYcU?si=apKbuTqO7fQzd_eR&enablejsapi=1"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <div class="video-explanation__description">
                  <p>Detailed eSIM Activation Guide</p>
                  <ol>
                    <li>
                      Access Your eSIM Settings:
                      <ul>
                        <li>Navigate to your phone's 'Settings.'</li>
                        <li>Tap on 'Cellular' or 'Mobile Data,' then select 'Add Data Plan' or 'Add eSIM.'</li>
                      </ul>
                    </li>
                    <li>
                      Scan Your QR Code:
                      <ul>
                        <li>Locate the QR code in the email we sent you.</li>
                        <li>
                          Use your phone's camera to scan the QR code. Make sure to position the camera directly over
                          the code so it's clearly visible.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Finalize Activation:
                      <ul>
                        <li>
                          Once your phone reads the QR code, a confirmation message will appear asking you to confirm
                          the eSIM profile installation.
                        </li>
                        <li>Confirm and wait for the activation to complete, which may take a few moments.</li>
                        <li>After activation, label your new plan (for example, "Travel eSIM") for easy management.</li>
                        <li>Turn on 'Data Roaming' if you're traveling, to connect to the local network.</li>
                      </ul>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `

    this.#onRenderHtml('#shopify-section-esim-compatible', 'beforebegin', '#videoExplanation', videoBoxHtml)

    waitForElement('#videoExplanation').then(el => {
      this.onClickVideoExplanationBlock()
    })
  }

  onClickVideoExplanationBlock() {
    $$el('.video-explanation__link')[0].classList.add('active')
    jQuery('.video-explanation__link').click(function (e) {
      jQuery(this).toggleClass('active')
      jQuery(this).closest('li').toggleClass('active')
      jQuery(this).next('.video-explanation__lists').slideToggle()
      if (jQuery('.video-explanation__link').not(this)) {
        jQuery('.video-explanation__link').not(this).removeClass('active')
        jQuery('video-explanation__link').not(this).closest('li').removeClass('active')
      }

      if (e.currentTarget.classList.contains('active')) {
        // pushDataLayer('Open block', `${e.currentTarget.querySelector('p').textContent}`);
      } else {
        // pushDataLayer('Close block', `${e.currentTarget.querySelector('p').textContent}`);
      }
    })
  }

  #onRenderHtml(selectorStart, place, selectorNew, newHtml) {
    if (!$el(selectorNew) && $el(selectorStart)) {
      $el(selectorStart).insertAdjacentHTML(place, newHtml)
    }
  }
}

new reDesignPdp()
