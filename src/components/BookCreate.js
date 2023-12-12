import { useState, useContext } from 'react';
import BookContext from '../context/book';

function BookCreate(){
    const [title, setTitle] = useState('');
    const { createBook } = useContext(BookContext);

    const onTitleChange = e => {
        setTitle(e.target.value);
    }

    const onFormSubmit = e => {
        e.preventDefault();
        createBook(title);
        setTitle('');
    }

    return (
      <form id="createBook" onSubmit={onFormSubmit} className="book-create">
        <fieldset>
            <legend>Add Book</legend>
            <label>Title</label>
            <input type="string" className="input" value={title} onChange={onTitleChange} id="bookTitle" name="bookTitle" />
            <input type="submit" className="button" value="Add Book" />
        </fieldset>
      </form>
    );
}
export default BookCreate;