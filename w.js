let lookForEarn = setInterval(() => {
  if (document.querySelector(".product__price:not(.product__price--compare) .money").getAttribute("doubly-currency-usd")) {
    clearInterval(lookForEarn);
    handleKlarna();
  }
}, 500);
