let stickySoupBoxStyle = /*html*/ `
<style>
*,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    li {
        list-style: none;
    }
    
/* popap_box */
    .backdrop-modal {
        position: fixed;
        overflow: hidden;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        opacity: 1;
        background: rgba(0, 0, 0, 0.5);
        transition: all 0.8s ease 0s;        
        z-index: 9005;
    }

    .backdrop-modal.is-hidden {
        opacity: 0;
        pointer-events: none;
        transform: translateY(100%);
        transition: all 0.8s ease 0s;
    }

    .backdrop-modal form{
        margin: 0;
        border-radius: 20px 20px 0px 0px;
        position: absolute;
        bottom: 0;
        max-width: 100%;
        padding: 30px 15px 15px;
        background: #F4F4F4;
        text-align: center;
        transform: translateY(0%);
        transition: all 0.8s ease 0s;
        font-family: "Archivo Narrow",sans-serif;
    }

    .backdrop-modal form svg {
        position: absolute;
        top: 20px;
        right: 20px;
        outline: none;
        cursor: pointer;
    }

    @media (min-width: 768px) {

        .backdrop-modal.is-hidden {
            opacity: 0;
            pointer-events: none;
            transform: unset;
            transition: unset;
        }

        .backdrop-modal {
            position: fixed;
            overflow: hidden;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            opacity: 1;
            background: rgba(0, 0, 0, 0.5);
            transition: all 0.8s ease 0s;
            z-index: 9005;
        }

        .backdrop-modal form{
            border-radius: unset;
            position: relative;
            max-width: 440px;
            height: 100%;
            margin-left: auto;
            padding: 25px 30px;
            background: #F4F4F4;
            text-align: center;
            transition: all 0.8s ease 0s;
            font-family: "Archivo Narrow",sans-serif;
        }   
    }       

/* details_box */
    .details-box {
        font-family: "Archivo Narrow",sans-serif;
        position: absolute;
        top: 0;
        right: 76px;
        padding: 7px 0;
        width: 86px;
        border: 5px solid #FFFFFF;
        background: #003DA5;
        color: #FFFFFF;
        font-weight: 500;
        font-size: 14px;
        line-height: 19px;
        text-align: center;
    }

    .details-box div{
        display: flex;
        justify-content: space-evenly;
        align-items: stretch;
    }

    .details-box div > span:last-child {
        padding: 0 7px;
        font-weight: 700;
        font-size: 23px;
        line-height: 31px;
        color: #003DA5;
        background: #FFFFFF;
        border-radius: 5px;
    }

/* details_box */
    .basket-box{
        font-size: 16px;
        line-height: 22px;
        color: #000000;
    }

    .basket-box h2 {
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        color: #003DA5;
        text-transform: uppercase;
        margin: 0;
        padding: 0;
    }

    .basket-box p {
        font-weight: 500;
        font-size: 14px;
        line-height: 19px;
        margin: 0;
        padding: 0;
    }

    .basket-box .basket-scroll-box {        
        position: relative;
        border: 2px solid #003DA5;
        padding: 25px 15px 25px 25px;
        margin: 35px 0 16px;
    }

    .basket-box .basket-scroll-box div:first-child {
        overflow-y: scroll;
        max-height: 400px;
    }

    .basket-box .basket-scroll-box > div > svg:first-child {
        position: absolute;
        width: 91px;
        top: -25px;
        right: 50%;
        background: #F4F4F4;
        transform: translate(50%, 0);
    }

    .basket-box .basket-scroll-box > div p {
        font-weight: 700;
        font-size: 28px;
        line-height: 25px;
        text-transform: uppercase;
        margin-bottom: 16px;
    }

    .basket-box .basket-scroll-box > div p > span:not(:first-child){
        font-size: 18px;
        line-height: 24px;
    }

    .basket-box .basket-scroll-box > div > ul {
        text-align: start;
        font-weight: 700;
        text-transform: uppercase;
    }

    .basket-box .basket-scroll-box > div > ul li{
        display: flex;
        margin-bottom: 15px;
        align-items: center;
    }

    .basket-box .basket-scroll-box > div > ul svg {
        margin-right: 10px;
        position: unset;
        width: 20px;
        height: 20px;
    }

    .basket-box .basket-scroll-box > div > ul .box-count{
        margin-left: auto;
        display: flex;
        align-items: center;
    }

    .basket-box .basket-scroll-box > div > ul .box-count svg{
        margin: 0;
    }

    .basket-box .basket-scroll-box > div > ul .box-count span{
        margin: 0 15px;
    }

    .basket-box .basket-scroll-box > div .complete-title{
        font-weight: 400;
        font-size: 16px;
        line-height: 17px;
        margin: 0;
    }

    .basket-box .basket-scroll-box > div .complete-title a{
        text-decoration: underline;
        color: inherit;
    }

    .basket-box .total-price-box {
        display: flex;
        justify-content: space-between;
    }

    .basket-box .total-price-box div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .basket-box .total-price-box div p {
        line-height: 10px;
        opacity: 0.6;
        margin-right: 10px;
        
    }

    .basket-box .total-price-box div > span {
        font-weight: bold;
        font-size: 38px;
        line-height: 51px;
    }

    .basket-box .total-price-box button {
        max-width: 243px;
        height: 54px;
        font-size: 16px;
        line-height: 105.7%;
        background: #003DA5;
    }

    @media (min-width: 768px) {

        .basket-box .basket-scroll-box {        
            padding: 35px 15px 35px 35px;

        }

        .basket-box .basket-scroll-box > div > ul li{
            margin-bottom: 20px;
        }
            
        .basket-box .total-price-box {
            flex-direction: column;
            justify-content: unset;
        }

        .basket-box .total-price-box div {
            margin: 0 0 16px;
        }

        .basket-box .total-price-box button {
            max-width: 100%;
        }

    }

    /* sticky-soup-wraper desktop */

    .sticky-soup-block-mob{
        display: flex;
        background: #F4F4F4;
        text-align: center;
        padding: 10px;
        font-family: "Archivo Narrow",sans-serif;
    }

    .sticky-soup-wraper-mob, .sticky-soup-wraper-mob ul {
        display: flex;
        align-items: center;
        margin: 0;
    }

    .sticky-soup-wraper-mob ul li:not(:last-child) {
        background: url("https://conversionratestore.github.io/projects/sticky_soup/img/soup.svg") center center no-repeat;
        width: 27px;
        height: 27px;
        margin-right: 10px;
    }

    .sticky-soup-wraper-mob ul li:last-child{
        background: url("https://conversionratestore.github.io/projects/sticky_soup/img/open_box.svg") center center no-repeat;
        width: 29px;    
        height: 30px;
        margin-right: 25px;
        margin-left: 15px;
    }

    .sticky-soup-wraper-mob ul li.active-soup {
        background: url("https://conversionratestore.github.io/projects/sticky_soup/img/full_soup.svg") center center no-repeat;
    }

    .sticky-soup-wraper-mob > div{
        display: flex;
        flex-direction: column;
    }

    .sticky-soup-wraper-mob > span{
        margin-right: 25px;
        color: #6B6B6B;
    }


    .sticky-soup-wraper-mob > div span:first-child{
        font-weight: 500;
        font-size: 11px;
        line-height: 15px;
        color: #A7A7A7;
    }

    .sticky-soup-wraper-mob > div span:last-child{
        font-weight: 700;
        font-size: 11px;
        line-height: 13px;
        text-transform: uppercase;
        color: #000000;
    }

    @media (min-width: 768px) {

        .sticky-soup-block{
            background: #F4F4F4;
            text-align: center;
            padding: 10px;
            font-family: "Archivo Narrow",sans-serif;
            margin-bottom: 50px;
            padding: 10px 0 50px;
        }

        .sticky-soup-block button {
            min-height: 54px;
            max-width: 217px;
            font-weight: 500;
            font-size: 14px;
            line-height: 10px;
            color: rgb(255 255 255 / 60%);
            text-transform: unset;
        }

        .sticky-soup-block button> span:first-child{
            display: contents;
            font-weight: 600;
            font-size: 20px;
            line-height: 105.7%;
            text-align: center;
            text-transform: uppercase;
            color: #FFFFFF;
        }

        .sticky-soup-block button> span:last-child{
            font-weight: 500;
            font-size: 24px;
            line-height: 32px;
            text-align: center;
            color: #003DA5;
            background: #FFFFFF;
            border-radius: 5px;
            padding: 0 5px;

        }

        .sticky-soup-block div:first-child {
            margin-bottom: 15px;
        }

        .sticky-soup-block div > span:first-child{
            font-weight: 700;
            font-size: 24px;
            line-height: 32px;
            text-transform: uppercase;
            color: #003DA5;
            margin-right: 10px;
        }

        .sticky-soup-block div > span:last-child{
            font-weight: 500;
            font-size: 14px;
            line-height: 19px;
            color: #000000;
        }

        .sticky-soup-wraper, .sticky-soup-wraper ul {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #FFFFFF;
            margin: 0;
        }

        .sticky-soup-wraper > span{
            margin-right: 25px;
            color: #6B6B6B;
        }

        .sticky-soup-wraper ul li:not(:last-child) {
            background: url("https://conversionratestore.github.io/projects/sticky_soup/img/soup.svg") center center no-repeat;
            width: 27px;
            height: 27px;
            margin-right: 10px;
        }

        .sticky-soup-wraper ul li:last-child{
            background: url("https://conversionratestore.github.io/projects/sticky_soup/img/open_box.svg") center center no-repeat;
            width: 29px;    
            height: 30px;
            margin-right: 25px;
            margin-left: 15px;
        }

        .sticky-soup-wraper ul li.active-soup {
            background: url("https://conversionratestore.github.io/projects/sticky_soup/img/full_soup.svg") center center no-repeat;
        }

        .sticky-soup-wraper ul li.active-box {
            background: url("https://conversionratestore.github.io/projects/sticky_soup/img/full_box.svg") center center no-repeat;
        }

        .sticky-soup-wraper .list-six-box li:nth-child(7),
        .sticky-soup-wraper .list-nine-box li:nth-child(4),
        .sticky-soup-wraper .list-twelve-box li:nth-child(4) {
            position: relative;
        }

        .sticky-soup-wraper .list-six-box::after,
        .sticky-soup-wraper .list-six-box li:nth-child(7)::after,
        .sticky-soup-wraper .list-nine-box li:nth-child(4)::after,
        .sticky-soup-wraper .list-twelve-box li:nth-child(4)::after{
            position: absolute;
            width: 110px;
            content: "Minimum order";
            top: 60px;
            left: 50px;
            font-weight: 500;
            font-size: 12px;
            line-height: 16px;
            text-transform: uppercase;
            color: #000000;
            opacity: 0.7;
        }

        .sticky-soup-wraper .list-six-box li:nth-child(7)::after{
            content: "6 soups BOX";
            left: -40px;
        }

        .sticky-soup-wraper .list-nine-box li:nth-child(4)::after{
            content: "9 Soups box";
            left: -40px;
        }

        .sticky-soup-wraper .list-twelve-box li:nth-child(4)::after{
            content: "12 Soups box";
            left: -40px;
        }

        /*soup-basket-bnt */

        .soup-basket-bnt{
            background: url("https://conversionratestore.github.io/projects/sticky_soup/img/soup_basket_bnt.svg") center center no-repeat;
            background-position: bottom 1px right 58px;
            width: 90px;
            height: 23px;
            cursor: pointer;
        }

        .soup-basket-bnt.full-box{
            background: url("https://conversionratestore.github.io/projects/sticky_soup/img/soup_basket_bnt_full.svg") center center no-repeat;
            background-position: bottom 0 right 58px;
        }

        .soup-basket-bnt > p {
            font-weight: 500;
            font-size: 14px;
            line-height: 19px;
            text-align: center;
            color: #003DA5;
        }
    }
</style>
`

