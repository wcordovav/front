import Sliderv2 from "../../../../components/swiper/Slider_v2";
import { deviceSize } from "../../../../types/device";

import {slider1, slider1_mobile,slider2, slider2_mobile, 
  slider3, slider3_mobile, slider4, slider4_mobile} from '../../../../assets/images/premium-service';

interface Props {
  screenSize: deviceSize;
}

const Hero = ({ screenSize }: Props) => {
  const { isMobile, isLaptop, isDesktop, isTablet } = screenSize;
  return (
    <div className="ps--hero">
      <div className="call-info">
        <span>Llámanos a</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </span>
        <span className="call-number">0 800 777 08</span>
      </div>
      <div className="carousel main--slider">

          {isMobile ? (
            <Sliderv2>
            <div className="slider--container">
              <img src={slider1_mobile} alt="premium-tv" />
            </div>
            <div className="slider--container">
              <img src={slider2_mobile} alt="premium-washer" />
            </div>
            <div className="slider--container">
              <img src={slider3_mobile} alt="premium-refri" />
            </div>
            <div className="slider--container">
              <img src={slider4_mobile} alt="premium-kitchen" />
            </div>
            </Sliderv2>
          ) : isDesktop || isLaptop || isTablet ? (
            <Sliderv2>
            <div className="slider--container">
              <img src={slider1} alt="premium-tv" />
            </div>
            <div className="slider--container">
              <img src={slider2} alt="premium-tv" />
            </div>
            <div className="slider--container">
              <img src={slider3} alt="premium-tv" />
            </div>
            <div className="slider--container">
              <img src={slider4} alt="premium-tv" />
            </div>
            </Sliderv2>
          ) : null}
      </div>
    </div>
  );
};

export default Hero;
