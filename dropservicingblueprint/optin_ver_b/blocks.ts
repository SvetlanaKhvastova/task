import { learn, reviews, figure, trainingFor, trustpilotReviews, faq, svg, blockers, stats, stories } from './data'

const git = 'https://conversionratestore.github.io/projects/dropservicing/optin/img'

export const statsBlock = /* HTML */ `
  <div class="stats_block">
    <ul class="stats">
      ${stats
        .map(
          ({ text, icon }) => /* HTML */ `
            <li class="stat_item">
              <p>${text}</p>
              ${icon}
            </li>
          `
        )
        .join('')}
    </ul>
  </div>
`

export const founderName = /* HTML */ `
  <span class="founder_name"
    >Dylan Sigley, Founder, <a href="https://dropservicing.com/homepage">Dropservicing.com</a></span
  >
`

export const storiesBlock = /* HTML */ `
  <div class="crs_stories">
    <p>Our Success Stories</p>
    <div class="crs_stories_block">
      <div class="crs_stories_nav">
        ${stories
          .map(
            (s, i) => `<span class="${i === 0 ? 'active' : ''}">
                <img src="https://conversionratestore.github.io/projects/dropservicing/popups/img/avatar_new_${i}.png" alt="avatar" />
              </span>`
          )
          .join('')}
      </div>
      <div class="crs_stories_content">
        ${stories
          .map(
            (s, i) =>
              /* HTML */ `<div class="crs_story ${i === 0 ? 'active' : ''}">
                <div class="crs_story_head">
                  <span>
                    <img
                      src="https://conversionratestore.github.io/projects/dropservicing/popups/img/avatar_new_${i}.png"
                      alt="avatar"
                    />
                  </span>
                  <p>
                    <b>${s.name}</b><br />
                    <span>Verified Customer <img src="${git}/check_exit_img.png" alt="icon" /> </span>
                  </p>
                </div>
                <img src="${git}/rating_stars.png" alt="stars" />
                <p>${s.text}</p>
              </div>`
          )
          .join('')}
      </div>
    </div>
  </div>
`

export const blockersBlock = /* HTML */ `
  <div class="blokers">
    <h3>What’s stopping you from achieving your financial and lifestyle goals?</h3>
    <ul class="blokers_list">
      ${blockers
        .map(
          ({ id, icon, text, button }) => /* HTML */ `
            <li>
              <div data-id="${id}" class="blokers_item" data-seedetails>
                <div>
                  ${icon}
                  <p>${text}</p>
                </div>
                <div class="btn_see_details">${button}</div>
              </div>
            </li>
          `
        )
        .join('')}
    </ul>
    <div class="show_more_block mobile"><span>Show more options</span> ${svg.showMoreIcon}</div>
  </div>
`

export const tpLabel = /* HTML */ `
  <div class="tp_label">
    <img src="${git}/trustpilot.svg" alt="stars" />
    <p>
      TrustScore&nbsp;
      <img src="${git}/trustpilot_star.svg" alt="star" />
      <b>4.8/5</b>&nbsp;<span>300+ Reviews</span>
    </p>
  </div>
`

export const seatsLeftBlock = /* HTML */ `
  <p class="seats_left_txt">
    The event is almost full:
    <b><span class="seats_left_value"></span> seats left</b>
  </p>
`

export const progressBarBlock = /* HTML */ `
  <div class="progress_bar_container">
    <div class="progress_bar"></div>
  </div>
`

export const trustedBlock = /* HTML */ `
  <div class="trusted_block">
    <img src="${git}/trusted_img.png" alt="img people" />
    <p>The <b>#1</b> free online business training.<br />Trusted by <span>4M+ people.</span></p>
  </div>
`

export const infoBlock = /* HTML */ `
  <ul class="info_block">
    <li class="info_item">
      <span class="info_icon">${svg.infoBlockIcon1}</span>
      <p>
        Discover <b>‘Drop Servicing’</b>—a new method to build a simple online business and achieve financial freedom.
      </p>
    </li>
    <li class="info_item">
      <span class="info_icon">${svg.infoBlockIcon2}</span>
      <p>
        Learn a 4-step process to land your <b>first sale in 30 days</b> using just a laptop and an internet connection.
      </p>
    </li>
  </ul>
`

