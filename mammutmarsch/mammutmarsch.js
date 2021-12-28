let scriptCustom = document.createElement("script")
scriptCustom.src = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"
scriptCustom.async = false
document.head.appendChild(scriptCustom)

let scriptCustomStyle = document.createElement("link")
scriptCustomStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
scriptCustomStyle.rel = "stylesheet"
document.head.appendChild(scriptCustomStyle)

let style = /*html*/ `
<style>
    *,
    *::before,
    *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    }

    img {
    display: block;
    height: auto;
    }

    button {
    border: inherit;
    background: inherit;
    }

    li {
        list-style: none;
    }

    /*second_block_inform */
    .second_block_inform ul{
        margin-bottom: 35px;
    }

    .second_block_inform ul li > div{
        position: relative;
        padding-left: 15px;
        display: flex;
        align-items: center;
    }

    .second_block_inform > ul li + li{
        margin-top: 16px;
    }

    .second_block_inform ul li div p{
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 14px;
        line-height: 1.14;
        color: #333333;
    }

    .second_block_inform ul li div svg{
        fill: #008000;
        margin-left: 10px;
    }

    .second_block_inform ul li div::before{
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #008000;
    }
    
    .hidden_text{
        display: none;
        position: relative;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        letter-spacing: 0.03em;
        color: #7F7F7F;
        padding: 10px 12px;
        background: #FFFFFF;
        border: 1px solid #E5E5E5;
        border-radius: 5px;
        margin-top: 12px;
    }


    .toggle_inform{
        fill: rgba(0, 128, 0, 0.5) !important;
    }

    /* slider_reviews*/
    .slider_reviews h2{
        /*margin-bottom: 16px;*/
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        color: #333333;
    }

    .slick-list{
        padding: 10% 8%;
    }

    .slick-initialized .slick-slide{
        margin-right: 10px;
    }


    .slider_reviews .slider_nav .slider_custom_list{
        padding: 8px;
        border: 2px solid #F5F5F5; 
        border-radius: 5px;
    }

    .slider_reviews .slider_nav .slider_custom_list > div:first-child{
        display: flex;
    }

    .slider_reviews .slider_nav .slider_custom_list > div:first-child > div{
        margin-left: 12px;
    }

    .slider_reviews .slider_nav .slider_custom_list > div:first-child > div > p{
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        color: #333333;
    }

    .slider_reviews .slider_nav .slider_custom_list > div:first-child > div > span{
        display: block;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        color: #7F7F7F;
        margin: 8px 0;
    }

    .slider_reviews .slider_nav .slider_custom_list > div:last-child, 
    .slider_reviews .slider_nav .slider_custom_list > div:last-child p + p{
        margin-top: 8px;
    }

    .slider_reviews .slider_nav .slider_custom_list > div:last-child p{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 125%;
        color: #7F7F7F;
    }

    .slider_reviews ul{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .slider_reviews .slick-dots li + li{
        margin-left: 2px;
    }

    .slider_reviews .slick-dots li button {
        position: relative;
        display: flex;
        width: 8px;
        height: 8px;
        font-size: 0;
        line-height: 0;
        cursor: pointer;
        color: transparent;
        border: 0;
        outline: none;
        background: transparent;
        padding: 5px;
    }

    .slider_reviews .slick-dots li button:before {
        opacity: 0.75;
        position: absolute;
        content: '•';
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        width: 6px;
        height: 6px;
        border: 1px solid #008000;
        text-align: center;
        border-radius: 50%;
        background-color: #fff;
    }

    .slider_reviews .slick-dots li.slick-active button:before {
        background-color: #008000;
        width: 8px;
        height: 8px;
    }

    /*third_block */

    .third_block h2{
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 14px;
        line-height: 130%;
        color: #333333;
        margin-bottom: 12px;
    }

    .third_block > ol{
        padding: 0 20px;
    }

    .third_block > ol li + li{
        margin-top: 12px;
    }

    .third_block > ol li p{
         font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        color: #333333;
    }

    /* first_block*/
    .first_block .slick-list{
      position: relative;
    }


    .first_block .slick-arrow{
      position: absolute;
      top: 50%;
      z-index: 1111;

    }

    .first_block .slick-arrow.prev{
      left: 20px;
    }

    .first_block .slick-arrow.next{
      right: 20px;
    }

</style>
`

