let styleCheck = /*html */ `
<style>
    .step__footer .step__footer__continue-btn.btn{
        background: #0092D8 !important;
    }
    .input-checkbox:checked, .input-radio:checked {
        border-color: #0092D8 !important;
    }

    .layout-flex--loose-horizontal .layout-flex__item a{
        color: #0092D8 !important;
    }

    .step__footer__previous-link{
        color: #0092D8 !important;
    }

     .step__footer__previous-link svg{
        fill: #0092D8 !important;
     }

     .field__input:focus, .field__input-wrapper--flag-focus .field__input{
        border: 1px solid #0092D8 !important;
        border-radius: 5px !important;
        box-shadow: unset !important;
     }
</style>
`

document.head.insertAdjacentHTML("beforeend", styleCheck)
