import Link from 'next/link'
import React from 'react'
import { ArrowRight } from 'lucide-react';
function Category() {
  return (
    <div>
      <div className='mt-16 text-center mb-[88px]'>
        <h1 className='mb-4 font-semibold text-5xl 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-5xl xs:text-4xl'>Digital Leadership Forum</h1>
        <p className='text-gray-400 text-lg xs:px-3'>Lorem ipsum dolor sit amet consectetur. Nisi ut dictum ut ultricies at sed. Neque in sed.</p>
      </div>

      <div className='flex flex-col gap-10 mb-24'>
        <div className='max-w-[1194px] w-full border mx-auto shadow-md bg-white p-10'>
          <span className='font-medium text-customSilver'>October 23, 2023</span>
          <h3 className='text-[32px] font-semibold'>Accenture on the future of payments and financial automation</h3>
          <p className='text-customSilver max-w-[1080px] w-full mt-4'>Vel egestas ultrices condimentum consectetur enim non elit aenean lacus. Justo rutrum libero urna id quis ipsum. Dictumst vel posuere nec lobortis. Porttitor pretium aenean non pellentesque nunc ultrices commodo sagittis sed. Vulputate duis quis lorem lectus. Et ut viverra eros vulputate.</p>
          <Link href={'/events/category/details'} className='flex mt-10 justify-center items-center gap-2 rounded-full max-w-[160px] w-full bg-primary py-4'>
            <span className='text-white'>Learn More</span>
            <ArrowRight color='#fff' />
          </Link>

        </div>
        <div className='max-w-[1194px] w-full border mx-auto shadow-md bg-white p-10'>
          <span className='font-medium text-customSilver'>October 23, 2023</span>
          <h3 className='text-[32px] font-semibold'>Accenture on the future of payments and financial automation</h3>
          <p className='text-customSilver max-w-[1080px] w-full mt-4'>Vel egestas ultrices condimentum consectetur enim non elit aenean lacus. Justo rutrum libero urna id quis ipsum. Dictumst vel posuere nec lobortis. Porttitor pretium aenean non pellentesque nunc ultrices commodo sagittis sed. Vulputate duis quis lorem lectus. Et ut viverra eros vulputate.</p>
          <Link href={'#'} className='flex mt-10 justify-center items-center gap-2 rounded-full max-w-[160px] w-full bg-primary py-4'>
            <span className='text-white'>Learn More</span>
            <ArrowRight color='#fff' />
          </Link>

        </div>
        <div className='max-w-[1194px] w-full border mx-auto shadow-md bg-white p-10'>
          <span className='font-medium text-customSilver'>October 23, 2023</span>
          <h3 className='text-[32px] font-semibold'>Accenture on the future of payments and financial automation</h3>
          <p className='text-customSilver max-w-[1080px] w-full mt-4'>Vel egestas ultrices condimentum consectetur enim non elit aenean lacus. Justo rutrum libero urna id quis ipsum. Dictumst vel posuere nec lobortis. Porttitor pretium aenean non pellentesque nunc ultrices commodo sagittis sed. Vulputate duis quis lorem lectus. Et ut viverra eros vulputate.</p>
          <Link href={'#'} className='flex mt-10 justify-center items-center gap-2 rounded-full max-w-[160px] w-full bg-primary py-4'>
            <span className='text-white'>Learn More</span>
            <ArrowRight color='#fff' />
          </Link>

        </div>
      </div>

    </div>
  )
}

export default Category


