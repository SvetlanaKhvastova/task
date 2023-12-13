let startFunk = setInterval(() => {
  if (document.querySelector(".grid--product-images--partial")) {
    clearInterval(startFunk);

    let newStyle = /*html */ `
<style>
/*discount */
.get_discount_block {
  display: flex;
  align-items: center;
  gap: 4px;
}
.get_discount_block:not(.get_discount_block_applied) {
  cursor: pointer;
}
.get_discount_caption {
  color: #c1856f;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-decoration-line: underline;
}
.get_discount_icon {
  width: 24px;
  height: 24px;
}
.get_discount_arrow {
  width: 16px;
  height: 16px;
}
.get_discount_icon img,
.get_discount_arrow img {
  display: block;
  width: 100%;
  height: 100%;
}
/*new_extend */
.new_extend {
  margin-bottom: 28px;
  background: #f8f8f9;
  padding: 20px;
}
.new_extend_head {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
}
.new_extend_caption {
  color: #1c1d1d;
  font-family: "Poppins";
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
}
.insurance_txt {
  color: #1c1d1d;
  font-family: "Poppins";
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  margin: 0 0 12px;
}
.new_extend_covered {
  width: max-content;
  display: block;
  min-width: 71px;
  cursor: pointer;
}
.new_extend_covered > img {
  max-width: 51px;
  width: 100%;
}
.new_extend_body {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
}
.new_extend_item {
  border: 1px solid #e8e8e1;
  background: #fff;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  transition: 0.35s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.new_extend_item_caption {
  color: #565656;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
}
.new_extend_item_price {
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}
.new_extend_item.active {
  border: 1px solid #000;
}

@media (max-width: 768px) {
  .new_extend_item {
    flex-direction: column;
    gap: 0;
  }
  .new_extend_item_caption {
    font-size: 12px;
    line-height: 16px;
  }
  .new_extend_head {
    gap: 8px;
    justify-content: flex-start;
  }
}
</style>
    `;

    let getDiscount = /*html */ `
    <div class='get_discount_block'>
      <div class='get_discount_icon'>
        <img src='https://conversionratestore.github.io/projects/capucinne/img/money.svg' />
      </div>
      <div class='get_discount_caption'>Get Your 50$ Off</div>
      <div class='get_discount_arrow'>
        <img src='https://conversionratestore.github.io/projects/capucinne/img/arrow_right.svg' />
      </div>
    </div>
  `;

    let appliedDiscount = /*html */ `
    <div class='get_discount_block get_discount_block_applied'>
      <div class='get_discount_icon'>
        <img src='https://flopsi69.github.io/crs/capucinne/pdp_slidein/img/discount-apply.svg' />
      </div>
      <div class='get_discount_caption'>You save $50</div>
    </div>
  `;

    document.head.insertAdjacentHTML("beforeend", newStyle);

    // handeGetYourMoneyOff();
    // handleExtend();

    function handleExtend() {
      if (!document.querySelector(".extend-offer iframe")?.contentWindow?.document?.querySelector(".btn-offer .term-length")?.textContent.trim() || document.querySelector(".new_extend")) return false;

      const innerEl = document.querySelector(".extend-offer iframe").contentWindow.document;

      const extend = `
      <div class='new_extend watch_var'>
        <div class='new_extend_head'>
          <div class='new_extend_caption'>
            Add accident protection offered by
            </div>
            <div class='new_extend_covered'>
            <img src='https://flopsi69.github.io/crs/capucinne/pdp_slidein/img/extend.svg' />
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="7.87793" cy="7.70068" r="6.5" fill="white" stroke="#D4A298"></circle>
          <path d="M7.88724 5.70868C7.72191 5.70868 7.58324 5.65268 7.47124 5.54068C7.35924 5.42868 7.30324 5.29002 7.30324 5.12468C7.30324 4.95935 7.35924 4.82068 7.47124 4.70868C7.58324 4.59668 7.72191 4.54068 7.88724 4.54068C8.04724 4.54068 8.18324 4.59668 8.29524 4.70868C8.40724 4.82068 8.46324 4.95935 8.46324 5.12468C8.46324 5.29002 8.40724 5.42868 8.29524 5.54068C8.18324 5.65268 8.04724 5.70868 7.88724 5.70868ZM8.33524 6.29268V10.7007H7.42324V6.29268H8.33524Z" fill="#D4A298"></path>
          </svg>
          </div>
        </div>
        <div class="insurance_txt">USA based insurance company guarantee</div>
        <div class='new_extend_body'></div>
      </div>
    `;

      document.querySelector(".extend-offer").insertAdjacentHTML("beforebegin", extend);

      for (let item of innerEl.querySelectorAll(".btn-offer")) {
        const el = document.createElement("div");
        el.classList.add("new_extend_item");
        let w = "";
        if (item.querySelector(".plan-price").textContent.split("$")[0] === "") {
          w = item.querySelector(".plan-price").textContent.split("$")[1];
        }
        if (item.querySelector(".plan-price").textContent.split("$")[1] === "") {
          w = item.querySelector(".plan-price").textContent.split("$")[0];
        }
        console.log(item.querySelector(".plan-price").textContent.split("$"));
        el.innerHTML = `
        <div class='new_extend_item_caption'>${item.querySelector(".term-length").textContent}:</div>
        <div class='new_extend_item_price'>$${w}</div>
      `;

        document.querySelector(".new_extend_body").insertAdjacentElement("beforeend", el);

        el.addEventListener("click", () => {
          item.click();

          if (el.classList.contains("active")) {
            el.classList.remove("active");
          } else {
            document.querySelector(".new_extend_item.active")?.classList.remove("active");
            el.classList.add("active");
          }
        });
      }

      document.querySelector(".new_extend_covered")?.addEventListener("click", (e) => {
        if (!e.target.getAttribute("data-test")) {
          innerEl.querySelector(".info-link")?.click();
        }
        e.target.setAttribute("data-test", "1");
        setTimeout(() => {
          if (e.target.getAttribute("data-test")) {
            e.target.removeAttribute("data-test");
          }
        }, 1000);
      });
    }

    function handeGetYourMoneyOff() {
      //  add get Discount
      if (!sessionStorage.getItem("lav-discount")) {
        let getNeedsClick = setInterval(() => {
          if (document.querySelector('.needsclick[aria-label="Open Form"]')) {
            clearInterval(getNeedsClick);
            if (document.querySelector("[data-product-price]") && !document.querySelector("[data-product-price] .get_discount_block:not(.get_discount_block_applied)")) {
              document.querySelector("[data-product-price]").insertAdjacentHTML("beforeend", getDiscount);
            }
            if (document.querySelector(".lav-sticky") && !document.querySelector(".lav-sticky__btn_price .get_discount_block:not(.get_discount_block_applied)")) {
              document.querySelector(".lav-sticky__btn_price .lav-sticky__btn").insertAdjacentHTML("beforebegin", getDiscount);
            }
            let doublyCurrency = "";
            let price = +document.querySelector("[data-product-price] .money")?.textContent.replace(/\D/g, "") / 100;
            let curr = document.querySelector("[data-product-price] .money")?.textContent.slice(0, 1);
            if (document.querySelector("[data-product-price] .money")?.getAttribute("doubly-currency")) {
              doublyCurrency = document.querySelector("[data-product-price] .money")?.getAttribute("doubly-currency");
            }
            let moneyOff = (price * 0.05).toFixed(0);
            if (document.querySelectorAll(".get_discount_block")) {
              document.querySelectorAll(".get_discount_block span").forEach((el) => {
                el.textContent = `${curr}${moneyOff} ${doublyCurrency}`;
              });
              document.querySelectorAll(".get_discount_block:not(.get_discount_block_applied)").forEach((el) => {
                el.addEventListener("click", (e) => {
                  //
                  if (!e.target.getAttribute("data-test")) {
                    document.querySelector('.needsclick[aria-label="Open Form"]')?.click();
                  }
                  e.target.setAttribute("data-test", "1");
                  setTimeout(() => {
                    if (e.target.getAttribute("data-test")) {
                      e.target.removeAttribute("data-test");
                    }
                  }, 1000);
                });
              });
            }
          }
        }, 100);
      }
      let getSessionStorage = setInterval(() => {
        if (sessionStorage.getItem("lav-discount") === "yes") {
          clearInterval(getSessionStorage);
          document.querySelectorAll(".get_discount_block:not(.get_discount_block_applied)").forEach((el) => {
            el.remove();
          });
          if (document.querySelector("[data-product-price]") && !document.querySelector("[data-product-price] .get_discount_block.get_discount_block_applied")) {
            document.querySelector("[data-product-price]").insertAdjacentHTML("beforeend", appliedDiscount);
          }
          if (document.querySelector(".lav-sticky") && !document.querySelector(".lav-sticky__btn_price .get_discount_block.get_discount_block_applied")) {
            document.querySelector(".lav-sticky__btn_price .lav-sticky__btn").insertAdjacentHTML("beforebegin", appliedDiscount);
          }
        }
      }, 100);
    }
  }
}, 100);
