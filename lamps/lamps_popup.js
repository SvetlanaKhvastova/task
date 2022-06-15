let popUpStyle = /*html */ `
    <style>
        .backdrop_popup {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgb(0 0 0 / 40%);
            display: flex;
            overflow-y: auto;
            z-index: 9999;
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s ease;
            }

            .backdrop_popup.show {
            opacity: 1;
            pointer-events: auto;
            }

            .backdrop_popup.show .container_popup {
            transform: translateY(0);
            }

            .backdrop_popup .container_popup {
            background: #ffffff;
            border-radius: 20px;
            padding: 56px;
            max-width: 735px;
            width: calc(100% - 40px);
            margin: auto;
            position: relative;
            transform: translateY(-100px);
            transition: all 0.3s ease;
            }

            .btn_close {
            position: absolute;
            top: 20px;
            right: 20px;
            cursor: pointer;
            }

            @media (max-width: 767px) {
            .backdrop_popup .container_popup {
                padding: 24px;
                width: calc(100% - 75px);
            }
            }
    </style>
    `

let popUp = /*html */ `
    <div class="backdrop_popup">
        <div class="container_popup">
            <svg class="btn_close" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="#5A7386" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6 6L18 18" stroke="#5A7386" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <div class="body_popup">

            </div>
        </div>
    </div>
    `

document.head.insertAdjacentHTML("beforeend", popUpStyle)
document.body.insertAdjacentHTML("beforeend", popUp)

setTimeout(() => {
  showPopup()
}, 3000)

document.querySelector(".btn_close").addEventListener("click", () => {
  hidePopup()
})

document.querySelector(".backdrop_popup").addEventListener("click", (e) => {
  if (e.target.matches(".backdrop_popup")) {
    hidePopup()
  }
})

//show popup
function showPopup() {
  document.querySelector(".backdrop_popup").classList.add("show")
  document.body.style.overflow = "hidden"
}

//hide popup
function hidePopup() {
  document.querySelector(".backdrop_popup").classList.remove("show")
  document.body.style.overflow = "unset"
}

// document.querySelector("#signup-email").click()
// document.querySelector("#first-name").value = "FDFF"
// document.querySelector("#last-name").value = "FDFF"
// document.querySelector("#register-email").value = "dhfjf@jjd.ckm"
// document.querySelector("#register-password").value = "8520"
// document.querySelector("#btn-register-submit").click()
