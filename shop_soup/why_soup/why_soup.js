let pageStyle = /*html */ `
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

img {
  display: block;
}

.container {
  max-width: 785px;
  margin: 0 auto;
}

.container.how_we_work_block{
  max-width: 1200px;
  margin: 0 auto;
  
}

.hero_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.page_wrap {
  padding: 0 15px;
  margin-top: 40px;
}

.why_soup_wrap{
    margin: 60px auto 146px;
}

.why_soup_wrap h1{
    font-weight: 600;
    font-size: 72px;
    line-height: 114%;
    text-align: center;
    text-transform: uppercase;
    color: #103D9D;
}

.why_soup_list{
    margin-top: 90px;
}

.why_soup_list li + li{
    margin-top: 90px;
}

.why_soup_list li {
    display: flex;
    flex-direction: column;
    text-align: start;
    width: 100%;
    height: 430px;
    background: center / cover no-repeat  url(img/photo1_why_soup.jpg);
}

.why_soup_list li:nth-child(2){
    background: center / cover no-repeat  url(img/photo2_why_soup.jpg);
    align-items: flex-end;
}

.why_soup_list li:nth-child(3){
    background: center / cover no-repeat  url(img/photo3_why_soup.jpg);
}

.why_soup_list li:nth-child(4){
    background: center / cover no-repeat  url(img/photo4_why_soup.jpg);
    align-items: flex-end;
}

.why_soup_list li:nth-child(5){
    background: center / cover no-repeat  url(img/photo5_why_soup.jpg);
}

.why_soup_list li:nth-child(1) > div:last-child{
    width: 48%;
}

.why_soup_list li:nth-child(2) > div:last-child{
    width: 60%;
}


.why_soup_list li:nth-child(4) > div:last-child{
    width: 60%;
}

.why_soup_list li:nth-child(5) > div:last-child{
    width: ;
}

.why_soup_list li h2{
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;
    text-transform: uppercase;
    color: #103D9D;
    margin-bottom: 14px;
}

.why_soup_list li p{
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    color: #373030;
    max-width: 341px;
}

.why_soup_list li:nth-child(2) p{
    max-width: 423px;
}

.why_soup_list li:nth-child(3) p{
    max-width: 355px;
}

.why_soup_list li:nth-child(4) p{
    max-width: 435px;
}

.why_soup_list li:nth-child(5) p{
    max-width: 355px;
}

.how_we_work_block ul{
    display: flex;
    margin-top: 60px;
}

.how_we_work_block ul li{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
        position: relative;
}

.how_we_work_block ul li + li{
    margin-left: 20px;
}

.how_we_work_block ul li img{
    width: 45px;
    height: 45px;
}

.how_we_work_block ul li:not(:last-child):before{
    content: "";
    position: absolute;
    background: center / cover no-repeat url('img/line.svg');
    width: 205px;
    height: 1px;
    top: 20px;
    right: -107px;
}

.how_we_work_block ul li p:nth-child(2){
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    text-transform: uppercase;
    color: #003DA5;
    margin: 10px 0 20px;
}

.how_we_work_block ul li p:nth-child(3){
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    color: #373030;
}

.how_we_work_block h3{
    font-weight: 600;
    font-size: 48px;
    line-height: 140%;
    text-align: center;
    text-transform: uppercase;
    color: #00399A;
}

/*shop_now */
.shop_now{
    margin: 116px auto;
    border: 1px solid rgba(146, 168, 209, 0.2);
}

.shop_now ul li {
    display: flex;
    flex-direction: column;
    text-align: start;
    width: 100%;
    height: 430px;
    background: center / cover no-repeat  url(img/photo6_why_soup.jpg);
}

.shop_now ul li p{
    font-weight: 600;
    font-size: 48px;
    line-height: 121%;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: #00399A;
    margin-bottom: 40px;
}

.shop_now ul li a {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background: #103d9d;
  width: 194px;
  height: 53px;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: "Archivo Narrow", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #ffffff;
}

.shop_now a:hover {
  background: linear-gradient(to top, #6899ff, #001861);
}

</style>
`
let page = /*html */ `
   <header>
       <img src="img/hero_why_soup.jpg" class="hero_img" alt="hero_why_soup">
   </header>
   <main>
        <div class="container why_soup_wrap">
           <h1>Why Soup Lovers Switch <br> to Good Stock Soups</h1>
           <ul class="why_soup_list">
               <li>
                   <div></div>
                   <div>
                       <h2>It’s Delicious</h2>
                       <p>Our number one goal is to cook soups that taste amazing. All of our recipes are chef-quality, made from excellent ingredients, and so incredibly tasty.</p>
                   </div>
               </li>
               <li>
                   <div></div>
                   <div>
                       <h2>Better For You</h2>
                       <p>We only use high quality, all-natural ingredients. These quality vegetables, herbs, and spices combine in soups that are packed with vitamins, minerals, and nutrients to nourish your body.</p>
                   </div>
               </li>
               <li>
                   <div></div>
                   <div>
                       <h2>Nothing Artificial, <br>Ever</h2>
                       <p>We never use weird artificial ingredients, preservatives, or additives. All of our soups are made with real ingredients that you would find in your own kitchen. </p>
                   </div>
               </li>
               <li>
                   <div></div>
                   <div>
                       <h2>Convenience</h2>
                       <p>Order online, without ever having to stand in line at the store. Our soups are shipped straight to your door.</p>
                   </div>
               </li>
               <li>
                   <div></div>
                   <div>
                       <h2>Souper Simple</h2>
                       <p>Store our soups in the freezer, and you never have to worry about them spoiling. When you’re hungry, just heat them up and serve - in less than 10 minutes!</p>
                   </div>
               </li>
           </ul>
        </div>
        <div class="container how_we_work_block">
           <h3>How Does Good Stock Work?</h3>
           <ul>
               <li>
                   <img src="img/work_tel.svg" alt="work_tel">
                   <p>Order Online </p>
                   <p>Choose from one of our curated boxes, or build your own box from your favorite soups.</p>
               </li>
               <li>
                   <img src="img/work_bike.svg" alt="work_bike">
                   <p>Shipped to You</p>
                   <p>We cook the soup, freeze it, then ship it straight to you in an insulated container. </p>
               </li>
               <li>
                   <img src="img/work_frige.svg" alt="work_frige">
                   <p>Fuss Free Storage</p>
                   <p>Store in the freezer for up to 6 months, or thawed in the fridge for up to 5 days.</p>
               </li>
               <li>
                   <img src="img/work_tel.svg" alt="work_tel">
                   <p>Ready In Minutes</p>
                   <p>When you’re hungry, heat on the stove on low, stirring occasionally</p>
               </li>
           </ul>
        </div>
        <div class="container shop_now">
            <ul>
                <li>
                    <p>Delicious, nutritious, <br> convenient</p>
                    <a href="https://www.goodstocksoups.com/collections/build-a-box">Shop now</a>
                </li>
            </ul>
        </div>
   </main>
`
document.body.insertAdjacentHTML("afterbegin", pageStyle)
document.body.insertAdjacentHTML("beforeend", page)
