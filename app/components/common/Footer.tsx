import React from 'react'
import logo from '@/public/icons/Symbol.svg'
import Image from 'next/image'
import Link from 'next/link'
import IonSend from '@/public/icons/IonSend.svg'
import IonEmail from '@/public/icons/IonEmail.svg'
import IonFB from '@/public/icons/IonFb.svg'
import IonLinkedin from '@/public/icons/IonLinkedin.svg'
import IonX from '@/public/icons/IonX.svg'
import IonYT from '@/public/icons/IonYT.svg'

const list = {
    home: ['Hero Section', 'Features', 'Properties', 'Testimonials', "FAQ's"],
    about: ['Our Story', 'Our Works', 'How It Works', 'Our Team', 'Our Client'],
    properties: ['Portfolio', 'Categories'],
    services: [
        'Valution Mastery',
        'Strategic Marketing',
        'Negotiation Wizardry',
        'Closing Success',
        'Property Management',
    ],
    contact: ['Contact Form', 'Our Offices'],
}

const Footer = () => {
    return (
        <footer>
            <div className="grid lg:grid-cols-7 md:gap-4 md:py-10">
                <div className="px-5 py-16 lg:col-span-2">
                    <div className="flex item-center gap-3 mb-5">
                        <Image
                            src={logo}
                            width={32}
                            height={32}
                            alt="brand description"
                        />
                        <span className="self-center text-lg md:text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Brand Name
                        </span>
                    </div>
                    <div className="relative">
                        <Image
                            className="size-7 absolute top-2.5 left-2"
                            src={IonEmail}
                            width={32}
                            height={32}
                            alt="email icon"
                        />
                        <input
                            className="w-full text-sm font-light text-clr-white bg-[#000] border border-gray-15 h-12 px-10 rounded-lg focus-within:outline-none"
                            type="email"
                            name="email"
                            placeholder="Enter Your Email"
                        />
                        <Image
                            className="size-7 absolute top-2.5 right-2.5"
                            src={IonSend}
                            width={32}
                            height={32}
                            alt="send icon"
                        />
                    </div>
                </div>

                {/* grid-cols-2 auto-rows-max gap-y-8 md:grid-cols-5 */}
                <nav className="px-5 mb-12 lg:col-span-5">
                    <div className="grid grid-cols-2 lg:grid-cols-5 lg:grid-rows-1 lg:gap-4">
                        {Object.keys(list).map(
                            (category: string, index: number) => (
                                <>
                                    <ul
                                        key={index}
                                        aria-label={`index-${index}`}
                                        className={`mb-5 h-fit`}
                                    >
                                        <h5 className="text-gray-60 text-lg font-light capitalize mb-6">
                                            {category}
                                        </h5>
                                        {list[category].map((item: any) => (
                                            <li className="text-md font-light py-1">
                                                <Link href="#">{item}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )
                        )}
                    </div>
                </nav>
            </div>
            <div className="flex flex-col items-center md:flex-row md:justify-between py-6 px-5 bg-gray-10 xl:px-12 space-y-5">
                <ul className="flex items-center gap-3 md:order-last">
                    <li>
                        <Link href="#">
                            <Image
                                className="size-14 bg-gray-08 rounded-full p-4"
                                src={IonFB}
                                width={32}
                                height={32}
                                alt="connect with us on facebook"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <Image
                                className="size-14 bg-gray-08 rounded-full p-4"
                                src={IonLinkedin}
                                width={32}
                                height={32}
                                alt="connect with us on linkedin"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <Image
                                className="size-14 bg-gray-08 rounded-full p-4"
                                src={IonX}
                                width={32}
                                height={32}
                                alt="connect with us on twitter(X)"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <Image
                                className="size-14 bg-gray-08 rounded-full p-4"
                                src={IonYT}
                                width={32}
                                height={32}
                                alt="connect with us on youtube"
                            />
                        </Link>
                    </li>
                </ul>
                <div className="flex flex-col items-center gap-3 md:flex-row">
                    <p className="text-sm">
                        @2023 Estatein. All Rights Reserved.
                    </p>
                    <p className="text-sm">Terms & Conditions</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
