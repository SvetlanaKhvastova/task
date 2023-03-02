let myFunk = setInterval(() => {
  if (document.querySelector("#webform-submission-grantme-program-assessment-add-form")) {
    clearInterval(myFunk)

    let newStyle = /*html */ `
    <style>
        .row{
            margin-left: 0 !important;
            margin-right: 0 !important;
        }
        .col-md-4{
            padding-left: 0 !important;
            padding-right: 0 !important;
        }
        .panel-body{
            padding-left: 20px;
            padding-right: 20px;
        }
        #edit-qa13-wrap{
            margin-bottom: 0 !important;
            display: none;
        }
        #edit-processed-text-10,
        #edit-processed-text-44 .scholarship-eligibility-quiz-quote,
        #edit-processed-text-12,
        #edit-cards-prev--15{
            display: none !important;
        }
        .path-scholarship-eligibility-quiz .webform-submission-form label{
            margin-bottom: 6px;
        }
        form #edit-actions-10-submit{
            width: 100%;
            font-size: 16px;
            line-height: 19px;
            height: 44px;
            margin: 0;
        }
        /*loader_wrap */
        .loader_wrap{
            padding: 44px 20px 41px;
            margin: 0;
            list-style: none;
        }
        .loader_wrap li {
            position: relative;
            padding: 0 0 0 29px;
            transition: 0.3s;
        }
        .loader_wrap li::before{
            position: absolute;
            content: '';
            width: 16px;
            height: 16px;
            background: url(https://conversionratestore.github.io/projects/grantme/img/full_load.svg) no-repeat;
            background-size: contain;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
        }
        @-webkit-keyframes infinite-spinning {
            from {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
            }
            to {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
            }
        }
        @keyframes infinite-spinning {
            from {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
            }
            to {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
            }
        }
        .loader_wrap li.active::before{
            -webkit-animation: infinite-spinning 2s infinite linear;
            animation: infinite-spinning 2s infinite linear;
            background: url(https://conversionratestore.github.io/projects/grantme/img/part_load.svg) no-repeat;
            background-size: contain;
        }
        .loader_wrap li.finish::before{
            background: url(https://conversionratestore.github.io/projects/grantme/img/checked.svg) no-repeat;
            background-size: contain;
            height: 10px;
        }
        .loader_wrap li span{
            font-weight: 400;
            font-size: 18px;
            line-height: 26px;
            color: #8B8B8B;
        }
        .loader_wrap li.finish span{
            color: #2B3D50;
        }
        .loader_wrap li + li{
            margin-top: 16px;
        }
        /*guarantee_block */
        .guarantee_block{
            margin-bottom: 24px;
        }
        .grant_me_wrap{
            background: #2B3D50;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 16px;
            margin-bottom: 16px;
        }
        .grant_me_wrap p{
            font-weight: 400;
            font-size: 15px;
            line-height: 26px;
            color: #FFFFFF;
            margin: 0 0 0 16px;
        }
        .benefits_wrap > p{
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;
            color: #2B3D50;
            margin-bottom: 16px;
        }
        .benefits_wrap ul{
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .benefits_wrap ul li {
            position: relative;
            padding-left: 52px;
        }
        .benefits_wrap ul li::before{
            position: absolute;
            content: '';
            width: 40px;
            height: 40px;
            background: url(https://conversionratestore.github.io/projects/grantme/img/graduation_hat.svg) no-repeat;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
        }
        .benefits_wrap ul li:nth-child(2):before{
            background: url(https://conversionratestore.github.io/projects/grantme/img/scholarship.svg) no-repeat;
        }
        .benefits_wrap ul li:nth-child(3):before{
            background: url(https://conversionratestore.github.io/projects/grantme/img/product.svg) no-repeat;
        }
        .benefits_wrap ul li:nth-child(4):before{
            background: url(https://conversionratestore.github.io/projects/grantme/img/diploma.svg) no-repeat;
        }
        .benefits_wrap ul li + li{
            margin-top: 12px;
        }
        .benefits_wrap ul li span{
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #2B3D50;
        }
        /*reviews_block */
        .reviews_block{
            padding: 20px 20px 40px;
        }
        ul.new_reviews{
            padding: 0;
            margin: 0;
            display: flex;
            gap: 20px;
            flex-direction: column;
            list-style: none;
        }
        ul.new_reviews li{
            background: #FFFFFF;
            border-radius: 6px;
            padding: 20px;
        }
        ul.new_reviews li > p{
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #2B3D50;
            margin: 0;
        }
        ul.new_reviews li > p.date_experience_var{
            margin-top: 16px;
        }
        .inform_box{
            display: flex;
            position: relative;
        }
        .inform_box .img_wrap{
            max-width: 50px;
            max-height: 50px;
            margin-right: 16px;
        }
        .inform_box .img_wrap img{
            width: 100%;
            height: 100%;
        }
        .name_var{
            font-weight: 700;
            font-size: 16px;
            line-height: 19px;
            color: #2B3D50;
            margin: 0 0 6px;
        }
        .revw_var{
            font-weight: 700;
            font-size: 14px;
            line-height: 17px;
            color: #8B8B8B;
            margin: 0;
        }
        .local_wrap{
            position: absolute;
            display: flex;
            align-items: center;
            right: 0;
            bottom: 8px;
        }
        .local_var{
            font-weight: 700;
            font-size: 14px;
            line-height: 17px;
            color: #2B3D50;
            margin: 0 0 0 6px;
        }
        .stars_box{
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #F3F3F3;
            margin: 16px -20px;
            padding: 16px 20px;
        }
        .stars_var{
            display: flex;
            align-items: center;
        }
        .stars_var img{
            max-width: 88px;
            max-height: 16px;
        }
        .stars_var span{
            font-weight: 700;
            font-size: 16px;
            line-height: 19px;
            color: #2B3D50;
            margin: 0 0 0 4px;
        }
        .date_var{
            display: flex;
            align-items: center;
        }
        .date_var span{
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: #2B3D50;
            margin: 0 0 0 6px;
        }
        .load_more_btn{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 44px;
            font-weight: 700;
            font-size: 14px;
            line-height: 17px;
            letter-spacing: 0.05em;
            text-align: center;
            color: #FFFFFF;
            margin-top: 20px;
            border: 2px solid #FFFFFF;
            border-radius: 6px;
        }
        [data-count="3"]{
            display: none;
        }
        .policy_var{
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
            color: #2B3D50;
        }
        .policy_var a{
            color: rgba(61, 120, 186, 1);
            text-decoration: underline;
        }
        .is_hidden{
            display: none;
        }
    </style>
    `
    let parent = false
    let text1 = ""
    let text2 = "you're"
    let text3 = "you"
    let text4 = ""
    let text5 = "you"
    let text6 = ""
    let text7 = "you"

    if (parent) {
      text1 = "child’s"
      text2 = "you child is"
      text3 = "your child"
      text4 = "child’s"
      text5 = "your child"
      text6 = "child"
      text7 = "your child"
    }

    let reviews = /*html */ `
    <div class="reviews_block">
        <ul class="new_reviews"></ul>
        <span class="load_more_btn">LOAD MORE</span>
    </div>
    `

    let loaderWrap = /*html */ `
    <ul class="loader_wrap">
      <li class=""><span>Reviewing your responses</span></li>
      <li class=""><span>Calculating your ${text1} score</span></li>
      <li><span>Assessing admission chances</span></li>
      <li><span>Searching for scholarship opportunities</span></li>
      <li><span>Checking how much funding ${text2} eligible for</span></li>
      <li><span>Preparing your results</span></li>
    </ul>
      `

    let guaranteeBlock = /*html */ `
    <div class="guarantee_block">
      <div class="grant_me_wrap">
        <div>
          <svg width="57" height="57" viewBox="0 0 55 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M27.4401 9.44336C18.9211 9.44336 12.0049 16.3596 12.0049 24.8786C12.0049 33.3977 18.9211 40.3139 27.4401 40.3139C35.9592 40.3139 42.8754 33.3977 42.8754 24.8786C42.8754 16.3596 35.9592 9.44336 27.4401 9.44336ZM27.4401 11.8186C34.6484 11.8186 40.5001 17.6703 40.5001 24.8786C40.5001 32.0869 34.6484 37.9386 27.4401 37.9386C20.2319 37.9386 14.3801 32.0869 14.3801 24.8786C14.3801 17.6703 20.2319 11.8186 27.4401 11.8186Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M28.5726 14.9281C28.3754 14.5136 27.9586 14.25 27.5002 14.25C27.0418 14.25 26.625 14.5136 26.4279 14.9281L23.9757 20.0866L18.3113 20.824C17.8577 20.8834 17.4777 21.1992 17.3352 21.6351C17.1939 22.0709 17.3162 22.5494 17.6487 22.8641L21.7978 26.79L20.7493 32.4057C20.665 32.8558 20.8478 33.3141 21.2183 33.5837C21.5888 33.8533 22.0817 33.8853 22.4842 33.6656L27.5002 30.9332L32.5162 33.6656C32.9188 33.8853 33.4116 33.8533 33.7821 33.5837C34.1526 33.3141 34.3355 32.8558 34.2512 32.4057L33.2026 26.79L37.3517 22.8641C37.6842 22.5494 37.8065 22.0709 37.6652 21.6351C37.5227 21.1992 37.1427 20.8834 36.6891 20.824L31.0247 20.0866L28.5726 14.9281ZM27.5002 18.2044L29.1568 21.6909C29.3301 22.0542 29.6769 22.306 30.0759 22.3583L33.9044 22.857L31.1007 25.5099C30.8074 25.7877 30.6756 26.1939 30.7492 26.5905L31.4582 30.3846L28.0678 28.538C27.714 28.3456 27.2865 28.3456 26.9326 28.538L23.5423 30.3846L24.2512 26.5905C24.3249 26.1939 24.193 25.7877 23.8997 25.5099L21.096 22.857L24.9245 22.3583C25.3235 22.306 25.6703 22.0542 25.8437 21.6909L27.5002 18.2044Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.7358 37.5085L1.33149 42.914C0.577426 43.6669 0.307859 44.7772 0.629671 45.7925C0.952672 46.8079 1.81478 47.5584 2.86453 47.7377L7.47204 48.5285L8.2629 53.136C8.44221 54.1858 9.19271 55.0479 10.208 55.3709C11.2233 55.6927 12.3337 55.4231 13.0865 54.6691L21.8669 45.8887C22.317 46.0063 22.7326 46.2545 23.0532 46.619C23.3335 46.9373 23.6327 47.2781 23.9344 47.6201C24.8357 48.6449 26.1348 49.2327 27.5004 49.2327C28.866 49.2327 30.1652 48.6449 31.0665 47.6201C31.3681 47.2781 31.6673 46.9373 31.9476 46.619C32.2682 46.2545 32.6838 46.0063 33.1339 45.8887L41.9143 54.6691C42.6672 55.4231 43.7775 55.6927 44.7928 55.3697C45.8081 55.0479 46.5586 54.1858 46.7379 53.136L47.5288 48.5285L52.1363 47.7377C53.186 47.5584 54.0482 46.8079 54.3712 45.7925C54.693 44.7772 54.4234 43.6669 53.6693 42.914L48.265 37.5085C48.3636 37.3732 48.455 37.2318 48.5405 37.0846C49.2222 35.903 49.3635 34.484 48.9265 33.1908C48.7816 32.7585 48.6367 32.3298 48.5002 31.9273C48.1938 31.02 48.4622 30.0166 49.1818 29.3848C49.5 29.1046 49.8409 28.8053 50.1829 28.5037C51.2077 27.6024 51.7955 26.3033 51.7955 24.9377C51.7955 23.572 51.2077 22.2729 50.1829 21.3716C49.8409 21.07 49.5 20.7707 49.1818 20.4905C48.4622 19.8587 48.1938 18.8553 48.5002 17.948C48.6367 17.5455 48.7816 17.1168 48.9265 16.6845C49.3635 15.3913 49.2222 13.9723 48.5405 12.7907C47.8577 11.608 46.6987 10.7767 45.3604 10.5083C44.9139 10.4181 44.4698 10.329 44.0542 10.2459C43.1149 10.0571 42.381 9.32322 42.1922 8.38391C42.1091 7.96828 42.02 7.52415 41.9297 7.07765C41.6614 5.73934 40.8301 4.58036 39.6474 3.89755C38.4658 3.21592 37.0467 3.0746 35.7536 3.5116C35.3213 3.65647 34.8926 3.80136 34.49 3.93792C33.5828 4.24429 32.5793 3.97591 31.9476 3.25629C31.6673 2.93804 31.3681 2.59721 31.0665 2.25521C30.1652 1.23039 28.866 0.642578 27.5004 0.642578C26.1348 0.642578 24.8357 1.23039 23.9344 2.25521C23.6327 2.59721 23.3335 2.93804 23.0532 3.25629C22.4215 3.97591 21.4181 4.24429 20.5108 3.93792C20.1082 3.80136 19.6795 3.65647 19.2473 3.5116C17.9541 3.0746 16.535 3.21592 15.3535 3.89755C14.1707 4.58036 13.3395 5.73934 13.0711 7.07765C12.9808 7.52415 12.8918 7.96828 12.8087 8.38391C12.6198 9.32322 11.886 10.0571 10.9467 10.2459C10.531 10.329 10.0869 10.4181 9.6404 10.5083C8.30209 10.7767 7.14311 11.608 6.4603 12.7907C5.77868 13.9723 5.63735 15.3913 6.07435 16.6845C6.21922 17.1168 6.36411 17.5455 6.50067 17.948C6.80705 18.8553 6.53867 19.8587 5.81904 20.4905C5.50079 20.7707 5.15996 21.07 4.81796 21.3716C3.79315 22.2729 3.20533 23.572 3.20533 24.9377C3.20533 26.3033 3.79315 27.6024 4.81796 28.5037C5.15996 28.8053 5.50079 29.1046 5.81904 29.3848C6.53867 30.0166 6.80705 31.02 6.50067 31.9273C6.36411 32.3298 6.21922 32.7585 6.07435 33.1908C5.63735 34.484 5.77868 35.903 6.4603 37.0846C6.5458 37.2318 6.63723 37.3732 6.7358 37.5085ZM46.4185 39.0214C46.0836 39.177 45.7297 39.2933 45.3604 39.367C44.9139 39.4572 44.4698 39.5463 44.0542 39.6294C43.1149 39.8182 42.381 40.5521 42.1922 41.4914C42.1091 41.907 42.02 42.3512 41.9297 42.7977C41.6614 44.136 40.8301 45.295 39.6474 45.9778C38.9016 46.4088 38.0609 46.6238 37.2165 46.6131L43.5934 52.99C43.7193 53.1158 43.9045 53.161 44.0732 53.1064C44.243 53.0529 44.3677 52.9092 44.3974 52.7346L45.3296 47.2995C45.4151 46.8031 45.8033 46.4148 46.2997 46.3293L51.7349 45.3971C51.9095 45.3674 52.0532 45.2427 52.1066 45.0729C52.1612 44.9043 52.1161 44.719 51.9902 44.5932L46.4185 39.0214ZM8.58235 39.0214L3.01062 44.5932C2.88474 44.719 2.83959 44.9043 2.89421 45.0729C2.94765 45.2427 3.09136 45.3674 3.26592 45.3971L8.70111 46.3293C9.19748 46.4148 9.58578 46.8031 9.67128 47.2995L10.6035 52.7346C10.6332 52.9092 10.7579 53.0529 10.9277 53.1064C11.0963 53.161 11.2815 53.1158 11.4074 52.99L17.7843 46.6131C16.94 46.6238 16.0992 46.4088 15.3535 45.9778C14.1707 45.295 13.3395 44.136 13.0711 42.7977C12.9808 42.3512 12.8918 41.907 12.8087 41.4914C12.6198 40.5521 11.886 39.8182 10.9467 39.6294C10.531 39.5463 10.0869 39.4572 9.6404 39.367C9.27109 39.2933 8.91722 39.177 8.58235 39.0214ZM25.7168 3.82391C26.168 3.3121 26.8176 3.01758 27.5004 3.01758C28.1832 3.01758 28.8328 3.3121 29.2841 3.82391C29.5845 4.1671 29.8837 4.50671 30.164 4.82496C31.4299 6.26302 33.4344 6.80097 35.25 6.18822C35.6514 6.05166 36.0813 5.90677 36.5135 5.7619C37.1595 5.5434 37.8685 5.61348 38.4599 5.95429C39.0512 6.29629 39.4669 6.87459 39.601 7.54434C39.6913 7.99203 39.7804 8.43617 39.8635 8.8518C40.2399 10.7292 41.7088 12.1981 43.5863 12.5746C44.0019 12.6577 44.446 12.7468 44.8937 12.837C45.5635 12.9712 46.1418 13.3868 46.4838 13.9782C46.8246 14.5696 46.8947 15.2785 46.6762 15.9245C46.5313 16.3568 46.3864 16.7867 46.2499 17.188C45.6371 19.0037 46.1751 21.0082 47.6131 22.2741C47.9314 22.5543 48.271 22.8536 48.6142 23.154C49.126 23.6053 49.4205 24.2548 49.4205 24.9377C49.4205 25.6205 49.126 26.2701 48.6142 26.7213C48.271 27.0217 47.9314 27.321 47.6131 27.6012C46.1751 28.8671 45.6371 30.8716 46.2499 32.6873C46.3864 33.0887 46.5313 33.5185 46.6762 33.9508C46.8947 34.5968 46.8246 35.3057 46.4838 35.8971C46.1418 36.4885 45.5635 36.9041 44.8937 37.0383C44.446 37.1285 44.0019 37.2176 43.5863 37.3007C41.7088 37.6772 40.2399 39.1461 39.8635 41.0235C39.7804 41.4391 39.6913 41.8833 39.601 42.331C39.4669 43.0007 39.0512 43.579 38.4599 43.921C37.8685 44.2618 37.1595 44.3319 36.5135 44.1134C36.0813 43.9685 35.6514 43.8237 35.25 43.6871C33.4344 43.0743 31.4299 43.6123 30.164 45.0504C29.8837 45.3686 29.5845 45.7082 29.2841 46.0514C28.8328 46.5632 28.1832 46.8577 27.5004 46.8577C26.8176 46.8577 26.168 46.5632 25.7168 46.0514C25.4163 45.7082 25.1171 45.3686 24.8368 45.0504C23.571 43.6123 21.5665 43.0743 19.7508 43.6871C19.3494 43.8237 18.9195 43.9685 18.4873 44.1134C17.8413 44.3319 17.1323 44.2618 16.541 43.921C15.9496 43.579 15.534 43.0007 15.3998 42.331C15.3095 41.8833 15.2205 41.4391 15.1373 41.0235C14.7609 39.1461 13.292 37.6772 11.4145 37.3007C10.9989 37.2176 10.5548 37.1285 10.1071 37.0383C9.43735 36.9041 8.85905 36.4885 8.51705 35.8971C8.17623 35.3057 8.10615 34.5968 8.32465 33.9508C8.46952 33.5185 8.61441 33.0887 8.75097 32.6873C9.36372 30.8716 8.82577 28.8671 7.38771 27.6012C7.06946 27.321 6.72985 27.0217 6.38666 26.7213C5.87485 26.2701 5.58033 25.6205 5.58033 24.9377C5.58033 24.2548 5.87485 23.6053 6.38666 23.154C6.72985 22.8536 7.06946 22.5543 7.38771 22.2741C8.82577 21.0082 9.36372 19.0037 8.75097 17.188C8.61441 16.7867 8.46952 16.3568 8.32465 15.9245C8.10615 15.2785 8.17623 14.5696 8.51705 13.9782C8.85905 13.3868 9.43735 12.9712 10.1071 12.837C10.5548 12.7468 10.9989 12.6577 11.4145 12.5746C13.292 12.1981 14.7609 10.7292 15.1373 8.8518C15.2205 8.43617 15.3095 7.99203 15.3998 7.54434C15.534 6.87459 15.9496 6.29629 16.541 5.95429C17.1323 5.61348 17.8413 5.5434 18.4873 5.7619C18.9195 5.90677 19.3494 6.05166 19.7508 6.18822C21.5665 6.80097 23.571 6.26302 24.8368 4.82496C25.1171 4.50671 25.4163 4.1671 25.7168 3.82391Z"
              fill="white"
            />
          </svg>
        </div>
        <p><b>GrantMe students are guaranteed admission to their top universities.</b> See if ${text3} qualify.</p>
      </div>
      <div class="benefits_wrap">
        <p>Your results are ready. You’ll get:</p>
        <ul>
          <li><span>Your ${text4} current chances of getting into your ideal university</span></li>
          <li><span>An estimate of how much funding ${text5} qualify for</span></li>
          <li><span>A roadmap for maximizing your ${text6} acceptance chances</span></li>
          <li><span>Strategic tools that will help ${text7} graduate debt-free</span></li>
        </ul>
      </div>
    </div>
    `

    let arrReviews = {
      "Thomas Satosek": [
        `https://conversionratestore.github.io/projects/grantme/img/review1.png`,
        "2 reviews",
        `US`,
        5,
        `Feb 17, 2023`,
        `<b>One of the best decisions I have made</b> I think that this program has been one of the best decisions I have ever made. GrantMe and the everyone on the team, from the editors to the advisors really try their hardest to make you succeed. They are all very friendly and extremely helpful. Amy my advisor, was extremely helpful, and she really tried her hardest and pushed me to be successful. At our meetings she would always put on a friendly smile and worked with me rather than for or directing me.To the rest of the team, just keep up the great work!`,
        `Date of experience: February 16, 2023`,
        "1",
      ],
      "Tula quian sarsons": [
        `https://conversionratestore.github.io/projects/grantme/img/review2.png`,
        "2 reviews",
        `US`,
        5,
        `Feb 21, 2023`,
        `<b>My experience so far with Grant Me Canada.</b> My Grant Me helper has been so wonderful to work with. Staring out with Grant Me, I knew so little about applying for scholarships and grants, at school I had only been told that there were very few I could apply for. But with their help, I've already learned so much in just the past two weeks! I'm super lucky to be working with Grant Me Canada and my helper and I believe that I'll have a super bright future continuing with them.`,
        `Date of experience: February 24, 2023`,
        "2",
      ],
      "Thomas Satosek ": [
        `https://conversionratestore.github.io/projects/grantme/img/review1.png`,
        "2 reviews",
        `US`,
        5,
        `Jan 5, 2023`,
        `<b>Great for helping students with applications</b> GrantMe is a great tool for any student that wants help with University or Scholarship applications. They give it to you on one easy to use website and all the resources that you will ever need to succeed. My only complaint is the three or four texts and emails I get for my appointments.`,
        `Date of experience: January 04, 2023`,
        "3",
      ],
    }

    function setReviews(name, img, revw, local, star, date, descr, dateExperience, count) {
      return `<li data-count="${count}">
                <div class="inform_box">
                    <div class="img_wrap">
                        <img src="${img}" alt=" img ${name}" />
                    </div>
                    <div class="name_wrap">
                        <p class="name_var">${name}</p>
                        <span class="revw_var">${revw}</span>
                    </div>
                    <div class="local_wrap">
                        <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.95312 14.4766C5.19922 14.8594 5.77344 14.8594 6.01953 14.4766C10.0117 8.73438 10.75 8.13281 10.75 6C10.75 3.10156 8.39844 0.75 5.5 0.75C2.57422 0.75 0.25 3.10156 0.25 6C0.25 8.13281 0.960938 8.73438 4.95312 14.4766ZM5.5 8.1875C4.26953 8.1875 3.3125 7.23047 3.3125 6C3.3125 4.79688 4.26953 3.8125 5.5 3.8125C6.70312 3.8125 7.6875 4.79688 7.6875 6C7.6875 7.23047 6.70312 8.1875 5.5 8.1875Z"
                            fill="#2B3D50"
                        />
                        </svg>
                        <span class="local_var">${local}</span>
                    </div>
                </div>
                <div class="stars_box">
                    <div class="stars_var">
                        <img src="https://conversionratestore.github.io/projects/grantme/img/stars.png" alt="stars" />
                        <span>${star}</span>
                    </div>
                    <div class="date_var">
                        <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.375 13.4375C0.375 14.1758 0.949219 14.75 1.6875 14.75H11.3125C12.0234 14.75 12.625 14.1758 12.625 13.4375V6H0.375V13.4375ZM9.125 8.07812C9.125 7.91406 9.26172 7.75 9.45312 7.75H10.5469C10.7109 7.75 10.875 7.91406 10.875 8.07812V9.17188C10.875 9.36328 10.7109 9.5 10.5469 9.5H9.45312C9.26172 9.5 9.125 9.36328 9.125 9.17188V8.07812ZM9.125 11.5781C9.125 11.4141 9.26172 11.25 9.45312 11.25H10.5469C10.7109 11.25 10.875 11.4141 10.875 11.5781V12.6719C10.875 12.8633 10.7109 13 10.5469 13H9.45312C9.26172 13 9.125 12.8633 9.125 12.6719V11.5781ZM5.625 8.07812C5.625 7.91406 5.76172 7.75 5.95312 7.75H7.04688C7.21094 7.75 7.375 7.91406 7.375 8.07812V9.17188C7.375 9.36328 7.21094 9.5 7.04688 9.5H5.95312C5.76172 9.5 5.625 9.36328 5.625 9.17188V8.07812ZM5.625 11.5781C5.625 11.4141 5.76172 11.25 5.95312 11.25H7.04688C7.21094 11.25 7.375 11.4141 7.375 11.5781V12.6719C7.375 12.8633 7.21094 13 7.04688 13H5.95312C5.76172 13 5.625 12.8633 5.625 12.6719V11.5781ZM2.125 8.07812C2.125 7.91406 2.26172 7.75 2.45312 7.75H3.54688C3.71094 7.75 3.875 7.91406 3.875 8.07812V9.17188C3.875 9.36328 3.71094 9.5 3.54688 9.5H2.45312C2.26172 9.5 2.125 9.36328 2.125 9.17188V8.07812ZM2.125 11.5781C2.125 11.4141 2.26172 11.25 2.45312 11.25H3.54688C3.71094 11.25 3.875 11.4141 3.875 11.5781V12.6719C3.875 12.8633 3.71094 13 3.54688 13H2.45312C2.26172 13 2.125 12.8633 2.125 12.6719V11.5781ZM11.3125 2.5H10V1.1875C10 0.96875 9.78125 0.75 9.5625 0.75H8.6875C8.44141 0.75 8.25 0.96875 8.25 1.1875V2.5H4.75V1.1875C4.75 0.96875 4.53125 0.75 4.3125 0.75H3.4375C3.19141 0.75 3 0.96875 3 1.1875V2.5H1.6875C0.949219 2.5 0.375 3.10156 0.375 3.8125V5.125H12.625V3.8125C12.625 3.10156 12.0234 2.5 11.3125 2.5Z"
                            fill="#2B3D50"
                        />
                        </svg>
                        <span>${date}</span>
                    </div>
                </div>
                <p class="descr_var">${descr}</p>
                <p class="date_experience_var"><b>${dateExperience}</b></p>
            </li>`
    }

    document.head.insertAdjacentHTML("beforeend", newStyle)
    //last step
    document.querySelector("#edit-processed-text-44").insertAdjacentHTML("afterbegin", reviews)
    if (document.querySelector(".new_reviews")) {
      for (let key in arrReviews) {
        document
          .querySelector(".new_reviews")
          .insertAdjacentHTML(
            "beforeend",
            setReviews(
              key,
              arrReviews[key][0],
              arrReviews[key][1],
              arrReviews[key][2],
              arrReviews[key][3],
              arrReviews[key][4],
              arrReviews[key][5],
              arrReviews[key][6],
              arrReviews[key][7]
            )
          )
      }

      if (document.querySelector(".load_more_btn")) {
        document.querySelector(".load_more_btn").addEventListener("click", (e) => {
          console.log(e.target)
          e.target.style.display = "none"
          document.querySelector('[data-count="3"]').style.display = "block"
        })
      }
    }

    document.querySelector("#edit-processed-text-10").insertAdjacentHTML("beforebegin", guaranteeBlock)
    document.querySelector("form #edit-actions-10-submit").textContent = "Get results"
    document.querySelector(".form-item-email-address").after(document.querySelector(".form-item-mobile-number"))

    document.querySelector("#edit-processed-text-12")?.insertAdjacentHTML(
      "afterend",
      `<p class="policy_var">By clicking, “Submit” I Agree to GrantMe’s 
        <a href="https://grantme.ca/privacy-policy/?__hstc=166450401.d0807ef5d572f44bbd6f27a9bad53784.1677748614911.1677748614911.1677754299636.2&amp;__hssc=166450401.4.1677754299636&amp;__hsfp=2335833925" target="_blank">Privacy Policy</a>,
        <a href="https://grantme.ca/terms-of-use/?__hstc=166450401.d0807ef5d572f44bbd6f27a9bad53784.1677748614911.1677748614911.1677754299636.2&amp;__hssc=166450401.4.1677754299636&amp;__hsfp=2335833925" target="_blank">Terms of Use</a> 
        and consent to receiving promotional messages.<br />A copy of your assessment results will be sent to you by email.
    </p>`
    )

    document.querySelector("#edit-what-is-your-contact-info- .webform-card-wrapper").insertAdjacentHTML("afterbegin", loaderWrap)
    if (document.querySelector(".loader_wrap")) {
      function startPreloader() {
        console.log("startPreloader")
        let idx = 0
        var delay = 0.7

        for (let item of document.querySelectorAll(".loader_wrap li")) {
          setTimeout(() => {
            let el = document.querySelector(".loader_wrap li.active")
            if (el) {
              el.classList.remove("active")
              el.classList.add("finish")
            }

            item.classList.add("active")
          }, idx * delay * 1000)

          idx++

          if (idx == 3) {
            setTimeout(() => {
              let el = document.querySelector(".loader_wrap li.active")

              el.classList.remove("active")
              el.classList.add("finish")
            }, idx * delay * 1000 + 2000)
          }
        }
      }
      startPreloader()
      setTimeout(() => {
        document.querySelector(".loader_wrap").style.display = "none"
        document.querySelector("#edit-qa13-wrap").style.display = "block"
      }, 5000)
    }
  }
}, 300)
