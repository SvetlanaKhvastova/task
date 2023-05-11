let start = setInterval(() => {
  if (document.querySelector(".main_section")) {
    clearInterval(start);

    let newStyle = /*html */ `
    <style>
      .counter_wrapper,
      .main_section:after,
      .main_section:before,
      .tuition_wrapper p:nth-child(4),
      .tuition_section a.btn {
        display: none;
      }
      .book_a_call_btn {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 317px;
        height: 62px;
        width: 100%;
        background: #ebbd45;
        border-radius: 6px;
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
        color: #2b3e51 !important;
        margin: 0 auto;
        transition: all 0.25s ease;
      }
      .book_a_call_btn:hover,
      .elementor-button:hover {
        color: #3e78ba !important;
      }
      .new_txt_tuition {
        max-width: 993px;
        margin: 0 auto 32px;
      }
      .main_section {
        height: unset;
        min-height: unset;
        padding: 60px 0 0;
      }
      .main_section p {
        margin: 0;
        line-height: 25px;
      }
      .main_section h4 {
        margin: 0 0 42px;
        font-size: 18px;
        line-height: 25px;
        font-weight: 400;
      }
      .main_section .main_slider_hor {
        margin-bottom: 16px;
      }
      .main_section .btn_yellow {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 400px;
        width: 100%;
        height: 62px;
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
        padding: 0;
        margin: 0 auto;
      }
      .counter_section {
        padding: 30px 0 42px;
      }
      .reviews_btn_wrapper {
        width: max-content;
        display: flex;
        margin: 0 auto 16px;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
      .reviews_btn_wrapper > p:nth-child(2) {
        margin: 0 8px 0 12px;
      }
      .reviews_btn_wrapper > p:nth-child(2) span {
        color: #2daf6b;
      }
      #newCounter .additional_txt {
        position: relative;
        font-size: 18px;
        line-height: 25px;
        text-decoration-line: underline;
        color: #2b3e51;
        margin: 0 auto;
        max-width: max-content;
      }
      #newCounter .additional_txt::before {
        position: absolute;
        content: "";
        width: 85px;
        height: 90px;
        background: url(https://conversionratestore.github.io/projects/grantme/img/additional_txt_arr.svg) no-repeat center center;
        top: 5px;
        left: -92px;
        z-index: 5;
      }
      #newCounter ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 1000px;
        width: 100%;
        list-style: none;
        padding: 0;
        margin: 30px auto 0;
        border: 1px solid #e9f3fa;
        border-radius: 12px;
      }
      #newCounter ul > li:nth-child(1) {
        width: 56%;
        background: #e9f3fa;
        padding: 30px 38px 30px 30px;
        border: 1px solid #e9f3fa;
        border-radius: 12px;
        text-align: left !important;
        display: flex;
        flex-direction: column;
      }
      #newCounter ul > li:nth-child(2) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 44%;
        padding: 52px 29px 49px 38px;
      }
      #newCounter .img_wrapper {
        width: 100%;
        max-width: 84px;
      }
      #newCounter .schedule_title {
        margin: 24px 0 16px;
      }
      #newCounter.schedule_txt {
        font-size: 16px;
        line-height: 24px;
        color: #2b3e51;
        margin: 0 0 24px;
      }
      .schedule_a_free_link {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 52px;
        max-width: 362px;
        width: 100%;
        border: 2px solid #3e78ba;
        border-radius: 6px;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: #3e78ba;
      }
      .schedule_a_free_link > svg {
        margin-left: 12px;
      }
      #newCounter .counter_block .h1 {
        font-size: 76px;
      }
      #newCounter .counter_block .counter_text {
        margin: 0;
      }
      .sticky_header_desk {
        width: 100%;
        background: #3e5062;
        padding: 11px 0;
        opacity: 0;
        transition: top 0.7s;
        height: 0;
        padding: 0;
        overflow: hidden;
      }
      .sticky_header_desk.is_fixed {
        height: 100%;
        padding: 11px 0;
        opacity: 1;
        position: sticky;
        top: 0;
        left: 0;
        z-index: 111111111;
      }
      .sticky_header_desk .container {
        margin: 0 auto;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 25px;
        max-width: 1200px;
        width: 90%;
      }
      .logo_wrap {
        max-height: 42px;
        max-width: 134px;
        width: 100%;
        height: 100%;
        margin: 0 auto 0 0;
      }
      .sticky_header_desk .reviews_btn_wrapper {
        justify-content: space-between;
        margin: 0;
      }
      .sticky_header_desk .reviews_btn_wrapper p {
        color: #ffffff;
      }
      .sticky_header_desk .reviews_btn_wrapper p:last-child {
        margin: 0;
      }
      .sticky_header_desk .book_a_call_btn {
        height: 48px;
        max-width: 318px;
        font-size: 18px;
        line-height: 24px;
        margin: 0;
      }
      .tel_link {
        position: relative;
        padding: 0 24px 0 42px;
        border-right: 1px solid #cccccc;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #ffffff;
        text-decoration: none;
        text-align: center;
        transition: all 0.3s;
      }
      .tel_link::before {
        position: absolute;
        content: "";
        width: 30px;
        height: 30px;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        background: url(https://conversionratestore.github.io/projects/grantme/img/burger_open_call.svg) no-repeat center center;
      }
      @media (min-width: 1024px) {
        .elementor-24572 .elementor-element.elementor-element-d790b6a {
          padding: 10px 0;
        }
        .elementor-24572 .elementor-element.elementor-element-d790b6a > .elementor-container {
          max-width: 1200px;
          width: 90%;
          align-items: center;
          justify-content: space-between;
        }
        .elementor-24572 .elementor-element.elementor-element-d3b93f4 {
          flex: 1 0 134px;
          width: 100%;
          max-width: 134px;
          height: 40px;
        }
        .elementor-24572 .elementor-element.elementor-element-2c332a5 img {
          width: 100%;
          height: 100%;
          max-width: unset;
        }
        .elementor-24572 .elementor-element.elementor-element-1e45e76.elementor-column.elementor-element[data-element_type="column"] > .elementor-widget-wrap.elementor-element-populated {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .elementor-24572 .elementor-element.elementor-element-1e45e76.elementor-column.elementor-element[data-element_type="column"] > .elementor-widget-wrap.elementor-element-populated .tel_link {
          color: #2b3e51;
          font-weight: 700;
          font-size: 16px;
          line-height: 18px;
        }
        .elementor-24572 .elementor-element.elementor-element-1e45e76 {
          min-width: 465px;
        }
        .elementor-24572 .elementor-element.elementor-element-4eb5bf6 {
          width: 45%;
        }
        .hfe-nav-menu__layout-horizontal .hfe-nav-menu {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
        }
        .hfe-nav-menu__layout-horizontal .hfe-nav-menu > li + li {
          margin-left: 30px;
        }
        .elementor-24572 .elementor-element.elementor-element-e3c03f0 .menu-item a.hfe-menu-item {
          padding: 0;
        }
        .elementor-24572 .elementor-element.elementor-element-e3c03f0 .menu-item a.hfe-menu-item:hover,
        .elementor-widget-heading .elementor-heading-title[class*="elementor-size-"] > a:hover,
        .sub-menu .menu-item:hover,
        .sub-menu .menu-item:hover a,
        .elementor-24572 .elementor-element.elementor-element-1e45e76.elementor-column.elementor-element[data-element_type="column"] > .elementor-widget-wrap.elementor-element-populated .tel_link:hover {
          background: unset !important;
          color: #ebbd45 !important;
          text-decoration: none !important;
        }
        .elementor-24572 .elementor-element.elementor-element-e3c03f0 nav.hfe-nav-menu__layout-horizontal:not(.hfe-dropdown) ul.sub-menu {
          margin-top: 15px;
        }
      }
      @media (max-width: 1025px) {
        .tel_link {
          width: 30px;
          height: 30px;
          padding: 0;
          border: none;
        }
        .other_btn_wrapper {
          padding: 24px;
          margin-top: 40px;
        }
        .other_btn_wrapper .log_in_link {
          font-weight: 700;
          font-size: 20px;
          line-height: 20px;
          color: #2b3e51;
          text-align: center;
          display: block;
          width: max-content;
          margin: 0 auto;
        }
        .other_btn_wrapper .book_a_call_btn {
          width: 100%;
          max-width: 100%;
          margin: 30px 0 14px;
        }
        .other_btn_wrapper .schedule_a_free_link {
          height: 62px;
          max-width: 100%;
        }
        .other_btn_wrapper .schedule_a_free_link > svg {
          margin-top: 3px;
        }
        .sticky_txt {
          background: #ebbd45;
          margin: 0;
          padding: 11px;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 18px;
          line-height: 24px;
          color: #2b3e51 !important;
          text-decoration: unset !important;
        }
        .sticky_txt > svg {
          margin-left: 10px;
        }
        .logo_wrap,
        .sticky_txt {
          display: none;
          margin: 0 auto;
        }
        .sticky_header#masthead .logo_wrap,
        .sticky_header#masthead .sticky_txt {
          display: flex;
        }
        .sticky_header#masthead {
          position: fixed;
          top: 0;
          width: 100%;
          background: #3e5062 !important;
          border: none;
        }
        .sticky_header#masthead .elementor-24572 .elementor-element.elementor-element-d3b93f4 {
          display: none;
        }
        .sticky_header#masthead .tel_link::before {
          background: url(https://conversionratestore.github.io/projects/grantme/img/call.svg) no-repeat center center;
        }
        .sticky_header#masthead .elementor-24572 .elementor-element.elementor-element-e3c03f0 .hfe-nav-menu-icon {
          color: #ffffff;
        }
        .menu_open#masthead {
          height: 100vh;
          position: fixed;
          overflow-y: scroll;
          top: 0;
          left: 0;
          width: 100%;
          background: #ffffff !important;
          z-index: 100;
        }
        .menu_open#masthead .elementor-24572 .elementor-element.elementor-element-e3c03f0 .hfe-nav-menu-icon {
          color: initial;
        }
        .menu_open#masthead .elementor-24572 .elementor-element.elementor-element-d3b93f4 {
          display: block;
        }
        .menu_open#masthead .logo_wrap {
          display: none;
        }
        .menu_open#masthead .tel_link::before {
          background: url(https://conversionratestore.github.io/projects/grantme/img/burger_open_call.svg) no-repeat center center;
        }
        .menu_open#masthead .elementor-24572 .elementor-element.elementor-element-e3c03f0 .hfe-dropdown {
          padding: 36px 0 0;
          box-shadow: unset;
          border-radius: unset !important;
          border-top: 1px solid #cccccc;
          flex-direction: column;
        }
        .hfe-nav-menu #menu-item-27581 {
          border: none !important;
        }
        .menu_open#masthead .hfe-nav-menu__layout-horizontal li.menu-item a {
          text-align: left !important;
          padding: 9px 24px !important;
        }
        .elementor-24572 .elementor-element.elementor-element-e3c03f0 .hfe-nav-menu-icon {
          padding: 0;
        }
        .elementor-24572 .elementor-element.elementor-element-d790b6a {
          padding: 10px 24px;
        }
        .elementor-24572 .elementor-element.elementor-element-4eb5bf6 {
          width: 40px;
        }
        .elementor-24572 .elementor-element.elementor-element-d3b93f4 {
          width: 100%;
          max-width: 134px;
          height: 40px;
        }
        .elementor-24572 .elementor-element.elementor-element-2c332a5 img {
          width: 100%;
          max-width: 100%;
          height: 100%;
        }
        .elementor-section .elementor-container {
          flex-direction: row-reverse;
          justify-content: space-between;
          align-items: center;
        }
        .elementor-24572 .elementor-element.elementor-element-e3c03f0 .hfe-nav-menu__toggle {
          margin: 0;
        }
        .counter_section {
          padding: 16px 0 0;
        }
        #newCounter .counter_block .counter_text {
          width: 100%;
        }
        .main_section {
          padding: 24px 0 0;
        }
        .main_section h1.display {
          font-size: 36px;
          line-height: 44px;
          max-width: 300px;
          margin: 0 auto;
        }
        .main_slider_hor .h1 {
          font-size: 44px;
          line-height: 44px;
        }
        .main_section .slick-vertical .slick-slide {
          margin: 0 !important;
        }
        .main_section p {
          font-size: 18px;
        }
        .main_section h4 {
          margin-bottom: 24px;
        }
        .reviews_btn_wrapper > p:nth-child(2) {
          margin: 0 5px 0 8px;
          font-size: 14px;
          line-height: 21px;
        }
        .reviews_btn_wrapper > p:nth-child(3) {
          font-weight: 700;
          font-size: 14px;
          line-height: 21px;
          text-decoration-line: underline;
        }
        #newCounter .additional_txt {
          font-weight: 500;
          font-size: 16px;
          line-height: 22px;
        }
        #newCounter .additional_txt::before {
          width: 55px;
          height: 71px;
          top: 4px;
          left: -61px;
          background-size: contain;
        }
        #newCounter ul {
          margin: 24px auto 0;
          border: none;
          border-radius: unset;
        }
        .schedule_a_free_link {
          font-size: 16px;
          line-height: 24px;
          padding: 2px;
        }
        .schedule_a_free_link > svg {
          margin-left: 5px;
          width: 14px;
          height: 11px;
        }
        #newCounter .img_wrapper {
          max-width: 74px;
          display: inline-block;
          margin: 0 12px 0 0;
        }
        #newCounter .schedule_title {
          display: inline-block;
          margin: 0 !important;
          font-weight: 700;
          font-size: 18px;
          line-height: 24px;
          max-width: 210px;
        }
        #newCounter .schedule_txt {
          margin: 8px 0 16px;
          font-size: 15px;
        }
      }
      @media (max-width: 768px) {
        #newCounter ul > li:nth-child(1) {
          width: 100%;
          padding: 20px 18px;
        }
        #newCounter ul > li:nth-child(2) {
          width: 100%;
          padding: 50px 18px 20px;
          gap: 70px;
        }
      }
    </style>
    `;

    let reviewsHtml = /*html */ `
    <div class="reviews_btn_wrapper" data-reviews data-count="1">
      <svg width="109" height="20" viewBox="0 0 109 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <p>TrustScore
        <span class="accent_var"><svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.002 4.9958L2.67436 12.874L4.32699 8.00498L0 4.9958H5.34837L7.001 0.126465L8.65363 4.9958H14.002ZM7.00142 9.86513L10.0951 9.24213L11.3277 12.874L7.00142 9.86513Z" fill="#2DAF6B" /></svg>4.8</span>
      </p>
      <p>(920+ reviews)</p>
    </div>`;

    let newCounter = /*html */ `
    <div class="new_counter" id="newCounter">
      <p class="additional_txt">Not sure if it is right for you?</p>
      <ul>
        <li class="schedule_a_free_block">
          <div class="img_wrapper">
            <img src="https://conversionratestore.github.io/projects/grantme/img/our_consultants.png" alt="Our consultants" />
          </div>
          <h2 class="schedule_title">Get in touch with a program advisor today</h2>
          <p class="schedule_txt">Discuss your (your child) background and interests with one of our expert program advisors—they’ll help you figure out if a GrantMe education program is right for you.</p>
          <a class="schedule_a_free_link" href="" target="_blank" rel="noopener noreferrer"
            >Schedule a free consultation call now
            <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.12045 8.76958C9.12045 9.05633 9.01096 9.34304 8.79244 9.56167L1.91274 16.4413C1.4751 16.8789 0.765551 16.8789 0.328093 16.4413C-0.109364 16.0038 -0.109365 15.2944 0.328093 14.8568L6.41564 8.76958L0.328305 2.68235C-0.109152 2.24471 -0.109153 1.53538 0.328305 1.09795C0.765763 0.660107 1.47531 0.660107 1.91295 1.09795L8.79266 7.97748C9.01121 8.19621 9.12045 8.48293 9.12045 8.76958Z" fill="#3E78BA" />
            </svg>
          </a>
        </li>
        <li class="counter_block">
          <div>
            <h3 class="h1 colored"><span>20,000+</span></h3>
            <p class="counter_text">Students Supported All Time</p>
          </div>
          <div>
            <h3 class="h1 colored"><span>43,000</span></h3>
            <p class="counter_text">Applications Edited Last Year</p>
          </div>
        </li>
      </ul>
    </div>`;

    let newTxtTuitionSection = /*html */ `
      <p class="new_txt_tuition">Unlock university admission and funding opportunities available to students. Click the button below to book a call now!</p>
      <a class="book_a_call_btn new_btn_tuition" href="" target="_blank" rel="noopener noreferrer">Book a call</a>
    `;

    let otherBtnWrapper = /*html */ `
    <div class="other_btn_wrapper">
      <a class="log_in_link" href="https://app.grantme.com/?__hstc=171153535.ea99a1c023c26b49f6cec8b875a1d24c.1677748523116.1683211802760.1683277102530.17&amp;__hssc=171153535.2.1683277102530&amp;__hsfp=3100531308">Log In</a>
      <a class="book_a_call_btn" href="https://app.grantme.com/grantme-program-assessment?__hstc=171153535.ea99a1c023c26b49f6cec8b875a1d24c.1677748523116.1683211802760.1683277102530.17&__hssc=171153535.1.1683277102530&__hsfp=3100531308">Take Assessment</a>
      <a class="schedule_a_free_link" href="/" target="_blank" rel="noopener noreferrer"
        >Schedule a free consultation call now
        <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.12045 8.76958C9.12045 9.05633 9.01096 9.34304 8.79244 9.56167L1.91274 16.4413C1.4751 16.8789 0.765551 16.8789 0.328093 16.4413C-0.109364 16.0038 -0.109365 15.2944 0.328093 14.8568L6.41564 8.76958L0.328305 2.68235C-0.109152 2.24471 -0.109153 1.53538 0.328305 1.09795C0.765763 0.660107 1.47531 0.660107 1.91295 1.09795L8.79266 7.97748C9.01121 8.19621 9.12045 8.48293 9.12045 8.76958Z" fill="#3E78BA" />
        </svg>
      </a>
    </div>`;

    let stickyHeader = /*html */ `
    <div class="sticky_header_desk">
      <div class="container">
        <a href="#" class="logo_wrap">
          <img src="https://conversionratestore.github.io/projects/grantme/img/sticky_grantme_logo_new.png" alt="logo" />
        </a>
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
          <p>(920+ reviews)</p>
        </div>
        <a class="book_a_call_btn" href="/" target="_blank">Book a Free Call</a>
      </div>
    </div>
    `;

    document.head.insertAdjacentHTML("beforeend", newStyle);
    document.querySelector(".main_section .btn_yellow")?.insertAdjacentHTML("beforebegin", reviewsHtml);
    document.querySelector(".counter_section .counter_wrapper.flex")?.insertAdjacentHTML("beforebegin", newCounter);
    document.querySelector(".tuition_section a.btn")?.insertAdjacentHTML("beforebegin", newTxtTuitionSection);

    // update header
    if (innerWidth <= 1025) {
      document.querySelector(".elementor-24572 .elementor-element.elementor-element-d3b93f4")?.insertAdjacentHTML(
        "beforebegin",
        `</a><a class="tel_link" href="tel:+18004934084"></a>
        <a href="/" class="logo_wrap"><img src="https://conversionratestore.github.io/projects/grantme/img/sticky_grantme_logo_new.png" alt="logo" />
        `
      );
      document.querySelector("#menu-1-e3c03f0").insertAdjacentHTML("afterend", otherBtnWrapper);
      document.querySelector(".elementor-24572 .elementor-element.elementor-element-d790b6a").insertAdjacentHTML(
        "afterend",
        `<a class="sticky_txt" href="/" target="_blank"
          >Schedule a free consultation call
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="18" width="18" height="18" rx="9" transform="rotate(-90 0 18)" fill="#2B3E51" />
            <g clip-path="url(#clip0_2_490)">
              <path d="M11.8035 9.00002C11.8035 9.1434 11.7442 9.28676 11.6259 9.39607L7.89935 12.8359C7.66229 13.0547 7.27795 13.0547 7.041 12.8359C6.80404 12.6172 6.80404 12.2625 7.041 12.0436L10.3384 9.00002L7.04111 5.95641C6.80416 5.73759 6.80416 5.38292 7.04111 5.16421C7.27807 4.94529 7.66241 4.94529 7.89946 5.16421L11.626 8.60398C11.7444 8.71334 11.8035 8.8567 11.8035 9.00002Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_2_490">
                <rect width="8" height="8.66667" fill="white" transform="translate(5 13) rotate(-90)" />
              </clipPath>
            </defs></svg
        ></a>`
      );
    } else {
      document.querySelector(".elementor-24572 .elementor-element.elementor-element-1e45e76.elementor-column.elementor-element[data-element_type=column]>.elementor-widget-wrap.elementor-element-populated").insertAdjacentHTML("afterbegin", `<a class="tel_link" href="tel:+18004934084">(800) 493-4084</a>`);
    }

    // sticky header
    if (window.innerWidth <= 1025) {
      if (document.querySelector("#masthead")) {
        const element = document.querySelector("#masthead");
        const elemClose = document.querySelector(".schedule_a_free_block");

        function visible(target) {
          if (target.getBoundingClientRect().bottom < 0) {
            element.classList.add("sticky_header");
          } else {
            element.classList.remove("sticky_header");
          }
        }

        window.addEventListener("scroll", function () {
          visible(elemClose);
        });

        visible(elemClose);
      }
    } else {
      document.querySelector("#page").insertAdjacentHTML("afterbegin", stickyHeader);
      if (document.querySelector(".sticky_header_desk")) {
        const element = document.querySelector(".sticky_header_desk");
        const elemClose = document.querySelector(".schedule_a_free_block");

        function visible(target) {
          if (document.querySelector(".reviews_btn_wrapper")?.getBoundingClientRect().top < 0) {
            element.style.top = "-80px";
          } else {
            element.style.top = "0px";
          }

          if (target.getBoundingClientRect().bottom < 0) {
            element.classList.add("is_fixed");
            element.style.top = "0px";
          } else {
            if (element.classList.contains("is_fixed")) {
              element.classList.remove("is_fixed");
              element.style.top = "0px";
            }
          }
        }
        window.addEventListener("scroll", function () {
          visible(elemClose);
        });
        visible(elemClose);
      }
    }

    // click on btn for reviews
    document.querySelectorAll("[data-reviews]")?.forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(".testimonials_video ").scrollIntoView({ block: "start", behavior: "smooth" });
      });
    });

    // observer
    let observer = new MutationObserver(() => {
      if (document.querySelector(".menu-is-active")) {
        observer.disconnect();

        if (!document.querySelector("#masthead").classList.contains("menu_open")) {
          document.querySelector("#masthead").classList.add("menu_open");
          document.querySelector("body").style.overflow = "hidden";
        }

        observer.observe(document, {
          childList: true,
          subtree: true,
        });
      } else {
        observer.disconnect();
        if (document.querySelector("#masthead").classList.contains("menu_open")) {
          document.querySelector("#masthead").classList.remove("menu_open");
          document.querySelector("body").style.overflow = "unset";
        }
        observer.observe(document, {
          childList: true,
          subtree: true,
        });
      }
    });

    observer.observe(document, {
      childList: true,
      subtree: true,
    });
  }
}, 100);
