import { useEffect, useState } from "react";
import BookCard from "../../components/BookCard";

const Shop = () => {
  // fetching all books data
  const [books, setBooks] = useState([]);
  // fetching books
  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="capitalize text-4xl font-bold text-center">
        all books are here
      </h2>
      {/* books container */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 my-12">
        {books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
