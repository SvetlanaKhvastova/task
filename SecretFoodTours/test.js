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
