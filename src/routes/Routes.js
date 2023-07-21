import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ViewDetails from "../pages/Home/shopcategory/ViewDetails";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        // {
        //     path: '/view_details/:id',
        //     element: <ViewDetails></ViewDetails>,
        //     loader: ({params}) => fetch(`http://localhost:5000/customers/${params.id}`)
        // },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
      ]
    },
  ]);


  export default router;