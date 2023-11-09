import React from 'react';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCart = ({ coffee, coffees, setCoffees }) => {
    const { _id, coffeeName, quantity, supplier, taste, category, details, photo } = coffee;
    const handleDelete = _id => {
        console.log(_id)


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                console.log('deleted');
                fetch(`http://localhost:3000/coffee/${_id}`, {
                    method: 'DELETE'
                })

                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your CCoffee Item has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(coff => coff._id !== _id);
                            setCoffees(remaining)
                        }
                    })
            }
        })
    }


    return (
        <div className="card card-side bg-base-100 shadow-xl p-2 mb-3">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex justify-between w-full p-4">
                <div>
                    <h2 className="card-title">Name:{coffeeName}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                    <p>{category}</p>
                    <p>{details}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn">View</button>
                        <Link to={`updatedCoffee/${_id}`}>
                            <button className="btn">Edit</button>
                        </Link>

                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn bg-orange-500">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCart;