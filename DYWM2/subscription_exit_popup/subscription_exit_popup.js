let startFunk = setInterval(() => {
  if (document) {
    clearInterval(startFunk);

    let newStyle = /*html */ `
        <style>
            #promoteSubscriptionWrap{
                position: relative;
                background: #FFF;
                width: 100%;
                padding: 42px 0 40px;
            }
            .bgr_gray{
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                background: #F6F6F6;
                min-height: 95px;
                max-height: 95px;
                height: 100%;
                width: 100%;
            }
            .new_container{
                max-width: 1040px;
                margin: 0 auto;
                width: 90%;
                padding: 30px;
                border-radius: 12px;
                background: #FFF;
                box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.15);
            }
            .btn_wrapper{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-bottom: 16px;
                margin-bottom: 16px;
                border-bottom: 2px solid #F6F6F6;
            }
            .btn_wrapper h2{
                font-family: 'Manrope', sans-serif;
                color: #272727;
                font-size: 24px;
                font-weight: 700;
                line-height: 30px;
                margin: 0;
            }
            .accent_color{
                color: #017922;
            }
            #UnlockPremiumContentLink{
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
            #UnlockPremiumContentLink:hover{
                color: #ffffff;
                background: #00601b;
                border-color: #007922;
                text-decoration: unset;
            }
            #UnlockPremiumContentLink span{
                font-family: 'Manrope', sans-serif;
                color: #FFF;
                font-size: 16px;
                font-weight: 700;
                line-height: 32px;
                text-transform: capitalize;
            }
            .toggle_btn_features{
                display: flex;
                gap: 8px;
                cursor: pointer;
                margin: 18px auto 0;
                align-items: center;
                justify-content: center;
                width: max-content;
            }
            .toggle_btn_features span{
                font-family: 'Manrope', sans-serif;
                color: #027DB8;
                font-size: 14px;
                font-weight: 700;
                line-height: 21px;
                text-decoration-line: underline;
                text-transform: capitalize;
            }
            .toggle_btn_features > svg{
                transition: all 0.3s ease;  
            }
            .toggle_btn_features.open_var > svg{
                transform: rotateX(180deg);
            }
            .new_features_list,
            .hidden_new_features_list{
                display: flex;
                justify-content: space-between;
                gap: 24px;
                list-style: none;
                padding: 0;
                margin: 0;
            }
            .new_features_list > li,
            .hidden_new_features_list > li{
                width: 30%;
            }
            .mini_block {
                margin-top: 24px;
            }
            .mini_block > li{
                width: 100%;
            }
            .mini_block > li .list_main_title{
                margin-bottom: 12px;
            }
            .hidden_inform_box{
                display: none;
                margin-top: 12px;
            }
            .list_main_title{
                position: relative;
                color: #272727;
                font-family: 'Manrope', sans-serif;
                font-size: 14px;
                font-weight: 600;
                line-height: 20px;
                margin: 0;
                padding-left: 52px;
            }
            .list_main_title[data-title]::before{
                position: absolute;
                content: "";
                width: 40px;
                height: 40px;
                background: url(https://conversionratestore.github.io/projects/doyogawithme/img/premium.svg) no-repeat center center;
                top: 0;
                left: 0;
                background-size: contain;
            }
            .list_main_title[data-title="yoga_person"]::before{
                background: url(https://conversionratestore.github.io/projects/doyogawithme/img/yoga_person.svg) no-repeat center center;
                background-size: contain;
            }
            .list_main_title[data-title="yoga"]::before{
                background: url(https://conversionratestore.github.io/projects/doyogawithme/img/yoga.svg) no-repeat center center;
                background-size: contain;
            }
            .list_main_title[data-title="devices"]::before{
                background: url(https://conversionratestore.github.io/projects/doyogawithme/img/devices.svg) no-repeat center center;
                background-size: contain;
            }
            .list_txt{
                color: #555;
                font-family: 'Manrope', sans-serif;
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: 24px;
                margin: 0;
                max-width: 300px;
            }
            .your_store_wrap{
                margin-top: 48px;
            }
            .your_store_wrap .list_main_title{
                padding: 0;
                margin-bottom: 12px;
            }
            .professional_classes_list{
                list-style: disc;
                color: #555;
                font-size: 12px;
                margin-top: 12px;
                padding: 0 0 0 23px;
            }
            .professional_classes_list > li + li{
                margin-top: 10px;
            }
            .store_icon{
                display: flex;
                justify-content: flex-start;
                gap: 24px;
                flex-wrap: wrap;
            }
            .store_icon img{
                max-width: 140px;
                width: 100%;
            }
            [data-mob],
            [data-openmobvar]{
                display: none;
            }
            .sfc-nodePlayable__lockContainerInner{
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.25));
                backdrop-filter: blur(3px);
                max-width: 702px;
                width: 100%;
                min-height: 378px;
                background: rgba(255, 255, 255, 0.80);
                text-align: center;
                padding: 0;
                overflow: hidden;
            }
            .sfc-nodePlayable__lockContainerInner::before{
                position: absolute;
                content: 'Premium';
                right: 0;
                top: 0;
                background: #F3A83C;
                color: #272727;
                font-size: 16px;
                font-weight: 600;
                line-height: normal;
                text-transform: uppercase;
                height: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .sfc-nodePlayable__lockCta{
                border-radius: 30px;
                background: #017922;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #FFF;
                font-family: 'Manrope', sans-serif;
                font-size: 18px;
                font-weight: 700;
                line-height: 32px;
                text-transform: capitalize;
                height: 52px;
                text-decoration: unset;
                max-width: 276px;
                width: 100%;
            }
            @media (max-width: 800px) {
                .list_txt{
                    font-size: 12px;
                }
            }
            @media (max-width: 768px) {
                #promoteSubscriptionWrap{
                    padding: 24px 0;
                }
                [data-mob]{
                    display: flex;
                }
                .open_var[data-openmobvar]{
                    display: block;
                }
                .bgr_gray,
                [data-desk]{
                    display: none;
                }
                .new_features_list, .hidden_new_features_list{
                    flex-direction: column;
                    gap: 16px;
                    margin: 0;
                }
                .new_features_list > li,
                .hidden_new_features_list > li{
                    width: 100%;
                }
                .new_container{
                    padding: 16px;
                    max-width: 335px;
                    width: 81%;
                }
                .btn_wrapper{
                    flex-direction: column;
                    align-items: flex-start;
                    border-bottom: none;
                    padding: 0;
                    margin-bottom: 12px;
                }
                .btn_wrapper h2{
                    font-size: 20px;
                    font-weight: 700;
                    line-height: 28px;
                    margin: 0 0 12px;
                    max-width: 300px;
                }
                #UnlockPremiumContentLink{
                    max-width: unset;
                    width: 100%;
                    height: 42px;
                }
                #UnlockPremiumContentLink span{
                    font-size: 14px;
                    font-weight: 700;
                    line-height: 32px;
                }
                .toggle_btn_features{
                    margin: 10px auto 0;
                }
                .list_main_title{
                    font-size: 12px;
                    padding-left: 38px;
                    max-width: 249px;
                }
                .list_main_title[data-title="devices"]{
                    max-width: 227px;
                }
                .your_store_wrap {
                    margin-top: 12px;
                }
                .your_store_wrap .list_main_title {
                    margin-bottom: 6px;
                }
                .store_icon{
                    gap: 16px;
                }
                .store_icon img{
                    max-width: 120px;
                }
                .mini_block > li .list_main_title {
                    margin: 0;
                }
                .list_txt{
                    margin-top: 2px;
                    line-height: 20px;
                }
                .list_main_title[data-title]::before{
                    width: 26px;
                    height: 26px;
                }
                .hidden_inform_box{
                    margin-top: 16px;
                }
                .professional_classes_list > li + li,
                .professional_classes_list {
                    margin-top: 5px;
                }
                .professional_classes_list .list_txt{
                    font-weight: 600;
                }
                .new_features_list .list_main_title[data-title="yoga_person"] + p {
                    font-weight: 500;
                }
            }
        </style>
    `;
    let newBoxFeatures = /*html */ `
    <section id="promoteSubscriptionWrap" class="promote_subscription_wrap">
      <div class="bgr_gray"></div>
      <div class="new_container">
        <div class="btn_wrapper">
          <h2>Upgrade to Premium for <span class="accent_color">Unlimited Access</span></h2>
          <a href="https://www.doyogawithme.com/become-a-subscriber" id="UnlockPremiumContentLink">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12.0411 0H11.9557C8.88948 0 6.40234 2.48713 6.40234 5.55607V9.23989C7.04756 8.71875 7.75896 8.29136 8.52826 7.96599C8.73506 7.87776 8.94738 7.79779 9.1597 7.7261V5.55331C9.1597 4.00919 10.4115 2.7546 11.9584 2.7546H12.0439C13.588 2.7546 14.8426 4.00643 14.8426 5.55331C14.8426 6.20404 15.3693 6.7307 16.02 6.7307H16.4226C17.0733 6.7307 17.6 6.20404 17.6 5.55331C17.5972 2.48713 15.11 0 12.0411 0Z" fill="white" />
              <path d="M11.9999 8.36719C10.999 8.36719 10.0394 8.55469 9.15981 8.89936C8.11202 9.30744 7.17452 9.93612 6.40246 10.7302C5.0293 12.1392 4.18555 14.0611 4.18555 16.1843C4.18555 20.4995 7.68463 23.9986 11.9999 23.9986C16.3151 23.9986 19.8143 20.4995 19.8143 16.1843C19.8143 11.869 16.3151 8.36719 11.9999 8.36719ZM12.8244 16.9398L13.4227 19.7771C13.4586 19.9481 13.3289 20.1108 13.1524 20.1108H11.9999H10.8473C10.6708 20.1108 10.5412 19.9509 10.5771 19.7771L11.1754 16.9398C11.2223 16.7164 11.1286 16.4848 10.9355 16.3635C10.3537 15.9995 9.97047 15.3461 9.98975 14.6043C10.0173 13.5372 10.8859 12.6687 11.953 12.6438C13.0863 12.6163 14.0155 13.529 14.0155 14.6567C14.0155 15.3764 13.6378 16.0078 13.0697 16.3635C12.8739 16.4821 12.7774 16.7137 12.8244 16.9398Z" fill="white" />
            </svg>
            <span>Unlock Premium Content</span></a
          >
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
                    <img src="https://conversionratestore.github.io/projects/doyogawithme/img/apple_store_icon.svg" alt="apple store icon">
                    <img src="https://conversionratestore.github.io/projects/doyogawithme/img/google_play_icon.svg" alt="google play icon">
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
            <img src="https://conversionratestore.github.io/projects/doyogawithme/img/apple_store_icon.svg" alt="apple store icon" />
            <img src="https://conversionratestore.github.io/projects/doyogawithme/img/google_play_icon.svg" alt="google play icon" />
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

    document.head.insertAdjacentHTML("beforeend", newStyle);
    switch (window.location.pathname) {
      case "/":
        document.querySelector(".o-page__banner")?.insertAdjacentHTML("afterend", newBoxFeatures);
        break;
      case "/yoga-classes":
        document.querySelector(".o-page__header")?.insertAdjacentHTML("afterend", newBoxFeatures);
        break;
      case "/yoga-meditation":
        document.querySelector(".o-page__header")?.insertAdjacentHTML("afterend", newBoxFeatures);
        break;
      case "/yoga-challenges":
        document.querySelector(".o-page__banner")?.insertAdjacentHTML("afterend", newBoxFeatures);
        break;
      case "/yoga-programs":
        document.querySelector(".o-page__banner")?.insertAdjacentHTML("afterend", newBoxFeatures);
        break;

      default:
        document.querySelector(".o-page__header")?.insertAdjacentHTML("afterend", newBoxFeatures);
        break;
    }

    jQuery(".toggle_btn_features").click(function () {
      jQuery(".hidden_inform_box").slideToggle();
      document.querySelector("#promoteSubscriptionWrap").scrollIntoView({ block: "start", behavior: "smooth" });
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
