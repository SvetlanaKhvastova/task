let cameraOnPageStyle = /*html */ `
<style>
    .link_camera_nitron{
        background: #161616 url(https://conversionratestore.github.io/projects/blackoakled/img/link_camera_nitron.png) right bottom no-repeat;
        background-size: auto 100%;
        border: 5px solid #fff;
        border-radius: 5px;
        margin: 5px 0 30px;
    }

    .link_camera_nitron .container_custom{
        padding: 30px 34px;
    }

    .link_camera_nitron .container_custom > h2{
        font-family: "Helvetica", sans-serif;
        font-weight: 700;
        font-size: 36px;
        line-height: 41px;
        letter-spacing: -0.03em;
        text-transform: uppercase;
        color: #FFFFFF;
    }

    #content .link_camera_nitron .container_custom p{
        font-family: "Roboto", sans-serif;
        font-weight: 400 !important;
        font-size: 14px !important;
        line-height: 16px !important;
        color: #FFFFFF;
        margin: 5px 0 20px;
        max-width: 478px;
    }

    .link_camera_nitron .container_custom > a{
        display: flex;
        width: 100%;
        max-width: 266.79px;
        height: 42px;
        background: #68922A;
        border: 1px solid #415B17;
        box-sizing: border-box;
        box-shadow: inset -3px -3px 2px rgb(0 0 0 / 25%), inset 3px 3px 2px rgb(255 255 255 / 35%);
        align-items: center;
        justify-content: center;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #FFFFFF;
        outline: none;
        text-decoration: unset;
    }

    @media (max-width: 768px){
        .link_camera_nitron {
            background: #161616 url(https://conversionratestore.github.io/projects/blackoakled/img/link_camera_nitron_mob.png) top right no-repeat;
            background-size: auto;
        }

        .link_camera_nitron .container_custom{
            text-align: center;
            padding: 248px 30px 30px;
        }

        .link_camera_nitron .container_custom > h2{
            font-size: 30px;
            line-height: 34px;
            position: relative;
            padding-top: 20px;
        }

        .link_camera_nitron .container_custom > h2::before{
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            width: 100%;
            background: #3F4042;
            height: 2px;
        }

        #content .link_camera_nitron .container_custom p{
            font-size: 13px !important;
            line-height: 15px !important;
            margin: 5px auto 20px;
        }
        .link_camera_nitron .container_custom > a{
            margin: 0 auto;
            height: 47px;
        }
    }

    @media (max-width: 320px){
        .link_camera_nitron{
            background: #161616 url(https://conversionratestore.github.io/projects/blackoakled/img/link_camera_nitron_mob.png) top right no-repeat;
            background-size: auto 68%;
        }

        .link_camera_nitron .container_custom {
            padding: 220px 30px 30px;
        }

        .link_camera_nitron .container_custom > h2{
            font-size: 28px;
        }

        #content .link_camera_nitron .container_custom p{
            font-size: 8px !important;
        }
    }
</style>

`

let cameraOnPage = /*html */ `
<div class="link_camera_nitron">
    <div class="container_custom">
        <h2>Own the night</h2>
        <p>The most advanced marine night vision camera that crushes darkness. <br> See more than just silhouettes, Nitron XD shows details in full HD. <br> Stay out later and always get home safe.</p>
        <a href="https://www.blackoakled.com/products/extra-new-nitron-xd-marine-night-vision-camera?_pos=1&_sid=64ce8aa77&_ss=r">Explore Nitron XD</a>
    </div>    
</div>
`

document.head.insertAdjacentHTML("beforeend", cameraOnPageStyle)
document.querySelector(".box.box_home.box_home_featured_products").insertAdjacentHTML("beforebegin", cameraOnPage)

if (window.innerWidth <= 768) {
  if (document.querySelector("#content .link_camera_nitron .container_custom p")) {
    document.querySelector("#content .link_camera_nitron .container_custom p").textContent =
      "The most advanced marine night vision camera that crushes darkness. See more than just silhouettes, Nitron XD shows details in full HD. Stay out later and always get home safe."
  }
}
