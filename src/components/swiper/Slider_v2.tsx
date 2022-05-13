import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import  { Children, FC } from "react";
import './sliderv2.scss';

interface Props{
  children: React.ReactNode
}

const Sliderv2:FC<Props> = ({children}) => {
    return(
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4500
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {Children.map(children,(child, i)=>(
                <SwiperSlide key={i}>
                 
                        {child}
                    
                </SwiperSlide>
            ))}
          
        </Swiper>
    )
}

export default Sliderv2;