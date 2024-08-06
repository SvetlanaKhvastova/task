import { git, reviews, press, sliderData, patches } from './data'
// @ts-ignore
import markdownFileContent from './styles.css?raw'

const temp = /* HTML */ `
  <section>
    <h2>Discover our plant-powered sticker range</h2>
    <div class="content_wrapper">
      <div class="slider_wrapper parent_slider">
        ${patches
          .map((p, i) => {
            return /* HTML */ ` <div class="item">
              <img src="${git}/img/new-home-page/as_seen.svg" class="tv" alt="tv" />
              <span class="save">40% off</span>
              <div class="img">
                <img src="${p.img[2]}" alt="main" />
                <img class="sub_img" src="${p.img2}" alt="illustration" />
              </div>
              <p class="name">${p.name}</p>
              <p class="sub_text">${p.subText}</p>
              <div class="qty">
                <span
                  class="active"
                  data-variant="${p.variants[2]}"
                  data-img="${p.img[2]}"
                  data-price="12.00"
                  data-save="40"
                  >3 packs</span
                >
                <span data-variant="${p.variants[0]}" data-img="${p.img[0]}" data-price="14.99" data-save="50"
                  >1 pack</span
                >
                <span data-variant="${p.variants[1]}" data-img="${p.img[1]}" data-price="13.50" data-save="33"
                  >2 packs</span
                >
                <span data-variant="${p.variants[3]}" data-img="${p.img[3]}" data-price="10.50" data-save="48"
                  >4 packs</span
                >
              </div>
              <p class="price">$12.00 each</p>
              <div class="btns">
                <a href="${p.link}">Learn More</a>
                <button data-id="${p.variants[2]}">Add to cart</button>
              </div>
            </div>`
          })
          .join('')}
      </div>
      <div class="slider_dots slider_dots1">
        <span><i></i></span>
        <span><i></i></span>
        <span><i></i></span>
        <span><i></i></span>
      </div>
    </div>
  </section>
`

export const upBtn = /* HTML */ `
  <div class="up_btn">
    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
      <path
        d="M26.0002 47.6666C37.9663 47.6666 47.6668 37.9661 47.6668 25.9999C47.6668 14.0337 37.9663 4.33325 26.0002 4.33325C14.034 4.33325 4.3335 14.0337 4.3335 25.9999C4.3335 37.9661 14.034 47.6666 26.0002 47.6666Z"
        fill="#FF209E"
      />
      <path d="M26 33.5832V20.5833" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M19.5 24.9167L26 18.4167L32.5 24.9167"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
`

export const mainBlock = device => {
  return /* HTML */ `
    <section class="new_main_block">
      <style>
        ${markdownFileContent}
      </style>
      <span class="hi desktop">
        <img src="${git}/img/new-home-page/side.svg" alt="hi" />
      </span>
      <a class="total_reviews desktop">
        <img src="${git}/img/new-home-page/stars_green.svg" alt="stars" />
        <span>Excellent | 2,943</span>
        <span>Customer reviews</span>
      </a>
      <h1>
        Natural solutions for better<br class="desktop" />
        sleep, mood, focus and more!
      </h1>
      <div class="images">
        <a href="/collections/wellness-cognitive"
          ><img src="${git}/img/new-home-page/img_1${device === 'mobile' ? '_mob' : ''}.webp" alt="img1"
        /></a>
        <a href="/collections/outdoor-protection"
          ><img src="${git}/img/new-home-page/img_2${device === 'mobile' ? '_mob' : ''}.webp" alt="img2"
        /></a>
        <a href="/collections/respiratory-allergy-relief"
          ><img src="${git}/img/new-home-page/img_3.webp" alt="img3"
        /></a>
      </div>
      <ul class="points content_wrapper">
        <li><img src="${git}/img/new-home-page/non-toxic.svg" alt="non_toxic" /><span>Non Toxic, DEET free</span></li>
        <li><img src="${git}/img/new-home-page/baby-boy.svg" alt="kid" /><span>Safe for kids (0+)</span></li>
        <li><img src="${git}/img/new-home-page/australia.svg" alt="au" /><span>Designed in Australia</span></li>
        <li><img src="${git}/img/new-home-page/express-delivery.svg" alt="ship" /><span>FREE Shipping </span></li>
      </ul>
      <a class="total_reviews mobile" href="#">
        <img src="${git}/img/new-home-page/stars_green.svg" alt="stars" />
        <span>Excellent | 2,943</span>
        <span>Customer reviews</span>
      </a>
      <a class="crs_btn" href="/collections/homepage">Explore NatPat Stickers</a>
      <p>
        <img src="${git}/img/new-home-page/express-delivery.svg" alt="ship" />
        FREE Shipping | 365-day Money Back Guarantee
      </p>
    </section>
  `
}

