import React from 'react'

type Props = {}

const RequestForm = (props: Props) => {
    return (
        <form className="border border-gray-15 rounded-lg px-5 py-8 mt-8 mb-12 md:px-8 md:py-12">
            <div className="gap-5 grid items-end sm:grid-cols-2 lg:grid-cols-4 md:gap-y-10">
                <div className="flex flex-col gap-3">
                    <label htmlFor="first_name" className="text-xs">
                        First Name
                    </label>
                    <input
                        className="bg-gray-10 border border-gray-40 h-12 rounded-lg px-4 text-xs text-gray-60 focus-within:outline-none"
                        type="text"
                        placeholder="Enter First Name"
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="last_name" className="text-xs">
                        Last Name
                    </label>
                    <input
                        className="bg-gray-10 border border-gray-40 h-12 rounded-lg px-4 text-xs text-gray-60 focus-within:outline-none"
                        type="text"
                        placeholder="Enter Last Name"
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="email" className="text-xs">
                        Email
                    </label>
                    <input
                        className="bg-gray-10 border border-gray-40 h-12 rounded-lg px-4 text-xs text-gray-60 focus-within:outline-none"
                        type="email"
                        placeholder="Enter Your Email"
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="phone" className="text-xs">
                        Phone
                    </label>
                    <input
                        className="bg-gray-10 border border-gray-40 h-12 rounded-lg px-4 text-xs text-gray-60 focus-within:outline-none"
                        type="number"
                        placeholder="Enter Phone Number"
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="location" className="text-xs">
                        Prefered Location
                    </label>
                    <select className="bg-gray-10 text-gray-60 border-r-8 h-12 border-gray-10 rounded-lg px-4 text-xs focus-within:outline-none outline outline-gray-40">
                        <option defaultValue="">Select Location</option>
                        <option value="">Carlifornia</option>
                        <option value="">Arizona</option>
                        <option value="">Miami</option>
                        <option value="">Florida</option>
                        <option value="">Nevara</option>
                    </select>
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="property_type" className="text-xs">
                        Property Type
                    </label>
                    <select className="bg-gray-10 text-gray-60 border-r-8 h-12 border-gray-10 rounded-lg px-4 text-xs focus-within:outline-none outline outline-gray-40">
                        <option defaultValue="">Select Property Type</option>
                        <option value="">Houses</option>
                        <option value="">Villa</option>
                        <option value="">Apartment</option>
                        <option value="">Office</option>
                    </select>
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="bathrooms" className="text-xs">
                        No. of Bathrooms
                    </label>
                    <select className="bg-gray-10 text-gray-60 border-r-8 h-12 border-gray-10 rounded-lg px-4 text-xs focus-within:outline-none outline outline-gray-40">
                        <option defaultValue="">Select no. of Bathrooms</option>
                        <option value="">1 - 3</option>
                        <option value="">3 - 5</option>
                        <option value="">5+</option>
                    </select>
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="bedrooms" className="text-xs">
                        No. of Bedrooms
                    </label>
                    <select className="bg-gray-10 text-gray-60 border-r-8 h-12 border-gray-10 rounded-lg px-4 text-xs focus-within:outline-none outline outline-gray-40">
                        <option defaultValue="">Select no. of Bedrooms</option>
                        <option value="">1 - 3</option>
                        <option value="">3 - 5</option>
                        <option value="">5+</option>
                    </select>
                </div>
                <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-2">
                    <label htmlFor="property_type" className="text-xs">
                        Budget
                    </label>
                    <select className="bg-gray-10 text-gray-60 border-r-8 h-12 border-gray-10 rounded-lg px-4 text-xs focus-within:outline-none outline outline-gray-40">
                        <option defaultValue="">Select Budget</option>
                        <option value="">$10,000 - $50,000</option>
                        <option value="">$50,000 - $80,000</option>
                        <option value="">$80,000 - $150,000</option>
                    </select>
                </div>

                <div className="flex flex-col gap-3">
                    <label htmlFor="email" className="text-xs">
                        Preferred Contact Method
                    </label>
                    <input
                        className="bg-gray-10 border border-gray-40 h-12 rounded-lg px-4 text-xs text-gray-60 focus-within:outline-none"
                        type="number"
                        placeholder="Enter Your Number"
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <input
                        className="bg-gray-10 border border-gray-40 h-12 rounded-lg px-4 text-xs text-gray-60 focus-within:outline-none"
                        type="email"
                        placeholder="Enter Your Email"
                    />
                </div>

                <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-4">
                    <label htmlFor="email" className="text-xs">
                        Message
                    </label>
                    <textarea
                        className="bg-gray-10 border border-gray-40 text-gray-60 h-20 rounded-lg px-4 py-2 text-xs focus-within:outline-none md:h-28"
                        placeholder="Enter your Message here..."
                        cols={30}
                        rows={10}
                    ></textarea>
                </div>
            </div>
            <div className="mt-5 md:flex md:items-center md:justify-between">
                <div className="flex items-center gap-2 mb-3">
                    <div>
                        <input type="checkbox" className="w-3 h-3" />
                    </div>
                    <label htmlFor="" className="text-gray-60 text-xs">
                        I agree with Terms of Use and Privacy Policy
                    </label>
                </div>
                <button
                    className="text-xs font-light rounded-lg bg-purple-60 px-6 py-3 w-full md:w-auto"
                    type="submit"
                >
                    Send Your Message
                </button>
            </div>
        </form>
    )
}

export default RequestForm
