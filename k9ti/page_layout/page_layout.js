let newPage = setInterval(() => {
  if (document) {
    clearInterval(newPage)
    let styleFreeWorkShop = /*html */ `
    <style>
      .after-refresh > section.count_sec:nth-child(8),
        .after-refresh > section.count_sec:nth-child(30){
          display: none !important;
        }
        .after-refresh > section.count_sec:nth-child(27){
          background: #FFFFFF !important;
        }
        .after-refresh > section.count_sec:nth-child(28){
          background: #DDE8F1 !important;
        }
        .content .page h2{
          font-weight: 700 !important;
          font-size: 32px !important;
          line-height: 40px !important;
          color: #734F22 !important;
          margin-left: auto !important;
          margin-right: auto !important;
        }
         .entry-content p{
          font-weight: 400 !important;
          font-size: 16px !important;
          line-height: 26px !important;
          color: #4B4B4B !important;
        }
        .after-refresh > section.count_sec:nth-child(27) img{
    width: 318px !important;
    height: 252px !important;
    border-radius: 16px;
        }
        .after-refresh > section.count_sec:nth-child(27)  p{
          margin-bottom: 16px !important;
        }
        /* */
      button.new_enroll_now_btn{
            display: flex;
            align-items: center;
            justify-content: center;
            background: #193973;
            box-shadow: 5px 5px 10px rgba(39, 32, 32, 0.8);
            border-radius: 10px;
            max-width: 181px;
            width: 100%;
            height: 62px;
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            color: #FFFFFF;
            margin: 0;
            outline: unset;
            border: unset;
        }
        /*reviews_bgr */
        .reviews_bgr{
            background: #DDE8F1;
        }
        .reviews_wrap{
            background: rgba(255, 255, 255, 0.6);
            border: 2px solid #193973;
            border-radius: 16px;
            padding: 40px;
            max-width: 1000px;
            margin: 0 auto !important;
            width: 100%;
        }
        .reviews_wrap.is_true{
            background: #DDE8F1;
        }
        body .want-to-obey .reviews_wrap h3{
            font-weight: 700 !important;
            font-size: 20px !important;
            line-height: 27px !important;
            color: #193973 !important;
            margin: 0 auto 12px !important;
            max-width: 600px;
        }
        .reviews_wrap > p{
            font-weight: 700;
            font-size: 16px;
            line-height: 26px;
            color: #193973 !important;
            margin: 8px 0 0;
            text-align: center;
        }
        .reviews_wrap .reviews_stars{
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .reviews_wrap .reviews_stars > span{
            font-weight: 600;
            font-size: 14px;
            line-height: 19px;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            color: #193973;
            margin: 0 0 0 4px;
        }
        .reviews_wrap .reviews_stars .star_wrap{
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .reviews_wrap .reviews_stars .star_wrap span + span{
            margin-left: 4px;
        }
        .reviews_wrap .reviews_stars .star_wrap span{
            width: 24px;
            height: 24px;
            background: url(https://conversionratestore.github.io/projects/knineti/img/new_star.svg) no-repeat center center;
        }
        /*ten_week_bgr */
        .ten_week_bgr{
            background: #FFFFFF;
        }
        .ten_week_bgr .ten_week_box{
            width: 100%;
            max-width: 1000px;
            margin: 0 auto 60px;
        }
        .ten_week_bgr .ten_week_box h2{
            font-weight: 700;
            font-size: 32px;
            line-height: 40px;
            color: #FFFFFF !important;
            background: #734F22;
            border-radius: 16px;
            padding: 20px;
            margin: 0 0 20px;
        }
        .all_inform_wrap{
            max-width: 800px;
            margin: 0 auto;
        }
        body .want-to-obey .all_inform_wrap > h3{
            font-weight: 700 !important;
            font-size: 32px !important;
            line-height: 40px !important;
            color: #193973 !important;
            margin: 40px 0 20px !important;
        }
        body .all_inform_wrap > p{
            font-weight: 400 !important;
            font-size: 16px !important;
            line-height: 26px !important;
            color: #4B4B4B !important;
            margin: 0;
        }
        body .all_inform_wrap > p.color_var{
            font-weight: 700 !important;
            font-size: 20px !important;
            line-height: 27px !important;
            color: #193973 !important;
        }
        body .all_inform_wrap > p + p{
            margin-top: 16px;
        }
        .all_inform_wrap > span{
            display: block;
            font-weight: 700;
            font-size: 16px;
            line-height: 26px;
            color: #4B4B4B;
            margin: 0 0 16px;
            text-align: center;
        }
        .all_inform_wrap .img_wrap{
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 0 24px;
        }
        .all_inform_wrap .img_wrap img:nth-child(1){
            width: 335px;
        }
        .all_inform_wrap .img_wrap img:nth-child(2){
            width: 331px;
            max-height: 102px;
        }
        .all_inform_wrap .img_wrap img + img{
            margin-left: 53px;
        }
        .all_inform_wrap .text_descr{
            border: 2px solid #DDE8F1;
            border-radius: 16px;
            background: #FFFFFF;
            padding: 20px;
            margin: 16px 0 0;
        }
        .all_inform_wrap .text_descr p:nth-child(1){
            font-weight: 700 !important;
            font-size: 20px !important;
            line-height: 27px !important;
            color: #734F22 !important;
            margin: 0 0 12px !important;
        }
        .all_inform_wrap .text_descr p:nth-child(2){
            font-weight: 400 !important;
            font-size: 16px !important;
            line-height: 26px !important;
            color: #4B4B4B !important;
            margin: 0 !important;
        }
        /*time_offer_box */
        .time_offer_box{
          margin-top: 40px;
        }
        .time_offer_box .heder_wrap{
            border: 2px solid #734F22;
            border-bottom: 0;
            border-radius: 16px 16px 0 0;
            background: #193973;
            padding: 20px;
        }
        .time_offer_box .heder_wrap p{
          font-weight: 700 !important;
          font-size: 20px !important;
          line-height: 27px !important;
          text-align: center;
          color: #FFFFFF !important;
          margin: 0 !important;
        }
        .time_offer_box .body_wrap{
            border: 2px solid #734F22;
            border-top: 0;
            border-radius: 0 0 16px 16px;
            background: #FFFFFF;
            padding: 20px;
            text-align: center;
        }
        .price_wrap p:nth-child(1){
            font-weight: 700 !important;
            font-size: 20px !important;
            line-height: 27px !important;
            color: #734F22 !important;
            margin: 0 !important;
        }
        .price_wrap p:nth-child(2){
            font-weight: 400 !important;
            font-size: 32px !important;
            line-height: 40px !important;
            color: #193973 !important;
            margin: 8px 0 !important;
        }
        .price_wrap p:nth-child(3){
              font-weight: 400 !important;
              font-size: 16px !important;
              line-height: 26px !important;
              color: #193973 !important;
              margin: 0 !important;
        }
        .time_offer_box .body_wrap button.new_enroll_now_btn{
            margin: 20px auto 0;
        }
        .time_offer_box .body_wrap button svg{
            margin-left: 7.5px;
        }
        .time_offer_box .body_wrap > p{
            max-width: 300px;
            font-weight: 400 !important;
            font-size: 16px !important;
            line-height: 26px !important;
            color: #FFFFFF !important;
            margin: 16px auto 0;
            background: #794E15;
            border-radius: 4px;
            padding: 6px 18.5px;
        }
        .img_guarantee{
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 303px;
          margin: 20px auto 0;
        }
        .img_guarantee img{
          max-width: 75px;
        }
        .img_guarantee span{
          font-weight: 700;
          font-size: 16px;
          line-height: 26px;
          color: #734F22;
          margin-left: 12px;
          text-align: left;
        }
        /*new_accardion */
        li.new_accardion_block{
          list-style-type: none;
          position: relative;
          margin: 0 !important;
          border: 2px solid #DDE8F1;
          border-radius: 16px;
        }
        li.new_accardion_block + li{
          margin-top: 16px !important;
        }
        .new_accardion_link{
          border-radius: 14px;
            display: flex;
              justify-content: space-between;
            align-items: flex-start;
              background: #DDE8F1;
              padding: 20px;
            cursor: pointer;
        }
        .new_accardion_link p{
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin: 0;
        }
        .new_accardion_link p span:nth-child(1){
          font-weight: 700;
          font-size: 16px;
          line-height: 22px;
          color: #734F22 !important;
        }
        .new_accardion_link p span:nth-child(2){
            font-weight: 700;
            font-size: 20px;
            line-height: 27px;
            color: #193973;
            margin-top: 1px;
        }
        .new_accardion_lists{
            border-radius: 14px;
                border-top: unset;
          display: none;
          background: #FFFFFF;
          padding: 8px 16px 16px;
        }
        .new_accardion_lists p{
          font-weight: 400;
          font-size: 16px;
          line-height: 26px;
          color: #4B4B4B !important;
          margin: 0;
        }
        .new_accardion_lists p + p{
          margin-top: 16px;
        }
        .new_accardion_link > span{
              position: relative;
              background: #FFFFFF;
              border-radius: 50%;
              width: 24px;
              height: 24px;
              margin-left: 10px;
              padding: 12px;
           }

            .new_accardion_link > span::before{
              position: absolute;
              content: "";
              width: 100%;
              height: 100%;
              background: url(https://conversionratestore.github.io/projects/knineti/img/arrow_accardion.svg) no-repeat center center;
              top: 0;
              left: 0;
              transition: all 0.3s ease;
              transform: rotate(180deg);
    }
          .new_accardion_link.active span::before {
              transform: rotate(0deg);
          }
          .new_accardion_link.active{
            
          }
          .time_offer_box li.new_accardion_block:nth-child(1) .new_accardion_lists{
    display: block;
          }
          /*question_first_bgr */
          .question_first_bgr,
          .question_second_bgr{
                background: #FFFFFF;
                padding: 60px 0;
          }
          .question_first_wrap,
          .question_second_wrap{
                max-width: 800px;
                margin: 0 auto;
          }
          body .question_first_wrap h2,
          body .question_second_wrap h2{
                font-weight: 700 !important;
                font-size: 32px !important;
                line-height: 40px !important;
                color: #734F22 !important;
                margin: 0 auto 40px auto !important;
                width: 100% !important;
              }
         body .question_second_wrap h2{
            max-width: 704px !important;

          }
          .question_first_wrap button.new_enroll_now_btn,
          .question_second_wrap button.new_enroll_now_btn{
            margin: 40px auto 0 auto;
          }
          .question_first_wrap li.new_accardion_block,
          .question_second_wrap li.new_accardion_block{
            background: #DDE8F1;
            padding: 20px;
          }
          .question_first_wrap .new_accardion_link,
          .question_second_wrap .new_accardion_link{
                border-radius: unset;
                padding: unset;
                background: unset;
          }
          .question_first_wrap .new_accardion_link p,
          .question_second_wrap .new_accardion_link p{
                  font-weight: 700;
                  font-size: 16px;
                  line-height: 22px;
                  color: #193973 !important;
                  margin: 0;
          }
          .question_first_wrap .new_accardion_lists,
          .question_second_wrap .new_accardion_lists{
                  border-radius: unset;
                  border-top: 2px solid #FFFFFF;
                  background: unset;
                  padding: 12px 0 0;
                  margin-top: 12px;
          }
          /*learn_more_scroll_btn */
          .learn_more_scroll_btn{
            background: #734F22;
            box-shadow: 5px 5px 10px rgba(39, 32, 32, 0.8);
            border-radius: 10px;
            max-width: 384px;
            width: 100%;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 21px;
          }
          .learn_more_scroll_btn > div{
            display: flex;
            flex-direction: column;
          }
          .learn_more_scroll_btn > div svg{
            animation: arrow-down 2s infinite;
          }
                    .learn_more_scroll_btn > div svg:nth-child(2){
            animation-delay: -0.2s;
          }
          .learn_more_scroll_btn > div svg:nth-child(1){
            animation-delay: -0.4s;
          }
          .learn_more_scroll_btn span{
            font-weight: 600;
            font-size: 14px;
            line-height: 19px;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            color: #FFFFFF;
            margin: 0 5px;
          }
          @keyframes arrow-down {
    0%{
        opacity: 0;
        transform: translateY(-0px);
    }
    50%{
        opacity: 1;
    }
    100%{
        opacity: 0;
        transform: translateY(0px);
    }
}
    </style>
    `

    let arrQuestion = {
      1: [
        `1. If I purchase the masterclass, how long do I have access to it? Can I revisit previous classes?`,
        `<p>There is no time limit for this - you will have access to all the classes in the masterclass for as long as you want and can complete them at your own pace.</p>
        <p>The way the masterclass is structured is that you get access to the first week's class, associated videos and 3 bonus classes immediately after enrolling. After that, a new class and associated training videos are unlocked for you every week for the following 9 weeks.</p>
        <p>Once the classes for all 10 weeks have been unlocked, you will have access to them indefinitely and can watch and re-watch them at any time.</p>`,
      ],
      2: [
        `2. I want to start the course later. Is It possible to buy today but start later?`,
        `<p>No worries! You can snag the special deal today and hold off on getting started until later. Just give us a shout after you buy to let us know you want to delay the start of your dog's training course.</p>`,
      ],
      3: [
        `3. Does the masterclass work better for puppies or adult dogs?`,
        `<p>The masterclass works equally well both for puppies and adult dogs. Puppies as young as 8 weeks and adult dogs as old as 13 years have been successfully trained using the masterclass.</p>`,
      ],
      4: [
        `4. Can I use the program to train multiple dogs?`,
        `<p>Absolutely! Once you've got the course, you're set for life. The knowledge inside is yours to use as much as you want, whether you're training 2 dogs or 20. So you can keep using the Total Transformation Masterclass to train all your furry friends now and in future, until they're just as well-behaved as a service dog.</p>`,
      ],
      5: [
        `5. I have a Yorkshire terrier / Siberian husky / Chihuahua / pit bull / [insert dog breed]. Will the masterclass work for my dog?`,
        `<p>The masterclass will work for your dog regardless of its breed.</p>
        <p>Some owners of a dog breed generally not considered suitable for being a service dog – breeds like huskies or pit bulls – think that these techniques won’t work for them, but that’s actually not the case.  These techniques are rooted in scientific research on animal behavior, and therefore work for ALL dog breeds.</p>`,
      ],
      6: [
        `6. I have a rescue dog with a number of behavioral problems. Will the masterclass help my dog?`,
        `<p>Absolutely. In fact, making sure that rescue dogs get a second chance with a new family is one of the reasons why we created this masterclass.</p>
        <p>It’s also why we donate a percentage of our income FROM this masterclass to rescue shelters and other charities.</p>
        <p>Many of our previous participants actually have rescue dogs whom they have trained successfully using what they had learned from the masterclass.</p>`,
      ],
      7: [
        `7. Are there any dog owners who would NOT benefit from this masterclass?`,
        `<p>You won’t benefit from the masterclass if you fall into one of these 2 categories:</p>
        <p>a) You don’t have the time right now to spend around 10 - 15 minutes per day training your dog.</p>
        <p>b) You are looking to have your dog become legally certified as a service dog. This program is not about certifying your dog to become a service dog - instead, it’s about how to get your dog to become as calm, obedient, and well-behaved as a service dog.</p>
        <p>So if you fall into one of these 2 categories, this masterclass might not be for you.</p>
        <p>If you have already signed up and would like a refund, please contact us.</p>`,
      ],
      8: [`8. Do I need to travel somewhere to attend the masterclass?`, `<p>No - this is an online masterclass, so you’ll be attending it from home.</p>`],
      9: [
        `9. Is the masterclass open to non-U.S. residents?`,
        `<p>Absolutely, it’s available worldwide. We actually have had participants from 42 different countries outside the U.S. (Canada, United Kingdom, Australia, South Africa, New Zealand, Singapore, Germany, Mexico, India, Israel, Brazil, Japan, South Korea, etc.)</p>`,
      ],
      10: [
        `10. What if I can’t make the time to attend a particular class?`,
        `<p>The classes are not live - they are recorded and saved on our private members only website. This means you can watch them whenever is convenient for you.</p>
        <p>The Q&A calls are live conference calls. If you can’t attend the live Q&A call on a particular week, but still have questions for us, simply email your questions to us and we’ll answer them during the Q&A call.</p>
        <p>We'll upload a recording of the Q&A call, so you can listen to our answers at your convenience.</p>`,
      ],
      11: [
        `11. Can you train my dog to become a certified service dog / therapy dog?`,
        `<p>Unfortunately, that’s not a service we provide at this time.</p>
        <p>Our Total Transformation Masterclass is designed to help regular dog owners have dogs that are as well-behaved as service dogs, using the exact same training techniques that service dog trainers use.</p>
        <p>However, we do not have any programs that will help your dog become a legally certified service dog.</p>`,
      ],
      12: [
        `12. What if I have already taught my dog using verbal commands like sit, stay, etc.?`,
        `<p></p>
        <p></p>
        <p></p>`,
      ],
      13: [
        `13. My dog has a specific behavioral problem. Will the masterclass help me fix this problem?`,
        `<p>The masterclass has techniques designed to fix ALL the common behavioral problems that most dogs have - housebreaking issues, barking, pulling on leash, not coming when called, jumping, chewing, nipping or biting, aggression, and a lot more.</p>
        <p>If your dog has a really uncommon problem that is not addressed in the masterclass, you can always ask our experts about it during our Q&A calls and they’ll tell you how to apply the techniques in the masterclass to solve that specific problem.</p>`,
      ],
      14: [
        `14. Will I need to constantly give treats to my dog throughout their lives in order to get them to listen to me?`,
        `<p>No, the masterclass will teach you how to wean your dog away from treats so that they continue to listen to you even without any food bribes. 🙂</p>`,
      ],
    }
    let arrInfo = {
      1: [
        `<span>Weeks 1 and 2</span><span>How to get your dog's undivided attention</span>`,
        `<p>During week 1, you will establish the foundation for training your dog to become as calm as a service dog. You will learn the 6-step process that service dog trainers follow and how to slowly wean your dog away from treats. The focus will be on teaching your dog the two fundamental commands - WATCH and TOUCH, which are crucial for building trust and strengthening the human-animal bond. In week 2, you will continue to solidify the TOUCH and WATCH commands, but in a different environment - outside your home. This will help you and your dog deal with a whole different set of issues, especially in distracting areas such as dog parks.</p>`,
      ],
      2: [
        `<span>Week 3:</span><span>How to get your dog to sit still in any situation</span>`,
        `<p>Even if your dog already knows how to sit, learn the special way service dog trainers train dogs to SIT which leads to far better and longer-lasting results.</p>`,
      ],
      3: [
        `<span>Week 4:</span><span>How to stop your dog from pulling on the leash</span>`,
        `<p>Learn how to train your dog to walk calmly by your side, no matter how fast or slow you go. Also, you'll learn the SAY HELLO command which allows your dog to calmly greet other dogs or people, only when you give permission.</p>`,
      ],
      4: [
        `<span>Week 5:</span><span>How to read your dog like a book</span>`,
        `<p>Did you know that a wagging tail doesn't always mean your dog is happy? Avoid common mistakes likes these and learn how to read your dog's body language so you can train them more effectively at times when they are most receptive to your lessons.</p>`,
      ],
      5: [
        `<span>Week 6:</span><span>How to stop your dog from barking and jumping</span>`,
        `<p>Discover how to stop your dog from barking and jumping at your guests by giving them a job to do (like going to bed). </p>`,
      ],
      6: [
        `<span>Week 7:</span><span>How to stop your dog from being aggressive and destroying your home </span>`,
        `<p>Learn how to stop destructive chewing and 'resource guarding' where a dog becomes aggressive when someone takes their toys or food.</p>`,
      ],
      7: [
        `<span>Week 8:</span><span>How to get your dog to come to you whenever you call them</span>`,
        `<p>We'll teach you some cool games to get your dog to come running when you call their name, even if they're busy chasing a squirrel.</p>`,
      ],
      8: [
        `<span>Week 9:</span><span>How to take control of impulsive behavior</span>`,
        `<p>Train your furry friend to be calm and still in any situation using advanced obedience and impulse control techniques known only to service dog trainers.</p>`,
      ],
      9: [
        `<span>Week 10:</span><span>How to get your dog to behave well in public</span>`,
        `<p>Learn to handle 'leash reactivity' and aggression towards other dogs using WATCH, TOUCH and other techniques. Discover how to have your dog automatically sit when you stop walking, as well as stop at curbs to wait for instructions before crossing a road – which can save your dog's life.</p>`,
      ],
    }

    let reviewsBox = /*html */ `
        <div class="reviews_bgr">
            <div class="reviews_wrap">
                <h3>50,000+ dog owners have already trained their dogs with The Total Transformation Masterclass</h3>
                <div class="reviews_stars">
                    <div class="star_wrap">
                    <span class="star"></span>
                    <span class="star"></span>
                    <span class="star"></span>
                    <span class="star"></span>
                    <span class="star"></span>
                    </div>
                    <span>4.9</span>
                </div>
                <p>1597 Sitejabber & Trustpilot reviews</p>
            </div>  
        </div>
    `

    let tenWeekBox = /*html */ `
        <div class="ten_week_bgr">
            <div class="ten_week_box">
                <h2>10-week dog training program</h2>
                <div class="all_inform_wrap">
                    <p class="color_var">Get the skills and confidence you need to train your new puppy to be as calm and obedient as a service dog – without shedding thousands for an expensive trainer</p>
                    <p>Ditch those basic SIT and STAY commands from the internet that don’t work.</p>
                    <p>
                    Take a deep dive into service dog training secrets to stop your naughty best friend from barking, jumping, and pulling on their leash - and become a calm, obedient
                    companion that comes to you whenever you call.
                    </p>
                    <h3>Here’s what you’ll learn in this 10-week masterclass:</h3>
                    <span>Based on research conducted at:</span>
                    <div class="img_wrap">
                        <img src="https://conversionratestore.github.io/projects/knineti/img/harvard_img.png" alt="Harvard" />
                        <img src="https://conversionratestore.github.io/projects/knineti/img/stanford_img.png" alt="Stanford" />
                    </div>
                    <ul class="new_accardion"></ul>
                    <div class="text_descr">
                        <p>Get help every step of the way</p>
                        <p>Jump on a LIVE call every week with our trainers to get your questions answered.</p>
                    </div>
                </div>
                <div class="time_offer_box">
                    <div class="heder_wrap">
                        <p>Get LIFETIME ACCESS to the online 10-week Total Transformation Masterclass</p>
                    </div>
                    <div class="body_wrap">
                      <div class="price_wrap">
                          <p>Limited time offer:</p>
                          <p><b>Just</b> $497 <b>$297 (save $200)</b></p>
                          <p>or $99/month, 3 installments</p>
                      </div>
                      <button class="new_enroll_now_btn">Enroll NOW <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.23984 8.23356L4.47318 5.00023L1.23984 1.76689C0.914844 1.44189 0.914844 0.916894 1.23984 0.591895C1.56484 0.266895 2.08984 0.266895 2.41484 0.591895L6.23984 4.41689C6.56484 4.74189 6.56484 5.26689 6.23984 5.59189L2.41484 9.41689C2.08984 9.74189 1.56484 9.74189 1.23984 9.41689C0.923177 9.09189 0.914844 8.55856 1.23984 8.23356Z" fill="white"/>
                      </svg></button>
                      <p class="date_ends_text">This offer ends on <span>January 14, 2023</span></p>
                      <div class="img_guarantee">
                          <img src="https://conversionratestore.github.io/projects/knineti/img/guarantee_img.png" alt="guarantee" />
                          <span>Try risk-free with our unconditional 90-day money back guarantee</span>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      `

    function setList(count, title, text) {
      return `
                <li class="new_accardion_block" data-visability='${count}'>
                    <div class="new_accardion_link">
                        <p>${title}</p>
                        <span></span>
                    </div>
                    <div class="new_accardion_lists" data-visability-open='${count}'>
                        <div>
                            ${text}
                        </div>
                    </div>
                </li>
        `
    }

    document.head.insertAdjacentHTML("beforeend", styleFreeWorkShop)

    document.querySelectorAll(".after-refresh section.count_sec")[0]?.insertAdjacentHTML("beforebegin", reviewsBox)
    document.querySelectorAll(".after-refresh section.count_sec")[0]?.insertAdjacentHTML(
      "beforebegin",
      `    <div class="learn_more_scroll_btn">
      <div>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            opacity="0.5"
            d="M7.88542 0.24375L4.65208 3.47708L1.41875 0.24375C1.09375 -0.08125 0.56875 -0.08125 0.24375 0.24375C-0.08125 0.56875 -0.08125 1.09375 0.24375 1.41875L4.06875 5.24375C4.39375 5.56875 4.91875 5.56875 5.24375 5.24375L9.06875 1.41875C9.39375 1.09375 9.39375 0.56875 9.06875 0.24375C8.74375 -0.0729167 8.21042 -0.08125 7.88542 0.24375Z"
            fill="white"
          />
        </svg>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.88542 0.24375L4.65208 3.47708L1.41875 0.24375C1.09375 -0.08125 0.56875 -0.08125 0.24375 0.24375C-0.08125 0.56875 -0.08125 1.09375 0.24375 1.41875L4.06875 5.24375C4.39375 5.56875 4.91875 5.56875 5.24375 5.24375L9.06875 1.41875C9.39375 1.09375 9.39375 0.56875 9.06875 0.24375C8.74375 -0.0729167 8.21042 -0.08125 7.88542 0.24375Z"
            fill="white"
          />
        </svg>
      </div>
      <span>learn more about our special offer</span>
      <div>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            opacity="0.5"
            d="M7.88542 0.24375L4.65208 3.47708L1.41875 0.24375C1.09375 -0.08125 0.56875 -0.08125 0.24375 0.24375C-0.08125 0.56875 -0.08125 1.09375 0.24375 1.41875L4.06875 5.24375C4.39375 5.56875 4.91875 5.56875 5.24375 5.24375L9.06875 1.41875C9.39375 1.09375 9.39375 0.56875 9.06875 0.24375C8.74375 -0.0729167 8.21042 -0.08125 7.88542 0.24375Z"
            fill="white"
          />
        </svg>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.88542 0.24375L4.65208 3.47708L1.41875 0.24375C1.09375 -0.08125 0.56875 -0.08125 0.24375 0.24375C-0.08125 0.56875 -0.08125 1.09375 0.24375 1.41875L4.06875 5.24375C4.39375 5.56875 4.91875 5.56875 5.24375 5.24375L9.06875 1.41875C9.39375 1.09375 9.39375 0.56875 9.06875 0.24375C8.74375 -0.0729167 8.21042 -0.08125 7.88542 0.24375Z"
            fill="white"
          />
        </svg>
      </div>
    </div>`
    )
    document.querySelectorAll(".after-refresh section.count_sec")[1]?.insertAdjacentHTML("afterend", tenWeekBox)
    if (document.querySelector(".ten_week_bgr")) {
      document.querySelector(".ten_week_bgr").after(document.querySelectorAll(".after-refresh section.count_sec")[18])
    }

    document
      .querySelectorAll(".after-refresh section.count_sec")[3]
      ?.insertAdjacentHTML(
        "beforebegin",
        `<div class="question_first_bgr"><div class="question_first_wrap"><h2>Have a question? Reach out to us or find some answers below</h2><ol class="question_accardion"></ol><button class="new_enroll_now_btn">Enroll NOW <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"></div></div>`
      )

    document
      .querySelectorAll(".after-refresh section.count_sec")[25]
      ?.insertAdjacentHTML(
        "afterend",
        `<div class="question_second_bgr"><div class="question_second_wrap"><h2>Our best customers are those who ask the most questions. Find answers below </h2><ol class="question_accardion"></ol><button class="new_enroll_now_btn">Enroll NOW <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"></div></div>`
      )

    if (document.querySelector(".new_accardion")) {
      for (let key in arrInfo) {
        document.querySelector(".new_accardion").insertAdjacentHTML("beforeend", setList(key, arrInfo[key][0], arrInfo[key][1]))
      }
    }
    if (document.querySelector(".question_first_wrap .question_accardion")) {
      for (let key in arrQuestion) {
        document.querySelector(".question_first_wrap .question_accardion").insertAdjacentHTML("beforeend", setList(key, arrQuestion[key][0], arrQuestion[key][1]))
      }
    }
    if (document.querySelector(".question_second_wrap .question_accardion")) {
      for (let key in arrQuestion) {
        document.querySelector(".question_second_wrap .question_accardion").insertAdjacentHTML("beforeend", setList(key, arrQuestion[key][0], arrQuestion[key][1]))
      }
    }
    // title
    document
      .querySelectorAll(".after-refresh section.count_sec")[2]
      .querySelector("h2").textContent = `Enroll for the masterclass today and get 3 bonus classes (worth US $209.10) free of charge:`
    document.querySelectorAll(".after-refresh section.count_sec")[4].querySelector("h2").textContent = `Learn from the best in the dog training industry`
    document.querySelectorAll(".after-refresh section.count_sec")[5].querySelector("h2").textContent = `Watch the amazing results dog owners get after using this program`
    document
      .querySelectorAll(".after-refresh section.count_sec")[6]
      .querySelector("h2").textContent = `ANY regular dog owner can achieve this kind of transformation… you don’t need a degree in animal behavior 🙂`
    document.querySelectorAll(".after-refresh section.count_sec")[7].querySelector("h2").textContent = `"... instead of barking, she goes on her bed and waits for me."`
    document.querySelectorAll(".after-refresh section.count_sec")[8].querySelector("h2").textContent = `Discover the two foundational commands to get your dog to look up to you`
    document.querySelectorAll(".after-refresh section.count_sec")[9].querySelector("h2").textContent = `Teach your pup to pay attention to you even when there's a squirrel nearby`
    document
      .querySelectorAll(".after-refresh section.count_sec")[10]
      .querySelector("h2").textContent = `Transform your dog from a leash-pulling nightmare into a zen master that’s a joy to walk with`
    document.querySelectorAll(".after-refresh section.count_sec")[11].querySelector("h2").textContent = `Train your dog to come to you – whenever and wherever you call them`
    document
      .querySelectorAll(".after-refresh section.count_sec")[12]
      .querySelector("h2").textContent = `Teach your pooch to stop barking and calmly say hello to other dogs and people`
    document.querySelectorAll(".after-refresh section.count_sec")[13].querySelector("h2").textContent = `Save your furry friend from a fatal road accident`
    document.querySelectorAll(".after-refresh section.count_sec")[14].querySelector("h2").textContent = `Train your dog to have the same level of impulse control as service dogs`
    document.querySelectorAll(".after-refresh section.count_sec")[15].querySelector("h2").textContent = `Say goodbye to all naughty behavior problems`
    document.querySelectorAll(".after-refresh section.count_sec")[16].querySelector("h2").textContent = `Enroll now to get instant access to the online masterclass`
    document.querySelectorAll(".after-refresh section.count_sec")[17].querySelector("h2").textContent = `Learn from the comfort of your home at your own pace`
    document.querySelectorAll(".after-refresh section.count_sec")[18].querySelector("h2").textContent = `Jump on a live call with us to get answers to your questions`
    document.querySelectorAll(".after-refresh section.count_sec")[19].querySelector("h2").textContent = `Transform your dog in as little as 10 to 15 minutes per day`
    document.querySelectorAll(".after-refresh section.count_sec")[20].querySelector("h2").textContent = `Save up to $3,703 on dog training fees`
    document.querySelectorAll(".after-refresh section.count_sec")[21].querySelector("h2").textContent = `Help us save rescue dogs’ lives`
    document.querySelectorAll(".after-refresh section.count_sec")[22].querySelector("h2").textContent = `Get all your money back within 90 days if this isn’t right for you`
    document.querySelectorAll(".after-refresh section.count_sec")[23].querySelector("h2").textContent = `Get your dog to listen to you even without treats`
    document.querySelectorAll(".after-refresh section.count_sec")[24].querySelector("h2").textContent = `“...he listens to me all the time now...”`

    $(".new_accardion_link").click(function (e) {
      console.log(e.currentTarget)
      $(this).toggleClass("active")
      $(this).closest("li").toggleClass("active")
      $(this).next(".new_accardion_lists").slideToggle()
      if ($(".new_accardion_link").not(this)) {
        $(".new_accardion_link").not(this).next(".new_accardion_lists").css("display", "none")
        $(".new_accardion_link").not(this).removeClass("active")
        $(".new_accardion_link").not(this).closest("li").removeClass("active")
      }
      const headerOffset = 70
      const elementPosition = this.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    })
  }
}, 100)
