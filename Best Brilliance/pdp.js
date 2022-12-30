
let startFunk = setInterval(() => {
    if (document.querySelector('#shopify-section-product-template')) {
        clearInterval(startFunk)

        let dir = 'https://conversionratestore.github.io/projects/best_brilliance//img/'

        let styles = /*html */`
        <style>
            /*descr_box */
            .descr_box{
                padding: 94px 80px 56px;
                background: #FCFBFA;
                position: relative;
            }
            .video_img {
                position: absolute;
                width: 100px;
                height: 100px;
                background: #FCFBFA;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                left: 50%;
                transform: translateX(-50%);
                top: -50px;
            }
            .video_img img{
                width: 40px;
            }
            .full_descr_block{
                display: flex;
            }
            .full_descr_block .img_wrap{
                max-width: 600px;
            }
            .inform_wrap{
                margin-left: 80px;
                max-width: 520px;
                flex: 0 0 520px;
            }
            .inform_wrap h2{
                font-weight: 500;
                font-size: 24px;
                line-height: 31px;
                color: #242424;
                margin: 0 0 16px;
            }
            .inform_wrap > p{
                font-weight: 400;
                font-size: 14px;
                line-height: 23px;
                color: #242424;
                margin-bottom: 29px;
            }
            .answer_questions_block{
                position: relative;
                padding: 33px 20px;
                border: 1px solid #E0E0E0;
                border-radius: 10px;
            }
            .answer_questions_block > p{
                position: absolute;
                top: -10px;
                left: 18px;
                font-weight: 500;
                font-size: 15px;
                line-height: 25px;
                color: #242424;
                margin: 0;
                padding: 0 16px;
                background: #FCFBFA;
            }
            .answer_questions_block > p:last-child{
                top: unset;
                bottom: -8px;
                font-size: 14px;
                line-height: 18px;
            }
            .answer_questions_block ul{
                list-style: none;
            }
            .answer_questions_block ul li{
                display: flex;
                align-items: center;
                justify-content: flex-start;
                font-weight: 400;
                font-size: 14px;
                line-height: 23px;
                color: #242424;
            }
            .answer_questions_block ul li + li{
                margin-top: 8px;
            }
            .list_style_circle{
                display: block;
                background: #242424;
                border-radius: 50%;
                width: 4px;
                height: 4px;
                margin: 8px 10px 0 0;
                flex: 0 0 4px;
            }
            .inform_wrap button{
                max-width: 294px;
                width: 100%;
                height: 50px;
                background: #C3D3FF;
                border-radius: 5px;
                font-weight: 500;
                font-size: 14px;
                line-height: 45px;
                color: #313131;
                margin-top: 37px;
            }
            .other_questions_block{
                margin: 56px 0 0;
                text-align: center;
            }
            .other_questions_block h3{
                font-weight: 500;
                font-size: 24px;
                line-height: 31px;
                text-align: center;
                color: #242424;
                margin: 0 0 8px;
                font-family: 'ABCReproMedium';
            }
            .other_questions_block > p{
                font-family: 'ABCRepro';
                font-weight: 400;
                font-size: 14px;
                line-height: 23px;
                color: #242424;
                margin: 0 0 20px;
            }
            .other_questions_block ul{
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .other_questions_block ul li{
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .other_questions_block ul li + li{
                margin-left: 28px;
                margin-left: 28px;
                border-left: 1px solid #E0E0E0;
                padding-left: 28px;
            }
            .other_questions_block ul li a{
                margin-top: 8px;
                text-decoration: underline;
                font-weight: 500;
                font-size: 18px;
                line-height: 33px;
                color: #313131;
            }
            .other_questions_block .img_wrap{
                max-width: 40px;
                max-height: 40px;
                width: 100%;
                height: 100%;
            }
            /*new_present_box */
            .new_present_box{
                position: relative;
                display: flex;
                border: 1px dashed #C3D3FF;
                border-radius: 5px;
                padding: 19px 12px;
                margin: 16px 0 20px;
            }
            .present_descr_wrap h3{
                font-weight: 500;
                font-size: 14px;
                line-height: 18px;
                color: #313131;
                margin-bottom: 4px;
            }
            .present_descr_wrap > p{
                display: flex;
                align-items: center;
            }
            .present_descr_wrap > p span{
                font-weight: 400;
                font-size: 12px;
                line-height: 14px;
                text-transform: capitalize;
                color: #666666;
            }
            .present_descr_wrap > p span:nth-child(2){
                position: relative;
                padding: 0 10px;
            }
            .present_descr_wrap > p span:nth-child(2)::after{
                position: absolute;
                content: "";
                display: block;
                width: 3px;
                height: 3px;
                background: #666666;
                border-radius: 50%;
                right: 3px;
                top: 50%;
                transform: translateY(-50%);
            }
            .present_descr_wrap > p span:nth-child(2)::before{
                position: absolute;
                content: "";
                display: block;
                width: 3px;
                height: 3px;
                background: #666666;
                border-radius: 50%;
                left: 3px;
                top: 50%;
                transform: translateY(-50%);
            }
            .present_absolute{
                position: absolute;
                right: 12px;
                top: 13px;
                display: flex;
            }
            .present_absolute p{
                font-weight: 400;
                font-size: 12px;
                line-height: 14px;
                text-transform: capitalize;
                color: #83B5A6;
                margin: 0 0 0 4px;
            }
            /*main pdp */
            .features--heading-large .u-h5,
            .features--heading-large .Rte h5{
                color: #666666;
                margin: 4px 0 6px;
            }
            .sku_diamond{
                margin-bottom: 20px;
                padding-bottom: 8px;
                border-bottom: 1px solid #E0E0E0;
            }
            .sku_diamond > span:nth-child(1){
                font-weight: 400;
                font-size: 12px;
                line-height: 20px;
                color: #666666;
            }
            .sku_diamond > span:nth-child(2){
                font-weight: 400;
                font-size: 12px;
                line-height: 20px;
                color: #83B5A6;
                position: relative;
                padding-left: 8px;
            }
            .sku_diamond > span:nth-child(2):after{
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                content: '';
                width: 3px;
                height: 2px;
                background: #666666;
                border-radius: 50%;
            }
            .pdp-description{
                display: none;
            }
        </style>
        `
        let newBlock = /*html */`
          <section class="descr_box">
            <div class="video_img"><img src="${dir}video_camera.png" alt="video icon"></div>
            <div class="full_descr_block">
                <div class="img_wrap">
                    <img src="${dir}details_img.jpg" alt="laptop">
                </div>
                <div class="inform_wrap">
                    <h2>Find the perfect ring with Personal Online Jeweler</h2>
                    <p>Jewelery is a big deal - especially when you're choosing a ring for a special life occasion.</p>
                    <p>With a personal Zoom consultation, which gives you direct access to aan expert jeweler, you may easily find
                    the ring of your dreams.</p>
                    <div class="answer_questions_block">
                        <p>Your personal online jeweler can answer questions like:</p>
                        <ul>
                            <li><span class="list_style_circle"></span>What certificate and warranty are included</li>
                            <li><span class="list_style_circle"></span>How to protect your purchase</li>
                            <li><span class="list_style_circle"></span>How to pay with installments</li>
                            <li><span class="list_style_circle"></span>How to choose the right diamond and shape</li>
                            <li><span class="list_style_circle"></span>What’s the difference between natural, lab grown diamonds and moissainite stones</li>
                        </ul>
                        <p>And, yes, you can even see a real ring example!</p>
                    </div>

                    <button>Book personal appointment with expert</button>
                </div>
            </div>
            <div class="other_questions_block">
                <h3>Other Questions?</h3>
                <p>We are here <b>24/7</b> to answer question you may have.</p>
                <ul>
                    <li>
                    <div class="img_wrap">
                        <img src="${dir}tel.svg" alt="tel">
                    </div>
                    <a href="tel:+18669784466">+1 (866) 978-4466</a>
                    </li>
                    <li>
                        <div class="img_wrap">
                            <img src="${dir}chat.svg" alt="chat">
                        </div>
                        <a href="#">Live chat 24/7</a>
                    </li>
                    </ul>
                </div>
            </section>
        `

        let presentBlock = /*html */`
            <div class="new_present_box">
                <div class="img_wrap">
                    <img src="" alt="">
                </div>
                <div class="present_descr_wrap">
                    <h3>Moissanite Earrings </h3>
                    <p><span>0.5 Carat</span><span>Round Earrings</span><span>14K White Gold</span></p>
                </div>
                <div class="present_absolute">
                    <img src="" alt="present box">
                    <p>Free Complimentary Gift </p>
                </div>
            </div>
        `

        document.head.insertAdjacentHTML('beforeend', styles)
        document.querySelector('#section-text-with-image-product')?.insertAdjacentHTML('beforebegin', newBlock)
        document.querySelector('#cb-atc-btn')?.insertAdjacentHTML('beforebegin', presentBlock)

    }
}, 100)