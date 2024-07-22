export const git: string = 'https://conversionratestore.github.io/projects/buzzpatch/img/'
declare global {
  interface JQuery {
    swipe: any
  }
}
export const svg = {
  tooltipIcon: `
  <svg xmlns="http://www.w3.org/2000/svg" width="6" height="13" viewBox="0 0 6 13" fill="none">
  <path d="M2 11.1352H4V12.84H2V11.1352ZM0 3.38036C0 3.03495 0.0784317 2.70626 0.235294 2.39428C0.392157 2.08231 0.607843 1.8149 0.882353 1.59206C1.15686 1.35807 1.47712 1.17423 1.84314 1.04052C2.20915 0.906819 2.60131 0.839966 3.01961 0.839966C3.50327 0.839966 3.94118 0.923532 4.33333 1.09066C4.73856 1.25779 5.0719 1.49178 5.33333 1.79261C5.46405 1.9486 5.56863 2.09345 5.64706 2.22715C5.73856 2.36086 5.81046 2.5057 5.86275 2.66169C5.91503 2.80654 5.94771 2.97367 5.96078 3.16309C5.98693 3.3525 6 3.57534 6 3.83161C6 4.1213 5.99346 4.36643 5.98039 4.56699C5.98039 4.7564 5.96732 4.92353 5.94118 5.06838C5.91503 5.21323 5.88235 5.34136 5.84314 5.45278C5.80392 5.55306 5.75163 5.64777 5.68627 5.7369L4.33333 7.70905C4.24183 7.84275 4.1634 7.98203 4.09804 8.12687C4.03268 8.26058 4 8.40542 4 8.56141V9.89846H2V8.34414C2 8.09902 2.04575 7.86504 2.13725 7.64219C2.22876 7.41935 2.3464 7.20208 2.4902 6.99038L3.7451 5.25222C3.84967 5.10738 3.91503 4.95139 3.94118 4.78426C3.98039 4.61713 4 4.44999 4 4.28286V3.39707C4 3.16309 3.90196 2.96253 3.70588 2.7954C3.52288 2.62827 3.29412 2.5447 3.01961 2.5447C2.78431 2.5447 2.55556 2.61712 2.33333 2.76197C2.11111 2.90682 2 3.11852 2 3.39707V4.36643H0V3.38036Z" fill="#FFF"/>
</svg>
  `
}

export const bundlesInfo = {
  ver_b: {
    id: '43643653652524',
    img: `${git}whole_family_protection_kit_bundle.png`,
    title: 'Whole family protection kit',
    description: '3 Packs + 2 Packs of Mosquito Patches For Adults',
    price: '$10.00 Each',
    imgTooltip: `${git}whole_family_protection_kit_bundle_tooltip.png`,
    mainTitleTooltip: 'BuzzPatch',
    subTitleTooltip: 'Mosquito Repellent Patches',
    boldTitleTooltip: '40 Adult-Sized Patches',
    descriptionTooltip:
      'The same #1 best selling BuzzPatch your kiddos know and love, but with grown-up sizes and colors! (No judgment if you still want to wear the smiley faces, though.)'
  },
  ver_c: {
    id: '43643656339500',
    img: `${git}outdoor_protection_kit_bundle.png`,
    title: 'Outdoor protection kit',
    description: '3 Packs + 48 Kids Tick <br/> Repellent Stickers',
    price: '$10.00 Each',
    imgTooltip: `${git}outdoor_protection_kit_bundle_tooltip.png`,
    mainTitleTooltip: 'TrailPatch',
    subTitleTooltip: 'Kids Tick Repellent Stickers',
    boldTitleTooltip: '48 Colorful Patches',
    descriptionTooltip:
      'Let your child enjoy the outdoors worry-free with our tick-repellent stickers. Infused with natural essential oils, these stickers effectively repel ticks. Just stick one on your child’s clothing for hours of protection and outdoor fun.'
  }
}

export const tooltipObj = {
  ver_b: `
  <div class='tooltip_block'>
    <div>
      <div class='img_wrapper'>
       <img src='${bundlesInfo.ver_b.imgTooltip}' alt='${bundlesInfo.ver_b.mainTitleTooltip}' />
      </div>
      <div>
        <h2>${bundlesInfo.ver_b.mainTitleTooltip}</h2>
        <p>${bundlesInfo.ver_b.subTitleTooltip}</p>
        <p>${bundlesInfo.ver_b.boldTitleTooltip}</p>
      </div>
    </div>
    <p>${bundlesInfo.ver_b.descriptionTooltip}</p>
  </div>
  `,
  ver_c: `
  <div class='tooltip_block'>
    <div>
      <div class='img_wrapper'>
       <img src='${bundlesInfo.ver_c.imgTooltip}' alt='${bundlesInfo.ver_c.mainTitleTooltip}' />
      </div>
      <div>
        <h2>${bundlesInfo.ver_c.mainTitleTooltip}</h2>
        <p>${bundlesInfo.ver_c.subTitleTooltip}</p>
        <p>${bundlesInfo.ver_c.boldTitleTooltip}</p>
      </div>
    </div>
    <p>${bundlesInfo.ver_c.descriptionTooltip}</p>
  </div>
  `
}
