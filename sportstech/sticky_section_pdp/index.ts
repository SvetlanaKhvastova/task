import {
  startLog,
  $el,
  $$el,
  waitForElement,
  pushData,
  clarityInterval,
  checkScrollSpeed,
  getCookies
} from '../../libraries'
import { breadcrumbsLinks, pdpBreadcrumbs, stickyBlockMobile } from './blocks'
import { svg, git } from './data'
// @ts-ignore
import mainStyle from './main.css?raw'

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class stickySectionOnPDP {
  device: 'mobile' | 'desktop'

  constructor(device) {
    this.device = device
    this.init()
  }

  init() {
    startLog({ name: 'Sticky section on PDP', dev: 'SKh' })
    // clarityInterval('')

    document.head.insertAdjacentHTML(
      'afterbegin',
      `<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">`
    )
    document.head.insertAdjacentHTML('beforeend', `<style>${mainStyle}</style>`)

    // PDP
    this.renderBreadcrumbsBlock()
    if (this.device === 'mobile') {
      this.renderStickyBlockMobile()
    }

    // CHECKOUT
    this.changeBtnReturnToCartHanlder()
  }
  // ___________________________________________________________________________________________________________________________________________
  // PDP
  renderBreadcrumbsBlock() {
    let place = '.product-detail-buy'
    if (this.device === 'mobile') {
      place = '.container-main'
    }
    waitForElement('.is-ctl-product').then((i: HTMLLinkElement) => {
      if (!$el('#pdpBreadcrumbs')) {
        $el(place).insertAdjacentHTML('afterbegin', pdpBreadcrumbs)
      }
      this.generateBreadcrumbs()
    })
  }
  generateBreadcrumbs() {
    const breadcrumbsContainer = document.getElementById('pdpBreadcrumbs')
    if (!breadcrumbsContainer) return
    const activeCategory = $el('.main-navigation-menu .main-navigation-link.active')?.textContent
    const activeCategoryHref = $el('.main-navigation-menu .main-navigation-link.active')?.href

    let activeSubcategory = ''
    let activePdpName = ''

    let dataLayerCustomer = window.dataLayer
    dataLayerCustomer.forEach(item => {
      if (item.productCategory) {
        activeSubcategory = item.productCategory
      }
      if (item.productName) {
        activePdpName = item.productName
      }
    })

    const pathArray = window.location.pathname.split('/').filter(part => part)
    let path = ''

    // const breadcrumbs = pathArray
    //   .map((part, index) => {
    //     path += `/${part}`
    //     const isLast = index === pathArray.length - 1
    //     return isLast
    //       ? `<span class="active_pdp">${decodeURIComponent(part)}</span>`
    //       : `<a href="${path}">${decodeURIComponent(part)}</a>`
    //   })
    //   .join(`${svg.arrowBreadcrumbIcon}`)

    const breadcrumbs = breadcrumbsLinks(
      activeCategoryHref,
      activeCategory,
      pathArray[0],
      activeSubcategory,
      activePdpName
    )

    breadcrumbsContainer.innerHTML = breadcrumbs
  }

  renderStickyBlockMobile() {
    waitForElement('.is-ctl-product').then((i: HTMLLinkElement) => {
      if (!$el('.sticky_block_mobile') && $el('.rhweb-fixed-buy-widget .buy-widget-container .btn-buy')) {
        i.insertAdjacentHTML('afterbegin', stickyBlockMobile)
      }
      this.addToCartStickyBlockMobileHandler()
      this.toggleStickyBlockVisibility()
    })
  }

  addToCartStickyBlockMobileHandler() {
    waitForElement('.sticky_block_mobile .add_to_cart_btn').then((i: HTMLLinkElement) => {
      i.addEventListener('click', (e: any) => {
        e.preventDefault()
        console.log(`CLICK add_to_cart_btn`)
        $el('.rhweb-fixed-buy-widget .buy-widget-container .btn-buy')?.click()
      })
    })
  }
  toggleStickyBlockVisibility() {
    waitForElement('.product-detail-form-container .buy-widget-container .btn-buy').then(() => {
      waitForElement('.sticky_block_mobile').then(() => {
        const element = $el('.sticky_block_mobile') as HTMLElement
        const elemClose = $el('.product-detail-form-container .buy-widget-container .btn-buy') as HTMLElement

        function visible() {
          const options = {
            root: null,
            threshold: 0.5
          }

          let observerSticky = new IntersectionObserver(entries => {
            entries.forEach(i => {
              if (i.isIntersecting) {
                element.style.display = 'none'
              } else {
                element.style.display = 'block'
              }

              observerSticky.unobserve(i.target)
            })

            observerSticky.disconnect()
          }, options)

          observerSticky.observe(elemClose)
        }

        window.addEventListener('scroll', () => {
          visible()
        })

        visible()
      })
    })
  }

  // ___________________________________________________________________________________________________________________________________________
  // CHECKOUT
  changeBtnReturnToCartHanlder() {
    if (window.location.href.match('/checkout')) {
      waitForElement('.header-minimal .header-minimal-back-to-shop-button').then((i: HTMLLinkElement) => {
        if (i.href !== 'https://www.sportstech.de/checkout/cart') {
          i.href = 'https://www.sportstech.de/checkout/cart'
        }
        if (!i.textContent?.includes('Warenkorb anzeigen')) {
          i.innerHTML = `${svg.arrowLeftIcon} Warenkorb anzeigen`
        }
      })
    }
  }
}

new stickySectionOnPDP(device)
