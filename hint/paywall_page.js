let scriptCustom = document.createElement("script");
scriptCustom.src = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js";
scriptCustom.async = false;
document.head.appendChild(scriptCustom);

let scriptCustomStyle = document.createElement("link");
scriptCustomStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css";
scriptCustomStyle.rel = "stylesheet";
document.head.appendChild(scriptCustomStyle);

let slickInterval = setInterval(() => {
  if (typeof jQuery(".video_slider").slick === "function") {
    clearInterval(slickInterval);
    //  slider
    let slider = jQuery(".video_slider").slick({
      arrows: false,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      infinite: true,
    });
  }
}, 100);

let arrR = {
  1: [`I`, `Isaiah tommy`, `Precise needles, answers and explanations some thoughts about myself and often told me I was struggling with myself. And totally TRUE! Mindblowing but this app helps me throw more and more throws.`],
  2: [`M`, `Mamafrauts`, `the best Vladana is the BEST astrologer I’ve gotten reading from! She is very thorough and gives detailed info based on what questions you ask her... highly recommend!!! :)`],
  3: [`H`, `HappyFeeetz`, `Great app My astrologer guide is pretty communicative and informative. I do not know much about astrology so she helped me understand some concepts.`],
  4: [`C`, `Cassandrats`, `Astrology insights with Vladana hint has been a wonderful portal to understanding more about my birth chart and current transits happening- my astrologer Vladana is patient with my questions and always has clear and helpful info connected with the sky!`],
  5: [`C`, `CeCe JuzMe`, `Rosanna is awesome She has been there every step of the way with my journey. She responses very quickly without hesitation. I would recommend her to anyone.`],
  6: [`M`, `MrsMMiller`, `AKHO is a STAR herself! I’m so blessed to have found this app and Akho! She is a wonderful astrologist - very clear and extremely thorough with her analysis and answers to my many questions. I feel safe and comfortable communicating with her and I look forward to more time working with her!`],
  7: [`C`, `Christinamariemelanie`, `Amazing Astrologer!!!! Highly recommend!!!!!!`],
  8: [`M`, `Mcookie7Mandy`, `Hint is amazing! This app is wonderful and is so easy to use. My personal guide Vladana is so on point with her insights and not fake suggestions that could fit to anyone. Everything is personalized to just you based on only your own information that you give so it can’t be misread or misleading. I love the compatibility insights as well. All in all I’m very pleased and recommend to anyone looking for a reputable website!`],
  9: [`S`, `StudemanSteve`, `What a lovely app! I've tried a number of horoscope apps, but this one is the most accurate by a long shot. There are days when the app's forecast is so in sync with my actual experience that it feels like the app is directly addressing me. I am really smitten with this app.`],
  10: [`E`, `ElealonWhyse`, `A clear step by step approach I've been reading my daily horoscope since I was a youngster, so I can confidently say that they are the best horoscopes I've ever had access to. My friends who are unhappy with their horoscopes often come to me to find out what the ""good one"" predicts (aka. the one from this app).`],
  11: [`C`, `CelyanBasars`, `Best astrology experience I have a background in science, that's why I still have a healthy amount of skepticism. However, one of my friends advised that I check out Hint since I enjoy reading astrology as a tool that helps me to frame my thinking and the world in a viewpoint that is more neutral or positive. There are patterns, so the only thing I can think of is that there must be some kind of scientific basis that we haven't worked out yet. I don't have any belief in anything spiritual, but there are patterns. To sum it all up, I'm not someone who is easily swayed.`],
  12: [`T`, `Thxrnhill`, `Christi at Hint. THE BEST. she’s the only astrologer i’ve matched up with that’s worked. my day to day horoscopes are very accurate and now finding her my questions are answered in a way that makes me feel satisfied. fav astro app fs.`],
  13: [`J`, `J1212121234567`, `Chelene Chelene has been with me for a couple of months now, her words has been supportive and uplifting to my situation. Thank you.`],
  14: [`T`, `Tinkle when`, `The BEST!!!! ♐️🔮 Let me tell you, Hint is my go to app for astrology! So accurate, layout is super simple and easy to navigate. HUGE bonus is the personal astrologers on the site. If you can choose, my recommendation is Vladana. Oh my god, so accurate! She amazing! Very empathetic, and on point!.. and it's included in membership, you don't have to pay extra for learning about yourself. Vladana is very clear when reaching out, communication is through message or she'll send personalized video messages to you!. Reach out now!!!!!!!`],
};

function setList(img, name, text) {
  return `
<div class="review_card">
  <div class="review_card_info">
    <p class="review_card_img">${img}</p>
    <div class="review_card_stars">
      <p class="review_card_name">${name}</p>
      <span class="review_card_star"></span>
    </div>
  </div>
  <p class="verified_txt">
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 0C3.14005 0 0 3.14005 0 7C0 10.86 3.14005 14 7 14C10.86 14 14 10.86 14 7C14 3.14005 10.86 0 7 0Z" fill="#75DB9C" />
      <path d="M11.1724 5.31321L6.48867 9.99677C6.34815 10.1373 6.1637 10.208 5.97925 10.208C5.7948 10.208 5.61035 10.1373 5.46984 9.99677L3.12805 7.65499C2.84623 7.3733 2.84623 6.91785 3.12805 6.63616C3.40974 6.35434 3.86506 6.35434 4.14689 6.63616L5.97925 8.46852L10.1535 4.29437C10.4352 4.01255 10.8905 4.01255 11.1724 4.29437C11.4541 4.57606 11.4541 5.03138 11.1724 5.31321Z" fill="white" /></svg
    >Verified customer
  </p>
  <p class="review_card_descr">${text}</p>
</div>
  `;
}
if (document.querySelector("#reviewsBlock")) {
  for (let key in arrR) {
    document.querySelector(".reviews_wrap").insertAdjacentHTML("beforeend", setList(arrR[key][0], arrR[key][1], arrR[key][2]));
  }
}

// click on load more btn
if (document.querySelector(".load_more_btn")) {
  document.querySelector(".load_more_btn").addEventListener("click", (e) => {
    // e.target.style.display = "none";
    console.log(`load_more_btn`);
  });
}

// accardionToggle
$(".accardion_link_unique_identities").click(function (e) {
  $(this).toggleClass("active_block");
  $(this).closest("li").toggleClass("active_block");
  $(this).next(".accardion_lists_unique_identities").slideToggle();
  if ($(".accardion_link_unique_identities").not(this)) {
    $(".accardion_link_unique_identities").not(this).next(".accardion_lists_unique_identities").css("display", "none");
    $(".accardion_link_unique_identities").not(this).removeClass("active_block");
    $(".accardion_link_unique_identities").not(this).closest("li").removeClass("active_block");
  }

  // const headerOffset = 10;
  // const elementPosition = this.getBoundingClientRect().top;
  // const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  // window.scrollTo({
  //   top: offsetPosition,
  //   behavior: "smooth",
  // });
});

const circle = document.querySelector(".circle-progress");
const circleRadius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * circleRadius;
const circlePercent = document.querySelector(".count_percent");
let count = 0;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;
console.log(circumference);

function setProgress(percent) {
  const offsetCount = setInterval(() => {
    if (circle.style.strokeDashoffset >= circumference) {
      clearInterval(offsetCount);
    }
    circle.style.strokeDashoffset -= 1;
    circle.style.strokeDashoffset = circumference - (percent / 100) * circumference;

    circlePercent.innerHTML = count + "%";
    if (count >= percent) {
      clearInterval(offsetCount);
    }
    count += 1;
  }, 10);
}
setProgress(80);
