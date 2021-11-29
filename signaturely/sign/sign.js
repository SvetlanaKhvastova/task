let styleSign = /*html*/ `
<style>
    <!-- .signTemplate__form-mainGroupField, .signTemplate__emailField, .signTemplate__title, .signTemplate__templateField-select-title, .uiSelect__wrapper, .common__or, .signTemplate__templateField-upload-createButton{
        display: none;
    } -->

    .interactModal__fieldBar-fieldWrapper{
        display: none;
    }

    .interactModal__documentView, .interactModal__header-send .button.button--primary{
        position: relative;
    }

    .drag_and_drop_hover{
        background: #FFFFFF;
        border: 1px solid #00A3FA;
        border-radius: 6px;
        width: 231px;
        max-width: 231px;
        padding: 20px;
        position: absolute;
        top: 0;
        left: 120px;
        text-align: center;
    }

    .drag_and_drop_hover div{
        position: relative;
    }

    .drag_and_drop_hover div::before{
        position: absolute;
        content: '';
        bottom: -29px;
        left: 50%;
        width: 16px;
        height: 16px;
        transform: rotate(-45deg);
        border-left: 1px solid #00A3FA;
        border-bottom: 1px solid #00A3FA;
        background: #FFFFFF;
    }

    .drag_and_drop_hover p{
        margin-bottom: 16px;
    }

    .drag_and_drop_hover p, .drag_and_drop_hover_btn p{
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 14px;
        line-height: 129%;
        text-align: center;
        color: #2D3C4A;
    }

    .drag_and_drop_hover button{
        display: inline-flex;
        background: #00A3FA;
        border-radius: 50px;
        max-width: 191px;
        width: 100%;
        height: 40px;
        justify-content: center;
        align-items: center;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 40px;
        color: #FFFFFF;
    }

    .drag_and_drop_hover_btn{
        background: #FFFFFF;
        border: 1px solid #00A3FA;
        border-radius: 6px;
        padding: 20px;
        position: absolute;
        top: 2px;
        right: 140px;
        text-align: center;
        width: 245px;
        display: none;
    }

    .drag_and_drop_hover_btn div{
        position: relative;
    }

    .drag_and_drop_hover_btn div::before{
        position: absolute;
        content: '';
        top: -20px;
        right: 97px;
        width: 16px;
        height: 16px;
        transform: rotate(-45deg);
        border-right: 1px solid #00A3FA;
        border-bottom: 1px solid #00A3FA;
        background: #FFFFFF;
    }

    .interactModal__header-send .button.button--primary:hover .drag_and_drop_hover_btn{
        display: block;
    }

    .sidebar__item-link-list .sidebar__item-link{
        position: relative;
    }

    <!--  -->

    .choose_action{
        width: 227px;
    }
    
    .choose_action p{
        font-family: "Circular Std",sans-serif;
        font-weight: 700;
        font-size: 16px;
        line-height: 112%;
        color: #2D3C4A;
    }

    .choose_action .input_wrapper{
        padding: 20px;
        background: #FFFFFF;
        box-shadow: 0px 1px 10px rgb(0 83 168 / 15%);
        border-radius: 7px;
        margin: 15px 0 20px;
    }

    .choose_action .input_wrapper > div:not(:last-child){
        margin-bottom: 15px;
    }

    .choose_action > div:last-child{
        padding-top: 20px;
        border-top: 1px solid #CDDFEF;
    }

    .choose_action > div:last-child button{
        background-color: #00a3fa;
        border-color: #00a3fa;
        width: 210px;
        display: flex;
        min-height: 42px;
        justify-content: center;
        align-self: center;
        text-align: center;
        align-items: center;
        border-radius: 110px;
        vertical-align: baseline;
        line-height: 19px;
        padding: 0 22px 0 21px;
        transition: all .2s ease;
        color: #fff;
    }

    .choose_action > div:last-child button svg{
        margin-left: 6px;
        width: 6px;
    }

    .choose_action .input_wrapper > div > label{
        display: flex;
        align-items: center;
    }

    .choose_action .input_wrapper > div > label span:last-child{
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 14px;
        line-height: 143%;
        color: #627690;
    }

    .choose_action .input_wrapper > div{
        position: relative;
    }

    .ellipse{
        display: none;
    }

    .choose_action .input_wrapper > div >input{
        position: absolute;
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
    }

    .radio_style{
        flex-shrink: 0;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 1px solid #ADBFC9;
        background: linear-gradient(180deg, #FFFFFF 0%, #EBEFF2 100%);
        margin-right: 7px;
    }

    .choose_action .input_wrapper > div >input:checked + label .radio_style{
        background: #00A3FA;
        box-shadow: 0px -1.8px 3.55px rgba(6, 33, 57, 0.1);
        border: none;
    }

    .choose_action .input_wrapper > div >input:checked  + label .radio_style .ellipse{
        display: inline-block;
        width: 6px;
        height: 6px;
        background: #FFFFFF;
        border-radius: 50%;
        
    }
    
    .choose_action .input_wrapper > div:nth-child(1),
    .choose_action .input_wrapper > div:nth-child(2),
    .choose_action .input_wrapper > div:nth-child(3){
        position: relative;
        display: flex;
        align-items: center;
    }

    .choose_action .input_wrapper > div:nth-child(1):hover .sign_hover1:before,
    .choose_action .input_wrapper > div:nth-child(2):hover .sign_hover2:before,
    .choose_action .input_wrapper > div:nth-child(3):hover .sign_hover3:before{
        display: flex;
        z-index: 9999;
    }
    
    
    .sign_hover1:before, .sign_hover2:before, .sign_hover3:before{
        position: absolute;
        content: '';
        width: 215px;
        height: 42px;
        top: -19px;
        right: -177px;
        text-align: center;
        align-items: center;
        justify-content: center;
        background: url('https://conversionratestore.github.io/projects/signaturely/img/rectangle12.svg') center center no-repeat;
        padding: 15px;
        display: none;
    }

    .sign_hover2:before{
        background: url('https://conversionratestore.github.io/projects/signaturely/img/rectangle13.svg') center center no-repeat;
        right: -235px;
        top: -31px;
        height: 65px;
        padding: 17px;
    }

    .sign_hover3:before{
        background: url('https://conversionratestore.github.io/projects/signaturely/img/rectangle14.svg') center center no-repeat;
        width: 187px;
        height: 62px;
        top: -23px;
        right: -170px;
    }

    <!--  -->
        li {
    list-style: none;
    }

    .final_step ol{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #39BAFF;
        padding: 0;
    }

    .final_step ol li{
        position: relative;
        padding: 9px 0 9px 15px;
        border: 1px solid #39BAFF;
        border-radius: 4px;
        flex: 1;
        margin-right: 5px;
    }

    .final_step ol li:not(:last-child):after{
        position: absolute;
        content: "";
        width: 14px;
        height: 14px;
        margin-left: 10px;
        top: 50%;
        transform: translateY(-50%);
        background: url('https://conversionratestore.github.io/projects/signaturely/img/check_circle_finish.svg') center center no-repeat;
    }

    .final_step ol li span{
        font-family: "Circular Std",sans-serif;
        font-weight: 400;
        font-size: 11px;
        line-height: 14px;
        color: #39BAFF;
    }

     .final_step ol li span > span:first-child{
        margin-right: 10px;
    }

    .final_step ol li.active_finish {
        background: #39BAFF;
        border-radius: 4px;
    }

    .final_step ol li.active_finish span{
        font-weight: 900;
        color: #FFFFFF;
    }

    .final_step form{
        margin: 132px auto 0;
        width: 473px;
    }

    .final_step form > h2{
        margin-bottom: 40px;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 18px;
        line-height: 129%;
        color: #2D3C4A;
    }

    .final_step form label:first-of-type{
        margin-bottom: 20px;
        display: block;
    }

    .final_step form label p{
        margin-bottom: 8px;
    }

    .final_step form button{
        margin-top: 40px;
        width: 84px;
        height: 42px;
        background: #00A3FA;
        border-radius: 50px;
        text-align:center;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 300%;
        color: #FFFFFF;
    }

</style>`

