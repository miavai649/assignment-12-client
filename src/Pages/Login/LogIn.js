import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from "../../assets/images/login/Mobile login-bro.png";
import { AuthContext } from '../../Context/AuthContext';
import useToken from '../../hooks/useToken';

const LogIn = () => {
  const { signin, loading, setLoading, googleAuthentication } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()
  const [loginUserEmail, setLoginUserEmail] = useState('')
  const [token] = useToken(loginUserEmail)
  const from = location.state?.from?.pathname || '/'
  useEffect(() => {
    if (token) {
      navigate(from, {replace: true})
    }
  },[token, from, navigate])

    const handleLogIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signin(email, password)
            .then(result => {
            const user = result.user
            console.log(user)
            setLoginUserEmail(email)
            form.reset()
            toast.success('Logged in Successfully')
              setLoading(false)
            })
            .catch(err => {
            console.log(err.message)
            toast.error(err.message)
            setLoading(false)
        })
  }
  
  const handleGoogleLogIn = () => {
    googleAuthentication()
    .then(result => {
      const user = result.user
      console.log(user)
      if (user?.email) {
        
        setLoginUserEmail(user.email)
      }
    })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  }

  

    return (
        <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-[800px]" src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-5xl text-center font-bold mt-4">Log In</h1>
          <form onSubmit={handleLogIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              {
                loading ? <button className="btn btn-primary loading">loading</button> : <button type='submit' className="btn btn-primary">Log in</button>
              }
            </div>
            </form>
            <p className="text-center m-3 ">New to Doctors Portal? <Link className="text-primary btn btn-link font-bold" to='/signup'>Create new account</Link></p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleLogIn} className="btn btn-primary mx-14 my-8">
          <FaGoogle className="mr-3 text-xl"></FaGoogle>
          CONTINUE WITH GOOGLE
        </button>
        </div>
      </div>
    </div>
    );
};

export default LogIn;