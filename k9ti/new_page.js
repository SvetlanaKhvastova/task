window.onload = function () {}

let newPageStyle = /*html*/ `
<style>
    .container > .col-md-6:first-child, .container > .row.row1030{
        display: none;
    }
    
    .spacer30{
        height: 0 !important;
    }

    .footer-container{
        border: none;
    }

    .site-inner{
        padding: 0 !important;
    }

    .first_block .submit_btn{
        padding: 0;
        margin: 0;
        height: unset;
    }

    .first_block .submit_btn input#submit, input#submit_disabled{
        background: #1D3871;
        border-radius: 10px;
        max-width: 262px;
        box-shadow: unset;
    }

    .first_block input#submit:hover{
        margin: 0 auto !important;
    }

    body .first_block input, select{
        border: 1px solid #DFE8F0 !important;
        border-radius: 5px;
        padding: 10px 0 10px 18px !important;
        font-size: 14px !important;
        line-height: 19px;
    }

    body .first_block input:focus{
        font-weight: 700;
        font-size: 14px !important;
        line-height: 19px;
        color: #183B56 !important;
    }

    body .first_block .submit_btn input#submit, input#submit_disabled:focus{
        color: #FFFFFF !important;
    }

    .first_block .top-level{
        display: block !important;
    }

    .first_block span.top-level {
        left: 25px;
        right: unset !important;
        top: -6px;
        line-height: 14px;
        color: #808080;
        padding: 0 10px;
        background: #FFFFFF;
    }

    .fa-info-circle:before{
        content: unset !important;
    }

    input#cvv, select.mm{
        margin-bottom: 8px !important;
    }

    @media (min-width: 799px){
            body .container {
            width: 80%;
            margin: 0 auto;
            max-width: 1110px;
        }
    }
    /*first_block */
    .first_block > img{
        width: 204px;
        display: block;
        margin: 5px auto 17px;
    }

    body .container .first_block > h1{
        font-family: 'Open Sans',sans-serif;
        font-weight: 400;
        font-size: 24px;
        line-height: 167%;
        text-align: center;
        color: #794E15;
        margin: 0 0 30px !important;
    }

    body .container .first_block > h1 span{
        font-weight: 700;
        text-transform: uppercase;
    }

    /*scroll_bar_box */
    .scroll_bar_box{
        background: #E8F1F9;
        border-radius: 10px;
        padding: 25px !important;
        display: flex;
        margin-bottom: 40px !important;
    }

    .scroll_bar_box li{
        flex: 1;
        display: flex;
        position: relative;
    }

    .scroll_bar_box li:not(:last-child){
        margin-right: 16px;
    }

    .scroll_bar_box li:nth-child(3), .scroll_bar_box li:nth-child(4), .scroll_bar_box li:nth-child(5){
        flex: 1.7;
    }

    .scroll_bar_box li .figures_box{
        position: absolute;
        content: "";
        bottom: -15px;
        left: 0;
        width: 100%;
    }

    .scroll_bar_box li .figures_box > span:first-child{
        background: #734F22;
        border-radius: 21px;
        width: 70px;
        height: 4px;
        display: inline-block;
    }

    .scroll_bar_box li .figures_box > span:first-child:not(:last-child){
        margin-right: 20px;
    }

    .scroll_bar_box li:nth-child(5) .figures_box > span:first-child{
        max-width: 220px;
        width: 100%;
    }

    .scroll_bar_box li .figures_box > span.circle{
        width: 4px;
        height: 4px;
        left: 90px;
        background: rgba(115, 79, 34, 0.5);
        border-radius: 21px;
        display: inline-block;
    }

    .scroll_bar_box li .figures_box > span.circle:not(:last-child){
        margin-right: 3%;
    }

    .scroll_bar_box li .text_block {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }

    .scroll_bar_box li .text_block > div:first-child p{
        font-family: 'Open Sans',sans-serif;
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #183B56 !important;
        margin: 0;
        text-align: left;
    }

    .scroll_bar_box li .text_block > div:first-child{
        margin-bottom: 5px;
    }

    .scroll_bar_box li .text_block > div:last-child p{
        font-weight: 400;
        font-size: 10px;
        line-height: 12px;
        color: #808080 !important;
        margin: 0;
        text-align: left;
    }

    .hover_box{
        position: absolute;
        content: "";
        top: 0;
        right: 0;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: url('https://conversionratestore.github.io/projects/knineti/img/alert_circle.svg') center center no-repeat;
        cursor: pointer;
    }

    .hover_text{
        background: #FFFFFF;
        box-shadow: 0px 0.688073px 2.06422px rgb(18 53 80 / 5%), 0px 8.25688px 34.4037px rgb(100 102 111 / 12%);
        border-radius: 10px;
        padding: 15px;
        max-width: 189px;
        width: 189px;
        position: absolute;
        top: 25px;
        right: -21px;
        content: '';
        z-index: 1;
        display: none;
    }

    .hover_text div{
        position: relative;
    }

    .hover_text div::after{
        position: absolute;
        content: "";
        top: -22px;
        right: -7px;
        width: 39.84px;
        height: 9.75px;
        background: url('https://conversionratestore.github.io/projects/knineti/img/polygon.svg') center center no-repeat;
    }
    

    .hover_text p{
        font-family: 'Open Sans',sans-serif;
        font-weight: 400;
        font-size: 10px;
        line-height: 180%;
        color: #808080;
        margin: 0 !important;
    }

    .hover_box:hover .hover_text{
        display: block;
    }

    /*payment_inform_box */
    .payment_inform_box{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 48px !important;
        padding: 0 !important;
    }

    .payment_inform_box li{
        width: 48%;
    }

    .payment_inform_box li:nth-child(1), .payment_inform_box li:nth-child(2){
        margin-bottom: 40px;
    }

    .payment_inform_box p.subtitle_text{
        margin: 0 0 16px;
        font-family: 'Open Sans',sans-serif;
        font-weight: 600;
        font-size: 20px;
        line-height: 27px;
        letter-spacing: -0.01em;
        text-transform: uppercase;
        color: #794E15 !important;
    }

    .payment_inform_box .paymen_method p.subtitle_text{
        text-transform: none;
    }

    .paymen_method{
        position: relative;
    }

    .paymen_method::after{
        position: absolute;
        content: "";
        background: url('https://conversionratestore.github.io/projects/knineti/img/secured.png') center center no-repeat;
        width: 167px;
        height: 30px;
        top: 0;
        right: 0;
    }

    .paymen_method p:last-child{
        font-family: 'Open Sans',sans-serif;
        font-weight: 400;
        font-size: 10px;
        line-height: 150%;
        color: #5A7386 !important;
        margin: 16px 0 0;
    }

    .payment_inform_box li > div{
        border: 1px solid #DFE8F0;
        border-radius: 10px;
        padding: 28px 25px;
    }

    .payment_inform_box li > div.customer_information_wrapper, .payment_inform_box li > div.paypament-details{
        border: unset;
        padding: unset;
    }

    .payment_inform_box li > div > p{
        font-family: 'Open Sans',sans-serif;
        font-weight: 700;
        font-size: 10px;
        line-height: 14px;
        text-align: right;
        text-transform: uppercase;
        color: #734F22 !important;
        margin: 20px 0 0 !important;
    }

    .payment_inform_box li > div table thead tr th{
        border: none;
        font-family: 'Open Sans',sans-serif;
        font-weight: 700;
        font-size: 10px;
        line-height: 14px;
        text-align: right;
        text-transform: uppercase;
        color: #734F22;
        padding:  0 0 10px;
    }

    .payment_inform_box li > div table thead tr th:nth-child(2){
        padding-left: 15px;
        padding-right: 15px;
    }


    .payment_inform_box li > div table tbody tr td{
        font-family: 'Open Sans',sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #1D3871;
        padding: 10px 0;
    }

    .payment_inform_box li > div table tbody tr:last-child td{
        padding-bottom: 20px;
    }

    .payment_inform_box li > div table tbody tr td:nth-child(2){
        color: #808080;
        text-decoration-line: line-through;
        text-align: end;
        padding-left: 15px;
        padding-right: 15px;
    }

    .payment_inform_box li > div table tbody tr td:nth-child(3){
        color: #183B56;
        text-align: end;
        font-weight: 700;
    }

    .payment_inform_box li > div table tfoot tr td{
        font-family: 'Open Sans',sans-serif;
        font-weight: 700;
        font-size: 14px;
        line-height: 19px;
        text-transform: uppercase;
        color: #1D3871;
        padding: 20px 0 0;
        border-top: 1px solid #DFE8F0;
    }

    .payment_inform_box li > div table tfoot tr td:nth-child(2){
        color: #808080;
        text-decoration-line: line-through;
        text-align: end;
        padding-left: 15px;
        padding-right: 15px;
    }

    .payment_inform_box li > div table tfoot tr td:nth-child(3){
        color: #183B56;
        text-align: end;
    }

    .payment_inform_box li > div.input_wrapper > div:not(:last-child){
        margin-bottom: 20px;
    }

    .payment_inform_box li > div.input_wrapper > div{
        position: relative;
    }

    .payment_inform_box .input_wrapper > div > input{
        position: absolute;
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
    }

    .payment_inform_box .input_wrapper > div label{
        margin: 0;
        font-family: 'Open Sans',sans-serif;
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
        color: #1D3871;

        display: flex;
        justify-content: flex-start;
        align-items: center;
        cursor: pointer;
    }

    .payment_inform_box .input_wrapper > div:first-child label span .accent_color{
        color: #808080;
        text-decoration-line: line-through;
        font-weight: 400;
    }

    .payment_inform_box .input_wrapper > div:last-child label{
        font-weight: 400;
    }

    .radio_style{
        flex-shrink: 0;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        border: 1px solid #808080;
        margin-right: 12px;
    }

    .ellipse{
        display: none;
    }

    .payment_inform_box .input_wrapper > div >input:checked + label .radio_style{
        border: 1px solid #1D3871;
    }

    .payment_inform_box .input_wrapper > div >input:checked + label .radio_style .ellipse{
        display: inline-block;
        width: 8px;
        height: 8px;
        background: #1D3871;
        border-radius: 50%;
    }


    /* reviews_box */
    .reviews_box{
        display: flex;
        margin: 100px 0 23px !important;
        padding-bottom: 120px !important;
        border-bottom: 1px solid #F0EEEE;
    }

    .reviews_box li img{
        width: 72px;
        height: 72px;
    }

    .reviews_box li div{
        margin-left: 20px;
    }

    .reviews_box li{
        flex: 1;
        display: flex;
    }

    .reviews_box li:not(:last-child){
        margin-right: 34px;
    }

    .reviews_box li p:first-child{
        font-family: 'Open Sans',sans-serif;
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        color: #734F22 !important;
        margin-bottom: 15px;
    }

    .reviews_box li div span{
        display: block;
        margin-bottom: 8px;
    }

    @media (max-width: 1200px){
        .reviews_box li p:first-child{
            height: 35px;
        }
    }

    .reviews_box li p:not(:first-child){
        font-family: 'Open Sans',sans-serif;
        font-style: italic;
        font-weight: 400;
        font-size: 16px;
        line-height: 162%;
        letter-spacing: 0.02em;
        color: #808080;
    }

    /* contacts_us */
    .contacts_us{
        display: flex;
        padding: 0 !important;
    }

    .contacts_us li{
        flex: 1;
        padding-left: 92px !important;
    }

     .contacts_us li:last-child{
        padding-left: 126px !important;
     }

    .contacts_us li p:first-child{
        font-family: 'Open Sans',sans-serif;
        font-weight: 400;
        font-size: 15px;
        line-height: 20px;
        color: #794E15 !important;
        margin-bottom: 16px;
    }

    .contacts_us p:last-child{
        font-family: 'Open Sans',sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 167%;
        color: #808080 !important;
        margin: 0 !important;
    }

    .contacts_us p > a{
        color: #0037B4;
    }

     @media (max-width: 768px){
        body .container .first_block > h1{
            font-size: 24px !important;
            margin: 0 0 20px !important;
        }

        .scroll_bar_box{
            overflow-x: auto;
            margin-right: -6%;
        }

        .payment_inform_box li{
            width: 100%;
        }

        .payment_inform_box li:nth-child(2){
            order: -1;
        }

        .reviews_box{
            display: block;
        }

        .reviews_box li:not(:last-child){
            margin: 0 0 40px;
        }

        .reviews_box li p:first-child{
            height: unset;
            font-size: 14px;
            line-height: 19px;  
        }

        .reviews_box li p:not(:first-child), .contacts_us p:last-child{
           text-align: left;
        }

        .reviews_box li img{
            width: 56px;
            height: 56px;
        }

        .reviews_box li div{
            margin-left: 16px;
        }

        .reviews_box{
            margin: 80px 0 20px;
            padding-bottom: 80px !important;
        }

        .contacts_us li, .contacts_us li:last-child{
            padding: 0 !important;
        }

        .contacts_us li:not(:last-child){
            margin-right: 25px;
        }
     }
</style>

`

