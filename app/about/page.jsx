'use client';
import React from 'react';
import { LayoutGrid } from 'lucide-react';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Facebook } from 'lucide-react';

import { ArrowRight } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { CircleUser } from 'lucide-react';
import { Trophy } from 'lucide-react';
import { Award } from 'lucide-react';
import { Smile } from 'lucide-react';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


// SwiperCore.use([Navigation]);
function About() {




    return (
        <>
            <section className='bg-customGray py-[120px]'>
                <div className='max-w-[856px] mx-auto text-center'>
                    <div className='max-w-32 bg-primary mx-auto flex mb-4 justify-center gap-2 rounded-full items-center py-[7px]'>
                        <LayoutGrid color='#fff' /> <span className='text-white text-sm font-medium'>About Us</span>

                    </div>
                    <h1 className='font-semibold text-6xl 2xl:text-6xl xl:text-6xl lg:text-4xl md:text-4xl sm:text-4xl xs:text-4xl leading-[120%]'>Great things in business are never done by one person. They’re done by a team of people</h1>
                    <h4 className='text-gray-500 mt-4 max-w-[690px] mx-auto'>Lorem ipsum dolor sit amet consectetur. Ac aliquet felis nullam et. Eget nulla eget sed in risus viverra. Aliquam tellus pretium pharetra elementum dis adipiscing ac congue fringilla.</h4>
                </div>
            </section>

            <section className='mt-[120px] 2xl:mt-[120px] xl:mt-[120px] lg:mt-[60px] md:mt-[50px] sm:mt-[50px] xs:mt-[50px]'>
                <div className='max-w-[1190px] w-full px-4 py-4 mx-auto'>
                    <span>Team</span>
                    <h2 className='2xl:text-[52px] xl:text-[52px] lg:text-[40px] md:text-[40px] sm:text-[35px] xs:text-[26px] mt-4 font-semibold max-w-[800px] leading-[120%]'>Meet the behind masterminds
                        of IT Education Assosation</h2>
                    <p className='text-gray-500 text-lg max-w-[850px] mt-4'>The IT Education Association consists of professional employees and leaders of their sph. The IT Education Association team is always ready to get into account and solve complex issues</p>
                </div>

                <div className='max-w-[1190px] w-full px-4 py-4 mx-auto'>
                    <p className='text-gray-400 text-2xl mt-20 mb-8 font-semibold'>Leadership</p>
                    <div className='border bg-customGray flex 2xl:flex-row 2xl:items-start xl:items-start lg:items-start xl:flex-row lg:flex-row md:flex-col md:items-center sm:flex-col sm:items-center xs:flex-col xs:items-center mb-8'>
                        <div className='max-w-80 w-full py-10 px-10'>
                            <Image className='w-60 object-cover' src="/images/director.png" width={240} height={256} alt='leader-foto' />
                            <b className='block mt-[32px] text-[32px]'>Nodir Kodirov</b>
                            <p className='mt-3 text-gray-400 text-lg'>Director</p>

                            <div className='flex mt-8 gap-4'>
                                <a href="#"><Linkedin color='#666D80' size={27} /></a>
                                <a href="#"><Twitter color='#666D80' size={27} /></a>
                                <a href="#"><Facebook color='#666D80' size={27} /></a>
                            </div>


                        </div>

                        <div className='py-10 2xl:px-10 xl:px-10 lg:px-10 md:px-10 sm:px-10 xs:px-0 max-w-[1040px] border-l flex-wrap w-full'>
                            <div className='bg-white shadow-sm text-center flex flex-col items-center px-8 py-8'>
                                <Quote size={40} color='#D4D4D4' />
                                <p className='text-customBlack text-lg leading-[150%] mt-8 mb-8'> You can’t connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. You have to trust in something — your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life.</p>

                                <p className='text-customBlack text-lg'>—  Nodir Kodirov</p>
                            </div>


                            <Accordion type="single" collapsible className="w-full mt-8">
                                <AccordionItem value="item-1" className="border bg-white px-2 mb-3" defaultValue="item-1">
                                    <AccordionTrigger className="truncate font-semibold text-lg">Biography</AccordionTrigger>
                                    <AccordionContent className="text-gray-400">
                                        <p className='text-base'>Lorem ipsum dolor sit amet consectetur. Porttitor sagittis nisl egestas amet convallis erat ultrices. Risus eleifend elementum nibh praesent interdum pellentesque est id. Eu feugiat morbi dictum imperdiet interdum lacus. Gravida nisi malesuada rhoncus amet. Et praesent sed molestie purus risus nulla sit proin. Eget dignissim nunc ipsum adipiscing elementum viverra viverra mollis pellentesque. Vulputate nunc nunc phasellus ut massa.</p>

                                        <div className='mt-3'>
                                            <h3 className='text-customBlack text-base font-medium mb-2'>Junior Software Developer at Nexus Innovations (2008-2010)</h3>
                                            <p className='text-base'>In his early career, Nodir began as a Junior Software Developer at Nexus Innovations, a local software development firm. This position allowed him to hone his coding skills and gain hands-on experience in software development.</p>
                                        </div>
                                        <div className='mt-3'>
                                            <h3 className='text-customBlack font-medium mb-2 text-base'>Software Engineer at QuantumTech Solutions (2010-2013)</h3>
                                            <p className='text-base'>Recognizing Nodir s potential, QuantumTech Solutions hired him as a Software Engineer. During this period, he contributed to various projects, demonstrating his problem-solving abilities and catching the attention of senior management.</p>
                                        </div>
                                        <div className='mt-3'>
                                            <h3 className='text-customBlack font-medium mb-2 text-base'>Lead Developer at InnovateWare Inc. (2013-2015)</h3>
                                            <p className='text-base'>Nodir took on the role of Lead Developer at InnovateWare Inc., a startup known for its cutting-edge software solutions. Here, he led a dynamic team in developing innovative applications and played a pivotal role in the companys early successes</p>
                                        </div>
                                        <div className='mt-3'>
                                            <h3 className='text-customBlack font-medium mb-2 text-base'>Project Manager at DataDynamics Ltd. (2015-2017)</h3>
                                            <p className='text-base'>Seeking to broaden his skill set, Nodir transitioned into a Project Manager role at DataDynamicsLtd. This experience allowed him to understand the intricacies of project management, from planning to execution, and strengthened his leadership capabilities.</p>
                                        </div>
                                        <div className='mt-3'>
                                            <h3 className='text-customBlack font-medium mb-2 text-base'>CTO at ByteCraft Innovations (2017-2019)</h3>
                                            <p className='text-base'>Nodirs journey into executive leadership began when he assumed the role of Chief Technology Officer (CTO) at ByteCraft Innovations, a company focused on developing cutting-edge technologies. Here, he spearheaded technological advancements, contributing to the companys reputation for innovation.</p>
                                        </div>
                                        <div className='mt-3'>
                                            <h3 className='text-customBlack font-medium mb-2 text-base'>Co-founder and CEO at Neural Nexus (2019-2022)</h3>
                                            <p className='text-base'>Eager to shape his own vision, Nodir co-founded Neural Nexus, a startup dedicated to pushing the boundaries of machine learning and artificial intelligence. As CEO, he led the company through its formative years, establishing it as a trailblazer in the tech industry.</p>
                                        </div>


                                    </AccordionContent>
                                </AccordionItem>


                                <AccordionItem value="item-2" className="border bg-white px-2 mb-3">
                                    <AccordionTrigger className="font-semibold text-lg">History of organization</AccordionTrigger>
                                    <AccordionContent className="text-gray-400">
                                        <div>
                                            <b className='text-black text-base'>2022. Organization was established</b>
                                            <p className='text-gray-400 mt-1 text-base'>IT - Education Association is a non-governmental non-profit organization aimed at the development and support of education in the field of information and communication technologies.</p>
                                        </div>
                                        <div className='mt-3'>
                                            <b className='text-black text-base'>Following are defined as the main tasks of the IT-educational association</b>
                                            <p className='mt-1 text-base text-gray-400'>Supporting of educational organizations operating in the field of ICT Providing intellectual support in the formation of a single ecosystem in ICT education that takes into account the requirements of the global market;
                                                Introduction of a unified certification system in the field of information and communication technologies;
                                                Formation of the rating of private educational centers in the field and its continuous maintenance;
                                                Implementation of projects on using the experience of compatriots abroad for the development of IT education in Uzbekistan.
                                            </p>
                                        </div>


                                    </AccordionContent>
                                </AccordionItem>



                            </Accordion>
                        </div>



                    </div>
                    <div className='border bg-customGray flex 2xl:flex-row 2xl:items-start xl:items-start lg:items-start xl:flex-row lg:flex-row md:flex-col md:items-center sm:flex-col sm:items-center xs:flex-col xs:items-center mb-8'>
                        <div className='max-w-80 w-full py-10 px-10'>
                            <Image className='w-60 object-cover' src="/images/director.png" width={240} height={256} alt='leader-foto' />
                            <b className='block mt-[32px] text-[32px]'>Nodir Kodirov</b>
                            <p className='mt-3 text-gray-400 text-lg'>Director</p>

                            <div className='flex mt-8 gap-4'>
                                <a href="#"><Linkedin color='#666D80' size={27} /></a>
                                <a href="#"><Twitter color='#666D80' size={27} /></a>
                                <a href="#"><Facebook color='#666D80' size={27} /></a>
                            </div>


                        </div>

                        <div className='py-10 2xl:px-10 xl:px-10 lg:px-10 md:px-10 sm:px-10 xs:px-0 max-w-[1040px] border-l flex-wrap w-full'>
                            <div className='bg-white shadow-sm text-center flex flex-col items-center px-8 py-8'>
                                <Quote size={40} color='#D4D4D4' />
                                <p className='text-customBlack text-lg leading-[150%] mt-8 mb-8 '> You can’t connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. You have to trust in something — your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life.</p>

                                <p className='text-customBlack text-lg'>—  Nodir Kodirov</p>
                            </div>


                            <Accordion type="single" collapsible className="w-full mt-8">
                                <AccordionItem value="item-1" className="border bg-white px-2 mb-3" defaultValue="item-1">
                                    <AccordionTrigger className="truncate font-semibold text-lg">Biography</AccordionTrigger>
                                    <AccordionContent className="text-gray-400">
                                        <p className='text-base'>Lorem ipsum dolor sit amet consectetur. Porttitor sagittis nisl egestas amet convallis erat ultrices. Risus eleifend elementum nibh praesent interdum pellentesque est id. Eu feugiat morbi dictum imperdiet interdum lacus. Gravida nisi malesuada rhoncus amet. Et praesent sed molestie purus risus nulla sit proin. Eget dignissim nunc ipsum adipiscing elementum viverra viverra mollis pellentesque. Vulputate nunc nunc phasellus ut massa.</p>

                                        <div className='mt-3'>
                                            <h3 className='text-customBlack text-base font-medium mb-2'>Junior Software Developer at Nexus Innovations (2008-2010)</h3>
                                            <p className='text-base'>In his early career, Nodir began as a Junior Software Developer at Nexus Innovations, a local software development firm. This position allowed him to hone his coding skills and gain hands-on experience in software development.</p>
                                        </div>
                                        <div className='mt-3'>
                                            <h3 className='text-customBlack font-medium mb-2 text-base'>Software Engineer at QuantumTech Solutions (2010-2013)</h3>
                                            <p className='text-base'>Recognizing Nodir s potential, QuantumTech Solutions hired him as a Software Engineer. During this period, he contributed to various projects, demonstrating his problem-solving abilities and catching the attention of senior management.</p>
                                        </div>
                                        <div className='mt-3'>
                                            <h3 className='text-customBlack font-medium mb-2 text-base'>Lead Developer at InnovateWare Inc. (2013-2015)</h3>
                                            <p className='text-base'>Nodir took on the role of Lead Developer at InnovateWare Inc., a startup known for its cutting-edge software solutions. Here, he led a dynamic team in developing innovative applications and played a pivotal role in the company s early successes</p>
                                        </div>
                                        <div className='mt-3'>
                                            <h3 className='text-customBlack font-medium mb-2 text-base'>Project Manager at DataDynamics Ltd. (2015-2017)</h3>
                                            <p className='text-base'>Seeking to broaden his skill set, Nodir transitioned into a Project Manager role at DataDynamicsLtd. This experience allowed him to understand the intricacies of project management, from planning to execution, and strengthened his leadership capabilities.</p>
                                        </div>
                                        <div className='mt-3'>
                                            <h3 className='text-customBlack font-medium mb-2 text-base'>CTO at ByteCraft Innovations (2017-2019)</h3>
                                            <p className='text-base'>Nodir s journey into executive leadership began when he assumed the role of Chief Technology Officer (CTO) at ByteCraft Innovations, a company focused on developing cutting-edge technologies. Here, he spearheaded technological advancements, contributing to the company s reputation for innovation.</p>
                                        </div>
                                        <div className='mt-3'>
                                            <h3 className='text-customBlack font-medium mb-2 text-base'>Co-founder and CEO at Neural Nexus (2019-2022)</h3>
                                            <p className='text-base'>Eager to shape his own vision, Nodir co-founded Neural Nexus, a startup dedicated to pushing the boundaries of machine learning and artificial intelligence. As CEO, he led the company through its formative years, establishing it as a trailblazer in the tech industry.</p>
                                        </div>


                                    </AccordionContent>
                                </AccordionItem>


                                <AccordionItem value="item-2" className="border bg-white px-2 mb-3">
                                    <AccordionTrigger className="font-semibold text-lg">History of organization</AccordionTrigger>
                                    <AccordionContent className="text-gray-400">
                                        <div>
                                            <b className='text-black text-base'>2022. Organization was established</b>
                                            <p className='text-gray-400 mt-1 text-base'>IT - Education Association is a non-governmental non-profit organization aimed at the development and support of education in the field of information and communication technologies.</p>
                                        </div>
                                        <div className='mt-3'>
                                            <b className='text-black text-base'>Following are defined as the main tasks of the IT-educational association</b>
                                            <p className='mt-1 text-base text-gray-400'>Supporting of educational organizations operating in the field of ICT Providing intellectual support in the formation of a single ecosystem in ICT education that takes into account the requirements of the global market;
                                                Introduction of a unified certification system in the field of information and communication technologies;
                                                Formation of the rating of private educational centers in the field and its continuous maintenance;
                                                Implementation of projects on using the experience of compatriots abroad for the development of IT education in Uzbekistan.
                                            </p>
                                        </div>


                                    </AccordionContent>
                                </AccordionItem>



                            </Accordion>
                        </div>



                    </div>




                </div>

            </section>
            <section>
                <div className="max-w-[1190px] w-full px-4 py-4 mb-4 mx-auto">
                    <div className='flex items-center 2xl:justify-between xl:justify-between lg:justify-between md:justify-between sm:justify-between xs:justify-center 2xl:gap-0 xl:gap-0 lg:gap-0 md:gap-0 sm:gap-0 xs:gap-8 mb-8'>
                        <h3 className='text-2xl font-semibold text-gray-500'>Our team 1</h3>
                        <div className='flex gap-3'>
                            <button className="cursor-pointer swiper-button-prev flex items-center justify-center w-9 h-9 rounded-full border"><ArrowLeft color='#A3A3A3' /> </button>
                            <button className="cursor-pointer swiper-button-next flex items-center justify-center w-9 h-9 rounded-full border"> <ArrowRight color='#A3A3A3' /></button>
                        </div>
                    </div>
                    <Swiper

                        slidesPerView={4}
                        slidesPerGroup={1}
                        spaceBetween={30}

                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}

                        breakpoints={{

                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },

                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                            1550: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            }

                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide >

                            <div className='bg-customGray mx-auto w-[266px] py-6 px-6'>
                                <Image src="/images/person.png" width={218} height={206} alt='team-img' priority />
                                <b className='block mt-6 text-3xl font-semibold'>John Jonas</b>
                                <p className='mt-[6px] text-gray-400 text-lg'>CEO & Co-Founder</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-customGray mx-auto w-[266px]  py-6 px-6'>
                                <Image src="/images/person.png" width={218} height={206} alt='team-img' priority />
                                <b className='block mt-6 text-3xl font-semibold'>John Jonas</b>
                                <p className='mt-[6px] text-gray-400 text-lg'>CEO & Co-Founder</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>

                            <div className='bg-customGray mx-auto w-[266px] py-6 px-6'>
                                <Image src="/images/person.png" width={218} height={206} alt='team-img' priority />
                                <b className='block mt-6 text-3xl font-semibold'>John Jonas</b>
                                <p className='mt-[6px] text-gray-400 text-lg'>CEO & Co-Founder</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>

                            <div className='bg-customGray mx-auto w-[266px] py-6 px-6'>
                                <Image src="/images/person.png" width={218} height={206} alt='team-img' priority />
                                <b className='block mt-6 text-3xl font-semibold'>John Jonas</b>
                                <p className='mt-[6px] text-gray-400 text-lg'>CEO & Co-Founder</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-customGray mx-auto w-[266px] py-6 px-6'>
                                <Image src="/images/person.png" width={218} height={206} alt='team-img' priority />
                                <b className='block mt-6 text-3xl font-semibold'>John Jonas</b>
                                <p className='mt-[6px] text-gray-400 text-lg'>CEO & Co-Founder</p>
                            </div>
                        </SwiperSlide>




                    </Swiper>
                </div>
                <div className="max-w-[1190px] w-full px-4 py-4 mb-4 mx-auto">
                    <div className='flex items-center 2xl:justify-between xl:justify-between lg:justify-between md:justify-between sm:justify-between xs:justify-center 2xl:gap-0 xl:gap-0 lg:gap-0 md:gap-0 sm:gap-0 xs:gap-8 mb-8'>
                        <h3 className='text-2xl font-semibold text-gray-500'>Our team 2</h3>
                        <div className='flex gap-3'>
                            <button className="cursor-pointer swiper-button-prev3 flex items-center justify-center w-9 h-9 rounded-full border"><ArrowLeft color='#A3A3A3' /> </button>
                            <button className="cursor-pointer swiper-button-next3 flex items-center justify-center w-9 h-9 rounded-full border"> <ArrowRight color='#A3A3A3' /></button>
                        </div>
                    </div>
                    <Swiper

                        slidesPerView={4}
                        slidesPerGroup={1}
                        spaceBetween={30}

                        navigation={{
                            nextEl: '.swiper-button-next3',
                            prevEl: '.swiper-button-prev3',
                        }}

                        breakpoints={{

                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },

                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                            1550: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            }

                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper "
                    >
                        <SwiperSlide>

                            <div className='bg-customGray w-[266px] mx-auto py-6 px-6'>
                                <Image src="/images/person.png" width={218} height={206} alt='team-img' priority />
                                <b className='block mt-6 text-3xl font-semibold'>John Jonas</b>
                                <p className='mt-[6px] text-gray-400 text-lg'>CEO & Co-Founder</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-customGray w-[266px] mx-auto  py-6 px-6'>
                                <Image src="/images/person.png" width={218} height={206} alt='team-img' priority />
                                <b className='block mt-6 text-3xl font-semibold'>John Jonas</b>
                                <p className='mt-[6px] text-gray-400 text-lg'>CEO & Co-Founder</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>

                            <div className='bg-customGray w-[266px] mx-auto py-6 px-6'>
                                <Image src="/images/person.png" width={218} height={206} alt='team-img' priority />
                                <b className='block mt-6 text-3xl font-semibold'>John Jonas</b>
                                <p className='mt-[6px] text-gray-400 text-lg'>CEO & Co-Founder</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>

                            <div className='bg-customGray w-[266px] mx-auto py-6 px-6'>
                                <Image src="/images/person.png" width={218} height={206} alt='team-img' priority />
                                <b className='block mt-6 text-3xl font-semibold'>John Jonas</b>
                                <p className='mt-[6px] text-gray-400 text-lg'>CEO & Co-Founder</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-customGray w-[266px] mx-auto py-6 px-6'>
                                <Image src="/images/person.png" width={218} height={206} alt='team-img' priority />
                                <b className='block mt-6 text-3xl font-semibold'>John Jonas</b>
                                <p className='mt-[6px] text-gray-400 text-lg'>CEO & Co-Founder</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="max-w-[1190px] w-full px-4 py-4 mb-4 mx-auto">
                    <div className='flex items-center  2xl:justify-between xl:justify-between lg:justify-between md:justify-between sm:justify-between xs:justify-center 2xl:gap-0 xl:gap-0 lg:gap-0 md:gap-0 sm:gap-0 xs:gap-8 mb-8'>
                        <h3 className='text-2xl font-semibold text-gray-500'>Our team 3</h3>
                        <div className='flex gap-3'>
                            <button className="cursor-pointer swiper-button-prev2 flex items-center justify-center w-9 h-9 rounded-full border"><ArrowLeft color='#A3A3A3' /> </button>
                            <button className="cursor-pointer swiper-button-next2 flex items-center justify-center w-9 h-9 rounded-full border"> <ArrowRight color='#A3A3A3' /></button>
                        </div>
                    </div>
                    <Swiper

                        slidesPerView={4}
                        slidesPerGroup={1}
                        spaceBetween={30}

                        navigation={{
                            nextEl: '.swiper-button-next2',
                            prevEl: '.swiper-button-prev2',
                        }}

                        breakpoints={{

                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },

                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                            1550: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            }

                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide >

                            <div className='bg-customGray mx-auto w-[266px] py-6 px-6'>
                                <Image src="/images/person.png" width={218} height={206} alt='team-img' priority />
                                <b className='block mt-6 text-3xl font-semibold'>John Jonas</b>
                                <p className='mt-[6px] text-gray-400 text-lg'>CEO & Co-Founder</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-customGray mx-auto w-[266px]  py-6 px-6'>
                                <Image src="/images/person.png" width={218} height={206} alt='team-img' priority />
                                <b className='block mt-6 text-3xl font-semibold'>John Jonas</b>
                                <p className='mt-[6px] text-gray-400 text-lg'>CEO & Co-Founder</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>

                            <div className='bg-customGray mx-auto w-[266px] py-6 px-6'>
                                <Image src="/images/person.png" width={218} height={206} alt='team-img' priority />
                                <b className='block mt-6 text-3xl font-semibold'>John Jonas</b>
                                <p className='mt-[6px] text-gray-400 text-lg'>CEO & Co-Founder</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>

                            <div className='bg-customGray mx-auto w-[266px] py-6 px-6'>
                                <Image src="/images/person.png" width={218} height={206} alt='team-img' priority />
                                <b className='block mt-6 text-3xl font-semibold'>John Jonas</b>
                                <p className='mt-[6px] text-gray-400 text-lg'>CEO & Co-Founder</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-customGray mx-auto w-[266px] py-6 px-6'>
                                <Image src="/images/person.png" width={218} height={206} alt='team-img' priority />
                                <b className='block mt-6 text-3xl font-semibold'>John Jonas</b>
                                <p className='mt-[6px] text-gray-400 text-lg'>CEO & Co-Founder</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

            </section>
            <section>
                <div className='max-w-[1190px] w-full px-4 py-4 mx-auto'>
                    <span className='text-lg text-gray-400 font-medium'>Subtitle*</span>
                    <h2 className='2xl:text-[52px] xl:text-[52px] lg:text-[52px] md:text-[42px] sm:text-[32px] xs:text-[32px] font-semibold'>History of the organization</h2>
                    <p className='max-w-[767px] w-full text-lg text-gray-400'>IT Education Association was established and registered by the Ministry of Justice of Uzbekistan in the form of on March 23, 2023</p>



                    <div className='mt-12 border-b border-gray-300 pb-12'>
                        <Image className='object-cover' src="/images/about.png" width={1160} height={520} alt='history of the organization' priority />
                    </div>

                    <div className='max-w-[920px] mx-auto w-full px-4'>
                        <p className='self-stretch leading-[150%] mt-5 text-lg text-gray-400'>Lorem ipsum dolor sit amet consectetur. Pharetra sed sagittis in consequat fringilla amet iaculis gravida. Consectetur nulla molestie viverra ut laoreet sed morbi nulla. Nunc dolor mollis justo ut montes tellus. Lorem nulla mauris bibendum tincidunt elementum egestas. Tellus ac tristique morbi sapien praesent sapien eros. Nec mollis dictum eget enim sed.</p>
                        <p className='self-stretch leading-[150%] mt-5 text-lg text-gray-400'>Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur. Ante morbi velit amet in. Consequat viverra nunc turpis in sodales amet lectus in nisl. Nibh metus sit scelerisque scelerisque. Non viverra vel dignissim rutrum massa amet enim. Non pellentesque laoreet risus pellentesque. Vestibulum sed vulputate est facilisi dictum ipsum scelerisque. Sed euismod enim facilisis.</p>
                        <p className='self-stretch leading-[150%] mt-5 text-lg text-gray-400'>Lorem ipsum dolor sit amet consectetur. At laoreet tincidunt luctus ipsum quam velit praesent. Felis tristique ut dignissim libero aliquet habitant velit. Sollicitudin placerat pellentesque sit ut viverra mauris lacus tristique id. In et tincidunt sed eget fames. Faucibus molestie blandit erat sed lectus id iaculis metus tincidunt. Ullamcorper at diam viverra ligula et id lorem faucibus. Sit scelerisque dui hendrerit urna vel. Egestas dis sed posuere tempor leo nunc. Aliquam netus non in.</p>
                        <p className='self-stretch leading-[150%] mt-5 text-lg text-gray-400'>Lorem ipsum dolor sit amet consectetur. Commodo aliquam eu amet pretium venenatis. Pellentesque quis enim lacus adipiscing massa in. Est ornare mauris id amet ornare in. Sollicitudin rutrum sit quis risus pharetra. Id id dolor fringilla.</p>

                        <h3 className='mt-12 text-3xl font-semibold mb-5'>Lorem ipsum dolor sit amet consectetur. Ullamcorper vitae.</h3>
                        <p className='self-stretch leading-[150%] mt-5 text-lg text-gray-400'>Lorem ipsum dolor sit amet consectetur. Condimentum et at nulla non donec mattis consectetur. Id sed vitae ultricies nisi morbi a nibh. Ut porta mi suscipit porta purus. Scelerisque arcu justo molestie fermentum. Mauris ultricies aliquam aliquet condimentum amet nunc. Neque eget rhoncus tellus sit ullamcorper nibh vehicula ac tortor. Tortor etiam vel id.</p>

                        <p className='self-stretch leading-[150%] mt-5 text-lg text-gray-400'>Lorem ipsum dolor sit amet consectetur. Lacus velit eu odio non pretium eu risus volutpat. Pharetra pellentesque justo aliquam consectetur sed viverra. Nunc proin magna sed nisl morbi suspendisse cras tempor faucibus. Dui eu bibendum.</p>


                        <h3 className='font-semibold text-2xl mb-5 mt-5'>2019 year</h3>
                        <p className='self-stretch leading-[150%] mt-5 text-lg text-gray-400'>Lorem ipsum dolor sit amet consectetur. Augue vitae faucibus laoreet condimentum pretium euismod. Id ornare lobortis posuere cum. Neque et odio hac at suspendisse amet at ac id. In nibh quam egestas non est mauris lorem lorem.
                            Tincidunt nascetur neque maecenas feugiat pretium viverra massa tristique. Pulvinar magnis tincidunt in nulla. Purus.</p>


                        <div className='mt-12 mb-12'>
                            <Image src="/images/history.png" width={920} height={520} alt='history about' />
                        </div>

                        <div className='mt-12'>
                            <b className='text-2xl font-semibold'>2020 year</b>
                            <p className='mt-5 text-gray-400 text-lg'>Lorem ipsum dolor sit amet consectetur. Odio senectus tellus nulla porttitor lacinia. Fusce dictum ultricies neque lacinia a ligula tellus. Morbi duis dictumst aenean aliquet sed. Ut aliquam ac eu arcu nisl a accumsan fames enim.</p>

                        </div>

                        <div className='mt-12'>
                            <b className='text-2xl font-semibold'>2021 year</b>
                            <p className='mt-5 text-gray-400 text-lg'>Lorem ipsum dolor sit amet consectetur. Quis volutpat senectus nisl quis quam integer odio vulputate. Praesent neque non rutrum dignissim. Risus diam sagittis dignissim vulputate hendrerit rhoncus ut cursus. Aliquet feugiat scelerisque fermentum praesent nunc vulputate at commodo adipiscing. Tellus urna cras amet nisi sit hac viverra libero orci. Molestie pellentesque a viverra blandit. Velit leo lectus pharetra mauris porttitor suspendisse egestas. Velit gravida cursus sit eget curabitur lectus in. Sodales enim aliquet tempor neque dis tellus. Pharetra proin arcu habitant convallis ultrices. Proin sed malesuada massa tincidunt tempus risus. Est dictumst vehicula id eget semper. Tortor purus consectetur amet elementum placerat ipsum adipiscing tempor.</p>
                        </div>

                        <div className='mt-12'>
                            <b className='text-2xl font-semibold'>2022 year</b>
                            <p className='mt-5 text-gray-400 text-lg'>Lorem ipsum dolor sit amet consectetur. Nibh donec aliquam imperdiet massa. Lobortis convallis accumsan commodo aliquet. Metus urna id faucibus tristique erat sit. Nec mattis orci gravida sit. Cursus nibh proin ut eu amet. Id aenean pulvinar proin arcu.</p>
                        </div>

                    </div>


                    <div className='flex justify-center mt-12 '>
                        <Image className='block max-w-[920px] px-4 w-full' src="/images/team.png" width={920} height={522} alt='team foto' priority />
                    </div>
                    <div className='max-w-[920px] mx-auto w-full px-4'>
                        <p className='mt-12 text-gray-400 text-lg'>Lorem ipsum dolor sit amet consectetur. Id tortor fringilla viverra nulla. Vitae cras congue et pretium. Dictumst velit tellus pharetra morbi. Maecenas sit sapien lectus in vestibulum ullamcorper sem pellentesque in. In pellentesque eget ac turpis. Eu eu velit libero porttitor suspendisse sollicitudin non adipiscing dui. Nunc fusce ornare viverra netus tempor iaculis. Risus tellus lectus iaculis egestas auctor. Cras tellus orci urna aliquet sed lacus eu vitae.
                        </p>

                        <p className='mt-12 text-gray-400 text-lg'>Lorem ipsum dolor sit amet consectetur. In volutpat ut id mauris. Magna euismod cursus pellentesque consequat. Facilisis arcu ut amet nibh tortor sagittis consequat lectus vel. Lacinia in in sit nunc vitae. Cursus enim tincidunt id aliquet mattis dolor sapien in. In montes sed at fermentum eu ac risus est. Pharetra laoreet non ornare volutpat sit fringilla. Faucibus pretium proin et ultrices.
                        </p>

                        <b className='block text-2xl font-semibold mt-12'>2023 year</b>
                        <p className='text-lg text-gray-400 mt-5'>Lorem ipsum dolor sit amet consectetur. Enim sit dignissim nisi massa eget vel. Nulla at sit at scelerisque pellentesque gravida mi. Dictum accumsan vel ornare in adipiscing tincidunt. Vestibulum risus rutrum molestie eget cras eget consectetur diam dignissim. Pellentesque ultrices arcu porttitor at. Accumsan nulla quis tincidunt turpis. Consectetur.</p>


                    </div>


                </div>
            </section>
            <section className='bg-customGray pt-[88px] pb-[120px] 2xl:mt-20 xl:mt-20 lg:mt-20 md:mt-20 sm:mt-10 xs:mt-3'>
                <div className='max-w-[1193px] w-full px-4 py-4 mx-auto'>
                    <span className='text-gray-400 font-medium text-lg'>Structure</span>
                    <h2 className='2xl:text-5xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-4xl xs:text-2xl mb-16 font-semibold max-w-[938px] leading-[120%] text-customBlack'>Lorem ipsum dolor sit amet consectetur. Feugiat nulla sed dui turpis non ultrices.</h2>




                    <div className='flex flex-wrap gap-8 justify-center'>
                        <div className='max-w-[564px] w-full bg-white py-8 px-8 border'>
                            <div className='w-12 h-12 bg-primary rounded-full flex justify-center items-center'>
                                <CircleUser size={28} />
                            </div>
                            <h3 className='mb-3 mt-6 text-2xl font-semibold text-black'>Lorem ipsum dolor sit</h3>
                            <p className='text-gray-400 text-lg self-stretch'>Lorem ipsum dolor sit amet consectetur. Malesuada sollicitudin nunc urna aliquam mattis maecenas purus euismod tempor. Elit quis et nec tristique purus. In elementum gravida at scelerisque.</p>
                        </div>
                        <div className='max-w-[564px] w-full bg-white py-8 px-8 border'>
                            <div className='w-12 h-12 bg-primary rounded-full flex justify-center items-center'>
                                <Trophy size={28} />
                            </div>
                            <h3 className='mb-3 mt-6 text-2xl font-semibold text-black'>Lorem ipsum dolor sit</h3>
                            <p className='text-gray-400 text-lg self-stretch'>Lorem ipsum dolor sit amet consectetur. Malesuada sollicitudin nunc urna aliquam mattis maecenas purus euismod tempor. Elit quis et nec tristique purus. In elementum gravida at scelerisque.</p>
                        </div>
                        <div className='max-w-[564px] w-full bg-white py-8 px-8 border'>
                            <div className='w-12 h-12 bg-primary rounded-full flex justify-center items-center'>
                                <Award size={28} />
                            </div>
                            <h3 className='mb-3 mt-6 text-2xl font-semibold text-black'>Lorem ipsum dolor sit</h3>
                            <p className='text-gray-400 text-lg self-stretch'>Lorem ipsum dolor sit amet consectetur. Malesuada sollicitudin nunc urna aliquam mattis maecenas purus euismod tempor. Elit quis et nec tristique purus. In elementum gravida at scelerisque.</p>
                        </div>
                        <div className='max-w-[564px] w-full bg-white py-8 px-8 border'>
                            <div className='w-12 h-12 bg-primary rounded-full flex justify-center items-center'>
                                <Smile size={28} />
                            </div>
                            <h3 className='mb-3 mt-6 text-2xl font-semibold text-black'>Lorem ipsum dolor sit</h3>
                            <p className='text-gray-400 text-lg self-stretch'>Lorem ipsum dolor sit amet consectetur. Malesuada sollicitudin nunc urna aliquam mattis maecenas purus euismod tempor. Elit quis et nec tristique purus. In elementum gravida at scelerisque.</p>
                        </div>
                    </div>


                </div>

                <div className='max-w-[1193px] w-full px-4 py-4 mx-auto 2xl:mt-52 xl:mt-52 lg:mt-52 md:mt-52 sm:mt-52 xs:mt-10'>
                    <span>Career</span>
                    <h2 className='mt-4 mb-16 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-4xl xs:text-3xl max-w-[938px] leading-[120%] w-full font-semibold'>Lorem ipsum dolor sit amet consectetur. Feugiat nulla sed dui turpis non ultrices.</h2>
                    <p className='self-stretch text-lg leading-[150%] text-gray-400'>Lorem ipsum dolor sit amet consectetur. Magna enim quam vestibulum ullamcorper congue. Lectus massa dignissim velit quis arcu. Pellentesque purus quam scelerisque in nunc. Nulla neque vitae pharetra vestibulum donec id risus adipiscing. Pretium tortor est in lectus. Pellentesque luctus massa id dignissim nunc. Sit commodo enim placerat mauris vel risus cras sit et. Neque nunc ultricies tortor viverra id adipiscing sed.
                        Risus sit dui mauris vitae enim faucibus ultrices. Convallis risus consequat dictum cras curabitur malesuada scelerisque. Habitasse ut ut eu tempor.</p>
                    <p className='mt-5 self-stretch text-lg leading-[150%] text-gray-400'>Lorem ipsum dolor sit amet consectetur. Aliquam iaculis lacus tincidunt ac. Nunc a cursus feugiat mi enim at. Integer egestas convallis malesuada leo. Non dui metus dui laoreet. Posuere eget egestas tristique arcu velit sed pharetra cras malesuada. Purus ut ut sit arcu elementum libero morbi et. Ante morbi egestas ac ultrices viverra quis commodo. Urna sed viverra massa in posuere. Quam adipiscing faucibus adipiscing netus sed id. Tristique tellus sapien urna dictum sagittis. Nisi arcu mi egestas cursus purus. Donec dapibus quam diam praesent ac. Sed dui tellus amet urna. Eu euismod sit.</p>

                </div>


            </section>

        </>
    )
}

export default About