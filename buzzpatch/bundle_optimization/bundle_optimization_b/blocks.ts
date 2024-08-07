import { svg, git, bundlesInfo, tooltipObj } from './data'

export const budleHtmlVerB = (price: string) => {
  return /* HTML */ `
    <div class="new_bundle_wrapper" id="${bundlesInfo.ver_b.id}">
      <div class="img_wrapper">
        <img src="${bundlesInfo.ver_b.img}" alt="${bundlesInfo.ver_b.title}" />
      </div>
      <div class="info_wrapper">
        <h2 class="new_bundle_title">${bundlesInfo.ver_b.title}</h2>
        <p class="new_bundle_description">${bundlesInfo.ver_b.description}</p>
        <span class="new_bundle_price">${price} Each</span>
      </div>
    </div>
  `
}

export const tooltipBlockVerB = /* HTML */ `
  <span class="new_bundle_tooltip" data-tooltip data-title="${tooltipObj.ver_b}">${svg.tooltipIcon}</span>
`

export const budleHtmlVerC = (price: string) => {
  return /* HTML */ `
    <div class="new_bundle_wrapper" id="${bundlesInfo.ver_c.id}">
      <div class="img_wrapper">
        <img src="${bundlesInfo.ver_c.img}" alt="${bundlesInfo.ver_c.title}" />
      </div>
      <div class="info_wrapper">
        <h2 class="new_bundle_title">${bundlesInfo.ver_c.title}</h2>
        <p class="new_bundle_description">${bundlesInfo.ver_c.description}</p>
        <span class="new_bundle_price">${price} Each</span>
      </div>
    </div>
  `
}
export const tooltipBlockVerC = /* HTML */ `
  <span class="new_bundle_tooltip" data-tooltip data-title="${tooltipObj.ver_c}">${svg.tooltipIcon}</span>
`
