import { useContext, useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BookContext from './context/book';

function App() {
    const { fetchBooks } = useContext(BookContext);
    
    useEffect(() => {
        fetchBooks();
    }, []);
    
    return (
      <>
        <BookList />
        <BookCreate />
      </>
    );
}

export default App;