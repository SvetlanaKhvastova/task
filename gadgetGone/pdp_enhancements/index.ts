import { startLog, $el, $$el, waitForElement, visibilityOfTime, pushData, clarityInterval } from '../../libraries'
import {
  newTitleBox,
  conditionBlock,
  clearFormBlock,
  benefitsBlock,
  reviewsBlock,
  howItWorksSection,
  frequentlyAskedQuestionSection,
  radioBlock,
  inputValue,
  newStickyBlock
} from './blocks'
import { svg } from './data'
// @ts-ignore
import mainStyle from './main.css?raw'

startLog({ name: 'PDP Enhancements', dev: 'SKh' })
clarityInterval('exp_pdp_improvements')
const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class pdpEnhancements {
  device: 'mobile' | 'desktop'
  observer: null | MutationObserver

  constructor(device) {
    this.observer = null
    this.device = device
    this.init()
  }

  init() {
    waitForElement('div.product.type-product').then(i => {
      document.head.insertAdjacentHTML('beforeend', `<style>${mainStyle}</style>`)
      this.initDefaultChooseSelectValue()
      this.replaceSteps()
      this.addNewBlocksToDetails()
      this.addNewBlocksToOfferSummary()
      this.renderHowItWorksSection()
      this.renderFrequentlyAskedQuestionSection()
      this.observePageChange()
      this.renderInputsWrapp()
      this.onClickElems()
      this.renderNewElemFooter()
      if (this.device === 'mobile') {
        this.renderNewStickyBlock()
        this.intersectionObserverTradeInBtn()
      }
      this.visibleHandler()
    })
  }
  renderNewElemFooter() {
    if (window.innerWidth < 1100) {
      waitForElement('.svg.footer-wave-mobile').then(i => {
        if (!$el('.bgr_footer')) {
          $el('.svg.footer-wave-mobile').insertAdjacentHTML('afterbegin', svg.bgrFooter)
        }
      })
    } else {
      waitForElement('footer[role=contentinfo] .logo-container .logos').then(i => {
        if (!$el('.accredited_business_img')) {
          $el('footer[role=contentinfo] .logo-container .logos').insertAdjacentHTML(
            'afterbegin',
            svg.accreditedBusinessImg
          )
        }
        if (!$el('.pay_pal_img')) {
          $el('footer[role=contentinfo] .logo-container .logos').insertAdjacentHTML('beforeend', svg.payPalImg)
        }
      })
    }
  }
  observePageChange() {
    this.observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        this.changeClassListPriceAndBtnTradeIn()

        for (let node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue

          if (node.matches('.woocommerce-variation-price')) {
            this.addNewBlocksToOfferSummary()
            if (this.device === 'mobile') {
              this.renderNewStickyBlock()
            }
          }
        }
      })
    })

    const config = { childList: true, subtree: true }
    this.observer.observe(document.body, config)
  }
  replaceSteps() {
    let waitForStep = setInterval(() => {
      if ($el('.device-details-title')) {
        clearInterval(waitForStep)
        $el('.device-details-title').after($el('.device-step-header.step-number-3'))
        $$el('.device-step-header .progress-dots ol li')[0]?.insertAdjacentHTML('afterbegin', svg.stepIcon)
        $$el('.device-step-header .progress-dots ol li')[1]?.insertAdjacentHTML('afterbegin', svg.stepIcon)
      }
    }, 100)

    if (window.innerWidth >= 1100) {
      if (
        $el('.device-step-header.step-number-3 .step').textContent !== 'Step 3: Device' &&
        this.device === 'desktop'
      ) {
        $el('.device-step-header.step-number-3 .step').textContent = 'Step 3: Device'
      }
    }
  }
  addNewBlocksToDetails() {
    waitForElement('.variations').then(i => {
      if (!$el('.variations .new_title_box')) {
        if (window.innerWidth < 1100) {
          $el('.variations .variations-content').insertAdjacentHTML('afterbegin', newTitleBox('Details'))
        } else {
          $el('.variations').insertAdjacentHTML('afterbegin', newTitleBox('Details'))
        }
      }
    })
    waitForElement('.variations-content').then(i => {
      if (!$el('.radio_section')) {
        $el('.variations-content').insertAdjacentHTML('beforeend', `<div class="radio_section">${svg.loader}</div>`)
      }
      if (!$el('.clear_form_block')) {
        $el('.variations-content').insertAdjacentHTML('beforeend', clearFormBlock)
      }
    })
  }

  addNewBlocksToOfferSummary() {
    waitForElement('.single_variation_wrap').then(i => {
      if (!$el('.single_variation_wrap .new_title_box')) {
        if (window.innerWidth < 1100) {
          $el('.single_variation_wrap .single_variation_wrap--inner').insertAdjacentHTML(
            'afterbegin',
            newTitleBox('Offer Summary')
          )
        } else {
          $el('.single_variation_wrap').insertAdjacentHTML('afterbegin', newTitleBox('Offer Summary'))
        }
      }
      if (!$el('#benefitsBlock')) {
        $el('.order_benefits')?.insertAdjacentHTML('afterend', benefitsBlock)
      }
      if (this.device === 'desktop') {
        if (!$el('#reviewsBlock')) {
          $el('.single_variation_wrap')?.insertAdjacentHTML('beforeend', reviewsBlock)
        }
      } else {
        waitForElement('#howItWorksSection').then(i => {
          if (!$el('#reviewsBlock')) {
            $el('#howItWorksSection').insertAdjacentHTML('beforebegin', reviewsBlock)
          }
        })
      }

      if (!$el('.device_price_wrapper')) {
        $el('.single_variation_wrap--inner').insertAdjacentHTML('beforeend', `<div class="device_price_wrapper"></div>`)
      }
      waitForElement('.device_price_wrapper').then(i => {
        waitForElement('.device-placeholder-price').then(i => {
          let clonedNodePlaceholdePrice = $el('.device-placeholder-price').cloneNode(true)
          if (!$el('.device_price_wrapper .device-placeholder-price')) {
            $el('.device_price_wrapper')?.appendChild(clonedNodePlaceholdePrice)
          }
        })
        waitForElement('.add-to-cart-block .woocommerce-variation-price').then(i => {
          let clonedNodeVariationPrice = $el('.add-to-cart-block .woocommerce-variation-price').cloneNode(true)
          if (!$el('.device_price_wrapper .woocommerce-variation-price')) {
            $el('.device_price_wrapper')?.appendChild(clonedNodeVariationPrice)
          }
        })
        waitForElement('.woocommerce-variation-description-overview .ggv2-quantity').then(i => {
          let clonedNodeVariationQuantity = $el('.woocommerce-variation-description-overview .ggv2-quantity').cloneNode(
            true
          )
          if (!$el('.device_price_wrapper .ggv2-quantity:not(.ggv2-quantity--disabled)')) {
            $el('.device_price_wrapper')?.appendChild(clonedNodeVariationQuantity)
          }
        })
        waitForElement('.variation-description-overview .ggv2-quantity').then(i => {
          let clonedNodeVariationQuantity = $el('.variation-description-overview .ggv2-quantity').cloneNode(true)
          if (!$el('.device_price_wrapper .ggv2-quantity--disabled.ggv2-quantity')) {
            $el('.device_price_wrapper')?.appendChild(clonedNodeVariationQuantity)
          }
        })
      })
      waitForElement('.device_price_wrapper .price.price--empty').then(i => {
        if (
          $el('.device_price_wrapper .price.price--empty').textContent !==
          '*Please, enter device details to get a quote.'
        ) {
          $el('.device_price_wrapper .price.price--empty').textContent = '*Please, enter device details to get a quote.'
        }
      })
      if ($el('.single_add_to_cart_button').textContent !== 'Trade-In Device') {
        $el('.single_add_to_cart_button').textContent = 'Trade-In Device'
      }
    })
  }

  renderInputsWrapp() {
    //   pa_case-size ----------> Watch
    waitForElement('#pa_case-size').then(i => {
      this.renderInputs('#pa_case-size')
    })
    //   pa_case-type ----------> Watch
    waitForElement('#pa_case-type').then(i => {
      this.renderInputs('#pa_case-type')
    })
    //   pa_carrier
    waitForElement('#pa_carrier').then(i => {
      this.renderInputs('#pa_carrier')
    })
    //   pa_connectivity ----> tablet
    waitForElement('#pa_connectivity').then(i => {
      this.renderInputs('#pa_connectivity')
    })
    //   pa_processor -------> desktop
    waitForElement('#pa_processor').then(i => {
      this.renderInputs('#pa_processor')
    })
    //   pa_hard-drive -------> desktop
    waitForElement('#pa_hard-drive').then(i => {
      this.renderInputs('#pa_hard-drive')
    })
    //   pa_memory-ram -------> desktop
    waitForElement('#pa_memory-ram').then(i => {
      this.renderInputs('#pa_memory-ram')
    })
    //   pa_graphics-card -------> desktop
    waitForElement('#pa_graphics-card').then(i => {
      this.renderInputs('#pa_graphics-card')
    })
    //   pa_display-resolution -------> desktop
    waitForElement('#pa_display-resolution').then(i => {
      this.renderInputs('#pa_display-resolution')
    })
    //   pa_including-original-charger -------> desktop
    waitForElement('#pa_including-original-charger').then(i => {
      this.renderInputs('#pa_including-original-charger')
    })
    //   pa_storage -------> desktop
    waitForElement('#pa_storage').then(i => {
      this.renderInputs('#pa_storage')
    })
    //   pa_controller-count
    waitForElement('#pa_controller-count').then(i => {
      this.renderInputs('#pa_controller-count')
    })
    // pa_case-included
    waitForElement('#pa_case-included').then(i => {
      this.renderInputs('#pa_case-included')
    })
    //   pa_condition
    waitForElement('#pa_condition').then(i => {
      this.renderInputs('#pa_condition')
      if (window.innerWidth >= 1100) {
        waitForElement('.radio_block.pa_condition').then(i => {
          if (!$el('#conditionBlock')) {
            $el('.radio_block.pa_condition').insertAdjacentHTML('afterend', conditionBlock)
          }
        })
      }
    })
  }

  renderInputs(id: string) {
    let waitForRadioSection = setInterval(() => {
      if ($el('.radio_section')) {
        clearInterval(waitForRadioSection)
        let classRadioBlock = id.split('#')[1]
        let titleElem = $el(id)?.closest('div').querySelector('.attribute-name')?.textContent
        let nameRadioBlock = titleElem
          .toLocaleLowerCase()
          .trim()
          .split(' ')
          .join('_')
          .split('?')
          .join('')
          .split('(')
          .join('')
          .split(')')
          .join('')

        $el('.radio_section').insertAdjacentHTML('beforeend', radioBlock(titleElem, classRadioBlock))

        waitForElement(`.${classRadioBlock}`).then(b => {
          $$el(`${id} option`)?.forEach(opt => {
            $el(`.${classRadioBlock} .radio_option_wrapp`).insertAdjacentHTML(
              'beforeend',
              inputValue(nameRadioBlock, opt.value === '' ? `choose_opt_${nameRadioBlock}` : opt.value, opt.textContent)
            )
            $el('.rotate_svg')?.remove()
          })
        })
      }
    }, 100)
  }

  onClickElems() {
    $('body').on('found_variation', function (e) {
      if ($(window).width() < 1200) {
        setTimeout(function () {
          $('html, body').stop()
        }, 1050)
      }
    })
    //   clear form
    let waitForClearFormBlock = setInterval(() => {
      if ($el('.clear_form_block')) {
        clearInterval(waitForClearFormBlock)
        $el('.clear_form_block').addEventListener('click', () => {
          pushData('exp_pdp_improve_button_03', 'Clear Form', 'Button', 'Step 3: Device Details')
          $el('.reset_variations')?.click()
          waitForElement('.radio_option_wrapp').then(i => {
            $$el('.radio_option_wrapp input.custom_radio').forEach(el => {
              el.checked = false
            })
            this.changeClassListConditionBlock('', true)
            waitForElement('.radio_descr_mob').then(i => {
              $$el('.radio_descr_mob').forEach(t => {
                t.classList.add('is_hidden')
              })
            })
          })
        })
      }
    }, 100)
    //   label
    let waitForRadioOptionWrapp = setInterval(() => {
      if ($el('.radio_option_wrapp')) {
        clearInterval(waitForRadioOptionWrapp)
        $$el('.radio_option_wrapp input.custom_radio + label').forEach(el => {
          let parentClass = el.closest('.radio_block').className
          el.addEventListener('click', (e: any, i: any) => {
            let value = e.currentTarget.getAttribute('for')
            pushData(
              `exp_pdp_improve_button_${parentClass.split(' ')[1]}`,
              value,
              'Button',
              'Step 3: Device Details Details Storage'
            )

            $$el('.flex-wrapper select').forEach(select => {
              if (parentClass.includes(select.getAttribute('id'))) {
                select.value = value
                let event = new Event('change', { bubbles: true })
                select.dispatchEvent(event)
                // setTimeout(() => {
                //   el.scrollIntoView({ block: 'center', behavior: 'smooth' })
                // }, 3000)
              }
            })
            if (el.closest('.pa_condition')) {
              this.changeClassListConditionBlock(value)
              this.changeClassListConditionBlockMob(e.currentTarget)
            }
          })
        })
      }
    }, 100)
    // reviewsBlock links
    let waitForReviewsBlock = setInterval(() => {
      if ($el('#reviewsBlock')) {
        clearInterval(waitForReviewsBlock)
        $$el('#reviewsBlock a').forEach(link => {
          link.addEventListener('click', (e: any) => {
            if (!e.target.getAttribute('data-test')) {
              if (e.currentTarget.getAttribute('href').includes('trustpilot')) {
                pushData(`exp_pdp_improve_button_01`, 'Trustpilot', 'Button', 'Step 3: Reviews Block')
              }
              if (e.currentTarget.getAttribute('href').includes('google')) {
                pushData(`exp_pdp_improve_button_02`, 'Google', 'Button', 'Step 3: Reviews Block')
              }
              if (e.currentTarget.getAttribute('href').includes('aloma')) {
                pushData(`exp_pdp_improve_button_03`, 'AccreditedBusiness', 'Button', 'Step 3: Reviews Block')
              }
            }
            e.target.setAttribute('data-test', '1')
            setTimeout(() => {
              if (e.target.getAttribute('data-test')) {
                e.target.removeAttribute('data-test')
              }
            }, 1000)
          })
        })
      }
    }, 100)
    if (this.device === 'mobile') {
      // mob sticky btn
      let isActive = false
      let waitForStickyBtn = setInterval(() => {
        if ($el('.new_sticky_block button')) {
          clearInterval(waitForStickyBtn)
          $el('.new_sticky_block button').addEventListener('click', () => {
            isActive = true
            pushData('exp_pdp_improve_stiky_button_01', 'Trade-In', 'Sticky button', 'Step 3: Device Details')
            $el('.single_variation_wrap .add-to-cart-block > div .single_add_to_cart_button')?.click()
            setTimeout(() => {
              isActive = false
            }, 1000)
          })
        }
      }, 100)
      // mob waitForSingleAddToCart_
      let waitForSingleAddToCart_ = setInterval(() => {
        if ($el('.single_variation_wrap .add-to-cart-block > div .single_add_to_cart_button')) {
          clearInterval(waitForSingleAddToCart_)
          $el('.single_variation_wrap .add-to-cart-block > div .single_add_to_cart_button').addEventListener(
            'click',
            (e: any) => {
              if (!isActive) {
                pushData('exp_pdp_improve_button_04', 'Trade-In Device', 'Button', 'Step 3: Device Details on-page')
              }
            }
          )
        }
      }, 100)
    }
  }

  changeClassListConditionBlock(atr: string, reset: boolean = false) {
    let waitForConditionBlock = setInterval(() => {
      if ($el('#conditionBlock')) {
        clearInterval(waitForConditionBlock)
        $$el('#conditionBlock > div').forEach(d => {
          d.classList.add('is_hidden')
          if ($el('.txt_choose').classList.contains('is_hidden')) {
            $el('.txt_choose').classList.remove('is_hidden')
          }

          if (d.classList.contains(atr) && d.classList.contains('is_hidden')) {
            d.classList.remove('is_hidden')
          }

          if (reset && d.classList.contains('is_hidden') && d.classList.contains('choose_var')) {
            d.classList.remove('is_hidden')
            let waitForTxtChoose = setInterval(() => {
              if ($el('.txt_choose')) {
                clearInterval(waitForTxtChoose)
                if (!$el('.txt_choose').classList.contains('is_hidden')) {
                  $el('.txt_choose').classList.add('is_hidden')
                }
              }
            }, 100)
          }
        })
      }
    }, 100)
  }
  changeClassListConditionBlockMob(target: any) {
    let waitForRadioDescrMob = setInterval(() => {
      if ($el('.radio_descr_mob')) {
        clearInterval(waitForRadioDescrMob)
        $$el('.radio_descr_mob').forEach(t => {
          t.classList.add('is_hidden')
        })
        if (target.closest('label').querySelector('.radio_descr_mob')?.classList.contains('is_hidden')) {
          target.closest('label').querySelector('.radio_descr_mob').classList.remove('is_hidden')
        }
      }
    }, 100)
  }

  initDefaultChooseSelectValue() {
    $$el('.flex-wrapper select')?.forEach(s => {
      if (s.value !== '') {
        let w = setInterval(() => {
          if ($$el('.radio_block .radio_option_wrapp input.custom_radio')) {
            clearInterval(w)
            $$el('.radio_block .radio_option_wrapp input.custom_radio')?.forEach(i => {
              if (s.value === i.value) {
                i.checked = true
                if (i.closest('.pa_condition')) {
                  this.changeClassListConditionBlock(i.value)
                  this.changeClassListConditionBlockMob(i.nextElementSibling)
                }
              }
            })
          }
        }, 1000)
      }
    })
  }
  changeClassListPriceAndBtnTradeIn() {
    let woocommerceVariationPrice = $$el('.woocommerce-variation-price')
    let quantity = $$el('.ggv2-quantity:not(.ggv2-quantity--disabled)')
    let placeholderPrice = $$el('.device-placeholder-price')
    let quantityDisabled = $$el('.ggv2-quantity.ggv2-quantity--disabled')
    let stickyBtn = $el('.new_sticky_block button')
    let stickyDefaultTxt = $el('.new_sticky_block .new_sticky_default_txt')
    let stickyDefaultPrice = $el('.new_sticky_block .new_sticky_default_price')

    if ($el('.woocommerce-variation-add-to-cart .single_add_to_cart_button.button')?.classList.contains('disabled')) {
      woocommerceVariationPrice.forEach(i => {
        if (i && !i.classList.contains('is_hidden')) {
          i.classList.add('is_hidden')
        }
      })
      quantity.forEach(i => {
        if (i && !i.classList.contains('is_hidden')) {
          i.classList.add('is_hidden')
        }
      })
      placeholderPrice.forEach(i => {
        if (i && i.classList.contains('is_hidden')) {
          i.classList.remove('is_hidden')
        }
      })
      quantityDisabled.forEach(i => {
        if (i && i.classList.contains('is_hidden')) {
          i.classList.remove('is_hidden')
        }
      })
      if (stickyBtn && !stickyBtn.classList.contains('disabled')) {
        stickyBtn.classList.add('disabled')
      }
      if (stickyDefaultTxt && stickyDefaultTxt.classList.contains('is_hidden')) {
        stickyDefaultTxt.classList.remove('is_hidden')
      }
      if (stickyDefaultPrice && !stickyDefaultPrice.classList.contains('is_hidden')) {
        stickyDefaultPrice.classList.add('is_hidden')
      }
    } else {
      placeholderPrice.forEach(i => {
        if (i && !i.classList.contains('is_hidden')) {
          i.classList.add('is_hidden')
        }
      })
      quantityDisabled.forEach(i => {
        if (i && !i.classList.contains('is_hidden')) {
          i.classList.add('is_hidden')
        }
      })
      woocommerceVariationPrice.forEach(i => {
        if (i && i.classList.contains('is_hidden')) {
          i.classList.remove('is_hidden')
        }
      })
      quantity.forEach(i => {
        if (i && i.classList.contains('is_hidden')) {
          i.classList.remove('is_hidden')
        }
      })
      if (stickyBtn && stickyBtn.classList.contains('disabled')) {
        stickyBtn.classList.remove('disabled')
      }
      if (stickyDefaultTxt && !stickyDefaultTxt.classList.contains('is_hidden')) {
        stickyDefaultTxt.classList.add('is_hidden')
      }
      if (stickyDefaultPrice && stickyDefaultPrice.classList.contains('is_hidden')) {
        stickyDefaultPrice.classList.remove('is_hidden')
      }
    }
  }
  renderNewStickyBlock() {
    if (!$el('.new_sticky_block')) {
      $el('body').insertAdjacentHTML('afterbegin', newStickyBlock)
    }
    let w = setInterval(() => {
      if ($el('.new_sticky_block') && $el('.device_price_wrapper > .woocommerce-variation-price bdi')) {
        clearInterval(w)
        let priceValue = $el('.device_price_wrapper > .woocommerce-variation-price bdi').textContent
        $el('.new_sticky_block .new_sticky_default_price h4').textContent = 'Device Value'
        $el('.new_sticky_block .new_sticky_default_price span').textContent = priceValue
        $el('.new_sticky_block .new_sticky_default_price p').textContent = ''
      }
    }, 100)
  }
  intersectionObserverTradeInBtn() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          $el('.new_sticky_block').classList.add('show')
        } else {
          if ($el('.new_sticky_block').classList.contains('show')) {
            $el('.new_sticky_block').classList.remove('show')
          }
        }
      })
    })

    observer.observe($el('.single_add_to_cart_button'))
  }
  renderHowItWorksSection(): void {
    if (!$el('#howItWorksSection')) {
      $el('.product.type-product')?.insertAdjacentHTML('afterend', howItWorksSection)
    }
  }
  renderFrequentlyAskedQuestionSection(): void {
    let waitForHowItWorksSection = setTimeout(() => {
      if ($el('#howItWorksSection')) {
        clearInterval(waitForHowItWorksSection)
        if (!$el('#frequentlyAskedQuestionSection')) {
          $el('#howItWorksSection')?.insertAdjacentHTML('afterend', frequentlyAskedQuestionSection)
        }
      }
    }, 100)
    this.initAccordionQuestions()
  }
  initAccordionQuestions() {
    let lookForJquery = setInterval(() => {
      if (typeof jQuery === 'function' && $el('#frequentlyAskedQuestionSection')) {
        clearInterval(lookForJquery)
        $('.questions_accordion_block').eq(1).addClass('active')
        $('.questions_accordion_block .questions_accordion_link').eq(1).addClass('active')
        $('.questions_accordion_block .questions_accordion_lists').eq(1).css('display', 'block')

        $('.questions_accordion_link').on('click', function (e: any) {
          pushData(
            'exp_pdp_improve_accordion_01',
            `${e.currentTarget.querySelector('p').textContent}`,
            'Accordion',
            'Step 3: Device Details Frequently Asked Questions'
          )
          $(this).toggleClass('active')
          $(this).closest('li').toggleClass('active')
          $(this).next('.questions_accordion_lists').slideToggle()

          $('.questions_accordion_link').not(this).next('.questions_accordion_lists').slideUp()
          $('.questions_accordion_link').not(this).removeClass('active').closest('li').removeClass('active')
        })
      }
    }, 1000)
  }

  visibleHandler() {
    visibilityOfTime(
      '.single_variation_wrap--inner',
      'exp_pdp_improve_section_05',
      'Section',
      'Step 3: Device Details Offer Summary'
    )
    visibilityOfTime('.variations', 'exp_pdp_improve_section_01', 'Section', 'Step 3: Device Details')
    waitForElement('#reviewsBlock').then(i => {
      visibilityOfTime(
        '#reviewsBlock',
        'exp_pdp_improve_section_02',
        'Section',
        'Step 3: Device Details Social Trust Section'
      )
    })
    visibilityOfTime(
      '#howItWorksSection',
      'exp_pdp_improve_section_03',
      'Section',
      'Step 3: Device Details How it works'
    )
    waitForElement('#frequentlyAskedQuestionSection').then(i => {
      visibilityOfTime(
        '#frequentlyAskedQuestionSection',
        'exp_pdp_improve_section_04',
        'Section',
        'Step 3: Device Details Frequently Asked Questions'
      )
    })
  }
}
new pdpEnhancements(device)
