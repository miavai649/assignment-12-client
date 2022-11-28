import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthContext";

const BookingModal = ({ setBookingProduct, bookingProduct }) => {
  const { productName, resellPrice, photo } = bookingProduct;
  const { user } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const bookingInfo = {
            name: form.name.value,
            email: form.email.value,
            productName: form.product.value,
            price: form.price.value,
            image: photo,
            phoneNumber: form.phoneNumber.value,
            meetingLocation: form.meetingLocation.value
        }

        fetch('https://assignment-12-server-sigma.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
        .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                   setBookingProduct(null) 
                   toast.success('Product Booked Successfully')
                   form.reset()
                }
                else {
                    toast.error(data.message)
                }
            })
        
    }
    
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-neutral text-lg py-4 text-center">
            Fill the form for booking
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                readOnly
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
                defaultValue={user?.email}
                readOnly
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                name="product"
                defaultValue={productName}
                readOnly
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                defaultValue={resellPrice}
                readOnly
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Enter your phone number"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Meeting Location</span>
              </label>
              <input
                type="text"
                name="meetingLocation"
                placeholder="Meeting location"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
             <button type='submit' className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
