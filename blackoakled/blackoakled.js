//   if (window.innerWidth < 1000) {
//     let hiddenLink = setInterval(() => {
//      if (document.querySelector(".header_section .container_custom #cssmenu ul.menu-wrapper > li:nth-child(4)")) {
//       clearInterval(hiddenLink)
//       document.querySelector(".header_section .container_custom #cssmenu ul.menu-wrapper > li:nth-child(4)").classList.add("hidden")
//      }

//    }, 10)
// }

//   if( document.querySelector('.header_section .container_custom .burger_menu_var')){
//       document.querySelector(".header_section .container_custom #cssmenu ul.menu-wrapper > li:nth-child(5)").classList.add("hidden")
//       document.querySelector(".header_section .container_custom #cssmenu ul.menu-wrapper > li:nth-child(6)").classList.add("hidden")

//     document.querySelector('.header_section .container_custom .burger_menu_var').addEventListener('click', function(){
//       console.log('burger_menu_var')
//       document.querySelector(".header_section .container_custom #cssmenu ul.menu-wrapper > li:nth-child(5)").classList.toggle("hidden")
//       document.querySelector(".header_section .container_custom #cssmenu ul.menu-wrapper > li:nth-child(6)").classList.toggle("hidden")

//         if (window.innerWidth < 1000) {
//           document.querySelector(".header_section .container_custom #cssmenu ul.menu-wrapper > li:nth-child(4)").classList.toggle("hidden")
//       }
//     })

//   }

const userAgent = navigator.userAgent.toLowerCase()

const Safari = /safari/.test(userAgent)

setTimeout(() => {
  document.querySelector("iframe").setAttribute("src", document.querySelector("iframe").dataset.src)
}, 200)

setInterval(() => {
  if (!document.querySelector("iframe").attributes.src) {
    document.querySelector("iframe").setAttribute("src", document.querySelector("iframe").dataset.src)
  }
}, 10)
