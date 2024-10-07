let newStyle = /*html */ `
<style>
.o-page--simpleCard .o-page__mainContent {
  position: relative;
  margin-top: 160px !important;
}
.o-page--simpleCard .o-page__mainContent > .o-page__preContent {
  position: absolute;
  top: -130px;
}
#block-samsara-maintenancemessage,
#block-maintenancemessage{
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.15);
  padding: 12px 2em;
  width: 100%;
  margin: 0;
}
#block-samsara-maintenancemessage.block-block-contentb5dbe46b-4d13-44e4-81c8-9016e439dca2 > .field__item,
#block-maintenancemessage.block-block-contentb5dbe46b-4d13-44e4-81c8-9016e439dca2 > .field__item{
  position: relative;
  padding-left: 52px;
}
#block-samsara-maintenancemessage.block-block-contentb5dbe46b-4d13-44e4-81c8-9016e439dca2 .messages--status,
#block-maintenancemessage.block-block-contentb5dbe46b-4d13-44e4-81c8-9016e439dca2 .messages--status {
  padding: 0;
  background: unset;
  box-shadow: none;
  border: none;
  color: #555;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
}
#block-samsara-maintenancemessage.block-block-contentb5dbe46b-4d13-44e4-81c8-9016e439dca2 > .field__item::before,
#block-maintenancemessage.block-block-contentb5dbe46b-4d13-44e4-81c8-9016e439dca2 > .field__item::before {
  position: absolute;
  content: "";
  width: 40px;
  height: 40px;
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/kundalini_yoga_icon.svg) no-repeat;
  background-size: contain;
  top: 0;
  left: 0;
}
.new_link_var{
  color: #027DB8;
  font-weight: 700;
}
.new_link_click_here{
  max-width: max-content;
  display: block;
  color: #017922;
  font-weight: 700;
  text-decoration-line: underline;
  margin-top: 8px;
}
.o-page:not(.o-page--simpleCard) #block-samsara-maintenancemessage{
  margin: 2em auto;
  width: unset;
  border-radius: 0;
}
.o-page:not(.o-page--simpleCard) #block-maintenancemessage{
  margin: 0 auto 2em;
  width: unset;
  border-radius: 0;
}
.o-page:not(.o-page--simpleCard) .lp_var#block-maintenancemessage{
 margin: 0 auto;
}
.o-page:not(.o-page--simpleCard) #block-samsara-maintenancemessage.block-block-contentb5dbe46b-4d13-44e4-81c8-9016e439dca2 > .field__item,
.o-page:not(.o-page--simpleCard) #block-maintenancemessage.block-block-contentb5dbe46b-4d13-44e4-81c8-9016e439dca2 > .field__item{
  min-height: 50px;
  display: flex;
  align-items: center;
}
.o-page:not(.o-page--simpleCard) #block-samsara-maintenancemessage.block-block-contentb5dbe46b-4d13-44e4-81c8-9016e439dca2 > .field__item::before,
.o-page:not(.o-page--simpleCard) #block-maintenancemessage.block-block-contentb5dbe46b-4d13-44e4-81c8-9016e439dca2 > .field__item::before{
}
@media (max-width: 768px) {
  #block-samsara-maintenancemessage,
  #block-maintenancemessage{
    padding: 1em;
  }
  #block-samsara-maintenancemessage.block-block-contentb5dbe46b-4d13-44e4-81c8-9016e439dca2 .messages--status,
  #block-maintenancemessage.block-block-contentb5dbe46b-4d13-44e4-81c8-9016e439dca2 .messages--status{
    max-width: 315px;
  }
  .o-page--simpleCard .o-page__mainContent > .o-page__preContent {
    position: absolute;
    top: -164px;
  }
  .o-page--simpleCard .o-page__mainContent {
    margin-top: 180px !important;
  }
}

</style>
`;

document.head.insertAdjacentHTML("beforeend", newStyle);

