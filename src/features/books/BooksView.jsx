import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from './BooksSlice';

const BooksView = () => {
    const books = useSelector((state) => state.booksReducer.books)
    const dispatch = useDispatch();

    const handleDeleteBook = (id) => {
        dispatch(deleteBook(id))
    };

    return (
        <div className='my-20'>
            <h1 className='title'>
                Book view
            </h1>
            <table className='table-auto border-collapse border border-gray-300 w-[70%] mx-auto my'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map(book => <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td className='space-x-3'>
                                <button>Edit</button>
                                <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default BooksView;