import React from 'react';

const AddProduct = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const productInfo = {
            
            name: form.yourName.value,
            productName: form.productName.value,
            photo: form.image.files[0],
            condition: form.condition.value,
            resellPrice: form.resellPrice.value,
            originalPrice: form.originalPrice.value,
            phoneNumber: form.phoneNumber.value,
            location: form.location.value,
            category: form.category.value,
            year: form.year.value,
            description: form.description.value
        }
        

        console.log(productInfo)
    }

    return (
        <div className='p-14'>
            <h2 className='text-3xl text-center font-bold mb-6'>Add Product</h2>
            <form onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-1 gap-5 md:grid-cols-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Your Name</span>
              </label>
              <input
                type="text"
                name="yourName"
                required
                placeholder="your name"
                className="input input-bordered"
              />
                </div>
                <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Product Name</span>
              </label>
              <input
                type="text"
                name="productName"
                required
                placeholder="product name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Photo</span>
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
                <span className="label-text text-lg">Product Condition</span>
              </label>
              <select name="condition" className="select select-bordered w-full max-w-xs">
                <option value='Excellent' defaultValue='Excellent'>
                Excellent
                </option>
                <option value='Good'>Good</option>
                <option value='Fair'>Fair</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Resell Price</span>
              </label>
              <input
                type="number"
                name="resellPrice"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Original Price</span>
              </label>
              <input
                type="number"
                name="originalPrice"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Phone Number</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Location</span>
              </label>
              <input
                type="text"
                name="location"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Product Category</span>
              </label>
              <select name="category" className="select select-bordered w-full max-w-xs">
                <option value='Bedroom' defaultValue='Bedroom'>
                Bedroom
                </option>
                <option value='Office'>Office</option>
                <option value='Living room'>Living room</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Year of purchase</span>
              </label>
              <input
                type="number"
                name="year"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
        </div>
        <textarea name='description' className="textarea textarea-bordered mt-5 w-full" placeholder="Description"></textarea>
            <div className="form-control mt-6">
             <button type='submit' className="btn btn-primary">Add Product</button>
            </div>
          </form>
        </div>
    );
};

export default AddProduct;