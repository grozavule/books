import '../css/BookList.css';
import { useContext } from 'react';
import BookContext from '../context/book';
import Book from './Book';

function BookList(){
    const { books } = useContext(BookContext);
    const booksJsx = books.map(book => {
        return <Book key={book.id} book={book} />;
    });

    return (
        <div className="book-list-container">
            {booksJsx}
        </div>
    );
}
export default BookList;