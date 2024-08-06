import { set } from 'express/lib/application'

interface Reviews {
  patchType: string
  text: string
}

interface Slide {
  name: string
  img: string
  text: string
}

export const git: string = 'https://conversionratestore.github.io/projects/buzzpatch'

export const reviews: Reviews[] = [
  {
    patchType: 'SleepyPatch for Kids',
    text: 'Helps My asd child!! My son is 8 and struggles to fall asleep. He is autistic so I guess This can be normal. Well tried melatonin and yes it works but idk not a fan. Tried these and wow work great and as routines work for him using this daily works!! Bought many times so far and will keep purchasing. Thank you for making these. Even got the adult ones. And they help me If I need it.'
  },
  {
    patchType: 'SleepyPatch for Kids',
    text: 'I was sceptical but 4 weeks in: LIFE-CHANGING. Our 2 year old was really sporadical in his sleep, a week or so of sleeping through, and then months on end of being up at least once a night, settling only after yet more milk and us losing between 2-3 hours of sleep a night. I bought these on a whim and the first night he was still up, but since that we’ve only had one night where he hasn’t slept for 11 hours, and that’s because he was uncomfortable with constipation. He is also going to bed earlier - starting to settle himself and sleeping longer. But most importantly we are getting a solid nights sleep.'
  },
  {
    patchType: 'ZenPatch - Mood Calming Patches',
    text: 'This is the third day I’ve put one on my little boy’s shirt… once i notice him getting super hyper or all over the place doing everything under the sun… or even when he gets super cranky and fussy, I sneak and put one on his shirt. No lie, about 15-20 minutes later he’s a happy, calm, playful little dude. I also sent him to daycare wearing one and explained what it was to his teachers. At pick up time they expressed that he was a lot more gentle and calm with his friends and he had a great day. I wish I had known about these patches SOONER!!'
  },
  {
    patchType: 'ZenPatch - Mood Calming Patches',
    text: 'Mood calming patches. My son has been wearing them since January. They have helped him so much. Obviously he still has bad days but not like before we used them. He is even aware if he doesn’t wear one it affects him negatively. Just wish they were in plain clothes as I think the animals are a bit childish'
  },
  {
    patchType: 'Mosquito Patches for Kids',
    text: "Best purchase ever too bad I waited so long but now we're stocked and loyal customers. we use the buzz patches for the whole family now after buying them for my 8 month old. they work like magic and we love in swampy hot climate perfect recipe for bugs especially mosquitoes. wearing the patches you will see them fly right on by"
  },
  {
    patchType: 'Mosquito Patches for Kids',
    text: 'Works better than bug sprays! The patches worked better than expected. Bug sprays rarely work for me. I shared with other adults and we had a good chuckle about which fun designs to use.'
  },
  {
    patchType: 'MagicPatch Itch Relief Patches',
    text: 'These are great for helping with the itch from mosquito bites. I gave the product 4 stars because they don’t always work. Both my son and I found that sometimes the patches are very effective and sometimes they don’t do anything. If you have one that doesn’t do anything I found trying another patch to work. Not sure why this is.'
  },
  {
    patchType: 'MagicPatch Itch Relief Patches',
    text: "These itch relief patches are FANTASTIC! I garden & get bit by mosquitoes a lot. And itch a lot! I can't wait till my grandkids come to see how they like them! I'm glad there's no chemicals in them, just the gridwork! Great job, guys!!"
  },
  {
    patchType: 'SunnyPatch UV-Detecting Stickers',
    text: "I can't recommend SunnyPatch enough! Not only is it a fun and effective way to monitor sun protection, but it's also a great conversation starter at the park. Other parents are always asking where we got our nifty color-changing patches!"
  },
  {
    patchType: 'SunnyPatch UV-Detecting Stickers',
    text: "As a parent of a child with sensitive skin, I was thrilled to find a sun-safety product that's compatible with our favorite gentle sunscreen. SunnyPatch has made outdoor playtime so much more enjoyable and worry-free for our family."
  },
  {
    patchType: 'FocusPatch - Focus Enhancing Stickers',
    text: 'This product has really helped my son . We are going through a ADHD. Assessment and I really do not want to medicate him if I can get away with it his teacher have said they have seen a 60 % improvement which is a a big improvement for him'
  },
  {
    patchType: 'FocusPatch - Focus Enhancing Stickers',
    text: 'Our daughter has be through a lot of stuff and we have tried everything under the sun she has asthma so unable to take beta blockers for her anxiety these patch have been a god send I have recommend to a friend who son doesn’t sleep and has adhd let’s hope her sees as much as a difference as we have thank you from the bottom of our hearts'
  },
  {
    patchType: 'StuffyPatch - Congestion Relief Patch',
    text: 'I got the StuffyPatch for my 7-year-old son who often wakes up with a congested nose. We put the patch on his pillowcase, and it worked wonders! Not only did it help him breathe easier, but it also allowed for a full night of uninterrupted sleep for the whole family.'
  },
  {
    patchType: 'StuffyPatch - Congestion Relief Patch',
    text: "StuffyPatch has been an absolute lifesaver for my 4-year-old who suffers from severe seasonal allergies. The moment we started using the patch, her congested nose and blocked nasal passages cleared up, allowing her to enjoy her days to the fullest. I can't recommend StuffyPatch enough - it's been a game-changer for our family!"
  },
  {
    patchType: 'Allergy Relief Stickers',
    text: 'These patches have helped my baby so much 11 months old so to young to take any antihistamine and a doubt I will ever use antihistamine again as these patches have worked brilliant even my 8 year old has been using them, highly recommend'
  },
  {
    patchType: 'Allergy Relief Stickers',
    text: 'I really don’t like giving my kids any type of allergy meds when the season gets bad with their running noses. They rarely want to play outside anymore but since getting the AllergyPatches, they’ve been so excited to go outside and play and not be bothered by their allergies. Plus, I don’t have to give them any meds!'
  },
  {
    patchType: 'CravePatch Sugar Craving Relief',
    text: 'I bought these for myself. I have a love/hate relationship with sugary foods and have been advised to cut down. If these can help me deal with my cravings like the mosquito patches do then I’m all in.'
  },
  {
    patchType: 'CravePatch Sugar Craving Relief',
    text: 'All day my daughter asks me for either something starchy or filled with sugar! I finally gave in and purchased the CravePatch to see if it would make a difference. She’s been eating her meals and snack without constantly asking me for sweets now. Its been fantastic!'
  }
]

