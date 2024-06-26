import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';
import { Provider } from 'react-redux';

import Home from './routes/Home';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import ShoppingBag from './routes/ShoppingBag';
import myntraStore from './store/indexmain';
import Login from "./Components/Login";



const router = createBrowserRouter([
  {
    path: "/", element: <App />,
    children:
      [{ path: "/", element: <Home /> },
      { path: "/ShoppingBag", element: <ShoppingBag /> },
      { path: "/Login", element: <Login /> }
      ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <Provider store={myntraStore}>
    <RouterProvider router={router} />
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