let secondBlock = /*html*/ `
<div class="second_block_inform">
    <ul>
        <li>
            <div>
                <p>Ticket & markierte Routen</p>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.1665 4.83342H9.83317V6.50008H8.1665V4.83342ZM8.1665 8.16675H9.83317V13.1667H8.1665V8.16675ZM8.99984 0.666748C4.39984 0.666748 0.666504 4.40008 0.666504 9.00008C0.666504 13.6001 4.39984 17.3334 8.99984 17.3334C13.5998 17.3334 17.3332 13.6001 17.3332 9.00008C17.3332 4.40008 13.5998 0.666748 8.99984 0.666748ZM8.99984 15.6667C5.32484 15.6667 2.33317 12.6751 2.33317 9.00008C2.33317 5.32508 5.32484 2.33341 8.99984 2.33341C12.6748 2.33341 15.6665 5.32508 15.6665 9.00008C15.6665 12.6751 12.6748 15.6667 8.99984 15.6667Z"/>
                </svg>
            </div>
            <p class="hidden_text">Hochwertiges, gut geschnittenes Event T-Shirt</p>
        </li>
        <li>
            <div>
                <p>Start – und Zielzeremonie</p>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.1665 4.83342H9.83317V6.50008H8.1665V4.83342ZM8.1665 8.16675H9.83317V13.1667H8.1665V8.16675ZM8.99984 0.666748C4.39984 0.666748 0.666504 4.40008 0.666504 9.00008C0.666504 13.6001 4.39984 17.3334 8.99984 17.3334C13.5998 17.3334 17.3332 13.6001 17.3332 9.00008C17.3332 4.40008 13.5998 0.666748 8.99984 0.666748ZM8.99984 15.6667C5.32484 15.6667 2.33317 12.6751 2.33317 9.00008C2.33317 5.32508 5.32484 2.33341 8.99984 2.33341C12.6748 2.33341 15.6665 5.32508 15.6665 9.00008C15.6665 12.6751 12.6748 15.6667 8.99984 15.6667Z"/>
                </svg>
            </div>
            <p class="hidden_text">Hochwertiges, gut geschnittenes Event T-Shirt</p>
        </li>
        <li>
            <div>
                <p>Streckenposten mit Snacks</p>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.1665 4.83342H9.83317V6.50008H8.1665V4.83342ZM8.1665 8.16675H9.83317V13.1667H8.1665V8.16675ZM8.99984 0.666748C4.39984 0.666748 0.666504 4.40008 0.666504 9.00008C0.666504 13.6001 4.39984 17.3334 8.99984 17.3334C13.5998 17.3334 17.3332 13.6001 17.3332 9.00008C17.3332 4.40008 13.5998 0.666748 8.99984 0.666748ZM8.99984 15.6667C5.32484 15.6667 2.33317 12.6751 2.33317 9.00008C2.33317 5.32508 5.32484 2.33341 8.99984 2.33341C12.6748 2.33341 15.6665 5.32508 15.6665 9.00008C15.6665 12.6751 12.6748 15.6667 8.99984 15.6667Z"/>
                </svg>
            </div>
            <p class="hidden_text">Hochwertiges, gut geschnittenes Event T-Shirt</p>
        </li>
        <li>
            <div>
                <p>Heiße und kalte Getränke</p>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.1665 4.83342H9.83317V6.50008H8.1665V4.83342ZM8.1665 8.16675H9.83317V13.1667H8.1665V8.16675ZM8.99984 0.666748C4.39984 0.666748 0.666504 4.40008 0.666504 9.00008C0.666504 13.6001 4.39984 17.3334 8.99984 17.3334C13.5998 17.3334 17.3332 13.6001 17.3332 9.00008C17.3332 4.40008 13.5998 0.666748 8.99984 0.666748ZM8.99984 15.6667C5.32484 15.6667 2.33317 12.6751 2.33317 9.00008C2.33317 5.32508 5.32484 2.33341 8.99984 2.33341C12.6748 2.33341 15.6665 5.32508 15.6665 9.00008C15.6665 12.6751 12.6748 15.6667 8.99984 15.6667Z"/>
                </svg>
            </div>
            <p class="hidden_text">Hochwertiges, gut geschnittenes Event T-Shirt</p>
        </li>
        <li>
            <div>
                <p>Urkunde, Medaille & Finisherband</p>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.1665 4.83342H9.83317V6.50008H8.1665V4.83342ZM8.1665 8.16675H9.83317V13.1667H8.1665V8.16675ZM8.99984 0.666748C4.39984 0.666748 0.666504 4.40008 0.666504 9.00008C0.666504 13.6001 4.39984 17.3334 8.99984 17.3334C13.5998 17.3334 17.3332 13.6001 17.3332 9.00008C17.3332 4.40008 13.5998 0.666748 8.99984 0.666748ZM8.99984 15.6667C5.32484 15.6667 2.33317 12.6751 2.33317 9.00008C2.33317 5.32508 5.32484 2.33341 8.99984 2.33341C12.6748 2.33341 15.6665 5.32508 15.6665 9.00008C15.6665 12.6751 12.6748 15.6667 8.99984 15.6667Z"/>
                </svg>
            </div>
            <p class="hidden_text">Hochwertiges, gut geschnittenes Event T-Shirt</p>
        </li>
        <li>
            <div>
                <p>Betreuung durch Sanitätsdienst</p>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.1665 4.83342H9.83317V6.50008H8.1665V4.83342ZM8.1665 8.16675H9.83317V13.1667H8.1665V8.16675ZM8.99984 0.666748C4.39984 0.666748 0.666504 4.40008 0.666504 9.00008C0.666504 13.6001 4.39984 17.3334 8.99984 17.3334C13.5998 17.3334 17.3332 13.6001 17.3332 9.00008C17.3332 4.40008 13.5998 0.666748 8.99984 0.666748ZM8.99984 15.6667C5.32484 15.6667 2.33317 12.6751 2.33317 9.00008C2.33317 5.32508 5.32484 2.33341 8.99984 2.33341C12.6748 2.33341 15.6665 5.32508 15.6665 9.00008C15.6665 12.6751 12.6748 15.6667 8.99984 15.6667Z"/>
                </svg>
            </div>
            <p class="hidden_text">Hochwertiges, gut geschnittenes Event T-Shirt</p>
        </li>
    </ul>
    <div class="slider_reviews">
        <h2>Seit 2007 haben wir unzählige Extremwanderevents für euch organisiert!</h2>
        <div class="slider_nav">
            <div class="slider_custom_list">
                <div>
                    <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider_reviews_photo2.jpg" alt="">
                    <div>
                        <p>ASFEnders</p>
                        <span>11/27/2021</span>
                        <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/reviews.png" alt="reviews">
                    </div>
                </div>
                <div>
                    <p>ich habe bei "MammutMarsch" mitgemacht, leider nur zu Zeiten der Corona Auflagen. Innerhalb dieser Auflagen hat das Team alles getan, um den Teilnehmern die Bewältigung der Strecke zu verschönern, (Rahmenprogramm an den einzelnen KM - Schildern - Berlin, abwechslungsreiche Verpflegung unterwegs; Motivation überall; aber auch Hilfe bei einem notwendigen Ausstieg) ich hatte immer das Gefühl, vom Personal beobachtet und auch die Gesundheit "gescheckt" zu werden, ohne es direkt zu merken. Was ich sagen will, die Sicherheit und Gesundheit wird ganz hoch angesehen. Weiter so!!!</p>
                </div>
            </div>
            <div class="slider_custom_list">
                <div>
                    <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider_reviews_photo2.jpg" alt="">
                    <div>
                        <p>Andreas Schmidt</p>
                        <span>11/27/2021</span>
                        <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/reviews.png" alt="reviews">
                    </div>
                </div>
                <div>
                    <p>Mammutmarsch, das Wanderevent nicht nur für Extremwanderer und jüngere Leute. Nein, Spaß am Wandern kann man auch über 60 noch haben. Meine Lieblingsstrecke ist der Little Mammut im Oktober am Berliner Müggelsee über 30 km. Die professionell ausgesuchte Strecke hat so eine Art Suchtfaktor.  2021 hatte ich meinen Startplatz und bei bestem Wetter ging es über die Distanz, gemeinsam mit vielen anderen "Wanderverrückten". Aber alles Corona konform, da muss man den Veranstalter schon loben. Eine Woche später dann der Jahresabschluss in Hannover. Auch wieder super organisiert.</p>
                    <p>Andere Strecken wie  Wien oder München würden mich auch noch reizen. Naja, wenn 30 km nicht reichen, es stehen auch noch die 42 km,  55 km und 100 km Strecke an verschiedenen Orten zur Auswahl. Und - es ist das ganze Jahr Wandersaison. Ich kann jedem nur raten es auch mal zu probieren.</p>
                </div>
            </div>
                        <div class="slider_custom_list">
                <div>
                    <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider_reviews_photo1.jpg" alt="">
                    <div>
                        <p>Matthias Schipper</p>
                        <span>05/12/2020</span>
                        <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/reviews.png" alt="reviews">
                    </div>
                </div>
                <div>
                    <p>Es hat einen riesen Spaß gemacht. Von meiner Seite aus war alles in Ordnung.</p>
                    <p>Vielen Dank</p>
                </div>
            </div>
        </div>
    </div>
</div>
`

