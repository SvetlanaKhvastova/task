export const git: string = 'https://conversionratestore.github.io/projects/hint/img/'

export interface HintState {
  wish: string
  relationship: string
}

export const svg = {
  lockerIcon: /* HTML */ `
    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
      <rect x="0.5" width="42" height="42" rx="4" fill="" />
      <path
        d="M16.3571 18.125V16.3438C16.3571 13.4121 18.6429 11 21.5 11C24.3214 11 26.6429 13.4121 26.6429 16.3438V18.125H27.2143C28.4643 18.125 29.5 19.2012 29.5 20.5V27.625C29.5 28.9609 28.4643 30 27.2143 30H15.7857C14.5 30 13.5 28.9609 13.5 27.625V20.5C13.5 19.2012 14.5 18.125 15.7857 18.125H16.3571ZM18.6429 18.125H24.3571V16.3438C24.3571 14.7109 23.0714 13.375 21.5 13.375C19.8929 13.375 18.6429 14.7109 18.6429 16.3438V18.125Z"
        fill="white"
      />
    </svg>
  `,
  moneyBackGuaranteeIcon: /* HTML */ `
    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
      <g clip-path="url(#clip0_4116_329)">
        <path
          d="M43.3079 11.2003C39.5569 7.32021 34.7022 4.85296 29.4335 4.10241L30.9352 2.60071C31.5302 2.00575 31.5302 1.04121 30.9352 0.446261C30.3404 -0.148591 29.3757 -0.148591 28.7808 0.446261L24.9227 4.30421C24.3278 4.89907 24.3278 5.86371 24.9227 6.45866L28.7807 10.3166C29.0782 10.6141 29.4681 10.7629 29.8579 10.7629C30.2477 10.7629 30.6377 10.6141 30.935 10.3166C31.53 9.72176 31.53 8.75712 30.935 8.16217L30.0723 7.29939C34.258 8.11849 38.0969 10.1938 41.1171 13.3179C44.9262 17.2581 47.024 22.4471 47.024 27.929C47.0242 39.5217 37.5927 48.9531 26 48.9531C14.4074 48.9531 4.97586 39.5217 4.97586 27.9291C4.97586 23.5055 6.33345 19.274 8.90196 15.6921C11.4172 12.1844 14.8845 9.56708 18.9294 8.12307C19.7218 7.84011 20.1348 6.9685 19.8519 6.17601C19.5691 5.38362 18.6973 4.97067 17.9049 5.25352C13.2733 6.90706 9.30395 9.90274 6.42577 13.9166C3.48391 18.0193 1.92899 22.8648 1.92899 27.9292C1.92899 34.3588 4.43281 40.4035 8.97925 44.9499C13.5257 49.4961 19.5704 52 26 52C32.4296 52 38.4743 49.4962 43.0208 44.9498C47.5672 40.4034 50.071 34.3587 50.071 27.9291C50.071 21.6527 47.6691 15.7116 43.3079 11.2003Z"
          fill="#04A777"
        />
        <path
          d="M10.3476 27.9291C10.3476 36.5598 17.3692 43.5814 26 43.5814C34.6307 43.5814 41.6523 36.5598 41.6523 27.9291C41.6523 19.2984 34.6307 12.2766 26 12.2766C17.3691 12.2766 10.3476 19.2983 10.3476 27.9291ZM26.9352 29.2851C24.7423 28.5099 23.4717 27.8989 22.5499 27.1758C21.4155 26.286 20.8962 24.7493 21.1946 23.1654C21.5184 21.4472 22.7166 20.0794 24.3218 19.5958C24.344 19.5891 24.3659 19.5837 24.388 19.5772V18.9638C24.388 18.1224 25.0701 17.4404 25.9114 17.4404C26.7528 17.4404 27.4349 18.1224 27.4349 18.9638V19.4802C28.4985 19.7294 29.241 20.2155 29.5411 20.4399C30.2149 20.9438 30.3529 21.8983 29.8491 22.5723C29.3453 23.2463 28.3909 23.384 27.7167 22.8803C27.3942 22.6392 26.5039 22.1205 25.2006 22.5131C24.4307 22.7451 24.2315 23.5028 24.1887 23.7296C24.1043 24.1775 24.2013 24.5991 24.4301 24.7784C25.2271 25.4034 26.6569 25.9552 27.9505 26.4124C30.3169 27.2489 31.6328 29.4411 31.2249 31.8673C31.0246 33.0585 30.4254 34.1638 29.5373 34.9798C28.9266 35.5408 28.215 35.9398 27.4349 36.1648V36.8942C27.4349 37.7356 26.7528 38.4177 25.9114 38.4177C25.0701 38.4177 24.388 37.7356 24.388 36.8942V36.3146C23.3745 36.1955 22.5288 35.8834 21.3914 35.1393C20.6873 34.6788 20.4899 33.7345 20.9505 33.0304C21.4111 32.3262 22.3554 32.1289 23.0595 32.5895C24.114 33.2794 24.5127 33.3428 25.9013 33.3332C27.2684 33.324 28.0616 32.305 28.2202 31.3621C28.2978 30.9016 28.3275 29.7773 26.9352 29.2851Z"
          fill="#04A777"
        />
      </g>
      <defs>
        <clipPath id="clip0_4116_329">
          <rect width="52" height="52" fill="white" />
        </clipPath>
      </defs>
    </svg>
  `
}