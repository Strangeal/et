import React from 'react'

type Props = {}

const FaqCard = ({ faq, count }: any) => {
    return (
        <div className="grid items-start md:grid-cols-2 lg:grid-cols-3 gap-3">
            {faq.slice(0, count).map((faq: any, index: any) => (
                <div
                    key={index}
                    className="border border-gray-15 rounded-lg px-6 py-6 mt-8 space-y-3 md:last:col-span-2 md:mb-0 md:last:w-[60%] md:last:mx-auto lg:last:col-span-1 lg:last:w-auto"
                >
                    <h5 className="text-base font-medium h-12">{faq.title}</h5>
                    <p className="text-gray-60 text-sm h-12">{faq.desc}</p>
                    <button
                        className="bg-gray-10 shrink-0 rounded-lg text-xs border border-gray-15 py-4 px-5 xs:py-3 xs:px-8 w-full"
                        type="button"
                    >
                        Read More
                    </button>
                </div>
            ))}
        </div>
    )
}

export default FaqCard
