import { startLog, $el, $$el, waitForElement, visibilityOfTime, pushData, hjInterval } from '../../libraries'
import {
  newTitleBox,
  conditionBlock,
  clearFormBlock,
  benefitsBlock,
  reviewsBlock,
  howItWorksSection,
  frequentlyAskedQuestionSection,
  radioBlock,
  inputValue
} from './blocks'
// @ts-ignore
import mainStyle from './main.css?raw'

startLog({ name: 'PDP Enhancements', dev: 'SKh' })
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
      this.replaceSteps()
      this.addNewBlocksToDetails()
      this.addNewBlocksToOfferSummary()
      this.renderHowItWorksSection()
      this.renderFrequentlyAskedQuestionSection()
      this.observePageChange()

      this.renderInputsWrapp()
      this.onClickElems()
    })
  }
  observePageChange() {
    this.observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        for (let node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue

          if (node.matches('.woocommerce-variation-price')) {
            console.log(`>>>>>>>>>>>>>..`)
            //   $el('.device_price_wrapper').insertAdjacentElement('afterbegin', $el('.woocommerce-variation-price'))
          }
        }
      })
    })

    const config = { childList: true, subtree: true }
    this.observer.observe(document.body, config)
  }
  replaceSteps() {
    waitForElement('.device-details-title').then(i => {
      $el('.device-details-title').after($el('.device-step-header.step-number-3'))
    })
    if ($el('.device-step-header.step-number-3 .step').textContent !== 'Step 3: Device') {
      $el('.device-step-header.step-number-3 .step').textContent = 'Step 3: Device'
    }
  }
  addNewBlocksToDetails() {
    waitForElement('.variations').then(i => {
      if (!$el('.variations .new_title_box')) {
        $el('.variations').insertAdjacentHTML('afterbegin', newTitleBox('Details'))
      }
    })
    waitForElement('.variations-content').then(i => {
      if (!$el('.radio_section')) {
        $el('.variations-content').insertAdjacentHTML('beforeend', `<div class="radio_section"></div>`)
      }
      if (!$el('.clear_form_block')) {
        $el('.variations-content').insertAdjacentHTML('beforeend', clearFormBlock)
      }
    })
  }

  addNewBlocksToOfferSummary() {
    waitForElement('.single_variation_wrap').then(i => {
      if (!$el('.single_variation_wrap .new_title_box')) {
        $el('.single_variation_wrap').insertAdjacentHTML('afterbegin', newTitleBox('Offer Summary'))
      }

      if (!$el('#benefitsBlock')) {
        $el('.order_benefits')?.insertAdjacentHTML('afterend', benefitsBlock)
      }
      if (!$el('#reviewsBlock')) {
        $el('.single_variation_wrap')?.insertAdjacentHTML('beforeend', reviewsBlock)
      }
      if (!$el('.device_price_wrapper')) {
        $el('.single_variation_wrap--inner').insertAdjacentHTML('beforeend', `<div class="device_price_wrapper"></div>`)
      }
      waitForElement('.device_price_wrapper').then(i => {
        // $el('.device_price_wrapper').insertAdjacentElement('afterbegin', $el('.woocommerce-variation-price'))
        $el('.device_price_wrapper').insertAdjacentElement('afterbegin', $el('.device-placeholder-price'))
        $$el('.ggv2-quantity').forEach(el => {
          $el('.device_price_wrapper').insertAdjacentElement('beforeend', el)
        })
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
    //   pa_condition
    waitForElement('#pa_condition').then(i => {
      this.renderInputs('#pa_condition')
      waitForElement('.radio_block.pa_condition').then(i => {
        if (!$el('#conditionBlock')) {
          $el('.radio_block.pa_condition').insertAdjacentHTML('afterend', conditionBlock)
        }
      })
    })
  }

  renderInputs(id: string) {
    waitForElement('.radio_section').then(i => {
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
        })
      })
    })
  }

  onClickElems() {
    //   clear form
    waitForElement('.clear_form_block').then(i => {
      $el('.clear_form_block').addEventListener('click', () => {
        $el('.reset_variations')?.click()
        waitForElement('.radio_option_wrapp').then(i => {
          $$el('.radio_option_wrapp input.custom_radio').forEach(el => {
            el.checked = false
          })
          this.changeClassListConditionBlock('', true)
        })
      })
    })
    //   label
    waitForElement('.radio_option_wrapp').then(i => {
      $$el('.radio_option_wrapp input.custom_radio + label').forEach(el => {
        let parentClass = el.closest('.radio_block').className
        el.addEventListener('click', (e: any) => {
          let value = e.currentTarget.getAttribute('for')
          $$el('.flex-wrapper select').forEach(select => {
            if (parentClass.includes(select.getAttribute('id'))) {
              select.value = value
              let event = new Event('change', { bubbles: true })
              select.dispatchEvent(event)
            }
          })
          if (el.closest('.pa_condition')) {
            this.changeClassListConditionBlock(value)
          }
        })
      })
    })
  }

  changeClassListConditionBlock(atr: string, reset: boolean = false) {
    waitForElement('#conditionBlock').then(i => {
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
          waitForElement('.txt_choose').then(i => {
            if (!$el('.txt_choose').classList.contains('is_hidden')) {
              $el('.txt_choose').classList.add('is_hidden')
            }
          })
        }
      })
    })
  }

  renderHowItWorksSection(): void {
    if (!$el('#howItWorksSection')) {
      $el('.product.type-product')?.insertAdjacentHTML('afterend', howItWorksSection)
    }
  }
  renderFrequentlyAskedQuestionSection(): void {
    waitForElement('#howItWorksSection').then(i => {
      if (!$el('#frequentlyAskedQuestionSection')) {
        $el('#howItWorksSection')?.insertAdjacentHTML('afterend', frequentlyAskedQuestionSection)
      }
    })
    this.initAccordionQuestions()
  }

  initAccordionQuestions() {
    let lookForJquery = setInterval(() => {
      if (typeof jQuery === 'function' && $('#frequentlyAskedQuestionSection')) {
        clearInterval(lookForJquery)
        $('.questions_accordion_block').eq(1).addClass('active')
        $('.questions_accordion_block .questions_accordion_link').eq(1).addClass('active')
        $('.questions_accordion_block .questions_accordion_lists').eq(1).css('display', 'block')

        $('.questions_accordion_link').on('click', function () {
          console.log(`object`)
          $(this).toggleClass('active')
          $(this).closest('li').toggleClass('active')
          $(this).next('.questions_accordion_lists').slideToggle()

          $('.questions_accordion_link').not(this).next('.questions_accordion_lists').slideUp()
          $('.questions_accordion_link').not(this).removeClass('active').closest('li').removeClass('active')
        })
      }
    }, 100)
  }
}
new pdpEnhancements(device)
