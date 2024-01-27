import React from 'react'
import Image from 'next/image'

function Partners() {
  return (
    <>
      <div className='bg-customGray py-20'>
        <div className='max-w-[130px] mx-auto rounded-full py-[5px] w-full bg-primary flex justify-center gap-2 items-center'>
          <Image src="icons/data.svg" width={18} height={18} alt='data logo' priority />
          <span className='text-white'>For Partners</span>
        </div>
        <h1 className='2xltext-[68px] xl:text-[68px] lg:text-[68px] md:text-[68px] sm:text-[48px] xs:text-[40px] text-center mx-auto leading-[120%] mt-4 font-semibold max-w-[900px] w-full px-[15px]'>Lorem ipsum dolor sit amet consectetur. Ac viverra.</h1>

        <p className='text-customSilver text-lg text-center max-w-[840px] w-full mx-auto px-[15px] mt-4'>Lorem ipsum dolor sit amet consectetur. Eleifend tortor vitae lacus augue mi. Lectus ac justo morbi nunc. Aliquam elementum faucibus pharetra dignissim interdum elit. Pellentesque proin risus diam vel in. Neque.</p>


      </div>
      <section className='mt-24 pb-24'>
        <Image className='mx-auto object-cover' priority src="/images/ForPartners.png" width={1160} height={520} alt='image For Partners' />

        <div className='max-w-[1160px] mx-auto mt-12 mb-12 w-full border-t'></div>
        <div className='max-w-[950px] mx-auto w-full px-[15px]'>
          <p className='text-lg text-customSilver mt-5'>Lorem ipsum dolor sit amet consectetur. Pharetra sed sagittis in consequat fringilla amet iaculis gravida. Consectetur nulla molestie viverra ut laoreet sed morbi nulla. Nunc dolor mollis justo ut montes tellus. Lorem nulla mauris bibendum tincidunt elementum egestas. Tellus ac tristique morbi sapien praesent sapien eros. Nec mollis dictum eget enim sed.</p>
          <p className='text-lg text-customSilver mt-5'>Lorem ipsum dolor sit amet consectetur. Ante morbi velit amet in. Consequat viverra nunc turpis in sodales amet lectus in nisl. Nibh metus sit scelerisque scelerisque. Non viverra vel dignissim rutrum massa amet enim. Non pellentesque laoreet risus pellentesque. Vestibulum sed vulputate est facilisi dictum ipsum scelerisque. Sed euismod enim facilisis.</p>

          <p className='text-lg text-customSilver mt-5'>Lorem ipsum dolor sit amet consectetur. At laoreet tincidunt luctus ipsum quam velit praesent. Felis tristique ut dignissim libero aliquet habitant velit. Sollicitudin placerat pellentesque sit ut viverra mauris lacus tristique id. In et tincidunt sed eget fames. Faucibus molestie blandit erat sed lectus id iaculis metus tincidunt. Ullamcorper at diam viverra ligula et id lorem faucibus. Sit scelerisque dui hendrerit urna vel. Egestas dis sed posuere tempor leo nunc. Aliquam netus non in.</p>
          <p className='text-lg text-customSilver mt-5'>Lorem ipsum dolor sit amet consectetur. Commodo aliquam eu amet pretium venenatis. Pellentesque quis enim lacus adipiscing massa in. Est ornare mauris id amet ornare in. Sollicitudin rutrum sit quis risus pharetra. Id id dolor fringilla.</p>

          <div className='mt-12'>
            <h3 className='text-[32px] font-semibold'>Lorem ipsum dolor sit amet consectetur. Ullamcorper vitae.</h3>
            <p className='mt-5 text-customSilver text-lg'>Lorem ipsum dolor sit amet consectetur. Condimentum et at nulla non donec mattis consectetur. Id sed vitae ultricies nisi morbi a nibh. Ut porta mi suscipit porta purus. Scelerisque arcu justo molestie fermentum. Mauris ultricies aliquam aliquet condimentum amet nunc. Neque eget rhoncus tellus sit ullamcorper nibh vehicula ac tortor. Tortor etiam vel id.</p>
            <p className='mt-5 text-customSilver text-lg'>Lorem ipsum dolor sit amet consectetur. Lacus velit eu odio non pretium eu risus volutpat. Pharetra pellentesque justo aliquam consectetur sed viverra. Nunc proin magna sed nisl morbi suspendisse cras tempor faucibus. Dui eu bibendum.</p>
          </div>


        </div>


      </section>
      <section className='bg-customGray'>
        <div className='max-w-[1190px] w-full mx-auto py-[15px] '>
          <h2 className='ml-4 text-[52px] font-semibold mb-12'>National Partners</h2>
          <div className='flex flex-wrap justify-center gap-8'>
            <div className='max-w-[365px] w-full bg-white border shadow-md min-h-[215px] p-6'>
              <Image src="/icons/carts/Mailchimp.svg" height={48} width={48} alt='Partners icon' priority />
              <h3 className='mt-6 text-2xl font-semibold'>Mailchimp</h3>
              <p className='mt-3 text-customSilver self-stretch max-w-[300px] w-full'>Test your product idea by launching payments with little to no code.</p>
            </div>
            <div className='max-w-[365px] w-full bg-white border shadow-md min-h-[215px] p-6'>
              <Image src="/icons/carts/CovertKit.svg" height={48} width={48} alt='Partners icon' priority />
              <h3 className='mt-6 text-2xl font-semibold'>Mailchimp</h3>
              <p className='mt-3 text-customSilver self-stretch max-w-[300px] w-full'>Test your product idea by launching payments with little to no code.</p>
            </div>
            <div className='max-w-[365px] w-full bg-white border shadow-md min-h-[215px] p-6'>
              <Image src="/icons/carts/Zapier.svg" height={48} width={48} alt='Partners icon' priority />
              <h3 className='mt-6 text-2xl font-semibold'>Mailchimp</h3>
              <p className='mt-3 text-customSilver self-stretch max-w-[300px] w-full'>Test your product idea by launching payments with little to no code.</p>
            </div>
            <div className='max-w-[365px] w-full bg-white border shadow-md min-h-[215px] p-6'>
              <Image src="/icons/carts/AirDev.svg" height={48} width={48} alt='Partners icon' priority />
              <h3 className='mt-6 text-2xl font-semibold'>Mailchimp</h3>
              <p className='mt-3 text-customSilver self-stretch max-w-[300px] w-full'>Test your product idea by launching payments with little to no code.</p>
            </div>
            <div className='max-w-[365px] w-full bg-white border shadow-md min-h-[215px] p-6'>
              <Image src="/icons/carts/BookingAutopilot.svg" height={48} width={48} alt='Partners icon' priority />
              <h3 className='mt-6 text-2xl font-semibold'>Mailchimp</h3>
              <p className='mt-3 text-customSilver self-stretch max-w-[300px] w-full'>Test your product idea by launching payments with little to no code.</p>
            </div>
            <div className='max-w-[365px] w-full bg-white border shadow-md min-h-[215px] p-6'>
              <Image className='rounded-full' src="/icons/carts/Amazon.svg" height={48} width={48} alt='Partners icon' priority />
              <h3 className='mt-6 text-2xl font-semibold'>Mailchimp</h3>
              <p className='mt-3 text-customSilver self-stretch max-w-[300px] w-full'>Test your product idea by launching payments with little to no code.</p>
            </div>
            <div className='max-w-[365px] w-full bg-white border shadow-md min-h-[215px] p-6'>
              <Image src="/icons/carts/Dropbox.svg" height={48} width={48} alt='Partners icon' priority />
              <h3 className='mt-6 text-2xl font-semibold'>Mailchimp</h3>
              <p className='mt-3 text-customSilver self-stretch max-w-[300px] w-full'>Test your product idea by launching payments with little to no code.</p>
            </div>
            <div className='max-w-[365px] w-full bg-white border shadow-md min-h-[215px] p-6'>
              <Image src="/icons/carts/Intercomm.svg" height={48} width={48} alt='Partners icon' priority />
              <h3 className='mt-6 text-2xl font-semibold'>Mailchimp</h3>
              <p className='mt-3 text-customSilver self-stretch max-w-[300px] w-full'>Test your product idea by launching payments with little to no code.</p>
            </div>
            <div className='max-w-[365px] w-full bg-white border shadow-md min-h-[215px] p-6'>
              <Image src="/icons/carts/google.svg" height={48} width={48} alt='Partners icon' priority />
              <h3 className='mt-6 text-2xl font-semibold'>Mailchimp</h3>
              <p className='mt-3 text-customSilver self-stretch max-w-[300px] w-full'>Test your product idea by launching payments with little to no code.</p>
            </div>
          </div>
          <button className='bg-primary mt-12 block mx-auto max-w-[160px] w-full py-4 text-center rounded-full text-white font-semibold'>View more</button>
        </div>
        <div className='max-w-[1190px] w-full mx-auto py-[15px] mt-12 pb-24'>
          <h2 className='ml-4 text-[52px] font-semibold mb-12'>Global Partners</h2>
          <div className='flex flex-wrap justify-center gap-8'>
            <div className='max-w-[365px] w-full bg-white border shadow-md min-h-[215px] p-6'>
              <Image src="/icons/carts/Mailchimp.svg" height={48} width={48} alt='Partners icon' priority />
              <h3 className='mt-6 text-2xl font-semibold'>Mailchimp</h3>
              <p className='mt-3 text-customSilver self-stretch max-w-[300px] w-full'>Test your product idea by launching payments with little to no code.</p>
            </div>
            <div className='max-w-[365px] w-full bg-white border shadow-md min-h-[215px] p-6'>
              <Image src="/icons/carts/CovertKit.svg" height={48} width={48} alt='Partners icon' priority />
              <h3 className='mt-6 text-2xl font-semibold'>Mailchimp</h3>
              <p className='mt-3 text-customSilver self-stretch max-w-[300px] w-full'>Test your product idea by launching payments with little to no code.</p>
            </div>
            <div className='max-w-[365px] w-full bg-white border shadow-md min-h-[215px] p-6'>
              <Image src="/icons/carts/Zapier.svg" height={48} width={48} alt='Partners icon' priority />
              <h3 className='mt-6 text-2xl font-semibold'>Mailchimp</h3>
              <p className='mt-3 text-customSilver self-stretch max-w-[300px] w-full'>Test your product idea by launching payments with little to no code.</p>
            </div>
            <div className='max-w-[365px] w-full bg-white border shadow-md min-h-[215px] p-6'>
              <Image src="/icons/carts/AirDev.svg" height={48} width={48} alt='Partners icon' priority />
              <h3 className='mt-6 text-2xl font-semibold'>Mailchimp</h3>
              <p className='mt-3 text-customSilver self-stretch max-w-[300px] w-full'>Test your product idea by launching payments with little to no code.</p>
            </div>
            <div className='max-w-[365px] w-full bg-white border shadow-md min-h-[215px] p-6'>
              <Image src="/icons/carts/BookingAutopilot.svg" height={48} width={48} alt='Partners icon' priority />
              <h3 className='mt-6 text-2xl font-semibold'>Mailchimp</h3>
              <p className='mt-3 text-customSilver self-stretch max-w-[300px] w-full'>Test your product idea by launching payments with little to no code.</p>
            </div>
            <div className='max-w-[365px] w-full bg-white border shadow-md min-h-[215px] p-6'>
              <Image className='rounded-full' src="/icons/carts/Amazon.svg" height={48} width={48} alt='Partners icon' priority />
              <h3 className='mt-6 text-2xl font-semibold'>Mailchimp</h3>
              <p className='mt-3 text-customSilver self-stretch max-w-[300px] w-full'>Test your product idea by launching payments with little to no code.</p>
            </div>
            <div className='max-w-[365px] w-full bg-white border shadow-md min-h-[215px] p-6'>
              <Image src="/icons/carts/Dropbox.svg" height={48} width={48} alt='Partners icon' priority />
              <h3 className='mt-6 text-2xl font-semibold'>Mailchimp</h3>
              <p className='mt-3 text-customSilver self-stretch max-w-[300px] w-full'>Test your product idea by launching payments with little to no code.</p>
            </div>
            <div className='max-w-[365px] w-full bg-white border shadow-md min-h-[215px] p-6'>
              <Image src="/icons/carts/Intercomm.svg" height={48} width={48} alt='Partners icon' priority />
              <h3 className='mt-6 text-2xl font-semibold'>Mailchimp</h3>
              <p className='mt-3 text-customSilver self-stretch max-w-[300px] w-full'>Test your product idea by launching payments with little to no code.</p>
            </div>
            <div className='max-w-[365px] w-full bg-white border shadow-md min-h-[215px] p-6'>
              <Image src="/icons/carts/google.svg" height={48} width={48} alt='Partners icon' priority />
              <h3 className='mt-6 text-2xl font-semibold'>Mailchimp</h3>
              <p className='mt-3 text-customSilver self-stretch max-w-[300px] w-full'>Test your product idea by launching payments with little to no code.</p>
            </div>
          </div>
          <button className='bg-primary mt-12 block mx-auto max-w-[160px] w-full py-4 text-center rounded-full text-white font-semibold'>View more</button>
        </div>


      </section>

    </>
  )
}

export default Partners
