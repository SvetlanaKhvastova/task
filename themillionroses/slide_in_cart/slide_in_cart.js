let startFunk = setInterval(() => {
    if (document.querySelector('.main_header')) {
        clearInterval(startFunk)

        let style = /*html */`
        <style>
            /* popap_box */
            .popup_slide_in {
            position: fixed;
            overflow: hidden;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100%;
            max-height: 100%;
            opacity: 1;
            background: rgba(217, 217, 217, 0.5);
            transition: all 0.5s ease 0s;
            z-index: 9005;
            display: block;
            }
            .popup_slide_in.is_hidden {
            opacity: 0;
            pointer-events: none;
            }
            .popup_slide_in.is_hidden .container_popup {
            transform: translateX(100%);
            transition: all 0.8s ease 0s;
            }
            .popup_slide_in .container_popup {
            display: flex;
            flex-direction: column;
            position: fixed;
            bottom: 0;
            right: 0;
            max-width: 590px;
            width: 100%;
            height: 100%;
            max-height: 100vh;
            padding:0;
            margin: 0;
            background: #F4F4F4;
            transition: all 0.5s ease 0s;
            overflow: auto;
            }
            .popup_slide_in .container_popup .cart_popup_close {
            cursor: pointer;
            }
            .cart_popup_header{
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid #E1E1E1;
                padding: 16px 24px;
            }
            .cart_continue_shopping{
                display: flex;    
                align-items: center;
                justify-content: center;
                cursor: pointer;
            }
            .cart_continue_shopping span{
                font-weight: 400;
                font-size: 12px;
                letter-spacing: 1.4px;
                text-transform: uppercase;
                color: #000000;
                margin: 0 0 0 8px;
            }
            .cart_popup_footer{
                padding: 24px 0;
                margin: auto 24px 0;
                border-top: 1px solid #E1E1E1;
            }
            .sub_total_wrap{
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 40px;
            }
            .sub_total_wrap span:nth-child(1){
                font-weight: 400;
                font-size: 14px;
                line-height: 24px;
                letter-spacing: 1.4px;
                text-transform: uppercase;
                color: #000000;
            }
            .sub_total_price{
                font-weight: 500;
                font-size: 20px;
                line-height: 24px;
                color: #000000;
            }
            .cart_popup_footer form{
                display: flex;
                flex-direction: column;
            }
            .cart_popup_footer form label{
                display: flex;
                flex-direction: column;
                font-weight: 400;
                font-size: 15px;
                line-height: 18px;
                color: #000000;
            }
            .cart_popup_footer form label textarea{
                width: 100%;
                resize: both;
                min-height: 50px;
                max-height: 230px;
                min-width: 542px;
                max-width: 542px;
                font-weight: 500;
                font-size: 14px;
                line-height: 20px;
                color: #757575;
                margin-top: 12px;
                padding: 14px 16px;
                border: 1px solid #4A4A4A;
            }
            .btn_checkout{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 56px;
                background: #E1D4D9;
                font-weight: 500;
                font-size: 14px;
                line-height: 48px;
                letter-spacing: 4.8px;
                text-transform: uppercase;
                color: #000000;
                cursor: pointer;
                margin-top: 45px;
                transition: all 0.5s ease 0s;
            }
            .btn_checkout:hover{
                background: #000000;
                color: #FFFFFF;
            }
            .cart_popup_scroll{
                padding: 24px;
                display: flex;
                flex-direction: column;
                gap: 24px;
                overflow-y: auto;
            }
            .product_wrap{
                display: flex;
                justify-content: flex-start;
                gap: 16px;
            }
            .img_wrap{
                flex: 1 1 30%;
                max-width: 145px;
                max-height: 145px;
                width: 100%;
                height: 100%;
                border: 1px solid #EAEBEA;
            }
            .inform_wrap{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                flex: 1 1 70%;
            }
            .inform_wrap h2{
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                color: #000000;
                margin: 0;
                text-align: left;
            }
            .inform_wrap h2 a{
                color: #000000;
            }
            .price_wrap{
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        </style>
        `

        let popUp = /*html */ `
            <div class="popup_slide_in is_hidden" data-modal>
                <div class="container_popup">
                    <div class="cart_popup_header">
                        <div data-close-slide-in class="cart_continue_shopping">
                            <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_606_131)">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M5.463 1.30811C5.4316 1.23188 5.38184 1.1646 5.31814 1.11225C5.25445 1.0599 5.1788 1.02412 5.09793 1.00808C5.01706 0.992048 4.93348 0.996259 4.85463 1.02034C4.77578 1.04442 4.70411 1.08763 4.646 1.14611L0.646 5.14611C0.599437 5.19256 0.562494 5.24773 0.537288 5.30848C0.512081 5.36922 0.499106 5.43435 0.499106 5.50011C0.499106 5.56588 0.512081 5.631 0.537288 5.69175C0.562494 5.75249 0.599437 5.80767 0.646 5.85411L4.646 9.85411C4.73989 9.948 4.86722 10.0007 5 10.0007C5.13278 10.0007 5.26011 9.948 5.354 9.85411C5.44789 9.76023 5.50063 9.63289 5.50063 9.50011C5.50063 9.36734 5.44789 9.24 5.354 9.14611L2.207 6.00011H13C13.1326 6.00011 13.2598 5.94743 13.3536 5.85367C13.4473 5.7599 13.5 5.63272 13.5 5.50011C13.5 5.3675 13.4473 5.24033 13.3536 5.14656C13.2598 5.05279 13.1326 5.00011 13 5.00011H2.207L5.354 1.85411C5.42425 1.78416 5.47212 1.69491 5.49153 1.59769C5.51094 1.50047 5.50101 1.39967 5.463 1.30811Z"
                                    fill="black" />
                                </g>
                                <defs>
                                <clipPath id="clip0_606_131">
                                    <rect width="14" height="10" fill="white" transform="matrix(-1 0 0 1 14 0.5)" />
                                </clipPath>
                                </defs>
                            </svg>
                            <span>Continue shopping</span>
                        </div>
                        <svg data-close-slide-in class="cart_popup_close" width="18" height="17" viewBox="0 0 18 17" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_606_134)">
                            <path
                            d="M0.865452 15.9782C0.774373 16.0725 0.723976 16.1988 0.725115 16.3299C0.726254 16.461 0.778839 16.5864 0.871543 16.6791C0.964247 16.7718 1.08965 16.8244 1.22075 16.8255C1.35185 16.8266 1.47815 16.7762 1.57245 16.6852L9.00545 9.25416L16.5845 16.5362C16.6559 16.604 16.7458 16.6493 16.8429 16.6664C16.94 16.6834 17.0399 16.6714 17.1303 16.6319C17.2206 16.5924 17.2972 16.5272 17.3506 16.4443C17.404 16.3615 17.4318 16.2647 17.4305 16.1662C17.4293 16.1005 17.4151 16.0357 17.3889 15.9754C17.3626 15.9152 17.3248 15.8607 17.2775 15.8152L9.71245 8.54616L17.1295 1.13016C17.1759 1.08373 17.2128 1.02861 17.238 0.967932C17.2632 0.907253 17.2762 0.842208 17.2762 0.776511C17.2763 0.710813 17.2634 0.64575 17.2383 0.585036C17.2132 0.524321 17.1764 0.469145 17.13 0.422657C17.0835 0.376169 17.0284 0.33928 16.9677 0.314096C16.907 0.288912 16.842 0.275925 16.7763 0.275879C16.7106 0.275833 16.6455 0.288727 16.5848 0.313825C16.5241 0.338924 16.4689 0.375735 16.4225 0.422157L8.99145 7.85316L1.41345 0.573157C1.36678 0.524802 1.31083 0.486354 1.24896 0.460109C1.18709 0.433865 1.12056 0.420364 1.05335 0.420413C0.986141 0.420461 0.919633 0.434059 0.857799 0.460393C0.795965 0.486726 0.740074 0.525256 0.693468 0.573678C0.646861 0.622101 0.610495 0.679422 0.586542 0.742217C0.56259 0.805012 0.551543 0.871991 0.554062 0.939152C0.556581 1.00631 0.572614 1.07228 0.601203 1.1331C0.629792 1.19393 0.670349 1.24836 0.720452 1.29316L8.28345 8.56116L0.865452 15.9782Z"
                            fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_606_134">
                            <rect width="18" height="17" fill="white" />
                            </clipPath>
                        </defs>
                        </svg>
                    </div>
                    <div class="cart_popup_scroll">
                        <div class="product_wrap">
                            <div class="img_wrap">
                                <a href="#"><img src="https://conversionratestore.github.io/projects/themillionroses/img/test.jpg" alt="" /></a>
                            </div>
                            <div class="inform_wrap">
                                <h2><a href="#">Heart Black Box | 24K Gold & Red Roses</a></h2>
                            <div class="price_wrap">
                                <div class="cart_popup_qty">
                                    <span class="decrement">
                                        <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_606_235)">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M0.5 1C0.5 0.7 0.7 0.5 1 0.5H9C9.13261 0.5 9.25979 0.552678 9.35355 0.646447C9.44732 0.740215 9.5 0.867392 9.5 1C9.5 1.13261 9.44732 1.25979 9.35355 1.35355C9.25979 1.44732 9.13261 1.5 9 1.5H1C0.867392 1.5 0.740215 1.44732 0.646447 1.35355C0.552678 1.25979 0.5 1.13261 0.5 1Z"
                                            fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_606_235">
                                            <rect width="10" height="2" fill="white" />
                                            </clipPath>
                                        </defs>
                                        </svg>
                                    </span>
                                    <input type="number" class="count_var">
                                    <span class="increment">
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_606_238)">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M1 4.5099C0.867392 4.5099 0.740215 4.56258 0.646447 4.65634C0.552678 4.75011 0.5 4.87729 0.5 5.0099C0.5 5.14251 0.552678 5.26968 0.646447 5.36345C0.740215 5.45722 0.867392 5.5099 1 5.5099H4.5L4.51 9.0099C4.51066 9.07556 4.52424 9.14045 4.54997 9.20086C4.57571 9.26127 4.61309 9.31602 4.65998 9.36199C4.70688 9.40795 4.76236 9.44423 4.82328 9.46875C4.88419 9.49327 4.94934 9.50556 5.015 9.5049C5.08066 9.50424 5.14555 9.49066 5.20596 9.46492C5.26637 9.43919 5.32112 9.40181 5.36709 9.35492C5.41305 9.30802 5.44933 9.25253 5.47385 9.19162C5.49837 9.13071 5.51066 9.06556 5.51 8.9999V5.4999L9.01 5.4899C9.07566 5.48924 9.14055 5.47566 9.20096 5.44992C9.26137 5.42419 9.31612 5.38681 9.36209 5.33992C9.40805 5.29302 9.44433 5.23753 9.46885 5.17662C9.49337 5.11571 9.50566 5.05056 9.505 4.9849C9.50434 4.91924 9.49076 4.85435 9.46503 4.79394C9.43929 4.73353 9.40191 4.67877 9.35502 4.63281C9.30812 4.58684 9.25264 4.55057 9.19172 4.52604C9.13081 4.50152 9.06566 4.48924 9 4.4899H5.5L5.49 0.989898C5.48867 0.85729 5.43472 0.73064 5.34002 0.637809C5.24531 0.544979 5.11761 0.493572 4.985 0.494898C4.85239 0.496224 4.72574 0.550174 4.63291 0.64488C4.54008 0.739586 4.48867 0.86729 4.49 0.999898V4.4999L0.99 4.5099H1Z"
                                            fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_606_238">
                                            <rect width="10" height="10" fill="white" />
                                            </clipPath>
                                        </defs>
                                        </svg>
                                    </span>
                                </div>
                                <div class="cart_popup_price">
                                    <span class="my_price">$258,95</span>
                                    <svg class="btn_remove_item" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                        d="M0.576968 11.2788C0.516249 11.3454 0.482651 11.4345 0.48341 11.527C0.484169 11.6196 0.519226 11.7081 0.581028 11.7735C0.642831 11.839 0.726435 11.8761 0.813834 11.8769C0.901233 11.8777 0.985434 11.8421 1.0483 11.7778L6.00363 6.53243L11.0563 11.6727C11.1039 11.7206 11.1639 11.7526 11.2286 11.7646C11.2933 11.7766 11.36 11.7682 11.4202 11.7403C11.4804 11.7124 11.5315 11.6663 11.5671 11.6078C11.6027 11.5494 11.6212 11.4811 11.6203 11.4115C11.6195 11.3651 11.6101 11.3194 11.5926 11.2769C11.5751 11.2343 11.5498 11.1959 11.5183 11.1637L6.47497 6.03267L11.4196 0.797844C11.4506 0.765075 11.4752 0.726164 11.492 0.683332C11.5088 0.6405 11.5175 0.594586 11.5175 0.548211C11.5175 0.501837 11.5089 0.45591 11.4922 0.413052C11.4755 0.370195 11.4509 0.331247 11.42 0.298432C11.389 0.265617 11.3523 0.239578 11.3118 0.221801C11.2714 0.204024 11.228 0.194857 11.1842 0.194824C11.1404 0.194792 11.097 0.203893 11.0566 0.22161C11.0161 0.239326 10.9793 0.265311 10.9483 0.298079L5.9943 5.54349L0.942301 0.404668C0.911184 0.370535 0.873886 0.343395 0.832638 0.324869C0.79139 0.306344 0.747038 0.296814 0.702233 0.296848C0.657427 0.296882 0.613088 0.306481 0.571866 0.325069C0.530643 0.343658 0.493383 0.370855 0.462312 0.405035C0.431241 0.439216 0.406996 0.479678 0.391028 0.524004C0.37506 0.56833 0.367696 0.61561 0.369375 0.663017C0.371054 0.710425 0.381743 0.756987 0.400802 0.799922C0.419861 0.842857 0.4469 0.881283 0.480301 0.912903L5.5223 6.04326L0.576968 11.2788Z"
                                        fill="black" />
                                    </svg>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="product_wrap">
                            <div class="img_wrap">
                                <a href="#"><img src="https://conversionratestore.github.io/projects/themillionroses/img/test.jpg" alt="" /></a>
                            </div>
                            <div class="inform_wrap">
                                <h2><a href="#">Heart Black Box | 24K Gold & Red Roses</a></h2>
                            <div class="price_wrap">
                                <div class="cart_popup_qty">
                                    <span class="decrement">
                                        <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_606_235)">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M0.5 1C0.5 0.7 0.7 0.5 1 0.5H9C9.13261 0.5 9.25979 0.552678 9.35355 0.646447C9.44732 0.740215 9.5 0.867392 9.5 1C9.5 1.13261 9.44732 1.25979 9.35355 1.35355C9.25979 1.44732 9.13261 1.5 9 1.5H1C0.867392 1.5 0.740215 1.44732 0.646447 1.35355C0.552678 1.25979 0.5 1.13261 0.5 1Z"
                                            fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_606_235">
                                            <rect width="10" height="2" fill="white" />
                                            </clipPath>
                                        </defs>
                                        </svg>
                                    </span>
                                    <input type="number" class="count_var">
                                    <span class="increment">
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_606_238)">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M1 4.5099C0.867392 4.5099 0.740215 4.56258 0.646447 4.65634C0.552678 4.75011 0.5 4.87729 0.5 5.0099C0.5 5.14251 0.552678 5.26968 0.646447 5.36345C0.740215 5.45722 0.867392 5.5099 1 5.5099H4.5L4.51 9.0099C4.51066 9.07556 4.52424 9.14045 4.54997 9.20086C4.57571 9.26127 4.61309 9.31602 4.65998 9.36199C4.70688 9.40795 4.76236 9.44423 4.82328 9.46875C4.88419 9.49327 4.94934 9.50556 5.015 9.5049C5.08066 9.50424 5.14555 9.49066 5.20596 9.46492C5.26637 9.43919 5.32112 9.40181 5.36709 9.35492C5.41305 9.30802 5.44933 9.25253 5.47385 9.19162C5.49837 9.13071 5.51066 9.06556 5.51 8.9999V5.4999L9.01 5.4899C9.07566 5.48924 9.14055 5.47566 9.20096 5.44992C9.26137 5.42419 9.31612 5.38681 9.36209 5.33992C9.40805 5.29302 9.44433 5.23753 9.46885 5.17662C9.49337 5.11571 9.50566 5.05056 9.505 4.9849C9.50434 4.91924 9.49076 4.85435 9.46503 4.79394C9.43929 4.73353 9.40191 4.67877 9.35502 4.63281C9.30812 4.58684 9.25264 4.55057 9.19172 4.52604C9.13081 4.50152 9.06566 4.48924 9 4.4899H5.5L5.49 0.989898C5.48867 0.85729 5.43472 0.73064 5.34002 0.637809C5.24531 0.544979 5.11761 0.493572 4.985 0.494898C4.85239 0.496224 4.72574 0.550174 4.63291 0.64488C4.54008 0.739586 4.48867 0.86729 4.49 0.999898V4.4999L0.99 4.5099H1Z"
                                            fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_606_238">
                                            <rect width="10" height="10" fill="white" />
                                            </clipPath>
                                        </defs>
                                        </svg>
                                    </span>
                                </div>
                                <div class="cart_popup_price">
                                    <span class="my_price">$258,95</span>
                                    <svg class="btn_remove_item" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                        d="M0.576968 11.2788C0.516249 11.3454 0.482651 11.4345 0.48341 11.527C0.484169 11.6196 0.519226 11.7081 0.581028 11.7735C0.642831 11.839 0.726435 11.8761 0.813834 11.8769C0.901233 11.8777 0.985434 11.8421 1.0483 11.7778L6.00363 6.53243L11.0563 11.6727C11.1039 11.7206 11.1639 11.7526 11.2286 11.7646C11.2933 11.7766 11.36 11.7682 11.4202 11.7403C11.4804 11.7124 11.5315 11.6663 11.5671 11.6078C11.6027 11.5494 11.6212 11.4811 11.6203 11.4115C11.6195 11.3651 11.6101 11.3194 11.5926 11.2769C11.5751 11.2343 11.5498 11.1959 11.5183 11.1637L6.47497 6.03267L11.4196 0.797844C11.4506 0.765075 11.4752 0.726164 11.492 0.683332C11.5088 0.6405 11.5175 0.594586 11.5175 0.548211C11.5175 0.501837 11.5089 0.45591 11.4922 0.413052C11.4755 0.370195 11.4509 0.331247 11.42 0.298432C11.389 0.265617 11.3523 0.239578 11.3118 0.221801C11.2714 0.204024 11.228 0.194857 11.1842 0.194824C11.1404 0.194792 11.097 0.203893 11.0566 0.22161C11.0161 0.239326 10.9793 0.265311 10.9483 0.298079L5.9943 5.54349L0.942301 0.404668C0.911184 0.370535 0.873886 0.343395 0.832638 0.324869C0.79139 0.306344 0.747038 0.296814 0.702233 0.296848C0.657427 0.296882 0.613088 0.306481 0.571866 0.325069C0.530643 0.343658 0.493383 0.370855 0.462312 0.405035C0.431241 0.439216 0.406996 0.479678 0.391028 0.524004C0.37506 0.56833 0.367696 0.61561 0.369375 0.663017C0.371054 0.710425 0.381743 0.756987 0.400802 0.799922C0.419861 0.842857 0.4469 0.881283 0.480301 0.912903L5.5223 6.04326L0.576968 11.2788Z"
                                        fill="black" />
                                    </svg>
                                </div>
                            </div>
                            </div>
                        </div>

                    </div>
                    <div class="cart_popup_footer">
                        <div class="sub_total_wrap"> 
                            <span>SubTotal</span>
                            <span class="sub_total_price">$699,80</span>
                        </div>
                        <form action="/cart" method="post">
                            <label>
                                Gift Card Message (optional)
                                <textarea form="cart" placeholder="Enter your message"></textarea>
                            </label>
                            <a class="btn_checkout" href="/checkout">Checkout</a>
                        </form>
                    </div>
                </div>
            </div>
        `

        let slideInCartContent = /*html */ ``

        document.head.insertAdjacentHTML("beforeend", style)
        document.body.insertAdjacentHTML("afterbegin", popUp)

        let body = document.body,
            overlay = body.querySelector(".popup_slide_in"),
            btnClose = body.querySelectorAll('[data-close-slide-in]')

        if (document.querySelector('#cart-icon-bubble')) {
            document.querySelector('#cart-icon-bubble').addEventListener('click', (e) => {
                e.preventDefault()
                console.log(`>>>MyCart`)
                onOpenPopup(slideInCartContent)
            })

        }

        btnClose.forEach(el => {
            el.addEventListener("click", (e) => {
                onClosePopup()
            })
        })

        // click on overlay popup
        overlay.addEventListener("click", (e) => {
            if (e.target.matches(".popup_slide_in")) {
                onClosePopup()
            }
        })

        function onOpenPopup(block) {
            overlay.classList.remove("is_hidden")
            body.style.overflow = "hidden"
            body.style.display = "block"

            document.querySelector(".container_popup").insertAdjacentHTML("beforeend", block)
        }

        function onClosePopup() {
            overlay.classList.add("is_hidden")
            body.style.overflow = "auto"


            setTimeout(() => {
                document.querySelector(".content_popup")?.remove()
            }, 1000)
            // 
        }

        if (document.querySelector('.product-form [name="add"]')) {
            document.querySelector('.product-form [name="add"]').addEventListener('click', (e) => {
                e.preventDefault()
                console.log(`>>>>>>>>>>>>>>>>>>>>>>id`, e.target.closest('form').querySelector('[name="id"]').value)
                addToCartCheckout(e.target.closest('form').querySelector('[name="id"]').value)
            })

        }

        //add to cart on checkout
        async function addToCartCheckout(idValue) {
            let formData = {
                items: [
                    {
                        id: idValue,
                        quantity: 1,
                    },
                ],
            }

            await fetch("/cart/add.js", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
                .then((response) => {

                    return response.json()
                })
                .catch((error) => {
                    console.error("Error:", error)
                })
        }

    }
}, 100)