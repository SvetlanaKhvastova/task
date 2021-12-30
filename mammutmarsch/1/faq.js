const script = document.createElement("script")
script.src = "https://code.jquery.com/jquery-3.4.1.min.js"
script.type = "text/javascript"
document.getElementsByTagName("head")[0].appendChild(script)

const style = /*html*/ `
<style>
    *,
    *::before,
    *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    }
    

	
	/*body {*/
	/* padding: 15px !important;*/
	/*}*/
	
    /*img {*/
    /*display: block;*/
    /*height: auto;*/
    /*}*/
    
    /*button {*/
    /*border: inherit;*/
    /*background: inherit;*/
    /*}*/
    
    /*.custom_main p {        */
    /*    padding: 0;*/
    /*    margin: 0;*/
    /*}*/

    .custom_main li {
        list-style: none;        
    }
    
    .dropdown ul li {
    	margin-bottom: 8px;
    }
    
    /* heading */
    
    .heading .title {
        font-weight: bold;
        font-size: 25px;
        line-height: 29px;
        color: #333333;
        margin-bottom: 12px;
    }
    
     .heading .subtitle {
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #888888;
        margin-bottom: 16px;
    }
    
    .dropdown .subject {
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        background-color: #000;
        color: #FFFFFF;
        padding: 10px;        
    }

    /* first_block*/
    .first_block .slick-list{
      position: relative;
    }


    .first_block .slick-arrow{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1111;
 	background-color: rgba(255,255,255, 0.7);
	padding: 15px;
	border-radius: 2px;
    }

    .first_block .slick-arrow.prev{
      left: 0;
    }

    .first_block .slick-arrow.next{
      right: 0;
    }
    
    /*second_block_inform */
    .second_block_inform ul{
        padding: 20px;
    }

    .second_block_inform ul li > div{
        position: relative;
        padding-left: 15px;
        display: flex;
        align-items: center;
        width: fit-content;
    }

    .second_block_inform > ul li + li{
        margin-top: 16px;
    }

    .second_block_inform ul li div p{
        /*font-family: 'Roboto', sans-serif;*/
        font-weight: 700;
        font-size: 14px;
        line-height: 1.14;
        color: #333333;
    }

    .second_block_inform ul li div svg{
        fill: #008000;
        margin-left: 10px;
    }
    
    .second_block_inform ul li p {
    	position: relative;
    }

    .second_block_inform ul li p:first-child:before{
        content: "";
        position: absolute;
        top: 50%;
        left: -15px;
        transform: translateY(-50%);
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #008000;
    }
    
    .hidden_text{
        display: none;
        position: relative;
        /*font-family: 'Roboto', sans-serif;*/
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

	.show .hidden_text{
		display: block;
	} 
	
	
	
	/*.show svg {*/
	/*	position: relative;*/
	/*}*/
	
	.second_block_inform ul li.show > div::after {
		content: "";
		position: absolute;
		bottom: -13px;
		right: 4px;
		width: 0;
		height: 0;
		border-style: solid;
		border-width: 0 5px 10px 5px;
		border-color: transparent transparent #fff transparent;
		z-index: 1;
	}
	
	.second_block_inform ul li.show > div::before {
		content: "";
		position: absolute;
		bottom: -13px;
		right: 3px;
		width: 0;
		height: 0;
		border-style: solid;
		border-width: 0 6px 11px 6px;
		border-color: transparent transparent #E5E5E5 transparent;
	}
	
	

    /*.toggle_inform{*/
    /*    fill: rgba(0, 128, 0, 0.5) !important;*/
    /*}*/

    /* slider_reviews*/
    .slider_reviews h2{
        /*margin-bottom: 16px;*/
        /*font-family: 'Roboto', sans-serif;*/
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        color: #333333;
    }

    .slider_reviews .slick-list{
        padding: 10% 8%;
    }

    .slider_reviews .slick-initialized .slick-slide{
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
        /*font-family: 'Roboto', sans-serif;*/
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        color: #333333;
    }

    .slider_reviews .slider_nav .slider_custom_list > div:first-child > div > span{
        display: block;
        /*font-family: 'Roboto', sans-serif;*/
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
        /*font-family: 'Roboto', sans-serif;*/
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
    
    .third_block  {
    	padding: 20px;
    }

    .third_block h2{
        /*font-family: 'Roboto', sans-serif;*/
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

    .third_block > ol li {
        /*font-family: 'Roboto', sans-serif;*/
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        color: #333333;
    }

    .third_block > ol li {
        list-style: auto;
    }
    
    /*fourth_block*/
    
    .fourth_block .visible { 
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid #E5E5E5;
		border-radius: 2px;
		padding: 15px 10px;
		margin-bottom: 12px;
    }
    
    .fourth_block .visible div {
        display: flex;
        gap: 4px;
    } 
    
    .fourth_block .visible p {
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: 14px;
        color: #7F7F7F;
    }
    
    /* The radio_container */
.radio_container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.radio_container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 2px solid #7F7F7F;
}

/* On mouse-over, add a grey background color */
/*.radio_container:hover input ~ .checkmark {*/
/*  background-color: #fff;*/
/*}*/

/* When the radio button is checked, add a blue background */
.radio_container input:checked ~ .checkmark {
  border-color: #008000;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.radio_container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.radio_container .checkmark:after {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #008000;
}

.first_block .slider-for {
 margin: 8px 0;
}


.first_block .slider-for img{
	width: 296px;
	height: 296px;
	object-fit: contain;
}

.first_block .slider_nav img{
	width: 69px;
	height: 69px;
	padding-right: 8px;
}

.table_section{
        width: 100%;
        border-collapse: collapse;
        margin: 16px 0 33px;
    }
    .table_section tbody tr:nth-child(odd){
        background: #F5F5F5;
    }
    .table_section tbody tr td{
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        color: #333333;
        padding: 8px 0 8px 12px;
    }
    .table_section tbody tr td:last-child{
        max-width: 185px;
        font-weight: 400;
        color: #7F7F7F;
        text-align: end;
        padding: 8px 12px 8px 0;
    }
</style>
`

