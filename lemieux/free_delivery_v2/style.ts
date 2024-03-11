
const mainStyles = /* css */ `

`

const freeDeliveryBannerStyles =/* css */  `
.free_delivery_banner {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 0px;
  background: #202945;

  & li {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;

    & p {
      color: #fff;
      font-family: "Source Sans 3";
      font-size: 14px;
      font-weight: 600;
      line-height: 18px;
      text-transform: uppercase;
    }
  }

  & li:first-child {
    padding-right: 16px;
    border-right: 1px solid #868c9d;
    margin-right: 16px;
  }
}
`

const stylesMobile = /* css */ `
  @media (min-width: 769px) {
    .mobile {
      display: none !important;
    }
  }
  @media (max-width: 768px) {
    .desktop {
      display: none !important;
    }
  }
`
export { mainStyles, freeDeliveryBannerStyles, stylesMobile }