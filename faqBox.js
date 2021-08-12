let style12 = /*html*/ `
 <style>
.button-pop-up {
  position: fixed;
  bottom: 0;
  z-index: 99988;
  padding: 15px;

  width: 100%;

  border: none;
  background-color: #ffffff;
}

.box-btn-list {
  padding: 15px;

  width: 100%;

  border: none;
  background-color: #ffffff;
}

.btn-open-list {
  display: inline-block;

  width: 100%;

  height: 36px;

  font-size: 14px;
  line-height: 36px;

  text-align: center;
  text-transform: uppercase;
  text-decoration: none;

  border: none;
  outline: none;

  cursor: pointer;
  color: #ffffff;
  background: #2c8081;
}

.btn-open {
  display: inline-block;

  width: 100%;

  height: 36px;

  font-size: 14px;
  line-height: 36px;

  text-align: center;
  text-transform: uppercase;
  text-decoration: none;

  border: none;
  outline: none;

  cursor: pointer;
  color: #ffffff;
  background: #2c8081;
}

#salesfire-app {
  display: none;
}

.custom-add-to-bag {
  display: inline-block;
  margin-top: 24px;

  width: 100%;

  height: 36px;

  font-size: 14px;
  line-height: 36px;

  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  color: #ffffff;
  background: #2c8081;

  border: none;
  outline: none;
}

.modal-open {
  overflow: hidden;
}

.backdrop-modal {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99999;

  width: 100%;
  height: 100%;

  opacity: 1;
  overflow-y: scroll;

  background-color: rgba(0, 0, 0, 0.59);
}

.backdrop-modal.is-hidden {
  opacity: 0;
  pointer-events: none;
}

.modal-form {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;

  margin-right: auto;
  margin-left: auto;
  padding: 5px 15px 15px 15px;

  background-color: #fff;
}

.btn-close {
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  padding: 0;
  margin: 0;

  width: 33px;
  height: 33px;

  justify-content: center;
  align-items: center;
  border: 1px solid #f8f8f8;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  color: #8e8e8e;
  background-color: #f8f8f8;
}

.icon-close {
  fill: currentColor;
}

.hidden {
  display: none;
}

.label-to-pick-color {
  margin-bottom: 20px;
  text-align: center;

  font-family: Crimson Text;

  font-weight: 700;
  font-size: 20px;
  line-height: 22px;

  color: #000000;
}

.label-to-pick-size {
  margin-bottom: 20px;
  text-align: center;

  font-family: Crimson Text;

  font-weight: 700;
  font-size: 20px;
  line-height: 22px;

  color: #000000;
}

.border-bottom-span {
  display: flex;
  margin: auto auto 30px;

  width: 60px;
  height: 3px;

  border-radius: 7px;
  background: #8e8e8e;
}

.controls-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.controls-box .controls-btn {
  margin: 0 7px 15px;
  width: 32px;
  height: 32px;

  border-radius: 32px;
  outline: none;
  border: none;
}

.controls-box .active-controls {
  border: 3px solid #2c8081;
}

.color-variant {
  padding: 0 10.5px;
  margin: 0 7px 15px;

  min-width: 40px;
  font-size: 14px;
  line-height: 32px;

  outline: none;
  border: 1px solid #dedede;

  color: #333;
  background: #fff;
}

.controls-box .active-color-variant {
  border: 1px solid #2c8081;
  color: #fff;
  background: #2c8081;
}

.size-variant {
  padding: 0 10.5px;
  margin: 0 7px 15px;

  min-width: 40px;
  font-size: 14px;
  line-height: 32px;

  outline: none;
  border: 1px solid #dedede;

  color: #333;
  background: #fff;
}

.controls-box .active-size-variant {
  border: 1px solid #2c8081;
  color: #fff;
  background: #2c8081;
}

.disabled-btn {
  position: relative;
}

.disabled-btn::after {
  position: absolute;
  top: 50%;
  left: 0;
  content: "";
  width: 34px;
  border-top: solid 1px #333;
  transform-origin: center;
  transform: rotate(45deg);
}

.disabled-btn::before {
  position: absolute;
  top: 50%;
  left: 0;
  content: "";
  width: 34px;
  border-top: solid 1px #333;
  transform-origin: center;
  transform: rotate(-45deg);
}

  </style>
`;

