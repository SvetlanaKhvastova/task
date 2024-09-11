import { svg, git, patches, reviews, press } from './data'

export const guaranteeBlock = /* HTML */ `
  <div class="guarantee_block">
    ${innerWidth > 768 ? svg.guaranteeIcon : svg.guaranteeIconMob}
    <span>365-day Money Back Guarantee </span>
  </div>
`

export const differentInfoHeroBlock = /* HTML */ `
  <div class="different_info_hero_block">
    <div class="bgr_block">${svg.bgrIcon}</div>
    <ul class="different_info_hero_list">
      <li>
        ${svg.nonToxicIcon}
        <span>Non Toxic, DEET free</span>
      </li>
      <li>
        ${svg.safeForKidsIcon}
        <span>Safe for kids (0+)</span>
      </li>
      <li>
        ${svg.designedInAustraliaIcon}
        <span>Designed in Australia</span>
      </li>
      <li>
        ${svg.freeShippingIcon}
        <span>FREE Shipping </span>
      </li>
    </ul>
  </div>
`

export const shopByCategoryBlock = /* HTML */ `
  <div class="shop_by_category_block">
    <h2>SHOP BY CATEGORY</h2>
    <ul>
      <li class="outdoor_protection_item">
        <a href="/collections/outdoor-protection">
          <div>
            <div class="item_descr">
              ${svg.outdoorProtectionIcon}
              <p>Outdoor Protection</p>
            </div>
            <div class="item_btn">
              <span>View collection</span>
              <span class="icon_bgr">${svg.arrowRightIcon}</span>
            </div>
          </div>
        </a>
      </li>
      <li class="wellness_item">
        <a href="/collections/wellness-cognitive">
          <div>
            <div class="item_descr">
              ${svg.wellnessIcon}
              <p>Wellness & Cognitive</p>
            </div>
            <div class="item_btn">
              <span>View collection</span>
              <span class="icon_bgr">${svg.arrowRightIcon}</span>
            </div>
          </div>
        </a>
      </li>
      <li class="pets_item">
        <a href="/collections/pets">
          <div>
            <div class="item_descr">
              ${svg.petsIcon}
              <p>Pets</p>
            </div>
            <div class="item_btn">
              <span>View collection</span>
              <span class="icon_bgr">${svg.arrowRightIcon}</span>
            </div>
          </div>
        </a>
      </li>
      <li class="allergy_relief_item">
        <a href="/collections/respiratory-allergy-relief">
          <div>
            <div class="item_descr">
              ${svg.respiratoryAllergyReliefIcon}
              <p>Respiratory & Allergy Relief</p>
            </div>
            <div class="item_btn">
              <span>View collection</span>
              <span class="icon_bgr">${svg.arrowRightIcon}</span>
            </div>
          </div>
        </a>
      </li>
      <li class="allergy_relief_item">
        <a href="/collections/bundles">
          <div>
            <div class="item_descr">
              <p>Shop our Bundles Collection</p>
            </div>
            <div class="item_btn">
              <span>View Bundles Collection</span>
              <span class="icon_bgr">${svg.arrowRightIcon}</span>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
`

export const stickyBlock = /* HTML */ `
  <div class="sticky_block">
    <div class="title_wrapper">
      <h2>Natural Solutions for Enhanced Well-being</h2>
      <p>Better Sleep, Improved Mood, Sharper Focus, and More!</p>
    </div>
    <a href="/collections/homepage" class="explore_stickers_btn">Explore all products</a>
  </div>
`

// ________________________________________________________ver 1
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

