import React from 'react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'


function AccordionMembership() {
    return (

        <Accordion
            type="single"
            collapsible
            className="w-full  max-w-[1040px] mx-auto px-3"
        >
            <AccordionItem
                value="item-1"
                className="border px-2 mb-3 bg-white"
                defaultValue="item-1"
            >
                <AccordionTrigger className="w-full font-semibold">
                    <p className='truncate'>Lorem ipsum dolor sit amet consectetur. Mattis ut ullamcorper
                        platea porttitor nulla. Commodo duis ultrices lobortis eget.</p>
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                    Lorem ipsum dolor sit amet consectetur. Porttitor sagittis nisl
                    egestas amet convallis erat ultrices. Risus eleifend elementum
                    nibh praesent interdum pellentesque est id. Eu feugiat morbi
                    dictum imperdiet interdum lacus. Gravida nisi malesuada rhoncus
                    amet. Et praesent sed molestie purus risus nulla sit proin. Eget
                    dignissim nunc ipsum adipiscing elementum viverra viverra mollis
                    pellentesque. Vulputate nunc nunc phasellus ut massa.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border bg-white  px-2 mb-3">
                <AccordionTrigger className="font-semibold">
                    Is it styled?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                    Yes. It comes with default styles that matches the other
                    component aesthetic.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border bg-white px-2 mb-3">
                <AccordionTrigger className="font-semibold">
                    Is it animated?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                    Yes. It s animated by default, but you can disable it if you
                    prefer.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border bg-white px-2 mb-3">
                <AccordionTrigger className="font-semibold">
                    Is it animated?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                    Yes. It s animated by default, but you can disable it if you
                    prefer.
                </AccordionContent>
            </AccordionItem>
        </Accordion>

    )
}

export default AccordionMembership
