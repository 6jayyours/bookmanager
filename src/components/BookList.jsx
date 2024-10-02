import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books }) => {
  console.log(books);

  return (
    <div className="px-24 py-6 grid grid-cols-4 gap-6">
      {books.length > 0 ? (
        books.map((book) => (
          <BookCard key={book.id} book={book} /> // Pass each book as a prop to BookCard
        ))
      ) : (
        <p>No books available</p> // Display a message if no books are present
      )}
    </div>
  );
};

export default BookList;
