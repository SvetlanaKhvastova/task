let paymentCheckout = setInterval(() => {
    if (document.querySelector(".payment_inform_box")) {
        clearInterval(paymentCheckout)

        let eventVar = "desktop"

        if (window.innerWidth <= 768) {
            eventVar = "mobile"
        }

        function pushDataLayer(actionDataLayer, labelDataLayer) {
            window.dataLayer = window.dataLayer || []
            if (labelDataLayer) {
                console.log(actionDataLayer + " : " + labelDataLayer)
                dataLayer.push({
                    event: "event-to-ga",
                    eventCategory: `Exp: Enroll Improvements ${eventVar}`,
                    eventAction: `${actionDataLayer}`,
                    eventLabel: `${labelDataLayer}`,
                })
            } else {
                console.log(actionDataLayer)
                dataLayer.push({
                    event: "event-to-ga",
                    eventCategory: `Exp: Enroll Improvements ${eventVar}`,
                    eventAction: `${actionDataLayer}`,
                })
            }
        }

        let paymentCheckoutStyle = /*html */ `
        <style>
            .payment_plan_wrapp.payment_plan .input_wrapper{
                display: flex !important;
                flex-direction: column-reverse;
                padding: 0;
                border: unset;
            }
            .payment_inform_box li > div.input_wrapper > div:not(:last-child){
                margin: 12px 0 0 !important;
            }
            .payment_inform_box .payment_plan_wrapp .input_wrapper > div label{
                background: #FFFFFF;
                border: 1px solid #DFE8F0;
                border-radius: 10px;
                padding: 16px;
            }
            .payment_inform_box .payment_plan_wrapp .input_wrapper > div >input:checked + label{
                border: 1px solid #16377B;
            }
            .payment_var{
                background: #FFFFFF;
                border: 1px dashed #E7E7E7;
                border-radius: 10px 10px 0 0;
                margin-bottom: -8px;
                padding: 12px 12px 20px;
                text-align: center;
            }
            .payment_var p{
                margin: 0 !important;
                color: #16377B !important;
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;
            }
        </style>
        `

        document.head.insertAdjacentHTML("beforeend", paymentCheckoutStyle)

        if (document.querySelector('.payment_inform_box .payment_plan_wrapp .input_wrapper > div.monthly_sec >input:checked') == null && !localStorage.getItem("data-checked")) {
            document.querySelector('.payment_inform_box .payment_plan_wrapp .input_wrapper > div.monthly_sec >input').checked = true
            localStorage.setItem("data-checked", 'onetime_pay')
        }




        if (window.innerWidth <= 768) {
            if ($('#submit').is(":visible")) {
                getLocalStor()
            }

            if (document.querySelector(".check_step")) {
                document.querySelectorAll(".check_step ul li").forEach((e) => {
                    e.addEventListener("click", (el) => {
                        document.querySelector('.payment_var')?.remove()
                    })
                })
            }

            arr = []
            document.querySelectorAll('.btn_continue')?.forEach(el => {

                el.addEventListener('click', (e) => {
                    if (e.target.getAttribute('data-count') === '2') {
                        if ($('#submit').is(":visible")) {
                            getLocalStor()
                        }
                    }
                })
            })

            function getLocalStor() {
                document.querySelector('.payment_var')?.remove()
                let text = document.querySelector('.payment_inform_box .payment_plan_wrapp .input_wrapper>div>input:checked+label .radio_style .ellipse').closest('.radio_style').nextElementSibling.textContent
                let textContent = ''
                if (localStorage.getItem("data-payment")) {
                    localStorage.removeItem("data-payment")
                    localStorage.setItem("data-payment", text)
                } else {
                    localStorage.setItem("data-payment", text)
                }

                if (localStorage.getItem("data-payment").includes('One-time payment of')) {
                    textContent = '<b>$297 one-time payment</b>'
                } else {
                    textContent = `<b>$99/month for 3 months</b><br>(immediate access today, pay the rest later)`
                }

                document.querySelector('body .payment_inform_box').insertAdjacentHTML('afterend', `<div class="payment_var"><p>${textContent}</p></div>`)
            }
        }
    }
}, 500)