import Image from 'next/image'
import React from 'react'

type ServiceCardProps = {
    title: string
    desc: string
    icon: string
}

export const ServiceCard = ({ title, desc, icon }: ServiceCardProps) => {
    return (
        <div className="border border-gray-15 rounded-lg p-5 xs:py-7 xs:px-10 sm:p-5">
            <div className="flex items-center gap-3 mb-2">
                <Image
                    src={icon}
                    className="size-10"
                    width={32}
                    height={32}
                    alt="trust"
                />
                <h3 className="text-base">{title}</h3>
            </div>
            <p className="text-gray-60 text-sm">{desc}</p>
        </div>
    )
}

export const ServiceBanner = () => {
    return (
        <div className="bg-[url('/icons/unlock-value-bg.svg')] bg-no-repeat bg-cover bg-center p-5 bg-gray-08 rounded-lg border border-gray-15">
            <div className="flex items-center flex-col">
                <h3 className="text-lg font-semibold mb-4 text-wrap">
                    Unlock the Value of Your Property Today
                </h3>
                <button
                    type="submit"
                    className="bg-[#000] w-full rounded-lg text-xs border border-gray-15 py-3.5 mb-4"
                >
                    Learn More
                </button>
            </div>
            <p className="text-gray-60 text-sm text-pretty leading-snug font-light">
                Ready to unlock the true value of your property? Explore our
                Property Selling Service categories and let us help you achieve
                the best deal possible for your valuable asset.
            </p>
        </div>
    )
}
