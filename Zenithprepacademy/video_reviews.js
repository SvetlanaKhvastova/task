let videoReviews = setInterval(() => {
  if (document.querySelector("#container-60629")) {
    clearInterval(videoReviews)
    if (window.innerWidth > 768) {
      // cdn slider
      let scriptCustomSlider = document.createElement("script")
      scriptCustomSlider.src = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"
      scriptCustomSlider.async = false
      document.head.appendChild(scriptCustomSlider)

      let scriptCustomSliderStyle = document.createElement("link")
      scriptCustomSliderStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      scriptCustomSliderStyle.rel = "stylesheet"
      document.head.appendChild(scriptCustomSliderStyle)
    }

    let styleNew = /*html */ `
    <style>
        #col-full-100-165-114 .elHeadline.hsSize3{
            font-family: 'Oxygen', sans-serif;
            font-size: 30px !important;
            line-height: 38px;
            color: #2D2D2D;
        }
        #headline-94582-131-125 .elHeadline{
            font-family: 'Oxygen', sans-serif;
            font-size: 15px !important;
            line-height: 24px;
            color: #9E0031;
        }
        #tmp_headline1-29319-159-179{
            margin-top: 8px;
        }
        #tmp_headline1-29319-159-179 h1{
            font-family: 'Oxygen', sans-serif;
            font-weight: 400;
            font-size: 14px !important;
            line-height: 24px;
            color: #505050;
        }
        #tmp_customjs-62482-167-102{
            margin-top: 20px !important;
        }
        .timeline__title{
            font-family: 'Oxygen', sans-serif;
            font-size: 24px !important;
            line-height: 32px !important;
            color: #2D2D2D;
        }
        .timeline__list{
            margin-top: 28px !important;
        }
        .timeline__item .timeline__item-title,
        .timeline__item .timeline__item-time{
            color: #505050;
        }
        .timeline__item .timeline__note{
            border: 1px solid #505050;
        }
        .timeline__item .timeline__note .timeline__item-title{
            font-weight: 700;
            color: #2D2D2D;
            max-width: 270px;
        }
        .timeline__item .timeline__note .timeline__item-time{
            font-family: 'Oxygen', sans-serif !important;
        }
        .timeline__item .timeline__note .timeline__item-caption{
            font-family: 'Oxygen', sans-serif;
            margin-top: 4px;
            font-weight: 700;
        }
        .timeline__list .timeline__item.done .timeline__item-title:before,
        .timeline__list .timeline__item.active .timeline__item-title:before{
            background-color: #F29B38;
        }
        .timeline__list .timeline__item.active:before{
            background-color: #F29B38;
            border-color: #F29B38;
        }
        .timeline__list .timeline__item.done:before {
            border-color: #F29B38;
        }
        .timeline__list .timeline__item.active .timeline__item-title{
            color: #F29B38;
        }
        .timeline .timeline__list:before{
            background: #D2DFED;
        }
        .timeline .timeline__item:before{
            border: 1px solid #D2DFED;
        }
        .timeline .timeline__item:after{
            background-color: #D2DFED;
        }
        .timeline__list .timeline__item.done:after{

        }
        #container-60629{
            padding: 40px 20px 28px !important;
            background: #F7F7F7 !important;
        }
        #col-full-117-165-113 > div,
        #col-full-157-185-130 > div{
            padding: 0 !important;
        }
        .timeline{
            margin: 0 0 16px !important;
        }
        #row-186{
            display: none;
        }
        #row-165{
            padding: 32px 0 0 !important;
        }
        a.schedule_new_btn {
            background: #F29B38;
            border: 2px solid #C27C2D;
            box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.3);
            border-radius: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            max-width: 350px;
            width: 100%;
            margin: 0 auto;
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;
            text-align: center;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            color: #2D2D2D;
            font-family: 'Oxygen', sans-serif;
            text-decoration: unset;
            padding: 10px;
            outline: unset;
        }
        .is_sticky_box{
            padding: 20px;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 10;
            background: #F7F7F7;
            display: none;
        }
        #reviewsBlock{
            margin: 0 20px;
            padding: 32px 0;
            background: #FFFFFF;
        }
        #reviewsBlock > h2{
            font-family: 'Oxygen', sans-serif;
            font-weight: 700;
            font-size: 20px;
            line-height: 28px;
            color: #2D2D2D;
            margin-bottom: 8px;
            max-width: 300px;
        }
        .btn_slider_wrap{
            display: none;
        }
        .review_nav{
            display: flex;
            flex-direction: column;
        }
        .review_card{
            background: #F4F4F4;
            border: 1px solid #2D2D2D;
            border-radius: 24px;
            padding: 16px 16px 35px;
            margin-top: 20px;
        }
        .review_card:nth-child(1){
            order: 7;
        }
        .review_card:nth-child(2){
            order: 1;
        }
        .review_card:nth-child(3){
            order: 2;
        }
        .review_card:nth-child(4){
            order: 3;
        }
        .review_card:nth-child(5){
            order: 4;
        }
        .review_card:nth-child(6){
            order: 5;
        }
        .review_card:nth-child(7){
            order: 6;
        }
        .review_card:nth-child(8){
            order: 8;
        }
        .review_card .review_card_title{
            font-weight: 700;
            font-size: 15px;
            line-height: 20px;
            color: #2D2D2D;
            margin: 0;
        }
        .review_card_info{
            display: flex;
            align-items: center;
            margin: 12px 0 15px;
        }
        .review_card_info span:first-child{
            font-family: "Roboto", sans-serif;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            color: #FCFCFE;
            background: #001250;
            border-radius: 42px;
            max-width: 42px;
            max-height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            min-height: 42px;
        }
        .review_card_info span.review_card_email{
            font-family: 'Oxygen', sans-serif;
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            color: #2D2D2D;
            margin-left: 8px;
        }
        .review_card_descr{
            background: #FFFFFF;
            border-radius: 16px;
            padding: 32px 16px;
        }
        .review_card_descr p{
            font-family: 'Oxygen', sans-serif;
            font-weight: 400;
            font-size: 13.5px;
            line-height: 21px;
            color: #505050;
        }
        .review_card_descr p + p{
            margin-top: 15px;
        }
        @media (max-width: 360px) {
            #headline-94582-131-125 .elHeadline,
            a.schedule_new_btn{
                font-size: 12px !important;
            }
            .timeline__item .timeline__note .timeline__item-caption{
                font-size: 11px;
            }
        }
        @media (max-width: 320px) {
            #headline-94582-131-125 .elHeadline,
            a.schedule_new_btn,
            .review_card .review_card_title{
                font-size: 14px !important;
            }
            .timeline__item .timeline__note .timeline__item-caption{
                font-size: 10px;
            }
            .fullContainer .containerInner{
                min-width: unset !important;
            }
            .review_card_info span.review_card_email{
                font-size: 11px;
            }
            #reviewsBlock > h2{
                font-size: 18px;
            }
        }
        @media (min-width: 768px) {
            #reviewsBlock{
                margin: 0;
                padding: 72px 0 64px;
            }
            .review_nav{
                padding: 0 135px;
            }
            #reviewsBlock > h2{
                font-size: 42px;
                line-height: 50px;
                margin: 0 auto 56px;
                max-width: 678px;
                text-align: center;
            }
            .review_nav .slick-arrow {
            position: absolute;
            bottom: -80px;
            z-index: 2;
            cursor: pointer;
            opacity: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            border: 2px solid #3d78ba;
            line-height: 0;
            font-size: 0;
            background: #F3F3F3 !important;
          }
          .review_nav .slick-dots{
                display: flex !important;
                    align-items: center;
    justify-content: center;
          }
          .review_card{
                padding: 20px 16px 16px;
    margin-top: 0;
          }
          .review_card_descr{
                min-height: 485px;
          }
          .review_card .review_card_title{
            min-height: 40px;
          }
          .review_nav .slick-arrow.slick-prev {
            left: 45%;
          }
          .review_nav .slick-arrow.slick-next {
            right: 45%;
          }
          .review_nav .slick-arrow.slick-next::after,
          .review_nav .slick-arrow.slick-prev::after {
            position: absolute;
            content: "";
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 16px;
            height: 16px;
          }
          .review_nav .slick-arrow.slick-next::after {
            background-image: url(https://conversionratestore.github.io/projects/grantme/img/slick-next.svg);
            background-size: auto;
            background-repeat: no-repeat;
            background-position: center center;
          }
          .review_nav .slick-arrow.slick-prev::after {
            background-image: url(https://conversionratestore.github.io/projects/grantme/img/slick-prev.svg);
            background-size: auto;
            background-repeat: no-repeat;
            background-position: center center;
          }
          .slick-slide > div {
            padding: 0 20px;
          }
          .reviews_wrap {
            overflow: hidden;
            margin: 0 auto;
            padding: 0 0 80px;
          }
          .review_nav .slick-list {
            overflow: visible;
          }
          .reviews_block {
            position: relative;
            padding: 40px 74px;
            opacity: 0;
            transition: all 0.35s ease;
          }
        }
    </style>
    `
    let arrR = {
      CL: [
        `Re: Your upcoming appointment is starting in approximately 10 minutes`,
        `<p>Hi Kevin;</p><p>Thank you very much for the conference on Friday. It was really eye-opening and very useful for us!!! We would really like to have the conference with our son. Unfortunately we cannot make it this Tuesday, as we ve discussed, he have a commitment I forgot about it. I apologize about that.</p><p>Since this week is the MEA week in Minnesota and we ll be away, we are wondering if we can reschedule the conference for the following week, maybe the 19th or 20th October, or whenever it is convenient for you.</p><p>We are looking forward to working with you.</p><p>All the best,</p><p>********</p>`,
      ],
      N: [
        `Re: College lecture - video recording / appointments`,
        `<p>Hello Kevin,</p><p>Thank you for taking time today to walk us through the college prep path. We found the conversation very informative and helped us understand the importance of counselor’s role in our kids education. Your thoughtfulness in building a strong offense of story telling per kid was inspirational and stayed with us even after the meet.</p><p>Please help schedule time with William on Nov 1st @9;00PM so we can take this path forward with Zenith.</p><p>Thanks,</p><p>********</p>`,
      ],
      R: [
        `Re: Interview confirmation w/ Zenith Prep Academy`,
        `<p>Hello Kevin,</p><p>Thank you for the email and for your time, Friday. It was a great pleasure talking to you, gaining valuable insights into college applications.</p>`,
      ],
      KJ: [
        `Re: Interview confirmation (today)`,
        `<p>Thanks Kevin!</p><p>We went slightly over the hour but definitely enjoyed our meeting with Will. Really appreciate the time that both of you extended in meeting with us and explaining your process and learning about our needs and expectations. Look forward to an update from you.</p><p>Thanks,</p><p>******</p>`,
      ],
      SG: [
        `Re: College lecture - video recording / appointments`,
        `<p>Hi Kevin,</p><p>I thoroughly enjoyed your lecture, it was super informative and we (my husband and I) would like to meet with you and our son (*** - 8th grader) to talk through our goals and your college counseling services as well as classes.</p><p>Thanks,</p><p>******</p>`,
      ],
      "S-": [`Re: Confirmation / Zenith Prep Academy`, `<p>Hi Kevin - got your email. Btw - Thanks a lot for the fantastic info today. Much appreciated.</p>`],
      RK: [
        `Re: Interview confirmation`,
        `<p>Thanks Kevin. Nice meeting you. Will see you on 11/25.</p><p>Have a great week.</p><p>BTW. ******* was impressed by your knowledge anf the program. She is not someone who is easily impressed.</p>`,
      ],
      AG: [
        `Thank You!`,
        `<p>Hello Mr. Kevin,</p><p>Thank you for all your help and time. The zoom sessions really confirmed my interest about enrolling in a program like yours. I really appreciate all of the insight and knowledge that you went out of your way to give me and hopefully I will get to work with Zenith in the future.</p><p>Best,</p><p>********</p>`,
      ],
    }

    let reviewsHtml = /*html */ `
    <div id="reviewsBlock">
      <h2>Hear what parents just like you think of Zenith after their college planning session with us</h2>
      <div class="reviews_wrap">
        <div class="review_nav"></div>
      </div>
    </div>
      `

    function setList(name, title, text) {
      return `
            <div class="review_card">
                <h3 class="review_card_title">${title}</h3>
                <div class="review_card_info">
                    <span>${name}</span>
                    <span class="review_card_email">to Kevin Hong &#60;kevin@zenithprepacademy.com&#62;</span>
                </div>
                <div class="review_card_descr">${text}</div>
            </div>
        `
    }

    document.head.insertAdjacentHTML("beforeend", styleNew)
    document.querySelector(".mobile-iframe").src = "https://player.vimeo.com/video/790201146?h=eda73cb7b6&loop=1&title=0&byline=0&portrait=0"

    if (!document.querySelector("#reviewsBlock")) {
      document.querySelector("#container-60629").insertAdjacentHTML("afterend", reviewsHtml)
    }
    if (document.querySelector("#reviewsBlock")) {
      for (let key in arrR) {
        document.querySelector(".review_nav").insertAdjacentHTML("beforeend", setList(key, arrR[key][0], arrR[key][1]))
      }
    }

    if (window.innerWidth <= 768) {
      if (!document.querySelector(".first_var")) {
        document.querySelector("#row-165").insertAdjacentHTML(
          "beforebegin",
          `<a target="_blank" class="schedule_new_btn first_var" data-count="1" rel="noopener noreferrer" href="https://webinar.zenithprepacademy.com/booking-page1666161342817"
          >Schedule A Free<br/>College Planning Session Now</a>`
        )
      }
      if (!document.querySelector(".second_var")) {
        document.querySelector("#row-165").insertAdjacentHTML(
          "afterend",
          `<a target="_blank" class="schedule_new_btn second_var" data-count="2" rel="noopener noreferrer" href="https://webinar.zenithprepacademy.com/booking-page1666161342817"
          >Schedule A Free<br/>College Planning Session Now</a>`
        )
      }
      if (document.querySelector("#reviewsBlock")) {
        document.querySelector("#reviewsBlock").insertAdjacentHTML(
          "afterend",
          `<div class="is_sticky_box"><a target="_blank" class="schedule_new_btn second_var" data-count="2" rel="noopener noreferrer" href="https://webinar.zenithprepacademy.com/booking-page1666161342817"
          >Schedule A Free<br/>College Planning Session Now</a></div>`
        )
      }
      const element = document.querySelector("#container-60629")

      function visible(target) {
        if (target.getBoundingClientRect().bottom < 0) {
          if (document.querySelector(".is_sticky_box")) {
            document.querySelector(".is_sticky_box").style.display = "block"
            document.querySelector("#reviewsBlock").style.paddingBottom = "130px"
          }
        } else {
          if (document.querySelector(".is_sticky_box")) {
            document.querySelector(".is_sticky_box").style.display = "none"
            document.querySelector("#reviewsBlock").style.paddingBottom = "32px"
          }
        }
      }

      window.addEventListener("scroll", function () {
        visible(element)
      })

      visible(element)
    } else {
      if (!document.querySelector(".first_var")) {
        document.querySelector("#row-165").insertAdjacentHTML(
          "afterend",
          `<a target="_blank" class="schedule_new_btn first_var" data-count="1" rel="noopener noreferrer" href="https://webinar.zenithprepacademy.com/booking-page1666161342817"
          >Schedule A Free<br/>College Planning Session Now</a>`
        )
      }
    }

    if (window.innerWidth > 768) {
      let slickInterval = setInterval(() => {
        if (typeof jQuery(".review_nav").slick === "function" && document.querySelector(".review_nav .review_card")) {
          clearInterval(slickInterval)

          //  slider
          let slider = jQuery(".review_nav").slick({
            slidesToShow: 2.55,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            // adaptiveHeight: true,
            infinite: false,
          })
          slider.on("swipe", function () {
            // pushDataLayer("swipe slider")
          })

          document.querySelectorAll(".review_nav .slick-arrow").forEach((el) => {
            el.addEventListener("click", () => {
              // pushDataLayer("click on btn slider")
            })
          })
        }
      }, 100)
    }

    document.querySelectorAll(".timeline__item-time")[1].textContent = "(3:56)"
    document.querySelectorAll(".timeline__item-time")[2].textContent = "(10:52)"
    document.querySelectorAll(".timeline__item-time")[3].textContent = "(15:49) — Critical information."
    document.querySelectorAll(".timeline__item-time")[4].textContent = "(19:52)"
    document.querySelectorAll(".timeline__item-time")[5].textContent = "(32:48)"
    document.querySelectorAll(".timeline__item-time")[6].textContent = "(44:50)"
    document.querySelectorAll(".timeline__item-time")[7].textContent = "(1:02:13)"

    handleTimeline()

    function handleTimeline() {
      if (!document.querySelector(".timeline__item.active")) {
        document.querySelector(".timeline__item").classList.add("active")
      }

      let iframe = document.querySelector(".fluid-width-video-wrapper iframe")
      if (window.innerWidth < 768) {
        iframe = document.querySelector(".elCustomJs iframe")
      }

      let playerEl = new Vimeo.Player(iframe)

      setInterval(() => {
        playerEl.getCurrentTime().then(function (time) {
          console.log(time, `time!!!!!!!!!!!!!!!!!!!!!!`)
          if (!document.querySelector(".timeline__item.active")) return false

          if (time >= 50 && time < 3 * 60 + 56) {
            document.querySelectorAll(".timeline__item").forEach((el) => {
              if (el.classList.contains("done")) {
                el.classList.remove("done")
              }
            })
          } else if (time >= 3 * 60 + 56 && time < 10 * 60 + 52) {
            document.querySelector(".timeline__item.active").classList.remove("active")
            document.querySelector(".timeline__item:nth-child(2)").classList.add("active")
          } else if (time >= 10 * 60 + 52 && time < 15 * 60 + 49) {
            document.querySelector(".timeline__item.active").classList.remove("active")
            document.querySelector(".timeline__item:nth-child(3)").classList.add("active")
          } else if (time >= 15 * 60 + 49 && time < 19 * 60 + 52) {
            document.querySelector(".timeline__item.active").classList.remove("active")
            document.querySelector(".timeline__item:nth-child(4)").classList.add("active")
          } else if (time >= 19 * 60 + 52 && time < 32 * 60 + 48) {
            document.querySelector(".timeline__item.active").classList.remove("active")
            document.querySelector(".timeline__item:nth-child(5)").classList.add("active")
          } else if (time >= 32 * 60 + 48 && time < 44 * 60 + 50) {
            document.querySelector(".timeline__item.active").classList.remove("active")
            document.querySelector(".timeline__item:nth-child(6)").classList.add("active")
          } else if (time >= 44 * 60 + 50 && time < 60 * 60 + 2.13) {
            document.querySelector(".timeline__item.active").classList.remove("active")
            document.querySelector(".timeline__item:nth-child(7)").classList.add("active")
          } else if (time > 60 * 60 + 2.13 && time < 3957) {
            document.querySelector(".timeline__item.active").classList.remove("active")
            document.querySelector(".timeline__item:nth-child(8)").classList.add("active")
          } else if (time >= 3957) {
            document.querySelector(".timeline__item:nth-child(8)").classList.add("done")
            document.querySelector(".timeline__item.active").classList.remove("active")
          }
          clearOtherTimelines()
        })
      }, 2000)
    }

    function clearOtherTimelines() {
      if (document.querySelector(".timeline__item.active")) {
        document.querySelector(".timeline__item.active").classList.remove("done")

        let nextEl = document.querySelector(".timeline__item.active").nextElementSibling

        let prevEl = document.querySelector(".timeline__item.active").previousElementSibling

        while (nextEl) {
          nextEl.classList.remove("done", "active")
          nextEl = nextEl.nextElementSibling
        }

        while (prevEl) {
          prevEl.classList.remove("active")
          prevEl.classList.add("done")
          prevEl = prevEl.previousElementSibling
        }
      }
    }
  }
}, 500)