let soupPopUp = /*html*/ `
<div class="backdrop-modal is-hidden" data-modal>
  <form>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5625 1.4375L1.4375 14.5625M14.5625 14.5625L1.4375 1.4375L14.5625 14.5625Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>        
  </form>
</div>
`

let stickySoupBox = /*html*/ `
    <div class="sticky-soup-block">
        <div>
            <span>Build a box</span>
            <span>We ship boxes of 6, 9 or 12 Soups</span>
        </div>

        <div class="sticky-soup-wraper">
            <ul class="list-six-box">
                <li class="active-soup"></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li class="active-box"></li>              
            </ul>    
            <span>+</span>
            <ul class="list-nine-box">
                <li></li>
                <li></li>
                <li></li>
                <li></li>            
            </ul> 
            <span>+</span>
            <ul class="list-twelve-box">
                <li></li>
                <li></li>
                <li></li>
                <li></li>            
            </ul> 

            <button>
                Your box is empty <span>your Cart</span>
                <span>$0</span>
            </button>
        </div>
    </div>
`

let stickySoupBoxMob = /*html*/ `
    <!-- <div>
        <h2>Build a box</h2>
        <span>We ship boxes of 6, 9 or 12 Soups</span>
    </div> -->
    <div class="sticky-soup-block-mob">
        <!-- <div class="sticky-soup-wraper-mob">
            <ul>
                <li class="active-soup"></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>              
            </ul>
            <div>
                <span>minimum order</span>
                <span><span>6</span> Soups box</span> 
            </div>
        </div> -->

        <div class="sticky-soup-wraper-mob">
            <ul>
                <li class="active-soup">6</li>       
            </ul> 
            <span>+</span>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li>9</li>            
            </ul>
        </div>

        <button>
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.84483 6.11646L15.9679 1.77647L11.7763 0.0545305C11.5992 -0.0181768 11.4008 -0.0181768 11.2237 0.0545305L1.15625 4.19035L5.84483 6.11646Z" fill="white"/>
                <path d="M17.8518 2.55042L7.72571 6.88913L11.4999 8.43966L21.8437 4.19033L17.8518 2.55042Z" fill="white"/>
                <path d="M10.7729 9.71301L6.67644 8.03016V11.2165C6.67644 11.618 6.35089 11.9435 5.94936 11.9435C5.54784 11.9435 5.22229 11.618 5.22229 11.2165V7.43278L0.50354 5.49426V18.2938C0.50354 18.5887 0.681582 18.8543 0.954325 18.9664L10.7729 23V9.71301Z" fill="white"/>
                <path d="M12.2271 9.71301V23L22.0456 18.9664C22.3184 18.8544 22.4964 18.5887 22.4964 18.2938C22.4964 17.8046 22.4964 6.0298 22.4964 5.49426L12.2271 9.71301Z" fill="white"/>
            </svg>
            <p><span>5</span>/<span>6</span></p>
            <span>$99</span>        
        </button>
    </div>
`

