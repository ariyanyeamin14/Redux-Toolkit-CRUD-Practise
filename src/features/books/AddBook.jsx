import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from './BooksSlice';

const AddBook = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const numberOfBooks = useSelector(state => state.booksReducer.books.length);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const book = {id: numberOfBooks + 1 , title, author};
        dispatch(addBook(book));
        navigate('/show-books')
    }

    return (
        <div className='my-20 w-[70%] mx-auto'>
            <h1 className='title'>Add Book</h1>
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label htmlFor="title">Title: </label>
                    <input
                        type="text"
                        name='title'
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className='mb-4'>
                    <label htmlFor="author">Author: </label>
                    <input
                        type="text"
                        name='author'
                        required
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <button className='w-full mt-4'>Submit</button>
            </form>
        </div>
    );
};

export default AddBook;