export const safeAndSecureBlock = /* HTML */ `
  <div class="safe_and_secure_block">
    <span class="safe_and_secure_icon"> ${svg.safeAndSecureIcon} </span>
    <p>Your data is safe and secure. No ads or spam</p>
  </div>
`

export const mainBlock = /* HTML */ `
  <section id="main_block" class="ver_b">
    <div class="img_bgr">
      <img src="${git}/hero_img.webp" alt="img" />
      ${founderName}
    </div>
    <div class="wrapper">
      <header>
        <img src="${git}/logo.png" alt="logo" />
      </header>
      <div class="hero_wrapper">
        <div class="info">
          ${tpLabel}
          <h1>The 4 steps to start your online business in 2024 and unlock financial freedom goals</h1>
          <button class="cta pop">Yes! Get Access Now!</button>
          <div class="mobile hero_img_wrapper">
            <img src="${git}/hero_img_mob.webp" alt="img" class="hero_img" />
            ${founderName}
          </div>
          ${statsBlock}
        </div>
      </div>
      ${storiesBlock}
    </div>
  </section>
  <section id="blokers">${blockersBlock}</section>
`

export const reviewsBlock = /* HTML */ `
  <section id="base_review">
    <h2>Why Join This Webinar?</h2>
    <p>
      Learn how to start your business within 30 days. See how these success stories transformed their lives and
      achieved their financial freedom goals
    </p>
    <div class="crs_container">
      <ul class="${window.innerWidth >= 768 ? 'ver_b' : ''}">
        ${reviews
          .map(
            ({ name, review, img, videoId }) => /* HTML */ `
              <li>
                <div class="slide" data-video="${videoId}">
                  <div>
                    <div class="img">
                      <img src="${git}/${img}" alt="${name}" />
                    </div>
                    <p><b>${name}</b><img src="${git}/rating_stars_new.png" alt="stars" /></p>
                  </div>
                  <p>${review}</p>
                </div>
              </li>
            `
          )
          .join('')}
      </ul>
    </div>
  </section>
`

export const bonusBlock = /* HTML */ `
  <section id="bonus_block">
    <div class="crs_container">
      <div>
        <h2>Exclusive Bonuses!</h2>
        <p>Stay until the end of the training to receive the following:</p>
        <ul>
          <li>Comprehensive <b>12K Sale Tutorial</b> (+Free Copy/Paste Template)</li>
          <li>A Quick Guide to Drop Servicing (Get Selling FAST and for ZERO)</li>
        </ul>
        <button class="cta pop">Grab Your FREE Seat Now!</button>
      </div>
      <img src="${git}/bonus.png" alt="bonus" />
    </div>
  </section>
`

export const hostBlock = /* HTML */ `
  <section id="host_block" class="crs_container">
    <div class="img">
      <img src="${git}/founder.jpg" alt="dylan" class="desktop" />
      <img src="${git}/founder_mob.jpg" alt="dylan" class="mobile" />
      <a href="https://dropservicing.com/homepage"></a>
    </div>
    <div class="info">
      <h2>Your Host: Dylan Sigley</h2>
      <p>7 Figure Online Entrepreneur</p>
      <ul>
        ${figure.map(item => /* HTML */ `<li><span></span>${item}</li>`).join('')}
      </ul>
      <p>Access Dylan's formula to learn how to start your online business and achieve financial freedom goals</p>
      <button class="cta pop">Unlock Dylan’s Formula for Free</button>
    </div>
  </section>
`

