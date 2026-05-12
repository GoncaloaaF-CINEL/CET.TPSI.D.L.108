import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,
    RouterProvider} from 'react-router-dom'


import './index.css'
import App from './App.jsx'
import NotFound from "./NotFound.jsx";
import Utilizadores from "./Utilizadores.jsx";
import UserDetalhe from "./UserDetalhe.jsx";

const router = createBrowserRouter([
    {
        path: '/home',
        element: <App />,
        errorElement: <NotFound />
    },
    {
        path: '/utilizadores',
        element: <Utilizadores />,
        children: [
            {
                path: '/utilizadores/:id',
                element: <UserDetalhe />
            },
        ]
    },




])


// URL vs URI

/*

https://www.vogella.com/tutorials/JavaConcurrency/article.html <- altero article.html -> foo.html
https://www.pingodoce.pt/home/produtos/talho -> abc.html
                                             -> edc.html

 */


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
