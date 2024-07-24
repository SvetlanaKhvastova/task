import { svg, git } from './data'

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
