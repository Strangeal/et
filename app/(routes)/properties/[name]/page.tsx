'use client'
import React from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import {
    ButtonLeft,
    ButtonRight,
} from '@/app/components/common/Pagination-utils/Buttons'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules'
import Gallery from '@/app/components/properties/Gallery'

import IonArrowLeft from '@/public/icons/IonArrowLeft-gray.svg'
import IonArrowRight from '@/public/icons/IonArrowRight-white.svg'
import IonLocation from '@/public/icons/IonLocation.svg'
import IonBed from '@/public/icons/bed-gray.svg'
import IonBath from '@/public/icons/bath-gray.svg'
import IonArea from '@/public/icons/area-gray.svg'
import IonLight from '@/public/icons/IonLight.svg'
import Headline from '@/app/components/common/Headline'
import Faq from '@/app/components/home/Faq'
import ExploreBanner from '@/app/components/common/ExploreBanner'

type PricingDetails = {
    [key: string]: {
        name: string
        btn: string
        items: { title: string; price: string; desc: string }[]
    }[]
}

const PropertyDetails = () => {
    const params = useParams()

    const keyFeatures = [
        'Expansive oceanfront terrace for outdoor entertaining',
        'Gourmet kitchen with top-of-the-line appliances',
        'Private beach access for morning strolls and sunset views',
        'Master suite with a spa-inspired bathroom and ocean-facing balcony',
        'Private garage and ample storage space',
    ]

    const pricingDetails: PricingDetails = {
        propertyFees: [
            {
                name: 'Additional Fees',
                btn: 'Learn More',
                items: [
                    {
                        title: 'Property Transfer Tax',
                        price: '25,000',
                        desc: 'Based on the sale price and local regulations',
                    },
                    {
                        title: 'Legal Fees',
                        price: '3,000',
                        desc: 'Approximate cost for legal services, including title transfer',
                    },
                    {
                        title: 'Home Inspection',
                        price: '500',
                        desc: 'Recommended for due diligence',
                    },
                    {
                        title: 'Property Insurance',
                        price: '1,200',
                        desc: 'Annual cost for comprehensive property insurance',
                    },
                    {
                        title: 'Mortgage Fees',
                        price: 'Varies',
                        desc: 'If applicable, consult with your lender for specific details',
                    },
                ],
            },
        ],

        monthlyCosts: [
            {
                name: 'Monthly Costs',
                btn: 'Learn More',
                items: [
                    {
                        title: 'Property Taxes',
                        price: '1,250',
                        desc: 'Approximate monthly property tax based on the sale price and local rates',
                    },
                    {
                        title: "Homeowners' Association Fee",
                        price: '300',
                        desc: 'Monthly fee for common area maintenance and security',
                    },
                ],
            },
        ],

        initialCosts: [
            {
                name: 'Total Initial Costs',
                btn: 'Learn More',
                items: [
                    {
                        title: 'Listing Price',
                        price: '1,250,000',
                        desc: '',
                    },
                    {
                        title: 'Additional Fees',
                        price: '29,700',
                        desc: 'Property transfer tax, legal fees, inspection, insurance',
                    },
                    {
                        title: 'Down Payment',
                        price: '250,000',
                        desc: '20%',
                    },
                    {
                        title: 'Mortgage Amount',
                        price: '1,000',
                        desc: 'If applicable',
                    },
                ],
            },
        ],

        monthlyExpenses: [
            {
                name: 'Monthly Expenses',
                btn: 'Learn More',
                items: [
                    {
                        title: 'Property Taxes',
                        price: '1,250',
                        desc: '',
                    },
                    {
                        title: "Homeowners' Association Fee",
                        price: '300',
                        desc: '',
                    },
                    {
                        title: 'Mortgage Payment',
                        price: 'Varies based on terms and interest rate',
                        desc: '',
                    },
                    {
                        title: 'Property Insurance',
                        price: '100',
                        desc: 'Approximate monthly cost',
                    },
                ],
            },
        ],
    }

    return (
        <>
            <section className="px-5 py-8 xl:px-24">
                <div className="space-y-14">
                    <div className="md:flex md:items-center md:justify-between">
                        <h4 className="text-lg font-medium mb-3 md:hidden">
                            Seaside Serenity Villa
                        </h4>
                        <div className="flex items-center gap-5 xs:justify-between md:justify-start">
                            <h4 className="hidden text-lg font-medium md:block">
                                Seaside Serenity Villa
                            </h4>
                            <div className="flex items-center gap-1 border border-gray-15 rounded-md px-1.5 py-1 ">
                                <Image
                                    className="size-4"
                                    src={IonLocation}
                                    width={32}
                                    height={32}
                                    alt="location"
                                />
                                <p className="text-xs">Malibu, California</p>
                            </div>

                            <div className="flex items-center gap-2 md:hidden">
                                <p className="text-xs text-gray-60">Price</p>
                                <h5 className="text-base font-semibold">
                                    $1,250.000
                                </h5>
                            </div>
                        </div>
                        <div className="hidden items-center gap-2 md:flex md:flex-col md:items-start">
                            <p className="text-xs text-gray-60">Price</p>
                            <h5 className="text-base font-semibold">
                                $1,250.000
                            </h5>
                        </div>
                    </div>

                    {/* Gallery */}

                    <div className="border border-gray-15 p-6 rounded-lg bg-gray-08 space-y-5 flex flex-col md:space-y-0">
                        <Gallery />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-5">
                    <div className="border border-gray-15 rounded-lg mt-10 p-5 h-fit">
                        <div>
                            <h5 className="font-medium text-lg mb-4">
                                Description
                            </h5>
                            <p className="text-sm text-gray-60">
                                Discover your own piece of paradise with the
                                Seaside Serenity Villa. T With an open floor
                                plan, breathtaking ocean views from every room,
                                and direct access to a pristine sandy beach,
                                this property is the epitome of coastal living.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-y-4 mt-5 xl:grid-cols-3 items-start">
                            <div className="border-t border-gray-15 py-4 pb-4">
                                <div className="flex items-center gap-1">
                                    <Image
                                        className="size-4"
                                        src={IonBed}
                                        width={32}
                                        height={32}
                                        alt="bed"
                                    />
                                    <p className="text-gray-60 text-sm">
                                        Bedrooms
                                    </p>
                                </div>
                                <h4 className="text-lg font-medium">04</h4>
                            </div>
                            <div className="border-t border-gray-15 py-4 pr-3 pb-4">
                                <div className="flex items-center gap-1 border-l border-gray-15 pl-3">
                                    <Image
                                        className="size-4"
                                        src={IonBath}
                                        width={32}
                                        height={32}
                                        alt="bathroom"
                                    />
                                    <p className="text-gray-60 text-sm">
                                        Bathrooms
                                    </p>
                                </div>
                                <h4 className="text-lg font-medium border-l border-gray-15 pl-3">
                                    03
                                </h4>
                            </div>
                            <div className="lg:col-span-1 border-t border-gray-15 py-4">
                                <div className="flex items-center gap-1 border-l border-gray-15 pl-3">
                                    <Image
                                        className="size-4"
                                        src={IonArea}
                                        width={32}
                                        height={32}
                                        alt="area"
                                    />
                                    <p className="text-gray-60 text-sm">Area</p>
                                </div>
                                <h4 className="text-md font-medium border-l border-gray-15 pl-3">
                                    2,500 Square Feet
                                </h4>
                            </div>
                        </div>
                    </div>

                    {/* Key features #1A1A1A, #1A1A1A00 */}

                    <div className="border border-gray-15 rounded-lg mt-10 p-5">
                        <h2 className="text-lg font-medium mb-5">
                            Key Features and Amenities
                        </h2>

                        <ul className="space-y-5">
                            {keyFeatures.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-2 border-l border-purple-60 bg-gradient-to-r from-[#1A1A1A] to-[#1A1A1A00] py-3"
                                >
                                    <Image
                                        className="size-7 pl-2"
                                        src={IonLight}
                                        width={32}
                                        height={32}
                                        alt="features"
                                    />
                                    <p className="text-sm text-gray-60">
                                        {item}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Enquiry */}
            <section className="px-5 py-8 xl:px-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-3">
                    <div className="mb-5">
                        <Headline
                            secTitle="Inquire About Seaside Serenity Villa"
                            secDesc="Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have."
                            sm_display="hidden"
                        />
                    </div>
                    <div className="space-y-5 lg:col-span-2 sm:grid sm:grid-cols-2 sm:items-center sm:space-y-0 sm:gap-5 border border-gray-15 rounded-lg p-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="first_name" className="text-xs">
                                First Name
                            </label>
                            <input
                                className="bg-gray-10 border border-gray-40 h-12 rounded-lg px-4 text-xs text-gray-60 focus-within:outline-none"
                                type="text"
                                placeholder="Enter First Name"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="last_name" className="text-xs">
                                Last Name
                            </label>
                            <input
                                className="bg-gray-10 border border-gray-40 h-12 rounded-lg px-4 text-xs text-gray-60 focus-within:outline-none"
                                type="text"
                                placeholder="Enter Last Name"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-xs">
                                Email
                            </label>
                            <input
                                className="bg-gray-10 border border-gray-40 h-12 rounded-lg px-4 text-xs text-gray-60 focus-within:outline-none"
                                type="email"
                                placeholder="Enter Your Email"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="phone" className="text-xs">
                                Phone
                            </label>
                            <input
                                className="bg-gray-10 border border-gray-40 h-12 rounded-lg px-4 text-xs text-gray-60 focus-within:outline-none"
                                type="number"
                                placeholder="Enter Phone Number"
                            />
                        </div>
                        <div className="flex flex-col gap-2 sm:col-span-2 relative">
                            <label htmlFor="property" className="text-xs">
                                Selected Property
                            </label>
                            <input
                                className="bg-gray-10 border border-gray-40 h-12 rounded-lg px-4 text-xs text-gray-60 focus-within:outline-none"
                                type="text"
                                placeholder="Property address"
                            />
                            <Image
                                className="size-5 absolute right-4 top-9"
                                src={IonLocation}
                                width={32}
                                height={32}
                                alt="location"
                            />
                        </div>

                        <div className="flex flex-col gap-2 sm:col-span-2">
                            <label htmlFor="email" className="text-xs">
                                Message
                            </label>
                            <textarea
                                className="bg-gray-10 border border-gray-40 text-gray-60 h-20 rounded-lg px-4 py-2 text-xs focus-within:outline-none md:h-28"
                                placeholder="Enter your Message here..."
                                cols={30}
                                rows={10}
                            ></textarea>
                        </div>
                        <div className="mt-5 sm:col-span-2 md:flex md:items-center md:justify-between">
                            <div className="flex items-center gap-2 mb-3">
                                <div>
                                    <input
                                        type="checkbox"
                                        className="w-3 h-3"
                                    />
                                </div>
                                <label
                                    htmlFor=""
                                    className="text-gray-60 text-xs"
                                >
                                    I agree with Terms of Use and Privacy Policy
                                </label>
                            </div>
                            <button
                                className="text-xs font-light rounded-lg bg-purple-60 px-6 py-4 w-full md:w-auto"
                                type="submit"
                            >
                                Send Your Message
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-5 py-8 xl:px-24">
                <Headline
                    secTitle="Comprehensive Pricing Details"
                    secDesc="At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision."
                    sm_display="hidden"
                />

                <div className="bg-gray-08 px-4 py-6 border border-gray-15 rounded-lg text-pretty my-8 md:flex md:items-center md:gap-5">
                    <h3 className="text-clr-white border-b border-gray-15 pb-3 font-medium md:border-b-0 md:pb-0 md:border-r md:px-5">
                        Note
                    </h3>
                    <p className="text-gray-60 text-sm pt-3 md:pt-0">
                        The figures provided above are estimates and may vary
                        depending on the property, location, and individual
                        circumstances.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="text-pretty">
                        <p className="text-gray-60 text-sm">Listing Price</p>
                        <h3 className="text-3xl text-clr-white">$1,250,000</h3>
                    </div>

                    <div className="md:col-span-3">
                        {Object.keys(pricingDetails).map((category, index) => (
                            <>
                                {pricingDetails[category].map((fees: any) => (
                                    <div
                                        key={index}
                                        className="px-4 py-6 border border-gray-15 rounded-lg my-8"
                                    >
                                        <div className="flex justify-between items-center text-pretty border-b border-gray-15 pb-5">
                                            <h5 className="text-clr-white font-medium">
                                                {fees.name}
                                            </h5>
                                            <button
                                                className="bg-gray-08 shrink-0 rounded-lg text-sm border border-gray-15 py-4 px-5 xs:py-3.5 xs:px-8"
                                                type="button"
                                            >
                                                {fees.btn}
                                            </button>
                                        </div>
                                        <div
                                            className={`grid lg:grid-cols-2 ${
                                                category === 'monthlyCosts'
                                                    ? 'lg:block'
                                                    : ''
                                            }`}
                                        >
                                            {fees.items.map(
                                                (item: any, i: number) => {
                                                    return (
                                                        <>
                                                            <div
                                                                key={i}
                                                                className={`border-b border-gray-15 ${
                                                                    i === 4
                                                                        ? 'border-b-0 md:col-span-2'
                                                                        : ''
                                                                }
                                                                ${
                                                                    category ===
                                                                    'monthlyCosts'
                                                                        ? 'border-b-0'
                                                                        : ''
                                                                }
                                                                ${
                                                                    category ===
                                                                        'initialCosts' &&
                                                                    i === 2
                                                                        ? 'md:border-b-0'
                                                                        : ''
                                                                }
                                                                ${
                                                                    category ===
                                                                        'initialCosts' &&
                                                                    i === 3
                                                                        ? 'md:border-b-0'
                                                                        : ''
                                                                }
                                                                ${
                                                                    category ===
                                                                        'monthlyExpenses' &&
                                                                    i === 2
                                                                        ? 'md:border-b-0'
                                                                        : ''
                                                                }
                                                                ${
                                                                    category ===
                                                                        'monthlyExpenses' &&
                                                                    i === 3
                                                                        ? 'md:border-b-0'
                                                                        : ''
                                                                }
                                                                `}
                                                            >
                                                                <div
                                                                    className={`${
                                                                        i === 0
                                                                            ? 'border-r border-gray-15 pb-5'
                                                                            : ''
                                                                    }
                                                                    ${
                                                                        i === 2
                                                                            ? 'border-r border-gray-15 pb-5'
                                                                            : ''
                                                                    }
                                                                    ${
                                                                        category ===
                                                                            'monthlyCosts' &&
                                                                        i === 0
                                                                            ? 'lg:border-r-0'
                                                                            : ''
                                                                    }
                                                                    px-5 my-5 h-max`}
                                                                >
                                                                    <p className="pt-5 text-gray-60 font-light text-sm">
                                                                        {
                                                                            item.title
                                                                        }
                                                                    </p>
                                                                    <div className="flex justify-between items-center mt-3 gap-5">
                                                                        <h3 className="text-clr-white font-medium text-xl">
                                                                            $
                                                                            {
                                                                                item.price
                                                                            }
                                                                        </h3>
                                                                        <p className="text-gray-60 bg-gray-08 p-2 border border-gray-15 rounded-md text-sm font-light">
                                                                            {item.desc
                                                                                ? item.desc
                                                                                : 'N/A'}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )
                                                }
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </>
                        ))}
                    </div>
                </div>
            </section>

            <Faq style="hidden" />
            <ExploreBanner />
        </>
    )
}

export default PropertyDetails