export const videoBlock = /* HTML */ `
  <section id="video_block">
    <div class="crs_container">
      <h2>Hear From Our Participants</h2>
      <p>
        These are past attendees who were happy with the training and have allowed us to share their success stories.
        The experiences and successes on this page are real examples from our participants but are not typical or
        guaranteed. We do not guarantee any earnings, as your results will vary and depend on many factors unique to
        you. All business entails financial risk as well as significant and consistent effort and action
      </p>
    </div>
    <ul>
      ${reviews
        .map(
          ({ name, review, img, videoId }) => /* HTML */ `
            <li>
              <div class="video_slide" data-video="${videoId}">
                <div class="head">
                  <div class="img">
                    <img src="${git}/${img}" alt="${name}" />
                  </div>
                  <p><b>${name}</b><img src="${git}/rating_stars_new.png" alt="stars" /></p>
                  <p>${review}</p>
                </div>
                <div class="video">
                  <div class="wistia_embed wistia_async_${videoId}" style="width:100%;height:100%;"></div>
                </div>
              </div>
            </li>
          `
        )
        .join('')}
    </ul>
  </section>
`

export const trainingForBlock = /* HTML */ `
  <section id="training_for" class="crs_container">
    <div class="photo">
      <img src="${git}/founder2.jpg" alt="dylan" />
      <div class="bottom_info">
        <p>Spaces are limited and filling up fast</p>
        <p>Grab this limited time offer to learn Drop Servicing today</p>
        <div class="link">
          Dylan Sigley, Founder, <a href="https://dropservicing.com/homepage">Dropservicing.com</a>
        </div>
      </div>
    </div>
    <div class="info">
      <h2>Who is the Training for?</h2>
      <p>This free training is designed for:</p>
      <ul>
        ${trainingFor.map(item => /* HTML */ `<li>${svg.checkBlueIcon}${item}</li>`).join('')}
      </ul>
      <p>If any of the above apply to you, you're in the right place!</p>
      <p>Join your Free training to start your business and transform your career.</p>
      <button class="cta pop">Join The FREE Training Now</button>
    </div>
  </section>
`

export const trustPilotBlock = /* HTML */ `
  <section id="trust_pilot">
    <div class="crs_container">
      <h2>
        TrustScore&nbsp;<img src="${git}/trustpilot_star.svg" alt="" />&nbsp;<b>4.8/5</b>&nbsp;<span class="desktop"
          >300+ Reviews</span
        >
      </h2>
      <p>People just like you joined the training</p>
      <ul>
        ${trustpilotReviews
          .map(
            ({ name, title, text, date, link }) => /* HTML */ `
              <li>
                <div class="review_slide">
                  <p class="name">${name}<img src="${git}/stars_tp.svg" alt="stars" /></p>
                  <a href="${link}">${title}</a>
                  <p class="text">${text}</p>
                  <p>
                    <span><img src="${git}/check2.svg" alt="check" />Verified User</span>${date}
                  </p>
                </div>
              </li>
            `
          )
          .join('')}
      </ul>
    </div>
    <div class="points">
      <div class="crs_container">
        <p>3,000+ Members ${svg.membersIcon}</p>
        <p>4M+ In Revenue ${svg.revenueIcon}</p>
        <p>100+ Countries ${svg.countriesIcon}</p>
        <p>15M+ Views ${svg.viewsIcon}</p>
      </div>
    </div>
  </section>
`

export const faqBlock = /* HTML */ `
  <section id="faq_block">
    <div class="crs_container">
      <h2>Frequently asked questions</h2>
      <ul>
        ${faq
          .map(
            ({ question, answer }) => /* HTML */ `
              <li>
                <p class="question">${question}<span></span></p>
                <p class="answer">${answer}</p>
              </li>
            `
          )
          .join('')}
      </ul>
    </div>
  </section>
`

export const lastCtaBlock = /* HTML */ `
  <section id="last_cta" class="crs_container">
    <div class="img">
      <img src="${git}/product.png" alt="product" />
    </div>
    <div>
      <h2>Your Future Starts Here!</h2>
      <p>Transform your life by learning how to create a successful Drop Servicing business.</p>
      <p>Join us and take the first step toward financial independence.</p>
      <button class="cta pop">Join The Exclusive Training</button>
    </div>
  </section>
`

