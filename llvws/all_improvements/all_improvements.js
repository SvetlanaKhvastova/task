// https://vegasyacht.com/
if (window.location.pathname === "/") {
  let vegasYachtStart = setInterval(() => {
    if (document.querySelector(".fl-node-5fbe963db2e54")) {
      clearInterval(vegasYachtStart);

      let vegasYachtStyle = /*html */ `
        <style>
          .how_to_find_us_block{
            padding: 94px 0;
          }
          .how_to_find_us_block h4.how_to_find_us_subtitle{
            color: #CFBE88;
            text-align: center;
            font-family: "Pinyon Script", cursive;
            font-size: 30px;
            font-weight: 400;
            line-height: 36px;
            margin: 0 0 8px;
          }
          .how_to_find_us_block h2.how_to_find_us_title{
            color: var(--blue, #28364B);
            text-align: center;
            font-family: 'Playfair Display';
            font-size: 48px;
            font-weight: 400;
            line-height: 56px;
            margin: 0 0 74px;
            position: relative;
          }
          .how_to_find_us_block h2.how_to_find_us_title::after{
            content: "";
            background-image: url(https://vegasyacht.com/wp-content/uploads/2020/12/separator.png);
            position: absolute;
            width: 72px;
            height: 6px;
            bottom: -30px;
            left: 50%;
            transform: translateX(-50%);
          }
            .how_to_find_us_contacts{
              width: 100%;
              max-width: 960px;
              margin: 0 auto;
              display: flex;
              align-items: flex-start;
              justify-content: space-between;
              gap: 71px;
            }
            .how_to_find_us_contacts .how_to_find_us_maps{
              width: 50%;
            }
            .how_to_find_us_contacts .how_to_find_us_info{
              width: 47%;
              margin-top: 20px;
            }
            .how_to_find_us_descr{
              color: #4B4F58;
              font-size: 16px;
              font-weight: 400;
              line-height: 24px;
              margin: 0 0 32px;
            }
            .how_to_find_us_contacts #footer-social li a{
              color: inherit;
            }
            .how_to_find_us_contacts #footer-social li a:hover{
              color: #cebd88;
            }
            .how_to_find_accardion{
              list-style: none;
              max-width: 960px;
              margin: 56px auto 0;
            }
            .how_to_find_accardion_block{
              border: 1px solid #E7E6DE;
            }
            .how_to_find_accardion_link{
              display: flex;
              padding: 16px;
              align-items: center;
              justify-content: space-between;
            }
            .how_to_find_accardion_link h3{
              color: #28364B;
              font-size: 24px;
              font-weight: 400;
              line-height: 32px;
              text-transform: capitalize;
              margin: 0;
            }
            .how_to_find_accardion_lists > div{
              padding: 0 16px 24px;
            }
            .how_to_find_accardion_lists p{
              position: relative;
              color: #4B4F58;
              font-size: 14px;
              font-weight: 400;
              line-height: 20px;
              margin: 0;
            }
            .how_to_find_accardion_lists p::before{
              position: absolute;
              content: "";
              background: #28364B;
              width: 6px;
              height: 6px;
              border-radius: 50%;
            }
            .how_to_find_accardion_lists p + p{
              margin-top: 6px;
            }
        </style>
        `;

      let howToFindUsBlock = /*html */ `
      <div class="how_to_find_us_block">
        <h4 class="how_to_find_us_subtitle">Our location</h4>
        <h2 class="how_to_find_us_title">How to find us</h2>
        <div class="how_to_find_us_contacts">
          <div class="how_to_find_us_info">
            <p class="how_to_find_us_descr">You can find us just 20 miles away from the renowned Las Vegas Strip. Here, the desert, lights, and gambling transform into a tranquil, picturesque getaway with Lake Mead National Park (Hoover Dam) and Valley of Fire State Park right around the corner!</p>
            <ul id="footer-social" class="cp">
              <li><i class="fas fa-map-marker-alt"></i> 20 Costa di Lago, Suite 130, Henderson, NV 89011, US</li>
              <li><a href="tel:+39702-600-9860"><i class="fas fa-phone-alt"></i> 702-600-9860</a></li>
              <li><a href="mailto:lauren@llvws.com"><i class="fas fa-envelope"></i> lauren@llvws.com</a></li>
              <li style="padding: 0; font-style: italic">*Texting will get the fastest response</li>
            </ul>
          </div>
          <div class="how_to_find_us_maps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.604617837276!2d-114.931480984194!3d36.10312508009815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8d79321801de5%3A0xd989c2619f8db520!2s20%20Costa%20Di%20Lago%20%23130%2C%20Henderson%2C%20NV%2089011%2C%20USA!5e0!3m2!1sen!2sph!4v1607349582906!5m2!1sen!2sph" width="100%" height="405" frameborder="0" style="border: 0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
        </div>
        <ul class="how_to_find_accardion list_var"></ul>
        <div>

        </div>
      </div>
      `;

      let arrR = {
        1: [
          `AFTER YOU BOOK & ARRIVAL`,
          `<p>Once you complete your booking online, you will receive a confirmation email with a map showing where to park when you arrive, and digital links to both the liability waiver, and the required boaters' contract. Anyone participating in activities must have a liability release completed prior to arrival.</p>
          <p>Upon arriving at Lake Las Vegas, you will be excited that there are no parking fees! Parking can be found in the Monte Lago parking garage located at 8 Strada Di Villagio, Henderson NV, 89011.</p>
          <p>After parking, you can walk through the Village and stop at any restaurants on-site. When you are finished strolling, head toward the marina, and you will find our office located behind seasons grocery.</p>`,
        ],
        2: [
          `CHECKING IN`,
          `<p>We suggest arriving 10-15 minutes prior to your scheduled boat reservation time.</p>
          <p>Please be sure everyone has a waiver completed prior to check-in, and also have your confirmation email ready to show the office receptionist.</p>
          <p>Once checked in, each guest will receive a wristband.</p>
          <p>Self-service lockers are available at our facility on the dock. (CARD PAYMENT ONLY)</p>
          <p>There will be a security deposit hold for the amount paid, but it will not be charged if the rules outlined in the Driver Consent Form are violated.</p>
          <p>A credit card authorization hold will be needed at the time of check-in on the day of your rental. Please make sure you have the Credit Card / debit card you booked with present at time of check-in. The credit card hold will be for 7 days.</p>
          `,
        ],
        3: [
          `REQUIREMENTS & REGULATIONS`,
          `<p>You must be at least 21 years of age to operate an electric boat rental and hold a valid ID and credit card.</p>
          <p>Children over the age of 3, are to be counted as a guest.</p>
          <p>No swimming from the boat at any time.</p>
          <p>You may not dock or beach the boat.</p>
          <p>Coolers and ice checks are prohibited at Lake Las Vegas, however food and drink can be brought on the electric boats.</p>
          <p>All rules and regulations can be found in our boaters contract, here: https://form.jotform.com/230950539241050</p>`,
        ],
        4: [`CANCELLATION & REFUNDS`, `<p>Our cancellation policy allows for free cancellations up to 24 hours before the event. For cancellations, please send us an email or submit your request via chat or SMS. Refunds will be processed according to our terms and conditions.</p>`],
      };

      function setList(title, text, count) {
        return `
            <li class="how_to_find_accardion_block" data-visib=${count}>
                <div class="how_to_find_accardion_link">
                    <h3>${title}</h3>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M11.432 7.57172L6.03567 2.17714C5.79888 1.94095 5.41524 1.94095 5.17785 2.17714C4.94107 2.41334 4.94107 2.79697 5.17785 3.03316L10.1462 7.9997L5.17845 12.9662C4.94166 13.2024 4.94166 13.5861 5.17845 13.8229C5.41524 14.059 5.79948 14.059 6.03627 13.8229L11.4326 8.42833C11.6658 8.19458 11.6658 7.80492 11.432 7.57172Z" fill="#CFBE88"/>
                    </svg></span>
                </div>
                <div class="how_to_find_accardion_lists">
                    <div>
                        ${text}
                    </div>
                </div>
            </li>
          `;
      }

      document.head.insertAdjacentHTML("beforeend", vegasYachtStyle);

      moveHtml();
      function moveHtml() {
        if (!document.querySelector(".fl-node-5fbfca8d89fb3 + .fl-node-5fc11f1bca086")) {
          document.querySelector(".fl-node-5fbfca8d89fb3")?.after(document.querySelector(".fl-node-5fc11f1bca086"));
        }
        if (!document.querySelector(".how_to_find_us_block")) {
          document.querySelector("#what-you-get")?.insertAdjacentHTML("afterend", howToFindUsBlock);
        }
        if (document.querySelector(".how_to_find_us_block") && !document.querySelector(".how_to_find_us_block + .fl-node-5fc11d9865a4f")) {
          document.querySelector(".how_to_find_us_block")?.after(document.querySelector(".fl-node-5fc11d9865a4f"));
        }
        if (document.querySelector(".how_to_find_us_block + .fl-node-5fc11d9865a4f") && !document.querySelector(".fl-node-5fc11d9865a4f + .fl-node-5fc350efb5bc5")) {
          document.querySelector(".fl-node-5fc11d9865a4f")?.after(document.querySelector(".fl-node-5fc350efb5bc5"));
        }

        if (document.querySelector(".how_to_find_us_block")) {
          for (let key in arrR) {
            document.querySelector(".how_to_find_accardion").insertAdjacentHTML("beforeend", setList(arrR[key][0], arrR[key][1], key));
          }
        }

        // accardionToggle
        if ($(".how_to_find_accardion_link")) {
          $(".how_to_find_accardion_link").click(function (e) {
            $(this).toggleClass("active_block");
            $(this).closest("li").toggleClass("active_block");
            $(this).next(".how_to_find_accardion_lists").slideToggle();
            if ($(".how_to_find_accardion_link").not(this)) {
              $(".how_to_find_accardion_link").not(this).next(".how_to_find_accardion_lists").css("display", "none");
              $(".how_to_find_accardion_link").not(this).removeClass("active_block");
              $(".how_to_find_accardion_link").not(this).closest("li").removeClass("active_block");
            }
            let w = e.currentTarget.querySelector("h3").textContent.split(" ");
            // if (e.currentTarget.classList.contains("active_block")) {
            //   pushDataLayer("exp_new_content_what_type_open", `Open - ${w[0]} ${w[1]} ${w[2]} ${w[3]} ${w[4]}`, "Text area", "What type of college admissions assistance does your child require?");
            // } else {
            //   pushDataLayer("exp_new_content_what_type_close", `Close - ${w[0]} ${w[1]} ${w[2]} ${w[3]} ${w[4]}`, "Text area", "What type of college admissions assistance does your child require?");
            // }

            const headerOffset = 10;
            const elementPosition = this.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          });
        }
      }
    }
  }, 100);
}
