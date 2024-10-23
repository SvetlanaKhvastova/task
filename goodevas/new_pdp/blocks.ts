import { svg, git, translations } from './data'

interface Benefit {
  icon: string
  title: string
  txt: string
}

export const mainBenefitsBlock = (data: Record<string, Benefit>): string => {
  return /* HTML */ `
    <div class="main_benefits_block">
      <ul class="main_benefits_list">
        ${Object.values(data)
          .map(
            benefit => /* HTML */ `
              <li class="main_benefits_item">
                <div class="main_benefits_item_icon_wrapper">${benefit.icon}</div>
                <div class="main_benefits_item_info">
                  <h2 class="main_benefits_item_title">${benefit.title}</h2>
                  <p class="main_benefits_item_txt">${benefit.txt}</p>
                </div>
              </li>
            `
          )
          .join('')}
      </ul>
    </div>
  `
}

export const comparisonTableBlock = (data): string => {
  return /* HTML */ `
    <div class="comparison_table_block">
      <h2 class="comparison_table_main_title">${data.mainTitle}</h2>

      <div class="custom_table">
        <div class="benefits_row">
          <div class="header_table">
            <div class="table_cell"></div>
          </div>
          <div class="body_table">
            ${data.benefits
              .map(item => /* HTML */ ` <div class="benefits_cell table_cell"><p>${item.benefitName}</p></div> `)
              .join('')}
          </div>
        </div>

        <div class="goodevas_row is_active">
          <div class="header_table">
            <div class="table_cell">
              <h3>${data.goodevasTitle}</h3>
              <img src="${data.goodevasImg}" alt="Goodevas product" />
            </div>
          </div>
          <div class="body_table">
            ${data.benefits
              .map(
                item => /* HTML */ `
                  <div class="goodevas_cell table_cell">
                    <span class="check_icon_wrapper">${svg.checkIcon}</span>
                    <p>${item.goodevasDescr}</p>
                  </div>
                `
              )
              .join('')}
          </div>
        </div>

        <div class="competitors_row">
          <div class="header_table">
            <div class="table_cell">
              <h3>${data.competitorsTitle}</h3>
              <img src="${data.competitorsImg}" alt="Competitors product" />
            </div>
          </div>
          <div class="body_table">
            ${data.benefits
              .map(
                item => /* HTML */ `
                  <div class="competitors_cell table_cell">
                    <span class="cancel_icon_wrapper">${svg.cancelIcon}</span>
                    <p>${item.competitorsDescr}</p>
                  </div>
                `
              )
              .join('')}
          </div>
        </div>
      </div>
    </div>
  `
}
