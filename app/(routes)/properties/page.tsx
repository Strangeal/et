'use client'
import React from 'react'
import Headline from '@/app/components/common/Headline'
import PropertyCard from '@/app/components/properties/PropertyCard'
import prop1 from '@/public/images/pro-sky.png'
import prop2 from '@/public/images/modern-prop.jpg'
import prop3 from '@/public/images/luxury-pool-villa.jpg'
import WindowSizeTracker from '@/app/components/common/WindowSizeTracker'
import PaginationBtn from '@/app/components/common/PaginationBtn'
import {
    ButtonLeft,
    ButtonRight,
    PaginationCount,
} from '@/app/components/common/Pagination-utils/Buttons'
import RequestForm from '@/app/components/properties/RequestForm'
import ExploreBanner from '@/app/components/common/ExploreBanner'

type Props = {}

const propertiesList = [
    {
        img: prop1,
        name: 'Rustic Retreat Cottage',
        price: 550,
        desc: 'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community',
        bed: 3,
        bath: 3,
        category: 'Villa',
    },
    {
        img: prop2,
        name: 'Metropolitan Haven',
        price: 550,
        desc: 'A chic and fully-furnished 2-bedroom apartment with panoramic city views',
        bed: 2,
        bath: 2,
        category: 'Villa',
    },
    {
        img: prop3,
        name: 'Seaside Serenity Villa',
        price: 550,
        desc: 'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood',
        bed: 4,
        bath: 3,
        category: 'Villa',
    },
]

const Properties = (props: Props) => {
    const renderContent = (windowSize: any) => {
        if (windowSize.width <= 640) {
            return <PropertyCard properties={propertiesList} count={1} />
        } else if (windowSize.width > 640 && windowSize.width <= 768) {
            return <PropertyCard properties={propertiesList} count={2} />
        } else {
            return <PropertyCard properties={propertiesList} count={3} />
        }
    }

    return (
        <>
            <section className="">
                <div className="px">
                    <div className="text-wrap py-20 px-5 bg-gray-08 md:py-36 xl:px-24">
                        <h1 className="text-3xl mb-5 lg:text-4xl">
                            Find Your Dream Property
                        </h1>
                        <p className="text-sm text-gray-60">
                            Welcome to Estatein, where your dream property
                            awaits in every corner of our beautiful world.
                            Explore our curated selection of properties, each
                            offering a unique story and a chance to redefine
                            your life. With categories to suit every dreamer,
                            your journey
                        </p>
                    </div>

                    <div className="px-5 xl:px-24">
                        <div className="relative my-10 sm:my-0">
                            <div className="relative w-full sm:absolute sm:-top-16 sm:mx-auto sm:px-20">
                                <input
                                    className="h-16 bg-[#000] text-sm text-gray-60 w-full border border-gray-15 rounded-t-lg pl-5 pr-44 shadow-light focus-within:outline-none"
                                    type="text"
                                    name="search"
                                    placeholder="Search For A Property"
                                />
                                <button
                                    className="block absolute top-2.5 text-sm font-light rounded-lg right-4 sm:right-24 bg-purple-60 px-6 py-3"
                                    type="button"
                                >
                                    Find Property
                                </button>
                            </div>
                        </div>

                        <form className="space-y-5 bg-gray-08 p-5 rounded-xl sm:grid sm:grid-cols-2 sm:space-y-0 sm:gap-4 sm:my-8 lg:grid-cols-5">
                            <div className="relative col-span-2 lg:col-span-1">
                                <select className="bg-black border text-sm bg-[#000] border-gray-15 text-gray-60 h-12 rounded-lg pl-8 w-full focus-within:outline-none">
                                    <option defaultValue="Location">
                                        Location
                                    </option>
                                    <option value="">United States</option>
                                    <option value="">Canada</option>
                                    <option value="">France</option>
                                    <option value="">Germany</option>
                                </select>
                                <span className="block absolute top-3 left-1 border-r border-gray-15 px-2">
                                    S
                                </span>
                            </div>
                            <div className="relative">
                                <select className="bg-black border text-sm bg-[#000] border-gray-15 text-gray-60 h-12 rounded-lg pl-8 w-full focus-within:outline-none">
                                    <option defaultValue="Property Type">
                                        Property Type
                                    </option>
                                    <option value="">Houses</option>
                                    <option value="">Villa</option>
                                    <option value="">Apartment</option>
                                    <option value="">Office</option>
                                </select>
                                <span className="block absolute top-3 left-1 border-r border-gray-15 px-2">
                                    S
                                </span>
                            </div>
                            <div className="relative">
                                <select className="bg-black border text-sm bg-[#000] border-gray-15 text-gray-60 h-12 rounded-lg pl-8 w-full focus-within:outline-none">
                                    <option defaultValue="Pricing Range">
                                        Pricing Range
                                    </option>
                                    <option value="">$10,000 - $50,000</option>
                                    <option value="">$50,000 - $80,000</option>
                                    <option value="">$80,000 - $150,000</option>
                                </select>
                                <span className="block absolute top-3 left-1 border-r border-gray-15 px-2">
                                    S
                                </span>
                            </div>
                            <div className="relative">
                                <select className="bg-black border text-sm bg-[#000] border-gray-15 text-gray-60 h-12 rounded-lg pl-8 w-full focus-within:outline-none">
                                    <option defaultValue="Property Size">
                                        Property Size
                                    </option>
                                    <option value="">1 - 5 plots</option>
                                    <option value="">1 - 5 acres</option>
                                    <option value="">5 - 10 acres</option>
                                </select>
                                <span className="block absolute top-3 left-1 border-r border-gray-15 px-2">
                                    S
                                </span>
                            </div>
                            <div className="relative">
                                <select className="bg-black border text-sm bg-[#000] border-gray-15 text-gray-60 h-12 rounded-lg pl-8 w-full focus-within:outline-none">
                                    <option defaultValue="Build Year">
                                        Build Year
                                    </option>
                                    <option value="">1990 - 2000</option>
                                    <option value="">2000 - 2010</option>
                                    <option value="">2010 - 2024</option>
                                </select>
                                <span className="block absolute top-3 left-1 border-r border-gray-15 px-2">
                                    S
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <section className="mx-5 py-12 xl:mx-24">
                <Headline
                    secTitle="Discover a World of Possibilities"
                    secDesc="Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home"
                    sm_display="hidden"
                />

                <WindowSizeTracker renderContent={renderContent} />
                <div className="flex items-center justify-between gap-4 my-8">
                    <ButtonLeft btnStylesLeft="md:justify-end" />
                    <PaginationCount prev="01" next="10" />
                    <ButtonRight />
                </div>
            </section>

            <section className="mx-5 py-12 xl:mx-24">
                <Headline
                    secTitle="Let's Make it Happen"
                    secDesc="Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
                    sm_display="hidden"
                />
                <RequestForm />
            </section>
            <ExploreBanner />
        </>
    )
}

export default Properties
