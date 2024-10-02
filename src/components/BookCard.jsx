import React from 'react'

import bookImg from '../assets/library.jpg'

const BookCard = ( {book} ) => {
  console.log(book)
  
  return (
    <div className="max-w-[360px] rounded-lg border border-gray-300 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Image container */}
      <div className="overflow-hidden rounded-lg">
        <img src={bookImg} alt="" className="w-full h-24 object-cover" />
      </div>
      {/* Text container */}
      <div className="p-2">
        <h2 className="text-lg font-semibold text-gray-800">{book.title}</h2>
        <p className="mt-1 text-gray-600">{book.author}</p>
      </div>
    </div>
  )
}

export default BookCard
