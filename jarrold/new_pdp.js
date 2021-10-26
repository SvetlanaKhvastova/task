let newPdpStyle = /*html*/ `
<style>

    #product .specifics.buttons{
        margin-bottom: 0 !important;
    }

    #product .specifics.buttons button#page_MainContent_product_detail_btnAddBag{
       width: 305px !important; 
    }

    #product .specifics.buttons button.btn.wish{
        min-width: 35px;
        width: 35px !important;
        border: none !important;
    }

    #product .specifics.buttons button.btn.wish span:after{
        margin-left: 0 !important;
    }

    #product .r h1{
        font-family: 'Lato', sans-serif !important;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 10px !important;
        color: #000000;
    }
    #product .r #variants>.price{
        margin-bottom: 20px !important;
    }

    .upc{
        margin: 0 !important;
    }

    #product .variants{
        margin: 0 !important;
    }

    .cta{
        color: #457E80 !important;
        text-transform: unset !important;
    }

    .cta a{
        font-family: 'Lato', sans-serif !important;
        font-weight: 600 !important;
        font-size: 18px !important;
        line-height: 22px !important;
        text-decoration-line: underline !important;
    }

    .cta a:hover, .cta a:focus{
        color: #457E80 !important;
    }

    #product .r #variants>.price span{
        font-family: 'Lato', sans-serif !important;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        color: #000000;
    }

    #product p.summ{
        margin: 0 !important;
    }

    .title_brand{
        font-family: "Crimson Text",serif;
        font-weight: 700;
        font-size: 28px;
        line-height: 53px;
        margin-bottom:0 !important;
        color: #000000;
    }

    .var_btn_tag{
        margin-bottom: 20px;
    }

    .var_btn_tag span{
        font-family: 'Lato', sans-serif !important;
        background: #807559;

        font-weight: 600;
        font-size: 14px;
        line-height: 17px;

        color: #FFFFFF;
        padding: 5px 15px;
    }

    .var_btn_tag span:not(:last-child){
        margin-right: 10px;
    }

    .delivery_box{
        text-align:center;
        border-top: 1px solid #DEDEDE;
        border-bottom: 1px solid #DEDEDE;
        padding: 15px 0;
        margin-bottom: 20px;
    }

    .delivery_box > p{
        font-family: 'Lato', sans-serif !important;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        color: #000000;
        margin-bottom: 7px !important;
    }

    .delivery_box > div{
        display: inline-flex;
        align-items: stretch;
    }

     .delivery_box > div span{
        font-family: 'Lato', sans-serif !important;
         font-weight: 500;
        font-size: 14px;
        line-height: 17px;

        color: #303030;
     }
     
     .delivery_box > div > div{
        position: relative;
     }

    .text_popup{
        position: absolute;
        top: -100px;
        left: 13px;
        width: 187px;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #000000;

        background: #FFFFFF;
        border: 1px solid #457E80;
        box-shadow: 0px 0px 4px rgba(152, 152, 152, 0.12);
        padding: 13px 30px 13px 15px;
        text-align: left;
    }
     
     .delivery_box > div > div >  svg{
        margin-left: 13px;
        cursor: pointer;
     }

    
     .free_return{
        font-family: 'Lato', sans-serif !important;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;

        color: #457E80;
        margin: 7px 0 20px 0;
     }

     #product .specifics>.controls.qty{
        margin-left: 0 !important;
        display: flex !important;
        flex-direction: column !important;
     }

     #product .specifics>.controls.qty{
         float: unset !important;
     }

     #product .specifics strong.stock{
        font-family: 'Lato', sans-serif !important;
        font-weight: 600 !important;
        font-size: 14px !important;
        line-height: 17px !important;
        color: #457E80 !important;
        margin-left: 0 !important;
        margin-top: 7px !important;
     }

     #product .specifics .controls.qty>div{
         margin: 0 !important;
     }

     #product .specifics .controls.qty>div .inc, #product .specifics .controls.qty>div .dec{
        width: 35px !important;
        height: 35px !important;
     }

     .select_size_box{
        margin-right: 33px;
        display: flex;
        flex-direction: column;
        align-items: center;
     }

      .select_size_box select{
        border: 1px solid #DEDEDE;
        min-width: 233px;
        max-width: 237px;
        padding: 0 15px !important;
        cursor: pointer;
        height: 35px !important;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #303030;
      }

      .select_size_box option span:first-child{
          border-right: 1px solid #C4C4C4;
      }

     .select_size_box p{
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        text-decoration-line: underline;
        color: #457E80;
        margin-top: 7px;
        cursor: pointer;
     }

    


</style>
`

let titleBrand = /*html*/ `
    <p class="title_brand">Indi & Cold</p>
  `

let varBtnTag = /*html*/ `
    <div class="var_btn_tag">
        <span>Cotton</span>
        <span>Casual</span>
        <span>Spring</span>
    </div>
`

