let stylePromotion = /*html*/ `
<style>
    .stkbl-floating-button.stkbl-fade-scale-animation.svelte-158qrky{
        bottom: 77px !important;
    }

    .on-mobile-btn-wrapper a.on-mob-btn, .swatchCustom__item__mobile.swatchCustom__item--active.nosale{
        position: relative;
    }

    .promo_price{
        display: flex;
        position: absolute;
        top: -17px;
        right: 13px;
        flex-direction: column;
        align-items: center;
    }

    .promo_price span:first-child{        
        padding: 6px 8px;
        margin-bottom: 2px;
        height: 20px;
        background: #F27520;
        border-radius: 5px;
        font-family: 'Roboto', sans-serif !important;
        font-weight: 500 !important;
        font-size: 9px;
        line-height: 89%;
        align-items: center;
        color: #FFFFFF;
        text-transform: initial;
    }

    .promo_price span:last-child{
        font-weight: 300 !important;
        font-family: 'Roboto', sans-serif !important;
        font-size: 12px;
        line-height: 117%;
        letter-spacing: 0.6px;
        text-decoration-line: line-through;
        color: #FFFFFF;
    }

    .promo_price_card{
        position: absolute;
        top: 15px;
        left: 15px;
        padding: 4px;
        background: rgba(242, 117, 32, 0.3);
        border-radius: 2px;
        font-family: 'Roboto', sans-serif !important;
        font-weight: 400 !important;
        font-size: 11px;
        line-height: 82%;        
        color: #F27520;
    }

    .swatchCustom__item__mobile .compare{
        color: rgba(30, 65, 95, 0.7);
        margin-left: 4px;
    }

    
    .promo_span{
        margin-left: 4px;
        font-family: 'Roboto', sans-serif !important;
        font-weight: 500 !important;
        font-size: 10px;
        letter-spacing: 0.6px;
        text-decoration-line: line-through;
        color: rgba(30, 65, 95, 0.7);

    }

    .dark_bg.mobile.active .variant_select_popup>p{
        margin-bottom: 0 !important;
    }

    .flx{
        padding-top: 11px;
    }

    .swatchCustom__item__mobile{
        position: relative;
    }

    .black_friday_sale{
        position: absolute;
        top: -11px;
        left: 20%;
        padding: 6px 8px;
        background: #1E415E;
        border-radius: 5px;
        font-weight: 500;
        font-size: 9px;
        line-height: 89%;
        align-items: center;
        color: #FFFFFF;
    }

    @media (max-width: 320px){
        .promo_price{
            right: 0;
        }
    }
</style>
`

document.body.insertAdjacentHTML("afterbegin", stylePromotion)
document.querySelector(".on-mobile-btn-wrapper a.on-mob-btn").innerHTML = `get 1 pack for $18.70<span>28 STRIPS / PACK</span>`

document.querySelector(".on-mobile-btn-wrapper a.on-mob-btn").insertAdjacentHTML(
  "afterbegin",
  `<div class="promo_price">
    <span>Black Friday Sale</span>
    <span>$21.99 USD</span>
</div>
`
)

if (document.querySelector(".swatchCustom__item__mobile.swatchCustom__item--active.nosale")) {
  document.querySelector(".swatchCustom__item__mobile.swatchCustom__item--active.nosale img").insertAdjacentHTML("afterend", `<span class="promo_price_card">Save 15%</span>`)
  document.querySelector(".swatchCustom__item__mobile.swatchCustom__item--active.nosale .flx").insertAdjacentHTML("beforeend", `<span class="promo_span">$21.99</span>`)
  document.querySelectorAll(".swatchCustom__item__mobile").forEach((el) => {
    el.insertAdjacentHTML("afterbegin", `<span class="black_friday_sale">Black Friday Sale</span>`)
  })

  document.querySelector(".swatchCustom__item__mobile:nth-child(1) .price").textContent = `$18.70`
  document.querySelector(".swatchCustom__item__mobile:nth-child(2) .price").textContent = `$47.58`
  document.querySelector(".swatchCustom__item__mobile:nth-child(3) .price").textContent = `$175.98`

  document.querySelector(".swatchCustom__item__mobile:nth-child(2) .sale").textContent = `Save 15%`
  document.querySelector(".swatchCustom__item__mobile:nth-child(3) .sale").textContent = `Save 20%`

  document.querySelector(".swatchCustom__item__mobile:nth-child(2) .compare").textContent = `$55.97`
  document.querySelector(".swatchCustom__item__mobile:nth-child(3) .compare").textContent = `$219.97`
}