let buttons = /*html*/ `
   <div class="button-pop-up">
      <button class="btn-open" data-modal-open>add to bag</button>
    </div>

    <div class="backdrop-modal is-hidden" data-modal>
      <form class="modal-form">
       <span class="border-bottom-span"></span>

        <button type="button" class="btn-close" data-modal-close>
          <svg
            class="icon-close"
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.90473 1.12841L5.59556 4.43758L8.96715 7.80917L7.79109 8.98522L4.41951 5.61364L1.12656 8.90659L0.068036 7.84807L3.36099 4.55512L0.0129204 1.20705L1.18897 0.0309971L4.53704 3.37906L7.84621 0.0698909L8.90473 1.12841Z"
              fill="#8E8E8E"
            />
          </svg>
        </button>

        <button class="custom-add-to-bag" type="button">Choose</button>
      </form>
    </div>
`;

let pickColor = /*html*/ `

<h3 class="label-to-pick-color">Pick a color</h3>

<div class="controls-box check-color">
  <!-- <button type="button" class="controls-btn active-controls"></button>
          <button type="button" class="controls-btn"></button> -->
</div>
`;

let pickSize = /*html*/ `
<h3 class="label-to-pick-size">Pick a size</h3>

<div class="controls-box check-size">
             <!-- <button type="button" class="size-variant active-size-variant">
            ONE SIZE
          </button>
          <button type="button" class="size-variant">O/S</button> -->
</div>
`;

document.head.insertAdjacentHTML("afterbegin", style12);