let thirdBlock = /*html*/ `
<div class="third_block">
    <h2>Hamburg, meine Perle. Urbanes und grünes Sightseeing zugleich! </h2>
    <ol>
        <li>
            <p>1. Hafencity mit Elbphilharmonie</p>
        </li>
        <li>
            <p>2. Elbufer mit Hafenblick</p>
        </li>
        <li>
            <p>3. Außenalster & Binnenalster</p>
        </li>
        <li>
            <p>4. Speicherstadt</p>
        </li>
        <li>
            <p>5. Blankenese</p>
        </li>
    </ol>
</div>
`
let firstBlock = /*html*/ `
<div class="first_block">
  <div class="slider-for">  </div>
  <div class="slider-nav">
    <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider_map_photo5.jpg" alt="photo">
    <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider_map_photo1.jpg" alt="photo">
    <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider_map_photo2.jpg" alt="photo">
    <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider_map_photo3.jpg" alt="photo">
    <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider_map_photo4.jpg" alt="photo">
  </div>
</div>
`

document.body.insertAdjacentHTML("afterbegin", style)
document.body.insertAdjacentHTML("afterbegin", firstBlock)
document.body.insertAdjacentHTML("afterbegin", thirdBlock)
document.body.insertAdjacentHTML("afterbegin", secondBlock)

