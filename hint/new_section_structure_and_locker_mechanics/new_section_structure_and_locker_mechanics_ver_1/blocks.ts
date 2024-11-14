import { svg, git } from './data'

export const palmReadingIsReady = /* HTML */ `
  <div class="palm_reading_is_ready">
    <h2 class="palm_reading_is_ready_title">Your Palm Reading <span>is Ready</span></h2>
    <div class="palm_reading_is_ready_img_wrapper">
      <img src="${git}palm_reading_is_ready.webp" alt="Palm" class="img_initial" />
      <img src="${git}children.webp" alt="Сhildren" class="img_first_absolute" data-tocheckout />
      <img src="${git}big_love_at.webp" alt="Big love at" class="img_second_absolute" data-tocheckout />
      <img src="${git}money_success_at.webp" alt="Money success at" class="img_third_absolute" data-tocheckout />
      <img src="${git}big_change_at.webp" alt="Big change at" class="img_fourth_absolute" data-tocheckout />

      <!-- <img src="${git}children_blue.webp" alt="Сhildren" class="img_first_absolute" data-tocheckout />
      <img src="${git}big_love_at_blue.webp" alt="Big love at" class="img_second_absolute" data-tocheckout />
      <img src="${git}money_success_at_blue.webp" alt="Money success at" class="img_third_absolute" data-tocheckout />
      <img src="${git}big_change_at_blue.webp" alt="Big change at" class="img_fourth_absolute" data-tocheckout /> -->
    </div>
  </div>
`

export const lockerMechanics = (txt: string): string => {
  return /* HTML */ `
    <div class="locker_mechanics" data-tocheckout>
      <h2 class="locker_mechanics_title">Content</h2>
      <div>
        <ol>
          <li>${txt}</li>
        </ol>
        <div class="is_locker">
          <ol>
            <li>We analyze your palm lines to get hin tsab out your future</li>
            <li>We analyze your palm lines to get hin tsab out your future</li>
            <li>We analyze your palm lines to get hin tsab out your future</li>
            <li>We analyze your palm lines to get hin tsab out your future</li>
          </ol>
          <div class="access_required_absolute">
            ${svg.lockerIcon}
            <span>To read the full report, you need to get access</span>
          </div>
        </div>
      </div>
    </div>
  `
}

export const moneyBackGuaranteeBlock = /* HTML */ `
  <div class="money_back_guarantee">
    <div class="money_back_guarantee_container">
      <div class="money_back_guarantee_header">
        ${svg.moneyBackGuaranteeIcon}
        <h3 class="money_back_guarantee_title">100% money-back guarantee</h3>
      </div>
      <div class="money_back_guarantee_description">
        We are convinced that this report will provide you with a deeper understanding of your partner and suggest ways
        to enhance your relationship. With a track record of stellar customer reviews, we are fully prepared to refund
        your money if you find that this report does not deliver any value.
      </div>
    </div>
  </div>
`
