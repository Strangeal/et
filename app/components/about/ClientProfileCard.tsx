import Image from 'next/image'
import React from 'react'
import IonMenu4 from '@/public/icons/Ion4Menu.svg'
import IonCategory from '@/public/icons/IonElectric.svg'

type Props = {}

const ClientProfileCard = ({ profiles, count }: any) => {
    return (
        <div className="grid gap-5 sm:grid-cols-2  pt-8 md:pt-12">
            {profiles?.slice(0, count).map((profile: any, index: number) => (
                <div
                    key={index}
                    className="border border-gray-15 shadow-light p-5 rounded-lg"
                >
                    <div className="md:flex md:items-center md:justify-between">
                        <div className="space-y-1.5">
                            <p className="text-sm font-light text-gray-60">
                                {profile.year}
                            </p>
                            <h5 className="text-lg font-medium">
                                {profile.title}
                            </h5>
                        </div>

                        <button
                            className="bg-gray-10 shrink-0 rounded-lg text-xs border border-gray-15 p-4 my-5 w-full md:w-fit"
                            type="button"
                        >
                            Visit Website
                        </button>
                    </div>

                    <div className="grid grid-cols-2 items-start mb-5">
                        <div className="space-y-2">
                            <div className="flex items-center gap-1">
                                <Image
                                    className="size-5"
                                    src={IonMenu4}
                                    width={32}
                                    height={32}
                                    alt=""
                                />
                                <p className="text-xs text-gray-60">Domain</p>
                            </div>
                            <h6 className="text-sm">{profile.domain}</h6>
                        </div>

                        <div className="border-l border-gray-15 pl-4 space-y-2">
                            <div className="flex items-center gap-1">
                                <Image
                                    className="size-5"
                                    src={IonCategory}
                                    width={32}
                                    height={32}
                                    alt=""
                                />
                                <p className="text-xs text-gray-60">Category</p>
                            </div>
                            <h6 className="text-sm">{profile.category}</h6>
                        </div>
                    </div>

                    <div className="border border-gray-15 rounded-lg space-y-3 p-5 md:py-7">
                        <p className="text-sm text-gray-60">
                            What They Said 🤗
                        </p>
                        <p className="text-sm">{profile.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ClientProfileCard
