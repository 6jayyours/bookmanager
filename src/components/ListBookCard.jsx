import React from "react";

const ListBookCard = ({ book, onDelete, onEdit }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-4">
      <div className="flex items-center space-x-4">
        <img src="" alt="" className="w-16 h-16 object-cover rounded-md" />
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{book.title}</h2>
          <p className="mt-1 text-gray-600">{book.author}</p>
        </div>
      </div>
      <div className="flex space-x-2">
        <button 
        onClick={() => onEdit(book)} 
        className="px-4 py-2 text-sm font-semibold text-black bg-[#e7edf3] rounded-lg hover:bg-blue-600 transition-colors duration-300">
          Edit
        </button>
        <button
          className="px-4 py-2 text-sm font-semibold text-black bg-[#e7edf3] rounded-lg hover:bg-red-600 transition-colors duration-300"
          onClick={() => onDelete(book.id)} // Pass the book ID to the delete function
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ListBookCard;
