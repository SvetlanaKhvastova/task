import { svg, git } from './data'

const giftBox = (cta: boolean, classVar: string = ''): string => {
  return /*HTML */ `
  <div class="gift_box ${classVar}">
    ${svg.giftIcon}
    ${
      cta
        ? `<p><b>Limited Time Offer:</b> Get a free NATPAT sticker set with your purchase</p>`
        : `<p>Get a free NATPAT sticker set with any 2-4 pack purchase. Collect all <span data-popup="open">16 magical characters!</span></p>`
    }
  </div>
`
}

const contentPopup = /* HTML */ `
  <img src="${git}gift_img_1.png" alt="stickers 16 magical characters" />
  <img src="${git}gift_img_2.png" alt="stickers 16 magical characters" />
  <h3 class="gift_stickers_title">16 magical characters</h3>
`

const popup = /* HTML */ `
  <div class="new_popup_backdrop is-hidden">
    <div class="new_popup">
      <button class="new_popup_close" data-popup="close">${svg.closeIcon}</button>
      <div class="new_popup_content">${contentPopup}</div>
    </div>
  </div>
`

export { giftBox, popup }
