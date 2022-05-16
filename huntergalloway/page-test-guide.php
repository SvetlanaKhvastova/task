<?php get_header(); ?>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

<style>
  .mobile_text_from_hero,
  .link_pages,
  .new_mobile_header {
    display: none;
  }

  @media (max-width: 767px) {
    .btn_yellow {
      background: #FDB948;
      box-shadow: 0px 6px 12px rgba(43, 43, 43, 0.15);
      border-radius: 30px;
    }

    body .mobilehead {
      display: none;
    }

    .mobilehead,
    #et-main-area {
      margin: 0;
    }

    .new_mobile_header {
      display: flex;
      justify-content: space-between;
      padding: 20px 0;
      width: 90%;
      max-width: 1200px;
      margin: 0 auto;
    }

    .new_mobile_header .mobilehead_logo {
      width: 35%;
    }

    .new_mobile_header>div:last-child {
      width: 60%;
    }

    .mobilehead_logo img {
      height: 42px;
      width: 118px;
    }

    .new_mobile_header ul {
      display: flex;
      justify-content: space-between;
      margin-top: 15px;
    }

    .new_mobile_header ul a.mobilehead_phone_tel {
      font-weight: 700;
      font-size: 16px;
      line-height: 135%;
      color: #000000;
    }

    .new_mobile_header a.mobilehead_phone_link {
      font-weight: 400;
      font-size: 15px;
      line-height: 130%;
      color: #000000;
      border-bottom: 1px dashed #000000;
      text-decoration: unset;
    }

    .new_mobile_header .header_button_flex a {
      font-weight: 600;
      font-size: 15px;
      line-height: 173%;
      height: 42px;
      background: #FFB027;
      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
      border-radius: 20px;
    }

    .link_pages {
      background: #F2F2F2;
      padding: 18px 14px;
      display: block;
      border-bottom: 1px solid #DCDCDC;
    }

    .link_pages ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .link_pages ul li {
      padding: 5px 0;
      width: 30%;
    }

    .link_pages ul li a {
      font-weight: 400;
      font-size: 15px;
      line-height: 130%;
      border-bottom: 1px dashed #000000;
      color: #000000;
    }

    .link_pages ul li:not(:last-child) {
      border-right: 1px solid #DCDCDC;
    }

    #footer-info {
      text-align: left;
      font-weight: 400;
      font-size: 13px;
      line-height: 140%;
      padding: 0 0 70px;
    }

    #main-footer #footer-widgets.clearfix {
      margin: 0;
      padding: 0 !important;
    }

    #main-footer #footer-widgets .footer-widget {
      padding: 0;
      margin-bottom: 30px;
    }

    #footer-widgets .footer-widget li {
      padding: 0;
    }

    #footer-widgets .footer-widget li:before {
      content: unset;
    }

    #footer-widgets .footer-widget li a {
      color: #FDB948;
    }

    .footer_adv_bottom.flex>p {
      font-weight: 700;
      font-size: 30px;
      line-height: 130%;
      letter-spacing: -0.01em;
      color: #FDB948;
    }

    .hg_adv.flex li div:first-child {
      font-weight: 900;
      font-size: 44px;
      line-height: 100%;
    }

    .hg_adv.flex li div:last-child {
      font-weight: 400;
      font-size: 13px;
      line-height: 135%;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: #FFFFFF;
      margin-top: 10px;
    }

    .footer_adv_bottom a {
      height: 59px;
      background: #FDB948;
      box-shadow: 0px 6px 12px rgba(43, 43, 43, 0.15);
      border-radius: 33px;
      font-weight: 700;
      font-size: 23px;
      line-height: 135%;
    }

    .footer_video_text {
      font-weight: 400;
      font-size: 13px;
      line-height: 140%;
    }

    .footer_adv {
      padding-top: 45px !important;
      margin-bottom: -2px;
    }

    #main-footer .container,
    .footer_adv .container {
      width: unset;
      padding: 0;
    }

    #main-footer,
    .footer_adv {
      padding: 0 14px;
    }

    body .footer_logo img {
      display: none;
    }

    #footer-widgets .footer-widget .footer_logo a:nth-child(2) {
      margin-left: 0;
    }

    #footer-widgets .footer-widget .footer_logo a {
      text-decoration-line: underline;
    }

    .footer_contact.flex span {
      font-weight: 400;
      font-size: 13px;
      line-height: 140%;
    }

    #et-footer-nav {
      display: none;
    }

    #main-footer #footer-bottom {
      padding: 0 !important;
    }
  }

  @media (max-width: 320px) {
    .btn_yellow {
      font-size: 12px;
    }

    .link_pages ul li a {
      font-size: 13px;
    }

    .new_mobile_header .header_button_flex a {
      font-size: 12px;
    }

    .new_mobile_header ul a.mobilehead_phone_tel,
    .new_mobile_header a.mobilehead_phone_link {
      font-size: 13px;
    }

    .footer_adv_bottom a {
      width: 290px;
    }
  }
</style>

<style>
  body {
  background: #ffffff;
}

section.guide_box {
  width: 95%;
  margin: 70px auto 98px;
  max-width: 1240px;
}

