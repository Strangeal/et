import React from 'react'
import Image from 'next/image'
import IonArrowLeft from '@/public/icons/IonArrowLeft-gray.svg'
import IonArrowRight from '@/public/icons/IonArrowRight-white.svg'

type PaginationCountProps = {
    prev: string
    next: string
}

export const ButtonLeft = ({ btnStylesLeft }: any) => {
    return (
        <button type="button" className={`md:flex ${btnStylesLeft} md:w-full`}>
            <Image
                className="size-10 rounded-full border border-gray-15 p-2 min-w-10"
                src={IonArrowLeft}
                width={32}
                height={32}
                alt="arrow left"
            />
        </button>
    )
}

export const ButtonRight = () => {
    return (
        <button type="button" className="md:flex md:justify-end md:w-fit">
            <Image
                className="size-10 rounded-full border border-gray-15 p-2 min-w-10"
                src={IonArrowRight}
                width={32}
                height={32}
                alt="arrow right"
            />
        </button>
    )
}

export const PaginationCount = ({ prev, next }: PaginationCountProps) => {
    return (
        <div
            className={`flex items-center gap-2 text-xs xs:text-sm md:-order-last`}
        >
            <p>{prev}</p>
            <p className="text-gray-60">of</p>
            <p className="text-gray-60">{next}</p>
        </div>
    )
}
