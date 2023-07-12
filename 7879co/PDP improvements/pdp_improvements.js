let startPdp = setInterval(() => {
  if (document.querySelector("#Trustmessaging")) {
    clearInterval(startPdp);

    let stylePdp = /*html */ `
    <style>
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
    </style>
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
    if (!document.querySelector(".title_review")) {
      document.querySelector("#TrustpilotReviewSection").insertAdjacentHTML("beforebegin", `<h2 class="title_review">More than 6 895 customers already trusted us</h2>`);
    }
    if (document.querySelector(".title_review")) {
      document.querySelector(".title_review").insertAdjacentHTML("beforebegin", advantagesBox);
    }
    if (!document.querySelector(".comparison_table_bgr")) {
      document.querySelector("#TrustpilotReviewSection").insertAdjacentHTML("afterend", comparisonTableBox);
    }
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
  }
}, 100);
