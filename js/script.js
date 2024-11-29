// buzzpatch
let scriptCustom = document.createElement("script");
scriptCustom.src = "https://conversionratestore.github.io/projects/buzzpatch/magicpatch_comparison_table.js";
scriptCustom.async = false;
document.head.appendChild(scriptCustom);
//
let scriptCustom = document.createElement("script");
scriptCustom.src = "https://conversionratestore.github.io/projects/buzzpatch/gift_on_the_page_b.js";
scriptCustom.async = false;
document.head.appendChild(scriptCustom);
//
let scriptCustom = document.createElement("script");
scriptCustom.src = "https://conversionratestore.github.io/projects/buzzpatch/gift_on_the_page_c.js";
scriptCustom.async = false;
document.head.appendChild(scriptCustom);
//
let scriptCustom = document.createElement("script");
scriptCustom.src = "https://conversionratestore.github.io/projects/buzzpatch/gift_on_the_page_b_second_iteration.js";
scriptCustom.async = false;
document.head.appendChild(scriptCustom);
//
let scriptCustom = document.createElement("script");
scriptCustom.src = "https://conversionratestore.github.io/projects/buzzpatch/gift_on_the_page_c_second_iteration.js";
scriptCustom.async = false;
document.head.appendChild(scriptCustom);
//knineti
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
//grantme
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/grantme/grantme_quiz.js";
script.async = false;
document.head.appendChild(script);
//
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/grantme/additional_flow_on_home_page.js";
script.async = false;
document.head.appendChild(script);
//
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/grantme/contact_info_imrovement.js";
script.async = false;
document.head.appendChild(script);

//zenithprepacademy
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
// getCookie("crsoptimize", "QbDvqZkMtU");
// getCookie("crsoptimize", "3FnILEeawO");
function getCookie(name, value) {
  let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]).includes(`${value}`) : undefined;
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

//
document.head.insertAdjacentHTML("beforeend", `<style class="exp">body {opacity: 0 !important;}</style>`);
if (location.href.includes("/yogi/login") || location.href.includes("/yogi/register") || location.href.includes("/checkout")) {
  let script = document.createElement("script");
  script.src = "https://conversionratestore.github.io/projects/doyogawithme/signup-checkout_v2.js";
  script.async = false;
  document.head.appendChild(script);
}

let customScript = document.createElement("script");
customScript.src = "https://conversionratestore.github.io/projects/doyogawithme/free_trial.js";
customScript.async = false;
document.head.appendChild(customScript);
setTimeout(function () {
  document.querySelector(".exp")?.remove();
}, 3000);

//
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/simify/exit_intent_pop_up.js";
script.async = false;
document.head.appendChild(script);
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/simify/exit_intent_pop_up_upsell.js";
script.async = false;
document.head.appendChild(script);
//treblehealth
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/treblehealth/improve_page_3rd_iteration.js";
script.async = false;
document.head.appendChild(script);
//
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/treblehealth/treblehealth_calendar.js";
script.async = false;
document.head.appendChild(script);
//
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/treblehealth/improve_page.js";
script.async = false;
document.head.appendChild(script);
//
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/treblehealth/blog_pages.js";
script.async = false;
document.head.appendChild(script);
//gold_ua
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/gold_ua/exit_intent_pop_up.js";
script.async = false;
document.head.appendChild(script);
//sunvalue
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/sunvalue/solar_savings.js";
script.async = false;
document.head.appendChild(script);
//
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/sunvalue/solar_savings_v3.js";
script.async = false;
document.head.appendChild(script);
//
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/sunvalue/solar_savings_v2.js";
script.async = false;
document.head.appendChild(script);
//lemieux
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/lemieux/free_delivery_v2.js";
script.async = false;
document.head.appendChild(script);
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/lemieux/checkout_promo_code_gift.js";
script.async = false;
document.head.appendChild(script);
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/lemieux/checkout_promo_code_gift_test.js";
script.async = false;
document.head.appendChild(script);
if (document.querySelector("[src=`https://conversionratestore.github.io/projects/lemieux/checkout_promo_code_gift.js`]")) return;
// gadgetgone
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/gadgetgone/pdp_enhancements.js";
script.async = false;
document.head.appendChild(script);
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/gadgetgone/exit_intent_popup.js";
script.async = false;
document.head.appendChild(script);
//zenpatch
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/zenpatch/introduce_bundles.js";
script.async = false;
document.head.appendChild(script);
//sportstech
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/sportstech/sticky_section_pdp.js";
script.async = false;
document.head.appendChild(script);
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/sportstech/exit_intent_popup_relaunch.js";
script.async = false;
document.head.appendChild(script);
//
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/sportstech/exit_intent_popup.js";
script.async = false;
document.head.appendChild(script);
//cerebrum
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/cerebrum/payment_page_improvements_hyp_1_ver_1.js";
script.async = false;
document.head.appendChild(script);
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/cerebrum/payment_page_improvements_hyp_1_ver_2.js";
script.async = false;
document.head.appendChild(script);
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/cerebrum/payment_page_improvements_hyp_1_ver_3.js";
script.async = false;
document.head.appendChild(script);

