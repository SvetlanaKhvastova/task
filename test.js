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
  if (parts.length === 2 && !localStorage.getItem("newUser")) {
    valueCookie = parts.pop().split(";").shift();
    timeNewUser = +(valueCookie.split(".").pop() + "000");
    if (+new Date() - +new Date(timeNewUser) <= 5 * 60 * 1000) {
      console.log(`New User`);
    } else {
      console.log(new Date(timeNewUser));
    }
  }
}

//
let a = {
  na_text: [
    {
      paragraph1_html: "For USA and Canada:",
      paragraph2_html: "3 to 5 working days",
      img: ["us", "ca"],
    },
  ],
  oc_text: [
    {
      paragraph1_html: "For Australia and New Zealand:",
      paragraph2_html: "5 to 7 working days",
      img: ["au", "nz"],
    },
  ],
  europe_text: [
    {
      paragraph1_html: "For <strong>Belgium</strong> and <strong>Luxembourg</strong> :",
      paragraph2_html: "<strong>1 to 3</strong> working days",
      img: ["be", "lx", "en"],
    },
    {
      paragraph1_html: "For <strong>France, Germany</strong> and <strong>the Netherlands :</strong>",
      paragraph2_html: "<strong>2 to 4</strong> working days",
      img: ["fr", "de", "nl"],
    },
    {
      paragraph1_html: "For all <strong>other countries in Europe :</strong>",
      paragraph2_html: "<strong>2 to 5</strong> working days",
      img: ["eu", "ch", "no"],
    },
  ],
};

let s = {
  team: [
    {
      first_name: "Eric",
      last_name: "Delloye",
      title: "general_manager",
      img: "eric_delloye_lucimed",
    },
    {
      first_name: "Louis",
      last_name: "Grauls",
      title: "marketing_manager",
      img: "louis_grauls_lucimed",
    },
    {
      first_name: "Laurence",
      last_name: "Andre",
      title: "sales_manager",
      img: "laurence_andre_lucimed",
    },
    {
      first_name: "Justine",
      last_name: "Wasterlain",
      title: "support",
      img: "justine_retamar_lucimed",
    },
  ],
  inventors: [
    {
      first_name: "Robert",
      last_name: "Poirrier",
      img: "robert_poirrier.png",
    },
    {
      first_name: "Yvon",
      last_name: "Renotte",
      img: "yvon_renotte.jpg",
    },
    {
      first_name: "Vincent",
      last_name: "Moreau",
      img: "vincent_moreau.png",
    },
    {
      first_name: "Gilles",
      last_name: "Vandewalle",
      img: "gilles_vandewalle.jpg",
    },
    {
      first_name: "Daniel",
      last_name: "Neu",
      img: "daniel_neu.jpg",
    },
  ],
};

let d = {
  form: {
    title: "Find a distributor",
    subjects: [
      { name: "Germany", value: "DE" },
      { name: "Australia", value: "AU" },
      { name: "Austria", value: "AT" },
      { name: "Belgium", value: "BE" },
      { name: "China", value: "CN" },
      { name: "Denmark", value: "DK" },
      { name: "Estonia", value: "EE" },
      { name: "France", value: "FR" },
      { name: "Latvia", value: "LV" },
      { name: "Luxembourg", value: "LU" },
      { name: "Norway", value: "NO" },
      { name: "Netherlands", value: "NL" },
      { name: "Czech", value: "CZ" },
      { name: "Unitedkindgom", value: "GB" },
      { name: "Switzerland", value: "CH" },
      { name: "Sweden", value: "SE" },
      { name: "Argentina", value: "AR" },
      { name: "Japan", value: "JP" },
      { name: "Ukraine", value: "UA" },
      { name: "Finland", value: "FI" },
      { name: "Poland", value: "PL" },
      { name: "Russia", value: "RU" },
      { name: "Lithuania", value: "LT" },
      { name: "Southkorea", value: "KR" },
      { name: "Ireland", value: "IE" },
      { name: "Turkey", value: "TR" },
      { name: "Colombia", value: "CO" },
    ],
  },
};

//

if (i.target.classList.contains("testik")) {
  pushDataLayer(`View element on screen`, `Long page. Bonus #1: How to Housetrain Your Dog (worth $69.70)`);
}
if (i.target.classList.contains("testik")) {
  pushDataLayer(`View element on screen`, `Long page. Bonus #2: Cure Your Dog's Separation Anxiety (worth $69.70)`);
}
if (i.target.classList.contains("testik")) {
  pushDataLayer(`View element on screen`, `Long page. Bonus #3: How to Get Kids to Interact with Your Dog (worth $69.70)`);
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
