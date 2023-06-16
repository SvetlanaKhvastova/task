let startP = setInterval(() => {
  if (document) {
    clearInterval(startP);

    let styleVar = /*html */ `
    <style>
        .payment_inform_box li > div#limitedTimeOffer{
            border: none;
            border-radius: unset;
            padding: 0 0 20px;
        }
        #limitedTimeOffer > h2.new_title{
            text-align: left;
            font-weight: 700;
            font-size: 16px;
            line-height: 26px;
            color: #734F22;
            margin: 0 !important;
        }
        #limitedTimeOffer > p.new_txt{
            text-align: left;
            font-weight: 400;
            font-size: 14px;
            line-height: 26px;
            color: #734F22 !important;
            margin: 0 !important;
            text-transform: initial;
        }
        .personalized_coaching_wrap{
            background: #FFFFFF;
            border: 1px solid #DDE8F1;
            border-radius: 10px;
            margin-top: 12px;
        }
        .checkbox_block{
            border-bottom: 1px solid #DDE8F1;
            background: #DDE8F1;
            border-radius: 10px 10px 0 0;
            padding: 13px 16px;
        }
        .full_info_block{
            padding: 12px 18px 16px;
        }
        .full_info_block > ul{
            display: none;
        }
        .full_info_block svg{
            cursor: pointer;
        }
        .mobile_var{
            display: none;
        }
    </style>
    `;

    let html = /*html */ `
    <div id="limitedTimeOffer">
      <h2 class="new_title">Limited Time Offer:<br/> add Personal Coaching for just $90 more (usually $398)!</h2>
      <p class="new_txt">Check the box below to take advantage of this offer.</p>
      <div class="personalized_coaching_wrap">
        <div class="checkbox_block">
          <input class="custom_checkbox" id="" type="checkbox" name="" value="" />
          <label for="" tabindex="0">
            <span class=""> </span>
            <p>10 weeks of <b>personalized coaching & support</b></p>
            <p>$398</p>
            <p>$90.00</p>
          </label>
        </div>
        <div class="full_info_block">
            <p>
              View less info
              <svg class="mobile_var" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L5 2L1 6" stroke="#734F22" stroke-width="2" stroke-linecap="round" />
              </svg>
              <svg class="desk_var" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8 6C10.8 8.65097 8.65097 10.8 6 10.8C3.34903 10.8 1.2 8.65097 1.2 6C1.2 3.34903 3.34903 1.2 6 1.2C8.65097 1.2 10.8 3.34903 10.8 6ZM12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM5.39961 3.6C5.39961 3.26863 5.66824 3 5.99961 3C6.33098 3 6.59961 3.26863 6.59961 3.6C6.59961 3.93137 6.33098 4.2 5.99961 4.2C5.66824 4.2 5.39961 3.93137 5.39961 3.6ZM5.39961 5.4C5.39961 5.06863 5.66824 4.8 5.99961 4.8C6.33098 4.8 6.59961 5.06863 6.59961 5.4V8.4C6.59961 8.73137 6.33098 9 5.99961 9C5.66824 9 5.39961 8.73137 5.39961 8.4V5.4Z" fill="#734F22"/>
              </svg>
            </p>
            <ul>
              <li>Live weekly Q&A group calls with personal coaching (10-week access)</li>
              <li>Email your questions - answered in separate downloadable weekly call (10-week access)</li>
            </ul>
        </div>
      </div>
    </div>
      `;

    document.head.insertAdjacentHTML("beforeend", styleVar);
    document.querySelector(".payment_order").insertAdjacentHTML("afterbegin", html);
  }
}, 100);
