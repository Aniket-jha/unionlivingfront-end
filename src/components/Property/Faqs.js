import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
const Faqs = ({faqs}) => {
  return (
    <div id="faqs" className='flex items-center justify-center flex-col  mt-12  w-[100%] lg:px-12 lg:py-12  rounded-xl  ' >
        <div className='my-4' >
            <h1 className='font-bold font-[Neue Haas Grotesk Display Pro] text-3xl text-center mb-4' >Questions</h1>
        </div>
        <div className='my-6 w-[100%] lg:w-[800px]' >
        {
            faqs && faqs.map((faq,key)=>(
                  <Disclosure className="" >
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full my-6 font-[Neue Haas Grotesk Display Pro] justify-between rounded-lg bg-white border-b-[1px] border-[#d0d0d0] px-6 py-4 text-left text-lg font-medium  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className=''>{faq.question}</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-6 w-6 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500">
                {faq.answers}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
            ))
        }
          
        
        </div>
    </div>
  )
}

export default Faqs