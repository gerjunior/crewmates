import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './views/Layout/Layout.tsx';
import { Create } from './pages/Create/Create.tsx';
import { Gallery } from './pages/Gallery/Gallery.tsx';
import { Home } from './pages/Home/Home.tsx';
import { Info } from './pages/Info/Info.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'create',
        element: <Create />,
      },
      {
        path: 'edit/:id',
        element: <Create />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
      {
        path: 'info/:id',
        element: <Info />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
