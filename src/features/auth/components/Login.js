import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkUserAsync, selectError, selectLoggedInUser } from '../authSlice';
import Logo from '../../../assets/Logo.jpg';
import { Link, Navigate } from 'react-router-dom';
import { Footer } from '../../navbar/Footer';
import { useForm, SubmitHandler } from "react-hook-form";

export default function Login() {
    const dispatch = useDispatch();
    const error = useSelector(selectError);
    const user = useSelector(selectLoggedInUser);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <>
            {user && <Navigate to="/checkout" replace={true}></Navigate>}
            <div className='text-black font-bold text-2xl mt-5 mx-3'>LOGIN
                <div className="flex bg-gray-300 rounded-2xl mt-5 min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div>
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <img
                                className="mx-auto h-20 w-auto"
                                src={Logo}
                                alt="Your Company"
                            />
                            <h2 className="mt-5 text-center text-lg font-bold leading-9 tracking-tight text-gray-800">
                                READY TO CONNECT ?
                            </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form noValidate onSubmit={handleSubmit((data) => {
                                dispatch(//createUserAsync({ email: data.email, password: data.password })
                                );
                                console.log(data);
                            })} className="space-y-6" action="#" method="POST">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Email
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            {...register("email", { required: "email is required", pattern: { value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi, message: "email not valid" } })}
                                            type="email"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    {errors.email && <p className='text-red-600 font-semibold text-base'>{errors.email.message}</p>}
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                            Password
                                        </label>
                                        <div className="text-sm">
                                            <a href="#" className="font-lg text-red-500 hover:text-red-700">
                                                Forgot password?
                                            </a>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            id="password"
                                            {...register("password", { required: "password is incorrect" })}
                                            type="password"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        {errors.password && <p className='text-red-600 font-semibold text-base'>{errors.password.message}</p>}
                                    </div>
                                    {error && <p className='text-red-600 font-semibold text-base'>{error.message}</p>}
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-full bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        CONTINUE
                                    </button>
                                </div>
                            </form>

                            <p className="mt-10 text-center text-sm text-gray-500">
                                Not a member?{' '}
                                <Link to='/signup' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                    Create an Account
                                </Link>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}
