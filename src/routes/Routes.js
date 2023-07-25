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
import ErrorPage from "../pages/ErrorPage";
import Blog from "../pages/blog/Blog";
import UpdateToy from "../pages/myToys/UpdateToy";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/all_toys',
            element: <AllToys></AllToys>,
            loader: () => fetch('https://b7a11-toy-marketplace-server-side-chi.vercel.app/customers'),
            
        } ,
        {
            path: '/all_toys',
            element: <AllToys></AllToys>,
            loader: () => fetch('https://b7a11-toy-marketplace-server-side-chi.vercel.app/totalProducts'),
            
        } ,
        {
            path: '/view_details/:id',
            element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
            loader: ({params}) => fetch(`https://b7a11-toy-marketplace-server-side-chi.vercel.app/customers/${params.id}`)
        },
        {
            path: '/add_toy',
            element: <PrivateRoute>
                <AddToy></AddToy>
            </PrivateRoute>,
            
        },
        {
            path: '/my_toys',
            element: <PrivateRoute>
                <MyToys></MyToys>
            </PrivateRoute>
        },
        {
            path: '/update/:id',
            element: <UpdateToy></UpdateToy>,
            loader: ({params}) => fetch(`https://b7a11-toy-marketplace-server-side-chi.vercel.app/sellers/${params.id}`)
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        }
        ,
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