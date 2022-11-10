import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FaEyeSlash, FaEye, FaGoogle, FaGithub } from "react-icons/fa";


const LogIn = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const { logIn, passwordReset } = useContext(AuthContext)
    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()
    const gitProvider = new GithubAuthProvider()
    const [passerror, setPassError] = useState('');
    const [success, setSuccess] = useState(false);
    const [open, setOpen] = useState(false);
    const [getemail, setEmail] = useState('');
    const toggle = () => {
        setOpen(!open)
    }
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(res => {
                const user = res.user;
                console.log(user);
                const currentUser = {
                    email : user.email
                };
                fetch('https://y-five-psi.vercel.app/jwt',{
                    method: 'POST',
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    localStorage.setItem('token', data.token)
                    navigate(from,{replace : true})
                })
            })
            .catch(error => console.error(error))
    }
    const handleGithubSignIn = () => {
        providerLogin(gitProvider)
            .then(res => {
                const user = res.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setSuccess(false)
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                setSuccess(true)
                form.reset()
                const currentUser = {
                    email : user.email
                };
                fetch('https://y-five-psi.vercel.app/jwt',{
                    method: 'POST',
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    localStorage.setItem( 'token', data.token )
                    navigate(from,{replace : true})                    
                    
                })
            })
            .catch(e => {
                const emsg = e.message;
                setPassError(emsg)
                console.error(e)
            })

    }
    const emailBlur = event => {
        let email = event.target.value
        setEmail(email);
    }
    const resetPassword = () => {
        passwordReset(getemail)
            .then(() => {
                alert('please check your given mail to reset password')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }


    return (
        <div className=''>
           
            <div className="hero min-h-screen bg-base-200">
                <form onSubmit={handleSubmit} className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p><ul className="steps steps-vertical">
                            <li className="step step-primary text-md font-semibold">Login With Email</li>
                            <li className="step text-md font-semibold">LogIn With Google </li>
                            <li className="step text-md font-semibold">Login With Github</li>
                        </ul></p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" onBlur={emailBlur} placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label flex justify-between">
                                    <span className="label-text">Password</span>
                                    {
                                        (open === false) ? <FaEyeSlash onClick={toggle}></FaEyeSlash> : <FaEye onClick={toggle}></FaEye>
                                    }
                                </label>
                                <input type={(open === false) ? 'password' : 'text'} name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover" onClick={resetPassword}>Forgot password?</Link>
                                </label>

                            </div>
                            <p className='text-red-400'>{passerror}</p>
                            {
                                success && <p className='text-success'>Login Successfully.</p>
                            }
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                                <button onClick={handleGoogleSignIn} className='btn btn-primary my-3 '><span className='flex justify-center space-x-3'><FaGoogle></FaGoogle> <span>google</span></span></button>
                                <button onClick={handleGithubSignIn} className='btn btn-primary'><span className='flex justify-center space-x-3'><FaGithub></FaGithub> <span>github</span></span></button>
                            </div>
                            <label className="label my-3">
                                <Link to='/signUp' className="label-text-alt link link-hover text-primary">don't have any account?</Link>
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LogIn;