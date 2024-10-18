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
  bodySlideInCart,
  customDropdown,
  headerSlideInCart,
  infoWrapperSlideInCart,
  newPriceWrapper,
  newSubscriptionBlock,
  nextStepBtnSlideInCart
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
    startLog({ name: 'NatPat: subscription Optimization', dev: 'SKh' })
    clarityInterval('exp_sub_land')

    document.head.insertAdjacentHTML(
      'beforeend',
      `<link class="crs_font" href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">`
    )
    document.head.insertAdjacentHTML('beforeend', `<style class="crs_style">${mainStyle}</style>`)

    this.changeSaveTxtOnePack()
    this.renderNewSubscriptionBlock()
    this.changeActivePackHandler()

    this.changeTxtMainBtnToSubscribeAndSaveBtn()
    this.changeSrcLogoUnderButton()

    this.renderHeaderSlideInCart()
    this.renderNextStepBtnSlideInCart()
    this.changeNextStepSlideInCart()
    this.replaceLogoSlideInCart()

    this.addEventsProceedToCheckoutBtn()
    this.observeElementVisibility()
  }

  changeSaveTxtOnePack() {
    waitForElement('.list-packs-1 .save-btn span').then(i => {
      const saveBtn = $$el('.list-packs-1 .save-btn span') as NodeListOf<HTMLElement>

      saveBtn.forEach(el => {
        if (!el.nextElementSibling?.classList.contains('new_save_txt')) {
          el.insertAdjacentHTML('afterend', `<span class="new_save_txt">${el.getAttribute('data-price')}</span>`)
        }
      })
    })
  }

  renderNewSubscriptionBlock() {
    waitForElement('.stay-container').then(i => {
      const сontainerElements = $$el('.stay-container') as NodeListOf<HTMLElement>
      let checkedIsActiveOnePack = false
      this.uniqueId = 'Cons'

      сontainerElements.forEach(container => {
        if (container.closest('#getNow')) {
          this.uniqueId = 'GetNow'
        }
        if (!container.previousElementSibling.classList.contains('new_subscription')) {
          if (this.isActiveOnePack) {
            checkedIsActiveOnePack = true
          }
          container.insertAdjacentHTML('beforebegin', newSubscriptionBlock(checkedIsActiveOnePack, this.uniqueId))
        }
      })
    })
    console.log('renderNewSubscriptionBlock')
    this.newSubscriptionBlockHandlers()
  }

  newSubscriptionBlockHandlers() {
    waitForElement('.new_subscription').then((i: HTMLElement) => {
      if (!this.isActiveOnePack) {
        this.checkSubscriptionDefault()
      }
      this.renderCustomDropdown()
      this.changeSubscriptionPlanHandler()
      this.renderNewPriceBlock()
      this.initTooltip()
    })
    console.log(`newSubscriptionBlockHandlers`)
  }

  checkSubscriptionDefault() {
    waitForElement('#getNow #rtxSubscribe').then(i => {
      const inputControlVar = $el('#getNow #rtxSubscribe') as HTMLInputElement
      const labelControlVar = inputControlVar.nextElementSibling as HTMLLabelElement

      if (!inputControlVar.checked) {
        labelControlVar.click()
      }
    })
  }

  renderCustomDropdown() {
    waitForElement('.new_subscription_block').then((i: HTMLElement) => {
      const newSubscriptionBlock = $$el('.new_subscription_block') as NodeListOf<HTMLElement>
      newSubscriptionBlock.forEach(s => {
        if (!s.querySelector('.custom_dropdown')) {
          s.insertAdjacentHTML('beforeend', customDropdown)
        }
      })
      this.renderCustomOptions()
      console.log(`renderCustomDropdown`)
    })
  }

  renderCustomOptions() {
    waitForElement('.subscribe-frequency select option').then(i => {
      waitForElement('.custom_dropdown').then(i => {
        const subscriptionDropdown = $el('#getNow .subscribe-frequency select') as HTMLSelectElement
        const subscriptionDropdownOption = $$el('#getNow .subscribe-frequency select option') as NodeListOf<HTMLElement>
        const customDropdowns = $$el('.dropdown_menu') as NodeListOf<HTMLElement>
        const dropdownsToggle = $$el('.dropdown_toggle') as NodeListOf<HTMLElement>
        subscriptionDropdownOption.forEach(opt => {
          let selected = opt.getAttribute('selected') !== null ? 'selected' : ''
          const value = opt.getAttribute('value')
          let text = opt.textContent?.includes('Every')
            ? `<b>Ship every:</b> <span class="text_transform">${opt.textContent?.split('Every ')[1]}</span>`
            : opt.textContent

          if (opt.textContent?.includes('(most common)')) {
            text = `<b>Ship every:</b> <span class="text_transform">${opt.textContent
              ?.split('Every ')[1]
              .split('(most common)')[0]}</span> <span class="most_common">(${opt.textContent?.split('(')[1]}</span>`
          }

          if (subscriptionDropdown && subscriptionDropdown.value === value) {
            dropdownsToggle.forEach(dropdownToggle => {
              dropdownToggle.innerHTML = `${text}`
              selected = 'selected'
            })
          }

          if ($el('.one_time_checked')) {
            dropdownsToggle.forEach(dropdownToggle => {
              dropdownToggle.classList.add('disabled')
            })
          }
          customDropdowns.forEach(customDropdown => {
            customDropdown.insertAdjacentHTML(
              'beforeend',
              `<div class="dropdown_item ${selected}" data-value="${value}">${text}</div>`
            )
          })
        })
        this.changeCustomDropdownHandler('.custom_dropdown')
      })
    })
  }

  changeCustomDropdownHandler(dropdownSelector: string) {
    const dropdowns = $$el(dropdownSelector) as NodeListOf<HTMLElement>

    dropdowns.forEach(dropdown => {
      const dropdownToggle = dropdown.querySelector('.dropdown_toggle') as HTMLElement
      const dropdownMenu = dropdown.querySelector('.dropdown_menu') as HTMLElement
      const dropdownItems = dropdown.querySelectorAll('.dropdown_item') as NodeListOf<HTMLElement>
      const subscriptionDropdownOptions = $$el('.subscribe-frequency select option') as NodeListOf<HTMLElement>

      dropdownToggle.addEventListener('click', () => {
        if (dropdownToggle.closest('#getNow')) {
          pushData('exp_sub_land_element_04', 'Sub_plan', 'Click', 'Order Selection & Confirmation')
        }
        if (dropdownToggle.closest('#cons')) {
          pushData('exp_sub_land_element_03', 'Sub_plan', 'Click', 'Sticky cart')
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

          if (dropdownToggle.closest('#getNow')) {
            pushData(
              'exp_sub_land_dropdown_02',
              `Selected value: ${target.querySelector('.text_transform')?.textContent}`,
              'Dropdown',
              'Order Selection & Confirmation'
            )
          }
          if (dropdownToggle.closest('#cons')) {
            pushData(
              'exp_sub_land_dropdown_01',
              `Selected value: ${target.querySelector('.text_transform')?.textContent}`,
              'Dropdown',
              'Sticky cart'
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

  changeSubscriptionPlanHandler() {
    waitForElement(`.new_subscription_block `).then(() => {
      const inputsControlVar = $$el('#rtxSubscribe') as NodeListOf<HTMLInputElement>
      const newSubscriptionPlanLabels = $$el(`.plan_selection label`) as NodeListOf<HTMLElement>

      inputsControlVar.forEach(inputControlVar => {
        const labelControlVar = inputControlVar.nextElementSibling as HTMLLabelElement

        newSubscriptionPlanLabels.forEach(label => {
          const newLabel = label.cloneNode(true) as HTMLElement
          label.replaceWith(newLabel)

          newLabel.addEventListener('click', () => {
            console.log(newLabel.getAttribute('for'), `newLabel.getAttribute('for') `)
            if (
              newLabel.getAttribute('for') === 'oneTimeCons' ||
              newLabel.getAttribute('for') === 'subscribeSaveCons'
            ) {
              this.uniqueId = 'Cons'
            }

            if (
              newLabel.getAttribute('for') === 'oneTimeGetNow' ||
              newLabel.getAttribute('for') === 'subscribeSaveGetNow'
            ) {
              this.uniqueId = 'GetNow'
            }

            switch (newLabel?.previousElementSibling?.value) {
              case `oneTime`:
                if (this.uniqueId === 'Cons') {
                  pushData('exp_sub_land_button_05', 'One time', 'Click', 'Sticky cart')
                }
                if (this.uniqueId === 'GetNow') {
                  pushData('exp_sub_land_button_07', 'One time', 'Click', 'Order Selection & Confirmation')
                }

                if ((newLabel.previousElementSibling as HTMLInputElement)?.checked) return

                if (inputControlVar?.checked) {
                  labelControlVar?.click()
                }
                this.changeTxtMainBtnToProceedToCheckoutBtn()

                $$el('.plan_details')?.forEach(el => {
                  if (!el.classList.contains('one_time_checked')) {
                    el.classList.add('one_time_checked')
                  }
                })
                this.syncRadioButtons('oneTime')
                break

              case `subscribeSave`:
                console.log(this.uniqueId)
                if (this.uniqueId === 'Cons') {
                  pushData('exp_sub_land_button_06', 'Subscribe & save', 'Click', 'Sticky cart')
                }

                if (this.uniqueId === 'GetNow') {
                  pushData('exp_sub_land_button_08', 'Subscribe & save', 'Click', 'Order Selection & Confirmation')
                }
                if ((newLabel.previousElementSibling as HTMLInputElement)?.checked) return

                if (!inputControlVar?.checked && !this.isActiveOnePack) {
                  labelControlVar?.click()
                }

                if (this.isActiveOnePack) {
                  this.isActiveTwoPack = true
                  $el('#getNow .list-packs.list-packs-2').click()
                }

                this.changeTxtMainBtnToSubscribeAndSaveBtn()

                $$el('.plan_details')?.forEach(el => {
                  if (el.classList.contains('one_time_checked')) {
                    el.classList.remove('one_time_checked')
                  }
                })

                this.syncRadioButtons('subscribeSave')
                break
            }

            $$el('.custom_dropdown')?.forEach(el => {
              el?.remove()
            })
            $$el('.new_price_wrapper')?.forEach(el => {
              el?.remove()
            })
            $el('.info_wrapper')?.remove()

            if (!this.isActiveTwoPack) {
              this.renderCustomDropdown()
            }
            this.isActiveTwoPack = false
            this.renderInfoWrapperSlideInCart()
            this.renderNewPriceBlock()
          })
        })
      })
    })

    console.log(`changeSubscriptionPlanHandler`)
  }

  syncRadioButtons(value: string) {
    const radioButtons = $$el(`.plan_selection input`) as NodeListOf<HTMLInputElement>
    radioButtons.forEach(radioButton => {
      if (radioButton.value === value) {
        radioButton.checked = true
      }
    })
  }

  changeActivePackHandler() {
    waitForElement('.magicpatch-packs').then(n => {
      const packItems = $$el('.magicpatch-packs .list-packs') as NodeListOf<HTMLElement>

      packItems.forEach(pack => {
        pack.addEventListener('click', () => {
          console.log(`object`)
          if (pack.classList.contains('list-packs-1')) {
            this.isActiveOnePack = true
            this.changeTxtMainBtnToProceedToCheckoutBtn()
          } else {
            this.isActiveOnePack = false
            this.changeTxtMainBtnToSubscribeAndSaveBtn()
          }

          $$el('.new_subscription')?.forEach(el => {
            el?.remove()
          })

          $$el('.new_price_wrapper')?.forEach(el => {
            el?.remove()
          })

          $el('.info_wrapper')?.remove()

          this.renderNewSubscriptionBlock()
          this.renderNewPriceBlock()
          this.renderInfoWrapperSlideInCart()
        })
      })
    })
  }

  renderNewPriceBlock() {
    waitForElement('.list-packs.active-slide').then(n => {
      const activeSlide = $el('.list-packs.active-slide') as HTMLElement
      let buttons = $$el('#no-icart-open') as NodeListOf<HTMLElement>

      this.regPrice = activeSlide.querySelector('.info .before-after-prices .strikethrough')?.textContent?.trim() || ''
      this.salePrice = activeSlide.querySelector('.info .before-after-prices .after-price')?.textContent?.trim() || ''
      this.percentOff = activeSlide.querySelector('.save-btn span')?.textContent?.trim() || ''
      this.imgSrc = activeSlide.querySelector('.sticker-image img')?.getAttribute('src') || ''
      this.packPrice = activeSlide.querySelector('.info .pack-price')?.textContent?.trim() || ''
      this.pcs = activeSlide.querySelector('.info .pcs')?.textContent?.split('|')[0].trim() || ''

      if (activeSlide.classList.contains('list-packs-1')) {
        this.percentOff = activeSlide.querySelector('.save-btn .new_save_txt')?.textContent?.trim() || ''
      }

      if (this.regPrice !== '' && this.salePrice !== '' && this.percentOff !== '') {
        buttons.forEach(button => {
          if (!button.previousElementSibling?.classList.contains('new_price_wrapper')) {
            button.insertAdjacentHTML('beforebegin', newPriceWrapper(this.regPrice, this.salePrice, this.percentOff))
          }
        })
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

  changeSrcLogoUnderButton() {
    waitForElement('.reviews-slide > img').then(i => {
      const stayContainerElements = $$el('.reviews-slide > img') as NodeListOf<HTMLImageElement>
      const newLogo = 'https://conversionratestore.github.io/projects/zenpatch/img/new_logos.png'

      stayContainerElements.forEach(img => {
        if (img.src !== newLogo) {
          img.src = newLogo
        }
      })
    })
  }

  changeTxtMainBtnToProceedToCheckoutBtn() {
    waitForElement('#no-icart-open').then((i: HTMLElement) => {
      const buttons = $$el('#no-icart-open') as NodeListOf<HTMLElement>
      buttons.forEach(button => {
        if (button.textContent !== 'PROCEED TO CHECKOUT') {
          button.textContent = 'PROCEED TO CHECKOUT'
        }
      })
    })
  }

  changeTxtMainBtnToSubscribeAndSaveBtn() {
    waitForElement('#no-icart-open').then((i: HTMLElement) => {
      const buttons = $$el('#no-icart-open') as NodeListOf<HTMLElement>
      buttons.forEach(button => {
        if (button.textContent !== 'Subscribe & Save') {
          button.textContent = 'Subscribe & Save'
        }
      })
    })
  }

  renderHeaderSlideInCart() {
    waitForElement('#cons .title-logo').then(i => {
      const titleLogoOld = $el('#cons .title-logo') as HTMLElement

      if (!$el('.header_slide_in_cart')) {
        titleLogoOld.insertAdjacentHTML('afterbegin', headerSlideInCart)
      }
    })
  }

  renderNextStepBtnSlideInCart() {
    waitForElement('#cons #no-icart-open').then(i => {
      const button = $el('#cons #no-icart-open') as HTMLElement

      if (!$el('.next_step_btn')) {
        button.insertAdjacentHTML('afterend', nextStepBtnSlideInCart)
      }
    })
  }

  changeNextStepSlideInCart() {
    waitForElement('#cons .next_step_btn').then(i => {
      const nextStepBtn = $el('#cons .next_step_btn')
      const packsSlideInCart = $el('body #cons .magicpatch-packs') as HTMLElement
      const headerSlideInCart = $el('#cons .header_slide_in_cart') as HTMLElement
      const activeTitle = headerSlideInCart?.querySelector('.active_title')
      const activeStep = headerSlideInCart?.querySelector('.active_step')
      const noIcartOpenBtn = $el('#cons #no-icart-open') as HTMLElement
      const viewPricesBlock = $el('#cons .view-prices') as HTMLElement

      nextStepBtn.addEventListener('click', e => {
        pushData('exp_sub_land_button_01', 'Next step', 'Click', 'Sticky cart')
        e.currentTarget.classList.add('active_step_second')
        packsSlideInCart.classList.add('active_step_second')
        if (!$el('.body_slide_in_cart')) {
          packsSlideInCart.insertAdjacentHTML('beforebegin', bodySlideInCart)
          this.changePrevStepSlideInCart()
        }
        this.renderInfoWrapperSlideInCart()

        if (!$el('.arrow_back')) {
          headerSlideInCart.insertAdjacentHTML(
            'afterbegin',
            /* HTML */ `<span data-btnBack class="arrow_back">${svg.arrowLeftBackIcon}</span>`
          )
        }
        noIcartOpenBtn.style.display = 'flex'
        if (activeTitle && activeStep && viewPricesBlock) {
          activeTitle.textContent = 'plan'
          activeStep.textContent = '2'
          viewPricesBlock.classList.add('active_step_second')
        }
      })
    })
  }

  renderInfoWrapperSlideInCart() {
    waitForElement('#cons .body_slide_in_cart').then(i => {
      const bodySlideInCart = $el('#cons .body_slide_in_cart') as HTMLElement

      if (!$el('.info_wrapper')) {
        bodySlideInCart.insertAdjacentHTML(
          'beforeend',
          infoWrapperSlideInCart(this.regPrice, this.salePrice, this.imgSrc, this.packPrice, this.pcs)
        )
      }
    })
  }

  changePrevStepSlideInCart() {
    waitForElement('#cons .body_slide_in_cart').then(i => {
      const btnsBack = $$el('#cons [data-btnBack]')
      const nextStepBtn = $el('#cons .next_step_btn')
      const bodySlideInCart = $el('#cons .body_slide_in_cart') as HTMLElement
      const packsSlideInCart = $el('#cons .magicpatch-packs') as HTMLElement
      const headerSlideInCart = $el('#cons .header_slide_in_cart') as HTMLElement
      const activeTitle = headerSlideInCart?.querySelector('.active_title')
      const activeStep = headerSlideInCart?.querySelector('.active_step')
      const noIcartOpenBtn = $el('#cons #no-icart-open') as HTMLElement
      const viewPricesBlock = $el('#cons .view-prices') as HTMLElement

      btnsBack?.forEach(btn => {
        btn.addEventListener('click', e => {
          if (btn.classList.contains('arrow_back')) {
            pushData('exp_sub_land_arrow_back_01', 'Arrow Back', 'Click', 'Sticky cart')
          } else {
            pushData('exp_sub_land_button_04', 'Change', 'Click', 'Sticky cart')
          }
          nextStepBtn.classList.remove('active_step_second')
          packsSlideInCart.classList.remove('active_step_second')
          bodySlideInCart?.remove()
          noIcartOpenBtn.style.display = 'none'
          $el('.arrow_back')?.remove()

          if (activeTitle && activeStep && viewPricesBlock) {
            activeTitle.textContent = 'package'
            activeStep.textContent = '1'
            if (viewPricesBlock.classList.contains('active_step_second')) {
              viewPricesBlock.classList.remove('active_step_second')
            }
          }
        })
      })
    })
  }

  replaceLogoSlideInCart() {
    waitForElement('#cons .reviews-slide').then(i => {
      const imgContainerElement = $el('#cons .reviews-slide') as HTMLElement
      const placement = $el('#cons .view-prices') as HTMLElement

      if (!placement?.querySelector('.reviews-slide') && placement) {
        placement.insertAdjacentElement('beforeend', imgContainerElement)
      }
    })
  }

  addEventsProceedToCheckoutBtn() {
    waitForElement('#no-icart-open').then(i => {
      const buttons = $$el('#no-icart-open') as NodeListOf<HTMLElement>
      buttons.forEach(button => {
        button.addEventListener('click', e => {
          if (button.closest('#getNow')) {
            if (button.textContent === 'Subscribe & Save') {
              pushData('exp_sub_land_button_09', 'Subscribe & save', 'Click', 'Order Selection & Confirmation')
            }
            if (button.textContent === 'PROCEED TO CHECKOUT') {
              pushData('exp_sub_land_button_10', 'Proceed to checkout', 'Click', 'Order Selection & Confirmation')
            }
          }

          if (button.closest('#cons')) {
            if (button.textContent === 'Subscribe & Save') {
              pushData('exp_sub_land_button_02', 'Subscribe & save', 'Click', 'Sticky cart')
            }
            if (button.textContent === 'PROCEED TO CHECKOUT') {
              pushData('exp_sub_land_button_03', 'Proceed to checkout', 'Click', 'Sticky cart')
            }
          }
        })
      })
    })
  }

  observeElementVisibility() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const observer = new IntersectionObserver(handleIntersect, options)

    waitForElement('#cons .next_step_btn').then(i => {
      const target1 = $el('.next_step_btn') as HTMLElement
      observer.observe(target1)
    })

    waitForElement('#cons .body_slide_in_cart').then(i => {
      const target2 = $el('.body_slide_in_cart') as HTMLElement
      observer.observe(target2)
    })

    function handleIntersect(entries: IntersectionObserverEntry[]) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('next_step_btn')) {
            visibilityOfTime('.next_step_btn', 'exp_sub_land_element_01', 'Sticky cart', 'Step 1', 'View')
          } else if (entry.target.classList.contains('body_slide_in_cart')) {
            visibilityOfTime('.body_slide_in_cart', 'exp_sub_land_element_02', 'Sticky cart', 'Step 2', 'View')
          }
        }
      })
    }
  }
}

waitForElement('#getNow .stay-container').then(i => {
  new SubscriptionOptimization(device)
})
