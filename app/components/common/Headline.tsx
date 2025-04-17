import Image from 'next/image'
import React from 'react'
import stars from '@/public/icons/star-abstract.svg'

type Props = {}

const Headline = ({ secTitle, secDesc, sm_display, md_display }: any) => {
    return (
        <div className="text-pretty">
            <Image
                className="mb-2"
                src={stars}
                width={50}
                height={50}
                alt="start-abstract"
            />
            <h3 className="text-3xl">{secTitle}</h3>

            <div className="flex items-center justify-between">
                <p className="text-gray-60 text-sm my-3 md:w-[80%]">
                    {secDesc}
                </p>

                <button
                    className={`bg-gray-10 shrink-0 rounded-lg text-xs border border-gray-15 py-4 px-5 xs:py-3.5 xs:px-8 ${sm_display} md:${md_display}`}
                    type="button"
                >
                    View All Testimonials
                </button>
            </div>
        </div>
    )
}

export default Headline