let soupBasketBnt = /*html*/ `
    <div class="soup-basket-bnt">        
        <p><span>5</span>/<span>6</span></p>        
    </div>
`

let soupBasketBox = /*html*/ `
<div class="basket-box">
    <h2>Your Cart</h2>
    <p>
        We ship boxes of 6, 9 or 12 Soups
    </p>

    <div class="basket-scroll-box">
        <div>
            <svg width="42" height="38" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8511 10.1054L29.018 2.93503L21.4958 0.0900938C21.178 -0.0300313 20.8218 -0.0300313 20.5041 0.0900938L2.43701 6.92319L10.8511 10.1054Z" fill="#003DA5"/>
                <path d="M32.3991 4.21387L14.2267 11.3822L20.9999 13.9439L39.5629 6.92329L32.3991 4.21387Z" fill="#003DA5"/>
                <path d="M19.695 16.0477L12.3435 13.2674V18.5317C12.3435 19.1951 11.7593 19.733 11.0387 19.733C10.3181 19.733 9.73391 19.1951 9.73391 18.5317V12.2804L1.26562 9.07764V30.2248C1.26562 30.7119 1.58514 31.1508 2.07461 31.3359L19.695 38.0001V16.0477Z" fill="#003DA5"/>
                <path d="M22.3047 16.0477V38.0001L39.9251 31.3359C40.4146 31.1509 40.7341 30.7119 40.7341 30.2248C40.7341 29.4165 40.7341 9.96243 40.7341 9.07764L22.3047 16.0477Z" fill="#003DA5"/>
            </svg>
            <p>
                <span>6 </span>Soups Box<br>
                <span><span>5</span>/<span>6</span></span>
            </p>

            <ul>
                <li>
                    <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.8573 4.47677C14.6467 4.1302 14.4004 3.85915 14.1749 3.62828C13.8333 3.28371 13.5441 3.01672 13.367 2.75384C13.2768 2.6219 13.21 2.49333 13.1615 2.34204C13.1129 2.19085 13.0815 2.01403 13.0811 1.78042V1.00623H11.3936V1.78079C11.3895 2.47872 11.5836 3.08084 11.8671 3.54085C12.0777 3.88742 12.324 4.15815 12.5492 4.38934C12.8911 4.73391 13.1803 5.00058 13.3575 5.26378C13.4476 5.39572 13.5144 5.52429 13.563 5.67553C13.6115 5.82709 13.643 6.00391 13.6433 6.23747C13.6393 6.65296 13.5522 6.88715 13.4138 7.12303C13.3082 7.29853 13.1587 7.47166 12.969 7.66509C12.6876 7.95634 12.3096 8.2824 11.975 8.76634C11.809 9.00765 11.6585 9.29078 11.5549 9.61483C11.4502 9.93915 11.3932 10.301 11.3932 10.6938V11.4688H13.0807V10.6935C13.0847 10.2778 13.1718 10.0435 13.3102 9.80758C13.4158 9.63208 13.5653 9.45895 13.755 9.26526C14.0361 8.97401 14.4141 8.64832 14.749 8.16432C14.9147 7.92301 15.0652 7.63988 15.1692 7.31583C15.2738 6.99183 15.3308 6.63002 15.3308 6.2372C15.3349 5.53895 15.1408 4.93714 14.8573 4.47677Z" fill="#003DA5"/>
                        <path d="M19.1324 4.47677C18.9214 4.1302 18.6754 3.85915 18.4503 3.62828C18.1081 3.28371 17.8188 3.01672 17.642 2.75384C17.5519 2.6219 17.4851 2.49333 17.4365 2.34204C17.3879 2.19085 17.3565 2.01403 17.3561 1.78042V1.00623H15.6687V1.78079C15.6646 2.47872 15.8587 3.08084 16.1422 3.54085C16.3528 3.88742 16.5991 4.15815 16.8242 4.38934C17.1662 4.73391 17.4554 5.00058 17.6325 5.26378C17.7227 5.39572 17.7891 5.52429 17.8381 5.67553C17.8866 5.82709 17.9181 6.00391 17.9184 6.23747C17.9143 6.65296 17.8269 6.88715 17.6889 7.12303C17.5832 7.29853 17.4337 7.47166 17.2437 7.66509C16.9629 7.95634 16.5846 8.2824 16.2497 8.76634C16.084 9.00765 15.9338 9.29078 15.8299 9.61483C15.7253 9.93915 15.6682 10.301 15.6682 10.6938V11.4688H17.3557V10.6935C17.3598 10.2778 17.4468 10.0435 17.5852 9.80758C17.6908 9.63208 17.8403 9.45895 18.03 9.26526C18.3111 8.97401 18.6891 8.64832 19.024 8.16432C19.1901 7.92301 19.3402 7.63988 19.4442 7.31583C19.5488 6.99183 19.6059 6.63002 19.6059 6.2372C19.6099 5.53895 19.4159 4.93714 19.1324 4.47677Z" fill="#003DA5"/>
                        <path d="M0.875 13.1562C0.875 20.7982 6.91793 26.9937 14.375 26.9937C21.8321 26.9937 27.8751 20.7982 27.8751 13.1562H0.875ZM3.95637 17.2062C3.75624 16.6618 3.59324 16.0989 3.47475 15.5187H25.2752C25.1568 16.0989 24.9938 16.6618 24.7936 17.2062H3.95637Z" fill="#003DA5"/>
                    </svg>
                    Gazpacho
                    <div class="box-count">
                        <svg class="count-decr" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.5 12C21.5 7.03125 17.4688 3 12.5 3C7.53125 3 3.5 7.03125 3.5 12C3.5 16.9688 7.53125 21 12.5 21C17.4688 21 21.5 16.9688 21.5 12Z" stroke="#A1BCE9" stroke-width="2" stroke-miterlimit="10"/>
                            <path d="M16.25 12H8.75" stroke="#A1BCE9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>1</span>
                        <svg class="count-incr" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.5 12C21.5 7.03125 17.4688 3 12.5 3C7.53125 3 3.5 7.03125 3.5 12C3.5 16.9688 7.53125 21 12.5 21C17.4688 21 21.5 16.9688 21.5 12Z" stroke="#A1BCE9" stroke-width="2" stroke-miterlimit="10"/>
                            <path d="M16.25 12H8.75M12.5 8.25V15.75V8.25Z" stroke="#A1BCE9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </li>
                <li>
                    <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.8573 4.47677C14.6467 4.1302 14.4004 3.85915 14.1749 3.62828C13.8333 3.28371 13.5441 3.01672 13.367 2.75384C13.2768 2.6219 13.21 2.49333 13.1615 2.34204C13.1129 2.19085 13.0815 2.01403 13.0811 1.78042V1.00623H11.3936V1.78079C11.3895 2.47872 11.5836 3.08084 11.8671 3.54085C12.0777 3.88742 12.324 4.15815 12.5492 4.38934C12.8911 4.73391 13.1803 5.00058 13.3575 5.26378C13.4476 5.39572 13.5144 5.52429 13.563 5.67553C13.6115 5.82709 13.643 6.00391 13.6433 6.23747C13.6393 6.65296 13.5522 6.88715 13.4138 7.12303C13.3082 7.29853 13.1587 7.47166 12.969 7.66509C12.6876 7.95634 12.3096 8.2824 11.975 8.76634C11.809 9.00765 11.6585 9.29078 11.5549 9.61483C11.4502 9.93915 11.3932 10.301 11.3932 10.6938V11.4688H13.0807V10.6935C13.0847 10.2778 13.1718 10.0435 13.3102 9.80758C13.4158 9.63208 13.5653 9.45895 13.755 9.26526C14.0361 8.97401 14.4141 8.64832 14.749 8.16432C14.9147 7.92301 15.0652 7.63988 15.1692 7.31583C15.2738 6.99183 15.3308 6.63002 15.3308 6.2372C15.3349 5.53895 15.1408 4.93714 14.8573 4.47677Z" fill="#003DA5"/>
                        <path d="M19.1324 4.47677C18.9214 4.1302 18.6754 3.85915 18.4503 3.62828C18.1081 3.28371 17.8188 3.01672 17.642 2.75384C17.5519 2.6219 17.4851 2.49333 17.4365 2.34204C17.3879 2.19085 17.3565 2.01403 17.3561 1.78042V1.00623H15.6687V1.78079C15.6646 2.47872 15.8587 3.08084 16.1422 3.54085C16.3528 3.88742 16.5991 4.15815 16.8242 4.38934C17.1662 4.73391 17.4554 5.00058 17.6325 5.26378C17.7227 5.39572 17.7891 5.52429 17.8381 5.67553C17.8866 5.82709 17.9181 6.00391 17.9184 6.23747C17.9143 6.65296 17.8269 6.88715 17.6889 7.12303C17.5832 7.29853 17.4337 7.47166 17.2437 7.66509C16.9629 7.95634 16.5846 8.2824 16.2497 8.76634C16.084 9.00765 15.9338 9.29078 15.8299 9.61483C15.7253 9.93915 15.6682 10.301 15.6682 10.6938V11.4688H17.3557V10.6935C17.3598 10.2778 17.4468 10.0435 17.5852 9.80758C17.6908 9.63208 17.8403 9.45895 18.03 9.26526C18.3111 8.97401 18.6891 8.64832 19.024 8.16432C19.1901 7.92301 19.3402 7.63988 19.4442 7.31583C19.5488 6.99183 19.6059 6.63002 19.6059 6.2372C19.6099 5.53895 19.4159 4.93714 19.1324 4.47677Z" fill="#003DA5"/>
                        <path d="M0.875 13.1562C0.875 20.7982 6.91793 26.9937 14.375 26.9937C21.8321 26.9937 27.8751 20.7982 27.8751 13.1562H0.875ZM3.95637 17.2062C3.75624 16.6618 3.59324 16.0989 3.47475 15.5187H25.2752C25.1568 16.0989 24.9938 16.6618 24.7936 17.2062H3.95637Z" fill="#003DA5"/>
                    </svg>
                    Coconut Corn Chowder
                    <div class="box-count">
                        <svg class="count-decr" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.5 12C21.5 7.03125 17.4688 3 12.5 3C7.53125 3 3.5 7.03125 3.5 12C3.5 16.9688 7.53125 21 12.5 21C17.4688 21 21.5 16.9688 21.5 12Z" stroke="#A1BCE9" stroke-width="2" stroke-miterlimit="10"/>
                            <path d="M16.25 12H8.75" stroke="#A1BCE9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>1</span>
                        <svg class="count-incr" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.5 12C21.5 7.03125 17.4688 3 12.5 3C7.53125 3 3.5 7.03125 3.5 12C3.5 16.9688 7.53125 21 12.5 21C17.4688 21 21.5 16.9688 21.5 12Z" stroke="#A1BCE9" stroke-width="2" stroke-miterlimit="10"/>
                            <path d="M16.25 12H8.75M12.5 8.25V15.75V8.25Z" stroke="#A1BCE9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </li>
                <li>
                    <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.8573 4.47677C14.6467 4.1302 14.4004 3.85915 14.1749 3.62828C13.8333 3.28371 13.5441 3.01672 13.367 2.75384C13.2768 2.6219 13.21 2.49333 13.1615 2.34204C13.1129 2.19085 13.0815 2.01403 13.0811 1.78042V1.00623H11.3936V1.78079C11.3895 2.47872 11.5836 3.08084 11.8671 3.54085C12.0777 3.88742 12.324 4.15815 12.5492 4.38934C12.8911 4.73391 13.1803 5.00058 13.3575 5.26378C13.4476 5.39572 13.5144 5.52429 13.563 5.67553C13.6115 5.82709 13.643 6.00391 13.6433 6.23747C13.6393 6.65296 13.5522 6.88715 13.4138 7.12303C13.3082 7.29853 13.1587 7.47166 12.969 7.66509C12.6876 7.95634 12.3096 8.2824 11.975 8.76634C11.809 9.00765 11.6585 9.29078 11.5549 9.61483C11.4502 9.93915 11.3932 10.301 11.3932 10.6938V11.4688H13.0807V10.6935C13.0847 10.2778 13.1718 10.0435 13.3102 9.80758C13.4158 9.63208 13.5653 9.45895 13.755 9.26526C14.0361 8.97401 14.4141 8.64832 14.749 8.16432C14.9147 7.92301 15.0652 7.63988 15.1692 7.31583C15.2738 6.99183 15.3308 6.63002 15.3308 6.2372C15.3349 5.53895 15.1408 4.93714 14.8573 4.47677Z" fill="#003DA5"/>
                        <path d="M19.1324 4.47677C18.9214 4.1302 18.6754 3.85915 18.4503 3.62828C18.1081 3.28371 17.8188 3.01672 17.642 2.75384C17.5519 2.6219 17.4851 2.49333 17.4365 2.34204C17.3879 2.19085 17.3565 2.01403 17.3561 1.78042V1.00623H15.6687V1.78079C15.6646 2.47872 15.8587 3.08084 16.1422 3.54085C16.3528 3.88742 16.5991 4.15815 16.8242 4.38934C17.1662 4.73391 17.4554 5.00058 17.6325 5.26378C17.7227 5.39572 17.7891 5.52429 17.8381 5.67553C17.8866 5.82709 17.9181 6.00391 17.9184 6.23747C17.9143 6.65296 17.8269 6.88715 17.6889 7.12303C17.5832 7.29853 17.4337 7.47166 17.2437 7.66509C16.9629 7.95634 16.5846 8.2824 16.2497 8.76634C16.084 9.00765 15.9338 9.29078 15.8299 9.61483C15.7253 9.93915 15.6682 10.301 15.6682 10.6938V11.4688H17.3557V10.6935C17.3598 10.2778 17.4468 10.0435 17.5852 9.80758C17.6908 9.63208 17.8403 9.45895 18.03 9.26526C18.3111 8.97401 18.6891 8.64832 19.024 8.16432C19.1901 7.92301 19.3402 7.63988 19.4442 7.31583C19.5488 6.99183 19.6059 6.63002 19.6059 6.2372C19.6099 5.53895 19.4159 4.93714 19.1324 4.47677Z" fill="#003DA5"/>
                        <path d="M0.875 13.1562C0.875 20.7982 6.91793 26.9937 14.375 26.9937C21.8321 26.9937 27.8751 20.7982 27.8751 13.1562H0.875ZM3.95637 17.2062C3.75624 16.6618 3.59324 16.0989 3.47475 15.5187H25.2752C25.1568 16.0989 24.9938 16.6618 24.7936 17.2062H3.95637Z" fill="#003DA5"/>
                    </svg>
                    Coconut Corn Chowder
                    <div class="box-count">
                        <svg class="count-decr" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.5 12C21.5 7.03125 17.4688 3 12.5 3C7.53125 3 3.5 7.03125 3.5 12C3.5 16.9688 7.53125 21 12.5 21C17.4688 21 21.5 16.9688 21.5 12Z" stroke="#A1BCE9" stroke-width="2" stroke-miterlimit="10"/>
                            <path d="M16.25 12H8.75" stroke="#A1BCE9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>1</span>
                        <svg class="count-incr" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.5 12C21.5 7.03125 17.4688 3 12.5 3C7.53125 3 3.5 7.03125 3.5 12C3.5 16.9688 7.53125 21 12.5 21C17.4688 21 21.5 16.9688 21.5 12Z" stroke="#A1BCE9" stroke-width="2" stroke-miterlimit="10"/>
                            <path d="M16.25 12H8.75M12.5 8.25V15.75V8.25Z" stroke="#A1BCE9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </li>
            </ul>
    
            <p class="complete-title">
                Your 6 soups box is not completed. Add 1 more soup to complete the box.
            </p>

            <p class="complete-title">Your <span>6</span> soups box is completed.</p>
            <p class="complete-title">Add 3 more?
                <a href="#">Continue</a>
            </p>

            <p class="complete-title">You have reached maximum capacity of the box.</p>

    
        </div>
    </div>

    <div class="total-price-box">
        <div>
            <p>Total</p>
            <span>$45</span>
        </div>
        <button>Proceed to Checkout</button>
    </div>

</div>
`

