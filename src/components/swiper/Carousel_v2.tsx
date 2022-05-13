import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import  { Children, FC } from "react";
import { Props } from "../../pages/landings/premium-service20abr22/includes/prop";
// import './sliderv2.scss';

const Carouselv2:FC<Props> = ({children}:any) => {
    return(
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5500
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            950: {
              slidesPerView: 2,
            },
            1300: {
              slidesPerView: 3,
            },
            1700: {
              slidesPerView: 3,
            },
          }}
        >
          {Children.map(children,(child, i)=>(
                <SwiperSlide key={i}>
                 
                        {child}
                    
                </SwiperSlide>
            ))}
          
        </Swiper>
    )
}

export default Carouselv2;