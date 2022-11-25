let startFunk = setInterval(() => {
    if (document.querySelector('#hlApp')) {
        clearInterval(startFunk)
        console.log('load')

        const imgFolderUrl = "https://conversionratestore.github.io/projects/comparamais/img/"

        let newStyle =/*html */ `
        <style>
            .is_hidden{
                display: none;
            }
            .new_text_wrap{
                margin-top: 28px;
            }
            .accent_wrap{
                background: #E6EDF0;
                border-radius: 8px;
                padding: 20px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin: 0 0 16px;
            }
            .accent_wrap p{
                font-weight: 700;
                font-size: 18px;
                line-height: 24px;
                color: #1F1F1F;
            }
            .accent_wrap p.accent_green{
                color: #229F55;
            }
            .new_text_wrap h2{
                font-weight: 400 !important;
                font-size: 18px !important;
                line-height: 22px !important;
                color: #1F1F1F !important;
                margin: 0 !important;
                max-width: 502px;
            }
            .new_text_wrap ul{
                margin: 16px 0;
            }
            .new_text_wrap ul li{
                position: relative;
                padding-left: 36px;
            }
            .new_text_wrap ul li::before{
                position: absolute;
                content:'';
                background: url('${imgFolderUrl}documents.svg');
                top: 50%;
                left: 0;
                transform: translateY(-50%);
                width: 24px;
                height: 24px;
            }
            .new_text_wrap ul li:nth-child(1):before{
                background: url('${imgFolderUrl}secure.svg');
            }
            .new_text_wrap ul li:nth-child(3):before{
                background: url('${imgFolderUrl}information.svg');
            }
            .new_text_wrap ul li + li{
                margin-top: 16px;
            }
            .new_text_wrap ul span{
                font-weight: 400;
                font-size: 16px;
                line-height: 20px;
                color: #1F1F1F;
                margin: 0;
            }
            .new_text_wrap > p{
                font-weight: 400;
                font-size: 16px;
                line-height: 20px;
                color: #474A48;
            }
        </style>
        `

        let newBlock = /*html */`
        <div class="new_text_wrap">
            <div class="accent_wrap">
                <p>We have a market-leading</p>
                <p class="accent_green">90% loan approval rate</p>
            </div>
            <h2>You'll be given the following information when our team contacts you:</h2>
            <ul>
                <li>
                    <span>How to secure a good loan offer.</span>
                </li>
                <li>
                    <span>The documents you'll need to secure a good loan offer.</span>
                </li>
                <li>
                    <span>Information on the best loan offers available to you.</span>
                </li>
            </ul>
            <p>Fill out the form below and we'll contact you within the next few hours!</p>
        </div>
        `
        document.head.insertAdjacentHTML('beforeend', newStyle)

        const runObserver = () => {
            // Mutation Observer
            const target = document.querySelector('.simulator-wrapper')
            const config = {
                childList: true,
                subtree: true,
            }

            let observer = new MutationObserver((mutations) => {
                for (let mutation of mutations) {
                    for (let node of mutation.addedNodes) {

                        if (!(node instanceof HTMLElement)) continue
                        console.log(`added`, node)

                        // TODO: uncomment this line if we need to handle the mutation
                        if (node.matches('.simulator-container__capture-form')) {
                            document.querySelector('.page__title').insertAdjacentHTML('beforeend', newBlock)
                            document.querySelector('.container--hero .header-list').classList.add('is_hidden')
                        } else if (node.matches('.simulator-container')) {
                            console.log('me!');
                            if (document.querySelector('.message--success')) {
                                console.log('Yes');
                                document.querySelector('.page__title').insertAdjacentHTML('beforeend', newBlock)
                                document.querySelector('.container--hero .header-list').classList.add('is_hidden')
                            } else {
                                console.log('>>>>NO');
                                document.querySelector('.new_text_wrap')?.remove()
                                if (document.querySelector('.container--hero .header-list').classList.contains('is_hidden')) {
                                    document.querySelector('.container--hero .header-list').classList.remove('is_hidden')
                                    // renderNewBlock()
                                }
                            }
                        }
                    }
                }
            })

            observer.observe(target, config)
        }

        runObserver()




        // renderNewBlock()

        // function renderNewBlock() {
        //     let intervalFind = setInterval(() => {
        //         if (document.querySelector('.message--success')) {
        //             clearInterval(intervalFind)
        //             console.log(`clearInterval`)
        //             document.querySelector('.page__title').insertAdjacentHTML('beforeend', newBlock)
        //             document.querySelector('.container--hero .header-list').classList.add('is_hidden')
        //         }
        //     }, 100)
        // }


        // let a = setInterval(() => {
        //     if (document.querySelector('.simulator-navigation .simulator-step strong')?.textContent.includes('4') && document.querySelector('.new_text_wrap')) {
        //         clearInterval(a)
        //         console.log(`>>>>>>>>`)
        //         document.querySelector('.simulator-navigation a').addEventListener('click', () => {
        //             if (!document.querySelector('.message--success')) {
        //                 document.querySelector('.new_text_wrap').remove()
        //                 if (document.querySelector('.container--hero .header-list').classList.contains('is_hidden')) {
        //                     document.querySelector('.container--hero .header-list').classList.remove('is_hidden')
        //                     renderNewBlock()
        //                 }
        //             }
        //         })

        //     }
        // }, 100)

    }
}, 100)