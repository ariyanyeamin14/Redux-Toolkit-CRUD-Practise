import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateBook } from './BooksSlice';

const EditBook = () => {
    const location = useLocation();
    const [id, setId] = useState(location.state.book.id)
    const [title, setTitle] = useState(location.state.book.title)
    const [author, setAuthor] = useState(location.state.book.author);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateBook({id, title, author}));
        navigate('/show-books')
    }
    return (
        <div className='w-[70%] my-20 mx-auto'>
            <h1 className='title'>Edit Book</h1>
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
                    <label htmlFor="Author">Author: </label>
                    <input
                        type="text"
                        name='Author'
                        required
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <button className='w-full mt-4'>Update Book</button>
            </form>
        </div>
    );
};

export default EditBook;