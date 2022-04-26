let popupStyle = /*html */ `
<style>
    .vis-ver-2_1.modal-header.modal-header-style.modal-of-header.style-border.modal-header1,
    #finalForm {
        display: none !important;
    }

    .border-of-modal .vis-ver-2_2.modal-header.modal-header-style.modal-of-header.style-border.modal-header1 {
        display: none;
    }

    .border-of-modal {
        margin: 0;
    }

    .modal-dialog{
        max-width: 740px;
        width: 100% !important;
    }

    .popup-first-body{
        max-width: 100% !important;
    }

    .modal-content{
        backgroun: unset !important;
        border-radius: 10px;
        background-color: unset !important;
    }

    .modal-body{
        background: unset !important;
        
        padding: 0 15px;
    }
    
    .header_popup{
        background: #193973;
        border-radius: 0px;
        padding: 22px 0;
        text-align: center;
    }

    .header_popup > p{
        margin: 0;
        font-weight: 700;
        font-size: 18px;
        line-height: 20px;
        color: #FFFFFF !important;
    }

    .body_popup{
        background: #FFFFFF;
        padding: 25px 56px 28px;
    }

    .body_popup > h2{
        font-weight: 600 !important;
        font-size: 22px !important;
        line-height: 30px !important;
        text-align: center;
        color: #193973 !important;
        margin-bottom: 24px !important;
    }

    .inform_wrap > p{
        font-weight: 600 !important;
        font-size: 16px !important;
        line-height: 20px !important;
        text-align: center;
        color: #77777D !important;
        margin-bottom: 28px !important;
    }

    .inform_wrap > ul{
        margin: 0 auto;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        max-width: 455px;
        width: 100%;
        gap: 18px;
    }

    .inform_wrap > ul li{
        width: 46%;
        display: flex;
        align-items: center;
    }

    .inform_wrap > ul li > p{
        font-weight: 400;
        font-size: 16px;
        line-height: 125%;
        text-align: start;
        color: #808080 !important;
        margin: 0 0 0 4px;
    }

    .btn_wrapp{
        margin-top: 46px;
    }

    .btn_wrapp p{
        font-weight: 400;
        font-size: 16px;
        line-height: 125%;
        color: #808080 !important;
        margin-bottom: 24px;
        text-align: center;
    }

    .btn_wrapp > div{
        display: flex;
        justify-content: space-between;
    }

    .btn_wrapp > div a{
        padding: 10px 0;
        background: #193973;
        border-radius: 10px;
        font-weight: 600;
        font-size: 18px;
        line-height: 25px;
        text-align: center;
        letter-spacing: -0.01em;
        color: #FFFFFF !important;
        width: 48%;
    }
</style>
`

