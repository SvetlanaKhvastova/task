if (window.location.pathname === "/mc/") {
  let startFunc = setInterval(() => {
    if (document.querySelector("#player")) {
      clearInterval(startFunc)

      /* other variables  */
      const imgFolderUrl = "https://conversionratestore.github.io/projects/knineti/img/"

      const objBadBehavior = {
        Barking: {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span>'s barking and behavior problems today!`,
        },
        Jumping: {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span>'s jumping and behavior problems today!`,
        },
        "Pulling leash": {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span>'s leash tugging and behavior problems today!`,
        },
        Housebreaking: {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span>'s housebreaking issues and behavior problems today!`,
        },
        "Nipping or biting": {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span>'s nipping & biting and behavior problems today!`,
        },
        "Not coming when called": {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span>'s stubbornness and behavior problems today!`,
        },
        "Doesn't listen": {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span>'s tendency to ignore commands and behavior problems today!`,
        },
        Chewing: {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span>'s chewing & digging and behavior problems today!`,
        },
        "Extremely excited": {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span>'s active disobedience and behavior problems today!`,
        },
        Aggression: {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span>'s aggression and behavior problems today!`,
        },
        Anxiety: {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span>'s anxiety and behavior problems today!`,
        },
        "Reacting to other dogs": {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span>'s socialization issues and behavior problems today!`,
        },
        Other: {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span>'s behavior problems today!`,
        },
      }

      let style = /*html */ `
      <style>
        .count_sec > .container,
        .enroll_btn_txt{
            display: none;
        }
        .main_section .container{
            width: 1030px;
            margin: 0 auto !important;
            padding: 48px 15px;
        }
        .main_section .watch_free_workshop_btn{
            display: flex;
            align-items: center;
            justify-content: center;
            outline: none;
            margin: 0;
            background: #173775;
            box-shadow: 5px 5px 10px rgb(39 32 32 / 80%);
            border-radius: 10px;
            height: 48px;
            border: none;
            max-width: 303px;
            width: 100%;
            font-weight: 600;
            font-size: 14px;
            line-height: 20px;
            text-align: center;
            text-transform: uppercase;
            color: #FFFFFF;
        }
        /*box_second */
        .box_second .container > .box_second_content{
            display: flex;
            justify-content: space-between;
        }
        .box_second .container > .box_second_content > div{
            width: 50%;
        }
        .box_second .container > .box_second_content > div + div{
            margin-left: 52px;
        }
        .box_second .container > .box_second_content h3{
            font-weight: 700;
            font-size: 22px;
            line-height: 130%;
            color: #193973 !important;
            margin-bottom: 24px;
            text-align: left;
        }
        .box_second .container > .box_second_content ul{
            display: flex;
            flex-direction: column;
            margin: 0;
            padding: 0;
        }
        .box_second .container > .box_second_content ul li + li{
            margin-top: 24px;
        }
        .box_second .container > .box_second_content > div:nth-child(1) ul li p{
            font-size: 16px;
            line-height: 22px;
            color: #193973 !important;
            margin: 0;
            padding: 0 0 0 35px;
            position: relative;
        }
        .box_second .container > .box_second_content > div:nth-child(1) ul li p::before{
            position: absolute;
            content: "";
            width: 26px;
            height: 26px;   
            left: 0;
            top: 0;
            background: url(${imgFolderUrl}topics.svg);
            background-size: contain;
            background-repeat: no-repeat;
        }
        .box_second .container > .box_second_content > div:nth-child(1) ul:first-of-type{
            margin-bottom: 24px;
        }
        .box_second .container > .box_second_content .see_more_btn{
            font-size: 16px;
            line-height: 130%;
            text-decoration-line: underline;
            color: #173775 !important;
            cursor: pointer;
            margin: 28px 0;
            display: block;
        }
        .box_second .container > .box_second_content > div:nth-child(1) ul.see_hidden{
            display: none;
        }
        .box_second .container > .box_second_content > div:nth-child(2) ul li {
            display: flex;
        }
        .box_second .container > .box_second_content > div:nth-child(2) ul li p.name_text{
            font-weight: 700;
            font-size: 18px;
            line-height: 130%;
            color: #173775 !important;
            margin: 0 0 4px;
        }
        .box_second .container > .box_second_content > div:nth-child(2) ul li p.descrip_text{
            font-weight: 400;
            font-size: 14px;
            line-height: 130%;
            color: #506897 !important;
        }
        .box_second .container > .box_second_content > div:nth-child(2) ul li .img_wrap{
            max-width: 72px;
            max-height: 72px;
            width: 100%;
            height: 100%;
            margin-right: 12px;
        }
        /*box_third */
        .main_section .box_third h2{
            font-weight: 700;
            font-size: 28px;
            line-height: 130%;
            color: #173775 !important;
            text-align: left;
            margin-bottom: 24px;
        }
        .main_section .box_third{
            background: #DEE8F1;
        }
        .main_section .box_third ul{
            display: flex;
            margin: 0;
        }
        .main_section .box_third ul li{
            width: 50%;
        }
        .main_section .box_third ul li + li{
            margin-left: 32px;
        }
        .main_section .box_third ul li p{
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #505050 !important;
            margin: 0;
        }
        .main_section .box_third ul li p + p{
            margin-top: 16px;
        }
        .main_section .box_third ul li:nth-child(2) > div{
            padding: 12px;
            background: #FFFFFF;
            display: flex;
            justify-content: space-between;
            margin: 16px 0;
        }
        .main_section .box_third ul li:nth-child(2) > div p{
            line-height: 21px;
        }
        .main_section .box_third ul li:nth-child(2) > div > span{
            margin-right: 4px;
        }
        .main_section .box_third ul li > div p > span{
            font-weight: 600;
        }

      </style>
      `

      let notFirstVisitStickyBlock = /*html */ `
        <div class="sticky_new_header">
          <p>Special Offer - Ends in <span>7</span> <span>days</span></p>
          <div>
            <div>
              <span>$497</span>
              <span>$297</span>
              <span>You save $200</span>
              <button>EnRoll now</button>
            </div>
          </div>
        </div>
    `

      let newHeaderLogo = /*html */ `
        <div class="new_header_logo">
          <img src="" alt="" />
        </div>
    `

      let dogBadBehavior = /*html */ `
        <div class="dog_bad_behavior">
        </div>
    `

      let onClickPlay = /*html */ `
        <div class="click_play">
          <p>Click <strong>play</strong> to gain special access to training methods that will unlock your dog's best behavior</p>
        </div>
    `

      let firstVisitNewBlock = /*html */ `
        <section class="main_section">
          <div class="box_second">
            <div class="container">
                <div class="box_second_content">
                  <div>
                    <h3>Topics covered in this video:</h3>
                    <ul>
                      <li>
                        <span></span>
                        <p><strong>3 key rules</strong> that will make your dog as well-behaved as a service dog</p>
                      </li>
                      <li>
                        <span></span>
                        <p>A <strong>secret technique for relaxing walks</strong> - your dog will never tug on the leash again</p>
                      </li>
                      <li>
                        <span></span>
                        <p>The non-verbal language that will make <strong>your dog listen to you</strong></p>
                      </li>
                      <li>
                        <span></span>
                        <p>How to get your dog to calmly introduce themselves to your house-guests <strong>(No more jumping!)</strong></p>
                      </li>
                      <li>
                        <span></span>
                        <p>Finally eliminate unnecessary <strong>barking</strong>!</p>
                      </li>
                      <li>
                        <span></span>
                        <p>Preventing <strong>dog-related accidents in your home</strong></p>
                      </li>
                    </ul>
                    <ul class="see_hidden">
                      <li>
                        <span></span>
                        <p>Why you should <strong>wean your dog away from treats</strong>, and how to do it</p>
                      </li>
                      <li>
                        <span></span>
                        <p>The <strong>2 foundational commands</strong> that will make your dog obedient</p>
                      </li>
                      <li>
                        <span></span>
                        <p>How to get <strong>your dog to come to you whenever you call</strong> - just by saying their name</p>
                      </li>
                      <li>
                        <span></span>
                        <p><strong>‘Puppy push-ups’</strong>, why your dog should do them</p>
                      </li>
                      <li>
                        <span></span>
                        <p>The easiest ways to get your dog to master <strong>impulse control</strong></p>
                      </li>
                      <li>
                        <span></span>
                        <p>How to make your dog 'popular' with other animals - (and get rid of their <strong>aggressive behavior</strong>!)</p>
                      </li>
                    </ul>
                    <span class="see_more_btn"><b>See more</b></span>
                  </div>
                  <div>
                    <h3>The workshop is conducted by:</h3>
                    <ul>
                      <li>
                        <div class="img_wrap">
                          <img src="${imgFolderUrl}mentor1.jpg" alt="woman" />
                        </div>
                        <div>
                          <p class="name_text">Dr. Alexa Diaz, PhD</p>
                          <p class="descrip_text">Nationally recognized as one of the best service dog trainers in the U.S.</p>
                        </div>
                      </li>
                      <li>
                        <div class="img_wrap">
                          <img src="${imgFolderUrl}mentor2.jpg" alt="men" />
                        </div>
                        <div>
                          <p class="name_text">Eric Presnall</p>
                          <p class="descrip_text">Judge & Host of Animal Planet's Hit Show "Who Let The Dogs Out"</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <button class="watch_free_workshop_btn">Watch free workshop</button>
            </div>
          </div>
          <div class="box_third">
            <div class="container">
                <h2>There is a reason why service dogs always form extraordinarily strong bonds with their human partners...</h2>
                <ul>
                  <li>
                    <div class="img_wrap">
                      <img src="${imgFolderUrl}box_third_photo.jpg" alt="woman with dog" />
                    </div>
                  </li>
                  <li>
                    <p>
                      <strong>YouTube and $9.99 dog training books</strong> will make you think that verbal commands such as "sit", "stay", etc. are all that you need....but if you follow
                      that advice you will be making one of the <strong>BIGGEST mistakes</strong> in dog training.
                    </p>
                    <p>
                      <strong>The above workshop will reveal the real</strong> way to get service-dog levels of obedience from your dog - as taught by REAL & nationally recognized
                      service-dog training professionals.
                    </p>
                    <div>
                      <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1873_10367)">
                        <path d="M9.16663 13.4998H10.8333V15.1665H9.16663V13.4998ZM9.16663 6.83317H10.8333V11.8332H9.16663V6.83317ZM9.99163 2.6665C5.39163 2.6665 1.66663 6.39984 1.66663 10.9998C1.66663 15.5998 5.39163 19.3332 9.99163 19.3332C14.6 19.3332 18.3333 15.5998 18.3333 10.9998C18.3333 6.39984 14.6 2.6665 9.99163 2.6665ZM9.99996 17.6665C6.31663 17.6665 3.33329 14.6832 3.33329 10.9998C3.33329 7.3165 6.31663 4.33317 9.99996 4.33317C13.6833 4.33317 16.6666 7.3165 16.6666 10.9998C16.6666 14.6832 13.6833 17.6665 9.99996 17.6665Z" fill="#794E15"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1873_10367">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                      </span>
                      <p>
                        <span>NOTE:</span> This workshop will not qualify your dog as an officially certified service dog. However, it will allow them to be as calm, well-behaved, and
                        well-trained as a service dog.
                      </p>
                    </div>
                    <button class="watch_free_workshop_btn">Watch free workshop</button>
                  </li>
                </ul>
            </div>
          </div>
        </section>
    `

      let moreThirtyMinsBlock = /*html */ `
        <div class="more_thirty_mins_block">
          <div>
            <img src="" alt="" />
            <p>Special Offer - Ends in <span>7</span> <span>days</span></p>
          </div>
          <div>
            <div>
              <p>Total Transformation Masterclass</p>
              <span>$497</span>
              <span>$297</span>
              <span>You save $200</span>
            </div>
            <button>EnRoll now</button>
            <div>
              <span></span>
              <p>90-day refund policy</p>
            </div>
            <p>
              Join now to discover <strong>key techniques</strong> for addressing <strong>housebreaking issues</strong> as well as <strong>barking, jumping, bitings</strong>, and
              <strong>other unwanted behavior</strong>. Your dog is only one masterclass away from being as obedient as a service dog.
            </p>
          </div>
        </div>
    `

      document.head.insertAdjacentHTML("beforeend", style)
      document.querySelector(".count_sec")?.insertAdjacentHTML("afterbegin", firstVisitNewBlock)

      for (const badBehavior in objBadBehavior) {
        if (true) {
          let cityObj = objBadBehavior[badBehavior]
          console.log(`<div class="dog_bad_behavior"><p>${cityObj.text}</p></div>`)
          if (document.querySelector(".dogs_name")) {
            document.querySelector(".dogs_name").textContent = getURLParameter("dogname")
          }
        }
      }

      onClickSeeMore()

      // click on See more/less
      function onClickSeeMore() {
        document.querySelector(".see_more_btn")?.addEventListener("click", function (e) {
          console.log(e.currentTarget.previousElementSibling)
          e.currentTarget.previousElementSibling.classList.toggle("see_hidden")
        })
      }

      // getURLParameter 'dogname'
      function getURLParameter(name) {
        return decodeURIComponent((RegExp(name + "=" + "(.+?)(&|$)").exec(location.search) || [, null])[1] || "")
      }
    }
  })
}
