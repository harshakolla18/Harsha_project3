// import { useState } from "react";
import UserImg from "../assets/photo.jpeg";
import BgImg from "../assets/background.jpeg";
import pic1Img from "../assets/pic1.jpeg";
import pic2Img from "../assets/pic2.jpeg";
import pic3Img from "../assets/pic3.jpeg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"; // Navigation module

// import required modules
import { Navigation } from "swiper/modules";

function Home() {
  const images = [
    UserImg,
    pic1Img,
    pic2Img,
    pic3Img
  ];
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${BgImg})`,
        }}
        className="h-[60vh] bg-cover bg-fixed  grid place-items-center relative mb-[90px]"
      >
        <h1 className="text-5xl text-white">REDDY HARSHA VARDHAN KOLLA</h1>
        <div className="Slider w-64 absolute  mx-auto -bottom-40">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {images.map((img) => (
              <SwiperSlide key={img.id}>
                <img
                  loading="lazy"
                  src={img}
                  alt="my imng"
                  className="shadow-slate-500"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Home;
