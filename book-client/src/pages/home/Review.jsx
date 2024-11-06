// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

// react iconst
import { FaStar } from "react-icons/fa6";
import { Avatar } from "flowbite-react";
// images
import profile from "../../assets/profile.jpg";

const Review = () => {
  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug capitalize">
        our customers
      </h2>
      {/* slider */}
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 lg:m-5 rounded-lg border">
            <div>
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-5">
                {/* text  */}
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis, nulla, veritatis quam provident tempore ducimus
                  pariatur in facere magnam quisquam error officia explicabo
                  temporibus. Eveniet illo consequatur possimus saepe provident!
                </p>
                <Avatar
                  img={profile}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO, ABC COMPANY</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 lg:m-5 rounded-lg border">
            <div>
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-5">
                {/* text  */}
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis, nulla, veritatis quam provident tempore ducimus
                  pariatur in facere magnam quisquam error officia explicabo
                  temporibus. Eveniet illo consequatur possimus saepe provident!
                </p>
                <Avatar
                  img={profile}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO, ABC COMPANY</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 lg:m-5 rounded-lg border">
            <div>
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-5">
                {/* text  */}
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis, nulla, veritatis quam provident tempore ducimus
                  pariatur in facere magnam quisquam error officia explicabo
                  temporibus. Eveniet illo consequatur possimus saepe provident!
                </p>
                <Avatar
                  img={profile}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO, ABC COMPANY</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 lg:m-5 rounded-lg border">
            <div>
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-5">
                {/* text  */}
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis, nulla, veritatis quam provident tempore ducimus
                  pariatur in facere magnam quisquam error officia explicabo
                  temporibus. Eveniet illo consequatur possimus saepe provident!
                </p>
                <Avatar
                  img={profile}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO, ABC COMPANY</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 lg:m-5 rounded-lg border">
            <div>
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-5">
                {/* text  */}
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis, nulla, veritatis quam provident tempore ducimus
                  pariatur in facere magnam quisquam error officia explicabo
                  temporibus. Eveniet illo consequatur possimus saepe provident!
                </p>
                <Avatar
                  img={profile}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO, ABC COMPANY</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 lg:m-5 rounded-lg border">
            <div>
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-5">
                {/* text  */}
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis, nulla, veritatis quam provident tempore ducimus
                  pariatur in facere magnam quisquam error officia explicabo
                  temporibus. Eveniet illo consequatur possimus saepe provident!
                </p>
                <Avatar
                  img={profile}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO, ABC COMPANY</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 lg:m-5 rounded-lg border">
            <div>
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-5">
                {/* text  */}
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis, nulla, veritatis quam provident tempore ducimus
                  pariatur in facere magnam quisquam error officia explicabo
                  temporibus. Eveniet illo consequatur possimus saepe provident!
                </p>
                <Avatar
                  img={profile}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO, ABC COMPANY</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 lg:m-5 rounded-lg border">
            <div>
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-5">
                {/* text  */}
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis, nulla, veritatis quam provident tempore ducimus
                  pariatur in facere magnam quisquam error officia explicabo
                  temporibus. Eveniet illo consequatur possimus saepe provident!
                </p>
                <Avatar
                  img={profile}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO, ABC COMPANY</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
