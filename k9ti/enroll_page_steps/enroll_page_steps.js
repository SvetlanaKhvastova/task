let newFunk = setInterval(() => {
    if (document.querySelector(".payment_inform_box")) {
        clearInterval(newFunk)

        let newStyle =/*html */  `
        <style>
            .payment_inform_wrapp p.subtitle_text,
            .payment_inform_wrapp .cus_info,
            .payment_order p.subtitle_text,
            .paymen_method p.subtitle_text{
                display: none;
            }
            .steps ul{
                display: flex;
                align-items: center;
                justify-content: center;
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
                display: none;
            }
            
        </style>
        `

        let books = /*html */ `
            <div class="scene_box">
                <div class="card_box">
                    <div class="first_step"></div>
                    <div class="second_step"></div>
                    <div class="third_step"></div>
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
        document.querySelector('form#address-form').insertAdjacentHTML('beforebegin', steps)
        document.querySelector('form#address-form').insertAdjacentHTML('afterbegin', checkStep)
        document.querySelector('form#address-form').insertAdjacentHTML('afterend', newBtnContinue)
        document.querySelector('form#address-form').insertAdjacentHTML('beforeend', books)

        document.querySelector('.payment_plan_wrapp #payment_plan_id').textContent = 'Choose Payment plan'

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

                            setTimeout(() => {
                                e.target.setAttribute('data-count', `2`)
                            }, 600)
                        }
                        if (e.target.getAttribute('data-count') === `2`) {
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
                            setTimeout(() => {
                                e.target.setAttribute('data-count', `3`)
                                e.target.classList.add('is_hidden')
                            }, 600)
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


                            if (document.querySelector('.btn_continue').getAttribute('data-count') === `2`) {
                                document.querySelector('.btn_continue').setAttribute('data-count', `1`)
                            }
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

                            if (document.querySelector('.btn_continue').getAttribute('data-count') === `3`) {
                                document.querySelector('.btn_continue').setAttribute('data-count', `2`)
                                document.querySelector('.btn_continue').classList.remove('is_hidden')
                            }
                        })
                    }

                })
            })
        }

    }
}, 10)