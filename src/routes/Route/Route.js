import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";
import LogIn from "../../pages/LogIn/LogIn";
import AddReview from "../../pages/Review/AddReview/AddReview";
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
                loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/review/:id',
                element: <PrivateRoute><AddReview></AddReview></PrivateRoute>,
                loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            }

        ]

    }
])

export default router;