let deliveryBox = /*html*/ `
<div class="delivery_box">
    <p>Approximate Delivery Date</p>
    <div>
        <span>13th October</span>
        <div>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="9" r="8.5" stroke="#457E80"/>
                <path d="M9.542 11.308H8.226V10.636C8.226 10.3933 8.24933 10.174 8.296 9.978C8.34267 9.782 8.408 9.60467 8.492 9.446C8.58533 9.28733 8.69267 9.138 8.814 8.998C8.94467 8.84867 9.08933 8.69933 9.248 8.55L9.766 8.06C9.97133 7.88267 10.1393 7.69133 10.27 7.486C10.41 7.27133 10.48 7.00067 10.48 6.674C10.48 6.226 10.3353 5.87133 10.046 5.61C9.766 5.33933 9.402 5.204 8.954 5.204C8.48733 5.204 8.114 5.35333 7.834 5.652C7.554 5.95067 7.39067 6.31467 7.344 6.744L6 6.59C6.056 6.18867 6.17267 5.82933 6.35 5.512C6.52733 5.18533 6.74667 4.91 7.008 4.686C7.27867 4.462 7.58667 4.294 7.932 4.182C8.27733 4.06067 8.646 4 9.038 4C9.43 4 9.794 4.056 10.13 4.168C10.4753 4.28 10.7787 4.448 11.04 4.672C11.3013 4.88667 11.5067 5.15733 11.656 5.484C11.8053 5.80133 11.88 6.17 11.88 6.59C11.88 6.88867 11.8473 7.15 11.782 7.374C11.7167 7.598 11.6233 7.80333 11.502 7.99C11.39 8.16733 11.25 8.33533 11.082 8.494C10.914 8.65267 10.732 8.816 10.536 8.984C10.3493 9.14267 10.1907 9.28733 10.06 9.418C9.92933 9.53933 9.82667 9.66533 9.752 9.796C9.67733 9.92667 9.62133 10.0713 9.584 10.23C9.556 10.3887 9.542 10.5847 9.542 10.818V11.308ZM9.892 13.282C9.892 13.5247 9.80333 13.7393 9.626 13.926C9.44867 14.1127 9.22467 14.206 8.954 14.206C8.69267 14.206 8.46867 14.1173 8.282 13.94C8.10467 13.7533 8.016 13.5387 8.016 13.296C8.016 13.044 8.10467 12.8293 8.282 12.652C8.45933 12.4653 8.68333 12.372 8.954 12.372C9.22467 12.372 9.44867 12.4607 9.626 12.638C9.80333 12.8153 9.892 13.03 9.892 13.282Z" fill="#457E80"/>
            </svg>
        </div>
    </div>
</div>
`

let selectSize = /*html*/ `
<div class="select_size_box">
    <select name="selectSize">
        <option value=""><span>Size</span> <span>10</span></option>
        <option value=""><span>Size</span> <span>14</span></option>
        <option value=""><span>Size</span> <span>16</span></option>
    </select>
    <p>Size guide</p>
</div>
`

document.head.insertAdjacentHTML("afterbegin", newPdpStyle)

document.querySelector(".summ").innerHTML = ""
document.querySelector(".cta a").textContent = "View product details"
document.querySelector("#page_MainContent_product_detail_btnWishlist span").textContent = ""
document.querySelector(".upc").style.display = "none"
document.querySelector(".share").style.display = "none"
document.querySelector(".benefits").style.display = "none"
document.querySelector(".valueprop").style.display = "none"

//
document.querySelector("#product h1").insertAdjacentHTML("beforebegin", titleBrand)
document.querySelector("#product .r #variants>.price").insertAdjacentHTML("beforebegin", varBtnTag)
document.querySelector("#product .specifics.buttons").insertAdjacentHTML("afterend", deliveryBox)
document.querySelector("#product .r #variants>.price span").textContent = document.querySelector("#product .r #variants>.price span").textContent.slice(0, 4)
document.querySelector(".delivery_box span").textContent = document.querySelector(".valueprop .counter strong:first-child").textContent.split(",")[1].slice(0, -1)

document.querySelector(".delivery_box").after(document.querySelector(".cta"))
document.querySelector("#product .specifics.buttons").insertAdjacentHTML("afterend", `<p class="free_return">Free return within 14 Days</p>`)

document.querySelectorAll(".specifics label").forEach((el) => {
  if (el.innerText.toLowerCase().includes(`colour`)) {
    document.querySelector(".delivery_box").after(el.closest(".specifics"))
    el.textContent = "Other variants"
    el.style.marginBottom = "12px"
    el.closest(".specifics").style.marginBottom = "20px"
  }

  if (el.innerText.toLowerCase().includes(`quantity:`)) {
    el.textContent = ""
    el.style.marginBottom = "0"
    el.closest(".specifics").style.display = "flex"
    el.closest(".specifics").style.alignItems = "center"
    el.closest(".specifics").insertAdjacentHTML("afterbegin", selectSize)
    el.closest(".specifics").querySelector(".controls.qty").insertAdjacentElement("beforeend", document.querySelector("#product .specifics strong.stock"))
  }

  if (el.innerText.toLowerCase().includes(`size`)) {
    el.closest(".specifics").style.display = "none"
  }
})

let textPopup = document.querySelector(".valueprop .counter").textContent.split("?")[1].slice(1)

document.querySelector(".delivery_box div div svg").addEventListener("click", () => {
  document.querySelector(".delivery_box div div").insertAdjacentHTML("beforeend", `<span class="text_popup">${textPopup}</span>`)
})