/* first_block  */
.first_block > div:first-child {
  background: #effbff;
  border-radius: 10px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.first_block > div:first-child > div:not(.img_wrap) {
  width: 60%;
  margin-right: 128px;
  padding: 40px 0 40px 60px;
}

.first_block > div:first-child > div.img_wrap {
  object-fit: contain;
  width: 338px;
  height: 340px;
}

.first_block > div:first-child h1 {
  font-weight: 800;
  font-size: 50px;
  line-height: 120%;
  color: #000000;
  margin: 0 0 20px;
  padding: 0;
}

.first_block > div:first-child p {
  font-weight: 400;
  font-size: 20px;
  line-height: 160%;
  color: #000000;
  margin: 0;
  padding: 0;
}

.first_block > div:last-child {
  background: #f9f9f9;
  border-radius: 10px;
  padding: 60px 60px 50px;
  text-align: center;
}

.first_block > div:last-child > p {
  font-weight: 600;
  font-size: 18px;
  line-height: 156%;
  color: #444444;
  margin: 0;
  padding: 0;
}

.first_block > div:last-child > p + p {
  margin-top: 10px;
}

/* second_block */

.second_block {
  margin: 80px 0 40px;
}

.second_block > h2 {
  font-weight: 800;
  font-size: 40px;
  line-height: 110%;
  color: #000000;
  text-align: center;
  margin: 0;
  padding: 0;
}

.second_block > ol {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 30px auto 80px;
  padding: 0;
  list-style: none;
  counter-reset: my-awesome-counter;
  gap: 15px;
  max-width: 1132px;
}

.second_block > ol li {
  border: 1px solid #ffffff;
  border-radius: 4px;
  width: 48%;
  min-height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.second_block > ol li:nth-child(1) {
  order: 1;
}
.second_block > ol li:nth-child(2) {
  order: 3;
}
.second_block > ol li:nth-child(3) {
  order: 5;
}
.second_block > ol li:nth-child(4) {
  order: 7;
}
.second_block > ol li:nth-child(5) {
  order: 2;
}
.second_block > ol li:nth-child(6) {
  order: 4;
}
.second_block > ol li:nth-child(7) {
  order: 6;
}
.second_block > ol li:nth-child(8) {
  order: 8;
}

.second_block > ol li span {
  background: #2549ca;
  border-radius: 4px;
  max-width: 40px;
  width: 10%;
  height: 40px;
  display: inline-flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  color: #ffffff;
  margin: 0 14px 0 0;
}

.second_block > ol li > a {
  font-weight: 600;
  font-size: 17px;
  line-height: 130%;
  color: #000000;
  background: #effbff;
  margin: 0;
  text-decoration: underline;
  position: relative;
  width: 90%;
  height: 100%;
  border: 1px solid #ffffff;
  border-radius: 4px;
  padding: 7px 0 7px 16px;
}

.second_block > p {
  background: #ffba3a;
  border-radius: 10px;
  padding: 30px 10px !important;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 130%;
  color: #000000;
  margin: 0;
}

.second_block > p > a {
  font-weight: 700;
  color: inherit;
  text-decoration: unset;
  position: relative;
}

.second_block > p > a::after {
  content: "";
  position: absolute;
  width: 100%;
  border-bottom: 1px dashed #000000;
  bottom: 0;
  left: 0;
}

/* third_block */
.third_block > ol {
  list-style: none;
  counter-reset: my-awesome-counter;
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin: 0;
  padding: 56px 0 0;
  position: relative;
}

.third_block > ol > li {
  background: #effbff;
  border-radius: 10px;
  padding: 70px 80px;
  position: relative;
  counter-increment: my-awesome-counter;
}

.third_block > ol > li::before {
  content: counter(my-awesome-counter);
  position: absolute;
  width: 112px;
  height: 112px;
  top: 0;
  left: 0;
  background: #ffffff;
  border: 2px dashed #ffba3a;
  box-shadow: 0px 6px 15px rgb(32 111 136 / 20%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 40px;
  line-height: 54px;
  color: #444444;
  z-index: 3;
}

.third_block > ol::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 85%;
  background: url("<?php echo get_template_directory_uri(); ?>/images/guide/guide_box_line.svg");
  background-repeat: no-repeat;
  z-index: 2;
}

.third_block > ol > li:nth-child(1) {
  max-width: 1030px;
  margin: 0 auto;
}

.third_block > ol > li:nth-child(2) {
  max-width: 921px;
  margin: 0 0 0 auto;
}

.third_block > ol > li:nth-child(3) {
  max-width: 1075px;
  margin: 0 0 0 auto;
}

.third_block > ol > li:nth-child(4) {
  max-width: 1030px;
  margin: 0 auto 0 30px;
}

.third_block > ol > li:nth-child(5) {
  max-width: 1122px;
  margin: 0 25px 0 auto;
}

.third_block > ol > li:nth-child(6) {
  max-width: 1240px;
  margin: 0 0 0 60px;
}

.third_block > ol > li:nth-child(7) {
  max-width: 942px;
  margin: 0 25px 0 auto;
}

.third_block > ol > li:nth-child(8) {
  max-width: 1049px;
  margin: 0 auto;
}

.third_block > ol > li:nth-child(1):before {
  left: 50%;
  top: -60px;
}

.third_block > ol > li:nth-child(2):before {
  left: -55px;
  top: -40px;
}

.third_block > ol > li:nth-child(3):before {
  left: 15px;
  top: -50px;
}

.third_block > ol > li:nth-child(4):before {
  left: 28px;
  top: -50px;
}

.third_block > ol > li:nth-child(5):before {
  left: -15px;
  top: -40px;
}

.third_block > ol > li:nth-child(6):before {
  left: 35px;
  top: -50px;
}

.third_block > ol > li:nth-child(7):before {
  left: -82px;
  top: -15px;
}

.third_block > ol > li:nth-child(8):before {
  left: -70px;
  top: -60px;
}

.third_block > ol > li h3 {
  font-weight: 800;
  font-size: 40px;
  line-height: 125%;
  color: #000000;
  margin: 0;
  padding: 0;
  position: relative;
  z-index: 5;
}

.third_block > ol > li p {
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #000000;
  margin: 0 0 30px;
  padding: 0;
}

.third_block > ol > li p > span {
  font-weight: 600;
}

.third_block > ol > li a {
  font-weight: 700;
  font-size: 15px;
  line-height: 150%;
  color: #444444;
  margin: 0;
  text-decoration: underline;
  position: relative;
  z-index: 5;
}

.third_block > ol > li a.link_more_articles {
  display: inline-block;
  font-size: 14px;
  line-height: 171%;
  color: #000000;
  margin-top: 30px;
}

.third_block > ol > li > div {
  display: flex;
  margin-top: 30px;
}

.third_block > ol > li > div .img_wrap {
  margin-right: 50px;
  object-fit: contain;
  height: 100%;
  width: 100%;
}

.third_block > ol > li > div .img_wrap .mob_photo {
  display: none;
}

.third_block > ol > li > div .img_wrap img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.third_block > ol > li div ul.sub_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  list-style: initial;
  margin: 0;
  padding: 0 0 0 25px;
}

.third_block > ol > li:nth-child(1) > div .img_wrap {
  max-width: 370px;
  width: 53%;
}

.third_block > ol > li:nth-child(1) > div > div:not(.img_wrap) {
  width: 53%;
}

.third_block > ol > li:nth-child(1) > div ul.sub_list li,
.third_block > ol > li:nth-child(2) > div ul.sub_list li,
.third_block > ol > li:nth-child(3) > div ul.sub_list li,
.third_block > ol > li:nth-child(5) > div ul.sub_list li,
.third_block > ol > li:nth-child(6) > div ul.sub_list li {
  width: 100%;
}

.third_block > ol > li:nth-child(4) > div ul.sub_list li,
.third_block > ol > li:nth-child(7) > div ul.sub_list li,
.third_block > ol > li:nth-child(8) > div ul.sub_list li {
  width: 48%;
}

.third_block > ol > li:nth-child(2) > div {
  flex-direction: column;
}

.third_block > ol > li:nth-child(2) > div .img_wrap {
  margin: 0 0 30px;
}

.third_block > ol > li:nth-child(3) > div .img_wrap {
  max-width: 431px;
  width: 53%;
}

.third_block > ol > li:nth-child(3) > div > div:not(.img_wrap) {
  width: 47%;
}

.third_block > ol > li:nth-child(5) > div .img_wrap {
  max-width: 312px;
  width: 45%;
}

.third_block > ol > li:nth-child(5) > div > div:not(.img_wrap) {
  width: 54%;
}

.third_block > ol > li:nth-child(6) > div .img_wrap {
  order: 2;
  margin: 0 0 0 30px;
  max-width: 416px;
  width: 45%;
}

.third_block > ol > li:nth-child(6) > div > div:not(.img_wrap) {
  width: 54%;
}

.third_block > ol > li:nth-child(8) > div .img_wrap {
  margin: 30px 0 0;
  max-height: 189px;
}

.third_block > ul > li:nth-child(8) > div .img_wrap img {
  border-radius: 10px;
}

.third_block > ol > li:nth-child(7) div ul.sub_list li:nth-child(1) {
  order: 1;
}

.third_block > ol > li:nth-child(7) div ul.sub_list li:nth-child(2) {
  order: 3;
}
.third_block > ol > li:nth-child(7) div ul.sub_list li:nth-child(3) {
  order: 5;
}

.third_block > ol > li:nth-child(7) div ul.sub_list li:nth-child(4) {
  order: 7;
}

.third_block > ol > li:nth-child(7) div ul.sub_list li:nth-child(5) {
  order: 9;
}

.third_block > ol > li:nth-child(7) div ul.sub_list li:nth-child(6) {
  order: 2;
}

.third_block > ol > li:nth-child(7) div ul.sub_list li:nth-child(7) {
  order: 4;
}

.third_block > ol > li:nth-child(7) div ul.sub_list li:nth-child(8) {
  order: 6;
}

.third_block > ol > li:nth-child(7) div ul.sub_list li:nth-child(9) {
  order: 8;
}

.third_block > ol > li:nth-child(7) div ul.sub_list li:nth-child(10) {
  order: 10;
}

.third_block > ol > li:nth-child(8) div ul.sub_list li:nth-child(1) {
  order: 1;
}

.third_block > ol > li:nth-child(8) div ul.sub_list li:nth-child(2) {
  order: 3;
}
.third_block > ol > li:nth-child(8) div ul.sub_list li:nth-child(3) {
  order: 5;
}

.third_block > ol > li:nth-child(8) div ul.sub_list li:nth-child(4) {
  order: 7;
}

.third_block > ol > li:nth-child(8) div ul.sub_list li:nth-child(5) {
  order: 9;
}

.third_block > ol > li:nth-child(8) div ul.sub_list li:nth-child(6) {
  order: 11;
}

.third_block > ol > li:nth-child(8) div ul.sub_list li:nth-child(7) {
  order: 13;
}

.third_block > ol > li:nth-child(8) div ul.sub_list li:nth-child(8) {
  order: 2;
}

.third_block > ol > li:nth-child(8) div ul.sub_list li:nth-child(9) {
  order: 4;
}

.third_block > ol > li:nth-child(8) div ul.sub_list li:nth-child(10) {
  order: 6;
}

.third_block > ol > li:nth-child(8) div ul.sub_list li:nth-child(11) {
  order: 8;
}

.third_block > ol > li:nth-child(8) div ul.sub_list li:nth-child(12) {
  order: 10;
}

.third_block > ol > li:nth-child(8) div ul.sub_list li:nth-child(13) {
  order: 12;
}

/* get_your_link_block */
.get_your_link_block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #262626;
  border-radius: 10px;
  padding: 50px 70px;
  margin: 80px 0;
}

