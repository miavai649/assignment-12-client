import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/Mobile login-bro.png";
import { AuthContext } from "../../Context/AuthContext";

const SignUp = () => {
  const imgHostKey = process.env.REACT_APP_imagebb_key;
  const { createUser, updateUserProfile, loading, setLoading, googleAuthentication } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleSignUp = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value
    const email = form.email.value
    const image = form.image.files[0]
    const option = form.option.value
    const password = form.password.value
    
   const formData = new FormData() 
   formData.append('image', image)

    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`

    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
      .then(imgData => {
        createUser(email, password)
          .then(result => {
          const user = result.user
          console.log(user)
          form.reset()
          updateUserProfile(name, imgData.data.url)
            .then(() => {
            toast.success('Signed up Successfully')
            navigate('/')
            setLoading(false)
          })
          .catch(err => console.log(err))
        })
          .catch(err => {
            console.log(err.message)
            setLoading(false)
            toast.error(err.message)
          })
      })
    .catch(err => console.log(err))
  }

  const handleGoogleSignUp = () => {
    googleAuthentication()
    .then(result => {
      const user = result.user
      console.log('current', user)
      navigate('/')
    })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  }
 
  return (
    <div className="hero bg-base-200">
      <div>
      </div>
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-full" src={img} alt="" />
        </div>
        <div className="card my-16 flex-shrink-0 w-1/2 shadow-2xl bg-base-100">
        <h1 className="text-5xl text-center font-bold mt-4">Sign Up</h1>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="input input-bordered"
              />
            </div>
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
                <span className="label-text">Photo</span>
              </label>
              <input
                type="file"
                name="image"
                required
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">What is your purpose?</span>
              </label>
              <select name="option" className="select select-bordered w-full max-w-xs">
                <option value='buyer' defaultValue='buyer'>
                  Buyer
                </option>
                <option value='seller'>Seller</option>
              </select>
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
            </div>
            <div className="form-control mt-6">
            {
                loading ? <button className="btn btn-primary loading">loading</button> : <button type='submit' className="btn btn-primary">Sign Up</button>
              }
            </div>
          </form>
          <p className="text-center">
          Already have an account?{" "}
          <Link className="text-primary btn btn-link font-bold" to="/login">
            Log In
          </Link>
        </p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleSignUp} className="btn btn-primary mx-14 my-8">
          <FaGoogle className="mr-3 text-xl"></FaGoogle>
          CONTINUE WITH GOOGLE
        </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
