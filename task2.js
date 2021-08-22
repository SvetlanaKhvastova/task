let styleSet = /*html*/ `
<style>

.hidden {
  display: none;
}

.accent-text-random{
color:#E62B8A;
}

.price-more{
font-weight:700;
}

.delivery-box-mobile{
display: flex;
justify-content:center;
margin-top:14px;
margin-bottom:13px;
font-weight: 400;
font-size: 14px;
line-height: 1;
align-items: center;
text-align: center;
color: #2C8081;
}

 .text-block{
margin-left: 0.7em;
}
    
.text-block-more{
line-height: 1.7;
width:208px;
margin-left: 1em;
text-align: start;
}

.information-box-mobile{
padding:0;
margin-top:20px;
margin-bottom:28px;
text-align: center;
list-style: none;
font-weight: 400;
font-size: 12px;
line-height: 1.17;
color: #8E8E8E;
}

.list-text:first-child{
margin-bottom:8px;
}

.params-span{
font-weight: 600;
font-size: 13px;
}

<!-- Desktop -->

.price {
position: relative;
}

.controls{
align-items:center;
}

.delivery-box{
display: block;
position: absolute;
top: 0;
right: 0;
padding:20px;
width:180px;
border:2px dashed #E5E5E5;

font-weight: 400;
font-size: 14px;
line-height: 1.4;
align-items: center;
text-align: center;
color: #2C8081;
}

.text-span{
display: block;
color:#E62B8A;
}

.information-box{
text-align:start;
margin:0;
padding:0;
list-style: none;
font-weight: 400;
font-size: 12px;
line-height: 1.17;
color: #8E8E8E;
}

</style>
`;

document.head.insertAdjacentHTML("beforeend", styleSet);

hurryUp();

if (window.innerWidth <= 768) {
  if (document.querySelector("delivery-box") || document.querySelector("information-box")) {
    document.querySelector("delivery-box").classList.add = "hidden";
    document.querySelector("information-box").classList.add = "hidden";
  }
  mobileVersion();
} else {
  if (document.querySelector("delivery-box-mobile") || document.querySelector("information-box-mobile")) {
    document.querySelector("delivery-box-mobile").classList.add = "hidden";
    document.querySelector("information-box-mobile").classList.add = "hidden";
  }
  desktopVersion();
}

// Hurry up
function hurryUp() {
  if (document.querySelector(".stock.instock")) {
    document.querySelector(".stock.instock").innerHTML = `<p>Hurry up! Only <span class="accent-text-random">${getRandomIntInclusive(1, 9)} left</span> in Stock.</p>`;
  }
  function getRandomIntInclusive(min, max) {
    minNamber = Math.ceil(min);
    maxNamber = Math.floor(max);
    return Math.floor(Math.random() * (maxNamber - minNamber + 1) + minNamber); //max and min includes
  }
}

// includesText
function includesText(text, informationBox) {
  if (text.innerText.toLowerCase().includes("model height") || text.innerText.toLowerCase().includes("is wearing")) {
    let paramsSpan = text.innerText.toLowerCase().includes(": ") ? text.innerText.split(": ") : text.innerText.split("size ");
    let and = text.innerText.toLowerCase().includes(": ") ? ": " : "size ";
    document
      .querySelector(`.${informationBox}`)
      .insertAdjacentHTML("beforeend", `<li class="list-text">${paramsSpan[0]}${and}<span class="params-span">${paramsSpan[1]}</span></li>`);
  }
}

