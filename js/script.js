let scriptCustom = document.createElement("script");
scriptCustom.src = "https://conversionratestore.github.io/projects/buzzpatch/magicpatch_comparison_table.js";
scriptCustom.async = false;
document.head.appendChild(scriptCustom);

//
let scriptCustom = document.createElement("script");
scriptCustom.src = "https://conversionratestore.github.io/projects/knineti/new_page.js";
scriptCustom.async = false;
document.head.appendChild(scriptCustom);

//
document.head.insertAdjacentHTML("beforeend", `<style class="exp">body {opacity: 0;}</style>`);

let scriptCustom = document.createElement("script");
scriptCustom.src = "https://conversionratestore.github.io/projects/knineti/new_page.js";
scriptCustom.async = false;
document.head.appendChild(scriptCustom);

setTimeout(function () {
  document.querySelector(".exp")?.remove();
}, 5000);

//
window.addEventListener("pageshow", function () {
  document.querySelector("iframe").setAttribute("src", document.querySelector("iframe").dataset.src);
});

//
let scriptCustom = document.createElement("script");
scriptCustom.src = "https://conversionratestore.github.io/projects/lamps/pdp_block.js";
scriptCustom.async = false;
document.head.appendChild(scriptCustom);

// ....
let scriptCustom = document.createElement("script");
scriptCustom.src = "https://conversionratestore.github.io/projects/carid/search_after_adding_car.js";
scriptCustom.async = false;
document.head.appendChild(scriptCustom);

//
document.head.insertAdjacentHTML("beforeend", `<style class="exp">body {opacity: 0;}</style>`);

let scriptCustom = document.createElement("script");
scriptCustom.src = "https://conversionratestore.github.io/projects/lamps/new_google_shopping_pdp_desk.js";
scriptCustom.async = false;
document.head.appendChild(scriptCustom);

setTimeout(function () {
  document.querySelector(".exp")?.remove();
}, 2000);

//
let scriptCustom = document.createElement("script");
scriptCustom.src = "https://conversionratestore.github.io/projects/themillionroses/slide_in_cart.js";
scriptCustom.async = false;
document.head.appendChild(scriptCustom);

//
document.head.insertAdjacentHTML("beforeend", `<style class="exp">body {opacity: 0 !important;}</style>`);

let scriptCustom = document.createElement("script");
scriptCustom.src = "https://conversionratestore.github.io/projects/knineti/free_workshop_hyp_third.js";
scriptCustom.async = false;
document.head.appendChild(scriptCustom);

setTimeout(function () {
  document.querySelector(".exp")?.remove();
}, 7000);

//
let scriptCustom = document.createElement("script");
scriptCustom.src = "https://github.com/Flopsi69/crs/tree/main/comparamais/editUser/index2.js";
scriptCustom.async = false;
document.head.appendChild(scriptCustom);

//
document.head.insertAdjacentHTML("beforeend", `<style class="exp">body {opacity: 0 !important;}</style>`);

let scriptCustom = document.createElement("script");
scriptCustom.src = "https://conversionratestore.github.io/projects/buzzpatch/sleepypatch_free_shipping.js";
scriptCustom.async = false;
document.head.appendChild(scriptCustom);

setTimeout(function () {
  document.querySelector(".exp")?.remove();
}, 500);

//
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/moneygeek/auto_calculator_btn.js";
script.async = false;
document.head.appendChild(script);
//
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/grantme/grantme_quiz.js";
script.async = false;
document.head.appendChild(script);
//
//
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/zenithprepacademy/video_reviews.js";
script.async = false;
document.head.appendChild(script);
//
// let intTimeSrc = setInterval(() => {
//   if (document.querySelector(".mobile-iframe")) {
//     clearInterval(intTimeSrc)
//     document.querySelector(".mobile-iframe").src = "https://player.vimeo.com/video/790201146?h=eda73cb7b6&loop=1&title=0&byline=0&portrait=0"
//     console.log(`changed src`)
//   }
// }, 10)

document.head.insertAdjacentHTML("beforeend", `<style class="exp">body {opacity: 0 !important;}</style>`);

