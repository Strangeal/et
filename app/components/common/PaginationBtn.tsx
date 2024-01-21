import React from 'react'
import Image from 'next/image'
import IonArrowLeft from '@/public/icons/IonArrowLeft-gray.svg'
import IonArrowRight from '@/public/icons/IonArrowRight-white.svg'

type Props = {}

const PaginationBtn = ({ prev, next, btnContent }: any) => {
    return (
        <div className="border-t border-gray-15 py-10 mt-10 flex items-center justify-between gap-3 md:pb-10 md:pt-3">
            <button
                className="bg-gray-10 rounded-lg text-xs border border-gray-15 py-4 px-5 xs:py-3.5 xs:px-8 md:hidden"
                type="button"
            >
                {btnContent}
            </button>
            <p className="hidden space-x-1 text-xs xs:text-sm md:flex">
                <span>{prev}</span>
                <span className="text-gray-60">of</span>
                <span className="text-gray-60">{next}</span>
            </p>

            <div className="flex items-center gap-2 ">
                <button type="button">
                    <Image
                        className="size-9 rounded-full border border-gray-15 p-2 min-w-9 xs:min-w-12 xs:size-12"
                        src={IonArrowLeft}
                        width={32}
                        height={32}
                        alt="arrow left"
                    />
                </button>
                <p className="space-x-1 text-xs xs:text-sm md:hidden">
                    <span>{prev}</span>
                    <span className="text-gray-60">of</span>
                    <span className="text-gray-60">{next}</span>
                </p>
                <button type="button">
                    <Image
                        className="size-9 rounded-full border border-gray-15 p-2 min-w-9 xs:min-w-12 xs:size-12"
                        src={IonArrowRight}
                        width={32}
                        height={32}
                        alt="arrow right"
                    />
                </button>
            </div>
        </div>
    )
}

export default PaginationBtn
