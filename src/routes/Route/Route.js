import Main from "../../layout/Main";
import AddServices from "../../pages/AddServices/AddServices";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home/Home";
import LogIn from "../../pages/LogIn/LogIn";
import AddReview from "../../pages/Review/AddReview/AddReview";
import MyReview from "../../pages/Review/UserReview/MyReview/MyReview";
import ServiceDetails from "../../pages/ServiceDetails/ServiceDetails";
import Services from "../../pages/Services/Services";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            },
            {
                path:'/signIn',
                element:<LogIn></LogIn>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader:({params})=> fetch(`https://y-five-psi.vercel.app/services/${params.id}`)
            },
            {
                path:'/review/:id',
                element: <PrivateRoute><AddReview></AddReview></PrivateRoute>,
                loader:({params})=> fetch(`https://y-five-psi.vercel.app/services/${params.id}`)
            },
            {
                path:'/UserReview',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>,
            },
            {
                path:'/AddService',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>,
                loader: ()=> fetch('https://y-five-psi.vercel.app/services')
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            }
            

        ]

    }
])

export default router;