let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/zenithprepacademy/video_reviews.js";
script.async = false;
document.head.appendChild(script);

setTimeout(function () {
  document.querySelector(".exp")?.remove();
}, 4000);

//
getNewUser("_ga");

function getNewUser(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  let valueCookie;
  let timeNewUser;
  if (parts.length === 2 && !localStorage.getItem("newUser")) {
    valueCookie = parts.pop().split(";").shift();
    timeNewUser = +(valueCookie.split(".").pop() + "000");
    console.log(`timeNewUser`, new Date(timeNewUser));
    if (+new Date() - +new Date(timeNewUser) <= 5 * 60 * 1000) {
      console.log(`New User`);
      localStorage.setItem("newUser", "true");
    }
  }
}
//
document.head.insertAdjacentHTML("beforeend", `<style class="exp">body {opacity: 0 !important;}</style>`);

let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/doyogawithme/subscription_exit_popup.js";
script.async = false;
document.head.appendChild(script);

setTimeout(function () {
  document.querySelector(".exp")?.remove();
}, 2000);

//
// {% if additional_checkout_buttons %}
//  <div class="lav-paypal" style='display: none;'>{{ content_for_additional_checkout_buttons }}</div>
// {% endif %}

//////////////////////////////////////////////////////////
if (!e.target.getAttribute("data-test")) {
}
e.target.setAttribute("data-test", "1");
setTimeout(() => {
  if (e.target.getAttribute("data-test")) {
    e.target.removeAttribute("data-test");
  }
}, 1000);
///////////////////////////////////////////////////////////
//visibility elem
function visibElem() {
  let obsV = new IntersectionObserver(visibilityV, {
    threshold: 1,
  });

  let obsV2 = new IntersectionObserver(visibilityV2, {
    threshold: 1,
  });

  let intV1 = setInterval(() => {
    if (document.querySelector(".")) {
      clearInterval(intV1);
      obsV.observe(document.querySelector("."));
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
        if (i.target.classList.contains("")) {
        }

        obsV.unobserve(i.target);
      }
      obsV2.unobserve(i.target);
    });
  }
}
//

if (location.href.includes("/become-a-subscriber") || location.href.includes("/yogi/login") || location.href.includes("/yogi/register") || location.href.includes("/checkout")) {
  let script = document.createElement("script");
  script.src = location.href.includes("/become-a-subscriber") ? "https://flopsi69.github.io/crs/doYogaWithMe/subscribe/index2.js" : "https://conversionratestore.github.io/projects/doyogawithme/signup-checkout_test.js";
  script.async = false;
  document.head.appendChild(script);
}

let customScript = document.createElement("script");
customScript.src = "https://conversionratestore.github.io/projects/doyogawithme/subscription_exit_popup.js";
customScript.async = false;

if (location.href.includes("/become-a-subscriber")) {
  const initInterval = setInterval(() => {
    if (document.querySelector('.menu--account [href="/yogi/login?destination=/become-a-subscriber"]') || document.querySelector(".menu--account img.c-avatar")) {
      clearInterval(initInterval);
      setTimeout(() => {
        document.head.appendChild(customScript);
      }, 100);
    }
  }, 100);
} else {
  document.head.appendChild(customScript);
}

//lakelasvegaswatersports
document.head.insertAdjacentHTML("beforeend", `<style class="exp">body {opacity: 0 !important;}</style>`);
if (window.location.host === "lakelasvegaswatersports.com") {
  let script = document.createElement("script");
  script.src = "https://conversionratestore.github.io/projects/llvws/improvingPDP/relaunch_pdp_lakelasvegas.js";
  script.async = false;
  document.head.appendChild(script);
}
if (window.location.host === "vegasyacht.com") {
  let script = document.createElement("script");
  script.src = "https://conversionratestore.github.io/projects/llvws/improvingPDP/relaunch_pdp_vegas.js";
  script.async = false;
  document.head.appendChild(script);
}
setTimeout(function () {
  document.querySelector(".exp")?.remove();
}, 4000);
