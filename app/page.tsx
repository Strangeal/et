import Image from 'next/image'
import Link from 'next/link'
import BuildingLg from '@/public/images/Building-lg.png'
import IonHome from '@/public/icons/IonHome.svg'
import IonValue from '@/public/icons/IonValue.svg'
import IonBuilding from '@/public/icons/IonBuilding.svg'
import IonSun from '@/public/icons/IonSun.svg'
import arrowSide from '@/public/icons/IonArrowUpSide.svg'
import arrowSideWhite from '@/public/icons/IonArraySide-white.svg'
import curveText from '@/public/icons/curve-text.svg'
import Featured from '@/components/home/Featured'
import Testimonial from '@/components/home/Testimonial'
import Faq from '@/components/home/Faq'
import ExploreBanner from './components/common/ExploreBanner'

export default function Home() {
    const valuesList = [
        {
            img: IonHome,
            desc: 'Find Your Dream Home',
        },
        {
            img: IonValue,
            desc: 'Unlock Property Value',
        },
        {
            img: IonBuilding,
            desc: 'Effortless Property Management',
        },
        {
            img: IonSun,
            desc: 'Smart Investment Informed Decisions',
        },
    ]
    return (
        <>
            <section className="mx-5 md:mx-0">
                <div className="md:grid md:grid-cols-2">
                    <div className="relative mb-10 md:order-last md:mb-0">
                        <div className="bg-hero-abstract-lg bg-no-repeat border border-gray-15 rounded-lg my-10 md:my-auto md:h-full md:border-none w-full">
                            <Image
                                src={BuildingLg}
                                className="text w-full h-full"
                                width={500}
                                height={500}
                                alt="hero building image"
                            />
                        </div>
                        <div className="absolute left-0 -bottom-10 md:top-10 md:-left-14 lg:top-20">
                            <div className="bg-[#000] border border-gray-15 w-fit rounded-full p-10 relative">
                                <Link href="#">
                                    <Image
                                        className="size-12 relative z-10 bg-gray-10 border border-gray-15 rounded-full p-4 cursor-pointer"
                                        src={arrowSideWhite}
                                        width={500}
                                        height={500}
                                        alt="arrow up image"
                                    />
                                </Link>
                                <Image
                                    className="size-28 absolute top-2 left-2 block"
                                    src={curveText}
                                    width={500}
                                    height={500}
                                    alt="circle image"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="md:mx-auto xl:px-20 my-auto md:w-11/12 md:py-14">
                        <div className="text-wrap md:pr-10">
                            <h1 className="text-3xl mb-5 lg:text-4xl">
                                Discover Your Dream Property with Estatein
                            </h1>
                            <p className="text-sm text-gray-60">
                                Your journey to finding the perfect property
                                begins here. Explore our listings to find the
                                home that matches your dreams.
                            </p>
                        </div>

                        <div className="flex items-center flex-col gap-3 py-10">
                            <button
                                type="button"
                                className="w-full text-xs border border-gray-15 px-7 py-4 rounded-lg"
                            >
                                Learn More
                            </button>
                            <button
                                type="button"
                                className="w-full text-xs bg-purple-60 px-7 py-4 rounded-lg"
                            >
                                Browse Properties
                            </button>
                        </div>

                        <ul className="grid grid-cols-2 justify-center text-center gap-2 sm:grid-cols-3 md:text-left">
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

                <div className="grid grid-cols-2 gap-2 text-center border border-gray-15 p-3 rounded-lg shadow-light my-10 md:grid-cols-4 md:my-0">
                    {valuesList.map((value, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col items-center bg-gray-10 border border-gray-15 rounded-lg p-5 gap-2 xs:px-10 md:px-2 md:py-5 md:gap-2 lg:gap-5 lg:py-7"
                        >
                            <Image
                                src={value.img}
                                className="size-12"
                                width={32}
                                height={32}
                                alt="dream property"
                            />
                            <p className="text-xs">{value.desc}</p>
                            <button
                                type="button"
                                className="absolute right-2 top-2"
                            >
                                <Image
                                    src={arrowSide}
                                    className="size-5 lg:size-6"
                                    width={32}
                                    height={32}
                                    alt="Arrow"
                                />
                            </button>
                        </div>
                    ))}
                </div>
            </section>
            <Featured />
            <Testimonial />
            <Faq />
            <ExploreBanner />
        </>
    )
}