// Mobile
function mobileVersion() {
  console.log(`mobileVersion`);

  // deliveryBoxMobile
  let deliveryBoxMoreMobile = /*html*/ `
<div class="delivery-box-mobile">
  <svg width="30" height="20.62" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 0v1.875h17.813v14.063H12.04c-.418-1.612-1.867-2.813-3.604-2.813-1.736 0-3.185 1.2-3.603 2.813H3.75V11.25H1.875v6.563h2.959c.418 1.611 1.867 2.812 3.604 2.812 1.736 0 3.185-1.2 3.603-2.813h7.793c.418 1.612 1.867 2.813 3.604 2.813 1.736 0 3.185-1.2 3.603-2.813H30v-7.646l-.06-.147-1.874-5.625-.203-.644h-8.175V0H0zm.938 3.75v1.875h8.437V3.75H.937zm18.75 1.875h6.825l1.612 4.805v5.508h-1.084c-.418-1.612-1.867-2.813-3.604-2.813-1.736 0-3.185 1.2-3.603 2.813h-.146V5.624zM1.875 7.5v1.875H7.5V7.5H1.875zM8.438 15a1.86 1.86 0 011.874 1.875 1.86 1.86 0 01-1.874 1.875 1.86 1.86 0 01-1.876-1.875A1.86 1.86 0 018.438 15zm15 0a1.86 1.86 0 011.875 1.875 1.86 1.86 0 01-1.875 1.875 1.86 1.86 0 01-1.875-1.875A1.86 1.86 0 0123.438 15z"
      fill="#2C8081"
    />
  </svg>
  <p class="text-block-more">
    You've got to spend <span class="price-more">£30</span> more to get <span class="accent-text-random">FREE SHIPPING</span> for this order
  </p>
</div>
`;

  let deliveryBoxMobile = /*html*/ `
<div class="delivery-box-mobile">
    <svg width="30" height="20.62" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0v1.875h17.813v14.063H12.04c-.418-1.612-1.867-2.813-3.604-2.813-1.736 0-3.185 1.2-3.603 2.813H3.75V11.25H1.875v6.563h2.959c.418 1.611 1.867 2.812 3.604 2.812 1.736 0 3.185-1.2 3.603-2.813h7.793c.418 1.612 1.867 2.813 3.604 2.813 1.736 0 3.185-1.2 3.603-2.813H30v-7.646l-.06-.147-1.874-5.625-.203-.644h-8.175V0H0zm.938 3.75v1.875h8.437V3.75H.937zm18.75 1.875h6.825l1.612 4.805v5.508h-1.084c-.418-1.612-1.867-2.813-3.604-2.813-1.736 0-3.185 1.2-3.603 2.813h-.146V5.624zM1.875 7.5v1.875H7.5V7.5H1.875zM8.438 15a1.86 1.86 0 011.874 1.875 1.86 1.86 0 01-1.874 1.875 1.86 1.86 0 01-1.876-1.875A1.86 1.86 0 018.438 15zm15 0a1.86 1.86 0 011.875 1.875 1.86 1.86 0 01-1.875 1.875 1.86 1.86 0 01-1.875-1.875A1.86 1.86 0 0123.438 15z" fill="#2C8081"/></svg>
    <p class="text-block">You've got <span class="accent-text-random">FREE SHIPPING</span> for this order</p>
</div>
`;

  if (document.querySelector(".upc")) {
    let now = "rrp";

    if (document.querySelector(".price .now")) {
      now = "now";
    }

    //   let b = +document.querySelector("dd.total").innerText.split("£")[1];
    if (document.querySelector(`.${now}`).innerText.split("£")[1] < 50) {
      // NOT FREE SHIPPING
      document.querySelector(".upc").insertAdjacentHTML("afterend", deliveryBoxMoreMobile);
      let a = 50 - document.querySelector(`.${now}`).innerText.split("£")[1];
      document.querySelector(".price-more").innerText = `£${a}`;
    } else {
      // FREE SHIPPING
      document.querySelector(".upc").insertAdjacentHTML("afterend", deliveryBoxMobile);
    }
  }

  // informationBox
  if (document.querySelector(".controls")) {
    document.querySelector(".controls").insertAdjacentHTML("afterend", `<ul class="information-box-mobile"></ul>`);
    document.querySelectorAll(".col-sm-8 li").forEach((text) => {
      let informationBox = "information-box-mobile";
      includesText(text, informationBox);
    });
  }

  if (document.querySelector(".information-box-mobile")) {
    if (document.querySelector(".information-box-mobile").children.length === 0) {
      document.querySelector(".information-box-mobile").classList.add = "hidden";
    }
  }
}

