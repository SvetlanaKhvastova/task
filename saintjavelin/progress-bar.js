// style
let styleQ = `
<style>
  .range-wrapper {
      max-width: 845px;
      width: 100%;
      margin: 87px auto 38px;
      position: relative;
      height: 48px;
      display: flex;
      align-items: center;
      border-radius: 15px;
      padding: 0 8px;
  }
  .range-line {
      background: #F6F6F6;
      width: 100%;
      position: relative;
      height: 18px;
      overflow: hidden;
  }
  .range-donated {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      background: #FED631;
  }
  .range-wrapper:before, .range-wrapper:after  {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      height: 18px;
      background: #FED631;
      width: 8px;
  }
  .range-wrapper:before {
      border-radius: 15px 0 0 15px;
      left: 0;
  }
  .range-wrapper:after {
      background: #F6F6F6;
      border-radius: 0 15px 15px 0;
      right: 0;
  }
  .range-wrapper.active:after {
      background: #FED631;
  }
  .range-wrapper .sum, .step.active[data-price]:before  {
      font-family: 'Novarese-Bold', sans-serif;
      font-weight: 700;
      font-size: 20px;
      line-height: 22px;
      color: #000000;
      position: absolute;
      text-align: center;
      width: 101px;
      right: 8px;
      transform: translateX(50%);
      bottom: calc(100% + 7px);
  }
  .step.active[data-price]:before {
      content: attr(data-price);
  }
  .steps .step.step-small.active[data-price]:before {
      bottom: calc(100% + 47px);
  }
  .step.active[data-price]:after {
      content: 'NOW';
      left: 50%;
      transform: translateX(-50%);
      top: calc(100% + 9px);
      position: absolute;
      font-family: 'Novarese-Medium', sans-serif;
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
      color: #000000;
      white-space: nowrap;
  }
  .steps {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      padding: 0 8px;
      z-index: 1;
  }
  .steps .step {
      width: 1px;
      opacity: 0.2;
      background: #000;
      position: relative;
  }
  .steps:after {
      content: '30 NOV';
      right: 8px;
      transform: translateX(50%);
      position: absolute;
      top: calc(100% + 9px);
      font-family: 'Novarese-Medium', sans-serif;
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
      color: #000000;
      white-space: nowrap;
  }
  .steps .step.active {
      opacity: 1;
  }
  .steps .step-small {
      height: 8px;
  }
  .steps .step-big {
      height: 48px;
  }
  /*flex*/
  .flex {
      display: flex;
  }
  .items-end {
      align-items: flex-end;
  }
  .justify-between {
      justify-content: space-between;
  }
</style>`

// html
let progressBarHTML = `
    <div class="range-wrapper">
        <div class="range-line">
          <div class="range-donated" style="width:0%"></div>
        </div>
        <div class="steps flex justify-between items-end"></div>
        <p class="sum"></p>
     </div>`

fetch("https://conversionrate.top/api/saint-javelin/total-donorbox", {
    headers: {
        'Content-Type': 'application/json',
    },
    method: "GET",
}).then(res => res.json()).then(data => {
    console.log(data)

    // add on page
    document.body.insertAdjacentHTML('afterbegin', styleQ);
    document.body.insertAdjacentHTML('afterbegin', progressBarHTML);

    let donated = +data[0]['total_raised'],
        sum = +data[0]['goal_amt'],
        rangeDonated = donated * 100 / sum,
        wand = rangeDonated * 90 / 100,
        indexWand = donated < 15000 ? 0 : Math.floor(wand);

    let step = ``;

    for (let i = 0; i < 91; i++) {
        step += `<div class="step ${i <= indexWand ? 'active' : ''} ${i % 9 ? 'step-small' : 'step-big'}"></div>`
    }

    document.querySelector('.steps').innerHTML = step;
    document.querySelector('.range-donated').style = `width: ${donated <= 10000 ? 0 : donated < 15000 ? 0.5 : rangeDonated}%`;
    document.querySelector('.sum').innerHTML = '$' + new Intl.NumberFormat('ru-RU').format(sum.toFixed(0));

    let stepActive = document.querySelectorAll('.step.active');
    if (donated > (sum * 88 / 100)) {
        stepActive[79].setAttribute('data-price', '$' + new Intl.NumberFormat('ru-RU').format(donated));
    } else {
        stepActive[indexWand].setAttribute('data-price', '$' + new Intl.NumberFormat('ru-RU').format(donated));
    }
    if (donated >= sum) {
        document.querySelector('.range-wrapper').classList.add('active');
    }

}).catch((error) => {
    console.error('Error:', error);
});