import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Base URL for the API
const BASE_URL = 'http://localhost:8080/api/v1/book';

// Async thunk to fetch all books
export const fetchAllBooks = createAsyncThunk('books/fetchAllBooks', async () => {
  const response = await axios.get(`${BASE_URL}/allBooks`);
  return response.data;
});

// Async thunk to add a new book
export const addNewBook = createAsyncThunk('books/addNewBook', async (newBook) => {
  const response = await axios.post(`${BASE_URL}/addBook`, newBook);
  return response.data; // assuming the backend returns the added book details
});

// Async thunk to update a book by ID
export const updateBook = createAsyncThunk('books/updateBook', async ({ id, updatedBook }) => {
  const response = await axios.put(`${BASE_URL}/${id}`, updatedBook);
  return response.data; // assuming the backend returns the updated book details
});

// Async thunk to delete a book by ID
export const deleteBook = createAsyncThunk('books/deleteBook', async (id) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  console.log("Delete Response:", response.data);
  return response.data;
});

const initialState = {
  books: [],
  status: 'idle', 
  error: null,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle fetchAllBooks
    builder
      .addCase(fetchAllBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload; // set the books array from the response
      })
      .addCase(fetchAllBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Handle addNewBook
      .addCase(addNewBook.fulfilled, (state, action) => {
        state.books.push(action.payload); // add the new book to the books array
      })
      // Handle updateBook
      .addCase(updateBook.fulfilled, (state, action) => {
        const index = state.books.findIndex(book => book.id === action.payload.id);
        if (index !== -1) {
          state.books[index] = action.payload; // update the book in the array
        }
      })
  },
});


// Export the reducer to be used in the Redux store
export default bookSlice.reducer;
