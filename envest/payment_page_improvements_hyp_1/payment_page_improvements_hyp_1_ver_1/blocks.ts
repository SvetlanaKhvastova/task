import { svg, git } from './data'

export const heroVerA = /* HTML */ `
  <div class="hero_section ver_a">
    <div class="hero_section_content">
      <h2 class="hero_section_title is_desk">
        <span class="absol_text">Still looking for</span> a<br />
        <span>sign</span> to start <br />
        <span>investing</span>? This is it!
      </h2>
      <h2 class="hero_section_title is_mob">
        <span class="absol_text">Still looking for</span> a<br />
        <span>sign</span> to start <br />
        <span>investing</span>? This is it!
      </h2>
      <div class="hero_section_image is_mob"><img src="${git}hero_ver_a_mob.webp" alt="Mark Zuckerberg" /></div>
      <p class="hero_section_subtitle">
        If he did it, <span class="accent_color_blue">you can</span> do it too! <br />
        Start earning today with
        <span class="accent_color_blue">Envest</span>
      </p>
    </div>
    <div class="hero_section_image is_desk"><img src="${git}hero_ver_a.webp" alt="Mark Zuckerberg" /></div>
  </div>
`

export const stickyBlock = /* HTML */ ` <div class="sticky_block"></div> `
