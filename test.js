fetch("https://ipinfo.io/json?token=625d68b69a156c")
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
    if (jsonResponse.postal) {
      console.log(jsonResponse);
    }
  });

//
getNewUser("_ga");

function getNewUser(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  let valueCookie;
  let timeNewUser;
  if (parts.length === 2) {
    valueCookie = parts.pop().split(";").shift();
    timeNewUser = +(valueCookie.split(".").pop() + "000");
    if (+new Date() - +new Date(timeNewUser) <= 5 * 60 * 1000) {
      console.log(`New User`);
    } else {
      console.log(new Date(timeNewUser));
    }
  }
}

if (typeof Flickity == "function" && document.querySelector(".product-gallery__main") != null && document.querySelector(".product-gallery__thumbnails")) {
  $(".product-gallery__main").data("flickity").options.adaptiveHeight = false;
  console.log(`adaptiveHeight = false`);
}

let startSlider = setInterval(function () {
  if (typeof Flickity == "function" && document.querySelector(".product-gallery__main") != null && document.querySelector(".product-gallery__thumbnails") != null && window.matchMedia("(min-width: 769px)").matches == true) {
    clearInterval(startSlider);
    $(".product-gallery__main").data("flickity").options.adaptiveHeight = false;
    console.log(`adaptiveHeight = false`);
  }
}, 300);

//
jQuery.getJSON(window.Shopify.routes.root + "products/melatonin-5-mg.js", function (product) {
  console.log(first);
  alert("The title of this product is " + product.title);
});

fetch("/products/melatonin-5-mg.js", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
}).then((response) => {
  return response.json();
});

toChekout(40749200048243, 1);

//
var element = document.getElementById("phone");
var maskOptions = {
  mask: "+7(000)000-00-00",
  lazy: false,
};
var mask = new IMask(element, maskOptions);
//
let removing = setInterval(() => {
  if (window.location.href.includes("//k9ti.org/mc") && document.querySelectorAll(".count_sec .row1030") && document.querySelector("#unlimited_personal_coaching") != null) {
    clearInterval(removing);

    document.body.insertAdjacentHTML(
      "afterbegin",
      `
        <style>
            .pt-0 {
                padding-top: 0!important;
            }
            .pb-0 {
                padding-bottom: 0!important;
            }
        </style>`
    );
    document.querySelectorAll(".count_sec .row1030").forEach((item) => {
      if (item.innerHTML.includes("3 exclusive bonus classes")) {
        item.nextElementSibling.classList.add("hidden");
        item.classList.add("hidden");
        item.parentElement.classList.add("pt-0");
      }
    });
    document.querySelector("#unlimited_personal_coaching").classList.add("hidden");
    document.querySelector("#unlimited_personal_coaching").previousElementSibling.querySelector(".paw_icons ul").classList.add("pb-0");

    window._mfq = window._mfq || [];
    (function () {
      var mf = document.createElement("script");
      mf.type = "text/javascript";
      mf.defer = true;
      mf.src = "//cdn.mouseflow.com/projects/29f75cc1-dffc-4a86-b3d0-cca4b689c018.js";
      document.getElementsByTagName("head")[0].appendChild(mf);
    })();
  }
  if (window.location.href.includes("//k9ti.org/enroll") && document.querySelector(".payment_inform_box .payment_order") != null) {
    clearInterval(removing);
    document.querySelectorAll(".payment_inform_box .payment_order .pay_price").forEach((item) => {
      if (item.innerHTML == "$0.00") {
        item.parentElement.remove();
      }
    });

    window._mfq = window._mfq || [];
    (function () {
      var mf = document.createElement("script");
      mf.type = "text/javascript";
      mf.defer = true;
      mf.src = "//cdn.mouseflow.com/projects/29f75cc1-dffc-4a86-b3d0-cca4b689c018.js";
      document.getElementsByTagName("head")[0].appendChild(mf);
    })();
  }
});

