import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ISlide } from '../domain/slider';


interface SliderProps {
  slides: ISlide[];
}

export const Slider: React.FC<SliderProps> = ({ slides }) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          <img src={slide.image} alt={`Slide ${index}`} className="w-full h-[500px] object-cover" />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent text-white">
            <p className="text-lg font-semibold">{slide.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
