import React from 'react'
import NetworkIon from '@/public/icons/network_ion.svg'
import StrategyIon from '@/public/icons/strategy_ion.svg'
import NegotiationIon from '@/public/icons/negotiation_ion.svg'
import MegaphoneIon from '@/public/icons/megaphone_ion.svg'

import MenuIon from '@/public/icons/menuPlus_ion.svg'
import EaseIon from '@/public/icons/ease_ion.svg'
import StarsIon from '@/public/icons/3stars_ion.svg'
import SunIon from '@/public/icons/sun_ion.svg'
import Headline from '../common/Headline'
import { ServiceBanner, ServiceCard } from './UnlockCard'

type Props = {}

const unlockMany = {
    values: [
        {
            name: 'Unlock Property Value',
            desc: 'Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey',
            items: [
                {
                    title: 'Valuation Mastery',
                    desc: 'Discover the true worth of your property with our expert valuation services.',
                    icon: NetworkIon,
                },
                {
                    title: 'Strategic Marketing',
                    desc: 'Selling a property requires more than just a listing; it demands a strategic marketing.',
                    icon: StrategyIon,
                },
                {
                    title: 'Negotiation Wizardry',
                    desc: 'Negotiating the best deal is an art, and our negotiation experts are masters of it.',
                    icon: NegotiationIon,
                },
                {
                    title: 'Closing Success',
                    desc: 'A successful sale is not complete until the closing. We guide you through the intricate closing process.',
                    icon: MegaphoneIon,
                },
            ],
        },
    ],
    management: [
        {
            name: 'Effortless Property Management',
            desc: "Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you.",
            items: [
                {
                    title: 'Tenant Harmony',
                    desc: 'Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.',
                    icon: MenuIon,
                },
                {
                    title: 'Maintenance Ease',
                    desc: 'Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.',
                    icon: EaseIon,
                },
                {
                    title: 'Financial Peace of Mind',
                    desc: 'Managing property finances can be complex. Our financial experts take care of rent collection',
                    icon: StarsIon,
                },
                {
                    title: 'Legal Guardian',
                    desc: 'Stay compliant with property laws and regulations effortlessly.',
                    icon: SunIon,
                },
            ],
        },
    ],
    smart: [
        {
            name: 'Smart Investments, Informed Decisions',
            desc: 'Building a real estate portfolio requires a strategic approach.',
            items: [
                {
                    title: 'Unlock Your Investment Potential',
                    desc: 'Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.',
                },
                {
                    title: 'Market Insight',
                    desc: 'Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions',
                },
                {
                    title: 'ROI Assessment',
                    desc: 'Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments Customized Strategies',
                },
                {
                    title: 'Customized Strategies',
                    desc: 'Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs Diversification Mastery.',
                },
                {
                    title: 'Diversification Mastery',
                    desc: 'Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations.',
                },
            ],
        },
    ],
}

const ServiceItems = (props: Props) => {
    return (
        <div className="my-9 space-y-8">
            {Object.keys(unlockMany).map((key) => {
                return unlockMany[key].map((item) => (
                    <div className=" last:bg-gray-30">
                        <Headline
                            secTitle={item.name}
                            secDesc={item.desc}
                            sm_display="hidden"
                        />

                        <div className="grid gap-4 sm:grid-cols-2 mt-5 md:grid-cols-3 ">
                            {item.items.map((service) => (
                                <ServiceCard
                                    title={service.title}
                                    desc={service.desc}
                                    icon={service.icon}
                                />
                            ))}
                            <div className="sm:col-span-2 order-first">
                                <ServiceBanner />
                            </div>
                        </div>
                    </div>
                ))
            })}
        </div>
    )
}

export default ServiceItems
