let treblehealthPages = setInterval(() => {
  if (document.querySelector("#PageContainer")) {
    clearInterval(treblehealthPages);

    console.log("%c EXP: Kits (DEV: SKh)", "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;");
    const $$el = (selector) => document.querySelectorAll(selector);
    const $el = (selector) => document.querySelector(selector);
    const git = "https://conversionratestore.github.io/projects/";

    const clarityInterval = setInterval(function () {
      if (typeof clarity == "function") {
        clearInterval(clarityInterval);
        //
      }
    }, 1000);

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

    function checkFocusTime(selector, event, location) {
      const checker = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.getAttribute("data-startShow")) {
            entry.target.setAttribute("data-startShow", new Date().getTime());
          } else if (!entry.isIntersecting && entry.target.getAttribute("data-startShow")) {
            const startShow = entry.target.getAttribute("data-startShow");
            const endShow = new Date().getTime();
            const timeShow = Math.round(endShow - startShow);
            entry.target.removeAttribute("data-startShow");
            pushDataLayer(event, timeShow, "Visibility", location);
            checker.unobserve(entry.target);
          }
        });
      });

      checker.observe(document.querySelector(selector));
    }

    let page = null;
    switch (window.pathname) {
      case "/":
        page = "homePage";
        break;
      case "/cart":
        page = "cartPage";
        break;
      case "/collections/best-red-light-therapy-catalog":
        page = "catalogPage";
        break;
      default:
        break;
    }

    const svgObj = {
      gradientGreenAbsolIcon: /*html*/ `
        <svg xmlns="http://www.w3.org/2000/svg" width="149" height="28" viewBox="0 0 149 28" fill="none">
            <path d="M148.197 1.47753C148.559 0.811188 148.077 0 147.318 0H1C0.447723 0 0 0.447715 0 1V27C0 27.5523 0.447708 28 1 28H147.272C148.041 28 148.522 27.1685 148.139 26.5018L141.458 14.8735C141.285 14.5724 141.281 14.203 141.447 13.8978L148.197 1.47753Z" fill="#F5F5FD"/>
            <path d="M148.197 1.47753C148.559 0.811188 148.077 0 147.318 0H1C0.447723 0 0 0.447715 0 1V27C0 27.5523 0.447708 28 1 28H147.272C148.041 28 148.522 27.1685 148.139 26.5018L141.458 14.8735C141.285 14.5724 141.281 14.203 141.447 13.8978L148.197 1.47753Z" fill="#00B67A"/>
        </svg>
      `,
      gradientWhiteAbsolIcon: /*html*/ `
        <svg xmlns="http://www.w3.org/2000/svg" width="194" height="28" viewBox="0 0 194 28" fill="none">
            <path d="M193.197 1.47753C193.559 0.811188 193.077 0 192.318 0H1C0.447708 0 0 0.447715 0 1V27C0 27.5523 0.447708 28 1 28H192.272C193.041 28 193.522 27.1685 193.139 26.5018L186.458 14.8735C186.285 14.5724 186.281 14.203 186.447 13.8978L193.197 1.47753Z" fill="#F5F5FD"/>
            <path d="M193.197 1.47753C193.559 0.811188 193.077 0 192.318 0H1C0.447708 0 0 0.447715 0 1V27C0 27.5523 0.447708 28 1 28H192.272C193.041 28 193.522 27.1685 193.139 26.5018L186.458 14.8735C186.285 14.5724 186.281 14.203 186.447 13.8978L193.197 1.47753Z" fill="white"/>
        </svg>
      `,
      moneyBackIcon: /*html*/ `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
            <path d="M16.4325 2.85454C12.4583 2.85454 9.05216 0.182471 9.01644 0.153893C8.8903 0.0542196 8.73424 0 8.57348 0C8.41271 0 8.25665 0.0542196 8.13051 0.153893C8.09479 0.182471 4.70112 2.85454 0.714456 2.85454C0.524971 2.85454 0.343246 2.92981 0.20926 3.0638C0.075273 3.19778 0 3.37951 0 3.56899V9.9991C0 14.7931 1.93618 17.1437 8.28055 19.9372C8.37265 19.9786 8.47249 20 8.57348 20C8.67446 20 8.7743 19.9786 8.8664 19.9372C15.2108 17.1437 17.147 14.7931 17.147 9.9991V3.56899C17.147 3.37951 17.0717 3.19778 16.9377 3.0638C16.8037 2.92981 16.622 2.85454 16.4325 2.85454ZM8.57348 15.7148C7.44303 15.7148 6.33796 15.3795 5.39803 14.7515C4.4581 14.1234 3.72551 13.2308 3.2929 12.1864C2.8603 11.142 2.74711 9.99276 2.96765 8.88403C3.18819 7.77531 3.73255 6.75687 4.5319 5.95753C5.33125 5.15818 6.34968 4.61381 7.45841 4.39328C8.56714 4.17274 9.71636 4.28592 10.7608 4.71853C11.8052 5.15113 12.6978 5.88372 13.3259 6.82366C13.9539 7.76359 14.2891 8.86865 14.2891 9.9991C14.2891 11.515 13.6869 12.9688 12.6151 14.0407C11.5432 15.1126 10.0894 15.7148 8.57348 15.7148Z" fill="#773BD9"/>
            <path d="M10.2096 8.06301L7.85905 10.4207L6.9374 9.49193C6.80181 9.36262 6.62102 9.29148 6.43367 9.29371C6.24632 9.29593 6.06727 9.37135 5.93478 9.50383C5.8023 9.63632 5.72689 9.81537 5.72466 10.0027C5.72243 10.1901 5.79357 10.3709 5.92288 10.5065L7.35179 11.9354C7.41787 12.002 7.49643 12.0549 7.58298 12.0912C7.66953 12.1275 7.76237 12.1463 7.85621 12.1467C7.95005 12.1471 8.04304 12.129 8.12988 12.0934C8.21671 12.0578 8.29569 12.0055 8.3623 11.9394L8.36632 11.9354L11.2241 9.07754C11.3534 8.94195 11.4246 8.76116 11.4224 8.57381C11.4201 8.38646 11.3447 8.20741 11.2122 8.07492C11.0797 7.94244 10.9007 7.86702 10.7133 7.8648C10.526 7.86257 10.3452 7.93371 10.2096 8.06301Z" fill="#773BD9"/>
        </svg>
      `,
      cartBtnIcon: /*html*/ `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.32986 18.6063C7.89467 18.6063 7.46926 18.7354 7.10742 18.9771C6.74557 19.2189 6.46355 19.5626 6.29701 19.9646C6.13048 20.3667 6.0869 20.8091 6.1718 21.2359C6.2567 21.6627 6.46626 22.0548 6.77399 22.3625C7.08171 22.6702 7.47377 22.8798 7.90059 22.9647C8.32742 23.0496 8.76983 23.006 9.17189 22.8395C9.57395 22.673 9.91759 22.3909 10.1594 22.0291C10.4011 21.6673 10.5302 21.2418 10.5302 20.8067C10.5302 20.2231 10.2984 19.6634 9.88573 19.2508C9.47308 18.8381 8.91342 18.6063 8.32986 18.6063ZM18.5981 18.6063C18.1629 18.6063 17.7375 18.7354 17.3756 18.9771C17.0138 19.2189 16.7318 19.5626 16.5652 19.9646C16.3987 20.3667 16.3551 20.8091 16.44 21.2359C16.5249 21.6627 16.7345 22.0548 17.0422 22.3625C17.3499 22.6702 17.742 22.8798 18.1688 22.9647C18.5956 23.0496 19.038 23.006 19.4401 22.8395C19.8422 22.673 20.1858 22.3909 20.4276 22.0291C20.6694 21.6673 20.7984 21.2418 20.7984 20.8067C20.7984 20.2231 20.5666 19.6634 20.1539 19.2508C19.7413 18.8381 19.1816 18.6063 18.5981 18.6063ZM7.20998 13.7963C7.20998 13.7963 15.9196 13.5373 18.3877 13.4906C18.8149 13.4823 19.2305 13.3498 19.5838 13.1093C19.937 12.8687 20.2125 12.5305 20.3767 12.136L22.831 6.24046C22.9702 5.906 23.0247 5.54232 22.9897 5.18173C22.9546 4.82114 22.831 4.47478 22.6299 4.17342C22.4289 3.87205 22.1565 3.62501 21.837 3.45421C21.5174 3.28342 21.1607 3.19417 20.7984 3.19437L5.62528 3.20033L5.57944 2.8767C5.50107 2.35568 5.23834 1.88008 4.83901 1.53636C4.43969 1.19264 3.93029 1.00362 3.4034 1.00367L1.73344 1C1.53892 1 1.35237 1.07727 1.21482 1.21482C1.07727 1.35237 1 1.53892 1 1.73344C1 1.92797 1.07727 2.11452 1.21482 2.25207C1.35237 2.38961 1.53892 2.46689 1.73344 2.46689H3.40295C3.57856 2.46756 3.7481 2.53122 3.88076 2.64629C4.01342 2.76137 4.10038 2.92022 4.12585 3.09398L5.75822 14.0136C5.88792 14.8826 6.32531 15.6761 6.99078 16.2498C7.65625 16.8235 8.50557 17.1392 9.38418 17.1394H20.065C20.2595 17.1394 20.446 17.0622 20.5836 16.9246C20.7211 16.7871 20.7984 16.6005 20.7984 16.406C20.7984 16.2115 20.7211 16.0249 20.5836 15.8874C20.446 15.7498 20.2595 15.6725 20.065 15.6725H9.38418C8.85703 15.6725 8.3474 15.4832 7.94804 15.1392C7.54868 14.7951 7.28612 14.319 7.20815 13.7977L7.20998 13.7963Z" fill="#212121"/>
        </svg>
        `,
    };

    let arrKits = [
      {
        1: ["Novaa Light Pad with remote control + Novoral Care Pro", "https://novaalab.com/cdn/shop/products/IMG_1001-600pxquaqre_medium.jpg?v=1662108128", "$359.80", "$800.00", "-55%", `${git}novaalab/img/rating_stars.svg`, "(339)", "Home & Travel Kit"],
      },
      {
        2: ["Novoral Care Pro + Sonic Toothbrush + 2 Brush heads", "https://novaalab.com/cdn/shop/products/IMG_1001-600pxquaqre_medium.jpg?v=1662108128", "$175.70", "$345.70", "-49%", `${git}novaalab/img/rating_stars.svg`, "(111)", "Complex Care Kit"],
      },
      {
        3: ["Novaa Light Pad with remote control + Novaa Light Pro", "https://novaalab.com/cdn/shop/products/IMG_1001-600pxquaqre_medium.jpg?v=1662108128", "$329.90", "$900.00", "-63%", `${git}novaalab/img/rating_stars.svg`, "(227)", "Oral Health Care Kit"],
      },
    ];

    let arrKitsPopup = [
      {
        2: [
          "Complete Oral HealthCare Kit",
          "Rewind the clock on gum damage and tooth decay using Novoral Care Pro’s advanced “Dual-Action Light Therapy”; pair with the Sonic Toothbrush and our silky brush heads to brush to brush sensitive teeth for your cleanest, healthiest, brightest smile yet.",
          "$175.70",
          "$345.70",
          "Save $170.00",
          `<ul class="popup_list_product">
            <li class="popup_item_product">
                <div class="popup_item_wrapper">
                <img src="" alt="Novoral Care Pro" />
                <div class="popup_product_descr">
                    <h4 class="popup_item_product_title">Novoral Care Pro</h4>
                    <div class="kit_stars_wrapper">
                    <img src="${git}novaalab/img/rating_stars.svg" alt="stars" />
                    <span class="rating_txt">(111)</span>
                    </div>
                </div>
                </div>
                <ul class="popup_list_descr">
                <li class="popup_item_descr">Treats receding gums and periodontal gum disease</li>
                <li class="popup_item_descr">Kills the germs that cause bad breath</li>
                <li class="popup_item_descr">Gently whitens your teeth for a brighter smile</li>
                <li class="popup_item_descr">Strengthens sensitive teeth and speeds up recovery from surgery</li>
                <li class="popup_item_descr">Advanced technology: use for only 5 minutes per day for transformed teeth and oral hygiene.</li>
                </ul>
            </li>
            <li class="popup_item_product">
                <div class="popup_item_wrapper">
                <img src="" alt="Sonic toothbrush" />
                <div class="popup_product_descr">
                    <h4 class="popup_item_product_title">Sonic toothbrush</h4>
                    <div class="kit_stars_wrapper">
                    <img src="${git}novaalab/img/rating_stars.svg" alt="stars" />
                    <span class="rating_txt">(111)</span>
                    </div>
                </div>
                </div>
                <ul class="popup_list_descr">
                <li class="popup_item_descr">Creates a silky brushing experience that gently cleans sensitive teeth</li>
                <li class="popup_item_descr">Up to 48,000 micro-vibrations per minute for discomfort-free removal of plaque and debris</li>
                <li class="popup_item_descr">Pressure sensor that alerts you if you're applying too much force</li>
                </ul>
            </li>
            <li class="popup_item_product">
                <div class="popup_item_wrapper">
                <img src="" alt="2 brush heads" />
                <div class="popup_product_descr">
                    <h4 class="popup_item_product_title">2 brush heads</h4>
                </div>
                </div>
                <ul class="popup_list_descr">
                <li class="popup_item_descr">Replace every three month for best results</li>
                </ul>
            </li>
            </ul>`,
        ],
      },
      {
        3: [
          "Home & Travel Kit",
          "Relieve back, knee, and neck pain, accelerate post surgery healing, and alleviate cellular damage from arthritis and neuropathy with Novaa Light Pad’s NEW 2023 Red Light Therapy. Pair with the Novaa Light Pro, perfect for travel, and designed to give you a compact, efficient, and convenient way to access red light therapy pain relief, improved blood circulation, and healthier skin while on the go.",
          "$329.90",
          "$900.00",
          "Save $570.10",
          `<ul class="popup_list_product">
            <li class="popup_item_product">
                <div class="popup_item_wrapper">
                <img src="" alt="Novaa Light Pad with remote control [New 2023]" />
                <div class="popup_product_descr">
                    <h4 class="popup_item_product_title">Novaa Light Pad with remote control [New 2023]</h4>
                    <div class="kit_stars_wrapper">
                    <img src="${git}novaalab/img/rating_stars.svg" alt="stars" />
                    <span class="rating_txt">(339)</span>
                    </div>
                </div>
                </div>
                <ul class="popup_list_descr">
                <li class="popup_item_descr">Treats your back, knees, neck</li>
                <li class="popup_item_descr">Eases of back pain, muscle pain, joint pain</li>
                <li class="popup_item_descr">Reduces arthritis, inflammations and chronic pain</li>
                <li class="popup_item_descr">Treats neuropathy and chronic pain conditions</li>
                <li class="popup_item_descr">Promotes healing after replacement/surgery</li>
                </ul>
            </li>
            <li class="popup_item_product">
                <div class="popup_item_wrapper">
                <img src="" alt="Novaa Light Pro" />
                <div class="popup_product_descr">
                    <h4 class="popup_item_product_title">Novaa Light Pro</h4>
                    <div class="kit_stars_wrapper">
                    <img src="${git}novaalab/img/rating_stars.svg" alt="stars" />
                    <span class="rating_txt">(227)</span>
                    </div>
                </div>
                </div>
                <ul class="popup_list_descr">
                <li class="popup_item_descr">The #1 portable light therapy. Portable, powerful and convenient for on the go.</li>
                <li class="popup_item_descr">Red light therapy pain treatment</li>
                <li class="popup_item_descr">Red light therapy blood circulation</li>
                <li class="popup_item_descr">Promotes improved skin health</li>
                </ul>
            </li>
            </ul>`,
        ],
      },
      {
        1: [
          "Complex Care Kit",
          "This kit provides comprehensive care by addressing both physical pain and oral health needs. The Novaa Light Pad offers targeted pain relief and promotes healing in areas like the back, knees, and neck, making it ideal for various conditions and post-surgery recovery. Simultaneously, the Novoral Care Pro ensures optimal oral hygiene, treating gum diseases, whitening teeth, and eliminating bad breath, contributing to overall health and wellness.",
          "$359.80",
          "$800.00",
          "Save $440.20",
          `<ul class="popup_list_product">
            <li class="popup_item_product">
                <div class="popup_item_wrapper">
                <img src="" alt="Novaa Light Pad with remote control [New 2023]" />
                <div class="popup_product_descr">
                    <h4 class="popup_item_product_title">Novaa Light Pad with remote control [New 2023]</h4>
                    <div class="kit_stars_wrapper">
                    <img src="${git}novaalab/img/rating_stars.svg" alt="stars" />
                    <span class="rating_txt">(339)</span>
                    </div>
                </div>
                </div>
                <ul class="popup_list_descr">
                <li class="popup_item_descr">Treats your back, knees, neck</li>
                <li class="popup_item_descr">Eases of back pain, muscle pain, joint pain</li>
                <li class="popup_item_descr">Reduces arthritis, inflammations and chronic pain</li>
                <li class="popup_item_descr">Treats neuropathy and chronic pain conditions</li>
                <li class="popup_item_descr">Promotes healing after replacement/surgery</li>
                </ul>
            </li>
            <li class="popup_item_product">
                <div class="popup_item_wrapper">
                <img src="" alt="Novoral Care Pro" />
                <div class="popup_product_descr">
                    <h4 class="popup_item_product_title">Novoral Care Pro</h4>
                    <div class="kit_stars_wrapper">
                    <img src="${git}novaalab/img/rating_stars.svg" alt="stars" />
                    <span class="rating_txt">(111)</span>
                    </div>
                </div>
                </div>
                <ul class="popup_list_descr">
                <li class="popup_item_descr">Treats receding gums and periodontal gum disease</li>
                <li class="popup_item_descr">Kills the germs that cause bad breath</li>
                <li class="popup_item_descr">Gently whitens your teeth for a brighter smile</li>
                <li class="popup_item_descr">Strengthens sensitive teeth and speeds up recovery from surgery</li>
                <li class="popup_item_descr">Advanced technology: use for only 5 minutes per day for transformed teeth and oral hygiene.</li>
                </ul>
            </li>
            </ul>`,
        ],
      },
    ];

    const mainStyle = /*html */ `
    <style>
        body #shopify-section-template--20243474579801__main{
            margin-bottom: 80px;
        }
        body #shopify-section-template--20243474579801__59b48336-b7c4-46b5-912d-ad4859a915b1{
            padding-top: 61px;
        }
    </style>
    `;

    $el("head").insertAdjacentHTML("beforeend", mainStyle);

    class ImprovePage {
      constructor(page) {
        this.page = page;
        this.init();
      }

      onRenderHtml(selectorStart, place, selectorNew, newHtml) {
        if (!$el(selectorNew) && $el(selectorStart)) {
          $el(selectorStart).insertAdjacentHTML(place, newHtml);
        }
      }

      onRenderKitItem(id, title, img, price, oldPrice, discountTxt, stars, rating, nameAbsolute) {
        const kitsItem = /*html */ `
            <li class="kits_item" id="${id}">
                <div class="kit_img_wrapper">
                    <img src="${img}" alt="${title}" />
                    <div class="kit_bgr_name">${svgObj.gradientGreenAbsolIcon}<span>${nameAbsolute}</span></div>
                    <div class="kit_bgr_money_back">
                        ${svgObj.gradientWhiteAbsolIcon}
                        <div class="kit_money_back">${svgObj.moneyBackIcon}<span>60 Days money back</span></div>
                    </div>
                </div>
                <div class="kit_descr_wrapper">
                    <div class="kit_stars_wrapper">
                        <img src="${stars}" alt="stars" />
                        <span class="rating_txt">${rating}</span>
                    </div>
                    <h3 class="kit_name">${title}</h3>
                    <div class="kit_price_wrapper">
                        <span class="kit_my_price">${price}</span>
                        <span class="kit_my_old_price">${oldPrice}</span>
                        <span class="kit_discount_txt">${discountTxt}</span>
                    </div>
                    <div class="kit_btn_wrapper">
                        <button data-id="${id}" class="kit_learn_more">Learn more</button>
                        <button class="kit_add_to_cart">${svgObj.cartBtnIcon}</button>
                    </div>
                </div>
            </li>
        `;
        return kitsItem;
      }

      onRenderHomePageKits() {
        if ($el(".kits_list")?.children.length !== arrKits.length) {
          arrKits.forEach((kit) => {
            for (let key in kit) {
              $el(".kits_list")?.insertAdjacentHTML("beforeend", this.onRenderKitItem(key, kit[key][0], kit[key][1], kit[key][2], kit[key][3], kit[key][4], kit[key][5], kit[key][6], kit[key][7]));
            }
          });
        }
      }

      onClickBtnLearnMore() {
        $$el(".kit_learn_more")?.forEach((el) => {
          el.addEventListener("click", (e) => {
            if (!e.target.getAttribute("data-test")) {
              this.onTogglePopUp(el.getAttribute("data-id"));
            }
            e.target.setAttribute("data-test", "1");
            setTimeout(() => {
              if (e.target.getAttribute("data-test")) {
                e.target.removeAttribute("data-test");
              }
            }, 1000);
          });
        });
      }

      onRenderContentPopUp(id, title, txt, price, oldPrice, discountTxt, htmlDescr) {
        const styleContentPopUp = /*html */ `
        <style>

        </style>
        `;
        const contentPopUp = /*html */ `
            ${styleContentPopUp}
            <div class="content_popup">
                <div class="popup_full_descr">
                    <h3 class="popup_sub_title">What's included:</h3>
                    ${htmlDescr}
                </div>
                <div class="popup_main_descr">
                    <div class="popup_top_block">
                    <h2 class="popup_main_title">${title}</h2>
                    <p class="popup_main_txt">${txt}</p>
                    </div>
                    <div class="popup_bottom_block">
                    <div class="popup_price_wrapper">
                        <span class="popup_my_price">${price}</span>
                        <span class="popup_my_old_price">${oldPrice}</span>
                        <span class="popup_discount_txt">${discountTxt}</span>
                    </div>
                    <button data-id="${id}" class="popup_add_to_cart">Add to cart</button>
                    </div>
                </div>
            </div>
        `;

        return contentPopUp;
      }

      onTogglePopUp(id) {
        const body = document.body,
          html = $el("html"),
          overlay = $el(".overlay_popup"),
          btnClose = $$el(".popup_close");

        arrKitsPopup.forEach((kit) => {
          for (let key in kit) {
            if (key === id && !$el(".content_popup")) {
              $el(".container_popup")?.insertAdjacentHTML("beforeend", this.onRenderContentPopUp(key, kit[key][0], kit[key][1], kit[key][2], kit[key][3], kit[key][4], kit[key][5]));
            }
          }
        });

        onOpenPopup();

        btnClose.forEach((el) => {
          el.addEventListener("click", (e) => {
            if (!e.target.getAttribute("data-test")) {
              onClosePopup();
            }
            e.target.setAttribute("data-test", "1");
            setTimeout(() => {
              if (e.target.getAttribute("data-test")) {
                e.target.removeAttribute("data-test");
              }
            }, 1000);
          });
        });

        // click on overlay popup
        overlay.addEventListener("click", (e) => {
          if (e.target.matches(".overlay_popup")) {
            onClosePopup();
          }
        });

        function onOpenPopup() {
          overlay.classList.add("active");
          body.style.overflow = "hidden";
          html.style.overflow = "hidden";
        }

        function onClosePopup() {
          overlay.classList.remove("active");
          body.style.overflow = "initial";
          html.style.overflow = "initial";

          setTimeout(() => {
            $el(".content_popup")?.remove();
          }, 600);
        }
      }

      init() {
        const popUp = /*html */ `
        <div class="overlay_popup">
            <style>
                .overlay_popup {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(20, 20, 20, 0.6);
                    display: flex;
                    overflow-y: auto;
                    z-index: 2147483003;
                    transition: all 0.3s ease;
                    opacity: 0;
                    pointer-events: none;
                }
                .overlay_popup.active {
                    opacity: 1;
                    pointer-events: initial;
                }
                .overlay_popup .container_popup {
                    display: block;
                    position: relative;
                    max-width: 900px;
                    width: 100%;
                    padding: 30px 30px 45px;
                    margin: auto;
                    background: #f5f5fd;
                    transition: all 0.5s ease 0s;
                    border-radius: 5px;
                }
                .overlay_popup .container_popup > svg {
                    position: absolute;
                    top: 24px;
                    right: 29px;
                    outline: none;
                    cursor: pointer;
                }
            </style>
            <div class="container_popup">
                <svg class="popup_close" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00022 6.54509L1.45508 0L0.000548353 1.45452L6.54569 7.99961L0 14.5453L1.45453 15.9998L8.00022 9.45413L14.5458 15.9997L16.0004 14.5452L9.45475 7.99961L15.9998 1.45459L14.5453 7.21945e-05L8.00022 6.54509Z" fill="#212121" />
                </svg>
            </div>
        </div>
        `;
        const styleKitItem = /*html */ `
        <style>
        .kits_item{
            display: flex;
            flex-direction: column;
            gap: 12px;
            width: calc(100% / 3);
            border-radius: 6px;
            border: 1px solid var(--Colors-Border, #E2E2E2);
            background: var(--Colors-Wight, #FFF);
        }
        .kit_img_wrapper{
            position: relative;
            border-radius: 4px 4px 0px 0px;
            background: rgba(245, 245, 253, 1);
            height: 300px;
        }
        .kit_bgr_name{
            position: absolute;
            display: flex;
            align-items: center;
            left: 0;
            top: 6px;
        }
        .kit_bgr_name span{
            position: absolute;
            left: 9px;
            color: #FFF;
            font-family: Urbanist;
            font-size: 14px;
            font-weight: 700;
            line-height: 18px;
            letter-spacing: 0.7px;
            z-index: 1;
        }
        .kit_bgr_money_back{
            position: absolute;
            display: flex;
            align-items: center;
            top: 40px;
        }
        .kit_money_back{
            position: absolute;
            left: 9px;
            display: flex;
            gap: 8px;
        }
        .kit_money_back span{
            color: var(--Colors-Black-500, #212121);
            font-family: Urbanist;
            font-size: 14px;
            font-weight: 600;
            line-height: 20px;
            letter-spacing: 0.7px;
        }
        .kit_descr_wrapper{
            padding: 0 16px 16px;
        }
        .kit_stars_wrapper{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 8px;
            margin: 0 0 4px;
        }
        .kit_stars_wrapper span{
            color: var(--Colors-Black-500, #212121);
            font-family: Urbanist;
            font-size: 16px;
            font-weight: 700;
            line-height: 20px;
            letter-spacing: 0.8px;
            text-transform: uppercase;
        }
        h3.kit_name{
            color: var(--Colors-Black-500, #212121);
            font-family: Urbanist;
            font-size: 24px;
            font-weight: 700;
            line-height: 32px;
            letter-spacing: 1.2px;
            text-transform: initial;
            margin: 0;
        }
        .kit_price_wrapper{
            display: flex;
            align-items: center;
            gap: 8px;
            margin: 12px 0;
        }
        .kit_my_price{
            color: var(--Colors-Black-500, #212121);
            font-family: Urbanist;
            font-size: 24px;
            font-weight: 700;
            line-height: 32px;
            letter-spacing: 1.2px;
            text-transform: uppercase;
            margin: 0;
        }
        .kit_my_old_price{
            color: var(--Grey-300, #6D6E75);
            font-family: Urbanist;
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
            letter-spacing: 0.7px;
            text-decoration: line-through;
            text-transform: uppercase;
            margin: 0;
        }
        .kit_discount_txt{
            border-radius: 100px;
            background: rgba(216, 68, 50, 0.10);
            padding: 2px 10px;
            color: #D84432;
            font-family: Urbanist;
            font-size: 14px;
            font-weight: 700;
            line-height: 22px;
            margin: 0;
        }
        .kit_btn_wrapper{
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
        }
        .kit_learn_more{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            border-radius: 4px;
            background: radial-gradient(2726% 90.92% at 2.15% 56%, #691BEA 0%, #9E41EF 100%);
            padding: 12px 32px;
            color: var(--Wight, #FFF);
            font-family: Urbanist;
            font-size: 16px;
            font-weight: 700;
            line-height: 150%;
        }
        .kit_add_to_cart{
            display: flex;
            width: 100%;
            max-width: 68px;
            padding: 12px 22px;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
            background: var(--Purple-background, #F5F5FD);
        }
        @media (max-width: 768px) {

        }
        </style>
        `;
        const kitsHomePage = /*html */ `
        <div class="kits_home_page">
            <style>
                .kits_txt{
                    color: var(--Colors-Purple, #773BD9);
                    font-family: Inter;
                    font-size: 24px;
                    font-weight: 700;
                    line-height: 32px;
                    margin: 0;
                }
                h2.kits_main_title{
                    color: var(--Colors-Black-500, #212121);
                    font-family: Urbanist;
                    font-size: 42px;
                    font-weight: 700;
                    line-height: 56px;
                    margin: 16px 0 40px;
                }
                .kits_list{
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    list-style: none;
                    gap: 30px;
                    margin: 0;
                    padding: 0;
                }
                @media (max-width: 768px) {
                }
            </style>
            <div class="page-width">
                <p class="kits_txt">Novaalab</p>
                <h2 class="kits_main_title">Choose our kits for advanced pain relief</h2>
                <ul class="kits_list">${styleKitItem}</ul>
            </div>
        </div>
        `;
        // RENDER HTML
        //  popup
        if (this.page === "homePage" || this.page === "catalogPage") {
          this.onRenderHtml("body", "afterbegin", ".overlay_popup", popUp);
        }
        // homePage
        this.onRenderHtml("#shopify-section-template--20243474579801__main", "afterend", ".kits_home_page", kitsHomePage);
        // homePage Kits
        if (this.page === "homePage") {
          this.onRenderHomePageKits();
        }

        // on Click Btn Learn More
        this.onClickBtnLearnMore();
      }
    }

    new ImprovePage(page);
  }
}, 500);
