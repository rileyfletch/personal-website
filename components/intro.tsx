'use client';

import Image from 'next/image'
import React from 'react'
import placeholder from '@/public/placeholder.jpg';
import { animate, motion } from 'framer-motion';

export default function Intro() {
  return (
    <section>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div 
                    className="div"
                    initial={{ opacity: 0 , scale: 0}}
                    animate={{ opacity: 1, scale: 1}}>
                    <Image 
                    src={placeholder} 
                    alt="test" 
                    width={192} 
                    height={192} 
                    quality={95}
                    priority={true}
                    className='h-24 w-24 rounded-full object-cover shadow-xl border-[0.35rem] border-white'></Image>
                </motion.div>
            </div>
        </div>
        <p>
            Howdy
        </p>
    </section>
  )
}
