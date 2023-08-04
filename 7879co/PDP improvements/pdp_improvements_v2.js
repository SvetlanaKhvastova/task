let startPdp = setInterval(() => {
  if (document.querySelector("#add-cart-button-fixed")) {
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
            max-width: 434px;
          }
          .popup_txt_wrap p + p{
            margin-top: 12px;
          }
          a #trust-score.tp-widget-trustscore{
            color: #191919 !important;
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
            padding: 48px 48px 24px;
            max-width: 566px;
            margin: 0 0 0 auto;
        }
        .layout-container.p-none.py-10 > .grid > .bg-platinum-1{
            max-height: 595px;
        }
        .layout-container.p-none.py-10 .col-span-full:nth-child(2){
            margin: 0;
        }
        .layout-container .col-span-full .gap-4{
            gap: 0;
            margin: 0;
        }
        .layout-container .mt-2.mb-4.flex.items-end.justify-between.gap-4{
            margin: 0 0 12px;
        }
        .layout-container .col-span-full:nth-child(2) h1{
            color: #000;
            font-family: 'Roobert TRIAL', sans-serif;
            font-size: 28px !important;
            font-weight: 600;
            line-height: 36px !important;
            margin-bottom: 8px;
            max-width: 460px;
        }
        .bg-platinum-1 .layout-container{
            padding: 0 40px 40px;
        }
        .stability_box{
            background: #FFF;
            border: 1px solid rgba(234, 234, 235, 1);
            padding: 16px;
            margin-top: 30px;
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
        #LP-Transparent_product_comparison_table,
        #LP-Transparent-text-column-section,
        #HowWeCompare,
        .gap-x-2 > .col-span-full > .grid,
        .flex.max-w-full.justify-end,
        .my-7.flex.items-center.justify-between > button,
        .my-7.flex.items-center.justify-between + .flex.flex-col .gap-1 > svg:not(.new_svg_payments),
        .layout-container.p-none.py-10 .flex.items-center.gap-1 > svg:not(.new_svg_payments_mini ){
            display: none;
        }
        .my-7.flex.items-center.justify-between,
        .layout-container.p-none.py-10 .made_pure_box_mini + .mb-8.flex.gap-10{
            margin: 12px 0;
        }
        .my-7.flex.items-center.justify-between h3.text-h3.font-semibold,
        .layout-container.p-none.py-10 .made_pure_box_mini + .mb-8.flex.gap-10 h3.text-h3.font-semibold{
            color: #000;
            font-family: 'Roobert TRIAL', sans-serif;
            font-size: 28px;
            font-weight: 600;
            line-height: 36px;
            text-transform: capitalize;
        }
        .layout-container .col-span-full:nth-child(2) .relative.flex.w-full,
        .made_pure_box_mini{
            padding: 6px 16px;
            display: block;
            background: #F4F4F5;
        }
        .layout-container .col-span-full:nth-child(2) .relative.flex.w-full > p.text-p,
        .made_pure_wrap .made_pure_txt,
        .made_pure_box_mini .made_pure_txt,
        .made_pure_box_mini > p.text-xsc{
            color: #000;
            font-family: 'Roobert TRIAL', sans-serif;
            font-size: 13px !important;
            font-weight: 400;
            line-height: 20px !important;
            text-transform: uppercase;
            letter-spacing: inherit;
        }
        .layout-container .col-span-full:nth-child(2) .relative.flex.w-full > p.text-p,
        .made_pure_box_mini > p.text-xsc{
            font-weight: 600;
            display: inline;
        }
        .made_pure_wrap .made_pure_txt,
        .made_pure_wrap_mini .made_pure_txt{
            margin-right: 6px;
        }
        .made_pure_wrap,
        .made_pure_wrap_mini{
            margin-left: 4px;
            display: inline;
        }
        .made_pure_wrap [data-learnmore],
        .made_pure_wrap_mini [data-learnmore]{
            color: #000;
            font-size: 12px;
            font-weight: 500;
            line-height: 18px;
            text-decoration-line: underline;
            text-transform: capitalize;
            cursor: pointer;
        }
        .my-7.flex.items-center.justify-between + .flex.flex-col .mb-4.flex.items-center.gap-1,
        .layout-container.p-none.py-10 .made_pure_box_mini + .mb-8.flex.gap-10 +.flex.flex-col:not(.mb-8) .mb-4.gap-1{
            margin: 0 0 6px; 
        }
        .bg-rose-24{
            margin: 16px 0 0;
        }
        .my-7.flex.items-center.justify-between + .flex.flex-col .gap-1 .leading-5,
        .layout-container.p-none.py-10 .made_pure_box_mini + .mb-8.flex.gap-10 +.flex.flex-col:not(.mb-8) .leading-5{
            color: #484850;
            font-family: 'Roobert TRIAL', sans-serif;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
        }
        .my-7.flex.items-center.justify-between + .flex.flex-col .gap-1 .leading-5 span,
        .layout-container.p-none.py-10 .made_pure_box_mini + .mb-8.flex.gap-10 +.flex.flex-col:not(.mb-8) .leading-5 span{
            color: #000;
        }
        .bg-special.mt-7.mb-4.flex.w-full.items-center.justify-center.rounded.p-2{
            margin: 12px 0 24px;
            padding: 6px 8px;
        }
        .bg-special.mt-7.mb-4.flex.w-full.items-center.justify-center.rounded.p-2 > p{
            color: #FFF;
            font-family: 'Roobert TRIAL', sans-serif;
            font-size: 14px;
            font-weight: 600;
            line-height: 20px;
        }
        .layout-container.p-none.py-10 .bg-special.mt-7.mb-4.flex.w-full.items-center.justify-center.rounded.p-2{
            margin-bottom: 0;
        }
        .investment_txt{
            background: #E2D098;
            padding: 6px;
            text-align: center;
            color: #000;
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
            text-transform: uppercase;
            margin-bottom: 1px;
        }
        .our_fees_wrap{
            background: #F4F4F5;
            margin-top: 1px;
            padding: 6px;
            text-align: center;
        }
        .our_fees_wrap .our_fees_txt{
            color: #000;
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
            margin-right: 6px;
        }
        .our_fees_wrap [data-learnmore]{
            color: #000;
            font-size: 12px;
            font-weight: 500;
            line-height: 18px;
            text-decoration-line: underline;
            cursor: pointer;
        }
        .bg-platinum-1.py-3{
            margin: 0;
            padding: 12px;
            height: inherit;
        }
        .bg-platinum-1.py-3 p.text-xsc{
            color: #484850;
            font-family: 'Roobert TRIAL', sans-serif;
            font-size: 12px !important;
            font-weight: 600;
            line-height: 16px !important;
            letter-spacing: 1px;
            text-transform: uppercase;
            margin: 0 0 2px;
        }
        .bg-platinum-1.py-3 p.text-sm{
            color: #000;
            font-family: 'Roobert TRIAL', sans-serif;
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
        }
        .my-3[role="radiogroup"]{
            margin: 30px 0;
        }
        .my-3[role="radiogroup"] + .items-end .text-p.h-10 {
            height: unset;
            color: #000;
            font-size: 14px;
            font-weight: 500;
            line-height: 24px;
            text-decoration-line: underline;
            margin: 0 0 12px;
        }
        .my-3[role="radiogroup"] + .items-end .text-p.h-10:focus-visible{
            border: none;
        }
        .mb-3.w-full{
            margin: 0;
        }
        #add-cart-button-fixed{
           margin: 16px 0 12px;
        }
        #add-cart-button-fixed button{
            height: 56px;
        }
        #add-cart-button-fixed button .text-p{
            color: #FFF;
            font-size: 16px;
            font-weight: 500;
            line-height: 24px;
            letter-spacing: 1.6px;
            text-transform: uppercase;
            height: 100%;
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
            padding-top: 40px;
            margin: 0 2.5rem 60px;
        }
        #advantagesBox{
            border: 1px solid  #EAEAEB;
            background: #FFF;
            padding: 40px 74px;
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
            padding: 0 61px;
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
            padding: 0 0  80px;
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
            background: url(https://conversionratestore.github.io/projects/7879co/img/yes.svg) no-repeat;
            background-size: contain;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
        }
        #comparisonTable table .no_var::before{
            background: url(https://conversionratestore.github.io/projects/7879co/img/no.svg) no-repeat;
            background-size: contain;
        }
        .title_review{
            font-family: 'Roobert TRIAL', sans-serif;
            font-size: 36px;
            font-weight: 600;
            line-height: 44px;
            text-align: center;
            color: #000;
            margin: 0 auto;
            max-width: 905px;
        }
        #LP-General-testimonial-grid{
            padding-bottom: 40px;
        }
        #LP-Transparent-Video_Section{
            margin-top: 40px;
        }
        .back_to_top_btn{
            background: #f4f4f5;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 1.25rem 0;
            cursor: pointer;
            color: rgb(0, 0, 0);
            transition: all 0.8s ease 0s;
        }
        .back_to_top_btn:hover{
            color: rgb(50 105 133);
        }
        .back_to_top_btn span{
            font-size: 14px;
            line-height: 18px;
        }
        .layout-container.p-none.py-10 .mb-8.flex:not(.items-end){
            margin-bottom: 16px;
        }
        .new_return_wrapper{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 12px;
        }
        @media (max-width: 768px) {
            .bg-platinum-1 .layout-container{
                padding: 0;
            }
            #LP-General-General_Cta_Section{
                padding: 0;
                margin-bottom: 40px;
            }
            #LP-General-General_Cta_Section > div{
                margin-top: 40px;
            }
            #LP-Transparent-Video_Section{
                margin-top: 0;
            }
            .layout-container.p-none.py-10 .col-span-full:nth-child(2) {
                margin: 0;
                padding: 6px 1rem 20px;
            }
            .layout-container .col-span-full:nth-child(2) .relative.flex.w-full, .made_pure_box_mini{
                padding: 6px 8px;
            }
            .layout-container .col-span-full:nth-child(2) .relative.flex.w-full > p.text-p, .made_pure_wrap .made_pure_txt, .made_pure_box_mini .made_pure_txt, .made_pure_box_mini > p.text-xsc{
                font-size: 12px !important;
                line-height: 18px !important;
            }
            .my-7.flex.items-center.justify-between, .layout-container.p-none.py-10 .made_pure_box_mini + .mb-8.flex.gap-10{
                margin: 12px 0 8px;
            }
            .my-7.flex.items-center.justify-between h3.text-h3.font-semibold, .layout-container.p-none.py-10 .made_pure_box_mini + .mb-8.flex.gap-10 h3.text-h3.font-semibold{
                font-size: 24px;
                line-height: 32px;
            }
            .my-7.flex.items-center.justify-between + .flex.flex-col .gap-1 .leading-5, .layout-container.p-none.py-10 .made_pure_box_mini + .mb-8.flex.gap-10 +.flex.flex-col:not(.mb-8) .leading-5{
                font-size: 14px;
                line-height: 20px;
            }
            .bg-special.mt-7.mb-4.flex.w-full.items-center.justify-center.rounded.p-2 > p{
                text-align: center;
                width: 100%;
                max-width: unset;
                font-size: 13px;
            }
            .layout-container.py-10{
                padding-top: 0;
            }
            .stability_box{
                margin-top: 11px;
            }
            .stability_box .stability_title{
                font-size: 14px;
                line-height: 20px;
            }
            #add-cart-button-fixed button{
                height: 44px;
            }
            #add-cart-button-fixed{
                margin: 0;
                left: 0;
                border-top: 1px solid #EAEAEB;
                background: #FFF;
                box-shadow: 0px -2px 16px 0px rgba(0, 0, 0, 0.10);
                padding: 8px 1rem 16px;
            }
            .sticky_wrap{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 8px;
            }
            .sticky_wrap > .sticky_information{
                color: #000;
                font-size: 14px;
                font-weight: 400;
                line-height: 20px;
                text-decoration-line: underline;
            }
            .sticky_wrap .our_price{
                color: #000;
                font-size: 14px;
                font-weight: 600;
                line-height: 20px;
                text-transform: uppercase;
                margin-left: 12px;
            }
            .layout-container .col-span-full:nth-child(2){
                padding: 12px 1rem 32px;
            }
            .layout-container .mt-2.mb-4.flex.items-end.justify-between.gap-4{
                margin: 0 0 8px;
            }
            .layout-container .col-span-full:nth-child(2) h1{
                font-size: 22px !important;
                line-height: 30px !important;
            }
            .layout-container .col-span-full:nth-child(2) .relative.flex.w-full{
                padding: 6px 8px;
            }
            .layout-container .col-span-full:nth-child(2) .relative.flex.w-full > p.text-p, .made_pure_wrap .made_pure_txt{
                line-height: 18px !important;
                font-size: 12px !important;
                font-family: inherit;
            }
            .my-7.flex.items-center.justify-between {
                margin: 12px 0 8px;
            }
            .my-7.flex.items-center.justify-between h3.text-h3.font-semibold{
                font-size: 24px;
                line-height: 32px; 
            }
            .my-7.flex.items-center.justify-between + .flex.flex-col .gap-1 .leading-5{
                font-size: 14px;
                line-height: 20px;
            }
            .investment_txt{
                font-size: 13px;
                line-height: 18px;
            }
            .my-3[role="radiogroup"] + .items-end .text-p.h-10{
                margin: 0 0 8px;
            }
            .new_btn_add_to_basket{
                margin: 16px 0 12px;
            }
            .new_btn_add_to_basket button{
                color: #FFF;
                font-family: 'Roobert TRIAL', sans-serif;
                font-size: 16px;
                font-weight: 500;
                line-height: 24px;
                letter-spacing: 1.6px;
                text-transform: uppercase;
                width: 100%;
                height: 44px;
                background: #000;
            }
            .new_btn_add_to_basket button > div >.absolute{
                background: #000;
            }
            .bg-platinum-1.py-3{
                padding: 14px;
            }
            .bg-platinum-1.py-3 p.text-xsc{
                font-size: 10px !important;
                line-height: 14px !important;
            }
            .my-3[role="radiogroup"]{
                margin: 32px 0;
            }
            .layout-container.py-10 .my-3[role="radiogroup"] {
                margin: 20px 0;
            }
            .back_to_top_btn span{
                font-size: 16px;
            }
            .new_details_bgr {
                padding: 0;
            }
            .bg-rose-24.px-6{
                margin-top: 0;
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
                padding-top: 24px;
                margin: 0 1rem 24px;
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
            .overlay_popup .container_popup{
                padding: 24px;
                max-height: fit-content;
                height: fit-content;
            }
            .popup_title{
                font-size: 20px;
                line-height: 28px;
                margin-bottom: 12px;
            }
            .popup_txt_wrap {
                padding: 0;
                border-top: unset;
                border-bottom: unset;
            }
            .overlay_popup .container_popup > svg{
                top: 16px;
                right: 16px;
            }
            .overlay_popup.is_hidden .container_popup {
            transform: translateY(100%);
            transition: all 0.8s ease 0s;
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
                <p><b>30-Day Returns Policy:</b> Customers may return any pieces they find unsatisfactory within 30 days.</p>
            </div>
    `;
    let txtOurFees = /*html */ `
            <h2 class="popup_title">Our fees are fair & transparent</h2>
            <div class="popup_txt_wrap">
                <p>At 7879, transparency is at the core of our pricing, selling, and <br/> buy-back processes.</p>
                <p>We base our prices on the current market value of gold and platinum, determining the cost by the weight of each piece.</p>
                <p>We add a transparent craftsmanship fee onto the precious metal value, with no additional hidden markups. The prices you see may fluctuate according to up-to-the-minute market values, but once you add an item to your cart, the price remains fixed for 15 minutes during checkout.</p>
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
                        <li>Hypoallergenic & anti-microbial</li>
                        <li>Sustainable & ethically produced</li>
                        <li>Hallmarked by assay</li>
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
                            <p><img src="https://conversionratestore.github.io/projects/7879co/img/logo_table2.png" alt="logo"></p>
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

    renderHtml();
    changePopup();

    if (window.innerWidth > 768) {
      changePlaceExcellent();
    }

    function changePopup() {
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

        document.querySelectorAll("[data-learnMore]").forEach((el) => {
          el.addEventListener("click", (e) => {
            if (e.currentTarget.getAttribute("data-learnMore") === "1") {
              onOpenPopup(txtMadeFrom);
            }
            if (e.currentTarget.getAttribute("data-learnMore") === "2") {
              onOpenPopup(txtOurFees);
            }
          });
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
          if (document.querySelector(".overlay_popup .content_popup") && document.querySelector(".overlay_popup .content_popup").children.length === 0) {
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
    }

    function changePlaceExcellent() {
      let t = setInterval(() => {
        if (document.querySelector(".layout-container.bg-platinum-1 .mt-2.mb-4.flex.items-end.justify-between.gap-4")) {
          clearInterval(t);
          document.querySelector(".layout-container.bg-platinum-1 .col-span-full:nth-child(2) h1")?.before(document.querySelector(".layout-container.bg-platinum-1 .mt-2.mb-4.flex.items-end.justify-between.gap-4"));
        }
      }, 10);
    }

    function renderHtml() {
      if (document.querySelector("#add-cart-button-fixed button .text-p > div").textContent !== "ADD TO BASKET") {
        document.querySelector("#add-cart-button-fixed button .text-p > div").textContent = "ADD TO BASKET";
      }
      if (!document.querySelector(".made_pure_wrap")) {
        document.querySelector(".layout-container .col-span-full:nth-child(2) .relative.flex.w-full p.text-p")?.insertAdjacentHTML("afterend", `<div class="made_pure_wrap"><span class="made_pure_txt">(99.9% purity)</span> <span data-learnMore="1">learn more</span></div>`);
      }
      if (!document.querySelector(".new_svg_payments.red_var")) {
        document.querySelectorAll(".my-7.flex.items-center.justify-between + .flex.flex-col .gap-1")[0].insertAdjacentHTML(
          "beforeend",
          `<svg class="new_svg_payments red_var" width="44" height="16" viewBox="0 0 44 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Layer 1">
                <rect id="Rectangle 2" width="44" height="16" rx="4" fill="#FFB3C7"/>
                <g id="Group 340">
                <path id="Vector" d="M35.0004 6.76203C34.5864 6.46818 34.1032 6.2973 33.6027 6.26778C33.1022 6.23827 32.6034 6.35124 32.1601 6.59454C31.7168 6.83783 31.3458 7.20223 31.087 7.64847C30.8282 8.09471 30.6914 8.60589 30.6914 9.12694C30.6914 9.648 30.8282 10.1592 31.087 10.6054C31.3458 11.0517 31.7168 11.4161 32.1601 11.6593C32.6034 11.9026 33.1022 12.0156 33.6027 11.9861C34.1032 11.9566 34.5864 11.7857 35.0004 11.4919V11.8383H36.5602V6.42947H35.0004V6.76203ZM33.5784 10.5219C33.3189 10.5048 33.07 10.4092 32.8621 10.2469C32.6543 10.0846 32.4966 9.86269 32.4085 9.60847C32.3204 9.35425 32.3058 9.0788 32.3664 8.81603C32.4269 8.55327 32.5601 8.31465 32.7495 8.12953C32.9389 7.94442 33.1762 7.82089 33.4322 7.77416C33.6883 7.72742 33.9519 7.75952 34.1906 7.86649C34.4293 7.97346 34.6327 8.15064 34.7758 8.37623C34.9189 8.60182 34.9954 8.86598 34.996 9.13618C34.9832 9.51477 34.8271 9.87279 34.5616 10.1323C34.2961 10.3918 33.9427 10.5318 33.5784 10.5219Z" fill="black"/>
                <path id="Vector_2" d="M13.5807 4H11.9453V11.8384H13.5807V4Z" fill="black"/>
                <path id="Vector_3" d="M27.9215 6.27257C27.6143 6.25342 27.3073 6.3124 27.027 6.4444C26.7467 6.57639 26.5015 6.77742 26.3128 7.03008V6.42962H24.7441V11.8384H26.3217V8.98852C26.3102 8.83897 26.3271 8.68852 26.3716 8.54579C26.4161 8.40305 26.4872 8.27084 26.5809 8.15671C26.6746 8.04259 26.789 7.94879 26.9177 7.8807C27.0463 7.8126 27.1866 7.77155 27.3305 7.75988H27.4905C28.1793 7.75988 28.5748 8.18944 28.5748 8.97929V11.8384H30.1346V8.39268C30.1479 7.12708 29.188 6.27257 27.9215 6.27257Z" fill="black"/>
                <path id="Vector_4" d="M18.5225 6.76207C18.108 6.47148 17.6253 6.30359 17.126 6.27639C16.6267 6.24919 16.1297 6.3637 15.6883 6.60767C15.2468 6.85163 14.8776 7.21584 14.6201 7.66127C14.3626 8.1067 14.2266 8.61656 14.2266 9.13622C14.2266 9.65588 14.3626 10.1657 14.6201 10.6112C14.8776 11.0566 15.2468 11.4208 15.6883 11.6648C16.1297 11.9087 16.6267 12.0233 17.126 11.9961C17.6253 11.9689 18.108 11.801 18.5225 11.5104V11.8568H20.0823V6.42951H18.5225V6.76207ZM17.1004 10.5219C16.841 10.5048 16.592 10.4092 16.3842 10.2469C16.1763 10.0846 16.0186 9.86273 15.9306 9.60851C15.8425 9.35428 15.8278 9.07884 15.8884 8.81607C15.949 8.55331 16.0822 8.31468 16.2715 8.12957C16.4609 7.94446 16.6982 7.82093 16.9543 7.7742C17.2103 7.72746 17.4739 7.75955 17.7127 7.86653C17.9514 7.9735 18.1548 8.15068 18.2979 8.37627C18.441 8.60186 18.5175 8.86601 18.518 9.13622C18.5064 9.51522 18.3507 9.87396 18.0849 10.1337C17.8191 10.3935 17.4651 10.5331 17.1004 10.5219Z" fill="black"/>
                <path id="Vector_5" d="M22.5217 7.12231V6.42947H20.9219V11.8383H22.5217V9.30708C22.5217 8.45257 23.4104 7.99529 24.0281 7.99529V6.42947C23.7437 6.42469 23.4618 6.48417 23.2016 6.6038C22.9415 6.72343 22.7095 6.90034 22.5217 7.12231Z" fill="black"/>
                <path id="Vector_6" d="M38.2184 9.91676C38.024 9.91676 37.8339 9.97675 37.6723 10.0891C37.5107 10.2015 37.3849 10.3612 37.3107 10.548C37.2365 10.7348 37.2173 10.9403 37.2555 11.1384C37.2938 11.3365 37.3878 11.5184 37.5256 11.661C37.6633 11.8036 37.8388 11.9004 38.0296 11.9393C38.2204 11.9782 38.418 11.9573 38.5973 11.8793C38.7767 11.8013 38.9298 11.6698 39.0372 11.5013C39.1445 11.3328 39.2014 11.135 39.2005 10.9329C39.2005 10.7991 39.1751 10.6666 39.1257 10.543C39.0763 10.4194 39.0038 10.3072 38.9126 10.2128C38.8213 10.1183 38.713 10.0436 38.5939 9.99278C38.4748 9.94199 38.3472 9.91615 38.2184 9.91676Z" fill="black"/>
                <path id="Vector_7" d="M10.8216 4H9.1285C9.13008 4.70644 8.97207 5.40339 8.66719 6.03477C8.36231 6.66614 7.91908 7.2143 7.37317 7.63513L6.70215 8.15707L9.30626 11.8522H11.4438L9.04851 8.4573C9.61421 7.8741 10.0624 7.17953 10.3668 6.41421C10.6713 5.64888 10.8259 4.82815 10.8216 4Z" fill="black"/>
                <path id="Vector_8" d="M6.49736 4H4.7998V11.843H6.49736V4Z" fill="black"/>
                </g>
                </g>
                </svg>
                `
        );
      }

      if (!document.querySelector(".new_svg_payments.green_var")) {
        document.querySelectorAll(".my-7.flex.items-center.justify-between + .flex.flex-col .gap-1")[1].insertAdjacentHTML(
          "beforeend",
          `<svg class="new_svg_payments green_var" width="54" height="16" viewBox="0 0 54 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Group 34151">
            <rect id="Rectangle 1" width="54" height="16" rx="4" fill="#B2FCE4"/>
            <g id="Clearpay Logo Mint">
            <path id="Vector" d="M39.8533 5.86426L36.8543 11.9431H35.6117L36.7304 9.67264L34.9688 5.86535H36.245L37.377 8.41481L38.6133 5.86535L39.8533 5.86426Z" fill="black"/>
            <path id="Vector_2" d="M28.4391 8.02252C28.4391 7.32348 27.903 6.78721 27.2438 6.78721C26.5846 6.78721 26.0482 7.30531 26.0482 8.02252C26.0482 8.73064 26.5842 9.25782 27.2438 9.25782C27.9034 9.25782 28.4391 8.72228 28.4391 8.02252ZM24.958 11.9432V5.86436H26.0393V6.42534C26.3637 6.02822 26.848 5.78516 27.428 5.78516C28.6148 5.78516 29.5466 6.74361 29.5466 8.01271C29.5466 9.2818 28.5974 10.2486 27.401 10.2486C26.8461 10.2486 26.3904 10.0328 26.0737 9.6702V11.9417L24.958 11.9432Z" fill="black"/>
            <path id="Vector_3" d="M33.4428 8.02258C33.4428 7.29775 32.9068 6.78727 32.2472 6.78727C31.5876 6.78727 31.0519 7.30501 31.0519 8.02258C31.0519 8.7307 31.5879 9.25789 32.2472 9.25789C32.9064 9.25789 33.4428 8.74923 33.4428 8.02258ZM33.4517 10.1811V9.62012C33.1261 10.0085 32.6426 10.2501 32.0626 10.2501C30.8584 10.2501 29.9443 9.3004 29.9443 8.02258C29.9443 6.75385 30.8936 5.78667 32.0899 5.78667C32.3498 5.78468 32.6069 5.83942 32.8426 5.94693C33.0782 6.05444 33.2867 6.21203 33.4528 6.40832V5.86333H34.5337V10.1815L33.4517 10.1811Z" fill="black"/>
            <path id="Vector_4" d="M23.0097 6.2872C23.0097 6.2872 23.2849 5.78509 23.9593 5.78509C24.123 5.7822 24.2854 5.81547 24.4343 5.88246V6.98406C24.4343 6.98406 24.0273 6.73736 23.6541 6.78714C23.2808 6.83691 23.0441 7.17335 23.0452 7.62279V10.1813H21.9287V5.86429H23.0097V6.2872Z" fill="black"/>
            <path id="Vector_5" d="M48.2447 5.62095L46.9662 4.90047L45.6692 4.16982C44.8098 3.68551 43.7385 4.29481 43.7385 5.26779V5.43202C43.7384 5.47621 43.7502 5.51965 43.7726 5.55793C43.7951 5.59621 43.8275 5.62798 43.8665 5.65001L44.4684 5.98899C44.5064 6.01048 44.5496 6.02176 44.5935 6.02169C44.6374 6.02162 44.6805 6.0102 44.7184 5.98859C44.7564 5.96698 44.7879 5.93593 44.8098 5.89856C44.8317 5.8612 44.8432 5.81883 44.8431 5.77572V5.38551C44.843 5.34155 44.8546 5.29832 44.8769 5.26017C44.8991 5.22202 44.9312 5.1903 44.9699 5.16821C45.0086 5.14611 45.0525 5.13441 45.0973 5.13429C45.1421 5.13417 45.1861 5.14563 45.2249 5.16751L46.4087 5.83567L47.5902 6.50128C47.6292 6.52314 47.6616 6.55473 47.6842 6.59286C47.7067 6.63098 47.7186 6.67429 47.7186 6.71837C47.7186 6.76246 47.7067 6.80576 47.6842 6.84388C47.6616 6.88201 47.6292 6.9136 47.5902 6.93546L46.4098 7.6018L45.226 8.26996C45.1872 8.29173 45.1432 8.30309 45.0985 8.30291C45.0537 8.30274 45.0099 8.29102 44.9712 8.26895C44.9325 8.24687 44.9005 8.21521 44.8782 8.17713C44.8559 8.13904 44.8442 8.09588 44.8442 8.05196V7.85903C44.8442 6.88568 43.7714 6.27639 42.9136 6.7607L41.6188 7.49135L40.3399 8.21182C39.4765 8.69868 39.4765 9.922 40.3399 10.4085L41.6188 11.129L42.9136 11.8596C43.7729 12.3439 44.8442 11.7346 44.8442 10.7613V10.5971C44.8444 10.5529 44.8326 10.5094 44.8101 10.4711C44.7876 10.4329 44.7552 10.4011 44.7162 10.3791L44.1147 10.0401C44.0767 10.0186 44.0335 10.0074 43.9896 10.0074C43.9457 10.0075 43.9026 10.0189 43.8646 10.0405C43.8266 10.0621 43.7951 10.0932 43.7731 10.1305C43.7512 10.1679 43.7396 10.2102 43.7396 10.2534V10.6421C43.7399 10.6861 43.7283 10.7293 43.7061 10.7675C43.6839 10.8056 43.6518 10.8374 43.6131 10.8595C43.5745 10.8816 43.5305 10.8933 43.4858 10.8934C43.441 10.8935 43.397 10.882 43.3582 10.8601L42.1744 10.1923L40.9903 9.52743C40.9514 9.50549 40.9191 9.47388 40.8966 9.43576C40.8742 9.39764 40.8623 9.35438 40.8623 9.31034C40.8623 9.2663 40.8742 9.22303 40.8966 9.18492C40.9191 9.1468 40.9514 9.11518 40.9903 9.09325L42.1719 8.42727L43.3556 7.75948C43.3944 7.73768 43.4384 7.7263 43.4831 7.72647C43.5278 7.72663 43.5717 7.73835 43.6104 7.76044C43.649 7.78252 43.681 7.8142 43.7033 7.8523C43.7255 7.8904 43.7372 7.93357 43.737 7.97748V8.1704C43.737 9.14339 44.8098 9.75305 45.6677 9.26874L46.9647 8.53773L48.2432 7.81725C49.1081 7.33076 49.1081 6.10744 48.2447 5.62095Z" fill="black"/>
            <path id="Vector_6" d="M9.50614 8.57272C9.26901 9.56388 8.39967 10.2462 7.27508 10.2462C5.97514 10.2462 5 9.28848 5 8.02047C5 6.75246 5.99253 5.78638 7.29358 5.78638C8.39153 5.78638 9.25237 6.46798 9.498 7.44278H8.35565C8.25749 7.25021 8.10719 7.08794 7.92126 6.97379C7.73533 6.85964 7.52097 6.79802 7.30172 6.7957C6.65175 6.7957 6.10721 7.32179 6.10721 8.02047C6.10721 8.71914 6.65175 9.2456 7.30172 9.2456C7.52626 9.2469 7.74633 9.18396 7.93506 9.06447C8.12379 8.94498 8.27302 8.77412 8.36453 8.57272H9.50614Z" fill="black"/>
            <path id="Vector_7" d="M10.0215 10.177V4.08911H11.128V10.177H10.0215Z" fill="black"/>
            <path id="Vector_8" d="M12.7905 8.30518C12.8693 8.94355 13.335 9.30578 13.9232 9.30578C14.389 9.30578 14.7489 9.08997 14.959 8.74517H16.0921C15.8284 9.6593 14.9942 10.2461 13.8962 10.2461C12.57 10.2461 11.6396 9.33158 11.6396 8.02978C11.6396 6.72799 12.6233 5.78516 13.9232 5.78516C15.2321 5.78516 16.1798 6.73416 16.1798 8.02797C16.1801 8.12063 16.1713 8.21309 16.1536 8.30409L12.7905 8.30518ZM14.9949 7.6323C14.9158 7.07169 14.4504 6.73525 13.9059 6.73525C13.3613 6.73525 12.9133 7.06225 12.799 7.6323H14.9949Z" fill="black"/>
            <path id="Vector_9" d="M20.1245 10.177V9.61637C19.7997 10.0044 19.3166 10.246 18.7369 10.246C17.5335 10.246 16.6201 9.29701 16.6201 8.02028C16.6201 6.75227 17.5686 5.78619 18.7631 5.78619C19.0228 5.78409 19.2796 5.83875 19.5151 5.94621C19.7505 6.05366 19.9587 6.21123 20.1245 6.40748V5.86249H21.2051V10.177H20.1245ZM20.116 8.02028C20.116 7.29581 19.5799 6.78679 18.9215 6.78679C18.263 6.78679 17.727 7.30453 17.727 8.02028C17.727 8.72768 18.2626 9.25559 18.9215 9.25559C19.5803 9.25559 20.116 8.74512 20.116 8.02028Z" fill="black"/>
            </g>
            </g>
            </svg>
            `
        );
      }
      if (!document.querySelector(".investment_txt")) {
        document.querySelector(".bg-platinum-1.py-3").insertAdjacentHTML("beforebegin", `<p class="investment_txt">7879 jewellery is a long-term investment</p>`);
      }
      if (!document.querySelector(".our_fees_wrap")) {
        document.querySelector(".bg-platinum-1.py-3").insertAdjacentHTML("afterend", `<div class="our_fees_wrap"><span class="our_fees_txt">Our fees are fair & transparent</span> <span data-learnMore="2">Learn more</span></div>`);
      }
      if (!document.querySelector(".stability_box")) {
        document.querySelector(".col-span-full .mx-auto.px-5").insertAdjacentHTML("afterend", stabilityBox);
      }
      if (!document.querySelector(".title_review")) {
        document.querySelector("#TrustpilotReviewSection")?.insertAdjacentHTML("beforebegin", `<h2 class="title_review">More than 6,895 customers already trust us</h2>`);
      }
      if (document.querySelector(".comparison_table_bgr") && !document.querySelector(".advantages_box_bgr")) {
        document.querySelector(".comparison_table_bgr").insertAdjacentHTML("beforebegin", advantagesBox);
      }
      if (document.querySelector(".title_review") && !document.querySelector(".comparison_table_bgr")) {
        document.querySelector(".title_review").insertAdjacentHTML("beforebegin", comparisonTableBox);
      }
      if (document.querySelector(".comparison_table_bgr")) {
        document.querySelector("#comparisonTable table td p.our_price").textContent = document.querySelector(".my-7.flex.items-center.justify-between h3.text-h3.font-semibold").textContent.split("*")[0];
        document.querySelector("#comparisonTable table td p.street_price").textContent = document.querySelector("#right-view h4.text-h4:nth-child(2)").textContent.split("*")[0];
      }
      if (document.querySelector("#LP-General-General_Cta_Section") && document.querySelector("#LP-General-testimonial-grid") && !document.querySelector("#LP-General-testimonial-grid + #LP-General-General_Cta_Section")) {
        document.querySelector("#LP-General-testimonial-grid").closest(".relative").after(document.querySelector("#LP-General-General_Cta_Section"));
      }
      if (!document.querySelector(".back_to_top_btn +.bg-black.relative.px-6")) {
        document.querySelector(".back_to_top_btn")?.remove();
        if (document.querySelector(".bg-black.relative.px-6") && !document.querySelector(".back_to_top_btn")) {
          document.querySelector(".bg-black.relative.px-6").insertAdjacentHTML(
            "beforebegin",
            `<div class="back_to_top_btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="rotate-180 stroke-current"><path d="M16.75 10.75L12 15.25L7.25 10.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  <span>Back to top</span>
                </div>`
          );
        }
        let findBtnBackToTop = setInterval(() => {
          if (document.querySelector(".back_to_top_btn")) {
            clearInterval(findBtnBackToTop);
            document.querySelector(".back_to_top_btn").addEventListener("click", (e) => {
              e.preventDefault();
              document.querySelector("#main").scrollIntoView({ block: "start", behavior: "smooth" });
            });
          }
        }, 100);
      }

      if (window.innerWidth < 768) {
        if (!document.querySelector(".new_btn_add_to_basket")) {
          document.querySelector(".flex.flex-col.items-end").insertAdjacentHTML("afterend", `<div class="new_btn_add_to_basket"></div>`);
        }

        if (document.querySelector(".new_btn_add_to_basket")) {
          if (!document.querySelector(".new_btn_add_to_basket button")) {
            let newBtn = document.querySelector("#add-cart-button-fixed button").cloneNode(true);
            document.querySelector(".new_btn_add_to_basket").appendChild(newBtn);
            document.querySelector(".new_btn_add_to_basket button").addEventListener("click", () => {
              if (!document.querySelector(".new_btn_add_to_basket button > div >.absolute")) {
                document.querySelector(".new_btn_add_to_basket button > div").insertAdjacentHTML(
                  "afterbegin",
                  `<div class="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 66 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-15 animate-spin stroke-current text-white">
                    <circle opacity="0.24" cx="33" cy="24" r="12" stroke-width="3"></circle>
                    <path d="M21 24C21 30.6274 26.3726 36 33 36C39.6274 36 45 30.6274 45 24C45 17.3726 39.6274 12 33 12" stroke-width="3"></path>
                  </svg>
                </div>`
                );
              }
              document.querySelector("#add-cart-button-fixed button")?.click();
              setTimeout(() => {
                document.querySelector(".new_btn_add_to_basket button > div >.absolute")?.remove();
              }, 500);
            });
          }
        }

        if (!document.querySelector(".sticky_wrap")) {
          document.querySelector("#add-cart-button-fixed").insertAdjacentHTML(
            "afterbegin",
            `    <div class="sticky_wrap">
                      <p class="sticky_information"><span class="metal_txt">PURE PLATINUM</span> | <span class="size_txt">26" LENGTH ~ 66CM</span></p>
                      <p class="our_price">£1,609.41</p>
                      </div>`
          );
        }

        if (document.querySelector(".sticky_wrap")) {
          document.querySelector(".sticky_wrap .metal_txt").textContent = document.querySelectorAll('.my-3[role="radiogroup"] .gap-6 span.bg-black')[0].closest(".border-black").nextElementSibling.textContent;
          document.querySelector(".sticky_wrap .size_txt").textContent = document.querySelectorAll(".mb-3.w-full button .text-p.truncate")[0].textContent;
          document.querySelector(".sticky_wrap .our_price").textContent = document.querySelector("#left-view h4.text-h4:nth-child(2)").textContent.split("*")[0];
        }
      }
    }

    changeMiniCard();
    function changeMiniCard() {
      let findMiniCard = setInterval(() => {
        if (document.querySelector(".layout-container.p-none.py-10")) {
          clearInterval(findMiniCard);
          console.log(`changeMiniCard`);

          if (!document.querySelector(".layout-container.p-none.py-10 h1 + .made_pure_box_mini")) {
            document.querySelector(".layout-container.p-none.py-10 h1").insertAdjacentHTML("afterend", `<div class="made_pure_box_mini"><span class="inner_span"></span></div>`);
          }

          if (document.querySelector(".layout-container.p-none.py-10 .made_pure_box_mini") && !document.querySelector(".layout-container.p-none.py-10 .made_pure_box_mini .text-xsc")) {
            document.querySelector(".layout-container.p-none.py-10 .made_pure_box_mini .inner_span").after(document.querySelectorAll(".layout-container.p-none.py-10 .text-xsc")[0]);
          }

          if (!document.querySelector(".layout-container.p-none.py-10 .made_pure_box_mini + .mb-8.flex.gap-10") && document.querySelector(".layout-container.p-none.py-10 .made_pure_box_mini")) {
            document.querySelector(".layout-container.p-none.py-10 .made_pure_box_mini").after(document.querySelector(".layout-container.p-none.py-10 .mb-8.flex.gap-10"));
          }

          if (!document.querySelector(".made_pure_wrap_mini")) {
            document.querySelectorAll(".layout-container.p-none.py-10 .text-xsc")[0].insertAdjacentHTML("afterend", `<div class="made_pure_wrap_mini"><span class="made_pure_txt">(99.9% purity)</span> <span data-learnMore="1">learn more</span></div>`);
          }

          if (document.querySelector(".layout-container.p-none.py-10 .made_pure_box_mini + .mb-8.flex.gap-10") && !document.querySelector(".layout-container.p-none.py-10 .made_pure_box_mini + .mb-8.flex.gap-10 +.flex.flex-col:not(.mb-8)")) {
            document.querySelector(".layout-container.p-none.py-10 .made_pure_box_mini + .mb-8.flex.gap-10").after(document.querySelector(".layout-container.p-none.py-10 .col-span-full:nth-child(2) > .flex.flex-col:not(.mb-8)"));
          }

          if (window.innerWidth > 768) {
            if (!document.querySelector(".layout-container.p-none.py-10 .bg-special + .mb-8.flex:not(.items-end)")) {
              let newBtn = document.querySelector(".bg-special.mt-7.mb-4.flex.w-full.items-center.justify-center.rounded.p-2").cloneNode(true);
              document.querySelector(".layout-container.p-none.py-10 .mb-8.flex:not(.items-end)")?.insertAdjacentElement("beforebegin", newBtn);
            }
          } else {
            if (!document.querySelector(".layout-container.p-none.py-10 .bg-special + .mt-6.flex.flex-col.gap-4")) {
              let newBtn = document.querySelector(".bg-special.mt-7.mb-4.flex.w-full.items-center.justify-center.rounded.p-2").cloneNode(true);
              document.querySelector(".layout-container.p-none.py-10 .mt-6.flex.flex-col.gap-4")?.insertAdjacentElement("beforebegin", newBtn);
            }
          }

          if (!document.querySelector(".new_svg_payments_mini.red_var")) {
            document.querySelectorAll(".layout-container.p-none.py-10 .flex.items-center.gap-1")[0].insertAdjacentHTML(
              "beforeend",
              `<svg class="new_svg_payments_mini red_var" width="44" height="16" viewBox="0 0 44 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Layer 1">
                <rect id="Rectangle 2" width="44" height="16" rx="4" fill="#FFB3C7"/>
                <g id="Group 340">
                <path id="Vector" d="M35.0004 6.76203C34.5864 6.46818 34.1032 6.2973 33.6027 6.26778C33.1022 6.23827 32.6034 6.35124 32.1601 6.59454C31.7168 6.83783 31.3458 7.20223 31.087 7.64847C30.8282 8.09471 30.6914 8.60589 30.6914 9.12694C30.6914 9.648 30.8282 10.1592 31.087 10.6054C31.3458 11.0517 31.7168 11.4161 32.1601 11.6593C32.6034 11.9026 33.1022 12.0156 33.6027 11.9861C34.1032 11.9566 34.5864 11.7857 35.0004 11.4919V11.8383H36.5602V6.42947H35.0004V6.76203ZM33.5784 10.5219C33.3189 10.5048 33.07 10.4092 32.8621 10.2469C32.6543 10.0846 32.4966 9.86269 32.4085 9.60847C32.3204 9.35425 32.3058 9.0788 32.3664 8.81603C32.4269 8.55327 32.5601 8.31465 32.7495 8.12953C32.9389 7.94442 33.1762 7.82089 33.4322 7.77416C33.6883 7.72742 33.9519 7.75952 34.1906 7.86649C34.4293 7.97346 34.6327 8.15064 34.7758 8.37623C34.9189 8.60182 34.9954 8.86598 34.996 9.13618C34.9832 9.51477 34.8271 9.87279 34.5616 10.1323C34.2961 10.3918 33.9427 10.5318 33.5784 10.5219Z" fill="black"/>
                <path id="Vector_2" d="M13.5807 4H11.9453V11.8384H13.5807V4Z" fill="black"/>
                <path id="Vector_3" d="M27.9215 6.27257C27.6143 6.25342 27.3073 6.3124 27.027 6.4444C26.7467 6.57639 26.5015 6.77742 26.3128 7.03008V6.42962H24.7441V11.8384H26.3217V8.98852C26.3102 8.83897 26.3271 8.68852 26.3716 8.54579C26.4161 8.40305 26.4872 8.27084 26.5809 8.15671C26.6746 8.04259 26.789 7.94879 26.9177 7.8807C27.0463 7.8126 27.1866 7.77155 27.3305 7.75988H27.4905C28.1793 7.75988 28.5748 8.18944 28.5748 8.97929V11.8384H30.1346V8.39268C30.1479 7.12708 29.188 6.27257 27.9215 6.27257Z" fill="black"/>
                <path id="Vector_4" d="M18.5225 6.76207C18.108 6.47148 17.6253 6.30359 17.126 6.27639C16.6267 6.24919 16.1297 6.3637 15.6883 6.60767C15.2468 6.85163 14.8776 7.21584 14.6201 7.66127C14.3626 8.1067 14.2266 8.61656 14.2266 9.13622C14.2266 9.65588 14.3626 10.1657 14.6201 10.6112C14.8776 11.0566 15.2468 11.4208 15.6883 11.6648C16.1297 11.9087 16.6267 12.0233 17.126 11.9961C17.6253 11.9689 18.108 11.801 18.5225 11.5104V11.8568H20.0823V6.42951H18.5225V6.76207ZM17.1004 10.5219C16.841 10.5048 16.592 10.4092 16.3842 10.2469C16.1763 10.0846 16.0186 9.86273 15.9306 9.60851C15.8425 9.35428 15.8278 9.07884 15.8884 8.81607C15.949 8.55331 16.0822 8.31468 16.2715 8.12957C16.4609 7.94446 16.6982 7.82093 16.9543 7.7742C17.2103 7.72746 17.4739 7.75955 17.7127 7.86653C17.9514 7.9735 18.1548 8.15068 18.2979 8.37627C18.441 8.60186 18.5175 8.86601 18.518 9.13622C18.5064 9.51522 18.3507 9.87396 18.0849 10.1337C17.8191 10.3935 17.4651 10.5331 17.1004 10.5219Z" fill="black"/>
                <path id="Vector_5" d="M22.5217 7.12231V6.42947H20.9219V11.8383H22.5217V9.30708C22.5217 8.45257 23.4104 7.99529 24.0281 7.99529V6.42947C23.7437 6.42469 23.4618 6.48417 23.2016 6.6038C22.9415 6.72343 22.7095 6.90034 22.5217 7.12231Z" fill="black"/>
                <path id="Vector_6" d="M38.2184 9.91676C38.024 9.91676 37.8339 9.97675 37.6723 10.0891C37.5107 10.2015 37.3849 10.3612 37.3107 10.548C37.2365 10.7348 37.2173 10.9403 37.2555 11.1384C37.2938 11.3365 37.3878 11.5184 37.5256 11.661C37.6633 11.8036 37.8388 11.9004 38.0296 11.9393C38.2204 11.9782 38.418 11.9573 38.5973 11.8793C38.7767 11.8013 38.9298 11.6698 39.0372 11.5013C39.1445 11.3328 39.2014 11.135 39.2005 10.9329C39.2005 10.7991 39.1751 10.6666 39.1257 10.543C39.0763 10.4194 39.0038 10.3072 38.9126 10.2128C38.8213 10.1183 38.713 10.0436 38.5939 9.99278C38.4748 9.94199 38.3472 9.91615 38.2184 9.91676Z" fill="black"/>
                <path id="Vector_7" d="M10.8216 4H9.1285C9.13008 4.70644 8.97207 5.40339 8.66719 6.03477C8.36231 6.66614 7.91908 7.2143 7.37317 7.63513L6.70215 8.15707L9.30626 11.8522H11.4438L9.04851 8.4573C9.61421 7.8741 10.0624 7.17953 10.3668 6.41421C10.6713 5.64888 10.8259 4.82815 10.8216 4Z" fill="black"/>
                <path id="Vector_8" d="M6.49736 4H4.7998V11.843H6.49736V4Z" fill="black"/>
                </g>
                </g>
                </svg>
                `
            );
          }

          if (!document.querySelector(".new_svg_payments_mini.green_var")) {
            document.querySelectorAll(".layout-container.p-none.py-10 .flex.items-center.gap-1")[1].insertAdjacentHTML(
              "beforeend",
              `<svg class="new_svg_payments_mini green_var" width="54" height="16" viewBox="0 0 54 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Group 34151">
            <rect id="Rectangle 1" width="54" height="16" rx="4" fill="#B2FCE4"/>
            <g id="Clearpay Logo Mint">
            <path id="Vector" d="M39.8533 5.86426L36.8543 11.9431H35.6117L36.7304 9.67264L34.9688 5.86535H36.245L37.377 8.41481L38.6133 5.86535L39.8533 5.86426Z" fill="black"/>
            <path id="Vector_2" d="M28.4391 8.02252C28.4391 7.32348 27.903 6.78721 27.2438 6.78721C26.5846 6.78721 26.0482 7.30531 26.0482 8.02252C26.0482 8.73064 26.5842 9.25782 27.2438 9.25782C27.9034 9.25782 28.4391 8.72228 28.4391 8.02252ZM24.958 11.9432V5.86436H26.0393V6.42534C26.3637 6.02822 26.848 5.78516 27.428 5.78516C28.6148 5.78516 29.5466 6.74361 29.5466 8.01271C29.5466 9.2818 28.5974 10.2486 27.401 10.2486C26.8461 10.2486 26.3904 10.0328 26.0737 9.6702V11.9417L24.958 11.9432Z" fill="black"/>
            <path id="Vector_3" d="M33.4428 8.02258C33.4428 7.29775 32.9068 6.78727 32.2472 6.78727C31.5876 6.78727 31.0519 7.30501 31.0519 8.02258C31.0519 8.7307 31.5879 9.25789 32.2472 9.25789C32.9064 9.25789 33.4428 8.74923 33.4428 8.02258ZM33.4517 10.1811V9.62012C33.1261 10.0085 32.6426 10.2501 32.0626 10.2501C30.8584 10.2501 29.9443 9.3004 29.9443 8.02258C29.9443 6.75385 30.8936 5.78667 32.0899 5.78667C32.3498 5.78468 32.6069 5.83942 32.8426 5.94693C33.0782 6.05444 33.2867 6.21203 33.4528 6.40832V5.86333H34.5337V10.1815L33.4517 10.1811Z" fill="black"/>
            <path id="Vector_4" d="M23.0097 6.2872C23.0097 6.2872 23.2849 5.78509 23.9593 5.78509C24.123 5.7822 24.2854 5.81547 24.4343 5.88246V6.98406C24.4343 6.98406 24.0273 6.73736 23.6541 6.78714C23.2808 6.83691 23.0441 7.17335 23.0452 7.62279V10.1813H21.9287V5.86429H23.0097V6.2872Z" fill="black"/>
            <path id="Vector_5" d="M48.2447 5.62095L46.9662 4.90047L45.6692 4.16982C44.8098 3.68551 43.7385 4.29481 43.7385 5.26779V5.43202C43.7384 5.47621 43.7502 5.51965 43.7726 5.55793C43.7951 5.59621 43.8275 5.62798 43.8665 5.65001L44.4684 5.98899C44.5064 6.01048 44.5496 6.02176 44.5935 6.02169C44.6374 6.02162 44.6805 6.0102 44.7184 5.98859C44.7564 5.96698 44.7879 5.93593 44.8098 5.89856C44.8317 5.8612 44.8432 5.81883 44.8431 5.77572V5.38551C44.843 5.34155 44.8546 5.29832 44.8769 5.26017C44.8991 5.22202 44.9312 5.1903 44.9699 5.16821C45.0086 5.14611 45.0525 5.13441 45.0973 5.13429C45.1421 5.13417 45.1861 5.14563 45.2249 5.16751L46.4087 5.83567L47.5902 6.50128C47.6292 6.52314 47.6616 6.55473 47.6842 6.59286C47.7067 6.63098 47.7186 6.67429 47.7186 6.71837C47.7186 6.76246 47.7067 6.80576 47.6842 6.84388C47.6616 6.88201 47.6292 6.9136 47.5902 6.93546L46.4098 7.6018L45.226 8.26996C45.1872 8.29173 45.1432 8.30309 45.0985 8.30291C45.0537 8.30274 45.0099 8.29102 44.9712 8.26895C44.9325 8.24687 44.9005 8.21521 44.8782 8.17713C44.8559 8.13904 44.8442 8.09588 44.8442 8.05196V7.85903C44.8442 6.88568 43.7714 6.27639 42.9136 6.7607L41.6188 7.49135L40.3399 8.21182C39.4765 8.69868 39.4765 9.922 40.3399 10.4085L41.6188 11.129L42.9136 11.8596C43.7729 12.3439 44.8442 11.7346 44.8442 10.7613V10.5971C44.8444 10.5529 44.8326 10.5094 44.8101 10.4711C44.7876 10.4329 44.7552 10.4011 44.7162 10.3791L44.1147 10.0401C44.0767 10.0186 44.0335 10.0074 43.9896 10.0074C43.9457 10.0075 43.9026 10.0189 43.8646 10.0405C43.8266 10.0621 43.7951 10.0932 43.7731 10.1305C43.7512 10.1679 43.7396 10.2102 43.7396 10.2534V10.6421C43.7399 10.6861 43.7283 10.7293 43.7061 10.7675C43.6839 10.8056 43.6518 10.8374 43.6131 10.8595C43.5745 10.8816 43.5305 10.8933 43.4858 10.8934C43.441 10.8935 43.397 10.882 43.3582 10.8601L42.1744 10.1923L40.9903 9.52743C40.9514 9.50549 40.9191 9.47388 40.8966 9.43576C40.8742 9.39764 40.8623 9.35438 40.8623 9.31034C40.8623 9.2663 40.8742 9.22303 40.8966 9.18492C40.9191 9.1468 40.9514 9.11518 40.9903 9.09325L42.1719 8.42727L43.3556 7.75948C43.3944 7.73768 43.4384 7.7263 43.4831 7.72647C43.5278 7.72663 43.5717 7.73835 43.6104 7.76044C43.649 7.78252 43.681 7.8142 43.7033 7.8523C43.7255 7.8904 43.7372 7.93357 43.737 7.97748V8.1704C43.737 9.14339 44.8098 9.75305 45.6677 9.26874L46.9647 8.53773L48.2432 7.81725C49.1081 7.33076 49.1081 6.10744 48.2447 5.62095Z" fill="black"/>
            <path id="Vector_6" d="M9.50614 8.57272C9.26901 9.56388 8.39967 10.2462 7.27508 10.2462C5.97514 10.2462 5 9.28848 5 8.02047C5 6.75246 5.99253 5.78638 7.29358 5.78638C8.39153 5.78638 9.25237 6.46798 9.498 7.44278H8.35565C8.25749 7.25021 8.10719 7.08794 7.92126 6.97379C7.73533 6.85964 7.52097 6.79802 7.30172 6.7957C6.65175 6.7957 6.10721 7.32179 6.10721 8.02047C6.10721 8.71914 6.65175 9.2456 7.30172 9.2456C7.52626 9.2469 7.74633 9.18396 7.93506 9.06447C8.12379 8.94498 8.27302 8.77412 8.36453 8.57272H9.50614Z" fill="black"/>
            <path id="Vector_7" d="M10.0215 10.177V4.08911H11.128V10.177H10.0215Z" fill="black"/>
            <path id="Vector_8" d="M12.7905 8.30518C12.8693 8.94355 13.335 9.30578 13.9232 9.30578C14.389 9.30578 14.7489 9.08997 14.959 8.74517H16.0921C15.8284 9.6593 14.9942 10.2461 13.8962 10.2461C12.57 10.2461 11.6396 9.33158 11.6396 8.02978C11.6396 6.72799 12.6233 5.78516 13.9232 5.78516C15.2321 5.78516 16.1798 6.73416 16.1798 8.02797C16.1801 8.12063 16.1713 8.21309 16.1536 8.30409L12.7905 8.30518ZM14.9949 7.6323C14.9158 7.07169 14.4504 6.73525 13.9059 6.73525C13.3613 6.73525 12.9133 7.06225 12.799 7.6323H14.9949Z" fill="black"/>
            <path id="Vector_9" d="M20.1245 10.177V9.61637C19.7997 10.0044 19.3166 10.246 18.7369 10.246C17.5335 10.246 16.6201 9.29701 16.6201 8.02028C16.6201 6.75227 17.5686 5.78619 18.7631 5.78619C19.0228 5.78409 19.2796 5.83875 19.5151 5.94621C19.7505 6.05366 19.9587 6.21123 20.1245 6.40748V5.86249H21.2051V10.177H20.1245ZM20.116 8.02028C20.116 7.29581 19.5799 6.78679 18.9215 6.78679C18.263 6.78679 17.727 7.30453 17.727 8.02028C17.727 8.72768 18.2626 9.25559 18.9215 9.25559C19.5803 9.25559 20.116 8.74512 20.116 8.02028Z" fill="black"/>
            </g>
            </g>
            </svg>
            `
            );
          }
          if (!document.querySelector(".new_return_wrapper")) {
            document.querySelector(".layout-container.p-none.py-10 .col-span-full:nth-child(2)").insertAdjacentHTML("beforeend", `<div class="new_return_wrapper"></div>`);
          }
          if (document.querySelector(".new_return_wrapper")) {
            let newBlock = document.querySelector(".mb-1.flex.items-center.justify-center")?.cloneNode(true),
              newBlockSecond = document.querySelector(".mx-auto.px-5")?.cloneNode(true),
              newTimeBlock = document.querySelector(".mb-1.flex.items-center.justify-center + .px-4")?.cloneNode(true);
            if (!document.querySelector(".new_return_wrapper .mb-1.flex.items-center.justify-center")) {
              document.querySelector(".new_return_wrapper").appendChild(newBlock);
            }
            let findBtnLearnMore = setInterval(() => {
              if (document.querySelector(".new_return_wrapper .mb-1.flex.items-center.justify-center")) {
                clearInterval(findBtnLearnMore);
                document.querySelector(".new_return_wrapper .mb-1.flex.items-center.justify-center button").addEventListener("click", (e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  document.querySelector(".mb-1.flex.items-center.justify-center button")?.click();
                });
              }
            }, 100);
            if (!document.querySelector(".new_return_wrapper .mx-auto.px-5")) {
              document.querySelector(".new_return_wrapper").appendChild(newBlockSecond);
            }
            if (!document.querySelector(".new_return_wrapper .px-4") && document.querySelector(".new_return_wrapper .mb-1.flex.items-center.justify-center") && document.querySelector(".mb-1.flex.items-center.justify-center + .px-4")) {
              document.querySelector(".new_return_wrapper .mb-1.flex.items-center.justify-center")?.insertAdjacentElement("afterend", newTimeBlock);
            }

            if (document.querySelector(".new_return_wrapper .px-4 p:nth-child(2)")?.textContent !== document.querySelector(".mb-1.flex.items-center.justify-center + .px-4 p:nth-child(2)")?.textContent) {
              document.querySelector(".new_return_wrapper .px-4 p:nth-child(2)").textContent = document.querySelector(".mb-1.flex.items-center.justify-center + .px-4 p:nth-child(2)").textContent;
            }
          }
        }
      }, 100);
    }

    if (window.innerWidth <= 768) {
      window.addEventListener("scroll", () => {
        if (typeof $ === "function" && document.querySelector(".new_btn_add_to_basket")) {
          clearInterval(visabInt);
          visabBtnSticky();
        }
      });

      let visabInt = setInterval(() => {
        if (typeof $ === "function" && document.querySelector(".new_btn_add_to_basket")) {
          clearInterval(visabInt);
          visabBtnSticky();
        }
      }, 100);

      function visabBtnSticky() {
        let top = $(".new_btn_add_to_basket")?.offset().top,
          sctop = $(this).scrollTop(),
          winh = $(this).height(),
          y = top - sctop - winh;
        if (y > 0 || -y > winh) {
          console.log(` Не Видим`);
          if (!document.querySelector("#add-cart-button-fixed").classList.contains("fixed")) {
            document.querySelector("#add-cart-button-fixed").classList.add("fixed");
            document.querySelector("#add-cart-button-fixed").style.display = "block";
          }
        } else {
          console.log("Видим");
          if (document.querySelector("#add-cart-button-fixed").classList.contains("fixed")) {
            document.querySelector("#add-cart-button-fixed").classList.remove("fixed");
            document.querySelector("#add-cart-button-fixed").style.display = "none";
          }
        }
      }
    }

    // Observe
    let observer = new MutationObserver(() => {
      if (document) {
        observer.disconnect();
        console.log(`observer`);

        renderHtml();
        changePopup();
        changeMiniCard();

        if (window.innerWidth > 768) {
          if (!document.querySelector(".layout-container.bg-platinum-1 .mt-2.mb-4.flex.items-end.justify-between.gap-4 + h1")) {
            changePlaceExcellent();
          }
        }

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
}, 700);
