let becomeASubscriber = setInterval(() => {
  if (window.location.pathname === "/become-a-subscriber" && JSON.parse(document.querySelector('[data-drupal-selector="drupal-settings-json"]')?.textContent).dywm.gtm.customer_info.user.isSubscriber === false) {
    clearInterval(becomeASubscriber);

    function pushDataLayer([event_name, event_desc, event_type, event_loc]) {
      console.log(event_name + " / " + event_desc + " / " + event_type + " / " + event_loc);

      // Send a Google Analytics event
      const eventData = {
        event: "event-to-ga4",
        event_name,
        event_desc,
        event_type,
        event_loc,
      };

      window.dataLayer = window.dataLayer || [];
      dataLayer.push(eventData);
    }

    const instructorsArr = [
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2023/02/DSC06112.jpg",
        name: "Fiji McAlpine",
        link: "/yoga-classes?field_instructor_target_id=8",
        caption: "Vinyasa, Power, Meditation, YTT",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2018/06/satiya-channer.jpg",
        name: "Satiya Channer",
        link: "/yoga-classes?field_instructor_target_id=123147",
        caption: "Yin, Restorative, Hatha, Meditation",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2023/02/David%20headshot%20cropped%20Jan-23.jpg",
        name: "David Procyshyn",
        link: "/yoga-classes?field_instructor_target_id=4",
        caption: "Hatha, Pain Care, Meditation, YTT",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2023/02/tracy.jpg",
        name: "Tracey Noseworthy",
        link: "/yoga-classes?field_instructor_target_id=7041",
        caption: "Vinyasa, Power, Meditation, YTT",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2022/10/DSC04949%20copy.jpg",
        name: "Josh Chen",
        link: "/yoga-classes?field_instructor_target_id=313027",
        caption: "Hatha, Yin, Meditation",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2018/02/PROFILE_MELISSA%20web%20size.jpg",
        name: "Melissa Krieger",
        link: "/yoga-classes?field_instructor_target_id=467",
        caption: "Hatha, Slow Flow, Restorative",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2023/02/DSC01881.jpg",
        name: "Helen Camisa",
        link: "/yoga-classes?field_instructor_target_id=244583",
        caption: "Hatha, Yin, Meditation",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2023/02/DSC06138%20%282%29.jpg",
        name: "Andrea Ting-Luz",
        link: "/yoga-classes?field_instructor_target_id=196672",
        caption: "Vinyasa, Hatha, Yin",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2020/04/Screenshot%202020-04-07%2013.11.01.jpg",
        name: "Rachel Scott",
        link: "/yoga-classes?field_instructor_target_id=16854",
        caption: "Vinyasa, Power, Hatha, YTT",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2016/05/yoga%20profile%20picture.jpg",
        name: "Crista Shillington",
        link: "/yoga-classes?field_instructor_target_id=133906",
        caption: "Vinyasa, Power",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2021/04/Doyoga.jpeg",
        name: "Sarada Jagannath",
        link: "/yoga-classes?field_instructor_target_id=326548",
        caption: "Hatha, Pranayama",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2022/08/DSC01661-2_0.jpg",
        name: "Araba Adjaye",
        link: "/yoga-classes?field_instructor_target_id=357388",
        caption: "Hatha",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2022/08/Tara%20Heal%20HEADSHOT%202021%20Photo-68.jpg",
        name: "Tara Heal",
        link: "/yoga-classes?field_instructor_target_id=350658",
        caption: "Vinyasa, Power, Meditation",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2019/03/Photo%204.jpg",
        name: "Guy Friswell",
        link: "/yoga-classes?field_instructor_target_id=266604",
        caption: "Slow Flow, Hatha, Meditation",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2023/02/unnamed%20%282%29.jpg",
        name: "Jonni-Lyn Friel",
        link: "/yoga-classes?field_instructor_target_id=269801",
        caption: "Jivamukti, Vinyasa, Meditation",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2022/11/julia-web.jpg",
        name: "Julia Crouch",
        link: "/yoga-classes?field_instructor_target_id=317249",
        caption: "Pilates, Pre/Post Natal, Hatha",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2018/06/sarah-jane-profile.jpg",
        name: "Sarah Jane Steele",
        link: "/yoga-classes?field_instructor_target_id=90321",
        caption: "Prenatal/Postnatal, Hatha, Yin, Restorative",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2021/09/kathi.png",
        name: "Kathi Ells",
        link: "/yoga-classes?field_instructor_target_id=218644",
        caption: "Pilates",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2018/08/nicky_jones.jpg",
        name: "Nicky Jones",
        link: "/yoga-classes?field_instructor_target_id=4134",
        caption: "Restorative, Therapy, Hatha",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2017/04/sarah-holmes.jpg",
        name: "Sarah Holmes de Castro",
        link: "/yoga-classes?field_instructor_target_id=189907",
        caption: "Hatha, Restorative, Gentle",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2014/03/ron_stewart_yoga_0_0.jpg",
        name: "Ron Stewart",
        link: "/yoga-classes?field_instructor_target_id=15517",
        caption: "Vinyasa, Power, Hatha",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2021/09/kim_wilson.jpg",
        name: "Kim Wilson",
        link: "/yoga-classes?field_instructor_target_id=877",
        caption: "Pilates",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2018/06/anastasia-thumb2.jpg",
        name: "Anastasia Hangemanole",
        link: "/yoga-classes?field_instructor_target_id=134",
        caption: "Yin, Hatha",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2017/11/IMG_5004.jpg",
        name: "Dawn Rabey",
        link: "/yoga-classes?field_instructor_target_id=15521",
        caption: "Kundalini, Pranayama, Meditation",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2015/04/Screen%20shot%202015-04-15%20at%2011.00.26%20AM.png",
        name: "Tianne Allan",
        link: "/yoga-classes?field_instructor_target_id=834",
        caption: "Restorative, Pain Care",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2017/10/alyssa_jean.jpg",
        name: "Alyssa Jean Klazek",
        link: "/yoga-classes?field_instructor_target_id=215411",
        caption: "Yoga for Kids",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2019/03/IMG_2223_RETOUCH_V2.jpg",
        name: "Nyk Danu",
        link: "/yoga-classes?field_instructor_target_id=266789",
        caption: "Yin, Meditation",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2017/12/Jeff%20with%20son.jpg",
        name: "Jeff Lichty",
        link: "/yoga-classes?field_instructor_target_id=224862",
        caption: "Ashtanga",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2021/09/michelle_rubin.jpg",
        name: "Michelle Rubin",
        link: "/yoga-classes?field_instructor_target_id=50832",
        caption: "Hatha, Gentle, Seniors",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2019/04/jennylisa%20%282%29.jpg",
        name: "Jennifer Piercy",
        link: "/yoga-meditation?field_instructor_target_id=253426",
        caption: "Meditation",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2018/09/Screen%20Shot%202018-09-12%20at%203.32.21%20PM.png",
        name: "Peter Renner",
        link: "/yoga-meditation?field_instructor_target_id=189052",
        caption: "Meditation",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2021/09/erica_fitch.jpg",
        name: "Erica Fritch",
        link: "/yoga-classes?field_instructor_target_id=8733",
        caption: "Hatha, Therapy, Gentle",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2014/03/Shivani_1.jpg",
        name: "Shivani Wells",
        link: "/yoga-classes?field_instructor_target_id=1047",
        caption: "Vinyasa/Power, Hatha",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2014/03/jenni-ashtanga-yoga_1.jpg",
        name: "Jenni Pritchard",
        link: "/yoga-classes?field_instructor_target_id=28537",
        caption: "Ashtanga",
      },
    ];

    let becomeASubscriberStyle = /*html */ `
      <style>
/**promoteSubscriptionWrap */
.o-page__banner + #promoteSubscriptionWrap {
  padding: 25px 0 40px;
}
#promoteSubscriptionWrap {
  position: relative;
  background: #fff;
  width: 100%;
  padding: 42px 0 40px;
}
.bgr_gray {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background: #f6f6f6;
  min-height: 95px;
  max-height: 95px;
  height: 100%;
  width: 100%;
}
.new_container {
  max-width: 1040px;
  margin: 0 auto;
  width: 90%;
  padding: 30px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.15);
}
.btn_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 2px solid #f6f6f6;
}
.btn_wrapper h2 {
  font-family: "Manrope", sans-serif;
  color: #272727;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  margin: 0;
}
.accent_color {
  color: #017922;
}
#UnlockPremiumContentLink,
#subscribeSaveLink {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  max-width: 302px;
  width: 100%;
  height: 48px;
  border-radius: 30px;
  background: #017922;
  transition: all 0.3s ease;
}
#UnlockPremiumContentLink:hover,
#subscribeSaveLink:hover {
  color: #ffffff;
  background: #00601b;
  border-color: #007922;
  text-decoration: unset;
}
#UnlockPremiumContentLink span {
  font-family: "Manrope", sans-serif;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 32px;
  text-transform: capitalize;
}
.toggle_btn_features {
  display: flex;
  gap: 8px;
  cursor: pointer;
  margin: 18px auto 0;
  align-items: center;
  justify-content: center;
  width: max-content;
}
.toggle_btn_features span {
  font-family: "Manrope", sans-serif;
  color: #027db8;
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  text-decoration-line: underline;
  text-transform: capitalize;
}
.toggle_btn_features > svg {
  transition: all 0.3s ease;
}
.toggle_btn_features.open_var > svg {
  transform: rotateX(180deg);
}
.new_features_list,
.hidden_new_features_list {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
}
.new_features_list > li,
.hidden_new_features_list > li {
  width: 30%;
}
.mini_block {
  margin-top: 24px;
}
.mini_block > li {
  width: 100%;
}
.mini_block > li .list_main_title {
  margin-bottom: 12px;
}
.hidden_inform_box {
  display: none;
  margin-top: 12px;
}
.list_main_title {
  position: relative;
  color: #272727;
  font-family: "Manrope", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  margin: 0;
  padding-left: 52px;
}
.list_main_title[data-title]::before {
  position: absolute;
  content: "";
  width: 40px;
  height: 40px;
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/premium.svg) no-repeat center center;
  top: 0;
  left: 0;
  background-size: contain;
}
.list_main_title[data-title="yoga_person"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/yoga_person.svg) no-repeat center center;
  background-size: contain;
}
.list_main_title[data-title="yoga"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/yoga.svg) no-repeat center center;
  background-size: contain;
}
.list_main_title[data-title="devices"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/devices.svg) no-repeat center center;
  background-size: contain;
}
.list_txt {
  color: #555;
  font-family: "Manrope", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin: 0;
  max-width: 300px;
}
.your_store_wrap {
  margin-top: 48px;
}
.your_store_wrap .list_main_title {
  padding: 0;
  margin-bottom: 12px;
}
.professional_classes_list {
  list-style: disc;
  color: #555;
  font-size: 12px;
  margin-top: 12px;
  padding: 0 0 0 23px;
}
.professional_classes_list > li + li {
  margin-top: 10px;
}
.store_icon {
  display: flex;
  justify-content: flex-start;
  gap: 24px;
  flex-wrap: wrap;
}
.store_icon img {
  max-width: 140px;
  width: 100%;
}
[data-mob],
[data-openmobvar] {
  display: none;
}
/*https://www.doyogawithme.com/become-a-subscriber ->>>>> promoteSubscriptionWrap */
.path-become-a-subscriber .new_box_subscriber {
  background: linear-gradient(45deg, #003a67 0%, #007db8 100%);
  padding: 40px 10px 142px;
}
.path-become-a-subscriber #promoteSubscriptionWrap {
  background: #faf8f6;
  padding: 15px 0;
}
.path-become-a-subscriber .bgr_gray,
.path-become-a-subscriber #UnlockPremiumContentLink {
  display: none;
}
.path-become-a-subscriber .btn_wrapper {
  justify-content: center;
  margin-bottom: 10px;
}
.path-become-a-subscriber .new_container {
  margin-bottom: -73px;
  z-index: 2;
  margin-top: -119px;
}
.path-become-a-subscriber .new_title_subscriber {
  color: #fff;
  text-align: center;
  font-family: "Manrope", sans-serif !important;
  font-size: 44px;
  font-weight: 700;
  line-height: 52px;
  max-width: 1040px;
  margin: 0 auto;
}
/*new_sect_choose_your_plan */
.new_sect_choose_your_plan {
  margin: 0 0 0;
}
.container_choose_your_plan {
  max-width: 1006px;
  width: 90%;
  margin: 0 auto;
  border-radius: 12px;
  background: linear-gradient(87deg, #003a67 0%, #007db8 100%);
  padding: 12px;
}
.border_choose_your_plan {
  border-radius: 12px;
  border: 2px dashed rgb(246 246 246 / 50%);
  padding: 70px 12px 12px;
}
.border_choose_your_plan > h2 {
  color: #fff;
  font-family: "Manrope", sans-serif !important;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  margin: 0 0 24px;
  text-align: center;
}
.your_plan_list {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
}
.your_plan_link {
  backdrop-filter: blur(3px);
  background: #fff;
  filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.25));
  min-height: 349px;
  max-width: 320px;
  width: 100%;
  position: relative;
}
.your_plan_list .your_plan_link:nth-child(2) {
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  overflow: hidden;
}
.your_plan_link:nth-child(2)::before {
  content: "Save 35%";
  position: absolute;
  z-index: 99;
  top: 54px;
  right: -4px;
  transform: rotate(45deg);
  transform-origin: bottom right;
  padding: 6px 28px;
  background: #f3a83c;
  font-family: "Manrope", sans-serif !important;
  font-weight: 800;
  font-size: 14px;
  line-height: 20px;
  color: #272727;
  text-transform: uppercase;
}
.container_choose_your_plan.not_free {
  max-width: 688px;
}
.container_choose_your_plan.not_free .your_plan_link:nth-child(1) {
  display: none !important;
}
.your_plan_link:nth-child(1) {
  border-top-left-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.your_plan_list .your_plan_link:nth-child(3) {
  border-top-right-radius: 12px;
}
.your_plan_body_free {
  padding: 40px;
  text-align: center;
  width: 100%;
}
.your_plan_body_free .your_plan_name {
  color: #027db8;
  font-size: 24px;
  font-weight: 800;
  line-height: 32px;
  margin: 16px 0 20px;
}
section.new_sect_choose_your_plan .your_plan_body_free a.your_plan_btn {
  border-radius: 30px !important;
  border: 2px solid #017922 !important;
  background: none !important;
  color: #017922 !important;
}
.your_plan_header {
  text-align: center;
  padding: 30px 12px 12px;
}
.your_plan_period {
  color: #272727;
  font-family: "Manrope", sans-serif !important;
  font-size: 24px;
  font-weight: 700;
  line-height: 20px;
  margin: 0 0 8px;
}
.your_plan_name {
  color: #272727;
  font-family: "Manrope", sans-serif !important;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
}
.your_plan_body {
  background: linear-gradient(180deg, #f6f6f6 0%, rgba(246, 246, 246, 0) 63.21%);
  padding: 12px 40px 30px;
  text-align: center;
}
.your_plan_free {
  color: #027db8;
  font-family: "Manrope", sans-serif !important;
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  margin: 0 0 12px;
}
.your_plan_price {
  color: #272727;
  font-family: "Manrope", sans-serif !important;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  margin: 0 0 4px;
}
.your_plan_price > span {
  color: #027db8;
  font-family: "Manrope", sans-serif !important;
  font-size: 23px;
  font-weight: 800;
  line-height: 24px;
}
.your_plan_usd {
  color: #a5a5a5;
  font-family: "Manrope", sans-serif !important;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  margin: 4px 0 12px;
}
section.new_sect_choose_your_plan a.your_plan_btn {
  display: flex !important;
  align-items: center;
  justify-content: center;
  border-radius: 30px !important;
  background: #017922 !important;
  outline: none !important;
  border: none !important;
  max-width: 240px;
  width: 100%;
  height: 52px;
  margin: 0 auto;
  color: #fff !important;
  font-family: "Manrope", sans-serif !important;
  font-size: 18px !important;
  font-weight: 700;
  line-height: 32px !important;
  text-transform: capitalize;
  text-decoration: none !important;
}
.your_plan_options_wrapp {
  margin-top: 16px;
}
.your_plan_options_wrapp .your_plan_options {
  color: #555;
  font-family: "Manrope", sans-serif !important;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.your_plan_options_wrapp .your_plan_options + div {
  margin-top: 12px;
}
.your_plan_options_wrapp .your_plan_options img {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}
.your_plan_year {
  color: #272727;
  font-family: "Manrope", sans-serif !important;
  font-size: 16px;
  line-height: 28px;
  font-weight: 600;
}
.your_plan_year_old {
  color: #a5a5a5;
  text-decoration-line: line-through;
}
.your_plan_year_new {
}
.your_plan_year_caption {
  font-size: 14px;
  font-weight: 400;
}
.your_plan_list_mob,
.new_title_subscriber_mob {
  display: none;
}
/** lav-classes */
.lav-container {
    z-index: 2;
    margin: 0 auto;
    width: 68em;
    max-width: 100%;
    padding: 0 1em;
    box-sizing: border-box;
}
.lav-classes {
    padding-top: 80px;
    padding-bottom: 72px;
    color: #272727;
  }
  .lav-classes__title {
    font-weight: 700;
    font-size: 44px;
    line-height: 1;
    text-align: center;
  }
  .lav-classes__list {
    margin: 50px -4px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
  }
  .lav-classes__list li {
    margin: 4px 8px;
    background: #F9F9F9;
    border: 1px dashed #D6D6D6;
    border-radius: 12px;
    padding: 7.5px 32px;
    font-weight: 500;
    font-size: 18px;
    line-height: 31px;
    color: #555555;
    transition: 0.35s;
    cursor: pointer;
  }

  .lav-classes__list li:hover {
    background-color: #027DB8;
    color: #fff;
    border-style: solid;
  }
  .lav-pers {
    padding: 108px 0;
    color: #fff;
    background: #003A67;
    text-align: center;
  }
  .lav-pers__title {
    font-size: 44px;
    font-weight: 500;
    line-height: 1;
  }
  .lav-pers__list {
    margin: 50px 0 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2em;
    list-style: none;
    padding: 0;
  }
  .lav-pers__item-title {
    margin-top: 12px;
    font-size: 21px;
    font-weight: 500;
    line-height: 1;
  }
  .lav-pers__item-caption {
    margin-top: 14px;
    font-size: 18px;
    line-height: 30px;
  }
  .lav-pers__item-num {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 35px;
    font-weight: 500;
    padding: 18px;
    border-radius: 100px;
    border: solid 1px #027DB8;
    min-height: 1.5em;
    min-width: 1.5em;
  }

  .lav-instructors {
    color: #272727;
    padding-top: 110px;
    padding-bottom: 110px;
  }
  .lav-instructors__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 44px;
  }
  .lav-instructors__title {
    font-size: 44px;
    line-height: 1;
    font-weight: 500;
  }
  .lav-instructors .splide__track {
    overflow: visible;
  }
  .lav-instructors .splide__arrow {
    position: static;
    transform: none;
    background: white;
    box-shadow: 2px 2px 4px 1px rgb(0 0 0 / 5%);
  }
  .lav-instructors .splide__arrow--prev:before {
    color: #003A67;
    content: "➔";
    font-size: 1.2em;
    transform: scale(-1,1);
  }
  .lav-instructors .splide__arrow--next:before {
    color: #003A67;
    content: "➔";
    font-size: 1.2em;
  }
  .lav-instructors .splide__arrow svg {
    display: none;
  }
  .lav-instructors .splide__arrow + .splide__arrow {
    margin-left: 10px;
  }
  .lav-instructors .splide__arrows {
    display: flex;
    align-items: center;
  }

  .lav-instr {
    border-radius: 8px;
    max-width: 280px;
    transition: 0.35s;
    width: 21.7em;
    background: #fefefe;
    overflow: hidden;
    box-shadow: 2px 2px 4px 1px rgb(0 0 0 / 5%);
    display: flex;
    flex-direction: column;
  }
  .lav-instr:hover {
    text-decoration: none;
  }
  .lav-instr:hover .lav-instr__img {
    filter: brightness(65%);
  }
  .lav-instr:hover .lav-instr__name {
    text-decoration: underline;
  }
  .lav-instr__img {
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 282px;
    transition: 0.35s;
  }
  .lav-instr__info {
    padding: 28px;
    color: #000;
  }
  .lav-instr__name {
    font-size: 19px;
  }
  .lav-instr__caption {
    margin-top: 12px;
    border-top: 1px solid #000;
    padding-top: 12px;
    font-size: 16px;
    line-height: 28px;
  }
  .splide__progress {
    display: none;
    background: #d6d6d6;
    border-radius: 100em;
    margin-top: 1.33rem;
    overflow: hidden;
  }
  .splide__progressBar {
    background: #027DB8;
    height: 0.25em;
    transition: width 400ms ease;
    width: 0;
  }
  .lav-mob,
  .sfc-becomeASubscriber__section.sfc-becomeASubscriber__section--banner.sfc-section.sfc-section--lavender,
  .sfc-becomeASubscriber__section.sfc-becomeASubscriber__section--feature.sfc-section,
  #plans {
    display: none;
  }
  
@media (max-width: 1070px) {
  /**new_sect_choose_your_plan */
  section.new_sect_choose_your_plan a.your_plan_btn {
    font-size: 15px !important;
  }
  .your_plan_options_wrapp .your_plan_options {
    font-size: 12px;
  }
}
@media(max-width: 992px) {
  .lav-desk {
    display: none;
}
.lav-mob {
    display: block;
}
.lav-container {
    max-width: 100%;
    width: 100%;
}
      .lav-classes {
      padding-top: 42px;
      padding-bottom: 42px;
    }
    .lav-classes__title {
      font-size: 22px;
    }
    .lav-classes__list {
      margin: 24px -4px 0;
    }
    .lav-classes__list.lav-mob {
      display: flex;
    }
    .lav-classes__list li {
      margin: 4px;
      font-size: 16px;
      padding: 4px 24px;
    }
    .lav-classes__toggle {
      font-weight: 700;
      font-size: 18px;
      line-height: 32px;
      margin: 16px auto 0;
      min-height: 52px;
      border-radius: 30px;
      border: 2px solid #017922;
      background: none;
      color: #017922;
      max-width: 156px;
      padding: 0;
      width: 100%;
    }
    .lav-classes__list li:nth-child(1n + 11) {
      display: none;
    }
    .lav-classes__list.active li:nth-child(1n + 11) {
      display: block;
    }

    .lav-pers {
      padding: 54px 0;
    }
    .lav-pers__title {
      font-size: 22px;
    }

    .lav-pers__list {
      display: block;
      margin-top: 28px;
    }
    .lav-pers__item + .lav-pers__item {
      margin-top: 36px;
    }
    .lav-pers__item-caption {
      font-size: 18px;
      line-height: 30px;
    }

    .lav-instructors {
      padding-top: 42px;
      padding-bottom: 60px;
    }
    .lav-instructors__title {
      font-size: 22px;
    }
    .lav-instructors__head {
      margin-bottom: 22px;
    }
}
@media (max-width: 768px) {
  /**promoteSubscriptionWrap */
  .path-become-a-subscriber .new_box_subscriber {
    padding: 24px 18px 168px;
    display: none;
  }
  .path-become-a-subscriber #promoteSubscriptionWrap {
    display: none;
  }
  .path-become-a-subscriber .new_title_subscriber {
    font-size: 24px;
    line-height: 32px;
  }
  .path-become-a-subscriber .new_container {
    margin-top: -160px;
    padding: 18px 20px;
  }
  .path-become-a-subscriber .btn_wrapper h2 {
    font-size: 18px;
    margin: 0;
    max-width: unset;
  }
  .path-become-a-subscriber .btn_wrapper {
    margin-bottom: 20px;
  }
  .path-become-a-subscriber .new_features_list,
  .path-become-a-subscriber .hidden_new_features_list {
    gap: 16px;
  }
  .path-become-a-subscriber .list_main_title {
  }
  #promoteSubscriptionWrap {
    padding: 24px 0;
  }
  [data-mob] {
    display: flex;
  }
  .open_var[data-openmobvar] {
    display: block;
  }
  .bgr_gray,
  [data-desk] {
    display: none;
  }
  .new_features_list,
  .hidden_new_features_list {
    flex-direction: column;
    gap: 12px;
    margin: 0;
  }
  .new_features_list > li,
  .hidden_new_features_list > li {
    width: 100%;
  }
  .new_container {
    padding: 16px;
    max-width: 335px;
    width: 81%;
  }
  .btn_wrapper {
    flex-direction: column;
    align-items: flex-start;
    border-bottom: none;
    padding: 0;
    margin-bottom: 12px;
  }
  .btn_wrapper h2 {
    font-size: 20px;
    font-weight: 700;
    margin: 0 0 12px;
    max-width: 278px;
  }
  #UnlockPremiumContentLink {
    max-width: unset;
    width: 100%;
    height: 42px;
  }
  #UnlockPremiumContentLink span {
    font-size: 14px;
    font-weight: 700;
    line-height: 32px;
  }
  .toggle_btn_features {
    margin: 10px auto 0;
  }
  .list_main_title {
    font-size: 12px;
    padding-left: 38px;
    max-width: 253px;
  }
  .list_main_title[data-title="devices"] {
    max-width: 227px;
  }
  .your_store_wrap {
    margin-top: 12px;
  }
  .your_store_wrap .list_main_title {
    margin-bottom: 6px;
  }
  .store_icon {
    gap: 16px;
  }
  .store_icon img {
    max-width: 120px;
  }
  .mini_block > li .list_main_title {
    margin: 0;
  }
  .list_txt {
    margin-top: 2px;
    line-height: 20px;
  }
  .list_main_title[data-title]::before {
    width: 26px;
    height: 26px;
  }
  .hidden_inform_box {
    margin-top: 16px;
  }
  .professional_classes_list > li + li,
  .professional_classes_list {
    margin-top: 5px;
  }
  .professional_classes_list .list_txt {
    font-weight: 600;
  }
  .new_features_list .list_main_title[data-title="yoga_person"] + p {
    font-weight: 500;
  }
  /**new_sect_choose_your_plan */
  .new_sect_choose_your_plan {
    margin: 0;
    background: radial-gradient(50% 50% at 50% 50%, #027db8 0%, #003a67 100%);
    mix-blend-mode: darken;
  }
  .container_choose_your_plan {
    margin: 0 auto;
    width: 91%;
    max-width: unset;
    padding: 30px 18px 9px;
    border: none;
    border-radius: unset;
    background: none;
  }
  .border_choose_your_plan {
    padding: 0;
    border-radius: unset;
    border: none;
  }
  .border_choose_your_plan > h2.new_title_subscriber_mob{
    display: block;
color: #FFF;
text-align: center;
font-family: 'Manrope';
font-size: 34px;
font-weight: 700;
line-height: 34px;
margin: 0 0 8px;
  }
  .border_choose_your_plan > h2 {
    font-size: 18px;
    font-weight: 500;
    line-height: 31px;
  }
  .your_plan_list {
    display: none;
  }
  .your_plan_list_mob {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
  .your_plan_link {
    max-width: 100%;
    min-height: unset;
    border-radius: 12px;
    background: unset;
  }
  .your_plan_link:nth-child(1) {
    display: block;
    border-top-left-radius: unset;
  }
  .your_plan_txt_free {
    display: flex;
    justify-content: space-between;
    margin-bottom: 19px;
        align-items: center;
  }
  .your_plan_body_free_mob {
    padding: 16px;
    text-align: unset;
    background: white;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
  .your_plan_txt_free .your_plan_period {
    color: #272727;
    font-size: 18px;
    font-weight: 700;
    line-height: 26px;
    margin: 0;
  }
  .your_plan_txt_free .your_plan_name {
    margin: 0;
    color: #027DB8;
font-family: 'Manrope';
font-size: 22px;
font-weight: 700;
line-height: 32px;
  }
  .your_plan_header {
    text-align: unset;
    padding: 16px 16px 6px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 14px;
    background: #fff;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
  .your_plan_period {
    color: #017922;
    font-family: "Manrope", sans-serif !important;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    margin: 0 0 6px;
  }
  .your_plan_name {
    font-size: 18px;
    font-weight: 700;
    line-height: 26px;
  }
  .your_plan_price {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin: 0;
  }
  .your_plan_price > span {
    font-size: 22px;
    font-weight: 700;
    line-height: 32px;
  }
  .your_plan_block_right {
    text-align: right;
  }
  .your_plan_block_right .your_plan_free {
    line-height: normal;
    margin: 0;
  }
  .your_plan_block_right .your_plan_free span:nth-child(2) {
    color: #272727;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
   .your_plan_link:nth-child(2){
    margin-top: 16px;
   }
  .your_plan_link:nth-child(2)::before{
    border-radius: 12px;
        font-weight: 700;
    font-size: 12px;
    line-height: 20px;
    top: -12px;
    left: 50%;
    right: unset;
    transform: translateX(-50%);
    transform-origin: unset;
    padding: 2px 8px;
  }
  .your_plan_body {
    padding: 0 16px 16px;
    background: #fff;
  }
  section.new_sect_choose_your_plan a.your_plan_btn {
    font-size: 18px !important;
    width: 100%;
    max-width: unset;
  }
  .your_plan_usd {
    margin: 0 0 16px;
    text-align: right;
    line-height: 18px;
  }
  .your_plan_options_wrapp {
    display: flex;
    justify-content: space-between;
  }
  .your_plan_options_wrapp .your_plan_options + div {
    margin-top: 0;
  }
  .your_plan_options_wrapp .your_plan_options {
    font-weight: 600;
    line-height: 16px;
  }
  .your_plan_options_wrapp .your_plan_options img {
    width: 20px;
    height: 20px;
    margin-right: 2px;
  }
  .your_plan_footer {
    border-top: 2px solid #e0e0e0;
    background: #f6f6f6;
    padding: 13px 16px 16px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
  .your_plan_footer ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .your_plan_footer ul li {
    position: relative;
    color: #555;
    font-family: "Manrope";
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
    padding-left: 23px;
  }
  .your_plan_footer ul li::before{
      position: absolute;
      content: "";
      width: 14px;
      height: 10px;
      background: url(https://conversionratestore.github.io/projects/doyogawithme/img/arrow_acc.svg) no-repeat center center;
      top: 7px;
      left: 0;
      background-size: contain;
  }
  .your_plan_footer ul li + li {
    margin-top: 12px;
  }
  .your_plan_year_new {
    color: #272727;
    font-family: "Manrope";
    font-size: 12px;
    font-weight: 600;
    line-height: 18px;
  }
  .your_plan_year_caption {
    color: #272727;
    font-family: "Manrope";
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
  }
}
  @media(max-width: 385px) {
    .lav-instructors {
      padding-bottom: 90px;
    }
    .lav-journey .splide__arrows {
      margin-top: -5.2em!important;
    }
  }
@media (max-width: 360px) {
.your_plan_name{
  font-size: 16px;
}
.your_plan_header{
  gap: 0;
}
.your_plan_options_wrapp .your_plan_options{
  font-size: 11px;
}
.your_plan_footer ul li{
  font-size: 12px;
}
}

      </style>
      `;

    let newBoxFeatures = /*html */ `
    <section id="promoteSubscriptionWrap" class="promote_subscription_wrap">
      <div class="bgr_gray"></div>
      <div class="new_container">
        <div class="btn_wrapper">
          <h2>Start Free Trial for <span class="accent_color">Unlimited Access</span></h2>
        </div>
        <ul class="new_features_list">
          <li>
            <h3 class="list_main_title" data-title="yoga_person">Unlimited access to 1000+ yoga, meditation and movement classes</h3>
        <p class="list_txt" data-openmobvar>You can enjoy one of the biggest collection of professional classes, including:</p>
        <ul class="professional_classes_list" data-openmobvar>
          <li>
            <p class="list_txt">400+ Vinyasa yoga classes</p>
          </li>
          <li>
            <p class="list_txt">350+ Hatha yoga classes</p>
          </li>
          <li>
            <p class="list_txt">250+ Gentle yoga classes</p>
          </li>
          <li>
            <p class="list_txt">170+ Yoga after workout classes</p>
          </li>
          <li>
            <p class="list_txt">100+ Yoga for back classes</p>
          </li>
          <li>
            <p class="list_txt">And much more!</p>
          </li>
        </ul>
          </li>
          <li>
            <h3 class="list_main_title" data-title="yoga">Complete collection of 30 curated programs & 50 challenges</h3>
            <p class="list_txt" data-openmobvar>Enhance your practice with our comprehensive collection of courses and special challenges.</p>
          </li>
          <li data-desk>
            <h3 class="list_main_title" data-title="premium">Exclusive access to all new releases and livestream events</h3>
          </li>
        </ul>
        <div class="hidden_inform_box">
          <ul data-desk class="hidden_new_features_list">
            <li>
              <p class="list_txt">You can enjoy one of the biggest collection of professional classes, including:</p>
              <ul class="professional_classes_list">
                <li>
                  <p class="list_txt">400+ Vinyasa yoga classes</p>
                </li>
                <li>
                  <p class="list_txt">350+ Hatha yoga classes</p>
                </li>
                <li>
                  <p class="list_txt">250+ Gentle yoga classes</p>
                </li>
                <li>
                  <p class="list_txt">170+ Yoga after workout classes</p>
                </li>
                <li>
                  <p class="list_txt">100+ Yoga for back classes</p>
                </li>
                <li>
                  <p class="list_txt">And much more!</p>
                </li>
              </ul>
            </li>
            <li>
              <p class="list_txt">Enhance your practice with our comprehensive collection of courses and special challenges.</p>
              <ul class="new_features_list mini_block">
                <li>
                  <h3 class="list_main_title" data-title="devices">Watch classes from your laptop, TV, phone or tablet</h3>
                  <p class="list_txt">Take your yoga practice anywhere, anytime using our website or mobile app.</p>
                </li>
              </ul>
            </li>
            <li>
              <p class="list_txt">Enjoy new classes and get 25% discount on livestream events.</p>
              <div class="your_store_wrap">
                <h3 class="list_main_title">Use our App</h3>
                <div class="store_icon">
                    <img class="apple_store_icon" src="https://conversionratestore.github.io/projects/doyogawithme/img/apple_store_icon.svg" alt="apple store icon">
                    <img class="google_play_icon" src="https://conversionratestore.github.io/projects/doyogawithme/img/google_play_icon.svg" alt="google play icon">
                </div>
              </div>
            </li>
          </ul>
              <ul data-mob class="hidden_new_features_list">
      <li>
        <h3 class="list_main_title" data-title="premium">Exclusive access to all new releases and livestream events</h3>
        <p class="list_txt">Enjoy new classes and get 25% discount on livestream events.</p>
      </li>
      <li>
        <ul class="new_features_list mini_block">
          <li>
            <h3 class="list_main_title" data-title="devices">Watch classes from your laptop, TV, phone or tablet</h3>
            <p class="list_txt">Take your yoga practice anywhere, anytime using our website or mobile app.</p>
          </li>
        </ul>
        <div class="your_store_wrap">
          <h3 class="list_main_title">Use our App</h3>
          <div class="store_icon">
            <img class="apple_store_icon" src="https://conversionratestore.github.io/projects/doyogawithme/img/apple_store_icon.svg" alt="apple store icon" />
            <img class="google_play_icon" src="https://conversionratestore.github.io/projects/doyogawithme/img/google_play_icon.svg" alt="google play icon" />
          </div>
        </div>
      </li>
    </ul>
        </div>
        <p class="toggle_btn_features">
          <span>See all Premium features</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="9" viewBox="0 0 15 9" fill="none">
            <path d="M1.5 1L7.5 7L13.5 1" stroke="#027DB8" stroke-width="2" />
          </svg>
        </p>
      </div>
    </section>
    `;

    let newBoxSubscriber = /*html */ `
    <div class="new_box_subscriber"><h2 class="new_title_subscriber">Begin Your Transformation with a Free Trial of our Premium Yoga Classes</h2></div>
<section class="new_sect_choose_your_plan">
  <div class="container_choose_your_plan">
    <div class="border_choose_your_plan">
      <h2 class="new_title_subscriber_mob">Your ultimate Yoga journey starts here</h2>
      <h2>Choose your plan</h2>
      <ul class="your_plan_list">
        <li class="your_plan_link">
          <div class="your_plan_body_free">
            <div class="your_plan_period">Basic access</div>
            <div class="your_plan_name">Free</div>
            <a href="#" class="your_plan_btn btn_free">Create Free Account</a>
          </div>
        </li>
        <li class="your_plan_link">
          <div class="your_plan_header">
            <div class="your_plan_period">Yearly</div>
            <div class="your_plan_name">Unlimited access</div>
          </div>
          <div class="your_plan_body">
            <p class="your_plan_free">Free for the next 7 days</p>
            <div class="your_plan_price">Then <span>$9.08</span>/ month</div>

            <div class="your_plan_year">
              <span class="your_plan_year_old">$167.88</span>
              <span class="your_plan_year_new">$108.99</span><span class="your_plan_year_caption">/year</span>
            </div>

            <div class="your_plan_usd">*All prices in USD</div>
            <a href="#" class="your_plan_btn btn_year">Start Trial now</a>
            <div class="your_plan_options_wrapp">
              <div class="your_plan_options">
                <img src="https://flopsi69.github.io/crs/doYogaWithMe/subscribe/img/calendar.svg" />
                Cancel anytime
              </div>
              <div class="your_plan_options">
                <img src="https://flopsi69.github.io/crs/doYogaWithMe/subscribe/img/guarantee.svg" />
                30-Day Money-Back Guarantee
              </div>
            </div>
          </div>
        </li>
        <li class="your_plan_link">
          <div class="your_plan_header">
            <div class="your_plan_period">Monthly</div>
            <div class="your_plan_name">Unlimited access</div>
          </div>
          <div class="your_plan_body">
            <p class="your_plan_free">Free for the next 7 days</p>
            <div class="your_plan_price">Then <span>$13.99</span>/ month</div>

            <div class="your_plan_usd">*All prices in USD</div>
            <a href="#" class="your_plan_btn btn_month">Start Trial now</a>
            <div class="your_plan_options_wrapp">
              <div class="your_plan_options">
                <img src="https://flopsi69.github.io/crs/doYogaWithMe/subscribe/img/calendar.svg" />
                Cancel anytime
              </div>
              <div class="your_plan_options">
                <img src="https://flopsi69.github.io/crs/doYogaWithMe/subscribe/img/guarantee.svg" />
                30-Day Money-Back Guarantee
              </div>
            </div>
          </div>
        </li>
      </ul>
      <ul class="your_plan_list_mob">
        <li class="your_plan_link">
          <div class="your_plan_body_free_mob">
            <div class="your_plan_txt_free">
              <div class="your_plan_period">Basic access</div>
              <div class="your_plan_name">Free</div>
            </div>
            <a href="#" class="your_plan_btn btn_free">Create Free Account</a>
          </div>
          <div class="your_plan_footer">
            <ul>
              <li>Access 500+ yoga, meditation and movement classes from our extensive library</li>
            </ul>
          </div>
        </li>
        <li class="your_plan_link">
          <div class="your_plan_header">
            <div class="your_plan_block_left">
              <div class="your_plan_period">Yearly</div>
              <div class="your_plan_name">Unlimited access</div>
            </div>
            <div class="your_plan_block_right">
              <p class="your_plan_free"><span>Free</span> <span>/7 days</span></p>
              <div class="your_plan_price">then <span>$9.08</span>/ month</div>
            </div>
          </div>
          <div class="your_plan_body">
            <div class="your_plan_usd">All prices in USD, billed as <span class="your_plan_year_old">$167.88</span> <span class="your_plan_year_new">$108.99</span><span class="your_plan_year_caption">/year</span></div>
            <a href="#" class="your_plan_btn btn_year">Start Trial now</a>
            <div class="your_plan_options_wrapp">
              <div class="your_plan_options">
                <img src="https://flopsi69.github.io/crs/doYogaWithMe/subscribe/img/calendar.svg" />
                Cancel anytime
              </div>
              <div class="your_plan_options">
                <img src="https://flopsi69.github.io/crs/doYogaWithMe/subscribe/img/guarantee.svg" />
                30-Day Money-Back Guarantee
              </div>
            </div>
          </div>
          <div class="your_plan_footer">
            <ul>
              <li>Access 1000s of AD-FREE yoga, meditation and movement classes</li>
              <li>Exclusive access to all new releases and premium content</li>
              <li>Access our complete collection of curated programs & challenges</li>
              <li>25% off livestream events</li>
              <li>Follow your favorite teachers</li>
              <li>Curate your own collection of favorite classes</li>
              <li>Access to our Mobile and TV app</li>
            </ul>
          </div>
        </li>
        <li class="your_plan_link">
          <div class="your_plan_header">
            <div class="your_plan_block_left">
              <div class="your_plan_period">Monthly</div>
              <div class="your_plan_name">Unlimited access</div>
            </div>
            <div class="your_plan_block_right">
              <p class="your_plan_free"><span>Free</span> <span>/7 days</span></p>
              <div class="your_plan_price">then <span>$13.99</span>/ month</div>
            </div>
          </div>
          <div class="your_plan_body">
            <div class="your_plan_usd">*All prices in USD</div>
            <a href="#" class="your_plan_btn btn_month">Start Trial now</a>
            <div class="your_plan_options_wrapp">
              <div class="your_plan_options">
                <img src="https://flopsi69.github.io/crs/doYogaWithMe/subscribe/img/calendar.svg" />
                Cancel anytime
              </div>
              <div class="your_plan_options">
                <img src="https://flopsi69.github.io/crs/doYogaWithMe/subscribe/img/guarantee.svg" />
                30-Day Money-Back Guarantee
              </div>
            </div>
          </div>
          <div class="your_plan_footer">
            <ul>
              <li>Access 1000s of AD-FREE yoga, meditation and movement classes</li>
              <li>Exclusive access to all new releases and premium content</li>
              <li>Access our complete collection of curated programs & challenges</li>
              <li>25% off livestream events</li>
              <li>Follow your favorite teachers</li>
              <li>Curate your own collection of favorite classes</li>
              <li>Access to our Mobile and TV app</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>
<section class='lav-classes'>
  <div class='lav-container'>
    <div class='lav-classes__title'>Explore 1000+ Yoga classes</div>

    <ul class='lav-classes__list lav-desk'>
      <li data-id='30'>Ashtanga Yoga</li>
      <li data-id='213'>Chair Yoga</li>
      <li data-id='31'>Gentle Yoga</li>
      <li data-id='32'>Guided Meditation</li>
      <li data-id='33'>Hatha Yoga</li>
      <li data-id='34'>Jivamukti</li>
      <li data-id='35'>Kundalini Yoga</li>
      <li data-id='36'>Mom and Baby Yoga</li>
      <li data-id='37'>Pilates</li>
      <li data-id='38'>Plus Size Yoga</li>
      <li data-id='39'>PNF</li>
      <li data-id='42'>Pranayama Yoga</li>
      <li data-id='126'>Prenatal/Postnatal Yoga</li>
      <li data-id='44'>Restorative Yoga</li>
      <li data-id='125'>Slow Flow</li>
      <li data-id='127'>Values-based Education</li>
      <li data-id='45'>Vinyasa/Power Yoga</li>
      <li data-id='46'>Yin and Yin/Yang Yoga</li>
      <li data-id='47'>Yoga at Work</li>
      <li data-id='49'>Yoga for Athletes</li>
      <li data-id='50'>Yoga for Runners</li>
      <li data-id='51'>Yoga for Seniors</li>
      <li data-id='53'>Yoga Therapy</li>
      <li data-id='54'>Yoga for Back Care</li>
      <li data-id='55'>Yoga for Kids</li>
    </ul>

    <ul class='lav-classes__list lav-mob'>
      <li data-id='30'>Ashtanga Yoga</li>
      <li data-id='213'>Chair Yoga</li>
      <li data-id='31'>Gentle Yoga</li>
      <li data-id='32'>Guided Meditation</li>
      <li data-id='36'>Mom and Baby Yoga</li>
      <li data-id='34'>Jivamukti</li>
      <li data-id='33'>Hatha Yoga</li>
      <li data-id='35'>Kundalini Yoga</li>
      <li data-id='37'>Pilates</li>
      <li data-id='38'>Plus Size Yoga</li>
      <li data-id='126'>Prenatal/Postnatal Yoga</li>
      <li data-id='39'>PNF</li>
      <li data-id='42'>Pranayama Yoga</li>
      <li data-id='44'>Restorative Yoga</li>
      <li data-id='125'>Slow Flow</li>
      <li data-id='127'>Values-based Education</li>
      <li data-id='46'>Yin and Yin/Yang Yoga</li>
      <li data-id='47'>Yoga at Work</li>
      <li data-id='45'>Vinyasa/Power Yoga</li>
      <li data-id='53'>Yoga Therapy</li>
      <li data-id='49'>Yoga for Athletes</li>
      <li data-id='50'>Yoga for Runners</li>
      <li data-id='51'>Yoga for Seniors</li>
      <li data-id='54'>Yoga for Back Care</li>
      <li data-id='55'>Yoga for Kids</li>
    </ul>

    <button class='lav-classes__toggle lav-btn lav-btn_trans sfc-button lav-mob'>
      Show More
    </button>
  </div>
</section>

<section class='lav-pers'>
  <div class='lav-container'>
    <div class='lav-pers__title'>Count the ways you can <br/> personalize your practice</div>

    <ul class='lav-pers__list'>
      <li class='lav-pers__item'>
        <div class='lav-pers__item-num'>25+</div>
        <div class='lav-pers__item-title'>Styles</div>
        <div class='lav-pers__item-caption'>Keep your mind and body guessing or deepen your practice.</div>
      </li>

      <li class='lav-pers__item'>
        <div class='lav-pers__item-num'>20+</div>
        <div class='lav-pers__item-title'>Programs</div>
        <div class='lav-pers__item-caption'>Created for beginner, intermediate, and advanced practices.</div>
      </li>

      <li class='lav-pers__item'>
        <div class='lav-pers__item-num'>35+</div>
        <div class='lav-pers__item-title'>Challenges</div>
        <div class='lav-pers__item-caption'>Carefully designed series of classes that help you get healthier, stronger, and more flexible.</div>
      </li>

      <li class='lav-pers__item'>
        <div class='lav-pers__item-num'>90+</div>
        <div class='lav-pers__item-title'>Guided Meditations</div>
        <div class='lav-pers__item-caption'>Sleep better, build mindfulness, enhance performance or let go of anxiety.</div>
      </li>

      <li class='lav-pers__item'>
        <div class='lav-pers__item-num'>2-90</div>
        <div class='lav-pers__item-title'>Minute Classes</div>
        <div class='lav-pers__item-caption'>To get you on your mat with whatever time you have.</div>
      </li>
    </ul>
  </div>
</section>

<section class='lav-instructors splide'>
  <div class='lav-container'>
    <div class='lav-instructors__head'>
      <div class='lav-instructors__title'>Our Instructors</div>

      <div class="splide__arrows">
        <button class="splide__arrow splide__arrow--prev">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path></svg>
        </button>
        <button class="splide__arrow splide__arrow--next">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path></svg>
        </button>
      </div>
    </div>

    <div class="splide__track">
      <div class='lav-instructors__list splide__list'></div>
    </div>

    <div class="splide__progress">
      <div class="splide__progressBar" />
    </div>
  </div>
</section>
    `;

    document.head.insertAdjacentHTML("beforeend", becomeASubscriberStyle);

    renderNewBoxSubscriber();
    // if user is free
    if (document.querySelector('[data-drupal-selector="drupal-settings-json"]') && JSON.parse(document.querySelector('[data-drupal-selector="drupal-settings-json"]')?.textContent).dywm.gtm.customer_info.user.isSubscriber === false) {
      isNotSubscriber();
    }

    //
    function renderNewBoxSubscriber() {
      if (document.querySelector(".o-page__main") && !document.querySelector(".new_box_subscriber")) {
        document.querySelector(".o-page__main").insertAdjacentHTML("beforebegin", newBoxSubscriber);
      }

      if (document.querySelector(".new_box_subscriber")) {
        document.querySelectorAll(".your_plan_btn.btn_free").forEach((el) => {
          el.addEventListener("click", (e) => {
            e.preventDefault();
            if (window.innerWidth <= 768) {
              pushDataLayer(["exp_trial_paymobil_but_getstar", "Get started now", "Button", "Payment page mobile"]);
            } else {
              pushDataLayer(["exp_trial_payment_but_create", "Create Free Account", "Button", "Payment page"]);
            }
            document.querySelector('[href="/yogi/register"]').click();
          });
        });
        document.querySelectorAll(".your_plan_btn.btn_year").forEach((el) => {
          el.addEventListener("click", (e) => {
            e.preventDefault();
            if (window.innerWidth <= 768) {
              if (document.querySelector('.menu--account [data-drupal-link-system-path="yogi/login"]')) {
                pushDataLayer(["exp_trial_paymobi_but_planpage", "Start Free 7-day Trial - Yearly - not registered", "Button", "Payment page mobile"]);
              } else {
                pushDataLayer(["exp_trial_paymobi_but_planpage", "Start Free 7-day Trial - Yearly - registered", "Button", "Payment page mobile"]);
              }
            } else {
              if (document.querySelector('.menu--account [data-drupal-link-system-path="yogi/login"]')) {
                pushDataLayer(["exp_trial_payment_but_planpage", "Start Trial now - Yearly - not registered", "Button", "Payment page"]);
              } else {
                pushDataLayer(["exp_trial_payment_but_planpage", "Start Trial now - Yearly - registered", "Button", "Payment page"]);
              }
            }
            document.querySelector('[href="/express-checkout/139"]').click();
          });
        });
        document.querySelectorAll(".your_plan_btn.btn_month").forEach((el) => {
          el.addEventListener("click", (e) => {
            e.preventDefault();
            if (window.innerWidth <= 768) {
              if (document.querySelector('.menu--account [data-drupal-link-system-path="yogi/login"]')) {
                pushDataLayer(["exp_trial_paymobi_but_planpage", "Start Free 7-day Trial - Monthly - not registered", "Button", "Payment page mobile"]);
              } else {
                pushDataLayer(["exp_trial_paymobi_but_planpage", "Start Free 7-day Trial - Monthly - registered", "Button", "Payment page mobile"]);
              }
            } else {
              if (document.querySelector('.menu--account [data-drupal-link-system-path="yogi/login"]')) {
                pushDataLayer(["exp_trial_payment_but_planpage", "Start Trial now - Monthly - not registered", "Button", "Payment page"]);
              } else {
                pushDataLayer(["exp_trial_payment_but_planpage", "Start Trial now - Monthly - registered", "Button", "Payment page"]);
              }
            }
            document.querySelector('[href="/express-checkout/138"]').click();
          });
        });
        let auth = setInterval(() => {
          if (!document.querySelector('.menu--account [data-drupal-link-system-path="yogi/login"]') && !document.querySelector(".container_choose_your_plan").classList.contains("not_free")) {
            clearInterval(auth);
            document.querySelector(".container_choose_your_plan").classList.add("not_free");
          }
        }, 100);
        initClasses();
        initInstructions();
      }

      function initClasses() {
        for (let el of document.querySelectorAll(".lav-classes__list li")) {
          el.addEventListener("click", function (e) {
            e.preventDefault();
            const id = el.dataset.id;
            // gaEvent("exp_ch_pl_page_yoga", `yoga class button - ${el.innerText.trim()}`, "Button", "Explore 1000+ Yoga classes section");

            location.href = `https://www.doyogawithme.com/yoga-classes?field_instructor_target_id=&style[${id}]=${id}&field_subscribers_only_value=All&sort_by=created`;
          });
        }

        document.querySelector(".lav-classes__toggle").addEventListener("click", function (e) {
          e.preventDefault();
          // gaEvent("exp_ch_pl_page_show", "Show now button", "Button", "Explore 1000+ Yoga classes section");
          this.remove();
          document.querySelector(".lav-classes__list.lav-mob").classList.add("active");
        });
      }

      function initInstructions() {
        let parentEl = document.querySelector(".lav-instructors__list");

        for (let person of instructorsArr) {
          const slide = `
      <a href='${person.link}' class='lav-instr splide__slide'>
        <div class='lav-instr__img' style='background-image: url("${person.img}")'></div>
        <div class='lav-instr__info'>
          <div class='lav-instr__name'>${person.name}</div>
          <div class='lav-instr__caption'>${person.caption}</div>
        </div>
      </a>
    `;

          parentEl.insertAdjacentHTML("beforeend", slide);
        }

        const waitingSplide = setInterval(() => {
          if (typeof Splide === "function") {
            clearInterval(waitingSplide);

            const splide = new Splide(".splide", {
              autoWidth: true,
              pagination: false,
              gap: "1em",
            });

            splide.on("mounted", function () {
              splide.root.querySelector(".splide__progress").style.display = "block";
              var progressBar = splide.root.querySelector(".splide__progressBar");

              console.log(progressBar);

              if (progressBar) {
                var fillProgressBar = function fillProgressBar() {
                  var end = splide.Components.Controller.getEnd() + 1;
                  var rate = Math.min((splide.index + 1) / end, 1);
                  progressBar.style.width = String(100 * rate) + "%";
                };

                fillProgressBar();
                splide.on("mounted move", fillProgressBar);
              }
              // $sfc.find('.sfc-slider__progress').show();
            });

            splide.mount();
          }
        });
      }
    }

    //   isNotSubscriber
    function isNotSubscriber() {
      let becomeSubscriberFind = setInterval(() => {
        if (document.querySelector(".new_box_subscriber")) {
          clearInterval(becomeSubscriberFind);
          localStorage.setItem("newBannerVisib", "withoutBtn");
          document.querySelector(".new_box_subscriber")?.insertAdjacentHTML("afterend", newBoxFeatures);
        }
      }, 100);

      let findToggleBtn = setInterval(() => {
        if (typeof jQuery === "function" && document.querySelector(".toggle_btn_features")) {
          clearInterval(findToggleBtn);
          jQuery(".toggle_btn_features")?.click(function () {
            if (document.querySelector('.menu--account [data-drupal-link-system-path="yogi/login"]')) {
              pushDataLayer(["exp_trial_payment_link_seepage", "See all Premium features - not registered", "Link", "Payment page"]);
            } else {
              pushDataLayer(["exp_trial_payment_link_seepage", "See all Premium features - registered", "Link", "Payment page"]);
            }
            jQuery(".hidden_inform_box").slideToggle();
            setTimeout(() => {
              document.querySelector(".new_box_subscriber").scrollIntoView({ block: "start", behavior: "smooth" });
            }, 400);
            if (!jQuery(this).hasClass("open_var")) {
              jQuery(this).addClass("open_var");
              document.querySelector(".toggle_btn_features span").textContent = "Less all Premium features";
              if (window.innerWidth <= 768) {
                document.querySelectorAll("[data-openmobvar]").forEach((el) => {
                  el.classList.add("open_var");
                });
              }
            } else {
              jQuery(this).removeClass("open_var");
              document.querySelector(".toggle_btn_features span").textContent = "See all Premium features";
              if (window.innerWidth <= 768) {
                document.querySelectorAll("[data-openmobvar]").forEach((el) => {
                  el.classList.remove("open_var");
                });
              }
            }
          });
        }
      }, 100);
    }

    visibElem();
    function visibElem() {
      waitForElement(".new_sect_choose_your_plan").then((el) => {
        handleVisibility(el, ["exp_trial_payment_visib_focus", "{{focusTime}", "Visibility", "Payment page"]);
      });
    }

    function handleVisibility(el, eventParams) {
      let isVisible = false;
      let entryTime;
      const config = {
        root: null,
        threshold: 0, // Trigger when any part of the element is out of viewport
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!isVisible) {
              // The element has become visible
              isVisible = true;
              entryTime = new Date().getTime();
            }
          } else if (isVisible) {
            // The element is out of the viewport, calculate visibility duration
            isVisible = false;
            const exitTime = new Date().getTime();
            const visibilityDuration = exitTime - entryTime; // / 1000 Convert to seconds
            const roundedDuration = Math.round(visibilityDuration);

            if (roundedDuration) {
              const eventData = eventParams;
              eventData[1] = roundedDuration;
              pushDataLayer(eventData);
              observer.disconnect();
            }
          }
        });
      }, config);

      observer.observe(el);
    }

    function waitForElement(selector) {
      return new Promise((resolve) => {
        if (document.querySelector(selector)) {
          return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(() => {
          if (document.querySelector(selector)) {
            resolve(document.querySelector(selector));
            observer.disconnect();
          }
        });

        observer.observe(document.documentElement, {
          childList: true,
          subtree: true,
        });
      });
    }

    const record = setInterval(() => {
      if (typeof clarity === "function") {
        clearInterval(record);
        clarity("set", "exp_trial", "variant_1");
      }
    }, 200);
  }
}, 100);
