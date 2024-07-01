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
