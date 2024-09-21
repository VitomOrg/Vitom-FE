import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Skeleton,
} from "@/components/ui";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";
import assert from "@/assets";

const teammates = [
  {
    name: "Trung Anh",
    position: "Frontend Developer",
    avatar: assert.personal1,
  },
  {
    name: "Đức Thịnh",
    position: "DevOps Engineer",
    avatar: assert.personal2,
  },
  {
    name: "Long Bảo",
    position: "Backend Developer",
    avatar: "/path-to-avatar3.jpg",
  },
  {
    name: "Anh Tài",
    position: "Backend Developer",
    avatar: "/path-to-avatar3.jpg",
  },
  {
    name: "Minh Hoàng",
    position: "Marketing",
    avatar: "/path-to-avatar3.jpg",
  },
  {
    name: "Hải Nam",
    position: "Designer",
    avatar: "/path-to-avatar3.jpg",
  },
];

const ListTeammate = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="container p-8 mx-auto">
      <h2 className="mb-8 text-3xl font-bold text-center text-primary">
        Our Team
      </h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        scrollbar={{
          hide: true,
        }}
        modules={[Autoplay, Scrollbar]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <SwiperSlide key={index}>
                <Card className="flex flex-col items-center justify-center p-6 transition-shadow duration-300 ease-in-out bg-white rounded-lg shadow-lg hover:shadow-2xl">
                  <CardHeader className="flex justify-center mb-4">
                    <Skeleton className="w-24 h-24 border-4 border-gray-200 rounded-full" />
                  </CardHeader>
                  <CardContent className="text-center">
                    <Skeleton className="w-32 h-4 mb-2" />
                    <Skeleton className="w-24 h-4" />
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))
          : teammates.map((member, index) => (
              <SwiperSlide key={index}>
                <Card className="flex flex-col items-center justify-center p-6 my-5 transition-shadow duration-300 ease-in-out bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl">
                  <CardHeader className="flex justify-center mb-4">
                    <Avatar className="overflow-hidden bg-cover rounded-full w-28 h-28">
                      <AvatarImage
                        src={member.avatar}
                        alt={member.name}
                        className="object-cover w-full h-full"
                      />
                      <AvatarFallback>{member.name}</AvatarFallback>
                    </Avatar>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardTitle className="mb-1 text-xl font-semibold text-gray-800">
                      {member.name}
                    </CardTitle>
                    <p className="text-sm text-gray-600">{member.position}</p>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
      </Swiper>
    </section>
  );
};

export default ListTeammate;