let dragAndDropHover = /*html*/ `
<div class="drag_and_drop_hover">
    <div>
        <p>Drag & drop fields on the left into the document</p>
        <button>Got It</button>
    </div>
</div>
`

let hoverBtn = /*html*/ `
<div class="drag_and_drop_hover_btn">
    <div>
        <p>Please drag & drop fields on the left into the document</p>
    </div>
</div>
`

let signHover1 = /*html*/ `
<div class="sign_hover1"></div>
`

let signHover2 = /*html*/ `
<div class="sign_hover2"></div>
`

let signHover3 = /*html*/ `
<div class="sign_hover3"></div>
`

let chooseAction = /*html*/ `
<div class="choose_action">
  <p>Choose an action</p>
  <div class="input_wrapper">
    <div>
        <input type="radio" id="signType1"
        name="sign" value="email" checked>
        <label for="signType1">
            <span class="radio_style">
                <span class="ellipse"></span>
            </span>
            <span>Sign a Document</span>
        </label>
    </div>

    <div>
        <input type="radio" id="signType2"
        name="sign" value="phone">
        <label for="signType2">
            <span class="radio_style">
                <span class="ellipse"></span>
            </span>
            <span>Sign & Send for Signature</span>
        </label>
    </div>

    <div>
        <input type="radio" id="signType3"
        name="sign" value="mail">
        <label for="signType3">
            <span class="radio_style">
                <span class="ellipse"></span>
            </span>
            <span> Send for Signature</span>
        </label>
    </div>
  </div>
  <div>
    <button type="submit"><span>Fill Out & Sign</span>
<svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none" class="injected-svg" data-src="/static/media/angle-arrow.c134c5d9.svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<path d="M1.375 13.75L7.625 7.5L1.375 1.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
    </button>
  </div>
</div>
`