export const stickersSlider = /* HTML */ ` <section class="new_stickers_slider"></section> `

export const trustPilotReviews = /* HTML */ `
  <section class="new_trustpilot_reviews content_wrapper">
    <p>
      <img src="${git}/img/trustpilot.svg" alt="trustpilot" />
      <img src="${git}/img/stars-trust.svg" alt="trustpilot stars" />
      <span>Excellent</span>
    </p>
    <h2>Trusted by over <b>1 million</b> customers</h2>
    <div class="insta_widget"></div>
    <ul class="reviews_trust parent_slider">
      ${reviews
        .map((r, i) => {
          return /* HTML */ ` <li>
            <p>${r.patchType}</p>
            <p>${r.text}</p>
            <img src="${git}/img/new-home-page/stars_green.svg" alt="stars" />
          </li>`
        })
        .join('')}
    </ul>
    <div class="slider_dots slider_dots2 mobile">
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
    </div>
    <div class="pages_r desktop">
      <span class="active">1</span>
      <span>2</span>
      <span>3</span>
    </div>
  </section>
`

export const sliderNews = /* HTML */ ` <section class="new_slider_news">
  <h2>We're in the news... for good reasons</h2>
  <div class="slider_wrapper parent_slider">
    ${press
      .map((p, i) => {
        return /* HTML */ `
          <div class="slide">
            <div class="bg"><img src="${git}/img/slide_bg_${i + 1}.png" /></div>
            <p>${p.text}</p>
            <img src="${p.img}" alt="press logo" />
          </div>
        `
      })
      .join('')}
  </div>
  <div class="slider_dots slider_dots3">
    <span><i></i></span>
    <span><i></i></span>
    <span><i></i></span>
    <span><i></i></span>
    <span><i></i></span>
  </div>
</section>`

export const scienceBlock = /* HTML */ `
  <section class="new_science_block">
    <h2>Unlocking the science behind NATPAT patches</h2>
    <div class="content_wrapper">
      <div>
        <p>
          At NATPAT, skepticism is a sign of care, especially when it comes to products for our loved ones. That's why
          we're not just about promises; we're about proving. Our mission is to blend playful innovation with solid
          science, offering you peace of mind with every NATPAT patch. From natural essential oils to cutting-edge
          slow-release technology, every detail of NATPAT patches is meticulously planned to ensure safety, avoid
          allergies, and deliver measurable results.
          <img src="${git}/img/new-home-page/character1.svg" alt="character" />
        </p>
      </div>
      <div>
        <p>
          Discover the power of AromaWeave™, our pioneering bamboo-based fiber that's reshaping how we experience
          essential oils. With a commitment to sustainability and effectiveness, AromaWeave™ stands out with its
          biodegradable nature and unique ability to deliver consistent, long-lasting aromas. Join us as we delve into
          the science, sustainability, and sensory delight of AromaWeave™, and see how it's setting new standards in
          the world of aromatherapy.
          <img src="${git}/img/new-home-page/character2.svg" alt="character" />
        </p>
      </div>
    </div>
  </section>
`

export const natPatBlock = /* HTML */ ` <section class="new_natpat_block">
  <div class="layer">
    <p>
      "At NATPAT, it's not just about products; it's about a way of life. We're here to bring you a kinder, more fun,
      and totally natural approach to feeling great. Join us in this journey towards a happier, healthier you!"
      <img src="${git}/img/new-home-page/nat_pat.svg" alt="natpat" />
    </p>
  </div>
  <div class="parallax"></div>
</section>`