export const press = [
  {
    text: "“The first thing I noticed when I opened the package were that these smelled seriously amazing. They're citrusy without being overpowering.”",
    img: `${git}/img/new-home-page/slider_logo_1.png`
  },
  {
    text: '“I will say that I did not get bit at all while wearing the BuzzPatch patch mosquito repellent patches! I have used them a couple times since then and have not been bit, either.”',
    img: `${git}/img/new-home-page/slider_logo_2.png`
  },
  {
    text: '“Like Garlic for Vampires: These Stickers Help Repel Mosquitoes. Because every kid loves stickers anyway.”',
    img: `${git}/img/new-home-page/slider_logo_3.png`
  },
  {
    text: "“These anti-mosquito stickers were technically developed for kids, but we think they're also perfect for any outdoorsy dads who also happen to be mosquito magnets”",
    img: `${git}/img/new-home-page/slider_logo_4.png`
  },
  {
    text: '“The Buzzpatch scent creates a virtual shield by "camouflaging" your kids from mosquitos) Genius!”',
    img: `${git}/img/new-home-page/slider_logo_5.png`
  }
]

export const sliderData = () => {
  let data = [] as Slide[]

  let slides = $('#featured-reviews2 .carousel-item:not(.slick-cloned)')

  slides.each((i, el) => {
    let item = {} as Slide
    item.name = $(el).find('.name').text()
    item.img = $(el).find('.review-header>img').attr('data-src') || 'no_img'
    item.text = $(el).find('.review-text p').text()
    data.push(item)
  })
  console.log(data)

  return data
}

