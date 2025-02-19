import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Error from './pages/Error';
import BooksView from './features/books/BooksView';
import AddBook from './features/books/AddBook';
import { Provider } from 'react-redux';
import store from './app/store';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "home",
        element: <Home></Home>
      },
      {
        path: "add-books",
        element: <AddBook></AddBook>
      },
      {
        path: "show-books",
        element: <BooksView></BooksView>
      },
    ]
  },
  {
    path: "*",
    element: <Error></Error>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
) 