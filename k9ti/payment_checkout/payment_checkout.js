let paymentCheckout = setInterval(() => {
  if (document.querySelector(".payment_inform_box")) {
    clearInterval(paymentCheckout)

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
            .new_text_radio_btn{
                font-weight: 400;
                font-size: 14px;
                line-height: 19px;
                color: #16377B;
            }
            .new_full_price{
                color: rgba(128, 128, 128, 1);
                text-decoration: line-through;
            }
            .new_your_price,
            .accent_var{
                font-weight: 700;
            }
            .text_var{
                display: flex;
                align-items: center;
            }
            @media (max-width: 1066px) {
                .text_var{
                    display: unset;
                }
            }
             @media (min-width: 768px) {
                .payment_plan_wrapp.payment_plan{
                    margin-top: -85px;
                }
             }
            @media (max-width: 768px) {
                .new_text_radio_btn .tooltip_box{
                    margin: 0;
                }
                .monthly_sec .new_text_radio_btn .tippy-tooltip{
                    left: 23px !important;
                    top: -50px !important;
                }
                .new_text_radio_btn .tippy-tooltip[data-placement^="top"]>.tippy-arrow {
                    left: 164px !important;
                }
            }
            @media (max-width: 496px) {
                .monthly_sec .new_text_radio_btn .tippy-tooltip{
                    left: -24px !important;
                    top: -31px !important;
                }
            }
            @media (max-width: 380px) {
                .monthly_sec .new_text_radio_btn .tippy-tooltip{
                    left: 23px !important;
                    top: -50px !important;
                }
            }
            @media (max-width: 320px) {
                .monthly_sec .new_text_radio_btn .tippy-tooltip{
                    left: -17px !important;
                }
                .payment_var p{
                    font-size: 13px;
                }
            }
        </style>
        `

    document.head.insertAdjacentHTML("beforeend", paymentCheckoutStyle)

    if (document.querySelector(".payment_inform_box .payment_plan_wrapp .input_wrapper > div.monthly_sec >input:checked") == null && !sessionStorage.getItem("data-checked")) {
      document.querySelector(".payment_inform_box .payment_plan_wrapp .input_wrapper > div.monthly_sec >input").checked = true
      sessionStorage.setItem("data-checked", "onetime_pay")
    }

    document.querySelector("#payment_plan_id").textContent = "Choose Payment plan"
    document.querySelector(".payment_inform_box .payment_plan_wrapp .input_wrapper > div.monthly_sec label span:nth-child(2)").textContent = ""
    document.querySelector(".payment_inform_box .payment_plan_wrapp .input_wrapper > div.onetime_sec label span:nth-child(2)").textContent = ""

    document.querySelector(".payment_inform_box .payment_plan_wrapp .input_wrapper > div.monthly_sec label span:nth-child(2)")?.insertAdjacentHTML(
      "afterend",
      `<div class="new_text_radio_btn"><span class="new_your_price">$99</span> <span class="accent_var">/month for 3 months</span> <span class="text_var">(immediate access, three payments spread over 3 months) <span class="tooltip_box" data-newtolltip
                data-title="If you choose the 3 month installment payment plan when you purchase, your card will automatically be charged the same amount as your initial installment payment 30 days and 60 days after your initial installment payment.">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M12.6 7C12.6 10.0928 10.0928 12.6 7 12.6C3.90721 12.6 1.4 10.0928 1.4 7C1.4 3.90721 3.90721 1.4 7 1.4C10.0928 1.4 12.6 3.90721 12.6 7ZM14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7ZM6.29954 4.2C6.29954 3.8134 6.61295 3.5 6.99954 3.5C7.38614 3.5 7.69954 3.8134 7.69954 4.2C7.69954 4.5866 7.38614 4.9 6.99954 4.9C6.61295 4.9 6.29954 4.5866 6.29954 4.2ZM6.29954 6.3C6.29954 5.9134 6.61295 5.6 6.99954 5.6C7.38614 5.6 7.69954 5.9134 7.69954 6.3V9.8C7.69954 10.1866 7.38614 10.5 6.99954 10.5C6.61295 10.5 6.29954 10.1866 6.29954 9.8V6.3Z"
                    fill="#16377B" />
                </svg>
            </span></span></div>`
    )

    document
      .querySelector(".payment_inform_box .payment_plan_wrapp .input_wrapper > div.onetime_sec label span:nth-child(2)")
      ?.insertAdjacentHTML(
        "afterend",
        `<div class="new_text_radio_btn"><span class="new_your_price">$297</span> <span class="new_full_price">$1705.10</span> <span>one-time payment</span></div>`
      )

    let tippyRun = setInterval(() => {
      if (typeof tippy === "function" && document.querySelector("[data-newtolltip]")) {
        clearInterval(tippyRun)
        document.querySelectorAll("[data-title]").forEach((el) => {
          if (innerWidth <= 768) {
            tippy(el, {
              content: el.getAttribute("data-title"),
              trigger: "click",
              placement: "top",
              appendTo: function () {
                return el.parentElement
              },
              onTrigger(inst, e) {
                e.stopPropagation()
                e.preventDefault()
                pushDataLayer(`Clicks on hints '3 monthly payments'`)
              },
              onShown(e) {
                pushDataLayer(`Shown '3 monthly payments'`)
              },
            })
          } else {
            tippy(el, {
              content: el.getAttribute("data-title"),
              placement: "bottom-end",
              //   trigger: "click",
              appendTo: function () {
                return el
              },
              onTrigger(e) {
                pushDataLayer(`Hover on hints '3 monthly payments'`)
              },
              onShown(e) {
                pushDataLayer(`Shown '3 monthly payments'`)
              },
            })
          }
        })
      }
    }, 500)

    if (window.innerWidth <= 768) {
      if ($("#submit").is(":visible")) {
        getLocalStor()
      }

      if (document.querySelector(".check_step")) {
        document.querySelectorAll(".check_step ul li").forEach((e) => {
          e.addEventListener("click", (el) => {
            document.querySelector(".payment_var")?.remove()
          })
        })
      }

      arr = []
      document.querySelectorAll(".btn_continue")?.forEach((el) => {
        el.addEventListener("click", (e) => {
          if (e.target.getAttribute("data-count") === "2") {
            if ($("#submit").is(":visible")) {
              getLocalStor()
            }
          }
        })
      })

      function getLocalStor() {
        document.querySelector(".payment_var")?.remove()
        let text = ""
        let textContent = ""
        if (document.querySelector(".payment_inform_box .payment_plan_wrapp .input_wrapper>div>input:checked+label[for='monthly_pay']")) {
          text = "monthly_pay"
        }
        if (document.querySelector(".payment_inform_box .payment_plan_wrapp .input_wrapper>div>input:checked+label[for='onetime_pay']")) {
          text = "onetime_pay"
        }
        if (sessionStorage.getItem("data-payment")) {
          sessionStorage.removeItem("data-payment")
          sessionStorage.setItem("data-payment", text)
        } else {
          sessionStorage.setItem("data-payment", text)
        }

        if (sessionStorage.getItem("data-payment").includes("onetime_pay")) {
          textContent = "<b>$297 one-time payment</b>"
        } else {
          textContent = `<b>$99/month for 3 months</b><br>(immediate access today, pay the rest later)`
        }

        document.querySelector("body .payment_inform_box").insertAdjacentHTML("afterend", `<div class="payment_var"><p>${textContent}</p></div>`)

        if (document.querySelector(".payment_var")) {
          let obs = new IntersectionObserver(visibility, {
            threshold: 1,
          })

          obs.observe(document.querySelector(".payment_var"))

          function visibility(entries) {
            entries.forEach((i) => {
              if (i.isIntersecting) {
                if (i.target.classList.contains("payment_var")) {
                  pushDataLayer("Visibility info regarding the payment plan")
                }

                obs.unobserve(i.target)
              }
            })
          }
        }
      }
    }
  }
}, 500)
