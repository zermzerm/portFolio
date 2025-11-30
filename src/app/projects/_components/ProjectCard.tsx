"use client";

import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface ProjectProps {
  data: {
    id: number;
    name: string;
    date: string;
    images: string[][];
    skills: string;
    github: string;
    deployment: string;
    description: string;
    accomplishment: string[];
  };
  key: number;
}

export default function ProjectCard({data}: ProjectProps) {
  return (
    <div className="flex flex-col gap-5 p-5 bg-[#9085d2] text-white rounded-2xl">
      <h2 className="text-center text-2xl">{data.name}</h2>
      <div className="text-center">{data.date}</div>
      <div className="flex justify-around gap-5">
        <div className="flex flex-col gap-3 justify-center items-center">
          <div className="w-[400px] h-[400px] overflow-hidden rounded-xl">
            <Swiper
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              speed={600}
              className="w-full h-full"
            >
              {data.images.map(([src, alt], index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={src}
                    width={400}
                    height={400}
                    alt={alt}
                    className="object-cover rounded-xl"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div>기술스택</div>
          <div>{data.skills}</div>
          <div>{data.github}</div>
          <div>{data.deployment}</div>
        </div>
        <div className="flex flex-col gap-5 justify-between">
          <div>
            <h3 className="text-[20px]">{data.name}</h3>
            <div>{data.description}</div>
          </div>
          <div>
            <div>역할 및 성과</div>
            <div>{data.accomplishment[0]}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