.get_your_link_block > p {
  margin: 0 45px 0 0;
  font-weight: 700;
  font-size: 40px;
  line-height: 54px;
  color: #ffffff;
  padding: 0;
}

.get_your_link_block > a {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  max-width: 294px;
  width: 100%;
  text-decoration: unset;
  font-weight: 700;
  font-size: 17px;
  line-height: 140%;
  color: #262626;
  background: #ffba3a;
  border-radius: 39px;
  outline: unset;
  border: unset;
  margin: 0;
  padding: 7px;
  text-align: center;
}

.get_your_link_block.assessment > a {
  max-width: 409px;
}

/* 	.accordion_widget */
.accordion_widget .et_pb_toggle {
  background: unset;
  margin: 0;
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
}

.accordion_widget .et_pb_toggle:first-child {
  border-top: unset;
}
.accordion_widget .et_pb_toggle_content {
  border-top: 1px solid #000000;
  padding: 24px 0;
}

.accordion_widget h5.et_pb_toggle_title {
  padding: 24px 0 24px 56px;
}

.accordion_widget .et_pb_toggle_title:before,
.accordion_widget .et_pb_toggle_title:after {
  left: 0;
  right: unset;
  width: 30px;
  height: 30px;
  background: url(https://conversionratestore.github.io/projects/hantergalloway/img/what_we_do/plus.svg) center no-repeat;
  border: 1px solid #000000;
  border-radius: 4px;
  top: 30%;
}

.accordion_widget .et_pb_toggle_title:after {
  content: unset;
}

.accordion_widget .et_pb_toggle_open .et_pb_toggle_title:before {
  width: 32px;
  height: 32px;
  background: #ffba3a url(https://conversionratestore.github.io/projects/hantergalloway/img/what_we_do/minus.svg) center no-repeat;
  border-radius: 4px;
  border: none;
  top: 30%;
}

.accordion_widget .accordion_holder {
  margin: 0;
}

.accordion_widget {
  padding: 0;
  max-width: 962px;
  margin: 0 auto;
}

#accordion_widget .inner_title {
  margin-bottom: 60px;
  padding: 0;
  text-align: center;
  line-height: 54px;
  font-weight: 700;
}

.accordion_widget h5.et_pb_toggle_title {
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  text-transform: capitalize;
}

@media (max-width: 1268px) {
  .third_block > ol > li::before {
    left: 50% !important;
    top: -54px !important;
    transform: translateX(-50%);
  }

  .third_block > ol::before {
    content: unset;
  }

  .third_block > ol > li {
    margin: 0 !important;
    max-width: unset !important;
  }
}

