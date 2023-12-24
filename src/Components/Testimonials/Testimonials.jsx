import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";

const HeroSection = () => {
  return (
    <div className="testimonials pt-5 mp-3">
      <div className="head text-center py-5" data-aos="fade-up">
        <p>TESTIMONIALS</p>
        <h1>What our Buyers Say</h1>
      </div>

      <Swiper
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="d-flex justify-content-center">
          <div className="box py-5 d-flex flex-column align-items-center">
            <div className="icon text-center">
              <i className="fa-solid fa-quote-left"></i>
            </div>
            <p>
            "I recently visited this chocolate and confectionery store, and I must say, it was 
            a heavenly experience! The selection of chocolates is extensive, with a 
            variety of flavors and textures to suit every taste bud. The staff was
             friendly and knowledgeable, guiding me through their exquisite collection. 
             The chocolate truffles were an absolute delight, and I couldn't resist picking 
             up a few more treats. A must-visit for any chocolate lover!"
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center">
          <div className="box py-5 d-flex flex-column align-items-center">
            <div className="icon text-center">
              <i className="fa-solid fa-quote-left"></i>
            </div>
            <p>
            "Walking into this confectionery store felt like stepping into a sweet paradise. 
            The aroma of freshly made candies and chocolates enveloped me, making it impossible 
            to resist the temptation. The handmade chocolates were a highlight each piece a work 
            of art with flavors that danced on my palate. The packaging was elegant, making it a 
            perfect gift option. My sweet tooth is forever grateful for this little slice of heaven!"
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center">
          <div className="box py-5 d-flex flex-column align-items-center">
            <div className="icon text-center">
              <i className="fa-solid fa-quote-left"></i>
            </div>
            <p>
            "As a self-proclaimed chocoholic, I can confidently say that this store is a dream 
            come true for chocolate enthusiasts! The variety of chocolates is astounding, ranging 
             classic milk chocolate to exotic dark chocolate blends. The truffle selection is divine 
             rich, smooth, and utterly indulgent. The store's ambiance is cozy and inviting, making 
             it a perfect spot to satisfy your sweet cravings. I left with a bag full of happiness!"
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center">
          <div className="box py-5 d-flex flex-column align-items-center">
            <div className="icon text-center">
              <i className="fa-solid fa-quote-left"></i>
            </div>
            <p>
            "What sets this confectionery store apart is its commitment to offering unique flavors without
             on quality. The chocolates are made with premium ingredients, and it reflects in every bite. 
             I was pleasantly surprised by the creative flavor combinations lavender-infused truffles, 
             chili chocolate, and more. The attention to detail in crafting each piece is truly commendable.
              A delightful experience for anyone seeking something beyond the ordinary."
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
