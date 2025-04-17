import Image from 'next/image'
import React from 'react'
import IonBed from '@/public/icons/bed.svg'
import IonBath from '@/public/icons/bath.svg'
import IonBuilding from '@/public/icons/tall-build.svg'
import Link from 'next/link'

type PropertiesProps = {
    property: {
        img: string
        name: string
        price: number
        desc: string
        bed: number
        bath: number
        category: string
    }
    propertyIndex: number
}

const PropertyCard = ({ properties, count }: any) => {
    return (
        <>
            <div className="grid items-start md:grid-cols-2 lg:grid-cols-3 gap-3">
                {properties.slice(0, count).map((property: any, index: any) => (
                    <div
                        key={index}
                        className="border border-gray-15 rounded-lg p-5 mt-8 md:last:col-span-2 md:mb-0 md:last:w-[60%] md:last:mx-auto lg:last:col-span-1 lg:last:w-auto"
                    >
                        <Image
                            className="object-cover h-80 w-full rounded-lg"
                            src={property.img}
                            width={500}
                            height={500}
                            alt="property alt"
                        />
                        <div className="mb-8">
                            <Link
                                href={`/properties/${property.name}`}
                                className="text-xl my-2"
                            >
                                {property.name}
                            </Link>
                            <p className="text-sm text-gray-60">
                                {property.desc}...{' '}
                                <Link
                                    href=""
                                    className="text-clr-white underline text-xs"
                                >
                                    Read More
                                </Link>
                            </p>
                        </div>

                        <ul className="flex items-center gap-x-3 gap-y-2 mb-5 flex-wrap">
                            <li className="flex items-center flex-shrink-0 gap-2 border border-gray-15 bg-gray-10 rounded-3xl py-1 px-3">
                                <Image
                                    className="size-4"
                                    src={IonBed}
                                    width={32}
                                    height={32}
                                    alt="property"
                                />
                                <p className="text-xs shrink-0">3-Bedroom</p>
                            </li>
                            <li className="flex items-center flex-shrink-0 gap-2 border border-gray-15 bg-gray-10 rounded-3xl py-1 px-3">
                                <Image
                                    className="size-4"
                                    src={IonBath}
                                    width={32}
                                    height={32}
                                    alt="property"
                                />
                                <p className="text-xs shrink-0">3-Bedroom</p>
                            </li>
                            <li className="flex items-center flex-shrink-0 gap-2 border border-gray-15 bg-gray-10 rounded-3xl py-1 px-3">
                                <Image
                                    className="size-4"
                                    src={IonBuilding}
                                    width={32}
                                    height={32}
                                    alt="property"
                                />
                                <p className="text-xs shrink-0">Villa</p>
                            </li>
                        </ul>

                        <div className="flex items-center justify-between gap-5">
                            <div>
                                <p className="text-gray-60">Price</p>
                                <h4 className="font-medium">$550.000</h4>
                            </div>
                            <button
                                type="button"
                                className="text-xs bg-purple-60 py-3.5 px-6  rounded-lg"
                            >
                                View Property Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default PropertyCard
