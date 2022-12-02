let newFunk = setInterval(() => {
    if (document.querySelector(".payment_inform_box")) {
        clearInterval(newFunk)

        let newStyle =/*html */  `
        <style>
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
                background: url(https://conversionratestore.github.io/projects/samcart/img/chevron-down.svg) no-repeat;
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
        </style>
        `


        let steps = /*html */ `
            <div class="steps">
                <ul>
                    <li data-step="1" class="active_step">
                        <span>1</span>
                        <p class="active_step">
                            <span></span><span></span><span></span>
                        </p>
                        <p class="active_step">
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
                    <li class="active_step">
                        <span>Order summary</span>
                    </li>
                    <li>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 15.1L7.3493 10L12.5 4.90004L10.9143 3.33337L4.16667 10L10.9143 16.6667L12.5 15.1Z"
                            fill="#16377B" />
                        </svg>
                        <span>Contact information</span>
                    </li>
                    <li>
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

        if (document.querySelector('.btn_continue')) {
            document.querySelector('.btn_continue').addEventListener('click', (e) => {
                e.preventDefault()
                document.querySelectorAll('.steps ul li').forEach(el => {
                    if (e.target.getAttribute('data-count') === `1`) {
                        if (el.getAttribute('data-step') === '1') {
                            console.log(`1`, el)
                            el.classList.add('visited_step')
                            el.classList.remove('active_step')
                        }
                        if (el.getAttribute('data-step') === '2') {
                            console.log(`2`, el)
                            el.classList.add('active_step')
                        }
                        setTimeout(() => {
                            e.target.setAttribute('data-count', `2`)
                        }, 1000)
                    }
                    if (e.target.getAttribute('data-count') === `2`) {
                        if (el.getAttribute('data-step') === '2') {
                            console.log(`1`, el)
                            el.classList.add('visited_step')
                            el.classList.remove('active_step')
                        }
                        if (el.getAttribute('data-step') === '3') {
                            console.log(`2`, el)
                            el.classList.add('active_step')
                        }
                    }
                })

            })
        }
    }
}, 10)