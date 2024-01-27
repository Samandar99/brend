import React from 'react'
import Image from 'next/image'
import { Copyright } from 'lucide-react';
import { Phone } from 'lucide-react';
import { MapPin } from 'lucide-react';

function Footer() {
    return (
        <footer className='py-16 border-t'>
            <div className="max-w-[1194px] w-full px-4 mx-auto 2xl:block xl:block lg:block md:block sm:hidden xs:hidden">


                <div className='flex justify-between flex-wrap gap-y-8'>
                    <Image className='w-32' src="/icons/logo.svg" width={110} height={38} alt='logo' priority />
                    <div className='max-w-64 flex  gap-2'>
                        <div>
                            <MapPin size={24} color='#737373' />
                        </div>
                        <span className='text-base text-gray-500'>4517 Washington Ave. Manchester, Kentucky 39495</span>
                    </div>
                </div>



                <div className='flex items-end justify-between flex-wrap gap-y-7'>
                    <ul className='flex 2xl:mb-0 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0 xs:mb-6 flex-wrap 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row xs:flex-col gap-8 mt-8'>
                        <li><a href="#" className='font-medium'>About Us</a></li>
                        <li><a href="#" className='font-medium'>Events</a></li>
                        <li><a href="#" className='font-medium'>Membership</a></li>
                        <li><a href="#" className='font-medium'>For Partners</a></li>
                        <li><a href="#" className='font-medium'>Certification</a></li>
                        <li><a href="#" className='font-medium'>Rating</a></li>
                    </ul>
                    <a href="tel:+998(88)888 88 88" className='flex max-w-64 w-full gap-3 text-customSilver'><Phone /> +998 (88) 888 88 88</a>

                </div>


                <div className='flex justify-between gap-y-8 flex-wrap mt-72 items-center'>
                    <p className='flex gap-1'><Copyright /> <span>2024 IT Education Association. All right reserved</span></p>
                    <ul className='flex flex-wrap gap-4'>
                        <li><a href="#">

                            <Image src="/icons/linkden.svg" width={20} height={20} priority alt='linked icon' />
                        </a></li>
                        <li><Image src="/icons/twiter.svg" width={20} height={20} priority alt='twitter icon' /></li>
                        <li><a href="#"><Image src="/icons/facebook.svg" width={20} height={20} priority alt='facebook icon' /> </a></li>
                    </ul>

                </div>

            </div>
            <div className='max-w-[840px] w-full mx-auto px-4 2xl:hidden xl:hidden lg:hidden md:hidden sm:block xs:block'>
                <Image className='w-32 mb-8' src="/icons/logo.svg" width={110} height={38} alt='logo' priority />

                <div className='flex gap-28'>
                    <ul>
                        <li className='mt-3'><a href="#" className='font-medium '>About Us</a></li>
                        <li className='mt-3'><a href="#" className='font-medium mt-3'>Events</a></li>
                        <li className='mt-3'><a href="#" className='font-medium mt-3'>Membership</a></li>
                    </ul>
                    <ul>
                        <li className='mt-3'><a href="#" className='font-medium mt-3'>About Us</a></li>
                        <li className='mt-3'><a href="#" className='font-medium mt-3'>Events</a></li>
                        <li className='mt-3'><a href="#" className='font-medium mt-3'>Membership</a></li>
                    </ul>
                </div>
                <div className='flex w-full max-w-[240px] gap-3 mt-8'>
                    <div>
                        <MapPin size={24} color='#737373' />
                    </div>
                    <span className='text-base text-gray-500'>4517 Washington Ave. Manchester, Kentucky 39495</span>
                </div>

                <a href="tel:+998(88)888 88 88" className='flex max-w-64 w-full mt-6 gap-3 text-customSilver'><Phone /> +998 (88) 888 88 88</a>
                <div className='max-w-[90%] w-full border mx-auto mt-8'></div>
                <div>
                <p className='flex gap-1 mt-8 justify-center'><Copyright color='#737373'/> <span className='text-customSilver'>2024 ITEA. All right reserved</span></p>
                </div>


            </div>


        </footer>
    )
}

export default Footer
