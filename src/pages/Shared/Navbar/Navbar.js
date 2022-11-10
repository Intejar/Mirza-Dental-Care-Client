import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(res => { })
            .catch(err => console.log(err))
    }
    return (
        <div className="navbar bg-base-100 p-2 my-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'> Home </Link></li>
                        <li><a>Services</a></li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Mirza Dental Care</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><a>Blog</a></li>
                    {
                        user ? 
                        <>
                            <li><Link to='/UserReview'>My Reviews</Link></li>
                            <li><Link to='' onClick={handleLogOut}>Logout</Link></li>
                        </> 
                        : 
                    
                        <>
                            <li><Link to='/'>Add Services</Link></li>
                            <li><Link to='/signUp'>SignIn</Link></li>
                        </>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className='flex items-center space-x-3'>
                            <p>{user.displayName}</p>
                            <Link to='/AddService' className="btn">Add Services</Link>
                        </div>
                        :
                        <Link  to='/signUp' className="btn">Register</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;