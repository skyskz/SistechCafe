import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function menu() {
  return (
      <div className='menu-page'>
            <h1>Menu</h1>
            <div className='menu'>
                  <Image src="/americano.png"
                        alt="Americano $3.9"
                        width={300}
                        height={400}
                  />

                  <Image src="/cappuccino.png"
                        alt="Cappuccino $3.9"
                        width={300}
                        height={400}
                  />

                  <Image src="/latte.png"
                        alt="Coffee Latte $3.9"
                        width={300}
                        height={400}
                  />

                  <Image src="/dalgona.png"
                        alt="Dalgona Coffee $3.9"
                        width={300}
                        height={400}
                  />

                  <Image src="/matcha.png"
                        alt="Matcha Latte $3.9"
                        width={300}
                        height={400}
                  />

      </div>
    </div>
  )
}

export default menu