let startPopup = setInterval(() => {
  if (document) {
    clearInterval(startPopup);

    let popupStyle = /*html */ `
    <style>

    body.open_var{
            overflow: hidden;
        }
    .overlay_popup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        overflow-y: auto;
        z-index: 1000000000;
        transition: all 0.5s ease;
    }
    .overlay_popup.is_hidden{
        opacity: 0;
        pointer-events: none;
    }
    .overlay_popup .container_popup {
        display: block;
        position: relative;
        max-width: 1000px;
        width: 100%;
        margin: auto;
        transition: all 0.5s ease 0s;
    }
    .overlay_popup .container_popup > .btn_close {
        position: absolute;
        top: 24px;
        right: 24px;
        width: 40px;
        height: 40px;
        outline: none;
        cursor: pointer;
        background: #144732;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .content_popup{
        display: flex;
        background: #FFFFFF;
    }
    .content_popup > div{
        width: 50%;
    }

    @media (max-width: 768px) {

    }
    @media (max-width: 320px) {

    }
    @media (max-width: 280px) {

    }
    </style>
    `;

    let popUp = /*html */ `
        <div class="overlay_popup is_hidden">
          <div class="container_popup">
            <div class="btn_close">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="black"/>
                </svg>
            </div>
          </div>
        </div>
`;
    let contentPopup = /*html */ `
        <div class="content_popup">
            <div class="img_wrap">
                <img src="https://conversionratestore.github.io/projects/knineti/img/not_click_img.jpg" alt="" />
            </div>
            <div>
            <h2>Did you know?</h2>
            <p>Dogs learn via a behavioral psychology principle called Operant Conditioning, and are best trained using body language rather than verbal commands.</p>
            <div>
                <h3>Start watching our FREE Workshop</h3>
                <ul>
                <li>
                    <p>To learn about the 4 quadrants of operant conditioning, body language and a secret 6-step process that’s usually only known to people in the service dog training industry.</p>
                </li>
                </ul>
            </div>
            <div>
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99984 1.91699C5.39984 1.91699 1.6665 5.65033 1.6665 10.2503C1.6665 14.8503 5.39984 18.5837 9.99984 18.5837C14.5998 18.5837 18.3332 14.8503 18.3332 10.2503C18.3332 5.65033 14.5998 1.91699 9.99984 1.91699ZM9.99984 11.0837C9.5415 11.0837 9.1665 10.7087 9.1665 10.2503V6.91699C9.1665 6.45866 9.5415 6.08366 9.99984 6.08366C10.4582 6.08366 10.8332 6.45866 10.8332 6.91699V10.2503C10.8332 10.7087 10.4582 11.0837 9.99984 11.0837ZM10.8332 14.417H9.1665V12.7503H10.8332V14.417Z" fill="#734F22" />
                </svg>
                <p>IMPORTANT NOTE: This workshop won't be up for ever, so please watch it while you can.</p>
            </div>
            <div>
                <button>
                START WATCHING NOW
                <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.2418 8.73307L4.47513 5.49974L1.2418 2.26641C0.916797 1.94141 0.916797 1.41641 1.2418 1.09141C1.5668 0.766406 2.0918 0.766406 2.4168 1.09141L6.2418 4.91641C6.5668 5.24141 6.5668 5.76641 6.2418 6.09141L2.4168 9.9164C2.0918 10.2414 1.5668 10.2414 1.2418 9.9164C0.92513 9.5914 0.916797 9.05807 1.2418 8.73307Z" fill="white" />
                </svg>
                </button>
                <button>I don’t want to train my dog</button>
            </div>
            </div>
        </div>
    `;

    document.head.insertAdjacentHTML("beforeend", popupStyle);
    document.body.insertAdjacentHTML("afterbegin", popUp);
    document.querySelector(".overlay_popup .container_popup")?.insertAdjacentHTML("beforeend", contentPopup);

    exitIntentPopup();
    function exitIntentPopup() {
      //   EXIT INTENT popup
      if (document.querySelector(".overlay_popup")) {
        let overlay = document.querySelector(".overlay_popup"),
          containerPopup = overlay.querySelector(".container_popup"),
          btnClose = overlay.querySelector(".btn_close");

        addEvent(document, "mouseout", function (e) {
          //show EXIT INTENT popup desktop
          if (e.toElement == null && e.relatedTarget == null && sessionStorage.getItem("exit_popup_loaded") == null) {
            sessionStorage.setItem("exit_popup_loaded", "true"); //refresh status popup
            onOpenPopup(); //show popup
          }
        });
        function addEvent(obj, evt, fn) {
          //exit intent
          if (obj.addEventListener) {
            obj.addEventListener(evt, fn, false);
          } else if (obj.attachEvent) {
            obj.attachEvent("on" + evt, fn);
          }
        }
        if (window.innerWidth <= 768) {
          //show EXIT INTENT popup mobile
          let lastPosition = 0,
            newPosition = 0,
            currentSpeed = 0;
          let scrollSpeed = () => {
            lastPosition = window.scrollY;
            setTimeout(() => {
              newPosition = window.scrollY;
            }, 70);
            currentSpeed = newPosition - lastPosition;
            if (currentSpeed > 70 && sessionStorage.getItem("exit_popup_loaded") == null) {
              sessionStorage.setItem("exit_popup_loaded", "true"); //refresh status popup
              onOpenPopup(); //show popup
              document.removeEventListener("scroll", scrollSpeed);
            }
          };
          document.addEventListener("scroll", scrollSpeed);
        }

        function onOpenPopup() {
          overlay.classList.remove("is_hidden");
          document.querySelector("body").classList.add("open_var");
          if (!document.querySelector(".overlay_popup .content_popup")) {
            containerPopup?.insertAdjacentHTML("beforeend", contentPopup);
          }
        }

        btnClose.addEventListener("click", (e) => {
          // click on btn close popup
          onClosePopup();
        });
        overlay.addEventListener("click", (e) => {
          // click on overlay popup
          if (e.target.matches(".overlay_popup")) {
            onClosePopup();
          }
        });
        function onClosePopup() {
          overlay.classList.add("is_hidden");
          if (document.querySelector("body").classList.contains("open_var")) {
            document.querySelector("body").classList.remove("open_var");
          }
          setTimeout(() => {
            document.querySelector(".content_popup")?.remove();
          }, 400);
        }
      }
    }
  }
}, 100);
