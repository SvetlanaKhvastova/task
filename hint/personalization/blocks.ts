import { svg, git } from './data'

export const paywallInfoBlock = (title: string, txt: string, img: string, name: string, descr: string) => {
  return /* HTML */ `
    <div class="paywall_info_block">
      <h2>${title}</h2>
      <div class="img_wrapper">
        <p>${txt}</p>
        <img src="${git}${img}" alt="image girl" />
      </div>
      <p><span>${name}</span> ${descr}</p>
    </div>
  `
}

export const wellDoneSection = (
  emailTxtFirtsLetter: string,
  emailTxt: string,
  imgBefore: string,
  imgAfter: string,
  goal: string,
  relationshipStatus: string,
  resonatedElement: string,
  gender: string,
  astrologicalSign: string,
  favoriteColor: string
) => {
  return /* HTML */ `
    <section id="wellDoneSection">
      <div class="section_header">
        <div class="email_block">
          <span class="img_box">${emailTxtFirtsLetter}</span>
          <span class="email_txt">${emailTxt}</span>
        </div>
      </div>
      <div class="section_body">
        <h2>Well done!</h2>
        <p>Your account is successfully created! You're just one step from your goal!</p>
        <div class="img_wrapp">
          <div class="before_hint">
            <img src="${git}${imgBefore}" alt="icon" />
            <span>Before Hint</span>
          </div>
          <div class="after_hint">
            <img src="${git}${imgAfter}" alt="icon" />
            <span>After Hint</span>
          </div>
          ${svg.arrowIcon}
        </div>
        <h3>It’s all about you</h3>
        <div class="all_about_you_block">
          <div class="new_container">
            <div class="left_part">
              <div class="all_about_you_title">
                <p>Palm Analysis</p>
              </div>
              <div class="all_about_you_item">
                <span>Goal</span>
                <p>${goal}</p>
              </div>
              ${relationshipStatus !== 'unknown' && goal.includes('Love & Relationship')
                ? `<div class="all_about_you_item"><span>Relationship Status</span><p>${relationshipStatus}</p></div> `
                : ''}
              <div class="all_about_you_item">
                <span>Element</span>
                <p>${resonatedElement}</p>
              </div>
            </div>
            <div class="right_part">
              <div class="all_about_you_title">
                <p class="accent_blue_txt">Ready ${svg.readyIcon}</p>
              </div>
              <div class="all_about_you_item">
                <span>Gender</span>
                <p>${gender}</p>
              </div>
              <div class="all_about_you_item">
                <span>Astrological Sign</span>
                <p>${astrologicalSign}</p>
              </div>
              <div class="all_about_you_item">
                <span>Favorite Color</span>
                <p>${favoriteColor}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section_footer">
        <div class="get_my_insights_btn">Get My Insights</div>
      </div>
    </section>
  `
}
