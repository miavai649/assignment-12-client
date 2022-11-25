import React, { useContext } from "react";
import toast from "react-hot-toast";
import img from "../../assets/images/login/Mobile login-bro.png";
import Loading from "../../components/Loading/Loading";
import { AuthContext } from "../../Context/AuthContext";

const SignUp = () => {
  const imgHostKey = process.env.REACT_APP_imagebb_key;
  const { createUser, updateUserProfile, loading, setLoading } = useContext(AuthContext);

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
          })
          .catch(err => console.log(err))
        })
          .catch(err => {
            console.log(err.message)
            setLoading(false)
            toast.error(err.message)
          })
      })
  }

 
  return (
    <div className="hero bg-base-200">
      {loading && <Loading></Loading>}
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-[800px]" src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
              <button type="submit" className="btn btn-primary">Sign UP</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
