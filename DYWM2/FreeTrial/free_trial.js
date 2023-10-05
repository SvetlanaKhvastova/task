let freeTrial = setInterval(() => {
  if (document) {
    clearInterval(freeTrial);

    let freeTrialStyle = /*html */ `
      <style>
        /* Unauthorized user hero main*/
        [aria-label="Promotions"] .sfc-hero__heading.sfc-heading{
            color: #FFF;
            font-size: 68px;
            font-weight: 500;
            line-height: 74px;
        }
        [aria-label="Promotions"] .sfc-hero__body.sfc-hero__body--limit > p {
            color: #FFF;
            font-size: 18px;
            font-weight: 400;
            line-height: 26px;
        }
        [aria-label="Promotions"] .sfc-hero__body.sfc-hero__body--limit{
            margin: 24px 0 48px;
        }
        [aria-label="Promotions"] .sfc-hero__button{
            border-radius: 30px;
            border: 2px solid #E0E0E0;
            opacity: 0.9;
            background: #FFF;
            backdrop-filter: blur(2px);
            padding: 16px 40px;
        }
        [aria-label="Promotions"] .sfc-hero__button .sfc-button__text{
            color: #017922;
            font-size: 18px;
            font-weight: 700;
            line-height: 26px;
        }
        /*change Text btn Sign Up*/
        .o-region--header {
            padding: 7px 0.5em 5px 0;
        }
        .c-dropdownMenu__link:not(.c-button), .c-dropdownMenu__button:not(.c-button){
            font-size: 16.5px;
        }
        .block-system-menu-block--header.block.block-menu.navigation.menu--account{
            width: unset !important;
        }
        .c-dropdownMenu__item a[data-drupal-link-system-path="become-a-subscriber"]{
            color: #FFF;
            font-size: 18px;
            font-weight: 700;
            line-height: 24px;
            text-transform: capitalize;
            padding: 7px 16px;
        }
        /**promoteSubscriptionWrap */
        .o-page__banner + #promoteSubscriptionWrap{
           padding: 25px 0 40px;
        }
        #promoteSubscriptionWrap {
        position: relative;
        background: #fff;
        width: 100%;
        padding: 42px 0 40px;
      }
      .bgr_gray {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        background: #f6f6f6;
        min-height: 95px;
        max-height: 95px;
        height: 100%;
        width: 100%;
      }
      .new_container {
        max-width: 1040px;
        margin: 0 auto;
        width: 90%;
        padding: 30px;
        border-radius: 12px;
        background: #fff;
        box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.15);
      }
      .btn_wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 16px;
        margin-bottom: 16px;
        border-bottom: 2px solid #f6f6f6;
      }
      .btn_wrapper h2 {
        font-family: "Manrope", sans-serif;
        color: #272727;
        font-size: 24px;
        font-weight: 700;
        line-height: 30px;
        margin: 0;
      }
      .accent_color {
        color: #017922;
      }
      #UnlockPremiumContentLink,
      #subscribeSaveLink {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        max-width: 302px;
        width: 100%;
        height: 48px;
        border-radius: 30px;
        background: #017922;
        transition: all 0.3s ease;
      }
      #UnlockPremiumContentLink:hover,
      #subscribeSaveLink:hover {
        color: #ffffff;
        background: #00601b;
        border-color: #007922;
        text-decoration: unset;
      }
      #UnlockPremiumContentLink span {
        font-family: "Manrope", sans-serif;
        color: #fff;
        font-size: 16px;
        font-weight: 700;
        line-height: 32px;
        text-transform: capitalize;
      }
      .toggle_btn_features {
        display: flex;
        gap: 8px;
        cursor: pointer;
        margin: 18px auto 0;
        align-items: center;
        justify-content: center;
        width: max-content;
      }
      .toggle_btn_features span {
        font-family: "Manrope", sans-serif;
        color: #027db8;
        font-size: 14px;
        font-weight: 700;
        line-height: 21px;
        text-decoration-line: underline;
        text-transform: capitalize;
      }
      .toggle_btn_features > svg {
        transition: all 0.3s ease;
      }
      .toggle_btn_features.open_var > svg {
        transform: rotateX(180deg);
      }
      .new_features_list,
      .hidden_new_features_list {
        display: flex;
        justify-content: space-between;
        gap: 24px;
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .new_features_list > li,
      .hidden_new_features_list > li {
        width: 30%;
      }
      .mini_block {
        margin-top: 24px;
      }
      .mini_block > li {
        width: 100%;
      }
      .mini_block > li .list_main_title {
        margin-bottom: 12px;
      }
      .hidden_inform_box {
        display: none;
        margin-top: 12px;
      }
      .list_main_title {
        position: relative;
        color: #272727;
        font-family: "Manrope", sans-serif;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        margin: 0;
        padding-left: 52px;
      }
      .list_main_title[data-title]::before {
        position: absolute;
        content: "";
        width: 40px;
        height: 40px;
        background: url(https://conversionratestore.github.io/projects/doyogawithme/img/premium.svg) no-repeat center center;
        top: 0;
        left: 0;
        background-size: contain;
      }
      .list_main_title[data-title="yoga_person"]::before {
        background: url(https://conversionratestore.github.io/projects/doyogawithme/img/yoga_person.svg) no-repeat center center;
        background-size: contain;
      }
      .list_main_title[data-title="yoga"]::before {
        background: url(https://conversionratestore.github.io/projects/doyogawithme/img/yoga.svg) no-repeat center center;
        background-size: contain;
      }
      .list_main_title[data-title="devices"]::before {
        background: url(https://conversionratestore.github.io/projects/doyogawithme/img/devices.svg) no-repeat center center;
        background-size: contain;
      }
      .list_txt {
        color: #555;
        font-family: "Manrope", sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
        margin: 0;
        max-width: 300px;
      }
      .your_store_wrap {
        margin-top: 48px;
      }
      .your_store_wrap .list_main_title {
        padding: 0;
        margin-bottom: 12px;
      }
      .professional_classes_list {
        list-style: disc;
        color: #555;
        font-size: 12px;
        margin-top: 12px;
        padding: 0 0 0 23px;
      }
      .professional_classes_list > li + li {
        margin-top: 10px;
      }
      .store_icon {
        display: flex;
        justify-content: flex-start;
        gap: 24px;
        flex-wrap: wrap;
      }
      .store_icon img {
        max-width: 140px;
        width: 100%;
      }
      [data-mob],
      [data-openmobvar] {
        display: none;
      }
      /*https://www.doyogawithme.com/become-a-subscriber ->>>>> promoteSubscriptionWrap */
      .path-become-a-subscriber .new_box_subscriber {
        background: linear-gradient(45deg, #003a67 0%, #007db8 100%);
        padding: 40px 10px 142px;
      }
      .path-become-a-subscriber #promoteSubscriptionWrap {
        background: #faf8f6;
        padding: 15px 0;
      }
      .path-become-a-subscriber .bgr_gray,
      .path-become-a-subscriber #UnlockPremiumContentLink {
        display: none;
      }
      .path-become-a-subscriber .btn_wrapper {
        justify-content: center;
        margin-bottom: 10px;
      }
      .path-become-a-subscriber .new_container {
        margin-bottom: -73px;
        z-index: 2;
        margin-top: -119px;
      }
      .path-become-a-subscriber .new_title_subscriber {
        color: #fff;
        text-align: center;
        font-family: "Manrope", sans-serif !important;
        font-size: 44px;
        font-weight: 700;
        line-height: 52px;
        max-width: 636px;
        margin: 0 auto 40px;
      }
        /*banner video blockers */
      .sfc-nodePlayable__lockContainerInner {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.25));
        backdrop-filter: blur(3px);
        max-width: 702px;
        width: 100%;
        min-height: 378px;
        background: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 0;
        overflow: hidden;
      }
      .sfc-nodePlayable__lockContainerInner .sfc-copy__header {
        margin-bottom: 24px;
      }
      .sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline {
        color: #272727;
        font-family: "Manrope", sans-serif !important;
        font-size: 30px;
        font-weight: 700;
        line-height: 38px;
        margin-bottom: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
      }
      .sfc-nodePlayable__lockCta {
        border-radius: 30px;
        background: #017922;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-family: "Manrope", sans-serif !important;
        font-size: 18px;
        font-weight: 700;
        line-height: 32px;
        text-transform: capitalize;
        height: 52px;
        text-decoration: unset;
        max-width: 276px;
        width: 100%;
        margin: 0 auto;
        transition: all 0.3s ease;
      }
      .sfc-nodePlayable__lockCta:hover {
        color: #ffffff;
        background: #00601b;
        border-color: #007922;
        text-decoration: unset;
      }
      .sfc-nodePlayable__lockContainerInner .sfc-copy__header .txt_headline {
        color: #555;
        font-family: "Manrope", sans-serif !important;
        font-size: 18px;
        font-weight: 400;
        line-height: 26px;
        margin: 0 auto;
        max-width: 407px;
      }
      .sfc-nodePlayable__lockContainerInner .sfc-item__prefix .sfc-iconRestricted {
        display: none;
      }

@media (max-width: 768px) {
    /* Unauthorized user hero main*/
    [aria-label="Promotions"] .sfc-hero__heading.sfc-heading{
        font-size: 36px;
    }
    [aria-label="Promotions"] .sfc-hero__button{
        margin-bottom: 31px;
    }
    /*change Text btn Sign Up*/
    .o-region--header {
        padding: 6px 0.5em 6px 0;
    }
    .c-dropdownMenu__item a[data-drupal-link-system-path="become-a-subscriber"]{
        font-size: 14px;
        padding: 5px 10px;
    }
    /**promoteSubscriptionWrap */
        .o-page__banner + #promoteSubscriptionWrap{
            padding: 5px 0;
        }
        #promoteSubscriptionWrap {
          padding: 24px 0;
        }
        [data-mob] {
          display: flex;
        }
        .open_var[data-openmobvar] {
          display: block;
        }
        .bgr_gray,
        [data-desk] {
          display: none;
        }
        .new_features_list,
        .hidden_new_features_list {
          flex-direction: column;
          gap: 12px;
          margin: 0;
        }
        .new_features_list > li,
        .hidden_new_features_list > li {
          width: 100%;
        }
        .new_container {
          padding: 16px;
          max-width: 335px;
          width: 81%;
        }
        .btn_wrapper {
          flex-direction: column;
          align-items: flex-start;
          border-bottom: none;
          padding: 0;
          margin-bottom: 12px;
        }
        .btn_wrapper h2 {
          font-size: 20px;
          font-weight: 700;
          margin: 0 0 12px;
          max-width: 278px;
        }
        #UnlockPremiumContentLink {
          max-width: unset;
          width: 100%;
          height: 42px;
        }
        #UnlockPremiumContentLink span {
          font-size: 14px;
          font-weight: 700;
          line-height: 32px;
        }
        .toggle_btn_features {
          margin: 10px auto 0;
        }
        .list_main_title {
          font-size: 12px;
          padding-left: 38px;
          max-width: 253px;
        }
        .list_main_title[data-title="devices"] {
          max-width: 227px;
        }
        .your_store_wrap {
          margin-top: 12px;
        }
        .your_store_wrap .list_main_title {
          margin-bottom: 6px;
        }
        .store_icon {
          gap: 16px;
        }
        .store_icon img {
          max-width: 120px;
        }
        .mini_block > li .list_main_title {
          margin: 0;
        }
        .list_txt {
          margin-top: 2px;
          line-height: 20px;
        }
        .list_main_title[data-title]::before {
          width: 26px;
          height: 26px;
        }
        .hidden_inform_box {
          margin-top: 16px;
        }
        .professional_classes_list > li + li,
        .professional_classes_list {
          margin-top: 5px;
        }
        .professional_classes_list .list_txt {
          font-weight: 600;
        }
        .new_features_list .list_main_title[data-title="yoga_person"] + p {
          font-weight: 500;
        }
        /*banner video blockers */
        .sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline{
          font-size: 18px;
          line-height: 26px;
          margin-bottom: 6px;
          flex-direction: unset;
          gap: 8px;
          justify-content: center;
        }
        .sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline svg{
          width: 16px;
          height: 26px;
        }
        .sfc-nodePlayable__lockContainerInner .sfc-copy__header .txt_headline{
          font-size: 14px;
          line-height: 22px;
    max-width: 275px;
        }
        .sfc-nodePlayable__lockContainerInner .sfc-copy__header {
      margin-bottom: 12px;
  }
  .sfc-nodePlayable__lockContainerInner{
        max-width: 316px;
    min-height: unset;
    padding: 20px 0;
  }
}
      </style>
      `;

    let newBoxFeatures = /*html */ `
    <section id="promoteSubscriptionWrap" class="promote_subscription_wrap">
      <div class="bgr_gray"></div>
      <div class="new_container">
        <div class="btn_wrapper">
          <h2>Get <span class="accent_color">Free Unlimited Access</span> for 7 days</h2>
          <a href="https://www.doyogawithme.com/become-a-subscriber" id="UnlockPremiumContentLink"><span>Start Free Trial</span></a>
        </div>
        <ul class="new_features_list">
          <li>
            <h3 class="list_main_title" data-title="yoga_person">Unlimited access to 1000+ yoga, meditation and movement classes</h3>
        <p class="list_txt" data-openmobvar>You can enjoy one of the biggest collection of professional classes, including:</p>
        <ul class="professional_classes_list" data-openmobvar>
          <li>
            <p class="list_txt">400+ Vinyasa yoga classes</p>
          </li>
          <li>
            <p class="list_txt">350+ Hatha yoga classes</p>
          </li>
          <li>
            <p class="list_txt">250+ Gentle yoga classes</p>
          </li>
          <li>
            <p class="list_txt">170+ Yoga after workout classes</p>
          </li>
          <li>
            <p class="list_txt">100+ Yoga for back classes</p>
          </li>
          <li>
            <p class="list_txt">And much more!</p>
          </li>
        </ul>
          </li>
          <li>
            <h3 class="list_main_title" data-title="yoga">Complete collection of 30 curated programs & 50 challenges</h3>
            <p class="list_txt" data-openmobvar>Enhance your practice with our comprehensive collection of courses and special challenges.</p>
          </li>
          <li data-desk>
            <h3 class="list_main_title" data-title="premium">Exclusive access to all new releases and livestream events</h3>
          </li>
        </ul>
        <div class="hidden_inform_box">
          <ul data-desk class="hidden_new_features_list">
            <li>
              <p class="list_txt">You can enjoy one of the biggest collection of professional classes, including:</p>
              <ul class="professional_classes_list">
                <li>
                  <p class="list_txt">400+ Vinyasa yoga classes</p>
                </li>
                <li>
                  <p class="list_txt">350+ Hatha yoga classes</p>
                </li>
                <li>
                  <p class="list_txt">250+ Gentle yoga classes</p>
                </li>
                <li>
                  <p class="list_txt">170+ Yoga after workout classes</p>
                </li>
                <li>
                  <p class="list_txt">100+ Yoga for back classes</p>
                </li>
                <li>
                  <p class="list_txt">And much more!</p>
                </li>
              </ul>
            </li>
            <li>
              <p class="list_txt">Enhance your practice with our comprehensive collection of courses and special challenges.</p>
              <ul class="new_features_list mini_block">
                <li>
                  <h3 class="list_main_title" data-title="devices">Watch classes from your laptop, TV, phone or tablet</h3>
                  <p class="list_txt">Take your yoga practice anywhere, anytime using our website or mobile app.</p>
                </li>
              </ul>
            </li>
            <li>
              <p class="list_txt">Enjoy new classes and get 25% discount on livestream events.</p>
              <div class="your_store_wrap">
                <h3 class="list_main_title">Use our App</h3>
                <div class="store_icon">
                    <img class="apple_store_icon" src="https://conversionratestore.github.io/projects/doyogawithme/img/apple_store_icon.svg" alt="apple store icon">
                    <img class="google_play_icon" src="https://conversionratestore.github.io/projects/doyogawithme/img/google_play_icon.svg" alt="google play icon">
                </div>
              </div>
            </li>
          </ul>
              <ul data-mob class="hidden_new_features_list">
      <li>
        <h3 class="list_main_title" data-title="premium">Exclusive access to all new releases and livestream events</h3>
        <p class="list_txt">Enjoy new classes and get 25% discount on livestream events.</p>
      </li>
      <li>
        <ul class="new_features_list mini_block">
          <li>
            <h3 class="list_main_title" data-title="devices">Watch classes from your laptop, TV, phone or tablet</h3>
            <p class="list_txt">Take your yoga practice anywhere, anytime using our website or mobile app.</p>
          </li>
        </ul>
        <div class="your_store_wrap">
          <h3 class="list_main_title">Use our App</h3>
          <div class="store_icon">
            <img class="apple_store_icon" src="https://conversionratestore.github.io/projects/doyogawithme/img/apple_store_icon.svg" alt="apple store icon" />
            <img class="google_play_icon" src="https://conversionratestore.github.io/projects/doyogawithme/img/google_play_icon.svg" alt="google play icon" />
          </div>
        </div>
      </li>
    </ul>
        </div>
        <p class="toggle_btn_features">
          <span>See all Premium features</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="9" viewBox="0 0 15 9" fill="none">
            <path d="M1.5 1L7.5 7L13.5 1" stroke="#027DB8" stroke-width="2" />
          </svg>
        </p>
      </div>
    </section>
    `;

    document.head.insertAdjacentHTML("beforeend", freeTrialStyle);

    // btn Sign Up ->>> textContent
    changeTextBtn();
    // if user is free
    if (document.querySelector('[data-drupal-selector="drupal-settings-json"]') && JSON.parse(document.querySelector('[data-drupal-selector="drupal-settings-json"]')?.textContent).dywm.gtm.customer_info.user.isSubscriber === false) {
      isNotSubscriber();
    }

    //   isNotSubscriber
    function isNotSubscriber() {
      switch (window.location.pathname) {
        case "/yoga-classes":
          let yogaClassesFind = setInterval(() => {
            if (document.querySelector(".o-page__header")) {
              clearInterval(yogaClassesFind);
              localStorage.setItem("newBannerVisib", "withBtn");
              document.querySelector(".o-page__header")?.insertAdjacentHTML("afterend", newBoxFeatures);
            }
          }, 100);
          break;
        case "/yoga-meditation":
          let yogaMeditationFind = setInterval(() => {
            if (document.querySelector(".o-page__header")) {
              clearInterval(yogaMeditationFind);
              localStorage.setItem("newBannerVisib", "withBtn");
              document.querySelector(".o-page__header")?.insertAdjacentHTML("afterend", newBoxFeatures);
            }
          }, 100);
          break;
        case "/yoga-challenges":
          let yogaChallengesFind = setInterval(() => {
            if (document.querySelector(".o-page__banner")) {
              clearInterval(yogaChallengesFind);
              localStorage.setItem("newBannerVisib", "withBtn");
              document.querySelector(".o-page__banner")?.insertAdjacentHTML("afterend", newBoxFeatures);
            }
          }, 100);
          break;
        case "/yoga-programs":
          let yogaProgramsFind = setInterval(() => {
            if (document.querySelector(".o-page__banner")) {
              clearInterval(yogaProgramsFind);
              localStorage.setItem("newBannerVisib", "withBtn");
              document.querySelector(".o-page__banner")?.insertAdjacentHTML("afterend", newBoxFeatures);
            }
          }, 100);

          break;
        case "/become-a-subscriber":
          if (!document.querySelector('.menu--account [data-drupal-link-system-path="yogi/login"]')) {
            let becomeSubscriberFind = setInterval(() => {
              if (document.querySelector(".o-page__header")) {
                clearInterval(becomeSubscriberFind);
                localStorage.setItem("newBannerVisib", "withoutBtn");
                document.querySelector(".o-page__header")?.insertAdjacentHTML("afterend", newBoxFeatures);

                if (window.innerWidth <= 768) {
                  if (document.querySelector("#promoteSubscriptionWrap") && !document.querySelector(".new_title_subscriber")) {
                    document.querySelector("#promoteSubscriptionWrap").insertAdjacentHTML("afterbegin", `<h2 class="new_title_subscriber">Unlock Premium Classes for a Transformative Yoga Journey</h2>`);
                    document.querySelector(".btn_wrapper h2").innerHTML = `What’s included in <span class="accent_color">Premium</span>`;
                  }
                } else {
                  if (document.querySelector("#promoteSubscriptionWrap") && !document.querySelector(".new_box_subscriber")) {
                    document.querySelector("#promoteSubscriptionWrap").insertAdjacentHTML("beforebegin", `<div class="new_box_subscriber"><h2 class="new_title_subscriber">Unlock Premium Classes for a Transformative Yoga Journey</h2></div>`);
                  }
                }
              }
            }, 100);
          }
          break;

        default:
          break;
      }
      if (!document.querySelector('.menu--account [data-drupal-link-system-path="yogi/login"]') && window.location.pathname === "/") {
        let mainPagesFind = setInterval(() => {
          if (document.querySelector(".o-page__banner")) {
            clearInterval(mainPagesFind);
            localStorage.setItem("newBannerVisib", "withBtn");
            document.querySelector(".o-page__banner")?.insertAdjacentHTML("afterend", newBoxFeatures);
          }
        }, 100);
      }
      if (window.innerWidth > 768) {
        if (window.location.pathname.match("/content/") || window.location.pathname.match("/programs/")) {
          let contentFind = setInterval(() => {
            if (document.querySelector(".o-page__header")) {
              clearInterval(contentFind);
              localStorage.setItem("newBannerVisib", "withBtn");
              document.querySelector(".o-page__header")?.insertAdjacentHTML("afterend", newBoxFeatures);
            }
          }, 100);
        }
      }

      let findToggleBtn = setInterval(() => {
        if (typeof jQuery === "function" && document.querySelector(".toggle_btn_features")) {
          clearInterval(findToggleBtn);
          jQuery(".toggle_btn_features")?.click(function () {
            jQuery(".hidden_inform_box").slideToggle();
            setTimeout(() => {
              document.querySelector("#promoteSubscriptionWrap").scrollIntoView({ block: "start", behavior: "smooth" });
            }, 400);
            if (!jQuery(this).hasClass("open_var")) {
              jQuery(this).addClass("open_var");
              document.querySelector(".toggle_btn_features span").textContent = "Less all Premium features";
              if (window.innerWidth <= 768) {
                document.querySelectorAll("[data-openmobvar]").forEach((el) => {
                  el.classList.add("open_var");
                });
              }
            } else {
              jQuery(this).removeClass("open_var");
              document.querySelector(".toggle_btn_features span").textContent = "See all Premium features";
              if (window.innerWidth <= 768) {
                document.querySelectorAll("[data-openmobvar]").forEach((el) => {
                  el.classList.remove("open_var");
                });
              }
            }
          });
        }
      }, 100);

      let findBtnUnlock = setInterval(() => {
        if (document.querySelector("#UnlockPremiumContentLink")) {
          clearInterval(findBtnUnlock);

          document.querySelectorAll("#UnlockPremiumContentLink").forEach((el) => {
            el.addEventListener("click", () => {});
          });
        }
      }, 100);
    }

    //   Create Free Account || Start Free Trial
    function changeTextBtn() {
      if (document.querySelector('.menu--account [data-drupal-link-system-path="yogi/login"]') && document.querySelector('.c-dropdownMenu__item a[data-drupal-link-system-path="become-a-subscriber"]')) {
        let btnSignUpFind = setInterval(() => {
          if (document.querySelector('.c-dropdownMenu__item a[data-drupal-link-system-path="become-a-subscriber"]')) {
            clearInterval(btnSignUpFind);
            if (document.querySelector('.c-dropdownMenu__item a[data-drupal-link-system-path="become-a-subscriber"]').textContent !== "Create Free Account") {
              document.querySelector('.c-dropdownMenu__item a[data-drupal-link-system-path="become-a-subscriber"]').textContent = "Create Free Account";
            }
          }
        }, 100);
      }
      if (!document.querySelector('.menu--account [data-drupal-link-system-path="yogi/login"]') && document.querySelector('.c-dropdownMenu__item a[data-drupal-link-system-path="become-a-subscriber"]')) {
        let btnSignUpFind = setInterval(() => {
          if (document.querySelector('.c-dropdownMenu__item a[data-drupal-link-system-path="become-a-subscriber"]')) {
            clearInterval(btnSignUpFind);
            if (document.querySelector('.c-dropdownMenu__item a[data-drupal-link-system-path="become-a-subscriber"]').textContent !== "Start Free Trial") {
              document.querySelector('.c-dropdownMenu__item a[data-drupal-link-system-path="become-a-subscriber"]').textContent = "Start Free Trial";
            }
          }
        }, 100);
      }
      if (document.querySelector('.menu--account [data-drupal-link-system-path="yogi/login"]') && document.querySelectorAll('[aria-label="Promotions"] .sfc-hero__button')) {
        let btnSignUpFind = setInterval(() => {
          if (document.querySelectorAll('[aria-label="Promotions"] .sfc-hero__button')) {
            clearInterval(btnSignUpFind);
            document.querySelectorAll('[aria-label="Promotions"] .sfc-hero__button .sfc-button__text').forEach((el) => {
              if (el.textContent !== "Create Free Account" && el.closest('a[href="/become-a-subscriber"]')) {
                el.textContent = "Create Free Account";
              }
            });
          }
        }, 100);
      }
    }

    unlockClassBanner();
    //
    function unlockClassBanner() {
      let findTriggerHypothesis = setInterval(() => {
        if (document.querySelector(".sfc-nodePlayable__lockContainerInner")) {
          clearInterval(findTriggerHypothesis);

          let findBtn = setInterval(() => {
            if (document.querySelector(".sfc-nodePlayable__lockCta")) {
              clearInterval(findBtn);
              if (document.querySelector('.menu--account [data-drupal-link-system-path="yogi/login"]')) {
                if (document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").textContent.includes("Access this free class") || document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").textContent.includes("Access this free meditation")) {
                  if (document.querySelector(".sfc-nodePlayable__lockCta").textContent !== "Create Free Account") {
                    document.querySelector(".sfc-nodePlayable__lockCta").textContent = "Create Free Account";
                  }
                } else {
                  if (document.querySelector(".sfc-nodePlayable__lockCta").textContent !== "Start Free Trial") {
                    document.querySelector(".sfc-nodePlayable__lockCta").textContent = "Start Free Trial";
                  }
                }
              } else {
                if (document.querySelector(".sfc-nodePlayable__lockCta").textContent !== "Start Free Trial") {
                  document.querySelector(".sfc-nodePlayable__lockCta").textContent = "Start Free Trial";
                }
              }
            }
          }, 100);

          let changeTitle = setInterval(() => {
            if (document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline")) {
              clearInterval(changeTitle);
              if (document.querySelector('.menu--account [data-drupal-link-system-path="yogi/login"]')) {
                if (document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").textContent.includes("Access this free class")) {
                  document.querySelector(
                    ".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline"
                  ).innerHTML = `<svg class="new_icon_prefix" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.3198 17.2981H12.418V12.4297C12.418 10.3806 13.2537 8.51648 14.6056 7.16844C15.9576 5.81648 17.8179 4.97687 19.8669 4.97687C21.916 4.97687 23.7801 5.81656 25.1282 7.16844C26.4801 8.51648 27.3198 10.3807 27.3198 12.4297V17.2981ZM33.671 18.3227C33.2781 17.9337 32.7967 17.6332 32.2575 17.4637V12.4297C32.2575 9.02102 30.8632 5.92047 28.6177 3.675C26.3723 1.42953 23.2755 0.0390625 19.8669 0.0390625C16.4583 0.0390625 13.3616 1.42953 11.1161 3.675C8.87061 5.92047 7.47632 9.02102 7.47632 12.4297V17.4484C6.92171 17.6178 6.42483 17.922 6.02429 18.3227C5.39265 18.9582 4.99976 19.8287 4.99976 20.7915V36.4675C4.99976 37.4304 5.39265 38.3009 6.02429 38.9363C6.65976 39.568 7.5303 39.9609 8.49312 39.9609H31.2022C32.1651 39.9609 33.0355 39.568 33.671 38.9363C34.3026 38.3009 34.6955 37.4304 34.6955 36.4675V20.7915C34.6956 19.8286 34.3027 18.9582 33.671 18.3227ZM17.4288 24.8357C18.0489 24.2195 18.904 23.8343 19.8476 23.8343C20.7913 23.8343 21.6463 24.2195 22.2665 24.8357C22.8866 25.4559 23.2679 26.3109 23.2679 27.2545C23.2679 27.9902 23.0368 28.668 22.6439 29.2266C22.3165 29.6888 21.8774 30.0662 21.3651 30.3205V31.9073C21.3651 32.3233 21.1957 32.7046 20.9183 32.978C20.6448 33.2515 20.2674 33.4248 19.8476 33.4248C19.4316 33.4248 19.0503 33.2515 18.7768 32.978C18.5034 32.7046 18.33 32.3233 18.33 31.9073V30.3205C17.8216 30.0662 17.3825 29.6888 17.0551 29.2266C16.6584 28.6681 16.4273 27.9902 16.4273 27.2545C16.4274 26.3109 16.8126 25.4558 17.4288 24.8357Z" fill="#027DB8"/></svg><span>Unlock this Free class</span>`;
                } else if (document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").textContent.includes("Access this free meditation")) {
                  document.querySelector(
                    ".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline"
                  ).innerHTML = `<svg class="new_icon_prefix" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.3198 17.2981H12.418V12.4297C12.418 10.3806 13.2537 8.51648 14.6056 7.16844C15.9576 5.81648 17.8179 4.97687 19.8669 4.97687C21.916 4.97687 23.7801 5.81656 25.1282 7.16844C26.4801 8.51648 27.3198 10.3807 27.3198 12.4297V17.2981ZM33.671 18.3227C33.2781 17.9337 32.7967 17.6332 32.2575 17.4637V12.4297C32.2575 9.02102 30.8632 5.92047 28.6177 3.675C26.3723 1.42953 23.2755 0.0390625 19.8669 0.0390625C16.4583 0.0390625 13.3616 1.42953 11.1161 3.675C8.87061 5.92047 7.47632 9.02102 7.47632 12.4297V17.4484C6.92171 17.6178 6.42483 17.922 6.02429 18.3227C5.39265 18.9582 4.99976 19.8287 4.99976 20.7915V36.4675C4.99976 37.4304 5.39265 38.3009 6.02429 38.9363C6.65976 39.568 7.5303 39.9609 8.49312 39.9609H31.2022C32.1651 39.9609 33.0355 39.568 33.671 38.9363C34.3026 38.3009 34.6955 37.4304 34.6955 36.4675V20.7915C34.6956 19.8286 34.3027 18.9582 33.671 18.3227ZM17.4288 24.8357C18.0489 24.2195 18.904 23.8343 19.8476 23.8343C20.7913 23.8343 21.6463 24.2195 22.2665 24.8357C22.8866 25.4559 23.2679 26.3109 23.2679 27.2545C23.2679 27.9902 23.0368 28.668 22.6439 29.2266C22.3165 29.6888 21.8774 30.0662 21.3651 30.3205V31.9073C21.3651 32.3233 21.1957 32.7046 20.9183 32.978C20.6448 33.2515 20.2674 33.4248 19.8476 33.4248C19.4316 33.4248 19.0503 33.2515 18.7768 32.978C18.5034 32.7046 18.33 32.3233 18.33 31.9073V30.3205C17.8216 30.0662 17.3825 29.6888 17.0551 29.2266C16.6584 28.6681 16.4273 27.9902 16.4273 27.2545C16.4274 26.3109 16.8126 25.4558 17.4288 24.8357Z" fill="#027DB8"/></svg><span>Unlock this Free meditation</span>`;
                } else if (document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").textContent.includes("Unlock this premium meditation")) {
                  document.querySelector(
                    ".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline"
                  ).innerHTML = `<svg class="new_icon_prefix" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.3198 17.2981H12.418V12.4297C12.418 10.3806 13.2537 8.51648 14.6056 7.16844C15.9576 5.81648 17.8179 4.97687 19.8669 4.97687C21.916 4.97687 23.7801 5.81656 25.1282 7.16844C26.4801 8.51648 27.3198 10.3807 27.3198 12.4297V17.2981ZM33.671 18.3227C33.2781 17.9337 32.7967 17.6332 32.2575 17.4637V12.4297C32.2575 9.02102 30.8632 5.92047 28.6177 3.675C26.3723 1.42953 23.2755 0.0390625 19.8669 0.0390625C16.4583 0.0390625 13.3616 1.42953 11.1161 3.675C8.87061 5.92047 7.47632 9.02102 7.47632 12.4297V17.4484C6.92171 17.6178 6.42483 17.922 6.02429 18.3227C5.39265 18.9582 4.99976 19.8287 4.99976 20.7915V36.4675C4.99976 37.4304 5.39265 38.3009 6.02429 38.9363C6.65976 39.568 7.5303 39.9609 8.49312 39.9609H31.2022C32.1651 39.9609 33.0355 39.568 33.671 38.9363C34.3026 38.3009 34.6955 37.4304 34.6955 36.4675V20.7915C34.6956 19.8286 34.3027 18.9582 33.671 18.3227ZM17.4288 24.8357C18.0489 24.2195 18.904 23.8343 19.8476 23.8343C20.7913 23.8343 21.6463 24.2195 22.2665 24.8357C22.8866 25.4559 23.2679 26.3109 23.2679 27.2545C23.2679 27.9902 23.0368 28.668 22.6439 29.2266C22.3165 29.6888 21.8774 30.0662 21.3651 30.3205V31.9073C21.3651 32.3233 21.1957 32.7046 20.9183 32.978C20.6448 33.2515 20.2674 33.4248 19.8476 33.4248C19.4316 33.4248 19.0503 33.2515 18.7768 32.978C18.5034 32.7046 18.33 32.3233 18.33 31.9073V30.3205C17.8216 30.0662 17.3825 29.6888 17.0551 29.2266C16.6584 28.6681 16.4273 27.9902 16.4273 27.2545C16.4274 26.3109 16.8126 25.4558 17.4288 24.8357Z" fill="#027DB8"/></svg><span>Unlock this Premium meditation</span>`;
                } else {
                  document.querySelector(
                    ".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline"
                  ).innerHTML = `<svg class="new_icon_prefix" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.3198 17.2981H12.418V12.4297C12.418 10.3806 13.2537 8.51648 14.6056 7.16844C15.9576 5.81648 17.8179 4.97687 19.8669 4.97687C21.916 4.97687 23.7801 5.81656 25.1282 7.16844C26.4801 8.51648 27.3198 10.3807 27.3198 12.4297V17.2981ZM33.671 18.3227C33.2781 17.9337 32.7967 17.6332 32.2575 17.4637V12.4297C32.2575 9.02102 30.8632 5.92047 28.6177 3.675C26.3723 1.42953 23.2755 0.0390625 19.8669 0.0390625C16.4583 0.0390625 13.3616 1.42953 11.1161 3.675C8.87061 5.92047 7.47632 9.02102 7.47632 12.4297V17.4484C6.92171 17.6178 6.42483 17.922 6.02429 18.3227C5.39265 18.9582 4.99976 19.8287 4.99976 20.7915V36.4675C4.99976 37.4304 5.39265 38.3009 6.02429 38.9363C6.65976 39.568 7.5303 39.9609 8.49312 39.9609H31.2022C32.1651 39.9609 33.0355 39.568 33.671 38.9363C34.3026 38.3009 34.6955 37.4304 34.6955 36.4675V20.7915C34.6956 19.8286 34.3027 18.9582 33.671 18.3227ZM17.4288 24.8357C18.0489 24.2195 18.904 23.8343 19.8476 23.8343C20.7913 23.8343 21.6463 24.2195 22.2665 24.8357C22.8866 25.4559 23.2679 26.3109 23.2679 27.2545C23.2679 27.9902 23.0368 28.668 22.6439 29.2266C22.3165 29.6888 21.8774 30.0662 21.3651 30.3205V31.9073C21.3651 32.3233 21.1957 32.7046 20.9183 32.978C20.6448 33.2515 20.2674 33.4248 19.8476 33.4248C19.4316 33.4248 19.0503 33.2515 18.7768 32.978C18.5034 32.7046 18.33 32.3233 18.33 31.9073V30.3205C17.8216 30.0662 17.3825 29.6888 17.0551 29.2266C16.6584 28.6681 16.4273 27.9902 16.4273 27.2545C16.4274 26.3109 16.8126 25.4558 17.4288 24.8357Z" fill="#027DB8"/></svg><span>Unlock this Premium class</span>`;
                }
              } else {
                if (document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").textContent.includes("Unlock this premium meditation")) {
                  document.querySelector(
                    ".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline"
                  ).innerHTML = `<svg class="new_icon_prefix" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.3198 17.2981H12.418V12.4297C12.418 10.3806 13.2537 8.51648 14.6056 7.16844C15.9576 5.81648 17.8179 4.97687 19.8669 4.97687C21.916 4.97687 23.7801 5.81656 25.1282 7.16844C26.4801 8.51648 27.3198 10.3807 27.3198 12.4297V17.2981ZM33.671 18.3227C33.2781 17.9337 32.7967 17.6332 32.2575 17.4637V12.4297C32.2575 9.02102 30.8632 5.92047 28.6177 3.675C26.3723 1.42953 23.2755 0.0390625 19.8669 0.0390625C16.4583 0.0390625 13.3616 1.42953 11.1161 3.675C8.87061 5.92047 7.47632 9.02102 7.47632 12.4297V17.4484C6.92171 17.6178 6.42483 17.922 6.02429 18.3227C5.39265 18.9582 4.99976 19.8287 4.99976 20.7915V36.4675C4.99976 37.4304 5.39265 38.3009 6.02429 38.9363C6.65976 39.568 7.5303 39.9609 8.49312 39.9609H31.2022C32.1651 39.9609 33.0355 39.568 33.671 38.9363C34.3026 38.3009 34.6955 37.4304 34.6955 36.4675V20.7915C34.6956 19.8286 34.3027 18.9582 33.671 18.3227ZM17.4288 24.8357C18.0489 24.2195 18.904 23.8343 19.8476 23.8343C20.7913 23.8343 21.6463 24.2195 22.2665 24.8357C22.8866 25.4559 23.2679 26.3109 23.2679 27.2545C23.2679 27.9902 23.0368 28.668 22.6439 29.2266C22.3165 29.6888 21.8774 30.0662 21.3651 30.3205V31.9073C21.3651 32.3233 21.1957 32.7046 20.9183 32.978C20.6448 33.2515 20.2674 33.4248 19.8476 33.4248C19.4316 33.4248 19.0503 33.2515 18.7768 32.978C18.5034 32.7046 18.33 32.3233 18.33 31.9073V30.3205C17.8216 30.0662 17.3825 29.6888 17.0551 29.2266C16.6584 28.6681 16.4273 27.9902 16.4273 27.2545C16.4274 26.3109 16.8126 25.4558 17.4288 24.8357Z" fill="#027DB8"/></svg><span>Unlock this Premium meditation</span>`;
                } else {
                  document.querySelector(
                    ".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline"
                  ).innerHTML = `<svg class="new_icon_prefix" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.3198 17.2981H12.418V12.4297C12.418 10.3806 13.2537 8.51648 14.6056 7.16844C15.9576 5.81648 17.8179 4.97687 19.8669 4.97687C21.916 4.97687 23.7801 5.81656 25.1282 7.16844C26.4801 8.51648 27.3198 10.3807 27.3198 12.4297V17.2981ZM33.671 18.3227C33.2781 17.9337 32.7967 17.6332 32.2575 17.4637V12.4297C32.2575 9.02102 30.8632 5.92047 28.6177 3.675C26.3723 1.42953 23.2755 0.0390625 19.8669 0.0390625C16.4583 0.0390625 13.3616 1.42953 11.1161 3.675C8.87061 5.92047 7.47632 9.02102 7.47632 12.4297V17.4484C6.92171 17.6178 6.42483 17.922 6.02429 18.3227C5.39265 18.9582 4.99976 19.8287 4.99976 20.7915V36.4675C4.99976 37.4304 5.39265 38.3009 6.02429 38.9363C6.65976 39.568 7.5303 39.9609 8.49312 39.9609H31.2022C32.1651 39.9609 33.0355 39.568 33.671 38.9363C34.3026 38.3009 34.6955 37.4304 34.6955 36.4675V20.7915C34.6956 19.8286 34.3027 18.9582 33.671 18.3227ZM17.4288 24.8357C18.0489 24.2195 18.904 23.8343 19.8476 23.8343C20.7913 23.8343 21.6463 24.2195 22.2665 24.8357C22.8866 25.4559 23.2679 26.3109 23.2679 27.2545C23.2679 27.9902 23.0368 28.668 22.6439 29.2266C22.3165 29.6888 21.8774 30.0662 21.3651 30.3205V31.9073C21.3651 32.3233 21.1957 32.7046 20.9183 32.978C20.6448 33.2515 20.2674 33.4248 19.8476 33.4248C19.4316 33.4248 19.0503 33.2515 18.7768 32.978C18.5034 32.7046 18.33 32.3233 18.33 31.9073V30.3205C17.8216 30.0662 17.3825 29.6888 17.0551 29.2266C16.6584 28.6681 16.4273 27.9902 16.4273 27.2545C16.4274 26.3109 16.8126 25.4558 17.4288 24.8357Z" fill="#027DB8"/></svg><span>Unlock this Premium class</span>`;
                }
              }
            }
          }, 100);

          let renderTxt = setInterval(() => {
            if (document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline")) {
              clearInterval(renderTxt);
              if (!document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .txt_headline")) {
                if (document.querySelector('.menu--account [data-drupal-link-system-path="yogi/login"]')) {
                  if (document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").textContent.includes("Access this free class") || document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").textContent.includes("Unlock this Free class")) {
                    document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").insertAdjacentHTML("afterend", `<p class="txt_headline">Create an account to get access to this and 500+ other Free classes</p>`);
                  } else if (document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").textContent.includes("Access this free meditation") || document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").textContent.includes("Unlock this Free meditation")) {
                    document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").insertAdjacentHTML("afterend", `<p class="txt_headline">Create an account to get access to this and 500+ other Free meditations</p>`);
                  } else if (document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").textContent.includes("Unlock this Premium meditation")) {
                    document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").insertAdjacentHTML("afterend", `<p class="txt_headline">Start your 7-day Free Trial and get access to this and 1000+ other meditations</p>`);
                  } else {
                    document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").insertAdjacentHTML("afterend", `<p class="txt_headline">Start your 7-day Free Trial and get access to this and 1000+ other classes</p>`);
                  }
                } else {
                  if (document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").textContent.includes("Unlock this Premium meditation")) {
                    document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").insertAdjacentHTML("afterend", `<p class="txt_headline">Start your 7-day Free Trial and get access to this and 1000+ other meditations</p>`);
                  } else {
                    document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").insertAdjacentHTML("afterend", `<p class="txt_headline">Start your 7-day Free Trial and get access to this and 1000+ other classes</p>`);
                  }
                }
              }
            }
          }, 100);

          document.querySelectorAll(".sfc-nodePlayable__lockContainerInner a").forEach((el) => {
            el.addEventListener("click", () => {});
          });
        }
      }, 100);
    }
  }
}, 100);

