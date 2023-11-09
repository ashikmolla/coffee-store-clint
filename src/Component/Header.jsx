import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='mt-3'>
            <Link to='/' className='m-4 border px-3 py-1'>Home</Link>
            <Link to='/addCoffee' className='m-4 border px-3 py-1'>Add Coffee</Link>
        </div>
    );
};

export default Header;
