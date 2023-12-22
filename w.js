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
#block-samsara-maintenancemessage{
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.15);
  padding: 12px 2em;
  width: 100%;
  margin: 0;
}
#block-samsara-maintenancemessage.block-block-contentb5dbe46b-4d13-44e4-81c8-9016e439dca2 > .field__item{
  position: relative;
  padding-left: 52px;
}
#block-samsara-maintenancemessage.block-block-contentb5dbe46b-4d13-44e4-81c8-9016e439dca2 .messages--status {
  padding: 0;
  background: unset;
  box-shadow: none;
  border: none;
  color: #555;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
}
#block-samsara-maintenancemessage.block-block-contentb5dbe46b-4d13-44e4-81c8-9016e439dca2 > .field__item::before {
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
}
.o-page:not(.o-page--simpleCard) #block-samsara-maintenancemessage{
  border-radius: 0;
}
.o-page:not(.o-page--simpleCard) #block-samsara-maintenancemessage.block-block-contentb5dbe46b-4d13-44e4-81c8-9016e439dca2 > .field__item{
  min-height: 50px;
  display: flex;
  align-items: center;
}
.o-page:not(.o-page--simpleCard) #block-samsara-maintenancemessage.block-block-contentb5dbe46b-4d13-44e4-81c8-9016e439dca2 > .field__item::before{
}
@media (max-width: 768px) {
  #block-samsara-maintenancemessage{
    padding: 1em;
  }
  #block-samsara-maintenancemessage.block-block-contentb5dbe46b-4d13-44e4-81c8-9016e439dca2 .messages--status{
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
