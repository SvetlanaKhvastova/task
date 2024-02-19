console.log("%c EXP: Sunvalue: Introduce solar savings and build trust through the funnel (DEV: SKh)", "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;");

const $$el = (selector) => document.querySelectorAll(selector);
const $el = (selector) => document.querySelector(selector);
const git = "https://conversionratestore.github.io/projects/";

const clarityInterval = setInterval(function () {
  if (typeof clarity == "function") {
    clearInterval(clarityInterval);
    // clarity('set', 'exp_valu_prop', 'variant_1')
  }
}, 200);

function waitForElement(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true,
    });
  });
}

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

const dataState = new Promise((resolve, reject) => {
  fetch("https://raw.githubusercontent.com/millbj92/US-Zip-Codes-JSON/master/USCities.json")
    .then((data) => data.json())
    .then((data) => resolve(data));
});

const device = window.innerWidth < 769 ? "mobile" : "desktop";

const icons = {
  flashCircle: /* HTML */ `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M11.9697 2C6.44973 2 1.96973 6.48 1.96973 12C1.96973 17.52 6.44973 22 11.9697 22C17.4897 22 21.9697 17.52 21.9697 12C21.9697 6.48 17.4997 2 11.9697 2ZM15.7197 12.35L11.9997 16.58L11.5597 17.08C10.9497 17.77 10.4497 17.59 10.4497 16.66V12.7H8.74973C7.97973 12.7 7.76973 12.23 8.27973 11.65L11.9997 7.42L12.4397 6.92C13.0497 6.23 13.5497 6.41 13.5497 7.34V11.3H15.2497C16.0197 11.3 16.2297 11.77 15.7197 12.35Z" fill="#FB7306" />
    </svg>
  `,
  clipBoard: /* HTML */ `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M14.3498 2H9.64977C8.60977 2 7.75977 2.84 7.75977 3.88V4.82C7.75977 5.86 8.59977 6.7 9.63977 6.7H14.3498C15.3898 6.7 16.2298 5.86 16.2298 4.82V3.88C16.2398 2.84 15.3898 2 14.3498 2Z" fill="#FB7306" />
      <path d="M17.24 4.82001C17.24 6.41001 15.94 7.71001 14.35 7.71001H9.65004C8.06004 7.71001 6.76004 6.41001 6.76004 4.82001C6.76004 4.26001 6.16004 3.91001 5.66004 4.17001C4.25004 4.92001 3.29004 6.41001 3.29004 8.12001V17.53C3.29004 19.99 5.30004 22 7.76004 22H16.24C18.7 22 20.71 19.99 20.71 17.53V8.12001C20.71 6.41001 19.75 4.92001 18.34 4.17001C17.84 3.91001 17.24 4.26001 17.24 4.82001ZM12.38 16.95H8.00004C7.59004 16.95 7.25004 16.61 7.25004 16.2C7.25004 15.79 7.59004 15.45 8.00004 15.45H12.38C12.79 15.45 13.13 15.79 13.13 16.2C13.13 16.61 12.79 16.95 12.38 16.95ZM15 12.95H8.00004C7.59004 12.95 7.25004 12.61 7.25004 12.2C7.25004 11.79 7.59004 11.45 8.00004 11.45H15C15.41 11.45 15.75 11.79 15.75 12.2C15.75 12.61 15.41 12.95 15 12.95Z" fill="#FB7306" />
    </svg>
  `,
  home: /* HTML */ `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
      <path d="M22.7856 8.86392L19.6274 6.20224V2.42233C19.6274 2.03217 19.3112 1.71594 18.921 1.71594H16.6823C16.2921 1.71594 15.9758 2.03217 15.9758 2.42233V3.12303L12.616 0.291769C12.26 -0.0367502 11.7213 -0.0367502 11.3745 0.291769L1.21396 8.86392C0.940095 9.11942 0.848824 9.51206 0.985787 9.86796C1.12275 10.215 1.4604 10.4432 1.83483 10.4432H3.30441V21.0417C3.30441 21.5438 3.7153 21.9546 4.21734 21.9546H19.7822C20.2842 21.9546 20.695 21.5438 20.695 21.0417V10.4432H22.1648C22.539 10.4432 22.8769 10.215 23.0138 9.85883C23.1507 9.51206 23.0594 9.11942 22.7856 8.86392ZM12.689 18.6358C12.2964 19.1744 11.4931 19.1744 11.0915 18.6358C9.8317 16.9014 7.51296 13.4871 7.51296 11.7343C7.51296 9.32439 9.47563 7.36156 11.8948 7.36156C14.314 7.36156 16.2767 9.32439 16.2767 11.7343C16.2767 13.4871 13.9579 16.9014 12.689 18.6358Z" fill="#FB7306" />
      <path d="M11.8942 13.04C12.9026 13.04 13.7201 12.2225 13.7201 11.2142C13.7201 10.2058 12.9026 9.38831 11.8942 9.38831C10.8858 9.38831 10.0684 10.2058 10.0684 11.2142C10.0684 12.2225 10.8858 13.04 11.8942 13.04Z" fill="#FB7306" />
    </svg>
  `,
  securitySafe: /* HTML */ `
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <path d="M21.4098 11.12V6.73001C21.4098 5.91001 20.7898 4.98001 20.0198 4.67001L14.4498 2.39001C13.1998 1.88001 11.7898 1.88001 10.5398 2.39001L4.96984 4.67001C4.20984 4.98001 3.58984 5.91001 3.58984 6.73001V11.12C3.58984 16.01 7.13984 20.59 11.9898 21.93C12.3198 22.02 12.6798 22.02 13.0098 21.93C17.8598 20.59 21.4098 16.01 21.4098 11.12ZM13.2498 12.87V15.5C13.2498 15.91 12.9098 16.25 12.4998 16.25C12.0898 16.25 11.7498 15.91 11.7498 15.5V12.87C10.7398 12.55 9.99984 11.61 9.99984 10.5C9.99984 9.12001 11.1198 8.00001 12.4998 8.00001C13.8798 8.00001 14.9998 9.12001 14.9998 10.5C14.9998 11.62 14.2598 12.55 13.2498 12.87Z" fill="#FB7306" />
    </svg>
  `,
  tickCircle: /* HTML */ `
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M11.0002 1.83334C5.94933 1.83334 1.8335 5.94918 1.8335 11C1.8335 16.0508 5.94933 20.1667 11.0002 20.1667C16.051 20.1667 20.1668 16.0508 20.1668 11C20.1668 5.94918 16.051 1.83334 11.0002 1.83334ZM15.3818 8.89168L10.1843 14.0892C10.056 14.2175 9.88183 14.2908 9.6985 14.2908C9.51516 14.2908 9.341 14.2175 9.21266 14.0892L6.6185 11.495C6.35266 11.2292 6.35266 10.7892 6.6185 10.5233C6.88433 10.2575 7.32433 10.2575 7.59016 10.5233L9.6985 12.6317L14.4102 7.92001C14.676 7.65418 15.116 7.65418 15.3818 7.92001C15.6477 8.18584 15.6477 8.61668 15.3818 8.89168Z" fill="#83BE63" />
    </svg>
  `,
};

