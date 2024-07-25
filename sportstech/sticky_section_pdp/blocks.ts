import { svg, git } from './data'

export const stickyBlockDesktop = /* HTML */ `
  <div class="sticky_block_desktop">
    <div class="part_left"></div>
    <div class="part_right"></div>
  </div>
  <div class="fixed_block_desktop">
    <p class="pdp_name">sWalk Laufband Grau</p>
    <div class="">
      <span class="pdp_price">269,00 €</span>
      <div class="add_to_cart_btn">In den Warenkorb</div>
    </div>
  </div>
`

export const stickyBlockMobile = /* HTML */ `
  <div class="sticky_block_mobile">
    <div class="add_to_cart_btn">${svg.cartIcon} In den Warenkorb</div>
  </div>
`

export const pdpBreadcrumbs = /* HTML */ `<nav id="pdpBreadcrumbs"></nav>`

export const breadcrumbsLinks = (
  activeCategoryHref: string,
  activeCategory: string,
  activeSubcategoryHref: string,
  activeSubcategory: string,
  activePdpName: string
) => {
  return /* HTML */ `
    <a href="${activeCategoryHref}">${activeCategory}</a>
    ${svg.arrowBreadcrumbIcon}
    ${activeCategory.toLocaleLowerCase().trim() === activeSubcategory.toLocaleLowerCase().trim()
      ? ''
      : `<a href="/${activeSubcategoryHref}">${activeSubcategory}</a> ${svg.arrowBreadcrumbIcon}`}
    <span class="active_pdp">${activePdpName}</span>
  `
}