let popup_first = /*html*/ `
<div class="popup_first">
    <div class="header_popup">
        <p>FREE ONLINE DOG TRAINING WORKSHOP</p>
    </div>
    <div class="body_popup">
        <h2>Learn how to train your dog to become as obedient as a service dog</h2>

        <div class="inform_wrap">
            <p>The workshop will teach you to deal with:</p>
            <ul>
                <li>
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.945 10.2056C6.78774 10.8574 7.19208 11.8045 6.84848 12.3216C6.50486 12.8387 5.54327 12.7296 4.70066 12.078C3.85801 11.4263 3.4536 10.4792 3.79724 9.96214C4.14092 9.44518 5.10249 9.55423 5.945 10.2056Z" fill="#699CD0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.7056 7.45716C10.8487 8.51291 11.4667 9.33664 12.0863 9.29757C12.7059 9.25851 13.0922 8.37128 12.9493 7.31568C12.8062 6.26014 12.1881 5.43633 11.5686 5.47541C10.9491 5.51454 10.5627 6.40183 10.7056 7.45716Z" fill="#699CD0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.0041 7.31266C7.7118 8.12433 7.92411 9.12328 7.47841 9.544C7.03265 9.96453 6.09757 9.64747 5.38994 8.83587C4.68228 8.0242 4.46994 7.02522 4.9157 6.60462C5.36143 6.18398 6.29643 6.50097 7.0041 7.31266Z" fill="#699CD0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.65813 6.93589C8.00735 7.9545 8.76617 8.63804 9.35324 8.46226C9.94044 8.28664 10.1334 7.31832 9.78428 6.29965C9.43519 5.28094 8.67624 4.59754 8.08909 4.7733C7.50194 4.94903 7.30895 5.91722 7.65813 6.93589Z" fill="#699CD0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.12404 10.7452C8.13628 11.0575 8.00993 12.1875 7.7621 12.6912C7.51431 13.195 7.24241 13.88 7.85149 14.741C8.46062 15.6022 9.5334 15.5019 10.0717 15.145C10.6102 14.7883 11.5974 14.0676 12.4151 13.7483C13.2327 13.4291 14.131 12.7947 13.8503 11.7956C13.5696 10.7965 12.7525 10.5284 12.1831 10.4374C11.6138 10.3465 10.4231 9.77891 9.97419 9.46191C9.5254 9.14507 8.05371 8.93989 8.12404 10.7452Z" fill="#699CD0"/>
</svg>
                    <p>Barking</p>
                </li>
                <li>
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.945 10.2056C6.78774 10.8574 7.19208 11.8045 6.84848 12.3216C6.50486 12.8387 5.54327 12.7296 4.70066 12.078C3.85801 11.4263 3.4536 10.4792 3.79724 9.96214C4.14092 9.44518 5.10249 9.55423 5.945 10.2056Z" fill="#699CD0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.7056 7.45716C10.8487 8.51291 11.4667 9.33664 12.0863 9.29757C12.7059 9.25851 13.0922 8.37128 12.9493 7.31568C12.8062 6.26014 12.1881 5.43633 11.5686 5.47541C10.9491 5.51454 10.5627 6.40183 10.7056 7.45716Z" fill="#699CD0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.0041 7.31266C7.7118 8.12433 7.92411 9.12328 7.47841 9.544C7.03265 9.96453 6.09757 9.64747 5.38994 8.83587C4.68228 8.0242 4.46994 7.02522 4.9157 6.60462C5.36143 6.18398 6.29643 6.50097 7.0041 7.31266Z" fill="#699CD0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.65813 6.93589C8.00735 7.9545 8.76617 8.63804 9.35324 8.46226C9.94044 8.28664 10.1334 7.31832 9.78428 6.29965C9.43519 5.28094 8.67624 4.59754 8.08909 4.7733C7.50194 4.94903 7.30895 5.91722 7.65813 6.93589Z" fill="#699CD0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.12404 10.7452C8.13628 11.0575 8.00993 12.1875 7.7621 12.6912C7.51431 13.195 7.24241 13.88 7.85149 14.741C8.46062 15.6022 9.5334 15.5019 10.0717 15.145C10.6102 14.7883 11.5974 14.0676 12.4151 13.7483C13.2327 13.4291 14.131 12.7947 13.8503 11.7956C13.5696 10.7965 12.7525 10.5284 12.1831 10.4374C11.6138 10.3465 10.4231 9.77891 9.97419 9.46191C9.5254 9.14507 8.05371 8.93989 8.12404 10.7452Z" fill="#699CD0"/>
</svg>
                    <p>Jumping</p>
                </li>
                <li>
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.945 10.2056C6.78774 10.8574 7.19208 11.8045 6.84848 12.3216C6.50486 12.8387 5.54327 12.7296 4.70066 12.078C3.85801 11.4263 3.4536 10.4792 3.79724 9.96214C4.14092 9.44518 5.10249 9.55423 5.945 10.2056Z" fill="#699CD0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.7056 7.45716C10.8487 8.51291 11.4667 9.33664 12.0863 9.29757C12.7059 9.25851 13.0922 8.37128 12.9493 7.31568C12.8062 6.26014 12.1881 5.43633 11.5686 5.47541C10.9491 5.51454 10.5627 6.40183 10.7056 7.45716Z" fill="#699CD0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.0041 7.31266C7.7118 8.12433 7.92411 9.12328 7.47841 9.544C7.03265 9.96453 6.09757 9.64747 5.38994 8.83587C4.68228 8.0242 4.46994 7.02522 4.9157 6.60462C5.36143 6.18398 6.29643 6.50097 7.0041 7.31266Z" fill="#699CD0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.65813 6.93589C8.00735 7.9545 8.76617 8.63804 9.35324 8.46226C9.94044 8.28664 10.1334 7.31832 9.78428 6.29965C9.43519 5.28094 8.67624 4.59754 8.08909 4.7733C7.50194 4.94903 7.30895 5.91722 7.65813 6.93589Z" fill="#699CD0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.12404 10.7452C8.13628 11.0575 8.00993 12.1875 7.7621 12.6912C7.51431 13.195 7.24241 13.88 7.85149 14.741C8.46062 15.6022 9.5334 15.5019 10.0717 15.145C10.6102 14.7883 11.5974 14.0676 12.4151 13.7483C13.2327 13.4291 14.131 12.7947 13.8503 11.7956C13.5696 10.7965 12.7525 10.5284 12.1831 10.4374C11.6138 10.3465 10.4231 9.77891 9.97419 9.46191C9.5254 9.14507 8.05371 8.93989 8.12404 10.7452Z" fill="#699CD0"/>
</svg>
                    <p>Pulling on leash</p>
                </li>
                <li>
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.945 10.2056C6.78774 10.8574 7.19208 11.8045 6.84848 12.3216C6.50486 12.8387 5.54327 12.7296 4.70066 12.078C3.85801 11.4263 3.4536 10.4792 3.79724 9.96214C4.14092 9.44518 5.10249 9.55423 5.945 10.2056Z" fill="#699CD0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.7056 7.45716C10.8487 8.51291 11.4667 9.33664 12.0863 9.29757C12.7059 9.25851 13.0922 8.37128 12.9493 7.31568C12.8062 6.26014 12.1881 5.43633 11.5686 5.47541C10.9491 5.51454 10.5627 6.40183 10.7056 7.45716Z" fill="#699CD0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.0041 7.31266C7.7118 8.12433 7.92411 9.12328 7.47841 9.544C7.03265 9.96453 6.09757 9.64747 5.38994 8.83587C4.68228 8.0242 4.46994 7.02522 4.9157 6.60462C5.36143 6.18398 6.29643 6.50097 7.0041 7.31266Z" fill="#699CD0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.65813 6.93589C8.00735 7.9545 8.76617 8.63804 9.35324 8.46226C9.94044 8.28664 10.1334 7.31832 9.78428 6.29965C9.43519 5.28094 8.67624 4.59754 8.08909 4.7733C7.50194 4.94903 7.30895 5.91722 7.65813 6.93589Z" fill="#699CD0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.12404 10.7452C8.13628 11.0575 8.00993 12.1875 7.7621 12.6912C7.51431 13.195 7.24241 13.88 7.85149 14.741C8.46062 15.6022 9.5334 15.5019 10.0717 15.145C10.6102 14.7883 11.5974 14.0676 12.4151 13.7483C13.2327 13.4291 14.131 12.7947 13.8503 11.7956C13.5696 10.7965 12.7525 10.5284 12.1831 10.4374C11.6138 10.3465 10.4231 9.77891 9.97419 9.46191C9.5254 9.14507 8.05371 8.93989 8.12404 10.7452Z" fill="#699CD0"/>
</svg>
                    <p>Housebreaking</p>
                </li>
                <li>
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.945 10.2056C6.78774 10.8574 7.19208 11.8045 6.84848 12.3216C6.50486 12.8387 5.54327 12.7296 4.70066 12.078C3.85801 11.4263 3.4536 10.4792 3.79724 9.96214C4.14092 9.44518 5.10249 9.55423 5.945 10.2056Z" fill="#699CD0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.7056 7.45716C10.8487 8.51291 11.4667 9.33664 12.0863 9.29757C12.7059 9.25851 13.0922 8.37128 12.9493 7.31568C12.8062 6.26014 12.1881 5.43633 11.5686 5.47541C10.9491 5.51454 10.5627 6.40183 10.7056 7.45716Z" fill="#699CD0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.0041 7.31266C7.7118 8.12433 7.92411 9.12328 7.47841 9.544C7.03265 9.96453 6.09757 9.64747 5.38994 8.83587C4.68228 8.0242 4.46994 7.02522 4.9157 6.60462C5.36143 6.18398 6.29643 6.50097 7.0041 7.31266Z" fill="#699CD0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.65813 6.93589C8.00735 7.9545 8.76617 8.63804 9.35324 8.46226C9.94044 8.28664 10.1334 7.31832 9.78428 6.29965C9.43519 5.28094 8.67624 4.59754 8.08909 4.7733C7.50194 4.94903 7.30895 5.91722 7.65813 6.93589Z" fill="#699CD0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.12404 10.7452C8.13628 11.0575 8.00993 12.1875 7.7621 12.6912C7.51431 13.195 7.24241 13.88 7.85149 14.741C8.46062 15.6022 9.5334 15.5019 10.0717 15.145C10.6102 14.7883 11.5974 14.0676 12.4151 13.7483C13.2327 13.4291 14.131 12.7947 13.8503 11.7956C13.5696 10.7965 12.7525 10.5284 12.1831 10.4374C11.6138 10.3465 10.4231 9.77891 9.97419 9.46191C9.5254 9.14507 8.05371 8.93989 8.12404 10.7452Z" fill="#699CD0"/>
</svg>
                    <p>Nipping/biting </p>
                </li>
                <li>
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.945 10.2056C6.78774 10.8574 7.19208 11.8045 6.84848 12.3216C6.50486 12.8387 5.54327 12.7296 4.70066 12.078C3.85801 11.4263 3.4536 10.4792 3.79724 9.96214C4.14092 9.44518 5.10249 9.55423 5.945 10.2056Z" fill="#699CD0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.7056 7.45716C10.8487 8.51291 11.4667 9.33664 12.0863 9.29757C12.7059 9.25851 13.0922 8.37128 12.9493 7.31568C12.8062 6.26014 12.1881 5.43633 11.5686 5.47541C10.9491 5.51454 10.5627 6.40183 10.7056 7.45716Z" fill="#699CD0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.0041 7.31266C7.7118 8.12433 7.92411 9.12328 7.47841 9.544C7.03265 9.96453 6.09757 9.64747 5.38994 8.83587C4.68228 8.0242 4.46994 7.02522 4.9157 6.60462C5.36143 6.18398 6.29643 6.50097 7.0041 7.31266Z" fill="#699CD0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.65813 6.93589C8.00735 7.9545 8.76617 8.63804 9.35324 8.46226C9.94044 8.28664 10.1334 7.31832 9.78428 6.29965C9.43519 5.28094 8.67624 4.59754 8.08909 4.7733C7.50194 4.94903 7.30895 5.91722 7.65813 6.93589Z" fill="#699CD0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.12404 10.7452C8.13628 11.0575 8.00993 12.1875 7.7621 12.6912C7.51431 13.195 7.24241 13.88 7.85149 14.741C8.46062 15.6022 9.5334 15.5019 10.0717 15.145C10.6102 14.7883 11.5974 14.0676 12.4151 13.7483C13.2327 13.4291 14.131 12.7947 13.8503 11.7956C13.5696 10.7965 12.7525 10.5284 12.1831 10.4374C11.6138 10.3465 10.4231 9.77891 9.97419 9.46191C9.5254 9.14507 8.05371 8.93989 8.12404 10.7452Z" fill="#699CD0"/>
</svg>
                    <p>Not coming when called</p>
                </li>
            </ul>
        </div>

        <div class="btn_wrapp">            
            <p>To get started, please indicate your dog's age:</p>
            
            <div class="">
                <a href="">I have a puppy (up to 1 year) </a>
                <a href="">I have an adult dog (1+ year)</a>
            </div>
        </div>

    </div>
</div>
`

