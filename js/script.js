let scriptCustom = document.createElement("script")
scriptCustom.src = "https://conversionratestore.github.io/projects/buzzpatch/magicpatch_comparison_table.js"
scriptCustom.async = false
document.head.appendChild(scriptCustom)

//
let scriptCustom = document.createElement("script")
scriptCustom.src = "https://conversionratestore.github.io/projects/knineti/new_page.js"
scriptCustom.async = false
document.head.appendChild(scriptCustom)

//
document.head.insertAdjacentHTML("beforeend", `<style class="exp">body {opacity: 0;}</style>`)

let scriptCustom = document.createElement("script")
scriptCustom.src = "https://conversionratestore.github.io/projects/knineti/new_page.js"
scriptCustom.async = false
document.head.appendChild(scriptCustom)

setTimeout(function () {
  document.querySelector(".exp")?.remove()
}, 5000)
