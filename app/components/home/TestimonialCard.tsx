import Image from 'next/image'
import React from 'react'
import starRating from '@/public/icons/rating-star.svg'
import anim from '@/public/icons/animoji.svg'

type Props = {}

const TestimonialCard = ({ testimonials, count }: any) => {
    return (
        <div className="grid items-start md:grid-cols-2 lg:grid-cols-3 gap-3">
            {testimonials
                .slice(0, count)
                .map((testimonial: any, index: any) => (
                    <div
                        key={index}
                        className="border border-gray-15 rounded-lg px-6 py-10 mt-8 space-y-5 md:last:col-span-2 md:mb-0 md:last:w-[60%] md:last:mx-auto lg:last:col-span-1 lg:last:w-auto"
                    >
                        <div className="flex items-center gap-1">
                            <Image
                                className="size-8 border border-gray-15 rounded-full bg-gray-10 p-2"
                                src={starRating}
                                width={32}
                                height={32}
                                alt="star rating"
                            />
                            <Image
                                className="size-8 border border-gray-15 rounded-full bg-gray-10 p-2"
                                src={starRating}
                                width={32}
                                height={32}
                                alt="star rating"
                            />
                            <Image
                                className="size-8 border border-gray-15 rounded-full bg-gray-10 p-2"
                                src={starRating}
                                width={32}
                                height={32}
                                alt="star rating"
                            />
                            <Image
                                className="size-8 border border-gray-15 rounded-full bg-gray-10 p-2"
                                src={starRating}
                                width={32}
                                height={32}
                                alt="star rating"
                            />
                            <Image
                                className="size-8 border border-gray-15 rounded-full bg-gray-10 p-2"
                                src={starRating}
                                width={32}
                                height={32}
                                alt="star rating"
                            />
                        </div>

                        <div className="space-y-1">
                            <h5 className="text-base font-medium">
                                {testimonial.title}
                            </h5>
                            <p className="text-sm">{testimonial.desc}</p>
                        </div>

                        <div className="flex items-center gap-x-3">
                            <Image
                                className="size-10 object-cover rounded-full"
                                src={anim}
                                width={100}
                                height={100}
                                alt="star rating"
                            />
                            <div>
                                <p className="text-xs font-medium">
                                    {testimonial.client_name}
                                </p>
                                <p className="text-gray-60 text-sm">
                                    {testimonial.country}, {testimonial.state}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default TestimonialCard
