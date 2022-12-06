let newFunk = setInterval(() => {
    if (document.querySelector(".payment_inform_box")) {
        clearInterval(newFunk)


        let scriptPopper = document.createElement("script")
        scriptPopper.src = "https://unpkg.com/popper.js@1"
        scriptPopper.async = false
        document.body.appendChild(scriptPopper)

        let scriptTippy = document.createElement("script")
        scriptTippy.src = "https://unpkg.com/tippy.js@5"
        scriptTippy.async = false
        document.body.appendChild(scriptTippy)

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
                    eventCategory: `Exp:  ${eventVar}`,
                    eventAction: `${actionDataLayer}`,
                    eventLabel: `${labelDataLayer}`,
                })
            } else {
                console.log(actionDataLayer)
                dataLayer.push({
                    event: "event-to-ga",
                    eventCategory: `Exp: ${eventVar}`,
                    eventAction: `${actionDataLayer}`,
                })
            }
        }

        let newStyle =/*html */  `
        <style>
            .payment_inform_wrapp p.subtitle_text,
            .payment_inform_wrapp .cus_info,
            .payment_order p.subtitle_text,
            .paymen_method p.subtitle_text,
            .payment_inform_wrapp,
            .paymen_method{
                display: none;
            }
            .payment_order{
                margin-bottom: 30px !important;
            }
            .payment_inform_box .payment_plan_wrapp p.subtitle_text{
                font-weight: 700;
                font-size: 18px;
                line-height: 24px;
                text-transform: uppercase;
                color: #754E0C !important;
                margin-bottom: 15px;
            }
            .payment_plan_wrapp.payment_plan .input_wrapper{
                padding: 16px;
            }
            .payment_plan_wrapp.payment_plan .input_wrapper .onetime_sec{
                margin-bottom: 13px;
            }
            .payment_inform_box .payment_plan_wrapp .input_wrapper > div label{
                font-size: 14px;
                line-height: 19px;
                color: #16377B !important;
            }
            .payment_inform_box .payment_plan_wrapp .input_wrapper > div.monthly_sec label{
                color: #808080 !important;
            }
            .payment_inform_box .payment_plan_wrapp .input_wrapper > div >input:checked + label .radio_style .ellipse{
                width: 8.4px;
                height: 8.4px;
            }
            section .reviews_box{
                margin-top: 60px !important;
            }
            .tooltip_box{
                width: 14px;
                height: 14px;
                margin-left: 4px;
                cursor: pointer;
            }
            .tippy-tooltip{
                max-width: 424px !important;
                background: #FFFFFF;
                border-radius: 8px;
                font-weight: 400;
                font-size: 14px;
                line-height: 150%;
                color: #808080;
                box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.15);
                filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.15));
            }
            .tippy-content{
                padding: 16px;
            }
            .tippy-tooltip[data-placement^=bottom]>.tippy-arrow{
                border-bottom-color: #FFFFFF;
            }
            .tippy-tooltip[data-placement^="top"] > .tippy-arrow {
                border-top-color: #ffffff;
            }
            .payment_inform_wrapp{
                margin: 19px 0px -30px !important;
            }
            .first_block span.top-level{
                font-weight: 400;
                font-size: 14px;
                line-height: 20px !important;
                top: -12px !important;
                left: 12px !important;
                padding: 0 6px !important;
            }
            body .first_block form input, 
            body form select, 
            body form #email, 
            body form input#cvv, 
            body .contact-form input[type=text], 
            body .contact-form input[type=email], 
            body .contact-form textarea, 
            body form select.checkout-address,
            body select.mm, 
            body input#cvv {
                border: 1px solid #E7E7E7 !important;
                border-radius: 4px !important;
                padding-top: 11px !important;
                padding-bottom: 11px !important;
                margin: 0 !important;
                padding-right: 35px !important;
            }
            .customer_information_wrapper > .row:nth-child(7) > .col-md-12,
            .customer_information_wrapper > .row:nth-child(8) > .col-md-12,
            .paypament-details > .row:nth-child(3) > .col-md-6{
                position: relative;
            }
            .customer_information_wrapper > .row:nth-child(7) > .col-md-12::after,
            .customer_information_wrapper > .row:nth-child(8) > .col-md-12::after,
            .paypament-details > .row:nth-child(3) > .col-md-6::after{
                content: '';
                position: absolute;
                right: 10px;
                top: 12px;
                width: 20px;
                height: 20px;
                background: url(https://conversionratestore.github.io/projects/knineti/img/expand_more_black.svg) no-repeat center center;
                pointer-events: none;
                transition: all 0.3s ease;
            }
            .customer_information_wrapper > .row:nth-child(7) > .col-md-12.is_open::after,
            .customer_information_wrapper > .row:nth-child(8) > .col-md-12.is_open::after,
            .paypament-details > .row:nth-child(3) > .col-md-6.is_open::after{
                transform: rotateX(180deg);

            }
            .customer_information_wrapper p.email-form-error,
            .customer_information_wrapper p.form-error, 
            .customer_information_wrapper span.form-error,
            .paypament-details p.form-error, 
            .paypament-details span.form-error{
                margin-top: 10px !important;
                margin-bottom: 0 !important;
            }
            .customer_information_wrapper > .row{
                margin-bottom: 22px;
                width: 100%;
                padding: 0;
                margin-left: 0;
                margin-right: 0;
            }
            .payment_inform_box li > div.paypament-details .row{
                margin-bottom: 22px !important;
            }
            .customer_information_wrapper{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                margin: 0;
            }
            .customer_information_wrapper > .row:nth-child(7),
            .customer_information_wrapper > .row:nth-child(8){
                width: 48.6%;
            }
            .customer_information_wrapper > .row:nth-child(8){
                margin-left: 15px;
            }
            .customer_information_wrapper > .row:nth-child(2),
            .customer_information_wrapper > .row:nth-child(5){
                display: flex;
                justify-content: space-between;
            }
            .customer_information_wrapper > .row:nth-child(2) > .col-md-6:nth-child(2),
            .customer_information_wrapper > .row:nth-child(5) > .col-md-6:nth-child(2){
                margin-left: 15px;
            }
            .customer_information_wrapper > .row:nth-child(2) > .col-md-6,
            .customer_information_wrapper > .row:nth-child(5) > .col-md-6{
                width: 48.6%;
            }
            .customer_information_wrapper > .row > .col-md-6,
            .customer_information_wrapper > .row > .col-md-12{
                padding: 0;
            }
            .paymen_method{
                margin-top: 10px;
            }
            img.ssl-logo{
                top: 0 !important;
            }
            body .payment_inform_box li > div.paypament-details .row:nth-child(1), 
            body .payment_inform_box li > div.paypament-details .row:nth-child(2){
                margin-top: 110px !important;
                margin-bottom: 22px !important;
                width: 48.6% !important;
            }
            body form .payment_inform_box li > div.paypament-details .row:nth-child(3) > div.col-md-6{
                margin-right: 15px !important;
            }
            body .first_block .submit_btn input#submit{
                margin: 0 auto !important;
                background: #233973;
                max-width: 260px;
                height: 58px;
                font-weight: 600;
                font-size: 16px !important;
                line-height: 22px;
                text-align: center;
                letter-spacing: -0.01em;
                text-transform: uppercase;
                border-radius: 10px !important;
                color: #FFFFFF !important;
            }
            body .first_block .submit_btn input#submit_disabled{
                margin: 0 auto !important;
            }
            .payment_inform_box li.paymen_method p.support_text{
                color: #808080 !important;
                margin: 9px 0 0 !important;
            }
            body .scroll_bar{
                margin-bottom: 20px !important;
            }
            .steps{
                margin-bottom: 30px;
                padding-top: 15px;
            }
            .steps ul{
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0;
            }
            .steps ul li{
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .steps ul li + li{
                margin-left: 10px;
            }
            .steps ul li > span{
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid #E7E7E7;
                border-radius: 8px;
                font-weight: 700;
                font-size: 16px;
                line-height: 19px;
                color: #808080;
                width: 32px;
                height: 32px;
                margin-right: 10px;
                position: relative;
            }
            .steps ul li.active_step > span{
                background: #16377B;
                color: #FFFFFF;
            }
            .steps ul li.visited_step > span{
                background: #E9F1F9;
                border: 1px solid #DFE8F0;
                line-height: 0;
                font-size: 0;
            }
            .steps ul li.visited_step > span::after{
                position: absolute;
                content: '';
                background: url(https://conversionratestore.github.io/projects/knineti/img/check_step.svg) no-repeat;
                z-index: 1111;
                width: 12px;
                height: 9px;
                background-repeat: no-repeat;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            .steps p + p{
                margin-left: 4px;
            }
            .steps p > span{
                width: 4px;
                height: 4px;
                border-radius: 50%;
                display: inline-block;
                background: #E7E7E7;
            }
            .steps p > span + span{
                margin-left: 4px;
            }
            .steps p.active_step > span{
                background: #16377B;
            }
            /*check_step */
            .check_step{
                margin: 0 auto 15px;
                max-width: 536px;
            }
            .check_step ul {
                padding: 0;
            }
            .check_step ul li{
                display: none;
                align-items: center;
                max-width: fit-content;
            }
            [data-checkstep="2"],
            [data-checkstep="3"]{
                cursor: pointer;
            }
            .check_step ul li.active_step{
                display: flex;
            }
            .check_step span{
                font-weight: 700;
                font-size: 18px;
                line-height: 24px;
                text-transform: uppercase;
                color: #754E0C;
            }
            .check_step svg{
                margin-right: 16px;
            }
            /*btn_continue */
            .btn_continue_wrap{
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 30px;
            }
            .btn_continue{
                display: flex;
                align-items: center;
                justify-content: center;
                background: #233973;
                border-radius: 10px;
                outline: none;
                border: none;
                height: 58px;
                max-width: 260px;
                width: 100%;
                font-weight: 600;
                font-size: 16px;
                line-height: 22px;
                letter-spacing: -0.01em;
                text-transform: uppercase;
                color: #FFFFFF;
            }
            .is_hidden{
                display: none !important;
            }
            .payment_inform_box{
                max-width: 536px;
                width: 100%;
                flex-direction: column;
                margin: 0 auto !important;
                /*
                -webkit-perspective: 1200;
                perspective: 1200;
                transform-style: preserve-3d;
                */
            }
            .payment_inform_box li{
                width: 100% !important;
                transition: .7s linear;  
            }
            /*
            .rotate_var{
                transform: rotateY(-180deg);
            }
            */
            .scene_box{
                width: 100%;
                -webkit-perspective: 1200;
                perspective: 1200;
                -moz-transform: perspective(1200px);
                -webkit-transform-style: preserve-3d;
                -moz-transform-style: preserve-3d; 
                transform-style: preserve-3d;
            }
            .card_box{
                position: relative;
                height: 500px;
                -webkit-transform-style: preserve-3d;
                -moz-transform-style: preserve-3d;
                transform-style: preserve-3d;
                -webkit-transition: .7s linear;
                -moz-transition: .7s linear;
                -o-transition: .7s linear;
                transition: .7s linear;  
            }
            .first_step, .second_step, .third_step {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                -webkit-backface-visibility: hidden;
                -moz-backface-visibility: hidden;
                backface-visibility: hidden;
                }

                .first_step {
                z-index: 1;
                -webkit-transform: rotateY(0deg);
                -moz-transform: rotateY(0deg);
                -ms-transform: rotateY(0deg);
                transform: rotateY(0deg);
                }
                .second_step {
                -webkit-transform: rotateY(180deg);
                -moz-transform: rotateY(180deg);
                -ms-transform: rotateY(180deg);
                transform: rotateY(180deg);
                }

                .third_step {
                -webkit-transform: rotateY(180deg);
                -moz-transform: rotateY(180deg);
                -ms-transform: rotateY(180deg);
                transform: rotateY(180deg);
                }

                #address-form > .row{
                    display: none;
                }

                .scene_box.is_open .card_box{
                -webkit-transform: rotateY(-180deg);
                -moz-transform: rotateY(-180deg);
                -ms-transform: rotateY(-180deg);
                transform: rotateY(-180deg);
                }
            
        </style>
        `

        let books = /*html */ `
            <div class="scene_box">
                <div class="card_box">
                    <ul class="first_step">
                        <li class="test"></li>
                    </ul>
                    <ul class="second_step">
                        <li class="test"></li>
                    </ul>
                    <ul class="third_step">
                        <li class="test"></li>
                    </ul>
                </div>
            </div>
        `

        let steps = /*html */ `
            <div class="steps">
                <ul>
                    <li data-step="1" class="active_step">
                        <span>1</span>
                        <p class="active_step">
                            <span></span><span></span><span></span>
                        </p>
                        <p>
                            <span></span><span></span><span></span>
                        </p>
                    </li>
                    <li data-step="2">
                        <span>2</span>
                        <p>
                            <span></span><span></span><span></span>
                        </p>
                        <p>
                            <span></span><span></span><span></span>
                        </p>
                    </li>
                    <li data-step="3">
                        <span>3</span>
                    </li>
                </ul>
            </div>
        `

        let checkStep = /*html */`
            <div class="check_step">
                <ul>
                    <li class="active_step"  data-checkStep="1">
                        <span>Order summary</span>
                    </li>
                    <li data-checkStep="2">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 15.1L7.3493 10L12.5 4.90004L10.9143 3.33337L4.16667 10L10.9143 16.6667L12.5 15.1Z"
                            fill="#16377B" />
                        </svg>
                        <span>Contact information</span>
                    </li>
                    <li data-checkStep="3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 15.1L7.3493 10L12.5 4.90004L10.9143 3.33337L4.16667 10L10.9143 16.6667L12.5 15.1Z"
                            fill="#16377B" />
                        </svg>
                        <span>Payment method</span>
                    </li>
                </ul>
            </div>
        `

        let newBtnContinue =  /*html */`
            <div class="btn_continue_wrap">
                <button class="btn_continue" data-count="1">Continue</button>
            </div>
        `


        document.head.insertAdjacentHTML("beforeend", newStyle)
        document.querySelector('form#address-form')?.insertAdjacentHTML('beforebegin', steps)
        document.querySelector('form#address-form')?.insertAdjacentHTML('afterbegin', checkStep)
        document.querySelector('form#address-form')?.insertAdjacentHTML('afterend', newBtnContinue)
        // document.querySelector('.payment_inform_box')?.insertAdjacentHTML('beforeend', books)

        // document.querySelector('.scene_box .first_step li.test')?.after(document.querySelector('.payment_order'))
        // document.querySelector('.scene_box .first_step li.payment_order')?.after(document.querySelector('.payment_plan_wrapp'))
        // document.querySelector('.scene_box .second_step li.test')?.after(document.querySelector('.payment_inform_wrapp'))
        // document.querySelector('.scene_box .third_step li.test')?.after(document.querySelector('.paymen_method'))

        document.querySelector('.payment_plan_wrapp #payment_plan_id').textContent = 'Choose Payment plan'
        if (document.querySelector("#selected-state-us option:last-child")) {
            document.querySelector("#selected-state-us option:last-child").textContent = 'Select State'
        }

        document.querySelector('.payment_inform_box .payment_plan_wrapp .input_wrapper > div.monthly_sec label')?.insertAdjacentHTML('beforeend', `<span class="tooltip_box" data-tolltip
                data-title="If you choose the 3 month installment payment plan when you purchase, your card will automatically be charged the same amount as your initial installment payment 30 days and 60 days after your initial installment payment.">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M12.6 7C12.6 10.0928 10.0928 12.6 7 12.6C3.90721 12.6 1.4 10.0928 1.4 7C1.4 3.90721 3.90721 1.4 7 1.4C10.0928 1.4 12.6 3.90721 12.6 7ZM14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7ZM6.29954 4.2C6.29954 3.8134 6.61295 3.5 6.99954 3.5C7.38614 3.5 7.69954 3.8134 7.69954 4.2C7.69954 4.5866 7.38614 4.9 6.99954 4.9C6.61295 4.9 6.29954 4.5866 6.29954 4.2ZM6.29954 6.3C6.29954 5.9134 6.61295 5.6 6.99954 5.6C7.38614 5.6 7.69954 5.9134 7.69954 6.3V9.8C7.69954 10.1866 7.38614 10.5 6.99954 10.5C6.61295 10.5 6.29954 10.1866 6.29954 9.8V6.3Z"
                    fill="#16377B" />
                </svg>
            </span>`)

        if (document.querySelector('.btn_continue')) {
            document.querySelector('.btn_continue').addEventListener('click', (e) => {
                e.preventDefault()
                document.querySelectorAll('.steps ul li').forEach(el => {
                    document.querySelectorAll('.check_step ul li').forEach(item => {
                        if (e.target.getAttribute('data-count') === `1`) {
                            if (el.getAttribute('data-step') === '1') {
                                el.classList.add('visited_step')
                                el.classList.remove('active_step')
                                el.querySelector('p:nth-of-type(2)').classList.add('active_step')
                            }
                            if (el.getAttribute('data-step') === '2') {
                                el.classList.add('active_step')
                                el.querySelector('p:nth-of-type(1)').classList.add('active_step')
                            }

                            if (item.getAttribute('data-checkStep') === `1`) {
                                item.classList.remove('active_step')
                            }
                            if (item.getAttribute('data-checkStep') === `2`) {
                                item.classList.add('active_step')
                            }

                            document.querySelector('.payment_order').classList.add('is_hidden')
                            document.querySelector('.payment_plan_wrapp.payment_plan').classList.add('is_hidden')
                            document.querySelector('.payment_inform_wrapp').style.display = 'block'
                            // document.querySelector('.scene_box').classList.add('is_open')
                            // document.querySelector('.payment_order').classList.add('rotate_var')
                            // document.querySelector('.payment_plan_wrapp.payment_plan').classList.add('rotate_var')
                            onScrollTop()

                            setTimeout(() => {
                                e.target.setAttribute('data-count', `2`)
                            }, 600)
                        }
                        if (e.target.getAttribute('data-count') === `2`) {
                            validateBtnStepSecond(el, item, e.target)
                        }
                    })

                })
            })
        }

        if (document.querySelector('.check_step')) {
            document.querySelectorAll('.check_step ul li').forEach(e => {
                e.addEventListener('click', el => {
                    if (el.currentTarget.getAttribute('data-checkStep') === `2` && el.currentTarget.classList.contains('active_step')) {
                        document.querySelectorAll('.steps ul li').forEach(i => {
                            if (i.getAttribute('data-step') === '1') {
                                i.classList.remove('visited_step')
                                i.classList.add('active_step')
                                i.querySelector('p:nth-of-type(2)').classList.remove('active_step')
                            }
                            if (i.getAttribute('data-step') === '2') {
                                i.classList.remove('active_step')
                                i.querySelector('p:nth-of-type(1)').classList.remove('active_step')
                            }
                            el.currentTarget.classList.remove('active_step')
                            el.currentTarget.previousElementSibling.classList.add('active_step')

                            document.querySelector('.payment_order').classList.remove('is_hidden')
                            document.querySelector('.payment_plan_wrapp.payment_plan').classList.remove('is_hidden')
                            document.querySelector('.payment_inform_wrapp').style.display = 'none'


                            if (document.querySelector('.btn_continue').getAttribute('data-count') === `2`) {
                                document.querySelector('.btn_continue').setAttribute('data-count', `1`)
                            }

                            onScrollTop()
                            // if (document.querySelector('.scene_box').classList.contains('is_open')) {
                            //     document.querySelector('.scene_box').classList.remove('is_open')
                            // }
                        })
                    }

                    if (el.currentTarget.getAttribute('data-checkStep') === `3` && el.currentTarget.classList.contains('active_step')) {
                        document.querySelectorAll('.steps ul li').forEach(i => {
                            console.log(`document.querySelectorAll('.steps ul li')`, i)
                            console.log(`data-checkStep 3`)
                            if (i.getAttribute('data-step') === '2' && i.classList.contains('visited_step')) {
                                i.classList.remove('visited_step')
                                i.classList.add('active_step')
                                i.querySelector('p:nth-of-type(2)').classList.remove('active_step')
                            }
                            if (i.getAttribute('data-step') === '3' && i.classList.contains('active_step')) {
                                i.classList.remove('active_step')
                            }

                            el.currentTarget.classList.remove('active_step')
                            el.currentTarget.previousElementSibling.classList.add('active_step')

                            document.querySelector('.payment_inform_wrapp').classList.remove('is_hidden')
                            document.querySelector('.paymen_method').style.display = 'none'
                            document.querySelector('#address-form > .row').style.display = 'none'

                            if (document.querySelector('.btn_continue').getAttribute('data-count') === `3`) {
                                document.querySelector('.btn_continue').setAttribute('data-count', `2`)
                                document.querySelector('.btn_continue').classList.remove('is_hidden')
                            }

                            onScrollTop()
                        })
                    }

                })
            })
        }


        if (document.querySelector('#submit')) {
            document.querySelector('#submit').addEventListener('click', () => {
                window.alert = function () { };
            })
        }

        document.querySelectorAll('form select').forEach(el => {
            el.addEventListener('click', (e) => {
                if (e.target.closest('.col-md-12')) {
                    e.target.closest('.col-md-12').classList.toggle('is_open')
                }
                if (e.target.closest('.col-md-6')) {
                    e.target.closest('.col-md-6').classList.toggle('is_open')
                }
            })
        })

        document.addEventListener("click", (e) => {
            if (!e.target.matches('form select')) {
                document.querySelectorAll('form .col-md-12').forEach(el => {
                    if (el.classList.contains('is_open')) {
                        el.classList.remove('is_open')
                    }
                })
                document.querySelectorAll('form .col-md-6').forEach(el => {
                    if (el.classList.contains('is_open')) {
                        el.classList.remove('is_open')
                    }
                })
            }
        })

        function onScrollTop() {
            document.querySelector(".steps").scrollIntoView({ block: "start", behavior: "smooth" })
        }

        function validateBtnStepSecond(el, item, e) {
            document.querySelector('#submit').click()

            let fName = $('#first-name').next().is(':visible')
            let lName = $('#last-name').next().is(':visible')
            let email = $('#email').next().is(':visible')
            let address = $('#address1').next().is(':visible')
            let city = $('#city').next().is(':visible')
            let zipCode = $('#zip').next().is(':visible')
            let selectCountry = $('#selected-country').next().is(':visible')
            let selectState = $('#selected-state-us').next().is(':visible')
            let number = $('#phone').next().is(':visible')
            let cardNumber = $('#cardno').next()[0]
            let nameCard = $('#cardname').next()[0]
            let month = $('#month').next()[0]
            let year = $('#year1').next()[0]
            let cvv = $('#cvv').next().next()[0]

            if (!fName && !lName && !email && !address && !city && !zipCode && !selectCountry && !selectState && !number) {
                if (el.getAttribute('data-step') === '2') {
                    el.classList.add('visited_step')
                    el.classList.remove('active_step')
                    el.querySelector('p:nth-of-type(2)').classList.add('active_step')
                }
                if (el.getAttribute('data-step') === '3') {
                    el.classList.add('active_step')
                }
                if (item.getAttribute('data-checkStep') === `2`) {
                    item.classList.remove('active_step')
                }
                if (item.getAttribute('data-checkStep') === `3`) {
                    item.classList.add('active_step')
                }

                document.querySelector('.payment_inform_wrapp').classList.add('is_hidden')
                document.querySelector('.paymen_method').style.display = 'block'

                cardNumber.style.display = 'none'
                nameCard.style.display = 'none'
                month.style.display = 'none'
                year.style.display = 'none'
                cvv.style.display = 'none'

                document.querySelector('#address-form > .row').style.display = 'block'
                e.classList.add('is_hidden')

                onScrollTop()

                setTimeout(() => {
                    e.setAttribute('data-count', `3`)
                }, 600)
            }
        }


        let tippyRun = setInterval(() => {
            if (typeof tippy === "function" && document.querySelector("[data-tolltip]")) {
                clearInterval(tippyRun)
                document.querySelectorAll("[data-title]").forEach((el) => {
                    if (innerWidth <= 768) {
                        tippy(el, {
                            content: el.getAttribute("data-title"),
                            trigger: "click",
                            placement: "bottom",
                            appendTo: function () {
                                return document.querySelector(".tooltip_box")
                            },
                            onTrigger(e) {
                                pushDataLayer(`Clicks on hints ''`)
                            },
                            onShown(e) {
                                pushDataLayer(`Shown ''`)
                            },
                        })
                    } else {
                        tippy(el, {
                            content: el.getAttribute("data-title"),
                            // placement: "bottom",
                            // trigger: "click",
                            appendTo: function () {
                                return document.querySelector(".tooltip_box")
                            },
                            onTrigger(e) {
                                pushDataLayer(`Hover on hints ''`)
                            },
                            onShown(e) {
                                pushDataLayer(`Shown ''`)
                            },
                        })
                    }
                })
            }
        }, 500)

    }
}, 10)