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
import { breadcrumbsLinks, fixedBlockDesktop, pdpBreadcrumbs, stickyBlockDesktop, stickyBlockMobile } from './blocks'
import { svg, git, urls } from './data'
// @ts-ignore
import mainStyle from './main.css?raw'

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class stickySectionOnPDP {
  device: 'mobile' | 'desktop'
  activePdpName: string
  productPrice: string

  constructor(device) {
    this.device = device
    this.activePdpName = ''
    this.productPrice = ''
    this.init()
  }

  init() {
    startLog({ name: 'Sticky section on PDP', dev: 'SKh' })
    clarityInterval('sticky_section_on_pdp')

    document.head.insertAdjacentHTML(
      'afterbegin',
      `<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">`
    )
    document.head.insertAdjacentHTML('beforeend', `<style>${mainStyle}</style>`)

    // PDP
    this.renderBreadcrumbsBlock()
    if (this.device === 'mobile') {
      this.renderStickyBlockMobile()
    } else {
      this.checkCurrentUrl()
    }

    // CHECKOUT
    this.changeBtnReturnToCartHanlder()
  }
  // ___________________________________________________________________________________________________________________________________________
  // PDP
  renderBreadcrumbsBlock() {
    let place = '.product-detail-buy'
    if (this.device === 'mobile') {
      place = '.cms-block-gallery-buybox'
    }
    waitForElement(place).then(() => {
      if (!$el('#pdpBreadcrumbs')) {
        $el(place).insertAdjacentHTML('afterbegin', pdpBreadcrumbs)
      }
      this.generateBreadcrumbs()
      this.clickPdpBreadcrumbsHandler()
    })
    console.log(`renderBreadcrumbsBlock`)
  }
  clickPdpBreadcrumbsHandler() {
    waitForElement('#pdpBreadcrumbs').then(i => {
      $$el('#pdpBreadcrumbs a').forEach((link: HTMLLinkElement) => {
        link.addEventListener('click', e => {
          pushData('exp_sticky_breadcrumb', e.target.textContent.trim(), 'Link', `Sticky right block.`)
        })
      })
    })
  }
  generateBreadcrumbs() {
    const breadcrumbsContainer = document.getElementById('pdpBreadcrumbs')
    if (!breadcrumbsContainer) return
    const activeCategory = $el('.main-navigation-menu .main-navigation-link.active')?.textContent
    const activeCategoryHref = $el('.main-navigation-menu .main-navigation-link.active')?.href

    let activeSubcategory = ''

    let dataLayerCustomer = window.dataLayer
    dataLayerCustomer.forEach(item => {
      if (item.productCategory) {
        activeSubcategory = item.productCategory
      }
      if (item.productName) {
        this.activePdpName = item.productName
      }
      if (item.productPrice) {
        this.productPrice = item.productPrice
      }
    })

    const pathArray = window.location.pathname.split('/').filter(part => part)

    const breadcrumbs = breadcrumbsLinks(
      activeCategoryHref,
      activeCategory,
      pathArray[0],
      activeSubcategory,
      this.activePdpName
    )

    breadcrumbsContainer.innerHTML = breadcrumbs
    console.log(`generateBreadcrumbs`)
  }
  // DESKTOP
  checkCurrentUrl() {
    const currentUrl = window.location.pathname
    urls.forEach(url => {
      if (url.includes(currentUrl)) {
        console.log(`Current URL matches: ${currentUrl}`)
        this.renderStickyBlockDesktop()
        this.replaceProductDetailMedia()
        waitForElement('.is-ctl-product .sticky_block_desktop').then((i: HTMLLinkElement) => {
          switch (currentUrl) {
            case '/laufband/swalk-grau':
              $el('.part_left').classList.add('variant_first_crs')
              break
            case '/laufband/swalk-holzoptik-grau':
              $el('.part_left').classList.add('variant_first_crs')
              break
            case '/hantelbank/brt400':
              $el('.part_left').classList.add('variant_crs')
              break
            case '/klimmzugstange/ks270':
              $el('.part_left').classList.add('variant_crs')
              break
            case '/klimmzugstange/ks260':
              $el('.part_left').classList.add('variant_crs')
              break
            case '/stepper/stx300':
              $el('.part_left').classList.add('variant_crs')
              break
            case '/vibrationsplatte/vp250-tuerkis':
              $el('.part_left').classList.add('variant_crs')
              break
            case '/laufband/f31s':
              $el('.part_left').classList.add('variant_crs')
              break
            case '/ergometer/esx500':
              $el('.part_left').classList.add('variant_crs')
              break
            case '/laufband/swalk-holzoptik-hell':
              $el('.part_left').classList.add('variant_first_crs')
              break
            case '/crosstrainer/cx700':
              $el('.part_left').classList.add('cx700_crs')
              break
            case '/kraftstation/hgx200':
              $el('.part_left').classList.add('hgx200_crs')
              break
            case '/kraftstation/hgx100':
              $el('.part_left').classList.add('variant_crs')
              break
            // case '/laufband/f37s':
            //   $el('.part_left').classList.add('f37s_crs')
            //   break
            // case '/speedbike/sbike':
            //   $el('.part_left').classList.add('sbike_crs')
            //   break
            // case '/rudergeraet/srow':
            //   $el('.part_left').classList.add('srow_crs')
            //   break

            default:
              break
          }
        })
      }
    })
    console.log('checkCurrentUrl')
  }
  replaceProductDetailMedia() {
    waitForElement('.product-detail-media').then((i: HTMLLinkElement) => {
      if ($el('[data-cms-element-id="0190073cf0237206892ad787687c0639"]')) {
        i.insertAdjacentElement(
          'beforeend',
          $el('[data-cms-element-id="0190073cf0237206892ad787687c0639"]').closest('.cms-block-container-row')
        )
      }
      if ($el('[data-cms-element-id="01900745e2487acbbf2ad71c668a5ec2"]')) {
        i.insertAdjacentElement(
          'beforeend',
          $el('[data-cms-element-id="01900745e2487acbbf2ad71c668a5ec2"]').closest('.cms-block-container-row')
        )
      }
      if ($el('[data-cms-element-id="12288917e4a741c79588401542f89bf1"]')) {
        i.insertAdjacentElement(
          'beforeend',
          $el('[data-cms-element-id="12288917e4a741c79588401542f89bf1"]').closest('.cms-block-container-row')
        )
      }
      if ($el('[data-cms-element-id="497a5f166d054605ac3504fb8c1eb36e"]')) {
        i.insertAdjacentElement(
          'beforeend',
          $el('[data-cms-element-id="497a5f166d054605ac3504fb8c1eb36e"]').closest('.cms-block-container-row')
        )
      }
      if ($el('.categories-container')) {
        i.insertAdjacentElement('beforeend', $el('.categories-container').closest('.cms-block-container-row'))
      }
      if ($el('.template-cont')) {
        i.insertAdjacentElement('beforeend', $el('.template-cont').closest('.cms-block-container-row'))
      }
      if ($el('[data-cms-element-id="0190074730af79c59f992fbad4f41755"]')) {
        i.insertAdjacentElement(
          'beforeend',
          $el('[data-cms-element-id="0190074730af79c59f992fbad4f41755"]').closest('.cms-block-container-row')
        )
      }
      if ($el('[data-cms-element-id="018eae58ed3273c4905d891afab91efb"]')) {
        i.insertAdjacentElement(
          'beforeend',
          $el('[data-cms-element-id="018eae58ed3273c4905d891afab91efb"]').closest('.cms-block-container-row')
        )
      }
      if ($el('[data-cms-element-id="018ecc64460d75d19daffb87eb829d8b"]')) {
        i.insertAdjacentElement(
          'beforeend',
          $el('[data-cms-element-id="018ecc64460d75d19daffb87eb829d8b"]').closest('.cms-block-container-row')
        )
      }
      if ($el('[data-cms-element-id="018ec8010ad675c99b9bd822bd24c0a8"]')) {
        i.insertAdjacentElement(
          'beforeend',
          $el('[data-cms-element-id="018ec8010ad675c99b9bd822bd24c0a8"]').closest('.cms-block-container-row')
        )
      }
      if ($el('[data-cms-element-id="018ec80ca265772d8cfd206bbf7a0f94"]')) {
        i.insertAdjacentElement(
          'beforeend',
          $el('[data-cms-element-id="018ec80ca265772d8cfd206bbf7a0f94"]').closest('.cms-block-container-row')
        )
      }
      if ($el('[data-cms-element-id="018ec82638927545b462be213839afaa"]')) {
        i.insertAdjacentElement(
          'beforeend',
          $el('[data-cms-element-id="018ec82638927545b462be213839afaa"]').closest('.cms-block-container-row')
        )
      }
      if ($el('[data-cms-element-id="018ec829f91077b7ae3d738b88ff8a49"]')) {
        i.insertAdjacentElement(
          'beforeend',
          $el('[data-cms-element-id="018ec829f91077b7ae3d738b88ff8a49"]').closest('.cms-block-container-row')
        )
      }
      if ($el('[data-cms-element-id="018ec88fa0507bcfb721d098f1f7fcd1"]')) {
        i.insertAdjacentElement(
          'beforeend',
          $el('[data-cms-element-id="018ec88fa0507bcfb721d098f1f7fcd1"]').closest('.cms-block-container-row')
        )
      }
      if ($el('[data-cms-element-id="018ec8389d04787491bd3155b3cc301e"]')) {
        i.insertAdjacentElement(
          'beforeend',
          $el('[data-cms-element-id="018ec8389d04787491bd3155b3cc301e"]').closest('.cms-block-container-row')
        )
      }
      if ($el('[data-cms-element-id="018ec8b53666734d8088e22fca13927d"]')) {
        i.insertAdjacentElement(
          'beforeend',
          $el('[data-cms-element-id="018ec8b53666734d8088e22fca13927d"]').closest('.cms-block-container-row')
        )
      }
      if ($el('[data-cms-element-id="018ec8c1c64d7321a2263db97468458d"]')) {
        i.insertAdjacentElement(
          'beforeend',
          $el('[data-cms-element-id="018ec8c1c64d7321a2263db97468458d"]').closest('.cms-block-container-row')
        )
      }
      if ($el('[data-cms-element-id="018ecdfc728479a59828d40ae138001b"]')) {
        i.insertAdjacentElement(
          'beforeend',
          $el('[data-cms-element-id="018ecdfc728479a59828d40ae138001b"]').closest('.cms-block-container-row')
        )
      }
      if ($el('.tec-specs')) {
        i.insertAdjacentElement('beforeend', $el('.tec-specs'))
      }
    })
    waitForElement('.product-detail-media .section-faq').then((i: HTMLLinkElement) => {
      $el('.belvg-block-gallery-full-width')?.insertAdjacentElement('beforeend', i)
    })
    console.log('replaceProductDetailMedia')
  }
  renderStickyBlockDesktop() {
    waitForElement('.is-ctl-product .content-main .belvg-block-gallery-full-width').then((i: HTMLLinkElement) => {
      if (!$el('.sticky_block_desktop')) {
        i.insertAdjacentHTML('beforebegin', stickyBlockDesktop)
        i.closest('.is-ctl-product')?.classList.add('crs_sticky')
      }
    })
    waitForElement('.is-ctl-product .sticky_block_desktop').then((i: HTMLLinkElement) => {
      i.querySelector('.part_right').insertAdjacentElement('afterbegin', $el('.product-detail-buy'))
      i.querySelector('.part_left').insertAdjacentElement('afterbegin', $el('.product-detail-media'))

      if (!$el('.fixed_block_desktop')) {
        i.insertAdjacentHTML('afterend', fixedBlockDesktop(this.activePdpName, this.productPrice))
      }
      if (
        !$el('.product-detail-form-container .buy-widget-container .btn-buy') &&
        $el('.fixed_block_desktop .add_to_cart_btn')
      ) {
        $el('.fixed_block_desktop .add_to_cart_btn').style.display = 'none'
      }
    })
    waitForElement('.is-ctl-product .fixed_block_desktop').then((i: HTMLLinkElement) => {
      this.setupStickyBlockScrollHandler()
      this.addToCartStickyBlockDesktopHandler()
    })
    console.log(`renderStickyBlockDesktop`)
  }
  addToCartStickyBlockDesktopHandler() {
    waitForElement('.fixed_block_desktop .add_to_cart_btn').then((i: HTMLLinkElement) => {
      i.addEventListener('click', (e: any) => {
        e.preventDefault()
        if (i.closest('.fixed_crs')) {
          pushData(
            'exp_sticky_footer_add_to_cart',
            'Add to cart',
            'Button',
            `Sticky Footer. ${this.scrollDepthHandler()}`
          )
        } else {
          pushData('exp_sticky_desktop_add_to_cart', 'Add to cart', 'Button', 'Sticky Desktop')
        }
        $el('.product-detail-form-container .buy-widget-container .btn-buy')?.click()
      })
    })
    console.log('addToCartStickyBlockDesktopHandler')
  }
  setupStickyBlockScrollHandler() {
    const stickyBlockDesktop = $el('.sticky_block_desktop')
    const fixedBlockDesktop = $el('.fixed_block_desktop')

    if (stickyBlockDesktop && fixedBlockDesktop) {
      window.addEventListener('scroll', () => {
        const stickyBlockRect = stickyBlockDesktop.getBoundingClientRect()

        if (stickyBlockRect.bottom <= 0) {
          fixedBlockDesktop.style.position = 'fixed'
          if (!fixedBlockDesktop.classList.contains('fixed_crs')) {
            fixedBlockDesktop.classList.add('fixed_crs')
          }
        } else {
          fixedBlockDesktop.style.position = 'static'
          if (fixedBlockDesktop.classList.contains('fixed_crs')) {
            fixedBlockDesktop.classList.remove('fixed_crs')
          }
        }
      })
    }
    console.log('setupStickyBlockScrollHandler')
  }
  // MOBILE
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

        pushData(
          'exp_sticky_footer_add_to_cart',
          'Add to cart',
          'Button',
          `Sticky Footer. ${this.scrollDepthHandler()}`
        )
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

  scrollDepthHandler() {
    const documentHeight = document.documentElement.scrollHeight
    const windowHeight = window.innerHeight
    const scrollTop = window.scrollY
    const scrollDepth = `${((scrollTop / (documentHeight - windowHeight)) * 100).toFixed(0)}%`

    return scrollDepth
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
