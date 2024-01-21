'use client'
import React from 'react'
import FaqCard from './FaqCard'
import PaginationBtn from '../common/PaginationBtn'
import Headline from '../common/Headline'
import WindowSizeTracker from '@/components/common/WindowSizeTracker'

type Props = {}

const faqList = [
    {
        title: 'How do I search for properties on Estatein?',
        desc: 'Learn how to use our user-friendly search tools to find properties that match your criteria.',
    },
    {
        title: 'What documents do I need to sell my property through Estatein?',
        desc: 'Find out about the necessary documentation for listing your property with us.',
    },
    {
        title: 'How can I contact an Estatein agent?',
        desc: 'Discover the different ways you can get in touch with our experienced agents.',
    },
]

const Faq = () => {
    const renderContent = (windowSize: any) => {
        if (windowSize.width <= 640) {
            return <FaqCard faq={faqList} count={1} />
        } else if (windowSize.width > 640 && windowSize.width <= 768) {
            return <FaqCard faq={faqList} count={2} />
        } else {
            return <FaqCard faq={faqList} count={3} />
        }
    }

    return (
        <section className="mx-5 xl:m-12">
            <Headline
                secTitle="Frequently Asked Questions"
                secDesc="Find answers to common questions about Estatein's services, property
          listings, and the real estate process. We're here to provide clarity
          and assist you every step of the way."
            />

            <WindowSizeTracker renderContent={renderContent} />

            <PaginationBtn prev="01" next="10" btnContent="View All FAQ's" />
        </section>
    )
}

export default Faq
