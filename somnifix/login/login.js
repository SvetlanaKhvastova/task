let startFunk = setInterval(() => {
  if (document.querySelector(".log-out-btn")) {
    clearInterval(startFunk)

    let newIconStyle = /*html */ `
    <style>
        a.log-out-btn{
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .on-button-get-sominifix{
            height: 42px;
        }
    </style>
    `

    document.head.insertAdjacentHTML("beforeend", newIconStyle)

    document.querySelector(".log-out-btn").insertAdjacentHTML(
      "afterbegin",
      `<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.9999 11.5061C10.8006 11.5061 12.2603 10.0464 12.2603 8.24575C12.2603 6.44508 10.8006 4.98535 8.9999 4.98535C7.19923 4.98535 5.7395 6.44508 5.7395 8.24575C5.7395 10.0464 7.19923 11.5061 8.9999 11.5061Z" fill="#2B4B66"/>
      <path d="M9.00001 0.759766C7.27141 0.759766 5.58162 1.27236 4.14433 2.23272C2.70704 3.19308 1.58682 4.55809 0.925307 6.15511C0.263797 7.75214 0.0907155 9.50946 0.42795 11.2049C0.765185 12.9002 1.59759 14.4576 2.8199 15.6799C4.04221 16.9022 5.59953 17.7346 7.29492 18.0718C8.99032 18.4091 10.7476 18.236 12.3447 17.5745C13.9417 16.913 15.3067 15.7927 16.2671 14.3554C17.2274 12.9182 17.74 11.2284 17.74 9.49977C17.737 7.1827 16.8152 4.9614 15.1768 3.32298C13.5384 1.68457 11.3171 0.762782 9.00001 0.759766ZM14.2497 14.5842C13.7272 13.6507 12.9652 12.8733 12.0423 12.3323C11.1194 11.7912 10.0689 11.506 8.99906 11.506C7.92925 11.506 6.87877 11.7912 5.95586 12.3323C5.03295 12.8733 4.27097 13.6507 3.74841 14.5842C2.42161 13.2249 1.68136 11.3992 1.68691 9.49977C1.68577 8.30156 1.97906 7.12143 2.54098 6.06316C3.10291 5.00489 3.91625 4.1009 4.90949 3.43069C5.90273 2.76049 7.04543 2.3446 8.2371 2.2196C9.42877 2.0946 10.6329 2.26432 11.7436 2.71384C12.8543 3.16336 13.8375 3.8789 14.6068 4.79753C15.3761 5.71617 15.9079 6.80975 16.1554 7.98211C16.4029 9.15448 16.3586 10.3697 16.0263 11.5209C15.694 12.6721 15.0839 13.724 14.2497 14.5842Z" fill="#2B4B66"/>
      </svg>`
    )
  }
}, 10)