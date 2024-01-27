'use client'
import React from 'react'
import Image from 'next/image'
import { Calendar } from '@/components/ui/calendar'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react';


const css = `
  .my-today {
    background: #40B3E7;
    border-radius: 50%;
    color: #fff; 
 }

`


function Events() {

    const [date, setDate] = React.useState(new Date())
    return (
        <>
            <style>
                {css}
            </style>
            <section>
                <div className='max-w-[1194px] w-full px-4 mx-auto mt-16'>
                    <h1 className='font-semibold text-[68px]'>Events</h1>
                    <p className='max-w-[746px] w-full text-customSilver text-lg'>Keep your business account and all your finance needs safely organized under one roof. Manage money quickly, easily & efficiently. Whether you’re alone or leading a team.</p>

                    <div className='mt-16'>
                        <Image className='w-full' src="/images/events.png" width={1160} height={620} alt='Event image' priority />
                    </div>

                </div>
            </section>

            <section className='bg-customGray'>
                <div className='max-w-[1194px] w-full px-4 mx-auto py-[120px]'>
                    <span className='text-customSilver text-lg font-medium'>New events</span>
                    <h2 className='text-customBlack text-[52px] font-semibold'>Upcoming</h2>
                    <p className='max-w-[601px] w-full text-customSilver text-lg mt-4'>Hendrerit fames metus leo ut orci pretium. Sit vitae montes egestas montes mauris. Auctor vitae neque urna nam nunc pellentesque.</p>


                    <div className='flex 2xl:justify-start xl:justify-start lg:justify-center md:justify-center sm:justify-center xs:justify-center mt-16 flex-wrap gap-16'>
                        <Calendar
                            mode="single"
                            selected={date}
                            // onSelect={setDate}
                            className="max-w-[328px] w-full border items-center bg-white grow justify-center min-h-[372px]"

                            modifiersClassNames={{

                                today: 'my-today'
                            }}
                        />
                        <div className='max-w-[768px] w-full'>
                            <b className='block text-2xl'>Octaber</b>
                            <div className='bg-white max-w-[768px] mt-4 py-6 px-6 border'>
                                <h3 className='font-semibold  2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl xs:text-2xl mb-3'>ICT WEEK Uzbekistan 2024</h3>
                                <span className='text-customSilver'>October 11, 2024</span><span className='ml-4 text-customSilver'>Yunsobot st, Tashkent</span>
                            </div>
                            <div className='bg-white max-w-[768px] mt-4 py-6 px-6 border'>
                                <h3 className='font-semibold text-4xl mb-3 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl xs:text-2xl'>DIGITAL LEADERSHIP FORUM 2024</h3>
                                <span className='text-customSilver'>October 11, 2024</span><span className='ml-4 text-customSilver'>Yunsobot st, Tashkent</span>
                            </div>
                        </div>


                    </div>


                </div>
            </section>
            <section className='flex flex-col gap-10 pt-24 pb-24'>
                <div className='max-w-[1194px] w-full 2xl:justify-start xl:justify-start lg:justify-center md:justify-center sm:justify-center xs:justify-center border py-4 px-4 mx-auto bg-white flex flex-wrap gap-12'>
                    <Image className='object-cover' src="/images/eventsfoto-1.png" width={500} height={350} alt='Digital Leadership Forum' priority />
                    <div className='flex flex-col justify-around max-w-[556px] 2xl:max-w-[556px] xl:max-w-[556px] lg:max-w-[500px] md:max-w-[500px] sm:max-w-[500px] xs:max-w-[500px] w-full 2xl:gap-0 xl:gap-0 lg:gap-5 md:gap-5 sm:gap-5 xs:gap-5'>
                        <div>
                            <h3 className='font-semibold text-[32px]'>Digital Leadership Forum</h3>
                            <p className='mt-4 text-customSilver self-stretch'>Vel egestas ultrices condimentum consectetur enim non elit aenean lacus. Justo rutrum libero urna id quis ipsum. Dictumst vel posuere nec lobortis. Porttitor pretium aenean non pellentesque nunc ultrices commodo sagittis sed. Vulputate duis quis lorem lectus. Et ut viverra eros vulputate.</p>
                        </div>
                        <Link href={'/events/category'} className='flex justify-center items-center gap-2 rounded-full max-w-[160px] w-full bg-primary py-4'>
                            <span className='text-white'>Learn More</span>
                            <ArrowRight color='#fff' />
                        </Link>
                    </div>

                </div>

                <div className='max-w-[1194px] w-full 2xl:justify-start xl:justify-start lg:justify-center md:justify-center sm:justify-center xs:justify-center border py-4 px-4 mx-auto bg-white flex flex-wrap gap-12'>
                    <Image className='object-cover' src="/images/eventsfoto-2.png" width={500} height={350} alt='Digital Leadership Forum' priority />
                    <div className='flex flex-col justify-around max-w-[556px] 2xl:max-w-[556px] xl:max-w-[556px] lg:max-w-[500px] md:max-w-[500px] sm:max-w-[500px] xs:max-w-[500px] w-full 2xl:gap-0 xl:gap-0 lg:gap-5 md:gap-5 sm:gap-5 xs:gap-5'>
                        <div>
                            <h3 className='font-semibold text-[32px]'>ICT WEEK 2023</h3>
                            <p className='mt-4 text-customSilver self-stretch'>Vel egestas ultrices condimentum consectetur enim non elit aenean lacus. Justo rutrum libero urna id quis ipsum. Dictumst vel posuere nec lobortis. Porttitor pretium aenean non pellentesque nunc ultrices commodo sagittis sed. Vulputate duis quis lorem lectus. Et ut viverra eros vulputate.</p>
                        </div>
                        <Link href={'#'} className='flex justify-center items-center gap-2 rounded-full max-w-[160px] w-full bg-primary py-4'>
                            <span className='text-white'>Learn More</span>
                            <ArrowRight color='#fff' />
                        </Link>
                    </div>

                </div>
                <div className='max-w-[1194px] w-full 2xl:justify-start xl:justify-start lg:justify-center md:justify-center sm:justify-center xs:justify-center border py-4 px-4 mx-auto bg-white flex flex-wrap gap-12'>
                    <Image className='object-cover' src="/images/eventsfoto-3.png" width={500} height={350} alt='Digital Leadership Forum' priority />
                    <div className='flex flex-col justify-around max-w-[556px] 2xl:max-w-[556px] xl:max-w-[556px] lg:max-w-[500px] md:max-w-[500px] sm:max-w-[500px] xs:max-w-[500px] w-full 2xl:gap-0 xl:gap-0 lg:gap-5 md:gap-5 sm:gap-5 xs:gap-5'>
                        <div>
                            <h3 className='font-semibold text-[32px]'>GDG DevFest 2023 Tashkent</h3>
                            <p className='mt-4 text-customSilver self-stretch'>Vel egestas ultrices condimentum consectetur enim non elit aenean lacus. Justo rutrum libero urna id quis ipsum. Dictumst vel posuere nec lobortis. Porttitor pretium aenean non pellentesque nunc ultrices commodo sagittis sed. Vulputate duis quis lorem lectus. Et ut viverra eros vulputate.</p>
                        </div>
                        <Link href={'#'} className='flex justify-center items-center gap-2 rounded-full max-w-[160px] w-full bg-primary py-4'>
                            <span className='text-white'>Learn More</span>
                            <ArrowRight color='#fff' />
                        </Link>
                    </div>

                </div>
            </section>


        </>
    )
}

export default Events
