let startNewFunk = setInterval(() => {
  if (document.querySelector(".bp-comparison")) {
    clearInterval(startNewFunk)

    let newStyle = /*html */ `
    <style>
        .bp-comparison .js-mobile.bp-mob-table-container{
            display: none;
        }
        .new_table h3{
            font-family: "Roboto", sans-serif !important;
            font-weight: 400;
            font-size: 18px;
            line-height: 18px;
            color: #0C0B0B;
            margin: 0 0 16px;
            text-align: center;
            text-transform: initial;
        }
        .new_row {
            margin-bottom: 16px;
        }
        .cell_wrap{
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            list-style: none;
            margin: 0;
            padding: 0 0 16px;
            border-bottom: 1px solid #E2E2E2;
        }
        .cell_wrap li{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 45%;
        }
        .cell_wrap li:nth-child(2){
            border-left: 1px solid #E2E2E2;
            border-right: 1px solid #E2E2E2;
            padding: 0 11.5px;
            margin: 0 11.5px;
        }
        .cell_wrap img{
            display: none;
        }
        .cell_wrap span{
            font-family: "Roboto", sans-serif !important;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
            color: #515151;
            text-align: center;
        }
        .cell_wrap span.accent_var{
            color: #2A7C72;
            font-weight: 700;
        }
        .new_row.sticky_header_tabl{
            background: #BDD7B7;
            border-radius: 10px 10px 0px 0px;
            margin-left: -15px;
            margin-right: -15px;
        }
        .new_row.sticky_header_tabl h3{
            display: none;
        }
        .new_row.sticky_header_tabl .cell_wrap{
            padding: 15px;
        }
        .new_row.sticky_header_tabl .cell_wrap span{
            font-family: Bebas,Roboto,sans-serif !important;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            color: #0C0B0B !important;
        }
        .try_new_btn{
            padding: 20px 10px;
            width: 100%;
            max-width: 331px;
            font-size: 18px;
            letter-spacing: .015em;
            line-height: 24px;
            font-weight: 700;
            border-radius: 500px;
            filter: drop-shadow(0px 4px 4px rgba(0,0,0,.4));
            color: #fff;
            font-family: Din Condensed,Roboto,sans-serif;
            text-transform: uppercase;
            background: #2A7B72;
            box-shadow: 0 4px 15px #48434582;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 50px auto;
        }
        .new_row.sticky_header_tabl .cell_wrap img{
            display: block;
            width: 40px;
            height: 40px;
            margin-bottom: 4px;
        }
        .new_row.sticky_header_tabl.is_fixed{
            margin: 0 -10px -10px;
            width: 106%;
            border: unset;
            border-radius: unset;
        }
        header .navbar.fixed-top{
            box-shadow: 0px 1px 10px rgba(72, 67, 69, 0.36);
        }

    </style>
    `

    let newTable = /*html */ `
        <div class="new_table">
            <a class="try_new_btn" href="#getNow">TRY ZENPATCH STICKERS</a>
        </div>
        `

    let arrText = {
      "Side Effects": [
        ``,
        ``,
        ``,
        `No side effects`,
        `Often too strong/ overstimulating. Overdose may cause nausea or headache in children.`,
        `Loose bowel movements, headache, sleepiness`,
        ``,
      ],
      "Easiness of usage": [
        ``,
        ``,
        ``,
        `Apply sticker close to the head on your clothes`,
        `Requires diffusers. Potential skin and inhalation irritant, or stains bedding & clothes.`,
        `Tables or Drops(Requires Supervision)(Potential choking hazard)`,
        ``,
      ],
      "Long-lasting effects": [
        ``,
        ``,
        ``,
        `Up to 8 hours`,
        `Depends on method of application and equipment used`,
        `May have no effect, or last too long - leaving your child tired & groggy the next day.`,
        ``,
      ],
      "Easy for all ages to use": [``, ``, ``, `0+`, `Must be kept away from children`, `Must be kept away from children`, ``],
      Ingredients: [``, ``, ``, `Natural essential oils`, `Natural essential oils`, `Synthetic 'lab-grown' ingredients`, ``],
      header: [
        `https://conversionratestore.github.io/projects/zenpatch/img/zenpatch_img.png`,
        `https://conversionratestore.github.io/projects/zenpatch/img/essential.png`,
        `https://conversionratestore.github.io/projects/zenpatch/img/herbal.png`,
        `ZENPATCH`,
        `Essential Oils`,
        `SUPPLEMENTS`,
        `sticky_header_tabl`,
      ],
    }

    function setText(title, img1, img2, img3, txt1, txt2, txt3, selectClass) {
      return `
        <div class="new_row ${selectClass}">
            <h3>${title}</h3>
            <ul class="cell_wrap">
                <li>
                    <img src="${img1}" alt="${title}">
                    <span class="accent_var">${txt1}</span>
                </li>
                <li>
                    <img src="${img2}" alt="${title}">
                    <span>${txt2}</span>
                </li>
                <li>
                    <img src="${img3}" alt="${title}">
                    <span>${txt3}</span>
                </li>
            </ul>
        </div>
          `
    }

    document.head.insertAdjacentHTML("beforeend", `<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">`)
    document.head.insertAdjacentHTML("beforeend", newStyle)
    document.querySelector(".bp-comparison > .container > .js-mobile.bp-mob-table-container").insertAdjacentHTML("beforebegin", newTable)

    for (let key in arrText) {
      document
        .querySelector(".new_table")
        ?.insertAdjacentHTML("afterbegin", setText(key, arrText[key][0], arrText[key][1], arrText[key][2], arrText[key][3], arrText[key][4], arrText[key][5], arrText[key][6]))
    }

    document.querySelector(".try_new_btn").addEventListener("click", (e) => {
      e.preventDefault()
      document.querySelector(".bp-comparison .js-mobile.bp-mob-table-container .btn.js-btn.btn-primary.get-it").click()
      //   document.querySelector("#getNow")?.scrollIntoView({ block: "start", behavior: "smooth" })
    })

    // sticky btn
    const element = document.querySelector(".new_row.sticky_header_tabl")
    const elemClose = document.querySelector(".new_table .new_row:last-of-type")

    function visible(target) {
      console.log(target)
      if (target.getBoundingClientRect().top < 77) {
        if (!document.querySelector("header .navbar .is_fixed")) {
          document.querySelector("header .navbar").insertAdjacentHTML(
            "beforeend",
            `<div class="new_row sticky_header_tabl is_fixed">
            <h3>header</h3>
            <ul class="cell_wrap">
                <li>
                    <img src="https://conversionratestore.github.io/projects/zenpatch/img/zenpatch_img.png" alt="ZENPATCH">
                    <span class="accent_var">ZENPATCH</span>
                </li>
                <li>
                    <img src="https://conversionratestore.github.io/projects/zenpatch/img/essential.png" alt="Essential Oils">
                    <span>Essential Oils</span>
                </li>
                <li>
                    <img src="https://conversionratestore.github.io/projects/zenpatch/img/herbal.png" alt="SUPPLEMENTS">
                    <span>SUPPLEMENTS</span>
                </li>
            </ul>
        </div>`
          )
        }
      }
      if (target.getBoundingClientRect().top > 77 || elemClose.getBoundingClientRect().bottom < 170) {
        document.querySelector("header .navbar .is_fixed")?.remove()
        console.log(`not`, elemClose.getBoundingClientRect().bottom)
      }
    }

    window.addEventListener("scroll", function () {
      visible(element)
    })

    visible(element)
  }
}, 100)