export const footerBlock = /* HTML */ `
  <footer>
    <div class="crs_container">
      <p>
        Dylan Sigley Consulting - FZCO does not promise or guarantee your financial success, nor warrant any earning
        claims made for their products. Your results will vary and depend on many factors that are unique to you
        including passion, business acumen, work ethic, and more. All business entails risk as well as consistent effort
        and action. Sales figures stated or implied are personal sales figures or that of our members. Please understand
        these results are not typical. We are using these as examples of what is possible when you commit and take
        consistent action. We do not guarantee any earnings because your results will vary and depend on many factors,
        including but not limited to your background, experience, and work ethic. All business entails financial risk as
        well as massive and consistent effort and action.
      </p>
      <p>
        NOT GOOGLE or META: This site is not a part of the Google website, Google Inc, Meta website, or Meta, Inc.
        Additionally, This site is NOT endorsed by Google or Meta in any way.<br class="mobile" /><br
          class="mobile"
        /><a href="https://www.dropservicingblueprint.com/">Dylan Sigley Consulting - FZCO</a>
      </p>
      <p>
        <a href="https://www.dropservicingblueprint.com/">Dylan Sigley Consulting - FZCO</a> | IFZA Business Park, DDP,
        Dubai Silicon Oasis | +1 (786) 475-8716 | info@dropservicingblueprint.com
      </p>
      <p>
        <a href="https://www.dropservicingblueprint.com/privacy-policy">Privacy Policy </a>
        <a href="https://www.dropservicingblueprint.com/earnings-disclaimer">Earnings Disclaimer</a>
        <a href="https://www.dropservicingblueprint.com/terms-and-conditions">Terms and Conditions</a>
      </p>
    </div>
  </footer>
`

export const popupBlock = /* HTML */ `
  <div class="crs_popup_form" data-closeform>
    <div class="form">
      <div class="close" data-closeform>${svg.closeIconPopup}</div>
      <form class="crs_form">
        <div class="inputs1">
          <h2>Access Your Exclusive Online Training</h2>
          ${seatsLeftBlock} ${progressBarBlock} ${trustedBlock} ${infoBlock}
          <h3 class="inputs1_title">
            Enter your email <br class="mobile" />
            to get a link for the live training
          </h3>
          <label><input type="email" placeholder="Enter email address..." name="email" /></label>
          ${safeAndSecureBlock}
          <label class="name_label is_hidden"><input type="text" placeholder="Enter your name..." name="name" /></label>
          <button class="cta register">GET FREE TRAINING</button>
        </div>
        <div class="inputs2"></div>
        ${tpLabel}
      </form>
      <div class="bonus">
        <p><img src="${git}/present.png" alt="gift" /> Exclusive bonuses!</p>
        <p>Stay until the end of the training to receive the following:</p>
        <ul>
          <li>Comprehensive 12K Sale Tutorial (+Free Copy/Paste Template)</li>
          <li>A Quick Guide to Drop Servicing (Get Selling FAST and for ZERO)</li>
        </ul>
      </div>
    </div>
  </div>
`

export const videoPopupBLock = /* HTML */ `
  <div class="crs_video_popup">
    <div class="video">
      <div class="crs_close"></div>
    </div>
    <div class="banner">
      <div>
        <p>Free Training: Learn how to earn online with Drop Servicing</p>
        <p>
          <img src="${git}/trustpilot.svg" alt="trustpilot" />TrustScore&nbsp;<img
            src="${git}/trustpilot_star.svg"
            alt="star"
          /><span>4.8</span>
        </p>
      </div>
      <button class="cta pop">Grab Your FREE Seat Now!</button>
    </div>
  </div>
`

type schedule = {
  date: string
  schedule: number
  comment: string
}