export const infoBlock = /* HTML */ `<section class="new_info_block">
  <div class="content_wrapper">
    <div class="slider_photo">
      ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        .map(i => {
          return /*HTML*/ `<div class="img_slide">
            <img src="${git}/img/new-home-page/slider_photo_${i}.jpg" alt="img1" />
          </div>`
        })
        .join('')}
    </div>
    <div>
      <p>
        Hey there! At NATPAT, we're all about unlocking the superhero potential in every kiddo. We totally get it,
        right? Kids have their ups and downs, from mood swings that could rival any soap opera to those nights when they
        just won't hit the hay. And let's be honest, us parents could use a little help steering the ship sometimes.
        <br /><br />
        In this fast-paced world where popping a pill seems like the go-to, we thought, “Hey, why not take a step back
        and give Mother Nature a high five?” Sure, meds have their place (no shade there!), but why not start with
        something a bit more chill?<br /><br />
        Enter our secret weapon: stickers! But not just any stickers. These little guys are like a comforting hug from
        your favorite essential oils. They've been around for ages and trust us, they’re not just old wives' tales.
        Science gives them a big thumbs up too!<br /><br />
        Next time you're wandering down those drugstore aisles, remember our mantra: “Start with a sticker.” Our
        stickers are more than just a pretty face. They're packed with nature's goodness and are an absolute hit with
        the kids. It's like sneaking veggies into their favorite meal – they'll love them, and you'll love knowing
        you're choosing something gentle and effective.
      </p>
      <p class="special">
        At NATPAT, we’re doing more than just selling something cool. We’re all about bringing smiles, health, and a bit
        of nature’s magic into your family's life. Here’s to making well-being fun, natural, and full of joy! 🌿✨🌟
      </p>
    </div>
  </div>
</section>`

export const reviewsBlock = /* HTML */ `
  <section class="new_reviews_block">
    <div class="content_wrapper">
      <div class="basic_slider parent_slider"></div>
      <div class="slider_dots slider_dots4">
        <span><i></i></span>
        <span><i></i></span>
        <span><i></i></span>
        <span><i></i></span>
      </div>
    </div>
  </section>
`

export const info2Block = /* HTML */ `
  <section class="new_info2_block">
    <div class="content_wrapper">
      <h2>Health and wellness patches</h2>
      <div>
        <div class="img desktop">
          <img src="${git}/img/new-home-page/packs.webp" alt="packs" />
        </div>
        <p>
          NATPAT stands as a beacon of innovation in the realm of health and wellness, offering a unique range of
          patches and stickers designed to enhance your daily life. Each product is crafted with care, ensuring a
          natural, effective solution to various everyday challenges. <br /><br />
          <span class="img mobile">
            <img src="${git}/img/new-home-page/packs.webp" alt="packs" />
          </span>
          For those seeking tranquility in their hectic lives, NATPAT's <a
            href="/products/zenpatch-mood-calming-stickers"
            >calming patches</a
          > and <a href="/products/zenpatch-mood-calming-stickers">calming stickers</a> offer a soothing escape. The <a
            href="/products/sunnypatch"
            >uv stickers</a
          > are a must-have for sun lovers, providing a smart way to monitor UV exposure. When congestion hits, the <a
            href="/products/stuffypatch"
            >stuffy patch</a
          > is an excellent ally, helping to alleviate discomfort.<br /><br />
          Parents will appreciate the gentle effectiveness of the <a
            href="/products/sleepypatch-sleep-promoting-stickers"
            >sleepy patch for kids</a
          >, ensuring a peaceful night for the little ones. For adults, the <a
            href="/products/sleepypatch-sleep-promoting-stickers"
            >sleep patch for adults</a
          > offers a similar benefit, promoting restful sleep. The <a href="/products/pack-magic-patch-bundles"
            >itch patch</a
          > is a quick solution for those annoying itches, while the <a href="/pages/magicpatch">bug bite patches</a
          > provide relief from insect bites.<br /><br />
          For those needing a concentration boost, the <a href="/products/focuspatch-focus-enhancing-stickers"
            >focus patch</a
          > is a game-changer. If managing appetite is a concern, the <a
            href="/products/cravepatch-appetite-control-stickers"
            >appetite suppressant patches</a
          > are a discreet and effective aid. Allergy sufferers will find solace in the <a
            href="/products/allergypatch-allergy-relief-stickers"
            >allergy relief stickers</a
          >, designed to ease symptoms naturally.<br /><br />
          NATPAT also offers specialized solutions for mosquito protection. Their <a
            href="/products/adult-buzzpatch-mosquito-repellent-patches"
          >
            mosquito patches for adults </a
          > and <a href="/products/buzzpatch-bundles">mosquito patches for kids</a> are a safe, chemical-free way to
          keep mosquitoes at bay. Additionally, the <a href="/pages/buzzpatch">mosquito stickers</a>  provide a fun and
          effective alternative for children.<br /><br />
          In essence, NATPAT is more than just a brand; it's a lifestyle choice for those who prioritize health,
          wellness, and natural solutions in their daily lives.
        </p>
      </div>
    </div>
  </section>
`
