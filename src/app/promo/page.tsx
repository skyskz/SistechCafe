import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function page() {
  return (
    <section className='promo-section'>

      <div className='poster-wrapper'>
        <Image src="/promo.png"
        alt="Today's Promotion Poster"
        width={300}
        height={400}
        />
      </div>

      <div className='promo-content'>
        <span className='promo-badge'>Today's Special Promotion!</span>
        <h1 className='promo-title'>I DO<s>N'T</s> CARE IF MONDAY'S BLUE</h1>
        <p className='promo-desc'>We’re bringing a little extra color (and sweetness!) to the cafe, and you're officially invited. Gather your besties, dress up in your favorite blue looks, and come hang out with us.
          When you buy any drink while wearing blue, your donut is completely on us. 💙</p>
        
        <ul className='promo-list'>
            <li>When: Monday, June 15th, from 8 AM - 7 PM</li>
            <li>Where: Sistech Cafe</li>
            <li>The Rule: Just ensure your blue clothing item is visible (tops, dresses, pants, or jackets all counts!) <i>Limit one free donut per customer.</i>
            </li>
        </ul>

        <div className='buttons'><Link href='/menu'>See Our Menu</Link></div>

      </div>

    </section>
  )
}

export default page