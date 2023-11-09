import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Component/AddCoffee.jsx';
import UpdatedCoffee from './Component/UpdatedCoffee.jsx';
import DisplayCoffee from './Component/DisplayCoffee.jsx';
import CoffeeCart from './Component/CoffeeCart.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <DisplayCoffee />,
        loader:()=> fetch('http://localhost:3000/coffee')

      },
      {
        path: '/addCoffee',
        element: <AddCoffee />
      }, {
        path: '/updatedCoffee/:id',
        element: <UpdatedCoffee />,
        loader: ({params})=>fetch(`http://localhost:3000/coffee/${params.id}`)
      },{
        path:'coffeeCart',
        element:<CoffeeCart/>
      } 
    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
