import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ViewDetails from "../pages/Home/shopcategory/ViewDetails";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AllToys from "../pages/AllToys/AllToys";
import AddToy from "../pages/addToy/AddToy";
import MyToys from "../pages/myToys/MyToys";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/all_toys',
            element: <AllToys></AllToys>,
            loader: () => fetch('http://localhost:5000/customers')
        } ,
        {
            path: '/view_details/:id',
            element: <ViewDetails></ViewDetails>,
            loader: ({params}) => fetch(`http://localhost:5000/customers/${params.id}`)
        },
        {
            path: '/add_toy',
            element: <PrivateRoute>
                <AddToy></AddToy>
            </PrivateRoute>,
            // loader: ({params}) => fetch(`http://localhost:5000/customers/${params.id}`)
        },
        {
            path: '/my_toys',
            element: <PrivateRoute>
                <MyToys></MyToys>
            </PrivateRoute>
        },
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