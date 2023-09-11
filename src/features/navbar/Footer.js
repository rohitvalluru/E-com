import React from 'react';
import Logo from '../../assets/Logo.jpg';
import { BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { SlSocialTwitter } from "react-icons/sl";
import { FaSnapchat } from "react-icons/fa";
import { Link } from 'react-router-dom';

const foot = [
    {
        id: 1,
        name: "FAQ"
    },
    {
        id: 2,
        name: "TRACK YOUR ORDER"
    },
    {
        id: 3,
        name: "NEWSLETTER"
    },

    {
        id: 4,
        name: "CONTACT US"
    },
    {
        id: 5,
        name: "BOUTIQUES"
    },
    {
        id: 6,
        name: "PRIVACY POLICY"
    },

];

const social = [{
    id: 1,
    icon: FaSnapchat,
    way: "https://www.snapchat.com/add/ir0_hit?share_id=Qo7WgOKUO4&locale=en-IN"
},
{
    id: 2,
    icon: SlSocialTwitter,
    way: ""
},
{
    id: 3,
    icon: BsInstagram,
    way: "https://instagram.com/ro_hit.v?utm_source=qr&igshid=MzNINGNkZWQ4Mg%3D%3D"
},
{
    id: 4,
    icon: BsLinkedin,
    way: "https://www.linkedin.com/in/rohit-valluru-12071a192"
},
{
    id: 5,
    icon: BsWhatsapp,
    way: ""
},
]


export const Footer = () => {
    const filtered2Options = foot.filter((options) => (options.id > 3));
    const filtered1Options = foot.filter((options) => (options.id >= 1 && options.id <= 3));
    return (
        <div className='bg-black mt-5'>
            <div className='flex justify-center items-center text-white gap-12 text-3xl'>
                {social.map((soc) => {
                    const IconComponent = soc.icon;
                    return (
                        <Link to={soc.way} key={soc.id}>
                            <IconComponent className='mt-14' />
                        </Link>
                    );
                })}
            </div>
            <div className='flex justify-center items-center'>
                <img src={Logo} className='h-20 w-56 mt-14' alt="Logo" />
            </div>
            <Link to="/">
                <h1 className='text-gray-300 text-center mt-14 font-medium font-mono text-lg tracking tracking-widest'>HOME</h1>
            </Link>
            <div className='border-t border-gray-500 mx-5 mt-5'></div>
            <div className='grid grid-cols-2'>
                <div className='flex flex-col'>
                    {filtered1Options.map((options) => (
                        <h1 className='text-white mx-8 mt-5 font-medium font-pop' key={options.id}>
                            {options.name}
                        </h1>
                    ))}
                </div>
                <div className='flex flex-col'>
                    {filtered2Options.map((options) => (
                        <h1 className='text-white mx-16 mt-5 font-medium font-pop' key={options.id}>
                            {options.name}
                        </h1>
                    ))}
                </div>
            </div>
            <div className='border-t border-gray-500 mx-5 mt-5'></div>
            <h1 className='text-white mt-10 mx-5 font-pop font-bold tracking-widest'>SHOPPERS STOP CULTURE</h1>
            <h3 className='mt-3 text-white mx-5 font-inter'> Shopper's Stop exclusive collection of clothing and accessories is the passport to a world
                of exquisite elegance and glamor, straight from the most prestigious catwalks in Paris. This selection of luxury garments is the product
                of incredibly talented creative work based upon persistent and meticulous attention to detail.This new collection of luxury clothing and accessories brings
                with it a wide range of style options. </h3>
            <h3 className='mt-3 text-white mx-5 font-inter font-medium'> The spirit of Shopper's Stop is present in every detail: the iconic labyrinth prints.the gold
                details featuring the house's logo and the inmitable cuts and lines. As a result, every element of this collection of unique garments exudes rebelliousness, ROCK 'n' ROLL and sophistication. </h3>
            <div className='border-t border-gray-500 mx-5 mt-5'></div>
            <h2 className='text-white flex justify-center mt-5 font-bold'>LANGUAGE : <span className='underline mx-1'>ENGLISH</span></h2>
            <div className='border-t border-gray-500 mx-5 mt-5'></div>
        </div>
    );
};
