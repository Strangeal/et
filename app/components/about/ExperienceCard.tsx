import React from 'react'

type Props = {}

// #703BF7, #703BF700
// #703BF7, #703BF700
const ExperienceCard = ({ experiences, count }: any) => {
    return (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3  pt-8 md:pt-12">
            {experiences
                ?.slice(0, count)
                .map((experience: any, index: number) => (
                    <div key={index} className="">
                        <h6 className="text-sm font-light border-l border-purple-60 pl-5 pb-3">
                            Step {experience.step}
                        </h6>
                        <div className="space-y-5 border border-gray-15 px-5 py-7 rounded-e-lg rounded-bl-lg bg-gradient-to-tl from-[#703BF700] from-90% to-[#703bf799] to-100% sm:space-y-0">
                            <h5 className="text-md font-medium sm:h-10">
                                {experience.title}
                            </h5>
                            <p className="text-sm text-gray-60 sm:h-28">
                                {experience.desc}
                            </p>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default ExperienceCard
