window.onload = () => {
  console.log("%c EXP: Free delivery threshold ", "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;");
  const $$el = (selector) => document.querySelectorAll(selector);
  const $el = (selector) => document.querySelector(selector);
  const git = "https://conversionratestore.github.io/projects/lemieux/img";

  // funtion for push data to GA4
  const pushDataLayer = (name, desc, type = "", loc = "") => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "event-to-ga4",
      event_name: name,
      event_desc: desc,
      event_type: type,
      event_loc: loc,
    });
    console.log(`Event: ${name} ${desc} ${type} ${loc}`);
  };

  const baseUrl = window.location.pathname;
  const device = window.innerWidth < 769 ? "mobile" : "desktop";

  class FreeDelivery {
    constructor(baseUrl, device) {
      this.device = device;
      this.baseUrl = baseUrl;
      this.country = "UK";
      this.currency = "£";
      this.threshold = 49.99;
      if (this.baseUrl.includes("/us/")) {
        this.country = "US";
        this.currency = "$";
        this.threshold = 199.99;
      }
      this.init();
    }

    init() {
      this.appendStyle();
      this.productPage();
      this.cartPage();
      this.checkoutPage();
      if (this.device === "mobile") {
        this.checkBasketMobile();
      } else {
        this.checkBasketDesktop();
      }
      this.addEventListeners();
      this.visibleHandler();
    }

    checkPage() {
      const url = window.location.href;
      if ($el("product-view-layout")) {
        return "product";
      } else if (url.includes("/basket")) {
        return "cart";
      } else if (url.includes("/checkout")) {
        return "checkout";
      } else {
        return "other";
      }
    }

    productPage() {
      let startPrice = 0;
      let check = setInterval(() => {
        if ($el("product-view-layout")) {
          let price = this.priceToNumber($el("product-view-price .price").textContent);
          if ($el("product-view-delivery-note")) {
            $el("product-view-delivery-note").style.display = "none";
          }
          if (price !== startPrice) {
            startPrice = price;
            if ($el("product-view-layout .crs-wrapper")) $el("product-view-layout .crs-wrapper").remove();
            $el("product-view-details").insertAdjacentHTML("beforebegin", this.drawThreshold(price));
          }
        }
      }, 500);
    }

    cartPage() {
      setInterval(() => {
        if (this.checkPage() === "cart") {
          let newPrice = this.priceToNumber($el("basket-view-totals>div:first-of-type>div").innerText);
          const price = localStorage.getItem("basketPrice") ? this.priceToNumber(localStorage.getItem("basketPrice")) : 0;
          if ($el("basket-view>div>div>div>div>*:nth-child(3)>div.inline-block")) {
            $el("basket-view>div>div>div>div>*:nth-child(3)>div.inline-block").remove();
          }
          if (newPrice !== price) {
            localStorage.setItem("basketPrice", newPrice);
            if ($el("basket-view .crs-wrapper")) $el("basket-view .crs-wrapper").remove();
            $el("basket-view ul").insertAdjacentHTML("beforebegin", this.drawThreshold(newPrice));
          } else {
            if (!$el("basket-view .crs-wrapper")) $el("basket-view ul").insertAdjacentHTML("beforebegin", this.drawThreshold(newPrice));
          }
        }
      }, 200);
    }

    checkoutPage() {
      setInterval(() => {
        if (this.checkPage() === "checkout") {
          let newPrice = this.priceToNumber($$el("basket-view-totals>div:first-of-type price")[0].textContent);
          const price = localStorage.getItem("basketPrice") ? this.priceToNumber(localStorage.getItem("basketPrice")) : 0;
          if (newPrice !== price) {
            localStorage.setItem("basketPrice", newPrice);
            if ($el(".crs-wrapper")) $el(".crs-wrapper").remove();
            $el("ul.progressbar").insertAdjacentHTML("afterend", this.drawThreshold(newPrice));
          } else {
            if (!$el(".crs-wrapper")) $el("ul.progressbar").insertAdjacentHTML("afterend", this.drawThreshold(newPrice));
          }
        }
      }, 500);
    }

    priceToNumber(string) {
      string = parseFloat(string.replace(",", ".").replace(/[^0-9.]/g, ""));
      return string;
    }

    appendStyle() {
      const style = /*html*/ `
      <style class="crs-style">
        .crs-mob {
          display: block;
        }
        .crs-need_more, .crs-complete, .crs-progress {
          display: flex;
          align-items: center;
          column-gap: 12px;
          width: calc(100% + 2rem);
          margin: 0 -1rem;
          padding: 12px 1rem;
          background: #FFF7EC;
          border: 1px solid #EEE6DB;
        }
        .crs-need_more {
          margin: 10px -1rem -20px;
        }
        h4+.crs-need_more, h4+.crs-complete{
          margin: 0 -1rem 12px;
        }
        .crs-need_more p, .crs-complete p, .crs-progress p {
          color: #212121;
          font-size: 15px;
          line-height: 1.3;
          letter-spacing: 1px;
        }
        .crs-complete p b {
          color: #00BB1E;
        }
        .crs-progress {
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          row-gap: 6px;
        }
        .crs-progress p {
          color: #782A39;
          text-align: left;
        }
        .crs-progress_bar {
          width: 100%;
          height: 10px;
          background: #FFF;
          border: 2px solid #EEE6DB;
          position: relative;
        }
        .crs-progress_line {
          width: 50%;
          position: absolute;
          height: 6px;
          top: 0;
          left: 0;
          background-color: #212121;
        }
        ul+.crs-progress, ul+.crs-complete {
          max-width: 34.375rem;
          margin: 0 auto;
          width: 100%;
        }

        @media (min-width: 769px) {
          minibasket .crs-wrapper {
            width: calc(100% + 2.5rem);
            margin: 0 -1.25rem;
          }
          .crs-need_more, product-view-layout .crs-complete {
            margin: 10px 0 -20px;
            width: 100%;
          }
          .crs-mob {
            display: none;
          }
          basket-view .crs-wrapper {
            width: 100%;
            margin: 0;
          }
        }

        @media (max-width: 768px) {
          product-view .crs-need_more, product-view .crs-complete {
            width: 100%;
            margin: 0;
          }
        }
      </style>
    `;

      document.body.insertAdjacentHTML("afterbegin", style);
    }

    drawThreshold(price, basket = false, minibasket = false) {
      const page = this.checkPage();
      let abr = "";
      switch (page) {
        case "product":
          abr = "pp";
          break;
        case "cart":
          abr = "cp";
          break;
        case "checkout":
          abr = "chp";
          break;
        default:
          abr = "o";
      }
      const needMore = /*html*/ `
      <div class="crs-need_more crs-wrapper" 
        data-visible="${basket || minibasket ? "Minibasket" : page + " page"} Free express ${this.country} delivery on orders over" 
        data-gaevent="exp_free_del_v_${basket || minibasket ? "m" : abr}bfe${this.country.toLowerCase()}doo_ft">
        <img src="${git}/pack_more.svg" alt="pack-more">
        <p>
          <b>FREE EXPRESS ${this.country} Delivery</b> on orders over <b>${this.currency + this.threshold}</b>
        </p>
      </div>
    `;

      const complete = /*html*/ `
      <div class="crs-complete crs-wrapper" 
        data-visible="${basket || minibasket ? "Minibasket" : page + " page"} baner Congratulations! Free express ${this.country} delivery" 
        data-gaevent="exp_free_del_v_${basket || minibasket ? "m" : abr}bcfe${this.country.toLowerCase()}d_ft">
        <img src="${git}/pack_success.svg" alt="pack-success">
        <p>
          Congratulations! <br ${basket || this.checkPage() !== "product" ? 'class="crs-mob"' : ""}>You have <b>FREE EXPRESS ${this.country} Delivery</b>
        </p>
      </div>
    `;
      const progressWidth = (price / this.threshold) * 100;
      const progress = /*html*/ `
      <div class="crs-progress crs-wrapper"
        data-visible="${basket ? "Minibasket" : page + " page"} baner Free express ${this.country} delivery on orders over"
        data-gaevent="exp_free_del_v_${basket ? "m" : abr}bfe${this.country.toLowerCase()}doo_ft">
        <div class="crs-progress_bar">
          <div class="crs-progress_line" style="width: ${progressWidth}%"></div>
        </div>
        <p>
          You are <b>${this.currency}${(this.threshold - price).toFixed(2)}</b> away from <b>FREE EXPRESS ${this.country} delivery</b>
        </p>
      </div>
    `;

      if (price < this.threshold && this.checkPage() === "product" && !basket) {
        return needMore;
      } else if (price < this.threshold) {
        return progress;
      } else if (price >= this.threshold) {
        return complete;
      }
    }

    checkBasketMobile() {
      let basketPrice = 0;

      setInterval(() => {
        if ($el("basket-add-notice-item")) {
          const price = this.priceToNumber($el("basket-add-notice price").textContent).toFixed(2);
          const items = $el("basket-add-notice input").value;
          const total = price * items;
          if (total !== basketPrice) {
            $el("basket-add-notice .crs-wrapper") ? $el("basket-add-notice .crs-wrapper").remove() : "";
            $el("basket-add-notice h4").insertAdjacentHTML("afterend", this.drawThreshold(total.toFixed(2), false, true));
            basketPrice = total;
          }
        }
      }, 500);
    }

    checkBasketDesktop() {
      let basketPrice = 0;
      setInterval(() => {
        if ($el("minibasket")) {
          if ($el("minibasket .custom-scrollbar>div:first-child") && !$el("minibasket .custom-scrollbar>div:first-child").querySelector("ul")) {
            $el("minibasket .custom-scrollbar>div:first-child").remove();
          }
          const price = this.priceToNumber($el("minibasket basket-view-totals>div:first-of-type price").innerText);
          if (price !== basketPrice || !$el("minibasket .crs-wrapper")) {
            $el("minibasket .crs-wrapper") ? $el("minibasket .crs-wrapper").remove() : "";
            $el("minibasket ul").insertAdjacentHTML("beforebegin", this.drawThreshold(price, true));
            basketPrice = price;
          }
        }
      }, 500);
    }

    addEventListeners() {
      document.body.addEventListener("click", (e) => {
        if (e.target.closest('[sl-minibasket-button="basket"]') || e.target === $el('[sl-minibasket-button="basket"]') || e.target.closest("basket-add-notice a") || e.target === $el("basket-add-notice a span")) {
          if ($el("minibasket .crs-complete") || $el("basket-add-notice .crs-complete")) {
            pushDataLayer(`exp_free_del_b_mbcfe${this.country.toLowerCase()}d_fdpgc`, "Go to Checkout", "Button", `Minibasket baner Congratulations!Free express ${this.country} delivery`);
          }
          if ($el("minibasket .crs-progress")) {
            const percentage = $el("minibasket .crs-progress_line").style.width;
            pushDataLayer(`exp_free_del_b_mbfe${this.country.toLowerCase()}doo_fdpgc`, `${percentage} Go to Checkout`, "Button", `Minibasket baner Free express ${this.country} delivery on orders over`);
          }
          if ($el("basket-add-notice .crs-need_more")) {
            pushDataLayer(`exp_free_del_b_mbfe${this.country.toLowerCase()}doo`, "Go to Checkout", "Button", `Basket baner Free express ${this.country} delivery on orders over`);
          }
        }

        if (e.target.closest("basket-view [cy-checkoutproceed]") || e.target === $el("basket-view [cy-checkoutproceed]")) {
          if ($el("basket-view .crs-complete")) {
            pushDataLayer(`exp_free_del_b_sbbcfe${this.country.toLowerCase()}d_fdpcs`, "Checkout securely", "Button", `Shopping bag baner  Congratulations!Free express ${this.country} delivery`);
          }
          if ($el("basket-view .crs-progress")) {
            const percentage = $el("basket-view .crs-progress_line").style.width;
            pushDataLayer(`exp_free_del_b_sbbfe${this.country.toLowerCase()}doo_fdpcs`, `${percentage} Checkout securely`, "Button", `Shopping bag baner Free express ${this.country} delivery on orders over`);
          }
        }
        if (e.target.innerText.includes("Continue to delivery")) {
          if ($el("checkout-form .crs-complete")) {
            pushDataLayer(`exp_free_del_b_cbfe${this.country.toLowerCase()}d_fdpcs`, "Continue to delivery", "Button", `Checkout baner Congratulations!Free express ${this.country} delivery`);
          }
          if ($el("checkout-form .crs-progress")) {
            const percentage = $el("basket-view .crs-progress_line").style.width;
            pushDataLayer(`exp_free_del_b_cbfe${this.country.toLowerCase()}doo_fdpcs`, `${percentage} Continue to delivery`, "Button", `Checkout baner Free express ${this.country} delivery on orders over`);
          }
        }
      });
    }

    visibleHandler() {
      setInterval(() => {
        $$el("[data-visible]").forEach((el) => {
          if (el.getBoundingClientRect().top < window.innerHeight) {
            pushDataLayer(el.dataset.gaevent, "View element", "Visibility", el.dataset.visible);
            el.removeAttribute("data-visible");
          }
        });
      }, 2000);
    }
  }

  new FreeDelivery(baseUrl, device);
  (function (h, o, t, j, a, r) {
    h.hj =
      h.hj ||
      function () {
        (h.hj.q = h.hj.q || []).push(arguments);
      };
    h._hjSettings = { hjid: 1847916, hjsv: 6 };
    a = o.getElementsByTagName("head")[0];
    r = o.createElement("script");
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
  hj("event", "fre_delivery_threshold");
};