// Desktop;
function desktopVersion() {
  console.log(`desktopVersion`);

  // deliveryBox
  let deliveryBoxMore = /*html*/ `
<div class="delivery-box">
    <svg width="30" height="21" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-delivery"><path d="M0 0v1.875h17.813v14.063H12.04c-.418-1.612-1.867-2.813-3.604-2.813-1.736 0-3.185 1.2-3.603 2.813H3.75V11.25H1.875v6.563h2.959c.418 1.611 1.867 2.812 3.604 2.812 1.736 0 3.185-1.2 3.603-2.813h7.793c.418 1.612 1.867 2.813 3.604 2.813 1.736 0 3.185-1.2 3.603-2.813H30v-7.646l-.06-.147-1.874-5.625-.203-.644h-8.175V0H0zm.938 3.75v1.875h8.437V3.75H.937zm18.75 1.875h6.825l1.612 4.805v5.508h-1.084c-.418-1.612-1.867-2.813-3.604-2.813-1.736 0-3.185 1.2-3.603 2.813h-.146V5.624zM1.875 7.5v1.875H7.5V7.5H1.875zM8.438 15a1.86 1.86 0 011.874 1.875 1.86 1.86 0 01-1.874 1.875 1.86 1.86 0 01-1.876-1.875A1.86 1.86 0 018.438 15zm15 0a1.86 1.86 0 011.875 1.875 1.86 1.86 0 01-1.875 1.875 1.86 1.86 0 01-1.875-1.875A1.86 1.86 0 0123.438 15z" fill="#2C8081"/></svg>
    <p class="text-block-more-desktop">
        You've got to spend <span class="price-more">£30</span> more to get <br><span class="text-span">FREE SHIPPING</span><br>for this order
    </p>
</div>
`;

  let deliveryBox = /*html*/ `
<div class="delivery-box">
    <svg width="30" height="21" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-delivery"><path d="M0 0v1.875h17.813v14.063H12.04c-.418-1.612-1.867-2.813-3.604-2.813-1.736 0-3.185 1.2-3.603 2.813H3.75V11.25H1.875v6.563h2.959c.418 1.611 1.867 2.812 3.604 2.812 1.736 0 3.185-1.2 3.603-2.813h7.793c.418 1.612 1.867 2.813 3.604 2.813 1.736 0 3.185-1.2 3.603-2.813H30v-7.646l-.06-.147-1.874-5.625-.203-.644h-8.175V0H0zm.938 3.75v1.875h8.437V3.75H.937zm18.75 1.875h6.825l1.612 4.805v5.508h-1.084c-.418-1.612-1.867-2.813-3.604-2.813-1.736 0-3.185 1.2-3.603 2.813h-.146V5.624zM1.875 7.5v1.875H7.5V7.5H1.875zM8.438 15a1.86 1.86 0 011.874 1.875 1.86 1.86 0 01-1.874 1.875 1.86 1.86 0 01-1.876-1.875A1.86 1.86 0 018.438 15zm15 0a1.86 1.86 0 011.875 1.875 1.86 1.86 0 01-1.875 1.875 1.86 1.86 0 01-1.875-1.875A1.86 1.86 0 0123.438 15z" fill="#2C8081"/></svg>
    <p class="text-block-desktop">You've got <br><span class="text-span">FREE SHIPPING</span><br>for this order</p>
</div>
`;

  if (document.querySelector("#variants .price")) {
    let now = "rrp";

    if (document.querySelector(".price .now")) {
      now = "now";
    }

    //   let b = +document.querySelector("dd.total").innerText.split("£")[1];

    if (document.querySelector(`.${now}`).innerText.split("£")[1] < 50) {
      // NOT FREE SHIPPING
      document.querySelector(".price").insertAdjacentHTML("beforeend", deliveryBoxMore);
      let a = 50 - document.querySelector(`.${now}`).innerText.split("£")[1];
      document.querySelector(".price-more").innerText = `£${a}`;
    } else {
      // FREE SHIPPING
      document.querySelector(".price").insertAdjacentHTML("beforeend", deliveryBox);
    }
  }

  // informationBox
  if (document.querySelector(".col-sm-8 li")) {
    document.querySelector(".controls").insertAdjacentHTML("beforeend", `<ul class="information-box"></ul>`);

    document.querySelectorAll(".col-sm-8 li").forEach((text) => {
      let informationBox = "information-box";
      includesText(text, informationBox);
    });
  }

  if (document.querySelector(".information-box")) {
    if (document.querySelector(".information-box").children.length === 0) {
      document.querySelector(".information-box").classList.add = "hidden";
    }
  }
}
