import React from 'react'

type Props = {}

const ExploreBanner = () => {
    return (
        <section className="bg-[url('/icons/ads-abstract-r.svg'),_url('/icons/ads-abstract-l.svg')] bg-[position:bottom_right,top_-150px_left] md:bg-[position:right,_left] bg-no-repeat px-5 xl:px-24 border border-gray-15 pt-14 pb-5">
            <div className="flex flex-col justify-between md:flex-row">
                <div className="space-y-4">
                    <h2 className="text-2xl font-medium">
                        Start Your Real Estate Journey Today
                    </h2>
                    <p className="text-gray-60 text-sm font-light w-[95%]">
                        Your dream property is just a click away. Whether you're
                        looking for a new home, a strategic investment, or
                        expert real estate advice, Estatein is here to assist
                        you every step of the way. Take the first step towards
                        your real estate goals and explore our available
                        properties or get in touch with our team for
                        personalized assistance.
                    </p>
                </div>
                <div className="my-10 md:w-[60%]">
                    <button
                        type="button"
                        className="bg-purple-60 text-sm py-3.5 px-6 rounded-lg w-full md:float-end md:w-fit"
                    >
                        Explore Properties
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ExploreBanner