@media (max-width: 768px) {
  section.guide_box {
    margin: 0 auto 32px;
  }
  .first_block > div:first-child {
    flex-direction: column;
    margin: 0 -2.7% 32px;
    border-radius: unset;
  }

  .first_block > div:first-child > div:not(.img_wrap) {
    margin: 0;
    padding: 32px 18px 0;
    width: 100%;
  }

  .first_block > div:first-child h1 {
    font-size: 35px;
    line-height: 111%;
    margin-bottom: 24px;
  }

  .first_block > div:first-child > div.img_wrap {
    width: 223px;
    height: 223px;
  }

  .first_block > div:last-child {
    padding: 20px 16px;
  }

  .first_block > div:last-child > p {
    font-size: 16px;
    line-height: 150%;
    text-align: left;
  }

  /* second_block */
  .second_block {
    margin: 32px 0;
  }

  .second_block > h2 {
    font-size: 26px;
    line-height: 123%;
  }

  .second_block > ol {
    margin: 16px auto 32px;
    max-width: 327px;
  }

  .second_block > ol li {
    width: 100%;
    align-items: center;
    order: unset !important;
  }

  .second_block > ol li span {
    width: 15%;
  }

  .second_block > ol li > a {
    font-size: 20px;
    line-height: 130%;
  }

  .second_block > p {
    padding: 15px 32px;
  }

  .second_block > p > a {
    display: block;
    width: max-content;
    margin: 0 auto;
  }

  .third_block > ol {
    padding-top: 50px;
    gap: 66px;
  }

  .third_block > ol > li {
    padding: 20px 16px;
    margin: 0 !important;
  }

  .third_block > ol > li h3 {
    font-size: 26px;
    line-height: 123%;
    color: #444444;
  }

  .third_block > ol > li > div {
    margin-top: 16px;
    flex-direction: column;
  }

  .third_block > ol > li p {
    margin-bottom: 16px;
  }

  .third_block > ol > li a {
    font-size: 18px;
  }

  .third_block > ol > li > div > div,
  .third_block > ol > li div ul.sub_list li {
    width: 100% !important;
    order: unset !important;
  }

  .third_block > ol > li div ul.sub_list {
    flex-direction: column;
  }

  .third_block > ol > li::before {
    width: 60px;
    height: 60px;
    left: 50% !important;
    top: -54px !important;
    transform: translateX(-50%);
  }

  /* .get_your_link_block */
  .get_your_link_block {
    margin: 32px -2.7% 0;
    padding: 32px 16px;
    flex-direction: column;
    border-radius: unset;
  }

  .get_your_link_block > p {
    margin: 0 0 24px;
    font-size: 20px;
    line-height: 160%;
    text-align: center;
    text-transform: capitalize;
  }

  .get_your_link_block > a {
    width: 100%;
    max-width: unset;
    font-size: 15px;
    line-height: 173%;
  }

  .third_block > ol > li > div .img_wrap {
    margin: 0 0 16px !important;
    max-height: unset !important;
    max-width: unset !important;
  }

  .third_block > ol > li > div .img_wrap .desk_photo {
    display: none;
  }

  .third_block > ol > li > div .img_wrap .mob_photo {
    display: block;
  }

  .third_block > ol > li:nth-child(8) > div .img_wrap {
    margin: 16px 0 0 !important;
  }

  #accordion_widget .inner_title {
    font-size: 26px;
    line-height: 32px;
    margin-bottom: 20px;
  }

  .accordion_widget {
    margin: 80px auto 0;
  }

  .accordion_widget h5.et_pb_toggle_title {
    font-size: 18px;
    line-height: 25px;
  }
}

@media (max-width: 320px) {
  .first_block > div:first-child h1 {
    font-size: 30px;
  }

  .get_your_link_block > p {
    font-size: 17px;
  }

  .get_your_link_block > a {
    font-size: 13px;
  }
}


</style>

<div class="new_mobile_header">
  <div class="mobilehead_logo">
    <a href="https://hgstagingsite.wpengine.com/" alt="logo hunter Galloway">
      <img src="https://cjmhfp3t381yd87a17zl60cv-wpengine.netdna-ssl.com/wp-content/themes/Divi/images/hunter_logo_black_.svg" />
    </a>
  </div>
  <div>
    <div class="header_button_flex">
      <a href="#" alt="" class="btn_yellow rc_open old_head_cta pum-trigger" style="cursor: pointer"> Get a Free Assessment </a>
    </div>
    <ul>
      <li>
        <a href="tel:1300088065" alt="" class="mobilehead_phone_tel">1300 088 065</a>
      </li>
      <li>
        <a href="https://hgstagingsite.wpengine.com/contact/" alt="" class="mobilehead_phone_link">Contact Us</a>
      </li>
    </ul>
  </div>
</div>
<!-- <div class="link_pages">
  <ul>
    <li><a href="https://hgstagingsite.wpengine.com/our-team/" target="blank">Who We Are</a></li>
    <li><a href="https://hgstagingsite.wpengine.com/home-loans-brisbane/" target="blank">What We Do</a></li>
    <li><a href="https://hgstagingsite.wpengine.com/who-we-help/" target="blank">Who We Help</a></li>
  </ul>
</div> -->