const page = /*html*/ `
    <main class="custom_main">
      <section class="heading">
          <p class="title">Mammutmarsch<br>Hamburg – 42/60 km</p>
          <p class="subtitle">Nimmst du die Herausforderung an?</p>
      </section>
      <section class="dropdown">
          <ul>
              <li>
                  <div class="subject">
                      <p>Event details</p>
                  </div>
                  <div class="first_block info">
                      <div class="slider-for"></div>
                      <div class="slider_nav">
                          <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/new_map42.png" alt="photo">
                          <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/new_map60.png" alt="photo">
                          <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider-img0.jpg" alt="img0">
                          <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider-img1.jpg" alt="img1">
                          <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider-img2.jpg" alt="img2">
                          <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider-img3.jpg" alt="img3">
                          <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider-img4.jpg" alt="img4">
                          <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider-img5.jpg" alt="img5">
                          <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider-img6.jpg" alt="img6">
                          <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider-img7.jpg" alt="img7">
                          <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider-img8.jpg" alt="img8">
                          <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider-img9.jpg" alt="img9">
                          <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider-img10.jpg" alt="img10">
                          <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider-img11.jpg" alt="img11">
                          <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider-img12.jpg" alt="img12">
                          <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider-img13.jpg" alt="img13">
                      </div>
                      <table class="table_section">
					    <tbody>
					        <tr>
					            <td>Start/<br> Zieladresse</td>
					            <td>Elbinsel Kaltehofe, Kaltehofe-<br>Hauptdeich 6-7, 20539 <br>Hamburg</td>
					        </tr>
					        <tr>
					            <td>Datum & Uhrzeit:</td>
					            <td>26.02.2021, ab 07:00 Uhr</td>
					        </tr>
					        <tr>
					            <td>Spätester Finish:</td>
					            <td>27.02.2021, 01:00 Uhr</td>
					        </tr>
					        <tr>
					            <td>Routen</td>
					            <td>42km /60km</td>
					        </tr>
					        <tr>
					            <td>Höhenmeter</td>
					            <td>150m/370m</td>
					        </tr>
					    </tbody>
					</table>
                  </div>
              </li>
              <li>
                  <div class="subject">
                      <p>Jedes Paket enthält</p>
                  </div>
                  <div class="second_block_inform info">
                      <ul>
                          <li>
                              <div>
                                  <p>Ticket & markierte Routen</p>
                                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                                      <path d="M8.1665 4.83342H9.83317V6.50008H8.1665V4.83342ZM8.1665 8.16675H9.83317V13.1667H8.1665V8.16675ZM8.99984 0.666748C4.39984 0.666748 0.666504 4.40008 0.666504 9.00008C0.666504 13.6001 4.39984 17.3334 8.99984 17.3334C13.5998 17.3334 17.3332 13.6001 17.3332 9.00008C17.3332 4.40008 13.5998 0.666748 8.99984 0.666748ZM8.99984 15.6667C5.32484 15.6667 2.33317 12.6751 2.33317 9.00008C2.33317 5.32508 5.32484 2.33341 8.99984 2.33341C12.6748 2.33341 15.6665 5.32508 15.6665 9.00008C15.6665 12.6751 12.6748 15.6667 8.99984 15.6667Z"/>
                                  </svg>
                              </div>
                              <p class="hidden_text">Neben der Teilnahme bekommst du eine detailliert ausgearbeitete Route mit allen Highlights der Region. Markiert mit Pfeilen Schildern und Reflektoren.</p>
                          </li>
                          <li>
                              <div>
                                  <p>Start- und Zielzeremonie</p>
                                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                                      <path d="M8.1665 4.83342H9.83317V6.50008H8.1665V4.83342ZM8.1665 8.16675H9.83317V13.1667H8.1665V8.16675ZM8.99984 0.666748C4.39984 0.666748 0.666504 4.40008 0.666504 9.00008C0.666504 13.6001 4.39984 17.3334 8.99984 17.3334C13.5998 17.3334 17.3332 13.6001 17.3332 9.00008C17.3332 4.40008 13.5998 0.666748 8.99984 0.666748ZM8.99984 15.6667C5.32484 15.6667 2.33317 12.6751 2.33317 9.00008C2.33317 5.32508 5.32484 2.33341 8.99984 2.33341C12.6748 2.33341 15.6665 5.32508 15.6665 9.00008C15.6665 12.6751 12.6748 15.6667 8.99984 15.6667Z"/>
                                  </svg>
                              </div>
                              <p class="hidden_text">Wir feiern dich, wenn es los geht und wir feiern dich, wenn du ins Ziel einläufst! Natürlich in gebührender Atmosphäre mit Start-/Zielkanal, Musik, Jubel etc.</p>
                          </li>
                          <li>
                              <div>
                                  <p>Streckenposten mit Snacks</p>
                                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                                      <path d="M8.1665 4.83342H9.83317V6.50008H8.1665V4.83342ZM8.1665 8.16675H9.83317V13.1667H8.1665V8.16675ZM8.99984 0.666748C4.39984 0.666748 0.666504 4.40008 0.666504 9.00008C0.666504 13.6001 4.39984 17.3334 8.99984 17.3334C13.5998 17.3334 17.3332 13.6001 17.3332 9.00008C17.3332 4.40008 13.5998 0.666748 8.99984 0.666748ZM8.99984 15.6667C5.32484 15.6667 2.33317 12.6751 2.33317 9.00008C2.33317 5.32508 5.32484 2.33341 8.99984 2.33341C12.6748 2.33341 15.6665 5.32508 15.6665 9.00008C15.6665 12.6751 12.6748 15.6667 8.99984 15.6667Z"/>
                                  </svg>
                              </div>
                              <p class="hidden_text">Als Streckenposten wählen wir ganz besondere Orte aus, die das Erlebnis untermalen. Snacks gibt es von Riegeln über Obst bis hin zu geschmierten Broten.</p>
                          </li>
                          <li>
                              <div>
                                  <p>Heiße und kalte Getränke</p>
                                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                                      <path d="M8.1665 4.83342H9.83317V6.50008H8.1665V4.83342ZM8.1665 8.16675H9.83317V13.1667H8.1665V8.16675ZM8.99984 0.666748C4.39984 0.666748 0.666504 4.40008 0.666504 9.00008C0.666504 13.6001 4.39984 17.3334 8.99984 17.3334C13.5998 17.3334 17.3332 13.6001 17.3332 9.00008C17.3332 4.40008 13.5998 0.666748 8.99984 0.666748ZM8.99984 15.6667C5.32484 15.6667 2.33317 12.6751 2.33317 9.00008C2.33317 5.32508 5.32484 2.33341 8.99984 2.33341C12.6748 2.33341 15.6665 5.32508 15.6665 9.00008C15.6665 12.6751 12.6748 15.6667 8.99984 15.6667Z"/>
                                  </svg>
                              </div>
                              <p class="hidden_text">Wasser, so viel du magst, aber auch Kaffee, Cola und Tees sind fast immer dabei.</p>
                          </li>
                          <li>
                              <div>
                                  <p>Urkunde, Medaille & Finisherband</p>
                                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                                      <path d="M8.1665 4.83342H9.83317V6.50008H8.1665V4.83342ZM8.1665 8.16675H9.83317V13.1667H8.1665V8.16675ZM8.99984 0.666748C4.39984 0.666748 0.666504 4.40008 0.666504 9.00008C0.666504 13.6001 4.39984 17.3334 8.99984 17.3334C13.5998 17.3334 17.3332 13.6001 17.3332 9.00008C17.3332 4.40008 13.5998 0.666748 8.99984 0.666748ZM8.99984 15.6667C5.32484 15.6667 2.33317 12.6751 2.33317 9.00008C2.33317 5.32508 5.32484 2.33341 8.99984 2.33341C12.6748 2.33341 15.6665 5.32508 15.6665 9.00008C15.6665 12.6751 12.6748 15.6667 8.99984 15.6667Z"/>
                                  </svg>
                              </div>
                              <p class="hidden_text">Im Ziel bekommst du alles, was du zum Angeben brauchst. Und natürlich als Erinnerung an die bestandene Herausforderung!</p>
                          </li>
                          <li>
                              <div>
                                  <p>Betreuung durch Sanitätsdienst</p>
                                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                                      <path d="M8.1665 4.83342H9.83317V6.50008H8.1665V4.83342ZM8.1665 8.16675H9.83317V13.1667H8.1665V8.16675ZM8.99984 0.666748C4.39984 0.666748 0.666504 4.40008 0.666504 9.00008C0.666504 13.6001 4.39984 17.3334 8.99984 17.3334C13.5998 17.3334 17.3332 13.6001 17.3332 9.00008C17.3332 4.40008 13.5998 0.666748 8.99984 0.666748ZM8.99984 15.6667C5.32484 15.6667 2.33317 12.6751 2.33317 9.00008C2.33317 5.32508 5.32484 2.33341 8.99984 2.33341C12.6748 2.33341 15.6665 5.32508 15.6665 9.00008C15.6665 12.6751 12.6748 15.6667 8.99984 15.6667Z"/>
                                  </svg>
                              </div>
                              <p class="hidden_text">Egal, ob du dir eine Blase läufst oder der Kreislauf Probleme macht, ein Sani ist immer in der Nähe. Sicherheit hat bei uns höchste Priorität!</p>
                          </li>
                      </ul>
                      <div class="slider_reviews">
                          <h2>Seit 2007 haben wir unzählige Extremwanderevents für euch organisiert!</h2>
                          <div class="slider_nav">
                              <div class="slider_custom_list">
                                  <div>
                                      <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider_reviews_photo3.jpg"
                                           alt="">
                                      <div>
                                          <p>Manuela Häsel</p>
                                          <span>20/10/2021</span>
                                          <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/reviews.png"
                                               alt="reviews">
                                      </div>
                                  </div>
                                  <div>
                                      <p>Ein Event was mir sehr viel Spass macht und mir meine Grenzen zeigt. Extremwandern mit toller Organisation und Spass. Immer wieder gerne. Ich werde dabei bleiben.</p>
                                  </div>
                              </div>
                              <div class="slider_custom_list">
                                  <div>
                                      <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider_reviews_photo2.jpg"
                                           alt="">
                                      <div>
                                          <p>Judith H.</p>
                                          <span>20/11/2021</span>
                                          <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/reviews.png"
                                               alt="reviews">
                                      </div>
                                  </div>
                                  <div>
                                      <p>Mein Lieblingsveranstalter für extrem Wanderungen. So nett und sympathisch und überragend gut ist kein anderer. Tolle Menschen die einem das Event einfach super und unvergesslich machen.</p>
                                  </div>
                              </div>
                              <div class="slider_custom_list">
                                  <div>
                                      <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider_reviews_photo1.jpg"
                                           alt="">
                                      <div>
                                          <p>Silvia Knoblauch</p>
                                          <span>05/11/2021</span>
                                          <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/reviews.png"
                                               alt="reviews">
                                      </div>
                                  </div>
                                  <div>
                                      <p>Mein Erster Lauf in Heidelberg 21- den ich auch geschafft habe! Ihr macht eine tolle Arbeit. Weiter so....</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </li>
              <li>
                  <div class="subject">
                      <p>Event Highlights</p>
                  </div>
                  <div class="third_block info">
                      <h2>Hamburg, meine Perle. Urbanes und grünes Sightseeing zugleich! </h2>
                      <ol>
                          <li>  
                            Hafencity mit Elbphilharmonie
                          </li>
                          <li>
                            Elbufer mit Hafenblick
                          </li>
                          <li>
                            Außenalster & Binnenalster
                          </li>
                          <li>
                            Speicherstadt
                          </li>
                          <li>
                            Blankenese
                          </li>
                      </ol>
                  </div>
              </li>
              <li>
                  <div class="subject">
                      <p>Wähle dein Paket aus</p>
                  </div>
                  <div class="fourth_block info">
                      <div class="item">
                        <div class="visible">
                          <div>
                            <label class="radio_container">
                              <input type="radio" checked="checked" name="radio">                              
                              <span class="checkmark"></span>
                            </label>
                            <label class="radio_container">
                              <input type="radio" checked="checked" name="radio">                              
                              <span class="checkmark"></span>
                            </label>
                            <p>42 km (mit T-Shirt)<img src="https://conversionratestore.github.io/projects/mammutmarsch/img/tshirt.png" alt="tshirt"></p>      
                          </div>                                              
                          <p>€67.50</p>
                        </div>                        
                        <div class="hidden">                       
                            text
                        </div>
                      </div>
                  </div>
              </li>
          </ul>
      </section>
    </main>
`