const dataSavings = {
  $50: ["$13,498", "$14,442", "$944"],
  $100: ["$21,785", "$29,464", "$7,679"],
  $150: ["$30,060", "$44,487", "$14,427"],
  $200: ["$38,202", "$59,510", "$21,308"],
  $250: ["$46,503", "$74,533", "$28,03"],
  $300: ["$54,828", "$89,556", "$34,728"],
  $350: ["$63,189", "$104,578", "$41,389"],
  $400: ["$71,569", "$119,601", "$48,032"],
  $450: ["$80,013", "$134,624", "$54,611"],
  $500: ["$88,495", "$149,647", "$61,152"],
  $550: ["$96,977", "$164,670", "$68,075"],
  $600: ["$104,918", "$179,692", "$74,775"],
  $650: ["$113,241", "$194,715", "$81,474"],
  $700: ["$121,565", "$209,738", "$88,173"],
  $750: ["$129,889", "$224,761", "$94,872"],
  $800: ["$138,212", "$239,784", "$101,571"],
};

function roundToNearestMultiple(number) {
  // Визначення множника
  const multiple = number < 100 ? 5 : 50;

  // Округлення до найближчого більшого числа, кратного множнику
  return Math.ceil(number / multiple) * multiple;
}

class changeFlow {
  constructor(device) {
    this.device = device;
    this.startTime = 0;
    this.startTimeInterval;
    this.init();
  }

