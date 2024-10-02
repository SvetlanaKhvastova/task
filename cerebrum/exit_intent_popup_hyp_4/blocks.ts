import { svg, git } from './data'

export const contentPopup = /* HTML */ `
  <div class="exit-intent__popup">
    <h1>exit-intent__popup</h1>
  </div>
`

export const popup = /* HTML */ `
  <div class="new-popup-backdrop is-hidden">
    <div class="new-popup">
      <button class="new-popup__close" data-popup="close">${svg.closeIcon}</button>
      <div class="new-popup__content"></div>
    </div>
  </div>
`