let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/cerebrum/payment_page_improvements_hyp_2_ver_1.js";
script.async = false;
document.head.appendChild(script);
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/cerebrum/payment_page_improvements_hyp_2_ver_2.js";
script.async = false;
document.head.appendChild(script);
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/cerebrum/payment_page_improvements_hyp_2_ver_3.js";
script.async = false;
document.head.appendChild(script);
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/cerebrum/email_page_enhancements_hyp_3_ver_1.js";
script.async = false;
document.head.appendChild(script);
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/cerebrum/email_page_enhancements_hyp_3_ver_2.js";
script.async = false;
document.head.appendChild(script);
//hint
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/hint/select_trial_price_hyp_1_ver_1.js";
script.async = false;
document.head.appendChild(script);
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/hint/select_trial_price_hyp_1_ver_2.js";
script.async = false;
document.head.appendChild(script);
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/hint/personalization.js";
script.async = false;
document.head.appendChild(script);
if (document.querySelector('[src="https://conversionratestore.github.io/projects/hint/personalization.js"]')) return;
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/hint/new_astrologers_screen_hyp_4_ver_1.js";
script.async = false;
document.head.appendChild(script);
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/hint/new_astrologers_screen_hyp_4_ver_2.js";
script.async = false;
document.head.appendChild(script);
// cerebelly
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/cerebelly/cart_checkout_hyp_3.js";
script.async = false;
document.head.appendChild(script);
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/cerebelly/cart_checkout_hyp_3_test.js";
script.async = false;
document.head.appendChild(script);
if (document.querySelector('[src="https://conversionratestore.github.io/projects/cerebelly/cart_checkout_hyp_3_test.js"]')) return;
//buzzpatch
let scriptCustom = document.createElement("script");
scriptCustom.src = "https://conversionratestore.github.io/projects/buzzpatch/bundle_optimization_b.js";
scriptCustom.async = false;
document.head.appendChild(scriptCustom);
let scriptCustom = document.createElement("script");
scriptCustom.src = "https://conversionratestore.github.io/projects/buzzpatch/bundle_optimization_c.js";
scriptCustom.async = false;
document.head.appendChild(scriptCustom);
// natpat
let scriptCustom = document.createElement("script");
scriptCustom.src = "https://conversionratestore.github.io/projects/buzzpatch/natpat/homepage_iteration_3.js";
scriptCustom.async = false;
document.head.appendChild(scriptCustom);
let scriptCustom = document.createElement("script");
scriptCustom.src = "https://conversionratestore.github.io/projects/buzzpatch/natpat/subscription_optimization.js";
scriptCustom.async = false;
document.head.appendChild(scriptCustom);
let scriptCustom = document.createElement("script");
scriptCustom.src = "https://conversionratestore.github.io/projects/buzzpatch/natpat/homepage_iteration_4.js";
scriptCustom.async = false;
document.head.appendChild(scriptCustom);

