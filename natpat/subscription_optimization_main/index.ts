import { startLog, $el, $$el, waitForElement, pushData, clarityInterval, loadScriptsOrStyles } from '../../libraries'
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
    // clarityInterval('exp_sub_option')

    document.head.insertAdjacentHTML(
      'beforeend',
      `<link class="crs_font" href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">`
    )
    document.head.insertAdjacentHTML('beforeend', `<style class="crs_style">${mainStyle}</style>`)

    this.changeSaveTxtOnePack()
    this.renderNewSubscriptionBlock()
    this.changeActivePackHandler()

    this.changeSrcLogoUnderButton()

    this.renderHeaderSlideInCart()
    this.changeSrcCloseButtonSlideInCart()
    this.renderNextStepBtnSlideInCart()
    this.changeNextStepSlideInCart()
    this.replaceLogoSlideInCart()
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
      if (!$el('.custom_dropdown')) {
        i.insertAdjacentHTML('beforeend', customDropdown)
      }
      this.renderCustomOptions()
      console.log(`renderCustomDropdown`)
    })
  }

  renderCustomOptions() {
    waitForElement('#getNow .subscribe-frequency select option').then(i => {
      waitForElement('.custom_dropdown').then(i => {
        const subscriptionDropdown = $el('#getNow .subscribe-frequency select') as HTMLSelectElement
        const subscriptionDropdownOption = $$el('#getNow .subscribe-frequency select option') as NodeListOf<HTMLElement>
        const customDropdown = $el('.dropdown_menu') as HTMLElement
        const dropdownToggle = $el('.dropdown_toggle') as HTMLElement
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
            dropdownToggle.innerHTML = `${text}`
            selected = 'selected'
          }

          if ($el('.one_time_checked')) {
            dropdownToggle.classList.add('disabled')
          }
          customDropdown.insertAdjacentHTML(
            'beforeend',
            `<div class="dropdown_item ${selected}" data-value="${value}">${text}</div>`
          )
        })
        this.changeCustomDropdownHandler('.custom_dropdown')
      })
    })
  }

  changeCustomDropdownHandler(dropdownSelector: string) {
    const dropdown = $el(dropdownSelector) as HTMLElement
    const dropdownToggle = dropdown.querySelector('.dropdown_toggle') as HTMLElement
    const dropdownMenu = dropdown.querySelector('.dropdown_menu') as HTMLElement
    const dropdownItems = dropdown.querySelectorAll('.dropdown_item') as NodeListOf<HTMLElement>
    const subscriptionDropdownOption = $$el('#getNow .subscribe-frequency select option') as NodeListOf<HTMLElement>

    dropdownToggle.addEventListener('click', () => {
      pushData('exp_sub_option_dropdown_01', 'Ship every', 'Dropdown', 'Subscribe section')
      dropdownMenu.classList.toggle('show')
      this.adjustDropdownPosition(dropdownMenu)
      dropdownToggle.classList.toggle('active')
    })

    dropdownItems.forEach(item => {
      item.addEventListener('click', event => {
        const target = event.currentTarget as HTMLElement
        const value = target.getAttribute('data-value')

        dropdownItems.forEach(item => item.classList.remove('selected'))

        target.classList.add('selected')
        dropdownMenu.style.top = '100%'

        dropdownToggle.innerHTML = target.innerHTML
        dropdownMenu.classList.remove('show')
        dropdownToggle.classList.remove('active')
        pushData(
          'exp_sub_option_dropdown_02',
          `Selected value: ${target.querySelector('.text_transform')?.textContent}`,
          'Dropdown',
          'Subscribe section'
        )
        subscriptionDropdownOption.forEach(opt => {
          if (opt.getAttribute('value') === value) {
            if (opt.closest('select')) {
              opt.closest('select').value = value
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

  // changeSubscriptionPlanHandler() {
  //   waitForElement(`#subscription${this.uniqueId}`).then(() => {
  //     const inputsControlVar = $$el('#rtxSubscribe') as NodeListOf<HTMLInputElement>
  //     const newSubscriptionPlanLabels = $$el(
  //       `#subscription${this.uniqueId} .plan_selection label`
  //     ) as NodeListOf<HTMLElement>
  //     // console.log(newSubscriptionPlanLabels, `newSubscriptionPlanLabels`)

  //     inputsControlVar.forEach(inputControlVar => {
  //       const labelControlVar = inputControlVar.nextElementSibling as HTMLLabelElement
  //       console.log(inputsControlVar, 'inputsControlVar')

  //       newSubscriptionPlanLabels.forEach(label => {
  //         console.log(label, `>>>>>>label`)
  //         label.addEventListener('click', () => {
  //           console.log(label, `>>>>>>label`)
  //           switch (label.getAttribute('for')) {
  //             case `oneTime${this.uniqueId}`:
  //               pushData('exp_sub_option_button_01', 'One-Time', 'Button', 'Subscribe section')
  //               if (label.previousElementSibling?.checked) return

  //               if (inputControlVar?.checked) {
  //                 labelControlVar?.click()
  //               }

  //               $$el('.plan_details')?.forEach(el => {
  //                 if (!el.classList.contains('one_time_checked')) {
  //                   el.classList.add('one_time_checked')
  //                 }
  //               })
  //               this.syncRadioButtons(this.uniqueId, 'oneTime')
  //               break

  //             case `subscribeSave${this.uniqueId}`:
  //               pushData('exp_sub_option_button_02', 'Subscribe & Save', 'Button', 'Subscribe section')
  //               if (label.previousElementSibling?.checked) return

  //               if (!inputControlVar?.checked) {
  //                 labelControlVar?.click()
  //               }

  //               $$el('.plan_details')?.forEach(el => {
  //                 if (el.classList.contains('one_time_checked')) {
  //                   el.classList.remove('one_time_checked')
  //                 }
  //               })

  //               this.syncRadioButtons(this.uniqueId, 'subscribeSave')

  //               break
  //           }

  //           $$el('.custom_dropdown')?.forEach(el => {
  //             el?.remove()
  //           })
  //           $$el('.new_price_wrapper')?.forEach(el => {
  //             el?.remove()
  //           })
  //           $el('.info_wrapper')?.remove()

  //           this.renderCustomDropdown()
  //           this.renderInfoWrapperSlideInCart()
  //           this.renderNewPriceBlock()
  //         })
  //       })
  //     })
  //   })

  //   console.log(`changeSubscriptionPlanHandler`)
  // }

  changeSubscriptionPlanHandler() {
    waitForElement(`#subscription${this.uniqueId}`).then(() => {
      const inputsControlVar = $$el('#rtxSubscribe') as NodeListOf<HTMLInputElement>
      const newSubscriptionPlanLabels = $$el(`.plan_selection label`) as NodeListOf<HTMLElement>

      inputsControlVar.forEach(inputControlVar => {
        const labelControlVar = inputControlVar.nextElementSibling as HTMLLabelElement

        newSubscriptionPlanLabels.forEach(label => {
          // Удаляем существующие обработчики событий
          const newLabel = label.cloneNode(true) as HTMLElement
          label.replaceWith(newLabel)

          newLabel.addEventListener('click', () => {
            console.log(`object`, newLabel.getAttribute('for'), this.uniqueId)
            switch (newLabel.getAttribute('for')) {
              case `oneTime${this.uniqueId}`:
                // pushData('exp_sub_option_button_01', 'One-Time', 'Button', 'Subscribe section')
                if (newLabel.previousElementSibling?.checked) return

                if (inputControlVar?.checked) {
                  labelControlVar?.click()
                }

                $$el('.plan_details')?.forEach(el => {
                  if (!el.classList.contains('one_time_checked')) {
                    el.classList.add('one_time_checked')
                  }
                })
                this.syncRadioButtons(this.uniqueId, 'oneTime')
                break

              case `subscribeSave${this.uniqueId}`:
                // pushData('exp_sub_option_button_02', 'Subscribe & Save', 'Button', 'Subscribe section')
                if (newLabel.previousElementSibling?.checked) return

                if (!inputControlVar?.checked) {
                  labelControlVar?.click()
                }

                $$el('.plan_details')?.forEach(el => {
                  if (el.classList.contains('one_time_checked')) {
                    el.classList.remove('one_time_checked')
                  }
                })

                this.syncRadioButtons(this.uniqueId, 'subscribeSave')
                break
            }

            $$el('.custom_dropdown')?.forEach(el => {
              el?.remove()
            })
            $$el('.new_price_wrapper')?.forEach(el => {
              el?.remove()
            })
            $el('.info_wrapper')?.remove()

            this.renderCustomDropdown()
            this.renderInfoWrapperSlideInCart()
            this.renderNewPriceBlock()
          })
        })
      })
    })

    console.log(`changeSubscriptionPlanHandler`)
  }

  syncRadioButtons(syncId: string, value: string) {
    const radioButtons = $$el(`input[name="plan${syncId}"]`) as NodeListOf<HTMLInputElement>
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
          } else {
            this.isActiveOnePack = false
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
                return el.closest('.plan_comment')
              },
              placement: 'bottom-end',
              interactive: true,
              onShow(instance: any) {
                pushData(
                  'exp_sub_option_tooltip_01',
                  'A choice that saves both time and money',
                  'Visibility',
                  'Subscribe section'
                )
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

  renderHeaderSlideInCart() {
    waitForElement('#cons .title-logo').then(i => {
      const titleLogoOld = $el('#cons .title-logo') as HTMLElement

      if (!$el('.header_slide_in_cart')) {
        titleLogoOld.insertAdjacentHTML('afterbegin', headerSlideInCart)
      }
    })
  }

  changeSrcCloseButtonSlideInCart() {
    waitForElement('#cons .title-logo .close-btn').then(i => {
      const closeBtn = $el('#cons .title-logo .close-btn') as HTMLImageElement
      const newCloseIcon = 'https://conversionratestore.github.io/projects/buzzpatch/sunnypatch/img/close.svg'

      if (closeBtn.src !== newCloseIcon) {
        closeBtn.src = newCloseIcon
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
      const viewPricesSlideInCart = $el('#cons .view-prices') as HTMLElement
      const newSubscription = $el('.new_subscription') as HTMLElement

      nextStepBtn.addEventListener('click', e => {
        console.log(`nextStepBtn`)
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
        if (activeTitle && activeStep) {
          activeTitle.textContent = 'plan'
          activeStep.textContent = '2'
          // if (!viewPricesSlideInCart.querySelector('.new_subscription')) {
          //   viewPricesSlideInCart.insertAdjacentElement('afterbegin', newSubscription)
          // }
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
      const newSubscription = $el('.new_subscription') as HTMLElement
      const viewPricesSlideInCart = $el('#cons .view-prices') as HTMLElement

      btnsBack?.forEach(btn => {
        btn.addEventListener('click', e => {
          if (btn.classList.contains('arrow_back')) {
            console.log('arrow_back')
          } else {
            console.log('change_btn')
          }
          nextStepBtn.classList.remove('active_step_second')
          packsSlideInCart.classList.remove('active_step_second')
          bodySlideInCart?.remove()
          noIcartOpenBtn.style.display = 'none'
          $el('.arrow_back')?.remove()

          if (activeTitle && activeStep) {
            activeTitle.textContent = 'package'
            activeStep.textContent = '1'
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
}

waitForElement('#getNow .stay-container').then(i => {
  new SubscriptionOptimization(device)
})
