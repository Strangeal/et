'use client'
import Image from 'next/image'
import React from 'react'
import aboutImg from '@/public/images/aboutHero.png'
import stars from '@/public/icons/star-abstract.svg'
import Headline from '@/app/components/common/Headline'
import ValueCard from '@/app/components/about/ValueCard'
import AchievementCard from '@/app/components/about/AchievementCard'
import ExperienceCard from '@/app/components/about/ExperienceCard'
import TeamCard from '@/app/components/about/TeamCard'
import ClientProfileCard from '@/app/components/about/ClientProfileCard'
import WindowSizeTracker from '@/components/common/WindowSizeTracker'
import PaginationBtn from '@/app/components/common/PaginationBtn'
import ExploreBanner from '@/app/components/common/ExploreBanner'
import {
    ButtonLeft,
    ButtonRight,
    PaginationCount,
} from '@/app/components/common/Pagination-utils/Buttons'

const experienceList = [
    {
        step: '01',
        title: 'Discover a World of Possibilities',
        desc: 'Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location,',
    },
    {
        step: '02',
        title: 'Narrowing Down Your Choices',
        desc: "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
    },
    {
        step: '03',
        title: 'Personalized Guidance',
        desc: 'Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.',
    },
    {
        step: '04',
        title: 'See It for Yourself',
        desc: "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
    },
    {
        step: '05',
        title: 'Making Informed Decisions',
        desc: 'Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed.',
    },
    {
        step: '06',
        title: 'Getting the Best Deal',
        desc: "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
    },
]

const profileList = [
    {
        year: 'Since 2019',
        title: 'ABC Corporation',
        domain: 'Commercial Real Estate',
        category: 'Luxury Home Development',
        desc: "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
    },
    {
        year: 'Since 2018',
        title: 'GreenTech Enterprises',
        domain: 'Commercial Real Estate',
        category: 'Retail Space',
        desc: "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
    },
]

const About = () => {
    const renderContent = (windowSize: any) => {
        if (windowSize.width <= 640) {
            return <ExperienceCard experiences={experienceList} count={3} />
        } else if (windowSize.width > 640 && windowSize.width <= 768) {
            return <ExperienceCard experiences={experienceList} count={4} />
        } else {
            return <ExperienceCard experiences={experienceList} count={6} />
        }
    }

    const renderProfiles = (windowSize: any) => {
        if (windowSize.width <= 640) {
            return <ClientProfileCard profiles={profileList} count={1} />
        } else {
            return <ClientProfileCard profiles={profileList} count={2} />
        }
    }

    return (
        <>
            <section className="mx-5 md:mx-0 md:py-20 xl:px-20">
                <div className="mx-5 md:grid md:grid-cols-2 md:gap-5">
                    <div className="mb-10 md:order-last md:mb-0">
                        <div className="bg-hero-abstract-lg bg-no-repeat bg-gray-30 border border-gray-15 rounded-lg my-10 md:my-auto md:h-full w-full">
                            <Image
                                src={aboutImg}
                                className="text w-full h-full"
                                width={500}
                                height={500}
                                alt="hero building image"
                            />
                        </div>
                    </div>

                    <div className="md:mx-auto my-auto md:py-14">
                        <div className="text-wrap md:pr-10">
                            <Image
                                className="mb-2"
                                src={stars}
                                width={50}
                                height={50}
                                alt="start-abstract"
                            />
                            <h1 className="text-3xl mb-5 lg:text-4xl">
                                Our Journey
                            </h1>
                            <p className="text-sm text-gray-60">
                                Our story is one of continuous growth and
                                evolution. We started as a small team with big
                                dreams, determined to create a real estate
                                platform that transcended the ordinary. Over the
                                years, we've expanded our reach, forged valuable
                                partnerships, and gained the trust of countless
                                clients.
                            </p>
                        </div>

                        <ul className="grid grid-cols-2 justify-center my-10 text-center gap-2 sm:grid-cols-3 md:text-left">
                            <li className="space-y-1 border border-gray-15 px-2 py-5 rounded-lg xs:px-3 xs:py-8 md:py-5 h-auto lg:h-full lg:py-6">
                                <h4 className="text-xl font-bold">200+</h4>
                                <p className="text-xs text-gray-60">
                                    Happy Customers
                                </p>
                            </li>
                            <li className="space-y-1 border border-gray-15 px-2 py-5 rounded-lg xs:px-3 xs:py-8 md:py-5 h-auto lg:h-full lg:py-6">
                                <h4 className="text-xl font-bold">10k+</h4>
                                <p className="text-xs text-gray-60">
                                    Properties For Clients
                                </p>
                            </li>
                            <li className="space-y-1 col-span-2 border border-gray-15 px-2 py-5 rounded-lg xs:px-3 xs:py-8 sm:col-span-1 md:py-5 h-auto lg:h-full lg:py-6">
                                <h4 className="text-xl font-bold">16+</h4>
                                <p className="text-xs text-gray-60">
                                    Years of Experience
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="mx-5 grid py-8 xl:m-12 md:grid-cols-3 xl:mx-24 items-center">
                <Headline
                    sm_display="flex"
                    md_display="hidden"
                    secTitle="Our Values"
                    secDesc="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
                />
                <ValueCard />
            </section>

            <section className="mx-5 py-8 xl:m-12 xl:mx-24">
                <Headline
                    sm_display="hidden"
                    md_display=""
                    secTitle="Our Achievements"
                    secDesc="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
                />
                <AchievementCard />
            </section>

            <section className="mx-5 py-8 xl:m-12 xl:mx-24">
                <Headline
                    sm_display="hidden"
                    md_display=""
                    secTitle="Navigating the Estatein Experience"
                    secDesc="At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works."
                />

                <WindowSizeTracker renderContent={renderContent} />
            </section>

            <section className="mx-5 py-8 xl:mx-24">
                <Headline
                    sm_display="hidden"
                    secTitle="Meet the Estatein Team"
                    secDesc="At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality."
                />
                <TeamCard />
            </section>

            <section className="mx-5 py-8 xl:mx-24">
                <Headline
                    sm_display="hidden"
                    secTitle="Our Valued Clients"
                    secDesc="At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving"
                />
                <WindowSizeTracker renderContent={renderProfiles} />
                {/* <PaginationBtn
                    prev="01"
                    next="10"
                    d_BtnSm="hidden"
                    btnNavStyles="w-full justify-between"
                /> */}
                <div className="flex items-center justify-between gap-4 my-8 md:justify-normal">
                    <ButtonLeft btnStylesLeft="md:justify-end" />
                    <PaginationCount
                        prev="01"
                        next="10"
                        // extraStyles="-order-last"
                    />
                    <ButtonRight />
                </div>
            </section>
            <ExploreBanner />
        </>
    )
}

export default About