if (window.location.pathname !== "/departments/the-deli/alcoholic-drinks" && window.location.pathname !== "/departments/beauty/skin-care") {
  if (document.querySelector(".product-grid")) {
    createButtonList();
  }

  if (document.querySelector(".upc")) {
    openButtonPopUp();
  }

  function openButtonPopUp() {
    document.body.insertAdjacentHTML("afterbegin", buttons);
    document.querySelector("[data-modal-open]").addEventListener("click", toggleModal);
    document.querySelector("[data-modal-close]").addEventListener("click", toggleModal);

    document.querySelector(".custom-add-to-bag").addEventListener("click", function () {
      toggleModal();

      document.querySelector("#page_MainContent_product_detail_btnAddBag").click();
    });

    function toggleModal() {
      document.body.classList.toggle("modal-open");
      document.querySelector("[data-modal]").classList.toggle("is-hidden");
      document.querySelector("[data-modal-open]").classList.toggle("hidden");
    }

    document.querySelectorAll(".specifics label").forEach((el) => {
      if (el.innerText.toLowerCase().includes(`colour`)) {
        document.querySelector(".custom-add-to-bag").insertAdjacentHTML("beforebegin", pickColor);

        if (document.querySelectorAll(".variants.form .square").length > 0) {
          addSpanColor();
        } else {
          addBtnColorWithoutSpan();
        }

        function addSpanColor() {
          document.querySelectorAll(".variants.form .square").forEach((i) => {
            let active = "";
            let bg = i.style.background;
            let dizabledBtn = "";

            if (i.closest(`button`).classList.contains("on")) {
              active = "active-controls";
            }

            if (i.closest(`button`).getAttribute("disabled")) {
              dizabledBtn = "disabled-btn";
            }

            document
              .querySelector(".check-color")
              .insertAdjacentHTML("beforeend", ` <button type="button" class="controls-btn colors-btn ${active} ${dizabledBtn}" style='background: ${bg}'></button>`);

            document.querySelectorAll(".disabled-btn").forEach((item) => {
              item.setAttribute("disabled", "disabled");
            });
          });
        }

        function addBtnColorWithoutSpan() {
          let btnColorWithoutSpan = el.closest(".specifics").querySelectorAll(".controls button");

          btnColorWithoutSpan.forEach((i) => {
            let active = "";
            let textContent = i.textContent;
            let dizabledBtn = "";

            if (i.classList.contains("on")) {
              active = "active-color-variant";
            }

            if (i.getAttribute("disabled")) {
              dizabledBtn = "disabled-btn";
            }

            document.querySelector(".check-color").insertAdjacentHTML("beforeend", `<button type="button" class="color-variant colors-btn ${active}">${textContent}</button>`);

            document.querySelectorAll(".disabled-btn").forEach((item) => {
              item.setAttribute("disabled", "disabled");
            });
          });
        }
      }

      if (el.innerText.toLowerCase().includes(`size`)) {
        document.querySelector(".custom-add-to-bag").insertAdjacentHTML("beforebegin", pickSize);

        let btnSize = el.closest(".specifics").querySelectorAll(".controls button");

        function addSpanSize() {
          btnSize.forEach((i) => {
            let active = "";
            let textContent = i.textContent;
            let dizabledBtn = "";

            if (i.classList.contains("on")) {
              active = "active-size-variant";
            }

            if (i.closest(`button`).getAttribute("disabled")) {
              dizabledBtn = "disabled-btn";
            }

            document
              .querySelector(".check-size")
              .insertAdjacentHTML("beforeend", `<button type="button" class="size-variant size-variant-btn ${dizabledBtn} ${active}">${textContent}</button>`);

            document.querySelectorAll(".disabled-btn").forEach((item) => {
              item.setAttribute("disabled", "disabled");
            });
          });
        }

        addSpanSize();
      }
    });

    document.querySelectorAll(".colors-btn").forEach((color, index) => {
      let activeСontrols = "active-controls";

      if (document.querySelector(".active-color-variant")) {
        activeСontrols = "active-color-variant";
      }

      color.addEventListener("click", function () {
        if (!color.classList.contains(`${activeСontrols}`)) {
          document.querySelector(`.${activeСontrols}`).classList.remove(`${activeСontrols}`);
          color.classList.add(`${activeСontrols}`);

          document.querySelectorAll(".specifics label").forEach((el) => {
            if (el.innerText.toLowerCase().includes(`colour`)) {
              el.closest(`.specifics`).querySelectorAll("button")[index].click();
            }
          });
        }
      });
    });

    document.querySelectorAll(".size-variant-btn").forEach((size, index) => {
      size.addEventListener("click", function () {
        if (!size.classList.contains("active-size-variant")) {
          document.querySelector(".active-size-variant").classList.remove("active-size-variant");
          size.classList.add("active-size-variant");

          document.querySelectorAll(".specifics label").forEach((el) => {
            if (el.innerText.toLowerCase().includes(`size`)) {
              el.closest(".specifics").querySelectorAll(".controls button")[index].click();
            }
          });
        }
      });
    });

    function scroll() {
      window.addEventListener("scroll", () => {
        let scroll = document.documentElement.clientHeight;
        let offset = document.querySelector("#page_MainContent_product_detail_btnAddBag").getBoundingClientRect().top;

        if (scroll > offset) {
          document.querySelector(".button-pop-up").classList.add("hidden");
        }

        // console.log(`object`, document.querySelector("#page_MainContent_product_detail_btnAddBag").getBoundingClientRect());
      });
    }
    scroll();
  }

  function createButtonList() {
    let products = "products";

    if (document.querySelector(".ais-Hits-list")) {
      products = "ais-Hits-list";
    }

    document.querySelectorAll(`.${products}`).forEach((item) => {
      item.querySelectorAll("li").forEach((i) => {
        i.style.justifyContent = "space-between";
        i.insertAdjacentHTML(
          "beforeend",
          `<div class="box-btn-list">
        <button class="btn-open-list">add to bag</button>
      </div>`
        );
      });
    });
  }
}
