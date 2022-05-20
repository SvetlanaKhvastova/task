let startFunkDesk = setInterval(() => {
  if (document.querySelector(".entry-content")) {
    clearInterval(startFunkDesk)

    let popupStyle = /*html */ `
    <style>
        header,
        .main section .desktop-view,
        .main section .mobile-view {
            display: none !important;
        }

        .container_var{
            width: 95%;
            max-width: 1276px;
            margin: 0 auto;
        }

        .img_wrap{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .img_wrap img{
            width: 100%;
            height: 100%;
        }

        .btn_continue{
            background: #193973;
            border-radius: 10px;
            margin: 0 0 0 auto;
            max-width: 304px;
            width: 100%;
            height: 45px;
            font-weight: 600;
            font-size: 18px;
            line-height: 25px;
            text-align: center;
            letter-spacing: -0.01em;
            color: #ffffff !important;
            outline: none;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: none;
            text-transform: none;
        }

        /*join_text */
        .join_text{
            background: #193973;
            padding: 20px 10px;
            text-align: center;
        }

        .join_text p{
            margin: 0;
            font-weight: 700;
            font-size: 24px;
            line-height: 24px;
            color: #FFFFFF !important;
        }

        /*enroll_box */
        .enroll_box .container_var{
            padding: 24px 0 90px;
        }

        .enroll_box .img_wrap{
            max-width: 450px;
            text-align: left;
        }


        .enroll_box .info_box{
            margin-top: 48px;
            display: flex;
            justify-content: space-between;
            gap: 127px;
        }

        .enroll_box .info_box > div:first-child > div{
            max-width: 360px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            border: 1px solid #193973;
            border-radius: 10px;
            padding: 6px 10px;
        }

        .enroll_box .info_box > div:first-child > div span{
            font-weight: 400;
            font-size: 16px;
            line-height: 188%;
            color: #193973;
            margin-left: 16px;
            text-align: left;
        }

        .enroll_box .info_box > div:first-child > h1{
            margin: 40px 0 24px;
            font-weight: 800;
            font-size: 32px;
            line-height: 138%;
            color: #193973;
            text-align: left;
        }

        .enroll_box .info_box > div:first-child > h1 span{
            color: #6FB3FA;
        }

        .enroll_box .info_box > div:first-child > p{
            margin: 0 0 40px;
            font-weight: 400;
            font-size: 20px;
            line-height: 150%;
            color: #757E93 !important;
            text-align: left;
        }

        .enroll_box .info_box > div:first-child > p b{
            color: #193973;
            font-weight: 600;
        }

        .enroll_box .info_box > div:first-child > ul{
            display: flex;
            flex-direction: column;
            padding: 0;
            margin-bottom: 50px;
            gap: 14px;
        }

        .enroll_box .info_box > div:first-child > ul li{
            display: flex;
            align-items: center;
            justify-content: flex-start;
        }

        .enroll_box .info_box > div:first-child > ul li span{
            font-weight: 400;
            font-size: 16px;
            line-height: 125%;
            color: #808080;
            text-align: left;
            margin-left: 16px;
        }

        .enroll_box .info_box > div:first-child > a{
            background: #193973;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            max-width: 431px;
            height: 80px;
            width: 100%;
            color: #FFFFFF;
            font-weight: 600;
            font-size: 24px;
            line-height: 250%;
            outline: none;
            border: none;
        }

        .enroll_box .info_box > div:first-child > a:hover {
            box-shadow: 5px 5px 10px #272020;
        }

        .enroll_box .info_box > div.img_wrap{
            max-width: 413px;
        }

        /*dog_list */
        .dog_list{
            background: #E8F1F9;
        }

        .dog_list .container_var{
            padding: 48px 0 92px;
        }

        .dog_list h2{
            font-weight: 600 !important;
            font-size: 32px !important;
            line-height: 94% !important;
            text-align: center;
            color: #193973 !important;
            margin-bottom: 65px !important;
        }

        .dog_list ul{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 32px;
            padding: 0;
        }

        .dog_list ul li{
            width: 23%;
            position: relative;
            border-radius: 10px;
            transition: all 350ms ease-in-out;
        }

        .dog_list ul li:hover{
            box-shadow: 10px 4px 15px 1px rgb(39 32 32 / 50%);
        }

        .dog_list ul li a{
            width: 100%;
            height: 100%;
            display: block;
        }

        .dog_list ul li a img{
            width: 100%;
            height: 100%;
            border-radius: 10px;
        }

        .dog_list ul li a span{
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
            width: 100%;
            font-weight: 700;
            font-size: 20px;
            line-height: 150%;
            color: #F2F6FF;
        }

        @media (max-width: 1286px){
            .dog_list ul li {
                width: 22%;
            }

            .dog_list ul li a span{
                font-size: 15px;
            }
        }

        @media (max-width: 1050px){
            .dog_list ul li a span{
                font-size: 12px;
            }
        }

        /*popup_first */
        .popup_new{
            display: flex;
            gap: 20px;
            justify-content: space-between;
            max-width: 1358px;
            width: 90%;
            margin: 0 auto;
        }

        .popup_new .img_wrap{
            max-width: 520px;
            width: 40%;
        }

        .popup_new .img_wrap img{
            border-radius: 10px;
        }

        .popup_new > div:last-child{
            width: 60%;
        }

        .popup_new > div:last-child .popup_first {
            display: none;
        }

        .popup_new > div:last-child .popup_first > h2{
            font-weight: 700;
            font-size: 22px;
            line-height: 182%;
            text-align: center;
            color: #734F22;
            margin: 40px 0 12px;
        }

        .popup_new > div:last-child .popup_first > p{
            font-weight: 400;
            font-size: 16px;
            line-height: 125%;
            text-align: center;
            color: #808080 !important;
            margin: 0 0 50px;
        }

        .popup_new > div:last-child .progress_bar > ul{
            display: flex;
            background: #D1DEEE;            
            width: 100%;
            height: 20px;
            justify-content: space-between;
            padding: 0;
            margin: 0 0 20px;
            border-radius: 10px;
        }

        .popup_new > div:last-child .progress_bar > ul li{
            width: 33.2%;
        }

        .popup_new > div:last-child .progress_bar > ul li.active_step{
            background: #193973;
        }

        .popup_new > div:last-child .progress_bar > ul li:nth-child(1){
            border-radius: 10px 0px 0px 10px;
        }

        .popup_new > div:last-child .progress_bar > ul li:nth-child(2){
            border-radius: 0px; 
        }

        .popup_new > div:last-child .progress_bar > ul li:nth-child(3){
            border-radius: 0px 10px 10px 0px;
        }

        .popup_new > div:last-child .progress_bar > div{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .popup_new > div:last-child .progress_bar > div p{
            font-weight: 400;
            font-size: 16px;
            line-height: 125%;
            color: #808080 !important;
            margin: 0;
            display: flex;
            align-items: center;
        }

        .popup_new > div:last-child .progress_bar > div p:first-child{
            cursor: pointer;
        }

        .popup_new > div:last-child .progress_bar > div p:first-child span{
            display: none;
            margin-left: 10px;
        }

        .first_block_checkbox {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 18px;
            margin: 0 auto 71px;
            max-width: 628px;
        }

        .first_block_checkbox input.custom_checkbox {
            position: absolute;
            z-index: -1;
            opacity: 0;
        }

        .first_block_checkbox label {
            width: 48%;
            border: 1px solid #E8F1F9;
            border-radius: 10px;
            padding: 12px 22px;
            margin: 0;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            color: #193973;
            user-select: none;
            display: flex;
            align-items: center;
            cursor: pointer;
        }

        .custom_checkbox + label::before {
            content: "";
            display: inline-block;
            width: 12px;
            height: 12px;
            flex-shrink: 0;
            flex-grow: 0;
            border: 1px solid #808080;
            border-radius: 2px;
            margin-right: 15px;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 50% 50%;
        }

        .custom_checkbox:checked + label::before {
            background-image: url(https://conversionratestore.github.io/projects/knineti/img/dark_blue_check_mark.png);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center center;
            border-color: #193973;
        }

        /*popup_second */
        .popup_new > div:last-child .popup_second{
            display: none;
        }

        .popup_new > div:last-child .popup_second > h2{
            font-weight: 700;
            font-size: 24px;
            line-height: 125%;
            text-align: center;
            color: #734F22;
            margin: 40px 0 56px;
        }

        .popup_new > div:last-child .popup_second ul{
            display: flex;
            flex-direction: column;
            gap: 34px;
            padding: 0;
            margin: 0 0 177px;
        }

        .popup_new > div:last-child .popup_second ul li {
            width: 100%;
        }

        .popup_new > div:last-child .popup_second ul li .radio_box {
            position: absolute;
            width: 0.1px;
            height: 0.1px;
            opacity: 0;
        }

        .popup_new > div:last-child .popup_second ul li label {
            border: 1px solid #E8F1F9;
            border-radius: 10px;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;
            max-height: 78px;
            padding: 10px 18px;
            margin: 0;
            cursor: pointer;
            text-align: left;
        }

        .popup_new > div:last-child .popup_second ul li label span:nth-child(2){
            font-weight: 600;
            font-size: 20px;
            line-height: 150%;
            color: #193973;
            margin-bottom: 8px;
        }

        .popup_new > div:last-child .popup_second ul li label span:nth-child(3){
            font-weight: 400;
            font-size: 16px;
            line-height: 125%;
            color: #808080;
        }

        .popup_new > div:last-child .popup_second ul li .radio_box:checked + label {
            border: 3px solid #193973;
        }

        .popup_new > div:last-child .popup_first.active_popup,
        .popup_new > div:last-child .popup_second.active_popup{
            display: block;
        }

        .dog_second{
            display: none;
        }
            </style>
    `
    let newBlock = /*html */ `
    <section class="new_block">
        <div class="join_text">
            <p>Join free online workshop </p>
        </div>
        <div class="enroll_box">
            <div class="container_var">
                <div class="img_wrap">
                    <img src="https://conversionratestore.github.io/projects/knineti/img/logo_dog.png" alt="logo dog">
                </div>
                <div class="info_box">
                    <div>
                        <div>
                            <img src="https://conversionratestore.github.io/projects/knineti/img/medal.svg" alt="medal">
                            <span>First workshop from service dog trainer </span>
                        </div>
                        <h1>Learn how to train your dog to be as <br> <span>obedient</span> as a service dog</h1>
                        <p>Take 1-minute quiz about your dog to access <b>free online workshop</b> and learn how to deal with barking, housebreaking, nipping and other unwanted behavior</p>
                        <ul>
                            <li>
                                <img src="https://conversionratestore.github.io/projects/knineti/img/bi_play-circle-fill.svg" alt="play circle">
                                <span>Workshop durarion: 56 minutes</span>
                            </li>
                             <li>
                                <img src="https://conversionratestore.github.io/projects/knineti/img/bx_time-five.svg" alt="time five">
                                <span>Starts immediately</span>
                            </li>
                            <li>
                                <img src="https://conversionratestore.github.io/projects/knineti/img/bi_person-fill.svg" alt="person">
                                <span>Viewed by 500,000 dog owners</span>
                            </li>
                        </ul>
                        <a href="#">Enroll to free online workshop</a>
                    </div>
                    <div class="img_wrap">
                        <img src="https://conversionratestore.github.io/projects/knineti/img/enroll_box_dog.jpg" alt="dog">
                    </div>                
                </div>
            </div>
        </div>

        <div class="dog_list">
            <div class="container_var">
                <h2>Choose the behavior you want to address</h2>
                <ul></ul>
            </div>
        </div>

    </section>
    `

    let arrayDog = {
      "Reactivity to the other dogs": ["https://conversionratestore.github.io/projects/knineti/img/dog_list12.jpg"],
      "Anxiety ": ["https://conversionratestore.github.io/projects/knineti/img/dog_list11.jpg"],
      "Aggression ": ["https://conversionratestore.github.io/projects/knineti/img/dog_list10.jpg"],
      "Extremely excited": ["https://conversionratestore.github.io/projects/knineti/img/dog_list9.jpg"],
      "Chewing ": ["https://conversionratestore.github.io/projects/knineti/img/dog_list8.jpg"],
      "Don’t listen": ["https://conversionratestore.github.io/projects/knineti/img/dog_list7.jpg"],
      "Don’t come when you call": ["https://conversionratestore.github.io/projects/knineti/img/dog_list6.jpg"],
      "Nipping or Biting": ["https://conversionratestore.github.io/projects/knineti/img/dog_list5.jpg"],
      "Housebreaking ": ["https://conversionratestore.github.io/projects/knineti/img/dog_list4.jpg"],
      "Pulling the leash": ["https://conversionratestore.github.io/projects/knineti/img/dog_list3.jpg"],
      "Jumping ": ["https://conversionratestore.github.io/projects/knineti/img/dog_list2.jpg"],
      "Barking ": ["https://conversionratestore.github.io/projects/knineti/img/dog_list1.jpg"],
    }

    let popupNew = /*html*/ `
    <div class="popup_new">
        <div class="img_wrap">
            <img src="https://conversionratestore.github.io/projects/knineti/img/dog_select_problem.jpg" alt="dog" class="dog_first">
            <img src="https://conversionratestore.github.io/projects/knineti/img/dog_age_block.jpg" alt="dog" class="dog_second">
        </div>

        <div>
            <div class="progress_bar">
                <ul>
                    <li class="active_step"></li>
                    <li></li>
                    <li></li>
                </ul>
                <div>
                   <p>
                       <img src="https://conversionratestore.github.io/projects/knineti/img/previous_btn.svg" alt="previous button">
                       <span>Previous</span>
                   </p>
                   <p><span>1</span>/<span>3</span></p>
                </div>
            </div>

            <div class="popup_first active_popup">
                <h2>What unwanted behavior you want to address?</h2>
                <p>Select all problems you’ve experienced in the last 2 months</p>
                <div class="first_block_checkbox">
                    <input class="custom_checkbox" id="barking" type="checkbox" name="barking" value="barking">
                    <label for="barking">Barking
                    </label>
    
                    <input class="custom_checkbox" id="jumping" type="checkbox" name="jumping" value="jumping">
                    <label for="jumping">Jumping
                    </label>
    
                    <input class="custom_checkbox" id="pulling" type="checkbox" name="pulling" value="pulling">
                    <label for="pulling">Pulling on leash
                    </label>
    
                    <input class="custom_checkbox" id="housebreaking" type="checkbox" name="housebreaking" value="housebreaking">
                    <label for="housebreaking">Housebreaking
                    </label>
    
                    <input class="custom_checkbox" id="nipping" type="checkbox" name="nipping" value="nipping">
                    <label for="nipping">Nipping or biting
                    </label>
    
                    <input class="custom_checkbox" id="called" type="checkbox" name="called" value="called">
                    <label for="called">Don’t come when you call
                    </label>
    
                    <input class="custom_checkbox" id="listen" type="checkbox" name="listen" value="listen">
                    <label for="listen">Doesn't listen</label>
    
                    <input class="custom_checkbox" id="chewing" type="checkbox" name="chewing" value="chewing">
                    <label for="chewing">Chewing</label>
    
                    <input class="custom_checkbox" id="excitable" type="checkbox" name="excitable" value="excitable">
                    <label for="excitable">Extremely excitable</label>
    
                    <input class="custom_checkbox" id="aggression" type="checkbox" name="aggression" value="aggression">
                    <label for="aggression">Aggression</label>
    
                    <input class="custom_checkbox" id="anxiety" type="checkbox" name="anxiety" value="anxiety">
                    <label for="anxiety">Anxiety</label>
    
                    <input class="custom_checkbox" type="checkbox" id="reacting" name="reacting" value="reacting">
                    <label for="reacting">Reacting to other dogs</label>
    
                    <input class="custom_checkbox" type="checkbox" id="other" name="other" value="other">
                    <label for="other">Other</label>
                </div>
                <div class="btn_continue">Continue</div>
            </div>


            <div class="popup_second">
                <h2>What’s your dog’s age?</h2>
                <ul>
                    <li>
                        <input class="radio_box" name="ageDog" id="puppy" type="radio">
                        <label for="puppy">
                            <span class="radio_style"></span>
                            <span>Puppy</span>
                            <span>Up to 12 months</span>
                        </label>
                    </li>
                    <li>
                        <input class="radio_box" name="ageDog" id="adult" type="radio">
                        <label for="adult">
                            <span class="radio_style"></span>
                            <span>Adult</span>
                            <span>From 1 to 7 years</span>
                        </label>
                    </li>
                    <li>
                        <input class="radio_box" name="ageDog" id="senior" type="radio">
                        <label for="senior">
                            <span class="radio_style"></span>
                            <span>Older Adult/Senior</span>
                            <span>More than 7 years</span>
                        </label>
                    </li>
                </ul>
                <div class="btn_continue">Continue</div>
            </div> 

        </div>
    </div>
   
    `

    document.head.insertAdjacentHTML("beforeend", popupStyle)
    document.querySelector(".want-to-obey").insertAdjacentHTML("beforebegin", newBlock)
    document.querySelector(".new_block").insertAdjacentHTML("afterend", popupNew)

    function setListDog(title, photo) {
      return `  <li>
                    <a href="#">
                        <img src="${photo}" alt="${title}">
                        <span>${title}</span>
                    </a>
                </li>`
    }

    for (let key in arrayDog) {
      document.querySelector(".dog_list ul").insertAdjacentHTML("afterbegin", setListDog(key, arrayDog[key][0]))
    }

    //   click on btn
    document.querySelector(".enroll_box .info_box > div:first-child > a").addEventListener("click", function (e) {
      e.preventDefault()

      document.querySelector(".desktop-view .button-header a.button-blue-large:link").click()
    })

    //   click on first btn Continue
    document.querySelector(".popup_new > div:last-child .popup_first .btn_continue").addEventListener("click", function (el) {
      console.log(this)
      this.closest(".popup_first").classList.remove("active_popup")

      document.querySelector(".popup_new > div:last-child .popup_second").classList.add("active_popup")
      document.querySelector(".popup_new .img_wrap .dog_first").style.display = "none"
      document.querySelector(".popup_new .img_wrap .dog_second").style.display = "block"
      document.querySelector(".popup_new > div:last-child .progress_bar > ul li:nth-child(2)").classList.add("active_step")
      document.querySelector(".popup_new > div:last-child .progress_bar > div p:last-child span:nth-child(1)").textContent = "2"
      document.querySelector(".popup_new > div:last-child .progress_bar > div p:first-child span").style.display = "inline-block"
    })

    //   btn back
    if (document.querySelector(".popup_new > div:last-child .popup_second")) {
      document.querySelector(".popup_new > div:last-child .popup_first").classList.add("active_popup")
      document.querySelector(".popup_new > div:last-child .popup_second").classList.remove("active_popup")
      document.querySelector(".popup_new .img_wrap .dog_first").style.display = "block"
      document.querySelector(".popup_new .img_wrap .dog_second").style.display = "none"
      document.querySelector(".popup_new > div:last-child .progress_bar > ul li:nth-child(2)").classList.remove("active_step")
      document.querySelector(".popup_new > div:last-child .progress_bar > div p:last-child span:nth-child(1)").textContent = "1"
      document.querySelector(".popup_new > div:last-child .progress_bar > div p:first-child span").style.display = "none"
    }
  }
}, 10)