  init() {
    this.updateRangeSlider();
    this.changeSlides();
  }

  poweredByHtml() {
    const poweredByStyle = /* HTML */ `
      <style>
        .powered_by_wrapper {
          display: flex;
          padding: 3px 50px 6px 50px;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0) -0.23%, rgba(237, 242, 245, 0.8) 32.32%, rgba(237, 242, 245, 0.8) 66.9%, rgba(255, 255, 255, 0) 99.77%);
          color: #2b3d50;
          font-family: "Noto Sans SC";
          font-size: 14px;
          font-weight: 400;
          line-height: 26px;
        }
        @media (max-width: 768px) {
        }
      </style>
    `;
    const poweredByHtml = /* HTML */ `
      ${poweredByStyle}
      <div class="powered_by_wrapper">
        <p>Powered by <img src="${git}/sunvalue/img/logo_project_sunroof.png" alt="logo project sunroof" /></p>
      </div>
    `;
    return poweredByHtml;
  }

  availableIncentivesHtml() {
    const availableIncentivesStyle = /* HTML */ `
      <style>
        .available_incentives_list li {
          display: flex;
          gap: 10px;
        }
        .available_incentives_list li p {
          color: #2b3d50;
          font-family: "Noto Sans SC";
          font-size: 14px;
          font-weight: 700;
          line-height: 20px;
          margin: 0;
        }
        @media (max-width: 768px) {
        }
      </style>
    `;
    const availableIncentivesHtml = /* HTML */ `
      ${availableIncentivesStyle}
      <div class="available_incentives_wrapper">
        <h2>Discover available incentives based on:</h2>
        <ul class="available_incentives_list">
          <li>${icons.flashCircle} Electricity usage</li>
          <li>${icons.clipBoard} Electricity provider</li>
          <li>${icons.home} House location</li>
        </ul>
      </div>
    `;
    return availableIncentivesHtml;
  }

  noPersonalInformationRequiredHtml() {
    const noPersonalInformationRequiredStyle = /* HTML */ `
      <style>
        .no_personal_inform_wrapper {
          display: flex;
          gap: 10px;
        }
        .no_personal_inform_wrapper p {
          color: #2b3d50;
          font-family: "Noto Sans SC";
          font-size: 14px;
          font-weight: 700;
          line-height: 20px;
          margin: 0;
        }
        @media (max-width: 768px) {
        }
      </style>
    `;
    const noPersonalInformationRequiredHtml = /* HTML */ `
      ${noPersonalInformationRequiredStyle}
      <div class="no_personal_inform_wrapper">
        <p>${icons.securitySafe} No personal information required</p>
      </div>
    `;
    return noPersonalInformationRequiredHtml;
  }
  savingsOnEnergyHtml() {
    const savingsOnEnergyStyle = /* HTML */ `
      <style>
        @media (max-width: 768px) {
        }
      </style>
    `;
    const savingsOnEnergyHtml = /* HTML */ `
      ${savingsOnEnergyStyle}
      <div class="savings_on_energy_wrapper">
        <p><img src="${git}/sunvalue/img/moneybox.svg" alt="moneybox" /> Up to 49%* savings on energy with solar</p>
      </div>
    `;
    return savingsOnEnergyHtml;
  }

