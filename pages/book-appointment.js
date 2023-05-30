import Layout from "@/components/Wrappers/Layout";
import { useState, useRef } from "react";
import headerImg from "../assets/header.jpg"
import Image from "next/image";
import emailjs from "@emailjs/browser"
export default function BookAppointmentService() {
    const form = useRef()
    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     console.log(message, date, phone, name, address, email);

    //     const response = await fetch('/api/submit', {
    //         method: 'POST',
    //         body: JSON.stringify({}),
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     });

    //     if (response.ok) {
    //         // handle successful submission
    //     } else {
    //         // handle error
    //     }
    // };
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_z20s8ag', 'template_36az7aw', form.current, 'y7LWPanp9an_vuVEt')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            e.target.reset()
    };
    return (<Layout>


        <h1 className="text-2xl mt-2 font-bold text-center text-gray-700">
            Book An appointment
        </h1>
        <div id="appointment" className="flex justify-center my-1">
            <div  className="w-full lg:w-1/2 p-2">

                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="max-w-full rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-purple-800"
                >

                    <label
                        htmlFor="fullname"
                        className="text-amber-300 font-light mt-4 "

                    >
                        Full name<span className="text-red-500 dark:text-gray-50">*</span>
                    </label>
                    <input
                        type="text" name="fullname"
                        className="text-lg bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 text-white font-light"
                        required
                    />


                    <label
                        htmlFor="text"
                        className="text-amber-300 font-light mt-4 "

                    >
                        E-mail <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="text-lg bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 text-white font-light"
                    />
                    <label
                        htmlFor="text"
                        className="text-amber-300 font-light mt-4 "

                    >
                        Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        required
                        className="text-lg bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 text-white font-light"
                    />


                    <label
                        htmlFor="address"
                        className="text-amber-300 font-light mt-4 "

                    >
                        Address<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="textarea"
                        name="address"
                        required
                        className="text-lg bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 text-white font-light"
                    />
                    <label
                        htmlFor="address"
                        className="text-amber-300 font-light mt-4 "

                    >
                        Date<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="datetime-local"
                        name="date"
                        required
                        className="text-lg bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 text-white font-light"
                    />

                    <label
                        htmlFor="message"
                        className="text-amber-300 font-light mt-4 "
                    >
                        Message<span className="text-red-500">*</span>
                    </label>
                    <textarea
                        name="message"
                        required
                        className="text-lg bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500  font-light text-white"
                    ></textarea>

                    <div className="flex flex-row items-center justify-start">
                        <button
                            type="submit"
                            className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
                        >
                            Submit
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="text-cyan-500 ml-2"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </div></Layout>
    )


}