let cancelTrial = setInterval(() => {
  if (window.location.pathname.match("subscription/")) {
    clearInterval(cancelTrial);

    //swipe
    let script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js";
    script.async = false;
    document.head.appendChild(script);
    let scriptCustom = document.createElement("script");
    scriptCustom.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.19/jquery.touchSwipe.min.js";
    scriptCustom.async = false;
    document.head.appendChild(scriptCustom);

    let cancelTrialStyle = /*html */ `
      <style>
/*cancel_trial_btn */
.cancel_trial_btn {
  font-family: "Manrope", sans-serif !important;
  color: #027db8;
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
  cursor: pointer;
}
/*popup */
.overlay_popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  overflow-y: auto;
  z-index: 1000000000;
  transition: all 0.5s ease;
}
.overlay_popup.is_hidden {
  opacity: 0;
  pointer-events: none;
}
.overlay_popup .container_popup {
  display: block;
  position: relative;
  width: 100%;
  max-width: 440px;
  margin: auto;
  transition: all 0.5s ease 0s;
  border-radius: 12px;
  background: #fff;
}
.overlay_popup .container_popup > .btn_close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
}
.content_popup {
  background: #fff;
  border-radius: 12px;
  padding: 30px;
}
.content_popup .popup_title {
  color: #272727;
  font-family: "Manrope", sans-serif !important;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  margin: 0 0 12px;
}
.content_popup .popup_subtitle {
  color: #272727;
  font-family: "Manrope", sans-serif !important;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin: 0 0 12px;
  max-width: 330px;
}
.content_popup .popup_descr {
  color: #555;
  font-family: "Manrope", sans-serif !important;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0 0 12px;
  max-width: 355px;
}
.content_popup .popup_descr a {
  color: inherit;
  text-decoration: underline;
}
.popup_list_txt {
  margin: 0;
  padding: 0;
  list-style: none;
}
.popup_list_txt li + li {
  margin-top: 12px;
}
.popup_list_txt li {
  position: relative;
  padding-left: 28px;
}
.popup_list_txt li::before {
  position: absolute;
  content: "";
  width: 20px;
  height: 20px;
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/lotus.svg) no-repeat center center;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background-size: contain;
}
.popup_list_txt li p {
  color: #272727;
  font-family: "Manrope", sans-serif !important;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
}
.content_popup .btn_wrapp {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
}
.content_popup .popup_cancel_trial_btn,
.skip_btn {
  color: #555;
  font-family: "Manrope", sans-serif !important;
  font-size: 16px;
  font-weight: 700;
  line-height: 32px;
  text-transform: capitalize;
  border-radius: 30px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 116px;
  width: 100%;
  margin: 0;
  cursor: pointer;
}
.content_popup .keep_my_trial_btn,
.close_btn,
#helpUsBecomeBetter .submit_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background: #017922;
  max-width: 240px;
  width: 100%;
  height: 50px;
  color: #fff;
  font-family: "Manrope", sans-serif !important;
  font-size: 16px;
  font-weight: 700;
  line-height: 32px;
  text-transform: capitalize;
  margin: 0;
  cursor: pointer;
  outline: unset;
  border: none;
}
#yourTrialWasCancelled .popup_subtitle {
  max-width: unset;
  margin-bottom: 24px;
}
#yourTrialWasCancelled .close_btn {
  max-width: unset;
}
#helpUsBecomeBetter .popup_subtitle {
  max-width: unset;
  margin: 0 0 16px;
}
#helpUsBecomeBetter ol {
  list-style: none;
  padding: 0;
  margin: 0;
}
#helpUsBecomeBetter ol > li + li {
  margin-top: 16px;
}
#helpUsBecomeBetter .form_title {
  color: #272727;
  font-family: "Manrope", sans-serif !important;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  margin: 0 0 5px 4px;
  display: block;
}
#helpUsBecomeBetter .form_descr {
  color: #555;
  font-family: "Manrope", sans-serif !important;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
}
#helpUsBecomeBetter .grade_list {
  display: flex;
  gap: 4px;
  margin-top: 12px;
}
#helpUsBecomeBetter label {
  margin: 0;
}
#helpUsBecomeBetter input.custom_radio_btn {
  z-index: -1;
  opacity: 0;
  height: 0;
  margin: 0;
  padding: 0;
  display: none;
}
#helpUsBecomeBetter .choose_option_txt {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  border: 2px solid #e0e0e0;
  background: #fff;
  color: #555;
  font-family: "Manrope", sans-serif !important;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;
}
#helpUsBecomeBetter input.custom_radio_btn:checked + .choose_option_txt {
  background: #017922;
  color: #fff;
  border: 2px solid #017922;
}
#helpUsBecomeBetter .submit_btn:disabled {
  border-radius: 30px;
  background: #a5a5a5;
  border: none;
  color: #fff;
  cursor: initial;
}
.questions_list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 12px;
}
.questions_label {
  cursor: pointer;
  border-radius: 8px;
  border: 2px solid #e0e0e0;
  background: #fff;
  padding: 12px;
}
.choose_option_box {
  position: absolute;
  display: inline-block;
  flex-shrink: 0;
  flex-grow: 0;
  width: 20px;
  left: 12px;
  height: 20px;
  border-radius: 4px;
  border: 2px solid #e0e0e0;
}
.choose_option_txt_quest {
  color: #555;
  font-family: "Manrope", sans-serif !important;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-left: 32px;
}
#helpUsBecomeBetter .descr_text_input {
  display: none;
  color: #555;
  font-family: "Manrope", sans-serif !important;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 12px 0 8px;
}
#helpUsBecomeBetter textarea.text_textarea {
  width: 100%;
  max-height: 94px;
  min-height: 94px;
  height: 100%;
  display: none;
  resize: none;
  color: #555;
  font-family: "Manrope", sans-serif !important;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  padding: 12px;
  border-width: inherit;
  border-radius: 8px;
  border: 2px solid #e0e0e0;
}
#helpUsBecomeBetter textarea.text_textarea:focus {
  outline: none;
  outline-offset: unset;
  border: 2px solid #027db8;
}
#helpUsBecomeBetter input.custom_radio_btn:checked + .questions_label {
  background: #f2fbff;
}
#helpUsBecomeBetter input.custom_radio_btn:checked + .questions_label .choose_option_box {
  border: 2px solid #027db8;
}
#helpUsBecomeBetter input.custom_radio_btn:checked + .questions_label .choose_option_box::after {
  content: "";
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 2px;
  background: #027db8;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#helpUsBecomeBetter input.custom_radio_btn:checked + .questions_label .choose_option_txt_quest {
  color: #272727;
}
#helpUsBecomeBetter input.custom_radio_btn:checked + .questions_label textarea.text_textarea {
  display: block;
}
#helpUsBecomeBetter input.custom_radio_btn:checked + .questions_label .descr_text_input {
  display: block;
}
html.open_var {
  overflow: hidden !important;
}
.content_popup .is_hidden,
.border_bottom_span,
.content_popup .btn_wrapp.mob_fixed {
  display: none;
}
@media (max-width: 768px) {
  .overlay_popup .container_popup {
    max-width: 350px;
    margin: auto auto 0;
    border-radius: 12px 12px 0 0;
  }
  .content_popup{
    padding: 32px 16px 16px;
        border-radius: 12px 12px 0 0;
        position: relative;
  }
  .overlay_popup .container_popup.mob_var {
    margin: auto auto 89px;
  }
  .overlay_popup.is_hidden .container_popup {
    transform: translateY(100%);
    transition: all 0.8s ease 0s;
  }
  .border_bottom_span {
    border-radius: 10px;
    background: var(--Green-main, #017922);
    position: absolute;
    left: 50%;
    width: 80px;
    height: 4px;
    top: 12px;
    z-index: 3;
    transform: translateX(-50%);
    display: block;
  }
  .overlay_popup .container_popup > .btn_close {
    display: none;
  }
  .content_popup .popup_title{
    font-size: 22px;
    line-height: 30px;
  }
  .content_popup .popup_descr{
    margin: 0 0 16px;
  }
  .popup_list_txt li + li {
    margin-top: 16px;
}
.content_popup .keep_my_trial_btn, .close_btn, #helpUsBecomeBetter .submit_btn{
      max-width: 179px;
}
#helpUsBecomeBetter .choose_option_txt{
  width: 23px;
    height: 23px;
}
#helpUsBecomeBetter ol > li + li {
    margin-top: 12px;
}
.questions_label{
  padding: 10px 12px;
}
#helpUsBecomeBetter form{
  position: inherit;
}
.help_us_become_better_form .btn_wrapp{
display: none;
}
.content_popup .btn_wrapp.mob_fixed{
  display: flex;
  background: #FFF;
box-shadow: 0px -2px 8px 0px rgba(0, 0, 0, 0.10);
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    margin: 0 -16px -16px;
    padding: 12px 16px;
}
.help_us_become_better_wrapp{
    overflow-y: scroll;
    max-height: 611px;
    padding-bottom: 70px;
}
}
@media (max-width: 376px) {
  .help_us_become_better_wrapp{
    max-height: 526px;
  }
}

      </style>
    `;

    let popUp = /*html */ `
        <div class="overlay_popup is_hidden">
          <div class="container_popup">
            <span class="border_bottom_span"></span>
            <div class="btn_close">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20 20L4 4M20 4L4 20" stroke="#272727" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>
          </div>
        </div>
    `;

    let contentPopupHtml = /*html */ `
     <div class="content_popup" id="test">
    <div id="confirmTrialCancellation" class="parent_wrapp">
      <h2 class="popup_title">Confirm Trial Cancellation</h2>
      <h3 class="popup_subtitle">Are you sure you want to cancel your trial access to DoYogaWithMe?</h3>
      <p class="popup_descr">We'd love to know if there's anything we can improve or assist you with. If you're facing any issues or have feedback, please reach out to our support team at <a href="mailto:info@doyogawithme.com">info@doyogawithme.com.</a></p>
      <ul class="popup_list_txt">
        <li>
          <p>Your trial will end on <span class="date_off">October 5th, 2023</span>.</p>
        </li>
        <li><p>Access to our premium content will be suspended.</p></li>
        <li><p>You won't be charged for the trial cancellation.</p></li>
      </ul>
      <div class="btn_wrapp">
        <p class="popup_cancel_trial_btn">Cancel Trial</p>
        <p class="keep_my_trial_btn">Keep My Trial</p>
      </div>
    </div>
    <div id="helpUsBecomeBetter" class="is_hidden parent_wrapp">
      <div class="help_us_become_better_wrapp">
        <h2 class="popup_title">Help Us Become Better</h2>
        <h3 class="popup_subtitle">Please answer a couple of questions to help us understand how we should improve our product</h3>
        <form action="#" class="help_us_become_better_form">
          <ol>
            <li>
              <span class="form_title">1. Overall Satisfaction:</span>
              <p class="form_descr">On a scale of 1 to 10, how satisfied were you with DoYogaWithMe during the trial?</p>
              <div class="grade_list">
                <label class="grade_label">
                  <input class="custom_radio_btn" type="radio" name="grade" value="1" />
                  <span class="choose_option_txt">1</span>
                </label>
                <label class="grade_label">
                  <input class="custom_radio_btn" type="radio" name="grade" value="2" />
                  <span class="choose_option_txt">2</span>
                </label>
                <label class="grade_label">
                  <input class="custom_radio_btn" type="radio" name="grade" value="3" />
                  <span class="choose_option_txt">3</span>
                </label>
                <label class="grade_label">
                  <input class="custom_radio_btn" type="radio" name="grade" value="4" />
                  <span class="choose_option_txt">4</span>
                </label>
                <label class="grade_label">
                  <input class="custom_radio_btn" type="radio" name="grade" value="5" />
                  <span class="choose_option_txt">5</span>
                </label>
                <label class="grade_label">
                  <input class="custom_radio_btn" type="radio" name="grade" value="6" />
                  <span class="choose_option_txt">6</span>
                </label>
                <label class="grade_label">
                  <input class="custom_radio_btn" type="radio" name="grade" value="7" />
                  <span class="choose_option_txt">7</span>
                </label>
                <label class="grade_label">
                  <input class="custom_radio_btn" type="radio" name="grade" value="8" />
                  <span class="choose_option_txt">8</span>
                </label>
                <label class="grade_label">
                  <input class="custom_radio_btn" type="radio" name="grade" value="9" />
                  <span class="choose_option_txt">9</span>
                </label>
                <label class="grade_label">
                  <input class="custom_radio_btn" type="radio" name="grade" value="10" />
                  <span class="choose_option_txt">10</span>
                </label>
              </div>
            </li>
            <li>
              <span class="form_title">2. Reason for Cancellation:</span>
              <p class="form_descr">Please select the primary reason for cancelling your trial:</p>
              <div class="questions_list">
                <input id="questions1" class="custom_radio_btn" type="radio" name="questions" value="contentQuality" />
                <label for="questions1" class="questions_label">
                  <span class="choose_option_box"></span>
                  <span class="choose_option_txt_quest">Content Quality</span>
                  <p class="descr_text_input">Please provide more details about what aspects of the content you found lacking or unsatisfactory.</p>
                   <textarea name="" id="questions1" class="text_textarea"></textarea>
                </label>
  
                <input  id="questions2" class="custom_radio_btn" type="radio" name="questions" value="pricing" />
                <label  for="questions2" class="questions_label">
                  <span class="choose_option_box"></span>
                  <span class="choose_option_txt_quest">Pricing</span>
                  <p class="descr_text_input">What pricing model or plan would have been more suitable for you?</p>
                   <textarea name="" id="questions2" class="text_textarea"></textarea>
                </label>
  
                <input  id="questions3" class="custom_radio_btn" type="radio" name="questions" value="personalReasons" />
                <label  for="questions3" class="questions_label">
                  <span class="choose_option_box"></span>
                  <span class="choose_option_txt_quest">Lack of Time / Personal reasons</span>
                  <p class="descr_text_input">Is there anything we could have done to make it more convenient for you to continue using our product?</p>
                  <textarea name="" id="questions3" class="text_textarea"></textarea>
                </label>
  
                <input  id="questions4" class="custom_radio_btn" type="radio" name="questions" value="technicalIssues" />
                <label  for="questions4" class="questions_label">
                  <span class="choose_option_box"></span>
                  <span class="choose_option_txt_quest">Technical Issues</span>
                  <p class="descr_text_input">If you experienced technical issues, please describe the problems you encountered and any suggestions for improvement.</p>
                   <textarea name="" id="questions4" class="text_textarea"></textarea>
                </label>
  
                <input  id="questions5" class="custom_radio_btn" type="radio" name="questions" value="foundABetterAlternative" />
                <label  for="questions5" class="questions_label">
                  <span class="choose_option_box"></span>
                  <span class="choose_option_txt_quest">Found a Better Alternative</span>
                  <p class="descr_text_input">If you found a better alternative, could you share the name or details of the alternative, and what features or benefits it offered that attracted you?</p>
                  <textarea name="" id="questions5" class="text_textarea"></textarea>
                </label>
  
                <input  id="questions6" class="custom_radio_btn" type="radio" name="questions" value="other" />
                <label  for="questions6" class="questions_label">
                  <span class="choose_option_box"></span>
                  <span class="choose_option_txt_quest">Other (please specify)</span>
                  <p class="descr_text_input">Please provide any comments or suggestions you have for us to enhance our product and service.</p>
                  <textarea name="" id="questions6" class="text_textarea"></textarea>
                </label>
              </div>
            </li>
          </ol>
          <div class="btn_wrapp">
            <p class="skip_btn">Skip</p>
            <button disabled class="submit_btn">Submit</button>
          </div>
        </form>
      </div>
      <div class="btn_wrapp mob_fixed">
            <p class="skip_btn">Skip</p>
            <button disabled class="submit_btn">Submit</button>
      </div>
    </div>
    <div id="yourTrialWasCancelled" class="is_hidden parent_wrapp">
      <h2 class="popup_title">Your Trial Was Cancelled</h2>
      <h3 class="popup_subtitle">Your Trial was successfully cancelled. You will still have full access till October 5th, 2023.</h3>
      <p class="close_btn">Close</p>
    </div>
     </div>
    `;

    document.head.insertAdjacentHTML("beforeend", cancelTrialStyle);
    document.body.insertAdjacentHTML("afterbegin", popUp);

    if (!document.querySelector(".cancel_trial_btn")) {
      document.querySelector("#block-lotus-content").insertAdjacentHTML("beforeend", `<span class="cancel_trial_btn">Cancel trial</span>`);
    }

    if (document.querySelector(".cancel_trial_btn")) {
      createConfirmTrialCancellationPopup();
    }

    function createConfirmTrialCancellationPopup() {
      if (document.querySelector(".overlay_popup")) {
        console.log(`POPUP`);
        if (document.querySelector(".cancel_trial_btn")) {
          document.querySelector(".cancel_trial_btn").addEventListener("click", (e) => {
            if (!e.target.getAttribute("data-test")) {
              console.log(`cancel_trial_btn openPopup`);
              onOpenPopup();
            }
            e.target.setAttribute("data-test", "1");
            setTimeout(() => {
              if (e.target.getAttribute("data-test")) {
                e.target.removeAttribute("data-test");
              }
            }, 1000);
          });
        }

        function onOpenPopup() {
          document.querySelector("html").classList.add("open_var");
          document.querySelector(".overlay_popup").classList.remove("is_hidden");
          if (!document.querySelector(".overlay_popup .content_popup")) {
            document.querySelector(".overlay_popup .container_popup")?.insertAdjacentHTML("beforeend", contentPopupHtml);
          }

          document.querySelectorAll(".overlay_popup .btn_close").forEach((i) => {
            i.addEventListener("click", (e) => {
              // click on btn close popup
              onClosePopup();
            });
          });
          document.querySelectorAll(".overlay_popup").forEach((i) => {
            i.addEventListener("click", (e) => {
              // click on overlay popup
              if (e.target.matches(".overlay_popup")) {
                onClosePopup();
              }
            });
          });

          if (document.querySelector(".overlay_popup .content_popup")) {
            document.querySelectorAll("#helpUsBecomeBetter .grade_list input.custom_radio_btn").forEach((el) => {
              el.addEventListener("click", (e) => {
                if (!e.target.getAttribute("data-test")) {
                  console.log(el.getAttribute("value"), `grade_list`);
                }
                e.target.setAttribute("data-test", "1");
                setTimeout(() => {
                  if (e.target.getAttribute("data-test")) {
                    e.target.removeAttribute("data-test");
                  }
                }, 1000);
              });
            });
            document.querySelectorAll("#helpUsBecomeBetter .questions_list input.custom_radio_btn").forEach((el) => {
              el.addEventListener("click", (e) => {
                if (!e.target.getAttribute("data-test")) {
                  console.log(el.getAttribute("value"), `questions_list`);
                  el.nextElementSibling.querySelector("textarea").focus();
                }
                e.target.setAttribute("data-test", "1");
                setTimeout(() => {
                  if (e.target.getAttribute("data-test")) {
                    e.target.removeAttribute("data-test");
                  }
                }, 1000);
              });
            });
            //Cancel Trial ->>>>> Confirm Trial Cancellation
            document.querySelectorAll(".content_popup .popup_cancel_trial_btn").forEach((i) => {
              i.addEventListener("click", (e) => {
                if (!e.target.getAttribute("data-test")) {
                  i.closest("div.parent_wrapp").classList.add("is_hidden");
                  if (document.querySelector("#helpUsBecomeBetter").classList.contains("is_hidden")) {
                    document.querySelector("#helpUsBecomeBetter").classList.remove("is_hidden");
                  }
                  // ОТМЕНИТЬ ПОДПИСКУ
                }
                e.target.setAttribute("data-test", "1");
                setTimeout(() => {
                  if (e.target.getAttribute("data-test")) {
                    e.target.removeAttribute("data-test");
                  }
                }, 1000);
              });
            });
            // Keep My Trial ->>>>> Confirm Trial Cancellation
            document.querySelector(".content_popup .keep_my_trial_btn").addEventListener("click", (e) => {
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
            //submit_btn ->>>>>>>> Help Us Become Better
            document.querySelectorAll("#helpUsBecomeBetter .submit_btn").forEach((el) => {
              el.addEventListener("click", (e) => {
                if (!e.target.getAttribute("data-test")) {
                  e.preventDefault();
                  let value1 = document.querySelector("#helpUsBecomeBetter .grade_list input.custom_radio_btn:checked").value;
                  let value2 = document.querySelector("#helpUsBecomeBetter .questions_list input.custom_radio_btn:checked").value;
                  let value3 = document.querySelector("#helpUsBecomeBetter .questions_list input.custom_radio_btn:checked").nextElementSibling.querySelector("textarea").value;

                  console.log(`checked - ${value1} ${value2} ${value3}`);
                  if (window.innerWidth <= 768) {
                    document.querySelector(".overlay_popup .container_popup").classList.add("mob_var");
                  }
                  document.querySelector("#helpUsBecomeBetter").classList.add("is_hidden");
                  if (document.querySelector("#yourTrialWasCancelled").classList.contains("is_hidden")) {
                    document.querySelector("#yourTrialWasCancelled").classList.remove("is_hidden");
                  }
                  // ОТМЕНИТЬ ПОДПИСКУ
                }
                e.target.setAttribute("data-test", "1");
                setTimeout(() => {
                  if (e.target.getAttribute("data-test")) {
                    e.target.removeAttribute("data-test");
                  }
                }, 1000);
              });
            });
            // skip_btn ->>>>> Help Us Become Better
            document.querySelectorAll(".content_popup .skip_btn").forEach((i) => {
              i.addEventListener("click", (e) => {
                if (!e.target.getAttribute("data-test")) {
                  if (window.innerWidth <= 768) {
                    document.querySelector(".overlay_popup .container_popup").classList.add("mob_var");
                  }
                  i.closest("div.parent_wrapp").classList.add("is_hidden");
                  if (document.querySelector("#yourTrialWasCancelled").classList.contains("is_hidden")) {
                    document.querySelector("#yourTrialWasCancelled").classList.remove("is_hidden");
                  }
                  // ОТМЕНИТЬ ПОДПИСКУ
                }
                e.target.setAttribute("data-test", "1");
                setTimeout(() => {
                  if (e.target.getAttribute("data-test")) {
                    e.target.removeAttribute("data-test");
                  }
                }, 1000);
              });
            });
            // close_btn ->>>>> Your Trial Was Cancelled
            document.querySelector("#yourTrialWasCancelled .close_btn").addEventListener("click", (e) => {
              if (!e.target.getAttribute("data-test")) {
                console.log(`close_btn ->>>>> Your Trial Was Cancelled`);
                onClosePopup();
              }
              e.target.setAttribute("data-test", "1");
              setTimeout(() => {
                if (e.target.getAttribute("data-test")) {
                  e.target.removeAttribute("data-test");
                }
              }, 1000);
            });
            // remove disabled ->>>> submit_btn
            let disabledBtn = setInterval(() => {
              if (document.querySelector("#helpUsBecomeBetter .questions_list input.custom_radio_btn:checked") && document.querySelector("#helpUsBecomeBetter .grade_list input.custom_radio_btn:checked")) {
                clearInterval(disabledBtn);
                document.querySelectorAll("#helpUsBecomeBetter .submit_btn").forEach((el) => {
                  el.disabled = false;
                });
              }
            }, 100);

            if (window.innerWidth <= 768) {
              let f = setInterval(() => {
                if (typeof $ === "function" && typeof $("#test").swipe === "function") {
                  clearInterval(f);
                  $("#test").swipe({
                    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                      if (direction === "down") {
                        onClosePopup();
                      }
                    },
                  });
                }
              }, 100);
            }
          }
        }

        function onClosePopup() {
          document.querySelectorAll(".overlay_popup").forEach((el) => {
            el.classList.add("is_hidden");
          });

          if (document.querySelector("html").classList.contains("open_var")) {
            document.querySelector("html").classList.remove("open_var");
          }
        }
      }
    }
  }
}, 100);
