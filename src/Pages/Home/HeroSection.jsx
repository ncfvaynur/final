import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Button from "../../Components/Button/Button";

const HeroSection = () => {
  return (
    <>
      <Swiper
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="slider-1 slider">
          <div className="title">
          Author’s Delicious Sweets
          <span>
          and Chocolate 
          </span>
          </div>
          <p className="mt-3">
            Nulla lacinia bibendum auctor. Mauris urna tellus, fermentum at
            mauris nec, aliquet volutpat leo. Nullam eget ultrices magna. Etiam
            neque orci, convallis.
          </p>
          <Button title="Read More"/>
        </SwiperSlide>
        <SwiperSlide className="slider-2 slider">
        <div className="title">
          Author’s Delicious Sweets
          <span>
          and Chocolate 
          </span>
          </div>
          <p className="mt-3">
            Nulla lacinia bibendum auctor. Mauris urna tellus, fermentum at
            mauris nec, aliquet volutpat leo. Nullam eget ultrices magna. Etiam
            neque orci, convallis.
          </p>
          <Button title="Read More"/>
        </SwiperSlide>
        <SwiperSlide className="slider-3 slider">
            <div className="title">
          Author’s Delicious Sweets
          <span>
          and Chocolate 
          </span>
          </div>
          <p className="mt-3">
            Nulla lacinia bibendum auctor. Mauris urna tellus, fermentum at
            mauris nec, aliquet volutpat leo. Nullam eget ultrices magna. Etiam
            neque orci, convallis.
          </p>
          <Button title="Read More"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSection;
