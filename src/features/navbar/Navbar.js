import React from 'react';
import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, ShoppingBagIcon, XMarkIcon, UserIcon } from '@heroicons/react/24/outline'
import Cart from '../cart/Cart';
import Logo from '../../assets/Logo.jpg';
import { Link } from 'react-router-dom';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    const [isCartOpen, setCartOpen] = useState(false);
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    const handleCartClick = () => {
        setCartOpen(!isCartOpen);
    };

    const handleCartClose = () => {
        setCartOpen(false);
    };

    const navigation = [
        { name: 'Home', way: "/" },
        { name: 'Nocturne', way: "/productlist/nocturne" },
        { name: 'Chanel', way: "/productlist/chanel" },
        { name: 'Dior', way: "/productlist/dior" },
        { name: 'Prada', way: "/productlist/prada" },
        { name: 'Miu Miu', way: "/productlist/miumiu" },
        { name: 'Jimmy Choo', way: "/productlist/jimmychoo" },
        { name: 'Louis Vuitton', way: "/productlist/louisvuitton" },
    ];
    return (
        <>
            {!isCartOpen && (
                <Disclosure as="nav" className="bg-black rounded-full mt-2 fixed top-0 w-11/12 m-4 z-50">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                                <div className="relative flex h-16 items-center justify-between ">
                                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                        {/* Mobile menu button*/}
                                        <div className="text-center">
                                            <button
                                                className="text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 "
                                                type="button"
                                                onClick={toggleDrawer}
                                            >
                                                <Bars3Icon className="h-12 w-6" aria-hidden="true" />
                                            </button>
                                            <div
                                                id="drawer-navigation"
                                                className={`fixed top-0 left-0 z-40 h-full w-full p-4 overflow-y-auto transition-transform ${isDrawerOpen ? 'translate-x-0 transition-transform ease-in-out duration-1000' : '-translate-x-full'
                                                    } bg-black w-64`}
                                                tabIndex="-1"
                                                aria-labelledby="drawer-navigation-label"
                                            >
                                                <div className="flex justify-end mb-5">
                                                    <button
                                                        className="text-gray-200 hover:text-gray-700 focus:outline-none"
                                                        onClick={toggleDrawer}
                                                    >
                                                        <span className="sr-only">Close</span>
                                                        <XMarkIcon className="h-10 w-10 mt-5" aria-hidden="true" />
                                                    </button>
                                                    <img src={Logo} className='justify-center items-center absolute h-14 w-auto mx-32 my-4' />
                                                </div>
                                                <div className='text-white mx-5 mt-20 tracking-widest font-medium font-pop text-3xl'>
                                                    <button onClick={toggleDrawer}>
                                                        {navigation.map((item) => (
                                                            <Link to={item.way}>
                                                                <div key={item.name} className='mt-8 tracking-widest'>{item.name}</div>
                                                            </Link>
                                                        ))}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                        <div className="flex flex-shrink-0 items-center">
                                            <Link to="/">
                                                <img
                                                    className="h-10 w-auto"
                                                    src={Logo}
                                                    alt="Your Company"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                        <button
                                            type="button"
                                            className="relative rounded-full bg-black p-1 text-gray-400 hover:text-white"
                                            onClick={handleCartClick}
                                        >
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">View notifications</span>
                                            <div className="relative inline-flex items-center">
                                                <ShoppingBagIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                                <span className="absolute bottom-3 left-0 inline-flex items-center rounded-full ml-4 px-1.5 py-0.5 text-xs font-medium bg-yellow-400 text-black ring-1 ring-inset ring-yellow-600/20">
                                                    3
                                                </span>
                                            </div>
                                        </button>
                                        {isCartOpen && <Cart onClose={handleCartClose} />}

                                        {/* Profile dropdown */}
                                        <Menu as="div" className="relative ml-2">
                                            <div>
                                                <Menu.Button className="relative flex rounded-full bg-black text-sm">
                                                    <span className="absolute -inset-1.5" />
                                                    <span className="sr-only">Open user menu</span>
                                                    <UserIcon className='h-6 w-6 text-white mb-1.5 mx-3' />
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            >
                                                                Your Profile
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            >
                                                                Settings
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to="/login"
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            >
                                                                Sign out
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="sm:hidden">
                                <div className="space-y-1 px-2 pb-3 pt-2">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'block rounded-md px-3 py-2 text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure >
            )}
            {isCartOpen && <Cart onClose={handleCartClose} />}
        </>
    )
}
export default Navbar