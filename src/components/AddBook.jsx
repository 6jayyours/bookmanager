import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewBook } from "../redux/bookSlice"; // Import the addNewBook action
import { useNavigate } from "react-router";

const AddBook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    title: "",
    author: "",
    publishedDate: "",
  });

  // handle input changes and update book state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch the addNewBook action to Redux
    dispatch(addNewBook(book))
      .then((result) => {
        if (result.meta.requestStatus === "fulfilled") {
          console.log("Book added successfully:", result.payload);
          setBook({ title: "", author: "", publishedDate: "" }); // Reset form
          navigate("/settings/allbooks");
        } else {
          console.error("Failed to add the book.");
        }
      })
      .catch((err) => {
        console.error("Error adding book:", err);
      });
  };

  return (
    <div className="px-4 py-4 bg-slate-100 rounded-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Add a New Book</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={book.title}
            onChange={handleChange}
            required
            className="mt-1 block w-[500px] px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter book title"
          />
        </div>

        {/* Author */}
        <div>
          <label
            htmlFor="author"
            className="block text-sm font-medium text-gray-700"
          >
            Author <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={book.author}
            onChange={handleChange}
            required
            className="mt-1 block w-[500px] px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter author name"
          />
        </div>

        {/* Published Date */}
        <div>
          <label
            htmlFor="publishedDate"
            className="block text-sm font-medium text-gray-700"
          >
            Published Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="publishedDate"
            name="publishedDate"
            value={book.publishedDate}
            onChange={handleChange}
            className="mt-1 block w-[500px] px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Submit Button */}
        <div className="w-[500px] flex justify-center">
          <button
            type="submit"
            className="w-[200px] px-4 py-2 text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