const recordMF = setInterval(() => {
  if (typeof window._mfq === "object") {
    clearInterval(recordMF);
    window._mfq.push(["setVariable", "removing_extras_from_basic_plan", "var1"]);
  }
}, 200);
//
document.querySelector("#button-736a5ca3").addEventListener("click", (e) => {
  e.preventDefault();
  let ep = localStorage.getItem("email");
  window.location.href = `https://purchase.hint.app/payment-2?&email=${ep}&planCode=1_1_week_1900_100&price=100&funnel=your-funnel`;
});
document.querySelector("#id-842b1456").addEventListener("click", (e) => {
  e.preventDefault();
  let ep = localStorage.getItem("email");
  window.location.href = `https://purchase.hint.app/payment-2?&email=${ep}&planCode=1_1_week_1900_500&price=500&funnel=your-funnel`;
});
document.querySelector("#id-43231a98").addEventListener("click", (e) => {
  e.preventDefault();
  let ep = localStorage.getItem("email");
  window.location.href = `https://purchase.hint.app/payment-2?&email=${ep}&planCode=1_1_week_1900_900&price=900&funnel=your-funnel`;
});
document.querySelector("#id-a4f0c16f").addEventListener("click", (e) => {
  e.preventDefault();
  let ep = localStorage.getItem("email");
  window.location.href = `https://purchase.hint.app/payment-2?&email=${ep}&planCode=1_1_week_1900_1321&price=1321&funnel=your-funnel`;
});
//
document.querySelector(".payment_order").insertAdjacentHTML(
  "afterbegin",
  `    <div>
      <h2>Limited Time Offer: add Personal Coaching for just $90 more (usually $398)!</h2>
      <p>Check the box below to take advantage of this offer.</p>
      <div>
        <div class="checkbox_block">
          <input class="custom_checkbox" id="" type="checkbox" name="" value="" />
          <label for="" tabindex="0">
            <span class=""> </span>
            <p>10 weeks of <b>personalized coaching & support</b></p>
            <p>$398</p>
            <p>$90.00</p>
          </label>
        </div>
        <p>
          View less info
          <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6L5 2L1 6" stroke="#734F22" stroke-width="2" stroke-linecap="round" />
          </svg>
        </p>
        <ul>
          <li>Live weekly Q&A group calls with personal coaching (10-week access)</li>
          <li>Email your questions - answered in separate downloadable weekly call (10-week access)</li>
        </ul>
      </div>
    </div>`
);
//
let arrSize = {
  "13.32 MM": ["2", "D", "-", "2"],
  "13.51 MM": ["2 1/4", "D 1/2", "-", "-"],
  "13.67 MM": ["2 1/2", "E", "-", "3"],
  "13.83 MM": ["2 3/4", "E 1/2", "-", "-"],
  "14.05 MM": ["3", "F", "44", "4"],
  "14.25 MM": ["3 1/4", "F 3/4", "-", "5"],
  "14.45 MM": ["3 1/2", "G 1/4", "-", "-"],
  "14.65 MM": ["3 3/4", "H", "46", "6"],
  "14.86 MM": ["4", "H 1/2", "-", "-"],
  "15.04 MM": ["4 1/4", "I", "47 3/4", "7"],
  "15.27 MM": ["4 1/2", "I 1/2", "-", "8"],
  "15.53 MM": ["4 3/4", "J 1/4", "-", "-"],
  "15.70 MM": ["5", "J 1/2", "-", "9"],
  "15.90 MM": ["5 1/4", "K 1/4", "-", "-"],
  "16.10 MM": ["5 1/2", "L", "51 3/4", "-"],
  "16.30 MM": ["5 3/4", "L 1/4", "-", "11"],
  "16.51 MM": ["6", "M", "52 3/4", "-"],
  "16.71 MM": ["6 1/4", "M 1/2", "-", "12"],
  "16.92 MM": ["6 1/2", "N", "54", "13"],
  "17.13 MM": ["6 3/4", "N 1/2", "-", "-"],
  "17.35 MM": ["7", "O", "55 1/4", "14"],
  "14.45 MM": ["7 1/4", "O 1/2", "-", "-"],
  "17.75 MM": ["7 1/2", "P", "56 1/2", "15"],
  "17.97 MM": ["7 3/4", "P 1/2", "-", "-"],
  "18.19 MM": ["8", "Q", "57 3/4", "16"],
  "18.35 MM": ["8 1/4", "Q 1/2", "58", "-"],
  "18.53 MM": ["8 1/2", "Q 3/4", "-", "17"],
  "18.69 MM": ["8 3/4", "R 1/4", "-", "18"],
  "18.89 MM": ["9", "R 3/4", "59", "-"],
  "19.22 MM": ["9 1/4", "S 1/4", "60", "-"],
  "19.41 MM": ["9 1/2", "S 3/4", "-", "20"],
  "19.62 MM": ["9 3/4", "T 1/4", "61", "21"],
  "19.84 MM": ["10", "T 1/2", "-", "-"],
  "20.02 MM": ["10 1/4", "U", "62", "22"],
  "20.20 MM": ["10 1/2", "U 1/2", "-", "-"],
  "20.44 MM": ["10 3/4", "V 1/4", "63 1/4", "-"],
  "20.68 MM": ["11", "V 1/2", "64 1/4", "24"],
  "20.85 MM": ["11 1/4", "W 1/4", "65", "-"],
  "21.08 MM": ["11 1/2", "X", "-", "25"],
  "21.27 MM": ["11 3/4", "X 1/2", "66 1/4", "-"],
  "21.39 MM": ["12", "Y", "-", "26"],
  "21.58 MM": ["12 1/4", "Y 1/2", "67", "-"],
  "21.72 MM": ["12 1/2", "Z", "-", "27"],
  "21.95 MM": ["12 3/4", "Z 1/2", "68 1/2", "28"],
  "22.11 MM": ["13", "Z+1", "69", "-"],
};
//
function getArrReadyToShip() {
  fetchArr("https://capucinne.com/pages/custom-design");

  async function fetchArr(url) {
    let res = await fetch(url);
    res = await res.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(res, "text/html");
    document.querySelector("#shopify-section-template--20834585772373__1669882201fc5f25f2").insertAdjacentElement("beforeend", doc.querySelector(".form-vertical"));
  }

  // console.log(doc.querySelector(".grid.grid--uniform").outerHTML);
}

