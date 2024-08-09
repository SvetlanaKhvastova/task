import { svg, git } from './data'

export const heroVerA = /* HTML */ `
  <div class="hero_section ver_a">
    <div class="hero_section_content">
      <h2 class="hero_section_title">
        Your score is <br /><span class="accent_color_blue">better</span> than
        <span class="accent_color_blue">54%</span> of Cerebrum IQ users!
      </h2>
      <p class="hero_section_subtitle">Continue to obtain your certificate</p>
      <!-- <button class="hero_btn">Get My IQ Certificate Now!</button> -->
    </div>
    <div class="hero_section_image"><img src="${git}hero_ver_a.png" alt="certificate" /></div>
  </div>
`

export const heroVerB = /* HTML */ `
  <div class="hero_section ver_b">
    <div class="hero_section_content">
      <h2 class="hero_section_title">
        <span class="accent_color_blue">Find out</span> where you stand <span class="accent_color_blue">compared</span>
        <br />
        to others!
      </h2>
      <!-- <button class="hero_btn">Get My IQ Score Now!</button> -->
    </div>
    <div class="hero_section_image">
      <img src="${git}hero_ver_b.png" alt="comparative columns" class="is_desk" />
      <img src="${git}hero_ver_b_mob.png" alt="comparative columns" class="is_mob" />
    </div>
  </div>
`

export const heroVerC = /* HTML */ `
  <div class="hero_section ver_c">
    <div class="hero_section_content">
      <h2 class="hero_section_title">
        Boost your IQ by up <br />
        to <span class="accent_color_blue">37%</span> in <span class="accent_color_blue">4 weeks</span>.
      </h2>
      <p class="hero_section_subtitle">Continue to find out your IQ score and how to improve it.</p>
      <!-- <button class="hero_btn">Get My IQ Score Now!</button> -->
    </div>
    <div class="hero_section_image"><img src="${git}hero_ver_c.png" alt="chart" /></div>
  </div>
`
// HYP 2
export const moneyBackGuaranteeBlock = /* HTML */ `
  <div class="money_back_guarantee_block">
    <ul>
      <li>
        ${svg.moneyBackGuaranteeIcon1}
        <span>No commitment. Cancel anytime.</span>
      </li>
      <li>
        ${svg.moneyBackGuaranteeIcon2}
        <span
          >30-Day Money-Back <br />
          Guarantee</span
        >
      </li>
    </ul>
  </div>
`

export const paymentInfoListVerA = /* HTML */ `
  <ul id="paymentInfoListVerA">
    <li>
      <div class="img_wrapper"><img src="${git}smart_icon.svg" alt="icon" /></div>
      <div>
        <h3>
          Find out your precise <br />
          <span class="accent_color_blue_second">IQ score</span>
        </h3>
        <p>
          How smart are you compared <br />
          to others in USA <img src="${git}flag_us.svg" alt="flag us" />?
        </p>
      </div>
    </li>
    <li>
      <div class="img_wrapper"><img src="${git}points_icon.svg" alt="icon" /></div>
      <div>
        <h3>
          <span class="accent_color_blue_second">Unleash</span> your mind’s true <br />
          <span class="accent_color_blue_second">potential!</span>
        </h3>
        <p>Find out your strong and weak points and how to use it in your benefit</p>
      </div>
    </li>
    <li>
      <div class="img_wrapper"><img src="${git}program_icon.svg" alt="icon" /></div>
      <div>
        <h3>
          <span class="accent_color_blue_second">Boost IQ</span> by up to 37% in <br />
          4 weeks. Effortless!
        </h3>
        <p>With our easy-to-go personalized brain training program</p>
      </div>
    </li>
  </ul>
`

export const paymentInfoListVerB = /* HTML */ `
  <ul id="paymentInfoListVerB">
    <li>
      <span class="check_icon">${svg.checkIcon} </span>
      <p class="accent_color_blue_second"><b>Complete your IQ test</b></p>
    </li>
    <li>
      <p>
        <b>Start</b> your trial and get your precise <br />
        IQ score
      </p>
    </li>
    <li>
      <p>
        Find your <b>strengths & growth</b> <br />
        points
      </p>
    </li>
    <li>
      <p><b>Boost IQ</b> by up to <b>37% </b>in 4 weeks</p>
    </li>
  </ul>
`

export const paymentInfoListVerC = /* HTML */ `
  <ul id="paymentInfoListVerC">
    <li>
      ${svg.paymentInfoListVerCIcon1}
      <p>Get your <b>precise IQ score</b></p>
    </li>
    <li>
      ${svg.paymentInfoListVerCIcon2}
      <p>Find your <b>strengths</b> & <b>growth points</b></p>
    </li>
    <li>
      ${svg.paymentInfoListVerCIcon3}
      <p><b>Know</b> where you <b>stand</b> compared to others</p>
    </li>
    <li>
      ${svg.paymentInfoListVerCIcon4}
      <p><b>Boost IQ</b> by up to <b>37%</b> in 4 weeks</p>
    </li>
  </ul>
`

export const leftPartPaymentBlock = (txtCount: string) => {
  return /* HTML */ `
    <div class="left_part_payment_block">
      <p>
        Over <b><span class="count_var">${txtCount}</span></b> tests taken today Avg. IQ score: <b>103</b>
      </p>
      <h2>Try <span class="accent_color_blue">Cerebrum IQ</span> for 7 days</h2>
      <!-- ${paymentInfoListVerA} -->
      ${paymentInfoListVerB}
      <!-- ${paymentInfoListVerC} -->
    </div>
  `
}
