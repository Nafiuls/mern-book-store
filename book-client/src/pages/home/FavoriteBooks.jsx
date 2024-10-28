import { useEffect, useState } from "react";
import BookCards from "../../components/BookCards";

const FavoriteBooks = () => {
  const [books, setBooks] = useState([]);
  //   fetching books from server
  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <BookCards books={books} headline="Best Seller Books" />
    </div>
  );
};

export default FavoriteBooks;