let finalStep = /*html*/ `
<div class="final_step">
    <ol>
        <li>
            <span><span>1.</span> Upload a document</span>
        </li>
        <li>
            <span><span>2.</span> Choose an action</span>
        </li>
        <li>
            <span><span>3.</span> Sign & Send for Signature</span>
        </li>
        <li class="active_finish">
            <span><span>4.</span> Finish</span>            
        </li>
    </ol>

    <form>
        <h2>Final Step</h2>

        <label class="form__label">
            <p>Document Title</p>
            <input type="text" class="form__input">
        </label>

        <label class="form__label">
            <p>Optional Message</p>
            <textarea class="form__input form__input--textArea" placeholder="Add an optional message for the document signers." style="height: 110px;"></textarea>
        </label>
        <button type="submit">Finish</button>
    </form>
</div>
`

document.body.insertAdjacentHTML("afterbegin", styleSign)
// document.querySelector(".dashboard__item-link:nth-child(4)").click()

if (document.querySelector(".interactModal__documentView")) {
  document.querySelector(".interactModal__documentView").insertAdjacentHTML("beforeend", dragAndDropHover)
}

if (document.querySelector(".interactModal__header-send .button.button--primary")) {
  document.querySelector(".interactModal__header-send .button.button--primary").insertAdjacentHTML("beforeend", hoverBtn)
}

//
document.querySelector(".interactModal__fieldBar").insertAdjacentHTML("beforeend", chooseAction)

document.querySelector(".choose_action .input_wrapper > div:nth-child(1)").insertAdjacentHTML("beforeend", signHover1)
document.querySelector(".choose_action .input_wrapper > div:nth-child(2)").insertAdjacentHTML("beforeend", signHover2)
document.querySelector(".choose_action .input_wrapper > div:nth-child(3)").insertAdjacentHTML("beforeend", signHover3)

document.querySelector(".drag_and_drop_hover button").addEventListener("click", () => {
  document.querySelector(".drag_and_drop_hover").style.display = "none"
})

document.querySelector(".main-layout__container").insertAdjacentHTML("beforeend", finalStep)
