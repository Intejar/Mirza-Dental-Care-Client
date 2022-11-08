import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";
import LogIn from "../../pages/LogIn/LogIn";
import SignUp from "../../pages/SignUp/SignUp";

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
            }

        ]

    }
])

export default router;