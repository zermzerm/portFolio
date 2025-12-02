"use client";

import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

interface ProjectProps {
  data: {
    id: number;
    name: string;
    date: string;
    images: string[][];
    skills: string;
    github: string;
    deployment?: string;
    description: string;
    accomplishment: string[];
  };
  key: number;
}

export default function ProjectCard({data}: ProjectProps) {
  return (
    <div className="flex flex-col gap-6 p-6 w-[1250px] bg-[#48407b] text-white rounded-2xl">
      <h2 className="text-center text-2xl">{data.name}</h2>
      <div className="text-center">{data.date}</div>
      <div className="flex justify-between gap-7">
        <div className="flex-1 flex flex-col gap-3 justify-center items-center">
          <div className="w-[600px] h-[400px] overflow-hidden rounded-xl">
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
                    width={600}
                    height={400}
                    alt={alt}
                    className="w-full h-full object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div>
            <Link href={data.github} target="_blank" className="flex items-center">
              <Image src="/link.png" width={33} height={33} alt="linkImage" />
              <p> Github</p>
            </Link>
          </div>
          {data.deployment && (
            <div>
              <Link href={data.deployment} target="_blank" className="flex items-center">
                <Image src="/link.png" width={33} height={33} alt="linkImage" />
                <p> Deployment</p>
              </Link>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-8">
          <div>
            <h3 className="text-xl font-bold pb-1">{data.name}</h3>
            <div className="text-[16px]">{data.description}</div>
          </div>
          <div>
            <h3 className="text-xl font-bold pb-1">기술스택</h3>
            <div className="text-[16px]">{data.skills}</div>
          </div>
          <div>
            <h3 className="text-xl font-bold pb-1">역할 및 성과</h3>
            <ul>
              {data.accomplishment.map((el, idx) => (
                <li key={idx} className="text-[16px] leading-8 list-disc list-inside">
                  {el}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