export const mainBlock = () => {
  return /* HTML */ `
    <section class="new_main_block">
      <span class="hi desktop">
        <img src="${git}/img/new-home-page/side.svg" alt="hi" />
      </span>
      <a class="total_reviews desktop">
        <img src="${git}/img/new-home-page/stars_green.svg" alt="stars" />
        <span>Excellent | 2,943</span>
        <span>Customer reviews</span>
      </a>
      <h1>
        Boost mood, focus, sleep & more <br class="desktop" />
        with our Natural Stickers
      </h1>
      <a class="total_reviews mobile" href="#">
        <img src="${git}/img/new-home-page/stars_green.svg" alt="stars" />
        <span>Excellent | 2,943</span>
        <span>Customer reviews</span>
      </a>
      <div class="big-stickers">
        <div class="swiper-container">
          ${innerWidth > 768
            ? `<div class="swiper-wrapper parent_slider">
            <div class="swiper-slide buzzpatch_bundles_var">
              <span>Mosquito Repellent Stickers</span>
              <img class="sticker-bg-img" src="${git}/img/hero_img_bgr_2_2x.webp" alt="Mosquito Repellent Stickers"/>
              <a class="shop_now_link" href="/products/buzzpatch-bundles">shop now</a>
            </div>
            <div class="swiper-slide sleepypatch_sleep_promoting_stickers_var">
              <span>Sleep Promoting Stickers</span>
              <img class="sticker-bg-img" src="${git}/img/hero_img_bgr_3_2x.webp" alt="Sleep Promoting Stickers"/>
              <a class="shop_now_link" href="/products/sleepypatch-sleep-promoting-stickers">shop now</a>
            </div>
            <div class="swiper-slide zenpatch_mood_calming_stickers_var">
              <span>Mood Calming Patches</span>
              <img class="sticker-bg-img" src="${git}/img/hero_img_bgr_4_2x.webp" alt="Mood Calming Patches" loading="lazy"/>
              <a class="shop_now_link" href="/products/zenpatch-mood-calming-stickers">shop now</a>
            </div>
            <div class="swiper-slide zenpatch_pet_stickers_var">
              <span>Pet Zen Vapor Stickers</span>
              <img class="sticker-bg-img" src="${git}/img/hero_img_bgr_5_2x.webp" alt="Pet Zen Vapor Stickers" loading="lazy"/>
              <a class="shop_now_link" href="/products/zenpatch-pet-stickers">shop now</a>
            </div>
            <div class="swiper-slide trailpatch_kids_tick_repellent_stickers_var">
              <span>Kids Tick Repellent Stickers</span>
              <img class="sticker-bg-img" src="${git}/img/hero_img_bgr_1_2x.webp" alt="Kids Tick Repellent Stickers"/>
              <a class="shop_now_link" href="/products/trailpatch-kids-tick-repellent-stickers">shop now</a>
            </div>
          </div>`
            : `<div class="swiper-wrapper parent_slider">
            <div class="swiper-slide trailpatch_kids_tick_repellent_stickers_var">
              <span>Kids Tick Repellent Stickers</span>
              <img class="sticker-bg-img" src="${git}/img/hero_img_bgr_mob_1_2x.webp" alt="Kids Tick Repellent Stickers"/>
              <a class="shop_now_link" href="/products/trailpatch-kids-tick-repellent-stickers">shop now</a>
            </div>
            <div class="swiper-slide buzzpatch_bundles_var">
              <span>Mosquito Repellent Stickers</span>
              <img class="sticker-bg-img" src="${git}/img/hero_img_bgr_mob_2_2x.webp" alt="Mosquito Repellent Stickers" loading="lazy"/>
              <a class="shop_now_link" href="/products/buzzpatch-bundles">shop now</a>
            </div>
            <div class="swiper-slide sleepypatch_sleep_promoting_stickers_var">
              <span>Sleep Promoting Stickers</span>
              <img class="sticker-bg-img" src="${git}/img/hero_img_bgr_mob_3_2x.webp" alt="Sleep Promoting Stickers" loading="lazy"/>
              <a class="shop_now_link" href="/products/sleepypatch-sleep-promoting-stickers">shop now</a>
            </div>
            <div class="swiper-slide zenpatch_mood_calming_stickers_var">
              <span>Mood Calming Patches</span>
              <img class="sticker-bg-img" src="${git}/img/hero_img_bgr_mob_4_2x.webp" alt="Mood Calming Patches" loading="lazy"/>
              <a class="shop_now_link" href="/products/zenpatch-mood-calming-stickers">shop now</a>
            </div>
            <div class="swiper-slide zenpatch_pet_stickers_var">
              <span>Pet Zen Vapor Stickers</span>
              <img class="sticker-bg-img" src="${git}/img/hero_img_bgr_mob_5_2x.webp" alt="Pet Zen Vapor Stickers" loading="lazy"/>
              <a class="shop_now_link" href="/products/zenpatch-pet-stickers">shop now</a>
            </div>
          </div>`}
          <div class="slider_dots">
            <span><i></i></span>
            <span><i></i></span>
            <span><i></i></span>
            <span><i></i></span>
            <span><i></i></span>
          </div>
        </div>
      </div>
      <a class="crs_btn" href="/collections/homepage">Explore all products</a>
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
    <h2>Trusted by over 1 million customers</h2>
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
            <div class="bg"><img src="${p.imgBgr}" /></div>
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
          NATPAT also offers specialized solutions for mosquito protection. <br />
          Their <a href="/products/adult-buzzpatch-mosquito-repellent-patches"> mosquito patches for adults </a> and <a
            href="/products/buzzpatch-bundles"
            >mosquito patches for kids</a
          > are a safe, chemical-free way to keep mosquitoes at bay. Additionally, the <a href="/pages/buzzpatch"
            >mosquito stickers</a
          >  provide a fun and effective alternative for children.<br /><br />
          In essence, NATPAT is more than just a brand; it's a lifestyle choice for those who prioritize health,
          wellness, and natural solutions in their daily lives.
        </p>
      </div>
    </div>
  </section>
`