let popup_third = /*html*/ `
<div class="popup_third">
    <div class="header_popup">
        <p>FREE ONLINE DOG TRAINING WORKSHOP</p>
    </div>
    <div class="body_popup">
        <h2>How should we address you and your dog?</h2>

        <div>
            <input required type="text" placeholder="Your name">
            <input required type="text" placeholder="Dog’s name">
        </div>
        <button>Continue</button>
    </div>
</div>
`

document.head.insertAdjacentHTML("beforeend", popupStyle)

if (document.querySelector(".vis-ver-2_1.modal-header.modal-header-style.modal-of-header.style-border.modal-header1")) {
  document.querySelector(".vis-ver-2_1.modal-header.modal-header-style.modal-of-header.style-border.modal-header1").insertAdjacentHTML("beforebegin", popup_first)

  document.querySelector(".popup_first .btn_wrapp > div a:first-child").addEventListener("click", function (e) {
    e.preventDefault()
    document.querySelector(".sec .puppy-popup-link #puppyCheck").click()
    document.querySelector(".popup_first").style.display = "none"
    document.querySelector("#puppyContent .yesno .ysn.popup_link:nth-child(1) a").click()
  })

  document.querySelector(".popup_first .btn_wrapp > div a:last-child").addEventListener("click", function (e) {
    e.preventDefault()
    document.querySelector(".sec .popup_link #puppyCheck").click()
    document.querySelector(".popup_first").style.display = "none"
    document.querySelector("#adultContent .yesno .ysn.popup_link:nth-child(1) a").click()
  })
}

if (document.querySelector(".vis-ver-2_2.modal-header.modal-header-style.modal-of-header.style-border.modal-header1")) {
  document.querySelector(".vis-ver-2_2.modal-header.modal-header-style.modal-of-header.style-border.modal-header1").insertAdjacentHTML("beforebegin", popup_first)

  document.querySelector(".popup_first .btn_wrapp > div a:first-child").addEventListener("click", function (e) {
    e.preventDefault()
    document.querySelector(".sec .puppy-popup-link #puppyCheck").click()
    document.querySelector(".popup_first").style.display = "none"
    document.querySelector("#puppyContent .yesno .ysn.popup_link:nth-child(1) a").click()
  })

  document.querySelector(".popup_first .btn_wrapp > div a:last-child").addEventListener("click", function (e) {
    e.preventDefault()
    document.querySelector(".sec .popup_link:last-child #puppyCheck").click()
    document.querySelector(".popup_first").style.display = "none"
    document.querySelector("#adultContent .yesno .ysn.popup_link:nth-child(1) a").click()
  })
}

if (document.querySelector("#finalForm")) {
  document.querySelector("#finalForm").insertAdjacentHTML("afterend", popup_third)
}
