import Image from 'next/image'
import React from 'react'
import IonPurpleStar from '@/public/icons/purple-star.svg'
import IonExcellence from '@/public/icons/Ex-purple.svg'
import IonPeople from '@/public/icons/IonPeople.svg'

type Props = {}

const valuesList = [
    {
        icon: IonPurpleStar,
        title: 'Trust',
        desc: 'Trust is the cornerstone of every successful real estate transaction.',
    },
    {
        icon: IonExcellence,
        title: 'Excellence',
        desc: 'We set the bar high for ourselves. From the properties we list to the services we provide.',
    },
    {
        icon: IonPeople,
        title: 'Client-Centric',
        desc: 'Your dreams and needs are at the center of our universe. We listen, understand.',
    },
    {
        icon: IonPurpleStar,
        title: 'Our Commitment',
        desc: 'We are dedicated to providing you with the highest level of service, professionalism.',
    },
]

const ValueCard = (props: Props) => {
    return (
        <>
            <div className="border border-gray-15 rounded-lg shadow-deep p-5 md:grid md:grid-cols-2 md:p-8 md:col-span-2 lg:p-10">
                {valuesList?.map((values, index) => (
                    <div
                        key={index}
                        className={`space-y-3 border-b border-gray-15 pb-5 mb-5 last:border-b-0 last:mb-0 md:last:mb-0 md:even:pl-5 md:even:border-l ${
                            index === 2 ? 'mb-0 border-b-0' : ''
                        }`}
                    >
                        <div className="flex items-center gap-2">
                            <Image
                                src={values.icon}
                                className="size-10 border border-purple-60 rounded-full p-2"
                                width={32}
                                height={32}
                                alt="trust"
                            />
                            <h5 className="text-md">{values.title}</h5>
                        </div>
                        <p className="text-sm text-gray-60">{values.desc}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ValueCard
