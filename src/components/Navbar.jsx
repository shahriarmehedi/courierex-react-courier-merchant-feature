import React from 'react';

const Navbar = () => {
    return (
        <>
            <div className='bg-rose-500 h-20'>
                <div className='flex items-center justify-around pt-4'>
                    <div className=''>
                        <h2 className='text-white font-thin text-3xl'>Courierex</h2>
                    </div>
                    <div>
                        <button className=' text-white px-10'>Home</button>
                        <button className='bg-white px-7 py-3 rounded text-rose-500 hover:text-white hover:bg-gray-600 transition duration-300'>
                            Create Parcel
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;