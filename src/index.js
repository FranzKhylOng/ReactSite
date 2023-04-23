import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import Udemy from './components/portfolio/blogs/udemy/udemy';
import {
    createHashRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createHashRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/udemy",
      element: <Udemy/>
    },
  ]);

ReactDOM.render(<RouterProvider router={router} />, document.querySelector("#root"))