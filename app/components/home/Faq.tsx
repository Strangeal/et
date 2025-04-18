'use client'
import React from 'react'
import FaqCard from './FaqCard'
import PaginationBtn from '../common/PaginationBtn'
import Headline from '../common/Headline'
import WindowSizeTracker from '@/components/common/WindowSizeTracker'

type FaqProps = {
    style?: string
}

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

const Faq = ({ style }: FaqProps) => {
    console.log('style:', style)

    interface WindowSize {
        width: number
        height: number
    }

    const renderContent = (windowSize: WindowSize): JSX.Element => {
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
                secTitle="Hello heading"
                secDesc="hi"
                sm_display={style}
            />

            <WindowSizeTracker renderContent={renderContent} />

            <PaginationBtn prev="01" next="10" btnContent="View All FAQ's" />
        </section>
    )
}

export default Faq
