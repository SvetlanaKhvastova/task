if (window.location.pathname === "/mc/") {
  let startFunc = setInterval(() => {
    if (document.querySelector("#player")) {
      clearInterval(startFunc)

      let scriptPopper = document.createElement("script")
      scriptPopper.src = "https://unpkg.com/popper.js@1"
      scriptPopper.async = false
      document.body.appendChild(scriptPopper)

      let scriptTippy = document.createElement("script")
      scriptTippy.src = "https://unpkg.com/tippy.js@5"
      scriptTippy.async = false
      document.body.appendChild(scriptTippy)

      /* other variables  */
      const imgFolderUrl = "https://conversionratestore.github.io/projects/knineti/img/"

      const objBadBehavior = {
        Barking: {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span>'s barking and behavior problems today!`,
        },
        Jumping: {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span>'s jumping and behavior problems today!`,
        },
        "Pulling leash": {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span>'s leash tugging and behavior problems today!`,
        },
        Housebreaking: {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span>'s housebreaking issues and behavior problems today!`,
        },
        "Nipping or biting": {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span>'s nipping & biting and behavior problems today!`,
        },
        "Not coming when called": {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span>'s stubbornness and behavior problems today!`,
        },
        "Doesn't listen": {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span>'s tendency to ignore commands and behavior problems today!`,
        },
        Chewing: {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span>'s chewing & digging and behavior problems today!`,
        },
        "Extremely excited": {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span>'s active disobedience and behavior problems today!`,
        },
        Aggression: {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span>'s aggression and behavior problems today!`,
        },
        Anxiety: {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span>'s anxiety and behavior problems today!`,
        },
        "Reacting to other dogs": {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span>'s socialization issues and behavior problems today!`,
        },
        Other: {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span>'s behavior problems today!`,
        },
      }

      let style = /*html */ `
      <style>
        .count_sec > .container,
        .enroll_btn_txt,
        #myHeaderr .top_menu_box{
            display: none;
        }
        #myHeaderr{
            padding: 0 !important;
        }
        button.new_btn{
            display: flex;
            align-items: center;
            justify-content: center;
            outline: none;
            margin: 0;
            background: #173775;
            box-shadow: 5px 5px 10px rgb(39 32 32 / 80%);
            border-radius: 10px;
            height: 48px;
            border: none;
            max-width: 303px;
            width: 100%;
            font-weight: 600;
            font-size: 14px;
            line-height: 20px;
            text-align: center;
            text-transform: uppercase;
            color: #FFFFFF !important;
        }
        .last_price_text{
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;
            text-decoration-line: line-through;
            color: rgb(128 128 128 / 75%) !important;
            margin: 0;
        }
        .new_price_text{
            font-weight: 700;
            font-size: 32px;
            line-height: 24px;
            color: #173775 !important;
            margin: 0 16px 0 8px;
        }
        .you_save_text{
            font-weight: 700;
            font-size: 12px;
            line-height: 14px;
            display: flex;
            align-items: center;
            text-align: center;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            color: #FFFFFF;
            padding: 4px 8px;
            margin: 0;
            background: #794E15;
            border-radius: 4px;
        }
        p.special_offer_text{
            background: #794E15;
            padding: 8px;
            font-weight: 700;
            font-size: 18px;
            line-height: 130%;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            color: #FFFFFF !important;
            margin: 0;
        }
        /* sticky_new_header*/
        .sticky_new_header{
            background: #FFFFFF;
            border-bottom: 3px solid #794E15;
            text-align: center;
        }
        .sticky_new_header > div{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px;
        }
        button.new_btn.enroll_now_btn_new{
            max-width: 235px;
            margin-left: 24px;
        }
        /*new_header_logo */
        .new_header_logo{
            max-width: 1030px;
            width: 100%;
            padding: 16px 15px;
        }
        .new_header_logo div.img_wrap{
            max-width: 170px;
            width: 100%;
            max-height: 40px;
        }
        .main_section .container{
            max-width: 1030px;
            width: 100%;
            margin: 0 auto !important;
            padding: 48px 15px;
        }
        /*box_second */
        .box_second .container > .box_second_content{
            display: flex;
            justify-content: space-between;
        }
        .box_second .container > .box_second_content > div{
            width: 50%;
        }
        .box_second .container > .box_second_content > div + div{
            margin-left: 52px;
        }
        .box_second .container > .box_second_content h3{
            font-weight: 700;
            font-size: 22px;
            line-height: 130%;
            color: #193973 !important;
            margin-bottom: 24px;
            text-align: left;
        }
        .box_second .container > .box_second_content ul{
            display: flex;
            flex-direction: column;
            margin: 0;
            padding: 0;
        }
        .box_second .container > .box_second_content ul li + li{
            margin-top: 24px;
        }
        .box_second .container > .box_second_content > div:nth-child(1) ul li p{
            font-size: 16px;
            line-height: 22px;
            color: #193973 !important;
            margin: 0;
            padding: 0 0 0 35px;
            position: relative;
        }
        .box_second .container > .box_second_content > div:nth-child(1) ul li p::before{
            position: absolute;
            content: "";
            width: 26px;
            height: 26px;   
            left: 0;
            top: 0;
            background: url(${imgFolderUrl}topics.svg);
            background-size: contain;
            background-repeat: no-repeat;
        }
        .box_second .container > .box_second_content > div:nth-child(1) ul:first-of-type{
            margin-bottom: 24px;
        }
        .box_second .container > .box_second_content .see_more_btn{
            font-size: 16px;
            line-height: 130%;
            text-decoration-line: underline;
            color: #173775 !important;
            cursor: pointer;
            margin: 28px 0;
            display: block;
        }
        .box_second .container > .box_second_content > div:nth-child(1) ul.see_hidden{
            display: none;
        }
        .box_second .container > .box_second_content > div:nth-child(2) ul li {
            display: flex;
        }
        .box_second .container > .box_second_content > div:nth-child(2) ul li p.name_text{
            font-weight: 700;
            font-size: 18px;
            line-height: 130%;
            color: #173775 !important;
            margin: 0 0 4px;
        }
        .box_second .container > .box_second_content > div:nth-child(2) ul li p.descrip_text{
            font-weight: 400;
            font-size: 14px;
            line-height: 130%;
            color: #506897 !important;
        }
        .box_second .container > .box_second_content > div:nth-child(2) ul li .img_wrap{
            max-width: 72px;
            max-height: 72px;
            width: 100%;
            height: 100%;
            margin-right: 12px;
        }
        /*box_third */
        .main_section .box_third h2{
            font-weight: 700;
            font-size: 28px;
            line-height: 130%;
            color: #173775 !important;
            text-align: left;
            margin-bottom: 24px;
        }
        .main_section .box_third{
            background: #DEE8F1;
        }
        .main_section .box_third ul{
            display: flex;
            margin: 0;
        }
        .main_section .box_third ul li{
            width: 50%;
        }
        .main_section .box_third ul li + li{
            margin-left: 32px;
        }
        .main_section .box_third ul li p{
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #505050 !important;
            margin: 0;
        }
        .main_section .box_third ul li p + p{
            margin-top: 16px;
        }
        .main_section .box_third ul li:nth-child(2) > div{
            padding: 12px;
            background: #FFFFFF;
            display: flex;
            justify-content: space-between;
            margin: 16px 0;
        }
        .main_section .box_third ul li:nth-child(2) > div p{
            line-height: 21px;
        }
        .main_section .box_third ul li:nth-child(2) > div > span{
            margin-right: 4px;
        }
        .main_section .box_third ul li > div p > span{
            font-weight: 600;
        }
        /*more_thirty_mins_block */
        .more_thirty_mins_block .logo_wrap{
            display: flex;
            align-items: center;
            justify-content: center;
            background: #794E15;
            padding: 10px 0;
        }
        .more_thirty_mins_block .logo_wrap .img_wrap{
            max-width: 40px;
            max-height: 40px;
            width: 100%;
            height: 100%;
            margin-right: 24px;
        }
        .more_thirty_mins_block .logo_wrap p.special_offer_text{
            background: unset;
            padding: 0;
            font-size: 20px;
        }
        .more_thirty_mins_block .total_transformation_block{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 32px;
        }
        .more_thirty_mins_block .total_transformation_block > p{
            font-weight: 700;
            font-size: 24px;
            line-height: 130%;
            color: #173775 !important;
            margin: 0 16px 0 0;
        }
        .more_thirty_mins_block .tooltip_bar{
            display: flex;
            align-items: flex-start;
            justify-content: center;
        }
        .more_thirty_mins_block .tooltip_bar > p{
            font-weight: 700;
            font-size: 14px;
            line-height: 24px;
            color: #173775 !important;
            margin: 0 0 0 8px;
        }
        .more_thirty_mins_block .enroll_now_btn_time{
            max-width: 152px;
            height: 62px;
            margin: 24px auto 19px;
        }
        .more_thirty_mins_block .join_now_descr{
            font-weight: 400;
            font-size: 14px;
            line-height: 150%;
            color: #173775 !important;
            margin: 35px 0 0;
        }

      </style>
      `

      let notFirstVisitStickyBlock = /*html */ `
        <div class="sticky_new_header">
          <p class="special_offer_text">Special Offer - Ends in <span class="count_days">7</span> <span class="text_days">days</span></p>
          <div>
              <span class="last_price_text">$497</span>
              <span class="new_price_text">$297</span>
              <span class="you_save_text">You save $200</span>
              <button class="new_btn enroll_now_btn_new">EnRoll now</button>
          </div>
        </div>
    `

      let newHeaderLogo = /*html */ `
        <div class="new_header_logo container">
            <div class="img_wrap">
                <img src="${imgFolderUrl}logo_main.png" alt="logo k9ti" />
            </div>
        </div>
    `

      let dogBadBehavior = /*html */ `
        <div class="dog_bad_behavior">
        </div>
    `

      let onClickPlay = /*html */ `
        <div class="click_play">
          <p>Click <strong>play</strong> to gain special access to training methods that will unlock your dog's best behavior</p>
        </div>
    `

      let firstVisitNewBlock = /*html */ `
        <section class="main_section">
          <div class="box_second">
            <div class="container">
                <div class="box_second_content">
                  <div>
                    <h3>Topics covered in this video:</h3>
                    <ul>
                      <li>
                        <span></span>
                        <p><strong>3 key rules</strong> that will make your dog as well-behaved as a service dog</p>
                      </li>
                      <li>
                        <span></span>
                        <p>A <strong>secret technique for relaxing walks</strong> - your dog will never tug on the leash again</p>
                      </li>
                      <li>
                        <span></span>
                        <p>The non-verbal language that will make <strong>your dog listen to you</strong></p>
                      </li>
                      <li>
                        <span></span>
                        <p>How to get your dog to calmly introduce themselves to your house-guests <strong>(No more jumping!)</strong></p>
                      </li>
                      <li>
                        <span></span>
                        <p>Finally eliminate unnecessary <strong>barking</strong>!</p>
                      </li>
                      <li>
                        <span></span>
                        <p>Preventing <strong>dog-related accidents in your home</strong></p>
                      </li>
                    </ul>
                    <ul class="see_hidden">
                      <li>
                        <span></span>
                        <p>Why you should <strong>wean your dog away from treats</strong>, and how to do it</p>
                      </li>
                      <li>
                        <span></span>
                        <p>The <strong>2 foundational commands</strong> that will make your dog obedient</p>
                      </li>
                      <li>
                        <span></span>
                        <p>How to get <strong>your dog to come to you whenever you call</strong> - just by saying their name</p>
                      </li>
                      <li>
                        <span></span>
                        <p><strong>‘Puppy push-ups’</strong>, why your dog should do them</p>
                      </li>
                      <li>
                        <span></span>
                        <p>The easiest ways to get your dog to master <strong>impulse control</strong></p>
                      </li>
                      <li>
                        <span></span>
                        <p>How to make your dog 'popular' with other animals - (and get rid of their <strong>aggressive behavior</strong>!)</p>
                      </li>
                    </ul>
                    <span class="see_more_btn"><b>See more</b></span>
                  </div>
                  <div>
                    <h3>The workshop is conducted by:</h3>
                    <ul>
                      <li>
                        <div class="img_wrap">
                          <img src="${imgFolderUrl}mentor1.jpg" alt="woman" />
                        </div>
                        <div>
                          <p class="name_text">Dr. Alexa Diaz, PhD</p>
                          <p class="descrip_text">Nationally recognized as one of the best service dog trainers in the U.S.</p>
                        </div>
                      </li>
                      <li>
                        <div class="img_wrap">
                          <img src="${imgFolderUrl}mentor2.jpg" alt="men" />
                        </div>
                        <div>
                          <p class="name_text">Eric Presnall</p>
                          <p class="descrip_text">Judge & Host of Animal Planet's Hit Show "Who Let The Dogs Out"</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <button class="new_btn watch_free_workshop_btn">Watch free workshop</button>
            </div>
          </div>
          <div class="box_third">
            <div class="container">
                <h2>There is a reason why service dogs always form extraordinarily strong bonds with their human partners...</h2>
                <ul>
                  <li>
                    <div class="img_wrap">
                      <img src="${imgFolderUrl}box_third_photo.jpg" alt="woman with dog" />
                    </div>
                  </li>
                  <li>
                    <p>
                      <strong>YouTube and $9.99 dog training books</strong> will make you think that verbal commands such as "sit", "stay", etc. are all that you need....but if you follow
                      that advice you will be making one of the <strong>BIGGEST mistakes</strong> in dog training.
                    </p>
                    <p>
                      <strong>The above workshop will reveal the real</strong> way to get service-dog levels of obedience from your dog - as taught by REAL & nationally recognized
                      service-dog training professionals.
                    </p>
                    <div>
                      <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1873_10367)">
                        <path d="M9.16663 13.4998H10.8333V15.1665H9.16663V13.4998ZM9.16663 6.83317H10.8333V11.8332H9.16663V6.83317ZM9.99163 2.6665C5.39163 2.6665 1.66663 6.39984 1.66663 10.9998C1.66663 15.5998 5.39163 19.3332 9.99163 19.3332C14.6 19.3332 18.3333 15.5998 18.3333 10.9998C18.3333 6.39984 14.6 2.6665 9.99163 2.6665ZM9.99996 17.6665C6.31663 17.6665 3.33329 14.6832 3.33329 10.9998C3.33329 7.3165 6.31663 4.33317 9.99996 4.33317C13.6833 4.33317 16.6666 7.3165 16.6666 10.9998C16.6666 14.6832 13.6833 17.6665 9.99996 17.6665Z" fill="#794E15"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1873_10367">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                      </span>
                      <p>
                        <span>NOTE:</span> This workshop will not qualify your dog as an officially certified service dog. However, it will allow them to be as calm, well-behaved, and
                        well-trained as a service dog.
                      </p>
                    </div>
                    <button class="new_btn watch_free_workshop_btn">Watch free workshop</button>
                  </li>
                </ul>
            </div>
          </div>
        </section>
    `

      let moreThirtyMinsBlock = /*html */ `
        <div class="more_thirty_mins_block">
          <div class="logo_wrap">
            <div class="img_wrap">
                <img src="${imgFolderUrl}logo_time.png" alt="logo k9ti" />
            </div>
            <p class="special_offer_text">Special Offer - Ends in <span class="count_days">7</span> <span class="text_days">days</span></p>
          </div>
          <div>
            <div class="total_transformation_block">
              <p>Total Transformation Masterclass</p>
              <span class="last_price_text">$497</span>
              <span class="new_price_text">$297</span>
              <span class="you_save_text">You save $200</span>
            </div>
            <button class="new_btn enroll_now_btn_time">EnRoll now</button>
            <div class="tooltip_bar">
              <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1873_10796)">
                <path d="M23.7941 18.5397L21.2176 15.9629C20.9519 16.5221 20.4437 16.9517 19.7989 17.1049L19.4479 17.1882L19.3645 17.5395C19.2221 18.1395 18.5521 19.2693 17.1417 19.1546L16.7817 19.1254L16.5939 19.4336C16.2778 19.9523 15.7471 20.3069 15.1572 20.412L18.5397 23.7941C18.712 23.9664 18.9612 24.0372 19.1984 23.9812C19.4356 23.9253 19.6269 23.7504 19.7039 23.5193L20.6577 20.6577L23.5193 19.7039C23.7505 19.6268 23.9253 19.4356 23.9813 19.1984C24.0372 18.9612 23.9664 18.712 23.7941 18.5397Z" fill="#173775"/>
                <path d="M7.40615 19.4336L7.21837 19.1254L6.85832 19.1546C5.44799 19.2693 4.77796 18.1395 4.63551 17.5395L4.55212 17.1883L4.20112 17.1049C3.55635 16.9517 3.04818 16.5221 2.78249 15.9629L0.20596 18.5397C0.0336478 18.712 -0.0371803 18.9612 0.0188353 19.1984C0.0748041 19.4356 0.249648 19.6268 0.480788 19.7039L3.34241 20.6577L4.29618 23.5193C4.37324 23.7505 4.56449 23.9253 4.80168 23.9812C5.03887 24.0372 5.2881 23.9664 5.46041 23.7941L8.84287 20.412C8.2529 20.3068 7.72227 19.9523 7.40615 19.4336Z" fill="#173775"/>
                <path d="M15.3932 18.7017L16.032 17.6536L17.2555 17.753C17.6008 17.781 17.9163 17.5524 17.9964 17.2146L18.2801 16.0203L19.474 15.7367C19.8118 15.6565 20.0405 15.3417 20.0124 14.9957L19.913 13.7725L20.9611 13.1338C21.2575 12.9532 21.3777 12.5832 21.2441 12.2628L20.7718 11.13L21.5711 10.1987C21.7972 9.93531 21.7973 9.54629 21.5712 9.28286L20.7718 8.35121L21.2441 7.21834C21.3777 6.89795 21.2575 6.52796 20.9611 6.34731L19.913 5.70859L20.0124 4.48543C20.0404 4.1394 19.8118 3.82464 19.474 3.74439L18.2801 3.46084L17.9964 2.26651C17.9162 1.92868 17.6008 1.70017 17.2555 1.72815L16.032 1.82753L15.3932 0.779402C15.2126 0.482871 14.8424 0.362824 14.5221 0.496371L13.3894 0.968965L12.4582 0.169559C12.1948 -0.0565195 11.8057 -0.0565195 11.5423 0.169559L10.6111 0.968871L9.47837 0.496277C9.15788 0.362637 8.78795 0.482824 8.60724 0.779309L7.96848 1.82743L6.74499 1.72806C6.39896 1.70036 6.08424 1.92859 6.00404 2.26642L5.7204 3.46075L4.52645 3.74439C4.18871 3.82464 3.96001 4.1394 3.98813 4.48543L4.08751 5.70859L3.03943 6.34731C2.74299 6.52796 2.62276 6.8979 2.75635 7.21834L3.22867 8.35121L2.42926 9.28286C2.20323 9.54629 2.20328 9.93531 2.42935 10.1987L3.22867 11.13L2.75645 12.2628C2.62285 12.5832 2.74309 12.9532 3.03953 13.1338L4.0876 13.7725L3.98823 14.9957C3.96015 15.3417 4.18881 15.6565 4.52654 15.7367L5.72049 16.0203L6.00413 17.2146C6.08438 17.5524 6.3991 17.7807 6.74509 17.753L7.96857 17.6536L8.60734 18.7017C8.78799 18.9982 9.15798 19.1184 9.47846 18.9848L10.6112 18.5122L11.5424 19.3114C11.8058 19.5375 12.1949 19.5375 12.4583 19.3114L13.3895 18.5122L14.5222 18.9848C14.8424 19.1183 15.2126 18.9982 15.3932 18.7017ZM11.7443 14.7566C11.4698 15.0311 11.0245 15.0312 10.7499 14.7566L6.60774 10.6144C6.33315 10.3398 6.33315 9.89462 6.60774 9.62003L8.73793 7.48979C9.01248 7.2152 9.4577 7.2152 9.73229 7.48979L11.2471 9.00456L14.6447 5.60697C14.9192 5.33237 15.3645 5.33237 15.6391 5.60697L17.7692 7.73715C18.0438 8.01175 18.0438 8.45692 17.7692 8.73151L11.7443 14.7566Z" fill="#679BD2"/>
                <path d="M11.7436 10.4962C11.4691 10.7708 11.0239 10.7708 10.7493 10.4962L9.23446 8.98146L8.09863 10.1173L11.2465 13.2651L16.2771 8.23446L15.1413 7.09863L11.7436 10.4962Z" fill="#173775"/>
                </g>
                <defs>
                <clipPath id="clip0_1873_10796">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
                </svg>
              </span>
              <p data-tolltip>90-day refund policy <span class="tooltip_icon" data-title="We provide an unconditional 90-day refund policy and guarantee that you will get your money back if you are dissatisfied with the Total Transformation Masterclass">lalalal</span></p>
            </div>
            <p class="join_now_descr">
              Join now to discover <strong>key techniques</strong> for addressing <strong>housebreaking issues</strong> as well as <strong>barking, jumping, bitings</strong>, and
              <strong>other unwanted behavior</strong>. Your dog is only one masterclass away from being as obedient as a service dog.
            </p>
          </div>
        </div>
    `

      document.head.insertAdjacentHTML("beforeend", style)
      document.querySelector(".main > section")?.insertAdjacentHTML("beforebegin", newHeaderLogo)
      document.querySelector(".count_sec")?.insertAdjacentHTML("afterbegin", firstVisitNewBlock)
      document.querySelector("#myHeaderr").insertAdjacentHTML("beforeend", notFirstVisitStickyBlock)
      document.querySelector(".main_section")?.insertAdjacentHTML("afterbegin", moreThirtyMinsBlock)

      for (const badBehavior in objBadBehavior) {
        if (true) {
          let cityObj = objBadBehavior[badBehavior]
          console.log(`<div class="dog_bad_behavior"><p>${cityObj.text}</p></div>`)
          if (document.querySelector(".dogs_name")) {
            document.querySelector(".dogs_name").textContent = getURLParameter("dogname")
          }
        }
      }

      onClickSeeMore()
      getEndsDays()

      //getEndsDays
      function getEndsDays() {
        if (document.querySelector("#myHeaderr h4.box_text")) {
          let value = document.querySelector("#myHeaderr h4.box_text").textContent.split(".")[1].split(" ")
          let days = value[3]
          let textDays = value[4]

          if (document.querySelector(".sticky_new_header")) {
            document.querySelector(".count_days").textContent = days
            document.querySelector(".text_days").textContent = textDays
            if (days === "2") {
              days = "tomorrow"
              textDays = ""
            }
            if (days === "1") {
              days = "today"
              textDays = ""
            }
            document.querySelector(".enroll_now_btn_new").addEventListener("click", (e) => {
              e.preventDefault()
              document.querySelector("#myHeaderr a.enroll_now_btn").click()
            })
          }
        }
      }

      // tolltip
      let tippyRun = setInterval(() => {
        if (typeof tippy === "function" && document.querySelector("p[data-tolltip]")) {
          clearInterval(tippyRun)

          document.querySelectorAll("span[data-title]").forEach((el) => {
            tippy(el, {
              content: el.getAttribute("data-title"),
              trigger: "click",
              appendTo: function () {
                return document.querySelector(".tooltip_bar")
              },
            })
          })
        }
      }, 500)

      // on click on See more/less
      function onClickSeeMore() {
        document.querySelector(".see_more_btn")?.addEventListener("click", function (e) {
          console.log(e.currentTarget.previousElementSibling)
          e.currentTarget.previousElementSibling.classList.toggle("see_hidden")
          if (!e.currentTarget.previousElementSibling.classList.contains("see_hidden")) {
            e.target.textContent = "See less"
          } else {
            e.target.textContent = "See more"
          }
        })
      }

      // getURLParameter 'dogname'
      function getURLParameter(name) {
        return decodeURIComponent((RegExp(name + "=" + "(.+?)(&|$)").exec(location.search) || [, null])[1] || "")
      }
    }
  })
}
