'use client'
import React from 'react'
import PropertyCard from '../properties/PropertyCard'
import prop1 from '@/public/images/pro-sky.png'
import prop2 from '@/public/images/modern-prop.jpg'
import prop3 from '@/public/images/luxury-pool-villa.jpg'
import PaginationBtn from '../common/PaginationBtn'
import Headline from '../common/Headline'
import WindowSizeTracker from '@/components/common/WindowSizeTracker'

const propertiesList = [
    {
        img: prop1,
        name: 'Rustic Retreat Cottage',
        price: 550,
        desc: 'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community',
        bed: 3,
        bath: 3,
        category: 'Villa',
    },
    {
        img: prop2,
        name: 'Metropolitan Haven',
        price: 550,
        desc: 'A chic and fully-furnished 2-bedroom apartment with panoramic city views',
        bed: 2,
        bath: 2,
        category: 'Villa',
    },
    {
        img: prop3,
        name: 'Seaside Serenity Villa',
        price: 550,
        desc: 'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood',
        bed: 4,
        bath: 3,
        category: 'Villa',
    },
]

const Featured = () => {
    const renderContent = (windowSize: any) => {
        if (windowSize.width <= 640) {
            return <PropertyCard properties={propertiesList} count={1} />
        } else if (windowSize.width > 640 && windowSize.width <= 768) {
            return <PropertyCard properties={propertiesList} count={2} />
        } else {
            return <PropertyCard properties={propertiesList} count={3} />
        }
    }

    return (
        <section className="mx-5 py-8 xl:m-12">
            <Headline
                secTitle="Featured Properties"
                secDesc="Explore our handpicked selection of featured properties. Each
      listing offers a glimpse into exceptional homes and investments
      available through Estatein."
            />

            <WindowSizeTracker renderContent={renderContent} />

            <PaginationBtn
                prev="01"
                next="60"
                btnContent="View All Properties"
            />
        </section>
    )
}

export default Featured
