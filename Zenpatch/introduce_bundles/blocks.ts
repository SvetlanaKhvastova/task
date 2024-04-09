import { git, svg, tooltipObj } from './data'

const newBundleItem = /* HTML */ `
  <li class="list-packs list-packs-bundle" data-pack="bundle" data-id="43053597229100">
    <div class="stickers-prices">
      <div class="sticker-image">
        <img src="${git}/img/bundles_img.png" class="ls-is-cached lazyloaded" />
      </div>

      <div class="info">
        <p class="pack-name">All-in-one stress-relief kit</p>
        <p class="pcs pcs-bundle">3 Packs + 24 Bedtime Stickers</p>
        <div class="before-after-prices">
          <p class="strikethrough">
            <span class="reg-price-bundle" data-price="99.96" data-subscription-price="99.96">$99.96</span>
          </p>
          <p class="after-price">
            <span class="save-price-bundle" data-price="40.00" data-subscription-price="40.00">$40.00</span>
          </p>
        </div>
      </div>
    </div>
    <div class="tooltip_zone" data-tooltip data-title="${tooltipObj.promoting}">
      <div class="tooltip_bgr">${svg.tooltip}</div>
    </div>
  </li>
`
export { newBundleItem }
