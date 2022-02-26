import { format } from 'date-fns';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const CreateParcel = () => {

    // STATE MANAGEMENT
    const [cashCollection, setCashCollection] = useState(0);
    const [deliveryCharge, setDeliveryCharge] = useState(0);
    const [codCharge, setCodCharge] = useState(0);
    const [isChecked, setIsChecked] = useState(false)

    // HANDLING CHECKBOX FOR AGREE

    const handleCheckBox = (e) => {
        const checked = e.target.checked;
        if (checked) {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }
    }



    // PRICING RULES

    // PRICING RULE 1 (PROMOTIONAL DISCOUNTED UNTILL 2022-06-01)
    const promo_level1 = 15;
    const promo_level2 = 25;
    const promo_level3 = 35;
    const promo_level4 = 45;
    const promo_level5 = 55;
    const promo_level6 = 65;
    const promo_ISD = 90;
    const promo_OSD = 140;

    // PRICING RULE 2 (REGULAR)
    const regular_level1 = 20;
    const regular_level2 = 30;
    const regular_level3 = 40;
    const regular_level4 = 50;
    const regular_level5 = 60;
    const regular_level6 = 70;
    const regular_ISD = 100;
    const regular_OSD = 150;


    // HANDLING CASH COLLECTION
    const handleCashCollection = (e) => {
        const input = e.target.value;
        setCashCollection(input);
    }

    // HANDLING DELIVERY CHARGE
    const handleDeliveryCharge = (e) => {
        const input = e.target.value;
        const date = new Date();
        const expireDate = new Date('2022-06-01');


        // FOR RULES 2 (REGULAR)
        if (input === "Up to 1kg") {
            setDeliveryCharge(regular_level1);
        }
        if (input === "Up to 3kg") {
            setDeliveryCharge(regular_level2);
        }
        if (input === "Up to 5kg") {
            setDeliveryCharge(regular_level3);
        }
        if (input === "Up to 10kg") {
            setDeliveryCharge(regular_level4);
        }
        if (input === "Up to 20kg") {
            setDeliveryCharge(regular_level5);
        }
        if (input === "Up to 50kg") {
            setDeliveryCharge(regular_level6);
        };

        // FOR RULES 1 (PROMOTIONAL)
        if (input === "Up to 1kg" && format(date, 'MM-dd-yyyy') <= format(expireDate, 'MM-dd-yyyy')) {
            setDeliveryCharge(promo_level1);
        }
        if (input === "Up to 3kg" && format(date, 'MM-dd-yyyy') <= format(expireDate, 'MM-dd-yyyy')) {
            setDeliveryCharge(promo_level2);
        }
        if (input === "Up to 5kg" && format(date, 'MM-dd-yyyy') <= format(expireDate, 'MM-dd-yyyy')) {
            setDeliveryCharge(promo_level3);
        }
        if (input === "Up to 10kg" && format(date, 'MM-dd-yyyy') <= format(expireDate, 'MM-dd-yyyy')) {
            setDeliveryCharge(promo_level4);
        }
        if (input === "Up to 20kg" && format(date, 'MM-dd-yyyy') <= format(expireDate, 'MM-dd-yyyy')) {
            setDeliveryCharge(promo_level5);
        }
        if (input === "Up to 50kg" && format(date, 'MM-dd-yyyy') <= format(expireDate, 'MM-dd-yyyy')) {
            setDeliveryCharge(promo_level6);
        };



    }

    // HANDLING COD CHARGE
    const handleCodCharge = (e) => {
        const date = new Date();
        const expireDate = new Date('2022-06-01');
        const input = e.target.value;

        // FOR RULES 2 (REGULAR)

        if (input === "Inside Dhaka city") {
            setCodCharge(regular_ISD);
        }
        if (input === "Outside Dhaka city") {
            setCodCharge(regular_OSD);
        }

        // FOR RULES 1 (PROMOTIONAL)

        if (input === "Inside Dhaka city" && format(date, 'MM-dd-yyyy') <= format(expireDate, 'MM-dd-yyyy')) {
            setCodCharge(promo_ISD);
        }
        if (input === "Outside Dhaka city" && format(date, 'MM-dd-yyyy') <= format(expireDate, 'MM-dd-yyyy')) {
            setCodCharge(promo_OSD);
        }
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        Swal.fire(
            'Parcel Order Placed!',
            'You placed an order!',
            'success'
        );
        e.target.reset();
        setCashCollection('');
        setDeliveryCharge('');
        setCodCharge('');
        setIsChecked(false);

    }


    return (
        <>
            <div className='w-5/6 mx-auto mt-20'>
                <div className='flex flex-col lg:flex-row '>
                    <div className='w-5/6 lg:w-[60%] mx-auto'>
                        <h2 className='text-3xl text-rose-500 font-bold pb-5'><i className="fas fa-box-open text-2xl"></i> Create a new parcel</h2>

                        <form onSubmit={(e) => handleSubmitForm(e)} className='outline-none'>
                            <h3 className='text-xl pb-2 font-semibold'>Customer informations:</h3>

                            <div className='flex flex-col'>
                                <div className='m-2'>
                                    <label>Name: <span className='text-rose-500 text-xl'>*</span></label> <br />
                                    <input required className='p-2 w-[250px] lg:w-[500px] outline-none bg-slate-100 rounded-md' type="text" />
                                </div>
                                <div className='m-2'>
                                    <label>Phone: <span className='text-rose-500 text-xl'>*</span></label> <br />
                                    <input required className='p-2 w-[250px] lg:w-[500px] outline-none bg-slate-100 rounded-md' type="tel" />
                                </div>
                                <div className='m-2'>
                                    <label>Address: <span className='text-rose-500 text-xl'>*</span></label> <br />
                                    <textarea required className='p-2 w-[250px] lg:w-[500px] outline-none bg-slate-100 rounded-md' type="address" />
                                </div>
                            </div>

                            <h3 className='text-xl py-3 mt-7 lg:mt-3 font-semibold'>Delivery informations:</h3>

                            <div className='flex flex-col'>
                                <div className='m-2'>
                                    <label>Parcel weight: <span className='text-rose-500 text-xl'>*</span></label> <br />
                                    <select onChange={(e) => handleDeliveryCharge(e)} required className='p-2 w-[250px] lg:w-[500px] outline-none bg-slate-100 rounded-md'>
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
                                    <select onChange={(e) => handleCodCharge(e)} required className='p-2 w-[250px] lg:w-[500px] outline-none bg-slate-100 rounded-md'>
                                        <option disabled selected>Select a route</option>
                                        <option>Inside Dhaka city</option>
                                        <option>Outside Dhaka city</option>
                                    </select>
                                </div>
                                <div className='m-2'>
                                    <label>Cash collection amount: <span className='text-rose-500 text-xl'>*</span></label> <br />
                                    <input onChange={(e) => handleCashCollection(e)} required className='p-2 w-[250px] lg:w-[500px] outline-none bg-slate-100 rounded-md' type="number" />
                                </div>
                                <div className='m-2'>
                                    <label>Product cost: <span className='text-rose-500 text-xl'>*</span></label> <br />
                                    <input required className='p-2 w-[250px] lg:w-[500px] outline-none bg-slate-100 rounded-md' type="number" />
                                </div>
                                <div className='m-2'>
                                    <label>Product details: <span className='text-rose-500 text-xl'>*</span></label> <br />
                                    <textarea required className='p-2 w-[250px] lg:w-[500px] outline-none bg-slate-100 rounded-md' type="address" />
                                </div>
                                <div className='m-2'>
                                    <label>Pickup location: <span className='text-rose-500 text-xl'>*</span></label> <br />
                                    <textarea required className='p-2 w-[250px] lg:w-[500px] outline-none bg-slate-100 rounded-md' type="address" />
                                </div>
                            </div>

                            <div>
                                <input className=' h-[20px] w-[20px] rounded-md relative top-1 left-2' type="checkbox" onChange={(e) => handleCheckBox(e)} name="" id="" /> <span className='px-5'>I agree to the <span className='font-semibold text-rose-500 cursor-pointer'>Terms & conditions</span> </span>
                                <div className='flex pt-10 pb-20'>
                                    <button className='bg-slate-600 px-10 py-3 rounded text-white hover:bg-gray-700 transition duration-300 mx-0 lg:mx-14'>Cancel</button>
                                    {
                                        isChecked ? <input type='submit' defaultValue="Submit" className=' cursor-pointer px-10 py-3 rounded text-white bg-rose-500 transition duration-300 ml-2 lg:mx-14' />
                                            :
                                            <input type='submit' defaultValue="Submit" disabled className=' px-10 py-3 rounded text-slate-400 bg-slate-200 transition duration-300 ml-2 lg:mx-14' />
                                    }
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='w-5/6 lg:w-[30%] sticky top-20 bg-slate-100 text-slate-700 pt-5 pb-14 mb-10 px-10 mx-5 lg:mx-10 h-[300px] rounded-lg'>
                        <h2 className=' text-xl text-slate-700 font-bold pb-5'>Billing informations</h2>
                        <h2 className=' text-lg pb-1'>Cash collection: <span className='font-bold text-rose-500'>{cashCollection}</span></h2>
                        <h2 className=' text-lg pb-1'>Delivery charge: <span className='font-bold text-rose-500'>{deliveryCharge}</span></h2>
                        <h2 className=' text-lg pb-1'>COD charge: <span className='font-bold text-rose-500'>{codCharge}</span></h2>

                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateParcel;