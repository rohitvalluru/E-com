import React, { useState } from 'react';
import { items } from '../navbar/items';
import Navbar from '../navbar/Navbar';
import { Footer } from '../navbar/Footer';
import { BsBagHeartFill, BsFillCreditCard2BackFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiPhoneFill } from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const ProductDetail = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isExpand, setIsExpand] = useState(false);
    const [isContactExpanded, setIsContactExpanded] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const { indx } = useParams();

    const toggleExpansion1 = () => {
        setIsExpanded(!isExpanded);
    };

    const toggleExpansion2 = () => {
        setIsExpand(!isExpand);
    };

    const toggleExpansion3 = () => {
        setIsContactExpanded(!isContactExpanded);
    };

    return (
        <>
            <Navbar></Navbar>
            <div className="lg:col-span-3 bg-black">
                <div className="bg-transparent">
                    <div className="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            <IoIosArrowRoundBack className='text-white mt-20 text-5xl' onClick={() => navigate(-1)}></IoIosArrowRoundBack>
                            <h1 className='font-extrabold text-white text-xl font-inter'>{items[id - 1].details[indx].product.toUpperCase()}</h1>
                            <h2 className='font-bold text-white text-xl font-inter'>US {items[id - 1].details[indx].price}</h2>
                            <img src={items[id - 1].details[indx].img} className='mt- rounded-3xl' />
                            <div className='flex justify-center items-center'>
                                <button className='bg-white rounded-full font-bold h-14 w-1/2 '>ADD TO CART</button>
                            </div>
                            <div
                                className={`overflow-hidden transition-height duration-500 ${isExpanded ? 'h-auto' : 'h-14'} border border-gray-300 rounded-3xl p-4 bg-white`}
                            >
                                <button
                                    className="text- cursor-pointer"
                                    onClick={toggleExpansion1}
                                >
                                    <h1 className='font-bold relative'>
                                        DESCRIPTION
                                        {isExpanded ? <h1 className='absolute px-96 font-bold -mt-10 text-5xl'>-</h1> : <h1 className='absolute px-96 font-bold -mt-8 text-3xl'>+</h1>}
                                    </h1>
                                </button>
                                {isExpanded && (
                                    <p className='mt-5 font-semibold text-gray-500 font-dir tracking-wide '>
                                        {items[id - 1].details[indx].productdesc}
                                    </p>
                                )}
                            </div>
                            <div
                                className={`overflow-hidden transition-height duration-500 ${isExpand ? 'h-auto' : 'h-14'} border border-gray-300 rounded-3xl p-4 bg-white`}
                            >
                                <button
                                    className="text- cursor-pointer"
                                    onClick={toggleExpansion2}
                                >
                                    <h1 className='font-bold relative'>
                                        DELIVERY AND RETURNS
                                        {isExpand ? <h1 className='absolute px-96 font-bold -mt-10 text-5xl'>-</h1> : <h1 className='absolute px-96 font-bold -mt-8 text-3xl'>+</h1>}
                                    </h1>
                                </button>
                                {isExpand && (
                                    <div class="flex flex-col">
                                        <h1 class="font-bold text-gray-800 text-sm mt-5 ml-12">DELIVERY</h1>
                                        <div class="flex items-center mt-2">
                                            <span><BsBagHeartFill class="text-3xl" /></span>
                                            <p class="font-semibold text-gray-600 ml-3 font-dir tracking-wide">
                                                - Express delivery made within 2-4 working days (30$)
                                            </p>
                                        </div>
                                        <p class="font-semibold text-gray-600 mx-11 font-dir tracking-wide">
                                            - Potential delays to be communicated due to customs approved treatment
                                        </p>
                                        <div class="border-t-2 text-gray-900 mt-3"></div>
                                        <h1 class="font-bold text-gray-800 text-sm mt-3 ml-12">RETURNS</h1>
                                        <div class="flex items-center">
                                            <span><TbTruckDelivery class="text-3xl" /></span>
                                            <p class="font-semibold text-gray-600 font-dir tracking-wide mx-5">
                                                We make returns easy for you. For more information, see our return policy
                                            </p>
                                        </div>
                                        <div class="border-t-2 text-gray-900 mt-3"></div>
                                        <h1 class="font-bold text-gray-800 text-sm mt-3 ml-12">PAYMENT</h1>
                                        <div class="flex items-center">
                                            <span><BsFillCreditCard2BackFill class="text-2xl" /></span>
                                            <p class="font-semibold text-gray-600 font-dir tracking-wide mx-6">Credit card, debit card</p>
                                        </div>
                                        <div class="border-t-2 text-gray-900 mt-3"></div>
                                        <h1 class="font-bold text-gray-800 text-sm mt-3 ml-12">FAQ</h1>
                                        <div class="flex items-center">
                                            <span><FaSearch class="text-2xl" /></span>
                                            <p class="font-semibold text-gray-600 font-dir tracking-wide mx-6">Looking for information? FAQ</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div
                                className={`overflow-hidden transition-height duration-500 ${isContactExpanded ? 'h-auto' : 'h-14'} border border-gray-300 rounded-3xl p-4 bg-white`}
                            >
                                <button
                                    className="text- cursor-pointer"
                                    onClick={toggleExpansion3}
                                >
                                    <h1 className='font-bold relative'>
                                        CONTACT
                                        {isContactExpanded ? <h1 className='absolute px-96 font-bold -mt-10 text-5xl'>-</h1> : <h1 className='absolute px-96 font-bold -mt-8 text-3xl'>+</h1>}
                                    </h1>
                                </button>
                                {isContactExpanded && (
                                    <div class="flex flex-col">
                                        <div class="flex items-center mt-5">
                                            <span><HiOutlineMail class="text-3xl" /></span>
                                            <p class="font-semibold text-gray-600 font-dir tracking-wide ml-4">
                                                Send me an email : vallururohit23@gmail.com, and i will get back to you as soon as possible.
                                            </p>
                                        </div>
                                        <div class="border-t-2 text-gray-900 mt-3"></div>
                                        <div class="flex items-center">
                                            <span><RiPhoneFill class="text-3xl" /></span>
                                            <p class="font-semibold text-gray-600 font-dir tracking-wide mx-4 mt-3">
                                                You can also call me on the following number : +919100368778
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='-mt-5'>
                <Footer></Footer>
            </div>
        </>
    )
}
