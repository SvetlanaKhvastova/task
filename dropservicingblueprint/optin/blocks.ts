import { learn, reviews, figure, trainingFor, trustpilotReviews, faq, svg, blockers, stats } from './data'

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
  </d>
`

export const founderName = /* HTML */ ` <span class="founder_name">Dylan Sigley, Founder, Dropservicing.com</span> `

export const blockersBlock = /* HTML */ `
  <div class="blokers">
    <h3>What’s stopping you from achieving your financial and lifestyle goals?</h3>
    <ul class="blokers_list">
      ${blockers
        .map(
          ({ id, icon, text, button }) => /* HTML */ `
            <li>
              <div>
                ${icon}
                <p>${text}</p>
              </div>
              <div data-id="${id}" class="btn_see_details">${button}</div>
            </li>
          `
        )
        .join('')}
    </ul>
  </div>
`

export const mainBlock = /* HTML */ `
  <section id="main_block">
    <div class="wrapper">
      <header>
        <img src="${git}/logo.png" alt="logo" />
        ${statsBlock}
      </header>
      <div class="hero_wrapper ver_c">
        <div class="info">
          <div class="tp_label">
            <img src="${git}/trustpilot.svg" alt="stars" />
            <p>
              TrustScore&nbsp;
              <img src="${git}/trustpilot_star.svg" alt="star" />
              <b>4.8/5</b>&nbsp;<span>300+ Reviews</span>
            </p>
          </div>
          <h1>
            The 4 steps to start your online business <br />
            in 2024 and unlock financial freedom goals
          </h1>
          <button class="cta pop">Yes! Get Access Now!</button>
        </div>
        <div class="video_wrapper">
          <div class="video">
            <div class="wistia_embed wistia_async_q8xu3220ak" style="width:930px;height:521px;"></div>
          </div>
          ${founderName}
        </div>
      </div>
      ${blockersBlock}
    </div>
  </section>
`

export const reviewsBlock = /* HTML */ `
  <section id="base_review">
    <h2>Why Join This Webinar?</h2>
    <p>
      Learn how to start your business within 30 days. See howinfo these success stories transformed their lives and
      achieved their financial freedom goals
    </p>
    <div class="crs_container">
      <ul>
        ${reviews
          .map(
            ({ name, review, img, videoId }) => /* HTML */ `
              <li>
                <div class="slide" data-video="${videoId}">
                  <div>
                    <div class="img">
                      <img src="${git}/${img}" alt="${name}" />
                    </div>
                    <p><b>${name}</b><img src="${git}/rating_stars.png" alt="stars" /></p>
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
      <p>Access Dylan’s formula to learn how to start your online business and achieve financial freedom goals</p>
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
                  <p><b>${name}</b><img src="${git}/rating_stars.png" alt="stars" /></p>
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
        ${trainingFor.map(item => /* HTML */ `<li><img src="${git}/check.svg" alt="check" />${item}</li>`).join('')}
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
        <p>3,000+ Members <img src="${git}/members.svg" alt="members" /></p>
        <p>4M+ In Revenue <img src="${git}/revenue.svg" alt="revenue" /></p>
        <p>100+ Countries <img src="${git}/countries.svg" alt="countries" /></p>
        <p>15M+ Views <img src="${git}/views.svg" alt="views" /></p>
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
      <img src="${git}/product.jpg" alt="product" />
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
        Additionally, This site is NOT endorsed by Google or Meta in any way.
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
  <div class="crs_popup_form">
    <div class="form">
      <div class="close"></div>
      <form>
        <h2>Join our Exclusive Online Training</h2>
        <p class="icons">
          <span>
            <img src="${git}/dollar.svg" alt="dollar" />
            Free
          </span>
          <span>
            <img src="${git}/frame.svg" alt="frame" />
            Live Training
          </span>
          <span>
            <img src="${git}/calendar.svg" alt="calendar" />
            Today
          </span>
        </p>
        <div class="inputs1">
          <label><input type="text" placeholder="Enter your name..." name="name" /></label>
          <label><input type="email" placeholder="Enter email address..." name="email" /></label>
          <button class="cta register">Grab Your FREE Seat Now!</button>
        </div>
        <div class="inputs2"></div>
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
    <button class="cta register_mob">Select a Time to Join</button>
  `
}

export const blockersPopupBlock = /* HTML */ `
  <div class="crs_blockers_popup">
    <div class="close"></div>
    <div class="crs_blockers_content"></div>
  </div>
`

export const blockersPopupCntentBlock = (
  reviewerPhoto: string,
  reviewerName: string,
  reviewText: string,
  stars: string,
  icon: string,
  title: string,
  text: string,
  button: string
) => {
  return /* HTML */ `
    <div class="video_wrapper">
      <div class="head">
        <div class="img">
          <img src="${reviewerPhoto}" alt="Lauren" />
        </div>
        <p><b>${reviewerName}</b><img src="${stars}" alt="stars" /></p>
        <p>${reviewText}</p>
      </div>
    </div>
    <div class="info_wrapper">
      ${icon}
      <h3>${title}</h3>
      <p>${text}</p>
      <button class="cta pop">${button}</button>
    </div>
  `
}
