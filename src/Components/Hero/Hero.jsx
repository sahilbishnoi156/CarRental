/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import CarouselBasicExample from '../Carousels/Carousel1'


export default function Hero() {
  return (
    <div className='mt-4 px-8'>
        {/* <img src="https://assets.cars24.com/production/c2b-website/240112175709/js/d8e03eca1c5e5bcf4363a9191a0a406b.webp" alt="notfound" className=' rounded-xl' /> */}
        <CarouselBasicExample/>
    </div>
  )
}