<!-- Fullstack developer content /start -->
    <section class="guide_box">
      <div class="first_block">
        <div>
          <div>
            <h1>The ultimate guide for first-time home buyers</h1>
            <p>Find out everything you need to know about buying your first property: from saving up for a deposit and choosing the right property to applying for a home loan.</p>
          </div>
          <div class="img_wrap">
            <img src="<?php echo get_template_directory_uri(); ?>/images/guide/first_block.png" alt="A thoughtful man near the house" />
          </div>
        </div>
        <div>
          <p>If you’re a first home buyer who doesn’t know where to start, you’re in the right place!</p>
          <p>In this guide you will get comprehensive info about first home buyers tips&tricks.</p>
        </div>
      </div>

      <div class="second_block">
        <h2>What’s inside this guide</h2>
        <ol>
          <li>
            <span>1</span>
            <a href="#guide_first">Saving up for a deposit</a>
          </li>
          <li>
            <span>2</span>
            <a href="#guide_second">Grants and Government schemes</a>
          </li>
          <li>
            <span>3</span>
            <a href="#guide_third">Finding the right home</a>
          </li>
          <li>
            <span>4</span>
            <a href="#guide_fourth">Buying a home</a>
          </li>
          <li>
            <span>5</span>
            <a href="#guide_fifth">Home loans explained</a>
          </li>
          <li>
            <span>6</span>
            <a href="#guide_sixth">Applying for a home loan</a>
          </li>
          <li>
            <span>7</span>
            <a href="#guide_seventh">Home loans for different types of employment</a>
          </li>
          <li>
            <span>8</span>
            <a href="#guide_eighth">Bank home loan review</a>
          </li>
        </ol>
        <p>Want to read all info in one place? Check our handy <a href="/first-home-buyer-guide/">first-time home buyer guide.</a></p>
      </div>

      <div class="third_block">
        <ol>
          <li id="guide_first">
            <h3>Saving up for a deposit</h3>
            <div>
              <div class="img_wrap">
                <img class="desk_photo" src="<?php echo get_template_directory_uri(); ?>/images/guide/guide_box_photo1.jpg" alt="house key calculator" />
                <img class="mob_photo" src="<?php echo get_template_directory_uri(); ?>/images/guide/guide_box_photo_mob1.jpg" alt="house key calculator" />
              </div>
              <div>
                <p>
                  How much deposit do you need for a home loan? In general, we recommend that you have saved up a minimum of 8% deposit before you start actively looking to buy a
                  home. These resources will help you learn EXACTLY how much deposit you are going to need to buy a place in 2022:
                </p>
                <ul class="sub_list">
                  <li>
                    <a target="_blank" href="/deposit-calculator/">Deposit calculator</a>
                  </li>
                  <li>
                    <a target="_blank" href="/how-much-home-can-i-afford/">How much home can I afford to borrow?</a>
                  </li>
                  <li>
                    <a target="_blank" href="/how-to-save-for-a-house-deposit/">How to save for a house deposit</a>
                  </li>
                  <li>
                    <a target="_blank" href="/no-deposit-home-loans/">Can I get a home loan with no deposit?</a>
                  </li>
                  <li>
                    <a target="_blank" href="/buying-a-house-with-inheritance/">How to use inheritance as a deposit</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li id="guide_second">
            <h3>Grants and Government schemes</h3>
            <div>
              <div class="img_wrap">
                <img class="desk_photo" src="<?php echo get_template_directory_uri(); ?>/images/guide/guide_box_photo2.jpg" alt="house" />
                <img class="mob_photo" src="<?php echo get_template_directory_uri(); ?>/images/guide/guide_box_photo_mob2.jpg" alt="house" />
              </div>
              <div>
                <p>
                  As a first home owner, you may be eligible for assistance from the government with buying your home. Check out these resources below to see if you qualify to get
                  <span>$15,000 First Home Owners Grant</span> in 2022:
                </p>
                <ul class="sub_list">
                  <li>
                    <a target="_blank" href="/first-home-owners-grant-qld/">First Home Owners Grant Queensland</a>
                  </li>
                  <li>
                    <a target="_blank" href="/first-home-super-saver-scheme/">First Home Super Saver Scheme</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li id="guide_third">
            <h3>Finding the right home</h3>
            <div>
              <div class="img_wrap">
                <img class="desk_photo" src="<?php echo get_template_directory_uri(); ?>/images/guide/guide_box_photo3.jpg" alt="house and fence" />
                <img class="mob_photo" src="<?php echo get_template_directory_uri(); ?>/images/guide/guide_box_photo_mob3.jpg" alt="house and fence" />
              </div>
              <div>
                <p>
                  Most people will tell you that property is all about location. But in reality, it is way more complex than that. These resources will help you to understand where
                  to find the best properties, and how to do your step-by-step research online:
                </p>
                <ul class="sub_list">
                  <li>
                    <a target="_blank" href="/brisbane-property-market-2022/">Brisbane property market update</a>
                  </li>
                  <li>
                    <a target="_blank" href="/property-market-research-process/">Property market research process</a>
                  </li>
                  <li>
                    <a target="_blank" href="/best-suburbs-in-brisbane/">Best suburbs in Brisbane</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li id="guide_fourth">
            <h3>Buying a home</h3>
            <div>
              <div>
                <p>These resources cover all of the different aspects of buying a home:</p>
                <ul class="sub_list">
                  <li>
                    <a target="_blank" href="/mistakes-first-home-buyers-brisbane/">22 Mistakes nearly all first home buyers make</a>
                  </li>
                  <li>
                    <a target="_blank" href="/first-home-buyer-myths/"> 5 Home buyer myths and mistakes revealed</a>
                  </li>
                  <li>
                    <a target="_blank" href="/hidden-costs-buying-home-brisbane/">16 hidden costs of buying a home in Brisbane</a>
                  </li>
                  <li>
                    <a target="_blank" href="/how-to-put-together-your-home-buying-team/"> Putting together your home buying team</a>
                  </li>
                  <li>
                    <a target="_blank" href="/brisbane-buyers-agent-review/"> How to get the most out of your buyers agent</a>
                  </li>
                  <li>
                    <a target="_blank" href="/how-to-buy-a-house/"> How to buy a house (step by step case study)</a>
                  </li>
                  <li>
                    <a target="_blank" href="/negotiate-house-price-with-agent/"> Negotiate the house price with a real estate agent</a>
                  </li>
                  <li>
                    <a target="_blank" href="/making-an-offer-on-a-house/"> Making an offer on a house below asking price</a>
                  </li>
                  <li>
                    <a target="_blank" href="/multiple-offer-situation/"> What to do in a multiple offer situation</a>
                  </li>
                  <li>
                    <a target="_blank" href="/buying-at-auction/"> 12 rules for buying at auction</a>
                  </li>
                  <li>
                    <a target="_blank" href="/signed-a-contract-of-sale/"> Signed a contract of sale on a home? 5 simple steps to settlement</a>
                  </li>
                  <li>
                    <a target="_blank" href="/first-home-buyer-stamp-duty/"> First home buyer stamp duty</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li id="guide_fifth">
            <h3>Home loans explained</h3>
            <div>
              <div class="img_wrap">
                <img class="desk_photo" src="<?php echo get_template_directory_uri(); ?>/images/guide/guide_box_photo4.jpg" alt="man and woman" />
                <img class="mob_photo" src="<?php echo get_template_directory_uri(); ?>/images/guide/guide_box_photo_mob4.jpg" alt="man and woman" />
              </div>
              <div>
                <p>Fixed rates, LVR, LMI, offset or redraw - home loan terminology can be confusing. We cover everything you need to know in these resources below:</p>
                <ul class="sub_list">
                  <li>
                    <a target="_blank" href="/first-home-buyers-loans/">The definitive guide to First Home Buyers loans</a>
                  </li>
                  <li>
                    <a target="_blank" href="/comparison-rate/">Comparison rates: A complete guide</a>
                  </li>
                  <li>
                    <a target="_blank" href="/lenders-mortgage-insurance/">What is lender’s mortgage insurance?</a>
                  </li>
                  <li>
                    <a target="_blank" href="/fixed-interest-rates/">Fixed interest rates: The comprehensive guide</a>
                  </li>
                  <li>
                    <a target="_blank" href="/offset-account/">What is an offset account?</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li id="guide_sixth">
            <h3>Applying for a home loan</h3>
            <div>
              <div class="img_wrap">
                <img class="desk_photo" src="<?php echo get_template_directory_uri(); ?>/images/guide/guide_box_photo5.jpg" alt="man and woman" />
                <img class="mob_photo" src="<?php echo get_template_directory_uri(); ?>/images/guide/guide_box_photo_mob5.jpg" alt="man and woman" />
              </div>
              <div>
                <p>
                  When should you get a home loan? How does it work? And what happens if your loan gets declined? We help answer all of your questions (and many more) in the below:
                </p>
                <ul class="sub_list">
                  <li>
                    <a target="_blank" href="/pre-approval/"> What is a home loan pre-approval?</a>
                  </li>
                  <li>
                    <a target="_blank" href="/home-loan-process/"> Home loan process (Step by Step guide)</a>
                  </li>
                  <li>
                    <a target="_blank" href="/does-hecs-debt-affect-home-loan/"> Does HECS debt affect your home loan?</a>
                  </li>
                  <li>
                    <a target="_blank" href="/how-to-challenge-a-bank-valuation/"> How to challenge a bank valuation</a>
                  </li>
                  <li>
                    <a target="_blank" href="/home-loan-declined/"> What to do if your home loan gets declined</a>
                  </li>
                  <li>
                    <a target="_blank" href="/positive-credit-reporting-what-it-mean-for-home-loans/"> Positive credit reporting: What does it mean for home loans?</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li id="guide_seventh">
            <h3>Home loans for different types of employment</h3>
            <div>
              <div>
                <p>Your home loan options can vary based on your type of employment and profession. Check out these resources to find out more:</p>
                <ul class="sub_list">
                  <li><a target="_blank" href="/home-loan-on-contractor-income/">How to get a home loan on contractor income</a></li>
                  <li><a target="_blank" href="/home-loan-casual-employment/">Home loan casual employment</a></li>
                  <li><a target="_blank" href="/self-employed-home-loans/">Self employed home loans</a></li>
                  <li><a target="_blank" href="/lmi-waiver-lawyers/">Home loans for lawyers</a></li>
                  <li><a target="_blank" href="/physiotherapist-home-loans/">Physiotherapist home loans </a></li>
                  <li><a target="_blank" href="/home-loans-for-nurses/">Home loans for nurses</a></li>
                  <li><a target="_blank" href="/accountant-home-loans/">Accountant home loans</a></li>
                  <li><a target="_blank" href="/home-loans-pharmacists/">Home loans for pharmacists</a></li>
                  <li><a target="_blank" href="/home-loans-for-doctors/">Home loans for doctors</a></li>
                  <li><a target="_blank" href="/maternity-leave-home-loan/">Maternity leave home loan</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li id="guide_eighth">
            <h3>Bank home loan review</h3>
            <div>
              <div>
                <p>Do you have a particular bank in mind? Or maybe you’re just curious? Check out our bank reviews below:</p>
                <ul class="sub_list">
                  <li><a target="_blank" href="/state-custodians-home-loan-review/">State custodians home loan review</a></li>
                  <li><a target="_blank" href="/advantedge-home-loan-review/">Advantedge home loan review</a></li>
                  <li><a target="_blank" href="/amp-home-loan-review/">AMP home loan review</a></li>
                  <li><a target="_blank" href="/anz-pre-approval/">ANZ pre approval - the definitive guide</a></li>
                  <li><a target="_blank" href="/ethical-banks-australia/">Ethical banks in Australia</a></li>
                  <li><a target="_blank" href="/gateway-credit-union-home-loan-review/">Gateway Credit Union Home Loan review</a></li>
                  <li><a target="_blank" href="/connective-home-loans/">Connective home loans review</a></li>
                  <li><a target="_blank" href="/suncorp-home-loan-review/">Suncorp home loan review</a></li>
                  <li><a target="_blank" href="/ing-home-loan-review/">ING home loan review</a></li>
                  <li><a target="_blank" href="/boq-specialist-home-loan/">BOQ Specialist home loan review</a></li>
                  <li><a target="_blank" href="/choicelend-home-loan-review/">ChoiceLend Home Loan review</a></li>
                  <li><a target="_blank" href="/bank-of-qld-home-loan-review/">Bank of Queensland home loan review</a></li>
                  <li><a target="_blank" href="/virgin-money-home-loans/">Virgin Money home loans</a></li>
                </ul>
                <div class="img_wrap">
                  <img src="<?php echo get_template_directory_uri(); ?>/images/guide/guide_box_photo6.jpg" alt="partners" />
                </div>
              </div>
            </div>
          </li>
        </ol>
      </div>
      <div class="get_your_link_block assessment">
        <p>Find out what options you have</p>
        <a href="/?s=assestment">Get Your Free Credit Rating Assessment</a>
      </div>

      <div class="accordion_widget widget box_list" id="accordion_widget">
        <div>
          <div class="inner_widget">
            <h2 class="inner_title">Questions and Answers</h2>
            <div class="accordion_holder">
              <div class="et_pb_module et_pb_toggle et_pb_toggle_close">
                <h5 class="et_pb_toggle_title">Are you able to do virtual meetings?</h5>
                <div class="et_pb_toggle_content clearfix">
                  <p>
                    Yes, our mortgage brokers can still 'face to face' meet you using Zoom Meeting or Google Hangouts, whichever is your preference. In our online meeting, we'll be
                    able to go through your requirements and walk you through the home buying process.
                  </p>
                  <p>
                    Our mortgage brokers are working and are available during the coronavirus outbreak, so if you need any assistance with a home loan
                    <a href="/contact/">get in touch today.</a>
                  </p>
                </div>
              </div>
              <div class="et_pb_module et_pb_toggle et_pb_toggle_close">
                <h5 class="et_pb_toggle_title">What is a mortgage broker?</h5>
                <div class="et_pb_toggle_content clearfix">
                  <p>
                    A mortgage broker is a consultant that can help you with finding a home loan, or mortgage usually from their panel of lenders. Once the right home loan has been
                    selected, the mortgage broker will help you manage the home loan process, from initially signing the paperwork all the way until settlement.
                  </p>
                </div>
              </div>

              <div class="et_pb_module et_pb_toggle et_pb_toggle_close">
                <h5 class="et_pb_toggle_title">What does a mortgage broker do?</h5>
                <div class="et_pb_toggle_content clearfix">
                  <p>
                    A mortgage broker acts on your behalf to arrange a home loan through a bank or lender. Australian banks and lenders have different policies and loan
                    requirements, and it is a brokers job to find a loan from one of these parties that fit with your individual situation.
                  </p>
                  <p>
                    Mortgage Brokers can help find the right home loan for any situation, from purchasing your first home to buying an investment property all the way to
                    refinancing your mortgage to a better interest rate.
                  </p>
                  <p>
                    At <a href="/">Hunter Galloway</a> we have access to over 30 different banks and lenders, giving you a wide range of home loan options to ensure we have a
                    lender that can fit in with what you need.
                  </p>
                </div>
              </div>
              <div class="et_pb_module et_pb_toggle et_pb_toggle_close">
                <h5 class="et_pb_toggle_title">Is it good to go through a mortgage broker?</h5>
                <div class="et_pb_toggle_content clearfix">
                  <p>Applying for your home loan through a mortgage broker gives you many advantages and there are no down sides.</p>
                  <p>We will give your application more care and attention than going direct, and we can offer you the best loan product across over thirty different lenders.</p>
                  <p>
                    And if your loan application is complicated for any reason, we have the in depth knowledge and expertise required to correctly assess your situation and find
                    you the right loan.
                  </p>
                </div>
              </div>

              <div class="et_pb_module et_pb_toggle et_pb_toggle_close">
                <h5 class="et_pb_toggle_title">How much do mortgage brokers get paid in Australia?</h5>
                <div class="et_pb_toggle_content clearfix">
                  <p>Mortgage brokers in Australia get paid commissions from the banks. There is no cost to you as the client.</p>
                  <p>
                    We do the same work the branch manager would do in putting together your application, so the lenders pay us for that service. The difference is that we are
                    invested in your loan application - we don't get paid otherwise - so we will work very hard for it to get approved, as well as provide incredible service.
                  </p>
                  <p>
                    As our team at <a href="/">Hunter Galloway</a> are mortgage broking and credit experts, we can answer all of your questions instead of directing you to another
                    department.
                  </p>
                </div>
              </div>
              <div class="et_pb_module et_pb_toggle et_pb_toggle_close">
                <h5 class="et_pb_toggle_title">What types of customers do you help?</h5>
                <div class="et_pb_toggle_content clearfix">
                  <p>
                    Our mission is to make your home loan application effortless. We always work towards building a strong and personal relationship with every one of our clients
                    and will work tirelessly to find the right home loan for you. Your mortgage is a lifelong commitment, and so is our commitment to you.
                  </p>
                  <ul class="inner_list">
                    <li><a href="/first-time-investor/">Are you a First Time Investor who wants to build a portfolio?</a></li>
                    <li><a href="/first-home-buyer-loans/">Are you a first home buyer who is overwhelmed and doesn’t know where to start?</a></li>
                    <li><a href="/home-or-investment-property/">Are you looking to update your home and keep your existing home as an investment?</a></li>
                    <li><a href="/home-loans-for-doctors/">Are you a medical professional looking for no deposit 100% LVR financing?</a></li>
                    <li><a href="/property-investor-portfolio/">Are you a seasoned investor looking to add to your portfolio?</a></li>
                    <li>
                      <a href="/home-loans-without-hassle/">Feeling too busy?</a
                      ><a href="/home-loans-without-hassle/"> Is your property purchase being held back due to lack of time?</a>
                    </li>
                  </ul>
                  <p>We help all sorts of clients from across Brisbane, so get in touch with the team today to book a <a href="/free-assessment/">free assessment</a>.</p>
                </div>
              </div>

              <div class="et_pb_module et_pb_toggle et_pb_toggle_close">
                <h5 class="et_pb_toggle_title">What is an Independent Mortgage Broker?</h5>
                <div class="et_pb_toggle_content clearfix">
                  <p>
                    An Independent Mortgage Broker in Brisbane is a broker that is not subjected to outside authority. In other words, they should technically be charging a fee for
                    their services and not be paid commissions by the banks.
                  </p>
                  <p>
                    In Australia, brokers are not technically independent. Brokers use an aggregator, who provide access to all of the loans offered by the banks and lenders. We
                    are paid a commission from the banks for providing them with a home loan.
                  </p>
                  <p>
                    But there is still a difference between independently owned mortgage brokers, and those owned by banks. Mortgage brokers who are owned by the banks are
                    influenced to recommend the loans from the banks that own them.
                  </p>
                  <p>
                    <a href="/">Hunter Galloway</a> is an independently owned Mortgage Broker, not connected to any banks or lender. We use Connective Financial services as our
                    aggregator who provide the latest technology and training to help find our customers the best finance options.
                  </p>
                  <p>
                    We are not owned by a bank, and neither the aggregator or the banks have any influence on our decisions or loan recommendations. We only care about what is best
                    for you.
                  </p>
                </div>
              </div>

              <div class="et_pb_module et_pb_toggle et_pb_toggle_close">
                <h5 class="et_pb_toggle_title">Why should I use a mortgage broker in Australia?</h5>
                <div class="et_pb_toggle_content clearfix">
                  <p>
                    Using a mortgage broker gives you many more options than going directly through a bank. Individual banks can only offer you the small number of loans that they
                    have. We have access to over 40 banks in Australia, so we can find you the right lender and the right loan.
                  </p>
                  <p>The best mortgage brokers can help you through their intimate knowledge of credit policy, making the home loan process quick, easy and stress-free.</p>
                  <p>
                    We work with a wide range of borrowers, from <a href="/first-home-buyer-loans/">first home owners</a>,
                    <a href="/property-investor-portfolio/">experienced property investors</a> to <a href="/home-loans-for-doctors/">medical professionals</a> helping them find the
                    best deal.
                  </p>
                  <p>
                    Through our intimate bank credit knowledge, we can find ‘secret’ policy exceptions to get approvals for applications that would normally get declined, including
                    no deposit <a href="/guarantor-home-loan/">guarantor home loans</a> and <a href="/unusual-employment-loan/">unusual employment loans.</a>
                  </p>
                  <p>
                    We also have very strong relationships with the credit teams and key staff at the banks meaning we are also in a good position to get the very best interest
                    rates for you. Often this means a cheaper variable or fixed interest rates, or rebates from the bank to cover the costs to
                    <a href="/refinance-home-loan/">refinance your loan.</a>
                  </p>
                </div>
              </div>
              <div class="et_pb_module et_pb_toggle et_pb_toggle_close">
                <h5 class="et_pb_toggle_title">What is the difference between fixed and variable rates?</h5>
                <div class="et_pb_toggle_content clearfix">
                  <p>
                    A fixed rate mortgage means that you 'lock in' an interest rate for either a two-, three-, or five-year fixed period. While you're on that fixed rate, your loan
                    repayment will not change, even if interest rates go up.
                  </p>
                  <p>
                    The main benefit of a fixed rate mortgage is security. You know what your monthly repayments will be and you don't have to worry about interest rates rising or
                    falling.
                  </p>
                  <p>
                    A variable rate mortgage means that your mortgage repayments will change based on current interest rates. If the interest rates go up, then your repayments will
                    increase. If interest rates drop, so do your repayments.
                  </p>
                  <p>
                    The main benefit of a variable rate mortgage is flexibility. A variable rate home loan will allow you to make extra repayments without penalties and you also
                    have the option of extra facilities like offset accounts.
                  </p>
                </div>
              </div>
              <div class="et_pb_module et_pb_toggle et_pb_toggle_close">
                <h5 class="et_pb_toggle_title">How can I manage risk and borrow the smart way?</h5>
                <div class="et_pb_toggle_content clearfix">
                  <p>
                    Managing risk is all about understanding your situation, and borrowing the right amount of money. Borrowing the absolute maximum amount of money possible can be
                    a problem if your financial or living circumstances change, so it's important to get the assistance of a mortgage broker to help make sure that you're borrowing
                    the right amount of money.
                  </p>
                  <p>
                    Here at Hunter Galloway, we take the time to learn about your unique situation and what you're trying to achieve so we can find you the right loan - and the
                    right loan amount - that will help you to achieve your goals without putting yourself through any unnecessary financial risk.
                  </p>
                </div>
              </div>
              <div class="et_pb_module et_pb_toggle et_pb_toggle_close">
                <h5 class="et_pb_toggle_title">How long should a mortgage application take?</h5>
                <div class="et_pb_toggle_content clearfix">
                  <p>
                    The length of a mortgage application depends on a lot of different factors, including the complexity of the application and the lender that you're using. Simple
                    applications with the most responsive lenders can be very quick. More complex applications or some of the slower lenders can take a bit more time.
                  </p>
                  <p>
                    If you are purchasing a property it's very common for us to have our finance approved within 14 days, or 2 weeks - sometimes less if you have tight finance
                    timeframes.
                  </p>
                  <p>
                    We will give you an idea of the expected time for your application when we submit it to the lenders, and keep you posted every step of the way. As a general
                    guide, though, most applications are settled within a month (and many are settled much quicker than that).
                  </p>
                </div>
              </div>

              <div class="et_pb_module et_pb_toggle et_pb_toggle_close">
                <h5 class="et_pb_toggle_title">How can Hunter Galloway make the home loan application process simple?</h5>
                <div class="et_pb_toggle_content clearfix">
                  <p>We will do all of the leg work on your home loan application to make it as simple and stress-free as possible.</p>
                  <p>
                    It starts with an information session with one of our brokers. They will sit down with you to understand your background, your goals, and your financial
                    circumstances.
                  </p>
                  <p>
                    Based on this information, we work with an internal credit team and utilise cutting-edge technology to provide you with the best home loan solution for you.
                  </p>
                  <p>
                    Our internal credit team will go through your application with a fine-toothed comb to make sure that everything is in order and you have the best possible
                    chance of getting your loan approved.
                  </p>
                  <p>
                    As your application progresses, we will be there to help you every step of the way. We will provide you with regular updates about the progress of your
                    application, and will work to quickly resolve any issues if they crop up.
                  </p>
                  <p>
                    If you want some examples of just how easy it can be, check out our Google reviews. We have over 680 reviews with a 5-star average rating, which goes to show
                    just how easy and simple applying for a home loan with us can be.
                  </p>
                </div>
              </div>
              <div class="et_pb_module et_pb_toggle et_pb_toggle_close">
                <h5 class="et_pb_toggle_title">Are there different products that would suit me better over others? What are my options?</h5>
                <div class="et_pb_toggle_content clearfix">
                  <p>
                    There are literally hundreds of different home loans across 40 different lenders in Australia, each of them with their advantages and disadvantages. Some
                    products will be better suited for you than others. The only way to know which is best for you is to check each product to see what suits your unique situation
                    the best.
                  </p>
                  <p>
                    Luckily, that's exactly what the mortgage brokers at Hunter Galloway are here to do! We search across all of the options from the lenders and banks to find you
                    the right product.
                  </p>
                  <p>
                    Once we find the right product for you, we will meet with you to discuss your options and answer any questions you might have before moving ahead with your
                    application. Rest assured that we will find you the best loan possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="get_your_link_block">
        <p>Find out what options you have</p>
        <a href="/mortgage-report/">Get Your Mortgage Report</a>
      </div>
    </section>
