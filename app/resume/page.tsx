import React from 'react'
import dynamic from 'next/dynamic';
import { ResumeNew } from '@/components/ResumeNew';
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Franky Kyaw Resume',
  description: 'Download Resume Page',
}


const Resume = () => {
  return (
    <div className='flex justify-center h-full mt-24'>
        {/* <div className='flex mt-10 items-center justify-content h-full'> */}
          <ResumeNew/>
        {/* </div> */}
        
    </div>
  )
}

export default Resume;