let firstBlock = /*html*/ `
<div class="first_block">
    <img src="https://conversionratestore.github.io/projects/knineti/img/logo_training.jpg" alt="logo k9 training institute">
    <h1>Enroll now for <span>unlimited access</span> to our 10-week Total Transformation Masterclass</h1>
    <ul class="scroll_bar_box">
        <li>
            <div class="text_block">
                <div>
                    <p>Enroll for masterclass</p>
                </div>
                <div>
                    <p>Dec 1, 2021</p>
                </div>
            </div>
            <div class="figures_box">
                <span></span>
                <span class="circle"></span>
                <span class="circle"></span>
            </div>
        </li>
        <li>
            <div class="text_block">
                <div>
                    <p>Watch <br/> first lesson</p>
                </div>
                <div>
                    <p>Dec 1, 2021</p>
                </div>
            </div>
            <div class="figures_box">
                <span></span>
                <span class="circle"></span>
                <span class="circle"></span>
                <span class="circle"></span>
            </div>
        </li>
        <li>
            <div class="text_block">
                <div>
                    <p>Noticeable improvements in your dog’s behavior</p>
                </div>
                <div>
                    <p>Dec 7, 2021</p>
                </div>
            </div>
            <div class="figures_box">
                <span></span>
                <span class="circle"></span>
                <span class="circle"></span>
                <span class="circle"></span>
                <span class="circle"></span>
                <span class="circle"></span>
                <span class="circle"></span>
                <span class="circle"></span>
            </div>
        </li>
        <li>
            <div class="text_block">
                <div>
                    <p>Your dog will become as obedient as a service dog</p>
                </div>
                <div>
                    <p>Jan 1, 2022</p>
                </div>
            </div>
            <div class="figures_box">
                <span></span>
                <span class="circle"></span>
                <span class="circle"></span>
                <span class="circle"></span>
                <span class="circle"></span>
                <span class="circle"></span>
                <span class="circle"></span>
                <span class="circle"></span>
                <span class="circle"></span>
            </div>
        </li>
        <li>
            <div class="text_block">
                <div>
                    <p>90 days UNconditional money-back guarantee</p>
                </div>
                <div>
                    <p>Until Mar 1, 2022</p>
                </div>
            </div>
            <div class="figures_box">
                <span></span>
            </div>
            <div class="hover_box">
                <div class="hover_text">
                    <div>
                        <p>If you are not satisfied with the masterclass, please contact us within 90 days of your enrollment to get a full refund.</p>
                    </div>
                </div>
            </div>
           
        </li>
    </ul>

    <ul class="payment_inform_box">
        <li class="payment_inform_wrapp">
            <p class="subtitle_text">Payment Information</p>
        </li>
        <li>
            <p class="subtitle_text">Order Summary</p>
            <div>
                <table>
                    <thead>
                        <th>&nbsp;</th>
                        <th>Full price</th>
                        <th>Your price</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Total Transformation Masterclass </td>
                            <td>$497.00</td>
                            <td>$297.00</td>
                        </tr>
                        <tr>
                            <td>10 weeks of personal coaching from our training experts</td>
                            <td>$999.00</td>
                            <td>$0.00</td>
                        </tr>
                        <tr>
                            <td>BONUS CLASS ‘How to Housetrain Your Dog’</td>
                            <td>$69.70</td>
                            <td>$0.00</td>
                        </tr>
                        <tr>
                            <td>BONUS CLASS ‘Cure Your Dog’s Separation Anxiety’</td>
                            <td>$69.70</td>
                            <td>$0.00</td>
                        </tr>
                        <tr>
                            <td>BONUS CLASS ‘How to Get Kids to Interact with Your Dog’</td>
                            <td>$69.70</td>
                            <td>$0.00</td>
                        </tr>                        
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Total</td>
                            <td>$1705.10</td>
                            <td>$297.00</td>
                        </tr>
                    </tfoot>                   
                </table>
                <p>YOUR DISCOUNT IS VALID UNTIL DEC 7, 2021</p>
            </div>
        </li>
        <li class="paymen_method">
            <p class="subtitle_text">Payment Method</p>
            <p>We currently support Visa and Mastercard credit and debit cards. <br>You will see a charge from K9ti.org 4157581461 on your card or bank statement.</p>
        </li>
        <li>
            <p class="subtitle_text">Payment plan</p>
            <div class="input_wrapper">
                <div>
                    <input type="radio" id="plan1" name="payplan" checked>
                    <label for="plan1">
                        <span class="radio_style">
                            <span class="ellipse"></span>
                        </span>
                        <span>One-time payment of <span class='accent_color'>$1705,10</span> $297</span>
                    </label>
                </div>
                <div>
                    <input type="radio" id="plan2" name="payplan">
                    <label for="plan2">
                        <span class="radio_style">
                            <span class="ellipse"></span>
                        </span>
                        <span>3 monthly payments of $99, with the first payment due today</span>
                    </label>
                </div>                
            </div>
        </li>
    </ul>


    <ul class="reviews_box">
        <li>
            <img src="https://conversionratestore.github.io/projects/knineti/img/dog1.jpg" alt="little dog">
            <div>
                <p>Natalie Rozynski Vancouver, British Columbia, Canada</p>
                <span><svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.2721 16L12.0117 15.2974C13.7478 11.4438 16.6992 6.34464 20.8659 0H25C21.4844 8.06919 19.2817 13.4025 18.3919 16H12.2721ZM0.195312 16L0 15.2974C2.12674 10.8051 5.05642 5.70592 8.78906 0H12.9232C9.73307 7.34531 7.53038 12.6786 6.3151 16H0.195312Z" fill="#734F22"/>
                </svg>
                </span>
                    <p>We were getting really frustrated with Luna (our Chihuahua puppy). She used to bite us constantly and would never come to us when we used to call her in the dog park. And we had tried to housebreak her but she continued to pee occasionally in the house.</p>
                    <p>While your masterclass sounded great, I wasn’t sure it would work for a puppy like her. To be honest, the only reason we signed up is because of your refund policy - I figured we had nothing to lose haha!</p>
                    <p>Well, not only did it work, it worked wonders. We haven’t had a single accident in more than 8 weeks now. The biting has also stopped, and she now comes to us as soon as we call her name - no matter what she might be doing at that time.</p>
                    <p>We are thinking of getting another dog soon (probably a bigger dog) so that Luna will have someone to play with, and are looking forward to using the things that we had learned in the masterclass with the new dog.</p>
            </div>
        </li>
        <li>
            <img src="https://conversionratestore.github.io/projects/knineti/img/dog2.jpg" alt="dog">
            <div>
                <p>Samantha Morgan, Plano, Texas</p>
                <span><svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.2721 16L12.0117 15.2974C13.7478 11.4438 16.6992 6.34464 20.8659 0H25C21.4844 8.06919 19.2817 13.4025 18.3919 16H12.2721ZM0.195312 16L0 15.2974C2.12674 10.8051 5.05642 5.70592 8.78906 0H12.9232C9.73307 7.34531 7.53038 12.6786 6.3151 16H0.195312Z" fill="#734F22"/>
                </svg>
                </span>
                    <p>I purchased the Total Transformation Masterclass from K9 Training Institute and am super-impressed.</p>
                    <p>Walking with Carlo has become so much more enjoyable now! Instead of constantly pulling on his leash like he used to, he now always walks at our side.</p>
                    <p>And instead of trying to run away everytime we open the front door (and almost getting run over by a car once because of this), he now sits patiently in front of the door even without a leash on until I give him permission to go out.</p>
                    <p>He has become so well-trained and seems to almost behave like a service dog now!</p>
            </div>
        </li>
    </ul>

    <ul class="contacts_us">
        <li>
            <p>U.S. Office</p>
            <p>
                K9 Training Institute <br>
                A division of Digitools Limited <br>
                4283 Express Lane <br>
                Sarasota, Florida 34238 <br>
                Ph: <a class="not-for-eu-visitor" href="callto:4157581461">(415) 758-1461</a>
            </p>
        </li>
        <li>
            <p>European Office</p>
            <p>K9 Training Institute
                A division of Digitools Limited <br>
                Execo Business Centre <br>
                77 Strovolos Av., Strovolos Center <br>
                4th Floor, Office 12-D5 <br>
                Strovolos 2018, Nicosia, Cyprus
            </p>
        </li>
    </ul>
</div>
`