<!-- Fullstack deeloper content /end -->

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>

<script>
  scrolling(".second_block > ol li > a")

// js scrolling
function scrolling(upSelector) {
  let links = document.querySelectorAll(upSelector),
    speed = 0.4

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault()
      console.log(link)

      let widthTop = document.documentElement.scrollTop,
        hash = this.hash,
        toBlock = document.querySelector(hash).getBoundingClientRect().top - 100,
        start = null        

      if (window.innerWidth <= 768) {
        toBlock = document.querySelector(hash).getBoundingClientRect().top - 70
      }

      if (hash === "#guide_first") {
        speed = 1.7
      } else if (hash === "#guide_second" || hash === "#guide_third" || hash === "#guide_fourth") {
        speed = 1.1
      } else if (hash === "#guide_fifth" || hash === "#guide_sixth" || hash === "#guide_seventh" || hash === "#guide_eighth") {
        speed = 0.4
      }


      requestAnimationFrame(step)

      function step(time) {
        if (start === null) {
          start = time
        }

        let progress = time - start,
          r = toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock)

        document.documentElement.scrollTo(0, r)

        if (r != widthTop + toBlock) {
          requestAnimationFrame(step)
        } else {
        }
        location.hash = hash
      }
    })
  })
}



</script>

<?php

get_footer();
