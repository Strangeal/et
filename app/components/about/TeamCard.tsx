import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import IonX from '@/public/icons/IonX.svg'
import IonSend from '@/public/icons/IonSend.svg'
import MaxImg from '@/public/images/max.png'
import SarahImg from '@/public/images/sarah.png'
import DavidImg from '@/public/images/David.png'
import MichaelImg from '@/public/images/Michael.png'

type Props = {}

const teamList = [
    {
        img: MaxImg,
        name: 'Max Mitchell',
        role: 'Founder',
    },
    {
        img: SarahImg,
        name: 'Sarah Johnson',
        role: 'Chief Real Estate Officer',
    },
    {
        img: DavidImg,
        name: 'David Brown',
        role: 'Head of Property Management',
    },
    {
        img: MichaelImg,
        name: 'Michael Turner',
        role: 'Legal Counsel',
    },
]

const TeamCard = (props: Props) => {
    return (
        <div className="grid sm:grid-cols-2 gap-5 lg:grid-cols-4 py-8">
            {teamList?.map((team) => (
                <div
                    key={team.name}
                    className="border border-gray-15 rounded-lg w-fit p-6"
                >
                    <div className="">
                        <Image
                            className="object-cover rounded-lg"
                            src={team.img}
                            width={500}
                            height={500}
                            alt="team image"
                        />
                        <Link
                            href="#"
                            className="flex rounded-3xl px-4 mx-auto py-1 bg-purple-60 w-fit relative bottom-4"
                        >
                            <Image
                                className="size-7 rounded-3xl min-w-9"
                                src={IonX}
                                width={32}
                                height={32}
                                alt="connect with name on twitter(X)"
                            />
                        </Link>
                    </div>
                    <div className="text-center my-6">
                        <h5 className="font-medium text-md">{team.name}</h5>
                        <p className="text-gray-60 text-sm shrink-0">
                            {team.role}
                        </p>
                    </div>
                    <div className="border border-gray-15 rounded-full bg-gray-08 p-1 flex items-center justify-between">
                        <p className="ml-6 text-sm">Say Hello 👋</p>
                        <Image
                            className="size-12 rounded-full bg-purple-60 p-2"
                            src={IonSend}
                            width={32}
                            height={32}
                            alt="send max a message"
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TeamCard
