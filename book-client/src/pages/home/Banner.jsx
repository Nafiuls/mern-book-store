import Slide from "./Slide";

const Banner = () => {
  return (
    <div className="bg-teal-100 flex items-center px-6 lg:px-24">
      <div className="flex flex-col lg:flex-row items-center gap-12 py-40 justify-between w-full">
        {/* banner content */}
        <div className="md:w-1/2 w-full space-y-8">
          <h1 className="capitalize text-5xl font-bold leading-snug text-black">
            buy and sell your books{" "}
            <span className="text-blue-700">for the best prices</span>
          </h1>
          <p className="md:w-4/5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
            aperiam, alias nemo ab obcaecati ipsa tempore, labore, vel delectus
            fugiat molestiae illum maxime quo quam amet fugit eos ipsum optio.
          </p>
          <div>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search Books"
              className="px-1 py-1 rounded-s-sm outline-none"
            />
            <button className="bg-blue-700 px-6 py-1 rounded-e-sm text-white font-medium hover:bg-black transition-all ease-in duration-200">
              Search
            </button>
          </div>
        </div>
        {/* banner books swiper */}
        <div>
          <Slide />
        </div>
      </div>
    </div>
  );
};

export default Banner;
