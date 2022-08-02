let startFunk = setInterval(() => {
  if (document.querySelector("#shopify-section-product-template")) {
    clearInterval(startFunk)
    const spanStockUrl = "https://conversionratestore.github.io/projects/artisanborn/img/in_stock.svg"
    console.log(`first`)

    let styleVar = /*html */ `
            <style>
                span.in-stock, span.out-stock{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-top: -42px;
                    line-height: 27px;
                    text-transform: capitalize;
                }
                span.in-stock img{
                    margin-right: 4px;
                }
                span.in-stock svg{
                    display: none;
                }
    
                /*product_section form */
                .product_section form .select {
                    background: #FAFAFA;
                    border-radius: 10px;
                    padding: 30px;
                    margin: 20px 0 13px;
                }

                .select .selector-wrapper{
                    display: flex;
                    align-items: flex-end;
                    justify-content: flex-start;
                    gap: 4px;
                }
                .select .selector-wrapper{
                    margin-top: 20px;
                }
                .select label{
                    display: none;
                }
                .select select{
                    margin: 0;
                }
                .new_label{
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    align-content: flex-start;
                    width: 26%;
                }
                .new_label p{
                    font-weight: 700;
                    font-size: 13px;
                    line-height: 27px;
                    color: rgba(0, 0, 0, 0.8);
                    margin: 0;
                }
                .new_label p span{
                    font-weight: 400;
                }

                /*text_custom_title */
                .text_custom_title{
                   
                }
                .text_custom_title p{
                    font-weight: 600;
                    font-size: 20px;
                    line-height: 136%;
                    margin: 0;
                    padding: 0;
                }

                /*text_custom_link */
                .text_custom_link{
                    margin-top: 13px;
                }
                .text_custom_link p{
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 18px;
                    color: #000000;
                    margin: 0;
                }
                .text_custom_link p span{
                   font-weight: 700;
                   color: #56B2E3;
                   cursor: pointer;
                }
            </style>        
            `

    let inStockSvg = /*html */ `
            <img src="${spanStockUrl}" alt="check">
        `

    let textCustomTitle = /*html */ `
            <div class="text_custom_title">
                <p>Select size & style preferences for exact quote:</p>
            </div>    
        `

    let textCustomLink = /*html */ `
            <div class="text_custom_link">
                <p>Need more customization? <span>Send us a custom request</span></p>
            </div>    
        `

    document.head.insertAdjacentHTML("beforeend", styleVar)

    document.querySelector("span.in-stock").insertAdjacentHTML("afterbegin", inStockSvg)

    function renderNewLabel(text, img) {
      return `<div class="new_label">
                    <p>${text}</p>  
                    <img src="${img}" alt="${text}">
                </div>`
    }

    //
    // let clonedNode = document.querySelector("#desktest").cloneNode(true)

    // document.querySelector("#desktopppp").appendChild(clonedNode)

    if (document.querySelector(".product_section .product_form form")) {
      if (!document.querySelector(".select")) {
        document.querySelector(".product_section .product_form form").insertAdjacentHTML("afterbegin", `<div class="select"></div></div>`)
      }
    }

    if (document.querySelector('[for="TableHeight"]')) {
      document.querySelector(".select")?.insertAdjacentHTML("beforeend", `<div class="selector-wrapper var_height"><div class="test_text"></div></div>`)
      document.querySelector(".selector-wrapper.var_height .test_text").after(document.querySelector("#TableHeight"))
      document.querySelector(".selector-wrapper.var_height .test_text").after(document.querySelector("[for='TableHeight']"))
    }

    document.querySelectorAll(".select > .selector-wrapper select").forEach((el) => {
      let text

      if (el.previousSibling) {
        text = el.previousSibling.textContent.toUpperCase()
      } else {
        console.log("NOT selector-wrapper", el.closest("div.select").querySelector("label").textContent)
        if (el.closest("div.select").querySelector("label").textContent === "Size") {
          console.log(el.closest("div.select").querySelector("label").textContent)
          el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel("SIZE", "https://conversionratestore.github.io/projects/artisanborn/img/width.png"))
        }

        if (el.closest("div.select").querySelector("label").textContent === "Length") {
          console.log(el.closest("div.select").querySelector("label").textContent)
          el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel("Length", "https://conversionratestore.github.io/projects/artisanborn/img/width.png"))
        }

        if (el.closest("div.select").querySelector("label").textContent.toUpperCase() === "DIMENSIONS") {
          console.log(el.closest("div.select").querySelector("label").textContent)
          el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel("DIMENSIONS", "https://conversionratestore.github.io/projects/artisanborn/img/width.png"))
        }

        if (el.closest("div.select").querySelector("label").textContent.toUpperCase() === "WIDTH") {
          console.log(el.closest("div.select").querySelector("label").textContent)
          el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel("WIDTH", "https://conversionratestore.github.io/projects/artisanborn/img/width.png"))
        }

        if (el.closest("div.select").querySelector("label").textContent.toUpperCase() === "CHOOSE SIZE") {
          console.log(el.closest("div.select").querySelector("label").textContent)
          el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel("SIZE", "https://conversionratestore.github.io/projects/artisanborn/img/width.png"))
        }
      }

      if (text === "WIDTH") {
        el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel("WIDTH", "https://conversionratestore.github.io/projects/artisanborn/img/width.png"))
      } else if (text === "LENGTH" || text === "CHOOSE LENGTH") {
        el.closest("div").insertAdjacentHTML(
          "afterbegin",
          renderNewLabel("LENGTH, <span>inches</span>", "https://conversionratestore.github.io/projects/artisanborn/img/length.png")
        )
      } else if (text === "LEG STYLE") {
        console.log(el.value)
        if (el.value === "Hairpin Legs" || el.value === "Hairpin") {
          el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel("LEG STYLE", "https://conversionratestore.github.io/projects/artisanborn/img/hairpin.png"))
        } else {
          el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel("LEG STYLE", "https://conversionratestore.github.io/projects/artisanborn/img/u_shape.png"))
        }
      } else if (text === "LEG TYPE" || text === "CHOOSE LEG TYPE") {
        console.log(el.value)
        if (el.value === "Hairpin Legs" || el.value === "Hairpin") {
          el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel("LEG TYPE", "https://conversionratestore.github.io/projects/artisanborn/img/hairpin.png"))
        } else {
          el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel("LEG TYPE", "https://conversionratestore.github.io/projects/artisanborn/img/u_shape.png"))
        }
      } else if (text === "HEIGHT" || text === "CHOOSE TABLE HEIGHT") {
        el.closest("div").insertAdjacentHTML(
          "afterbegin",
          renderNewLabel("HEIGHT, <span>inches</span>", "https://conversionratestore.github.io/projects/artisanborn/img/height.png")
        )
      } else if (text === "CHOOSE COLOR" || text === "WOOD" || text === "WOOD COLOR") {
        el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel("WOOD COLOR", "https://conversionratestore.github.io/projects/artisanborn/img/wood_color.png"))
      } else if (text === "DEPTH") {
        el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel("DEPTH", "https://conversionratestore.github.io/projects/artisanborn/img/length.png"))
      } else if (text === "MATERIAL") {
        el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel("MATERIAL", "https://conversionratestore.github.io/projects/artisanborn/img/length.png"))
      } else if (text === "SIZE" || text === "CHOOSE SIZE") {
        el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel("SIZE", "https://conversionratestore.github.io/projects/artisanborn/img/length.png"))
      } else if (text === "QUANTITY") {
        el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel("QUANTITY", "https://conversionratestore.github.io/projects/artisanborn/img/length.png"))
      } else if (text === "DIMENSIONS") {
        el.closest("div").insertAdjacentHTML("afterbegin", renderNewLabel("DIMENSIONS", "https://conversionratestore.github.io/projects/artisanborn/img/length.png"))
      }
    })

    document.querySelector(".product_section form .select ")?.insertAdjacentHTML("afterbegin", textCustomTitle)
    document.querySelector(".product_section form .select ")?.insertAdjacentHTML("beforeend", textCustomLink)
  }
}, 10)
