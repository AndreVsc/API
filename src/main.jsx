import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";import App from './app/App.jsx';
import './index.css';
import ErrorPage from './components/error/ErrorPage.jsx';

// Páginas
import Tictoctoe from './routes/Tictoctoe.jsx';
import Posts from './routes/Posts.jsx';

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:"/",
        element: <Tictoctoe />
      },
      {
        path:"/contact",
        element: <Posts/>
      }
    ],
   }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
