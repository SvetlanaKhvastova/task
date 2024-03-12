const freeDeliveryBannerStyles = /* css */ `
.free_delivery_banner {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 0px;
  background: #202945;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;

    & p {
      color: #fff;
      font-size: 14px;
      font-weight: 600;
      line-height: 18px;
      text-transform: uppercase;
    }
  }

  & > div:nth-of-type(1) {
    padding-right: 16px;
    border-right: 1px solid #868c9d;
    margin-right: 16px;
  }
}
@media (max-width: 768px) {
  .free_delivery_banner {
    padding: 7px 15px 7px;

    & > div:nth-of-type(1) {
      padding-right: 12px;
      border-right: 1px solid #868c9d;
      margin-right: 12px;
    }
  }

  basket-add-notice .free_delivery_banner{
    padding: 3px 10px;
  }
  basket-add-notice .free_delivery_banner + .b-t {
    border: none;
  }
}
`
const thresholdBannerStyles = /* css */ `
.threshold_banner {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #eeede9;
  padding: 12px 16px;
  margin-top: 1.75rem;

  & > svg {
    max-width: 32px;
    width: 100%;
    max-height: 32px;
    height: 100%;
  }

  & p {
    color: #212121;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 1px;

    & .accent_color_red {
      color: #8e1538;
      font-weight: 700;
    }

    & .accent_color_green {
      color: #2c7226;
      font-weight: 700;
    }

    & br {
      display: none;
    }
  }

  & .crs_progress_bar {
    width: 100%;
    height: 4px;
    background: #fff;
    border-radius: 1px;
    position: relative;

    & .crs_progress_line {
      width: 50%;
      position: absolute;
      height: 4px;
      top: 0;
      left: 0;
      background-color: #2c7226;
    }
  }
}
basket-view .threshold_banner {
  margin-top: -0.8rem;
  margin-bottom: 10px;
}
basket-view .threshold_banner.crs_complete {
  & p {
    line-height: 22px;
  }
}
.crs_progress.threshold_banner {
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}
@media (min-width: 768px) {
  minibasket .threshold_banner {
    margin: 8px -1.25rem -5px;
  }
}
@media (max-width: 768px) {
  .threshold_banner {
    margin-top: 16px;
    padding: 12px;

    & p {
      & br {
        display: block;
      }
    }
  }
  basket-view .threshold_banner {
    margin: 0px;
    padding: 12px 20px 12px 16px;

    & p {
      & br {
        display: none;
      }
    }
  }
  bottom-panel .button,
  bottom-panel .button-1 {
    border-radius: 2px;
    height: 2.5rem;
    margin: 0 !important;
  }
  bottom-panel > div > .wrap {
    padding: 12px 16px !important;
  }
}
`

export { freeDeliveryBannerStyles, thresholdBannerStyles }
