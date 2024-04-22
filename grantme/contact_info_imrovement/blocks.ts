import { git, svg, reviewsObj } from './data'

const guaranteeBlock = /* HTML */ `
  <div class="guarantee_block">
    <div class="guarantee_block_container">
      ${svg.guaranteeIcon}
      <p>
        Qualified GrantMe students are guaranteed scholarship winnings and admission to their top-choice universities.
      </p>
    </div>
  </div>
`
const loaderBlock = (texts: string[]): string => {
  return /* HTML */ `
    <section class="new_loader_block">
      ${guaranteeBlock}
      <div class="loader_timing_box">
        ${svg.loaderIcon} ${svg.loaderRotating}
        <div class="percentage"></div>
      </div>
      <div class="loading_txt_wrapper">
        ${texts.map(text => `<p>${text}<span>.</span><span>.</span><span>.</span></p>`).join('')}
      </div>
    </section>
  `
}

const lastStepsWrapper = /* HTML */ `
  <div class="last_steps_wrapper">
    <div class="email_name_box">
      <h2 class="last_steps_main_title">Your results are ready!</h2>
      <p class="last_steps_main_txt">
        ${window.innerWidth < 768
          ? 'Unlock your chances of admission and scholarship funding by providing the information below.'
          : 'Unlock your chances of admission and scholarship funding by signing in below.'}
      </p>
      <button id="continueValidationBtn">Continue</button>
      <div class="safe_and_secure_box">
        ${svg.secureIcon}
        <span>Your data is safe and secure. No ads or spam</span>
      </div>
      <p class="or_txt"><span>OR</span></p>
      <div id="btnSignInBlock">
        <a id="googleSignInBtn" href="#"
          >${svg.googleIcon}<span>${window.innerWidth < 768 ? 'Google' : 'Sign in with Google'}</span></a
        >
      </div>
      <p class="new_footnote">
        By clicking, “Continue”, “Sign in with Google” I Agree to GrantMe’s
        <a
          href="https://grantme.ca/privacy-policy/?__hstc=166450401.8cd64e907f4dabce6c645e168a8c017d.1713536092845.1713536092845.1713536092845.1&amp;__hssc=166450401.9.1713536092846&amp;__hsfp=1735953969"
          style="color:#3e78ba"
          target="_blank"
          >Privacy Policy</a
        >,
        <a
          href="https://grantme.ca/terms-of-use/?__hstc=166450401.8cd64e907f4dabce6c645e168a8c017d.1713536092845.1713536092845.1713536092845.1&amp;__hssc=166450401.9.1713536092846&amp;__hsfp=1735953969"
          style="color:#3e78ba"
          target="_blank"
          >Terms of Use</a
        >
        and consent to receiving promotional messages.
      </p>
    </div>
    <div class="phone_box is_hidden">
      <h2 class="last_steps_main_title">Almost done!</h2>
      <p class="last_steps_main_txt">
        Please provide your mobile phone number below to receive personalised content and offers based on your
        assessment results, totally free.
      </p>
      <button id="seeMyResultsBtn" class="">See My Results</button>
    </div>
  </div>
`

const reviewsBlock = /* HTML */ `
  <div class="new_reviews_block">
    <h2 class="new_reviews_main_title">Trusted by over 20,000 students</h2>
    <p class="new_reviews_main_txt">who've secured funding and applied to the university of their dreams.</p>
    <div class="new_reviews_list">
      ${reviewsObj
        .map((r, i) => {
          return /* HTML */ `
            <div class="new_reviews_item">
              <div class="stars_wrapper">${r.svgIcon}</div>
              <h3 class="new_reviews_item_title">${r.title}</h3>
              <h4 class="new_reviews_item_subtitle">${r.subTitle}</h4>
              <p class="new_reviews_item_txt">${r.txt}</p>
              <div class="received_box">
                <span class="received_box_txt">${r.receivedTxt}</span>
                <span class="received_box_price">${r.price}</span>
              </div>
            </div>
          `
        })
        .join('')}
    </div>
  </div>
`
export { loaderBlock, lastStepsWrapper, reviewsBlock }
