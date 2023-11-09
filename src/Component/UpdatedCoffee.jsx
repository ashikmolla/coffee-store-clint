import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdatedCoffee = () => {
    const coffee = useLoaderData()
    const { _id, coffeeName, quantity, supplier, taste, category, details, photo } = coffee;





    const HandleUpdetedCoffee = event => {
        event.preventDefault();
        const form = event.target;

        const coffeeName = form.coffeeName.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { coffeeName, quantity, supplier, taste, category, details, photo }
        // console.log(newCoffee)



        //  ------ -----------------send data to the server
        fetch(`http://localhost:3000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 1) {
                    Swal.fire({
                        title: 'success',
                        text: ' Coffee Updete success',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })

                }
            })
        // ------------------------send data End

    }

    return (
        <div>

            <div className="bg-[#F4F3F0] border rounded w-2/3 mt-10 m-auto mb-8 ">

                <div className="w-4/5 m-auto mt-10 mb-10 text-center">
                    <h1 className="text-3xl font-extrabold text-center mb-2 ">Updeted Coffee: - <span className='text-green-800'>{coffeeName}</span></h1>


                </div>
                <form onSubmit={HandleUpdetedCoffee} className=" mb-8 p-2">

                    {/* form row */}
                    <div className="md:flex gap-5 ">
                        {/* namee */}
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Coffee Name</span>
                            </label>
                            <label className="input-group">
                                <input className='w-full input input-bordered rounded' type="text" name="coffeeName" defaultValue={coffeeName} placeholder="Enter Coffee Name" />
                            </label>
                        </div>
                        {/* Qunatity */}
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <label className="input-group">
                                <input className='w-full input input-bordered rounded' type="text" name="quantity" defaultValue={quantity} placeholder="Available QUantity" />
                            </label>
                        </div>
                    </div>


                    {/* form supplier and tase row */}
                    <div className="md:flex gap-5 ">
                        {/* Supplier */}
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Supplier Name</span>
                            </label>
                            <label className="input-group">
                                <input className='w-full input input-bordered rounded' type="text" name="supplier" defaultValue={supplier} placeholder="Enter Coffee supplier" />
                            </label>
                        </div>
                        {/* taste */}
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <label className="input-group">
                                <input className='w-full input input-bordered rounded' type="text" name="taste" defaultValue={taste} placeholder="Enter Coffee Taste" />
                            </label>
                        </div>
                    </div>


                    {/* form Ctegory and Details row */}
                    <div className="md:flex gap-5 ">
                        {/* namee */}
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Coffee Category</span>
                            </label>
                            <label className="input-group">
                                <input className='w-full input input-bordered rounded' type="text" name="category"  defaultValue={category} placeholder="Enter Coffee Category" />
                            </label>
                        </div>
                        {/* Qunatity */}
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <input className='w-full input input-bordered rounded' type="text" name="details" defaultValue={details} placeholder="Enter Coffee Details" />
                            </label>
                        </div>
                    </div>

                    {/*  row photo Url */}
                    <div className="mb-5 ">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <label className="input-group">
                            <input className='w-full input input-bordered rounded' type="text" name="photo" defaultValue={photo} placeholder="Enter Coffee photo Url" />
                        </label>
                    </div>

                    {/* form bton */}
                    <input className="btn btn-block" style={{ backgroundColor: '#D2B48C' }} type="submit" value="Updeted this Coffee" />


                </form>
            </div>

        </div>
    );
};

export default UpdatedCoffee;