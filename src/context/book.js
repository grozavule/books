import { createContext, useState } from 'react';
import axios from 'axios';

const BookContext = createContext();

function Provider({ children }){
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:3001/books");

        setBooks(response.data);
      } catch (e) {
        console.error(e);
      }
    };

    const createBook = async (title) => {
      try {
        const response = await axios.post("http://localhost:3001/books", {
          title,
        });

        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks);
      } catch (e) {
        console.error(e);
      }
    };

    const editBookById = async (id, title) => {
      try {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
          title,
        });

        const updatedBooks = books.map((book) => {
          if (book.id === id) {
            return { ...book, ...response.data };
          }
          return book;
        });
        setBooks(updatedBooks);
      } catch (e) {
        console.error(e);
      }
    };

    const deleteBookById = async (id) => {
      try {
        await axios.delete(`http://localhost:3001/books/${id}`);

        const updatedBooks = books.filter((book) => {
          return book.id !== id;
        });

        setBooks(updatedBooks);
      } catch (e) {
        console.error(e);
      }
    };

    const booksProviderObject = {
        books,
        deleteBookById,
        editBookById,
        createBook,
        fetchBooks
    };

    return (
        <BookContext.Provider value={booksProviderObject}>
            {children}
        </BookContext.Provider>
    );
}

export { Provider };
export default BookContext;