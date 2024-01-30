import Cars from '@/Components/Cars/Cars'
import Hero from '@/Components/Hero/Hero'
import React from 'react'

export const metadata = {
  title: 'Kanha Tour & Travells - Self Drive Car Rental',
  description:
    "Experience the freedom and flexibility of exploring your destination at your own pace with our reliable and convenient self-drive car rental service.",
}
export default function page() {
  return (
    <div>
      <Hero/>
      <Cars/>
    </div>
  )
}
