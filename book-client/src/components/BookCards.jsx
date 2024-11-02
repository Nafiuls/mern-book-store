// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import { FaCartShopping } from "react-icons/fa6";

const BookCards = ({ headline, books }) => {
  return (
    <div className="my-6 px-6 lg:px-24">
      <h2 className="text-5xl text-center font-bold text-black my-5">
        {headline}
      </h2>
      {/* cards */}
      <div className="mt-12">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {books.map((book) => (
            <SwiperSlide key={book._id}>
              <Link to={`/book/${book?._id}`}>
                <div className="border-2 bg-[#CCFBF1] border-[#CCFBF1] p-2 rounded-md relative">
                  <img
                    className="w-full mx-auto lg:h-80 ob"
                    src={book?.imageURL}
                    alt=""
                  />
                  <div className="bg-blue-700 hover:bg-black p-2 rounded absolute top-3 right-3">
                    <FaCartShopping className="size-4 text-white" />
                  </div>
                  <div className="mt-2">
                    <h3 className="mb-1 font-bold text-xl">
                      {book?.bookTitle}
                    </h3>
                    <p className="font-semibold">{book?.authorName}</p>
                  </div>
                  <div>
                    <p className="text-xl text-green-500">$10</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCards;
