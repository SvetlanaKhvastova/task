import {
  startLog,
  $el,
  $$el,
  waitForElement,
  pushData,
  clarityInterval,
  loadScriptsOrStyles,
  visibilityOfTime,
  checkScrollPosition
} from '../../libraries'
import { customDropdown, newBlockPackage, newBlockPackages, newSubscriptionBlock } from './blocks'
import { svg, git } from './data'
// @ts-ignore
import mainStyle from './main.css?raw'

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class SubscriptionOptimization {
  device: 'mobile' | 'desktop'
  isActiveOnePack: boolean
  isActiveTwoPack: boolean
  uniqueId: string
  isActiveFlag: boolean

  constructor(device) {
    this.device = device
    this.isActiveOnePack = false
    this.isActiveTwoPack = false
    this.uniqueId = ''
    this.isActiveFlag = false

    this.init()
  }

  init() {
    startLog({ name: 'focuspatch: subscription Optimization', dev: 'SKh' })
    clarityInterval('focuspatch_b', 'variant_1')

    document.head.insertAdjacentHTML(
      'beforeend',
      `<link class="crs_font" href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">`
    )
    document.head.insertAdjacentHTML('beforeend', `<style class="crs_style">${mainStyle}</style>`)

    this.initAllPricingForNewBlockPackages()
    this.initActiveSubscriptionForAllPlans()
    this.renderNewTitleBlockPackage()
    this.renderNewBlockPackagesOnLanding()
    this.changeActivePackHandler()
    this.renderNewSubscriptionBlock()
    this.changeSubscriptionPlanHandler()
    this.initTooltip()
    this.renderCustomDropdown()
    this.addClickProceedToCheckoutBtns()
    this.visibilityPacksOnLanging()
    this.handleClickLpfpPackage()
  }

  initAllPricingForNewBlockPackages() {
    waitForElement('.pricing_block_attr').then(i => {
      const pricingBlocksAttr = $$el('.pricing_block_attr') as NodeListOf<HTMLElement>

      pricingBlocksAttr.forEach(block => {
        const cardBody = block.closest('.card-body')
        const subscriptionDiscount = block.getAttribute('data-subscription-discount')
        const subscriptionOldPrice = block.getAttribute('data-subscription-old-price')
        const subscriptionFinalPrice = block.getAttribute('data-subscription-final-price')
        const subscriptionPricePerPack = block.getAttribute('data-subscription-price-per-pack')
        const noSubscriptionDiscount = block.getAttribute('data_no-subscription-discount')
        const noSubscriptionOldPrice = block.getAttribute('data-no-subscription-old-price')
        const noSubscriptionFinalPrice = block.getAttribute('data-no-subscription-final-price')
        const noSubscriptionPricePerPack = block.getAttribute('data-no-subscription-price-per-pack')

        waitForElement('.focuspatch_packs_item[data-id="1"]').then(i => {
          const packs = $$el('.focuspatch_packs_item') as NodeListOf<HTMLElement>
          packs.forEach(pack => {
            const saveBannerPercent = pack.querySelector('.save_banner_percent') as HTMLElement
            const focuspatchPricePerPack = pack.querySelector('.price_per_pack_txt') as HTMLElement
            const focuspatchRegPrice = pack.querySelector('.reg_price_txt') as HTMLElement
            const focuspatchFinalPrice = pack.querySelector('.final_price_txt') as HTMLElement
            if (cardBody && cardBody.getAttribute('data-pack') === pack.getAttribute('data-id')) {
              if (pack.getAttribute('data-id') === '1' || $el('[value="oneTime"]:checked')) {
                saveBannerPercent.textContent = noSubscriptionDiscount
                focuspatchRegPrice.textContent = noSubscriptionOldPrice
                focuspatchFinalPrice.textContent = noSubscriptionFinalPrice
                focuspatchPricePerPack.textContent = noSubscriptionPricePerPack
              } else {
                saveBannerPercent.textContent = subscriptionDiscount
                focuspatchRegPrice.textContent = subscriptionOldPrice
                focuspatchFinalPrice.textContent = subscriptionFinalPrice
                focuspatchPricePerPack.textContent = subscriptionPricePerPack
              }
            }
          })
        })

        waitForElement('.new_price_wrapper_package').then(i => {
          const newPriceWrapperPackage = $$el('.new_price_wrapper_package') as NodeListOf<HTMLElement>
          const activePack = $el('.focuspatch_packs_item.active') as HTMLElement

          newPriceWrapperPackage.forEach(wrapper => {
            const newRegPrice = wrapper.querySelector('.new_reg_price') as HTMLElement
            const newFinalPrice = wrapper.querySelector('.new_final_price') as HTMLElement
            const percentOffTxt = wrapper.querySelector('.percent_off_txt') as HTMLElement

            if (cardBody && cardBody.getAttribute('data-pack') === activePack.getAttribute('data-id')) {
              if (activePack.getAttribute('data-id') === '1' || $el('[value="oneTime"]:checked')) {
                percentOffTxt.textContent = noSubscriptionDiscount
                newRegPrice.textContent = noSubscriptionOldPrice
                newFinalPrice.textContent = noSubscriptionFinalPrice
              } else {
                percentOffTxt.textContent = subscriptionDiscount
                newRegPrice.textContent = subscriptionOldPrice
                newFinalPrice.textContent = subscriptionFinalPrice
              }
            }
          })
        })

        waitForElement('.info_selected_package').then(i => {
          const infoSelectedPackages = $$el('.info_selected_package') as NodeListOf<HTMLElement>
          const activePack = $el('.focuspatch_packs_item.active') as HTMLElement

          infoSelectedPackages.forEach(infoSelectedPackage => {
            const newRegPrice = infoSelectedPackage.querySelector('.new_reg_price') as HTMLElement
            const newFinalPrice = infoSelectedPackage.querySelector('.new_sale_price') as HTMLElement
            const newPicePerPack = infoSelectedPackage.querySelector('.details_price_for_pack') as HTMLElement
            const newDetailsQuantity = infoSelectedPackage.querySelector('.details_quantity') as HTMLElement
            const img = infoSelectedPackage.querySelector('.details_img_wrapper img') as HTMLImageElement

            if (cardBody && cardBody.getAttribute('data-pack') === activePack.getAttribute('data-id')) {
              img.src = activePack.querySelector('.focuspatch_packs_image img')?.getAttribute('src') || ''
              newPicePerPack.textContent = `${noSubscriptionPricePerPack}/pack`
              newDetailsQuantity.textContent = activePack.querySelector('.number_patches')?.textContent || ''

              if (activePack.getAttribute('data-id') === '1' || $el('[value="oneTime"]:checked')) {
                newRegPrice.textContent = noSubscriptionOldPrice
                newFinalPrice.textContent = noSubscriptionFinalPrice
              } else {
                newRegPrice.textContent = subscriptionOldPrice
                newFinalPrice.textContent = subscriptionFinalPrice
              }
            }
          })
        })
      })
    })
  }

  initActiveSubscriptionForAllPlans() {
    waitForElement('.rtx-subscribe-label input').then(i => {
      const inputsSubscribe = $$el('.rtx-subscribe-label input') as NodeListOf<HTMLInputElement>

      inputsSubscribe.forEach(input => {
        if (!input.checked) {
          input.checked = true
        }
      })
    })
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

          if (!this.isActiveFlag) {
            if (item.closest('#newBlockPackage')) {
              pushData('exp_focuspatch_click_01', packId, 'click', 'Choose your package')
            }
            if (item.closest('.crs_slide_in')) {
              pushData('exp_focuspatch_click_06', packId, 'click', 'SELECT PACKAGE')
            }
          }

          packageItems.forEach(i => {
            i.classList.remove('active')
          })

          item.classList.add('active')

          $$el('.custom_dropdown').forEach(i => {
            i?.remove()
          })

          if (packId === '1') {
            $$el('[value="oneTime"]').forEach(i => {
              if (!i.closest('.new_subscription_block')?.classList.contains('is_disabled')) {
                this.isActiveFlag = true
                i.nextElementSibling.click()
                this.isActiveFlag = false
              }
            })
            this.isActiveOnePack = true
          } else {
            $$el('[value="subscribeSave"]').forEach(i => {
              if (i.closest('.new_subscription_block')?.classList.contains('is_disabled')) {
                this.isActiveFlag = true
                i.nextElementSibling.click()
                this.isActiveFlag = false
              }
            })
            this.isActiveOnePack = false
            this.renderCustomDropdown()
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

      if (detailsImg && pricePerPack && numberPatches && regPriceTxt && finalPriceTxt) {
        detailsImg.src = imgSrc
        pricePerPack.textContent = packPrice
        numberPatches.textContent = pcs
        regPriceTxt.textContent = regPrice
        finalPriceTxt.textContent = salePrice
        this.changeTxtBtnsToBuyPacks(activePackId)
      }
    })
    waitForElement('.new_price_wrapper_package').then(i => {
      const newPriceWrappersPackage = $$el('.new_price_wrapper_package') as NodeListOf<HTMLElement>

      newPriceWrappersPackage.forEach(priceWrapper => {
        const newRegPrice = priceWrapper.querySelector('.new_reg_price') as HTMLElement
        const newSalePrice = priceWrapper.querySelector('.new_final_price') as HTMLElement
        const percentOff = priceWrapper.querySelector('.percent_off_txt') as HTMLElement

        if (newRegPrice && newSalePrice && percentOff) {
          newRegPrice.textContent = regPrice
          newSalePrice.textContent = salePrice
          percentOff.textContent = `${savePercent}`
        }
      })
    })
  }

  changeTxtBtnsToBuyPacks(param: string) {
    waitForElement('.new_proceed_to_checkout_btn').then(i => {
      const checkoutBtn = $$el('.new_proceed_to_checkout_btn') as NodeListOf<HTMLElement>

      checkoutBtn.forEach(btn => {
        if (param !== '1' && param !== 'oneTime') {
          btn.textContent = 'Subscribe & Save'
        } else {
          btn.textContent = 'PROCEED TO CHECKOUT'
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
            this.changeTxtBtnsToBuyPacks(value)
          }

          switch (value) {
            case `oneTime`:
              $$el('.plan_details')?.forEach(el => {
                if (!el.classList.contains('one_time_checked')) {
                  el.classList.add('one_time_checked')
                }
              })
              if (!$el('.focuspatch_packs_item.active[data-id="1"]')) {
                this.initFalseSubscriptionForAllPlans()
              }
              if (!this.isActiveFlag) {
                if (newLabel.closest('#newBlockPackage')) {
                  pushData('exp_focuspatch_click_03', 'One time', 'click', 'Choose your package')
                }
                if (newLabel.closest('.crs_slide_in')) {
                  pushData('exp_focuspatch_click_09', 'One time', 'click', 'SELECT PLAN')
                }
              }

              break

            case `subscribeSave`:
              $$el('.plan_details')?.forEach(el => {
                if (el.classList.contains('one_time_checked')) {
                  el.classList.remove('one_time_checked')
                }
              })
              if (this.isActiveOnePack && $el('.focuspatch_packs_item.active[data-id="1"]')) {
                this.isActiveFlag = true
                $el('[data-id="2"]')?.click()
                this.isActiveOnePack = false
                this.isActiveFlag = false
              }
              this.initActiveSubscriptionForAllPlans()
              if (!this.isActiveFlag) {
                if (newLabel.closest('#newBlockPackage')) {
                  pushData('exp_focuspatch_click_02', 'Subscribe and save', 'click', 'Choose your package')
                }
                if (newLabel.closest('.crs_slide_in')) {
                  pushData('exp_focuspatch_click_08', 'Subscribe and save', 'click', 'SELECT PLAN')
                }
              }
              break
          }
          if (!$el('.focuspatch_packs_item.active[data-id="1"]')) {
            this.initAllPricingForNewBlockPackages()
          }
        })
      })
    })
  }

  initFalseSubscriptionForAllPlans() {
    waitForElement('.rtx-subscribe-label input').then(i => {
      const inputsSubscribe = $$el('.rtx-subscribe-label input') as NodeListOf<HTMLInputElement>

      inputsSubscribe.forEach(input => {
        if (input.checked) {
          input.checked = false
        }
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
                    'exp_focuspatch_tooltip_01',
                    'A choice that saves both time and money',
                    'View',
                    'Subscribe section'
                  )
                }
                if (el.closest('.is_active_one_pack')) {
                  pushData('exp_focuspatch_tooltip_02', 'Select 2, 3 or 4 packs..', 'View', 'Subscribe section')
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
      const activePack = $el('.focuspatch_packs_item.active') as HTMLElement

      newSubscriptionBlock.forEach(s => {
        if (!s.querySelector('.custom_dropdown')) {
          s.insertAdjacentHTML('beforeend', customDropdown)
        }
      })
      this.renderCustomOptions(`[data-pack="${activePack.getAttribute('data-id')}"]`)
    })
  }

  renderCustomOptions(subscriptionDropdownElem: string) {
    waitForElement(`${subscriptionDropdownElem} .v-pack-select-frequency option`).then(i => {
      waitForElement('.custom_dropdown').then(i => {
        const subscriptionDropdown = $el(`${subscriptionDropdownElem} .v-pack-select-frequency`) as HTMLSelectElement
        const subscriptionDropdownOption = $$el(
          `${subscriptionDropdownElem} .v-pack-select-frequency option`
        ) as NodeListOf<HTMLElement>
        const customDropdowns = $$el('.dropdown_menu') as NodeListOf<HTMLElement>
        const dropdownsToggle = $$el('.dropdown_toggle') as NodeListOf<HTMLElement>
        subscriptionDropdownOption.forEach(opt => {
          let selected = opt.getAttribute('selected') !== null ? 'selected' : ''
          const value = opt.getAttribute('value')
          let text = opt.textContent?.includes('Every')
            ? `<b>Ship every:</b> <span class="text_transform">${opt.textContent?.split('Every ')[1]}</span>`
            : opt.textContent

          if (opt.textContent?.includes('1 Month')) {
            text = `<b>Ship every:</b> <span class="text_transform">${opt.textContent?.split(
              'Every '
            )[1]}</span> <span class="most_common"> (most common)</span>`
          }

          if (subscriptionDropdown && subscriptionDropdown.value === value) {
            dropdownsToggle.forEach(dropdownToggle => {
              dropdownToggle.innerHTML = `${text}`
              selected = 'selected'
            })
          }

          customDropdowns.forEach(customDropdown => {
            customDropdown.insertAdjacentHTML(
              'beforeend',
              `<div class="dropdown_item ${selected}" data-value="${value}">${text}</div>`
            )
          })
        })
        this.changeCustomDropdownHandler('.custom_dropdown', subscriptionDropdownElem)
      })
    })
  }

  changeCustomDropdownHandler(dropdownSelector: string, subscriptionDropdownElem: string) {
    const dropdowns = $$el(dropdownSelector) as NodeListOf<HTMLElement>

    dropdowns.forEach(dropdown => {
      const dropdownToggle = dropdown.querySelector('.dropdown_toggle') as HTMLElement
      const dropdownMenu = dropdown.querySelector('.dropdown_menu') as HTMLElement
      const dropdownItems = dropdown.querySelectorAll('.dropdown_item') as NodeListOf<HTMLElement>
      const subscriptionDropdownOptions = $$el(
        `${subscriptionDropdownElem} .v-pack-select-frequency option`
      ) as NodeListOf<HTMLElement>

      dropdownToggle.addEventListener('click', () => {
        if (dropdownToggle.closest('#newBlockPackage')) {
          pushData('exp_focuspatch_click_04', 'Ship every xxx week', 'click', 'Choose your package')
        } else {
          pushData('exp_focuspatch_click_10', 'Ship every xxx week', 'click', 'SELECT PLAN')
        }

        dropdownMenu.classList.toggle('show')
        this.adjustDropdownPosition(dropdownMenu)
        dropdownToggle.classList.toggle('active')
      })

      dropdownItems.forEach(item => {
        item.addEventListener('click', event => {
          const target = event.currentTarget as HTMLElement
          const value = target.getAttribute('data-value')

          this.syncDropdowns(dropdownSelector, value)

          dropdownItems.forEach(item => item.classList.remove('selected'))

          target.classList.add('selected')
          dropdownMenu.style.top = '100%'

          dropdownToggle.innerHTML = target.innerHTML
          dropdownMenu.classList.remove('show')
          dropdownToggle.classList.remove('active')

          if (dropdownToggle.closest('#newBlockPackage')) {
            pushData(
              'exp_focuspatch_dropdown_01',
              `Selected value: ${target.querySelector('.text_transform')?.textContent}`,
              'Dropdown',
              'Choose your package'
            )
          } else {
            pushData(
              'exp_focuspatch_dropdown_02',
              `Selected value: ${target.querySelector('.text_transform')?.textContent}`,
              'Dropdown',
              'SELECT PLAN'
            )
          }

          subscriptionDropdownOptions.forEach(opt => {
            if (opt.getAttribute('value') === value) {
              if (opt.closest('select')) {
                ;(opt.closest('select') as HTMLSelectElement).value = value
              }
            }
          })
        })
      })

      document.addEventListener('click', event => {
        const target = event.target as HTMLElement
        if (!dropdown.contains(target)) {
          dropdownMenu.classList.remove('show')
          dropdownToggle.classList.remove('active')
          dropdownMenu.style.top = '100%'
        }
      })

      let observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) {
              this.adjustDropdownPosition(dropdownMenu)
            }
          })
        },
        {
          root: null,
          threshold: 1.0
        }
      )

      observer.observe(dropdownMenu)
    })
  }

  adjustDropdownPosition(dropdownMenu: HTMLElement) {
    const rect = dropdownMenu.getBoundingClientRect()
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight

    if (rect.bottom > viewportHeight) {
      dropdownMenu.style.top = `-${rect.height + 2}px`
    } else {
      dropdownMenu.style.top = '100%'
    }
  }

  syncDropdowns(dropdownSelector: string, value: string) {
    const dropdowns = $$el(dropdownSelector) as NodeListOf<HTMLElement>

    dropdowns.forEach(dropdown => {
      const dropdownToggle = dropdown.querySelector('.dropdown_toggle') as HTMLElement
      const dropdownMenu = dropdown.querySelector('.dropdown_menu') as HTMLElement
      const dropdownItems = dropdown.querySelectorAll('.dropdown_item') as NodeListOf<HTMLElement>

      dropdownItems.forEach(item => {
        if (item.getAttribute('data-value') === value) {
          dropdownItems.forEach(item => item.classList.remove('selected'))
          item.classList.add('selected')
          dropdownToggle.innerHTML = item.innerHTML
          dropdownMenu.classList.remove('show')
          dropdownToggle.classList.remove('active')
        }
      })
    })
  }

  addClickProceedToCheckoutBtns() {
    waitForElement('.new_proceed_to_checkout_btn').then(i => {
      const proceedToCheckoutBtns = $$el('.new_proceed_to_checkout_btn') as NodeListOf<HTMLElement>

      proceedToCheckoutBtns.forEach(btn => {
        btn.addEventListener('click', e => {
          const activePack = $el('.focuspatch_packs_item.active') as HTMLElement
          const btnsControl = $$el('.lp-fp--order-btn') as NodeListOf<HTMLElement>

          btnsControl.forEach(i => {
            if (i.closest('.card-body')?.getAttribute('data-pack') === activePack.getAttribute('data-id')) {
              if (btn.closest('#newBlockPackage')) {
                pushData('exp_focuspatch_click_05', btn.textContent || '', 'click', 'Choose your package')
              } else {
                pushData('exp_focuspatch_click_13', btn.textContent || '', 'click', 'SELECT PLAN')
              }
              i.click()
            }
          })
        })
      })
    })
  }

  visibilityPacksOnLanging() {
    waitForElement('#newBlockPackage').then(i => {
      visibilityOfTime(
        '#newBlockPackage',
        'exp_focuspatch_element_01',
        'Choose your package',
        'Choose your package',
        'View'
      )
    })
  }

  handleClickLpfpPackage() {
    waitForElement('.new_free_shipping_block_package').then(i => {
      $$el('[href="#lpfpPackage"]')?.forEach(el => {
        el.addEventListener('click', (e: any) => {
          e.preventDefault()
          e.stopPropagation()
          $('html, body').stop()
          let coverageElem: HTMLElement = $el('.new_free_shipping_block_package') as HTMLElement

          let headerOffset: number = 0
          let scroll = true
          let s = setInterval(async () => {
            if (
              coverageElem.getBoundingClientRect().top > headerOffset - 1 &&
              coverageElem.getBoundingClientRect().top <= headerOffset + 1
            ) {
              clearInterval(s)
            } else {
              if (scroll) {
                scroll = false
                scroll = await checkScrollPosition(headerOffset, coverageElem)
              }
            }
          }, 100)
        })
      })
    })
  }
}

waitForElement('.lp-fp--package-cards li .pricing_block_attr').then(i => {
  new SubscriptionOptimization(device)
})
