import Image from 'next/image'
import React from 'react'
import placeholder from '@/public/placeholder.jpg';

export default function Intro() {
  return (
    <section>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <Image 
                src={placeholder} 
                alt="test" 
                width={192} 
                height={192} 
                quality={95}
                priority={true}
                className='h-24 w-24 rounded-full object-cover shadow-xl border-[0.35rem] border-white'></Image>
            </div>
        </div>
    </section>
  )
}
