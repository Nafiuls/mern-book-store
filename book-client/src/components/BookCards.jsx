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
      <div>
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
                <div className="relative">
                  <img className="w-full" src={book?.imageURL} alt="" />
                  <div className="bg-blue-700 hover:bg-black p-2 rounded absolute top-3 right-3">
                    <FaCartShopping className="size-4 text-white" />
                  </div>
                  <div>
                    <h3>{book?.bookTitle}</h3>
                    <p>{book?.authorName}</p>
                  </div>
                  <div>
                    <p>$10</p>
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
