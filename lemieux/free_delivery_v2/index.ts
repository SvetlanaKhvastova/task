import { startLog, $el, waitForElement, $$el } from '../../libraries'
import { svg, freeDeliveryBanner, needMoreBlock, completeBlock, progressBlock } from './blocks'

startLog({ name: 'Free Delivery Threshold_2nd iteration', dev: 'SKh' })

const baseUrl = window.location.pathname
const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class FreeDelivery {
    device: 'mobile' | 'desktop'
    baseUrl: string
    country: string
    currency: string
    threshold: number

    constructor(baseUrl, device) {
        this.device = device
        this.baseUrl = baseUrl
        this.country = 'UK'
        this.currency = '£'
        this.threshold = 75.00
        this.init()
    }

    init() {
        this.renderFreeDeliveryBanner()
        this.productPage()
        if (this.device === 'desktop') {
            this.checkBasketDesktop()
        }
        this.cartPage()
        this.changeIconHeader()
    }

    renderFreeDeliveryBanner() {
        let place: string = ''
        // pdp || listing
        if (this.checkPage() === 'product' || this.checkPage() === 'listing') {
            if (this.device === 'desktop') {
                place = 'beforebegin'
            } else {
                place = 'afterbegin'
            }
            $el('#header > .page-header__inner')?.insertAdjacentHTML(place, freeDeliveryBanner)
        }
        //check BasketMobile
        if (this.device === 'mobile') {
            waitForElement('basket-add-notice-item .b-t').then((i) => {
                place = 'beforebegin'
                console.log(`waitForElement`);
                $el('basket-add-notice .b-t')?.insertAdjacentHTML(place, freeDeliveryBanner)
            });
        }
    }

    productPage() {
        let startPrice: number = 0

        waitForElement('product-view-layout').then((i) => {
            let price: number = this.priceToNumber($el('product-view-price .price').textContent)
            if ($el('product-view-delivery-note')) {
                $el('product-view-delivery-note').style.display = 'none'

                if (price !== startPrice) {
                    startPrice = price
                    $el('product-view-delivery-note')?.insertAdjacentHTML('beforebegin', this.drawThreshold(price))
                }
            }
        });
    }

    checkBasketDesktop() {
        let basketPrice = 0
        waitForElement('minibasket basket-view-totals>div:first-of-type price').then((i) => {
            console.log(`minibasket !!!!!!!!!!!`);
            if ($el('minibasket .custom-scrollbar>div:first-child')) {
                $el('minibasket .custom-scrollbar>div:first-child').style.display = 'none'
            }
            const price = this.priceToNumber($el('minibasket basket-view-totals>div:first-of-type price').innerText)
            if (price !== basketPrice || !$el('minibasket .crs-wrapper')) {
                $el('minibasket .crs-wrapper') ? $el('minibasket .crs-wrapper').remove() : ''
                $el('minibasket basket-view-totals').insertAdjacentHTML('afterend', this.drawThreshold(price, true))
                basketPrice = price
            }
        });
    }

    cartPage() {
        setInterval(() => {
            if (this.checkPage() === 'basket') {
                let newPrice = this.priceToNumber($el('basket-view-totals>div:first-of-type>div').innerText)
                const basketPrice: string | null = localStorage.getItem('basketPrice');
                let price = 0
                if (basketPrice !== null) {
                    price = this.priceToNumber(basketPrice)
                } else {
                    price = 0
                }
                if ($el('basket-view>div>div>div>div>*:nth-child(3)>div.inline-block')) {
                    $el('basket-view>div>div>div>div>*:nth-child(3)>div.inline-block').remove()
                }
                if (newPrice !== price) {
                    localStorage.setItem('basketPrice', `${newPrice}`)
                    if ($el('basket-view .crs-wrapper')) $el('basket-view .crs-wrapper').remove()
                    $el('basket-view ul').insertAdjacentHTML('beforebegin', this.drawThreshold(newPrice))
                } else {
                    if (!$el('basket-view .crs-wrapper')) {
                        $el('basket-view ul').insertAdjacentHTML('beforebegin', this.drawThreshold(newPrice))
                    }
                }
            }
        }, 200)
    }

    changeIconHeader() {
        const basketPrice: string | null = localStorage.getItem('basketPrice');
        if (basketPrice !== null && +basketPrice >= this.threshold) {
            $$el('basket-qty').forEach(el => {
                el.innerHtml = `${svg.headerIcon}`
            })
        }
    }

    checkPage(): string {
        const url = window.location.href
        if ($el('product-view-layout')) {
            return 'product'
        } else if ($el('category-view-layout')) {
            return 'listing'
        } else if (url.includes('/basket')) {
            return 'basket'
        } else {
            return 'other'
        }
    }

    priceToNumber(txt: string): number {
        let priceTxt: number = parseFloat(txt.replace(',', '.').replace(/[^0-9.]/g, ''))
        return priceTxt
    }

    drawThreshold(price: number, basket: boolean = false) {
        const progressWidth = (price / this.threshold) * 100

        if (price < this.threshold && this.checkPage() === 'product' && !basket) {
            return needMoreBlock
        } else if (price < this.threshold) {
            return progressBlock
        } else if (price >= this.threshold) {
            return completeBlock
        }
    }
}
new FreeDelivery(baseUrl, device)