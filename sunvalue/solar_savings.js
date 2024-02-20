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
  logo: /*html */ `
  <svg xmlns="http://www.w3.org/2000/svg" width="120" height="22" viewBox="0 0 120 22" fill="none">
    <g clip-path="url(#clip0_552_1313)">
      <path d="M6.38852 20.8911C2.59869 20.8911 0.10918 18.7271 0 15.8294H2.00361C2.16393 17.3963 3.32951 19.2947 6.38852 19.2947C9.01377 19.2947 10.557 17.7514 10.557 15.8029C10.557 10.2268 0.163279 13.7462 0.163279 6.6278C0.163279 3.70452 2.57213 1.56616 6.22623 1.56616C9.82623 1.56616 11.9921 3.56977 12.3167 6.16846H10.259C10.0426 4.84157 8.76984 3.21764 6.14459 3.19108C3.92459 3.16256 2.08426 4.38026 2.08426 6.57665C2.08426 12.0445 12.478 8.68747 12.478 15.7242C12.478 18.2953 10.3938 20.894 6.38754 20.894" fill="#393939"/>
      <path d="M27.8538 20.7023H25.9593V18.1006C24.9831 19.9529 23.0145 21.0639 20.9243 20.9423C17.5682 20.9423 14.9154 18.8846 14.9154 14.5537V5.92358H16.7843V14.3413C16.7843 17.6167 18.5705 19.2947 21.2774 19.2947C24.0384 19.2947 25.9603 17.5626 25.9603 13.9626V5.92358H27.8548L27.8538 20.7023Z" fill="#393939"/>
      <path d="M42.1732 12.2571C42.1732 8.98169 40.3869 7.30366 37.68 7.30366C34.9191 7.30366 32.9971 9.03579 32.9971 12.6358V20.7014H31.1027V5.91874H32.9971V8.43579C33.9989 6.61475 35.957 5.53032 38.0322 5.64726C41.3882 5.64726 44.041 7.70497 44.041 12.0358V20.7023H42.1722L42.1732 12.2571Z" fill="#393939"/>
      <path d="M59.7964 1.80908H63.8292L56.8997 20.7022H52.2984L45.3689 1.80908H49.4292L54.6266 16.8317L59.7964 1.80908Z" fill="#393939"/>
      <path d="M70.8954 5.46332C72.8371 5.39807 74.6876 6.28805 75.8488 7.84561V5.70725H79.6652V20.7023H75.8488V18.5099C74.6959 20.0981 72.8302 21.0108 70.8688 20.9463C67.079 20.9463 64.0475 17.8332 64.0475 13.1512C64.0475 8.46922 67.079 5.4643 70.8954 5.4643M71.8691 8.79381C69.839 8.79381 67.918 10.3095 67.918 13.1512C67.918 15.9928 69.8399 17.6177 71.8691 17.6177C73.9534 17.6177 75.8478 16.044 75.8478 13.2063C75.8478 10.3686 73.9534 8.79479 71.8691 8.79479" fill="#393939"/>
      <path d="M86.0823 0.672119H82.2925V20.7023H86.0823V0.672119Z" fill="#393939"/>
      <path d="M102.889 20.7024H99.0728V18.8079C97.9931 20.1645 96.3395 20.9361 94.6063 20.8922C91.1145 20.8922 88.5974 18.6181 88.5974 14.5037V5.70728H92.3873V13.9627C92.3873 16.3715 93.7131 17.6709 95.7168 17.6709C97.7735 17.6709 99.0728 16.3715 99.0728 13.9627V5.70728H102.889V20.7024Z" fill="#393939"/>
      <path d="M112.095 20.9463C107.737 20.9463 104.57 17.9148 104.57 13.2053C104.57 8.46926 107.656 5.46434 112.095 5.46434C114.089 5.36201 116.033 6.1114 117.442 7.5259C118.852 8.9404 119.594 10.8869 119.485 12.8807C119.489 13.3701 119.453 13.859 119.376 14.3424H108.414C108.426 15.2813 108.813 16.1763 109.49 16.8274C110.166 17.4785 111.075 17.8312 112.014 17.8066C113.295 17.8845 114.491 17.1626 115.018 15.9929H119.105C118.183 19.0579 115.292 21.1009 112.095 20.9463ZM108.442 11.7968H115.561C115.533 10.8893 115.136 10.0325 114.462 9.4246C113.787 8.8167 112.894 8.51037 111.989 8.57647C110.138 8.53677 108.58 9.95135 108.442 11.7968Z" fill="#393939"/>
    </g>
    <defs>
      <clipPath id="clip0_552_1313">
        <rect width="120" height="20.6557" fill="white" transform="translate(0 0.672119)"/>
      </clipPath>
    </defs>
  </svg>`,
  loader: /*html */ `
    <svg class="rotate_svg" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
      <g clip-path="url(#clip0_3504_3548)">
        <path d="M17.7273 29.9997C17.7273 28.4936 16.5062 27.2725 15 27.2725H4.09092C2.58474 27.2725 1.36365 28.4936 1.36365 29.9997C1.36365 31.5059 2.58474 32.727 4.09092 32.727H15C16.5062 32.727 17.7273 31.5059 17.7273 29.9997Z" fill="#83BE63"/>
        <path d="M55.9092 27.2725H50.4547C48.9485 27.2725 47.7274 28.4936 47.7274 29.9997C47.7274 31.5059 48.9485 32.727 50.4547 32.727H55.9092C57.4154 32.727 58.6365 31.5059 58.6365 29.9997C58.6365 28.4936 57.4154 27.2725 55.9092 27.2725Z" fill="#83BE63"/>
        <path d="M31.3636 16.3636C32.8698 16.3636 34.0909 15.1425 34.0909 13.6364V2.72727C34.0909 1.22109 32.8698 0 31.3636 0C29.8574 0 28.6364 1.22109 28.6364 2.72727V13.6364C28.6364 15.1425 29.8574 16.3636 31.3636 16.3636Z" fill="#83BE63"/>
        <path d="M31.3639 43.6367C29.8577 43.6367 28.6366 44.8578 28.6366 46.364V57.2731C28.6366 58.7793 29.8577 60.0004 31.3639 60.0004C32.8701 60.0004 34.0911 58.7793 34.0911 57.2731V46.364C34.0911 44.8578 32.8701 43.6367 31.3639 43.6367Z" fill="#83BE63"/>
        <path d="M14.0073 8.78679C12.9426 7.7217 11.2157 7.72188 10.1504 8.78679C9.08529 9.85188 9.08529 11.5786 10.1504 12.6437L17.8644 20.3579C18.3969 20.8904 19.0949 21.1568 19.7927 21.1568C20.4906 21.1568 21.1887 20.8904 21.7211 20.3581C22.7862 19.293 22.7862 17.5662 21.7211 16.5012L14.0073 8.78679Z" fill="#83BE63"/>
        <path d="M44.8629 39.6424C43.798 38.5775 42.0711 38.5775 41.006 39.6424C39.9409 40.7075 39.9411 42.4342 41.006 43.4993L48.7202 51.2132C49.2528 51.7457 49.9507 52.0119 50.6487 52.0119C51.3467 52.0119 52.0448 51.7455 52.5771 51.2132C53.6422 50.1481 53.6422 48.4213 52.5771 47.3562L44.8629 39.6424Z" fill="#83BE63"/>
        <path d="M17.8642 39.6428L10.1504 47.3566C9.08529 48.4217 9.08529 50.1484 10.1504 51.2135C10.6829 51.7461 11.3809 52.0123 12.0789 52.0123C12.7769 52.0123 13.4749 51.7461 14.0073 51.2135L21.7211 43.4997C22.7862 42.4346 22.7862 40.7079 21.7211 39.6428C20.656 38.5777 18.9291 38.5777 17.8642 39.6428Z" fill="#83BE63"/>
      </g>
      <defs>
        <clipPath id="clip0_3504_3548">
          <rect width="60" height="60" fill="white"/>
        </clipPath>
      </defs>
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
    if (location.pathname === "/save/") {
      this.initMainStyles();
      this.updateRangeSlider();
      this.changeSlides();
    }

    if (location.pathname === "/received/") {
      document.head.insertAdjacentHTML("beforeend", `<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100..900&display=swap" rel="stylesheet">`);
      this.changeReceivedPage();
    }
  }

  poweredByHtml() {
    const poweredByStyle = /* HTML */ `
      <style>
        .powered_by_wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          width: 100%;
          max-width: 297px;
          margin: auto auto 0;
          padding: 3px 50px 6px 50px;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0) -0.23%, rgba(237, 242, 245, 0.8) 32.32%, rgba(237, 242, 245, 0.8) 66.9%, rgba(255, 255, 255, 0) 99.77%);
        }
        .powered_by_wrapper p {
          color: #2b3d50;
          font-size: 14px;
          font-weight: 400;
          line-height: 26px;
          margin: 0;
        }
        @media (max-width: 768px) {
        }
      </style>
    `;
    const poweredByHtml = /* HTML */ `
      <div class="powered_by_wrapper">
        ${poweredByStyle}
        <p>Powered by</p>
        <img src="${git}/sunvalue/img/logo_project_sunroof.png" alt="logo project sunroof" />
      </div>
    `;
    return poweredByHtml;
  }
  availableIncentivesHtml() {
    const availableIncentivesStyle = /* HTML */ `
      <style>
        .available_incentives_wrapper {
          max-width: 540px;
          width: 100%;
          margin: 24px auto;
        }
        .available_incentives_wrapper h2 {
          color: #2b3d50;
          text-align: center;
          font-size: 20px;
          font-weight: 700;
          line-height: 28px;
          margin: 0 0 24px;
        }
        .available_incentives_list {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          width: 100%;
        }
        .available_incentives_list li {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .available_incentives_list li p {
          color: #2b3d50;
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
      <div class="available_incentives_wrapper">
        ${availableIncentivesStyle}
        <h2>Discover available incentives based on:</h2>
        <ul class="available_incentives_list">
          <li>
            ${icons.flashCircle}
            <p>Electricity usage</p>
          </li>
          <li>
            ${icons.clipBoard}
            <p>Electricity provider</p>
          </li>
          <li>
            ${icons.home}
            <p>House location</p>
          </li>
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
          align-items: center;
          justify-content: center;
          width: 100%;
          margin: 18px 0 0;
        }
        .no_personal_inform_wrapper p {
          color: #2b3d50;
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
      <div class="no_personal_inform_wrapper">
        ${noPersonalInformationRequiredStyle} ${icons.securitySafe}
        <p>No personal information required</p>
      </div>
    `;
    return noPersonalInformationRequiredHtml;
  }
  savingsOnEnergyHtml() {
    const savingsOnEnergyStyle = /* HTML */ `
      <style>
        .savings_on_energy_wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          max-width: 540px;
          width: 100%;
          margin: 18px auto;
        }
        .savings_on_energy_wrapper p {
          color: #2b3d50;
          font-size: 14px;
          font-weight: 700;
          line-height: 20px;
          margin: 0;
        }
        @media (max-width: 768px) {
        }
      </style>
    `;
    const savingsOnEnergyHtml = /* HTML */ `
      <div class="savings_on_energy_wrapper">
        ${savingsOnEnergyStyle}
        <img src="${git}/sunvalue/img/moneybox.svg" alt="moneybox" />
        <p>Up to 49%* savings on energy with solar</p>
      </div>
    `;
    return savingsOnEnergyHtml;
  }
  safeAndSecureHtml() {
    const safeAndSecureStyle = /* HTML */ `
      <style>
        .safe_and_secure_wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          max-width: 540px;
          width: 100%;
          margin: 18px auto 0;
        }
        .safe_and_secure_wrapper p {
          color: #2b3d50;
          font-size: 14px;
          font-weight: 700;
          line-height: 20px;
          margin: 0;
        }
        @media (max-width: 768px) {
        }
      </style>
    `;
    const safeAndSecureHtml = /* HTML */ `
      <div class="safe_and_secure_wrapper">
        ${safeAndSecureStyle} ${icons.securitySafe}
        <p>Your data is safe and secure</p>
      </div>
    `;
    return safeAndSecureHtml;
  }

  searchingAvailableIncentiveProgramsHtml() {
    const style = /* HTML */ `
      <style>
        .federal_credit {
          opacity: 0;
          transform: translate3d(-4942px, 0px, 0px);
          transition-duration: 0ms;
        }
        .federal_credit div {
          width: 100%;
        }
        .searching_programs_wrapper {
          display: none;
        }
        .searching_programs_wrapper.is_visible {
          display: block;
        }
        .searching_programs_wrapper h2 {
          color: #2b3d50;
          font-size: 32px;
          font-weight: 900;
          line-height: 40px;
          margin: 0 0 76px;
        }
        .searching_programs_wrapper p {
          color: #2b3d50;
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          margin: 0 auto;
          max-width: 326px;
          text-align: center;
        }
        .rotate_svg {
          display: block;
          margin: 0 auto 15px;
          animation: rotate 2s linear infinite;
        }
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        /*available_incentive_found_wrapper */
        .available_incentive_found_wrapper {
          width: 100%;
        }
        .available_incentive_found_wrapper h2 {
          color: #2b3d50;
          font-size: 32px;
          font-weight: 900;
          line-height: 40px;
          margin: 0 0 16px;
          text-align: center;
        }
        .available_incentive_found_list li {
          display: flex;
          gap: 14px;
          border-radius: 8px;
          border: 1px solid rgba(66, 117, 150, 0.16);
          background: #fff;
          padding: 12px 12px 14px 12px;
          justify-content: flex-start;
          align-items: flex-start;
        }
        .available_incentive_found_list li p {
          color: #427596;
          font-size: 18px;
          font-weight: 700;
          line-height: 24px;
          margin: 0 0 4px;
        }
        .available_incentive_found_list li span {
          color: #757575;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
        }
      </style>
    `;
    const html = /* HTML */ `
      <li class="swiper-slide steps federal_credit">
        <div>
          <div class="searching_programs_wrapper">
            ${style}
            <h2>[City] Solar Incentive Programs</h2>
            ${icons.loader}
            <p>Searching available Incentive Programs in your area</p>
          </div>
          <div class="available_incentive_found_wrapper is_hidden">
            <h2>Available incentives found</h2>
            <ul class="available_incentive_found_list">
              <li>
                ${icons.tickCircle}
                <div>
                  <p>Federal Investment Tax Credit:</p>
                  <span>30% of income tax credit</span>
                </div>
              </li>
            </ul>
          </div>
          ${this.showSolarSavingsBtnBlockHtml()}
        </div>
      </li>
    `;

    return html;
  }

  showSolarSavingsBtnBlockHtml() {
    const style = /* HTML */ `
      <style>
        .show_solar_savings_wrapper {
          width: 100%;
          padding: 12px 16px;
          border-radius: 8px;
          border-top: 1px solid #e0e4eb;
          background: #fff;
        }
        .show_solar_savings_wrapper p {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          color: #2b3d50;
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          margin: 0 0 12px;
        }
        #showSolarSavingsBtn {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px 53px;
          border-radius: 8px;
          background: #83be63;
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          cursor: pointer;
        }
      </style>
    `;
    const html = /* HTML */ `
      <div class="show_solar_savings_wrapper">
        ${style}
        <p>
          Discover Your Solar
          <img src="${git}/sunvalue/img/sun_icon.png" alt="sun icon" />
          Savings Potential!
        </p>
        <div id="showSolarSavingsBtn">show solar savings</div>
      </div>
    `;
    return html;
  }

  //change slides
  changeSlides() {
    waitForElement(".swiper-wrapper .swiper-slide").then((el) => {
      let steps = $$el(".swiper-wrapper .swiper-slide");
      steps = $$el(".swiper-wrapper .swiper-slide");
      steps.forEach((element, index) => {
        const btn = element.querySelector("a.btn > span");
        const container = element.querySelector(".container");
        const smallContainer = element.querySelector(".small-container");
        const mediumContainer = element.querySelector(".medium-container");

        // estimate-zip
        if (element.querySelector('[id="estimate-zip"]')) {
          btn.textContent = "Discover Incentive Program";
          if (!element.querySelector(".available_incentives_wrapper")) {
            element.querySelector("h1.title").insertAdjacentHTML("afterend", this.availableIncentivesHtml());
          }

          if (!element.querySelector(".no_personal_inform_wrapper")) {
            smallContainer.insertAdjacentHTML("afterend", this.noPersonalInformationRequiredHtml());
          }

          if (element.querySelector('[id="zip"]').placeholder !== "Enter Your Zip Code") {
            element.querySelector('[id="zip"]').placeholder = "Enter Your Zip Code";
          }

          waitForElement(".no_personal_inform_wrapper").then((i) => {
            if (!element.querySelector(".powered_by_wrapper")) {
              element.querySelector('[id="estimate-zip"]').insertAdjacentHTML("beforeend", this.poweredByHtml());
            }
          });

          dataState.then((data) => {
            let stringData = JSON.stringify(data);
            let findCity = stringData.split('"' + element.querySelector("h1.title").textContent.split(" ")[0].trim())[0];
            let findZipCodes = findCity.split('"zip_code":');
            let zipCode = findZipCodes[findZipCodes.length - 1].split(",")[0];
            const inputElement = $el("input#zip");
            inputElement.value = zipCode;
            inputElement.dispatchEvent(new Event("input", { bubbles: true }));
          });
        }
        // estimate-bill
        if (element.querySelector('[id="estimate-bill"]')) {
          element.querySelectorAll(".title").forEach((t) => {
            t.innerHTML = "How much was <br/> your latest monthly energy bill?";
          });
          element.querySelector(".with-gradient .rangeslider__handle").insertAdjacentElement("beforeend", element.querySelector(".rangeslider-tooltip"));
        }
        // estimate-map
        if (element.querySelector('[id="estimate-map"]')) {
          element.querySelectorAll(".title").forEach((t) => {
            t.innerHTML = "Find your house location";
          });
          element.querySelectorAll(".sub-title").forEach((t) => {
            t.innerHTML = "Enter your house address to find local Incentive Programs";
          });
          if (element.querySelector('[id="autoaddress"]').placeholder !== "Enter Your Address: e.g. 123 Main Road") {
            element.querySelector('[id="autoaddress"]').placeholder = "Enter Your Address: e.g. 123 Main Road";
          }
          //
          if (!el.querySelector(".savings_on_energy_wrapper")) {
            smallContainer.insertAdjacentHTML("afterend", this.savingsOnEnergyHtml());
          }
          if (!el.querySelector(".powered_by_wrapper")) {
            container.insertAdjacentHTML("beforeend", this.poweredByHtml());
          }
        }
        //estimate-shade
        if (element.querySelector('[id="estimate-shade"]')) {
          element.querySelectorAll(".title").forEach((t) => {
            t.innerHTML = "Does your roof get sunlight?";
          });
          element.insertAdjacentHTML("afterend", this.searchingAvailableIncentiveProgramsHtml());
        }
        // estimate-email
        if (element.querySelector('[id="estimate-email"]')) {
          const banner = /* HTML */ `<img src="${git}/sunvalue/img/ok.png" alt="ok" />`;

          if (element.querySelector('[id="email"]').placeholder !== "Enter Your Email") {
            element.querySelector('[id="email"]').placeholder = "Enter Your Email";
          }
          element.querySelectorAll(".sub-title.banner").forEach((t) => {
            t.innerHTML = `${banner}You're almost qualified for this
            limited-time program`;
          });
          if (!element.querySelector(".safe_and_secure_wrapper")) {
            smallContainer.insertAdjacentHTML("afterend", this.safeAndSecureHtml());
          }
        }
        // estimate-name
        if (element.querySelector('[id="estimate-name"]')) {
          element.querySelectorAll(".title").forEach((t) => {
            t.innerHTML = "What is your name?";
          });
          if (element.querySelector('[id="fname"]').placeholder !== "First Name") {
            element.querySelector('[id="fname"]').placeholder = "First Name";
          }
          if (element.querySelector('[id="lname"]').placeholder !== "Family Name") {
            element.querySelector('[id="lname"]').placeholder = "Family Name";
          }
          if (!element.querySelector(".safe_and_secure_wrapper")) {
            mediumContainer.insertAdjacentHTML("afterend", this.safeAndSecureHtml());
          }
        }
        // estimate-phone
        if (element.querySelector('[id="estimate-phone"]')) {
          element.querySelectorAll(".sub-title").forEach((t) => {
            t.innerHTML = "Complete the final step to check your eligibility";
          });
          if (element.querySelector('[id="phone"]').placeholder !== "Enter your mobile phone number") {
            element.querySelector('[id="phone"]').placeholder = "Enter your mobile phone number";
          }
          if (!element.querySelector(".safe_and_secure_wrapper")) {
            element.querySelector('[for="leadid_tcpa_disclosure"]').insertAdjacentHTML("afterend", this.safeAndSecureHtml());
          }
        }
        // federal_credit
        waitForElement(".federal_credit").then((i) => {
          if (i.querySelector(".searching_programs_wrapper").classList.contains("is_visible")) {
            setTimeout(() => {
              i.querySelector(".searching_programs_wrapper").classList.remove("is_visible");
            }, 4000);
          }
        });
      });
    });
  }

  updateRangeSlider() {
    const rangeBlock = `
        <input type="range" min="50" value="300" max="800" step="50" name="monthly_elec" data-rangeslider>
        <div class="rangeslider-tooltip">$<output></output></div>
        <div class="sliderLegend">
            <p class="sliderLegendItem--start">$50</p>
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

  // Thank You Page
  thankYouPageHtml() {
    const style = /* HTML */ `
      <style>
        /*footer */
        .site-footer {
          display: none !important;
        }
        .step-page .content-wrapper {
          padding: 0;
          min-height: 100vh;
        }
        .steps-wrapper .container {
          max-width: 540px;
          padding: 0;
        }
        .step-page .site-header {
          position: initial;
          background: #edf2f5;
          border: none;
          padding: 27px 100px;
        }
        .content-wrapper {
          position: relative;
        }
        .content-wrapper::before {
          width: 100%;
          height: 100%;
          position: absolute;
          content: "";
          background: linear-gradient(180deg, #edf2f5 12.81%, rgba(255, 255, 255, 0) 100%), url("${git}/sunvalue/img//bgr_img.png");
          background-position: bottom;
          opacity: 1;
          background-size: cover;
        }
        .steps-wrapper {
          align-items: flex-start;
          background: unset !important;
          min-height: 100%;
        }
        .main-title {
          display: none;
        }
        .steps-wrapper:before {
          content: none;
        }
        .site-header .lock {
          width: 30px;
          height: 30px;
          background: #83be63 url(/images/lock-white.svg) center center no-repeat;
          background-size: 11px auto;
          -webkit-border-radius: 30px;
          -moz-border-radius: 30px;
          border-radius: 30px;
          top: 0;
          left: 0;
        }
        .crs_thank h2 {
          font-family: "Noto Sans SC";
          color: #2b3d50;
          font-size: 32px;
          font-weight: 800;
          line-height: 40px;
          margin: 0 auto 12px;
          text-align: center;
        }
        .crs_thank p,
        .crs_thank_list li,
        .crs_thank_list li:before {
          color: #2b3d50;
          font-family: "Noto Sans SC", sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
          margin: 0;
        }
        .crs_thank p {
          font-weight: 700;
          text-align: center;
          margin: 12px 0 16px;
        }
        .crs_thank_list {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        .crs_thank_list li {
          display: flex;
          align-items: center;
          min-height: 36px;
          padding: 0 0 0 48px;
          position: relative;
        }
        .crs_thank_list li + li {
          margin-top: 24px;
        }
        .crs_thank_list li:before {
          content: attr(data-num);
          font-weight: 500;
          line-height: 32px;
          width: 36px;
          height: 36px;
          flex-shrink: 0;
          border: 2px solid #83be63;
          text-align: center;
          border-radius: 50%;
          position: absolute;
          left: 0;
          top: 0;
        }
        .crs_thank_list li:first-child:after {
          content: "";
          height: 57%;
          width: 0;
          border-right: 3px dotted #83be63;
          left: 18px;
          bottom: -22px;
          position: absolute;
        }
        .crs_thank .crs_analyzing p b {
          font-size: 24px;
          line-height: 36px;
        }
        .crs_analyzing li:last-child {
          padding: 16px;
        }

        .site-footer {
          margin: 0 -15px;
        }
        p.crs_text {
          color: #757575;
          font-family: "Noto Sans SC", sans-serif;
          font-size: 12px;
          font-style: normal;
          font-weight: 350;
          line-height: normal;
          padding: 10px 0;
        }
        p.crs_text a {
          text-decoration: underline;
          color: #757575;
          font-family: "Noto Sans SC", sans-serif;
        }
        @media (max-width: 768px) {
        }
      </style>
    `;
    const html = /* HTML */ `
      <div class="crs_thank">
        ${style}
        <div class="container">
          <h2 class="title">You'll be contacted by a Solar Expert Partner in [City]</h2>
          <p>Next steps:</p>
          <ul class="crs_thank_list">
            <li data-num="1">One of our Solar Expert Partners will call you</li>
            <li data-num="2">During the call, you will learn if your home qualifies for solar incentives, the suggested solar system size, and your predicted solar energy savings</li>
          </ul>
        </div>
      </div>
    `;

    return html;
  }
  changeReceivedPage() {
    waitForElement(".steps-wrapper").then((el) => {
      el.insertAdjacentHTML("beforeend", this.thankYouPageHtml());
    });
    waitForElement(".logo").then((el) => {
      el.innerHTML = icons.logo;
    });
  }

  // common func
  initMainStyles() {
    const mainStyles = /* HTML */ `
      <style>
        .site-header {
          padding: 27px 0;
        }
        .wrapper::before {
          background: linear-gradient(180deg, #edf2f5 12.81%, rgba(255, 255, 255, 0) 100%), url("${git}/sunvalue/img//bgr_img.png");
          background-position: bottom;
          opacity: 1;
          background-size: cover;
        }
        .wrapper::after {
          opacity: 1;
          background: unset;
        }
        .wrapper .banner-slider {
          max-width: 600px;
          padding: 0 30px;
          margin: 30px 0 0;
        }
        .wrapper .progress {
          max-width: 540px;
          border-radius: 5px;
          background: #e5e9eb;
        }
        .wrapper .progress-block p {
          color: #393939;
          font-size: 14px;
          font-weight: 700;
          line-height: 24px;
          margin: 10px 0 0;
        }
        .wrapper .progress-block p span {
          color: #fb7306;
        }
        .wrapper {
          padding: 0;
        }
        .wrapper.show::before {
          opacity: 1;
        }
        .wrapper.show {
          padding: 0;
        }
        .wrapper .container {
          max-width: 100%;
          padding: 0;
        }
        .swiper-container-autoheight .swiper-wrapper {
          height: auto !important;
        }
        .wrapper .title {
          color: #2b3d50;
          text-align: center;
          font-size: 32px;
          font-weight: 900;
          line-height: 40px;
          margin: 0 auto;
        }
        .wrapper .sub-title {
          color: #2b3d50;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          margin: 16px 0;
        }
        .wrapper .form-list {
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
          max-width: 100%;
        }
        .wrapper .form-list li {
          width: 100%;
          height: 100%;
          margin: 0;
          vertical-align: baseline;
        }
        .wrapper .text-field {
          width: 100%;
          height: 56px;
          max-width: 100%;
          padding: 14px 16px;
          border-radius: 5px;
          background: #fff;
          color: #2b3d50;
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
        }
        .wrapper .text-field::placeholder {
          color: #757575;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
        }
        /*#next-block */
        #next-block {
          display: none;
        }
        /*#estimate-zip */
        #estimate-zip h4,
        #estimate-zip h5 {
          display: none;
        }
        #estimate-zip h1.title {
          max-width: 393px;
        }
        #estimate-zip #calculateYourSavings {
          border-radius: 8px;
          background: #83be63;
          padding: 16px 53px;
        }
        #estimate-zip #calculateYourSavings span {
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        /*#estimate-bill */
        #estimate-bill div h4.sub-title.hide-in-mobile {
          display: none;
        }
        #estimate-bill .rangeslider-block {
          margin: 0;
        }
        #estimate-bill .rangeslider {
          padding: 66px 0;
        }
        #estimate-bill .with-gradient .rangeslider::before {
          border-radius: 4px;
          background: linear-gradient(270deg, #f31d1d 0%, #fb7306 25%, #ffc104 50%, #5faa19 75%, #078041 100%);
        }
        #estimate-bill .with-gradient .rangeslider__handle {
          border: 1px solid #fff;
        }
        #estimate-bill .with-gradient .rangeslider__handle[style="left: 0px;"] .rangeslider-tooltip {
          left: 0;
        }
        #estimate-bill .with-gradient .rangeslider__handle[style="left: 510px;"] .rangeslider-tooltip {
          left: -54px;
        }
        #estimate-bill .with-gradient .rangeslider__handle[style="left: 0px;"] .rangeslider-tooltip::before {
          left: 16%;
        }
        #estimate-bill .with-gradient .rangeslider__handle[style="left: 510px;"] .rangeslider-tooltip::before {
          left: 82%;
        }
        #estimate-bill .sliderLegend {
          top: 18px;
          color: #2b3d50;
        }
        #estimate-bill .sliderLegend .sliderLegendItem--start {
          left: 0;
          margin: 0;
        }
        #estimate-bill .sliderLegend .sliderLegendItem--end {
          right: 0;
          margin: 0;
        }
        #estimate-bill .rangeslider-tooltip {
          width: max-content;
          color: #2b3d50;
          font-size: 20px;
          font-weight: 700;
          line-height: 28px;
          border-radius: 5px;
          border: 1px solid rgba(66, 117, 150, 0.16);
          background: #fff;
          padding: 4px 10px;
          margin: 0;
          top: 40px;
          left: -20px;
        }
        #estimate-bill .rangeslider-tooltip::before {
          position: absolute;
          content: "";
          left: 50%;
          top: 0;
          width: 11px;
          height: 11px;
          transform: rotate(45deg) translateX(-50%);
          flex-shrink: 0;
          background: #fff;
        }
        /*#estimate-provider */
        #estimate-provider #companies {
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin: 24px 0 0;
        }
        #estimate-provider #companies .custom-radio-item {
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 100%;
          width: 100%;
          margin: 0;
          padding: 16px 53px;
          border: none;
          border-radius: 8px;
          background-color: #83be63 !important;
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        /*#estimate-shade*/
        #estimate-shade .custom-radio.borderd {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin: 24px 0 0;
          justify-content: space-between;
        }
        #estimate-shade .custom-radio-item {
          width: calc(50% - 10px);
          color: #fff;
          font-size: 18px;
          font-weight: 700;
          line-height: 26px;
          margin: 0;
        }
        /*#estimate-email */
        #estimate-email .sub-title {
          margin: 12px 0;
        }
        #estimate-email > div > h4.sub-title.hide-in-mobile.banner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 10px;
          border-radius: unset;
          color: #2b3d50;
          padding: 6px 0px 8px 0px;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0) -0.23%, #fff 32.32%, #fff 66.9%, rgba(255, 255, 255, 0) 99.77%);
          font-size: 14px;
          font-weight: 500;
          line-height: 20px;
        }
        /*estimate-name */
        #estimate-name .title {
          margin-bottom: 20px;
        }
        #estimate-name .safe_and_secure_wrapper {
          margin-top: 8px;
        }
        /*estimate-phone */
        #estimate-phone .final-btn {
          padding: 0 !important;
          width: 100%;
        }
        #estimate-phone .final-btn #submit {
          width: 100%;
          height: 100%;
          border-radius: 8px;
          background: #83be63;
          padding: 16px 53px;
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        #estimate-phone [for="leadid_tcpa_disclosure"] {
          margin-top: 16px;
          color: #757575;
          font-size: 12px;
          font-weight: 400;
          line-height: 16px;
        }
        #estimate-phone .mb-20 {
          margin-bottom: 16px !important;
        }
        /* btn*/
        #slider-block {
          position: fixed;
          left: 50% !important;
          bottom: 6vh !important;
          transform: translateX(-50%);
          max-width: 540px;
          width: 100% !important;
          border-radius: 8px;
          border-top: 1px solid #e0e4eb;
          background: #eef3f6;
          padding: 12px 16px;
        }
        .wrapper #slider-block .btn-block .back-link {
          color: #4a4a4a;
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          text-transform: uppercase;
        }
        .wrapper .back-link::before {
          top: 0;
          width: 19px;
        }
        .wrapper .back-link {
          padding-left: 27px;
        }
        .wrapper #slider-block .d-none {
          display: flex !important;
          align-items: center;
          justify-content: center;
          max-width: 300px;
          width: 100%;
          padding: 16px 53px;
          border-radius: 5px;
          background: #83be63;
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-left: auto;
        }
        /*footer */
        .site-footer {
          display: none !important;
        }
        @media (max-width: 768px) {
        }
      </style>
    `;
    this.insert(mainStyles, "head");
  }

  insert(html, selector, position = "beforeend") {
    $el(selector).insertAdjacentHTML(position, html);
  }
}

new changeFlow(device);