document.body.insertAdjacentHTML("afterbegin", style)
document.body.insertAdjacentHTML("afterbegin", page)

document.body.addEventListener("click", function (e) {
  if (!e.target.closest(".second_block_inform li")?.classList.contains("show")) {
    removeShowClass()

    e.target.closest(".second_block_inform li")?.classList.add("show")
  } else {
    removeShowClass()
  }
})

const jqueryInterval = setInterval(() => {
  if (typeof jQuery == "function" && document.querySelector(".slider_reviews .slider_nav") && document.querySelector(".first_block .slider_nav")) {
    clearInterval(jqueryInterval)

    let scriptCustom = document.createElement("script")
    scriptCustom.src = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"
    scriptCustom.async = false
    document.head.appendChild(scriptCustom)

    let scriptCustomStyle = document.createElement("link")
    scriptCustomStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
    scriptCustomStyle.rel = "stylesheet"
    document.head.appendChild(scriptCustomStyle)

    setTimeout(() => {
      $(".slider_reviews .slider_nav").slick({
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
        asNavFor: ".first_block .slider_nav",
        prevArrow: `
					<div class="prev" >
						<svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					        <path d="M12.5098 1.8701L10.7298 0.100098L0.839844 10.0001L10.7398 19.9001L12.5098 18.1301L4.37984 10.0001L12.5098 1.8701Z" fill="#333333" fill-opacity="0.8"/>
					        </svg>
					</div>
				`,
        nextArrow: `
<div class="next" >
			<svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        		<path d="M0.490234 18.1301L2.26023 19.9001L12.1602 10.0001L2.26023 0.100098L0.490234 1.8701L8.62023 10.0001L0.490234 18.1301Z" fill="#333333" fill-opacity="0.8"/>
        	</svg>
        	</div>
        `,
      })
      $(".first_block .slider_nav").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: ".slider-for",
        focusOnSelect: true,
      })

      $(".subject").click(function () {
        $(this).closest("li").toggleClass("hide")
        if ($(this).closest("li").hasClass("hide")) {
          $(this).closest("li").find(".info").slideUp()
        } else {
          $(this).closest("li").find(".info").slideDown()
        }
      })
    }, 1000)
  }
}, 100)

function removeShowClass() {
  document.querySelectorAll(".second_block_inform li").forEach((li) => {
    if (li.classList.contains("show")) {
      li.classList.remove("show")
    }
  })
}

document.querySelectorAll(".first_block .slider_nav img").forEach((el) => {
  document.querySelector(".first_block .slider-for").insertAdjacentHTML("beforeend", `<img class="product1" src="${el.src}" alt="photo">`)
})
