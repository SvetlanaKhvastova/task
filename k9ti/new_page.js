window.onload = function () {}

let newPageStyle = /*html*/ `
<style>
    .col-md-6:first-child, .row.row1030:last-child{
        display: none;
    }

    /* reviews_box */
    .reviews_box{
        display: flex;
    }

    .reviews_box li img{
        width: 72px;
        height: 72px;
    }

    .reviews_box li div{
        margin-left: 20px;
    }

    .reviews_box li{
        flex: 1;
        display: flex;
    }

    .reviews_box li:not(:last-child){
        margin-right: 34px;
    }

    .reviews_box li p:first-child{
        font-family: 'Open Sans',sans-serif;
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        color: #734F22 !important;
        margin-bottom: 15px;
    }

    .reviews_box li div span{
        display: block;
        margin-bottom: 8px;
    }

    @media (max-width: 1200px){
        .reviews_box li p:first-child{
            height: 35px;
        }
    }

    .reviews_box li p:not(:first-child){
        font-family: 'Open Sans',sans-serif;
        font-style: italic;
        font-weight: 400;
        font-size: 16px;
        line-height: 162%;
        letter-spacing: 0.02em;
        color: #808080;
    }

    /* contacts_us */
    .contacts_us{
        display: flex;
    }

    .contacts_us li{
        flex: 1;
    }

    .contacts_us li p:first-child{
        font-family: 'Open Sans',sans-serif;
        font-weight: 400;
        font-size: 15px;
        line-height: 20px;
        color: #794E15 !important;
        margin-bottom: 16px;
    }

    .contacts_us p:last-child{
        font-family: 'Open Sans',sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 167%;
        color: #808080 !important;
    }

    .contacts_us p > a{
        color: #0037B4;
    }
</style>

`

let firstBlock = /*html*/ `
<div class="first_block">
    <img src="https://conversionratestore.github.io/projects/knineti/img/logo_training.jpg" alt="logo k9 training institute">
    <h1>Enroll now for <span>unlimited access</span> to our 10-week Total Transformation Masterclass</h1>
    <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>

    <ul>
        <li></li>
        <li></li>
    </ul>


    <ul class="reviews_box">
        <li>
            <img src="https://conversionratestore.github.io/projects/knineti/img/dog1.jpg" alt="little dog">
            <div>
                <p>Natalie Rozynski Vancouver, British Columbia, Canada</p>
                <span><svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.2721 16L12.0117 15.2974C13.7478 11.4438 16.6992 6.34464 20.8659 0H25C21.4844 8.06919 19.2817 13.4025 18.3919 16H12.2721ZM0.195312 16L0 15.2974C2.12674 10.8051 5.05642 5.70592 8.78906 0H12.9232C9.73307 7.34531 7.53038 12.6786 6.3151 16H0.195312Z" fill="#734F22"/>
                </svg>
                </span>
                    <p>We were getting really frustrated with Luna (our Chihuahua puppy). She used to bite us constantly and would never come to us when we used to call her in the dog park. And we had tried to housebreak her but she continued to pee occasionally in the house.</p>
                    <p>While your masterclass sounded great, I wasn’t sure it would work for a puppy like her. To be honest, the only reason we signed up is because of your refund policy - I figured we had nothing to lose haha!</p>
                    <p>Well, not only did it work, it worked wonders. We haven’t had a single accident in more than 8 weeks now. The biting has also stopped, and she now comes to us as soon as we call her name - no matter what she might be doing at that time.</p>
                    <p>We are thinking of getting another dog soon (probably a bigger dog) so that Luna will have someone to play with, and are looking forward to using the things that we had learned in the masterclass with the new dog.</p>
            </div>
        </li>
        <li>
            <img src="https://conversionratestore.github.io/projects/knineti/img/dog2.jpg" alt="dog">
            <div>
                <p>Samantha Morgan, Plano, Texas</p>
                <span><svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.2721 16L12.0117 15.2974C13.7478 11.4438 16.6992 6.34464 20.8659 0H25C21.4844 8.06919 19.2817 13.4025 18.3919 16H12.2721ZM0.195312 16L0 15.2974C2.12674 10.8051 5.05642 5.70592 8.78906 0H12.9232C9.73307 7.34531 7.53038 12.6786 6.3151 16H0.195312Z" fill="#734F22"/>
                </svg>
                </span>
                    <p>I purchased the Total Transformation Masterclass from K9 Training Institute and am super-impressed.</p>
                    <p>Walking with Carlo has become so much more enjoyable now! Instead of constantly pulling on his leash like he used to, he now always walks at our side.</p>
                    <p>And instead of trying to run away everytime we open the front door (and almost getting run over by a car once because of this), he now sits patiently in front of the door even without a leash on until I give him permission to go out.</p>
                    <p>He has become so well-trained and seems to almost behave like a service dog now!</p>
            </div>
        </li>
    </ul>

    <ul class="contacts_us">
        <li>
            <p>U.S. Office</p>
            <p>
                K9 Training Institute <br>
                A division of Digitools Limited <br>
                4283 Express Lane <br>
                Sarasota, Florida 34238 <br>
                Ph: <a class="not-for-eu-visitor" href="callto:4157581461">(415) 758-1461</a>
            </p>
        </li>
        <li>
            <p>European Office</p>
            <p>K9 Training Institute
                A division of Digitools Limited <br>
                Execo Business Centre <br>
                77 Strovolos Av., Strovolos Center <br>
                4th Floor, Office 12-D5 <br>
                Strovolos 2018, Nicosia, Cyprus
            </p>
        </li>
    </ul>
</div>
`

document.head.insertAdjacentHTML("beforeend", newPageStyle)

setTimeout(() => {
  document.querySelector("section .container").insertAdjacentHTML("afterbegin", firstBlock)
}, 10)