let scriptCustom = document.createElement("script");
scriptCustom.src = "https://conversionratestore.github.io/projects/buzzpatch/adults_version_ver_b.js";
scriptCustom.async = false;
document.head.appendChild(scriptCustom);
let scriptCustom = document.createElement("script");
scriptCustom.src = "https://conversionratestore.github.io/projects/buzzpatch/adults_version_ver_c.js";
scriptCustom.async = false;
document.head.appendChild(scriptCustom);
//
let scriptCustom = document.createElement("script");
scriptCustom.src = "https://conversionratestore.github.io/projects/envest/payment_page_improvements_hyp_1_ver_1.js";
scriptCustom.async = false;
document.head.appendChild(scriptCustom);
let scriptCustom = document.createElement("script");
scriptCustom.src = "https://conversionratestore.github.io/projects/envest/payment_page_improvements_hyp_1_ver_2.js";
scriptCustom.async = false;
document.head.appendChild(scriptCustom);
let scriptCustom = document.createElement("script");
scriptCustom.src = "https://conversionratestore.github.io/projects/envest/payment_page_improvements_hyp_1_ver_3.js";
scriptCustom.async = false;
document.head.appendChild(scriptCustom);

//
let scriptCustom = document.createElement("script");
scriptCustom.src = "https://conversionratestore.github.io/projects/buzzpatch/zenpatch/pet/bundle_optimization.js";
scriptCustom.async = false;
document.head.appendChild(scriptCustom);
let scriptCustom = document.createElement("script");
scriptCustom.src = "https://conversionratestore.github.io/projects/buzzpatch/zenpatch/pet/bundle_optimization_test.js";
scriptCustom.async = false;
document.head.appendChild(scriptCustom);

let scriptCustom = document.createElement("script");
scriptCustom.src = "https://conversionratestore.github.io/projects/buzzpatch/zenpatch/subscription_optimization_lp.js";
scriptCustom.async = false;
document.head.appendChild(scriptCustom);

let scriptCustom = document.createElement("script");
scriptCustom.src = "https://conversionratestore.github.io/projects/buzzpatch/sleepypatch/subscription_optimization_lp.js";
scriptCustom.async = false;
document.head.appendChild(scriptCustom);

let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/hint/new_astrologers_screen_hyp_4_var_2_ver_1.js";
script.async = false;
document.head.appendChild(script);

let scriptCustom = document.createElement("script");
scriptCustom.src = "https://conversionratestore.github.io/projects/buzzpatch/zenpatch/pet/top_of_the_lp.js";
scriptCustom.async = false;
document.head.appendChild(scriptCustom);
let scriptCustom = document.createElement("script");
scriptCustom.src = "https://conversionratestore.github.io/projects/buzzpatch/zenpatch/pet/top_of_the_lp_test.js";
scriptCustom.async = false;
document.head.appendChild(scriptCustom);

let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/hint/provide_new_alternatives_ver_1.js";
script.async = false;
document.head.appendChild(script);
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/hint/provide_new_alternatives_ver_2.js";
script.async = false;
document.head.appendChild(script);

let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/hint/provide_new_alternatives_ver_1_test.js";
script.async = false;
document.head.appendChild(script);
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/hint/provide_new_alternatives_ver_2_test.js";
script.async = false;
document.head.appendChild(script);

let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/goodevas/new_pdp.js";
script.async = false;
document.head.appendChild(script);

let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/hint/new_section_structure_and_locker_mechanics_ver_1.js";
script.async = false;
document.head.appendChild(script);
let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/hint/new_section_structure_and_locker_mechanics_ver_2.js";
script.async = false;
document.head.appendChild(script);

let script = document.createElement("script");
script.src = "https://conversionratestore.github.io/projects/roofing4us/welcome_discount_on_pdp.js";
script.async = false;
document.head.appendChild(script);
