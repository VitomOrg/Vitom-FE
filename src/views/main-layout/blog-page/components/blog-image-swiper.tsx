import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper"; // Import SwiperClass
import ImageWithFallback from "@/components/common/image_with_callback";

interface BlogImageSwiperProps {
  imageList: string[];
}

const BlogImageSwiper: React.FC<BlogImageSwiperProps> = ({ imageList }) => {
  const [thumbsSwiper] = useState<SwiperClass | null>(null); // Định nghĩa kiểu cho thumbsSwiper

  if (imageList.length === 0) {
    return null; // Trả về null nếu không có hình ảnh
  }

  return (
    <>
      {/* Swiper chính để hiển thị hình ảnh */}
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {imageList.map((image, index) => (
          <SwiperSlide key={index}>
            <ImageWithFallback
              src={image}
              alt={`image-${index}`}
              className="object-cover w-full rounded-lg shadow-lg h-80"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper con để làm thumbnail */}
      <Swiper
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mt-4 mySwiper"
      >
        {imageList.map((image, index) => (
          <SwiperSlide key={index}>
            <ImageWithFallback
              src={image}
              alt={`image-thumb-${index}`}
              className="object-cover w-full h-20 rounded-lg shadow-sm cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BlogImageSwiper;
