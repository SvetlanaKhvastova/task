import { svg, git } from './data'

export const guaranteeBlock = /* HTML */ `
  <div class="guarantee_block">
    ${svg.guaranteeIcon}
    <span>365-day Money Back Guarantee </span>
  </div>
`

export const differentInfoHeroBlock = /* HTML */ `
  <div class="different_info_hero_block">
    <div class="bgr_block">${svg.bgrIcon}</div>
    <ul class="different_info_hero_list">
      <li>
        ${svg.nonToxicIcon}
        <span>Non Toxic, DEET free</span>
      </li>
      <li>
        ${svg.safeForKidsIcon}
        <span>Safe for kids (0+)</span>
      </li>
      <li>
        ${svg.designedInAustraliaIcon}
        <span>Designed in Australia</span>
      </li>
      <li>
        ${svg.freeShippingIcon}
        <span>FREE Shipping </span>
      </li>
    </ul>
  </div>
`

export const shopByCategoryBlock = /* HTML */ `
  <div>
    <h2>SHOP BY CATEGORY</h2>
    <ul>
      <li class="wellness_item">
        <div>
          ${svg.wellnessIcon}
          <p>Wellness & Cognitive</p>
          <a href="/en-eu/collections/wellness-cognitive">${svg.arrowRightIcon}</a>
        </div>
      </li>
      <li class="outdoor_protection_item">
        <div>
          ${svg.outdoorProtectionIcon}
          <p>Outdoor Protection</p>
          <a href="/en-eu/collections/outdoor-protection">${svg.arrowRightIcon}</a>
        </div>
      </li>
      <li class="allergy_relief_item">
        <div>
          ${svg.respiratoryAllergyReliefIcon}
          <p>Respiratory & Allergy Relief</p>
          <a href="/en-eu/collections/respiratory-allergy-relief">${svg.arrowRightIcon}</a>
        </div>
      </li>
      <li class="pets_item">
        <div>
          ${svg.petsIcon}
          <p>Pets</p>
          <a href="/en-eu/collections/pets">${svg.arrowRightIcon}</a>
        </div>
      </li>
    </ul>
  </div>
`

export const stickyBlock = /* HTML */ `
  <div class="sticky_block">
    <div class="title_wrapper">
      <h2>Natural Solutions for Enhanced Well-being</h2>
      <p>Better Sleep, Improved Mood, Sharper Focus, and More!</p>
    </div>
    <div class="explore_stickers_btn">Explore NatPat Stickers</div>
  </div>
`
