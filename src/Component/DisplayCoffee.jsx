import React, { useState } from 'react';
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCart from './CoffeeCart';

const DisplayCoffee = () => {

    const coffee = useLoaderData();
    const [coffees, setCoffees]=useState(coffee)

    return (
        <div className='m-20'>
            <div className='grid md:grid-cols-2 gap4 p-2'>
                {
                    coffees.map(coffee => <CoffeeCart
                        key={coffee._id}
                        coffee={coffee}
                        coffees={coffees}
                        setCoffees={setCoffees}
                    ></CoffeeCart>)
                }

            </div>
        </div>
    );
};

export default DisplayCoffee;