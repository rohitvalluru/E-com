import React, { useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { BsHandbagFill } from "react-icons/bs";
import { AdjustmentsHorizontalIcon, MinusIcon, PlusIcon, } from '@heroicons/react/20/solid'
import { ProductDetail } from './ProductDetail';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { items } from '../navbar/items';
import { Footer } from '../navbar/Footer';
import Navbar from '../navbar/Navbar';
import chanelstore from '../../assets/chanelstore.jpg';
import nocturnestore from '../../assets/nocturnestore.jpg';
import diorstore from '../../assets/diorstore.jpg';
import louisvuittonstore from '../../assets/louisvuittonstore.jpg';
import pradastore from '../../assets/pradastore.jpg';
import miumiustore from '../../assets/miumiustore.jpg';
import jimmychoostore from '../../assets/jimmychoostore.jpg';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductList() {
  const { brandname } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const brandStoreImages = {
    chanel: chanelstore,
    nocturne: nocturnestore,
    dior: diorstore,
    louisvuitton: louisvuittonstore,
    prada: pradastore,
    miumiu: miumiustore,
    jimmychoo: jimmychoostore,
  }

  const backgroundStyle = {
    backgroundImage: `url(${brandStoreImages[brandname]})`,
    backgroundSize: 'cover',
  };

  return (
    <div className="bg-fixed bg-center" style={backgroundStyle}>
      <div className='flex justify-center'>
        <Navbar></Navbar>
      </div>
      <div>
        {/* Product grid */}
        <div className="lg:col-span-3">
          <div className="bg-transparent">
            <div className="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <div>
                  <div>
                    {items
                      .filter(item => item.brand === brandname)
                      .map(item => (
                        <div key={item.id}>
                          <div className='flex justify-center items-center' >
                            <img src={item.brandimg} alt={item.brand} className='h-44 mt-20' />
                          </div>
                          <div>
                            {item.details.map((detail, index) => (
                              <div className='relative'>
                                <img key={index} src={detail.img} className="rounded-3xl mt-16" alt={item.name} />
                                <Link to={`/productdetail/${item.id}/${index}`} key={item.id}>
                                  <button>
                                    <BsHandbagFill className='h-6 w-6 bg-transparent rounded-full text-black absolute top-5 right-5'
                                    />
                                  </button>
                                </Link>
                                <h1 className='absolute bottom-24 font-extrabold left-4 text-white tracking-wider font-para text-xl'>NEW</h1>
                                <h1 className='absolute bottom-24 font-extrabold right-4 text-black font-prad tracking-wider text-2xl'>{detail.price}</h1>
                                <h1 className='absolute bottom-10 font-extrabold left-4 text-black font-pop text-lg'>{detail.product.toUpperCase()}</h1>
                              </div>
                            ))}
                          </div>
                          <p className='text-center text-white font-extrabold tracking-wider font-para mt-20 text-xl'>{item.branddesc}</p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-20'>
        <Footer></Footer>
      </div>
    </div>
  );
}
