import { svg, git } from './data'

export const newBtnSkipVerB = (price: string): string => {
  return /* HTML */ ` <div class="new_btn_skip ver_b">Skip and start reading for just <span> ${price}</span></div> `
}

export const newBtnSkipVerC = (): string => {
  return /* HTML */ ` <div class="new_btn_skip ver_c">Opt for the minimum cost</div> `
}
