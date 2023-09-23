import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { PokeContextProvider } from './context/pokeContext';
import { DetailPoke } from './pages/detailPoke';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/detail/:id",
    element: <DetailPoke />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <PokeContextProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </PokeContextProvider>
)


