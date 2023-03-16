let newPage = setInterval(() => {
  if (document.querySelector("#player")) {
    clearInterval(newPage)
    let styleFreeWorkShop = /*html */ `
    <style>
    .count_sec .white-block.fst_red_spc .content > .col-md-8,
.count_sec .white-block.fst_red_spc .content > .col-md-4,
#myCarousel .banner_txt > .enroll_btn_txt,
.after-refresh .count_sec:nth-of-type(4),
.after-refresh .count_sec:nth-of-type(26) {
  display: none !important;
}
.content .page h2 {
  font-weight: 700 !important;
  font-size: 32px !important;
  line-height: 40px !important;
  color: #734f22 !important;
  margin-left: auto !important;
  margin-right: auto !important;
}
.entry-content p {
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 26px !important;
  color: #4b4b4b !important;
  margin-bottom: 16px;
  position: relative;
}
.after-refresh > section.count_sec:nth-child(27) img {
  border-radius: 16px;
}
.after-refresh > section.count_sec:nth-child(27) p {
  margin-bottom: 16px !important;
}
#myCarousel .item_mc {
  height: 620px;
}
.fst_red_spc {
  padding: 60px 0 !important;
}
#below_video_text {
  margin-top: 20px;
}
#below_video_text .enroll_btn_txt {
  margin: unset;
}
#below_video_text .button-header.enroll_now_main {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
}
#below_video_text .top_video_guarantee {
  margin-left: 30px;
}
#below_video_text .top_video_guarantee img {
  max-width: 75px;
  width: 100%;
  margin: 0;
}
#below_video_text .button-header a {
  max-width: 210px;
  width: 100%;
  background: #193973;
  box-shadow: 5px 5px 10px rgba(39, 32, 32, 0.8);
  border-radius: 10px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 250ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
}
#below_video_text .enroll_btn_txt p {
  color: #734f22 !important;
  font-weight: 700 !important;
  margin: 0 !important;
}
#below_video_text .enroll_btn_txt p span.dis_price {
  font-weight: 400 !important;
}
#myHeaderr {
  padding: 12px 0 !important;
}
#myHeaderr .box_btn {
  margin: 0;
}
#myHeaderr .box_btn .button_space {
  padding: 0;
}
#myHeaderr a.blue-large {
  max-width: 164px;
  width: 100%;
  min-width: 164px;
  background: #193973;
  box-shadow: 5px 5px 10px rgba(39, 32, 32, 0.8);
  border-radius: 10px;
  height: 48px;
  transition: all 250ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
#myHeaderr .top_menu_box {
  max-width: 700px;
}
#myHeaderr .top_menu_box > .row {
  display: flex;
  align-items: center;
  justify-content: center;
}
#myHeaderr .top_menu_box > .row > .text_btn_one {
  margin-left: 20px;
}
#myHeaderr h4 {
  margin: 0 !important;
  font-weight: 700 !important;
  font-size: 20px !important;
  line-height: 27px !important;
}
.image_left > img,
.testi_img.lead_img > img,
.card.image1 > img,
.image_right.disc-img1 > img {
  border-radius: 16px;
  padding: 0;
  width: 100%;
  height: 100%;
}
/*
      .after-refresh .count_sec:nth-of-type(25) .flowplayer_video_container {
        border-radius: 16px;
            max-width: 318px;
                padding-top: 46.25%;
      }
      */
.dividing_line {
  border: unset !important;
}
.dividing_line + div {
  border-left: 1px solid #734f22;
}
.after-refresh .count_sec:nth-of-type(23) .content > .col-md-6.col-sm-6:not(.dividing_line) > p:nth-child(4) {
  margin-bottom: 0 !important;
}
.after-refresh .count_sec:nth-of-type(23) .guarantee img {
  padding-bottom: 32px !important;
}

.after-refresh .count_sec:nth-of-type(1) .all_content .content > .col-md-4 {
  padding: 0 15px 0 0;
}
.after-refresh .count_sec:nth-of-type(2) h2 {
  margin-bottom: 2px;
}
.after-refresh .count_sec:nth-of-type(2) .white-block {
  padding-bottom: 20px;
}
.after-refresh .count_sec:nth-of-type(3) h2 {
  max-width: 793px;
}
.after-refresh .count_sec:nth-of-type(3) h2 + p {
  display: none;
}
.after-refresh .count_sec:nth-of-type(3) .testi_img img {
  padding-bottom: 16px;
  margin-top: 0;
}
.after-refresh .count_sec:nth-of-type(3) .white-block > .enroll_now_main {
  padding: 0;
}
.after-refresh .count_sec:nth-of-type(3) .white-block > .enroll_now_main a {
  margin-top: 12px !important;
}
.after-refresh .count_sec:nth-of-type(3) .white-block a.button-blue-large {
  max-width: 318px !important;
}
.after-refresh .count_sec:nth-of-type(5) .fifth_red_spc {
  padding: 20px 0 42px;
}
.after-refresh .count_sec:nth-of-type(5) .testi_img.lead_img {
  margin-bottom: 16px;
}

.after-refresh .count_sec:nth-of-type(5) .testi_img.lead_img + p > b {
  font-size: 20px;
  line-height: 27px;
}
.after-refresh .count_sec:nth-of-type(6) h2 {
  max-width: 727px;
}
.after-refresh .count_sec .pattern-block {
  padding: 60px 0;
}

.after-refresh .count_sec:nth-of-type(6) .pattern-block p {
  margin-top: 12px !important;
}
.after-refresh .count_sec:nth-of-type(6) .pattern-block p:first-child {
  margin-top: 0 !important;
  font-size: 20px !important;
  line-height: 27px !important;
  font-weight: 700 !important;
}
.after-refresh .count_sec:nth-of-type(6) .fst_v.gray_color {
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #4b4b4b !important;
  padding-bottom: 12px;
}
.after-refresh .count_sec:nth-of-type(6) .Hazel {
  padding-top: 40px;
}
.after-refresh .count_sec:nth-of-type(6) .all_content {
  padding: 0;
}
.after-refresh .count_sec:nth-of-type(6) .enroll_now_main {
  margin: 40px 0 10px;
  padding: 0;
}
.after-refresh .count_sec:nth-of-type(6) .enroll_now_lite + .row1030 .col-md-12 {
  padding-bottom: 20px;
}
.after-refresh .count_sec:nth-of-type(6) .pattern-block .row1030 .col-md-12 > p:not(:last-of-type, .sub_head_examples),
.after-refresh .count_sec:nth-of-type(6) .pattern-block .row1030 .col-md-12 > em > p {
  font-style: italic !important;
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 26px !important;
  padding: 0 20px;
}
i.fa.fa-quote-left {
  left: 15px;
}
i.fa.fa-quote-right {
  margin-left: 0;
  right: 0px;
  bottom: 0;
}
.after-refresh .count_sec:nth-of-type(7) h2 {
  max-width: 736px;
  margin: 0 auto !important;
}
.after-refresh .count_sec:nth-of-type(7) .content > .col-md-4,
.after-refresh .count_sec:nth-of-type(10) .content > .col-md-4,
.after-refresh .count_sec:nth-of-type(12) .content > .col-md-4,
.after-refresh .count_sec:nth-of-type(14) .content > .col-md-4,
.after-refresh .count_sec:nth-of-type(20) .content > .col-md-4 {
  padding-left: 0;
}
.after-refresh .count_sec:nth-of-type(7) .content > .col-md-4 .image_left,
.after-refresh .count_sec:nth-of-type(10) .content > .col-md-4 .image_left .card {
  width: 100%;
  height: 100%;
}
.after-refresh .count_sec:nth-of-type(7) .seven_red_spc {
  padding-bottom: 44px;
}
.after-refresh .count_sec:nth-of-type(8) h2 {
  margin-bottom: 2px;
}
.after-refresh .count_sec:nth-of-type(8) .enroll_now_main {
  padding: 0;
}
.after-refresh .count_sec:nth-of-type(8) .enroll_now_main > a {
  margin-top: 16px !important;
}
.after-refresh .count_sec:nth-of-type(8) .all_content {
  padding-bottom: 60px;
}
.after-refresh .count_sec:nth-of-type(8) .quick_transcript_one p:nth-child(1) {
  padding: 0 20px;
}
.after-refresh .count_sec:nth-of-type(10) .content > .col-md-8 p:nth-child(4) {
  padding: 0 20px;
}
.after-refresh .count_sec:nth-of-type(13) .content > .col-md-8 p:nth-child(3) {
  padding: 0 20px;
}
.after-refresh .count_sec:nth-of-type(15) .content > .col-md-8 p:nth-child(5) {
  padding: 0 20px;
}
.after-refresh .count_sec:nth-of-type(16) .row1030 > .col-md-12:not(.aftermasterclass) > p:nth-child(1),
.after-refresh .count_sec:nth-of-type(16) .row1030 > .col-md-12:not(.aftermasterclass) > em:nth-child(2),
.after-refresh .count_sec:nth-of-type(16) .row1030 > .col-md-12:not(.aftermasterclass) > p:nth-child(3) {
  padding: 0 20px;
  display: block;
}
.after-refresh .count_sec:nth-of-type(16) .row1030 > .col-md-12:not(.aftermasterclass) > p:nth-child(4) {
  margin-bottom: 32px;
}
.after-refresh .count_sec:nth-of-type(16) .row1030 > .col-md-12:not(.aftermasterclass) > p:nth-child(4) + .new_enroll_now_btn {
  margin-bottom: 44px !important;
}
.currently_table tr:not(:first-child) {
  border-top: 1px solid #734f22;
}
.currently_table td {
  padding-top: 16px;
  padding-bottom: 16px;
  text-align: left;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #4b4b4b;
}
.currently_table tr:last-child td {
  padding-bottom: 0;
}
.currently_table .right_td {
  padding-left: 20px;
}
.currently_table th {
  background: #734f22;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
  padding: 20px;
}
.currently_table th.right_th {
  border-radius: 0px 8px 0px 0px;
  padding-left: 20px;
  border-left: 1px solid #ffffff !important;
}
.currently_table th.left_th {
  border-radius: 8px 0px 0px 0px;
}
.after-refresh .count_sec:nth-of-type(23) .content > .col-md-6.col-sm-6:not(.dividing_line) > p:nth-child(2),
.after-refresh .count_sec:nth-of-type(23) .content > .col-md-6.col-sm-6:not(.dividing_line) > p:nth-child(3) {
  padding: 0 20px;
  display: block;
}
.after-refresh .count_sec:nth-of-type(23) i.fa.fa-quote-left {
  left: 0;
}
.after-refresh .count_sec:nth-of-type(23) span.text_faa_left {
  margin: 0 !important;
}
.after-refresh .count_sec:nth-of-type(9) h2 {
  max-width: 699px;
  margin-bottom: 2px;
}
.after-refresh .count_sec:nth-of-type(9) .nine_red_spc {
  padding: 60px 0 40px;
}
.after-refresh .count_sec:nth-of-type(10) h2 {
  max-width: 661px;
  margin-bottom: 2px;
}
.after-refresh .count_sec:nth-of-type(10) .ten_red_spc {
  padding-bottom: 0;
}
.after-refresh .count_sec:nth-of-type(11) h2 {
  max-width: 804px;
  margin-bottom: 2px;
}
.after-refresh .count_sec:nth-of-type(11) .enroll_now_main {
  margin: 12px 0 0;
  padding: 0;
}
.after-refresh .count_sec:nth-of-type(12) h2 {
  max-width: 930px;
  margin-bottom: 2px;
}
.after-refresh .count_sec:nth-of-type(13) h2,
.after-refresh .count_sec:nth-of-type(15) h2 {
  max-width: 661px;
  margin-bottom: 2px;
}
.after-refresh .count_sec:nth-of-type(13) .twlv_red_spc {
  padding: 60px 0;
}

.after-refresh .count_sec .white-block {
  padding: 60px 0;
}
.after-refresh .count_sec:nth-of-type(15) .enroll_now_main {
  margin: 12px 0 0;
  padding: 0;
}
.after-refresh .count_sec:nth-of-type(16) .row1030 > .col-md-12 {
  padding-bottom: 16px;
}
.after-refresh .count_sec:nth-of-type(16) .all_content > .bottom_space_add {
  padding-bottom: 16px;
}
.after-refresh .count_sec:nth-of-type(16) h2 {
  margin-bottom: 2px;
}
.after-refresh .count_sec:nth-of-type(17) h2 {
  margin-bottom: 2px;
}
.after-refresh .count_sec:nth-of-type(17) ul {
  padding: 0;
}
.after-refresh .count_sec:nth-of-type(17) .white-block {
  padding-bottom: 44px;
}
.after-refresh .count_sec:nth-of-type(17) .white-block .new_enroll_now_btn {
  margin-top: 32px !important;
}
.after-refresh .count_sec:nth-of-type(17) .white-block .image_left.training_video_touch {
  padding-top: 72px;
}
.after-refresh .count_sec:nth-of-type(17) p.dash_logo_text {
  position: relative;
  padding-left: 12px;
  margin-left: 10px;
  margin-bottom: 5px;
}
p.dash_logo_text::before {
  position: absolute;
  content: "";
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #4b4b4b;
  left: 0;
  top: 11px;
}
p.dash_logo_text > img {
  display: none;
}
.after-refresh .count_sec:nth-of-type(18) h2 {
  margin-bottom: 2px;
}
.after-refresh .count_sec:nth-of-type(18) ul {
  padding: 0;
}
.after-refresh .count_sec:nth-of-type(18) .white-block {
  padding-bottom: 44px;
}
.after-refresh .count_sec:nth-of-type(19) h2 {
  margin-bottom: 2px;
}
.after-refresh .count_sec:nth-of-type(20) .pattern-block {
  padding: 20px 0;
}
.after-refresh .count_sec:nth-of-type(20) h2 {
  margin-bottom: 2px;
}
.after-refresh .count_sec:nth-of-type(21) h2 {
  margin-bottom: 2px;
}
.after-refresh .count_sec:nth-of-type(21) .enroll_now_main {
  padding: 0;
}
.after-refresh .count_sec:nth-of-type(21) .enroll_now_main > a {
  margin-top: 16px !important;
}
.after-refresh .count_sec:nth-of-type(22) h2 {
  margin-bottom: 2px;
}
.after-refresh .count_sec:nth-of-type(23) h2 {
  max-width: 638px;
  margin-bottom: 2px;
}
.after-refresh .count_sec:nth-of-type(23) .enroll_now_main {
  padding: 0;
}
.after-refresh .count_sec:nth-of-type(23) .enroll_now_main > a {
  margin-top: 32px !important;
}

.after-refresh .count_sec:nth-of-type(25) h2 {
  margin-bottom: 2px;
}
body .after-refresh .count_sec:nth-of-type(25) .enroll_now_main {
  padding: 0;
}
body .after-refresh .count_sec:nth-of-type(25) .enroll_now_main > a {
  margin-top: 22px !important;
}
.all_content > .bottom_space_add {
  padding-bottom: 50px;
}
.after-refresh .count_sec:nth-of-type(25) .quick_transcript > p:nth-child(1) {
  padding: 0 20px;
}
.much_cheaper_guarantee {
  max-width: 236px !important;
  padding-top: 60px !important;
}
.after-refresh .count_sec:nth-of-type(6) .pattern-block .row1030 .col-md-12 > p:not(.sub_head_examples):nth-child(4) span:nth-child(1),
.after-refresh .count_sec:nth-of-type(8) .quick_transcript_one p:nth-child(2) span:nth-child(1),
.after-refresh .count_sec:nth-of-type(10) .content > .col-md-8 p:nth-child(5) span:nth-child(1),
.after-refresh .count_sec:nth-of-type(13) .content > .col-md-8 p:nth-child(4) span:nth-child(1),
.after-refresh .count_sec:nth-of-type(15) .content > .col-md-8 p:nth-child(6) span:nth-child(1),
.after-refresh .count_sec:nth-of-type(16) .row1030 > .col-md-12:not(.aftermasterclass) > p:nth-child(4) span:nth-child(1),
.after-refresh .count_sec:nth-of-type(23) .content > .col-md-6.col-sm-6:not(.dividing_line) > p:nth-child(4) span:nth-child(1),
.after-refresh .count_sec:nth-of-type(25) .quick_transcript > p:nth-child(2) span:nth-child(1) {
  font-weight: 700;
  display: block;
  font-size: 16px;
  line-height: 22px;
}

/* */
button.new_enroll_now_btn,
.white-block a.button-blue-large,
.pattern-block a.button-blue-large {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #193973;
  box-shadow: 5px 5px 10px rgba(39, 32, 32, 0.8);
  border-radius: 10px;
  max-width: 181px;
  width: 100%;
  height: 62px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0 auto !important;
  outline: unset;
  border: unset;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
}
#myHeaderr a.blue-large:hover,
#below_video_text .button-header a:hover,
button.new_enroll_now_btn:hover {
  box-shadow: unset;
}
/*special_gift_bgr */
.special_gift_bgr {
  background: #dde8f1;
}
.special_gift_box {
  max-width: 800px;
  text-align: center;
  margin: 0 auto;
  padding: 0 0 50px;
}
body .want-to-obey .special_gift_box h2 {
  color: #193973 !important;
  margin-bottom: 16px !important;
}
body .special_gift_box p {
  font-size: 20px !important;
  line-height: 27px !important;
  margin: 0 !important;
}
body .special_gift_box p + p {
  margin-top: 16px !important;
  display: flex;
  align-items: center;
  justify-content: center;
}
body .special_gift_box p > svg {
  margin: 0 6px 0 8px;
}
body .special_gift_box p span {
  color: rgba(115, 79, 34, 1) !important;
  font-weight: 700;
}
.white-block p:first-child {
  margin-top: unset !important;
}
/*first_visit_block */
.first_visit_block .descr_box {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.first_visit_block .descr_box .img_wrap {
  border-radius: 16px;
  max-width: 338px;
  width: 100%;
  margin-left: 23px;
}
.first_visit_block .descr_box p {
  line-height: 24px !important;
  margin: 0 !important;
}
.first_visit_block .descr_box p + p {
  margin-top: 16px !important;
}
.first_visit_block button.watch_free_workshop_btn {
  margin: 40px auto 0 !important;
  max-width: 252px;
}
/*reviews_bgr */
.after-refresh > .reviews_bgr {
  margin-top: -22px;
  position: relative;
  z-index: 1;
}
.reviews_bgr {
  background: #dde8f1;
}
.ten_week_bgr .reviews_bgr {
  border-radius: 16px;
  margin-top: 60px;
}
.reviews_wrap {
  background: rgba(255, 255, 255, 0.6);
  border: 2px solid #193973;
  border-radius: 16px;
  padding: 40px;
  max-width: 1000px;
  margin: 0 auto !important;
}
.reviews_wrap.is_true {
  background: #dde8f1;
}
body .want-to-obey .reviews_wrap h3 {
  font-weight: 700 !important;
  font-size: 20px !important;
  line-height: 27px !important;
  color: #193973 !important;
  margin: 0 auto 12px !important;
  max-width: 600px;
}
.reviews_wrap > p {
  font-weight: 700 !important;
  font-size: 16px !important;
  line-height: 26px !important;
  color: #193973 !important;
  margin: 8px 0 0;
  text-align: center;
}
.reviews_wrap .reviews_stars {
  display: flex;
  align-items: center;
  justify-content: center;
}
.reviews_wrap .reviews_stars > span {
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #193973;
  margin: 0 0 0 4px;
}
.reviews_wrap .reviews_stars .star_wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}
.reviews_wrap .reviews_stars .star_wrap span + span {
  margin-left: 4px;
}
.reviews_wrap .reviews_stars .star_wrap span {
  width: 24px;
  height: 24px;
  background: url(https://conversionratestore.github.io/projects/knineti/img/new_star.svg) no-repeat center center;
}
/*ten_week_bgr */
.ten_week_bgr {
  background: #ffffff;
}
.ten_week_bgr .ten_week_box {
  width: 85%;
  max-width: 1000px;
  margin: 0 auto 60px;
}
.ten_week_bgr .ten_week_box h2 {
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #ffffff !important;
  background: #734f22;
  border-radius: 16px;
  padding: 20px;
  margin: 0 0 20px;
}
.all_inform_wrap {
  max-width: 800px;
  margin: 0 auto;
}
body .want-to-obey .all_inform_wrap > h3 {
  font-weight: 700 !important;
  font-size: 32px !important;
  line-height: 40px !important;
  color: #193973 !important;
  margin: 40px 0 20px !important;
}
body .all_inform_wrap > p {
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 26px !important;
  color: #4b4b4b !important;
  margin: 0;
}
body .all_inform_wrap > p.color_var {
  font-weight: 700 !important;
  font-size: 20px !important;
  line-height: 27px !important;
  color: #193973 !important;
}
body .all_inform_wrap > p + p {
  margin-top: 16px;
}
.all_inform_wrap > span {
  display: block;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  color: #4b4b4b;
  margin: 0 0 16px;
  text-align: center;
}
.all_inform_wrap .img_wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 24px;
}
.all_inform_wrap .img_wrap img:nth-child(1) {
  width: 335px;
}
.all_inform_wrap .img_wrap img:nth-child(2) {
  width: 331px;
  max-height: 102px;
}
.all_inform_wrap .img_wrap img + img {
  margin-left: 53px;
}
.all_inform_wrap .text_descr {
  border: 2px solid #dde8f1;
  border-radius: 16px;
  background: #ffffff;
  padding: 20px;
  margin: 16px 0 0;
}
.all_inform_wrap .text_descr p:nth-child(1) {
  font-weight: 700 !important;
  font-size: 20px !important;
  line-height: 27px !important;
  color: #734f22 !important;
  margin: 0 0 12px !important;
}
.all_inform_wrap .text_descr p:nth-child(2) {
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 26px !important;
  color: #4b4b4b !important;
  margin: 0 !important;
}
/*time_offer_box */
.time_offer_box {
  margin-top: 40px;
}
.time_offer_box .heder_wrap {
  border: 2px solid #734f22;
  border-bottom: 0;
  border-radius: 16px 16px 0 0;
  background: #193973;
  padding: 20px;
}
.time_offer_box .heder_wrap p {
  font-weight: 700 !important;
  font-size: 20px !important;
  line-height: 27px !important;
  text-align: center;
  color: #ffffff !important;
  margin: 0 !important;
}
.time_offer_box .body_wrap {
  border: 2px solid #734f22;
  border-top: 0;
  border-radius: 0 0 16px 16px;
  background: #ffffff;
  padding: 20px;
  text-align: center;
}
.price_wrap p:nth-child(1) {
  font-weight: 700 !important;
  font-size: 20px !important;
  line-height: 27px !important;
  color: #734f22 !important;
  margin: 0 !important;
}
.price_wrap p:nth-child(2) {
  font-weight: 400 !important;
  font-size: 32px !important;
  line-height: 40px !important;
  color: #193973 !important;
  margin: 8px 0 !important;
}
.price_wrap p:nth-child(3) {
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 26px !important;
  color: #193973 !important;
  margin: 0 !important;
}
.time_offer_box .body_wrap button.new_enroll_now_btn {
  margin: 20px auto 0 !important;
}
button.new_enroll_now_btn svg {
  margin-left: 7.5px;
}
.time_offer_box .body_wrap > p {
  max-width: 300px;
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 26px !important;
  color: #ffffff !important;
  margin: 16px auto 0;
  background: #794e15;
  border-radius: 4px;
  padding: 6px 18.5px;
}
.img_guarantee {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 303px;
  margin: 20px auto 0;
}
.img_guarantee img {
  max-width: 75px;
}
.img_guarantee span {
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  color: #734f22;
  margin-left: 12px;
  text-align: left;
}
/*new_accardion */
li.new_accardion_block {
  list-style-type: none;
  position: relative;
  margin: 0 !important;
  border: 2px solid #dde8f1;
  border-radius: 16px;
}
li.new_accardion_block + li {
  margin-top: 16px !important;
}
.new_accardion_link {
  border-radius: 14px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: #dde8f1;
  padding: 20px;
  cursor: pointer;
}
.new_accardion_link p {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
}
.new_accardion_link p span:nth-child(1) {
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #734f22 !important;
}
.new_accardion_link p span:nth-child(2) {
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #193973;
  margin-top: 1px;
}
.new_accardion_lists {
  border-radius: 14px;
  border-top: unset;
  display: none;
  background: #ffffff;
  padding: 8px 16px 16px;
}
.new_accardion_lists p {
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #4b4b4b !important;
  margin: 0;
}
.new_accardion_lists p + p {
  margin-top: 16px;
}
.new_accardion_link > span {
  position: relative;
  background: #ffffff;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-left: 10px;
  padding: 12px;
}

.new_accardion_link > span::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background: url(https://conversionratestore.github.io/projects/knineti/img/arrow_accardion.svg) no-repeat center center;
  top: 0;
  left: 0;
  transition: all 0.3s ease;
  transform: rotate(180deg);
}
.new_accardion_link.active span::before {
  transform: rotate(0deg);
}
.new_accardion_link.active {
}
.ten_week_bgr li.new_accardion_block:nth-child(1) .new_accardion_lists {
  display: block;
}
/*question_first_bgr */
.question_first_bgr,
.question_second_bgr {
  background: #ffffff;
  padding: 60px 0;
}
.question_first_wrap,
.question_second_wrap {
  max-width: 800px;
  margin: 0 auto;
}
body .question_first_wrap h2,
body .question_second_wrap h2 {
  font-weight: 700 !important;
  font-size: 32px !important;
  line-height: 40px !important;
  color: #734f22 !important;
  margin: 0 auto 40px auto !important;
  width: 100% !important;
}
body .question_second_wrap h2 {
  max-width: 704px !important;
}
.question_first_wrap button.new_enroll_now_btn,
.question_second_wrap button.new_enroll_now_btn {
  margin: 40px auto 0 auto !important;
}
.question_first_wrap li.new_accardion_block,
.question_second_wrap li.new_accardion_block {
  background: #dde8f1;
}
.question_first_wrap .new_accardion_link,
.question_second_wrap .new_accardion_link {
  border-radius: unset;
  padding: unset;
  background: unset;
  padding: 20px;
}
.question_first_wrap .new_accardion_link p,
.question_second_wrap .new_accardion_link p {
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #193973 !important;
  margin: 0;
}
.question_first_wrap .new_accardion_lists,
.question_second_wrap .new_accardion_lists {
  border-radius: unset;
  background: unset;
  padding: 0 20px 20px;
}
.question_first_wrap .new_accardion_lists > div,
.question_second_wrap .new_accardion_lists > div {
  border-top: 2px solid #ffffff;
  padding-top: 15px;
}
/*learn_more_scroll_btn */
.learn_more_bgr {
  background: #dde8f1;
  padding: 10px 0 20px;
}
.learn_more_scroll_btn {
  background: #734f22;
  box-shadow: 5px 5px 10px rgba(39, 32, 32, 0.8);
  border-radius: 10px;
  max-width: 384px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 21px;
  cursor: pointer;
}
.learn_more_scroll_btn > div {
  display: flex;
  flex-direction: column;
}
.learn_more_scroll_btn > div svg {
  animation: arrow-down 2s infinite;
}
.learn_more_scroll_btn > div svg:nth-child(2) {
  animation-delay: -0.2s;
}
.learn_more_scroll_btn > div svg:nth-child(1) {
  animation-delay: -0.6s;
}
.learn_more_scroll_btn span {
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0 5px;
}
@keyframes arrow-down {
  0% {
    opacity: 0;
    transform: translateY(-0px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(0px);
  }
}
.mini_text_guarantee {
  margin: 20px auto 0;
  max-width: 313px;
  text-align: center;
}
.mini_text_guarantee span {
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  color: #193973;
}
@media (max-width: 768px) {
  #myHeaderr .box_btn .button_space{
    margin: 0 !important;
  }
  #myHeaderr .box_btn{
    padding: 0 !important;
  }
  #myHeaderr .top_menu_box > .row > .text_btn_one{
    margin-left: 0;
    margin-top: 8px;
  }
  #myHeaderr .top_menu_box > .row{
    flex-direction: column;
  }
  #myHeaderr .top_menu_box {
    max-width: 263px !important;
  }
  #myCarousel .item_mc {
    height: 240px;
  }
  .learn_more_scroll_btn span{
    font-size: 13px;
    line-height: 18px;
  }
  .learn_more_scroll_btn{
    padding: 14.5px 9px;
    max-width: 335px;
  }
  .content .page h2{
    font-size: 20px !important;
    line-height: 27px !important;
  }
  .top_space_add{
    padding-top: 20px;
  }
  .paw_icons.bulletpointspan ul li {
    margin-bottom: 16px;
  }
  .paw_icons.bulletpointspan {
    margin-top: -15px !important;
  }
  .paw_icons.bulletpointspan p:first-child{
    margin-top: 0 !important;
  }
  .paw_icons.sec_paw_icons.bulletpointspan ul{
    padding: 0;
  }
  .image_left img{
    padding: 0 !important;
  }
  .after-refresh .count_sec:nth-of-type(1) .all_content .content > .col-md-4{
    padding: 0 15px 32px !important;
  }
  .trd_red_spc{
    margin: 0 !important;
  }
  .ten_week_bgr .ten_week_box{
    width: 100%;
    margin: 0 auto 40px;
  }
  .ten_week_bgr .ten_week_box h2{
    padding: 12px 16px;
    margin-bottom: 16px;
    border-radius: 0;
  }
}

    </style>
    `

    let arrQuestion = {
      1: [
        `1. If I purchase the masterclass, how long do I have access to it? Can I revisit previous classes?`,
        `<p>There is no time limit for this - you will have access to all the classes in the masterclass for as long as you want and can complete them at your own pace.</p>
        <p>The way the masterclass is structured is that you get access to the first week's class, associated videos and 3 bonus classes immediately after enrolling. After that, a new class and associated training videos are unlocked for you every week for the following 9 weeks.</p>
        <p>Once the classes for all 10 weeks have been unlocked, you will have access to them indefinitely and can watch and re-watch them at any time.</p>`,
      ],
      2: [
        `2. I want to start the course later. Is It possible to buy today but start later?`,
        `<p>No worries! You can snag the special deal today and hold off on getting started until later. Just give us a shout after you buy to let us know you want to delay the start of your dog's training course.</p>`,
      ],
      3: [
        `3. Does the masterclass work better for puppies or adult dogs?`,
        `<p>The masterclass works equally well both for puppies and adult dogs. Puppies as young as 8 weeks and adult dogs as old as 13 years have been successfully trained using the masterclass.</p>`,
      ],
      4: [
        `4. Can I use the program to train multiple dogs?`,
        `<p>Absolutely! Once you've got the course, you're set for life. The knowledge inside is yours to use as much as you want, whether you're training 2 dogs or 20. So you can keep using the Total Transformation Masterclass to train all your furry friends now and in future, until they're just as well-behaved as a service dog.</p>`,
      ],
      5: [
        `5. I have a Yorkshire terrier / Siberian husky / Chihuahua / pit bull / [insert dog breed]. Will the masterclass work for my dog?`,
        `<p>The masterclass will work for your dog regardless of its breed.</p>
        <p>Some owners of a dog breed generally not considered suitable for being a service dog – breeds like huskies or pit bulls – think that these techniques won’t work for them, but that’s actually not the case.  These techniques are rooted in scientific research on animal behavior, and therefore work for ALL dog breeds.</p>`,
      ],
      6: [
        `6. I have a rescue dog with a number of behavioral problems. Will the masterclass help my dog?`,
        `<p>Absolutely. In fact, making sure that rescue dogs get a second chance with a new family is one of the reasons why we created this masterclass.</p>
        <p>It’s also why we donate a percentage of our income FROM this masterclass to rescue shelters and other charities.</p>
        <p>Many of our previous participants actually have rescue dogs whom they have trained successfully using what they had learned from the masterclass.</p>`,
      ],
      7: [
        `7. Are there any dog owners who would NOT benefit from this masterclass?`,
        `<p>You won’t benefit from the masterclass if you fall into one of these 2 categories:</p>
        <p>a) You don’t have the time right now to spend around 10 - 15 minutes per day training your dog.</p>
        <p>b) You are looking to have your dog become legally certified as a service dog. This program is not about certifying your dog to become a service dog - instead, it’s about how to get your dog to become as calm, obedient, and well-behaved as a service dog.</p>
        <p>So if you fall into one of these 2 categories, this masterclass might not be for you.</p>
        <p>If you have already signed up and would like a refund, please contact us.</p>`,
      ],
      8: [`8. Do I need to travel somewhere to attend the masterclass?`, `<p>No - this is an online masterclass, so you’ll be attending it from home.</p>`],
      9: [
        `9. Is the masterclass open to non-U.S. residents?`,
        `<p>Absolutely, it’s available worldwide. We actually have had participants from 42 different countries outside the U.S. (Canada, United Kingdom, Australia, South Africa, New Zealand, Singapore, Germany, Mexico, India, Israel, Brazil, Japan, South Korea, etc.)</p>`,
      ],
      10: [
        `10. What if I can’t make the time to attend a particular class?`,
        `<p>The classes are not live - they are recorded and saved on our private members only website. This means you can watch them whenever is convenient for you.</p>
        <p>The Q&A calls are live conference calls. If you can’t attend the live Q&A call on a particular week, but still have questions for us, simply email your questions to us and we’ll answer them during the Q&A call.</p>
        <p>We'll upload a recording of the Q&A call, so you can listen to our answers at your convenience.</p>`,
      ],
      11: [
        `11. Can you train my dog to become a certified service dog / therapy dog?`,
        `<p>Unfortunately, that’s not a service we provide at this time.</p>
        <p>Our Total Transformation Masterclass is designed to help regular dog owners have dogs that are as well-behaved as service dogs, using the exact same training techniques that service dog trainers use.</p>
        <p>However, we do not have any programs that will help your dog become a legally certified service dog.</p>`,
      ],
      12: [
        `12. What if I have already taught my dog using verbal commands like sit, stay, etc.?`,
        `<p></p>
        <p></p>
        <p></p>`,
      ],
      13: [
        `13. My dog has a specific behavioral problem. Will the masterclass help me fix this problem?`,
        `<p>The masterclass has techniques designed to fix ALL the common behavioral problems that most dogs have - housebreaking issues, barking, pulling on leash, not coming when called, jumping, chewing, nipping or biting, aggression, and a lot more.</p>
        <p>If your dog has a really uncommon problem that is not addressed in the masterclass, you can always ask our experts about it during our Q&A calls and they’ll tell you how to apply the techniques in the masterclass to solve that specific problem.</p>`,
      ],
      14: [
        `14. Will I need to constantly give treats to my dog throughout their lives in order to get them to listen to me?`,
        `<p>No, the masterclass will teach you how to wean your dog away from treats so that they continue to listen to you even without any food bribes. 🙂</p>`,
      ],
    }
    let arrInfo = {
      1: [
        `<span>Weeks 1 and 2</span><span>How to get your dog's undivided attention</span>`,
        `<p>During week 1, you will establish the foundation for training your dog to become as calm as a service dog. You will learn the 6-step process that service dog trainers follow and how to slowly wean your dog away from treats. The focus will be on teaching your dog the two fundamental commands - WATCH and TOUCH, which are crucial for building trust and strengthening the human-animal bond. In week 2, you will continue to solidify the TOUCH and WATCH commands, but in a different environment - outside your home. This will help you and your dog deal with a whole different set of issues, especially in distracting areas such as dog parks.</p>`,
      ],
      2: [
        `<span>Week 3:</span><span>How to get your dog to sit still in any situation</span>`,
        `<p>Even if your dog already knows how to sit, learn the special way service dog trainers train dogs to SIT which leads to far better and longer-lasting results.</p>`,
      ],
      3: [
        `<span>Week 4:</span><span>How to stop your dog from pulling on the leash</span>`,
        `<p>Learn how to train your dog to walk calmly by your side, no matter how fast or slow you go. Also, you'll learn the SAY HELLO command which allows your dog to calmly greet other dogs or people, only when you give permission.</p>`,
      ],
      4: [
        `<span>Week 5:</span><span>How to read your dog like a book</span>`,
        `<p>Did you know that a wagging tail doesn't always mean your dog is happy? Avoid common mistakes likes these and learn how to read your dog's body language so you can train them more effectively at times when they are most receptive to your lessons.</p>`,
      ],
      5: [
        `<span>Week 6:</span><span>How to stop your dog from barking and jumping</span>`,
        `<p>Discover how to stop your dog from barking and jumping at your guests by giving them a job to do (like going to bed). </p>`,
      ],
      6: [
        `<span>Week 7:</span><span>How to stop your dog from being aggressive and destroying your home </span>`,
        `<p>Learn how to stop destructive chewing and 'resource guarding' where a dog becomes aggressive when someone takes their toys or food.</p>`,
      ],
      7: [
        `<span>Week 8:</span><span>How to get your dog to come to you whenever you call them</span>`,
        `<p>We'll teach you some cool games to get your dog to come running when you call their name, even if they're busy chasing a squirrel.</p>`,
      ],
      8: [
        `<span>Week 9:</span><span>How to take control of impulsive behavior</span>`,
        `<p>Train your furry friend to be calm and still in any situation using advanced obedience and impulse control techniques known only to service dog trainers.</p>`,
      ],
      9: [
        `<span>Week 10:</span><span>How to get your dog to behave well in public</span>`,
        `<p>Learn to handle 'leash reactivity' and aggression towards other dogs using WATCH, TOUCH and other techniques. Discover how to have your dog automatically sit when you stop walking, as well as stop at curbs to wait for instructions before crossing a road – which can save your dog's life.</p>`,
      ],
    }

    let reviewsBox = /*html */ `
        <div class="reviews_bgr">
            <div class="reviews_wrap">
                <h3>50,000+ dog owners have already trained their dogs with The Total Transformation Masterclass</h3>
                <div class="reviews_stars">
                    <div class="star_wrap">
                    <span class="star"></span>
                    <span class="star"></span>
                    <span class="star"></span>
                    <span class="star"></span>
                    <span class="star"></span>
                    </div>
                    <span>4.9</span>
                </div>
                <p>1597 Sitejabber & Trustpilot reviews</p>
            </div>  
        </div>
    `

    let tenWeekBox = /*html */ `
        <div class="ten_week_bgr">
            <div class="ten_week_box">
                <h2><span>10-week dog training program</span></h2>
                <div class="all_inform_wrap">
                    <p class="color_var">Get the skills and confidence you need to train your <span class="dog_age_var">new puppy</span> to be as calm and obedient as a service dog – without shedding thousands for an expensive trainer</p>
                    <p>Ditch those basic SIT and STAY commands from the internet that don’t work.</p>
                    <p>
                    Take a deep dive into service dog training secrets to stop your naughty best friend from barking, jumping, and pulling on their leash - and become a calm, obedient
                    companion that comes to you whenever you call.
                    </p>
                    <h3>Here’s what you’ll learn in this 10-week masterclass:</h3>
                    <span>Based on research conducted at:</span>
                    <div class="img_wrap">
                        <img src="https://conversionratestore.github.io/projects/knineti/img/harvard_img.png" alt="Harvard" />
                        <img src="https://conversionratestore.github.io/projects/knineti/img/stanford_img.png" alt="Stanford" />
                    </div>
                    <ul class="new_accardion"></ul>
                    <div class="text_descr">
                        <p>Get help every step of the way</p>
                        <p>Jump on a LIVE call every week with our trainers to get your questions answered.</p>
                    </div>
                </div>
                <div class="time_offer_box">
                    <div class="heder_wrap">
                        <p>Get LIFETIME ACCESS to the online 10-week Total Transformation Masterclass</p>
                    </div>
                    <div class="body_wrap">
                      <div class="price_wrap">
                          <p>Limited time offer:</p>
                          <p><b>Just</b> $497 <b>$297 (save $200)</b></p>
                          <p>or $99/month, 3 installments</p>
                      </div>
                      <button class="new_enroll_now_btn">Enroll NOW <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.23984 8.23356L4.47318 5.00023L1.23984 1.76689C0.914844 1.44189 0.914844 0.916894 1.23984 0.591895C1.56484 0.266895 2.08984 0.266895 2.41484 0.591895L6.23984 4.41689C6.56484 4.74189 6.56484 5.26689 6.23984 5.59189L2.41484 9.41689C2.08984 9.74189 1.56484 9.74189 1.23984 9.41689C0.923177 9.09189 0.914844 8.55856 1.23984 8.23356Z" fill="white"/>
                      </svg></button>
                      <p class="date_ends_text">This offer ends on <span>January 14, 2023</span></p>
                      <div class="img_guarantee">
                          <img src="https://conversionratestore.github.io/projects/knineti/img/guarantee_img.png" alt="guarantee" />
                          <span>Try risk-free with our unconditional 90-day money back guarantee</span>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      `

    function setList(count, title, text, dataSelector) {
      return `
                <li class="new_accardion_block" data-visability='${count}'>
                    <div class="new_accardion_link" data-selector="${dataSelector}">
                        <p>${title}</p>
                        <span></span>
                    </div>
                    <div class="new_accardion_lists" data-visability-open='${count}'>
                        <div>
                            ${text}
                        </div>
                    </div>
                </li>
        `
    }

    let specialGift = /*html */ `
        <div class="special_gift_bgr">
      <div class="special_gift_box">
        <h2>Eliminate your dog's behavior problems today!</h2>
        <p>Click the play button above to watch your free workshop.</p>
        <p>
          Get a
          <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.375 17.6429C1.375 18.4062 1.97656 19 2.75 19H9.625V12.2143H1.375V17.6429ZM12.375 19H19.25C19.9805 19 20.625 18.4062 20.625 17.6429V12.2143H12.375V19ZM20.625 5.42857H18.7773C19.0781 4.91964 19.25 4.3683 19.25 3.73214C19.25 1.69643 17.5312 0 15.4688 0C13.6641 0 12.5039 0.933036 11.043 2.92634C9.53906 0.933036 8.37891 0 6.61719 0C4.51172 0 2.83594 1.69643 2.83594 3.73214C2.83594 4.3683 2.96484 4.91964 3.26562 5.42857H1.375C0.601562 5.42857 0 6.06473 0 6.78571V10.1786C0 10.5603 0.300781 10.8571 0.6875 10.8571H21.3125C21.6562 10.8571 22 10.5603 22 10.1786V6.78571C22 6.06473 21.3555 5.42857 20.625 5.42857ZM6.57422 5.42857C5.62891 5.42857 4.85547 4.70759 4.85547 3.73214C4.85547 2.79911 5.62891 2.03571 6.57422 2.03571C7.43359 2.03571 8.07812 2.20536 10.3125 5.42857H6.57422ZM15.4688 5.42857H11.7305C13.9648 2.20536 14.5664 2.03571 15.4688 2.03571C16.4141 2.03571 17.1875 2.79911 17.1875 3.73214C17.1875 4.70759 16.4141 5.42857 15.4688 5.42857Z"
              fill="#734F22"
            />
          </svg>
          <span>SPECIAL GIFT</span> at the end of the workshop!
        </p>
      </div>
    </div>`

    let firstVisitNewBlock = /*html */ `
        <div class="first_visit_block">
      <div class="descr_box">
        <div>
          <p>
            <b>YouTube and $9.99 dog training books</b> will make you think that verbal commands such as "sit", "stay", etc. are all that you need.... but if you follow that advice you
            will be making one of the <b>BIGGEST mistakes</b> in dog training.
          </p>
          <p>
            <b>The above workshop will reveal</b> the real way to get service-dog levels of obedience from your dog - as taught by REAL & nationally recognized service-dog training
            professionals.
          </p>
          <p>
            Note: This workshop is not about helping your dog become an officially certified service dog. Rather, this workshop will help "normal" dogs like yours become as calm
            and well-trained as a service dog.
          </p>
        </div>
        <div class="img_wrap">
          <img src="https://conversionratestore.github.io/projects/knineti/img/first_time_img.png" alt="girl and dog" />
        </div>
      </div>
      <button class="new_enroll_now_btn watch_free_workshop_btn">Watch free workshop</button>
    </div>
    `

    document.head.insertAdjacentHTML("beforeend", styleFreeWorkShop)

    //is the first time
    if (!localStorage.getItem("firstTime")) {
      localStorage.setItem("firstTime", true)
    }

    // is NOT the first time
    window.onunload = unloadPage
    function unloadPage() {
      console.log("unload event detected!")

      if (localStorage.getItem("firstTime") && !localStorage.getItem("notFirstTime")) {
        localStorage.setItem("notFirstTime", true)
      }
    }
    // Step 1
    // src=tpst and it’s the first time the user is visiting the page ///////////////////////////////////
    document.querySelectorAll(".want-to-obey .count_sec")[0].insertAdjacentHTML("beforebegin", specialGift)
    document.querySelectorAll(".want-to-obey .count_sec")[0].querySelector("h2").textContent =
      "There is a reason why service dogs always form extraordinarily strong bonds with their human partners..."
    document.querySelectorAll(".want-to-obey .count_sec")[0].querySelector("h2").insertAdjacentHTML("afterend", firstVisitNewBlock)

    document.querySelectorAll(".watch_free_workshop_btn")?.forEach((el) => {
      el.addEventListener("click", () => {
        scrollToVideo(el)
      })
    })

    // scrollToVideo
    function scrollToVideo(el) {
      console.log(`scrollToVideo`)

      if (document.querySelector(".flowplayer.is-paused .fp-ui")) {
        if (!document.querySelector("video")) {
          document.querySelector(".flowplayer.is-paused .fp-ui").scrollIntoView({ block: "center", behavior: "smooth" })

          document.querySelector(".flowplayer.is-paused .fp-ui").click()
        } else {
          if (document.querySelector("video").paused) {
            document.querySelector(".flowplayer.is-paused .fp-ui").scrollIntoView({ block: "center", behavior: "smooth" })
            document.querySelector(".flowplayer.is-paused .fp-ui").click()
          }
        }
      }

      if (document.querySelector("video")) {
        document.querySelector("video").scrollIntoView({ block: "center", behavior: "smooth" })
      }
    }
    // Step 2
    // ///////////////////////////////////////////////////////////////////////////////
    document.querySelectorAll(".after-refresh section.count_sec")[0]?.insertAdjacentHTML(
      "beforebegin",
      `<div class="learn_more_bgr"><div class="learn_more_scroll_btn">
      <div>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            opacity="0.5"
            d="M7.88542 0.24375L4.65208 3.47708L1.41875 0.24375C1.09375 -0.08125 0.56875 -0.08125 0.24375 0.24375C-0.08125 0.56875 -0.08125 1.09375 0.24375 1.41875L4.06875 5.24375C4.39375 5.56875 4.91875 5.56875 5.24375 5.24375L9.06875 1.41875C9.39375 1.09375 9.39375 0.56875 9.06875 0.24375C8.74375 -0.0729167 8.21042 -0.08125 7.88542 0.24375Z"
            fill="white"
          />
        </svg>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.88542 0.24375L4.65208 3.47708L1.41875 0.24375C1.09375 -0.08125 0.56875 -0.08125 0.24375 0.24375C-0.08125 0.56875 -0.08125 1.09375 0.24375 1.41875L4.06875 5.24375C4.39375 5.56875 4.91875 5.56875 5.24375 5.24375L9.06875 1.41875C9.39375 1.09375 9.39375 0.56875 9.06875 0.24375C8.74375 -0.0729167 8.21042 -0.08125 7.88542 0.24375Z"
            fill="white"
          />
        </svg>
      </div>
      <span>learn more about our special offer</span>
      <div>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            opacity="0.5"
            d="M7.88542 0.24375L4.65208 3.47708L1.41875 0.24375C1.09375 -0.08125 0.56875 -0.08125 0.24375 0.24375C-0.08125 0.56875 -0.08125 1.09375 0.24375 1.41875L4.06875 5.24375C4.39375 5.56875 4.91875 5.56875 5.24375 5.24375L9.06875 1.41875C9.39375 1.09375 9.39375 0.56875 9.06875 0.24375C8.74375 -0.0729167 8.21042 -0.08125 7.88542 0.24375Z"
            fill="white"
          />
        </svg>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.88542 0.24375L4.65208 3.47708L1.41875 0.24375C1.09375 -0.08125 0.56875 -0.08125 0.24375 0.24375C-0.08125 0.56875 -0.08125 1.09375 0.24375 1.41875L4.06875 5.24375C4.39375 5.56875 4.91875 5.56875 5.24375 5.24375L9.06875 1.41875C9.39375 1.09375 9.39375 0.56875 9.06875 0.24375C8.74375 -0.0729167 8.21042 -0.08125 7.88542 0.24375Z"
            fill="white"
          />
        </svg>
      </div>
    </div></div>`
    )
    document.querySelectorAll(".after-refresh section.count_sec")[1]?.insertAdjacentHTML("afterend", tenWeekBox)
    if (document.querySelector(".ten_week_bgr")) {
      document.querySelector(".ten_week_bgr").after(document.querySelectorAll(".after-refresh section.count_sec")[18])
      document.querySelector(".time_offer_box")?.insertAdjacentHTML("afterend", reviewsBox)
      document.querySelector(".ten_week_bgr .reviews_wrap").classList.add("is_true")

      document.querySelector(".time_offer_box .body_wrap button.new_enroll_now_btn").addEventListener("click", () => {
        document.querySelector(".Breed-Specific.count_sec .enroll_now_main .button-blue-large.showModal.grab_butn.enroll_now_btn.dsk_ntn_onen").click()
      })
    }

    if (document.querySelector(".learn_more_scroll_btn")) {
      document.querySelector(".learn_more_scroll_btn").addEventListener("click", () => {
        const headerOffset = 80
        const elementPosition = document.querySelector(".ten_week_bgr").getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      })
    }

    document.querySelectorAll(".after-refresh section.count_sec")[3]?.insertAdjacentHTML(
      "beforebegin",
      `<div class="question_first_bgr"><div class="question_first_wrap"><h2>Have a question? Reach out to us or find some answers below</h2><ol class="question_accardion"></ol><button class="new_enroll_now_btn">Enroll NOW <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.23984 8.23356L4.47318 5.00023L1.23984 1.76689C0.914844 1.44189 0.914844 0.916894 1.23984 0.591895C1.56484 0.266895 2.08984 0.266895 2.41484 0.591895L6.23984 4.41689C6.56484 4.74189 6.56484 5.26689 6.23984 5.59189L2.41484 9.41689C2.08984 9.74189 1.56484 9.74189 1.23984 9.41689C0.923177 9.09189 0.914844 8.55856 1.23984 8.23356Z" fill="white"/>
                      </svg></button></div></div>`
    )

    document.querySelectorAll(".after-refresh section.count_sec")[25]?.insertAdjacentHTML(
      "afterend",
      `<div class="question_second_bgr"><div class="question_second_wrap"><h2>Our best customers are those who ask the most questions. Find answers below </h2><ol class="question_accardion"></ol><button class="new_enroll_now_btn">Enroll NOW <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.23984 8.23356L4.47318 5.00023L1.23984 1.76689C0.914844 1.44189 0.914844 0.916894 1.23984 0.591895C1.56484 0.266895 2.08984 0.266895 2.41484 0.591895L6.23984 4.41689C6.56484 4.74189 6.56484 5.26689 6.23984 5.59189L2.41484 9.41689C2.08984 9.74189 1.56484 9.74189 1.23984 9.41689C0.923177 9.09189 0.914844 8.55856 1.23984 8.23356Z" fill="white"/>
                      </svg></button></div></div>`
    )

    if (document.querySelector(".question_first_bgr")) {
      document.querySelector(".question_first_wrap button.new_enroll_now_btn").addEventListener("click", () => {
        document.querySelector(".enroll_now_main .button-blue-large.showModal.grab_butn.enroll_now_btn.dst_fsq_btl").click()
      })
    }

    if (document.querySelector(".question_second_bgr")) {
      document.querySelector(".question_second_wrap button.new_enroll_now_btn").addEventListener("click", () => {
        document.querySelector(".enroll_now_main .button-blue-large.showModal.grab_butn.enroll_now_btn.dst_fsq_btl").click()
      })
    }

    if (document.querySelector(".new_accardion")) {
      for (let key in arrInfo) {
        document.querySelector(".new_accardion").insertAdjacentHTML("beforeend", setList(key, arrInfo[key][0], arrInfo[key][1], "tenWeek"))
      }
    }
    if (document.querySelector(".question_first_wrap .question_accardion")) {
      for (let key in arrQuestion) {
        document.querySelector(".question_first_wrap .question_accardion").insertAdjacentHTML("beforeend", setList(key, arrQuestion[key][0], arrQuestion[key][1], "questionFirst"))
      }
    }
    if (document.querySelector(".question_second_wrap .question_accardion")) {
      for (let key in arrQuestion) {
        document
          .querySelector(".question_second_wrap .question_accardion")
          .insertAdjacentHTML("beforeend", setList(key, arrQuestion[key][0], arrQuestion[key][1], "questionSecond"))
      }
    }

    if (!document.querySelector(".mini_text_guarantee")) {
      document
        .querySelector(".after-refresh .count_sec:nth-of-type(3) .white-block > .enroll_now_main")
        .insertAdjacentHTML("afterend", `<div class="mini_text_guarantee"><span>Try risk-free with our unconditional 90-day money back guarantee</span></div>`)
    }
    document.querySelector(
      ".after-refresh .count_sec:nth-of-type(6) .pattern-block .row1030 .col-md-12 > p:not(.sub_head_examples):nth-child(4)"
    ).innerHTML = `<span>Samantha Morgan</span><span>Plano, Texas</span>`
    document.querySelector(".after-refresh .count_sec:nth-of-type(8) .quick_transcript_one p:nth-child(2)").innerHTML = `<span>Rubya Braun</span><span>Queensland, Australia</span>`
    document.querySelector(
      ".after-refresh .count_sec:nth-of-type(10) .content > .col-md-8 p:nth-child(5)"
    ).innerHTML = `<span>Barbara Wilson</span><span>Oakland, California</span>`
    document.querySelector(
      ".after-refresh .count_sec:nth-of-type(13) .content > .col-md-8 p:nth-child(4)"
    ).innerHTML = `<span>Jessica Kendricks</span><span>Buffalo, New York</span>`
    document.querySelector(
      ".after-refresh .count_sec:nth-of-type(15) .content > .col-md-8 p:nth-child(6)"
    ).innerHTML = `<span>Jennifer Aumand</span><span>Boca Raton, Florida</span>`
    document.querySelector(
      ".after-refresh .count_sec:nth-of-type(16) .row1030 > .col-md-12:not(.aftermasterclass) > p:nth-child(4)"
    ).innerHTML = `<span>Mark Amori</span><span>Sante Fe, New Mexico</span>`
    document.querySelector(
      ".after-refresh .count_sec:nth-of-type(23) .content > .col-md-6.col-sm-6:not(.dividing_line) > p:nth-child(4)"
    ).innerHTML = `<span>Jackie Stilson</span><span>Omaha, Nebraska</span>`
    document.querySelector(".after-refresh .count_sec:nth-of-type(25) .quick_transcript > p:nth-child(2)").innerHTML = `<span>Ariel Summers</span><span>Phoenix, Arizona</span>`

    if (!document.querySelector(".after-refresh .count_sec:nth-of-type(16) .new_enroll_now_btn")) {
      document.querySelector(".after-refresh .count_sec:nth-of-type(16) .row1030 > .col-md-12:not(.aftermasterclass) > p:nth-child(4)").insertAdjacentHTML(
        "afterend",
        `              <button class="new_enroll_now_btn">Enroll NOW <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.23984 8.23356L4.47318 5.00023L1.23984 1.76689C0.914844 1.44189 0.914844 0.916894 1.23984 0.591895C1.56484 0.266895 2.08984 0.266895 2.41484 0.591895L6.23984 4.41689C6.56484 4.74189 6.56484 5.26689 6.23984 5.59189L2.41484 9.41689C2.08984 9.74189 1.56484 9.74189 1.23984 9.41689C0.923177 9.09189 0.914844 8.55856 1.23984 8.23356Z" fill="white"/>
                        </svg></button>`
      )
    }

    if (!document.querySelector(".after-refresh .count_sec:nth-of-type(17) .new_enroll_now_btn")) {
      document.querySelector(".after-refresh .count_sec:nth-of-type(17) .white-block").insertAdjacentHTML(
        "beforeend",
        `              <button class="new_enroll_now_btn">Enroll NOW <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.23984 8.23356L4.47318 5.00023L1.23984 1.76689C0.914844 1.44189 0.914844 0.916894 1.23984 0.591895C1.56484 0.266895 2.08984 0.266895 2.41484 0.591895L6.23984 4.41689C6.56484 4.74189 6.56484 5.26689 6.23984 5.59189L2.41484 9.41689C2.08984 9.74189 1.56484 9.74189 1.23984 9.41689C0.923177 9.09189 0.914844 8.55856 1.23984 8.23356Z" fill="white"/>
                        </svg></button>`
      )
    }

    if (document.querySelector(".after-refresh .count_sec:nth-of-type(16) .new_enroll_now_btn")) {
      document.querySelector(".after-refresh .count_sec:nth-of-type(16) .new_enroll_now_btn").addEventListener("click", () => {
        document.querySelector(".enroll_now_main .button-blue-large.showModal.grab_butn.enroll_now_btn.dst_fsq_btl").click()
      })
    }

    if (document.querySelector(".after-refresh .count_sec:nth-of-type(17) .new_enroll_now_btn")) {
      document.querySelector(".after-refresh .count_sec:nth-of-type(17) .new_enroll_now_btn").addEventListener("click", () => {
        document.querySelector(".enroll_now_main .button-blue-large.showModal.grab_butn.enroll_now_btn.dst_fsq_btl").click()
      })
    }
    document.querySelector(".after-refresh .count_sec:nth-of-type(22) img").src = "https://conversionratestore.github.io/projects/knineti/img/ASPCA_new.png"
    // title
    document
      .querySelectorAll(".after-refresh section.count_sec")[2]
      .querySelector("h2").textContent = `Enroll for the masterclass today and get 3 bonus classes (worth US $209.10) free of charge:`
    document.querySelectorAll(".after-refresh section.count_sec")[4].querySelector("h2").textContent = `Learn from the best in the dog training industry`
    document.querySelectorAll(".after-refresh section.count_sec")[5].querySelector("h2").textContent = `Watch the amazing results dog owners get after using this program`
    document
      .querySelectorAll(".after-refresh section.count_sec")[6]
      .querySelector("h2").textContent = `ANY regular dog owner can achieve this kind of transformation… you don’t need a degree in animal behavior 🙂`
    document.querySelectorAll(".after-refresh section.count_sec")[7].querySelector("h2").textContent = `"... instead of barking, she goes on her bed and waits for me."`
    document.querySelectorAll(".after-refresh section.count_sec")[8].querySelector("h2").textContent = `Discover the two foundational commands to get your dog to look up to you`
    document.querySelectorAll(".after-refresh section.count_sec")[9].querySelector("h2").textContent = `Teach your pup to pay attention to you even when there's a squirrel nearby`
    document
      .querySelectorAll(".after-refresh section.count_sec")[10]
      .querySelector("h2").textContent = `Transform your dog from a leash-pulling nightmare into a zen master that’s a joy to walk with`
    document.querySelectorAll(".after-refresh section.count_sec")[11].querySelector("h2").textContent = `Train your dog to come to you – whenever and wherever you call them`
    document
      .querySelectorAll(".after-refresh section.count_sec")[12]
      .querySelector("h2").textContent = `Teach your pooch to stop barking and calmly say hello to other dogs and people`
    document.querySelectorAll(".after-refresh section.count_sec")[13].querySelector("h2").textContent = `Save your furry friend from a fatal road accident`
    document.querySelectorAll(".after-refresh section.count_sec")[14].querySelector("h2").textContent = `Train your dog to have the same level of impulse control as service dogs`
    document.querySelectorAll(".after-refresh section.count_sec")[15].querySelector("h2").textContent = `Say goodbye to all naughty behavior problems`
    document.querySelectorAll(".after-refresh section.count_sec")[16].querySelector("h2").textContent = `Enroll now to get instant access to the online masterclass`
    document.querySelectorAll(".after-refresh section.count_sec")[17].querySelector("h2").textContent = `Learn from the comfort of your home at your own pace`
    document.querySelectorAll(".after-refresh section.count_sec")[18].querySelector("h2").textContent = `Jump on a live call with us to get answers to your questions`
    document.querySelectorAll(".after-refresh section.count_sec")[19].querySelector("h2").textContent = `Transform your dog in as little as 10 to 15 minutes per day`
    document.querySelectorAll(".after-refresh section.count_sec")[20].querySelector("h2").textContent = `Save up to $3,703 on dog training fees`
    document.querySelectorAll(".after-refresh section.count_sec")[21].querySelector("h2").textContent = `Help us save rescue dogs’ lives`
    document.querySelectorAll(".after-refresh section.count_sec")[22].querySelector("h2").textContent = `Get all your money back within 90 days if this isn’t right for you`
    document.querySelectorAll(".after-refresh section.count_sec")[23].querySelector("h2").textContent = `Get your dog to listen to you even without treats`
    document.querySelectorAll(".after-refresh section.count_sec")[24].querySelector("h2").textContent = `“...he listens to me all the time now...”`

    // accardion ten_week_bgr

    let headerOffset = 10
    $('.new_accardion_link[data-selector="tenWeek"]').click(function (e) {
      console.log(e.currentTarget)
      $(this).toggleClass("active")
      $(this).closest("li").toggleClass("active")
      $(this).next(".new_accardion_lists").slideToggle()
      if ($('.new_accardion_link[data-selector="tenWeek"]').not(this)) {
        $('.new_accardion_link[data-selector="tenWeek"]').not(this).next(".new_accardion_lists").css("display", "none")
        $('.new_accardion_link[data-selector="tenWeek"]').not(this).removeClass("active")
        $('.new_accardion_link[data-selector="tenWeek"]').not(this).closest("li").removeClass("active")
      }
      // const headerOffset = 100
      const elementPosition = this.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    })

    // accardion question_first_bgr
    $('.new_accardion_link[data-selector="questionFirst"]').click(function (e) {
      console.log(e.currentTarget)
      $(this).toggleClass("active")
      $(this).closest("li").toggleClass("active")
      $(this).next(".new_accardion_lists").slideToggle()
      if ($('.new_accardion_link[data-selector="questionFirst"]').not(this)) {
        $('.new_accardion_link[data-selector="questionFirst"]').not(this).next(".new_accardion_lists").css("display", "none")
        $('.new_accardion_link[data-selector="questionFirst"]').not(this).removeClass("active")
        $('.new_accardion_link[data-selector="questionFirst"]').not(this).closest("li").removeClass("active")
      }
      // const headerOffset = 100
      const elementPosition = this.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    })

    // accardion question_second_bgr
    $('.new_accardion_link[data-selector="questionSecond"]').click(function (e) {
      console.log(e.currentTarget)
      $(this).toggleClass("active")
      $(this).closest("li").toggleClass("active")
      $(this).next(".new_accardion_lists").slideToggle()
      if ($('.new_accardion_link[data-selector="questionSecond"]').not(this)) {
        $('.new_accardion_link[data-selector="questionSecond"]').not(this).next(".new_accardion_lists").css("display", "none")
        $('.new_accardion_link[data-selector="questionSecond"]').not(this).removeClass("active")
        $('.new_accardion_link[data-selector="questionSecond"]').not(this).closest("li").removeClass("active")
      }
      // const headerOffset = 100
      const elementPosition = this.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    })

    // day Seven
    let params = new URLSearchParams(window.location.search)
    let dQueryDate = atob(params.get("d"))
    let dsp = dQueryDate.split("-")
    let daySeven = new Date(new Date().setDate(new Date(dsp[0], dsp[1] - 1, dsp[2]).getDate() + 7)).toDateString().split(" ")
    let month = ""

    switch (daySeven[1]) {
      case "Jan":
        month = "January"
        break
      case "Feb":
        month = "February"
        break
      case "Mar":
        month = "March"
        break
      case "Apr":
        month = "April"
        break
      case "May":
        month = "May"
        break
      case "Jun":
        month = "June"
        break
      case "Jul":
        month = "July"
        break
      case "Aug":
        month = "August"
        break
      case "Sep":
        month = "September"
        break
      case "Oct":
        month = "October"
        break
      case "Nov":
        month = "November"
        break
      case "Dec":
        month = "December"
        break
      default:
        break
    }

    if (document.querySelector(".date_ends_text span")) {
      document.querySelector(".date_ends_text span").textContent = `${month} ${daySeven[2]}, ${daySeven[3]}`
      console.log(`daySeven`, daySeven, `${month} ${daySeven[2]}, ${daySeven[3]}`)
    }
    // dog Age
    let dogAge = new URL(document.location).searchParams.get("age")
    if (document.querySelector(".dog_age_var")) {
      document.querySelector(".dog_age_var").textContent = dogAge
    }

    if (localStorage.getItem("notFirstTime")) {
      headerOffset = 80
      if (document.querySelectorAll(".want-to-obey .count_sec")[0]) {
        document.querySelectorAll(".want-to-obey .count_sec")[0].style.display = "none"
      }
      document.querySelector(".special_gift_bgr").style.display = "none"
    }

    if (localStorage.getItem("notTime")) {
      document.querySelectorAll(".want-to-obey .count_sec")[0].style.display = "none"
      document.querySelector(".special_gift_bgr").style.display = "none"
      if (!document.querySelector(".after-refresh > .reviews_bgr")) {
        document.querySelectorAll(".after-refresh section.count_sec")[0]?.insertAdjacentHTML("beforebegin", reviewsBox)
      }
      document.querySelector(".ten_week_bgr .reviews_bgr").style.display = "none"
      document.querySelector(".learn_more_bgr").style.display = "none"
    }

    // timer
    timerVideo()

    function timerVideo() {
      let intevalVideo = setInterval(() => {
        if (document.querySelector("video")) {
          clearInterval(intevalVideo)

          setTimeout(() => {
            // let counter
            // document.querySelector("video").currentTime = 35 * 60
            const videoItem = document.querySelector("video")

            function timeUpdate() {
              console.log(videoItem.currentTime)
              let timer = 35.74 * 60
              // let timer = 1 * 60

              let currentTime = Math.floor(videoItem.currentTime)

              timer -= currentTime

              if (timer < 0) {
                if (!localStorage.getItem("notTime")) {
                  localStorage.setItem("notTime", true)
                }
                document.querySelectorAll(".want-to-obey .count_sec")[0].style.display = "none"
                document.querySelector(".after-refresh").style.display = "block"
                document.querySelector(".special_gift_bgr").style.display = "none"
                if (!document.querySelector(".after-refresh > .reviews_bgr")) {
                  document.querySelectorAll(".after-refresh section.count_sec")[0]?.insertAdjacentHTML("beforebegin", reviewsBox)
                }
                document.querySelector(".ten_week_bgr .reviews_bgr").style.display = "none"
                document.querySelector(".learn_more_bgr").style.display = "none"
                let int = setInterval(() => {
                  if (document.querySelector(".after-refresh > .reviews_bgr")) {
                    clearInterval(int)

                    videoItem.removeEventListener("timeupdate", timeUpdate)
                  }
                }, 10)
              }
            }

            videoItem.addEventListener("timeupdate", timeUpdate)
          }, 1000)
        }
      }, 100)
    }
  }
}, 500)