document.querySelectorAll(".second_block_inform ul li svg").forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("toggle_inform")

    if (el.classList.contains("toggle_inform")) {
      el.closest("li").querySelector(".hidden_text").style.display = "block"
    } else {
      el.closest("li").querySelector(".hidden_text").style.display = "none"
    }
  })
})

setTimeout(() => {
  let slider = $(".slider_reviews .slider_nav").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    dots: true,
  })

  $(".first_block .slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: ".first_block .slider-nav",
    prevArrow: `<svg width="13" class="prev" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5098 1.8701L10.7298 0.100098L0.839844 10.0001L10.7398 19.9001L12.5098 18.1301L4.37984 10.0001L12.5098 1.8701Z" fill="#333333" fill-opacity="0.8"/>
</svg>
`,
    nextArrow: `<svg width="13" class="next" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.490234 18.1301L2.26023 19.9001L12.1602 10.0001L2.26023 0.100098L0.490234 1.8701L8.62023 10.0001L0.490234 18.1301Z" fill="#333333" fill-opacity="0.8"/>
</svg>
`,
  })
  $(".first_block .slider-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".slider-for",
    focusOnSelect: true,
  })
}, 100)

document.querySelectorAll(".first_block .slider-nav img").forEach((el) => {
  document.querySelector(".first_block .slider-for").insertAdjacentHTML("beforeend", `<img class="product1" src="${el.src}" alt="photo">`)
})
