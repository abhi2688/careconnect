import React from 'react'
import logo from "../assets/Logo.png"
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
    return (

        <footer className="bg-white dark:bg-gray-900 dark:text-white">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-4 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0 flex self-start items-center">

                        <Image src={logo} alt="hospital logo" style={{ width: '6em', height: '5em' }} />


                        <Link href="/" classNameName="">
                            Shree Krushna
                            Seva Sadan
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                            <ul className="text-gray-600 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="contact-us" className="hover:underline">Contact Us</Link>
                                </li>
                                <li>
                                    <Link href="book-appointment" className="hover:underline">Book Appointment </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                            <ul className="text-gray-600 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="https://github.com/themesberg/flowbite" className="hover:underline ">Instagram</Link>
                                </li>
                                <li>
                                    <Link href="https://discord.gg/4eeurUVvTy" className="hover:underline">FaceBook</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                           
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-center text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 All Rights Reserved.
                    </span>
                
                </div>
            </div>
        </footer>

    )
}

export default Footer