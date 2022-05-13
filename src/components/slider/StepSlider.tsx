import { useState } from "react";
import { HeadSwiper } from "../../types/swipert";
import 'react-lazy-load-image-component/src/effects/blur.css';
import "./stepslider.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";


interface Props {
  data: HeadSwiper[];
}

const StepSlider = ({ data }: Props) => {
  const [active, setActive] = useState(0);
  const path = 'http://localhost:3000';
  // const path = 'http://localhost/react/premium-service';
  // const path = 'https://premium-service.netlify.app';



  return (
    <div className="step-slider">
      {data.map((element, index) => (
        <LazyLoadImage
          key={index}
          className={active === index ? "dblock" : "dnone"}
          src={element.image}
          alt={`step-${index + 1}`}
          effect="blur"
        />
      ))}

      {/* <h3>Titulo</h3> */}
      <div className="step-paginator">
        {data.map((element, index) => (
          <div
            key={index}
            className={active === index ? "step step-active" : "step"}
            onClick={() => setActive(index)}
          >
            <img src={`${path}/images${element.icon}`} alt={element.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepSlider;
