const git: string = 'https://conversionratestore.github.io/projects/zenpatch'
declare global {
  interface Window {
    icartCurrencyWihoutFormat: any
  }
}
const svg = {
  tooltip: /* HTML */ `
    <svg class="tooltip_icon" xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 6 12" fill="none">
      <path
        class="path_var"
        d="M2 10.2953H4V12H2V10.2953ZM0 2.54039C0 2.19499 0.0784317 1.8663 0.235294 1.55432C0.392157 1.24234 0.607843 0.974931 0.882353 0.75209C1.15686 0.518107 1.47712 0.334263 1.84314 0.200558C2.20915 0.0668529 2.60131 0 3.01961 0C3.50327 0 3.94118 0.0835661 4.33333 0.250698C4.73856 0.417828 5.0719 0.651811 5.33333 0.952647C5.46405 1.10864 5.56863 1.25348 5.64706 1.38719C5.73856 1.52089 5.81046 1.66574 5.86275 1.82173C5.91503 1.96657 5.94771 2.1337 5.96078 2.32312C5.98693 2.51253 6 2.73538 6 2.99164C6 3.28134 5.99346 3.52646 5.98039 3.72702C5.98039 3.91644 5.96732 4.08357 5.94118 4.22841C5.91503 4.37326 5.88235 4.50139 5.84314 4.61281C5.80392 4.71309 5.75163 4.8078 5.68627 4.89694L4.33333 6.86908C4.24183 7.00279 4.1634 7.14206 4.09804 7.28691C4.03268 7.42061 4 7.56546 4 7.72145V9.0585H2V7.50418C2 7.25905 2.04575 7.02507 2.13725 6.80223C2.22876 6.57939 2.3464 6.36212 2.4902 6.15042L3.7451 4.41226C3.84967 4.26741 3.91503 4.11142 3.94118 3.94429C3.98039 3.77716 4 3.61003 4 3.4429V2.5571C4 2.32312 3.90196 2.12256 3.70588 1.95543C3.52288 1.7883 3.29412 1.70474 3.01961 1.70474C2.78431 1.70474 2.55556 1.77716 2.33333 1.92201C2.11111 2.06685 2 2.27855 2 2.5571V3.52646H0V2.54039Z"
        fill="white"
      />
    </svg>
  `,
  star: `
    <svg class='star_icon' xmlns='http://www.w3.org/2000/svg' width='17' height='15' viewBox='0 0 17 15' fill='none'>
      <path
        d='M8.51514 0L10.8663 4.76393L16.1236 5.52786L12.3194 9.23607L13.2174 14.4721L8.51514 12L3.81285 14.4721L4.71091 9.23607L0.906684 5.52786L6.164 4.76393L8.51514 0Z'
        fill='#F4BE00'
      />
    </svg>
  `
}

const tooltipObj = {
  promoting: `
  <div class='tooltip_block'>
    <div class='tooltip_info'>
      <img src='${git}/img/tooltip_img_bundles.png' class='ls-is-cached lazyloaded'/>
      <div>
        <div class='main_title_wrapper'>
          <h2>SleepyPatch</h2>
          <div class='stars_wrapper'>${svg.star}${svg.star}${svg.star}${svg.star}${svg.star}</div>
        </div>
        <h3>Sleep Promoting Stickers</h3>
        <p>24 patches for bedtime</p>
      </div>
    </div>
    <p class='tooltip_txt'>
      Active Ingredients: Mandarin, Lavender, Sweet Marjoram, Vetiver, Essential Oils ensure the SleepyPatch improves
      sleep quality within 30 minutes, working for 8 - 10 hours, as supported by research.
    </p>
  </div>`
}

export { git, svg, tooltipObj }
