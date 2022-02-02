import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <Swiper
      className="swiper-container"
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      pagination={{
        dynamicBullets: true,
      }}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      autoplay= {{autoplay: true}}
      running="true"
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>Slide1</SwiperSlide>  
      <SwiperSlide>
        <img src="/2.png" alt="image2" width={"100%"}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/3.png" alt="image3" width={"100%"}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/4.png" alt="image4" width={"100%"}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/5.png" alt="image5" width={"100%"}/>
      </SwiperSlide>
    </Swiper>
  );
};
