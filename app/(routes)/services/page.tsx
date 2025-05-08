import Headline from '@/app/components/common/Headline'
import HeroValues from '@/app/components/common/HeroValues'
import ServiceItems from '@/app/components/services/ServiceItems'
import React from 'react'

const Services = () => {
    return (
        <section className="mx-5 xl:px-20">
            <div className="py-9 md:py-12 lg:py-20">
                <div className="text-wrap md:pr-10 md:w-11/12">
                    <h1 className="text-4xl mb-3 lg:text-4xl leading-normal">
                        Elevate Your Real Estate Experience
                    </h1>
                    <p className="text-base text-gray-60 font-light">
                        Welcome to Estatein, where your real estate aspirations
                        meet expert guidance. Explore our comprehensive range of
                        services, each designed to cater to your unique needs
                        and dreams.
                    </p>
                </div>
            </div>
            <HeroValues />
            <ServiceItems />
        </section>
    )
}

export default Services
