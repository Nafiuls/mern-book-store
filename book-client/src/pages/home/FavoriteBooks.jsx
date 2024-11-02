import { Link } from "react-router-dom";
import favBook from "../../assets/favoritebook.jpg";
const FavoriteBooks = () => {
  return (
    <div className="p-4 lg:px-24 my-20 flex flex-col lg:flex-row justify-between items-center">
      <div className="w-full lg:w-1/2">
        <img src={favBook} alt="" className="rounded lg:w-10/12" />
      </div>
      {/* content container */}
      <div className="lg:w-1/2 space-y-6">
        <h2 className="capitalize text-5xl my-5 lg:w-3/4 font-bold leading-snug">
          Find your favorite <span className="text-blue-700">Book here!</span>
        </h2>
        <p className="mb-10 text-lg md:w-5/6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic fugiat,
          nisi dolorem sint tempore quasi autem perferendis omnis adipisci
          asperiores praesentium eius expedita, blanditiis deleniti ullam
          molestias nihil labore iste?
        </p>
        <div className="flex flex-col sm:flex-row justify-between gap-5 md:w-3/4 my-14">
          <div>
            <h3 className="text-3xl font-bold">800+</h3>
            <p className="text-base">Book Listings</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">550+</h3>
            <p className="text-base">Registered Users</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">1200+</h3>
            <p className="text-base">PDF Downloads</p>
          </div>
        </div>
        <Link to="/shop" className="mt-8 block">
          <button className="capitalize bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300">
            explore more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FavoriteBooks;
