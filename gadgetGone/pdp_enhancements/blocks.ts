import { conditionObj, benefitsObj, reviewsObj, howItWorksObj, frequentlyAskedQuestionsObj, svg } from './data'

const newTitleBox = (title: string) => {
  return /* HTML */ ` <h2 class="new_title_box">${title}</h2> `
}
const conditionBlock = /* HTML */ `
  <div id="conditionBlock">
    ${conditionObj
      .map(c => {
        return /* HTML */ `
          <div class="${c.class}">
            <h5>${c.title}</h5>
            <ul>
              ${c.txt}
            </ul>
          </div>
        `
      })
      .join('')}
  </div>
`
const clearFormBlock = /* HTML */ `
  <div class="clear_form_block">
    ${svg.clearForm}
    <span>Clear Form</span>
  </div>
`
const benefitsBlock = /* HTML */ `
  <div id="benefitsBlock">
    <ul>
      ${benefitsObj
        .map(b => {
          return /* HTML */ `
            <li>
              <span>${b.svgIcon}</span>
              <p>${b.txt}</p>
            </li>
          `
        })
        .join('')}
    </ul>
  </div>
`
const reviewsBlock = /* HTML */ `
  <div id="reviewsBlock">
    ${reviewsObj
      .map(r => {
        return /* HTML */ `
          <a target="_blank" href="${r.imgLink}">
            <img src="${r.imgUrl}" alt="logo" />
          </a>
        `
      })
      .join('')}
  </div>
`
const howItWorksSection = /* HTML */ `
  <section id="howItWorksSection">
    <div class="new_container">
      <h2 class="main_title">How it works</h2>
      <ul class="how_it_works_list">
        ${howItWorksObj
          .map(r => {
            return /* HTML */ `
              <li>
                <span>${r.svgIcon}</span>
                <h3>${r.title}</h3>
                <h4>${r.subTitle}</h4>
                <p>${r.txt}</p>
              </li>
            `
          })
          .join('')}
      </ul>
    </div>
  </section>
`
const frequentlyAskedQuestionSection = /* HTML */ `
  <section id="frequentlyAskedQuestionSection">
    <div class="new_container">
      <h2 class="main_title">Frequently Asked Questions</h2>
      <ul class="questions_accordion">
        ${frequentlyAskedQuestionsObj
          .map((q, i) => {
            return /* HTML */ `
              <li class="questions_accordion_block" data-visability="${i + 1}">
                <div class="questions_accordion_link">
                  <p>${q.title}</p>
                  <span class="accordion_icon">${svg.arrow}</span>
                </div>
                <div class="questions_accordion_lists" data-visability-open="${i + 1}">
                  <div>${q.txt}</div>
                </div>
              </li>
            `
          })
          .join('')}
      </ul>
    </div>
  </section>
`
const radioBlock = (title: string, classRadioBlock: string) => {
  return /* HTML */ `
    <div class="radio_block ${classRadioBlock}">
      <h3>
        <span>${title} *</span>
        ${classRadioBlock === 'pa_condition' ? `<span class="txt_choose is_hidden">choose to see criteria</span>` : ''}
      </h3>
      <div class="radio_option_wrapp"></div>
    </div>
  `
}
const inputValue = (nameRadioBtn: string, valueRadioBtn: string, txt: string) => {
  return /* HTML */ `
    <input class="custom_radio" id="${valueRadioBtn}" type="radio" name="${nameRadioBtn}" value="${valueRadioBtn}" />
    <label for="${valueRadioBtn}" tabindex="0" data-name="">
      <div class="radio_info">
        <div class="radio_txt_box">
          <span class="new_custom_radio"></span>
          ${valueRadioBtn === 'unlocked' ? svg.unlocked : ''} ${valueRadioBtn === 'verizon' ? svg.verizon : ''}
          ${valueRadioBtn === 'att' ? svg.aTT : ''}
          ${valueRadioBtn === 't-mobile' ? svg.tMobile : ''}${valueRadioBtn === 'other' ? svg.other : ''}
          <span class="radio_txt">${txt}</span>
        </div>
        <div class="condition_level">
          <span class="green_bgr"></span>
          <span class="green_bgr"></span>
          <span class="green_bgr"></span>
          <span class="green_bgr"></span>
          <span class="green_bgr"></span>
          <span class="green_bgr"></span>
        </div>
      </div>
      ${window.innerWidth < 1100
        ? conditionObj
            .map(c => {
              if (valueRadioBtn === c.name) {
                return /* HTML */ `
                  <ul class="radio_descr_mob is_hidden">
                    ${c.txt}
                  </ul>
                `
              }
            })
            .join('')
        : ''}
    </label>
  `
}
const newStickyBlock = /* HTML */ `
  <div class="new_sticky_block">
    <div class="new_sticky_default_price is_hidden">
      <div>
        <h4></h4>
        <span></span>
      </div>
      <p>*Please enter device details to get a quote.</p>
    </div>
    <span class="new_sticky_default_txt">*Please enter device details to get a quote.</span>
    <button class="disabled">Trade-In</button>
  </div>
`

export {
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
}
