let startFunk = setInterval(() => {
  if (document.querySelector("#block-scheduleconsulationheaderblock")) {
    clearInterval(startFunk);

    let scriptPopper = document.createElement("script");
    scriptPopper.src = "https://unpkg.com/popper.js@1";
    scriptPopper.async = false;
    document.body.appendChild(scriptPopper);

    let scriptTippy = document.createElement("script");
    scriptTippy.src = "https://unpkg.com/tippy.js@5";
    scriptTippy.async = false;
    document.body.appendChild(scriptTippy);

    let newStyle = /*html */ `
    <style>
        .accent_var{
            color: #EBBD45;
        }
        .navbar-default{
            border-bottom: 1px solid #294c6d;
            background: #2f3d4f;
        }
        .path-schedule-consultation .block-schedule-consulation-header #scholarshipListContent{
            background: #2B3E51;
        }
        .row.academy-waiting > .col-lg-5.academy-waiting-left{
            padding: 40px 16px;
        }
        .row.academy-waiting > .col-lg-5.academy-waiting-left .academy-waiting-left-inside,
        #block-whattoexpectonthecallscheduleconsultation{
            display: none;
        }
        .path-schedule-consultation .block-schedule-consulation-header #scholarshipListContent .academy-waiting-left{
            display: block;
        }
        .greetings_box .name_txt{
            font-family: 'Lato', sans-serif;
            font-weight: 400 !important;
            font-size: 17px !important;
            line-height: 25px !important;
            color: #FFFFFF;
            margin: 0;
            text-align: left !important;
        }
        .greetings_box .name_txt span:last-child{
            display: block;
            text-align: left !important;
        }
        .greetings_box .win_scholarships_txt{
            font-family: 'Lato', sans-serif;
            font-weight: 600 !important;
            font-size: 18px !important;
            line-height: 25px !important;
            color: #FFFFFF;
            text-align: left !important;
            margin: 0;
        }
        .greetings_box .tooltip_wrapper{
            font-weight: 700 !important;
            font-size: 32px !important;
            line-height: 48px !important;
            letter-spacing: -0.96px !important;
            text-align: left !important;
            color: #FFFFFF;
            margin: 12px 0 16px;
        }
        .greetings_box .tooltip_wrapper .funding_price{
            text-decoration: underline;
            margin-right: 6px;
        }
        .txt_relative{
            position: relative;
        }
        .greetings_box .tooltip_wrapper svg{
            position: absolute;
            top: 14px;
            right: -28px;
        }
        .tooltip_txt{
            display: none;
        }
        .reviews_btn_box{
            background: rgba(233, 243, 250, 0.1);
            border-radius: 6px;
            padding: 28px;
            margin: 16px 0 24px;
            z-index: 1;
            position: relative;
        }
        .reviews_btn_box h2{
            font-weight: 700;
            font-size: 18px !important;
            line-height: 24px;
            color: #FFFFFF;
            margin: 0 auto;
            text-transform: unset;
            max-width: 270px;
            position: relative;
        }
        .reviews_btn_box h2::after{
            position: absolute;
            content: '';
            background: url(https://conversionratestore.github.io/projects/grantme/img/arrow.png) no-repeat center center;
            width: 37px;
            height: 90px;
            top: 26px;
            right: -22px;
            z-index: 10;
        }
        .book_free_call_btn{
            display: flex;
            align-items: center;
            justify-content: center;
            background: #EBBD45;
            font-family: 'Lato', sans-serif;
            border-radius: 6px;
            font-weight: 700;
            font-size: 20px;
            line-height: 20px;
            color: #2B3E51;
            cursor: pointer;
            max-width: 224px;
            width: 100%;
            height: 62px;
            margin: 20px auto 28px;
        }
        .reviews_btn_wrapper{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .reviews_btn_wrapper p{
            font-family: 'Lato', sans-serif;
            font-weight: 400 !important;
            font-size: 14px !important;
            line-height: 21px !important;
            color: #FFFFFF;
            text-align: left !important;
            margin: 0 !important;
        }
        .reviews_btn_wrapper p:last-child{
            font-weight: 700 !important;
        }
        .as_seen_on_box{
            padding: 40px 16px;
        }
        .as_seen_on_box h2{
            font-weight: 700 !important;
            font-size: 25px !important;
            line-height: 37px !important;
            letter-spacing: -0.48px !important;
            color: #2B3E51 !important;
            margin: 0 0 16px;
            text-align: center;
        }
        .as_seen_on_box> div{
            border: 1px solid #F2F2F2;
            border-radius: 6px;
        }
        .as_seen_on_box .img_wrapper{
            background: #F2F2F2;
            padding: 28px 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .as_seen_on_box .img_wrapper img:nth-child(1){
            max-width: 68px;
        }
        .as_seen_on_box .img_wrapper img:nth-child(2){
            max-width: 53px;
        }
        .as_seen_on_box .img_wrapper img:nth-child(3){
            max-width: 76px;
        }
        .as_seen_on_box .count_txt_wrapper{
            display: flex;
            justify-content: space-between;
            padding: 20px 35px;
        }
        .as_seen_on_box .count_txt_wrapper > div{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .as_seen_on_box .count_txt_wrapper > div + div{
            margin-left: 20px;
        }
        .as_seen_on_box .count_txt_wrapper > div span{
            font-weight: 600;
            font-size: 24px;
            line-height: 36px;
            color: #2B3E51;
            margin: 0;
        }
        .as_seen_on_box .count_txt_wrapper > div p{
            font-family: 'Lato', sans-serif;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
            color: #2B4F6A;
            margin: 0;
            text-align: center;
        }
        .what_users_say_box{
            padding: 0 16px 40px;
        }
        .what_users_say_box h2{
            font-weight: 700;
            font-size: 25px;
            line-height: 37px;
            letter-spacing: -0.48px;
            color: #2B3E51;
            text-align: center;
            margin: 0 0 20px;
        }
        .persuasive_comparison_table_box{
            padding: 40px 16px;
        }
        .persuasive_comparison_table_box h2{
            font-weight: 700;
            font-size: 25px;
            line-height: 37px;
            text-align: center;
            letter-spacing: -0.48px;
            color: #2B3E51;
            margin: 0 0 20px;
        }
        .persuasive_comparison_table_box table{
            background: #FFFFFF;
            border: 1px solid #F2F2F2;
            border-radius: 6px;
        }
        .persuasive_comparison_table_box table thead{
            background: #E9F3FA;
        }
        .persuasive_comparison_table_box table thead th span{
            font-family: 'Lato', sans-serif;
            font-weight: 700;
            font-size: 14px;
            line-height: 18px;
            text-align: center;
            color: #2B3E51;
        }
        .persuasive_comparison_table_box table tbody tr:not(:last-child){
            border-bottom: 1px solid #F2F2F2;
        }
        .persuasive_comparison_table_box table tbody td span{
            font-family: 'Lato', sans-serif;
            font-weight: 700;
            font-size: 14px;
            line-height: 21px;
            color: #2B4F6A;
        }
        .persuasive_comparison_table_box table tbody td span.name_tr{
            font-weight: 400;
        }
        .persuasive_comparison_table_box .odds_txt_wrapper{
            margin: 16px 0 0;
            padding: 16px;
            background: #E9F3FA;
            border-radius: 6px;
            display: flex;
            align-items: flex-end;
            justify-content: flex-start;
        }
        .persuasive_comparison_table_box .odds_txt_wrapper p{
            font-family: 'Lato', sans-serif;
            font-weight: 700;
            font-size: 16px;
            line-height: 20px;
            color: #2B3E51;
            margin: 0 0 -6px 12px;
        }
        .persuasive_comparison_table_box .odds_txt_wrapper svg{
            width: 100%;
            height: 24px;
            max-width: 24px;
        }
        .consultation_descr_box{
            background: rgba(233, 243, 250, 0.1);
            border-radius: 6px;
            padding: 24px 16px 24px 24px;
            text-align: left !important;
        }
        .consultation_descr_box h2{
            font-weight: 700;
            font-size: 25px;
            line-height: 37px;
            letter-spacing: -0.48px;
            color: #EBBD45;
            margin: 0 0 20px;
            text-align: left !important;
        }
        body .consultation_descr_box > div + div{
            margin-top: 16px;
        }
        body .consultation_descr_box > div h3{
            font-weight: 700 !important;
            font-size: 18px !important;
            line-height: 24px !important;
            color: #FFFFFF !important;
            margin: 0 0 12px !important;
            padding: 0 !important;
            text-align: left !important;
        }
        body .consultation_descr_box > div ul{
            margin: 0 !important;
            text-align: left !important;
        }
        body .consultation_descr_box > div ul li{
            font-family: 'Lato', sans-serif;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #FFFFFF;
            text-align: left !important;
        }
        body .consultation_descr_box > div ul li span{
            font-weight: 700;
        }
        body .consultation_descr_box > div ul li + li{
            margin-top: 8px;
        }
        body .consultation_descr_box > div.no_commitments_wrapper{
            margin-top: 20px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
        }
        body .consultation_descr_box > div.no_commitments_wrapper p{
            font-family: 'Lato', sans-serif;
            font-weight: 400;
            font-size: 16px !important;
            line-height: 24px !important;
            margin-left: 8px;
            text-align: left !important;
        }
        .tooltip_wrapper .tippy-tooltip{
            font-family: 'Lato', sans-serif;
            color: #2B4F6A;
            border-radius: 8px;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            background-color: #FFFFFF;
            text-align: left !important;
            max-width: 300px !important;
        }
        .tooltip_wrapper .tippy-content {
            padding: 16px;
            text-align: left !important;
        }
        .tooltip_wrapper .tippy-tooltip[data-placement^=bottom]>.tippy-arrow{
            border-bottom-color: #FFFFFF;
        }
        .tooltip_wrapper .tippy-tooltip[data-placement^=top]>.tippy-arrow{
            border-top-color: #FFFFFF;
        }
        .path-start-free-trial.path-schedule-consultation #scholarshipListContent .col-lg-7.center{
            background: #E9F3FA;
            padding: 40px 16px;
        }
        .competition-section {
    padding: 40px 0 0;
    background-color: #2b3e51;
    color: #fff;
    position: relative;
}
.competition_wrapper{
    display: flex;
    flex-wrap: wrap;
}
.competition_items {
    width: 100%;
    padding: 0;
    float: left;
        display: flex;
        flex-wrap: wrap;
}
.competition_item{
    padding: 0 16px;
}
.competition_item#competition_step3{
    width: 100%;
    padding: 32px 16px;
    border-top: 1px solid #fff;
}
.competition_item img {
    display: block;
    margin: 0 auto;
    border-style: none;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
}
.competition_item h2{
    margin: 0;
    font-size: 26px;
    line-height: 39px;
    color: #fff;
}
.competition_item p{
    margin-bottom: 27px;
    line-height: 24px;
}
.competition_imgs {
    display: none;
}
.path-start-free-trial .faqstartfreetrial{
    padding-bottom: 20px;
}
.footer-start-free-trial h2,
.footer-start-free-trial{
    margin: 0 !important;
}
    </style>
    `;

    let competitionNextSteps = /*html */ `
        <section class="competition-section">
            <div class="container">
                <div class="competition_wrapper">
                    <div class="competition_items">
                        <div class="competition_item" id="competition_step2">
                            <h2>Stand Out &amp; Get In</h2>
                            <p>Don’t spend hours starting from scratch. Learn firsthand from over 43,000 edited applications and be guided by our experts, workshops, and support resources to know exactly what you need to do, and how to do it, to get in.</p>
                            <p>Apply to top schools &amp; major awards with more conviction than ever.</p>
                            <img src="https://grantme.ca/wp-content/uploads/2022/08/Student-Advantage_L-1-1.png" alt="step 2" />
                        </div>
                        <div class="competition_item" id="competition_step3">
                            <h2>Discover Your Dreams, Then Turn Them Into Reality</h2>
                            <p>Whether you want to be an astronaut, doctor, entrepreneur or TikTok Star – our Student Success System helps you decide, then helps you get there. You’ll know exactly what you need to do 1 week, 1 month, or 5 years down the road to succeed with your goals. We ensure you find the perfect university program, and get you accepted.</p>
                            <img src="https://grantme.ca/wp-content/uploads/2022/08/Student-Journey-3-1.png" alt="step 3" />
                        </div>
                    </div>
                    <div class="competition_imgs">
                        <ul class="competition_media_list">
                            <li class="competition_img">
                                <figure class="competition_img_figure"><img src="https://grantme.ca/wp-content/uploads/2022/08/Student-Advantage_L-1-1.png" alt="step2" class="step2 img_hidden" /></figure>
                            </li>
                            <li class="competition_img">
                                <figure class="competition_img_figure"><img src="https://grantme.ca/wp-content/uploads/2022/08/Student-Journey-3-1.png" alt="step3" class="step3" /></figure>
                            </li>
                        </ul>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
        </section>
      `;

    let slider = `
    <div class="report_card_frame">
      <div class="trustpilot-widget" data-locale="en-US" data-template-id="54ad5defc6454f065c28af8b" data-businessunit-id="5efe956b4acfb90001faa80d" data-style-height="240px" data-style-width="100%" data-theme="light" data-stars="4,5" data-review-languages="en" data-font-family="Lato" data-text-color="#2B3F51" style="position: relative"><iframe title="Customer reviews powered by Trustpilot" loading="auto" src="https://widget.trustpilot.com/trustboxes/54ad5defc6454f065c28af8b/index.html?templateId=54ad5defc6454f065c28af8b&amp;businessunitId=5efe956b4acfb90001faa80d#locale=en-US&amp;styleHeight=240px&amp;styleWidth=100%25&amp;theme=light&amp;stars=4%2C5&amp;reviewLanguages=en&amp;fontFamily=Lato&amp;textColor=%232B3F51" style="position: relative; height: 240px; width: 100%; border-style: none; display: block; overflow: hidden"></iframe></div>
    </div>
      `;

    let first_section = /*html */ `
    <section class="greetings_box">
      <p class="name_txt">Awesome, <span class="person_name_var">Name</span>! <span>Based on the information you have provided,</span></p>
      <p class="tooltip_wrapper">
        <span class="your_person_var">Your Child Is</span> Eligible For <span class="accent_var funding_price">$96,250</span> <span class="txt_relative">In Funding <svg data-title='Atlas cedarwood oil has natural sedative properties that can help reduce stress and anxiety. Its calming effects on the nervous system can promote relaxation and improve sleep quality, which can be beneficial for children with anxiety or sleep disturbances.' data-tolltip class="tooltip_btn" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 15H11V9H9V15ZM10 7C10.2833 7 10.521 6.904 10.713 6.712C10.905 6.52 11.0007 6.28267 11 6C11 5.71667 10.904 5.479 10.712 5.287C10.52 5.095 10.2827 4.99933 10 5C9.71667 5 9.479 5.096 9.287 5.288C9.095 5.48 8.99933 5.71733 9 6C9 6.28333 9.096 6.521 9.288 6.713C9.48 6.905 9.71733 7.00067 10 7ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6867 3.825 17.9743 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.263333 12.6833 0.000666667 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31333 4.88333 2.02567 3.825 2.925 2.925C3.825 2.025 4.88333 1.31267 6.1 0.788C7.31667 0.263333 8.61667 0.000666667 10 0C11.3833 0 12.6833 0.262667 13.9 0.788C15.1167 1.31333 16.175 2.02567 17.075 2.925C17.975 3.825 18.6877 4.88333 19.213 6.1C19.7383 7.31667 20.0007 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6867 15.1167 17.9743 16.175 17.075 17.075C16.175 17.975 15.1167 18.6877 13.9 19.213C12.6833 19.7383 11.3833 20.0007 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z"
            fill="white"
          />
        </svg></span>
      </p>
      <p class="win_scholarships_txt"><span class="accent_var">Grade 9 - 10</span> students can win 5x as many scholarships.</p>
    </section>
    <section class="reviews_btn_box">
      <h2>Book a <span class="accent_var">Free</span> call to find out how to get this scolarship</h2>
      <a class="book_free_call_btn" href="#">Book a Free Call</a>
      <div class="reviews_btn_wrapper">
        <svg width="109" height="20" viewBox="0 0 109 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 19.1283H19.9722V0.0078125H0V19.1283Z" fill="#2DAF6B" />
          <path d="M17.0255 8.14277L5.69745 16.021L7.35043 11.1519L3.02344 8.14277H8.37182L10.0244 3.27344L11.6771 8.14277H17.0255ZM10.0249 13.0121L13.1186 12.3891L14.3512 16.021L10.0249 13.0121Z" fill="white" />
          <path d="M22.2578 19.1283H42.23V0.0078125H22.2578V19.1283Z" fill="#2DAF6B" />
          <path d="M22.2578 19.1283H32.2439V0.0078125H22.2578V19.1283Z" fill="#2DAF6B" />
          <path d="M32.4833 12.9379L35.1361 12.389L36.3631 16.1034L32.2028 13.1308L27.8803 16.1034L29.558 11.2167L25.1659 8.19658H30.5946L32.2716 3.30957L33.9493 8.19658H39.3777L32.4833 12.9379Z" fill="white" />
          <path d="M44.5139 19.1283H64.4861V0.0078125H44.5139V19.1283Z" fill="#2DAF6B" />
          <path d="M44.5139 19.1283H54.5V0.0078125H44.5139V19.1283Z" fill="#2DAF6B" />
          <path d="M61.5394 8.14277L50.2114 16.021L51.8643 11.1519L47.5374 8.14277H52.8857L54.5384 3.27344L56.191 8.14277L61.5394 8.14277ZM54.5388 13.0121L57.6325 12.3891L58.8651 16.021L54.5388 13.0121Z" fill="white" />
          <path d="M66.7715 19.1283H86.7437V0.0078125H66.7715V19.1283Z" fill="#2DAF6B" />
          <path d="M66.7715 19.1283H76.7576V0.0078125H66.7715V19.1283Z" fill="#2DAF6B" />
          <path d="M83.7969 8.14277L72.4693 16.021L74.1219 11.1519L69.7949 8.14277H75.1433L76.7959 3.27344L78.4486 8.14277L83.7969 8.14277ZM76.7963 13.0121L79.89 12.3891L81.1226 16.021L76.7963 13.0121Z" fill="white" />
          <path d="M89.0273 19.1283H109V0.0078125H89.0273V19.1283Z" fill="#2DAF6B" />
          <path d="M89.0273 19.1283H99.0134V0.0078125H89.0273V19.1283Z" fill="#2DAF6B" />
          <path d="M106.053 8.14277L94.7251 16.021L96.3778 11.1519L92.0508 8.14277H97.3992L99.0518 3.27344L100.704 8.14277H106.053ZM99.0522 13.0121L102.146 12.3891L103.379 16.021L99.0522 13.0121Z" fill="white" />
        </svg>

        <p>TrustScore <span class="accent_var">4.8</span></p>
        <p>(879 reviews)</p>
      </div>
    </section>
    <section class="consultation_descr_box">
      <h2>Book a Free Grade 12 Scolarship Consultation</h2>
      <div>
        <h3>What you’ll learn on the call:</h3>
        <ul>
          <li>How to win <span>at least $3,600</span> in grants per year - guaranteed.</li>
          <li>Which scholarships and <span>funding opportunities</span> your child is eligible for based on their profile.</li>
          <li>How to <span>double your odds</span> of winning funding by creating a plan with our expert.</li>
        </ul>
      </div>
      <div>
        <h3>After call you’ll get:</h3>
        <ul>
          <li>List with <span>personalized scholarship</span>, grant, and bursary matches.</li>
          <li>Examples of <span>real scholarship essays</span> from past students who won major awards.</li>
          <li><span>Action plan</span> to get your child started with scholarship preparation!</li>
        </ul>
      </div>
      <div class="no_commitments_wrapper">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_235_4779)">
            <path d="M20.2031 1.40625V7.5H22.3125C22.7008 7.5 23.0156 7.18519 23.0156 6.79688V1.40625C23.0156 0.629578 22.386 0 21.6094 0C20.8327 0 20.2031 0.629578 20.2031 1.40625Z" fill="#EBBD45" />
            <path d="M13.1719 7.5C14.078 7.5 14.8125 6.76547 14.8125 5.85938C14.8125 4.95328 14.078 4.21875 13.1719 4.21875C12.2658 4.21875 11.5312 4.95328 11.5312 5.85938C11.5312 6.76547 12.2658 7.5 13.1719 7.5Z" fill="#EBBD45" />
            <path
              d="M3.09375 0C1.92877 0 0.984375 0.944391 0.984375 2.10938V23.2969C0.984375 23.6852 1.29919 24 1.6875 24H18.0938C18.4821 24 18.7969 23.6852 18.7969 23.2969V1.40625C18.7969 0.894141 18.9351 0.414047 19.1752 0H3.09375ZM13.1719 2.8125C14.8519 2.8125 16.2188 4.17933 16.2188 5.85938C16.2188 7.53942 14.8519 8.90625 13.1719 8.90625C11.4918 8.90625 10.125 7.53942 10.125 5.85938C10.125 4.17933 11.4918 2.8125 13.1719 2.8125ZM10.7826 12.6562C11.1709 12.6562 11.4857 12.9711 11.4857 13.3594C11.4857 13.7477 11.1709 14.0625 10.7826 14.0625H9.65625V15H10.9283C11.3166 15 11.6314 15.3148 11.6314 15.7031C11.6314 16.0914 11.3166 16.4062 10.9283 16.4062H8.95312C8.56481 16.4062 8.25 16.0914 8.25 15.7031V11.0156C8.25 10.6273 8.56481 10.3125 8.95312 10.3125H10.9283C11.3166 10.3125 11.6314 10.6273 11.6314 11.0156C11.6314 11.4039 11.3166 11.7188 10.9283 11.7188H9.65625V12.6562H10.7826ZM4.5 3.52439C4.5 2.83462 5.38973 2.55727 5.7817 3.12483L7.76489 5.99662L7.74094 3.52242C7.73719 3.13411 8.04895 2.8163 8.43722 2.8125H8.44416C8.82933 2.8125 9.14339 3.12281 9.14714 3.50883L9.19097 8.04516C9.19097 8.41331 8.97914 8.71739 8.6513 8.81981C8.32908 8.9205 7.99031 8.79698 7.78833 8.50533L5.90625 5.77992V8.20312C5.90625 8.59144 5.59144 8.90625 5.20312 8.90625C4.81481 8.90625 4.5 8.59144 4.5 8.20312V3.52439ZM3.5625 11.0156C3.5625 10.6273 3.87731 10.3125 4.26562 10.3125H6.16547C6.55378 10.3125 6.86859 10.6273 6.86859 11.0156C6.86859 11.4039 6.55378 11.7188 6.16547 11.7188H4.96875V12.6119H6.01458C6.40289 12.6119 6.7177 12.9267 6.7177 13.315C6.7177 13.7033 6.40289 14.0181 6.01458 14.0181H4.96875V15.7031C4.96875 16.0914 4.65394 16.4062 4.26562 16.4062C3.87731 16.4062 3.5625 16.0914 3.5625 15.7031V11.0156ZM15.5156 19.6875H4.26562C3.87731 19.6875 3.5625 19.3727 3.5625 18.9844C3.5625 18.5961 3.87731 18.2812 4.26562 18.2812H15.5156C15.9039 18.2812 16.2188 18.5961 16.2188 18.9844C16.2188 19.3727 15.9039 19.6875 15.5156 19.6875ZM15.4701 12.6562C15.8584 12.6562 16.1732 12.9711 16.1732 13.3594C16.1732 13.7477 15.8584 14.0625 15.4701 14.0625H14.3438V15H15.6157C16.0041 15 16.3189 15.3148 16.3189 15.7031C16.3189 16.0914 16.0041 16.4062 15.6157 16.4062H13.6406C13.2523 16.4062 12.9375 16.0914 12.9375 15.7031V11.0156C12.9375 10.6273 13.2523 10.3125 13.6406 10.3125H15.6157C16.0041 10.3125 16.3189 10.6273 16.3189 11.0156C16.3189 11.4039 16.0041 11.7188 15.6157 11.7188H14.3438V12.6562H15.4701Z"
              fill="#EBBD45"
            />
          </g>
          <defs>
            <clipPath id="clip0_235_4779">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p class="accent_var">No prior commitments, no hidden fees</p>
      </div>
    </section>
    `;

    let third_section = /*html */ `
        <section class="as_seen_on_box">
      <h2>As Seen On</h2>
      <div>
        <div class="img_wrapper">
          <img src="https://conversionratestore.github.io/projects/grantme/img/forbes.png" alt="Forbes" />
          <img src="https://conversionratestore.github.io/projects/grantme/img/cbc.png" alt="CBC" />
          <img src="https://conversionratestore.github.io/projects/grantme/img/macleans.png" alt='Macleans' />
        </div>
        <div class="count_txt_wrapper">
          <div>
            <span>20,000+</span>
            <p>Students Supported All Time</p>
          </div>
          <div>
            <span>43,000</span>
            <p>Applications Edited Last Year</p>
          </div>
        </div>
      </div>
    </section>
    <section class="what_users_say_box">
      <h2>What Our Users Say</h2>
      <div class="users_say_slider"></div>
    </section>
    <section class="competition-section first_step">
      <div class="container">
        <div class="competition_wrapper">
          <div class="competition_items">
            <div class="competition_item" id="competition_step1">
              <h2>Leave Your Competition In The Dust</h2>
              <p>The average student spends 2-4 hours per written application. GrantMe students apply up to 4x faster using our 24/7 writing support.</p>
              <p>Buh-bye, “competition”.</p>
              <img src="https://grantme.ca/wp-content/uploads/2022/08/Graph-3-1.png" alt="step 1" />
            </div>
          </div>
          <div class="competition_imgs">
            <ul class="competition_media_list">
              <li class="competition_img">
                <figure class="competiton_img_figure"><img src="https://grantme.ca/wp-content/uploads/2022/08/Graph-3-1.png" alt="step1" class="step1 img_hidden" /></figure>
              </li>
            </ul>
          </div>
          <div class="clear"></div>
        </div>
      </div>
    </section>
    <section class="persuasive_comparison_table_box">
      <h2>Our 2022 University Admission Odds</h2>
      <table>
        <thead>
          <th><span class="name_tr">University</span></th>
          <th><span>National Acceptance Rate</span></th>
          <th><span>GrantMe Acceptance Ratee</span></th>
        </thead>
        <tbody>
          <tr>
            <td><span class="name_tr">University of British Columbia (UBC)</span></td>
            <td><span>3.7%</span></td>
            <td><span>7.4%</span></td>
          </tr>
          <tr>
            <td><span class="name_tr">University of Toronto</span></td>
            <td><span>3.7%</span></td>
            <td><span>7.4%</span></td>
          </tr>
          <tr>
            <td><span class="name_tr">University of Waterloo</span></td>
            <td><span>3.7%</span></td>
            <td><span>7.4%</span></td>
          </tr>
          <tr>
            <td><span class="name_tr">McMaster University</span></td>
            <td><span>3.7%</span></td>
            <td><span>7.4%</span></td>
          </tr>
          <tr>
            <td><span class="name_tr">University of Alberta</span></td>
            <td><span>3.7%</span></td>
            <td><span>7.4%</span></td>
          </tr>
          <tr>
            <td><span class="name_tr">Queen's University</span></td>
            <td><span>3.7%</span></td>
            <td><span>7.4%</span></td>
          </tr>
          <tr>
            <td><span class="name_tr">University of Calgary</span></td>
            <td><span>3.7%</span></td>
            <td><span>7.4%</span></td>
          </tr>
        </tbody>
      </table>
      <div class="odds_txt_wrapper">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_235_4862)">
            <path d="M23.899 5.97341L22.399 3.37541C22.299 3.20341 22.136 3.07741 21.944 3.02541C21.75 2.97441 21.548 3.00041 21.375 3.10141L18.777 4.60141C18.514 4.75241 18.369 5.04841 18.409 5.34941C18.448 5.64941 18.665 5.89741 18.958 5.97541L19.888 6.22441C15.426 17.8344 1.617 17.9994 1 18.0004C0.448 18.0004 0 18.4484 0 19.0004C0.001 19.5524 0.447 20.0004 0.999 20.0004C1.18 20.0004 16.931 19.8384 21.825 6.74341L23.055 7.07341C23.119 7.09041 23.185 7.09841 23.249 7.09841C23.478 7.09841 23.7 6.99341 23.844 6.80541C24.029 6.56441 24.051 6.23641 23.899 5.97341Z" fill="#2B3E51" />
            <path d="M22 24C21.447 24 21 23.552 21 23V11C21 10.448 21.447 10 22 10C22.553 10 23 10.448 23 11V23C23 23.552 22.553 24 22 24Z" fill="#2B3E51" />
            <path d="M16 24C15.447 24 15 23.552 15 23V18C15 17.448 15.447 17 16 17C16.553 17 17 17.448 17 18V23C17 23.552 16.553 24 16 24Z" fill="#2B3E51" />
            <path d="M10 24C9.447 24 9 23.552 9 23V21C9 20.448 9.447 20 10 20C10.553 20 11 20.448 11 21V23C11 23.552 10.553 24 10 24Z" fill="#2B3E51" />
            <path d="M4 24C3.447 24 3 23.552 3 23V22C3 21.448 3.447 21 4 21C4.553 21 5 21.448 5 22V23C5 23.552 4.553 24 4 24Z" fill="#2B3E51" />
            <path d="M11.491 1.82552L6.241 0.0395234C6.085 -0.0144766 5.915 -0.0144766 5.759 0.0395234L0.509 1.82552C0.204 1.92852 0 2.21452 0 2.53552V6.55352C0 11.4575 5.474 13.8415 5.707 13.9405C5.895 14.0195 6.105 14.0195 6.293 13.9405C6.526 13.8415 12 11.4575 12 6.55352V2.53552C12 2.21452 11.796 1.92852 11.491 1.82552ZM9.286 5.61752L6.536 9.11752C6.186 9.56452 5.53 9.62952 5.1 9.25952L3.35 7.75952C2.93 7.39952 2.881 6.76852 3.241 6.34852C3.601 5.92952 4.232 5.88152 4.65 6.24052L5.608 7.06152L7.713 4.38252C8.054 3.94852 8.682 3.87152 9.117 4.21452C9.552 4.55452 9.628 5.18352 9.286 5.61752Z" fill="#2B3E51" />
          </g>
          <defs>
            <clipPath id="clip0_235_4862">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p>Increase Your University Admission Odds by Up to 2x</p>
      </div>
    </section>
    `;

    document.head.insertAdjacentHTML("beforeend", newStyle);

    if (!document.querySelector(".greetings_box")) {
      document.querySelector(".academy-waiting-left-inside").insertAdjacentHTML("beforebegin", first_section);
    }
    if (!document.querySelector(".as_seen_on_box")) {
      document.querySelector("#block-scheduleconsulationheaderblock").insertAdjacentHTML("afterend", third_section);
    }

    document.querySelector("#block-faqstartfreetrialacademy-2").insertAdjacentHTML("afterend", competitionNextSteps);
    document.querySelector("#block-whattoexpectonthecallscheduleconsultation").insertAdjacentHTML("afterend", slider);

    if (document.querySelector(".greetings_box")) {
      document.querySelector(".funding_price").textContent = document.querySelector(".marketing b.clr-yellow").textContent;
      if (document.querySelector(".academy-waiting-left-inside h2.marketing ").textContent.includes("You Are")) {
        document.querySelector(".your_person_var").textContent = "You Are";
      }
      if (document.querySelector(".academy-waiting-left-inside h2.marketing ").textContent.includes("Your Child")) {
        document.querySelector(".your_person_var").textContent = "Your Child Is";
      }
      // tooltip
      let tippyRun = setInterval(() => {
        if (typeof tippy === "function") {
          clearInterval(tippyRun);
          console.log(`tippyRun`);

          document.querySelectorAll("[data-title]").forEach((el) => {
            tippy(el, {
              content: el.getAttribute("data-title"),
              trigger: "click",
              placement: "bottom",
              appendTo: function () {
                return document.querySelector(".tooltip_wrapper");
              },
              onTrigger(e) {
                console.log(`clicked`);
              },
            });
          });
        }
      }, 700);
    }
  }
}, 500);
