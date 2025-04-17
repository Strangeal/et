import React from 'react'

type Props = {}

const achievementsList = [
    {
        title: '3+ Years of Excellence',
        desc: "With over 3 years in the industry, we've amassed a wealth of knowledge and experience.",
    },
    {
        title: 'Happy Clients',
        desc: 'Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.',
    },
    {
        title: 'Industry Recognition',
        desc: "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
    },
]

const AchievementCard = (props: Props) => {
    return (
        <div className="grid gap-5 md:grid-cols-3 mt-8">
            {achievementsList?.map((list, index) => (
                <div
                    key={index}
                    className="space-y-5  p-5 shadow-light border border-gray-15 rounded-lg"
                >
                    <h5 className="text-md">{list.title}</h5>
                    <p className="text-sm text-gray-60">{list.desc}</p>
                </div>
            ))}
        </div>
    )
}

export default AchievementCard