document.head.insertAdjacentHTML("beforeend", newPageStyle)

setTimeout(() => {
  document.querySelector("section .container").insertAdjacentHTML("afterbegin", firstBlock)

  if (document.querySelector(".first_block")) {
    document.querySelector(".payment_inform_box .payment_inform_wrapp p.subtitle_text").after(document.querySelector(".customer_information_wrapper"))
    document
      .querySelectorAll(".payment_inform_box .payment_inform_wrapp .customer_information_wrapper .row")[1]
      .after(document.querySelectorAll(".payment_inform_box .payment_inform_wrapp .customer_information_wrapper .row")[0])

    document.querySelector(".payment_inform_box .paymen_method p.subtitle_text").after(document.querySelector(".paypament-details"))
    document
      .querySelectorAll(".payment_inform_box .paymen_method .paypament-details .row")[1]
      .after(document.querySelectorAll(".payment_inform_box .paymen_method .paypament-details .row")[0])

    document.querySelector(".payment_inform_box").after(document.querySelectorAll(".payment_inform_box .paymen_method .paypament-details .row")[5])

    document.querySelector(".submit_btn input").value = "Enroll Now"

    document.querySelector(".content .page h4, .content .entry-content h4").textContent = "Contact information"

    document.querySelectorAll("input").forEach((el) => {
      el.placeholder = ""
    })
  }
}, 10)
