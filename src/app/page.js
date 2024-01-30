import Cars from '@/Components/Cars/Cars'
import Hero from '@/Components/Hero/Hero'
import React from 'react'

export const metadata = {
  title: 'Kanha Tour & Travells - Self Drive Car Rental'
}
export default function page() {
  return (
    <div>
      <Hero/>
      <Cars/>
    </div>
  )
}
