let styleSet = /*html*/ `
 <style>
.text-span{
    display: block;
    color:#E62B8A;
    margin-top:5px;
    margin-bottom:5px;
}

.delivery-box{
padding:20px;
width:180px;
border:2px dashed #E5E5E5;

font-family: Lato;
font-weight: 400;
font-size: 14px;
line-height: 14px;
align-items: center;
text-align: center;
color: #2C8081;
}
  </style>
`;

let deliveryBox = /*html*/ `
<div class="delivery-box">
<p>You've got <br> <span class="text-span">FREE SHIPPING</span> <br> for this order</p>
</div>
`;

document.head.insertAdjacentHTML("beforeend", styleSet);

document.querySelector(".instock").textContent = `Hurry up! Only ${getRandomIntInclusive(1, 9)} left in Stock.`;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

getRandomIntInclusive(1, 9);

document.querySelector("#variants").insertAdjacentHTML("afterbegin", deliveryBox);
