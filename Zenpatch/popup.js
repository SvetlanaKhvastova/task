let startFunkPopup = setInterval(() => {
    if (document) {
        clearInterval(startFunkPopup)

        getCookie('_ga')

        function getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            let valueCookie
            let timeNewUser
            if (parts.length === 2) {
                valueCookie = parts.pop().split(';').shift();
                timeNewUser = +(valueCookie.split('.').pop() + '000')
                console.log(`timeNewUser`, new Date(timeNewUser))
                console.log(`timeNow`, new Date())
                console.log(+new Date() - +new Date(timeNewUser))
                if (+new Date() - +new Date(timeNewUser) <= 10000) {
                    console.log(`New User`)
                }
            }
        }

        let scriptCustomTimer = document.createElement("script")
        scriptCustomTimer.src = "https://cdnjs.cloudflare.com/ajax/libs/flipclock/0.7.0/flipclock.min.js"
        scriptCustomTimer.async = false
        document.head.appendChild(scriptCustomTimer)

        let scriptCustomTimerStyle = document.createElement("link")
        scriptCustomTimerStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/flipclock/0.7.0/flipclock.css"
        scriptCustomTimerStyle.rel = "stylesheet"
        document.head.appendChild(scriptCustomTimerStyle)

        let popupStyle = /*html */`
        <style>
        .overlay_popup {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgb(255 255 255 / 75%);
            display: flex;
            overflow-y: auto;
            z-index: 1000000000;
            transition: all 0.5s ease;
        }
        .overlay_popup.is_hidden{
            opacity: 0;
            pointer-events: none;
        }
        .overlay_popup .container_popup {
            display: block;
            position: relative;
            max-width: 335px;
            width: 100%;
            margin: auto;
            transition: all 0.5s ease 0s;
        }
        .overlay_popup .container_popup > .btn_close {
            position: absolute;
            top: 10px;
            right: 10px;
            width: 24px;
            height: 24px;
            outline: none;
            cursor: pointer;
            background: rgba(55, 63, 71, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            z-index: 1111;
        }
        .content_popup{
            background: #FFFFFF;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
        }
        .header_popup{
            padding: 10px 24px 18px;
            background: #89A571;
            position: relative;
            border-radius: 10px 10px 0 0;
        }
        .header_popup::after{
            position: absolute;
                content: '';
                top: 3px;
                right: 11px;
                width: 103px;
                height: 100px;
                background: url(https://conversionratestore.github.io/projects/zenpatch/img/zen_putch.png) no-repeat center center;
                background-size: contain;
        }
        .header_popup::before{
            position: absolute;
                content: '';
                bottom: -10px;
                right: 0;
                width: 100%;
                height: 28px;
                z-index: 1;
                background: url(https://conversionratestore.github.io/projects/zenpatch/img/bgr.svg) no-repeat center center;
                background-size: contain;
        }
        .header_popup p{
            font-family: 'Din Condensed',Roboto,sans-serif !important;
            font-weight: 400;
            font-size: 42px !important;
            line-height: 50px !important;
            color: #FFFFFF;
            margin: 0;
            position: relative;
            z-index: 1110;
            width: max-content;
        }
        .header_popup p:nth-child(2){
            font-size: 36px !important;
            line-height: 43px !important;
        }
        .header_popup p:nth-child(2)::after{
            position: absolute;
            content: '';
            top: -10px;
            right: -35px;
            width: 21px;
            height: 21px;
            background: url(https://conversionratestore.github.io/projects/zenpatch/img/text_cross.svg) no-repeat center center;
            background-size: contain;
        }
        .content_popup h2{
            font-family: "Roboto", sans-serif;
            font-weight: 700;
            font-size: 24px;
            line-height: 30px;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            color: #010101 !important;
            margin: 0 !important;
        }
        .email_opt_in{
            padding: 5px 20px 30px;
            text-align: center;
        }
        .email_opt_in.is_hidden{
            display: none;
        }
        .email_opt_in p{
            font-family: "Roboto", sans-serif;
            font-weight: 400;
            font-size: 16px !important;
            line-height: 24px !important;
            letter-spacing: 0.5px;
            color: #515151;
            margin: 8px 0 16px;
        }
        .email_opt_in label{
            margin: 0 0 16px !important;
            position: relative;
        }
        .email_opt_in label::before{
            position: absolute;
            content: '';
            top: 50%;
            transform: translateY(-50%);
            left: 24px;
            width: 16px;
            height: 12px;
            background: url(https://conversionratestore.github.io/projects/zenpatch/img/email.svg) no-repeat center center;
            background-size: contain;
        }
        .email_opt_in label input{
            height: 50px !important;
            width: 100% !important;
            border: 1px solid #D3D3D3 !important;
            border-radius: 31px !important;
            background: unset !important;
            box-shadow: unset !important;
            padding: 0 24px 0 50px !important;
        }
        .no_thanks_btn{
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.5px;
            text-decoration-line: underline;
            color: #2C7D73;
            margin-top: 20px;
        }
        .success_block{
            padding: 5px 20px 20px;
            text-align: center;
        }
        .success_block.is_hidden{
            display: none;
        }
        .content_popup .success_block h2{
            margin-bottom: 6px !important;
        }
        .success_block p{
            font-family: "Roboto", sans-serif;
            font-weight: 400;
            font-size: 16px !important;
            line-height: 24px !important;
            letter-spacing: 0.5px;
            color: #515151;
            margin: 0 -5px 16px;
        }
        .success_block p span{
            font-weight: 800;
            color: #2C7D73;
        }
        .voucher_block{
            border: 2px dashed #D9D9D9;
            border-radius: 31px;
            margin-bottom: 16px;
            padding: 17px;
        }
        .voucher_block span{
            font-weight: 700;
            font-size: 20px;
            line-height: 24px;
            letter-spacing: 0.5px;
            color: #2C7D73;
        }
        .content_popup .green_btn{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 60px;
            background: #2C7D73;
            box-shadow: 0px 2px 4px rgba(12, 11, 11, 0.1), 0px 12px 32px rgba(0, 0, 0, 0.05);
            border-radius: 52px;
            font-family: 'Din Condensed',Roboto,sans-serif !important;
            font-weight: 700;
            font-size: 20px;
            line-height: 24px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: #FFFFFF;
        }
        /*countdown */
        .countdown-wrapper{
            padding: 0px 0 50px;
        }
        .countdown.flip-clock-wrapper{
            margin: 0 !important;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .countdown.flip-clock-wrapper ul{
            width: 32px;
            height: 48px;
            font-size: 2rem;
            font-weight: 400;
            line-height: 1.5;
            border-radius: 0.0625em 0.0625em 0 0;
            background: #2e2e2e;
            margin: 0;
        }
        .countdown.flip-clock-wrapper ul li a div div.inn,
        .countdown.flip-clock-wrapper ul li a div.down,
        .countdown.flip-clock-wrapper ul.play li.flip-clock-active .down .shadow,
        .countdown.flip-clock-wrapper ul.play li.flip-clock-active .up .shadow,
        .countdown.flip-clock-wrapper ul.play li.flip-clock-before .down .shadow,
        .countdown.flip-clock-wrapper ul.play li.flip-clock-before .up .shadow{
            background-color: #2e2e2e;
            border-radius: unset;
            background: #2e2e2e;
        }
        .countdown .flip-clock-divider{
            height: 48px !important;
        }
        .countdown  .flip-clock-dot{
            opacity: 0;
        }
        .countdown.flip-clock-wrapper .flip:first-of-type{
            display: none;
        }
        .countdown.flip-clock-wrapper .flip:nth-of-type(3),
        .countdown.flip-clock-wrapper .flip:nth-of-type(5),
        .countdown.flip-clock-wrapper .flip:nth-of-type(7){
            border-radius: 0.0625em 0 0 0.0625em;
            width: 27px !important;
        }
        .countdown.flip-clock-wrapper .flip:nth-of-type(4),
        .countdown.flip-clock-wrapper .flip:nth-of-type(6),
        .countdown.flip-clock-wrapper .flip:nth-of-type(8){
            border-radius: 0 0.0625em 0.0625em 0;
            width: 27px !important;
        }
        .countdown.flip-clock-wrapper .flip:nth-of-type(3) a div div.inn,
        .countdown.flip-clock-wrapper .flip:nth-of-type(5) a div div.inn,
        .countdown.flip-clock-wrapper .flip:nth-of-type(7) a div div.inn{
            left: 3px !important;
        }
        .countdown.flip-clock-wrapper .flip:nth-of-type(4) a div div.inn,
        .countdown.flip-clock-wrapper .flip:nth-of-type(6) a div div.inn,
        .countdown.flip-clock-wrapper .flip:nth-of-type(8) a div div.inn{
            left: -3px !important;
        }
        .countdown.flip-clock-wrapper ul li{
            line-height: 1.5;
        }
        .countdown.flip-clock-wrapper ul li a div,
        .countdown.flip-clock-wrapper ul li a div div.inn{
            font-size: 2rem;
            color: #ededed;
        }
        .countdown .flip-clock-divider .flip-clock-label{
            top: unset !important;
            bottom: -27px !important;
            right: -28px !important;
            color: rgb(156, 156, 156) !important;
        }
        .countdown .flip-clock-divider.seconds .flip-clock-label{
            right: -54px !important;
        }
        .countdown .flip-clock-divider.minutes .flip-clock-label {
            right: -50px !important;
        }        
        .countdown .flip-clock-divider.hours .flip-clock-label {
            right: -47px !important;
        }
        /*btn_trigger_popup */
        .btn_trigger_popup{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            background: #F9BF07;
            border-radius: 27px;
            width: 100%;
            max-width: 331px;
            margin: 16px auto;
            padding: 11px 14px 11px 56px;
            position: relative;
        }
        .btn_trigger_popup::before{
            position: absolute;
            content: '';
            top: 50%;
            transform: translateY(-50%);
            left: 16px;
            width: 28px;
            height: 19px;
            background: url(https://conversionratestore.github.io/projects/zenpatch/img/discount.svg) no-repeat center center;
            background-size: contain;
        }
        body .btn_trigger_popup > p{
            font-family: "Roboto", sans-serif;
            font-weight: 700;
            font-size: 12px !important;
            line-height: 18px !important;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #010101;
            margin: 0;
        }
        .btn_trigger_popup svg{
            margin: 0 0 0 auto;
        }
        .btn_trigger_popup.applied_discount{
            background: #E5E6E9;
            border: 1px solid #E5E6E9;
        }
        .btn_trigger_popup.applied_discount svg{
            display: none;
        }
        .btn_trigger_popup.applied_discount.is_hidden,
        .btn_trigger_popup.not_applied_discount.is_hidden{
            display: none;
        }
        @media (max-width: 320px) {
            .header_popup::before{
                width: 102%;
            }
            .header_popup p{
                font-size: 39px !important;
            }
            .header_popup p:nth-child(2) {
                font-size: 33px !important;
            }
            .success_block p{
                font-size: 15px !important;
            }
            body .btn_trigger_popup > p{
                font-size: 11px !important;
            }
        }

        </style>
        `

        let popUp = /*html */ `
                <div class="overlay_popup is_hidden">
                    <div class="container_popup">
                        <div class="btn_close" data-close>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.19995 2.27234L11.8 11.8723M2.19995 11.8723L11.8 2.27234L2.19995 11.8723Z" stroke="white" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
        `

        let contentPopup = /*html */ `
          <div class="content_popup">
                <div class="header_popup">
                    <p>EXTRA 10% OFF</p>
                    <p>FREE SHIPPING</p>
                </div>
                <div class="email_opt_in">
                    <h2>UNLOCK BONUS OFFER</h2>
                    <p>Your bonus offer will be available for:</p>
                    <div class="countdown-wrapper">
                        <div id="countdown" class="countdown"></div>
                    </div>
                    <form action="#">
                        <label for="">
                            <input type="email" name="" id="" placeholder="Enter your email to claim">
                        </label>
                        <button type="submit" class="green_btn">Claim Bonus Offer</button>
                    </form>
                    <button class="no_thanks_btn" data-close>No thanks, I don't want extra savings</button>
                </div>
                <div class="success_block is_hidden">
                    <h2>Congratulations!</h2>
                    <p>You've unlocked an additional <span>10% OFF + FREE SHIPPING</span> for your first order</p>
                    <div class="voucher_block">
                        <span>tnpc7680ae65</span>
                    </div>
                    <p>Discount code will be automatically applied at checkout</p>
                    <button class="green_btn" data-close>Continue shopping</button>
                </div>
            </div>
        `

        let triggerPopup = /*html */`
        <div class="btn_trigger_popup not_applied_discount" data-popup>
            <p>Get aDDITIONAL 10% OFF </p>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.64657 9L5 4.13389L6.2707 3L12 9L6.2707 15L5 13.8661L9.64657 9Z" fill="black"/>
            </svg>
        </div>
        <div class="btn_trigger_popup applied_discount is_hidden">
            <p>aDDITIONAL 10% OFF applied next</p>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.64657 9L5 4.13389L6.2707 3L12 9L6.2707 15L5 13.8661L9.64657 9Z" fill="black"/>
            </svg>
        </div>
        `

        document.head.insertAdjacentHTML("beforeend", popupStyle)
        document.querySelector('#addToCart')?.insertAdjacentHTML('beforebegin', triggerPopup)
        document.body.insertAdjacentHTML("afterbegin", popUp)
        let countdown

        const popupTrigger = document.querySelectorAll('[data-popup]'),
            popup = document.querySelector('.overlay_popup')

        function closePopup() {
            popup.classList.add('is_hidden')
            document.body.style.overflow = ''
        }

        function openPopup() {
            if (!document.querySelector(".overlay_popup .container_popup .content_popup")) {
                document.querySelector(".overlay_popup .container_popup")?.insertAdjacentHTML("beforeend", contentPopup)
            }
            popup.classList.remove('is_hidden');
            document.body.style.overflow = 'hidden'

            clearInterval(popupTimerId)
            if (document.querySelector(".overlay_popup .content_popup")) {
                document.querySelectorAll('[data-close]')
                    .forEach(el => {
                        console.log(el)
                        el.addEventListener('click', () => {
                            closePopup()
                        })
                    })

                // click pn btn Claim Bonus Offer 
                document.querySelector('form .green_btn')?.addEventListener('click', (e) => {
                    e.preventDefault()
                    countdown.stop()
                    document.querySelector('.btn_trigger_popup.not_applied_discount').classList.add('is_hidden')
                    document.querySelector('.btn_trigger_popup.applied_discount').classList.remove('is_hidden')
                    setDiscountCheckout()

                    if (document.querySelector('.success_block').classList.contains('is_hidden')) {
                        document.querySelector('.success_block').classList.remove('is_hidden')
                    }
                    if (!document.querySelector('.email_opt_in ').classList.contains('is_hidden')) {
                        document.querySelector('.email_opt_in').classList.add('is_hidden')
                    }
                })
            }
        }
        popupTrigger.forEach(btn => {
            if (!btn.classList.contains('applied_discount')) {
                btn.addEventListener('click', openPopup);
            }
        });

        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                closePopup()
            }
        });

        const popupTimerId = setTimeout(() => {
            openPopup()
            if (document.querySelector(".overlay_popup .content_popup")) {
                countTimer()
            }
        }, 10000)

        function countTimer() {
            let clock = setInterval(() => {
                if (typeof FlipClock === "function" && typeof jQuery === "function" && document.querySelector("#countdown")) {
                    clearInterval(clock)
                    let init_countdown, set_countdown
                    countdown = init_countdown = function () {
                        countdown = new FlipClock($(".countdown"), {
                            language: "en",
                            clockFace: 'DailyCounter',
                            countdown: true,
                            autoStart: false,
                            showSeconds: true,
                            callbacks: {
                                start: function () {

                                },
                                stop: function () {
                                    console.log(`stop countdown`)
                                }
                            },
                        })

                        return countdown
                    }
                    set_countdown = function (minutes, start) {
                        let elapsed, end, left_secs, now, seconds
                        if (countdown.running) {
                            return
                        }
                        seconds = minutes * 60
                        now = new Date()
                        start = new Date(start)
                        end = start.getTime() + seconds * 1000
                        left_secs = Math.round((end - now.getTime()) / 1000)
                        elapsed = false
                        if (left_secs < 0) {
                            console.log(`left_secs`, left_secs)
                            left_secs *= -1
                            elapsed = true
                        }
                        countdown.setTime(left_secs)
                        return countdown.start()
                    }
                    init_countdown()
                    set_countdown(15, new Date())
                }
            }, 500)



        }
        // change EVENT btn addToCart and setDiscountCheckout
        function setDiscountCheckout() {
            let idValue = document.querySelector(".js-packs input[type=radio]:checked+label").previousElementSibling.value
            // observer
            let observer = new MutationObserver(() => {
                if (document) {
                    observer.disconnect()
                    idValue = document.querySelector(".js-packs input[type=radio]:checked+label").previousElementSibling.value
                    observer.observe(document, {
                        childList: true,
                        subtree: true,
                    })
                }
            })

            observer.observe(document, {
                childList: true,
                subtree: true,
            })

            document.querySelector("#addToCart")?.addEventListener("click", function (e) {
                e.preventDefault()

                addToCartCheckout(idValue)
            })


            async function addToCartCheckout(idValue) {
                // clearCart
                await fetch("/cart/clear.js", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then((response) => {
                        return response.json()
                    })
                    .catch((error) => {
                        console.error("Error:", error)
                    })

                formData = {
                    items: [
                        {
                            id: idValue,
                            quantity: 1,
                        },
                    ],
                }

                await fetch("/cart/add.js", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                })
                    .then((response) => {
                        return response.json()
                    })
                    .catch((error) => {
                        console.error("Error:", error)
                    })

                setTimeout(() => {
                    window.location.href = "/checkout?discount=tnpc7680ae65"
                }, 300)
            }
        }

    }
}, 100)