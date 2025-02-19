import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
    books: [
        {
            id: 1,
            title: 'Love Bangladesh' ,
            author: "Ariyan Yeamin"
        },
        {
            id: 2,
            title: 'Freedom of Bangladesh' ,
            author: "Ariyan Yeamin"
        }
    ]
};

export const booksSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state
    },
})

export const {showBooks } = booksSlice.actions;
export default booksSlice.reducer