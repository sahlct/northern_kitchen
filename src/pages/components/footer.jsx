import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='flex flex-col sm:flex-row justify-between px-6 sm:px-20 py-10 sm:py-20'>
                {/* Address and Branding */}
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex gap-2 items-center'>
                            <p className="text-sm font-semibold text-blue-700">ADDRESS:</p>
                            <p className="text-gray-600">6391 Elgin St. Celina, Delaware 10299</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <p className="text-sm font-semibold text-blue-700">PHONE:</p>
                            <p className="text-gray-600">+84 1102 2703</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <p className="text-sm font-semibold text-blue-700">EMAIL:</p>
                            <p className="text-gray-600">hello@northernpro.com</p>
                        </div>
                    </div>
                    <div className="brand flex gap-2 items-center">
                        <div className="logo w-10 h-10">
                            <img src="https://i.pinimg.com/originals/71/f1/b4/71f1b48e456e173f305facb9e8d99b47.png" alt="logo" className='w-full h-full' />
                        </div>
                        <div className="b_name text-2xl font-semibold">Northern Pro</div>
                    </div>
                </div>

                {/* Newsletter and Social Media */}
                <div className='flex flex-col items-start sm:items-end gap-6 mt-8 sm:mt-0'>
                    <div className='flex flex-col gap-3 w-full sm:w-auto'>
                        <p className="text-sm font-semibold text-left text-blue-700">NEWSLETTER:</p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Your email here"
                                className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
                            />
                            <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 w-full sm:w-auto">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex gap-4 justify-start w-full">
                        <div
                            className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-blue-700"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
                        </div>
                        <div
                            className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-blue-700"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /></svg>
                        </div>
                        <div
                            className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-blue-700"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className='h-14 bg-[#2947A9] text-gray-300 px-6 sm:px-20 text-center sm:text-start flex items-center justify-center sm:justify-start text-xs sm:text-base'>
                NorthernPro Company © 2022. All Rights Reserved
            </div>
        </>
    )
}
