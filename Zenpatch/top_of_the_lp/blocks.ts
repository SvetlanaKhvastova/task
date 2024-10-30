import { svg, git, tooltipObj } from './data'

export const mainBenefitsBlock = (data): string => {
  return /* HTML */ `
    <div class="main_benefits_block">
      <h2 class="main_benefits_title">
        Help Your Pet Stay zen - <br />
        stress relief for every occasion
      </h2>
      <ul class="main_benefits_list">
        ${data
          .map(el => {
            return /* HTML */ `
              <li class="main_benefits_item">
                ${el.svg}
                <p>${el.txt}</p>
              </li>
            `
          })
          .join('')}
      </ul>
    </div>
  `
}

export const newTooltipBlock = (data): string => {
  return /* HTML */ `
    <div class="steps new_tooltip_block">
      <ul>
        <!-- <li>
          <img src="${img}" alt="${title}" />
          <div>
            <p>${title}</p>
            <img
              data-title="${tooltip}"
              src="https://conversionratestore.github.io/projects/buzzpatch/img/inform_btn.svg"
              alt="tooltip icon"
            />
          </div>
        </li> -->
      </ul>
    </div>
  `
}