  //change slides
  changeSlides() {
    waitForElement(".swiper-wrapper .swiper-slide").then((el) => {
      let steps = $$el(".swiper-wrapper .swiper-slide");
      steps[4].insertAdjacentHTML("afterend", `<li class="swiper-slide steps steps_loading" style="width: 965px; opacity: 0; transform: translate3d(-4942px, 0px, 0px); transition-duration: 0ms;"></li>`);
      waitForElement(".steps_loading").then((i) => {
        console.log(i);
        i.insertAdjacentHTML("afterend", `<li class="swiper-slide steps federal_credit" style="width: 965px; opacity: 0; transform: translate3d(-4942px, 0px, 0px); transition-duration: 0ms;"></li>`);
      });
      waitForElement(".federal_credit").then((i) => {
        i.insertAdjacentHTML("afterend", `<li class="swiper-slide steps monthly_bill" style="width: 965px; opacity: 0; transform: translate3d(-4942px, 0px, 0px); transition-duration: 0ms;"></li>`);
      });

      waitForElement(".monthly_bill").then((i) => {
        steps = $$el(".swiper-wrapper .swiper-slide");
        steps.forEach((element, index) => {
          console.log(element, index);
          const btn = element.querySelector("a.btn > span");
          const title = element.querySelector("h1.title");
          const container = element.querySelector(".container");
          const smallContainer = element.querySelector(".small-container");
          if (index == 0) {
            btn.textContent = "Discover Incentive Program";
            if (!el.querySelector(".available_incentives_wrapper")) {
              title.insertAdjacentHTML("afterend", this.availableIncentivesHtml());
            }

            if (!el.querySelector(".no_personal_inform_wrapper")) {
              smallContainer.insertAdjacentHTML("afterend", this.noPersonalInformationRequiredHtml());
            }

            waitForElement(".no_personal_inform_wrapper").then((el) => {
              if (!el.querySelector(".powered_by_wrapper")) {
                el.insertAdjacentHTML("afterend", this.poweredByHtml());
              }
            });

            dataState.then((data) => {
              let stringData = JSON.stringify(data);
              let findCity = stringData.split('"' + title.textContent.split(" ")[0].trim())[0];
              let findZipCodes = findCity.split('"zip_code":');
              let zipCode = findZipCodes[findZipCodes.length - 1].split(",")[0];
              const inputElement = $el("input#zip");
              inputElement.value = zipCode;
              inputElement.dispatchEvent(new Event("input", { bubbles: true }));
            });
          } else if (index == 3) {
            if (!el.querySelector(".savings_on_energy_wrapper")) {
              smallContainer.insertAdjacentHTML("afterend", this.savingsOnEnergyHtml());
            }
            if (!el.querySelector(".powered_by_wrapper")) {
              container.insertAdjacentHTML("beforeend", this.poweredByHtml());
            }
          } else if (index == 5) {
            element.insertAdjacentHTML("afterbegin", this.addAnalyzedInfo());
          }
        });
      });
    });
  }

  updateRangeSlider() {
    const rangeBlock = `
        <input type="range" min="100" value="300" max="800" step="50" name="monthly_elec" data-rangeslider>
        <div class="rangeslider-tooltip">$<output></output></div>
        <div class="sliderLegend">
            <p class="sliderLegendItem--start">$100</p>
            <p class="sliderLegendItem--end">$800+</p>
        </div>
    `;
    // Get the rangeslider instance
    let slider = $("#bill-slider");
    slider.html(rangeBlock);

    let changeSlider = 0;
    $("[data-rangeslider]").change(function (e) {
      if (changeSlider == 1) {
        const price = e.target.value;
        $(".crs_analyzing li:first-child b").html($(".rangeslider-tooltip").text());
        $(".crs_analyzing li:nth-child(2) span").html((price / 50) * 8);
      }
      changeSlider = 1;
    });

    initRangeSlider();
  }

