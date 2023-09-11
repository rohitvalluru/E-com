import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectLoggedInUser, createUserAsync } from '../authSlice';
import Logo from '../../../assets/Logo.jpg';
import { Footer } from '../../navbar/Footer';
import { Link, Navigate } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form"

export default function Signin() {
    const dispatch = useDispatch();
    const user = useSelector(selectLoggedInUser);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    return (
        <>
            {user && <Navigate to="/checkout" replace={true}></Navigate>}
            <div className='mt-5 mx-3 font-bold text-xl'>REGISTER TO A NEW ACCOUNT
                <div className="flex min-h-full flex-1 flex-col bg-gray-300 rounded-2xl mt-5  justify-center px-6 py-12 lg:px-8">
                    <div>
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <img
                                className="mx-auto h-20 w-auto"
                                src={Logo}
                                alt="Your Company"
                            />
                        </div>

                        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form noValidate className="space-y-6" onSubmit={handleSubmit((data) => {
                                dispatch(createUserAsync({ email: data.email, password: data.password }))
                                console.log(data);
                            })}>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            {...register("email", { required: "email is required", pattern: { value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi, message: "email not valid" } })}
                                            type="email"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        {errors.email && <p className='text-red-600 font-semibold text-base'>{errors.email.message}</p>}
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                            Password
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            id="password"
                                            {...register("password", { required: "password is required" })}
                                            type="password"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        {errors.password && <p className='text-red-600 font-semibold text-base'>{errors.password.message}</p>}
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                            Confirm Password
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            id="confirm-password"
                                            {...register("confirm-password", {
                                                required: "confirm password is required",
                                                validate: (value, formValues) => value === formValues.password || "password didnt match"
                                            })}
                                            type="password"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        {errors['confirm-password'] && <p className='text-red-600 font-semibold text-base'>{errors['confirm-password'].message}</p>}
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-full bg-black px-3 py-1.5 text-sm font-normal leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        CREATE ACCOUNT
                                    </button>
                                </div>
                            </form>

                            <p className="mt-10 text-center text-sm text-gray-500">
                                Already a Member?{' '}
                                <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                    Log In
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div >
            <Footer></Footer>
        </>
    );
}
