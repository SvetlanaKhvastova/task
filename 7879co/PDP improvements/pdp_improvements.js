let startPdp = setInterval(() => {
  if (document.querySelector("#Trustmessaging")) {
    clearInterval(startPdp);

    /********* Settings **********/
    const settings = {
      observe: false,
    };

    let script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
    script.async = false;
    document.head.appendChild(script);

    let stylePdp = /*html */ `
    <style>
        .overlay_popup {
            position: fixed !important;
            overflow: hidden;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100%;
            opacity: 1;
            background: rgba(0, 0, 0, 0.30);
            transition: all 0.5s ease 0s;
            z-index: 9005;
            display: block;
            max-height: 100%;
          }
          .overlay_popup.is_hidden {
            opacity: 0;
            pointer-events: none;
          }
          .overlay_popup.is_hidden .container_popup {
            transform: translateX(100%);
            transition: all 0.8s ease 0s;
           }
          .overlay_popup .container_popup {
            display: block;
            position: absolute;
            bottom: 0;
            right: 0;
            max-width: 560px;
            height: 100%;
            padding: 60px;
            margin: 0;
            background: #FFF;
            transition: all 0.5s ease 0s;
            overflow: auto;
            max-height: 100vh;
          }
          .overlay_popup .container_popup > svg {
            position: absolute;
            top: 24px;
            right: 24px;
            outline: none;
            cursor: pointer;
          }
          .popup_title{
            color: #000;
            font-family: 'Roobert TRIAL', sans-serif;
            font-size: 28px;
            font-weight: 500;
            line-height: 44px;
            margin-bottom: 16px;
            text-transform: lowercase;
          }
          .popup_title::first-letter{
            text-transform: uppercase;
          }
          .popup_txt_wrap{
            padding: 24px 0;
            border-top: 1px solid #EAEAEB;
            border-bottom: 1px solid #EAEAEB;
          }
          .popup_txt_wrap p{
            color: #484850;
            font-family: 'Roobert TRIAL', sans-serif;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
          }
          .popup_txt_wrap p + p{
            margin-top: 12px;
          }
        .layout-container .col-span-full .fixed.bottom-0{
            margin: 0;
        }
        .layout-container .col-span-full .fixed.bottom-0 .mx-auto.w-full{
            height: 56px;
        }
        .layout-container .col-span-full .fixed.bottom-0 .mx-auto.w-full > div,
        .layout-container .col-span-full .fixed.bottom-0 .mx-auto.w-full > div > div{
            height: 100%;
            color: #FFF;
            font-family: 'Roobert TRIAL', sans-serif;
            font-size: 16px;
            font-weight: 500;
            line-height: 24px;
            letter-spacing: 1.6px;
            text-transform: uppercase;
        }
        .layout-container .col-span-full:nth-child(2){
            padding: 48px;
            max-width: 566px;
        }
        .layout-container .col-span-full .gap-4{
            gap: 12px;
        }
        .layout-container .mt-2.mb-4.flex.items-end.justify-between.gap-4{
            margin: 0 0 10px;
        }
        .layout-container .col-span-full:nth-child(2) h1{
            color: #000;
            font-family: 'Roobert TRIAL', sans-serif;
            font-size: 28px !important;
            font-weight: 600;
            line-height: 36px !important;
            margin-bottom: 8px;
        }
        .stability_box{
            background: #FFF;
            border: 1px solid rgba(234, 234, 235, 1);
            padding: 16px;
            margin-top: 20px;
        }
        .stability_box .stability_title{
            position: relative;
            color: #000;
            font-family: 'Roobert TRIAL', sans-serif;
            font-size: 16px;
            font-weight: 600;
            line-height: 22px;
            letter-spacing: 2px;
            text-transform: uppercase;
            padding-left: 58px;
            max-width: 360px;
        }
        .stability_box .stability_title::before{
            position: absolute;
            content: '';
            width: 42px;
            height: 42px;
            background: url(https://conversionratestore.github.io/projects/7879co/img/gold2.svg) no-repeat;
            background-size: contain;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
        }
        .stability_box .stability_txt{
            color:  #484850;
            font-family: 'Roobert TRIAL', sans-serif;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            margin: 8px 0 0;
            max-width: 438px;
        }
        #Trustmessaging,
        #HowWeCompare,
        .mx-auto.max-w-screen-xl > dl{
            display: none;
        }
        .mx-auto.max-w-screen-xl{
            padding-bottom: 60px;
        }
        /*new_details_wrap */
        .new_details_bgr{
            background: #FFF;
            padding: 60px 140px;
        }
        .new_details_wrap{
            display: flex;
            justify-content: space-between;
            gap: 120px;
            max-width: 1080px;
            margin: auto;
        }
        .new_details_wrap > li{
            width: 50%;
        }
        .new_details_wrap .details_title{
            color: #000;
            font-family: 'Roobert TRIAL', sans-serif;
            font-size: 16px;
            font-weight: 600;
            line-height: 22px;
            letter-spacing: 2px;
            text-transform: uppercase;
            border-bottom: 1px solid #EAEAEB;
            margin-bottom: 12px;
            padding-bottom: 12px;
        }
        .new_details_wrap .specification_box > .mb-12{
            margin: 0;
        }
        .new_details_wrap .whitespace-pre-wrap,
        .new_details_wrap .mb-4,
        .new_details_wrap .care_inform_box p{
            color: #484850;
            font-family: 'Roobert TRIAL', sans-serif;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
             margin: 0;
        }
        .new_details_wrap .mb-4 + p,
        .new_details_wrap .care_inform_box p + p{
            margin-top: 12px;
        }
        .new_details_wrap .trustmessaging_list{
            margin: 12px 0 40px;
        }
        .new_details_wrap .trustmessaging_list li{
            position: relative;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            color: #000;
            font-family: 'Roobert TRIAL', sans-serif;
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
            padding-left: 40px;
            min-height: 32px;
        }
        .new_details_wrap .trustmessaging_list li::before{
            position: absolute;
            content: '';
            width: 32px;
            height: 32px;
            background: url(https://conversionratestore.github.io/projects/7879co/img/hypoallergenic.svg) no-repeat;
            background-size: contain;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
        }
        .new_details_wrap .trustmessaging_list li:nth-child(2):before{
            background: url(https://conversionratestore.github.io/projects/7879co/img/sustainable.svg) no-repeat;
            background-size: contain;
        }
        .new_details_wrap .trustmessaging_list li:nth-child(3):before{
            background: url(https://conversionratestore.github.io/projects/7879co/img/hallmarked.svg) no-repeat;
            background-size: contain;
        }
        .new_details_wrap .trustmessaging_list li:nth-child(4):before{
            background: url(https://conversionratestore.github.io/projects/7879co/img/hand.svg) no-repeat;
            background-size: contain;
        }
        .new_details_wrap .trustmessaging_list li + li{
            margin-top: 8px;
        }
        /*advantagesBox */
        .advantages_box_bgr{
            background: #FFF;
            max-width: 1920px;
            padding-top: 80px;
            margin: 0 2.5rem 80px;
        }
        #advantagesBox{
            border: 1px solid  #EAEAEB;
            background: #FFF;
            padding: 40px 63px;
        }
        #advantagesBox .advantages_list{
            display: flex;
            align-items: stretch;
            justify-content: space-between;
        }
        #advantagesBox .advantages_list li{
            width: 30%;
        }
        #advantagesBox .advantages_list li:nth-child(1){
            padding-right: 60px;
        }
        #advantagesBox .advantages_list li:nth-child(2){
            border-left: 1px solid #EAEAEB;
            border-right: 1px solid #EAEAEB;
            padding: 0 60px;
            width: 35%;
        }
        #advantagesBox .advantages_list li:nth-child(3){
            padding-left: 60px;
        }
        #advantagesBox .advantages_title{
            position: relative;
            display: flex;
            align-items: center;
            color: #000;
            font-family: 'Roobert TRIAL', sans-serif;
            font-size: 18px;
            font-weight: 600;
            line-height: 18px;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 12px;
            padding-left: 36px;
            min-height: 24px;
        }
        #advantagesBox .advantages_txt{
            color: #484850;
            font-family: 'Roobert TRIAL', sans-serif;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
        }
        #advantagesBox .advantages_title::before{
            position: absolute;
            content: '';
            width: 24px;
            height: 24px;
            background: url(https://conversionratestore.github.io/projects/7879co/img/price.svg) no-repeat;
            background-size: contain;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
        }
        #advantagesBox li:nth-child(2) .advantages_title:before{
            background: url(https://conversionratestore.github.io/projects/7879co/img/invest.svg) no-repeat;
            background-size: contain;
        }
        #advantagesBox li:nth-child(3) .advantages_title:before{
            background: url(https://conversionratestore.github.io/projects/7879co/img/money.svg) no-repeat;
            background-size: contain;
        }
        /*comparison_table_bgr */
        .comparison_table_bgr{
            background: #FFF;
            max-width: 1920px;
            margin: 0 2.5rem;
            padding: 18px 0  80px;
        }
        #comparisonTable{
            border: 1px solid  #EAEAEB;
            background: #FFF;
            padding: 60px 0;
        }
        #comparisonTable table{
            max-width: 870px;
            margin: 0 auto;
            border-spacing: 0 4px;
            border-collapse: separate;
        }
         #comparisonTable table td p{
            color: #000;
            font-family: 'Roobert TRIAL', sans-serif;
            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
         }
         #comparisonTable table tbody tr.colspan{
             display: none;
         }
         #comparisonTable table tbody tr td[colspan="2"]{
            border-right: 1px solid #EAEAEB;
            border-left: 1px solid #EAEAEB;
            background: #FFF;
         }
        #comparisonTable table td:nth-child(1){
            background: #F4F4F5;
            padding: 10px 16px;
            width: 270px;
        }
        #comparisonTable table td:nth-child(1) p{
            font-weight: 600;
        }
        #comparisonTable table td:nth-child(2),
        #comparisonTable table th:nth-child(2){
            background: rgba(242, 232, 211, 1);
            padding: 10px 16px;
            border-top: 1px solid #EAEAEB;
            border-bottom: 1px solid #EAEAEB;
            border-left: 1px solid #EAEAEB;
            background: #F2E8D3;
            text-align: center;
            width: 300px;
        }
        #comparisonTable table th:nth-child(2){
            position: relative;
        }
        #comparisonTable table th:nth-child(2)::after{
            position: absolute;
            content: 'vs';
            display: flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            border: 1px solid #EAEAEB;
            background: #FFF;
            background-size: contain;
            top: 50%;
            right: -18px;
            transform: translateY(-50%);
            color:  #000;
            text-align: center;
            font-family: 'Roobert TRIAL', sans-serif;
            font-size: 14px;
            font-weight: 600;
            line-height: 24px;
            letter-spacing: 0.14px;
            text-transform: uppercase;
        }
        #comparisonTable table td:nth-child(3),
        #comparisonTable table th:nth-child(3){
            border: 1px solid #EAEAEB;
            background: #FFF;
            text-align: center;
            width: 300px;
        }
        #comparisonTable table td:nth-child(3) p{
            color: #484850;
        }
        #comparisonTable table td:nth-child(2) p,
        #comparisonTable table td:nth-child(3) p{
            width: max-content;
            text-align: center;
            margin: auto;
        }
        #comparisonTable table td p.yes_var,
        #comparisonTable table td p.no_var{
            padding-left: 32px;
         }
        #comparisonTable table td p.our_price{
            font-size: 16px;
            font-weight: 600;
        }
        #comparisonTable table td p.street_price{
            color:  #484850;
            font-size: 16px;
            font-weight: 600;
        }
        #comparisonTable table th:nth-child(2) img{
            text-align: center;
            display: block;
            margin: 0 auto;
            max-width: 74px;
        }
        #comparisonTable table th:nth-child(3) p{
            color: #000;
            text-align: center;
            font-family: 'Roobert TRIAL', sans-serif;
            font-size: 13px;
            font-weight: 600;
            line-height: 16px;
            text-transform: uppercase;
        }
        #comparisonTable table .yes_var,
        #comparisonTable table .no_var{
            position: relative;
        }
        #comparisonTable table .yes_var::before,
        #comparisonTable table .no_var::before{
            position: absolute;
            content: '';
            width: 24px;
            height: 24px;
            background: url(https://conversionratestore.github.io/projects/7879co/img/yes.png) no-repeat;
            background-size: contain;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
        }
        #comparisonTable table .no_var::before{
            background: url(https://conversionratestore.github.io/projects/7879co/img/no.png) no-repeat;
            background-size: contain;
        }
        .title_review{
            font-family: 'Roobert TRIAL', sans-serif;
            font-size: 36px;
            font-weight: 600;
            line-height: 44px;
            text-align: center;
            color: #000;
            margin: 0 auto 24px;
            max-width: 905px;
        }
        @media (max-width: 768px) {
            .mx-auto.max-w-screen-xl{
                padding: 24px 1rem;
            }
            .new_details_bgr {
                padding: 0;
            }
            .new_details_wrap{
                flex-direction: column;
                gap: 12px;
                background: #F4F4F5;
            }
            .new_details_wrap > li {
                width: 100%;
                border-bottom: 1px solid #EAEAEB;
                background: #FFF;
            }
            .accardion_link_details{
                padding: 12px 16px;
                position: relative;
            }
            .accardion_link_details > span{
            display: flex;
            width: 24px;
            height: 24px;
            position: absolute;
            right: 16px;
            top: 50%;
            transform: translateY(-50%);
            align-items: center;
            justify-content: center;
        }
        .accardion_link_details > span svg{
            transition: all 0.3s ease;  
        }
        .accardion_link_details.close_block > span svg {
            transform: rotate(180deg);
            transition: all 0.3s ease;
        }
            .accardion_lists_details{
                border-top: 1px solid #EAEAEB;
                background: #FFF;
            }
            .accardion_lists_details > div{
                padding: 16px;

            }
            .new_details_wrap .details_title{
                margin: 0;
                padding: 0;
                font-size: 14px;
                line-height: 20px;
                border-bottom: none;
            }
            .new_details_wrap .trustmessaging_list {
                margin: 20px 0 0;
            }
            .new_details_wrap .trustmessaging_list li + li {
                margin-top: 4px;
            }
            .specification_html .my-3.mb-12{
                margin: 0;
            }
            #advantagesBox .advantages_list{
                flex-direction: column;
            }
            .advantages_box_bgr {
                padding-top: 32px;
                margin: 0 1rem 33px;
            }
            #advantagesBox{
                padding: 20px;
            }
            #advantagesBox .advantages_list li {
                width: 100% !important;
            }
            #advantagesBox .advantages_list li:nth-child(1){
                padding: 0;
            }
            #advantagesBox .advantages_list li:nth-child(2){
                border-top: 1px solid #EAEAEB;
                border-bottom: 1px solid #EAEAEB;
                border-left: unset;
                border-right: unset;
                padding: 20px 0;
                margin: 20px 0;
            }
            #advantagesBox .advantages_list li:nth-child(3){
                padding: 0;
            }
            #advantagesBox .advantages_title{
                margin-bottom: 8px;
                font-size: 14px;
                line-height: 20px;
            }
            #advantagesBox .advantages_txt{
                max-width: 300px;
            }
            .title_review{
                font-size: 24px;
                line-height: 32px;
                margin: 0;
            }
            #TrustpilotReviewSection{
                padding: 24px 1rem;
            }
            #TrustpilotReviewSection .scrollbar-track-platinum-18{
                padding: 0;
            }
            .comparison_table_bgr{
                margin: 0 1rem;
                padding: 0 0 32px;
            }
            #comparisonTable{
                padding: 0;
            }
            #comparisonTable table{
                border-spacing: 0;
            }
            #comparisonTable table th:nth-child(1),
            #comparisonTable table td:nth-child(1){
                display: none;
            }
            #comparisonTable table tbody tr.colspan{
                display: contents;
            }
            #comparisonTable table tbody tr td[colspan="2"] p{
                font-size: 14px;
                font-weight: 600;
            }
            #comparisonTable table td:nth-child(2), #comparisonTable table th:nth-child(2){
                width: 50%;
            }
        }
    </style>
    `;

    // popup
    let popUp = /*html */ `
        <div class="overlay_popup is_hidden">
          <div class="container_popup">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4.78138 19.9998C4.62685 19.9998 4.47577 19.954 4.34727 19.8682C4.21877 19.7824 4.11862 19.6603 4.05948 19.5176C4.00033 19.3748 3.98486 19.2177 4.01502 19.0661C4.04518 18.9146 4.1196 18.7753 4.22889 18.6661L18.6661 4.22885C18.8127 4.08232 19.0114 4 19.2186 4C19.4258 4 19.6246 4.08232 19.7711 4.22885C19.9176 4.37538 20 4.57411 20 4.78134C20 4.98856 19.9176 5.1873 19.7711 5.33383L5.33387 19.7711C5.26138 19.8437 5.17526 19.9013 5.08045 19.9406C4.98563 19.9798 4.884 19.9999 4.78138 19.9998Z" fill="black"/>
            <path d="M19.2186 19.9998C19.116 19.9999 19.0143 19.9798 18.9195 19.9406C18.8247 19.9013 18.7386 19.8437 18.6661 19.7711L4.22885 5.33383C4.08232 5.1873 4 4.98856 4 4.78134C4 4.57411 4.08232 4.37538 4.22885 4.22885C4.37538 4.08232 4.57411 4 4.78134 4C4.98856 4 5.1873 4.08232 5.33383 4.22885L19.7711 18.6661C19.8804 18.7753 19.9548 18.9146 19.9849 19.0661C20.0151 19.2177 19.9996 19.3748 19.9405 19.5176C19.8813 19.6603 19.7812 19.7824 19.6527 19.8682C19.5242 19.954 19.3731 19.9998 19.2186 19.9998Z" fill="black"/>
            </svg>
          </div>
        </div>
    `;
    let txtMadeFrom = /*html */ `
            <h2 class="popup_title txt_made_from">Made from pure platinum</h2>
            <div class="popup_txt_wrap">
                <p><b>Hallmarked by the Assay Office:</b> Our purity levels have been confirmed with full traditional UK marks. Each piece is also accompanied by a <b>unique authenticity certificate.</b></p>
                <p><b>Lifetime Warranty:</b> Automatically included to protect the value of your jewellery against defects.</p>
                <p><b>30-Day Returns Policy:</b> Customers may return any pieces they find unsatisfying within 30 days.</p>
            </div>
    `;
    let txtOurFees = /*html */ `
            <h2 class="popup_title">Our fees are fair & transparent</h2>
            <div class="popup_txt_wrap">
                <p>At 7879, transparency is at the core of our pricing, selling, and <br/> buy-back processes.</p>
                <p>We base our prices on the current market value of gold and platinum, determining the cost by the weight of each piece.<br/> With no hidden markups or additional fees, we add a transparent craftsmanship fee on top of the precious metal value. Rest assured, the prices you see may vary as they reflect the fluctuating market values, but once you add an item to your cart, the price remains fixed for 15 minutes during checkout.</p>
            </div>
    `;
    let contentPopup = /*html */ `
        <div class="content_popup"></div>
    `;
    let stabilityBox = /*html */ `
        <div class="stability_box">
            <h3 class="stability_title">Invest in the stability of platinum and gold</h3>
            <p class="stability_txt">Our jewellery uses investment grade 24k gold and pure platinum. This gives it a value that appreciates over time, and can easily be tracked or exchanged for cash. Additionally, pure gold has a distinct warm glow that just makes it look more appealing.</p>
        </div>
    `;
    let newDetailsWrap = /*html */ `
        <div class="new_details_bgr">
            <ul class="new_details_wrap">
                <li class="product_details_box">
                    <h4 class="details_title">Product details</h4>
                    <ul class="trustmessaging_list">
                        <li>Hypoallergenic & Anti-microbial</li>
                        <li>Sustainable & ethically produced</li>
                        <li>Hallmarked by Assay</li>
                        <li>Hand finished</li>
                    </ul>
                    <div class="care_inform_box">
                    <h4 class="details_title">CARE INFORMATION</h4>
                    <p>We believe the unique signature of marks your gold and platinum jewellery may pick up as you wear it adds character and tells a story.</p>
                    <p><b>Don't worry, this superficial damage won’t affect the value of your investment.</b></p>
                    </div>
                </li>
                <li class="specification_box">
                    <h4 class="details_title">SPECIFICATION</h4>
                </li>
            </ul>
        </div>
    `;
    let newDetailsWrapMob = /*html */ `
        <div class="new_details_bgr">
            <ul class="new_details_wrap">
                <li class="product_details_box">
                <div class="accardion_link_details">
                    <h4 class="details_title">Product details</h4>
                    <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.24914 15.451C5.58114 15.7829 6.11924 15.7829 6.45124 15.451L11.8501 10.0521L17.2492 15.451C17.5811 15.7829 18.1193 15.7829 18.4512 15.451C18.7832 15.119 18.7832 14.5809 18.4512 14.2489L12.4512 8.24896C12.1192 7.91696 11.5811 7.91696 11.2491 8.24896L5.24914 14.2489C4.91724 14.5809 4.91724 15.119 5.24914 15.451Z" fill="black"/>
                        </svg>
                    </span>
                </div>
                <div class="accardion_lists_details">
                    <div class="product_details_html">
                    <ul class="trustmessaging_list">
                        <li>Hypoallergenic & Anti-microbial</li>
                        <li>Sustainable & ethically produced</li>
                        <li>Hallmarked by Assay</li>
                        <li>Hand finished</li>
                    </ul>
                    </div>
                </div>
                </li>
                <li class="specification_box">
                <div class="accardion_link_details">
                    <h4 class="details_title">PRODUCT SPECIFICATION</h4>
                    <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.24914 15.451C5.58114 15.7829 6.11924 15.7829 6.45124 15.451L11.8501 10.0521L17.2492 15.451C17.5811 15.7829 18.1193 15.7829 18.4512 15.451C18.7832 15.119 18.7832 14.5809 18.4512 14.2489L12.4512 8.24896C12.1192 7.91696 11.5811 7.91696 11.2491 8.24896L5.24914 14.2489C4.91724 14.5809 4.91724 15.119 5.24914 15.451Z" fill="black"/>
                        </svg>
                    </span>
                </div>
                <div class="accardion_lists_details">
                    <div class="specification_html">
                    <span></span>
                    </div>
                </div>
                </li>
                <li class="care_inform_box">
                <div class="accardion_link_details">
                    <h4 class="details_title">CARE INFORMATION</h4>
                    <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.24914 15.451C5.58114 15.7829 6.11924 15.7829 6.45124 15.451L11.8501 10.0521L17.2492 15.451C17.5811 15.7829 18.1193 15.7829 18.4512 15.451C18.7832 15.119 18.7832 14.5809 18.4512 14.2489L12.4512 8.24896C12.1192 7.91696 11.5811 7.91696 11.2491 8.24896L5.24914 14.2489C4.91724 14.5809 4.91724 15.119 5.24914 15.451Z" fill="black"/>
                        </svg>
                    </span>
                </div>
                <div class="accardion_lists_details">
                    <div>
                    <p>We believe the unique signature of marks your gold and platinum jewellery may pick up as you wear it adds character and tells a story.</p>
                    <p><b>Don't worry, this superficial damage won’t affect the value of your investment.</b></p>
                    </div>
                </div>
                </li>
            </ul>
        </div>
    `;
    let advantagesBox = /*html */ `
        <div class="advantages_box_bgr">
            <div id="advantagesBox">
                <ul class="advantages_list">
                    <li>
                        <h3 class="advantages_title">Transparent Pricing</h3>
                        <p class="advantages_txt">We only apply a modest transparent craftsmanship fee to each item you buy.</p>
                    </li>
                    <li>
                        <h3 class="advantages_title">7879 portfolio</h3>
                        <p class="advantages_txt">7879 gives you a portfolio account where you can watch the value of your jewellery pieces appreciate over time.</p>
                    </li>
                    <li>
                        <h3 class="advantages_title">sell-back act any time</h3>
                        <p class="advantages_txt">When the price is right for you, it’s time to sell that asset. Just like when you first purchased, our buyback price is based on the current market price of the metal plus a small transaction fee.</p>
                    </li>
                </ul>
            </div>
        </div>
    `;
    let comparisonTableBox = /*html */ `
        <div class="comparison_table_bgr">
            <div id="comparisonTable">
                <table>
                    <thead>
                        <th>
                            <p>&nbsp;</p>
                        </th>
                        <th>
                            <p><img src="https://conversionratestore.github.io/projects/7879co/img/logo_table.png" alt="logo"></p>
                        </th>
                        <th>
                            <p>High Street <br/> Brands</p>
                        </th>
                    </thead>
                    <tbody>
                        <tr class="colspan">
                            <td><p>&nbsp;</p></td>
                            <td colspan="2"><p>Price/Affordability</p></td>
                        </tr>
                        <tr>
                            <td>
                                <p>Price/Affordability</p>
                            </td>
                            <td>
                                <p class="our_price">£1,609.41</p>
                            </td>
                            <td>
                                <p class="street_price">£2,400.00</p>
                            </td>
                        </tr>
                        <tr class="colspan">
                            <td><p>&nbsp;</p></td>
                            <td colspan="2"><p>Metal Purity</p></td>
                        </tr>
                        <tr>
                            <td>
                                <p>Metal Purity</p>
                            </td>
                            <td>
                                <p><strong>999</strong> PLATINUM  <br/> <strong>24k</strong> gold</p>
                            </td>
                            <td>
                                <p><strong>850</strong> or <strong>600</strong> PLATINUM <br/> <strong>18K</strong> or <strong>14K</strong> gold</p>
                            </td>
                        </tr>
                        <tr class="colspan">
                            <td><p>&nbsp;</p></td>
                            <td colspan="2"><p>Hallmarked by Assay</p></td>
                        </tr>
                        <tr>
                            <td>
                                <p>Hallmarked by Assay</p>
                            </td>
                            <td>
                                <p class="yes_var">Yes</p>
                            </td>
                            <td>
                                <p class="yes_var">Yes</p>
                            </td>
                        </tr>
                        <tr class="colspan">
                            <td><p>&nbsp;</p></td>
                            <td colspan="2"><p>-7879 Buy Back Guarantee</p></td>
                        </tr>
                        <tr>
                            <td>
                                <p>7879 Buy Back Guarantee</p>
                            </td>
                            <td>
                                <p class="yes_var">Yes</p>
                            </td>
                            <td>
                                <p class="no_var">No</p>
                            </td>
                        </tr>
                        <tr class="colspan">
                            <td><p>&nbsp;</p></td>
                            <td colspan="2"><p>Lifetime Warranty</p></td>
                        </tr>
                        <tr>
                            <td>
                                <p>Lifetime Warranty</p>
                            </td>
                            <td>
                                <p class="yes_var">Yes</p>
                            </td>
                            <td>
                                <p class="no_var">No</p>
                            </td>
                        </tr>
                        <tr class="colspan">
                            <td><p>&nbsp;</p></td>
                            <td colspan="2"><p>Hypoallergenic & Anti-microbial</p></td>
                        </tr>
                        <tr>
                            <td>
                                <p>Hypoallergenic & Anti-microbial</p>
                            </td>
                            <td>
                                <p class="yes_var">Yes</p>
                            </td>
                            <td>
                                <p class="no_var">No</p>
                            </td>
                        </tr>
                        <tr class="colspan">
                            <td><p>&nbsp;</p></td>
                            <td colspan="2"><p>Sustainably & Ethically Produced</p></td>
                        </tr>
                        <tr>
                            <td>
                                <p>Sustainably & Ethically Produced</p>
                            </td>
                            <td>
                                <p class="yes_var">Yes</p>
                            </td>
                            <td>
                                <p class="no_var">No</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;

    document.head.insertAdjacentHTML("beforeend", stylePdp);
    document.body.insertAdjacentHTML("afterbegin", popUp);

    window.onunload = unloadPage;
    function unloadPage() {
      console.log("unload event detected!");
    }

    renderHtml();

    if (document.querySelector(".overlay_popup")) {
      let overlay = document.querySelector(".overlay_popup"),
        containerPopup = overlay.querySelector(".container_popup"),
        btnClose = overlay.querySelector("svg"),
        scroll = calcScroll();

      btnClose.addEventListener("click", (e) => {
        onClosePopup();
      });

      overlay.addEventListener("click", (e) => {
        if (e.target.matches(".overlay_popup")) {
          onClosePopup();
        }
      });

      document.querySelector(".layout-container .col-span-full:nth-child(2) h1").addEventListener("click", () => {
        onOpenPopup(txtMadeFrom);
      });

      function onClosePopup() {
        overlay.classList.add("is_hidden");
        document.body.style.overflow = "unset";
        document.body.style.marginRight = `0px`;
        setTimeout(() => {
          document.querySelector(".content_popup")?.remove();
        }, 400);
      }
      function onOpenPopup(txt) {
        overlay.classList.remove("is_hidden");
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
        if (!document.querySelector(".overlay_popup .content_popup")) {
          containerPopup?.insertAdjacentHTML("beforeend", contentPopup);
        }
        if (document.querySelector(".overlay_popup .content_popup")) {
          document.querySelector(".overlay_popup .content_popup").insertAdjacentHTML("beforeend", txt);
        }
        if (document.querySelector(".txt_made_from")) {
          document.querySelector(".txt_made_from").textContent = document.querySelector(".layout-container .p-2 .tracking-widest").textContent;
        }
      }
      function calcScroll() {
        let div = document.createElement("div");
        div.style.width = "50px";
        div.style.height = "50px";
        div.style.overflowY = "scroll";
        div.style.visibility = "hidden";

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;
      }
    }

    let t = setInterval(() => {
      if (document.querySelector(".layout-container .mt-2.mb-4.flex.items-end.justify-between.gap-4")) {
        clearInterval(t);
        document.querySelector(".layout-container .col-span-full:nth-child(2) h1")?.before(document.querySelector(".layout-container .mt-2.mb-4.flex.items-end.justify-between.gap-4"));
      }
    }, 10);

    function renderHtml() {
      if (!document.querySelector(".new_btn_add_to_basket")) {
        document.querySelector(".flex.flex-col.items-end").insertAdjacentHTML("afterend", `<div class="new_btn_add_to_basket"><button>Add to basket</button></div>`);
      }
      if (!document.querySelector(".stability_box")) {
        document.querySelector(".col-span-full .mx-auto.px-5").insertAdjacentHTML("afterend", stabilityBox);
      }
      if (!document.querySelector(".title_review")) {
        document.querySelector("#TrustpilotReviewSection")?.insertAdjacentHTML("beforebegin", `<h2 class="title_review">More than 6 895 customers already trusted us</h2>`);
      }
      if (document.querySelector(".title_review") && !document.querySelector(".advantages_box_bgr")) {
        document.querySelector(".title_review").insertAdjacentHTML("beforebegin", advantagesBox);
      }
      if (!document.querySelector(".comparison_table_bgr")) {
        document.querySelector("#TrustpilotReviewSection").insertAdjacentHTML("afterend", comparisonTableBox);
      }
      if (document.querySelector(".comparison_table_bgr")) {
        document.querySelector("#comparisonTable table td p.our_price").textContent = document.querySelector("#left-view h4.text-h4:nth-child(2)").textContent.split("*")[0];
        document.querySelector("#comparisonTable table td p.street_price").textContent = document.querySelector("#right-view h4.text-h4:nth-child(2)").textContent.split("*")[0];
      }
      if (window.innerWidth > 768) {
        if (!document.querySelector(".new_details_wrap")) {
          document.querySelector(".mx-auto.max-w-screen-xl").insertAdjacentHTML("afterbegin", newDetailsWrap);
        }
        if (document.querySelector(".new_details_wrap")) {
          if (document.querySelector(".mx-auto.max-w-screen-xl .whitespace-pre-wrap")) {
            document.querySelector(".product_details_box >.details_title").after(document.querySelector(".mx-auto.max-w-screen-xl .whitespace-pre-wrap"));
          }
          if (document.querySelector(".mx-auto.max-w-screen-xl .my-3.mb-12")) {
            document.querySelector(".specification_box > .details_title").after(document.querySelector(".mx-auto.max-w-screen-xl .my-3.mb-12"));
          }
        }
      } else {
        if (!document.querySelector(".new_details_wrap")) {
          document.querySelector(".mx-auto.max-w-screen-xl").insertAdjacentHTML("afterbegin", newDetailsWrapMob);
        }
        if (document.querySelector(".new_details_wrap")) {
          if (document.querySelector(".mx-auto.max-w-screen-xl .whitespace-pre-wrap")) {
            document.querySelector(".product_details_box .trustmessaging_list").before(document.querySelector(".mx-auto.max-w-screen-xl .whitespace-pre-wrap"));
          }
          if (document.querySelector(".mx-auto.max-w-screen-xl .my-3.mb-12")) {
            document.querySelector(".specification_box .specification_html > span").after(document.querySelector(".mx-auto.max-w-screen-xl .my-3.mb-12"));
          }
        }
      }
    }

    //   onClickAccardion
    let acc = setInterval(() => {
      if (document.querySelector(".new_details_wrap")) {
        clearInterval(acc);
        onClickAccardion();
      }
    }, 10);

    function onClickAccardion() {
      let s = setInterval(() => {
        if (typeof $ === "function") {
          clearInterval(s);
          $(".accardion_link_details").click(function (e) {
            console.log(e.currentTarget, `>>>>>>>>>>>>>>`);
            if (!e.currentTarget.getAttribute("data-test")) {
              $(this).toggleClass("close_block");
              $(this).closest("li").toggleClass("close_block");
              $(this).next(".accardion_lists_details").slideToggle();
            }
            e.currentTarget.setAttribute("data-test", "1");
            setTimeout(() => {
              if (e.currentTarget.getAttribute("data-test")) {
                e.currentTarget.removeAttribute("data-test");
              }
            }, 100);
          });
        }
      }, 10);
    }

    window.addEventListener("scroll", () => {
      if ($(".new_btn_add_to_basket").is(":visible")) {
        console.log(`<<<<<<<<<<<<<<<<<<<<,>>>>>>>>>>>>>>>>>>>>`);
        if (document.querySelector(".new_btn_add_to_basket").getBoundingClientRect().top < 0) {
          console.log(document.querySelector(".new_btn_add_to_basket").getBoundingClientRect().top);
          if (!document.querySelector("#add-cart-button-fixed").classList.contains("fixed")) {
            document.querySelector("#add-cart-button-fixed").classList.add("fixed");
            document.querySelector("#add-cart-button-fixed").style.display = "block";
          }
        } else {
          if (document.querySelector("#add-cart-button-fixed").classList.contains("fixed")) {
            document.querySelector("#add-cart-button-fixed").classList.remove("fixed");
            document.querySelector("#add-cart-button-fixed").style.display = "none";
          }
        }
      }
    });

    // Observe
    let observer = new MutationObserver(() => {
      if (document) {
        observer.disconnect();
        console.log(`observer`);

        // renderHtml();
        observer.observe(document, {
          childList: true,
          subtree: true,
        });
      }
    });

    observer.observe(document, {
      childList: true,
      subtree: true,
    });
  }
}, 100);
