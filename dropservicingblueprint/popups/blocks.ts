import { stories, listTitle, lists, note, subTitle, title } from './data'
const git = 'https://conversionratestore.github.io/projects/dropservicing'
const closeSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
<g filter="url(#filter0_d_2047_2074)">
<circle cx="19" cy="15" r="15" fill="#222222"/>
<circle cx="19" cy="15" r="13.8" stroke="white" stroke-width="2.4"/>
</g>
<path d="M15.0002 19L23 11M22.9998 19L15 11" stroke="white" stroke-width="2.4" stroke-linecap="round"/>
<defs>
<filter id="filter0_d_2047_2074" x="0" y="0" width="38" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2047_2074"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2047_2074" result="shape"/>
</filter>
</defs>
</svg>`
const checkSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M15 8L9 15L5 11" stroke="#2F2F2F" stroke-width="2"/>
</svg>`

export const popup = (interval: number) => {
  const listTitleIcon = interval === 0 || interval === 1 ? `hat.png` : interval === 2 ? `prize.png` : `top.png`
  return /* HTML */ `
    <div class="crs_popup interval_${interval}" data-interval="${interval}">
      <span class="crs_close">${closeSVG}</span>
      <div class="crs_main_info">
        <h2>${title[interval]}</h2>
        ${interval !== 3 ? /* HTML */ `<p class="sub">${subTitle[interval]}</p>` : ''}
        <div class="crs_list_block">
          <h3>
            <img src="${git}/popups/img/${listTitleIcon}" alt="icon" />
            ${listTitle[interval]}
          </h3>
          <ul>
            ${lists[interval].map(item => `<li>${checkSVG}<p>${item}</p></li>`).join('')}
          </ul>
          ${interval !== 3 ? '<p><b>...and much more.</b></p>' : ''}
        </div>
        ${interval !== 3
          ? /* HTML */ `<div class="crs_note">
              <img src="${git}/popups/img/info-circle.png" alt="info" />
              <p><b>IMPORTANT NOTE:</b> ${note[interval]}</p>
            </div>`
          : ''}
        ${interval === 3
          ? /* HTML */ `<div class="crs_guarantee">
              <h4>100% satisfaction</h4>
              <p>If you’re not completely satisfied after implementing our step-by-step plan, get a full refund!</p>
              <img src="${git}/popups/img/guaranteed.svg" alt="guaranteed" />
            </div>`
          : ''}
        ${interval < 2
          ? `<button class="crs_btn">Continue Watching</button>`
          : `<a class="crs_btn" href="https://start.dropservicing.com/partner" target="_blank">Access Special Offer Now</a>`}
      </div>
      <div class="crs_stories">
        <p>Our Success Stories</p>
        <div class="crs_stories_block">
          <div class="crs_stories_nav">
            ${stories
              .map(
                (s, i) => `<span class="${i === 0 ? 'active' : ''}">
                <img src="${git}/popups/img/avatar_${i}.jpg" alt="avatar" />
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
                        <img src="${git}/popups/img/avatar_${i}.jpg" alt="avatar" />
                      </span>
                      <p>
                        <b>${s.name}</b><br />
                        <span>Verified Customer ✅</span>
                      </p>
                    </div>
                    <img src="${git}/optin/img/rating_stars.png" alt="stars" />
                    <p>${s.text}</p>
                  </div>`
              )
              .join('')}
          </div>
        </div>
      </div>
    </div>
  `
}