document.head.insertAdjacentHTML("beforeend", stickySoupBoxStyle)
document.body.insertAdjacentHTML("afterbegin", soupPopUp)

if (window.innerWidth <= 768) {
  document.querySelector("#build-a-box-app").insertAdjacentHTML("afterbegin", stickySoupBoxMob)
} else {
  document.querySelector("#build-a-box-app").insertAdjacentHTML("afterbegin", stickySoupBox)
  document.querySelector(".nav .cart_container").innerHTML = `
    <div class="soup-basket-bnt">        
        <p><span>0</span>/<span>6</span></p>        
    </div>`
}

document.querySelector("#build-a-box-app .section-header").style.display = "none"
document.querySelector("#shopify-section-build-a-box-template .bab_description").style.display = "none"

if (document.querySelector(".backdrop-backdrop_2JB2n")) {
  document.querySelector(".backdrop-backdrop_2JB2n").insertAdjacentHTML(
    "beforeend",
    `<div class="details-box">
        <div>
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.84483 6.11646L15.9679 1.77647L11.7763 0.0545305C11.5992 -0.0181768 11.4008 -0.0181768 11.2237 0.0545305L1.15625 4.19035L5.84483 6.11646Z" fill="white"/>
                <path d="M17.8518 2.55042L7.72571 6.88913L11.4999 8.43966L21.8437 4.19033L17.8518 2.55042Z" fill="white"/>
                <path d="M10.7729 9.71301L6.67644 8.03016V11.2165C6.67644 11.618 6.35089 11.9435 5.94936 11.9435C5.54784 11.9435 5.22229 11.618 5.22229 11.2165V7.43278L0.50354 5.49426V18.2938C0.50354 18.5887 0.681582 18.8543 0.954325 18.9664L10.7729 23V9.71301Z" fill="white"/>
                <path d="M12.2271 9.71301V23L22.0456 18.9664C22.3184 18.8544 22.4964 18.5887 22.4964 18.2938C22.4964 17.8046 22.4964 6.0298 22.4964 5.49426L12.2271 9.71301Z" fill="white"/>
            </svg>
            <p><span>5</span>/<span>6</span></p>        
        </div>
        <span>$99</span>        
    </div>`
  )
  document.querySelector(".details-modal-content_sZt78 .product-controls-controls_2K2Zl .product-controls-add_subtract_HfJS- ul li a").innerText = "Add to cart"
}

if (document.querySelector(".soup-basket-bnt")) {
  document.querySelector(".soup-basket-bnt").addEventListener("click", () => {
    document.querySelector(".backdrop-modal form").insertAdjacentHTML("beforeend", soupBasketBox)
    document.querySelector(".backdrop-modal").classList.remove("is-hidden")
    document.body.style.overflow = "hidden"
  })
}

if (document.querySelector(".sticky-soup-block-mob button")) {
  document.querySelector(".sticky-soup-block-mob button").addEventListener("click", () => {
    document.querySelector(".backdrop-modal form").insertAdjacentHTML("beforeend", soupBasketBox)
    document.querySelector(".backdrop-modal").classList.remove("is-hidden")
    document.body.style.overflow = "hidden"
  })
}

document.querySelector(".backdrop-modal form svg").addEventListener("click", () => {
  document.querySelector(".backdrop-modal").classList.add("is-hidden")
  document.body.style.overflow = "auto"
})