//
if (!e.target.getAttribute("data-test")) {
}
e.target.setAttribute("data-test", "1");
setTimeout(() => {
  if (e.target.getAttribute("data-test")) {
    e.target.removeAttribute("data-test");
  }
}, 1000);
//
function visibElem() {
  let obsV = new IntersectionObserver(visibilityV, {
    threshold: 1,
  });

  let obsV2 = new IntersectionObserver(visibilityV2, {
    threshold: 1,
  });

  let intV1 = setInterval(() => {
    if (document.querySelector(".earn_gift_wrapp")) {
      clearInterval(intV1);
      obsV.observe(document.querySelector(".earn_gift_wrapp"));
    }
  }, 100);

  function visibilityV(entries) {
    entries.forEach((i) => {
      if (i.isIntersecting) {
        setTimeout(function () {
          obsV2.observe(i.target);
        }, 3000);
      }
    });
  }
  function visibilityV2(entries) {
    entries.forEach((i) => {
      if (i.isIntersecting) {
        if (i.target.classList.contains("earn_gift_wrapp")) {
          pushDataLayer("exp_barriers_v_ywrgyo_ft", "{{focusTime}}", "Visibility", "You’ll receive a gift with your order");
        }

        obsV.unobserve(i.target);
      }
      obsV2.unobserve(i.target);
    });
  }
}
//
function decimalAdjust(type, value, exp) {
  // Если степень не определена, либо равна нулю...
  if (typeof exp === "undefined" || +exp === 0) {
    return Math[type](value);
  }
  value = +value;
  exp = +exp;
  // Если значение не является числом, либо степень не является целым числом...
  if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {
    return NaN;
  }
  // Сдвиг разрядов
  value = value.toString().split("e");
  value = Math[type](+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp)));
  // Обратный сдвиг
  value = value.toString().split("e");
  return +(value[0] + "e" + (value[1] ? +value[1] + exp : exp));
}

// Десятичное округление к ближайшему
if (!Math.round10) {
  Math.round10 = function (value, exp) {
    return decimalAdjust("round", value, exp);
  };
}
// Десятичное округление вниз
if (!Math.floor10) {
  Math.floor10 = function (value, exp) {
    return decimalAdjust("floor", value, exp);
  };
}
// Десятичное округление вверх
if (!Math.ceil10) {
  Math.ceil10 = function (value, exp) {
    return decimalAdjust("ceil", value, exp);
  };
}

//
function getVerifiedReviews() {
  console.log(`object`);
  fetchArr("https://treblehealth.com/");

  async function fetchArr(url) {
    let res = await fetch(url);
    res = await res.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(res, "text/html");
    console.log(doc.querySelector("#testimonials .elementor-hidden-tablet.google-ti.g-rev-custom"), `res`);
    // document
    //   .querySelector('.verified_reviews_on_google_wrapp')
    //   .insertAdjacentElement(
    //     'beforeend',
    //     doc.querySelector('#testimonials .elementor-hidden-tablet.google-ti.g-rev-custom'),
    //   );
  }
}
