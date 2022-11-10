import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FaUser } from "react-icons/fa";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(res => { })
            .catch(err => console.log(err))
    }
    return (
        <div className="navbar bg-blue-300 p-5 my-10 rounded-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='font-bold'><Link to='/'> Home </Link></li>
                        <li className='font-bold'><Link to='/services'>Services</Link></li>
                        <li className='font-bold'><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Mirza Dental Care</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li className='font-bold'><Link to='/'>Home</Link></li>
                    <li className='font-bold'><Link to='/services'>Services</Link></li>
                    <li className='font-bold'><Link to='/blog'>Blog</Link></li>
                    {
                        user ? 
                        <>
                            <li className='font-bold'><Link to='/UserReview'>My Reviews</Link></li>
                            <li className='font-bold'><Link to='/AddService'>Add Services</Link></li>
                            <li className='font-bold'><Link to='' onClick={handleLogOut}>Logout</Link></li>
                        </> 
                        : 
                    
                        <>
                            <li className='font-bold'><Link to='/AddService'>Add Services</Link></li>
                            <li className='font-bold'><Link to='/signUp'>SignIn</Link></li>
                        </>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className='flex items-center space-x-3'>
                            <FaUser></FaUser>
                            <p className='font-bold'>{user.displayName}</p>
                            <Link to='/AddService' className="btn-dental">Add Services</Link>
                        </div>
                        :
                        <Link  to='/signUp' className="btn btn-dental">Register</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;