let treblehealthCalendar = setInterval(() => {
  if (document) {
    clearInterval(treblehealthCalendar);
    let newStyle = /*html */ `
    <style>
        /*main */
        #lp-pom-root{
            display: none;
        }
        /* */
        .new_body{
            background: #FFF;
        }
        .new_body p{
          color: #202B47;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          margin: 0;
        }
        .container_var{
            max-width: 1136px;
            width: 95%;
            margin: 0 auto;
        }
        .main_title{
            color: #2E168D;
            font-size: 40px;
            font-weight: 800;
            line-height: 50px;
            margin: 0;
        }
        .sub_title{
            color: #2E168D;
            font-size: 30px;
            font-weight: 800;
            line-height: 40px;
            margin: 0;
        }
        .grab_your_free_btn{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            max-width: 310px;
            height: 62px;
            color: #FFF;
            font-size: 18px;
            font-weight: 800;
            line-height: 28px;
            margin: 28px 0 0;
            border-radius: 5px;
            border: 2px solid #FF2E1F;
            background: #FF2E1F;
            cursor: pointer;
        }
        /*exclusiveBonusBlock */
        #exclusiveBonusBlock{
            padding: 80px 0 0;
        }
        .exclusive_bonus_wrapp{
          display: flex;
          align-items: center;
          max-width: 944px;
          margin: 0 auto;
          border-radius: 8px;
border: 1px solid #E5E5E5;
background: #FFF;
box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.12);
        }
        .exclusive_bonus_wrapp li:nth-child(1){
          padding: 28px;
        }
        .exclusive_bonus_wrapp .sub_title{
          margin-bottom: 12px;
        }
        .exclusive_bonus_wrapp .accent_color{
font-weight: 700;
color: #2E168D;
margin-bottom: 20px;
        }
        .exclusive_bonus_wrapp img{
          display: block;
    border-radius: 8px;
        }
        /*ourPatientsLoveTrebleHealthBlock */
        #ourPatientsLoveTrebleHealthBlock{
            padding: 80px 0;
        }
        .our_patients_treble_health_wrapp .main_title{
          max-width: max-content;
          margin: 0 auto 8px;
        }
        .our_patients_treble_health_wrapp > p{
          max-width: 559px;
          margin: 0 auto 48px;
          text-align: center;
        }
        /*whoShouldAttendBlock */
        #whoShouldAttendBlock{
             padding: 40px 0 80px;
        }
        .who_should_attend_wrapp{
          display: flex;
          gap: 36px;
        }
        .who_should_attend_descr .main_title{
          margin-bottom: 8px;
        }
        .who_should_attend_descr_list{
          margin: 20px 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .who_should_attend_item:nth-child(1){
          display: flex;
          max-width: 560px;
          border-radius: 8px;
border: 1px solid #E5E5E5;
background: #FFF;
box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.12);
        }
        .who_should_attend_item:nth-child(1) > div:nth-child(2) {
          padding: 28px;
          position: relative;
        }
        .who_should_attend_item:nth-child(1) > div:nth-child(2)::after{
position: absolute;
    content: "";
    width: 73px;
    height: 48px;
    background: url(https://conversionratestore.github.io/projects/treblehealth/img/arrow_icon.svg) center no-repeat;
    background-size: contain;
    bottom: 59px;
    right: -19px
        }
        .who_should_attend_item:nth-child(1) > div > p{
          margin-top: 20px;
        }
        .who_should_attend_descr_link{
          position: relative;
          padding-left: 32px;
        }
        .who_should_attend_descr_link::before{
          position: absolute;
          content: "";
              width: 20px;
    height: 20px;
    background: url(https://conversionratestore.github.io/projects/treblehealth/img/check_icon.svg) center no-repeat;
    background-size: contain;
    border-radius: 0;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
        }
        .who_should_attend_descr_link p{
          color: #2E168D;
        }
        .who_should_attend_item:nth-child(1) .img_wrapp{
          position: relative;
          max-width: 251px;
    width: 100%;
    overflow: hidden;
        }
        .who_should_attend_item:nth-child(1) .img_wrapp img{
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }
        .who_should_attend_item:nth-child(1) .img_wrapp p.name_founder{
          position: absolute;
          bottom: 0;
          color: #FFF;
font-size: 12px;
font-weight: 400;
line-height: 16px;
background: rgba(139, 139, 139, 0.50);
padding: 12px;
width: 100%;
        }
        .who_should_attend_item:nth-child(1) .img_wrapp p.name_founder span{
              max-width: 165px;
    display: inline-block;
        }
        /*yourHostsBlock */
        #yourHostsBlock{
            padding: 0 0 80px;
        }
        .your_hosts_wrapp .main_title{
          max-width: max-content;
          margin: 0 auto 48px;
        }
        .your_hosts_list{
          display: flex;
          gap: 36px;
        }
        .your_hosts_list > li{
border-radius: 8px;
border: 1px solid #E5E5E5;
background: #FFF;
box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.12);
padding: 40px;
        }
        .host_full_info{
          display: flex;
          align-items: center;
    gap: 16px;
          margin-bottom: 16px;
        }
        .host_name{
          color: #2E168D;
font-size: 18px;
font-weight: 800;
line-height: 26px;
margin-bottom: 8px;
        }
        .your_hosts_list p.host_doctor_of{
          color: #0A0A0A;
font-size: 14px;
font-weight: 600;
line-height: 20px;
        }
        .your_hosts_list p.host_descr{
          color: #0A0A0A;
        }
        /*clinicallyProvenResultsBlock */
        #clinicallyProvenResultsBlock{
            background: #EFECFB;
            padding: 80px 0;
        }
        /*trustpilotBlock */
        #trustpilotBlock{
            background: #EFECFB;
            padding: 40px 0 80px;
        }
        /*frequentlyAskedQuestionsBlock */
        #frequentlyAskedQuestionsBlock{
            padding: 80px 0;
        }
        /*verifiedReviewsOnGoogleBlock */
        #verifiedReviewsOnGoogleBlock{
            background: #FBFAFE;
            padding: 80px 0;
        }
        .verified_reviews_on_google_wrapp .main_title{
          max-width: max-content;
          margin: 0 auto 48px;
        }
        .ti-reviews-container-wrapper{
          overflow: visible;
          display: flex;
          -ms-flex-wrap: nowrap;
          flex-wrap: nowrap;

        }
        .ti-column{
-ms-flex: 0 0 33.333%;
    flex: 0 0 33.333%;
    max-width: 33.333%;
        }
       .ti-review-item {
    padding: 8px !important;
        transition: transform 300ms ease-out;
}
        .ti-inner{
          border-top-width: 2px !important;
    border-bottom-width: 2px !important;
    border-left-width: 2px !important;
    border-right-width: 2px !important;
    background-color: white !important;
    backdrop-filter: blur(0px);
    border-style: solid !important;
    border-color: #ffffff !important;
    background: #ffffff !important;
    border-radius: 4px !important;
    padding: 20px !important;
    margin: 0 !important;
    display: block;
        }
        .ti-review-header {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    position: relative;
        font-size: 14px;
    line-height: 1.4em;
}
.ti-profile-img {
    margin: 0 15px 0 0 !important;
}
 .ti-profile-img img {
    width: 40px !important;
    height: 40px !important;
    padding: 0px !important;
    display: block;
    border-radius: 30px;
    min-width: initial !important;
    max-width: initial !important;
    object-fit: cover;
    object-position: top;
}
.ti-profile-details {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    margin: 0 !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.ti-review-header:after {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    position: absolute;
    right: 0px;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(https://cdn.trustindex.io/assets/platform/Google/icon.svg);
    background-size: 100% 100%;
}
 .ti-name {
font-size: 18px !important;
    line-height: 28px !important;
    font-weight: 800 !important;
    overflow: hidden;
    padding-right: 25px;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #000000;
    margin-bottom: 2px;
}
.ti-stars{
    margin-bottom: 6px;
    margin-top: 15px;
    text-align: left;
        white-space: nowrap;
    display: block;
}
.ti-star {
    width: 17px;
    height: 17px;
    display: inline-block;
    margin: 0 !important;
    margin-right: 1px !important;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(https://cdn.trustindex.io/assets/platform/Google/star/f.svg) !important;
}
.ti-review-content {
    padding: 0;
    overflow: inherit !important;
    height: unset;
        text-align: left;
    transition: height 0.5s;
    font-style: normal;
    -webkit-line-clamp: 4;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}
.ti-review-content .ti-inner{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    line-height: 21.75px;
    height: 87px;
    font-size: 15px;
    text-align: left;
    transition: height 0.5s;
    font-style: normal;
    -webkit-line-clamp: 4;
    overflow: hidden;
    padding-right: 0;
    height: unset;
    max-height: 87px;
}
.ti-highlight {
    padding: 1px 2px;
    margin: 0;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
    border-radius: 1px;
    -webkit-border-radius: 1px;
    -moz-border-radius: 1px;
    background-color: transparent !important;
    background-image: linear-gradient(#fbe049, #fbe049);
    background-size: 100% 19px;
    background-position: bottom;
    background-repeat: no-repeat;
    color: #000 !important;
    font-size: inherit !important;
}
.ti-read-more {
    font-size: 16px !important;
    line-height: 25px !important;
    font-weight: 800 !important;
        display: block;
    padding: 5px 0 0;
    text-align: left;
}
 .ti-read-more span {
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    font-size: 13.5px;
    color: #000000;
    opacity: 0.5;
    text-decoration: none !important;
    transition: color 300ms ease-out;
    cursor: pointer;
}
.ti-review-item:hover {
    -webkit-transform: translate(0, -5px);
    -ms-transform: translate(0, -5px);
    transform: translate(0, -5px);
}
        /*completeRecoveryBlock */
        #completeRecoveryBlock{
            padding: 80px 0;
        }
        #completeRecoveryBlock .complete_recovery_wrapp{
          display: flex;
          align-items: center;
          gap: 36px;
        }
        .complete_recovery_wrapp .img_wrapp{
          border-radius: 16px;
        }
        .complete_recovery_wrapp .main_title{
          margin-bottom: 12px;
        }
    </style>
    `;

    let newHtml = /*html */ `
    <div class="new_body">
        <section id="exclusiveBonusBlock">
          <div class="container_var">
            <ul class="exclusive_bonus_wrapp">
              <li>
                <h3 class="sub_title">Exclusive Bonus!</h3>
                <p class="accent_color">You will receive the “Tinnitus Guide: 2023 Edition” for FREE.</p>
                <p>This guide covers today's leading tinnitus treatments, how to find the root cause, and the newest research. It's an in-depth overview for managing tinnitus.</p>
                <button class="grab_your_free_btn">Grab Your FREE Seat Now!</button>
              </li>
              <li>
                <div class="img_wrapp">
                  <img src="https://conversionratestore.github.io/projects/treblehealth/img/tinnitus_guide_img.png" alt="book" />
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section id="ourPatientsLoveTrebleHealthBlock">
          <div class="container_var">
            <div class="our_patients_treble_health_wrapp">
              <h2 class="main_title">Why Our Patients Love Treble Health</h2>
              <p>We're proud of all the patients our solution has helped, and we're confident it will work for you too:</p>
            </div>
          </div>
        </section>
        <section id="whoShouldAttendBlock">
          <div class="container_var">
            <ul class="who_should_attend_wrapp">
              <li class="who_should_attend_item">
                <div class="img_wrapp">
                  <img src="https://conversionratestore.github.io/projects/treblehealth/img/ben_thompson_img.png" alt="man" />
                  <p class="name_founder"><span>Dr. Ben Thompson, AuD Founder of Treble Health</span></p>
                </div>
                <div>
                  <h3 class="sub_title">Spaces are limited and filling up fast</h3>
                  <p>Grab this limited time offer to transform your life today.</p>
                  <p>Click the button to secure your spot!</p>
                </div>
              </li>
              <li class="who_should_attend_item">
                <div class="who_should_attend_descr">
                  <h2 class="main_title">Who Should Attend?</h2>
                  <p>The discovery call is designed for individuals who:</p>
                  <ul class="who_should_attend_descr_list">
                    <li class="who_should_attend_descr_link"><p>Struggle with tinnitus</p></li>
                    <li class="who_should_attend_descr_link"><p>Have been told nothing can be done for their tinnitus</p></li>
                    <li class="who_should_attend_descr_link"><p>Have wasted money on ineffective supplements or treatments</p></li>
                    <li class="who_should_attend_descr_link"><p>Are near a point of desperation and just need help with their tinnitus</p></li>
                  </ul>
                  <p>If any of the above apply to you, you're in the right place!</p>
                </div>
                <button class="grab_your_free_btn">Grab Your FREE Seat Now!</button>
              </li>
            </ul>
          </div>
        </section>
        <section id="yourHostsBlock">
          <div class="container_var">
            <div class="your_hosts_wrapp">
              <h2 class="main_title">Your hosts:</h2>
              <ul class="your_hosts_list">
                <li>
                  <div class="host_full_info">
                    <div class="img_wrapp">
                      <img src="https://conversionratestore.github.io/projects/treblehealth/img/tatyana_kennedy_img.png" alt="woman" />
                    </div>
                    <div>
                      <h3 class="host_name">
                        Tatyana Kennedy, AuD
                        <svg class="tooltip_toggle" data-tooltip data-title="Doctor of Audiology" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M7 0C3.13428 0 0 3.13541 0 7C0 10.8668 3.13428 14 7 14C10.8657 14 14 10.8668 14 7C14 3.13541 10.8657 0 7 0ZM7 3.10484C7.65473 3.10484 8.18548 3.6356 8.18548 4.29032C8.18548 4.94505 7.65473 5.47581 7 5.47581C6.34527 5.47581 5.81452 4.94505 5.81452 4.29032C5.81452 3.6356 6.34527 3.10484 7 3.10484ZM8.58064 10.2742C8.58064 10.4612 8.42899 10.6129 8.24193 10.6129H5.75806C5.57101 10.6129 5.41935 10.4612 5.41935 10.2742V9.59677C5.41935 9.40972 5.57101 9.25806 5.75806 9.25806H6.09677V7.45161H5.75806C5.57101 7.45161 5.41935 7.29996 5.41935 7.1129V6.43548C5.41935 6.24843 5.57101 6.09677 5.75806 6.09677H7.56452C7.75157 6.09677 7.90323 6.24843 7.90323 6.43548V9.25806H8.24193C8.42899 9.25806 8.58064 9.40972 8.58064 9.59677V10.2742Z" fill="#2E168D" />
                        </svg>
                      </h3>
                      <p class="host_doctor_of">Doctor of Audiology</p>
                    </div>
                  </div>
                  <p class="host_descr">Dr. Kennedy is an Audiologist with over 15 years of experience in creating tailored tinnitus solutions for patients who are looking to get back to living productive and fulfilling lives. She is a mother of two, a wife, an athlete and an avid traveler. She loves all things technology and tells unnecessarily long stories. Most importantly, Dr. Kennedy is committed to helping people make informed decisions about achieving better hearing health and well-being. She graduated with her Doctor of Audiology degree at the University of Florida.</p>
                </li>
                <li>
                  <div class="host_full_info">
                    <div class="img_wrapp">
                      <img src="https://conversionratestore.github.io/projects/treblehealth/img/jackie_smith_img.png" alt="woman" />
                    </div>
                    <div>
                      <h3 class="host_name">
                        Jackie Smith, AuD
                        <svg class="tooltip_toggle" data-tooltip data-title="Doctor of Audiology" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M7 0C3.13428 0 0 3.13541 0 7C0 10.8668 3.13428 14 7 14C10.8657 14 14 10.8668 14 7C14 3.13541 10.8657 0 7 0ZM7 3.10484C7.65473 3.10484 8.18548 3.6356 8.18548 4.29032C8.18548 4.94505 7.65473 5.47581 7 5.47581C6.34527 5.47581 5.81452 4.94505 5.81452 4.29032C5.81452 3.6356 6.34527 3.10484 7 3.10484ZM8.58064 10.2742C8.58064 10.4612 8.42899 10.6129 8.24193 10.6129H5.75806C5.57101 10.6129 5.41935 10.4612 5.41935 10.2742V9.59677C5.41935 9.40972 5.57101 9.25806 5.75806 9.25806H6.09677V7.45161H5.75806C5.57101 7.45161 5.41935 7.29996 5.41935 7.1129V6.43548C5.41935 6.24843 5.57101 6.09677 5.75806 6.09677H7.56452C7.75157 6.09677 7.90323 6.24843 7.90323 6.43548V9.25806H8.24193C8.42899 9.25806 8.58064 9.40972 8.58064 9.59677V10.2742Z" fill="#2E168D" />
                        </svg>
                      </h3>
                      <p class="host_doctor_of">Doctor of Audiology</p>
                    </div>
                  </div>
                  <p class="host_descr">Dr. Smith prides herself on providing excellent patient care and improving the quality of each patient’s life through comprehensive tinnitus treatment. She graduated with her bachelor’s degree in Speech, Language, and Hearing Sciences from the University of Colorado and earned her Doctorate of Audiology at the University of Northern Colorado. Dr. Smith has worked in a variety of clinical settings including private practice, Ear Nose and Throat (ENT), and the Department of Veteran’s Affairs.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="clinicallyProvenResultsBlock">
          <div class="container_var">
            <div class="has_eae_slider elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a3b880b" data-id="a3b880b" data-element_type="column" data-settings='{"background_background":"classic"}'>
  <div class="elementor-widget-wrap elementor-element-populated">
    <div class="elementor-element elementor-element-1cdded2 elementor-widget elementor-widget-heading" data-id="1cdded2" data-element_type="widget" data-widget_type="heading.default">
      <div class="elementor-widget-container">
        <h2 class="elementor-heading-title elementor-size-default">Clinically proven results</h2>
      </div>
    </div>
    <section class="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-16329f5 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-particle_enable="false" data-particle-mobile-disabled="false" data-id="16329f5" data-element_type="section">
      <div class="elementor-container elementor-column-gap-default">
        <div class="has_eae_slider elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-b5cfcb7 cols" data-id="b5cfcb7" data-element_type="column">
          <div class="elementor-widget-wrap elementor-element-populated">
            <div class="elementor-element elementor-element-8f3dd25 elementor-widget__width-auto animation-none animation-none1 elementor-widget elementor-widget-html animated fadeIn" data-id="8f3dd25" data-element_type="widget" data-settings='{"_animation":"fadeIn"}' data-widget_type="html.default">
              <div class="elementor-widget-container">
                <div class="svg-container">
                  <svg width="231" height="230" viewBox="0 0 231 230" fill="none" xmlns="http://www.w3.org/2000/svg" class="circular-chart">
                    <path class="circle-bg" d="M230.629 115C230.629 178.513 179.142 230 115.629 230C52.1163 230 0.629028 178.513 0.629028 115C0.629028 51.4873 52.1163 0 115.629 0C179.142 0 230.629 51.4873 230.629 115ZM21.6398 115C21.6398 166.909 63.7202 208.989 115.629 208.989C167.538 208.989 209.618 166.909 209.618 115C209.618 63.0912 167.538 21.0108 115.629 21.0108C63.7202 21.0108 21.6398 63.0912 21.6398 115Z" fill="#B5A6F2" fill-opacity="0.2"></path>
                    <circle id="circle1" class="circle" cx="115" cy="115" r="105" stroke="#B5A6F2" stroke-width="20" stroke-linecap="round" stroke-dasharray="552, 20000"></circle>
                  </svg>
                  <div class="text">
                    <h3 class="count"><span class="count-number">85</span>%</h3>
                    <h4 class="content">of patients report reduced tinnitus</h4>
                  </div>
                </div>

                <style>
                  .circle {
                    transform: rotate(-90deg);
                    transform-origin: 50% 50%;
                  }
                </style>

                <script>
                  const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
                    const target = document.querySelector(qSelector);
                    let startTimestamp = null;
                    const step = (timestamp) => {
                      if (!startTimestamp) startTimestamp = timestamp;
                      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                      target.innerText = Math.floor(progress * (end - start) + start);
                      if (progress < 1) {
                        window.requestAnimationFrame(step);
                      }
                    };
                    window.requestAnimationFrame(step);
                  };
                  var counter1 = 0;

                  jQuery(document).scroll(function () {
                    if (jQuery(".animation-none1").hasClass("animated")) {
                      counter1 += 1;
                    } else {
                    }
                    if (counter1 == 1) {
                      circle1();
                      counterAnim(".count-number", 0, 85, 1800);
                    }
                  });

                  function circle1() {
                    var circle1 = document.getElementById("circle1");
                    var interval1 = 18;
                    var angle1 = 0;
                    var angle_increment1 = 6;

                    window.timer1 = window.setInterval(
                      function () {
                        circle1.setAttribute("stroke-dasharray", angle1 + ", 20000");

                        if (angle1 >= 550) {
                          window.clearInterval(window.timer1);
                        }
                        angle1 += angle_increment1;
                      }.bind(this),
                      interval1
                    );
                  }
                </script>
              </div>
            </div>
          </div>
        </div>
        <div class="has_eae_slider elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-6a488aa cols" data-id="6a488aa" data-element_type="column">
          <div class="elementor-widget-wrap elementor-element-populated">
            <div class="elementor-element elementor-element-c01f344 elementor-widget__width-auto animation-none animation-none2 elementor-widget elementor-widget-html animated fadeIn" data-id="c01f344" data-element_type="widget" data-settings='{"_animation":"fadeIn"}' data-widget_type="html.default">
              <div class="elementor-widget-container">
                <div class="svg-container">
                  <svg width="231" height="230" viewBox="0 0 231 230" fill="none" xmlns="http://www.w3.org/2000/svg" class="circular-chart">
                    <path class="circle-bg" d="M230.629 115C230.629 178.513 179.142 230 115.629 230C52.1163 230 0.629028 178.513 0.629028 115C0.629028 51.4873 52.1163 0 115.629 0C179.142 0 230.629 51.4873 230.629 115ZM21.6398 115C21.6398 166.909 63.7202 208.989 115.629 208.989C167.538 208.989 209.618 166.909 209.618 115C209.618 63.0912 167.538 21.0108 115.629 21.0108C63.7202 21.0108 21.6398 63.0912 21.6398 115Z" fill="#B5A6F2" fill-opacity="0.2"></path>
                    <circle id="circle2" class="circle" cx="115" cy="115" r="105" stroke="#B5A6F2" stroke-width="20" stroke-linecap="round" stroke-dasharray="492, 20000"></circle>
                  </svg>
                  <div class="text">
                    <h3 class="count"><span class="count-number2">75</span>%</h3>
                    <h4 class="content content2">of patients showed clinically significant improvements in their tinnitus within six months*</h4>
                  </div>
                </div>

                <script>
                  const counterAnim2 = (qSelector, start = 0, end, duration = 1000) => {
                    const target = document.querySelector(qSelector);
                    let startTimestamp = null;
                    const step = (timestamp) => {
                      if (!startTimestamp) startTimestamp = timestamp;
                      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                      target.innerText = Math.floor(progress * (end - start) + start);
                      if (progress < 1) {
                        window.requestAnimationFrame(step);
                      }
                    };
                    window.requestAnimationFrame(step);
                  };
                  var counter2 = 0;

                  jQuery(document).scroll(function () {
                    if (jQuery(".animation-none2").hasClass("animated")) {
                      counter2 += 1;
                    } else {
                    }
                    if (counter2 == 1) {
                      circle2();
                      counterAnim2(".count-number2", 0, 75, 1350);
                    }
                  });

                  function circle2() {
                    var circle2 = document.getElementById("circle2");
                    var interval2 = 15;
                    var angle2 = 0;
                    var angle_increment2 = 6;

                    window.timer2 = window.setInterval(
                      function () {
                        circle2.setAttribute("stroke-dasharray", angle2 + ", 20000");

                        if (angle2 >= 490) {
                          window.clearInterval(window.timer2);
                        }
                        angle2 += angle_increment2;
                      }.bind(this),
                      interval2
                    );
                  }
                </script>
              </div>
            </div>
          </div>
        </div>
        <div class="has_eae_slider elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-7b9e21a cols" data-id="7b9e21a" data-element_type="column">
          <div class="elementor-widget-wrap elementor-element-populated">
            <div class="elementor-element elementor-element-7a4e958 elementor-widget__width-auto animation-none animation-none3 elementor-widget elementor-widget-html animated fadeIn" data-id="7a4e958" data-element_type="widget" data-settings='{"_animation":"fadeIn"}' data-widget_type="html.default">
              <div class="elementor-widget-container">
                <div class="svg-container">
                  <svg width="231" height="230" viewBox="0 0 231 230" fill="none" xmlns="http://www.w3.org/2000/svg" class="circular-chart">
                    <path class="circle-bg" d="M230.629 115C230.629 178.513 179.142 230 115.629 230C52.1163 230 0.629028 178.513 0.629028 115C0.629028 51.4873 52.1163 0 115.629 0C179.142 0 230.629 51.4873 230.629 115ZM21.6398 115C21.6398 166.909 63.7202 208.989 115.629 208.989C167.538 208.989 209.618 166.909 209.618 115C209.618 63.0912 167.538 21.0108 115.629 21.0108C63.7202 21.0108 21.6398 63.0912 21.6398 115Z" fill="#B5A6F2" fill-opacity="0.2"></path>
                    <circle id="circle3" class="circle" cx="115" cy="115" r="105" stroke="#B5A6F2" stroke-width="20" stroke-linecap="round" stroke-dasharray="630, 20000"></circle>
                  </svg>
                  <div class="text">
                    <h3 class="count"><span class="count-number3">98</span>%</h3>
                    <h4 class="content content2">of patients can have their initial video visit within 3 days of signing up</h4>
                  </div>
                </div>

                <script>
                  const counterAnim3 = (qSelector, start = 0, end, duration = 1000) => {
                    const target = document.querySelector(qSelector);
                    let startTimestamp = null;
                    const step = (timestamp) => {
                      if (!startTimestamp) startTimestamp = timestamp;
                      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                      target.innerText = Math.floor(progress * (end - start) + start);
                      if (progress < 1) {
                        window.requestAnimationFrame(step);
                      }
                    };
                    window.requestAnimationFrame(step);
                  };
                  var counter3 = 0;

                  jQuery(document).scroll(function () {
                    if (jQuery(".animation-none3").hasClass("animated")) {
                      counter3 += 1;
                    } else {
                    }
                    if (counter3 == 1) {
                      circle3();
                      counterAnim3(".count-number3", 0, 98, 2000);
                    }
                  });

                  function circle3() {
                    var circle3 = document.getElementById("circle3");
                    var interval3 = 18;
                    var angle3 = 0;
                    var angle_increment3 = 6;

                    window.timer3 = window.setInterval(
                      function () {
                        circle3.setAttribute("stroke-dasharray", angle3 + ", 20000");

                        if (angle3 >= 630) {
                          window.clearInterval(window.timer3);
                        }
                        angle3 += angle_increment3;
                      }.bind(this),
                      interval3
                    );
                  }
                </script>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-199a043 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-particle_enable="false" data-particle-mobile-disabled="false" data-id="199a043" data-element_type="section">
      <div class="elementor-container elementor-column-gap-default">
        <div class="has_eae_slider elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-41a8da4" data-id="41a8da4" data-element_type="column">
          <div class="elementor-widget-wrap elementor-element-populated">
            <div class="elementor-element elementor-element-13dbbc9 elementor-widget elementor-widget-heading" data-id="13dbbc9" data-element_type="widget" data-widget_type="heading.default">
              <div class="elementor-widget-container">
                <div class="elementor-heading-title elementor-size-default">*This data comes from our 2023 results using the Tinnitus Functional Index (TFI), out of 247 patients.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
          </div>
        </section>
        <section id="trustpilotBlock">
          <div class="container_var"></div>
        </section>
        <section id="frequentlyAskedQuestionsBlock">
          <div class="container_var">
            <button class="grab_your_free_btn">Grab Your FREE Seat Now!</button>
          </div>
        </section>
        <section id="verifiedReviewsOnGoogleBlock">
          <div class="container_var">
            <div class="verified_reviews_on_google_wrapp">
              <h2 class="main_title">Verified Reviews on Google</h2>
            </div>
          </div>
        </section>
        <section id="completeRecoveryBlock">
          <div class="container_var">
            <div class="complete_recovery_wrapp">
              <div class="img_wrapp">
                <img src="https://conversionratestore.github.io/projects/treblehealth/img/complete_recovery_img.png" alt="man" />
              </div>
              <div class="complete_recovery_descr">
                <h2 class="main_title">A complete recovery from tinnitus is possible</h2>
                <p>Learn how in under an hour. </p>
                <button class="grab_your_free_btn">Grab Your FREE Seat Now!</button>
              </div>
            </div>
          </div>
        </section>
    </div>
      `;

    let verifiedReviewsHtml = /*html */ `
    <div class="ti-reviews-container-wrapper">
      <div class="ti-column">
        <div class="ti-review-item source-Google" data-index="2">
          <div class="ti-inner">
            <div class="ti-review-header">
              <div class="ti-profile-img"><img src="https://lh3.googleusercontent.com/a-/AFdZucrTUcw2LtbZJP4NDf2gx89PuqC3Hgv4wZ1OsQ4BHw=s120-c-c-rp-w64-h64-mo-ba2-br100" alt="Naf Steinmetz" /></div>
              <div class="ti-profile-details">
                <div class="ti-name">Naf Steinmetz</div>
                <div class="ti-date"></div>
              </div>
            </div>
            <span class="ti-stars"><span class="ti-star f"></span><span class="ti-star f"></span><span class="ti-star f"></span><span class="ti-star f"></span><span class="ti-star f"></span></span>
            <div class="ti-review-content">
             <div class="ti-inner" style="height: 87px !important; max-height: unset !important;" data-initial-height="87"><mark class="ti-highlight">I am so glad I found Treble Health!</mark> I have been suffering with a major tinnitus spike for the last two months and now I have resources to help mitigate the intrusiveness of the noise in my head. Dr. Ramsay has been great to work with! She got me set up with hearing aids and a sound therapy plan. I now have hope that I will habituate to the tinnitus. Thank you!!</div>
              <span class="ti-read-more" data-container=".ti-review-content .ti-inner" data-collapse-text="Hide" data-open-text="Read more"><span class="ti-read-more-active">Read more</span></span>
            </div>
          </div>
        </div>
        <div class="ti-review-item source-Google" data-index="2">
          <div class="ti-inner">
            <div class="ti-review-header">
              <div class="ti-profile-img"><img src="https://lh3.googleusercontent.com/a-/AFdZucrTUcw2LtbZJP4NDf2gx89PuqC3Hgv4wZ1OsQ4BHw=s120-c-c-rp-w64-h64-mo-ba2-br100" alt="Naf Steinmetz" /></div>
              <div class="ti-profile-details">
                <div class="ti-name">Naf Steinmetz</div>
                <div class="ti-date"></div>
              </div>
            </div>
            <span class="ti-stars"><span class="ti-star f"></span><span class="ti-star f"></span><span class="ti-star f"></span><span class="ti-star f"></span><span class="ti-star f"></span></span>
            <div class="ti-review-content">
              <div class="ti-inner">These are some studious, <mark class="ti-highlight">extremely well-informed professionals</mark>. That matters a lot.</div>
              <span class="ti-read-more" data-container=".ti-review-content .ti-inner" data-collapse-text="Hide" data-open-text="Read more"><span class="ti-read-more-active">Read more</span></span>
            </div>
          </div>
        </div>
        <div class="ti-review-item source-Google" data-index="2">
          <div class="ti-inner">
            <div class="ti-review-header">
              <div class="ti-profile-img"><img src="https://lh3.googleusercontent.com/a-/AFdZucrTUcw2LtbZJP4NDf2gx89PuqC3Hgv4wZ1OsQ4BHw=s120-c-c-rp-w64-h64-mo-ba2-br100" alt="Naf Steinmetz" /></div>
              <div class="ti-profile-details">
                <div class="ti-name">Naf Steinmetz</div>
                <div class="ti-date"></div>
              </div>
            </div>
            <span class="ti-stars"><span class="ti-star f"></span><span class="ti-star f"></span><span class="ti-star f"></span><span class="ti-star f"></span><span class="ti-star f"></span></span>
            <div class="ti-review-content">
              <div class="ti-inner">These are some studious, <mark class="ti-highlight">extremely well-informed professionals</mark>. That matters a lot.</div>
              <span class="ti-read-more" data-container=".ti-review-content .ti-inner" data-collapse-text="Hide" data-open-text="Read more"><span class="ti-read-more-active">Read more</span></span>
            </div>
          </div>
        </div>
      </div>
      <div class="ti-column">
        <div class="ti-review-item source-Google" data-index="2">
          <div class="ti-inner">
            <div class="ti-review-header">
              <div class="ti-profile-img"><img src="https://lh3.googleusercontent.com/a-/AFdZucrTUcw2LtbZJP4NDf2gx89PuqC3Hgv4wZ1OsQ4BHw=s120-c-c-rp-w64-h64-mo-ba2-br100" alt="Naf Steinmetz" /></div>
              <div class="ti-profile-details">
                <div class="ti-name">Naf Steinmetz</div>
                <div class="ti-date"></div>
              </div>
            </div>
            <span class="ti-stars"><span class="ti-star f"></span><span class="ti-star f"></span><span class="ti-star f"></span><span class="ti-star f"></span><span class="ti-star f"></span></span>
            <div class="ti-review-content">
              <div class="ti-inner">These are some studious, <mark class="ti-highlight">extremely well-informed professionals</mark>. That matters a lot.</div>
              <span class="ti-read-more" data-container=".ti-review-content .ti-inner" data-collapse-text="Hide" data-open-text="Read more"><span class="ti-read-more-active">Read more</span></span>
            </div>
          </div>
        </div>
        <div class="ti-review-item source-Google" data-index="2">
          <div class="ti-inner">
            <div class="ti-review-header">
              <div class="ti-profile-img"><img src="https://lh3.googleusercontent.com/a-/AFdZucrTUcw2LtbZJP4NDf2gx89PuqC3Hgv4wZ1OsQ4BHw=s120-c-c-rp-w64-h64-mo-ba2-br100" alt="Naf Steinmetz" /></div>
              <div class="ti-profile-details">
                <div class="ti-name">Naf Steinmetz</div>
                <div class="ti-date"></div>
              </div>
            </div>
            <span class="ti-stars"><span class="ti-star f"></span><span class="ti-star f"></span><span class="ti-star f"></span><span class="ti-star f"></span><span class="ti-star f"></span></span>
            <div class="ti-review-content">
              <div class="ti-inner">These are some studious, <mark class="ti-highlight">extremely well-informed professionals</mark>. That matters a lot.</div>
              <span class="ti-read-more" data-container=".ti-review-content .ti-inner" data-collapse-text="Hide" data-open-text="Read more"><span class="ti-read-more-active">Read more</span></span>
            </div>
          </div>
        </div>
        <div class="ti-review-item source-Google" data-index="2">
          <div class="ti-inner">
            <div class="ti-review-header">
              <div class="ti-profile-img"><img src="https://lh3.googleusercontent.com/a-/AFdZucrTUcw2LtbZJP4NDf2gx89PuqC3Hgv4wZ1OsQ4BHw=s120-c-c-rp-w64-h64-mo-ba2-br100" alt="Naf Steinmetz" /></div>
              <div class="ti-profile-details">
                <div class="ti-name">Naf Steinmetz</div>
                <div class="ti-date"></div>
              </div>
            </div>
            <span class="ti-stars"><span class="ti-star f"></span><span class="ti-star f"></span><span class="ti-star f"></span><span class="ti-star f"></span><span class="ti-star f"></span></span>
            <div class="ti-review-content">
              <div class="ti-inner">These are some studious, <mark class="ti-highlight">extremely well-informed professionals</mark>. That matters a lot.</div>
              <span class="ti-read-more" data-container=".ti-review-content .ti-inner" data-collapse-text="Hide" data-open-text="Read more"><span class="ti-read-more-active">Read more</span></span>
            </div>
          </div>
        </div>
      </div>
      <div class="ti-column">
        <div class="ti-review-item source-Google" data-index="2">
          <div class="ti-inner">
            <div class="ti-review-header">
              <div class="ti-profile-img"><img src="https://lh3.googleusercontent.com/a-/AFdZucrTUcw2LtbZJP4NDf2gx89PuqC3Hgv4wZ1OsQ4BHw=s120-c-c-rp-w64-h64-mo-ba2-br100" alt="Naf Steinmetz" /></div>
              <div class="ti-profile-details">
                <div class="ti-name">Naf Steinmetz</div>
                <div class="ti-date"></div>
              </div>
            </div>
            <span class="ti-stars"><span class="ti-star f"></span><span class="ti-star f"></span><span class="ti-star f"></span><span class="ti-star f"></span><span class="ti-star f"></span></span>
            <div class="ti-review-content">
              <div class="ti-inner">These are some studious, <mark class="ti-highlight">extremely well-informed professionals</mark>. That matters a lot.</div>
              <span class="ti-read-more" data-container=".ti-review-content .ti-inner" data-collapse-text="Hide" data-open-text="Read more"><span class="ti-read-more-active">Read more</span></span>
            </div>
          </div>
        </div>
        <div class="ti-review-item source-Google" data-index="2">
          <div class="ti-inner">
            <div class="ti-review-header">
              <div class="ti-profile-img"><img src="https://lh3.googleusercontent.com/a-/AFdZucrTUcw2LtbZJP4NDf2gx89PuqC3Hgv4wZ1OsQ4BHw=s120-c-c-rp-w64-h64-mo-ba2-br100" alt="Naf Steinmetz" /></div>
              <div class="ti-profile-details">
                <div class="ti-name">Naf Steinmetz</div>
                <div class="ti-date"></div>
              </div>
            </div>
            <span class="ti-stars"><span class="ti-star f"></span><span class="ti-star f"></span><span class="ti-star f"></span><span class="ti-star f"></span><span class="ti-star f"></span></span>
            <div class="ti-review-content">
              <div class="ti-inner">These are some studious, <mark class="ti-highlight">extremely well-informed professionals</mark>. That matters a lot.</div>
              <span class="ti-read-more" data-container=".ti-review-content .ti-inner" data-collapse-text="Hide" data-open-text="Read more"><span class="ti-read-more-active">Read more</span></span>
            </div>
          </div>
        </div>
        <div class="ti-review-item source-Google" data-index="2">
          <div class="ti-inner">
            <div class="ti-review-header">
              <div class="ti-profile-img"><img src="https://lh3.googleusercontent.com/a-/AFdZucrTUcw2LtbZJP4NDf2gx89PuqC3Hgv4wZ1OsQ4BHw=s120-c-c-rp-w64-h64-mo-ba2-br100" alt="Naf Steinmetz" /></div>
              <div class="ti-profile-details">
                <div class="ti-name">Naf Steinmetz</div>
                <div class="ti-date"></div>
              </div>
            </div>
            <span class="ti-stars"><span class="ti-star f"></span><span class="ti-star f"></span><span class="ti-star f"></span><span class="ti-star f"></span><span class="ti-star f"></span></span>
            <div class="ti-review-content">
              <div class="ti-inner">These are some studious, <mark class="ti-highlight">extremely well-informed professionals</mark>. That matters a lot.</div>
              <span class="ti-read-more" data-container=".ti-review-content .ti-inner" data-collapse-text="Hide" data-open-text="Read more"><span class="ti-read-more-active">Read more</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;

    document.head.insertAdjacentHTML("beforeend", newStyle);
    renderNewElem();

    function renderNewElem() {
      if (document.querySelector("#lp-pom-root") && !document.querySelector(".new_body")) {
        document.querySelector("#lp-pom-root").insertAdjacentHTML("beforebegin", newHtml);
      }
      if (document.querySelector(".verified_reviews_on_google_wrapp")) {
        document.querySelector(".verified_reviews_on_google_wrapp").insertAdjacentHTML("beforeend", verifiedReviewsHtml);
      }
    }

    function getVerifiedReviews() {
      console.log(`object`);
      fetchArr("https://treblehealth.com/");

      async function fetchArr(url) {
        let res = await fetch(url);
        res = await res.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(res, "text/html");
        console.log(doc.querySelector("#testimonials .elementor-hidden-tablet.google-ti.g-rev-custom"), `res`);
        // document
        //   .querySelector('.verified_reviews_on_google_wrapp')
        //   .insertAdjacentElement(
        //     'beforeend',
        //     doc.querySelector('#testimonials .elementor-hidden-tablet.google-ti.g-rev-custom'),
        //   );
      }
    }
  }
}, 100);
