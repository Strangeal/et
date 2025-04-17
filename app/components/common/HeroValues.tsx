import React from 'react'
import Image from 'next/image'
import IonHome from '@/public/icons/IonHome.svg'
import IonValue from '@/public/icons/IonValue.svg'
import IonBuilding from '@/public/icons/IonBuilding.svg'
import IonSun from '@/public/icons/IonSun.svg'
import arrowSide from '@/public/icons/IonArrowUpSide.svg'

type Props = {}
const valuesList = [
    {
        img: IonHome,
        desc: 'Find Your Dream Home',
    },
    {
        img: IonValue,
        desc: 'Unlock Property Value',
    },
    {
        img: IonBuilding,
        desc: 'Effortless Property Management',
    },
    {
        img: IonSun,
        desc: 'Smart Investment Informed Decisions',
    },
]

function HeroValues({}: Props) {
    return (
        <div className="grid grid-cols-2 gap-2 text-center border border-gray-15 p-3 rounded-lg shadow-light my-10 md:grid-cols-4 md:my-0">
            {valuesList.map((value, index) => (
                <div
                    key={index}
                    className="relative flex flex-col items-center bg-gray-10 border border-gray-15 rounded-lg p-5 gap-2 xs:px-10 md:px-2 md:py-5 md:gap-2 lg:gap-5 lg:py-7"
                >
                    <Image
                        src={value.img}
                        className="size-12"
                        width={32}
                        height={32}
                        alt="dream property"
                    />
                    <p className="text-xs">{value.desc}</p>
                    <button type="button" className="absolute right-2 top-2">
                        <Image
                            src={arrowSide}
                            className="size-5 lg:size-6"
                            width={32}
                            height={32}
                            alt="Arrow"
                        />
                    </button>
                </div>
            ))}
        </div>
    )
}

export default HeroValues
