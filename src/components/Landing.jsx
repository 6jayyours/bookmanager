import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

// Import components
import Hero from "./Hero";
import BookList from "./BookList";
import { fetchAllBooks } from "../redux/bookSlice";

const Landing = () => {
  const dispatch = useDispatch();
  
  // State to hold the fetched books and the selected book
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null); // New state for selected book

  useEffect(() => {
    dispatch(fetchAllBooks())
      .then((response) => {
        setBooks(response.payload); // Store the fetched books in state
        console.log("Fetched Books:", response.payload);
      })
      .catch((err) => {
        console.error("Failed to fetch books:", err); // Handle any errors
      });
  }, [dispatch]);

  return (
    <div className="overflow-y-hidden">
      <Hero onSearch={setSelectedBook} books={books} /> {/* Pass the books and setSelectedBook to Hero */}
      {/* Pass the selected book to BookList */}
      <BookList books={selectedBook ? [selectedBook] : books} />
    </div>
  );
};

export default Landing;
