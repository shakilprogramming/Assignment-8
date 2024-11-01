import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import ListedBooksPage from './components/ListedBooksPage/ListedBooksPage';
import BookDetails from './components/BookDetails/BookDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/applied',
        element: <AppliedJobs />,
      },
      {
        path: '/book/:id',
        element: <BookDetails />,
        loader: async ({ params }) => {
          const response = await fetch('/jobs.json'); 
          const books = await response.json();
          return books.find(book => book.bookId === parseInt(params.id, 10));
        },
      },
      {
        path: '/listed-books',
        element: <ListedBooksPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