  addAnalyzedInfo() {
    const style = /* HTML */ `
      <style>
        .crs_analyzing {
          padding: 0;
        }
        .crs_analyzing li {
          border-radius: 5px;
          background: #fff;
          margin: 0 0 12px 0;
          padding: 10px;
          list-style-type: none;
        }
        .crs_analyzing p {
          color: #4a4a4a;
          text-align: center;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
          margin: 0;
        }
        .crs_analyzing p b {
          color: #427596;
          font-size: 14px;
          font-weight: 700;
          line-height: 24px;
        }
        .crs_analyzing p:not(.flex-center) b {
          font-size: 24px;
          line-height: 36px;
        }
        .crs_analyzing p svg {
          flex-shrink: 0;
          margin-right: 8px;
          margin-top: 6px;
        }
        .crs_analyzing p span {
          padding-right: 5px;
        }
        .crs_analyzing p:first-child {
          margin-bottom: 4px;
        }
        .flex-center {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .crs_graphic {
          width: calc(100% - 16px);
          margin: 0 auto;
        }
        .crs_graphic p,
        .crs_thank .crs_analyzing .crs_graphic b {
          color: #4a4a4a;
          font-size: 12px;
          font-style: normal;
          font-weight: 700;
          line-height: 20px;
          padding: 0 8px 4px;
          text-align: left;
        }
        .crs_graphic_line {
          height: 42px;
          flex-shrink: 0;
          margin-bottom: 6px;
        }
        .crs_graphic_line span {
          display: block;
          text-align: right;
          line-height: 42px;
          color: #fff;
          font-family: "Noto Sans SC", sans-serif;
          font-size: 12px;
          font-style: normal;
          font-weight: 700;
          padding: 0 4px;
        }
        .crs_graphic_line.navy {
          background: #427596;
          margin-bottom: 10px;
        }
        .crs_graphic_line.green {
          background: #83be63;
        }

        .crs_analyzing h3 {
          color: #4a4a4a;
          font-family: "Noto Sans SC", sans-serif;
          font-size: 16px;
          font-style: normal;
          line-height: 24px;
        }
        @media (min-width: 770px) {
          .crs_analyzing h3 {
            margin: 0 0 24px 0;
          }
          .crs_analyzing li:last-child {
            padding: 24px 30px;
          }
          .crs_graphic {
            width: 100%;
          }
        }
      </style>
    `;
    const price = $(".rangeslider-tooltip").text(),
      costWit = dataSavings[price][0],
      costWithout = dataSavings[price][1],
      toPrice = roundToNearestMultiple(parseFloat(costWithout.replace(costWithout[0], "").split(",")[0]));

    console.log(costWit, `costWit>>>>>>>>>>>>>>>>>>.`);
    const html = /* HTML */ `
      ${style}
      <ul class="crs_analyzing">
        <li>
          <p>Your Latest Energy Bill</p>
          <p><b>${price}</b></p>
        </li>
        <li>
          <p>You will save:</p>
          <p><b>${dataSavings[price][2]}</b></p>
        </li>
        <li>
          <h3>Monthly bill:</h3>
          <div class="crs_graphic">
            <div>
              <p><b>Without solar</b></p>
              <div class="crs_graphic_line navy" style="width: ${(100 * parseFloat(costWithout.replace(costWithout[0], "").split(",")[0])) / toPrice}%">
                <span>${costWithout}</span>
              </div>
            </div>
            <div>
              <p><b>With solar</b></p>
              <div class="crs_graphic_line green" style="width: ${(100 * parseFloat(costWit.replace(costWit[0], "").split(",")[0])) / toPrice}%">
                <span>${costWit}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    `;

    return html;
  }
}

new changeFlow(device);
