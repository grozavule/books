import { useState, useContext } from 'react';
import BookContext from '../context/book';
import BookEdit from './BookEdit';

function Book({ book }){
    const [showEdit, setShowEdit] = useState(false);
    const { deleteBookById } = useContext(BookContext);

    const handleEditButtonClick = e => {
        e.preventDefault();
        setShowEdit(!showEdit);
    }

    const handleDeleteButtonClick = e => {
        e.preventDefault();
        deleteBookById(book.id);
    }

    const onBookEditSave = () => {
        setShowEdit(!showEdit);
    }

    let content = <h3>{book.title}</h3>;
    if(showEdit){
        content = <BookEdit book={book} onSave={onBookEditSave} />
    }
    
    return (
        <div className="book-show">
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEditButtonClick}>Edit</button>
                <button className="delete" onClick={handleDeleteButtonClick}>Delete</button>
            </div>
        </div>
    );
}
export default Book;