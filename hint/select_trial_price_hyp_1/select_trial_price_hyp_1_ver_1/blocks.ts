import { svg, git } from './data'

export const emailBlock = (emailTxt: string, emailTxtFirtsLetter: string) => {
  return /* HTML */ `
    <div class="email_block">
      <span class="img_box">${emailTxtFirtsLetter}</span>
      <span class="email_txt">${emailTxt}</span>
    </div>
  `
}
export const titleBlock = /* HTML */ `
  <div class="title_block">
    <h2>Get Your Personal Palm Reading Report</h2>
    <p>
      Choose Your Trial Price and <br />
      <b>Get Full Access to Unlimited Chats</b> <br />
      With Your Personal Palm Reader
    </p>
  </div>
`

export const noteBlock = (priceTxt: string) => {
  return /* HTML */ `
    <div class="note_block">
      <p>
        <span class="accent_color">Note:</span> While it costs us <b class="price_txt">${priceTxt}</b> to compensate
        Hint employees & palmreaders for the trial, we want to make this valuable experience accessible to you.
      </p>
    </div>
  `
}

export const peopleJoinedBlock = /* HTML */ `
  <div class="people_joined_block">
    <span class="svg_block">${svg.peopleJoinedIcon}</span>
    <span class="txt_block"><b>776</b> people <b>joined</b> today</span>
  </div>
`

export const guaranteeBlock = /* HTML */ `
  <div class="guarantee_block">
    <span class="svg_block">${svg.guaranteeIcon}</span>
    <span class="txt_block">100% Money-back Guarantee</span>
  </div>
`

export const proceedToFindOutBlock = /* HTML */ `
  <div class="proceed_to_find_out_block">
    <span class="svg_block">${svg.proceedToFindOutIcon}</span>
    <span class="txt_block"
      >You won't be charged right now. <br />
      Proceed to find out more.</span
    >
  </div>
`