let lookForBannerMessage = setInterval(() => {
  if (document.querySelector("#block-samsara-maintenancemessage") && !document.querySelector(".new_link_var")) {
    clearInterval(lookForBannerMessage);
    document.querySelector("#block-samsara-maintenancemessage.block-block-contentb5dbe46b-4d13-44e4-81c8-9016e439dca2 .messages--status").innerHTML = `
    Unlock the secrets of yoga's benefits with an exclusive <a class="new_link_var" href="https://www.doyogawithme.com/express-checkout/54?coupons=yoga3ny">40% off a 3-month premium</a> membership for new subscribers! <a class="new_link_click_here" href="https://www.doyogawithme.com/2024-ny-challenges?utm_campaign=ny">Click here to learn more.</a>
    `;
  }
}, 100);
let lookForBannerMessage2 = setInterval(() => {
  if (document.querySelector("#block-maintenancemessage") && !document.querySelector(".new_link_var")) {
    clearInterval(lookForBannerMessage2);
    document.querySelector("#block-maintenancemessage.block-block-contentb5dbe46b-4d13-44e4-81c8-9016e439dca2 .messages--status").innerHTML = `
    Unlock the secrets of yoga's benefits with an exclusive <a class="new_link_var" href="https://www.doyogawithme.com/express-checkout/54?coupons=yoga3ny">40% off a 3-month premium</a> membership for new subscribers! <a class="new_link_click_here" href="https://www.doyogawithme.com/2024-ny-challenges?utm_campaign=ny">Click here to learn more.</a>
    `;
  }
}, 100);
let lookForLandingPage = setInterval(() => {
  if (document.querySelector("#block-maintenancemessage") && window.location.pathname === "/2024-ny-challenges") {
    clearInterval(lookForLandingPage);
    if (!document.querySelector("#block-maintenancemessage").classList.contains("lp_var")) {
      document.querySelector("#block-maintenancemessage").classList.add("lp_var");
    }
  }
}, 100);
let lookForBtnNewlink = setInterval(() => {
  if (document.querySelector(".new_link_var")) {
    clearInterval(lookForBtnNewlink);
    document.querySelector(".new_link_var").addEventListener("click", (e) => {
      if (!e.target.getAttribute("data-test")) {
        pushDataLayer("exp_person_cont_40_off", "40% off a 3-month premium", "Link", "Banner");
      }
      e.target.setAttribute("data-test", "1");
      setTimeout(() => {
        if (e.target.getAttribute("data-test")) {
          e.target.removeAttribute("data-test");
        }
      }, 1000);
    });
  }
}, 100);
let lookForBtnNewlinkClickHere = setInterval(() => {
  if (document.querySelector(".new_link_click_here")) {
    clearInterval(lookForBtnNewlinkClickHere);
    document.querySelector(".new_link_click_here").addEventListener("click", (e) => {
      if (!e.target.getAttribute("data-test")) {
        pushDataLayer("exp_person_cont_40_off_learn_more", "Click here to learn more", "Link", "Banner");
      }
      e.target.setAttribute("data-test", "1");
      setTimeout(() => {
        if (e.target.getAttribute("data-test")) {
          e.target.removeAttribute("data-test");
        }
      }, 1000);
    });
  }
}, 100);

// test() {
//   type Category = {
//     type: 'category'
//     name: string
//     children: Element[]
//   }
//   type Item = {
//     type: 'item'
//     name: string
//     quantity?: number
//   }

//   type Element = Category | Item

//   const elements: Element[] = [
//     {
//       type: 'category',
//       name: 'Category1',
//       children: [
//         {
//           type: 'item',
//           name: 'Item1',
//           quantity: 20
//         },
//         {
//           type: 'item',
//           name: 'Item2',
//           quantity: 40
//         },
//         {
//           type: 'category',
//           name: 'Category2',
//           children: [
//             {
//               type: 'item',
//               name: 'Item2',
//               quantity: 60
//             }
//           ]
//         }
//       ]
//     },
//     {
//       type: 'category',
//       name: 'Category3',
//       children: []
//     },
//     {
//       type: 'item',
//       name: 'Item3'
//     }
//   ]

//   const getQuantity = (elements: Element[]): number => {
//     let q = 0
//     const stack = [...elements]

//     while (stack.length > 0) {
//       let first = stack.pop()
//       if (first) {
//         if (first.type === 'category') {
//           stack.push(...first.children)
//         } else {
//           q += first?.quantity ?? 0
//         }
//       }
//     }

//     return q
//   }

//   console.log(getQuantity(elements)) // 120
// }
