'use client'
import React, { useState } from 'react'
import logo from '@/public/icons/Symbol.svg'
import IonMenu from '@/public/icons/hamburger-menu.svg'
import Image from 'next/image'
import Link from 'next/link'
import Banner from './Banner'

type Props = {}

const Navbar = (props: Props) => {
    // const [menu, setMenu] = useState(false)
    const navList = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'About Us',
            path: '/about',
        },
        {
            name: 'Properties',
            path: '/properties',
        },
        {
            name: 'Services',
            path: '/services',
        },
    ]
    return (
        <>
            <Banner />
            <nav className="bg-white dark:bg-gray-10 w-full z-20 top-0 start-0 border-b border-gray-15 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-shrink-0 items-center justify-between mx-auto p-4">
                    <Link
                        href="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <Image
                            src={logo}
                            className="h-8 w-6"
                            width={32}
                            height={32}
                            alt="site logo"
                        />
                        <span className="self-center text-sm md:text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Brand Name
                        </span>
                    </Link>
                    <div className="flex justify-end w-full md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse md:w-auto">
                        <button
                            type="button"
                            className="text-white shrink-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-gray-08 border border-gray-15 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Contact Us
                        </button>
                        <button
                            // onClick={() => {
                            //     setMenu(!menu)
                            // }}
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        >
                            <Image
                                src={IonMenu}
                                alt="menu"
                                className="size-5 min-w-4"
                                width={12}
                                height={12}
                            />
                        </button>
                    </div>
                    <div
                        className={`flex items-center justify-between w-auto md:order-1`}
                    >
                        <ul className="absolute left-0 top-0 flex flex-col md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:static md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {navList.map((nav) => (
                                <li key={nav.name}>
                                    <Link
                                        href={nav.path}
                                        // border border-gray-15 px-3.5
                                        className="block shrink-0 py-1 text-sm text-white bg-blue-700 rounded md:bg-gray-08 md:text-blue-700 md:dark:text-blue-500"
                                    >
                                        {nav.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