export const patches = [
  {
    name: 'SleepyPatch for Kids',
    subText: 'Sleep Promoting Stickers',
    img: [
      '//www.natpat.com/cdn/shop/files/natpat-sleepy-patch-for-kids-the-ticket-to-sweet-dreams-deep-sleep-35986330419244.png?v=1708349179',
      '//www.natpat.com/cdn/shop/files/natpat-sleepy-patch-for-kids-the-ticket-to-sweet-dreams-deep-sleep-35986330812460.png?v=1708349182',
      '//www.natpat.com/cdn/shop/files/natpat-sleepy-patch-for-kids-the-ticket-to-sweet-dreams-deep-sleep-35986330648620.png?v=1708349499',
      '//www.natpat.com/cdn/shop/files/natpat-sleepy-patch-for-kids-the-ticket-to-sweet-dreams-deep-sleep-35986330452012.png?v=1708349191'
    ],
    img2: `${git}/img/new-home-page/sleppypatch.png`,
    link: 'https://www.natpat.com/products/sleepypatch-sleep-promoting-stickers',
    variants: [39836565143596, 39836565176364, 39836565110828, 39836565209132]
  },
  {
    name: 'Zenpatch for Kids',
    subText: 'Mood Calming Patches',
    img: [
      '//www.natpat.com/cdn/shop/files/natpat-zenpatch-mood-calming-patches-for-natural-stress-relief-35986370986028.png?v=1708349534',
      '//www.natpat.com/cdn/shop/files/natpat-zenpatch-mood-calming-patches-for-natural-stress-relief-35986371117100.png?v=1708349368',
      '//www.natpat.com/cdn/shop/files/natpat-zenpatch-mood-calming-patches-for-natural-stress-relief-35986371149868.png?v=1708349363',
      '//www.natpat.com/cdn/shop/files/natpat-zenpatch-mood-calming-patches-for-natural-stress-relief-35986371248172.png?v=1708349370'
    ],
    img2: `${git}/img/new-home-page/zenpatch.png`,
    link: 'https://www.natpat.com/products/zenpatch-mood-calming-stickers',
    variants: [39998449221676, 39998449254444, 39998449188908, 39998449287212]
  },
  {
    name: 'Mosquito Patches For Kids',
    subText: 'Mosquito patches',
    img: [
      '//www.natpat.com/cdn/shop/files/natpat-mosquito-patches-for-kids-happy-outings-with-bite-free-fun-35981852868652.jpg?v=1708329741',
      '//www.natpat.com/cdn/shop/files/natpat-mosquito-patches-for-kids-happy-outings-with-bite-free-fun-35981853229100.jpg?v=1708329562',
      '//www.natpat.com/cdn/shop/files/natpat-mosquito-patches-for-kids-happy-outings-with-bite-free-fun-35981853294636.jpg?v=1708329739',
      '//www.natpat.com/cdn/shop/files/natpat-mosquito-patches-for-kids-happy-outings-with-bite-free-fun-35981853753388.jpg?v=1708329575'
    ],
    img2: `${git}/img/new-home-page/buzzpatch.png`,
    link: 'https://www.natpat.com/products/buzzpatch-bundles',
    variants: [39542857695276, 39542857728044, 39542857760812, 39542857793580]
  },
  {
    name: 'SunnyPatch',
    subText: 'UV-Detecting Stickers',
    img: [
      '//www.natpat.com/cdn/shop/files/natpat-uv-stickers-for-security-and-style-detect-sun-exposure-quickly-35986223792172.png?v=1708349315',
      '//www.natpat.com/cdn/shop/files/natpat-uv-stickers-for-security-and-style-detect-sun-exposure-quickly-35986223628332.png?v=1708348998',
      '//www.natpat.com/cdn/shop/files/natpat-uv-stickers-for-security-and-style-detect-sun-exposure-quickly-35986223726636.png?v=1708349007',
      '//www.natpat.com/cdn/shop/files/natpat-uv-stickers-for-security-and-style-detect-sun-exposure-quickly-35986223857708.png?v=1708348995'
    ],
    img2: `${git}/img/new-home-page/sunnypatch.png`,
    link: 'https://www.natpat.com/products/sunnypatch',
    variants: [41098474946604, 41098474979372, 41098474913836, 41098475012140]
  }
]
