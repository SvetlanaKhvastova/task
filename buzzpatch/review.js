let startFunkReview = setInterval(() => {
  if (document.querySelector(".js-heading .trust-rating")) {
    clearInterval(startFunkReview)

    let styleReveiw = /* html */ `
      <style>
        .trust-rating{
            display: none;
        }

        /*block_first */
        .block_first{
            background: #FFFFFF;
            border-radius: 14px;
            max-width: 315px;
            margin: 0 auto 20px;
            padding: 20px;
        }

        .block_first > p{
            font-weight: 400;
            font-size: 12px !important;
            line-height: 16px !important;
            color: #515151;
            margin-bottom: 5px;
        }

        .block_first > div{
            display: flex;
            align-items: center;
            color: #0E0C0C;
        }

        .block_first > div span:nth-child(1){
            font-weight: 700;
            font-size: 18px;
            line-height: 156%;
            margin-right: 10px;
        }

        .block_first > div span:nth-child(3){
            font-weight: 400;
            font-size: 12px;
            line-height: 133%;
            text-decoration-line: underline;
            margin-left: 5px;
        }

        .block_first > ul{
            display: flex;
            margin: 5px 0 0 !important;
            align-items: center;
            justify-content: space-between;
            gap: 5px;
        }

        .block_first > ul li{
            max-width: 65px;
            max-height: 65px;
            width: 100%;
            height: 100%;
            margin: 0 !important;
        }

        .block_first > ul li img{
            width: 100%;
            height: 100%;
        }

        /* block_second*/
        .block_second{
            margin: 0 22px 64px;
        }

        .block_second > h2,
        .block_third > h2 {
            font-weight: 500;
            font-size: 36px;
            line-height: 100%;
            text-transform: uppercase;
            color: #000000;
            margin-bottom: 15px;
            text-align: center;
        }

        .block_second ul{
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            margin: 0;
        }

        .block_second > ul > li{
            border-radius: 50%;
            list-style: none;
            width: 75px;
            height: 75px;
            background: #FFFFFF;
            border: 3px solid #FF3C7F;
            position: relative;
        }

        .block_second > ul > li::before{
            position: absolute;
            content: '';
            width: 24px;
            height: 24px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: url('https://conversionratestore.github.io/projects/buzzpatch/img/play_arrow.png');
        }

        /*block_third */
        .block_third {
            margin: 64px 30px 0;
        }

        .block_third ul{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            gap: 15px;
            margin: 0;
        }

        .block_third ul li{
            list-style: none;
            width: 30%;
        }

        .block_third ul li img{
            width: 100%;
            height: 100%;
        }

        /* */
        .jdgm-rev-widg__title,
        .jdgm-rev-widg__summary{
            display: none;
        }

        .jdgm-histogram__bar{
            box-shadow: inset 0 0 2px #d9d9d9 !important;
            border-radius: 60px !important;
            margin: 0 16px !important;
        }

        .jdgm-review-widget--small .jdgm-histogram .jdgm-histogram__bar{
            width: 131px !important;
        }

        .jdgm-histogram__bar-content{
            border-radius: 60px 0 0 60px;
            box-shadow: unset !important;
            background: #D9D9D9 !important;
        }

        .jdgm-histogram .jdgm-histogram__row .jdgm-histogram__percentage,
        .jdgm-histogram .jdgm-histogram__row .jdgm-histogram__frequency{
            vertical-align: middle;
            font-weight: 400;
            font-size: 12px;
            line-height: 133%;
            color: #5B5B5B;
            text-decoration-line: underline;
        }

        .jdgm-histogram .jdgm-histogram__row .jdgm-histogram__frequency{
             text-decoration-line: unset;
        }

        .jdgm-star.jdgm--on:before,
        .jdgm-star.jdgm--off:before{
            color: #FFD200;
        }

        .jdgm-star.jdgm--on:before{
            background: url(https://conversionratestore.github.io/projects/buzzpatch/img/full_star.svg);
        }

        #judgeme_product_reviews .jdgm-write-rev-link{
            border: unset !important;
            padding: 0 !important;
            color: #FF3C7F !important;
            background: unset !important;
            text-transform: unset !important;
            margin: 0 !important;
            font-weight: 400;
            font-size: 14px;
            line-height: 171%;
            text-decoration: underline;
            display: inline;2
            font-family: "Roboto", sans-serif;
        }

        .jdgm-rev-widg__sort-wrapper{
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-top: 1px solid #EEEEEE;
            padding: 8px 0 0;
            margin-top: 10px;
        }

        .jdgm-widget .jdgm-rev-widg__body{
            border-top: unset !important;
            padding: 0 !important;
        }

         @media (max-width: 320px){
            .block_first > div span:nth-child(1){
                font-size: 16px;
            }

            .block_second > ul > li{
                width: 60px;
                height: 60px;
            }

            .block_third ul li{
                width: 28%;
            }
         }

      </style>
      `

    let blockFirst = /* html */ `
    <div class="block_first">
      <p>Our customers rate us as</p>
      <div>
        <span>Excellent</span>
        <div>
          <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 0L12.645 6.35942L19.5106 6.90983L14.2798 11.3906L15.8779 18.0902L10 14.5L4.12215 18.0902L5.72025 11.3906L0.489435 6.90983L7.35497 6.35942L10 0Z"
              fill="#FFD200"
            />
          </svg>
          <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 0L12.645 6.35942L19.5106 6.90983L14.2798 11.3906L15.8779 18.0902L10 14.5L4.12215 18.0902L5.72025 11.3906L0.489435 6.90983L7.35497 6.35942L10 0Z"
              fill="#FFD200"
            />
          </svg>
          <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 0L12.645 6.35942L19.5106 6.90983L14.2798 11.3906L15.8779 18.0902L10 14.5L4.12215 18.0902L5.72025 11.3906L0.489435 6.90983L7.35497 6.35942L10 0Z"
              fill="#FFD200"
            />
          </svg>
          <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 0L12.645 6.35942L19.5106 6.90983L14.2798 11.3906L15.8779 18.0902L10 14.5L4.12215 18.0902L5.72025 11.3906L0.489435 6.90983L7.35497 6.35942L10 0Z"
              fill="#FFD200"
            />
          </svg>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_2_162" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="12" height="20">
              <rect width="12" height="20" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_2_162)">
              <path
                d="M10 0L12.645 6.35942L19.5106 6.90983L14.2798 11.3906L15.8779 18.0902L10 14.5L4.12215 18.0902L5.72025 11.3906L0.489435 6.90983L7.35497 6.35942L10 0Z"
                fill="#FFD200"
              />
            </g>
            <mask id="mask1_2_162" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="10" y="0" width="10" height="20">
              <rect x="10" width="10" height="20" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask1_2_162)">
              <path
                d="M10 1.30198L12.1834 6.55144L12.3007 6.83342L12.6051 6.85782L18.2723 7.31216L13.9545 11.0108L13.7225 11.2095L13.7934 11.5066L15.1126 17.0368L10.2606 14.0733L10 13.9141L9.73937 14.0733L4.88743 17.0368L6.2066 11.5066L6.27746 11.2095L6.04552 11.0108L1.72769 7.31216L7.39492 6.85782L7.69934 6.83342L7.81663 6.55144L10 1.30198Z"
                stroke="#FFD200"
              />
            </g>
          </svg>
        </div>
        <span>4.91 (92)</span>
      </div>
      <ul>
        <li><img src="https://conversionratestore.github.io/projects/buzzpatch/img/review1.jpg" alt="child" /></li>
        <li><img src="https://conversionratestore.github.io/projects/buzzpatch/img/review2.jpg" alt="child" /></li>
        <li><img src="https://conversionratestore.github.io/projects/buzzpatch/img/review3.jpg" alt="child" /></li>
        <li><img src="https://conversionratestore.github.io/projects/buzzpatch/img/review4.jpg" alt="child" /></li>
      </ul>
    </div>
    `

    let blockSecond = /* html */ `
    <div class="block_second">
        <h2>Video Reviews</h2>
        <ul>
            <li>
                <!-- <img src="" alt="photo"> -->
            </li>
            <li>
                <!-- <img src="" alt="photo"> -->
            </li>
            <li>
                <!-- <img src="" alt="photo"> -->
            </li>
            <li>
                <!-- <img src="" alt="photo"> -->
            </li>
        </ul>
    </div>
    
    `

    let blockThird = /* html */ `
    <div class="block_third">
        <h2>See it in real life</h2>
        <ul>
            <li>
                <img src="https://conversionratestore.github.io/projects/buzzpatch/img/review5.jpg" alt="people">
            </li>
            <li>
                <img src="https://conversionratestore.github.io/projects/buzzpatch/img/review6.jpg" alt="people">
            </li>
            <li>
                <img src="https://conversionratestore.github.io/projects/buzzpatch/img/review7.jpg" alt="people">
            </li>
            <li>
                <img src="https://conversionratestore.github.io/projects/buzzpatch/img/review8.jpg" alt="people">
            </li>
            <li>
                <img src="https://conversionratestore.github.io/projects/buzzpatch/img/review9.jpg" alt="people">
            </li>
            <li>
                <img src="https://conversionratestore.github.io/projects/buzzpatch/img/review10.jpg" alt="people">
            </li>
            <li>
                <img src="https://conversionratestore.github.io/projects/buzzpatch/img/review11.jpg" alt="people">
            </li>
            <li>
                <img src="https://conversionratestore.github.io/projects/buzzpatch/img/review12.jpg" alt="people">
            </li>
            <li>
                <img src="https://conversionratestore.github.io/projects/buzzpatch/img/review13.jpg" alt="people">
            </li>
        </ul>
    </div>
    `

    document.head.insertAdjacentHTML("beforeend", styleReveiw)
    document.querySelector(".js-heading .trust-rating").insertAdjacentHTML("afterend", blockFirst)
    document.querySelector("#flowers").insertAdjacentHTML("afterbegin", blockSecond)
    document.querySelector("#ingredients").insertAdjacentHTML("beforebegin", blockThird)

    if (document.querySelector(".jdgm-widget-actions-wrapper")) {
      document.querySelector(".jdgm-sort-dropdown-wrapper").after(document.querySelector(".jdgm-widget-actions-wrapper"))
    }
  }
}, 10)
