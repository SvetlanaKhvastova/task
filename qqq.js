<script>

const b = setInterval(()=>{
if(document.querySelector('[data-variable=timer13]')){
document.querySelector('[data-variable=timer13]').innerHTML ="15:00";
}
if(window.location.hash === "#paywall-5"){

tim1()


    clearInterval(b);
    
  
}
}, 500)


const tim1 = () => {



var countDownDate = new Date().getTime() + 15 * 60 * 1000;


var x = setInterval(function() {


if(window.location.hash==="#paywall-5"){

  let now = new Date().getTime();

  let distance = countDownDate - now;

  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
const sec = seconds< 10?'0'+seconds:seconds;
document.querySelector('[data-variable=timer13]').innerHTML = minutes + ":" + sec;


  if (distance < 0) {
    clearInterval(x);
    document.querySelector('[data-variable=timer13]').innerHTML ="00:00";
  }
}
}, 1000);
}

</script>

