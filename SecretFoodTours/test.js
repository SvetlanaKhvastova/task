let startFunk = setInterval(() => {
  if (document.querySelector(".tour-intro")) {
    clearInterval(startFunk);
    console.log(`startFunk`, document.querySelector("#checkout"));

    document.querySelectorAll("#times-header .day.limited.current").forEach((el) => {
      console.log(el, `.day.limited.current`);
    });
    document.querySelectorAll("#checkout-events .event-list .event-option:not(.disabled)").forEach((el) => {
      console.log(el, `event-option`);
    });
    document.querySelectorAll("#checkout-events .event-list .event-option:not(.disabled) .tooltip-inner").forEach((el) => {
      console.log(el, `tooltip-inner`);
    });
  }
}, 100);

document.querySelectorAll(".btn_continue")?.forEach((el) => {
  el.addEventListener("click", (e) => {
    if (e.currentTarget.getAttribute("data-count") === "1") {
      document.querySelectorAll(".payment_inform_box .payment_plan_wrapp .input_wrapper>div> input:checked").forEach((i) => {
        if (i.getAttribute("id") === "onetime_pay") {
          console.log(` pushDataLayer("exp_upsell_option_concpp", "Continue - one-time payment", "Button", "Choose payment plan");`);
        } else {
          console.log(`pushDataLayer("exp_upsell_option_concpp", "Continue - 3 interest-free", "Button", "Choose payment plan");`);
        }
      });
    }
  });
});
