import { useState, useContext } from 'react';
import BookContext from '../context/book';

function BookEdit({ book, onSave }){
    const [title, setTitle] = useState(book.title);
    const { editBookById } = useContext(BookContext);

    const onTitleInputChange = e => {
        setTitle(e.target.value);
    }

    const onBookEditSubmit = e => {
        e.preventDefault();
        editBookById(book.id, title);
        onSave();
    }

    return (
        <div>
            <form onSubmit={onBookEditSubmit}>
                <input type="text" className="input" value={title} onChange={onTitleInputChange} />
                <input type="submit" className="btn is-primary" value="Save" /> 
            </form>
        </div>
    );
}
export default BookEdit;