import {
  startLog,
  $el,
  $$el,
  waitForElement,
  pushData,
  clarityInterval,
  loadScriptsOrStyles,
  visibilityOfTime
} from '../../libraries'
import {
  slideInPackage,
  customDropdown,
  newBlockPackage,
  newBlockPackages,
  newPriceWrapper,
  newSubscriptionBlock
} from './blocks'
import { svg, git } from './data'
// @ts-ignore
import mainStyle from './main.css?raw'

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class SubscriptionOptimization {
  device: 'mobile' | 'desktop'
  observer: null | MutationObserver
  isActiveOnePack: boolean
  isActiveTwoPack: boolean
  regPrice: string
  salePrice: string
  percentOff: string
  imgSrc: string
  packPrice: string
  pcs: string
  uniqueId: string

  constructor(device) {
    this.device = device
    this.observer = null
    this.isActiveOnePack = false
    this.isActiveTwoPack = false
    this.regPrice = ''
    this.salePrice = ''
    this.percentOff = ''
    this.imgSrc = ''
    this.packPrice = ''
    this.pcs = ''
    this.uniqueId = ''

    this.init()
  }

  init() {
    startLog({ name: 'focuspatch: subscription Optimization', dev: 'SKh' })
    // clarityInterval('exp_sub_land')

    document.head.insertAdjacentHTML(
      'beforeend',
      `<link class="crs_font" href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">`
    )
    document.head.insertAdjacentHTML('beforeend', `<style class="crs_style">${mainStyle}</style>`)

    this.renderNewTitleBlockPackage()
    this.renderNewBlockPackagesOnLanding()
    this.changeActivePackHandler()
    this.renderNewSubscriptionBlock()
    this.changeSubscriptionPlanHandler()
    this.initTooltip()
    this.renderCustomDropdown()

    this.renderSlideInPackage()
    this.renderNewBlockPackagesInSlideInPackage()
    this.renderNewSubscriptionBlockPackagesInSlideInPackage()
    this.openSlideInPackage()
    this.closeSlideInPackage()
    this.changeNextStepSlideInPackage()
    this.changePrevStepSlideInPackage()
  }

  renderNewTitleBlockPackage() {
    waitForElement('#lpfpPackage').then(i => {
      const containerElement = $el('#lpfpPackage') as HTMLElement

      if (!$el('#newBlockPackage')) {
        containerElement.insertAdjacentHTML('afterbegin', newBlockPackage())
      }
    })
  }

  renderNewBlockPackagesOnLanding() {
    waitForElement('#newBlockPackage .new_free_shipping_block_package').then(n => {
      const containerElement = $el('#newBlockPackage .new_free_shipping_block_package') as HTMLElement

      if (!$el('#newBlockPackage .focuspatch_packs')) {
        containerElement.insertAdjacentHTML('afterend', newBlockPackages())
      }
    })
  }

  changeActivePackHandler() {
    waitForElement('.focuspatch_packs').then(n => {
      const packageItems = $$el('.focuspatch_packs_item') as NodeListOf<HTMLElement>

      packageItems.forEach(item => {
        item.addEventListener('click', () => {
          const packId = item.getAttribute('data-id') || ''
          const imgSrc = item.querySelector('.focuspatch_packs_image img')?.getAttribute('src') || ''
          const packPrice = item.querySelector('.focuspatch_packs_price_per_pack')?.textContent || ''
          const pcs = item.querySelector('.number_patches')?.textContent || ''
          const regPrice = item.querySelector('.focuspatch_packs_reg_price')?.textContent || ''
          const salePrice = item.querySelector('.focuspatch_packs_final_price')?.textContent || ''
          const savePercent = item.querySelector('.save_banner_percent')?.textContent || ''
          console.log(item)
          packageItems.forEach(i => {
            i.classList.remove('active')
          })

          item.classList.add('active')
          if (packId === '1') {
            this.isActiveOnePack = true
          } else {
            this.isActiveOnePack = false
          }

          this.changeAllTextContent(imgSrc, packPrice, pcs, regPrice, salePrice, packId, savePercent)

          if (packId) {
            this.syncActivePackState(packId)
          }
        })
      })
    })
  }

  syncActivePackState(packId: string) {
    const packageItems = $$el('.focuspatch_packs_item') as NodeListOf<HTMLElement>

    packageItems.forEach(item => {
      if (item.getAttribute('data-id') === packId) {
        item.classList.add('active')
      } else {
        item.classList.remove('active')
      }
    })
  }

  changeAllTextContent(
    imgSrc: string,
    packPrice: string,
    pcs: string,
    regPrice: string,
    salePrice: string,
    activePackId: string,
    savePercent: string
  ) {
    waitForElement('.crs_slide_in .info_selected_package').then(i => {
      const detailsImg = $el('.info_selected_package .details_img_wrapper img') as HTMLImageElement
      const pricePerPack = $el('.info_selected_package .details_price_for_pack') as HTMLElement
      const numberPatches = $el('.info_selected_package .details_quantity') as HTMLElement
      const regPriceTxt = $el('.info_selected_package .new_reg_price') as HTMLElement
      const finalPriceTxt = $el('.info_selected_package .new_sale_price') as HTMLElement
      const checkoutBtn = $el('.crs_slide_in .new_proceed_to_checkout_btn') as HTMLElement

      if (detailsImg && pricePerPack && numberPatches && regPriceTxt && finalPriceTxt && checkoutBtn) {
        detailsImg.src = imgSrc
        pricePerPack.textContent = packPrice
        numberPatches.textContent = pcs
        regPriceTxt.textContent = regPrice
        finalPriceTxt.textContent = salePrice

        if (activePackId !== '1') {
          checkoutBtn.textContent = 'Subscribe & Save'
        } else {
          checkoutBtn.textContent = 'PROCEED TO CHECKOUT'
        }
      }
    })
    waitForElement('.new_price_wrapper_package').then(i => {
      const newPriceWrappersPackage = $$el('.new_price_wrapper_package') as NodeListOf<HTMLElement>

      newPriceWrappersPackage.forEach(priceWrapper => {
        const newRegPrice = priceWrapper.querySelector('.new_reg_price') as HTMLElement
        const newSalePrice = priceWrapper.querySelector('.new_final_price') as HTMLElement
        const percentOff = priceWrapper.querySelector('.percent_off_txt') as HTMLElement

        console.log(newRegPrice, newSalePrice, percentOff, `priceWrapper`)

        if (newRegPrice && newSalePrice && percentOff) {
          newRegPrice.textContent = regPrice
          newSalePrice.textContent = salePrice
          percentOff.textContent = `${savePercent}`
        }
      })
    })
  }

  renderNewSubscriptionBlock() {
    waitForElement('#newBlockPackage .focuspatch_packs').then(i => {
      const сontainerElements = $$el('#newBlockPackage .focuspatch_packs') as NodeListOf<HTMLElement>
      let checkedIsActiveOnePack = false
      this.uniqueId = 'Landing'

      сontainerElements.forEach(container => {
        if (
          container.previousElementSibling &&
          !container.previousElementSibling.classList.contains('new_subscription')
        ) {
          if (this.isActiveOnePack) {
            checkedIsActiveOnePack = true
          }
          container.insertAdjacentHTML('afterend', newSubscriptionBlock(checkedIsActiveOnePack, this.uniqueId))
        }
      })
    })
  }

  changeSubscriptionPlanHandler() {
    waitForElement(`.new_subscription_block`).then(() => {
      const newSubscriptionPlanLabels = $$el(`.plan_selection label`) as NodeListOf<HTMLElement>

      newSubscriptionPlanLabels.forEach(label => {
        const newLabel = label.cloneNode(true) as HTMLElement
        label.replaceWith(newLabel)

        newLabel.addEventListener('click', () => {
          const value = newLabel.previousElementSibling?.getAttribute('value')
          if (value) {
            this.syncRadioButtons(value)
          }
          console.log(newLabel.getAttribute('for'), `newLabel.getAttribute('for') `)

          switch (value) {
            case `oneTime`:
              $$el('.plan_details')?.forEach(el => {
                if (!el.classList.contains('one_time_checked')) {
                  el.classList.add('one_time_checked')
                }
              })

              break

            case `subscribeSave`:
              $$el('.plan_details')?.forEach(el => {
                if (el.classList.contains('one_time_checked')) {
                  el.classList.remove('one_time_checked')
                }
              })

              break
          }
        })
      })
    })
  }

  syncRadioButtons(value: string) {
    const radioButtons = $$el('.new_subscription input[type="radio"]') as NodeListOf<HTMLInputElement>

    radioButtons.forEach(radio => {
      if (radio.value === value) {
        radio.checked = true
        radio.closest('.new_subscription_block')?.classList.remove('is_disabled')
      } else {
        radio.checked = false
        radio.closest('.new_subscription_block')?.classList.add('is_disabled')
      }
    })
  }

  initTooltip() {
    loadScriptsOrStyles([
      'https://unpkg.com/@popperjs/core@2.11.6/dist/umd/popper.min.js',
      'https://unpkg.com/tippy.js@6.3.7/dist/tippy-bundle.umd.min.js'
    ]).then(async () => {
      let s = setInterval(() => {
        if (typeof tippy === 'function' && $el('[data-tooltip]')) {
          clearInterval(s)
          $$el('[data-tooltip]').forEach(el => {
            tippy(el, {
              content: el.getAttribute('data-title'),
              trigger: 'click',
              allowHTML: true,
              arrow: true,
              arrowType: 'round',
              appendTo: function () {
                return el.closest('.plan_comment') || el.closest('.is_active_one_pack')
              },
              placement: 'bottom-end',
              interactive: true,
              onShow(instance: any) {
                if (el.closest('.plan_comment')) {
                  pushData(
                    'exp_sub_land_tooltip_01',
                    'A choice that saves both time and money',
                    'View',
                    'Subscribe section'
                  )
                }
                if (el.closest('.is_active_one_pack')) {
                  pushData('exp_sub_land_tooltip_02', 'Select 2, 3 or 4 packs..', 'View', 'Subscribe section')
                }
              }
            })
          })
        }
      }, 100)
    })
  }

  renderCustomDropdown() {
    waitForElement('.new_subscription_block').then(i => {
      const newSubscriptionBlock = $$el('.new_subscription_block') as NodeListOf<HTMLElement>
      newSubscriptionBlock.forEach(s => {
        if (!s.querySelector('.custom_dropdown')) {
          s.insertAdjacentHTML('beforeend', customDropdown)
        }
      })
    })
  }

  renderSlideInPackage() {
    waitForElement('body').then(n => {
      const containerElement = $el('body') as HTMLElement

      if (!$el('.crs_slide_in')) {
        containerElement.insertAdjacentHTML('afterbegin', slideInPackage)
      }
    })
  }
  renderNewBlockPackagesInSlideInPackage() {
    waitForElement('.crs_slide_in .body_slide_in_package').then(n => {
      const containerElement = $el('.crs_slide_in .body_slide_in_package') as HTMLElement

      if (!$el('.crs_slide_in .body_slide_in_package .focuspatch_packs')) {
        containerElement.insertAdjacentHTML('afterbegin', newBlockPackages())
      }
    })
  }
  renderNewSubscriptionBlockPackagesInSlideInPackage() {
    waitForElement('.crs_slide_in .new_price_wrapper_package').then(i => {
      const сontainerElement = $el('.crs_slide_in .new_price_wrapper_package') as HTMLElement
      let checkedIsActiveOnePack = false
      this.uniqueId = 'SlideInPackage'

      if (!$el('.crs_slide_in .new_subscription')) {
        if (this.isActiveOnePack) {
          checkedIsActiveOnePack = true
        }
        сontainerElement.insertAdjacentHTML(
          'beforebegin',
          newSubscriptionBlock(checkedIsActiveOnePack, this.uniqueId, 'is_hidden')
        )
      }
    })
  }
  openSlideInPackage() {
    waitForElement('.crs_slide_in').then(n => {
      const btnsOpenSlideInCart = $$el('[href="#lpfpPackage"]') as NodeListOf<HTMLElement>

      btnsOpenSlideInCart?.forEach(btn => {
        btn.addEventListener('click', e => {
          e.preventDefault()
          this.openSlideInPackageHandler()
        })
      })
    })
  }
  closeSlideInPackage() {
    waitForElement('[data-closeform]').then(n => {
      const btnsCloseSlideInCart = $$el('[data-closeform]') as NodeListOf<HTMLElement>

      btnsCloseSlideInCart.forEach(btn => {
        btn.addEventListener('click', e => {
          if ((e.target as Element).matches('.crs_slide_in') || (e.currentTarget as Element).matches('.close')) {
            console.log(`close`)
            this.closeSlideInPackageHandler()
          }
        })
      })
    })
  }
  openSlideInPackageHandler() {
    const slideInCart = $el('.crs_slide_in') as HTMLElement
    const body = $el('body') as HTMLElement

    body.style.overflow = 'hidden'
    slideInCart.classList.add('active')
  }
  closeSlideInPackageHandler() {
    const slideInCart = $el('.crs_slide_in') as HTMLElement
    const body = $el('body') as HTMLElement

    body.style.overflow = 'auto'
    slideInCart.classList.remove('active')
  }
  changeNextStepSlideInPackage() {
    waitForElement('.crs_slide_in .next_step_btn').then(i => {
      const nextStepBtn = $el('.crs_slide_in .next_step_btn')
      const packsSlideInPackage = $el('.crs_slide_in .focuspatch_packs') as HTMLElement
      const arrowBack = $el('.crs_slide_in .arrow_back') as HTMLElement
      const headerSlideInPackage = $el('.crs_slide_in .header_slide_in_package') as HTMLElement
      const activeTitle = headerSlideInPackage?.querySelector('.active_title')
      const activeStep = headerSlideInPackage?.querySelector('.active_step')
      const mainTitleWrapper = $el('.crs_slide_in .main_title_wrapper') as HTMLElement
      const newSubscription = $el('.crs_slide_in .new_subscription') as HTMLElement
      const proceedToCheckoutBtn = $el('.crs_slide_in .new_proceed_to_checkout_wrapper') as HTMLElement
      const infoSelectedPackageSlideInPackage = $el('.crs_slide_in .info_selected_package') as HTMLElement

      nextStepBtn.addEventListener('click', e => {
        e.currentTarget.closest('.next_step_wrapper').classList.add('is_hidden')
        console.log(`nextStepBtn`)

        if (
          packsSlideInPackage &&
          arrowBack &&
          activeTitle &&
          activeStep &&
          mainTitleWrapper &&
          newSubscription &&
          proceedToCheckoutBtn &&
          infoSelectedPackageSlideInPackage
        ) {
          packsSlideInPackage.classList.add('is_hidden')
          arrowBack.classList.remove('is_hidden')
          activeTitle.textContent = 'plan'
          activeStep.textContent = '2'
          mainTitleWrapper.classList.remove('is_hidden')
          newSubscription.classList.remove('is_hidden')
          proceedToCheckoutBtn.classList.remove('is_hidden')
          infoSelectedPackageSlideInPackage.classList.remove('is_hidden')
        }
      })
    })
  }
  changePrevStepSlideInPackage() {
    waitForElement('.crs_slide_in [data-btnBack]').then(i => {
      const btnsBack = $$el('.crs_slide_in [data-btnBack]') as NodeListOf<HTMLElement>
      const packsSlideInPackage = $el('.crs_slide_in .focuspatch_packs') as HTMLElement
      const arrowBack = $el('.crs_slide_in .arrow_back') as HTMLElement
      const headerSlideInPackage = $el('.crs_slide_in .header_slide_in_package') as HTMLElement
      const activeTitle = headerSlideInPackage?.querySelector('.active_title')
      const activeStep = headerSlideInPackage?.querySelector('.active_step')
      const mainTitleWrapper = $el('.crs_slide_in .main_title_wrapper') as HTMLElement
      const nextStepWrapper = $el('.crs_slide_in .next_step_wrapper') as HTMLElement
      const newSubscription = $el('.crs_slide_in .new_subscription') as HTMLElement
      const proceedToCheckoutBtn = $el('.crs_slide_in .new_proceed_to_checkout_wrapper') as HTMLElement
      const infoSelectedPackageSlideInPackage = $el('.crs_slide_in .info_selected_package') as HTMLElement

      btnsBack.forEach(btn => {
        btn.addEventListener('click', e => {
          console.log(`btnsBack`)
          if (
            packsSlideInPackage &&
            arrowBack &&
            activeTitle &&
            activeStep &&
            mainTitleWrapper &&
            nextStepWrapper &&
            proceedToCheckoutBtn &&
            infoSelectedPackageSlideInPackage
          ) {
            packsSlideInPackage.classList.remove('is_hidden')
            arrowBack.classList.add('is_hidden')
            activeTitle.textContent = 'package'
            activeStep.textContent = '1'
            mainTitleWrapper.classList.add('is_hidden')
            nextStepWrapper.classList.remove('is_hidden')
            newSubscription.classList.add('is_hidden')
            proceedToCheckoutBtn.classList.add('is_hidden')
            infoSelectedPackageSlideInPackage.classList.add('is_hidden')
          }
        })
      })
    })
  }
}

waitForElement('.lp-fp--package-cards li').then(i => {
  new SubscriptionOptimization(device)
})
