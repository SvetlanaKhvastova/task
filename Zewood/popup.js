let startFunkPopup = setInterval(() => {
    if (document) {
        clearInterval(startFunkPopup)

        let scriptCustomTimer = document.createElement("script")
        scriptCustomTimer.src = "https://cdnjs.cloudflare.com/ajax/libs/flipclock/0.7.0/flipclock.min.js"
        scriptCustomTimer.async = false
        document.head.appendChild(scriptCustomTimer)

        let scriptCustomTimerStyle = document.createElement("link")
        scriptCustomTimerStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/flipclock/0.7.0/flipclock.css"
        scriptCustomTimerStyle.rel = "stylesheet"
        document.head.appendChild(scriptCustomTimerStyle)

        let popUp = /*html */ `
                <div class="overlay_popup is_hidden">
                    <div class="container_popup">
                        <div class="btn_close">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.0184 7.9773L15.5574 3.4383C16.1475 2.89362 16.1475 1.98582 15.5574 1.44113L14.5589 0.442553C14.0142 -0.147518 13.1064 -0.147518 12.5617 0.442553L8.02269 4.98156L3.4383 0.442553C2.89362 -0.147518 1.98582 -0.147518 1.44113 0.442553L0.442553 1.44113C-0.147518 1.98582 -0.147518 2.89362 0.442553 3.4383L4.98156 7.9773L0.442553 12.5617C-0.147518 13.1064 -0.147518 14.0142 0.442553 14.5589L1.44113 15.5574C1.98582 16.1475 2.89362 16.1475 3.4383 15.5574L8.02269 11.0184L12.5617 15.5574C13.1064 16.1475 14.0142 16.1475 14.5589 15.5574L15.5574 14.5589C16.1475 14.0142 16.1475 13.1064 15.5574 12.5617L11.0184 7.9773Z" fill="white"/>
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
                            <input type="email" name="" id="">
                            <button type="submit"></button>
                        </label>
                    </form>
                    <button>No thanks, I don't want extra savings</button>
                </div>
                <div class="success_block">
                    <h2>Congratulations!</h2>
                    <p>You've unlocked an additional <span>10% OFF + FREE SHIPPING</span> for your first order</p>
                    <div class="voucher_block">
                        <span>tnpc7680ae65</span>
                    </div>
                    <p>Discount code will be automatically applied at checkout</p>
                    <button>Continue shopping</button>
                </div>
            </div>
        `

        document.head.insertAdjacentHTML("beforeend", popupStyle)
        document.body.insertAdjacentHTML("afterbegin", popUp)
        document.querySelector(".overlay_popup .container_popup")?.insertAdjacentHTML("beforeend", contentPopup)
    }
}, 100)