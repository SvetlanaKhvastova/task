if (window.location.pathname === "/grantme-program-assessment") {
  let startContext = setInterval(() => {
    if (localStorage.getItem("personalCoaching")) {
      clearInterval(startContext);

      let newStyle = /*html */ `
        <style>

        
        </style>
        `;

      document.head.insertAdjacentHTML("beforeend", newStyle);
    }
  }, 100);
}

if (window.location.pathname === "/scholarship-eligibility-quiz") {
  let startContext = setInterval(() => {
    if (document.querySelector("#edit-are-you-a-current-student-")) {
      clearInterval(startContext);

      let eventVar = "desktop";

      if (window.innerWidth <= 768) {
        eventVar = "mobile";
      }

      function pushDataLayer(nameDataLayer, deskDataLayer, typeDataLayer, actionDataLayer, labelDataLayer) {
        window.dataLayer = window.dataLayer || [];
        if (labelDataLayer) {
          console.log(deskDataLayer + typeDataLayer + actionDataLayer + " : " + labelDataLayer);
          dataLayer.push({
            event: "event-to-ga4",
            event_name: `${nameDataLayer} ${eventVar}`,
            event_desc: `${deskDataLayer}`,
            event_type: `${typeDataLayer}`,
            event_loc: `${actionDataLayer}`,
            eventLabel: `${labelDataLayer}`,
          });
        } else {
          console.log(deskDataLayer + " " + typeDataLayer + " " + actionDataLayer);
          dataLayer.push({
            event: "event-to-ga4",
            event_name: `${nameDataLayer} ${eventVar}`,
            event_desc: `${deskDataLayer}`,
            event_type: `${typeDataLayer}`,
            event_loc: `${actionDataLayer}`,
          });
        }
      }

      let newStyle = /*html */ `
        <style>
            #edit-are-you-a-current-student- #edit-are-you-a-current-student{
                display: flex;
                flex-direction: column-reverse;
            }
            #edit-are-you-a-current-student- #edit-are-you-a-current-student > div{
                margin: 8px 0;
            }
            #edit-are-you-a-current-student- #edit-processed-text-02{
                margin: 0 0 8px;
            }
            #edit-are-you-a-current-student- h4.quiz-question{
                margin: 0;
                color: #3E78BA;
                font-size: 16px;
                font-weight: 700;
                line-height: 24px;
            }
            #edit-are-you-a-current-student- #edit-are-you-a-current-student--wrapper{
                padding: 0;
            }
            
            #edit-are-you-a-current-student- [for="edit-are-you-a-current-student-parent-of-student"]{
                background: rgba(235, 189, 69, 1);
                border: none;
                color: rgba(43, 62, 81, 1);
                line-height: 22px;
                height: 46px;
                max-width: 540px;
                margin: 0 auto;
            }
            #edit-are-you-a-current-student- [for="edit-are-you-a-current-student-current-student"]{
                background: rgba(62, 120, 186, 1);
                border: none;
                color: rgba(255, 255, 255, 1);
                line-height: 22px;
                height: 46px;
                max-width: 540px;
                margin: 0 auto;
            }
            .path-scholarship-eligibility-quiz .back-button-wrapper,
            .path-scholarship-eligibility-quiz .webform-progress,
            .quiz-title,
            #edit-are-you-a-current-student- .quiz-section{
                display: none;
            }
        </style>
        `;

      let htmlFirst = /*html */ `
            <div id="reviewsTxt">
                <div class="reviews_btn_wrapper" data-reviews>
                    <svg width="109" height="20" viewBox="0 0 109 20" fill="none" xmlns="htactp://www.w3.org/2000/svg">
                    <path d="M0 19.1283H19.9722V0.0078125H0V19.1283Z" fill="#2DAF6B" />
                    <path d="M17.0255 8.14277L5.69745 16.021L7.35043 11.1519L3.02344 8.14277H8.37182L10.0244 3.27344L11.6771 8.14277H17.0255ZM10.0249 13.0121L13.1186 12.3891L14.3512 16.021L10.0249 13.0121Z" fill="white" />
                    <path d="M22.2578 19.1283H42.23V0.0078125H22.2578V19.1283Z" fill="#2DAF6B" />
                    <path d="M22.2578 19.1283H32.2439V0.0078125H22.2578V19.1283Z" fill="#2DAF6B" />
                    <path d="M32.4833 12.9379L35.1361 12.389L36.3631 16.1034L32.2028 13.1308L27.8803 16.1034L29.558 11.2167L25.1659 8.19658H30.5946L32.2716 3.30957L33.9493 8.19658H39.3777L32.4833 12.9379Z" fill="white" />
                    <path d="M44.5139 19.1283H64.4861V0.0078125H44.5139V19.1283Z" fill="#2DAF6B" />
                    <path d="M44.5139 19.1283H54.5V0.0078125H44.5139V19.1283Z" fill="#2DAF6B" />
                    <path d="M61.5394 8.14277L50.2114 16.021L51.8643 11.1519L47.5374 8.14277H52.8857L54.5384 3.27344L56.191 8.14277L61.5394 8.14277ZM54.5388 13.0121L57.6325 12.3891L58.8651 16.021L54.5388 13.0121Z" fill="white" />
                    <path d="M66.7715 19.1283H86.7437V0.0078125H66.7715V19.1283Z" fill="#2DAF6B" />
                    <path d="M66.7715 19.1283H76.7576V0.0078125H66.7715V19.1283Z" fill="#2DAF6B" />
                    <path d="M83.7969 8.14277L72.4693 16.021L74.1219 11.1519L69.7949 8.14277H75.1433L76.7959 3.27344L78.4486 8.14277L83.7969 8.14277ZM76.7963 13.0121L79.89 12.3891L81.1226 16.021L76.7963 13.0121Z" fill="white" />
                    <path d="M89.0273 19.1283H109V0.0078125H89.0273V19.1283Z" fill="#2DAF6B" />
                    <path d="M89.0273 19.1283H99.0134V0.0078125H89.0273V19.1283Z" fill="#2DAF6B" />
                    <path d="M106.053 8.14277L94.7251 16.021L96.3778 11.1519L92.0508 8.14277H97.3992L99.0518 3.27344L100.704 8.14277H106.053ZM99.0522 13.0121L102.146 12.3891L103.379 16.021L99.0522 13.0121Z" fill="white" />
                    </svg>
                    <p>TrustScore <span class="accent_var">4.8</span></p>
                    <a target="_blank" href="https://www.trustpilot.com/review/grantme.ca?utm_medium=trustbox&amp;utm_source=Slider">(1,021 reviews)</a>
                </div>
                <img src="https://conversionratestore.github.io/projects/knineti/img/isolated_tablet_laptop_and_smartphone_composition.png" alt="isolated tablet laptop_and smartphone composition" />
                <h2>Win Scholarships, Graduate Debt-Free</h2>
                <p>Receive an estimated value and number of scholarships you or your child is eligible for with this <b>60 second quiz</b> approved by our experts.</p>
            </div>
        `;

      let htmlSecond = /*html */ `
        <div id="GrantMeTxt">
            <h3>What you’ll get with GrantMe:</h3>
            <ul>
                <li>Guaranteed funding for your post-secondary education</li>
                <li>An assigned consultant to work with you until your goals are achieved</li>
                <li>Online service available 24/7</li>
            </ul>
        </div>`;

      document.head.insertAdjacentHTML("beforeend", newStyle);
      document.querySelector("#edit-are-you-a-current-student- h4.quiz-question").insertAdjacentHTML("beforebegin", htmlFirst);
      document.querySelector("#edit-processed-text-15").insertAdjacentHTML("beforebegin", htmlSecond);

      document.querySelectorAll("#edit-are-you-a-current-student- label").forEach((el) => {
        el.addEventListener("click", () => {
          setTimeout(() => {
            document.querySelector(".quiz-title").style.display = "block";
            document.querySelector(".path-scholarship-eligibility-quiz .webform-progress").style.display = "table";
            document.querySelector(".path-scholarship-eligibility-quiz .back-button-wrapper").style.display = "block";
          }, 500);
        });
      });

      document.querySelector(".path-scholarship-eligibility-quiz .back-button-wrapper .back-link").addEventListener("click", () => {
        if (document.querySelector("#edit-are-you-a-current-student-").classList.contains("webform-card--active")) {
          document.querySelector(".quiz-title").style.display = "none";
          document.querySelector(".path-scholarship-eligibility-quiz .webform-progress").style.display = "none";
          document.querySelector(".path-scholarship-eligibility-quiz .back-button-wrapper").style.display = "none";
        }
      });
    }
  }, 100);
}
