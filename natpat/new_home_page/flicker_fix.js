document.querySelector('main').style.opacity = '0'
const chek_optimize = setInterval(() => {
  if (document.cookie.includes('crsoptimize')) {
    clearInterval(chek_optimize)
    if (document.cookie.includes('bfuD6h5jGY_1#1!')) {
      console.log(test)
    } else {
      document.querySelector('main').style.opacity = '1'
    }
  }
}, 100)

setTimeout(() => {
  clearInterval(chek_optimize)
  document.querySelector('main').style.opacity = '1'
}, 2000)
