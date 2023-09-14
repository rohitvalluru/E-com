import React, { useState } from 'react';
import Navbar from '../features/navbar/Navbar';
import prettysavage2 from "../assets/prettysavage2.mp4";
import { SpeakerWaveIcon } from '@heroicons/react/24/outline';
import jennie from '../assets/jennie.jpg';
import mirandakerr from '../assets/mirandakerr.jpg';
import jisoo from '../assets/jisoo.jpg';
import hande from '../assets/hande.jpg';
import young from '../assets/young.jpg';
import somi from '../assets/somi.jpg';
import barbara from '../assets/barbara.jpg';
import { Footer } from '../features/navbar/Footer';
import { Link } from 'react-router-dom';

const Celebs = [
    {
        id: 1,
        imageSrc: `${hande}`,
        name: "HANDE ERCEL",
        brand: "NOCTURNE",
        params: "nocturne"
    },
    {
        id: 2,
        imageSrc: `${jennie}`,
        name: "JENNIE",
        brand: "CHANEL",
        params: "chanel"
    },
    {
        id: 3,
        imageSrc: `${young}`,
        name: "WONYOUNG",
        brand: "MIU MIU",
        params: "miumiu"
    },
    {
        id: 4,
        imageSrc: `${mirandakerr}`,
        name: "MIRANDA KERR",
        brand: "LOUIS VUITTON",
        params: "louisvuitton"
    },
    {
        id: 5,
        imageSrc: `${barbara}`,
        name: "BARBARA PALVIN",
        brand: "JIMMY CHOO",
        params: "jimmychoo"
    },
    {
        id: 6,
        imageSrc: `${jisoo}`,
        name: "JISOO",
        brand: "DIOR",
        params: "dior"
    },
    {
        id: 7,
        imageSrc: `${somi}`,
        name: "SOMI",
        brand: "PRADA",
        params: "prada"
    },
]

export const Celebrity = () => {
    const [muted, setMuted] = useState(true);
    const toggleMute = () => {
        setMuted(!muted);
    };

    return (
        <div>
            <div className='flex justify-center'>
                <Navbar></Navbar>
            </div>
            <div className='bg-gray-300 rounded-xl mt-24 relative'>
                <video
                    className='w-full h-full object-fill'
                    autoPlay
                    loop
                    muted={muted}
                >
                    <source src={prettysavage2} type='video/mp4' />
                </video>
                <div className="absolute bottom-2 left-2">
                    <button
                        className="py-2 px-1 rounded-full"
                        onClick={toggleMute}
                    >
                        <SpeakerWaveIcon className="h-5 w-5 text-black font-bold" aria-hidden="true" />
                    </button>
                </div>
            </div>
            <div>
                <p className='text-xl text-center font-para mt-5'>" Been around the world, pearls on ya, girl, VVS' we invested uh <br></br>
                    Need a lesson see the necklace, see the dresses<br></br>
                    We don't buy it we request it <br></br>
                </p>
                <p className='text-center text-3xl font-para font-bold relative mt-2'>
                    <span className='relative inline-block'>
                        A Rockstar, a Popstar but Rowdier "
                        <span className='absolute -bottom-1 left-0 w-full h-1 bg-yellow-400'></span>
                    </span>
                </p>
                <div className="border-t-4 border-gray-400 h-2 mx-3 my-10"></div>
            </div>
            <div className='-my-5'>
                <h1 className='font-semibold font-para text-center underline'>DISCOVER</h1>
                <div class="relative flex overflow-x-hidden bg-black h-16 mt-5">
                    <div class="animate-marquee whitespace-nowrap flex items-center">
                        <span class="mx-5 text-2xl text-white font-medium font-inter tracking-wider">LOUIS VUITTON</span>
                        <span class="mx-5 text-2xl text-yellow-500 font-extrabold">NOCTURNE</span>
                        <span class="mx-5 text-2xl text-white font-prad font-semibold tracking-widest">PRADA</span>
                        <span class="mx-5 text-3xl text-gray-400 font-dir font-bold tracking-wider">Dior</span>
                        <span class="mx-5 text-2xl text-white font-pop tracking-wider">JIMMY CHOO</span>
                        <span class="mx-5 text-2xl text-red-600 font-mi font-bold tracking-wider">MIU MIU</span>
                        <span class="mx-5 text-2xl text-white font-semibold font-pop tracking-wider">CHANEL</span>
                    </div>
                </div>
                <h2 className='text-center text-5xl font-extrabold tracking-widest font-sep my-10'>NEW ESSENTIALS</h2>
            </div>
            <div className='flex justify-center items-center mx-3'>
                <div className='w-full'>
                    {Celebs.map((celeb) => (
                        <div key={celeb.id} className='relative mt-5'>
                            <img src={celeb.imageSrc} alt={`Celebrity ${celeb.id}`} />
                            <div className="mt-3 text-center z-10"> {/* Increased z-index */}
                                <p className="text-black text-4xl font-bold">{celeb.brand}</p>
                            </div>
                            <div className='absolute bottom-36 tracking-widest text-gray-100 text-center text-3xl font-bold font-para transform -translate-x-1/2 left-1/2'>
                                {celeb.name}
                            </div>
                            <Link to={`/productlist/${celeb.params.toLowerCase()}`}>
                                <button className='mt-2 h-12 w-64 px-6 text-center font-bold flex transform -translate-x-1/2 left-1/2 absolute bottom-20 items-center bg-white'>
                                    EXPLORE THE COLLECTION
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div >
    );
};
