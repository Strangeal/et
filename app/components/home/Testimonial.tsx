'use client'
import React from 'react'
import TestimonialCard from './TestimonialCard'
import PaginationBtn from '../common/PaginationBtn'
import Headline from '../common/Headline'
import WindowSizeTracker from '@/components/common/WindowSizeTracker'

type Props = {}

const testimonialsList = [
    {
        title: 'Exceptional Service!',
        desc: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
        client_name: 'Wade Warren',
        country: 'USA',
        state: 'California',
    },
    {
        title: 'Efficient and Reliable',
        desc: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
        client_name: 'Emelie Thomson',
        country: 'USA',
        state: 'Florida',
    },
    {
        title: 'Trusted Advisors',
        desc: 'The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!',
        client_name: 'John Mans',
        country: 'USA',
        state: 'Nevada',
    },
]

const Testimonial = () => {
    const renderContent = (windowSize: any) => {
        if (windowSize.width <= 640) {
            return <TestimonialCard testimonials={testimonialsList} count={1} />
        } else if (windowSize.width > 640 && windowSize.width <= 768) {
            return <TestimonialCard testimonials={testimonialsList} count={2} />
        } else {
            return <TestimonialCard testimonials={testimonialsList} count={3} />
        }
    }

    return (
        <section className="mx-5 pb-8 xl:m-12">
            <Headline
                secTitle="What Our Clients Say"
                secDesc=" Read the success stories and heartfelt testimonials from our valued
      clients. Discover why they chose Estatein for their real estate
      needs."
            />
            <WindowSizeTracker renderContent={renderContent} />
            <PaginationBtn
                prev="01"
                next="10"
                btnContent="View All Testimonials"
            />
        </section>
    )
}

export default Testimonial
