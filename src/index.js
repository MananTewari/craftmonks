import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';
import Home from './routes/Home';
import {  RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import ShoppingBag from './routes/ShoppingBag';
const router = createBrowserRouter([
  {
      path: "/", element: <App/>,
      children:
          [{ path: "/", element: <Home/>},
          { path: "/ShoppingBag", element: <ShoppingBag/>},]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

