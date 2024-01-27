import React from 'react'
import { Award } from 'lucide-react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
function Certification() {
    return (
        <>
            <div className='bg-customGray'>
                <div className='text-center py-20'>
                    <div className='max-w-[130px] mx-auto w-full flex justify-center gap-2 bg-primary py-[5px] rounded-full items-center'>
                        <Award color='#fff' />
                        <span className='text-white text-sm font-medium'>Certification</span>
                    </div>
                    <h1 className='text-[52px] font-semibold text-customBlack'>Certification procedure</h1>
                </div>
                <section className='pb-24'>
                    <div className='max-w-[950px] flex flex-wrap gap-6 w-full mx-auto p-4 bg-white border shadow-md'>
                        <Image src="/images/certification.png" width={500} height={350} alt='Certification' priority />
                        <div className='max-w-[364px] w-full'>
                            <h3 className='text-[32px] font-semibold mt-3'>Certification 1</h3>
                            <p className='mt-4 text-customSilver'>Lorem ipsum dolor sit amet consectetur. Dolor nunc risus mi urna aliquam. Tristique nec tortor senectus sodales. Enim nunc sit a faucibus congue tempus praesent in. Vehicula faucibus mauris gravida augue elementum eget aenean hendrerit ut. Et purus ipsum dolor eu ut maecenas duis cursus. Senectus turpis et rhoncus fermentum non. Mauris.</p>
                            <button className='w-full flex justify-end gap-2 items-center mt-14'>Read More <ChevronDown /></button>
                        </div>

                    </div>

                </section>

            </div>


            <section>
                <div className='max-w-[950px] w-full px-[15px] mx-auto mt-24'>
                    <p className='mt-5 text-lg text-customSilver'>Lorem ipsum dolor sit amet consectetur. Dolor nunc risus mi urna aliquam. Tristique nec tortor senectus sodales. Enim nunc sit a faucibus congue tempus praesent in. Vehicula faucibus mauris gravida augue elementum eget aenean hendrerit ut. Et purus ipsum dolor eu ut maecenas duis cursus. Senectus turpis et rhoncus fermentum non. Mauris.</p>
                    <p className='mt-5 text-lg text-customSilver'>Lorem ipsum dolor sit amet consectetur. Aenean odio eget velit nisl nisl nisl pulvinar. Id posuere tempor sed molestie quis leo. Pulvinar eget justo scelerisque faucibus nibh sit non. Cras enim tempor vitae nisi ac eget quisque.
                        Ullamcorper eu id ultricies in hac euismod porttitor etiam. Mauris tincidunt vulputate quis at risus. Vel sit pharetra vitae.</p>
                    <p className='mt-5 text-lg text-customSilver'>Lorem ipsum dolor sit amet consectetur. Mauris amet interdum neque bibendum eu tincidunt tempus sagittis. Arcu etiam tellus vel urna sagittis in. Netus libero arcu aliquet semper. Nisl lacus amet id donec nulla dui purus blandit. Nisl eget porta mollis morbi a nec rhoncus ipsum auctor. Mi sed eros pretium non sed lacinia orci scelerisque. Interdum nisl lectus blandit viverra suspendisse duis nisi volutpat aliquam.
                    </p>
                </div>
                <div className='max-w-[950px] w-full px-[15px] mx-auto mt-14'>
                    <h3 className='text-[32px] font-semibold'>Device Data</h3>
                    <p className='mt-5 text-lg text-customSilver'>When you visit our website or interact with our services, we may automatically collect data about your device, such as:</p>

                    <ul className='list-disc ml-5 mt-5'>
                        <li className='text-lg text-customSilver'>Device Type</li>
                        <li className='text-lg text-customSilver'>Operating System</li>
                        <li className='text-lg text-customSilver'>Unique device identifiers</li>
                    </ul>
                    <p className='text-lg text-customSilver mt-5'>Data we collect can depend on the individual settings of your device and software. We recommend checking the policies of your device manufacturer or software provider to learn what information they make available to us.</p>

                </div>
                <div className='max-w-[950px] w-full px-[15px] mx-auto mt-12'>
                    <h3 className='text-[32px] font-semibold'>Personal Information</h3>
                    <p className='mt-5 text-customSilver text-lg'>Lorem ipsum dolor sit amet consectetur. Tristique tincidunt mauris habitasse tristique in et ac justo. At orci sed eget cras. Commodo pellentesque nibh nisi nunc mi a sed nunc. Ut dignissim ac egestas urna neque cum consequat. Arcu.</p>
                    <ul className='list-disc ml-5 mt-5'>
                        <li className='text-lg text-customSilver'>Name</li>
                        <li className='text-lg text-customSilver'>Email</li>
                    </ul>
                </div>
                <div className='max-w-[950px] w-full px-[15px] mx-auto mt-12'>
                    <h3 className='text-[32px] font-semibold'>Legitimate Reasons for Processing Your Personal Information</h3>
                    <p className='text-lg text-customSilver mt-5'>Lorem ipsum dolor sit amet consectetur. Auctor integer nunc sem urna. Aliquet elit sed in dolor lectus sed mauris sed. Aenean consectetur quam diam a tortor enim in volutpat. Ultricies ultricies urna rhoncus elit. Sit sit dui in a et nec.</p>
                </div>

                <div className='max-w-[950px] w-full mx-auto px-[15px] mt-12'>
                    <h3 className='text-[32px] font-semibold'>Collection and Use of Information</h3>
                    <p className='text-lg text-customSilver mt-5'>We may collect personal information from you when you do any of the following on our website:</p>

                    <ul className='mt-5 list-disc ml-5 flex flex-col gap-3'>
                        <li className='text-lg text-customSilver'>Register for an account</li>
                        <li className='text-lg text-customSilver'>Sign up to receive updates from us via email or social media channels</li>
                        <li className='text-lg text-customSilver'>Use a mobile device or web browser to access our content</li>
                        <li className='text-lg text-customSilver'>Contact us via email, social media, or on any similar technologies</li>
                        <li className='text-lg text-customSilver'>When you mention us on social media</li>
                    </ul>
                    <p className='mt-5 text-lg text-customSilver'>We may collect, hold, use, and disclose information for the following purposes, and personal information will not be further processed in a manner that is incompatible with these purposes:</p>

                    <ul className='list-disc ml-5 flex flex-col gap-3 mt-5'>
                        <li className='text-lg text-customSilver'> to provide you with our platform s core features and services</li>
                        <li className='text-lg text-customSilver'>to enable you to customize or personalize your experience of our website</li>
                        <li className='text-lg text-customSilver'>to deliver products and/or services to you</li>
                        <li className='text-lg text-customSilver'>to contact and communicate with you</li>
                        <li className='text-lg text-customSilver'>to enable you to access and use our website, associated applications, and associated social media platforms</li>
                        <li className='text-lg text-customSilver'>to comply with our legal obligations and resolve any disputes that we may have</li>
                        <li className='text-lg text-customSilver'>for security and fraud prevention, and to ensure that our sites and apps are safe, secure, and used in line with our terms of use</li>
                    </ul>
                    <p className='mt-5 text-lg text-customSilver'>Lorem ipsum dolor sit amet consectetur. Nisl tortor nam viverra etiam tellus sed. Habitasse interdum non nulla viverra fermentum. Sed mattis tincidunt id mauris sit vitae etiam platea. Felis eleifend eget et neque aliquam at sed dignissim. Habitant ultricies id ipsum diam in faucibus. Interdum mauris blandit turpis adipiscing neque felis vitae integer. Senectus pharetra tincidunt sapien cras enim sodales sed. Et nec bibendum in pellentesque justo arcu facilisi. Orci ipsum leo.</p>
                    <div className='max-w-[920px] w-full border mt-16'></div> 

                </div>

            </section>
        </>
    )
}

export default Certification
