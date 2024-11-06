import { Card } from "flowbite-react";

const BookCard = ({ book }) => {
  const { _id, bookTitle, imageURL, bookDescription } = book;

  return (
    <Card>
      <div className="h-96">
        <img src={imageURL} alt="" className=" h-full w-full" />
      </div>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {bookTitle}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {bookDescription.slice(0, 200)}...
      </p>
      {/* buy now btn */}
      <button className="capitalize bg-blue-700 font-semibold text-white py-2 rounded hover:bg-black transition-all duration-300">
        buy now
      </button>
    </Card>
  );
};

export default BookCard;
