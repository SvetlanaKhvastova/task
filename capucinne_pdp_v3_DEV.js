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
.get_discount_block:not(.get_discount_block_applied){
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
  background: #F8F8F9;
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
.insurance_txt{
  color: #1C1D1D;
font-family: 'Poppins';
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
.new_extend_covered > img{
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






/** sticky__price*/
.lav-sticky {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
      z-index: 10;
  border-top: 1px solid #f6f5f5;
  background: #fff;
  padding: 5px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.lav-sticky__info {
  display: flex;
  align-items: center;
  gap: 24px;
}
.lav-sticky__img {
  max-width: 90px;
  max-height: 90px;
}
.lav-sticky__img img {
  width: 100%;
  height: 100%;
}
.lav-sticky__title {
  color: #1c1d1d;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  max-width: 400px;
}
.lav-sticky__price {
  position: relative;
  display: flex;
  padding-left: 20px;
  margin-left: 20px;
  display: none;
}
.lav-sticky__price:before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 60px;
  background-color: #e8e8e1;
  event-pointer: none;
}
.lav-sticky__price-old {
  display: none;
  color: #565656;
  font-size: 22px;
  letter-spacing: -0.308px;
  text-decoration: line-through;
}
.lav-sticky__price-new {
  color: #1c1d1d;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.308px;
  margin: 0 8px;
}
.lav-sticky__price-discount {
  display: flex;
  align-items: center;
  color: #c1856f;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
}
.lav-sticky__price-discount img {
  margin-right: 4px;
  flex-shrink: 0;
}
.lav-sticky__btn_price {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-left: 1px solid #e8e8e1;
  padding-left: 40px;
}
.lav-sticky__btn_price .lav-product-price {
  color: #000;
  font-family: "Poppins";
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  margin-right: 16px;
}
.lav-sticky__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 250px;
  min-width: 250px;
  background: #000;
  width: 100%;
  height: 56px;
  color: #fff;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  padding: 1px;
  gap: 11px;
  text-transform: uppercase;
  margin: 0 0 0 65px;
}
.lav-sticky__btn svg {
  width: 24px;
  height: 24px;
}
.lav-select_size {
  width: 100%;
  background: #000;
  color: #fff;
  display: flex;
  font-family: "Poppins";
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  height: 56px;
  padding: 1px;
  cursor: pointer;
  gap: 11px;
}
.lav-error {
  border: 1px solid #c60200;
}
.lav-error-txt{
position: absolute;
    left: 0;
    top: 47px;
    width: max-content;
    color: #C20000;
    font-family: 'Poppins';
    font-size: 11px;
    font-weight: 500;
    line-height: 20px;
}

select.lav-error{
    border: 1px solid #c60200;
    background-image: url(https://conversionratestore.github.io/projects/capucinne/img/arrow_error.svg);
    background-size: 16px;
}


@media (max-width: 768px) {

  .new_extend_item{
    flex-direction:column;
    gap: 0;
  }
  .new_extend_item_caption{
    font-size: 12px;
line-height: 16px;
  }
  .new_extend_head{
  gap: 8px;
  justify-content: flex-start;
}
  
  .lav-sticky__btn svg{
    display: none !important;
  }

/**.lav-sticky */
.lav-sticky__btn_price .lav-product-price.lav-mob{
  color: #FFF;
font-family: 'Poppins';
font-size: 16px;
font-weight: 600;
line-height: 24px;
position: relative;
margin-right: 20px;
}
.lav-sticky.none_size .select_size_sticky{
  display: none;
}
.lav-sticky.none_size .lav-sticky__btn_price{
width: 100%;
}
.lav-btn-price.lav-mob:after {
    content: '';
    position: absolute;
    right: -16px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 100px;
    background-color: #D4A298;
    width: 4px;
    height: 4px;
    transition: 0.2s;
}
.lav-sticky{
  padding: 0;
  border: 1px solid var(--grey-border, #E8E8E1);
}
.lav-sticky__info,
.lav-sticky .get_discount_block,
.full-bleed--mobile.medium-up--hide,
.product-bottom-flex-container{
  display: none !important;
}
.lav-sticky__btn_price{
padding: 0;
    width: 100%;
    border: none;
}
.select_size_sticky{
  width: 31%;
    max-width: max-content;
    display: block;
}
.select_size_sticky select{
  border: none;
  outline: none;
  color: #000;
font-family: 'Poppins';
font-size: 14px !important;
font-weight: 400;
line-height: 30px;
}
.select_size_sticky select:focus{
      border: none;
    border-color: unset;
    border-color: unset;
}
.select_size_sticky select.lav-error{
    border: 1px solid #c60200;
}
.lav-sticky__btn{
  margin: 0;
  width: 100%;
    max-width: 100%;
        gap: 8px;
            height: 49px;
}
.lav-error-txt{
  top: 45px;
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

    waitFor(
      () => document.querySelector(".product-single__form .add-to-cart"),
      () => {
        document.querySelector(".product-single__form .add-to-cart").addEventListener("click", (e) => {
          if (localStorage.getItem("stickyBtn") === "yes") {
            localStorage.removeItem("stickyBtn");
          }
        });
      }
    );

    handeGetYourMoneyOff();
    handleExtend();

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

    function addSticky() {
      const el = `
      <div class='lav-sticky'>
      <div class="select_size_sticky ring_size_var">
      </div>
        <div class='lav-sticky__info'>
          <div class='lav-sticky__img'>
            <img src='${item.ImageURL}' />
          </div>
          <div class='lav-sticky__title'>
            ${document.querySelector(".product-single__title").innerText}
          </div>
          <div class='lav-sticky__price'>
            <div class='lav-sticky__price-old'>$2,110.00</div>
            <div class='lav-sticky__price-new lav-product-price'></div>
          </div>
        </div>
        <div class='lav-sticky__btn_price'>
          <span class='lav-product-price lav-btn-price lav-desk'></span>
          <button class='lav-sticky__btn lav-btn'>
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="21" viewBox="0 0 19 21" fill="none">
            <path d="M9.12403 0C7.14645 0 5.51877 1.51542 5.36371 3.43807H4.16532C3.07605 3.43807 2.27602 4.28356 2.11027 5.43001L0.0169455 18.9087C-0.147716 20.0476 0.913536 21 2.07468 21H16.1573C17.3273 21 18.3774 20.0474 18.213 18.9087L16.1224 5.43001C15.9626 4.32383 15.1878 3.43807 14.0666 3.43807H12.8837C12.7286 1.51543 11.1016 0 9.12403 0ZM9.12403 0.687483C10.7334 0.687483 12.047 1.89213 12.1989 3.43807H6.05119C6.20277 1.89213 7.51468 0.68747 9.12403 0.687483ZM4.16532 4.12621H14.0666C14.889 4.12621 15.3418 4.83095 15.4423 5.52668L17.5329 19.0081C17.6368 19.7278 16.894 20.3119 16.1573 20.3119H2.07468C1.34013 20.3119 0.595268 19.7316 0.699726 19.0081L2.79036 5.52668C2.90057 4.76325 3.38957 4.12621 4.16532 4.12621ZM12.2143 6.87412C12.2143 8.56124 10.836 9.92683 9.12403 9.92683C7.41206 9.92683 6.03574 8.56125 6.03574 6.87412C6.03574 6.41687 5.34827 6.41441 5.34827 6.87412C5.34826 8.93691 7.04458 10.6143 9.12403 10.6143C11.2035 10.6143 12.8998 8.93689 12.8998 6.87412C12.8998 6.41687 12.2143 6.41687 12.2143 6.87412Z" fill="white"/>
          </svg>
           <span class='lav-product-price lav-btn-price lav-mob'></span>
            <span class='lav-btn-caption'>Add to cart</span>
          </button>
        </div>

      </div>
    `;

      document.querySelector("body").insertAdjacentHTML("beforeend", el);

      document.querySelectorAll(".lav-sticky__btn_price .lav-product-price").forEach((el) => {
        el.style.display = "none";
      });
      document.querySelector(".lav-sticky__btn svg").style.display = "none";

      let activated = false;

      if (document.querySelector(".variant-wrapper.ring_size_var select")) {
        if (document.querySelector(".variant-wrapper.ring_size_var .variant__label")) {
          document.querySelector(".variant-wrapper.ring_size_var .variant__label").textContent = "Ring size, US";
        }
        document.querySelectorAll(".variant-wrapper.ring_size_var select").forEach((el) => {
          el.insertAdjacentHTML("afterbegin", '<option value="Select size" selected>Select size</option>');
        });
        document
          .querySelector(".btn.btn--full.add-to-cart")
          ?.insertAdjacentHTML(
            "beforebegin",
            '<div class="lav-select_size"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="21" viewBox="0 0 19 21" fill="none"><path d="M9.12403 0C7.14645 0 5.51877 1.51542 5.36371 3.43807H4.16532C3.07605 3.43807 2.27602 4.28356 2.11027 5.43001L0.0169455 18.9087C-0.147716 20.0476 0.913536 21 2.07468 21H16.1573C17.3273 21 18.3774 20.0474 18.213 18.9087L16.1224 5.43001C15.9626 4.32383 15.1878 3.43807 14.0666 3.43807H12.8837C12.7286 1.51543 11.1016 0 9.12403 0ZM9.12403 0.687483C10.7334 0.687483 12.047 1.89213 12.1989 3.43807H6.05119C6.20277 1.89213 7.51468 0.68747 9.12403 0.687483ZM4.16532 4.12621H14.0666C14.889 4.12621 15.3418 4.83095 15.4423 5.52668L17.5329 19.0081C17.6368 19.7278 16.894 20.3119 16.1573 20.3119H2.07468C1.34013 20.3119 0.595268 19.7316 0.699726 19.0081L2.79036 5.52668C2.90057 4.76325 3.38957 4.12621 4.16532 4.12621ZM12.2143 6.87412C12.2143 8.56124 10.836 9.92683 9.12403 9.92683C7.41206 9.92683 6.03574 8.56125 6.03574 6.87412C6.03574 6.41687 5.34827 6.41441 5.34827 6.87412C5.34826 8.93691 7.04458 10.6143 9.12403 10.6143C11.2035 10.6143 12.8998 8.93689 12.8998 6.87412C12.8998 6.41687 12.2143 6.41687 12.2143 6.87412Z" fill="white"/></svg> Add to cart</div>'
          );
        if (document.querySelector(".lav-sticky") && !document.querySelector(".select_size_sticky.ring_size_var select") && document.querySelector('[value="Select size"]') && document.querySelector(".variant-wrapper.ring_size_var select")) {
          let cloneNode = document.querySelector(".variant-wrapper.ring_size_var select").cloneNode(true);
          document.querySelector(".select_size_sticky").insertAdjacentElement("afterbegin", cloneNode);
        }

        if (document.querySelector(".select_size_sticky.ring_size_var select")) {
          document.querySelectorAll('[value="Select size"]').forEach((el) => {
            el.selected = true;
          });
        }
        document.querySelector("[data-add-to-cart]").style.display = "none";

        document.querySelectorAll(".ring_size_var select").forEach((el) => {
          el.addEventListener("change", function (e) {
            // console.log(e.target, `change`);
            if (e.target.value !== "Select size") {
              activated = true;
              document.querySelectorAll(".lav-sticky__btn_price .lav-product-price").forEach((el) => {
                if (window.innerWidth > 768) {
                  if (el.classList.contains("lav-desk")) {
                    el.style.display = "block";
                  }
                } else {
                  if (el.classList.contains("lav-mob")) {
                    el.style.display = "block";
                  }
                }
              });
              document.querySelector(".lav-sticky__btn svg").style.display = "block";
              document.querySelector("[data-add-to-cart]").style.display = "flex";
              if (document.querySelector(".lav-select_size")) {
                document.querySelector(".lav-select_size").style.display = "none";
              }
              document.querySelectorAll(".ring_size_var select").forEach((el) => {
                el.classList.remove("lav-error");
              });
              document.querySelector(".lav-error-txt")?.remove();
            } else {
              activated = false;
              document.querySelectorAll(".lav-sticky__btn_price .lav-product-price").forEach((el) => {
                if (window.innerWidth > 768) {
                  if (el.classList.contains("lav-desk")) {
                    el.style.display = "none";
                  }
                } else {
                  if (el.classList.contains("lav-mob")) {
                    el.style.display = "none";
                  }
                }
              });
              document.querySelector(".lav-sticky__btn svg").style.display = "none";
              document.querySelector("[data-add-to-cart]").style.display = "none";
              if (document.querySelector(".lav-select_size")) {
                document.querySelector(".lav-select_size").style.display = "flex";
              }
            }

            if (e.currentTarget.closest(".select_size_sticky")) {
              document.querySelector(".variant-wrapper.ring_size_var select").value = document.querySelector(".select_size_sticky select").value;
            }
            if (e.currentTarget.closest(".ring_size_var")) {
              document.querySelector(".select_size_sticky select").value = document.querySelector(".variant-wrapper.ring_size_var select").value;
            }
          });
        });
      } else {
        activated = true;
        document.querySelector(".lav-sticky").classList.add("none_size");
        document.querySelectorAll(".lav-sticky__btn_price .lav-product-price").forEach((el) => {
          if (window.innerWidth > 768) {
            if (el.classList.contains("lav-desk")) {
              el.style.display = "block";
            }
          } else {
            if (el.classList.contains("lav-mob")) {
              el.style.display = "block";
            }
          }
        });
      }

      if (document.querySelector(".lav-select_size")) {
        document.querySelector(".lav-select_size").addEventListener("click", (e) => {
          const el = document.querySelector(".variant-wrapper.ring_size_var");
          const offset = el.getBoundingClientRect().top + window.scrollY - 180;
          document.querySelectorAll(".ring_size_var select").forEach((el) => {
            el.classList.add("lav-error");
          });
          if (!document.querySelector(".lav-error-txt")) {
            document.querySelector(".variant-wrapper.ring_size_var select").insertAdjacentHTML("afterend", `<span class="lav-error-txt">Please select your size</span>`);
          }
          window.scrollTo({
            top: offset,
            behavior: "smooth",
          });
        });
      }

      document.querySelector(".lav-sticky__btn").addEventListener("click", () => {
        if (activated) {
          isAddCart = true;
          localStorage.setItem("stickyBtn", "yes");
          document.querySelector("button.add-to-cart").click();
          setTimeout(() => {
            isAddCart = false;
          }, 200);
        } else {
          const el = document.querySelector(".variant-wrapper.ring_size_var");
          const offset = el.getBoundingClientRect().top + window.scrollY - 180;
          document.querySelectorAll(".ring_size_var select").forEach((el) => {
            el.classList.add("lav-error");
          });
          if (!document.querySelector(".lav-error-txt")) {
            document.querySelector(".variant-wrapper.ring_size_var select").insertAdjacentHTML("afterend", `<span class="lav-error-txt">Please select your size</span>`);
          }
          window.scrollTo({
            top: offset,
            behavior: "smooth",
          });
        }
      });

      waitFor(
        () => document.querySelector(".product__price .money")?.innerText,
        () => {
          for (let spot of document.querySelectorAll(".lav-product-price")) {
            spot.innerText = document.querySelector(".product__price .money").innerText.trim();
          }
        }
      );

      const obs = new MutationObserver((muts) => {
        for (let mut of muts) {
          if (mut.target.classList.contains("money")) {
            document.querySelectorAll(".lav-sticky__btn_price .lav-product-price").forEach((el) => {
              el.innerText = mut.target.innerText.trim();
            });
            document.querySelector(".lav-sticky__price-new").innerText = mut.target.innerText.trim();
            handeGetYourMoneyOff();
            setInterval(() => {
              handleExtend();
            }, 500);
          }
        }
      });
      obs.observe(document.querySelector(".product__price:not(.product__price--compare)"), {
        childList: true,
        subtree: true,
        characterData: true,
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

    // *** Utils *** //
    // Waiting for loading by condition
    function waitFor(condition, cb, ms = 1000) {
      if (condition()) {
        if (typeof cb == "function") cb();
        return;
      }

      let interval = setInterval(function () {
        if (condition()) {
          clearInterval(interval);
          if (typeof cb == "function") cb();
        }
      }, ms);
    }

    // Mutation Observer
    function initObserver(cb, removedCb) {
      let observer = new MutationObserver((mutations) => {
        for (let mutation of mutations) {
          for (let node of mutation.addedNodes) {
            if (!(node instanceof HTMLElement)) continue;

            cb(node);
          }

          for (let node of mutation.removedNodes) {
            if (!(node instanceof HTMLElement)) continue;

            removedCb(node);
          }
        }
      });

      waitFor(
        () => document.body,
        () => {
          observer.observe(document.body, { childList: true, subtree: true });
        },
        100
      );
    }
  }
}, 100);