export const selectTime = (schedules: schedule[], timeZone: string) => {
  const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
  return /* HTML */ `
    <h3 class="inputs2_title">Select a time to join</h3>
    <ul class="time_list">
      ${schedules
        .map(({ date, schedule }, i) => {
          const weekDay = new Date(date).toLocaleString('en-us', { weekday: 'long' })
          const dateStr = new Date(date).toLocaleString('en-us', { month: 'long', day: 'numeric' })
          const time = new Date(date).toLocaleString('en-us', { hour: 'numeric', minute: 'numeric' })
          const diff = new Date(date).getTime() - new Date().getTime()
          const nextDate = new Date(date).getTime() + 1000 * 60 * 15
          const nextTime = new Date(nextDate).toLocaleString('en-us', { hour: 'numeric', minute: 'numeric' })
          const nextDateDiff = nextDate - new Date().getTime()
          const diffMinutes = Math.ceil((diff < 0 ? nextDateDiff : diff) / (1000 * 60))

          return /* HTML */ `
            <li class="${i === 0 ? 'selected' : ''}" data-schedule="${schedule}">
              <span class="point"></span>
              <div>
                <p>${weekDay}, ${dateStr}, ${diff < 0 ? nextTime : time}</p>
                <p>${localTimeZone}</p>
              </div>
              <span class="comment"
                >Starts in ${i === 0 ? diffMinutes : Math.ceil(diff / (1000 * 60 * 60))}
                ${i === 0 ? 'minutes' : 'hours'}</span
              >
            </li>
          `
        })
        .join('')}
    </ul>
    <button class="cta register_mob">Select a Time</button>
  `
}

export const blockersPopupBlock = /* HTML */ `
  <div class="crs_blockers_popup" data-closeblokers>
    <div class="crs_blockers_popup_container">
      <div class="close" data-closeblokers>${svg.closeIconPopup}</div>
      <div class="crs_blockers_content"></div>
    </div>
  </div>
`

export const blockersPopupContentBlock = (
  reviewerPhoto: string,
  reviewerName: string,
  reviewText: string,
  stars: string,
  icon: string,
  title: string,
  text: string,
  button: string,
  video: string
) => {
  return /* HTML */ `
    <h3 class="mobile">${title}</h3>
    <div class="video_wrapper">
      <div class="review_wrapper">
        <div class="review_header">
          <div class="img_wrapper">
            <img src="${reviewerPhoto}" alt="${reviewerName}" />
          </div>
          <div class="review_info">
            <p>${reviewerName}</p>
            <img src="${stars}" alt="stars" />
          </div>
        </div>
        <p>${reviewText}</p>
      </div>
      <div class="video">
        <div class="wistia_embed wistia_async_${video} wistia_embed_initialized" style="width:100%;height:100%;"></div>
      </div>
    </div>
    <div class="info_wrapper">
      <div class="title_wrapper">
        ${icon}
        <h3>${title}</h3>
        <div class="txt_container_abs">
          <div class="txt_container">${text}</div>
        </div>
      </div>
      ${window.innerWidth >= 768
        ? `<div class="sticky_btn_wrapper_desktop"><button class="cta pop">${button}</button></div>`
        : ''}
    </div>
  `
}

export const exitPopup = /* HTML */ `
  <div class="crs_exit_popup" data-closeexit>
    <div class="crs_exit_content">
      <div class="close" data-closeexit>${svg.closeSvgExitPopup}</div>
      <div class="crs_main_info">
        <h2>Wait! Don't Miss Out on This Opportunity!</h2>
        ${seatsLeftBlock} ${progressBarBlock}
        <p>This free training is only available for a short time—don’t miss your last chance!</p>
        <div class="crs_list_block">
          <h3>
            <img src="${git}/check_exit_img.png" alt="icon" />
            You’re just one step away from...
          </h3>
          <ul>
            <li>
              ${svg.checkSvgExitPopup}
              <p>Discovering the proven Drop Servicing formula to start your online business</p>
            </li>
            <li>
              ${svg.checkSvgExitPopup}
              <p>Unlocking financial freedom with practical, results-driven strategies</p>
            </li>
            <li>
              ${svg.checkSvgExitPopup}
              <p>Accessing a simple 4-step process + exclusive bonuses</p>
            </li>
          </ul>
        </div>
        <button class="cta pop">Yes, I want free training & bonuses</button>
        <div class="no_btn">No, I'll miss out</div>
      </div>
      ${storiesBlock}
    </div>
  </div>
`
