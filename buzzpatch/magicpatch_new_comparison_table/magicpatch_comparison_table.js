let magicComparisonTable = setInterval(() => {
  if (document.querySelector("#children-safe")) {
    clearInterval(magicComparisonTable)

    let megicpatchStyle = /*html*/ `
        <style>
            .accent_color_main{
                font-weight: 400;
                font-size: 13px;
                line-height: 140%;
                color: #008CD6;
            }
            .accent_color_first{
                font-family: 'Din Condensed', Roboto, sans-serif;
                font-weight: 400;
                font-size: 14px;
                line-height: 129%;
                text-align: center;
                letter-spacing: 0.015em !important;
                text-transform: uppercase;
                color: #008DD6;
            }      
            .accent_color_pink{
                color: #FF3C7F;
            }
            .magicpatch-section strong{
                font-weight: 600;
            }
            .magicpatch-section{
                text-align: center;
                padding: 56px 15px;
                margin: 0 -15px 52px;
                background: #F9F8F6;
            }    
            .magicpatch-section h2{
                max-width: 345px;
                font-weight: 400;
                font-size: 36px;
                line-height: 110%;
                text-align: center;
                letter-spacing: 0.02em;
                text-transform: uppercase;
                color: #0C0B0B !important;
                margin: 0 auto 40px;
            }
    
            .magicpatch-box{
                border-bottom: 1px solid #E2E2E2;
            }
    
            .magicpatch-box:not(:last-of-type){
                margin-bottom:16px;
            }
    
            .magicpatch-section h3{
                margin-bottom: 16px;
                font-family: 'Roboto',sans-serif;
                font-weight: 600;
                font-size: 14px;
                line-height: 130%;
                text-align: center;
                text-transform: unset;
                letter-spacing: unset !important;
                color: #212529 !important;
            }
    
            .magicpatch-list{
                list-style: none;
                display: flex;
                margin: 0;
                padding-bottom: 20px;
            }
    
            .list-var{
                justify-content: flex-end !important;
            }
    
            .magicpatch-link{
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                flex-direction: column;
                width: calc((100% * 3) / 4);
                font-weight: 400;
                font-size: 13px;
                line-height: 140%;
                text-align: left;
                letter-spacing: unset !important;
                color: #515151;
                padding: 0 6px;
            }    
            .magicpatch-link:not(:last-child){
                border-right: 1px solid #E2E2E2;
            }
            .magicpatch-section > p{
                font-weight: 400;
                font-size: 14px !important;
                line-height: 130% !important;
                text-align: left;
                color: #212529;
                margin: 20px 0 0;
            }
            .megicpatch_btn{
                display: flex;
                width: 100%;
                height: 66px;
                align-items: center;
                justify-content: center;
                font-family: 'DINEngschrift LT', sans-serif;
                font-weight: 400;
                font-size: 16px !important;
                line-height: 1;
                text-align: center;
                letter-spacing: 0.05em;
                text-transform: uppercase;
                color: #FFFFFF !important;
                background: #FF3C7F;
                box-shadow: 0px 2px 4px rgba(12, 11, 11, 0.1), 0px 12px 32px rgba(0, 0, 0, 0.05);
                border-radius: 52px;
                cursor: pointer;
                outline: none;
                margin-top: 40px;
            }    
            .megicpatch_btn:hover{
                text-decoration: unset;
            }
    
        </style>
    `
    let magicpatchTable = /*html*/ `
        <section class="magicpatch-section">    
            <h2>MAGICPATCH vs OTHER ITCH RELIEF SOLUTIONS</h2>
            <div class="magicpatch-box">
                <ul class="magicpatch-list">
                    <li class="magicpatch-link list-var">
                        <img src="https://conversionratestore.github.io/projects/buzzpatch/img/magic_magicpatch.png" alt="magicpatch" width="38" height="38">
                        <span class="accent_color_first magicpatch-span-after-svg">MagicPatch</span>
                    </li>
    
                    <li class="magicpatch-link list-var">
                        <img src="https://conversionratestore.github.io/projects/buzzpatch/img/magic_creams.png" alt="creams">
                        <span class="magicpatch-span-after-svg">Creams</span>
                    </li>
    
                    <li class="magicpatch-link list-var">
                        <img src="https://conversionratestore.github.io/projects/buzzpatch/img/magic_gels.png" alt="gels">
                        <span class="magicpatch-span-after-svg">Gels</span>
                    </li>
                    <li class="magicpatch-link list-var">
                        <img src="https://conversionratestore.github.io/projects/buzzpatch/img/magic_sprays.png" alt="sprays">
                        <span class="magicpatch-span-after-svg">Sprays</span>
                    </li>
                </ul>
            </div>
            <div class="magicpatch-box">
                <h3>Effectiveness</h3>
                <ul class="magicpatch-list">
                    <li class="magicpatch-link">
                        <span class="accent_color_main">Effective itch relief in <strong>99% of cases</strong></span>
                    </li>    
                    <li class="magicpatch-link">
                        <span>Effects may weaken with continuous long term use, due to tolerance buildup</span>
                    </li>    
                    <li class="magicpatch-link">
                        <span>May not prevent your child from scratching their skin</span>
                    </li>
                    <li class="magicpatch-link">
                        <span>Skin may become irritated when sprayed</span>
                    </li>
                </ul>
            </div>
            <div class="magicpatch-box">
                <h3>How it works, ingredients</h3>
                <ul class="magicpatch-list">
                    <li class="magicpatch-link">
                        <span class="accent_color_main"><strong>Mechanical relief:</strong> Grid-relief technology mechani-cally lifts the skin to drain the lymphatic system and remove insect saliva</span>
                    </li>
                    <li class="magicpatch-link">
                        <span><strong>Chemical relief:</strong> Uses the active steroid ingredient hydrocorti-sone 1%. May also includes parabens, perfumes, and other potentially irritating chemicals</span>
                    </li>
                    <li class="magicpatch-link">
                        <span><strong>Chemical relief:</strong> Uses a topical 2% analgesic pain relief as the active ingredient</span>
                    </li>
                    <li class="magicpatch-link">
                        <span><strong>Chemical relief:</strong> Uses the antihistamine active ingredient diphenhy-dramine hydrochloride</span>
                    </li>
                </ul>
            </div>
            <div class="magicpatch-box">
                <h3>Activation time</h3>
                <ul class="magicpatch-list">
                    <li class="magicpatch-link">
                        <span class="accent_color_main">Relief within <strong>30-60 seconds</strong></span>
                    </li>
    
                    <li class="magicpatch-link">
                        <span>Takes <strong>2+ minutes</strong></span>
                    </li>
    
                    <li class="magicpatch-link">
                        <span>Takes <strong>2+ minutes</strong></span>
                    </li>
    
                    <li class="magicpatch-link">
                        <span>Takes <strong>2+ minutes</strong></span>
                    </li>
                </ul>
            </div>
            <div class="magicpatch-box">
                <h3>Duration of effect</h3>
                <ul class="magicpatch-list">
                    <li class="magicpatch-link">
                        <span class="accent_color_main">Up to <strong>4-7 days</strong></span>
                    </li>
    
                    <li class="magicpatch-link">
                        <span>Up to <strong>8 hours</strong></span>
                    </li>
    
                    <li class="magicpatch-link">
                        <span>Up to <strong>6 hours</strong></span>
                    </li>
                    <li class="magicpatch-link">
                        <span>Up to <strong>2 hours</strong></span>
                    </li>
                </ul>
            </div>
            <div class="magicpatch-box">
                <h3>How to use</h3>
                <ul class="magicpatch-list">
                    <li class="magicpatch-link">
                        <span class="accent_color_main">Apply a MagicPatch over a bite for <strong>immediate itch relief</strong></span>
                    </li>
                    <li class="magicpatch-link">
                        <span>Apply to affected areas (not more than 14 days)	</span>
                    </li>
                    <li class="magicpatch-link">
                        <span>Apply to affected area (not more than 3 to 4 times daily)</span>
                    </li>
                    <li class="magicpatch-link">
                        <span>Apply to affected area (not more than 3 to 4 times daily)</span>
                    </li>
                </ul>
            </div>
            <div class="magicpatch-box">
                <h3>Hypoallergenic</h3>
                <ul class="magicpatch-list">
                    <li class="magicpatch-link">
                        <span class="accent_color_main">Hypoallerge-nic product</span>
                    </li>
                    <li class="magicpatch-link">
                        <span>Can cause allergic reactions</span>
                    </li>
                    <li class="magicpatch-link">
                        <span>Can cause allergic reactions</span>
                    </li>
                    <li class="magicpatch-link">
                        <span>Can cause allergic reactions</span>
                    </li>
                </ul>
            </div>
            <div class="magicpatch-box">
                <h3>Side effects</h3>
                <ul class="magicpatch-list">
                    <li class="magicpatch-link">
                        <span class="accent_color_main"><strong>No side effects</strong></span>
                    </li>
                    <li class="magicpatch-link">
                        <span>Stinging, burning, irritation, dryness or redness at the application, acne</span>
                    </li>
                    <li class="magicpatch-link">
                        <span>Rash, hives,itching, red, swollen, blistered, or peeling skin</span>
                    </li>
                    <li class="magicpatch-link">
                        <span>Irritation, pruritus, contact dermatitis</span>
                    </li>
                </ul>
            </div>
            <div class="magicpatch-box">
                <h3>Suitables for ages</h3>
                <ul class="magicpatch-list">
                    <li class="magicpatch-link">
                        <span class="accent_color_main"><strong>0+</strong> <span class="accent_color_pink">*</span></span>
                    </li>
                    <li class="magicpatch-link">
                        <span><strong>2+</strong></span>
                    </li>
                    <li class="magicpatch-link">
                        <span><strong>2+</strong></span>
                    </li>
                    <li class="magicpatch-link">
                        <span><strong>2+</strong></span>
                    </li>
                </ul>
            </div>
            <div class="magicpatch-box">
                <h3>Portability</h3>
                <ul class="magicpatch-list">
                    <li class="magicpatch-link">
                        <span class="accent_color_main"><strong>Easy to store even in pockets</strong></span>
                    </li>
                    <li class="magicpatch-link">
                        <span>Needs storage space & can leak</span>
                    </li>
                    <li class="magicpatch-link">
                        <span>Needs storage space & can leak</span>
                    </li>
                    <li class="magicpatch-link">
                        <span>Needs storage space & can leak</span>
                    </li>
                </ul>
            </div>
    
            <p><span class="accent_color_pink">*</span> There are no known age limits, but these should be kept away from kids who would be prone to peeling them off and trying to eat them.</p>
    
            <a href="#getNow" class="megicpatch_btn">Get it now!</a>
        </section>
    `

    document.head.insertAdjacentHTML("beforeend", megicpatchStyle)
    document.querySelector("body .included .boxes .row:nth-child(2)").insertAdjacentHTML("beforebegin", magicpatchTable)
  }
})
