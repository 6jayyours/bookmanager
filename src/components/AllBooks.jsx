import React, { useEffect, useState } from 'react';
import ListBookCard from './ListBookCard';
import { fetchAllBooks, deleteBook, updateBook } from '../redux/bookSlice'; // Import updateBook
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2'; // Import SweetAlert2

const AllBooks = () => {
  const dispatch = useDispatch();

  // State to hold the fetched books
  const [books, setBooks] = useState([]);

  useEffect(() => {
    dispatch(fetchAllBooks())
      .then((response) => {
        setBooks(response.payload); // Store the fetched books in state
        console.log('Fetched Books:', response.payload);
      })
      .catch((err) => {
        console.error('Failed to fetch books:', err); // Handle any errors
      });
  }, [dispatch]);

  // Function to handle book deletion with confirmation
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteBook(id))
          .then((result) => {
            if (result.meta.requestStatus === 'fulfilled') {
              setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
              Swal.fire('Deleted!', 'The book has been deleted.', 'success');
            } else {
              Swal.fire('Error!', 'Failed to delete the book.', 'error');
            }
          })
          .catch((err) => {
            Swal.fire('Error!', 'An error occurred while deleting the book.', 'error');
            console.error('Error deleting the book:', err);
          });
      }
    });
  };

  // Function to handle book editing
  const handleEdit = (book) => {
    Swal.fire({
      title: 'Edit Book Details',
      html: `
        <input id="swal-input1" class="swal2-input" value="${book.title}" placeholder="Title">
        <input id="swal-input2" class="swal2-input" value="${book.author}" placeholder="Author">
        <input id="swal-input3" class="swal2-input" type="date" value="${book.publishedDate}" placeholder="Published Date">
      `,
      focusConfirm: false,
      preConfirm: () => {
        const newTitle = document.getElementById('swal-input1').value;
        const newAuthor = document.getElementById('swal-input2').value;
        const newPublishedDate = document.getElementById('swal-input3').value;
  
        if (!newTitle || !newAuthor || !newPublishedDate) {
          Swal.showValidationMessage('Please fill in all fields');
          return null;
        }
  
        return { newTitle, newAuthor, newPublishedDate };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedBook = {
          ...book,
          title: result.value.newTitle,
          author: result.value.newAuthor,
          publishedDate: result.value.newPublishedDate,
        };
  
        // Dispatch updateBook action to Redux
        dispatch(updateBook({ id: updatedBook.id, updatedBook }))
  .then((res) => {
    if (res.meta.requestStatus === 'fulfilled') {
      setBooks((prevBooks) => prevBooks.map((b) => (b.id === updatedBook.id ? updatedBook : b)));
      Swal.fire('Updated!', 'The book details have been updated.', 'success');
    } else {
      const errorMessage = res.payload?.message || 'Failed to update the book. Please check the server response.';
      Swal.fire('Error!', errorMessage, 'error');
    }
  })
  .catch((err) => {
    const errorMessage = err?.message || 'An error occurred while updating the book.';
    Swal.fire('Error!', errorMessage, 'error');
    console.error('Error updating the book:', err);
  });
      }
    });
  };
  
  

  return (
    <div className='px-4 py-4 bg-slate-100 rounded-md'>
      <h1 className='text-2xl font-bold text-gray-800 mb-6'>All Books</h1>
      <div className='grid grid-cols-1 gap-4'>
        {books.map((book) => (
          <ListBookCard 
            key={book.id} 
            book={book} 
            onDelete={handleDelete} // Pass handleDelete as a prop
            onEdit={handleEdit} // Pass handleEdit as a prop
          />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
