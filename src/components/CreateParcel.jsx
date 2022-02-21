import React, { useState } from 'react';

const CreateParcel = () => {


    const [isChecked, setIsChecked] = useState(false)

    const handleCheckBox = (e) => {
        const checked = e.target.checked;
        if (checked) {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }


    }





    return (
        <>
            <div className='w-5/6 mx-auto mt-20'>
                <div className='flex flex-col lg:flex-row '>
                    <div className='w-5/6 lg:w-[80%] mx-auto'>
                        <h2 className='text-3xl font-bold pb-5'>Create a new parcel</h2>

                        <form>
                            <h3 className='text-xl pb-2 font-semibold'>Customer informations:</h3>

                            <div className='flex flex-col'>
                                <div className='m-2'>
                                    <label>Name: <span className='text-rose-500 text-xl'>*</span></label> <br />
                                    <input required className='p-2 w-[500px] bg-slate-100 rounded-md' type="text" />
                                </div>
                                <div className='m-2'>
                                    <label>Phone: <span className='text-rose-500 text-xl'>*</span></label> <br />
                                    <input required className='p-2 w-[500px] bg-slate-100 rounded-md' type="tel" />
                                </div>
                                <div className='m-2'>
                                    <label>Address: <span className='text-rose-500 text-xl'>*</span></label> <br />
                                    <textarea required className='p-2 w-[500px] bg-slate-100 rounded-md' type="address" />
                                </div>
                            </div>

                            <h3 className='text-xl py-3 font-semibold'>Delivery informations:</h3>

                            <div className='flex flex-col'>
                                <div className='m-2'>
                                    <label>Parcel weight: <span className='text-rose-500 text-xl'>*</span></label> <br />
                                    <select required className='p-2 w-[500px] bg-slate-100 rounded-md'>
                                        <option disabled selected>Select a weight</option>
                                        <option>Up to 1kg</option>
                                        <option>Up to 3kg</option>
                                        <option>Up to 5kg</option>
                                        <option>Up to 10kg</option>
                                        <option>Up to 20kg</option>
                                        <option>Up to 50kg</option>
                                    </select>
                                </div>
                                <div className='m-2'>
                                    <label>Delivery route: <span className='text-rose-500 text-xl'>*</span></label> <br />
                                    <select required className='p-2 w-[500px] bg-slate-100 rounded-md'>
                                        <option disabled selected>Select a route</option>
                                        <option>Inside Dhaka city</option>
                                        <option>Outside Dhaka city</option>
                                    </select>
                                </div>
                                <div className='m-2'>
                                    <label>Cash collection amount: <span className='text-rose-500 text-xl'>*</span></label> <br />
                                    <input required className='p-2 w-[500px] bg-slate-100 rounded-md' type="number" />
                                </div>
                                <div className='m-2'>
                                    <label>Product cost: <span className='text-rose-500 text-xl'>*</span></label> <br />
                                    <input required className='p-2 w-[500px] bg-slate-100 rounded-md' type="number" />
                                </div>
                                <div className='m-2'>
                                    <label>Product details: <span className='text-rose-500 text-xl'>*</span></label> <br />
                                    <textarea required className='p-2 w-[500px] bg-slate-100 rounded-md' type="address" />
                                </div>
                                <div className='m-2'>
                                    <label>Pickup location: <span className='text-rose-500 text-xl'>*</span></label> <br />
                                    <textarea required className='p-2 w-[500px] bg-slate-100 rounded-md' type="address" />
                                </div>
                            </div>

                            <div>
                                <input className=' h-[20px] w-[20px] rounded-md relative top-1 left-2' type="checkbox" onChange={(e) => handleCheckBox(e)} name="" id="" /> <span className='px-5'>I agree to the <span className='font-semibold text-rose-500 cursor-pointer'>Terms & conditions</span> </span>
                                <div className='flex pt-10 pb-20'>
                                    <button className='bg-slate-500 px-10 py-3 rounded text-white hover:bg-gray-600 transition duration-300 mx-14'>Cancel</button>
                                    {
                                        isChecked ? <input type='submit' value="Submit" className=' cursor-pointer px-10 py-3 rounded text-white bg-rose-500 transition duration-300 mx-14' />
                                            :
                                            <input type='submit' value="Submit" disabled className=' px-10 py-3 rounded text-slate-400 bg-slate-200 transition duration-300 mx-14' />
                                    }
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='w-5/6 lg:w-[20%] sticky top-20 bg-slate-100 text-slate-700 pt-5 pb-14 px-10 mx-10 h-[300px] rounded-lg'>
                        <h2 className=' text-xl  font-bold pb-5'>Merchant Billing</h2>
                        <h2 className=' text-lg'>Cash collection: 100</h2>
                        <h2 className=' text-lg'>Delivery charge: 100</h2>
                        <h2 className=' text-lg'>COD charge: 100</h2>
                        <h2 className=' pt-5 text-lg font-bold'>Total: 300</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateParcel;